import assert from 'node:assert/strict'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'

// Run pnpm test and pnpm build, then start the production server before this script.
const require = createRequire(import.meta.url)
const { getCategories, getGuides } = require('../.validation/content-tests/modules/content/services/content-service.js')
const base = new URL(process.argv[2] ?? 'http://localhost:3100')
assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(base.hostname), 'Use um servidor local de validação')
const guides = getGuides()
const routes = ['/', '/busca', '/faq', '/sobre', ...getCategories().map((category) => `/${category.slug}`), ...guides.map((guide) => `/${guide.category}/${guide.slug}`)]
const decode = (text) => text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>')
const pages = new Map()
const links = new Set()
const results = []

async function fetchLocal(path) {
  const url = new URL(path, base)
  assert.equal(url.origin, base.origin)
  return fetch(url, { signal: AbortSignal.timeout(30000) })
}

for (const path of routes) {
  const response = await fetchLocal(path)
  assert.equal(response.status, 200, path)
  const html = await response.text()
  pages.set(path, html)
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${path}: h1 único`)
  assert.equal([...html.matchAll(/id="main-content"/g)].length, 1, `${path}: destino do skip link`)
  assert.ok(html.includes('href="#main-content"'), `${path}: skip link`)
  assert.ok(!/<meta[^>]+content="[^"]*noindex/.test(html), `${path}: indexável`)
  const title = decode(html.match(/<title>(.*?)<\/title>/)?.[1] ?? '')
  assert.ok(title.includes('Rumo'), `${path}: título`)
  const guide = guides.find((item) => `/${item.category}/${item.slug}` === path)
  if (guide) assert.equal(title, `${guide.title} | Rumo`)
  assert.ok(/<meta name="description" content="[^"]+"/.test(html), `${path}: descrição`)
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
  assert.equal(new Set(ids).size, ids.length, `${path}: IDs duplicados`)
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const url = new URL(decode(match[1]), new URL(path, base))
    if (url.origin !== base.origin) continue
    links.add(url.pathname + url.search)
    if (url.hash && url.pathname === path) assert.ok(ids.includes(decodeURIComponent(url.hash.slice(1))), `${path}: ${url.hash}`)
  }
  results.push({ path, status: response.status, title, htmlBytes: Buffer.byteLength(html) })
}

for (const path of links) {
  if (pages.has(path)) continue
  const response = await fetchLocal(path)
  assert.equal(response.status, 200, `Link interno: ${path}`)
  if (path.endsWith('.docx')) {
    const downloaded = Buffer.from(await response.arrayBuffer())
    assert.deepEqual(downloaded, readFileSync(`public${path}`), 'DOCX servido integralmente')
  }
}

for (const path of ['/categoria-inexistente', '/estudar/guia-inexistente', `/enem/${guides[0].slug}`, '/estudar/guia-inexistente/extra']) {
  const response = await fetchLocal(path)
  const html = await response.text()
  assert.equal(response.status, 404, `${path}: HTTP 404 real`)
  assert.ok(html.includes('noindex'), `${path}: noindex`)
  assert.ok(html.includes('Página não encontrada.'), `${path}: página de recuperação`)
  results.push({ path, status: response.status })
}

const searchHtml = pages.get('/busca')
for (const guide of guides) assert.ok(searchHtml.includes(`href="/${guide.category}/${guide.slug}"`), `Busca: ${guide.slug}`)
const scriptUrls = [...new Set([...searchHtml.matchAll(/<script[^>]+src="([^"]+)"/g)].map((match) => decode(match[1])))]
let searchJsBytes = 0
for (const path of scriptUrls) {
  const response = await fetchLocal(path)
  assert.equal(response.status, 200)
  const js = await response.text()
  searchJsBytes += Buffer.byteLength(js)
  assert.ok(!js.includes(guides[0].sections[0].paragraphs[0]), 'Texto editorial fora do bundle de busca')
}
const stylesheetUrls = new Set()
const imageUrls = new Set()
for (const html of pages.values()) {
  for (const match of html.matchAll(/<link\b[^>]*href="([^"]+\.css[^\"]*)"/g)) stylesheetUrls.add(decode(match[1]))
  for (const match of html.matchAll(/<img\b[^>]*src="([^"]+)"/g)) imageUrls.add(decode(match[1]))
}
for (const path of [...stylesheetUrls, ...imageUrls]) assert.equal((await fetchLocal(path)).status, 200, path)
const summary = { validPages: routes.length, internalLinks: links.size, invalidPages: 4, stylesheets: stylesheetUrls.size, images: imageUrls.size, searchJsBytes, results }
mkdirSync('.validation', { recursive: true })
writeFileSync('.validation/routes-after.json', JSON.stringify(summary, null, 2))
console.log({ ...summary, results: `${results.length} resultados em .validation/routes-after.json` })

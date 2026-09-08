import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import * as content from '../modules/content/services/content-service'
import { searchGuides } from '../modules/content/services/search-service'

const guides = content.getGuides()
const categories = content.getCategories()
const counts: Record<string, number> = {
  estudar: 15, 'pesquisa-ia': 10, enem: 12,
  'ensino-superior': 11, carreira: 14, inclusao: 8,
}
const nonempty = (value: string) => assert.ok(typeof value === 'string' && value.trim())

test('70 guias canônicos, arquivos individuais e índices sem órfãos ou duplicatas', () => {
  const specification = readFileSync('docs/desenvolvimento/prompt-mestre-povoamento-70-guias-rumo.md', 'utf8')
  assert.equal(guides.length, 70)
  assert.equal(new Set(guides.map((guide) => guide.slug)).size, 70)
  assert.deepEqual(categories.map((category) => category.slug).sort(), Object.keys(counts).sort())
  for (const category of categories) {
    const directory = join('modules/content/data/guides', category.slug)
    const files = readdirSync(directory).filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    const group = content.getGuidesByCategory(category.slug)
    assert.equal(group.length, counts[category.slug])
    assert.deepEqual(files.sort(), group.map((guide) => `${guide.slug}.ts`).sort())
    for (const guide of group) {
      assert.ok(specification.includes(guide.slug), guide.slug)
      assert.equal(content.getGuideByCategoryAndSlug(category.slug, guide.slug), guide)
      assert.equal(content.getGuideByCategoryAndSlug('inexistente', guide.slug), undefined)
    }
  }
})

test('campos, seções renderizáveis, fontes e relações são íntegros', () => {
  for (const guide of guides) {
    for (const value of [guide.slug, guide.category, guide.title, guide.summary, guide.description]) nonempty(value)
    assert.ok(Number.isFinite(guide.readTime) && guide.readTime > 0)
    assert.ok(guide.tags.length > 0)
    guide.tags.forEach(nonempty)
    assert.ok(guide.sections.length > 0)
    assert.equal(new Set(guide.sections.map((section) => section.id)).size, guide.sections.length)
    for (const section of guide.sections) {
      nonempty(section.id)
      nonempty(section.title)
      const text = [...section.paragraphs, ...(section.bullets ?? []), ...(section.tips ?? []), ...(section.examples ?? [])]
      if (section.warning) text.push(section.warning)
      if (section.note) text.push(section.note)
      assert.ok(text.length > 0, `${guide.slug}#${section.id}`)
      text.forEach(nonempty)
    }
    for (const source of guide.sources ?? []) {
      nonempty(source.label)
      assert.equal(new URL(source.url).protocol, 'https:')
    }
    for (const slug of guide.relatedGuides ?? []) {
      assert.notEqual(slug, guide.slug)
      assert.ok(content.getGuide(slug), slug)
    }
    assert.equal(content.getRelatedGuides(guide).length, guide.relatedGuides?.length ?? 0)
  }
})

test('destaques e biblioteca particionam cada categoria sem perder guias', () => {
  for (const category of categories) {
    const featured = content.getFeaturedGuidesByCategory(category.slug)
    const other = content.getNonFeaturedGuidesByCategory(category.slug)
    assert.deepEqual(featured.map((guide) => guide.slug), category.featuredGuideSlugs)
    assert.ok(featured.every((guide) => guide.category === category.slug))
    const slugs = [...featured, ...other].map((guide) => guide.slug)
    assert.equal(new Set(slugs).size, counts[category.slug])
    assert.equal(slugs.length, counts[category.slug])
  }
  assert.equal(content.getFeaturedGuides().length, 3)
  assert.equal(content.getFaqPreview().length, 4)
  assert.equal(new Set(content.getFaqs().map((faq) => faq.id)).size, content.getFaqs().length)
  assert.deepEqual(content.getFeaturedGuidesByCategory('inexistente'), [])
  assert.deepEqual(content.getNonFeaturedGuidesByCategory('inexistente'), [])
  assert.equal(content.getGuide('inexistente'), undefined)
  assert.equal(content.getGuideByCategoryAndSlug('enem', guides[0].slug), undefined)
})

test('catálogo client contém só os campos de busca e todos os links', () => {
  const catalog = content.getSearchCatalog()
  assert.equal(catalog.length, 70)
  for (const item of catalog) {
    assert.deepEqual(Object.keys(item).sort(), ['slug', 'category', 'title', 'summary', 'readTime', 'tags', 'categoryName', 'categoryAccent'].sort())
    assert.ok(content.getGuideByCategoryAndSlug(item.category, item.slug))
    assert.equal(item.categoryName, content.getCategory(item.category)?.name)
  }
})

test('busca preserva substring, espaços, caixa, categoria, tags e estado vazio', () => {
  const catalog = content.getSearchCatalog()
  assert.deepEqual(searchGuides(catalog, ''), catalog)
  assert.deepEqual(searchGuides(catalog, '   '), catalog)
  assert.deepEqual(searchGuides(catalog, ' ENEM '), searchGuides(catalog, 'enem'))
  assert.ok(searchGuides(catalog, 'ENEM').length > 0)
  assert.deepEqual(searchGuides(catalog, 'zzzz-sem-resultado-zzzz'), [])
  const fixture = [{ ...catalog[0], title: 'Título único', summary: 'Resumo específico', tags: ['marcador'], categoryName: 'Categoria teste' }]
  for (const query of ['título', 'ESPECÍFICO', 'marcador', 'categoria teste']) {
    assert.deepEqual(searchGuides(fixture, query), fixture)
  }
  assert.deepEqual(searchGuides([], 'enem'), [])
})

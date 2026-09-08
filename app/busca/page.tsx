import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SearchPanel } from '@/components/search/search-panel'
import { getSearchCatalog } from '@/modules/content/services/content-service'

export const metadata: Metadata = {
  title: 'Buscar guias | Rumo',
  description: 'Encontre os guias da Rumo por assunto, dúvida, categoria ou palavra-chave.',
}

export default function SearchPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="search-page">
        <span className="eyebrow eyebrow-dark">Busca</span>
        <h1>Encontre seu próximo passo.</h1>
        <p>Pesquise nos guias da Rumo por assunto, dúvida ou palavra-chave.</p>
        <SearchPanel guides={getSearchCatalog()} />
      </main>
      <Footer />
    </>
  )
}

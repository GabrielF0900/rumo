import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="search-page">
        <span className="eyebrow eyebrow-dark">404</span>
        <h1>Página não encontrada.</h1>
        <p>Confira o endereço ou busque um guia para continuar.</p>
        <Link href="/busca" className="home-button home-button-primary">Buscar guias</Link>
      </main>
      <Footer />
    </>
  )
}

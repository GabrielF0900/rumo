import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="rumo-footer">
      <div className="rumo-footer-inner">
        <div className="rumo-footer-brand">
          <Logo compact />
          <p className="rumo-footer-slogan">Aprenda, avance, conquiste.</p>
          <p>Informação clara para estudar, pesquisar e escolher caminhos com mais autonomia.</p>
        </div>

        <div className="rumo-footer-links">
          <div>
            <strong>Explorar</strong>
            <Link href="/estudar">Estudar melhor</Link>
            <Link href="/enem">ENEM</Link>
            <Link href="/carreira">Carreira</Link>
          </div>
          <div>
            <strong>Rumo</strong>
            <Link href="/sobre">Sobre</Link>
            <Link href="/faq">FAQ</Link>
            <a href="https://www.gov.br/mec/pt-br" target="_blank" rel="noreferrer">
              Fontes oficiais
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <p className="rumo-footer-disclaimer">
        A Rumo oferece conteúdo informativo e educacional e não substitui orientação pedagógica, profissional ou atendimento especializado.
      </p>
      <p className="rumo-footer-bottom">© 2026 Rumo</p>
    </footer>
  )
}

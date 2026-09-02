import Link from 'next/link'
import {
  ExternalLink,
  Heart,
} from 'lucide-react'

import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="rumo-footer">
      <div className="rumo-footer-inner">
        <div className="rumo-footer-brand">
          <Logo compact inverse />

          <p className="rumo-footer-slogan">
            Aprenda, avance, conquiste.
          </p>

          <p className="rumo-footer-description">
            Informação clara para estudar,
            pesquisar e escolher caminhos
            com mais autonomia.
          </p>
        </div>

        <nav
          className="rumo-footer-links"
          aria-label="Links do rodapé"
        >
          <div>
            <strong>Explorar</strong>

            <Link href="/estudar">
              Estudar melhor
            </Link>

            <Link href="/pesquisa-ia">
              Pesquisa & IA
            </Link>

            <Link href="/enem">
              ENEM
            </Link>

            <Link href="/ensino-superior">
              Ensino superior
            </Link>

            <Link href="/carreira">
              Carreira
            </Link>

            <Link href="/inclusao">
              Inclusão e apoio
            </Link>
          </div>

          <div>
            <strong>Rumo</strong>

            <Link href="/sobre">
              Sobre a Rumo
            </Link>

            <Link href="/faq">
              Perguntas frequentes
            </Link>

            <Link href="/busca">
              Buscar conteúdos
            </Link>

            <a
              href="https://www.gov.br/mec/pt-br"
              target="_blank"
              rel="noreferrer"
            >
              Fontes oficiais

              <ExternalLink
                size={13}
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>
      </div>

      <div className="rumo-footer-divider" />

      <div className="rumo-footer-meta">
        <p className="rumo-footer-disclaimer">
          A Rumo oferece conteúdo informativo e
          educacional e não substitui orientação
          pedagógica, profissional ou atendimento
          especializado.
        </p>

        <p className="rumo-footer-bottom">
          © 2026 Rumo
          <span aria-hidden="true">•</span>
          Feito para apoiar escolhas com mais clareza
          <Heart
            size={13}
            aria-hidden="true"
          />
        </p>
      </div>
    </footer>
  )
}
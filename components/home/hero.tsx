import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'

export function Hero() {
  return (
    <section
      className="home-hero"
      aria-labelledby="home-hero-title"
    >
      <div className="home-hero-copy">
        <p className="home-eyebrow">
          <Sparkles
            size={15}
            aria-hidden="true"
          />

          Orientação para o seu próximo passo
        </p>

        <h1 id="home-hero-title">
          Seu caminho
          <br />

          começa{' '}
          <span className="home-hero-highlight">
            com uma
          </span>

          <br />

          <span className="home-hero-highlight">
            escolha.
          </span>
        </h1>

        <p className="home-hero-description">
          Informação clara para estudar, planejar o futuro
          e tomar decisões com mais confiança. Sem pressão.
          No seu ritmo.
        </p>

        <div className="home-hero-actions">
          <Link
            href="/estudar"
            className="home-button home-button-primary"
          >
            Quero encontrar meu caminho

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

          <Link
            href="#categorias"
            className="home-hero-secondary-link"
          >
            Explorar temas
          </Link>
        </div>

        <p className="home-hero-note">
          <span aria-hidden="true">
            <Check size={13} />
          </span>

          Conteúdo educativo, gratuito e feito para você.
        </p>
      </div>

      <div className="home-hero-visual">
        <div className="home-hero-art">
          <Image
            src="/logo.png"
            alt="Rumo: livro aberto, caminho ascendente e formação acadêmica"
            width={1664}
            height={932}
            className="home-hero-logo"
            priority
            sizes="(max-width: 800px) calc(100vw - 56px), (max-width: 1050px) 45vw, 680px"
          />
        </div>
      </div>
    </section>
  )
}

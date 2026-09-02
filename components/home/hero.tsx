import Image from 'next/image'
import Link from 'next/link'
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
          <span>Seu caminho</span>

          <span>
            começa{' '}
            <em>com uma</em>
          </span>

          <span>
            <em>escolha.</em>
          </span>
        </h1>

        <p className="home-hero-description">
          Informação clara para estudar,
          planejar o futuro e tomar decisões
          com mais confiança. Sem pressão.
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

          Conteúdo educativo, gratuito e
          feito para você.
        </p>
      </div>

      <div className="home-hero-visual">
        <Image
          src="/logo.png"
          alt="Rumo: uma jornada de aprendizagem, formação e crescimento"
          width={1664}
          height={932}
          priority
          className="home-hero-logo"
          sizes="
            (max-width: 800px) 92vw,
            (max-width: 1100px) 52vw,
            670px
          "
        />
      </div>
    </section>
  )
}
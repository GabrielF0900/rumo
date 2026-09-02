import {
  Accessibility,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react'

const trustItems = [
  {
    label: 'Gratuito e acessível',
    icon: Accessibility,
    className: 'trust-blue',
  },
  {
    label: 'Fontes confiáveis',
    icon: ShieldCheck,
    className: 'trust-violet',
  },
  {
    label: 'Respeito e inclusão',
    icon: HeartHandshake,
    className: 'trust-pink',
  },
]

export function TrustBanner() {
  return (
    <section
      className="home-trust"
      aria-labelledby="trust-title"
    >
      <div className="home-trust-copy">
        <span
          className="home-trust-main-icon"
          aria-hidden="true"
        >
          <ShieldCheck
            size={28}
            strokeWidth={1.8}
          />
        </span>

        <div>
          <h2 id="trust-title">
            Aqui, você encontra informação de confiança.
          </h2>

          <p>
            Conteúdos organizados com base em fontes
            educacionais e oficiais sempre que aplicável.
          </p>
        </div>
      </div>

      <ul className="home-trust-list">
        {trustItems.map(
          ({
            label,
            icon: Icon,
            className,
          }) => (
            <li
              key={label}
              className={className}
            >
              <span aria-hidden="true">
                <Icon
                  size={21}
                  strokeWidth={1.8}
                />
              </span>

              <strong>{label}</strong>
            </li>
          ),
        )}
      </ul>
    </section>
  )
}
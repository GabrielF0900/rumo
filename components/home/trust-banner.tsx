import { Accessibility, BadgeCheck, ShieldCheck } from 'lucide-react'

const trustItems = [
  { label: 'Gratuito e acessível', icon: Accessibility },
  { label: 'Fontes confiáveis', icon: ShieldCheck },
  { label: 'Respeito e inclusão', icon: BadgeCheck },
]

export function TrustBanner() {
  return (
    <section className="home-trust" aria-labelledby="trust-title">
      <div className="home-trust-copy">
        <h2 id="trust-title">Aqui, você encontra informação de confiança.</h2>
        <p>Conteúdos organizados com base em fontes educacionais e oficiais sempre que aplicável.</p>
      </div>
      <ul className="home-trust-list">
        {trustItems.map(({ label, icon: Icon }) => (
          <li key={label}>
            <Icon size={21} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  )
}

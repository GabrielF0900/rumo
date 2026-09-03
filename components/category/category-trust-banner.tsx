import { Accessibility, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'

export function CategoryTrustBanner() {
  return (
    <section className="category-trust-banner" aria-label="Compromissos da Rumo">
      <div className="category-trust-intro">
        <Sparkles size={25} aria-hidden="true" />
        <div>
          <strong>Informação de confiança para apoiar suas escolhas.</strong>
          <p>
            Conteúdos organizados com base em fontes educacionais e oficiais sempre que aplicável.
          </p>
        </div>
      </div>
      <ul>
        <li><Accessibility size={20} aria-hidden="true" />Gratuito e acessível</li>
        <li><ShieldCheck size={20} aria-hidden="true" />Fontes confiáveis</li>
        <li><HeartHandshake size={20} aria-hidden="true" />Respeito e inclusão</li>
      </ul>
    </section>
  )
}

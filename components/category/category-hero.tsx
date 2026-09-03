import Link from 'next/link'
import { BookOpen, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react'

import type { Category } from '@/modules/content/domain/category'
import { CategoryHeroArt } from './category-hero-art'

export function CategoryHero({ category }: { category: Category }) {
  const title =
    category.heroHighlight && category.heroTitle.includes(category.heroHighlight)
      ? category.heroTitle.replace(category.heroHighlight, '')
      : category.heroTitle

  return (
    <section className={`category-hero accent-${category.accent}`}>
      <nav className="category-breadcrumb" aria-label="Navegação estrutural">
        <Link href="/">Início</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <Link href="/estudar">Explorar</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <span>{category.name}</span>
      </nav>

      <div className="category-hero-grid">
        <div className="category-hero-copy">
          <p className="category-eyebrow">
            <BookOpen size={17} aria-hidden="true" />
            {category.name}
          </p>
          <h1>
            {title}
            {category.heroHighlight && (
              <>
                {' '}
                <em>{category.heroHighlight}</em>
              </>
            )}
          </h1>
          <p className="category-hero-description">{category.heroDescription}</p>
          <ul className="category-trust-labels">
            {category.trustLabels.map((label, index) => (
              <li key={label}>
                {index === 0 ? (
                  <CheckCircle2 size={16} aria-hidden="true" />
                ) : (
                  <ShieldCheck size={16} aria-hidden="true" />
                )}
                {label}
              </li>
            ))}
          </ul>
        </div>
        <CategoryHeroArt category={category} />
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ChevronRight, Clock3 } from 'lucide-react'

import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

export function GuideHero({ guide, category }: { guide: Guide; category: Category }) {
  return (
    <header className="guide-hero">
      <nav className="guide-breadcrumb" aria-label="Navegação estrutural">
        <Link href="/">Início</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <Link href={`/${category.slug}`}>{category.name}</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <span aria-current="page">{guide.title}</span>
      </nav>
      <div className="guide-hero-copy">
        <p className="guide-category-name">{category.name}</p>
        <h1>{guide.title}</h1>
        <p className="guide-summary">{guide.summary}</p>
        <p className="guide-description">{guide.description}</p>
        <div className="guide-meta">
          <span><Clock3 size={16} aria-hidden="true" />{guide.readTime} min de leitura</span>
          <ul aria-label="Temas do guia">
            {guide.tags.map((tag, index) => (
              <li key={`${guide.slug}-tag-${index}`}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

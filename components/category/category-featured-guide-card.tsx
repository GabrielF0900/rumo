import Link from 'next/link'
import { ArrowRight, BookOpenCheck, Clock3, SearchCheck, Signpost } from 'lucide-react'

import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

const guideIcons = {
  estudar: BookOpenCheck,
  'pesquisa-ia': SearchCheck,
  enem: Signpost,
}

export function CategoryFeaturedGuideCard({
  guide,
  category,
}: {
  guide: Guide
  category: Category
}) {
  const Icon = guideIcons[guide.category as keyof typeof guideIcons] ?? BookOpenCheck

  return (
    <Link
      href={`/${guide.category}/${guide.slug}`}
      className={`category-featured-card accent-${category.accent}`}
    >
      <span className="category-featured-icon" aria-hidden="true">
        <Icon size={28} strokeWidth={1.7} />
      </span>
      <span className="category-featured-content">
        <span className="category-featured-meta">
          <span className="category-guide-badge">Guia essencial</span>
          <span><Clock3 size={13} aria-hidden="true" />{guide.readTime} min</span>
        </span>
        <strong>{guide.title}</strong>
        <span className="category-featured-summary">{guide.summary}</span>
        <span className="category-featured-link">
          Ler guia
          <ArrowRight size={15} aria-hidden="true" />
        </span>
      </span>
    </Link>
  )
}

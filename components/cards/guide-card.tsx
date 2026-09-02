import Link from 'next/link'
import {
  ArrowRight,
  BookOpenCheck,
  SearchCheck,
  Signpost,
} from 'lucide-react'

import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

const guideIcons = {
  estudar: BookOpenCheck,
  'pesquisa-ia': SearchCheck,
  enem: Signpost,
}

export function GuideCard({
  guide,
  category,
}: {
  guide: Guide
  category: Category
}) {
  const Icon =
    guideIcons[
      guide.category as keyof typeof guideIcons
    ] ?? BookOpenCheck

  return (
    <Link
      href={`/${guide.category}/${guide.slug}`}
      className={`home-guide-card accent-${category.accent}`}
    >
      <span
        className="home-guide-visual"
        aria-hidden="true"
      >
        <span className="home-guide-decoration home-guide-decoration-one" />
        <span className="home-guide-decoration home-guide-decoration-two" />

        <span className="home-guide-icon-wrap">
          <Icon
            size={48}
            strokeWidth={1.55}
          />
        </span>
      </span>

      <span className="home-guide-content">
        <span className="home-guide-kicker">
          Guia
        </span>

        <strong className="home-guide-title">
          {guide.title}
        </strong>

        <span className="home-guide-summary">
          {guide.summary}
        </span>

        <span className="home-guide-link">
          Ler guia

          <ArrowRight
            size={15}
            aria-hidden="true"
          />
        </span>
      </span>
    </Link>
  )
}
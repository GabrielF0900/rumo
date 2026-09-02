import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
} from 'lucide-react'

import { GuideCard } from '@/components/cards/guide-card'

import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

export function FeaturedGuides({
  guides,
  categories,
}: {
  guides: Guide[]
  categories: Category[]
}) {
  return (
    <section
      className="home-featured"
      aria-labelledby="featured-title"
    >
      <div className="home-featured-heading">
        <div className="home-featured-title">
          <BookOpen
            size={21}
            strokeWidth={2}
            aria-hidden="true"
          />

          <h2 id="featured-title">
            Guias em destaque
          </h2>
        </div>

        <Link
          href="/busca"
          className="home-featured-all-link"
        >
          Ver todos os guias

          <ArrowRight
            size={16}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="home-guides-grid">
        {guides.map((guide) => {
          const category =
            categories.find(
              (item) =>
                item.slug === guide.category,
            )

          if (!category) {
            return null
          }

          return (
            <GuideCard
              key={guide.slug}
              guide={guide}
              category={category}
            />
          )
        })}
      </div>
    </section>
  )
}
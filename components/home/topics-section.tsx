import Link from 'next/link'
import { ArrowRight, Grid2X2 } from 'lucide-react'

import { CategoryCard } from '@/components/cards/category-card'
import type { Category } from '@/modules/content/domain/category'

export function TopicsSection({
  categories,
}: {
  categories: Category[]
}) {
  return (
    <section
      id="categorias"
      className="home-topics"
      aria-labelledby="topics-title"
    >
      <div className="home-topics-heading">
        <div className="home-topics-title-wrap">
          <div className="home-topics-title-line">
            <Grid2X2
              size={21}
              strokeWidth={2}
              aria-hidden="true"
            />

            <h2 id="topics-title">
              Explore por temas
            </h2>
          </div>
        </div>

        <Link
          href="/estudar"
          className="home-topics-all-link"
        >
          Ver todos os temas

          <ArrowRight
            size={16}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="home-topics-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
          />
        ))}
      </div>
    </section>
  )
}
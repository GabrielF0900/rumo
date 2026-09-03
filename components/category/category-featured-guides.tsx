import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'
import { CategoryFeaturedGuideCard } from './category-featured-guide-card'

export function CategoryFeaturedGuides({
  category,
  guides,
}: {
  category: Category
  guides: Guide[]
}) {
  return (
    <section className="category-section category-featured" aria-labelledby="category-featured-title">
      <div className="category-section-heading">
        <div>
          <div className="category-section-title">
            <Sparkles size={23} aria-hidden="true" />
            <h2 id="category-featured-title">Comece por aqui</h2>
          </div>
          <p>Guias essenciais para dar os primeiros passos neste tema.</p>
        </div>
        <Link href="#todos-os-guias" className="category-heading-link">
          Ver todos os guias
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      {guides.length > 0 ? (
        <div className="category-featured-grid">
          {guides.map((guide) => (
            <CategoryFeaturedGuideCard key={guide.slug} guide={guide} category={category} />
          ))}
        </div>
      ) : (
        <div className="category-featured-empty">
          <strong>Novos guias estão sendo preparados.</strong>
          <p>Enquanto isso, explore os caminhos de aprendizagem abaixo.</p>
        </div>
      )}
    </section>
  )
}

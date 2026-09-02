import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GuideCard } from '@/components/cards/guide-card'
import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

export function FeaturedGuides({ guides, categories }: { guides: Guide[]; categories: Category[] }) {
  return (
    <section className="home-section home-featured" aria-labelledby="featured-title">
      <div className="home-section-heading home-featured-heading">
        <div>
          <p className="home-eyebrow">Guias em destaque</p>
          <h2 id="featured-title">Clareza para seguir em frente.</h2>
        </div>
        <Link href="/busca" className="home-text-link">
          Ver todos os guias
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="home-guides-grid">
        {guides.map((guide) => {
          const category = categories.find((item) => item.slug === guide.category)
          if (!category) return null
          return <GuideCard key={guide.slug} guide={guide} category={category} />
        })}
      </div>
    </section>
  )
}

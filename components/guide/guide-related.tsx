import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

export function GuideRelated({ guides, category }: { guides: Guide[]; category: Category }) {
  return (
    <section className="guide-related" aria-labelledby="guide-related-title">
      <h2 id="guide-related-title">Continue explorando</h2>
      <div className="guide-related-grid">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/${guide.category}/${guide.slug}`}>
            <span>{category.name}</span>
            <strong>{guide.title}</strong>
            <small>Conhecer guia <ArrowRight size={15} aria-hidden="true" /></small>
          </Link>
        ))}
      </div>
    </section>
  )
}

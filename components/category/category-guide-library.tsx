import Link from 'next/link'
import { ArrowRight, BookOpen, Clock3 } from 'lucide-react'

import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

export function CategoryGuideLibrary({
  category,
  guides,
}: {
  category: Category
  guides: Guide[]
}) {
  if (guides.length === 0) {
    return null
  }

  return (
    <section
      id="todos-os-guias"
      className="category-section category-library"
      aria-labelledby="category-library-title"
    >
      <div className="category-section-heading">
        <div>
          <div className="category-section-title">
            <BookOpen size={22} aria-hidden="true" />
            <h2 id="category-library-title">Todos os guias</h2>
          </div>
          <p>Continue explorando conteúdos desta categoria.</p>
        </div>
      </div>
      <div className="category-library-grid">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/${guide.category}/${guide.slug}`}
            className={`category-library-card accent-${category.accent}`}
          >
            <div className="category-library-meta">
              <span>Guia</span>
              <span><Clock3 size={13} aria-hidden="true" />{guide.readTime} min</span>
            </div>
            <strong>{guide.title}</strong>
            <p>{guide.summary}</p>
            <span className="category-library-link">
              Ler guia
              <ArrowRight size={15} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

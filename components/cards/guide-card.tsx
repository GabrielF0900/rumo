import Link from 'next/link'
import { ArrowRight, BookOpen, Compass, Search, Target } from 'lucide-react'
import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

const guideIcons = {
  estudar: BookOpen,
  'pesquisa-ia': Search,
  enem: Target,
  'ensino-superior': Compass,
}

export function GuideCard({ guide, category }: { guide: Guide; category: Category }) {
  const Icon = guideIcons[guide.category as keyof typeof guideIcons] ?? BookOpen

  return (
    <Link href={`/${guide.category}/${guide.slug}`} className={`home-guide-card accent-${category.accent}`}>
      <span className="home-guide-visual" aria-hidden="true">
        <span className="home-guide-orbit" />
        <Icon size={34} strokeWidth={1.7} />
      </span>
      <span className="home-guide-meta">
        <span>{category.name}</span>
        <span>{guide.readTime} min de leitura</span>
      </span>
      <strong className="home-guide-title">{guide.title}</strong>
      <span className="home-guide-summary">{guide.summary}</span>
      <span className="home-guide-link">
        Ler guia
        <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  )
}

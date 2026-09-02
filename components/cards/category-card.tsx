import Link from 'next/link'
import { ArrowRight, BookOpen, BriefcaseBusiness, Compass, Heart, Search, Target } from 'lucide-react'
import type { Category } from '@/modules/content/domain/category'

const icons = {
  book: BookOpen,
  search: Search,
  target: Target,
  graduation: Compass,
  briefcase: BriefcaseBusiness,
  heart: Heart,
}

export function CategoryCard({ category }: { category: Category }) {
  const Icon = icons[category.icon]

  return (
    <Link href={`/${category.slug}`} className={`home-category-card accent-${category.accent}`}>
      <span className="home-category-icon" aria-hidden="true">
        <Icon size={24} />
      </span>
      <span className="home-category-copy">
        <strong>{category.name}</strong>
        <span>{category.description}</span>
      </span>
      <ArrowRight className="home-card-arrow" size={20} aria-hidden="true" />
    </Link>
  )
}

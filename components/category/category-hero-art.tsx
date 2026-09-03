import {
  Accessibility,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  Search,
  Sparkles,
  Target,
} from 'lucide-react'

import type { Category, CategoryIcon } from '@/modules/content/domain/category'

const mainIcons: Record<CategoryIcon, typeof BookOpen> = {
  book: BookOpen,
  search: Search,
  target: Target,
  graduation: GraduationCap,
  briefcase: BriefcaseBusiness,
  heart: HeartHandshake,
}

export function CategoryHeroArt({ category }: { category: Category }) {
  const MainIcon = mainIcons[category.icon]
  const SecondaryIcon =
    category.slug === 'estudar'
      ? CalendarDays
      : category.slug === 'pesquisa-ia'
        ? Sparkles
        : category.slug === 'enem'
          ? ClipboardCheck
          : category.slug === 'ensino-superior'
            ? Building2
            : category.slug === 'carreira'
              ? BriefcaseBusiness
              : Accessibility
  const ThirdIcon =
    category.slug === 'estudar'
      ? Target
      : category.slug === 'pesquisa-ia'
        ? Search
        : category.slug === 'enem'
          ? Target
          : category.slug === 'ensino-superior'
            ? GraduationCap
            : category.slug === 'carreira'
              ? ClipboardCheck
              : HeartHandshake

  return (
    <div className="category-hero-art" aria-hidden="true">
      <span className="category-art-glow" />
      <span className="category-art-orbit category-art-orbit-one" />
      <span className="category-art-orbit category-art-orbit-two" />
      <span className="category-art-icon category-art-icon-main">
        <MainIcon size={92} strokeWidth={1.25} />
      </span>
      <span className="category-art-icon category-art-icon-secondary">
        <SecondaryIcon size={38} strokeWidth={1.7} />
      </span>
      <span className="category-art-icon category-art-icon-third">
        <ThirdIcon size={34} strokeWidth={1.7} />
      </span>
      <span className="category-art-spark category-art-spark-one" />
      <span className="category-art-spark category-art-spark-two" />
    </div>
  )
}

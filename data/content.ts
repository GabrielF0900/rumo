// Compatibility adapter.
// Legacy routes still import this module.
// Remove after all pages are migrated to modules/content.

import { categories as modularCategories } from '@/modules/content/data/categories'
import { faqs as modularFaqs } from '@/modules/content/data/faqs'
import { guides as modularGuides } from '@/modules/content/data/guides'
import type { Category as ModularCategory } from '@/modules/content/domain/category'

export type Category = ModularCategory
export type Guide = {
  slug: string
  category: string
  title: string
  summary: string
  readTime: string
  tags: string[]
}

export const categories = modularCategories
export const guides: Guide[] = modularGuides.map((guide) => ({
  slug: guide.slug,
  category: guide.category,
  title: guide.title,
  summary: guide.summary,
  readTime: `${guide.readTime} min de leitura`,
  tags: guide.tags,
}))
export const faqs = modularFaqs.map(({ question, answer }) => ({ question, answer }))

export function getGuide(slug: string) { return guides.find((guide) => guide.slug === slug) }
export function getCategory(slug: string) { return categories.find((category) => category.slug === slug) }
export function getGuidesByCategory(slug: string) { return guides.filter((guide) => guide.category === slug) }

export const iconMap: Record<string, string> = { book: '▱', search: '⌕', target: '◎', graduation: '⌂', briefcase: '▣', heart: '♡' }

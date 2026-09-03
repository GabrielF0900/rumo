import { categories } from '../data/categories'
import { faqs } from '../data/faqs'
import { guides } from '../data/guides'

import type { FAQItem } from '../domain/faq'
import type { Guide } from '../domain/guide'

export function getCategories() {
  return categories
}

export function getCategory(slug: string) {
  return categories.find(
    (category) =>
      category.slug === slug,
  )
}

export function getGuides() {
  return guides
}

export function getGuide(slug: string) {
  return guides.find(
    (guide) =>
      guide.slug === slug,
  )
}

export function getGuidesByCategory(
  categorySlug: string,
) {
  return guides.filter(
    (guide) =>
      guide.category === categorySlug,
  )
}

export function getFeaturedGuidesByCategory(
  categorySlug: string,
): Guide[] {
  const category =
    getCategory(categorySlug)

  if (!category) {
    return []
  }

  return category.featuredGuideSlugs
    .map((slug) => getGuide(slug))
    .filter(
      (guide): guide is Guide =>
        Boolean(guide),
    )
}

export function getNonFeaturedGuidesByCategory(
  categorySlug: string,
): Guide[] {
  const category =
    getCategory(categorySlug)

  if (!category) {
    return []
  }

  return getGuidesByCategory(
    categorySlug,
  ).filter(
    (guide) =>
      !category.featuredGuideSlugs.includes(
        guide.slug,
      ),
  )
}

export function getFeaturedGuides(): Guide[] {
  const featured = [
    'organizacao-de-estudos',
    'pesquisa-inteligente-ia',
    'fiz-enem-e-agora',
  ]

  return featured
    .map((slug) => getGuide(slug))
    .filter(
      (guide): guide is Guide =>
        Boolean(guide),
    )
}

export function getFaqs() {
  return faqs
}

export function getFaqPreview(): FAQItem[] {
  const ids = [
    'rumo-gratuita',
    'preciso-de-conta',
    'substitui-professor',
    'diferentes-formas-aprender',
  ]

  return ids
    .map(
      (id) =>
        faqs.find(
          (faq) =>
            faq.id === id,
        ),
    )
    .filter(
      (faq): faq is FAQItem =>
        Boolean(faq),
    )
}

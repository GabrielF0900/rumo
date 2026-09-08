import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { CategoryFeaturedGuides } from '@/components/category/category-featured-guides'
import { CategoryGuideLibrary } from '@/components/category/category-guide-library'
import { CategoryHero } from '@/components/category/category-hero'
import { CategoryLearningPaths } from '@/components/category/category-learning-paths'
import { CategoryTrustBanner } from '@/components/category/category-trust-banner'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { categories } from '@/modules/content/data/categories'
import {
  getCategory,
  getFeaturedGuidesByCategory,
  getNonFeaturedGuidesByCategory,
} from '@/modules/content/services/content-service'

export function generateStaticParams() {
  return categories.map((category) => ({
    categoria: category.slug,
  }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: {
  params: Promise<{ categoria: string }>
}): Promise<Metadata> {
  const { categoria } = await params
  const category = getCategory(categoria)
  if (!category) notFound()
  return { title: `${category.name} | Rumo`, description: category.description }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>
}) {
  const { categoria } = await params
  const category = getCategory(categoria)

  if (!category) {
    notFound()
  }

  const featuredGuides = getFeaturedGuidesByCategory(categoria)
  const otherGuides = getNonFeaturedGuidesByCategory(categoria)

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="category-page">
        <CategoryHero category={category} />
        <CategoryFeaturedGuides category={category} guides={featuredGuides} />
        <CategoryLearningPaths category={category} />
        <CategoryGuideLibrary category={category} guides={otherGuides} />
        <CategoryTrustBanner />
      </main>
      <Footer />
    </>
  )
}

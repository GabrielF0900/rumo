import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { GuidePage } from '@/components/guide/guide-page'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import {
  getCategory,
  getGuideByCategoryAndSlug,
  getGuides,
  getRelatedGuides,
} from '@/modules/content/services/content-service'

export function generateStaticParams() {
  return getGuides().map((guide) => ({
    categoria: guide.category,
    slug: guide.slug,
  }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: {
  params: Promise<{ categoria: string; slug: string }>
}): Promise<Metadata> {
  const { categoria, slug } = await params
  const guide = getGuideByCategoryAndSlug(categoria, slug)
  if (!guide) notFound()
  return { title: `${guide.title} | Rumo`, description: guide.summary }
}

export default async function Page({
  params,
}: {
  params: Promise<{
    categoria: string
    slug: string
  }>
}) {
  const { categoria, slug } = await params
  const category = getCategory(categoria)
  const guide = getGuideByCategoryAndSlug(categoria, slug)

  if (!category || !guide) {
    notFound()
  }

  const relatedGuides = getRelatedGuides(guide)

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <GuidePage guide={guide} category={category} relatedGuides={relatedGuides} />
      </main>
      <Footer />
    </>
  )
}

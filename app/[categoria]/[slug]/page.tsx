import { notFound } from 'next/navigation'

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
      <main>
        <GuidePage guide={guide} category={category} relatedGuides={relatedGuides} />
      </main>
      <Footer />
    </>
  )
}

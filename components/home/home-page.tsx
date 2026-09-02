import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { getCategories, getFaqPreview, getFeaturedGuides } from '@/modules/content/services/content-service'
import { FaqPreview } from './faq-preview'
import { FeaturedGuides } from './featured-guides'
import { Hero } from './hero'
import { TopicsSection } from './topics-section'
import { TrustBanner } from './trust-banner'

export function HomePage() {
  const categories = getCategories()
  const guides = getFeaturedGuides()
  const faqs = getFaqPreview()

  return (
    <>
      <Header />
      <main className="home-main">
        <Hero />
        <TopicsSection categories={categories} />
        <FeaturedGuides guides={guides} categories={categories} />
        <TrustBanner />
        <FaqPreview items={faqs} />
      </main>
      <Footer />
    </>
  )
}

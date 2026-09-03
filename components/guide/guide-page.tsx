import type { Category } from '@/modules/content/domain/category'
import type { Guide } from '@/modules/content/domain/guide'

import { GuideChecklist } from './guide-checklist'
import { GuideContent } from './guide-content'
import { GuideHero } from './guide-hero'
import { GuideRelated } from './guide-related'
import { GuideResumeDownload } from './guide-resume-download'
import { GuideSources } from './guide-sources'
import { GuideToc } from './guide-toc'

interface GuidePageProps {
  guide: Guide
  category: Category
  relatedGuides: Guide[]
}

export function GuidePage({ guide, category, relatedGuides }: GuidePageProps) {
  return (
    <div className={`guide-page accent-${category.accent}`}>
      <GuideHero guide={guide} category={category} />
      {guide.slug === 'como-montar-seu-primeiro-curriculo-sem-experiencia' ? (
        <GuideResumeDownload />
      ) : null}
      <div className="guide-layout">
        <GuideContent guide={guide} />
        <GuideToc sections={guide.sections} />
      </div>
      {guide.checklist?.length ? <GuideChecklist items={guide.checklist} /> : null}
      {guide.sources?.length ? <GuideSources sources={guide.sources} /> : null}
      {relatedGuides.length ? (
        <GuideRelated guides={relatedGuides} category={category} />
      ) : null}
    </div>
  )
}

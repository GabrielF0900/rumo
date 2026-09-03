import { Target } from 'lucide-react'

import type { Guide } from '@/modules/content/domain/guide'
import { GuideSection } from './guide-section'

export function GuideContent({ guide }: { guide: Guide }) {
  return (
    <article className="guide-content">
      {guide.learningObjectives?.length ? (
        <section className="guide-objectives" aria-labelledby="guide-objectives-title">
          <Target size={22} aria-hidden="true" />
          <div>
            <h2 id="guide-objectives-title">O que você vai explorar</h2>
            <ul>
              {guide.learningObjectives.map((objective, index) => (
                <li key={`${guide.slug}-objective-${index}`}>{objective}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      {guide.sections.map((section) => (
        <GuideSection key={section.id} section={section} />
      ))}
    </article>
  )
}

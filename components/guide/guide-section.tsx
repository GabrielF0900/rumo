import { AlertTriangle, Lightbulb, Quote } from 'lucide-react'

import type { GuideSection as GuideSectionType } from '@/modules/content/domain/guide'

export function GuideSection({ section }: { section: GuideSectionType }) {
  return (
    <section id={section.id} className="guide-section">
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph, index) => (
        <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
      ))}
      {section.bullets?.length ? (
        <ul className="guide-bullets">
          {section.bullets.map((item, index) => (
            <li key={`${section.id}-bullet-${index}`}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.examples?.length ? (
        <div className="guide-callout guide-example">
          <Quote size={20} aria-hidden="true" />
          <div>
            <strong>Exemplo</strong>
            <ul>
              {section.examples.map((example, index) => (
                <li key={`${section.id}-example-${index}`}>{example}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {section.tips?.length ? (
        <div className="guide-callout guide-tip">
          <Lightbulb size={20} aria-hidden="true" />
          <div>
            <strong>Dica prática</strong>
            <ul>
              {section.tips.map((tip, index) => (
                <li key={`${section.id}-tip-${index}`}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {section.warning ? (
        <div className="guide-callout guide-warning">
          <AlertTriangle size={20} aria-hidden="true" />
          <div><strong>Atenção</strong><p>{section.warning}</p></div>
        </div>
      ) : null}
      {section.note ? <aside className="guide-note">{section.note}</aside> : null}
    </section>
  )
}

import { ExternalLink } from 'lucide-react'

import type { GuideSource } from '@/modules/content/domain/guide'

export function GuideSources({ sources }: { sources: GuideSource[] }) {
  return (
    <section className="guide-sources" aria-labelledby="guide-sources-title">
      <h2 id="guide-sources-title">Fontes e referências</h2>
      <ul>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">
              <span>
                <strong>{source.label}</strong>
                {source.institution ? <small>{source.institution}</small> : null}
              </span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

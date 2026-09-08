import type { GuideSearchItem } from '../domain/search'

/** Keep the original matching behavior: case-insensitive substring, trimmed query. */
export function searchGuides(guides: GuideSearchItem[], query: string): GuideSearchItem[] {
  const term = query.toLowerCase().trim()
  if (!term) return guides

  return guides.filter((guide) =>
    `${guide.title} ${guide.summary} ${guide.tags.join(' ')} ${guide.categoryName}`
      .toLowerCase()
      .includes(term),
  )
}

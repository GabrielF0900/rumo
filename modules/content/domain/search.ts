import type { CategoryAccent } from './category'
import type { Guide } from './guide'

/** Only the fields needed to search and display a result in the browser. */
export type GuideSearchItem = Pick<Guide, 'slug' | 'category' | 'title' | 'summary' | 'readTime' | 'tags'> & {
  categoryName: string
  categoryAccent: CategoryAccent
}

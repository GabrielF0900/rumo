export type CategoryAccent = 'blue' | 'violet' | 'pink' | 'coral'

export type CategoryIcon =
  | 'book'
  | 'search'
  | 'target'
  | 'graduation'
  | 'briefcase'
  | 'heart'

export interface Category {
  slug: string
  name: string
  description: string
  icon: CategoryIcon
  accent: CategoryAccent
}

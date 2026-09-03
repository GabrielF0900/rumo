export type CategoryAccent =
  | 'blue'
  | 'violet'
  | 'pink'
  | 'coral'

export type CategoryIcon =
  | 'book'
  | 'search'
  | 'target'
  | 'graduation'
  | 'briefcase'
  | 'heart'

export type LearningPathIcon =
  | 'brain'
  | 'target'
  | 'clock'
  | 'file'
  | 'check'
  | 'star'
  | 'search'
  | 'shield'
  | 'sparkles'
  | 'book'
  | 'graduation'
  | 'building'
  | 'briefcase'
  | 'users'
  | 'heart'
  | 'accessibility'

export interface CategoryLearningPath {
  id: string
  title: string
  description: string
  icon: LearningPathIcon
}

export interface Category {
  slug: string
  name: string
  description: string

  heroTitle: string
  heroHighlight?: string
  heroDescription: string

  icon: CategoryIcon
  accent: CategoryAccent

  trustLabels: string[]

  featuredGuideSlugs: string[]

  learningPaths: CategoryLearningPath[]
}

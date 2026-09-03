export interface GuideSource {
  label: string
  url: string

  institution?: string
  accessedAt?: string
}

export interface GuideSection {
  id: string
  title: string

  paragraphs: string[]

  bullets?: string[]

  tips?: string[]

  examples?: string[]

  warning?: string

  note?: string
}

export interface Guide {
  slug: string

  category: string

  title: string

  summary: string

  description: string

  readTime: number

  tags: string[]

  learningObjectives?: string[]

  sections: GuideSection[]

  checklist?: string[]

  sources?: GuideSource[]

  relatedGuides?: string[]

  updatedAt?: string
}
export interface GuideSource {
  label: string
  url: string
}

export interface GuideSection {
  id: string
  title: string
  paragraphs: string[]
  tips?: string[]
  examples?: string[]
}

export interface Guide {
  slug: string
  category: string
  title: string
  summary: string
  description: string
  readTime: number
  tags: string[]
  sections: GuideSection[]
  sources?: GuideSource[]
  relatedGuides?: string[]
}

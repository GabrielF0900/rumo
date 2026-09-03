import {
  Accessibility,
  Brain,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  HeartHandshake,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react'

import type { Category, LearningPathIcon } from '@/modules/content/domain/category'

const pathIcons: Record<LearningPathIcon, typeof Brain> = {
  brain: Brain,
  target: Target,
  clock: Clock3,
  file: FileText,
  check: CheckCircle2,
  star: Star,
  search: Search,
  shield: ShieldCheck,
  sparkles: Sparkles,
  book: GraduationCap,
  graduation: GraduationCap,
  building: Building2,
  briefcase: BriefcaseBusiness,
  users: Users,
  heart: HeartHandshake,
  accessibility: Accessibility,
}

export function CategoryLearningPaths({ category }: { category: Category }) {
  return (
    <section className="category-section category-paths" aria-labelledby="category-paths-title">
      <div className="category-section-heading">
        <div>
          <div className="category-section-title">
            <span className="category-grid-icon" aria-hidden="true" />
            <h2 id="category-paths-title">Explore mais caminhos de aprendizagem</h2>
          </div>
        </div>
      </div>
      <div className="category-path-grid">
        {category.learningPaths.map((path) => {
          const Icon = pathIcons[path.icon]
          return (
            <article key={path.id} className={`category-path-card accent-${category.accent}`}>
              <span className="category-path-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

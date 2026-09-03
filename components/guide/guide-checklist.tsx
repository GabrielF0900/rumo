import { CheckCircle2 } from 'lucide-react'

export function GuideChecklist({ items }: { items: string[] }) {
  return (
    <section className="guide-checklist" aria-labelledby="guide-checklist-title">
      <h2 id="guide-checklist-title">Checklist final</h2>
      <ul>
        {items.map((item, index) => (
          <li key={`checklist-${index}`}>
            <CheckCircle2 size={19} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

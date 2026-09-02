import { CircleHelp, MessageCircleQuestion } from 'lucide-react'

import { FAQAccordion } from '@/components/faq/faq-accordion'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { faqs } from '@/modules/content/data/faqs'

export default function FAQPage() {
  return (
    <>
      <Header />

      <main className="faq-page">
        <section className="faq-page-hero">
          <div className="faq-page-eyebrow">
            <CircleHelp size={17} aria-hidden="true" />
            Perguntas frequentes
          </div>

          <h1>Respostas claras para seguir em frente.</h1>

          <p>
            Encontre respostas para dúvidas sobre a Rumo, estudos, tecnologia, ENEM, escolhas acadêmicas e outros temas importantes para sua trajetória.
          </p>
        </section>

        <section className="faq-page-content" aria-labelledby="faq-list-title">
          <div className="faq-page-content-heading">
            <span className="faq-page-content-icon" aria-hidden="true">
              <MessageCircleQuestion size={25} />
            </span>

            <div>
              <h2 id="faq-list-title">Encontre sua dúvida</h2>
              <p>Clique em uma pergunta para visualizar a resposta.</p>
            </div>
          </div>

          <FAQAccordion items={faqs} />
        </section>
      </main>

      <Footer />
    </>
  )
}

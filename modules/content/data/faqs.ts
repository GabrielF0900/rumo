import type { FAQItem } from '../domain/faq'

export const faqs: FAQItem[] = [
  {
    id: 'rumo-gratuita',
    category: 'plataforma',
    question: 'A Rumo é gratuita?',
    answer:
      'Sim. O MVP da Rumo foi criado como uma plataforma educacional de acesso gratuito, sem necessidade de assinatura.',
  },
  {
    id: 'preciso-de-conta',
    category: 'plataforma',
    question: 'Preciso criar uma conta?',
    answer:
      'Não. Nesta versão da Rumo, os conteúdos podem ser consultados sem cadastro e sem login.',
  },
  {
    id: 'substitui-professor',
    category: 'plataforma',
    question: 'As informações substituem professores ou orientação profissional?',
    answer:
      'Não. A Rumo é uma ferramenta informativa e educacional. Professores, profissionais de orientação, responsáveis e serviços especializados continuam tendo papéis importantes.',
  },
  {
    id: 'diferentes-formas-aprender',
    category: 'inclusao',
    question: 'Como a Rumo apoia diferentes formas de aprender?',
    answer:
      'A plataforma busca utilizar linguagem clara, organização previsível, conteúdo dividido em blocos, navegação consistente e recursos de acessibilidade para reduzir barreiras de acesso à informação.',
  },
  {
    id: 'usar-ia-estudos',
    category: 'pesquisa',
    question: 'Como posso usar IA nos estudos?',
    answer:
      'Você pode usar IA para pedir explicações, criar perguntas, comparar ideias e revisar conceitos. Informações importantes devem ser verificadas em outras fontes, porque sistemas de IA também podem cometer erros.',
  },
  {
    id: 'depois-enem',
    category: 'enem',
    question: 'O que posso fazer depois do ENEM?',
    answer:
      'Existem diferentes possibilidades, como processos seletivos que utilizam a nota do exame e processos próprios de instituições. Regras, requisitos e datas devem sempre ser conferidos nos canais oficiais.',
  },
]

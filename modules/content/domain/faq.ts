export interface FAQItem {
  id: string
  question: string
  answer: string
  category:
    | 'plataforma'
    | 'estudos'
    | 'enem'
    | 'pesquisa'
    | 'carreira'
    | 'inclusao'
}

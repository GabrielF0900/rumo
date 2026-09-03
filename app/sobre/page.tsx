import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Lightbulb,
  MapPin,
  MoveUpRight,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

const values = [
  { title: 'Clareza', description: 'Transformar informação difícil em orientação compreensível sem perder responsabilidade.', icon: Lightbulb },
  { title: 'Autonomia', description: 'Ajudar o estudante a avaliar possibilidades e tomar suas próprias decisões.', icon: MoveUpRight },
  { title: 'Inclusão', description: 'Construir uma experiência acessível, previsível e útil para diferentes estudantes.', icon: HeartHandshake },
  { title: 'Responsabilidade', description: 'Apresentar fontes, limitações e incertezas com transparência.', icon: ShieldCheck },
]

const timeline = [
  ['Território', 'O contexto escolar foi observado antes de qualquer decisão técnica.'],
  ['Escuta', 'Gestão, estudante e necessidades recorrentes ajudaram a orientar o diagnóstico.'],
  ['Problema', 'A dificuldade de acessar, compreender e organizar informações ganhou forma.'],
  ['Intervenção', 'A tecnologia tornou-se uma ferramenta para organizar orientação estudantil.'],
  ['Evolução', 'A plataforma segue crescendo como software, conteúdo educativo e iniciativa social.'],
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero-copy">
            <p className="about-kicker">Uma plataforma que começou pela escuta</p>
            <h1 id="about-title">Informação para transformar dúvida em <em>próximo passo.</em></h1>
            <p className="about-hero-lead">
              A Rumo nasceu de um projeto de extensão universitária e de uma pergunta concreta:
              como tornar informações importantes para a trajetória estudantil mais claras,
              acessíveis e úteis?
            </p>
            <div className="about-hero-actions">
              <Link href="/estudar" className="about-primary-action">
                Explorar a plataforma <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href="#origem" className="about-secondary-action">Conhecer a origem</a>
            </div>
          </div>

          <div className="about-hero-visual">
            <span className="about-logo-halo" aria-hidden="true" />
            <Image
              src="/logo-pequena.png"
              alt="Símbolo da Rumo: livro, caminho, formação e avanço"
              width={1280}
              height={1280}
              priority
              className="about-logo-image"
            />
            <p><strong>Rumo</strong><span>Aprenda, avance, conquiste.</span></p>
          </div>
        </section>

        <section id="origem" className="about-origin" aria-labelledby="about-origin-title">
          <div className="about-origin-heading">
            <p className="about-kicker">Como surgiu</p>
            <h2 id="about-origin-title">Antes da plataforma, veio o território.</h2>
          </div>
          <div className="about-origin-story">
            <p className="about-story-lead">
              Meu nome é <strong>Gabriel Falcão da Cruz</strong>. Sou estudante do Bacharelado em
              Sistemas de Informação da UNIFACS e criei a Rumo durante um projeto de extensão
              universitária do programa Educação e Tecnologia Social.
            </p>
            <p>
              A concepção foi orientada por um diagnóstico realizado no contexto do
              <strong> Colégio Estadual Antônio Balbino</strong>, em Madre de Deus, Bahia. A proposta
              exigia observar uma realidade, ouvir pessoas e compreender um problema concreto
              antes de desenvolver qualquer solução.
            </p>
            <p>
              A escola forneceu o contexto do diagnóstico; a Rumo foi desenvolvida por Gabriel
              como parte da graduação. A plataforma não é apresentada como propriedade,
              responsabilidade técnica ou adoção oficial da escola ou da universidade.
            </p>
          </div>
        </section>

        <section className="about-bento" aria-label="Fundamentos da Rumo">
          <article className="about-bento-card about-problem-card">
            <ScanSearch size={28} aria-hidden="true" />
            <p className="about-kicker">O problema identificado</p>
            <h2>Informação existe. Encontrá-la, compreendê-la e organizá-la ainda é difícil.</h2>
            <p>
              O diagnóstico reuniu dúvidas sobre estudos, pesquisa e IA, ENEM, ensino superior,
              carreira, inclusão e acessibilidade. A Rumo organiza esses caminhos sem prometer
              respostas mágicas ou escolher pelo estudante.
            </p>
          </article>
          <article className="about-bento-card about-ods-card">
            <span className="about-ods-number">4</span>
            <div><p className="about-kicker">Educação de qualidade</p><h2>Conectada ao ODS 4</h2><p>A proposta amplia o acesso a conteúdos de orientação educacional, acadêmica e profissional em linguagem simples e acessível.</p></div>
          </article>
          <article className="about-bento-card"><GraduationCap size={25} aria-hidden="true" /><h3>Extensão universitária</h3><p>Conhecimento acadêmico aplicado a uma necessidade observada fora do ambiente puramente técnico.</p></article>
          <article className="about-bento-card"><MapPin size={25} aria-hidden="true" /><h3>Madre de Deus, Bahia</h3><p>O contexto do Colégio Estadual Antônio Balbino orientou a escuta e o diagnóstico territorial.</p></article>
          <article className="about-bento-card"><BookOpenCheck size={25} aria-hidden="true" /><h3>Tecnologia como meio</h3><p>A solução começou pelo problema. Interface, arquitetura e conteúdo vieram depois.</p></article>
        </section>

        <section className="about-journey" aria-labelledby="about-journey-title">
          <div className="about-journey-intro">
            <p className="about-kicker">Da escuta à construção</p>
            <h2 id="about-journey-title">Uma sequência que mudou a lógica do desenvolvimento.</h2>
            <p>Em vez de começar por telas, frameworks ou funcionalidades, o projeto começou por pessoas, contexto e necessidades reais.</p>
          </div>
          <ol className="about-timeline">
            {timeline.map(([title, description], index) => (
              <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="about-mission" aria-labelledby="about-mission-title">
          <div className="about-mission-copy">
            <Sparkles size={28} aria-hidden="true" />
            <p className="about-kicker">Nossa missão</p>
            <h2 id="about-mission-title">Tornar informações importantes mais claras para que estudantes decidam com mais autonomia.</h2>
            <p>
              A Rumo oferece informação e orientação educativa. Ela não substitui professores,
              coordenação pedagógica, profissionais de saúde, orientação profissional, serviços
              de acessibilidade, instituições educacionais ou órgãos públicos.
            </p>
          </div>
          <ul className="about-commitments">
            <li><CheckCircle2 aria-hidden="true" /> Fontes oficiais e acadêmicas quando aplicável</li>
            <li><CheckCircle2 aria-hidden="true" /> Linguagem direta, acolhedora e responsável</li>
            <li><CheckCircle2 aria-hidden="true" /> Navegação previsível e acessível</li>
            <li><CheckCircle2 aria-hidden="true" /> Conteúdos sujeitos a revisão periódica</li>
          </ul>
        </section>

        <section className="about-values" aria-labelledby="about-values-title">
          <div className="about-values-heading"><p className="about-kicker">O que orienta cada decisão</p><h2 id="about-values-title">Princípios para construir com responsabilidade.</h2></div>
          <div className="about-values-grid">
            {values.map(({ title, description, icon: Icon }) => (
              <article key={title}><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section className="about-closing" aria-labelledby="about-closing-title">
          <div><Landmark size={28} aria-hidden="true" /><h2 id="about-closing-title">O projeto acadêmico foi o ponto de partida.</h2><p>Hoje, a Rumo continua evoluindo como software, conteúdo educacional e iniciativa de impacto social — aproximando universidade, conhecimento e sociedade.</p></div>
          <div className="about-closing-action"><Users size={23} aria-hidden="true" /><p>Seu caminho não precisa estar todo definido. Comece pelo próximo passo.</p><Link href="/estudar">Começar agora <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </section>
      </main>
      <Footer />
    </>
  )
}

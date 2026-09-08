# Limpeza — mapeamento completo da Rumo

## 1. Resumo executivo

Mapeamento de 08/09/2026, na branch `feat/plataforma-interna-v1`. Este documento prioriza o pedido final: mostrar pastas, subpastas e todos os arquivos, explicar suas responsabilidades e ajudar a decidir o que pode ser excluído futuramente.

**158 arquivos preexistentes foram inventariados, todos versionados**, excluindo os interiores de `.git/`, `.next/` e `node_modules/`. São 43 arquivos TSX, 70 guias individuais, 6 documentos Markdown e 14 arquivos públicos de mídia/documento. `Limpeza.md` é um novo arquivo adicional. `scripts/` existe, mas está vazio.

**Nenhuma limpeza foi executada.** Não houve exclusão, movimentação, renomeação, refatoração, instalação, atualização de dependências, commit, push, PR ou alteração da branch `master`. Build e servidor de validação regeneraram artefatos locais; o conteúdo original de `next-env.d.ts` foi reposto após a validação.

A estrutura modular dos 70 guias está íntegra. A busca ainda depende do shell e do adaptador antigos: excluí-los agora quebraria `/busca`. Há dois arquivos de código fora do grafo ativo das rotas, alguns exports sem consumidores e uma imagem duplicada byte a byte. Ausência de referência local não comprova ausência de uso externo de uma URL pública ou de valor documental.

## 2. Inventário completo

### Árvore de pastas, subpastas e arquivos

Todos os nomes abaixo correspondem a entradas reais, exceto a anotação explicativa dos interiores não enumerados. `.git/` contém metadados e histórico, não código-fonte. `.next/` e `node_modules/` são locais ignorados pelo Git e não devem ser apresentados como fontes da plataforma.

```text
rumo/
??? .git/ [interior resumido]
??? .gitignore
??? .next/ [interior resumido]
??? app/
?   ??? [categoria]/
?   ?   ??? [slug]/
?   ?   ?   ??? page.tsx
?   ?   ??? page.tsx
?   ??? busca/
?   ?   ??? page.tsx
?   ??? faq/
?   ?   ??? page.tsx
?   ??? globals.css
?   ??? layout.tsx
?   ??? loading.tsx
?   ??? page.tsx
?   ??? sobre/
?       ??? page.tsx
??? ARCHITECTURE_AUDIT.md
??? complemento-pedagogico-exemplos-estrategicos-carreira-ats.md
??? components/
?   ??? accessibility/
?   ?   ??? accessibility-panel.tsx
?   ??? brand/
?   ?   ??? rumo-brand.tsx
?   ??? cards/
?   ?   ??? category-card.tsx
?   ?   ??? guide-card.tsx
?   ??? category/
?   ?   ??? category-featured-guide-card.tsx
?   ?   ??? category-featured-guides.tsx
?   ?   ??? category-guide-library.tsx
?   ?   ??? category-hero-art.tsx
?   ?   ??? category-hero.tsx
?   ?   ??? category-learning-paths.tsx
?   ?   ??? category-trust-banner.tsx
?   ??? faq/
?   ?   ??? faq-accordion.tsx
?   ??? guide/
?   ?   ??? guide-checklist.tsx
?   ?   ??? guide-content.tsx
?   ?   ??? guide-hero.tsx
?   ?   ??? guide-page.tsx
?   ?   ??? guide-related.tsx
?   ?   ??? guide-resume-download.tsx
?   ?   ??? guide-section.tsx
?   ?   ??? guide-sources.tsx
?   ?   ??? guide-toc.tsx
?   ??? home/
?   ?   ??? faq-preview.tsx
?   ?   ??? featured-guides.tsx
?   ?   ??? hero.tsx
?   ?   ??? home-page.tsx
?   ?   ??? topics-section.tsx
?   ?   ??? trust-banner.tsx
?   ??? layout/
?   ?   ??? footer.tsx
?   ?   ??? header.tsx
?   ?   ??? logo.tsx
?   ?   ??? scroll-to-top.tsx
?   ??? loading/
?   ?   ??? initial-loading-screen.tsx
?   ?   ??? rumo-loading.tsx
?   ??? rumo-shell.tsx
?   ??? ui/
?       ??? button.tsx
??? components.json
??? contexto-pedagogico-pesquisa-alto-nivel-70-guias.md
??? contexto-pedagogico.md
??? data/
?   ??? content.ts
??? lib/
?   ??? utils.ts
??? Limpeza.md [novo relat?rio]
??? modules/
?   ??? content/
?       ??? data/
?       ?   ??? categories.ts
?       ?   ??? faqs.ts
?       ?   ??? guides/
?       ?       ??? carreira/
?       ?       ?   ??? como-adaptar-o-curriculo-para-uma-vaga.ts
?       ?       ?   ??? como-construir-experiencia-antes-do-primeiro-emprego.ts
?       ?       ?   ??? como-criar-um-plano-de-carreira-inicial.ts
?       ?       ?   ??? como-criar-um-portfolio-mesmo-sendo-estudante.ts
?       ?       ?   ??? como-explicar-projetos-pessoais-em-processos-seletivos.ts
?       ?       ?   ??? como-lidar-com-rejeicoes-em-processos-seletivos.ts
?       ?       ?   ??? como-montar-seu-primeiro-curriculo-sem-experiencia.ts
?       ?       ?   ??? como-pesquisar-profissoes-antes-de-escolher-uma-area.ts
?       ?       ?   ??? como-procurar-estagio-pela-primeira-vez.ts
?       ?       ?   ??? como-responder-fale-sobre-voce.ts
?       ?       ?   ??? como-se-preparar-para-uma-entrevista.ts
?       ?       ?   ??? habilidades-tecnicas-e-comportamentais-qual-a-diferenca.ts
?       ?       ?   ??? index.ts
?       ?       ?   ??? linkedin-para-estudantes-como-comecar.ts
?       ?       ?   ??? o-que-colocar-e-o-que-evitar-no-curriculo.ts
?       ?       ??? enem/
?       ?       ?   ??? como-comecar-a-se-preparar-para-o-enem.ts
?       ?       ?   ??? como-escolher-entre-faculdade-curso-tecnico-trabalho-e-outros-caminhos.ts
?       ?       ?   ??? como-estudar-redacao-para-o-enem.ts
?       ?       ?   ??? como-funciona-o-enem.ts
?       ?       ?   ??? como-funciona-o-fies.ts
?       ?       ?   ??? como-funciona-o-prouni.ts
?       ?       ?   ??? como-organizar-um-cronograma-para-o-enem.ts
?       ?       ?   ??? como-pesquisar-sisu-sem-se-perder.ts
?       ?       ?   ??? como-usar-provas-antigas-do-enem.ts
?       ?       ?   ??? fiz-o-enem-e-agora.ts
?       ?       ?   ??? index.ts
?       ?       ?   ??? o-que-fazer-na-semana-da-prova.ts
?       ?       ?   ??? o-que-fazer-no-dia-da-prova.ts
?       ?       ??? ensino-superior/
?       ?       ?   ??? bacharelado-licenciatura-e-tecnologo-qual-a-diferenca.ts
?       ?       ?   ??? como-aproveitar-oportunidades-dentro-da-universidade.ts
?       ?       ?   ??? como-avaliar-custo-total-de-uma-graduacao.ts
?       ?       ?   ??? como-escolher-um-curso-superior.ts
?       ?       ?   ??? como-funciona-a-vida-universitaria.ts
?       ?       ?   ??? como-ler-a-grade-curricular-de-um-curso.ts
?       ?       ?   ??? como-pesquisar-uma-faculdade-ou-universidade.ts
?       ?       ?   ??? como-planejar-os-primeiros-semestres-da-faculdade.ts
?       ?       ?   ??? como-procurar-bolsas-de-estudo.ts
?       ?       ?   ??? como-saber-se-quero-mesmo-fazer-faculdade.ts
?       ?       ?   ??? index.ts
?       ?       ?   ??? presencial-hibrido-ou-ead-como-escolher.ts
?       ?       ??? estudar/
?       ?       ?   ??? como-estudar-matematica-sem-decorar-tudo.ts
?       ?       ?   ??? como-estudar-para-provas-sem-deixar-tudo-para-a-ultima-hora.ts
?       ?       ?   ??? como-estudar-quando-voce-esta-cansado.ts
?       ?       ?   ??? como-fazer-anotacoes-uteis.ts
?       ?       ?   ??? como-lidar-com-procrastinacao-nos-estudos.ts
?       ?       ?   ??? como-melhorar-em-interpretacao-de-texto.ts
?       ?       ?   ??? como-montar-uma-rotina-de-estudos-realista.ts
?       ?       ?   ??? como-organizar-seus-estudos-sem-se-sobrecarregar.ts
?       ?       ?   ??? como-revisar-e-fixar-o-conteudo-de-forma-eficiente.ts
?       ?       ?   ??? como-usar-questoes-e-simulados-para-aprender.ts
?       ?       ?   ??? foco-e-concentracao-como-reduzir-distracoes.ts
?       ?       ?   ??? gestao-do-tempo-para-estudantes.ts
?       ?       ?   ??? index.ts
?       ?       ?   ??? metas-de-estudo-como-definir-objetivos-que-fazem-sentido.ts
?       ?       ?   ??? resumos-e-mapas-mentais-quando-ajudam-e-quando-atrapalham.ts
?       ?       ?   ??? tecnicas-de-estudo-que-realmente-funcionam.ts
?       ?       ??? inclusao/
?       ?       ?   ??? acessibilidade-o-que-significa-na-pratica.ts
?       ?       ?   ??? como-organizar-estudos-quando-mudancas-de-rotina-atrapalham.ts
?       ?       ?   ??? como-pedir-apoio-na-escola-ou-faculdade.ts
?       ?       ?   ??? como-tornar-materiais-de-estudo-mais-acessiveis.ts
?       ?       ?   ??? diferentes-formas-de-aprender-sem-criar-rotulos.ts
?       ?       ?   ??? index.ts
?       ?       ?   ??? onde-buscar-ajuda-quando-uma-dificuldade-esta-atrapalhando-os-estudos.ts
?       ?       ?   ??? respeito-as-diferencas-no-ambiente-escolar.ts
?       ?       ?   ??? tecnologia-assistiva-e-recursos-de-acessibilidade.ts
?       ?       ??? index.ts
?       ?       ??? pesquisa-ia/
?       ?           ??? como-citar-fontes-em-trabalhos-escolares.ts
?       ?           ??? como-comparar-duas-respostas-diferentes-na-internet.ts
?       ?           ??? como-criar-bons-prompts-para-estudar.ts
?       ?           ??? como-fazer-uma-pesquisa-confiavel-na-internet.ts
?       ?           ??? como-identificar-desinformacao-e-conteudo-enganoso.ts
?       ?           ??? como-saber-se-uma-fonte-e-confiavel.ts
?       ?           ??? como-usar-ia-sem-copiar-trabalhos.ts
?       ?           ??? index.ts
?       ?           ??? pesquisa-inteligente-com-ia-por-onde-comecar.ts
?       ?           ??? por-que-a-ia-pode-errar-e-inventar-informacoes.ts
?       ?           ??? privacidade-e-dados-pessoais-ao-usar-tecnologia.ts
?       ??? domain/
?       ?   ??? category.ts
?       ?   ??? faq.ts
?       ?   ??? guide.ts
?       ??? services/
?           ??? content-service.ts
??? next-env.d.ts
??? next.config.mjs
??? node_modules/ [interior resumido]
??? package.json
??? pnpm-lock.yaml
??? pnpm-workspace.yaml
??? postcss.config.mjs
??? prompt-mestre-povoamento-70-guias-rumo.md
??? public/
?   ??? apple-icon.png
?   ??? curriculo/
?   ?   ??? Modelo_Curriculo_Universal_ATS_Rumo.docx
?   ??? explorar.png
?   ??? icon-dark-32x32.png
?   ??? icon-light-32x32.png
?   ??? icon.svg
?   ??? images/
?   ?   ??? categories/
?   ?       ??? estudar-hero.png
?   ??? logo-pequena.png
?   ??? logo.png
?   ??? placeholder-logo.png
?   ??? placeholder-logo.svg
?   ??? placeholder-user.jpg
?   ??? placeholder.jpg
?   ??? placeholder.svg
??? scripts/ [vazio]
??? SobreMim.md
??? tsconfig.json
```

### Catálogo arquivo por arquivo

Todos os 158 arquivos preexistentes da tabela são **versionados**. Tamanhos em KiB, sem compressão. A extensão está no nome e na coluna de classificação. “Utilizado” inclui imports de tipos e convenções de ferramentas; não significa necessariamente JavaScript entregue ao navegador. Uso documental não depende de import no código.

| Caminho relativo / nome | Extens?o / classe | Tamanho | M?dulo | Responsabilidade | Uso |
| --- | --- | --- | --- | --- | --- |
| `.gitignore` | `sem extens?o` / configura??o/desenvolvimento | 0.2 KiB | Infraestrutura / raiz | Regras de arquivos locais ignorados. | Utilizado / c?digo ou ferramenta |
| `app/busca/page.tsx` | `.tsx` / produ??o | 0.3 KiB | Rotas/apresenta??o | Entrada /busca usando shell legado. | Ativo / conven??o Next |
| `app/faq/page.tsx` | `.tsx` / produ??o | 1.4 KiB | Rotas/apresenta??o | P?gina FAQ e accordion moderno. | Ativo / conven??o Next |
| `app/globals.css` | `.css` / produ??o | 88.9 KiB | Rotas/apresenta??o | Tokens, estilos antigos/modernos, responsividade e acessibilidade. | Ativo / conven??o Next |
| `app/layout.tsx` | `.tsx` / produ??o | 1.1 KiB | Rotas/apresenta??o | Documento HTML, fonte, metadados, splash, analytics e retorno ao topo. | Ativo / conven??o Next |
| `app/loading.tsx` | `.tsx` / produ??o | 0.1 KiB | Rotas/apresenta??o | Fallback por conven??o Next.js. | Ativo / conven??o Next |
| `app/page.tsx` | `.tsx` / produ??o | 0.1 KiB | Rotas/apresenta??o | Entrada / e composi??o HomePage. | Ativo / conven??o Next |
| `app/sobre/page.tsx` | `.tsx` / produ??o | 9.2 KiB | Rotas/apresenta??o | P?gina institucional e conte?do da origem da Rumo. | Ativo / conven??o Next |
| `app/[categoria]/page.tsx` | `.tsx` / produ??o | 1.6 KiB | Rotas/apresenta??o | P?gina din?mica de categoria; valida??o e par?metros est?ticos. | Ativo / conven??o Next |
| `app/[categoria]/[slug]/page.tsx` | `.tsx` / produ??o | 1.0 KiB | Rotas/apresenta??o | P?gina din?mica de guia; valida combina??o categoria/slug. | Ativo / conven??o Next |
| `ARCHITECTURE_AUDIT.md` | `.md` / documenta??o | 41.7 KiB | Documenta??o | Auditoria anterior e hist?rico arquitetural. | Documental; n?o importado no runtime |
| `complemento-pedagogico-exemplos-estrategicos-carreira-ats.md` | `.md` / documenta??o | 134.4 KiB | Documenta??o | Complemento editorial de exemplos e curr?culo/ATS. | Documental; n?o importado no runtime |
| `components/accessibility/accessibility-panel.tsx` | `.tsx` / produ??o | 2.4 KiB | accessibility | Controles de texto, contraste e movimento; classes no html. | Ativo |
| `components/brand/rumo-brand.tsx` | `.tsx` / produ??o | 6.8 KiB | brand | Wordmark ativo e dois desenhos SVG sem consumidores encontrados. | Ativo parcialmente |
| `components/cards/category-card.tsx` | `.tsx` / produ??o | 1.1 KiB | cards | Card de categoria da Home. | Ativo |
| `components/cards/guide-card.tsx` | `.tsx` / produ??o | 1.5 KiB | cards | Card visual de guia da Home. | Ativo |
| `components/category/category-featured-guide-card.tsx` | `.tsx` / produ??o | 1.3 KiB | category | Card de guia em destaque na categoria. | Ativo |
| `components/category/category-featured-guides.tsx` | `.tsx` / produ??o | 1.5 KiB | category | Se??o de destaques e mensagem de lista vazia. | Ativo |
| `components/category/category-guide-library.tsx` | `.tsx` / produ??o | 1.6 KiB | category | Lista de guias n?o destacados e ?ncora todos-os-guias. | Ativo |
| `components/category/category-hero-art.tsx` | `.tsx` / produ??o | 0.9 KiB | category | Imagem de Estudar e fallback das outras categorias. | Ativo |
| `components/category/category-hero.tsx` | `.tsx` / produ??o | 1.9 KiB | category | T?tulo, descri??o, breadcrumb e apresenta??o da categoria. | Ativo |
| `components/category/category-learning-paths.tsx` | `.tsx` / produ??o | 1.8 KiB | category | Cards informativos dos caminhos, sem links. | Ativo |
| `components/category/category-trust-banner.tsx` | `.tsx` / produ??o | 0.8 KiB | category | Faixa de compromissos da categoria. | Ativo |
| `components/faq/faq-accordion.tsx` | `.tsx` / produ??o | 1.4 KiB | faq | Accordion de FAQ; allowMultiple n?o implementado. | Ativo |
| `components/guide/guide-checklist.tsx` | `.tsx` / produ??o | 0.5 KiB | guide | Lista editorial de verifica??o. | Ativo |
| `components/guide/guide-content.tsx` | `.tsx` / produ??o | 0.9 KiB | guide | Objetivos e composi??o das se??es. | Ativo |
| `components/guide/guide-hero.tsx` | `.tsx` / produ??o | 1.3 KiB | guide | Cabe?alho e informa??es do guia. | Ativo |
| `components/guide/guide-page.tsx` | `.tsx` / produ??o | 1.3 KiB | guide | Composi??o completa; recurso de curr?culo condicionado por slug. | Ativo |
| `components/guide/guide-related.tsx` | `.tsx` / produ??o | 0.8 KiB | guide | Cards de guias relacionados. | Ativo |
| `components/guide/guide-resume-download.tsx` | `.tsx` / produ??o | 0.8 KiB | guide | Bloco/link para download do curr?culo DOCX. | Ativo |
| `components/guide/guide-section.tsx` | `.tsx` / produ??o | 1.8 KiB | guide | Renderizador de par?grafos, listas, exemplos, dicas e alertas. | Ativo |
| `components/guide/guide-sources.tsx` | `.tsx` / produ??o | 0.8 KiB | guide | Fontes e institui??es com links externos. | Ativo |
| `components/guide/guide-toc.tsx` | `.tsx` / produ??o | 1.4 KiB | guide | Sum?rio recolh?vel e ?ncoras. | Ativo |
| `components/home/faq-preview.tsx` | `.tsx` / produ??o | 1.6 KiB | home | FAQ resumida com estado pr?prio de abertura. | Ativo |
| `components/home/featured-guides.tsx` | `.tsx` / produ??o | 1.5 KiB | home | Se??o de guias destacados da Home. | Ativo |
| `components/home/hero.tsx` | `.tsx` / produ??o | 2.0 KiB | home | Hero, a??es principais e logo.png. | Ativo |
| `components/home/home-page.tsx` | `.tsx` / produ??o | 0.9 KiB | home | Composi??o da Home e consultas ao servi?o. | Ativo |
| `components/home/topics-section.tsx` | `.tsx` / produ??o | 1.2 KiB | home | Se??o de categorias. | Ativo |
| `components/home/trust-banner.tsx` | `.tsx` / produ??o | 1.6 KiB | home | Compromissos na Home. | Ativo |
| `components/layout/footer.tsx` | `.tsx` / produ??o | 2.5 KiB | layout | Rodap? moderno com navega??o e aviso institucional. | Ativo |
| `components/layout/header.tsx` | `.tsx` / produ??o | 3.7 KiB | layout | Cabe?alho moderno, estado ativo e menu m?vel. | Ativo |
| `components/layout/logo.tsx` | `.tsx` / produ??o | 0.5 KiB | layout | Link ? Home com Wordmark. | Ativo |
| `components/layout/scroll-to-top.tsx` | `.tsx` / produ??o | 1.0 KiB | layout | Bot?o flutuante de retorno ao topo. | Ativo |
| `components/loading/initial-loading-screen.tsx` | `.tsx` / produ??o | 1.3 KiB | loading | Splash global com timers de 1900/2250 ms. | Ativo |
| `components/loading/rumo-loading.tsx` | `.tsx` / produ??o | 0.9 KiB | loading | Fallback que se oculta ap?s 2000 ms. | Ativo |
| `components/rumo-shell.tsx` | `.tsx` / produ??o | 5.9 KiB | Busca / legado | Shell legado ativo: layout, busca, cards e FAQ antigos. | Ativo |
| `components/ui/button.tsx` | `.tsx` / produ??o | 3.1 KiB | ui | Bot?o Base UI/shadcn com variantes; sem importador ativo. | Aparentemente n?o utilizado |
| `components.json` | `.json` / configura??o/desenvolvimento | 0.4 KiB | Infraestrutura / raiz | Configura??o shadcn, aliases e caminho de estilos. | Utilizado / c?digo ou ferramenta |
| `contexto-pedagogico-pesquisa-alto-nivel-70-guias.md` | `.md` / documenta??o | 1089.5 KiB | Documenta??o | Biblioteca de pesquisa e fundamenta??o dos guias. | Documental; n?o importado no runtime |
| `contexto-pedagogico.md` | `.md` / documenta??o | 215.3 KiB | Documenta??o | Material pedag?gico de origem. | Documental; n?o importado no runtime |
| `data/content.ts` | `.ts` / produ??o | 1.4 KiB | Infraestrutura / data | Adaptador de compatibilidade, incluindo readTime textual. | Utilizado / c?digo ou ferramenta |
| `lib/utils.ts` | `.ts` / configura??o/desenvolvimento | 0.2 KiB | Infraestrutura / lib | cn para composi??o de classes; s? consumido pelo bot?o. | S? bot?o sem uso; alias do gerador |
| `modules/content/data/categories.ts` | `.ts` / produ??o | 9.6 KiB | Conte?do / data | Seis categorias, destaques e caminhos. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/faqs.ts` | `.ts` / produ??o | 1.9 KiB | Conte?do / data | Seis perguntas e respostas. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-adaptar-o-curriculo-para-uma-vaga.ts` | `.ts` / produ??o | 16.6 KiB | Conte?do / carreira | Guia editorial: Como adaptar o currículo para uma vaga. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-construir-experiencia-antes-do-primeiro-emprego.ts` | `.ts` / produ??o | 15.3 KiB | Conte?do / carreira | Guia editorial: Como construir experiência antes do primeiro emprego. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-criar-um-plano-de-carreira-inicial.ts` | `.ts` / produ??o | 15.3 KiB | Conte?do / carreira | Guia editorial: Como criar um plano de carreira inicial. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-criar-um-portfolio-mesmo-sendo-estudante.ts` | `.ts` / produ??o | 15.3 KiB | Conte?do / carreira | Guia editorial: Como criar um portfólio mesmo sendo estudante. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-explicar-projetos-pessoais-em-processos-seletivos.ts` | `.ts` / produ??o | 15.0 KiB | Conte?do / carreira | Guia editorial: Como explicar projetos pessoais em processos seletivos. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-lidar-com-rejeicoes-em-processos-seletivos.ts` | `.ts` / produ??o | 15.3 KiB | Conte?do / carreira | Guia editorial: Como lidar com rejeições em processos seletivos. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-montar-seu-primeiro-curriculo-sem-experiencia.ts` | `.ts` / produ??o | 17.0 KiB | Conte?do / carreira | Guia editorial: Como montar seu primeiro currículo sem experiência. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-pesquisar-profissoes-antes-de-escolher-uma-area.ts` | `.ts` / produ??o | 15.3 KiB | Conte?do / carreira | Guia editorial: Como pesquisar profissões antes de escolher uma área. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-procurar-estagio-pela-primeira-vez.ts` | `.ts` / produ??o | 15.4 KiB | Conte?do / carreira | Guia editorial: Como procurar estágio pela primeira vez. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-responder-fale-sobre-voce.ts` | `.ts` / produ??o | 14.9 KiB | Conte?do / carreira | Guia editorial: Como responder 'fale sobre você'. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/como-se-preparar-para-uma-entrevista.ts` | `.ts` / produ??o | 15.2 KiB | Conte?do / carreira | Guia editorial: Como se preparar para uma entrevista. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/habilidades-tecnicas-e-comportamentais-qual-a-diferenca.ts` | `.ts` / produ??o | 15.3 KiB | Conte?do / carreira | Guia editorial: Habilidades técnicas e comportamentais: qual a diferença. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/index.ts` | `.ts` / produ??o | 2.2 KiB | Conte?do / carreira | ?ndice de guias da categoria carreira. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/linkedin-para-estudantes-como-comecar.ts` | `.ts` / produ??o | 15.1 KiB | Conte?do / carreira | Guia editorial: LinkedIn para estudantes: como começar. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/carreira/o-que-colocar-e-o-que-evitar-no-curriculo.ts` | `.ts` / produ??o | 15.6 KiB | Conte?do / carreira | Guia editorial: O que colocar e o que evitar no currículo. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/como-comecar-a-se-preparar-para-o-enem.ts` | `.ts` / produ??o | 14.7 KiB | Conte?do / enem | Guia editorial: Como começar a se preparar para o ENEM. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/como-escolher-entre-faculdade-curso-tecnico-trabalho-e-outros-caminhos.ts` | `.ts` / produ??o | 15.0 KiB | Conte?do / enem | Guia editorial: Como escolher entre faculdade, curso técnico, trabalho e outros caminhos. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/como-estudar-redacao-para-o-enem.ts` | `.ts` / produ??o | 14.8 KiB | Conte?do / enem | Guia editorial: Como estudar redação para o ENEM. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/como-funciona-o-enem.ts` | `.ts` / produ??o | 14.8 KiB | Conte?do / enem | Guia editorial: Como funciona o ENEM. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/como-funciona-o-fies.ts` | `.ts` / produ??o | 14.7 KiB | Conte?do / enem | Guia editorial: Como funciona o Fies. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/como-funciona-o-prouni.ts` | `.ts` / produ??o | 14.7 KiB | Conte?do / enem | Guia editorial: Como funciona o Prouni. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/como-organizar-um-cronograma-para-o-enem.ts` | `.ts` / produ??o | 14.8 KiB | Conte?do / enem | Guia editorial: Como organizar um cronograma para o ENEM. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/como-pesquisar-sisu-sem-se-perder.ts` | `.ts` / produ??o | 14.7 KiB | Conte?do / enem | Guia editorial: Como pesquisar Sisu sem se perder. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/como-usar-provas-antigas-do-enem.ts` | `.ts` / produ??o | 14.8 KiB | Conte?do / enem | Guia editorial: Como usar provas antigas do ENEM. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/fiz-o-enem-e-agora.ts` | `.ts` / produ??o | 14.6 KiB | Conte?do / enem | Guia editorial: Fiz o ENEM. E agora?. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/index.ts` | `.ts` / produ??o | 1.5 KiB | Conte?do / enem | ?ndice de guias da categoria enem. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/o-que-fazer-na-semana-da-prova.ts` | `.ts` / produ??o | 14.6 KiB | Conte?do / enem | Guia editorial: O que fazer na semana da prova. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/enem/o-que-fazer-no-dia-da-prova.ts` | `.ts` / produ??o | 14.5 KiB | Conte?do / enem | Guia editorial: O que fazer no dia da prova. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/bacharelado-licenciatura-e-tecnologo-qual-a-diferenca.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / ensino-superior | Guia editorial: Bacharelado, licenciatura e tecnólogo: qual a diferença. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/como-aproveitar-oportunidades-dentro-da-universidade.ts` | `.ts` / produ??o | 13.9 KiB | Conte?do / ensino-superior | Guia editorial: Como aproveitar oportunidades dentro da universidade. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/como-avaliar-custo-total-de-uma-graduacao.ts` | `.ts` / produ??o | 13.6 KiB | Conte?do / ensino-superior | Guia editorial: Como avaliar custo total de uma graduação. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/como-escolher-um-curso-superior.ts` | `.ts` / produ??o | 13.8 KiB | Conte?do / ensino-superior | Guia editorial: Como escolher um curso superior. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/como-funciona-a-vida-universitaria.ts` | `.ts` / produ??o | 13.8 KiB | Conte?do / ensino-superior | Guia editorial: Como funciona a vida universitária. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/como-ler-a-grade-curricular-de-um-curso.ts` | `.ts` / produ??o | 13.7 KiB | Conte?do / ensino-superior | Guia editorial: Como ler a grade curricular de um curso. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/como-pesquisar-uma-faculdade-ou-universidade.ts` | `.ts` / produ??o | 13.7 KiB | Conte?do / ensino-superior | Guia editorial: Como pesquisar uma faculdade ou universidade. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/como-planejar-os-primeiros-semestres-da-faculdade.ts` | `.ts` / produ??o | 13.7 KiB | Conte?do / ensino-superior | Guia editorial: Como planejar os primeiros semestres da faculdade. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/como-procurar-bolsas-de-estudo.ts` | `.ts` / produ??o | 13.7 KiB | Conte?do / ensino-superior | Guia editorial: Como procurar bolsas de estudo. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/como-saber-se-quero-mesmo-fazer-faculdade.ts` | `.ts` / produ??o | 13.6 KiB | Conte?do / ensino-superior | Guia editorial: Como saber se quero mesmo fazer faculdade. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/index.ts` | `.ts` / produ??o | 1.6 KiB | Conte?do / ensino-superior | ?ndice de guias da categoria ensino-superior. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/ensino-superior/presencial-hibrido-ou-ead-como-escolher.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / ensino-superior | Guia editorial: Presencial, híbrido ou EAD: como escolher. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-estudar-matematica-sem-decorar-tudo.ts` | `.ts` / produ??o | 14.5 KiB | Conte?do / estudar | Guia editorial: Como estudar matemática sem decorar tudo. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-estudar-para-provas-sem-deixar-tudo-para-a-ultima-hora.ts` | `.ts` / produ??o | 14.2 KiB | Conte?do / estudar | Guia editorial: Como estudar para provas sem deixar tudo para a última hora. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-estudar-quando-voce-esta-cansado.ts` | `.ts` / produ??o | 14.3 KiB | Conte?do / estudar | Guia editorial: Como estudar quando você está cansado. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-fazer-anotacoes-uteis.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / estudar | Guia editorial: Como fazer anotações úteis. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-lidar-com-procrastinacao-nos-estudos.ts` | `.ts` / produ??o | 14.2 KiB | Conte?do / estudar | Guia editorial: Como lidar com procrastinação nos estudos. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-melhorar-em-interpretacao-de-texto.ts` | `.ts` / produ??o | 14.4 KiB | Conte?do / estudar | Guia editorial: Como melhorar em interpretação de texto. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-montar-uma-rotina-de-estudos-realista.ts` | `.ts` / produ??o | 13.9 KiB | Conte?do / estudar | Guia editorial: Como montar uma rotina de estudos realista. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-organizar-seus-estudos-sem-se-sobrecarregar.ts` | `.ts` / produ??o | 14.4 KiB | Conte?do / estudar | Guia editorial: Como organizar seus estudos sem se sobrecarregar. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-revisar-e-fixar-o-conteudo-de-forma-eficiente.ts` | `.ts` / produ??o | 14.3 KiB | Conte?do / estudar | Guia editorial: Como revisar e fixar o conteúdo de forma eficiente. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/como-usar-questoes-e-simulados-para-aprender.ts` | `.ts` / produ??o | 14.1 KiB | Conte?do / estudar | Guia editorial: Como usar questões e simulados para aprender. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/foco-e-concentracao-como-reduzir-distracoes.ts` | `.ts` / produ??o | 14.3 KiB | Conte?do / estudar | Guia editorial: Foco e concentração: como reduzir distrações. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/gestao-do-tempo-para-estudantes.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / estudar | Guia editorial: Gestão do tempo para estudantes. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/index.ts` | `.ts` / produ??o | 2.3 KiB | Conte?do / estudar | ?ndice de guias da categoria estudar. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/metas-de-estudo-como-definir-objetivos-que-fazem-sentido.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / estudar | Guia editorial: Metas de estudo: como definir objetivos que fazem sentido. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/resumos-e-mapas-mentais-quando-ajudam-e-quando-atrapalham.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / estudar | Guia editorial: Resumos e mapas mentais: quando ajudam e quando atrapalham. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/estudar/tecnicas-de-estudo-que-realmente-funcionam.ts` | `.ts` / produ??o | 14.8 KiB | Conte?do / estudar | Guia editorial: Técnicas de estudo que realmente funcionam. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/inclusao/acessibilidade-o-que-significa-na-pratica.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / inclusao | Guia editorial: Acessibilidade: o que significa na prática. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/inclusao/como-organizar-estudos-quando-mudancas-de-rotina-atrapalham.ts` | `.ts` / produ??o | 13.9 KiB | Conte?do / inclusao | Guia editorial: Como organizar estudos quando mudanças de rotina atrapalham. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/inclusao/como-pedir-apoio-na-escola-ou-faculdade.ts` | `.ts` / produ??o | 13.8 KiB | Conte?do / inclusao | Guia editorial: Como pedir apoio na escola ou faculdade. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/inclusao/como-tornar-materiais-de-estudo-mais-acessiveis.ts` | `.ts` / produ??o | 13.8 KiB | Conte?do / inclusao | Guia editorial: Como tornar materiais de estudo mais acessíveis. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/inclusao/diferentes-formas-de-aprender-sem-criar-rotulos.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / inclusao | Guia editorial: Diferentes formas de aprender sem criar rótulos. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/inclusao/index.ts` | `.ts` / produ??o | 1.4 KiB | Conte?do / inclusao | ?ndice de guias da categoria inclusao. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/inclusao/onde-buscar-ajuda-quando-uma-dificuldade-esta-atrapalhando-os-estudos.ts` | `.ts` / produ??o | 13.9 KiB | Conte?do / inclusao | Guia editorial: Onde buscar ajuda quando uma dificuldade está atrapalhando os estudos. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/inclusao/respeito-as-diferencas-no-ambiente-escolar.ts` | `.ts` / produ??o | 13.6 KiB | Conte?do / inclusao | Guia editorial: Respeito às diferenças no ambiente escolar. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/inclusao/tecnologia-assistiva-e-recursos-de-acessibilidade.ts` | `.ts` / produ??o | 14.1 KiB | Conte?do / inclusao | Guia editorial: Tecnologia assistiva e recursos de acessibilidade. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/index.ts` | `.ts` / produ??o | 0.5 KiB | Conte?do / global | Agrega??o global dos seis ?ndices. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/como-citar-fontes-em-trabalhos-escolares.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / pesquisa-ia | Guia editorial: Como citar fontes em trabalhos escolares. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/como-comparar-duas-respostas-diferentes-na-internet.ts` | `.ts` / produ??o | 13.9 KiB | Conte?do / pesquisa-ia | Guia editorial: Como comparar duas respostas diferentes na internet. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/como-criar-bons-prompts-para-estudar.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / pesquisa-ia | Guia editorial: Como criar bons prompts para estudar. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/como-fazer-uma-pesquisa-confiavel-na-internet.ts` | `.ts` / produ??o | 14.3 KiB | Conte?do / pesquisa-ia | Guia editorial: Como fazer uma pesquisa confiável na internet. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/como-identificar-desinformacao-e-conteudo-enganoso.ts` | `.ts` / produ??o | 14.1 KiB | Conte?do / pesquisa-ia | Guia editorial: Como identificar desinformação e conteúdo enganoso. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/como-saber-se-uma-fonte-e-confiavel.ts` | `.ts` / produ??o | 14.0 KiB | Conte?do / pesquisa-ia | Guia editorial: Como saber se uma fonte é confiável. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/como-usar-ia-sem-copiar-trabalhos.ts` | `.ts` / produ??o | 14.2 KiB | Conte?do / pesquisa-ia | Guia editorial: Como usar IA sem copiar trabalhos. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/index.ts` | `.ts` / produ??o | 1.5 KiB | Conte?do / pesquisa-ia | ?ndice de guias da categoria pesquisa-ia. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/pesquisa-inteligente-com-ia-por-onde-comecar.ts` | `.ts` / produ??o | 14.5 KiB | Conte?do / pesquisa-ia | Guia editorial: Pesquisa inteligente com IA: por onde começar. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/por-que-a-ia-pode-errar-e-inventar-informacoes.ts` | `.ts` / produ??o | 14.4 KiB | Conte?do / pesquisa-ia | Guia editorial: Por que a IA pode errar e inventar informações. | Utilizado / c?digo ou ferramenta |
| `modules/content/data/guides/pesquisa-ia/privacidade-e-dados-pessoais-ao-usar-tecnologia.ts` | `.ts` / produ??o | 14.4 KiB | Conte?do / pesquisa-ia | Guia editorial: Privacidade e dados pessoais ao usar tecnologia. | Utilizado / c?digo ou ferramenta |
| `modules/content/domain/category.ts` | `.ts` / produ??o | 0.8 KiB | Conte?do / domain | Tipos de categoria e caminhos de aprendizagem. | Utilizado / c?digo ou ferramenta |
| `modules/content/domain/faq.ts` | `.ts` / produ??o | 0.2 KiB | Conte?do / domain | Contrato FAQItem. | Utilizado / c?digo ou ferramenta |
| `modules/content/domain/guide.ts` | `.ts` / produ??o | 0.6 KiB | Conte?do / domain | Contratos Guide, GuideSection e GuideSource. | Utilizado / c?digo ou ferramenta |
| `modules/content/services/content-service.ts` | `.ts` / produ??o | 2.9 KiB | Conte?do / services | Consultas locais de categorias, guias, relacionados e FAQ. | Utilizado / c?digo ou ferramenta |
| `next-env.d.ts` | `.ts` / gerado/configura??o | 0.3 KiB | Infraestrutura / raiz | Declara??es geradas e refer?ncias aos tipos Next.js. | Utilizado / c?digo ou ferramenta |
| `next.config.mjs` | `.mjs` / configura??o/desenvolvimento | 0.2 KiB | Infraestrutura / raiz | Configura??es Next de build/tipos/imagens. | Utilizado / c?digo ou ferramenta |
| `package.json` | `.json` / configura??o/desenvolvimento | 0.7 KiB | Infraestrutura / raiz | Depend?ncias e scripts dev/build/start. | Utilizado / c?digo ou ferramenta |
| `pnpm-lock.yaml` | `.yaml` / configura??o/desenvolvimento | 110.3 KiB | Infraestrutura / raiz | Resolu??es e integridade de depend?ncias. | Utilizado / c?digo ou ferramenta |
| `pnpm-workspace.yaml` | `.yaml` / configura??o/desenvolvimento | 0.0 KiB | Infraestrutura / raiz | Exce??es minimumReleaseAgeExclude para Next. | Utilizado / c?digo ou ferramenta |
| `postcss.config.mjs` | `.mjs` / configura??o/desenvolvimento | 0.1 KiB | Infraestrutura / raiz | Integra??o Tailwind/PostCSS. | Utilizado / c?digo ou ferramenta |
| `prompt-mestre-povoamento-70-guias-rumo.md` | `.md` / documenta??o | 38.5 KiB | Documenta??o | Lista can?nica, contratos e especifica??o hist?rica de migra??o. | Documental; n?o importado no runtime |
| `public/apple-icon.png` | `.png` / m?dia | 2.6 KiB | M?dia p?blica | ?cone alternativo sem refer?ncia ativa encontrada. | Sem uso local encontrado; externo n?o confirmado |
| `public/curriculo/Modelo_Curriculo_Universal_ATS_Rumo.docx` | `.docx` / documento p?blico | 38.6 KiB | M?dia p?blica | Modelo p?blico de curr?culo para download. | Utilizado |
| `public/explorar.png` | `.png` / m?dia | 1033.9 KiB | M?dia p?blica | C?pia id?ntica da imagem ativa de Estudar. | Sem uso local encontrado; externo n?o confirmado |
| `public/icon-dark-32x32.png` | `.png` / m?dia | 0.6 KiB | M?dia p?blica | ?cone alternativo sem refer?ncia ativa encontrada. | Sem uso local encontrado; externo n?o confirmado |
| `public/icon-light-32x32.png` | `.png` / m?dia | 0.6 KiB | M?dia p?blica | ?cone alternativo sem refer?ncia ativa encontrada. | Sem uso local encontrado; externo n?o confirmado |
| `public/icon.svg` | `.svg` / m?dia | 1.3 KiB | M?dia p?blica | ?cone alternativo sem refer?ncia ativa encontrada. | Sem uso local encontrado; externo n?o confirmado |
| `public/images/categories/estudar-hero.png` | `.png` / m?dia | 1033.9 KiB | M?dia p?blica | Imagem de identidade visual/categoria; refer?ncias na se??o 9. | Utilizado |
| `public/logo-pequena.png` | `.png` / m?dia | 640.0 KiB | M?dia p?blica | Imagem de identidade visual/categoria; refer?ncias na se??o 9. | Utilizado |
| `public/logo.png` | `.png` / m?dia | 594.6 KiB | M?dia p?blica | Imagem de identidade visual/categoria; refer?ncias na se??o 9. | Utilizado |
| `public/placeholder-logo.png` | `.png` / m?dia | 0.6 KiB | M?dia p?blica | Imagem/?cone gen?rico de placeholder. | Sem uso local encontrado; externo n?o confirmado |
| `public/placeholder-logo.svg` | `.svg` / m?dia | 3.1 KiB | M?dia p?blica | Imagem/?cone gen?rico de placeholder. | Sem uso local encontrado; externo n?o confirmado |
| `public/placeholder-user.jpg` | `.jpg` / m?dia | 1.6 KiB | M?dia p?blica | Imagem/?cone gen?rico de placeholder. | Sem uso local encontrado; externo n?o confirmado |
| `public/placeholder.jpg` | `.jpg` / m?dia | 1.0 KiB | M?dia p?blica | Imagem/?cone gen?rico de placeholder. | Sem uso local encontrado; externo n?o confirmado |
| `public/placeholder.svg` | `.svg` / m?dia | 3.2 KiB | M?dia p?blica | Imagem/?cone gen?rico de placeholder. | Sem uso local encontrado; externo n?o confirmado |
| `SobreMim.md` | `.md` / documenta??o | 18.8 KiB | Documenta??o | Origem, autoria e projeto de extens?o. | Documental; n?o importado no runtime |
| `tsconfig.json` | `.json` / configura??o/desenvolvimento | 0.6 KiB | Infraestrutura / raiz | Configura??o TypeScript e aliases. | Utilizado / c?digo ou ferramenta |

`Limpeza.md`: documentação de auditoria desta entrega, na raiz; novo e não versionado. Seu tamanho final depende do próprio relatório.

### Pastas e arquivos locais

| Caminho | Papel e situação | Política para futura limpeza |
| --- | --- | --- |
| `.git/` | Histórico, índice, referências e configurações locais. | Preservar; não é resíduo de build. Interior e histórico de segredos não auditados exaustivamente. |
| `.next/` | Artefatos de desenvolvimento/build Next.js; ignorado. | Recriável, mas não limpar com servidor em uso; nenhuma limpeza nesta etapa. |
| `node_modules/` | Dependências instaladas; ignorado. | Gerenciado pelo pnpm; eventual recriação exige lockfile e ambiente disponíveis. |
| `scripts/` | Diretório vazio, não rastreado como pasta vazia pelo Git. | Não há script abandonado a excluir. |
| `styles/`, `hooks/`, `types/`, `tests/`, `__tests__/`, `docs/` | Não existem. Tipos estão em `modules/content/domain/`. | Não criar camadas vazias apenas para padronizar a árvore. |
| `.env*`, `.github/`, `.vercel/` | Não encontrados nesta cópia. `.vercel/` é apenas mencionado no ignore. | Configuração remota de deploy não confirmada. |

Não foram encontrados outros diretórios de mídia, fontes locais, PDFs, MDX ou scripts executáveis próprios.

## 3. Mapa de responsabilidades

```text
Rotas Next.js — app/
├── / → home/home-page.tsx
│   └── hero + topics-section + featured-guides + trust-banner + faq-preview
├── /[categoria] → components/category/*
├── /[categoria]/[slug] → guide/guide-page.tsx
│   ├── hero + content/section + toc + checklist + sources + related
│   └── resume-download [condicionado a um slug específico]
├── /faq → FAQAccordion
├── /sobre → composição e conteúdo institucional na própria página
└── /busca → components/rumo-shell.tsx [legado ativo, client]
    ├── Header + Footer + Logo antigos
    ├── SearchPanel → GuideCard antigo
    └── data/content.ts [adaptador de compatibilidade]

Domínio → modules/content/domain/{category,faq,guide}.ts
   ↑ contratos dos dados
Dados → modules/content/data/
├── categories.ts
├── faqs.ts
└── guides/index.ts
    └── seis índices por categoria → 70 arquivos individuais
   ↑ consultas em memória
Serviços → modules/content/services/content-service.ts
   ↑ consumidos pela Home e rotas dinâmicas

Compartilhados → components/layout/* + accessibility/* + cards/*
Transversal → app/layout.tsx
├── globals.css + Geist + metadados
├── InitialLoadingScreen + ScrollToTop
└── Analytics [produção]
Fallback → app/loading.tsx → RumoLoading
Mídia → public/* [imagens, metadados e download do currículo]
```

Contratos não dependem de React. Guias são dados editoriais sem JSX. Serviços consultam listas locais e componentes modernos recebem objetos por props. **Não há benefício demonstrado em reescrever a arquitetura ou adicionar backend.**

A busca mistura filtro, layout e compatibilidade em um módulo client. Seu adaptador importa o índice global de guias: há risco de carregar mais conteúdo do que a busca necessita, mas o tamanho efetivo do bundle **não foi medido**. Uma projeção dos campos de busca é melhoria concreta a verificar.

O serviço contém escolhas editoriais de destaques e FAQ. `GuidePage` conhece o slug do currículo e `GuideResumeDownload` conhece o caminho do DOCX. Pode-se representar esse recurso nos dados quando necessário, sem criar abstração genérica antecipada.

O grafo de imports locais considerou aliases `@/`, índices e imports de tipos: **nenhum ciclo encontrado**. Não foram encontradas chamadas de `import()` ou `require()` nas fontes próprias. Referências por string e convenções Next foram consideradas na classificação. Contratos externos indisponíveis não estão cobertos.

### Todos os componentes e seus consumidores diretos

| Arquivo | Importadores diretos | Situa??o |
| --- | --- | --- |
| `components/accessibility/accessibility-panel.tsx` | `components/layout/header.tsx`, `components/rumo-shell.tsx` | Ativo |
| `components/brand/rumo-brand.tsx` | `components/layout/logo.tsx` | Ativo parcialmente |
| `components/cards/category-card.tsx` | `components/home/topics-section.tsx` | Ativo |
| `components/cards/guide-card.tsx` | `components/home/featured-guides.tsx` | Ativo |
| `components/category/category-featured-guide-card.tsx` | `components/category/category-featured-guides.tsx` | Ativo |
| `components/category/category-featured-guides.tsx` | `app/[categoria]/page.tsx` | Ativo |
| `components/category/category-guide-library.tsx` | `app/[categoria]/page.tsx` | Ativo |
| `components/category/category-hero-art.tsx` | `components/category/category-hero.tsx` | Ativo |
| `components/category/category-hero.tsx` | `app/[categoria]/page.tsx` | Ativo |
| `components/category/category-learning-paths.tsx` | `app/[categoria]/page.tsx` | Ativo |
| `components/category/category-trust-banner.tsx` | `app/[categoria]/page.tsx` | Ativo |
| `components/faq/faq-accordion.tsx` | `app/faq/page.tsx` | Ativo |
| `components/guide/guide-checklist.tsx` | `components/guide/guide-page.tsx` | Ativo |
| `components/guide/guide-content.tsx` | `components/guide/guide-page.tsx` | Ativo |
| `components/guide/guide-hero.tsx` | `components/guide/guide-page.tsx` | Ativo |
| `components/guide/guide-page.tsx` | `app/[categoria]/[slug]/page.tsx` | Ativo |
| `components/guide/guide-related.tsx` | `components/guide/guide-page.tsx` | Ativo |
| `components/guide/guide-resume-download.tsx` | `components/guide/guide-page.tsx` | Ativo |
| `components/guide/guide-section.tsx` | `components/guide/guide-content.tsx` | Ativo |
| `components/guide/guide-sources.tsx` | `components/guide/guide-page.tsx` | Ativo |
| `components/guide/guide-toc.tsx` | `components/guide/guide-page.tsx` | Ativo |
| `components/home/faq-preview.tsx` | `components/home/home-page.tsx` | Ativo |
| `components/home/featured-guides.tsx` | `components/home/home-page.tsx` | Ativo |
| `components/home/hero.tsx` | `components/home/home-page.tsx` | Ativo |
| `components/home/home-page.tsx` | `app/page.tsx` | Ativo |
| `components/home/topics-section.tsx` | `components/home/home-page.tsx` | Ativo |
| `components/home/trust-banner.tsx` | `components/home/home-page.tsx` | Ativo |
| `components/layout/footer.tsx` | `app/faq/page.tsx`, `app/sobre/page.tsx`, `app/[categoria]/page.tsx`, `app/[categoria]/[slug]/page.tsx`, `components/home/home-page.tsx` | Ativo |
| `components/layout/header.tsx` | `app/faq/page.tsx`, `app/sobre/page.tsx`, `app/[categoria]/page.tsx`, `app/[categoria]/[slug]/page.tsx`, `components/home/home-page.tsx` | Ativo |
| `components/layout/logo.tsx` | `components/layout/footer.tsx`, `components/layout/header.tsx` | Ativo |
| `components/layout/scroll-to-top.tsx` | `app/layout.tsx` | Ativo |
| `components/loading/initial-loading-screen.tsx` | `app/layout.tsx` | Ativo |
| `components/loading/rumo-loading.tsx` | `app/loading.tsx` | Ativo |
| `components/rumo-shell.tsx` | `app/busca/page.tsx` | Ativo |
| `components/ui/button.tsx` | Nenhum | Aparentemente n?o utilizado |

## 4. Pontos positivos a preservar

- Contratos de domínio e dados editoriais separados da renderização.
- 70 guias individuais, seis índices de categorias e um índice global coerente.
- Validação conjunta de categoria e slug nas rotas.
- Home, categorias e guias compostos por componentes modernos.
- Textos renderizados pelo React, sem `dangerouslySetInnerHTML` encontrado.
- Semântica, rótulos ARIA e regras de movimento reduzido já presentes.
- Lockfile versionado, TypeScript estrito e documentos que preservam a história da extensão.

## 5. Problemas e recomendações priorizadas

Os códigos R01–R12 identificam as recomendações das próximas seções. Risco refere-se à futura alteração. Nenhuma recomendação constitui autorização.

| ID / prioridade | Problema e ação sugerida | Risco | Impacto | Esforço | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- |
| R01 / alta | Busca ainda importa shell e adaptador antigos. Migrar busca antes de removê-los. | médio | `/busca`, header, footer, cards e dados client | médio | Baseline da busca e navegação | Filtros, vazio, 70 links e desktop/mobile |
| R02 / alta | `ignoreBuildErrors: true` e ausência de lint. Tornar tipos bloqueantes e configurar lint efetivo. | baixo | Build e desenvolvimento | pequeno | Tipos atuais limpos e regras acordadas | tsc, lint e build |
| R03 / baixa | Botão, utilitário e exports sem consumidores. Confirmar intenção do kit e retirar apenas itens aprovados. | baixo | UI, aliases e geração shadcn | pequeno | Grafo e `components.json` | Imports, tsc e build |
| R04 / média | Cópia de imagem comprovada e assets sem referências. Verificar URLs externas antes de excluir. | médio | URLs públicas e documentos externos | pequeno | Confirmação de uso e valor documental | Imagens, referências e links |
| R05 / média | PNGs grandes e otimização de imagens desabilitada. Planejar formatos/dimensões e favicon adequado. | médio | Home, Estudar, Sobre e splash | médio | Mapa de URLs e baseline visual | Qualidade, proporções e bytes transferidos |
| R06 / média | CSS global extenso com camadas antigas/modernas. Organizar preservando cascata. | alto | Todas as telas | grande | R01 antes de excluir CSS legado | Comparação visual, breakpoints e estados |
| R07 / alta | Preferências globais em múltiplos painéis e sumário recolhido sem ocultação de foco. Corrigir estado compartilhado e foco. | médio | Acessibilidade e guias | médio | Comportamento esperado dos controles | Tab, Shift+Tab, Escape, resize e leitor de tela |
| R08 / média | Splash/fallback dependem de tempo fixo. Vincular feedback à carga e prever falha/ausência de JS. | médio | Primeiro acesso e navegação | médio | Reprodução com rede lenta | Conteúdo acessível e feedback enquanto necessário |
| R09 / média | Documentos na raiz sem índice. Organizar sem apagar material histórico. | baixo | Documentação e extensão | pequeno | Mapa de referências entre MD | Links e rastreabilidade |
| R10 / média | Sem testes persistentes de conteúdo; mensagem de destaques vazios desatualizada. Criar validações e revisar mensagem separadamente. | baixo | Categorias e 70 guias | médio | Lista canônica e autorização editorial | Slugs, índices, campos e relacionados |
| R11 / alta | Auditoria npm retorna 37 ocorrências. Triar alcance e planejar correções mínimas compatíveis. | médio | Dependências, CSS e pipeline | médio | Separar CLI/build/runtime | Novo audit, tipos, build e regressão visual |
| R12 / média | Metadados globais; 404 visual com HTTP 200 observado. Verificar comportamento de streaming/deploy e metadados por rota. | médio | SEO e URLs inválidas | médio | Reprodução no deploy | HTTP, noindex, títulos e conteúdo |

`FAQAccordionProps.allowMultiple` é aceito pelo tipo, mas não implementado. Remover a opção não usada ou implementar apenas quando houver consumidor: prioridade baixa, risco baixo, esforço pequeno; validar FAQ. `GuideRelated` usa o nome da categoria atual em todos os cards; hoje os relacionados não cruzam categorias, portanto é limitação latente, não erro atual dos dados.

## 6. Candidatos à remoção — com evidências

| Arquivo / símbolo | Motivo da suspeita | Referências encontradas | Risco | Recomendação |
| --- | --- | --- | --- | --- |
| `components/ui/button.tsx` | Sem importadores de aplicação e sem entrada por convenção. | Consome Base UI, cva e cn. | baixo após confirmação | R03: candidato, não excluído. |
| `lib/utils.ts` | Único consumidor de código está fora do grafo ativo. | `button.tsx`; alias em `components.json`. | baixo/médio | R03: avaliar junto com botão e alias. |
| `components/brand/rumo-brand.tsx`: `RumoIcon`, `RumoBrandArt` | Exports sem consumidores encontrados. | `RumoWordmark` é consumido por `layout/logo.tsx`. | baixo para símbolos; alto para arquivo | Preservar arquivo e Wordmark; avaliar somente os dois exports. |
| `components/rumo-shell.tsx`: `CategoryCard`, `FAQ`, `InnerLayout` | Exports sem importadores ou renderização correspondente encontrada. | Header/Footer/SearchPanel ativos na busca; Logo e GuideCard com uso interno. | baixo para símbolos; alto para arquivo | R01/R03: não excluir shell inteiro. |
| `data/content.ts`: `getGuide`, `getCategory`, `getGuidesByCategory`, `iconMap` | Exports sem consumidores encontrados. | Dados e tipos do adaptador são usados pelo shell. | baixo para símbolos; alto para arquivo | R01/R03: adaptador inteiro só após migração. |
| `modules/content/services/content-service.ts`: `getFaqs` | Sem consumidor. | FAQ importa diretamente `data/faqs`. | baixo | Usar serviço consistentemente ou retirar export; manter serviço. |
| `public/explorar.png` | SHA-256 idêntico à imagem ativa da categoria. | Referência ativa aponta para `public/images/categories/estudar-hero.png`. | médio por URL externa | R04: confirmar contratos externos antes de excluir. |

**Não excluir agora:** `rumo-shell.tsx`, `data/content.ts`, índices, guias, `globals.css`, documentos históricos e assets ativos. `getGuide` e `getGuidesByCategory` do serviço têm uso interno; tipos internos do domínio também. Ausência de import externo não equivale a código morto.

Não há teste temporário ou script abandonado comprovado. Comentários de SVG e compatibilidade têm finalidade explicativa; nenhum bloco substancial de implementação comentada foi confirmado como lixo.

## 7. Candidatos à movimentação ou renomeação

| Origem | Destino sugerido | Impacto / condição |
| --- | --- | --- |
| `ARCHITECTURE_AUDIT.md` | `docs/arquitetura/ARCHITECTURE_AUDIT.md` | R09: preservar fotografia histórica. |
| `SobreMim.md` | `docs/extensao/SobreMim.md` | R09: preservar proveniência institucional. |
| `contexto-pedagogico.md` | `docs/pedagogico/contexto-pedagogico.md` | Atualizar referências nos outros MD. |
| `contexto-pedagogico-pesquisa-alto-nivel-70-guias.md` | Mesmo nome em `docs/pedagogico/` | Referenciado pelo complemento. |
| `complemento-pedagogico-exemplos-estrategicos-carreira-ats.md` | Mesmo nome em `docs/pedagogico/` | Complemento, não duplicata descartável. |
| `prompt-mestre-povoamento-70-guias-rumo.md` | Mesmo nome em `docs/desenvolvimento/` | Preservar lista canônica e especificação histórica. |
| `SearchPanel` do shell | `components/search/search-panel.tsx` | R01: adaptar dados e consumidores antes da retirada do legado. |
| Blocos de `app/globals.css` | Organização por responsabilidade em `styles/`, se aprovada | R06: manter ordem da cascata e comparar visualmente. |

`Limpeza.md` permanece na raiz. Não há proposta de renomear slugs ou arquivos editoriais por estética. Assets só devem mudar após mapear todas as referências, incluindo URLs externas.

## 8. Duplicações de código, conteúdo e CSS

A única duplicação integral por SHA-256 é `public/explorar.png` / `public/images/categories/estudar-hero.png`, com 1.058.735 bytes cada. Não foram encontrados outros arquivos byte a byte iguais.

Header, Footer e Logo antigos coexistem com os modernos porque a busca ainda os usa. Cards possuem apresentações diferentes; não fundir todos em um componente genérico. `GuideCard` da Home e `CategoryFeaturedGuideCard` repetem o mapa de ícones; `FaqPreview` e `FAQAccordion` repetem comportamento de abertura. Reutilização pontual é possível preservando semântica e estilos.

Há **28 textos distintos de parágrafo repetidos** nos guias, não 28 guias duplicados. O texto de fundamentação sobre aprendizagem aparece nos 15 guias de Estudar. Repetições de contexto/segurança podem ser intencionais; não extrair nem reescrever sem revisão editorial.

### CSS e identidade visual

`app/globals.css`: **3.789 linhas, 91.031 bytes e 13 `!important`**. Os `!important` encontrados estão ligados à redução de movimento; não remover automaticamente. Existem imports de Tailwind, `tw-animate-css` e `shadcn/tailwind.css`, além de tokens próprios. Não foi encontrado outro CSS próprio ou atributo JSX `style=`. Atributos de desenho SVG não são estilos inline desnecessários.

Exemplos de camadas sucessivas: `.category-hero-grid` nas linhas 2383 e 2874, `.guide-toc` nas linhas 3114 e 3177. `.home-topics-grid` aparece em sete posições, várias responsivas; repetir seletor em media query não equivale a duplicação eliminável.

Breakpoints: 520, 560, 600, 640, 800, 900, 1000, 1050, 1100 e 1180 px. Oito blocos de `prefers-reduced-motion`. `#fff` aparece 27 vezes e `#ffffff` quatro vezes; tokens podem representar o mesmo papel, sem substituir tons distintos por preferência.

Candidatos sem classe literal consumidora: `.button-outline`, `.button-quiet`, `.note-check`, `.art-sun`, `.art-cap`, `.art-path`, `.path-one`, `.path-two`, `.art-book`, `.art-star`, `.support-section`, `.support-icon`, `.rumo-logo-symbol`. Uso final exige cobertura/cascata manual antes da exclusão.

**Preservar classes dinâmicas** `.accent-*`, `.pill-*`, `a11y-*`, `is-open`, `is-inverse` e seletores de atributos de estado. Não aplicar exclusão automática por busca textual. Separar CSS por tokens/base, layout, Home, categorias, guias, busca, FAQ, Sobre, loading e acessibilidade em pequenos passos (R06).

## 9. Auditoria de imagens e mídia

Todos os arquivos públicos constam abaixo. Referências consideram JSX, CSS, metadados, configurações e o mapa dinâmico `categoryImages[category.slug]`. Ícones soltos em `public/` não se tornam metadados ativos apenas pelo nome: `app/layout.tsx` aponta para `/logo-pequena.png`.

| Arquivo | Tipo / dimens?es reais | Tamanho | Uso encontrado | Status | A??o |
| --- | --- | --- | --- | --- | --- |
| `public/apple-icon.png` | .png / 180 ? 180 | 2.6 KiB; 2626 B | Nenhuma refer?ncia ativa local | Possivelmente n?o utilizado | R04: conferir hist?rico, uso externo e valor documental antes de autorizar exclus?o. |
| `public/curriculo/Modelo_Curriculo_Universal_ATS_Rumo.docx` | .docx | 38.6 KiB; 39481 B | `components/guide/guide-resume-download.tsx` | Manter | Preservar download; revisar metadados. |
| `public/explorar.png` | .png / 1448 ? 1086 | 1033.9 KiB; 1058735 B | Nenhuma refer?ncia ativa local | Duplicado | R04: confirmar URLs externas; c?pia da imagem ativa. |
| `public/icon-dark-32x32.png` | .png / 32 ? 32 | 0.6 KiB; 585 B | Nenhuma refer?ncia ativa local | Possivelmente n?o utilizado | R04: conferir hist?rico, uso externo e valor documental antes de autorizar exclus?o. |
| `public/icon-light-32x32.png` | .png / 32 ? 32 | 0.6 KiB; 566 B | Nenhuma refer?ncia ativa local | Possivelmente n?o utilizado | R04: conferir hist?rico, uso externo e valor documental antes de autorizar exclus?o. |
| `public/icon.svg` | .svg | 1.3 KiB; 1304 B | Nenhuma refer?ncia ativa local | Possivelmente n?o utilizado | R04: conferir hist?rico, uso externo e valor documental antes de autorizar exclus?o. |
| `public/images/categories/estudar-hero.png` | .png / 1448 ? 1086 | 1033.9 KiB; 1058735 B | `components/category/category-hero-art.tsx` | Otimizar | R05: avaliar dimens?es/formato preservando qualidade e URLs. |
| `public/logo-pequena.png` | .png / 1254 ? 1254 | 640.0 KiB; 655391 B | `app/layout.tsx`, `app/sobre/page.tsx`, `components/loading/initial-loading-screen.tsx` | Otimizar | R05: avaliar dimens?es/formato preservando qualidade e URLs. |
| `public/logo.png` | .png / 1672 ? 941 | 594.6 KiB; 608853 B | `components/home/hero.tsx` | Otimizar | R05: avaliar dimens?es/formato preservando qualidade e URLs. |
| `public/placeholder-logo.png` | .png / 256 ? 144 | 0.6 KiB; 568 B | Nenhuma refer?ncia ativa local | Possivelmente n?o utilizado | R04: conferir hist?rico, uso externo e valor documental antes de autorizar exclus?o. |
| `public/placeholder-logo.svg` | .svg | 3.1 KiB; 3208 B | Nenhuma refer?ncia ativa local | Possivelmente n?o utilizado | R04: conferir hist?rico, uso externo e valor documental antes de autorizar exclus?o. |
| `public/placeholder-user.jpg` | .jpg | 1.6 KiB; 1635 B | Nenhuma refer?ncia ativa local | Possivelmente n?o utilizado | R04: conferir hist?rico, uso externo e valor documental antes de autorizar exclus?o. |
| `public/placeholder.jpg` | .jpg | 1.0 KiB; 1064 B | Nenhuma refer?ncia ativa local | Possivelmente n?o utilizado | R04: conferir hist?rico, uso externo e valor documental antes de autorizar exclus?o. |
| `public/placeholder.svg` | .svg | 3.2 KiB; 3253 B | Nenhuma refer?ncia ativa local | Possivelmente n?o utilizado | R04: conferir hist?rico, uso externo e valor documental antes de autorizar exclus?o. |

O logo pequeno tem 1254 × 1254 pixels; componentes declaram 1280 × 1280, mesma proporção quadrada, sem distorção demonstrada. Usá-lo como favicon implica carregar um arquivo de aproximadamente 640 KiB. `logo.png` tem 1672 × 941; ilustração Estudar, 1448 × 1086. Geist é obtida via `next/font/google` no build; não há fontes locais.

O DOCX foi inspecionado como ZIP/XML: 17 entradas, sem macros, mídia embutida ou relacionamentos externos. Há campos de modelo e metadados incluindo `creator`, sem copiar seus valores aqui. Revisão visual no Word/LibreOffice e natureza dos exemplos pessoais: **não confirmadas**.

Não foi comprovada presença de fotografias institucionais. As imagens não passaram por identificação visual integral de pessoas; `placeholder-user.jpg` exige verificação visual. Nenhuma foto ou documento de extensão está autorizado para descarte.

## 10. Auditoria dos 70 guias

A checagem transpila módulos TypeScript em memória, lê seus exports e percorre os índices reais. Os 70 slugs e nomes de export estão presentes na lista canônica de `prompt-mestre-povoamento-70-guias-rumo.md`.

| Categoria / pasta | Arquivos individuais | Guias agregados | Destaques | Caminhos |
| --- | --- | --- | --- | --- |
| estudar | 15 | 15 | 3 | 6 |
| pesquisa-ia | 10 | 10 | 1 | 6 |
| enem | 12 | 12 | 1 | 6 |
| ensino-superior | 11 | 11 | 1 | 6 |
| carreira | 14 | 14 | 0 | 6 |
| inclusao | 8 | 8 | 0 | 6 |

**70 previstos e 70 implementados**, sem órfãos, slugs duplicados, divergências pasta/categoria/slug, duplicação no índice, relacionados inexistentes, autorrelações ou IDs repetidos dentro do mesmo guia. Cada objeto individual aparece exatamente uma vez na agregação global; os destaques existentes pertencem à categoria correta.

Campos obrigatórios conferidos: `slug`, `category`, `title`, `summary`, `description`, `readTime`, `tags`, `sections`. Textos principais não vazios, tempo positivo, listas e campos de seção válidos. **560 seções têm `paragraphs: []`, todas com outro conteúdo renderizável**; isso é permitido pelo contrato, não indica seção vazia. Uma checagem preliminar que exigia parágrafos não vazios foi corrigida para evitar falso positivo.

Todas as fontes usam HTTPS; disponibilidade e precisão de cada fonte externa não foram verificadas. Relacionados não cruzam categorias atualmente. Carreira tem 14 guias e Inclusão 8, mas seus destaques estão vazios: a mensagem “Novos guias estão sendo preparados” precisa de revisão separada (R10). A biblioteca intitulada “Todos os guias” recebe os não destacados; os outros aparecem acima, não estão ausentes.

### Arquivos individuais, exports e URLs

| Arquivo individual | Export | URL p?blica | Se??es | Relacionados / fontes | Integridade |
| --- | --- | --- | --- | --- | --- |
| `modules/content/data/guides/carreira/como-adaptar-o-curriculo-para-uma-vaga.ts` | `comoAdaptarOCurriculoParaUmaVagaGuide` | `/carreira/como-adaptar-o-curriculo-para-uma-vaga` | 23 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-construir-experiencia-antes-do-primeiro-emprego.ts` | `comoConstruirExperienciaAntesDoPrimeiroEmpregoGuide` | `/carreira/como-construir-experiencia-antes-do-primeiro-emprego` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-criar-um-plano-de-carreira-inicial.ts` | `comoCriarUmPlanoDeCarreiraInicialGuide` | `/carreira/como-criar-um-plano-de-carreira-inicial` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-criar-um-portfolio-mesmo-sendo-estudante.ts` | `comoCriarUmPortfolioMesmoSendoEstudanteGuide` | `/carreira/como-criar-um-portfolio-mesmo-sendo-estudante` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-explicar-projetos-pessoais-em-processos-seletivos.ts` | `comoExplicarProjetosPessoaisEmProcessosSeletivosGuide` | `/carreira/como-explicar-projetos-pessoais-em-processos-seletivos` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-lidar-com-rejeicoes-em-processos-seletivos.ts` | `comoLidarComRejeicoesEmProcessosSeletivosGuide` | `/carreira/como-lidar-com-rejeicoes-em-processos-seletivos` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-montar-seu-primeiro-curriculo-sem-experiencia.ts` | `comoMontarSeuPrimeiroCurriculoSemExperienciaGuide` | `/carreira/como-montar-seu-primeiro-curriculo-sem-experiencia` | 23 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-pesquisar-profissoes-antes-de-escolher-uma-area.ts` | `comoPesquisarProfissoesAntesDeEscolherUmaAreaGuide` | `/carreira/como-pesquisar-profissoes-antes-de-escolher-uma-area` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-procurar-estagio-pela-primeira-vez.ts` | `comoProcurarEstagioPelaPrimeiraVezGuide` | `/carreira/como-procurar-estagio-pela-primeira-vez` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-responder-fale-sobre-voce.ts` | `comoResponderFaleSobreVoceGuide` | `/carreira/como-responder-fale-sobre-voce` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/como-se-preparar-para-uma-entrevista.ts` | `comoSePrepararParaUmaEntrevistaGuide` | `/carreira/como-se-preparar-para-uma-entrevista` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/habilidades-tecnicas-e-comportamentais-qual-a-diferenca.ts` | `habilidadesTecnicasEComportamentaisQualADiferencaGuide` | `/carreira/habilidades-tecnicas-e-comportamentais-qual-a-diferenca` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/linkedin-para-estudantes-como-comecar.ts` | `linkedinParaEstudantesComoComecarGuide` | `/carreira/linkedin-para-estudantes-como-comecar` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/carreira/o-que-colocar-e-o-que-evitar-no-curriculo.ts` | `oQueColocarEOQueEvitarNoCurriculoGuide` | `/carreira/o-que-colocar-e-o-que-evitar-no-curriculo` | 22 | 2 / 11 | Conferida |
| `modules/content/data/guides/enem/como-comecar-a-se-preparar-para-o-enem.ts` | `comoComecarASePrepararParaOEnemGuide` | `/enem/como-comecar-a-se-preparar-para-o-enem` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/como-escolher-entre-faculdade-curso-tecnico-trabalho-e-outros-caminhos.ts` | `comoEscolherEntreFaculdadeCursoTecnicoTrabalhoEOutrosCaminhosGuide` | `/enem/como-escolher-entre-faculdade-curso-tecnico-trabalho-e-outros-caminhos` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/como-estudar-redacao-para-o-enem.ts` | `comoEstudarRedacaoParaOEnemGuide` | `/enem/como-estudar-redacao-para-o-enem` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/como-funciona-o-enem.ts` | `comoFuncionaOEnemGuide` | `/enem/como-funciona-o-enem` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/como-funciona-o-fies.ts` | `comoFuncionaOFiesGuide` | `/enem/como-funciona-o-fies` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/como-funciona-o-prouni.ts` | `comoFuncionaOProuniGuide` | `/enem/como-funciona-o-prouni` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/como-organizar-um-cronograma-para-o-enem.ts` | `comoOrganizarUmCronogramaParaOEnemGuide` | `/enem/como-organizar-um-cronograma-para-o-enem` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/como-pesquisar-sisu-sem-se-perder.ts` | `comoPesquisarSisuSemSePerderGuide` | `/enem/como-pesquisar-sisu-sem-se-perder` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/como-usar-provas-antigas-do-enem.ts` | `comoUsarProvasAntigasDoEnemGuide` | `/enem/como-usar-provas-antigas-do-enem` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/fiz-o-enem-e-agora.ts` | `fizOEnemEAgoraGuide` | `/enem/fiz-o-enem-e-agora` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/o-que-fazer-na-semana-da-prova.ts` | `oQueFazerNaSemanaDaProvaGuide` | `/enem/o-que-fazer-na-semana-da-prova` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/enem/o-que-fazer-no-dia-da-prova.ts` | `oQueFazerNoDiaDaProvaGuide` | `/enem/o-que-fazer-no-dia-da-prova` | 22 | 2 / 7 | Conferida |
| `modules/content/data/guides/ensino-superior/bacharelado-licenciatura-e-tecnologo-qual-a-diferenca.ts` | `bachareladoLicenciaturaETecnologoQualADiferencaGuide` | `/ensino-superior/bacharelado-licenciatura-e-tecnologo-qual-a-diferenca` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/como-aproveitar-oportunidades-dentro-da-universidade.ts` | `comoAproveitarOportunidadesDentroDaUniversidadeGuide` | `/ensino-superior/como-aproveitar-oportunidades-dentro-da-universidade` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/como-avaliar-custo-total-de-uma-graduacao.ts` | `comoAvaliarCustoTotalDeUmaGraduacaoGuide` | `/ensino-superior/como-avaliar-custo-total-de-uma-graduacao` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/como-escolher-um-curso-superior.ts` | `comoEscolherUmCursoSuperiorGuide` | `/ensino-superior/como-escolher-um-curso-superior` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/como-funciona-a-vida-universitaria.ts` | `comoFuncionaAVidaUniversitariaGuide` | `/ensino-superior/como-funciona-a-vida-universitaria` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/como-ler-a-grade-curricular-de-um-curso.ts` | `comoLerAGradeCurricularDeUmCursoGuide` | `/ensino-superior/como-ler-a-grade-curricular-de-um-curso` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/como-pesquisar-uma-faculdade-ou-universidade.ts` | `comoPesquisarUmaFaculdadeOuUniversidadeGuide` | `/ensino-superior/como-pesquisar-uma-faculdade-ou-universidade` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/como-planejar-os-primeiros-semestres-da-faculdade.ts` | `comoPlanejarOsPrimeirosSemestresDaFaculdadeGuide` | `/ensino-superior/como-planejar-os-primeiros-semestres-da-faculdade` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/como-procurar-bolsas-de-estudo.ts` | `comoProcurarBolsasDeEstudoGuide` | `/ensino-superior/como-procurar-bolsas-de-estudo` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/como-saber-se-quero-mesmo-fazer-faculdade.ts` | `comoSaberSeQueroMesmoFazerFaculdadeGuide` | `/ensino-superior/como-saber-se-quero-mesmo-fazer-faculdade` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/ensino-superior/presencial-hibrido-ou-ead-como-escolher.ts` | `presencialHibridoOuEadComoEscolherGuide` | `/ensino-superior/presencial-hibrido-ou-ead-como-escolher` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/como-estudar-matematica-sem-decorar-tudo.ts` | `comoEstudarMatematicaSemDecorarTudoGuide` | `/estudar/como-estudar-matematica-sem-decorar-tudo` | 21 | 2 / 7 | Conferida |
| `modules/content/data/guides/estudar/como-estudar-para-provas-sem-deixar-tudo-para-a-ultima-hora.ts` | `comoEstudarParaProvasSemDeixarTudoParaAUltimaHoraGuide` | `/estudar/como-estudar-para-provas-sem-deixar-tudo-para-a-ultima-hora` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/como-estudar-quando-voce-esta-cansado.ts` | `comoEstudarQuandoVoceEstaCansadoGuide` | `/estudar/como-estudar-quando-voce-esta-cansado` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/como-fazer-anotacoes-uteis.ts` | `comoFazerAnotacoesUteisGuide` | `/estudar/como-fazer-anotacoes-uteis` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/como-lidar-com-procrastinacao-nos-estudos.ts` | `comoLidarComProcrastinacaoNosEstudosGuide` | `/estudar/como-lidar-com-procrastinacao-nos-estudos` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/como-melhorar-em-interpretacao-de-texto.ts` | `comoMelhorarEmInterpretacaoDeTextoGuide` | `/estudar/como-melhorar-em-interpretacao-de-texto` | 21 | 2 / 7 | Conferida |
| `modules/content/data/guides/estudar/como-montar-uma-rotina-de-estudos-realista.ts` | `comoMontarUmaRotinaDeEstudosRealistaGuide` | `/estudar/como-montar-uma-rotina-de-estudos-realista` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/como-organizar-seus-estudos-sem-se-sobrecarregar.ts` | `comoOrganizarSeusEstudosSemSeSobrecarregarGuide` | `/estudar/como-organizar-seus-estudos-sem-se-sobrecarregar` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/como-revisar-e-fixar-o-conteudo-de-forma-eficiente.ts` | `comoRevisarEFixarOConteudoDeFormaEficienteGuide` | `/estudar/como-revisar-e-fixar-o-conteudo-de-forma-eficiente` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/como-usar-questoes-e-simulados-para-aprender.ts` | `comoUsarQuestoesESimuladosParaAprenderGuide` | `/estudar/como-usar-questoes-e-simulados-para-aprender` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/foco-e-concentracao-como-reduzir-distracoes.ts` | `focoEConcentracaoComoReduzirDistracoesGuide` | `/estudar/foco-e-concentracao-como-reduzir-distracoes` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/gestao-do-tempo-para-estudantes.ts` | `gestaoDoTempoParaEstudantesGuide` | `/estudar/gestao-do-tempo-para-estudantes` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/metas-de-estudo-como-definir-objetivos-que-fazem-sentido.ts` | `metasDeEstudoComoDefinirObjetivosQueFazemSentidoGuide` | `/estudar/metas-de-estudo-como-definir-objetivos-que-fazem-sentido` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/resumos-e-mapas-mentais-quando-ajudam-e-quando-atrapalham.ts` | `resumosEMapasMentaisQuandoAjudamEQuandoAtrapalhamGuide` | `/estudar/resumos-e-mapas-mentais-quando-ajudam-e-quando-atrapalham` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/estudar/tecnicas-de-estudo-que-realmente-funcionam.ts` | `tecnicasDeEstudoQueRealmenteFuncionamGuide` | `/estudar/tecnicas-de-estudo-que-realmente-funcionam` | 21 | 2 / 6 | Conferida |
| `modules/content/data/guides/inclusao/acessibilidade-o-que-significa-na-pratica.ts` | `acessibilidadeOQueSignificaNaPraticaGuide` | `/inclusao/acessibilidade-o-que-significa-na-pratica` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/inclusao/como-organizar-estudos-quando-mudancas-de-rotina-atrapalham.ts` | `comoOrganizarEstudosQuandoMudancasDeRotinaAtrapalhamGuide` | `/inclusao/como-organizar-estudos-quando-mudancas-de-rotina-atrapalham` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/inclusao/como-pedir-apoio-na-escola-ou-faculdade.ts` | `comoPedirApoioNaEscolaOuFaculdadeGuide` | `/inclusao/como-pedir-apoio-na-escola-ou-faculdade` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/inclusao/como-tornar-materiais-de-estudo-mais-acessiveis.ts` | `comoTornarMateriaisDeEstudoMaisAcessiveisGuide` | `/inclusao/como-tornar-materiais-de-estudo-mais-acessiveis` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/inclusao/diferentes-formas-de-aprender-sem-criar-rotulos.ts` | `diferentesFormasDeAprenderSemCriarRotulosGuide` | `/inclusao/diferentes-formas-de-aprender-sem-criar-rotulos` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/inclusao/onde-buscar-ajuda-quando-uma-dificuldade-esta-atrapalhando-os-estudos.ts` | `ondeBuscarAjudaQuandoUmaDificuldadeEstaAtrapalhandoOsEstudosGuide` | `/inclusao/onde-buscar-ajuda-quando-uma-dificuldade-esta-atrapalhando-os-estudos` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/inclusao/respeito-as-diferencas-no-ambiente-escolar.ts` | `respeitoAsDiferencasNoAmbienteEscolarGuide` | `/inclusao/respeito-as-diferencas-no-ambiente-escolar` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/inclusao/tecnologia-assistiva-e-recursos-de-acessibilidade.ts` | `tecnologiaAssistivaERecursosDeAcessibilidadeGuide` | `/inclusao/tecnologia-assistiva-e-recursos-de-acessibilidade` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/como-citar-fontes-em-trabalhos-escolares.ts` | `comoCitarFontesEmTrabalhosEscolaresGuide` | `/pesquisa-ia/como-citar-fontes-em-trabalhos-escolares` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/como-comparar-duas-respostas-diferentes-na-internet.ts` | `comoCompararDuasRespostasDiferentesNaInternetGuide` | `/pesquisa-ia/como-comparar-duas-respostas-diferentes-na-internet` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/como-criar-bons-prompts-para-estudar.ts` | `comoCriarBonsPromptsParaEstudarGuide` | `/pesquisa-ia/como-criar-bons-prompts-para-estudar` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/como-fazer-uma-pesquisa-confiavel-na-internet.ts` | `comoFazerUmaPesquisaConfiavelNaInternetGuide` | `/pesquisa-ia/como-fazer-uma-pesquisa-confiavel-na-internet` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/como-identificar-desinformacao-e-conteudo-enganoso.ts` | `comoIdentificarDesinformacaoEConteudoEnganosoGuide` | `/pesquisa-ia/como-identificar-desinformacao-e-conteudo-enganoso` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/como-saber-se-uma-fonte-e-confiavel.ts` | `comoSaberSeUmaFonteEConfiavelGuide` | `/pesquisa-ia/como-saber-se-uma-fonte-e-confiavel` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/como-usar-ia-sem-copiar-trabalhos.ts` | `comoUsarIaSemCopiarTrabalhosGuide` | `/pesquisa-ia/como-usar-ia-sem-copiar-trabalhos` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/pesquisa-inteligente-com-ia-por-onde-comecar.ts` | `pesquisaInteligenteComIaPorOndeComecarGuide` | `/pesquisa-ia/pesquisa-inteligente-com-ia-por-onde-comecar` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/por-que-a-ia-pode-errar-e-inventar-informacoes.ts` | `porQueAIaPodeErrarEInventarInformacoesGuide` | `/pesquisa-ia/por-que-a-ia-pode-errar-e-inventar-informacoes` | 22 | 2 / 5 | Conferida |
| `modules/content/data/guides/pesquisa-ia/privacidade-e-dados-pessoais-ao-usar-tecnologia.ts` | `privacidadeEDadosPessoaisAoUsarTecnologiaGuide` | `/pesquisa-ia/privacidade-e-dados-pessoais-ao-usar-tecnologia` | 22 | 2 / 5 | Conferida |

Não há monólito antigo com cópia dos textos em `data/`; existe um adaptador ainda ativo. Markdown de origem não é código morto. O download do currículo é condicionado por slug no componente; eventual campo editorial de recurso é mudança pontual, não necessidade de reescrita.

## 11. Dependências e configurações

| Pacote / grupo | Consumidor | Conclusão |
| --- | --- | --- |
| next, react, react-dom | Framework, páginas e hidratação. Lock: Next 16.3.3, React 19.2.4. | Manter; react-dom tem uso por framework. |
| lucide-react | Ícones em componentes/páginas. | Manter. |
| @vercel/analytics | Layout, quando NODE_ENV é production. | Ativo; configuração remota não confirmada. |
| @base-ui/react, class-variance-authority | `components/ui/button.tsx`. | Avaliar apenas após decisão R03. |
| clsx, tailwind-merge | `lib/utils.ts` → botão. | Mesmo grupo condicionado a R03. |
| shadcn | `@import 'shadcn/tailwind.css'` e configuração de geração. | Não é totalmente sem uso; separar CLI de CSS antes de remover/mover. |
| tw-animate-css | Import em globals.css. | Classes efetivamente necessárias não confirmadas; não retirar automaticamente. |
| tailwindcss, @tailwindcss/postcss, postcss | CSS e processamento de build. | Manter ferramentas; revisar alertas. |
| typescript e @types/* | Tipagem e JSX. | Manter. |

`package.json` tem apenas dev/build/start; não há script obsoleto confirmado, nem lint/test. `pnpm-lock.yaml` formato 9.0 inclui resoluções compatíveis com os specifiers declarados. Instalação congelada não foi executada por estar fora do escopo. PostCSS aparece em versões 8.5.6 direta e 8.5.19 transitiva; isso não autoriza deduplicação cega.

`tsconfig.json`: strict/noEmit ativos, skipLibCheck e incremental ativos. skipLibCheck limita declarações de dependências, não desliga a tipagem da aplicação. `next.config.mjs`: `typescript.ignoreBuildErrors: true` e `images.unoptimized: true`. Não há ESLint, suíte de testes ou Tailwind JS separado; Tailwind usa CSS. Alias hooks em `components.json` aponta para pasta inexistente, mas não é import quebrado.

O ignore cobre `.env*.local`, não todos os possíveis `.env`. Nenhum ambiente foi encontrado; ampliar regra antes de introduzir segredos é recomendação de prioridade média, risco baixo e esforço pequeno, validada por `git check-ignore`. `pnpm-workspace.yaml` tem exceções minimumReleaseAgeExclude sem política minimumReleaseAge local; influência de configuração global não confirmada.

Nome `my-project`, ausência de `engines`/`packageManager` e ausência de CI versionada são melhorias de baixa prioridade e pequeno esforço, após acordar o ambiente; validar instalação futura e build. Não alterar agora.

### Auditoria de dependências

Consulta real `pnpm.cmd audit --json`: **37 ocorrências — 20 altas, 14 moderadas, 3 baixas, 0 críticas**. Alertas da árvore instalada não comprovam explorabilidade na interface; muitos passam pela CLI shadcn ou compilação. Não houve atualização nem execução de exploit.

| Cadeia | Pacotes/versões observados | Exemplos de identificadores retornados |
| --- | --- | --- |
| postcss e integração Tailwind | postcss 8.5.6 / 8.5.19; nanoid 3.3.11 / 3.3.16 | GHSA-6g55-p6wh-862q, GHSA-fxqj-rqcc-2cmp, GHSA-2v37-7h3g-55p8 |
| next → styled-jsx → Babel | browserslist 4.28.1 | GHSA-c83g-rgw3-j3cx, GHSA-73wf-gq98-2v4g |
| shadcn → ts-morph → minimatch | brace-expansion 5.0.6 | GHSA-3jxr-9vmj-r5cp, GHSA-rgw5-rvv9-x895 |
| shadcn → cosmiconfig | js-yaml 4.2.0 | GHSA-52cp-r559-cp3m, GHSA-5p4m-2wfm-xmqj |
| shadcn → MCP SDK → ajv | fast-uri 3.1.2 | GHSA-v2hh-gcrm-f6hx, GHSA-jqff-g426-hqxp, GHSA-4c8g-83qw-93j6 |
| shadcn → MCP SDK | hono 4.12.25; @hono/node-server 1.19.14 | GHSA-xgm2-5f3f-mvvc, GHSA-54fx-42gc-7vw4, GHSA-frvp-7c67-39w9 |
| shadcn → MCP SDK → express-rate-limit | ip-address 10.2.0 | GHSA-mwp4-54f8-5fhr |
| shadcn → MCP SDK → express | body-parser 2.2.2; qs 6.15.2 | GHSA-v422-hmwv-36x6, GHSA-x5fp-wj9c-mxmx |
| shadcn | postcss-selector-parser 7.1.1 | GHSA-w9m9-85wc-3x92 |

R11: reconfirmar advisories, alcance e compatibilidade antes de corrigir. Não existe MCP/Express próprio publicado na fonte da Rumo só porque esses pacotes aparecem transitivamente.

## 12. Documentação

| Documento | Classificação | Tratamento |
| --- | --- | --- |
| ARCHITECTURE_AUDIT.md | Auditoria histórica | Preservar; código atual prevalece em divergências. |
| SobreMim.md | Documento institucional/extensão | Preservar autoria e contexto. |
| contexto-pedagogico.md | Material pedagógico de origem | Preservar e atualizar links se movido. |
| contexto-pedagogico-pesquisa-alto-nivel-70-guias.md | Pesquisa editorial | ~1,06 MiB, 19.562 linhas; volume de conteúdo não é componente excessivo. |
| complemento-pedagogico-exemplos-estrategicos-carreira-ats.md | Material pedagógico complementar | Não classificar sobreposição de temas como duplicata descartável. |
| prompt-mestre-povoamento-70-guias-rumo.md | Prompt/especificação histórica | Preservar lista canônica; instruções históricas não são tarefa atual. |
| Limpeza.md | Relatório atual | Permanecer na raiz. |

Não há README de entrada. Um índice documental curto é melhoria R09, após organização aprovada. Nenhum MD foi considerado lixo por não ter import runtime.

## 13. Segurança, privacidade e rotas

### Segurança e privacidade

Varredura textual não encontrou cabeçalhos de chave privada, padrões usuais de tokens de provedores ou atribuições longas de segredo. Nenhum `.env*` encontrado. **Não é certificação de ausência de segredos:** histórico Git, deploy remoto e todos os formatos possíveis não foram auditados integralmente.

Não foram encontrados `dangerouslySetInnerHTML`, eval, new Function, localStorage/sessionStorage ou endpoint próprio para receber dados de estudantes. Links externos renderizados usam `rel="noreferrer"`; fontes usam HTTPS. Revisão da validade editorial e disponibilidade de todos os links externos não realizada.

Sobre/documento institucional expõem autoria e contexto intencionais. DOCX público possui metadados de autoria. Revisar exposição antes de divulgar novas versões: prioridade média, risco baixo, esforço pequeno, dependente do responsável institucional; validar arquivos públicos e requisições de Analytics. Valores pessoais ou segredos não são reproduzidos aqui.

### Mapa de navegação

| Rotas | Arquivo | Situação |
| --- | --- | --- |
| `/` | `app/page.tsx` | Home moderna; HTTP 200. |
| `/busca` | `app/busca/page.tsx` | Legado ativo; HTTP 200. |
| `/faq` | `app/faq/page.tsx` | Moderna; HTTP 200. |
| `/sobre` | `app/sobre/page.tsx` | Institucional; HTTP 200. |
| Seis categorias listadas na seção 10 | `app/[categoria]/page.tsx` | Todas HTTP 200. |
| Setenta URLs listadas na seção 10 | `app/[categoria]/[slug]/page.tsx` | Todas HTTP 200. |
| URLs inexistentes/incompatíveis | notFound nas rotas dinâmicas | 404 visual/noindex com HTTP 200 observado. |
| `/_not-found` | Interna gerada pelo Next | Não há not-found.tsx próprio. |

Foram validadas **80 páginas válidas, 86 hrefs internos distintos e âncoras locais**, sem falhas nesses links. Os 86 hrefs incluem recursos/variações; não são 86 guias.

Negativos `/categoria-inexistente`, `/estudar/guia-inexistente` e `/enem/como-organizar-seus-estudos-sem-se-sobrecarregar` retornaram HTTP 200 com página 404 e meta robots noindex. Relação causal com streaming/loading não isolada; confirmar no deploy (R12). O guia não foi exibido na categoria errada.

Não há rota editorial órfã/duplicada confirmada. Metadados são globais; não há generateMetadata específico, error.tsx, global-error.tsx, sitemap ou robots próprios. Criá-los depende de benefício concreto, não de preencher a árvore.

## 14. Testes e validações

| Comando/verificação | Resultado real | Limitação |
| --- | --- | --- |
| Git e inventário recursivo | 158 arquivos preexistentes rastreados; branch de trabalho confirmada. | Interiores gerados resumidos. |
| AST/imports e dados em memória | Sem ciclos; 70 guias estruturalmente íntegros. | Não é suíte persistente nem revisão editorial frase a frase. |
| SHA-256 | Um grupo de PNGs duplicados. | Sem comparação visual de arquivos diferentes. |
| pnpm via PowerShell | pnpm.ps1 bloqueado por ExecutionPolicy. | Usado pnpm.cmd sem alterar política. |
| `pnpm.cmd exec tsc --noEmit --incremental false` | Passou, código 0. | Ambiente local instalado. |
| Mesmo tsc com `--noUnusedLocals --noUnusedParameters` | Passou, código 0. | Não detecta todos os exports sem consumidores. |
| `pnpm.cmd lint` | Falhou: comando não encontrado. | Não existe configuração/script; lint não aprovado. |
| `pnpm.cmd build` no sandbox | Falhou no download de Geist. | Restrição de rede, não erro de tipos comprovado. |
| Build com acesso externo autorizado | Passou, 82 entradas estáticas; tipos explicitamente ignorados pelo build. | Tipos foram conferidos separadamente. |
| `pnpm.cmd audit --json` | Primeira tentativa EACCES; consulta autorizada retornou 37 ocorrências, código 1. | Nenhum pacote atualizado. |
| Servidor local + HTTP | 80 URLs válidas e 86 hrefs sem falhas; três negativos 200/404 visual/noindex. | Não equivale a teste de interação completo. |
| DOCX como ZIP/XML | Sem macros, mídia interna ou relações externas. | Sem revisão visual no editor. |
| Navegador | Sessão reconectou/mudou de página; leitura pontual em guia mostrou um h1 e sem overflow. | Baseline visual inconclusivo; solicitação de 390 px resultou viewport efetivo 500 px. |

Build/start produziram artefatos em `.next/` e regeneraram `next-env.d.ts`; este último foi reposto ao conteúdo original. Servidor de validação encerrado. As diferenças da ferramenta não são defeitos introduzidos no código.

Não existem testes persistentes de componentes/conteúdo/links. Responsividade completa, contraste WCAG, teclado e leitor de tela: **não confirmados**. Não foram inventados resultados de testes.

### Acessibilidade — achados de implementação

Há botões, aria-expanded, alt decorativo e idioma pt-BR. O painel usa ID fixo e estado próprio em instâncias desktop/móvel que alteram as mesmas classes globais; montar/desmontar uma pode interferir na outra. Não há manejo explícito de Escape/foco/restauração. Sumário fechado mantém âncoras no DOM apenas com grid/opacity/overflow, sem hidden/inert. Não foi confirmado skip link na fonte (R07).

ScrollToTop considera movimento reduzido do sistema, mas não a classe da preferência manual. Splash inicia visível e depende de efeito client para sair, podendo bloquear visualmente sem JS. RumoLoading se oculta após 2 s independentemente da carga real (R08). Validar esses cenários antes de alterar CSS.

## 15. Arquitetura proposta — somente depois de autorização

```text
rumo/
├── Limpeza.md
├── app/                        # mesmas rotas e slugs
├── components/
│   ├── accessibility/, brand/, cards/, category/, faq/
│   ├── guide/, home/, layout/, loading/
│   └── search/search-panel.tsx # extração da busca
├── modules/content/
│   ├── domain/
│   ├── data/                   # preservar 70 guias e 7 índices
│   └── services/
├── public/                     # preservar URLs ativas
├── docs/
│   ├── arquitetura/ARCHITECTURE_AUDIT.md
│   ├── extensao/SobreMim.md
│   ├── pedagogico/             # três documentos pedagógicos
│   └── desenvolvimento/        # prompt mestre
└── scripts/                    # eventual validador de conteúdo
```

`data/content.ts` e shell só deixam a árvore após R01. `components/ui/` e `lib/` dependem da decisão sobre o kit. `styles/` é opção em R06, preservando ordem. Nenhuma necessidade de backend ou camadas vazias foi demonstrada.

## 16. Plano seguro — não executado

1. **Preparação e segurança:** confirmar branch, estado Git, backup e baseline; obter autorização para arquivos específicos.
2. **Remoções de baixo risco:** após confirmação, símbolos sem consumidores e cópia comprovada; validar por grupo. Não retirar shell/adaptador completos.
3. **Documentação e assets:** organizar documentos preservando nomes/proveniência e links; verificar URLs externas antes de alterar mídia.
4. **Refatorações pontuais:** migrar busca, depois retirar compatibilidade; corrigir acessibilidade/loading e organizar CSS com comparação visual.
5. **Dependências/configurações:** retirar pacotes apenas sem consumidores, incluindo CSS/geração; triar alertas e configurar lint/tipos bloqueantes. Antecipar correção de segurança se exposição real urgente for confirmada.
6. **Validação final:** tipos, lint efetivo, build, 70 guias, links, imagens, download, desktop/mobile, teclado, movimento e URLs inválidas; revisar diff.

As validações diagnósticas desta auditoria não significam execução das fases de limpeza. Commit, push e PR continuam fora da autorização.

## 17. Checklist para futura autorização

- [ ] Aprovar arquivos/símbolos específicos e preservar branch/backup.
- [ ] Manter documentos históricos e registros institucionais.
- [ ] Migrar busca antes de retirar shell/adaptador.
- [ ] Conferir consumidores de Button, cn, aliases e imports CSS.
- [ ] Preservar 70 guias, slugs, categorias, índices e relacionados.
- [ ] Validar 80 páginas, links e download do currículo.
- [ ] Conferir URLs públicas antes de excluir/renomear assets.
- [ ] Preservar identidade visual e testar desktop/mobile.
- [ ] Testar foco, painéis, sumário, movimento reduzido e loading.
- [ ] Executar tsc, lint configurado, build e novo audit.
- [ ] Conferir diff, segredos e dados pessoais antes da entrega.
- [ ] Não fazer commit/push/PR sem instrução posterior.

**Toda exclusão permanece pendente de autorização.**

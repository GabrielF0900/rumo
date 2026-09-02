# Auditoria técnica e arquitetural — Rumo

**Data da auditoria:** 2 de setembro de 2026  
**Escopo:** estado estático do repositório na raiz do projeto, sem alteração do código existente.  
**Método:** inventário de arquivos, leitura integral dos fontes e configurações, busca de padrões arquiteturais e tentativa de verificação TypeScript. Não foi feita inferência de camadas inexistentes.

## 1. Sumário executivo

O projeto é uma aplicação de conteúdo educacional pequena, implementada como um monólito frontend em Next.js 16 com App Router, React 19, TypeScript e Tailwind CSS 4. Os dados são arrays TypeScript locais e imutáveis; não há backend, API, banco, CMS, autenticação ou estado global. As páginas são Server Components por padrão, mas quase toda a árvore visual compartilhada — inclusive a home completa, cabeçalho, rodapé e cards puramente apresentacionais — cruza uma única fronteira cliente em [`components/rumo-shell.tsx`](components/rumo-shell.tsx).

A arquitetura atual é funcional para um protótipo, porém só adere parcialmente a um monólito modular em camadas. Há separação física entre rotas, componentes, dados e utilitário, mas não existem módulos por domínio nem camadas explícitas de aplicação/serviço/infraestrutura. O principal concentrador, [`components/rumo-shell.tsx`](components/rumo-shell.tsx), mistura shell, páginas, componentes visuais, busca, FAQ, acessibilidade e dependência direta do repositório local de conteúdo.

Os achados de maior impacto são: validação TypeScript deliberadamente ignorada no build; ausência total de testes e de script de lint/typecheck; rota de guia que não valida a associação entre categoria e guia; páginas inexistentes retornadas por JSX comum em vez de `notFound()`; FAQ sem regras CSS; acessibilidade do painel incompleta; fonte `Geist` declarada mas não carregada; e conteúdo integral dos guias repetido e genérico, sem vínculo com o item de dados selecionado.

## 2. Stack e versões

As versões declaradas vêm de [`package.json`](package.json); as versões resolvidas vêm do importador do lockfile [`pnpm-lock.yaml`](pnpm-lock.yaml).

| Tecnologia | Declaração | Versão resolvida/observada | Papel |
|---|---:|---:|---|
| Next.js | `16.3.3` | `16.3.3` | Framework, App Router, renderização e build |
| React | `^19` | `19.2.4` | UI e estado local |
| React DOM | `^19` | `19.2.4` | Renderização web |
| TypeScript | `5.7.3` | `5.7.3` | Tipagem estática |
| Tailwind CSS | `^4.3.3` | `4.3.3` | Utilities e tema CSS-first |
| `@tailwindcss/postcss` | `^4.3.3` | `4.3.3` | Integração PostCSS |
| PostCSS | `^8.5` | `8.5.6` | Pipeline CSS |
| shadcn | `^4.11.0` | `4.19.0` | CLI/ecossistema de componentes |
| Base UI | `^1.5.0` | `1.5.0` | Primitive do botão existente |
| Lucide React | `^1.16.0` | `1.17.0` | Ícones |
| CVA | `^0.7.1` | `0.7.1` | Variantes do botão |
| clsx | `^2.1.1` | `2.1.1` | Composição de classes |
| tailwind-merge | `^3.3.1` | `3.4.0` | Resolução de conflitos de utilities |
| tw-animate-css | `^1.4.0` | `1.4.0` | Utilities de animação importadas globalmente |
| Vercel Analytics | `1.6.1` | `1.6.1` | Analytics apenas em produção |
| Node types | `^24` | `24.10.4` | Tipos do runtime Node |

O gerenciador indicado é pnpm, pelo [`pnpm-lock.yaml`](pnpm-lock.yaml) e [`pnpm-workspace.yaml`](pnpm-workspace.yaml). O workspace só contém a raiz (`packages: ['.']`, implícito no lock/importador; o arquivo de workspace contém apenas política de idade mínima), portanto não é um monorepo real. Não há campo `packageManager` nem `engines` em [`package.json`](package.json), logo versões de pnpm/Node não são fixadas.

## 3. Árvore relevante

```text
rumo/
├─ app/
│  ├─ [categoria]/
│  │  ├─ [slug]/page.tsx       # detalhe de guia
│  │  └─ page.tsx              # listagem de categoria
│  ├─ busca/page.tsx
│  ├─ faq/page.tsx
│  ├─ sobre/page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx                 # home
├─ components/
│  ├─ ui/button.tsx            # primitive shadcn/Base UI não utilizado
│  └─ rumo-shell.tsx           # shell, páginas e toda interatividade
├─ data/
│  └─ content.ts               # tipos, conteúdo e consultas em memória
├─ lib/
│  └─ utils.ts                 # helper cn()
├─ public/
│  ├─ apple-icon.png
│  ├─ icon.svg
│  ├─ icon-dark-32x32.png
│  ├─ icon-light-32x32.png
│  └─ placeholder-*            # imagens/logos genéricos não referenciados
├─ .gitignore
├─ components.json             # configuração shadcn
├─ next.config.mjs
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ postcss.config.mjs
└─ tsconfig.json
```

Não existem no estado auditado: `next-env.d.ts`, `README`, `middleware`, `app/api`, route handlers, layouts aninhados, `loading.tsx`, `error.tsx`, `not-found.tsx`, arquivos de metadata por rota, diretórios `hooks`, `providers`, `services`, `types`, `features` ou `modules`, testes, Storybook ou configuração de lint/formatador. A ausência de `next-env.d.ts`, embora ele esteja listado no `include` de [`tsconfig.json`](tsconfig.json), contribui para o ambiente de tipagem incompleto.

## 4. Responsabilidade dos diretórios

- [`app/`](app/) é a camada de entrada e roteamento. Define o layout raiz, CSS global e seis padrões de página. As páginas delegam UI para `rumo-shell`, exceto composição e conteúdo específico das páginas internas.
- [`components/`](components/) deveria concentrar UI reutilizável, mas atualmente agrega também a implementação integral da home e lógica de funcionalidades. [`components/ui/`](components/ui/) contém somente um botão de design system, sem consumidores.
- [`data/`](data/) funciona simultaneamente como modelo de domínio, repositório em memória, catálogo de conteúdo e coleção de funções de consulta.
- [`lib/`](lib/) contém apenas infraestrutura utilitária de classes Tailwind.
- [`public/`](public/) contém ícones e placeholders. Nenhum desses arquivos é importado ou referenciado explicitamente pelos fontes auditados; os ícones de interface vêm de Lucide em [`components/rumo-shell.tsx`](components/rumo-shell.tsx).

## 5. Principais arquivos

### `app/layout.tsx`

[`app/layout.tsx`](app/layout.tsx) define `<html lang="pt-BR">`, metadata global, viewport claro com `themeColor`, carrega [`app/globals.css`](app/globals.css) e inclui Vercel Analytics somente quando `NODE_ENV === 'production'`. Não contém o shell visual, que é repetido nas páginas. Não carrega uma fonte com `next/font` nem por `@font-face`.

### `components/rumo-shell.tsx`

[`components/rumo-shell.tsx`](components/rumo-shell.tsx) exporta `Logo`, `AccessibilityPanel`, `Header`, `Footer`, `CategoryCard`, `GuideCard`, `FAQ`, `SearchPanel`, `HomePage`, `InnerLayout` e reexporta `categories`/`guides`. É o maior ponto de acoplamento. O marcador `'use client'` no topo torna todos esses exports Client Components e faz suas dependências/importadores entrarem na fronteira cliente quando usados.

O arquivo também mistura classes Tailwind e classes semânticas globais, estado de menu/acessibilidade/FAQ/busca, composição de página e seleção/filtragem de conteúdo. `InnerLayout` e os reexports finais não têm consumidores identificados.

### `data/content.ts`

[`data/content.ts`](data/content.ts) declara os tipos `Category` e `Guide`, seis categorias, quatro guias, quatro FAQs e três seletores síncronos: `getGuide`, `getCategory` e `getGuidesByCategory`. `iconMap` é exportado, porém não é usado; existe outro mapa real de ícones Lucide em [`components/rumo-shell.tsx`](components/rumo-shell.tsx).

### `app/globals.css`

[`app/globals.css`](app/globals.css) concentra tokens, reset mínimo, estilos de todas as telas e três media queries. O arquivo tem poucas linhas físicas porque muitas regras estão compactadas na mesma linha, o que reduz legibilidade e qualidade de diffs. Não há CSS Modules, CSS-in-JS ou folhas por componente.

### `components/ui/button.tsx` e `lib/utils.ts`

[`components/ui/button.tsx`](components/ui/button.tsx) implementa variantes tipadas de um botão Base UI usando CVA e `cn()`. [`lib/utils.ts`](lib/utils.ts) combina `clsx` e `tailwind-merge`. O botão não é usado: a aplicação usa links com classes globais `.button` em [`components/rumo-shell.tsx`](components/rumo-shell.tsx). Além disso, várias variáveis esperadas pelo botão (`--primary-foreground`, `--ring`, `--destructive`, `--secondary`, etc.) não são definidas em [`app/globals.css`](app/globals.css).

### Configurações

- [`next.config.mjs`](next.config.mjs): define `typescript.ignoreBuildErrors: true`, permitindo build mesmo com erros de tipos; define imagens como `unoptimized`, embora `next/image` não seja usado.
- [`tsconfig.json`](tsconfig.json): `strict`, `noEmit`, resolução `bundler`, alias `@/*`, `allowJs` e `skipLibCheck`. `strict` é enfraquecido operacionalmente pelo `ignoreBuildErrors`.
- [`postcss.config.mjs`](postcss.config.mjs): apenas plugin Tailwind 4.
- [`components.json`](components.json): shadcn `base-nova`, RSC habilitado, variáveis CSS e aliases, apesar de a UI principal não usar o primitive presente.
- [`package.json`](package.json): apenas `dev`, `build` e `start`; não há `test`, `lint`, `typecheck` ou `format`.

## 6. Mapa de rotas — Next.js App Router

| URL | Arquivo | Renderização/comportamento observado | Fonte de dados |
|---|---|---|---|
| `/` | [`app/page.tsx`](app/page.tsx) | Server Component mínimo que renderiza `HomePage`, uma árvore cliente completa | `categories`, três primeiros `guides` |
| `/busca` | [`app/busca/page.tsx`](app/busca/page.tsx) | Página servidor com `SearchPanel` cliente | Todos os `guides` e `categories` locais |
| `/faq` | [`app/faq/page.tsx`](app/faq/page.tsx) | Página servidor; monta 6 itens e delega acordeão ao cliente | 4 FAQs locais + 2 inline |
| `/sobre` | [`app/sobre/page.tsx`](app/sobre/page.tsx) | Conteúdo estático no servidor | Texto inline |
| `/:categoria` | [`app/[categoria]/page.tsx`](app/%5Bcategoria%5D/page.tsx) | Rota dinâmica; `generateStaticParams` gera 6 categorias | `categories`, filtro de `guides` |
| `/:categoria/:slug` | [`app/[categoria]/[slug]/page.tsx`](app/%5Bcategoria%5D/%5Bslug%5D/page.tsx) | Rota dinâmica; `generateStaticParams` gera 4 pares | `guides`, `categories` |

Rotas estáticas (`/busca`, `/faq`, `/sobre`) têm precedência sobre o segmento dinâmico irmão. Não há `dynamicParams = false`, portanto parâmetros não pré-gerados continuam sendo tratados em runtime. Também não há `notFound()` nem `not-found.tsx`: entradas inválidas retornam um `<main>` próprio, provavelmente com HTTP 200, e sem `Header`/`Footer` ([`app/[categoria]/page.tsx`](app/%5Bcategoria%5D/page.tsx), [`app/[categoria]/[slug]/page.tsx`](app/%5Bcategoria%5D/%5Bslug%5D/page.tsx)).

Há um defeito de integridade na rota de guia: `getGuide(slug)` ignora a categoria; a página valida apenas que o guia e alguma categoria existam, não que `guide.category === categoria`. Assim, uma URL como `/enem/organizacao-de-estudos` pode exibir o guia de estudos sob a categoria ENEM ([`data/content.ts`](data/content.ts), [`app/[categoria]/[slug]/page.tsx`](app/%5Bcategoria%5D/%5Bslug%5D/page.tsx)).

Não existem metadata/títulos específicos por rota ou `generateMetadata`; todas as páginas compartilham o título e descrição do layout raiz ([`app/layout.tsx`](app/layout.tsx)).

## 7. Módulos e domínios existentes

Os domínios conceituais são `Category`, `Guide` e FAQ/conteúdo educacional, todos em [`data/content.ts`](data/content.ts). As categorias editoriais são estudar, pesquisa/IA, ENEM, ensino superior, carreira e inclusão. Elas são dados, não módulos de código: não há diretórios, contratos ou limites de dependência por domínio.

As funcionalidades identificáveis são navegação, catálogo por categoria, detalhe de guia, busca local, FAQ e preferências temporárias de acessibilidade. Elas também não são módulos independentes; convergem em [`components/rumo-shell.tsx`](components/rumo-shell.tsx).

Camadas que **não existem de fato**: casos de uso/aplicação, serviços, adaptadores, gateways, repositórios abstratos, infraestrutura, API, persistência, validação de schema, DTOs, entidades separadas da representação de conteúdo e injeção de dependências.

## 8. Componentes compartilhados e específicos

### Compartilhados

- `Logo`, `Header`, `Footer`: shell visual repetido manualmente nas páginas; definidos em [`components/rumo-shell.tsx`](components/rumo-shell.tsx).
- `AccessibilityPanel`: usado duas vezes dentro de `Header` (desktop e mobile).
- `CategoryCard` e `GuideCard`: apresentação/navegação baseada nos objetos de [`data/content.ts`](data/content.ts).
- `FAQ` e `SearchPanel`: widgets funcionais com estado local.
- `Button`: primitive isolado em [`components/ui/button.tsx`](components/ui/button.tsx), atualmente não usado.

### Específicos

- `HomePage`: composição exclusiva da home, apesar de residir no arquivo compartilhado [`components/rumo-shell.tsx`](components/rumo-shell.tsx).
- Conteúdo da página Sobre: inline em [`app/sobre/page.tsx`](app/sobre/page.tsx).
- Composição de categoria e de guia: inline nas respectivas páginas dinâmicas.
- `InnerLayout`: wrapper potencial, mas sem uso; o shell é duplicado diretamente.

## 9. Hooks, providers, services, utils, types e data sources

- **Hooks próprios:** inexistentes. Há apenas `useState` e `useMemo` do React em [`components/rumo-shell.tsx`](components/rumo-shell.tsx).
- **Providers/Context:** inexistentes. Preferências de acessibilidade não são compartilhadas nem persistidas.
- **Services:** inexistentes. Não há acesso remoto ou orquestração de casos de uso.
- **Utils:** somente `cn()` em [`lib/utils.ts`](lib/utils.ts), usado apenas pelo botão não utilizado.
- **Types:** `Category` e `Guide` ficam junto aos dados em [`data/content.ts`](data/content.ts). FAQ usa inferência do array e `typeof faqs`, sem tipo nominal exportado.
- **Data sources:** exclusivamente arrays em memória no bundle, em [`data/content.ts`](data/content.ts). Não há `fetch`, cliente HTTP, API, banco, CMS, arquivos Markdown/MDX ou variáveis de ambiente de conteúdo.

## 10. Estrutura de dados e conteúdo local

`Category` possui `slug`, `name`, `description`, `icon` e `accent`; `Guide` possui `slug`, `category`, `title`, `summary`, `readTime` e `tags` ([`data/content.ts`](data/content.ts)). A relação guia→categoria usa string livre, sem união de slugs, chave estrangeira validada ou schema runtime. O `icon` e o `accent` também são strings livres, convertidos implicitamente em lookup/classe em [`components/rumo-shell.tsx`](components/rumo-shell.tsx).

O catálogo contém seis categorias, mas apenas quatro guias; `carreira` e `inclusao` caem no estado “Conteúdos em construção”. Cada guia armazena somente metadados. O corpo da página de guia não pertence ao objeto `Guide`: três seções genéricas idênticas são codificadas diretamente em [`app/[categoria]/[slug]/page.tsx`](app/%5Bcategoria%5D/%5Bslug%5D/page.tsx), portanto todos os guias exibem o mesmo conteúdo principal.

Duas FAQs vivem inline em [`app/faq/page.tsx`](app/faq/page.tsx), enquanto quatro vivem no data source. Textos da home, Sobre, categorias, página de busca e corpo de guia também estão espalhados entre os componentes/páginas. Não há autoria estruturada, versionamento editorial separado, sanitização ou localização/i18n.

## 11. Fluxo de dados

1. [`data/content.ts`](data/content.ts) exporta arrays e seletores síncronos.
2. Server pages importam diretamente esses arrays/seletores para gerar parâmetros, escolher categoria/guia e montar props ([`app/[categoria]/page.tsx`](app/%5Bcategoria%5D/page.tsx), [`app/[categoria]/[slug]/page.tsx`](app/%5Bcategoria%5D/%5Bslug%5D/page.tsx), [`app/faq/page.tsx`](app/faq/page.tsx)).
3. `HomePage`, `SearchPanel` e os cards também importam o mesmo data source diretamente no módulo cliente [`components/rumo-shell.tsx`](components/rumo-shell.tsx), fazendo o catálogo necessário a essas funcionalidades participar do JavaScript cliente.
4. Props fluem de páginas/containers para `GuideCard`, `CategoryCard` e `FAQ`. Não existe fluxo de escrita, cache de aplicação, sincronização remota ou estado global.
5. Busca, menu, FAQ e acessibilidade atualizam somente estado React local. Navegação usa `next/link`.

O fluxo é simples e previsível, mas componentes visuais conhecem a forma concreta e localização dos dados, sem contrato intermediário. `GuideCard` ainda busca novamente a categoria global em vez de recebê-la pronta, acoplando apresentação ao catálogo ([`components/rumo-shell.tsx`](components/rumo-shell.tsx)).

## 12. Componentes `use client`

Somente [`components/rumo-shell.tsx`](components/rumo-shell.tsx) contém a diretiva `'use client'`. Justificativas prováveis por export:

| Export | Necessidade real/provável de cliente |
|---|---|
| `AccessibilityPanel` | Sim: quatro estados e handlers de clique |
| `Header` | Sim para o menu móvel; também contém o painel |
| `FAQ` | Sim: estado do item ativo e handlers |
| `SearchPanel` | Sim: query, memoização e `onChange` |
| `Logo`, `Footer`, `CategoryCard`, `GuideCard` | Não apresentam estado/efeito/handler próprio; são cliente apenas pela fronteira do arquivo |
| `HomePage` | Não tem estado próprio; torna-se cliente por compor `Header` e por estar no mesmo módulo |
| `InnerLayout` | Não tem comportamento cliente próprio |

A fronteira ampla reduz benefícios de Server Components e aumenta o bundle/hidratação da home e shell. O acoplamento é estrutural: componentes interativos e estáticos não podem ser importados separadamente como servidor enquanto permanecerem no mesmo módulo marcado.

## 13. Estilos, Tailwind e design tokens

Tailwind 4 é carregado por `@import 'tailwindcss'`; também são importados `tw-animate-css` e `shadcn/tailwind.css` em [`app/globals.css`](app/globals.css). Não há `tailwind.config.*`; o tema usa `@theme inline`, coerente com a abordagem CSS-first. [`components.json`](components.json) aponta para esse CSS e declara `baseColor: neutral`.

Há dois sistemas concorrentes:

- CSS global semântico (`.button`, `.guide-card`, `.hero`, etc.) e variáveis próprias, usado pela aplicação em [`components/rumo-shell.tsx`](components/rumo-shell.tsx).
- Utilities Tailwind/shadcn no primitive [`components/ui/button.tsx`](components/ui/button.tsx), sem uso e dependente de tokens não declarados.

Há muitos valores literais fora dos tokens: gradientes, sombras, raios, cores suaves, larguras e espaçamentos em [`app/globals.css`](app/globals.css), além de vários `style={{...}}` nas páginas [`app/faq/page.tsx`](app/faq/page.tsx), [`app/sobre/page.tsx`](app/sobre/page.tsx), [`app/[categoria]/page.tsx`](app/%5Bcategoria%5D/page.tsx) e [`app/[categoria]/[slug]/page.tsx`](app/%5Bcategoria%5D/%5Bslug%5D/page.tsx).

### Cores

Tokens raiz: `background #fbfcff`, `foreground #121d55`, `primary #1a2d7a`, `blue #2563eb`, `violet #7b3aed`, `pink #e23d8d`, `coral #ffb08a`, `muted #53618f`, `line #dfe4f4`, `card #fff`, `surface #f2f4ff` ([`app/globals.css`](app/globals.css)). Só parte deles é exposta ao Tailwind por `@theme`. Não há modo escuro; [`app/layout.tsx`](app/layout.tsx) fixa `colorScheme: 'light'`, apesar de existirem ícones light/dark em [`public/`](public/) e variantes `dark:` no botão não usado.

### Tipografia

O token `--font-sans` aponta para `'Geist', sans-serif`, mas não há importação de fonte em [`app/layout.tsx`](app/layout.tsx), `@font-face` ou stylesheet externo. Na prática, Geist só aparecerá se instalada no sistema; o fallback será sans-serif/Arial. Escala tipográfica é ad hoc, com `clamp()` em títulos e pixels nas demais regras ([`app/globals.css`](app/globals.css)).

### Espaçamento e layout

Não há escala de espaçamento tokenizada; valores como 10, 14, 16, 18, 20, 24, 28, 30, 34, 38, 42, 46, 48, 50, 54, 65, 68, 70, 76 e 80 px aparecem diretamente em CSS/inline styles. Containers principais variam entre 850, 900, 1124 e 1180 px ([`app/globals.css`](app/globals.css) e páginas dinâmicas).

### Responsividade

O CSS customizado usa breakpoints em 800 e 520 px. O Header usa utilities Tailwind `md` e `lg`, cujos breakpoints são diferentes; isso cria duas escalas responsivas simultâneas ([`components/rumo-shell.tsx`](components/rumo-shell.tsx), [`app/globals.css`](app/globals.css)). Grades passam de 3→2→1 colunas. Hero vira uma coluna em 800 px. Não há regras específicas para telas muito largas, impressão, orientação ou container queries.

## 14. Busca atual

[`SearchPanel` em `components/rumo-shell.tsx`](components/rumo-shell.tsx) mantém `query` em `useState` e calcula resultados com `useMemo`. Sem termo, mostra todos os quatro guias. Com termo, concatena título, resumo, tags e nome de categoria, converte para minúsculas e usa `String.includes`.

Características e limites observados:

- totalmente client-side e síncrona; sem URL/query string, servidor, índice, debounce, paginação ou analytics;
- busca por substring e case-insensitive, mas não normaliza acentos, stemming, erros de digitação ou relevância;
- não busca corpo do guia nem perguntas do FAQ;
- para cada guia faz `categories.find`, custo `O(guides × categories)`, aceitável hoje, mas crescente;
- `autoFocus` força foco ao montar [`app/busca/page.tsx`](app/busca/page.tsx), o que pode abrir teclado virtual e deslocar contexto em mobile;
- contagem textual não usa região `aria-live`, então mudanças de resultados não são necessariamente anunciadas por leitor de tela;
- resultados são links-card, mas o container não usa semântica de lista.

## 15. FAQ atual

[`FAQ` em `components/rumo-shell.tsx`](components/rumo-shell.tsx) é um acordeão de item único: inicia com índice `0`, alterna o ativo e desmonta respostas fechadas. Botões têm `aria-expanded` e `aria-controls`; o ícone é oculto de tecnologia assistiva. A página [`app/faq/page.tsx`](app/faq/page.tsx) combina quatro itens compartilhados com dois objetos inline.

As classes `.faq-list`, `.faq-item`, `.is-open` e `.faq-section` não têm qualquer regra em [`app/globals.css`](app/globals.css). Assim, a funcionalidade existe, mas a apresentação depende apenas dos estilos nativos do navegador. O par controlado poderia ser mais completo com associação da resposta ao botão, mas não há `aria-labelledby`/região. IDs baseados só no índice (`faq-answer-0` etc.) podem colidir se duas instâncias forem montadas na mesma página.

## 16. Acessibilidade, teclado e semântica

### Implementação positiva existente

- idioma `pt-BR` no `<html>` e metadata/viewport em [`app/layout.tsx`](app/layout.tsx);
- outline global de `:focus-visible` em [`app/globals.css`](app/globals.css);
- links e botões nativos, em vez de `div` clicável, em [`components/rumo-shell.tsx`](components/rumo-shell.tsx);
- labels de navegação, botão móvel com nome dinâmico, `aria-expanded`/`aria-controls`, logo com rótulo, ícones decorativos pontualmente ocultos;
- input de busca com `aria-label`;
- respeito a `prefers-reduced-motion` em [`app/globals.css`](app/globals.css);
- landmarks `header`, `nav`, `main`, `section`, `article` e `footer` são usados nas páginas.

### Lacunas e riscos

- Não há link “pular para o conteúdo” em [`components/rumo-shell.tsx`](components/rumo-shell.tsx).
- O painel com `role="dialog"` não implementa foco inicial, contenção de foco, retorno do foco, tecla Escape, clique externo ou `aria-modal`; permanece um popover visual com semântica de diálogo incompleta.
- Preferências de acessibilidade são estado efêmero, separado entre instâncias desktop/mobile e perdido em navegação/remount; não há provider ou persistência.
- “Aumentar texto” altera `:root` para 110%, mas grande parte da UI usa `px`, reduzindo o alcance do recurso ([`app/globals.css`](app/globals.css), [`components/rumo-shell.tsx`](components/rumo-shell.tsx)).
- “Alto contraste” só troca `--muted` e `--line`; não representa um tema completo nem há verificação de contraste.
- `aria-current="page"` fica sempre no link “Explorar”, inclusive em FAQ, Sobre e Busca ([`components/rumo-shell.tsx`](components/rumo-shell.tsx)).
- A ilustração da home é um `<div aria-label>` sem `role="img"`; o rótulo pode não ser exposto consistentemente ([`components/rumo-shell.tsx`](components/rumo-shell.tsx)).
- FAQ e resultados não usam listas; breadcrumb é um único link com texto e separador, não `<nav aria-label="Breadcrumb">`/lista ([`app/[categoria]/page.tsx`](app/%5Bcategoria%5D/page.tsx)).
- O texto “ODS 4” em [`app/sobre/page.tsx`](app/sobre/page.tsx) parece link por classe, mas é `<span>` não interativo.
- Páginas de erro locais não incluem navegação global e não usam semântica/HTTP 404 apropriados.
- Não há evidência de auditoria automatizada (axe/Lighthouse) ou testes de teclado.

### Estado da navegação por teclado

Os controles nativos são alcançáveis e acionáveis por teclado, e o foco visível é global. Contudo, a navegação por teclado não está completa para o diálogo de acessibilidade nem otimizada para salto de conteúdo. O menu móvel não recebe foco ao abrir nem o restaura explicitamente; como os links são montados após o botão, a ordem DOM é coerente, mas não há tratamento de Escape. Não existem handlers customizados de teclado, `tabIndex` ou roving focus nos fontes auditados.

## 17. Estrutura da página de guias

Há dois níveis:

1. A página de categoria [`app/[categoria]/page.tsx`](app/%5Bcategoria%5D/page.tsx) resolve a categoria, filtra guias e renderiza uma grade de `GuideCard`, ou um card de “conteúdos em construção”.
2. A página de detalhe [`app/[categoria]/[slug]/page.tsx`](app/%5Bcategoria%5D/%5Bslug%5D/page.tsx) resolve metadados, mostra categoria, tempo, título e resumo; em seguida mostra um `<article class="guide-card">` com três blocos genéricos e, por fim, até dois guias relacionados da mesma categoria.

O conteúdo editorial real não é específico por guia, não possui headings/sections estruturados por dados, autoria, atualização, fontes, links oficiais, índice, rich text ou Markdown/MDX. Como atualmente existe no máximo um guia por categoria, `related` é sempre vazio com o dataset vigente. A página implementa a estrutura futura, mas ela não se manifesta para os dados atuais.

## 18. Duplicações, responsabilidades e acoplamentos

### Duplicações

- `Header`/`Footer` são repetidos em todas as páginas internas, embora exista `InnerLayout` não usado ([`components/rumo-shell.tsx`](components/rumo-shell.tsx), arquivos em [`app/`](app/)).
- Mapa de ícones duplicado conceitualmente: `iconMap` textual em [`data/content.ts`](data/content.ts) e `icons` Lucide em [`components/rumo-shell.tsx`](components/rumo-shell.tsx); só o segundo é usado.
- Sistema de botão duplicado: classes globais `.button*` versus `components/ui/Button`; só o primeiro é usado.
- FAQs divididas entre data source e objetos inline em [`app/faq/page.tsx`](app/faq/page.tsx).
- Padrão visual de páginas internas (`Header` + `main.search-page` + `Footer`, eyebrow, `h1`, descrição) repetido em várias páginas.
- Conteúdo dos quatro guias é literalmente a mesma estrutura/cópia porque está codificado na rota, não nos dados.

### Responsabilidade excessiva

[`components/rumo-shell.tsx`](components/rumo-shell.tsx) concentra pelo menos dez exports e responsabilidades de layout global, branding, navegação responsiva, acessibilidade, cards, FAQ, busca e home. Suas poucas linhas físicas escondem JSX muito longo em linha única, dificultando revisão, blame, testes isolados e manutenção.

[`data/content.ts`](data/content.ts) combina modelos, instâncias de dados, consultas e detalhes de apresentação (`icon`, `accent`, `iconMap`). [`app/globals.css`](app/globals.css) combina tokens, estilos base, todos os componentes e todas as páginas.

### Acoplamentos relevantes

- UI cliente → catálogo concreto: [`components/rumo-shell.tsx`](components/rumo-shell.tsx) importa arrays diretamente.
- Rotas → shape e seletores concretos: páginas dinâmicas importam [`data/content.ts`](data/content.ts) sem camada intermediária.
- `GuideCard` → categorias globais para derivar label/cor.
- Slug → classes CSS geradas (`pill-${category?.accent}`, `accent-${category.accent}`), sem contrato fechado.
- Todas as páginas → nomes globais em [`app/globals.css`](app/globals.css).
- Shell → estado local, impedindo consistência/persistência de preferências entre instâncias.

### Violações perceptíveis de separação de responsabilidades

- Conteúdo de página dentro de arquivo de componentes compartilhados (`HomePage`).
- Lógica de consulta dentro de componente apresentacional (`GuideCard` e `SearchPanel`).
- Preferências de acessibilidade implementadas por `<style>` dinâmico dentro do componente.
- Dados editoriais, tipos e funções de repositório no mesmo arquivo.
- Corpo editorial genérico dentro do arquivo de rota, separado dos metadados do guia.
- Shell visual repetido nas páginas em vez de representado pela hierarquia de layouts do App Router.

## 19. Aderência a monólito modular em camadas

**Classificação: baixa/parcial.** É um monólito por implantação e repositório, mas ainda não é modular em sentido arquitetural forte.

| Critério | Estado atual | Evidência |
|---|---|---|
| Unidade única de implantação | Atende | [`package.json`](package.json), [`app/`](app/) |
| Separação apresentação/dados | Parcial | pastas [`components/`](components/) e [`data/`](data/), porém imports diretos e apresentação em dados |
| Módulos por domínio/feature | Não atende | inexistência de `features/modules`; concentração em [`components/rumo-shell.tsx`](components/rumo-shell.tsx) |
| Camada de aplicação/casos de uso | Inexistente | nenhum service/use case |
| Infraestrutura/adaptadores | Inexistente | somente arrays locais em [`data/content.ts`](data/content.ts) |
| Dependências direcionadas | Fraco | páginas e UI dependem diretamente da fonte concreta |
| Limites/contratos testáveis | Fraco | tipos mínimos, sem interfaces ou schemas |
| Coesão interna | Baixa no shell | [`components/rumo-shell.tsx`](components/rumo-shell.tsx) |

Para o tamanho atual, a ausência de todas as camadas não é por si só um defeito crítico; o problema é a concentração e o acoplamento que tornam a evolução para novos conteúdos/data sources custosa.

## 20. Clean Code e Clean Architecture no frontend

### Aspectos favoráveis

- Tipos básicos explícitos e TypeScript `strict` em [`tsconfig.json`](tsconfig.json).
- Componentes têm nomes claros e seletores de dados são pequenos e determinísticos.
- Dados locais evitam efeitos ocultos e tornam o fluxo atual fácil de rastrear.
- Uso predominante de elementos HTML nativos e `next/link`.

### Aspectos desfavoráveis

- Funções/componentes inteiros em uma linha em quase todas as páginas e em [`components/rumo-shell.tsx`](components/rumo-shell.tsx), prejudicando legibilidade e mudanças seguras.
- Arquivo “god module” com baixa coesão.
- Exports mortos (`InnerLayout`, `iconMap`, reexports de dados) e componente `Button` sem uso.
- Strings mágicas para slugs, ícones, acentos, tempos e rotas.
- Regra de integridade categoria/guia não encapsulada.
- Dependência invertida não existe: apresentação conhece a fonte concreta, e não contratos/casos de uso.
- Entidade de guia é anêmica/incompleta: metadados no modelo, corpo na rota.
- Configuração permite ignorar justamente os erros que a tipagem deveria impedir ([`next.config.mjs`](next.config.mjs)).
- Não há testes protegendo regras nem ferramentas de qualidade nos scripts ([`package.json`](package.json)).

Sob Clean Architecture, somente “entidades” muito simples podem ser identificadas em [`data/content.ts`](data/content.ts); application, interface adapters e frameworks/drivers não têm limites explícitos. Next/React e a fonte concreta atravessam as responsabilidades. Isso não significa que uma arquitetura enterprise seja necessária agora, mas a aderência formal é baixa.

## 21. Escalabilidade e manutenção

### Escalabilidade

- Todo conteúdo é carregado como arrays e parte dele entra no bundle cliente; crescimento do catálogo aumentará bundle, hidratação e custo linear da busca ([`data/content.ts`](data/content.ts), [`components/rumo-shell.tsx`](components/rumo-shell.tsx)).
- Busca não possui índice, paginação, ranking ou execução no servidor.
- `generateStaticParams` cresce com todo o catálogo, mas `dynamicParams` segue aberto e sem estratégia explícita.
- Conteúdo não dispõe de CMS/MDX/schema, tornando autoria e atualização dependentes de deploy e edição TypeScript.
- Slugs e relações não são validados; volume maior aumenta risco de colisão/referência órfã.
- Um único arquivo cliente aumenta custo de alterações concorrentes e probabilidade de conflitos.
- Metadata global e ausência de metadata por guia limitam SEO à medida que páginas crescem.

### Manutenção

- CSS global e inline styles tornam difícil localizar ownership e evitar regressões.
- Dois sistemas de componentes/tokens criam inconsistência e código morto.
- Shell repetido aumenta chance de páginas divergirem.
- Conteúdo espalhado impede revisão editorial centralizada.
- Ausência de scripts de validação, lint e testes impede uma barreira automatizada de qualidade.
- Falta de README e pinagem de runtime/gerenciador prejudica onboarding e reprodutibilidade.
- Ausência de estados do App Router (`loading`, `error`, `not-found`) leva a tratamento inconsistente.

## 22. Riscos técnicos e dívida técnica

1. **Build aceita erros TypeScript:** [`next.config.mjs`](next.config.mjs) usa `ignoreBuildErrors: true`; risco de defeitos chegarem à produção.
2. **Ambiente não materializado:** não há `node_modules` nem `next-env.d.ts` no workspace auditado. `pnpm exec tsc --noEmit --incremental false` falhou com módulos/tipos ausentes e erros em cascata. Isso não prova que o código falha após instalação, mas prova que o checkout atual não é verificável sem restauração de dependências e geração do arquivo Next.
3. **Rota inconsistente:** categoria e guia são resolvidos independentemente, permitindo combinação semanticamente inválida.
4. **404 inadequado:** retorno visual sem `notFound()` tende a status 200 e UI parcial.
5. **FAQ sem styling:** classes existem no JSX, mas não no CSS.
6. **Conteúdo de guia incorreto/incompleto:** todos os guias compartilham corpo genérico.
7. **Acessibilidade parcial:** diálogo sem gestão de foco, `aria-current` incorreto e feedback dinâmico da busca não anunciado.
8. **Fronteira cliente excessiva:** home e componentes estáticos são hidratados por organização de arquivo.
9. **Design system divergente:** primitive e tokens shadcn não correspondem à implementação usada.
10. **Fonte não garantida:** Geist é referenciada, mas não carregada.
11. **Sem observabilidade de erro:** só Analytics está presente; não há error boundary ou monitoramento identificado.
12. **Sem segurança de conteúdo:** hoje os textos são literais confiáveis e não usam HTML bruto; porém não existe schema/sanitização para futura fonte externa.

## 23. Testes e cobertura

Não foram encontrados arquivos `*.test.*`, `*.spec.*`, configurações Jest/Vitest/Playwright/Cypress, Storybook ou scripts de teste em [`package.json`](package.json). Também não há lint/typecheck configurados como scripts.

Áreas totalmente sem cobertura automatizada identificável:

- integridade de `categories`/`guides`, unicidade de slugs e relação entre eles;
- `getGuide`, `getCategory`, `getGuidesByCategory` em [`data/content.ts`](data/content.ts);
- geração e validade das rotas dinâmicas;
- resultados, acentos, vazio e atualização acessível da busca;
- expansão/retração e ARIA do FAQ;
- menu responsivo e painel de acessibilidade por teclado;
- renderização das páginas, 404 e metadata;
- regressões visuais/responsivas e contraste;
- bundle/hidratação e performance.

A tentativa de typecheck foi deliberadamente não mutante (`--noEmit --incremental false`) e falhou porque dependências e tipos não estão instalados/materializados no diretório. Portanto, nenhum resultado de aprovação/reprovação semântica do código deve ser inferido dessa execução. Separadamente, a configuração de produção ignora erros TypeScript, o que é um risco confirmado em [`next.config.mjs`](next.config.mjs).

## 24. Classificação final dos achados

Escala usada: **Crítico** = compromete diretamente publicação/integridade essencial; **Alto** = alta chance/impacto funcional, acessível ou evolutivo; **Médio** = degrada manutenção, qualidade ou experiência de forma relevante; **Baixo** = inconsistência localizada/código morto. A severidade expressa o estado atual, não uma proposta de solução.

| Severidade | Achado | Impacto atual | Evidência |
|---|---|---|---|
| Crítico | Nenhum achado classificado como crítico com evidência estática disponível | Não foi observada perda de dados, segredo exposto ou falha comprovada de produção | Escopo completo auditado |
| Alto | Build configurado para ignorar erros TypeScript | Pode publicar código que não passa na checagem de tipos | [`next.config.mjs`](next.config.mjs) |
| Alto | Nenhum teste, lint ou typecheck em scripts | Regressões funcionais, acessíveis e de dados sem barreira automatizada | [`package.json`](package.json), árvore do projeto |
| Alto | Categoria e guia não têm vínculo validado na rota | URLs cruzadas podem renderizar conteúdo sob categoria errada | [`app/[categoria]/[slug]/page.tsx`](app/%5Bcategoria%5D/%5Bslug%5D/page.tsx), [`data/content.ts`](data/content.ts) |
| Alto | Corpo de todos os guias é genérico e idêntico | A rota aparenta conteúdo específico, mas não o entrega | [`app/[categoria]/[slug]/page.tsx`](app/%5Bcategoria%5D/%5Bslug%5D/page.tsx), [`data/content.ts`](data/content.ts) |
| Alto | Rotas inválidas não usam mecanismo 404 do App Router | Status/SEO/cache potencialmente incorretos e shell ausente | páginas dinâmicas em [`app/[categoria]/`](app/%5Bcategoria%5D/) |
| Alto | Painel com `role="dialog"` sem gestão de foco/Escape | Uso incompleto ou confuso por teclado/leitor de tela | [`components/rumo-shell.tsx`](components/rumo-shell.tsx) |
| Médio | `rumo-shell.tsx` concentra shell, página e quatro funcionalidades | Baixa coesão, conflitos e testes difíceis | [`components/rumo-shell.tsx`](components/rumo-shell.tsx) |
| Médio | Fronteira `'use client'` abrange componentes estáticos/home inteira | Bundle e hidratação maiores; perde benefícios de RSC | [`components/rumo-shell.tsx`](components/rumo-shell.tsx), [`app/page.tsx`](app/page.tsx) |
| Médio | FAQ usa classes sem regras CSS | Apresentação quebrada/inconsistente | [`components/rumo-shell.tsx`](components/rumo-shell.tsx), [`app/globals.css`](app/globals.css) |
| Médio | Busca local não escala e não anuncia resultados | Degradação com catálogo maior e lacuna de acessibilidade | [`components/rumo-shell.tsx`](components/rumo-shell.tsx) |
| Médio | Dados, tipos, queries e detalhes visuais estão acoplados | Troca de fonte e validação ficam custosas | [`data/content.ts`](data/content.ts) |
| Médio | Dois sistemas de botão/tokens divergentes | Inconsistência visual e dívida de design system | [`components/ui/button.tsx`](components/ui/button.tsx), [`app/globals.css`](app/globals.css) |
| Médio | `aria-current` estático e sempre incorreto fora de Explorar | Estado de navegação enganoso para tecnologia assistiva | [`components/rumo-shell.tsx`](components/rumo-shell.tsx) |
| Médio | Checkout atual não é typecheckável sem instalar/gerar artefatos | Baixa reprodutibilidade e validação local indisponível | [`tsconfig.json`](tsconfig.json), ausência de `next-env.d.ts`/dependências |
| Médio | Sem metadata por rota | SEO e compartilhamento não descrevem categorias/guias | [`app/layout.tsx`](app/layout.tsx), páginas em [`app/`](app/) |
| Médio | Fonte Geist declarada mas não carregada | Tipografia depende do ambiente do usuário | [`app/globals.css`](app/globals.css), [`app/layout.tsx`](app/layout.tsx) |
| Médio | Preferências acessíveis são locais, efêmeras e parciais | Comportamento inconsistente entre navegação/instâncias | [`components/rumo-shell.tsx`](components/rumo-shell.tsx) |
| Baixo | Shell repetido apesar de `InnerLayout` existir | Duplicação e risco de divergência | páginas em [`app/`](app/), [`components/rumo-shell.tsx`](components/rumo-shell.tsx) |
| Baixo | Exports/arquivos/assets sem uso (`InnerLayout`, `iconMap`, `Button`, placeholders) | Ruído e falsa superfície arquitetural | [`components/rumo-shell.tsx`](components/rumo-shell.tsx), [`data/content.ts`](data/content.ts), [`components/ui/button.tsx`](components/ui/button.tsx), [`public/`](public/) |
| Baixo | Valores de design e inline styles não tokenizados | Mudanças visuais exigem busca ampla | [`app/globals.css`](app/globals.css), páginas em [`app/`](app/) |
| Baixo | Sem pinagem de Node/pnpm e sem documentação de execução | Onboarding/reprodutibilidade frágeis | [`package.json`](package.json), ausência de README |

## 25. Conclusão

O estado atual corresponde a um protótipo monolítico de conteúdo, com roteamento e tipos básicos bem definidos, fluxo local simples e alguns cuidados semânticos. Não corresponde, contudo, a uma arquitetura monolítica modular em camadas consolidada: os limites são pastas convencionais, não módulos coesos com dependências dirigidas. A concentração em [`components/rumo-shell.tsx`](components/rumo-shell.tsx), o modelo de conteúdo incompleto em [`data/content.ts`](data/content.ts), a ausência de validações/testes e a configuração permissiva em [`next.config.mjs`](next.config.mjs) representam a dívida principal documentada.

Esta auditoria descreve apenas o que existe. Camadas, padrões e capacidades ausentes foram registrados explicitamente e não foram presumidos.

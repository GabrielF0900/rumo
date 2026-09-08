# Limpeza — execução controlada

## Estado inicial

- Data de início: 08/09/2026.
- Branch: `feat/plataforma-interna-v1`.
- HEAD: `46ea8eabbc548ba506c5729e60ce4ebd4a8af800`.
- Alteração preexistente: `?? Limpeza.md`, preservado integralmente.
- Node 22.22.0; pnpm 10.24.0; Windows/PowerShell. Usado `pnpm.cmd` para não alterar ExecutionPolicy.
- Relatório obrigatório lido integralmente; achados reconfirmados nas fontes antes das mudanças.
- Baseline: `pnpm.cmd exec tsc --noEmit --incremental false` e `pnpm.cmd build` passaram. Build inicial ignora tipos. Não existem testes/lint configurados.

## Alterações planejadas

1. Migrar busca para layout moderno e catálogo leve, preservando filtros/estados/URLs; validar antes de retirar shell/adaptador.
2. Remover apenas código sem consumidor confirmado; preservar cn e configuração útil do gerador.
3. Mover seis documentos para docs sem reescrever história; criar README.
4. Preservar todas as URLs públicas incertas, conferir assets/DOCX e otimizar entrega de imagens sem substituir originais.
5. Separar CSS em blocos mantendo ordem, remover resíduos comprovados após migração e comparar telas.
6. Compartilhar preferências, corrigir foco/IDs/sumário/skip link e movimento manual.
7. Fazer loading acompanhar o ciclo real do framework, sem bloquear conteúdo pronto com timers.
8. Criar testes persistentes do catálogo e serviços sem reescrever guias.
9. Reconsultar audit; corrigir grupos compatíveis mínimos e registrar remanescentes.
10. Ativar tipos no build, lint real e scripts de validação; proteger arquivos locais/ambiente.
11. Reproduzir 404, usar recursos nativos Next e adicionar metadados sem inventar domínio público.
12. Validar interface/rotas/fontes/performance e registrar limitações reais.

## Preservação e limites

Sem commit, push, merge, PR ou checkout de master. Nenhum documento histórico ou asset público será excluído quando houver dúvida de contrato externo. Sem backend, alterações de slugs ou reescrita pedagógica. Artefatos diagnósticos locais serão guardados em `.validation/`, não em public.

## Resultados

Em execução; esta seção será substituída pelo relatório final com evidências e arquitetura atualizada.

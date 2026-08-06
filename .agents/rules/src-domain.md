---
description: Regras de domínio e arquitetura do Meeting Cost CLI para arquivos em src/
globs: src/**
---

# Source: domínio e arquitetura

Ao editar arquivos sob `src/`:

- Mantenha o cálculo em `src/meeting-cost.js` como função pura exportada (`calculateMeetingCost`).
- Mantenha leitura de `process.argv`, `console.*` e `process.exit` apenas em `src/cli.js`.
- Não misture I/O de terminal na função de domínio.
- Preserve a fórmula: `participants * (durationMinutes / 60) * hourlyCost`.
- Rejeite valores não finitos, `participants < 1`, `durationMinutes <= 0` e `hourlyCost < 0`.
- Erros de domínio: lance `Error` com mensagem acionável em português.
- Use ESM (`import`/`export`) com extensão `.js` nos imports relativos.
- Não adicione dependências de runtime sem pedido explícito.

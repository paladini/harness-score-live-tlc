---
name: add-calculation-case
description: >-
  Use when adding or changing a Meeting Cost calculation rule, validation
  edge case, or domain formula in src/meeting-cost.js.
---

# Add or change a calculation case

Procedimento repetível para alterar regras de cálculo do Meeting Cost CLI.

## 1. Localize a mudança

- Domínio/validação/fórmula → `src/meeting-cost.js`
- Uso, mensagens de CLI, exit codes → `src/cli.js`
- Não mova I/O para o domínio nem cálculo para a CLI

## 2. Defina a regra

1. Declare a pré-condição (ex.: novo limite, caso de borda, ajuste de fórmula).
2. Atualize a validação ou o retorno em `calculateMeetingCost`.
3. Preserve invariantes existentes, salvo pedido explícito para mudá-las:
   - números finitos
   - `participants >= 1`
   - `durationMinutes > 0`
   - `hourlyCost >= 0`
4. Mensagens de erro: diga o que corrigir, em português.

## 3. Cubra casos de borda

Verifique mentalmente (e via CLI quando possível):

| Caso | Expectativa |
| --- | --- |
| Entrada válida típica | Custo correto com 2 casas |
| `participants = 1` | Válido |
| `participants = 0` ou negativo | Erro |
| `durationMinutes` fracionário positivo | Válido |
| `durationMinutes <= 0` | Erro |
| `hourlyCost = 0` | Válido (custo 0) |
| `hourlyCost` negativo | Erro |
| `NaN` / `Infinity` | Erro |
| Aridade ≠ 3 na CLI | Uso + exit `1` |

## 4. Verifique

1. Leia `package.json` e execute **somente** scripts existentes.
2. Hoje existe `npm start`. Exemplo: `npm start -- 5 30 100`.
3. Se a mudança for de validação, exercite também um caso inválido e confirme exit `1`.
4. Se `test`, `lint` ou `typecheck` ainda não existirem, registre-os como sensors pendentes — não invente comandos.
5. Atualize `PROJETO.md` ou `AGENTS.md` só se a mudança alterar fatos documentados e isso for necessário.

## 5. Conclua

- Domínio permanece puro
- CLI permanece o único ponto de I/O
- Nenhum sensor inexistente foi inventado
- Comportamento validado com os comandos reais disponíveis

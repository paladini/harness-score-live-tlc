---
description: Verifica o Meeting Cost CLI com os comandos que realmente existem no repositório
---

# Verify

Execute somente comandos definidos em `package.json` ou nativos do ambiente.
Não invente scripts.

## Passos

1. Leia `package.json` e liste os scripts disponíveis.
2. Rode o produto com um exemplo válido:
   ```bash
   npm start -- 5 30 100
   ```
   Esperado: custo `250.00` e exit `0`.
3. Se a mudança tocar validação, rode também um caso inválido (ex.: `0` participantes) e confirme mensagem acionável + exit `1`.
4. Sensors:
   - Se existir `npm test`, execute-o.
   - Se existir `npm run lint`, execute-o.
   - Se existir `npm run typecheck`, execute-o.
   - Se algum desses scripts **não** existir, registre: `sensor pendente: <nome>` e siga em frente sem criá-lo nesta verificação.
5. Resuma: comandos executados, resultados e sensors pendentes.

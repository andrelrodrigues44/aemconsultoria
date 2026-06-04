## Mudanças

**1. Melhorar contraste no card "Promessa da Marca"** (src/routes/index.tsx, linhas 186–195)
- Atualmente, o rótulo "PROMESSA DA MARCA" e o trecho "futuro sustentável." usam `text-brand` (verde) sobre o fundo verde do gradiente, ficando quase ilegíveis.
- Trocar essas cores para tons claros com contraste adequado sobre o gradiente verde:
  - Rótulo "PROMESSA DA MARCA" e ícone da folha → `text-white/80`
  - "futuro sustentável." → `text-white` (mantendo `font-bold`) ou um verde-claro de destaque (ex.: `text-brand-foreground` se existir, caso contrário um amarelo/lima claro para realce)
- Manter o restante do texto branco como está.

**2. Renomear valor na lista "O que nos move"** (src/routes/index.tsx, linha 57)
- Substituir `"Segurança em 1º lugar"` por `"Segurança como valor"`.

Sem alterações em layout, estrutura ou outras seções.
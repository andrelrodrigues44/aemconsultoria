## Correção da troca de imagem

Troquei a imagem errada na última edição. O ajuste correto:

### Alterações em `src/routes/index.tsx`

1. **Seção HERO** (topo): reverter para `professionalAsset.url` com o alt original ("Consultor A&M").
2. **Seção CTA FINAL** (última seção, antes do footer): substituir `professionalAsset.url` por `handshakeAsset.url`, com alt "Aperto de mãos simbolizando acordo e parceria A&M", reforçando a proposta de acordo no fechamento da página.

A imagem da seção "SOBRE" (meio da página) permanece como `professionalAsset.url` — sem alteração.

Nenhum outro arquivo precisa ser modificado; o asset `handshake.jpg.asset.json` já existe.
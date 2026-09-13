# Dubai Fevereiro 2027 — landing

Landing estática de funil fechado para a **Vai Sim Turismo**.
Única saída: WhatsApp.

## Arquivos

- `index.html` — página completa (pt-BR), meta/OG, Pixel e estrutura
- `styles.css` — mobile-first, fontes do sistema, navy + bone
- `app.js` — clique do WhatsApp (pixel + Contact) e banner LGPD
- `README.md` — este arquivo

## Como abrir

Abra `index.html` no navegador, ou sirva a pasta:

```bash
python3 -m http.server 8080 --directory /workspace/dubai-landing
```

Não há build, dependências nem deploy neste projeto.

## Pacote

| Campo | Valor |
| --- | --- |
| ID | dubai-2027 |
| Título | Dubai Fevereiro 2027 |
| SEO | Viagem para Dubai 2027 — 8 Dias nos Emirados |
| Duração | 8 dias / 7 noites |
| Saída | 02/02/2027 |
| Categoria | Luxo e Aventura · Caravana |
| Preço | R$ 17.500 (de R$ 17.900, −2%) |
| Pagamento | Entrada R$ 1.000 + 7x de R$ 2.357,14 sem juros |

## WhatsApp

- Número: +55 27 99792-2687
- Base: `https://wa.me/5527997922687?text=`
- Prefill: `Olá! Quero saber mais sobre o roteiro Dubai Fevereiro 2027.`

Em todo clique `[data-wa]`:

1. `window.__vsPixelLoad && window.__vsPixelLoad()`
2. `fbq('track', 'Contact')` se `fbq` existir
3. navegação padrão do link

Barra fixa no rodapé em telas menores que 720px.

## Pixel Meta

ID `2184497141744563`.

- Fila `fbq` no `<head>`
- Consentimento lido de `localStorage.lgpd_consent_v1`
- `PageView` imediato na fila
- `fbevents.js` só depois de pointerdown/keydown/touchstart/scroll, ou `load + 1200ms`, ou `3000ms`
- `window.__vsPixelLoad = carregar`
- `<noscript>` no `<body>`

## Funil fechado

Sem links para vaisim.com, redes, e-mail ou telefone. Marca só como texto. Rodapé mínimo.


# Bistrô dos Salgados

Site simples para pedidos de doces e salgados com envio via WhatsApp.

## Como usar

1. Instale as dependências:
```
npm install
```

2. Rode o servidor local:
```
npm run dev
```

3. Faça deploy no [Vercel](https://vercel.com)

## Configurar WhatsApp

Altere o número no arquivo `pages/index.js` na linha:

```js
const url = `https://wa.me/351910000000?text=...`;
```

Substitua `351910000000` pelo seu número.

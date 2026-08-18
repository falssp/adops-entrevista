# AdOps Interview Kit v2

Guia de preparação para entrevistas em Ad Operations — trilíngue (PT/EN/ES), modular, expansível.

🔗 **Live:** https://falssp.github.io/adops-entrevista

---

## Módulos disponíveis

| Arquivo | Módulo | Perguntas | Status |
|---------|--------|-----------|--------|
| `data/fundamentos.js` | 🎓 Fundamentos de AdOps | 11 | ✅ |
| `data/cm360.js` | 📊 Campaign Manager 360 | 8 | ✅ |
| `data/dv360.js` | 🎯 DV360 | 13 | ✅ |
| `data/googleads.js` | 🔍 Google Ads | 19 | ✅ |
| `data/gtm.js` | 🏷️ GTM / GA4 | 6 | ✅ |
| `data/programatico.js` | 🤖 Programático | 15 | ✅ |
| `data/atribuicao.js` | 📐 Atribuição | 8 | ✅ |
| `data/privacidade.js` | 🔒 Privacidade & Cookieless | 9 | ✅ |
| `data/ctv.js` | 📺 CTV & Programmatic TV | 6 | ✅ |
| `data/meta.js` | 📘 Meta Ads | 7 | ✅ |
| `data/tiktok.js` | 🎵 TikTok Ads | 5 | ✅ |
| `data/snap.js` | 👻 Snapchat Ads | 5 | ✅ |
| `data/ttd.js` | 🔵 The Trade Desk | 6 | ✅ |
| `data/linkedin.js` | 💼 LinkedIn Ads | 13 | ✅ |
| `data/amazon.js` | 📦 Amazon Ads | 8 | ✅ |
| `data/setup_meta.js` | ⚙️ Setup Meta (BM, Pixel, CAPI) | 8 | ✅ |
| `data/setup_google.js` | 🔧 Setup Google (CM360, DV360, GTM) | 9 | ✅ |
| `data/ops.js` | 🛠️ Operacional | 9 | ✅ |

**Total: 18 módulos · 220+ perguntas · PT / EN / ES**

---

## Estrutura do projeto

```
adops-entrevista/
├── index.html          ← shell da aplicação
├── css/
│   └── style.css       ← estilos globais
├── js/
│   └── app.js          ← roteador, lang toggle, renderer, accordion
└── data/
    └── [plataforma].js ← módulo de perguntas (um por plataforma)
```

---

## Como adicionar um novo módulo

1. Crie `data/novo-modulo.js` com a estrutura abaixo
2. Adicione a entrada no array `PLATFORMS` em `js/app.js`
3. Commit + push → GitHub Pages atualiza em ~30s

```js
window.__adopsData = window.__adopsData || {};
window.__adopsData['id-do-modulo'] = {
  icon: '📊',
  name: { pt: '...', en: '...', es: '...' },
  desc: { pt: '...', en: '...', es: '...' },
  tiers: [
    {
      id: 'easy',   // easy | mid | hard
      questions: [
        {
          q: { pt: '...', en: '...', es: '...' },
          a: { pt: '...', en: '...', es: '...' },  // aceita HTML completo
          tags: ['tag1', 'tag2'],
        }
      ]
    }
  ]
};
```

---

## Rodar localmente

```bash
git clone https://github.com/falssp/adops-entrevista.git
cd adops-entrevista
# abrir index.html no browser (Live Server no VS Code recomendado)
```

---

## Stack

- HTML5 + CSS3 + Vanilla JS (zero dependências)
- Hospedado via GitHub Pages
- Dados em módulos JS independentes (fácil de expandir)

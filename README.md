# AdOps Interview Kit

> Guia de preparação para entrevistas e certificações em Ad Operations  
> Trilíngue (PT / EN / ES) · Modular · Open Source

---

## O que é

Ferramenta de estudo para profissionais e candidatos de **Ad Operations**, cobrindo:

- **288 perguntas de entrevista** em 3 níveis de dificuldade (Básico / Intermediário / Avançado)
- **340 questões de simulado** baseadas em provas reais de certificação (Skillshop, Meta Blueprint, Amazon)
- **24 plataformas** cobertas com respostas modelo completas
- **3 idiomas**: Português, Inglês e Espanhol — alterne na interface

---

## Plataformas cobertas

| | Plataforma | | Plataforma |
|---|---|---|---|
| 📦 | Amazon Ads | 🪟 | Microsoft Advertising |
| 📐 | Atribuição & MMM | 📱 | Mobile & App Ads |
| 📊 | Campaign Manager 360 | 🛠️ | Operacional |
| ⚡ | Como Fazer / Setup | 📌 | Pinterest Ads |
| 📺 | CTV & Programmatic TV | 🔒 | Privacidade & Cookieless |
| 🎯 | Display & Video 360 | 🤖 | Programático |
| 🎓 | Fundamentos de AdOps | 🟠 | Reddit Ads |
| 🔍 | Google Ads | 🔧 | Setup Google Stack |
| 🏷️ | Google Tag Manager | ⚙️ | Setup Meta Ads |
| 💼 | LinkedIn Ads | 👻 | Snapchat Ads |
| 📘 | Meta Ads | 🎵 | TikTok Ads |
| 🔵 | The Trade Desk | 🐦 | X Ads (Twitter) |

---

## Simulados de certificação

| Certificação | Questões |
|---|---|
| 📊 Campaign Manager 360 | 26 |
| 🎯 Display & Video 360 | 25 |
| 📊 Google Analytics 4 | 50 |
| 🔍 Google Ads Search | 20 |
| 🖼️ Google Ads Display | 15 |
| 🎨 Google Ads Creative | 43 |
| 🎬 Google Creative (Studio) | 48 |
| 🔎 Search Ads 360 | 31 |
| ▶️ Google Ads Video | 31 |
| 📏 Google Ads Measurement | 31 |
| 📘 Meta Blueprint | 10 |
| 📦 Amazon Ads Foundations | 10 |

---

## Estrutura do projeto

```
adops-interview-kit/
├── index.html          ← shell da aplicação
├── css/
│   └── style.css       ← estilos globais
├── js/
│   └── app.js          ← roteador, lang toggle, renderer, quiz engine
└── data/
    ├── [plataforma].js ← módulo de perguntas (um por plataforma)
    └── quiz_certs.js   ← banco de questões dos simulados
```

---

## Como adicionar um módulo

1. Crie `data/novo-modulo.js` com a estrutura abaixo
2. Adicione a entrada no array `PLATFORMS` em `js/app.js`
3. Commit + push → deploy automático

```js
window.__adopsData = window.__adopsData || {};
window.__adopsData['id-do-modulo'] = {
  icon: '📊',
  name: { pt: '...', en: '...', es: '...' },
  desc: { pt: '...', en: '...', es: '...' },
  tiers: [
    {
      id: 'easy', // easy | mid | hard
      questions: [
        {
          q: { pt: '...', en: '...', es: '...' },
          a: { pt: '...', en: '...', es: '...' }, // aceita HTML
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
git clone https://github.com/seu-usuario/adops-interview-kit.git
cd adops-interview-kit
# abrir index.html no browser
# ou usar Live Server no VS Code
```

---

## Stack

- HTML5 + CSS3 + Vanilla JS — zero dependências, zero build step
- Hospedado via GitHub Pages
- Dados em módulos JS independentes — fácil de expandir e contribuir

---

## Contribuindo

PRs são bem-vindos. Para adicionar perguntas ou corrigir respostas, edite o arquivo `.js` da plataforma correspondente em `/data/` e abra um Pull Request.

---

## Licença

MIT — use, adapte e distribua livremente.

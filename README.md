# AdOps Interview Kit v2

Guia de preparação para entrevistas em Ad Operations — trilíngue (PT/EN/ES), modular, expansível.

## Estrutura

```
adops-kit/
├── index.html          ← shell da aplicação (não editar com frequência)
├── css/
│   └── style.css       ← estilos globais
├── js/
│   └── app.js          ← roteador, lang toggle, renderer, accordion
└── data/
    ├── cm360.js        ← ✅ pronto
    ├── dv360.js        ← 🔜
    ├── meta.js         ← 🔜
    ├── gtm.js          ← 🔜
    ├── tiktok.js       ← 🔜
    ├── snap.js         ← 🔜
    ├── ttd.js          ← 🔜
    └── ops.js          ← 🔜
```

## Como adicionar perguntas

Cada arquivo em `data/` exporta um objeto no formato:

```js
window.__adopsData['id-da-plataforma'] = {
  icon: '📊',
  name: { pt: '...', en: '...', es: '...' },
  desc: { pt: '...', en: '...', es: '...' },
  tiers: [
    {
      id: 'easy',   // easy | mid | hard | ops
      questions: [
        {
          q: { pt: '...', en: '...', es: '...' },
          a: { pt: '...', en: '...', es: '...' },  // aceita HTML
          tags: ['tag1', 'tag2'],
        }
      ]
    }
  ]
};
```

## Como rodar localmente

Abrir com qualquer servidor local (necessário por conta do carregamento dinâmico de scripts):

```bash
# Python 3
python3 -m http.server 8080
# então acessar: http://localhost:8080
```

Ou extensão **Live Server** no VS Code.

## GitHub Pages

Após subir para o GitHub, ativar **Pages → Branch: main → / (root)**.  
O kit fica disponível em: `https://[seu-usuario].github.io/adops-kit/`

## Workflow de atualização

- Cada sessão no Claude gera **um módulo por vez** (`data/plataforma.js`)
- Fazer commit do arquivo novo → Pages atualiza automaticamente
- Nunca reescrever o `index.html` ou `app.js` sem necessidade

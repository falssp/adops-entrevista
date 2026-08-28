# Como atualizar o AdOps Interview Kit no GitHub

## Estrutura do projeto

```
adops-entrevista/
├── index.html        ← shell (raramente muda)
├── css/style.css     ← estilos (raramente muda)
├── js/app.js         ← lógica principal (raramente muda)
└── data/
    ├── cm360.js      ← conteúdo CM360
    ├── dv360.js      ← conteúdo DV360
    ├── meta.js       ← conteúdo Meta
    ├── gtm.js        ← conteúdo GTM/GA4
    ├── tiktok.js     ← conteúdo TikTok
    ├── snap.js       ← conteúdo Snapchat
    ├── ttd.js        ← conteúdo The Trade Desk
    └── ops.js        ← conteúdo Operacional
```

---

## Passo a passo para subir arquivos novos ou atualizados

### 1. Clonar o repo (só na primeira vez)
```bash
git clone https://github.com/falssp/adops-entrevista.git
cd adops-entrevista
```

### 2. Substituir / adicionar os arquivos
Copie os arquivos gerados pelo Claude para dentro da pasta `adops-entrevista/`.
- Novos módulos vão em `data/`
- Atualizações de `app.js` ou `index.html` substituem os arquivos existentes

### 3. Fazer o commit e push
```bash
git add -A
git commit -m "descricao do que mudou"
git push
```
O GitHub vai pedir usuário e senha (use seu token como senha se pedido).

### 4. Verificar no Pages
Aguarde ~1 minuto e acesse:
**https://falssp.github.io/adops-entrevista/**

---

## Como adicionar perguntas em um módulo existente

Abra o arquivo `data/plataforma.js` e localize o tier correto:

```js
{
  id: 'easy',  // easy | mid | hard | ops
  questions: [
    // ... perguntas existentes ...
    {
      q: {
        pt: 'Sua pergunta em português?',
        en: 'Your question in English?',
        es: '¿Tu pregunta en español?',
      },
      a: {
        pt: `Resposta em português. Aceita <strong>HTML</strong>.
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`,
        en: `Answer in English.`,
        es: `Respuesta en español.`,
      },
      tags: ['tag1', 'tag2'],
    },
  ],
},
```

## Como criar um módulo novo (nova plataforma)

1. Copie qualquer arquivo de `data/` como base
2. Altere o ID, nome, ícone e perguntas
3. Adicione a plataforma em `js/app.js` na lista `PLATFORMS`:

```js
{ id: 'novo-id', label: 'Nome', icon: '🆕', file: 'data/novo-id.js' },
```

---

## Testar localmente antes de subir

Nunca abrir o `index.html` direto no browser — ele usa `fetch` de scripts e vai dar erro de CORS.

Use um servidor local:
```bash
# Na pasta do projeto:
python3 -m http.server 8080
# Abrir: http://localhost:8080
```

Ou instale a extensão **Live Server** no VS Code e clique em "Go Live".

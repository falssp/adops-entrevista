// Módulo TTD — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['ttd'] = {
  icon: '🔮',
  name: { pt: 'The Trade Desk', en: 'The Trade Desk', es: 'The Trade Desk' },
  desc: {
    pt: 'DSP independente líder de mercado — omnichannel, CTV, áudio e cookieless.',
    en: 'Leading independent DSP — omnichannel, CTV, audio and cookieless.',
    es: 'DSP independiente líder del mercado — omnichannel, CTV, audio y cookieless.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'Por que usar The Trade Desk em vez de DV360? Qual é o diferencial?',
            en: 'Why use The Trade Desk instead of DV360? What is the differentiator?',
            es: '¿Por qué usar The Trade Desk en vez de DV360? ¿Cuál es el diferencial?',
          },
          a: {
            pt: `<strong>Principais diferenciais do TTD:</strong>
<ul>
  <li><strong>Independência:</strong> não é ligado a nenhum walled garden (Google, Meta) — acesso agnóstico ao open web</li>
  <li><strong>UID 2.0:</strong> solução cookieless própria baseada em e-mail hasheado — mais duradoura que 3P cookies</li>
  <li><strong>CTV/OTT avançado:</strong> parceiro preferencial de grandes streamers em mercados onde o Google tem acesso limitado</li>
  <li><strong>Data Marketplace:</strong> maior marketplace de dados de terceiros (Lotame, Nielsen, IRI, LiveRamp)</li>
  <li><strong>Transparência:</strong> relatórios de log-level — acesso granular ao bid stream</li>
  <li><strong>Koa AI:</strong> motor de IA do TTD para otimização de bid e predição de audiências</li>
</ul>
<strong>Quando escolher TTD sobre DV360:</strong> CTV pesado, estratégia cookieless, dados de terceiros de qualidade, ou política de não usar plataformas Google.`,
            en: `<strong>TTD key differentiators:</strong>
<ul>
  <li><strong>Independence:</strong> not tied to any walled garden (Google, Meta) — agnostic access to open web</li>
  <li><strong>UID 2.0:</strong> own cookieless solution based on hashed email — more durable than 3P cookies</li>
  <li><strong>Advanced CTV/OTT:</strong> preferred partner of major streamers in markets where Google has limited access</li>
  <li><strong>Data Marketplace:</strong> largest third-party data marketplace (Lotame, Nielsen, IRI, LiveRamp)</li>
  <li><strong>Transparency:</strong> log-level reports — granular access to the bid stream</li>
  <li><strong>Koa AI:</strong> TTD's AI engine for bid optimization and audience prediction</li>
</ul>
<strong>When to choose TTD over DV360:</strong> heavy CTV, cookieless strategy, quality third-party data, or policy to avoid Google platforms.`,
            es: `<strong>Principales diferenciales del TTD:</strong>
<ul>
  <li><strong>Independencia:</strong> no está vinculado a ningún walled garden (Google, Meta) — acceso agnóstico al open web</li>
  <li><strong>UID 2.0:</strong> solución cookieless propia basada en email hasheado — más duradera que las 3P cookies</li>
  <li><strong>CTV/OTT avanzado:</strong> partner preferencial de grandes streamers en mercados donde Google tiene acceso limitado</li>
  <li><strong>Data Marketplace:</strong> mayor marketplace de datos de terceros (Lotame, Nielsen, IRI, LiveRamp)</li>
  <li><strong>Transparencia:</strong> reportes de log-level — acceso granular al bid stream</li>
  <li><strong>Koa AI:</strong> motor de IA del TTD para optimización de bid y predicción de audiencias</li>
</ul>
<strong>Cuándo elegir TTD sobre DV360:</strong> CTV intensivo, estrategia cookieless, datos de terceros de calidad, o política de no usar plataformas Google.`,
          },
          tags: ['TTD', 'DSP', 'CTV', 'independence', 'Koa'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'O que é Unified ID 2.0 e por que é relevante no contexto cookieless?',
            en: 'What is Unified ID 2.0 and why is it relevant in the cookieless context?',
            es: '¿Qué es Unified ID 2.0 y por qué es relevante en el contexto cookieless?',
          },
          a: {
            pt: `<strong>UID 2.0</strong> é um identificador aberto (open-source) criado pelo TTD como alternativa aos third-party cookies.<br><br>
<strong>Como funciona:</strong>
<ol>
  <li>O usuário faz login em um publisher com e-mail</li>
  <li>O publisher hasheia o e-mail (SHA-256) e envia para o UID 2.0 Operator</li>
  <li>O Operator gera um token criptografado com rotação periódica</li>
  <li>DSPs (como TTD) recebem o token no bid request e fazem targeting/atribuição sem cookie</li>
</ol>
<strong>Vantagens:</strong>
<ul>
  <li>Funciona em ambientes sem cookie (Safari, Firefox, iOS)</li>
  <li>Mais persistente que cohorts do Google Privacy Sandbox</li>
  <li>Consentimento explícito do usuário no processo</li>
  <li>Open-source — adotado por múltiplas DSPs além do TTD</li>
</ul>
<strong>Limitação:</strong> só funciona para usuários logados no publisher — não cobre tráfego anônimo.`,
            en: `<strong>UID 2.0</strong> is an open-source identifier created by TTD as an alternative to third-party cookies.<br><br>
<strong>How it works:</strong>
<ol>
  <li>The user logs into a publisher with email</li>
  <li>The publisher hashes the email (SHA-256) and sends it to the UID 2.0 Operator</li>
  <li>The Operator generates an encrypted token with periodic rotation</li>
  <li>DSPs (like TTD) receive the token in the bid request and do targeting/attribution without cookies</li>
</ol>
<strong>Advantages:</strong>
<ul>
  <li>Works in cookie-less environments (Safari, Firefox, iOS)</li>
  <li>More persistent than Google Privacy Sandbox cohorts</li>
  <li>Explicit user consent in the process</li>
  <li>Open-source — adopted by multiple DSPs beyond TTD</li>
</ul>
<strong>Limitation:</strong> only works for logged-in users at the publisher — doesn't cover anonymous traffic.`,
            es: `<strong>UID 2.0</strong> es un identificador de código abierto creado por TTD como alternativa a las third-party cookies.<br><br>
<strong>Cómo funciona:</strong>
<ol>
  <li>El usuario hace login en un publisher con email</li>
  <li>El publisher hashea el email (SHA-256) y lo envía al UID 2.0 Operator</li>
  <li>El Operator genera un token cifrado con rotación periódica</li>
  <li>Las DSPs (como TTD) reciben el token en el bid request y hacen targeting/atribución sin cookies</li>
</ol>
<strong>Ventajas:</strong>
<ul>
  <li>Funciona en entornos sin cookies (Safari, Firefox, iOS)</li>
  <li>Más persistente que los cohorts del Google Privacy Sandbox</li>
  <li>Consentimiento explícito del usuario en el proceso</li>
  <li>Open-source — adoptado por múltiples DSPs además del TTD</li>
</ul>
<strong>Limitación:</strong> solo funciona para usuarios logueados en el publisher — no cubre tráfico anónimo.`,
          },
          tags: ['UID2', 'cookieless', 'identity', 'privacy', 'open-source'],
        },
        {
          q: {
            pt: 'Como o TTD aborda compras de CTV e quais são os desafios específicos?',
            en: 'How does TTD approach CTV buying and what are the specific challenges?',
            es: '¿Cómo aborda TTD la compra de CTV y cuáles son los desafíos específicos?',
          },
          a: {
            pt: `<strong>O TTD é líder em CTV</strong> por ter parcerias diretas com os principais SSPs e streamers — Magnite, SpotX, FreeWheel, Paramount, Disney+, Max, etc.<br><br>
<strong>Tipos de compra CTV no TTD:</strong>
<ul>
  <li><em>Open Auction:</em> leilão aberto de inventário de streaming — menor CPM, menor controle</li>
  <li><em>PMP / Programmatic Guaranteed:</em> deals diretos com streamers via Deal ID — melhor brand safety e targeting</li>
  <li><em>OpenPath:</em> iniciativa do TTD de acesso direto a publishers sem SSP intermediário — reduz fees</li>
</ul>
<strong>Desafios específicos do CTV:</strong>
<ul>
  <li><strong>Mensuração:</strong> não há clique — métricas são view-through, reach e frequência</li>
  <li><strong>Frequency cross-device:</strong> mesma casa pode ter múltiplos CTVs + mobile + desktop</li>
  <li><strong>IDs:</strong> CTV usa device IDs (não cookies) — tracking é diferente do display web</li>
  <li><strong>Walled gardens:</strong> Netflix, Amazon Prime têm seus próprios ecossistemas fechados com acesso limitado via DSPs externas</li>
</ul>`,
            en: `<strong>TTD is a CTV leader</strong> due to direct partnerships with major SSPs and streamers — Magnite, SpotX, FreeWheel, Paramount, Disney+, Max, etc.<br><br>
<strong>CTV buying types in TTD:</strong>
<ul>
  <li><em>Open Auction:</em> open streaming inventory auction — lower CPM, less control</li>
  <li><em>PMP / Programmatic Guaranteed:</em> direct deals with streamers via Deal ID — better brand safety and targeting</li>
  <li><em>OpenPath:</em> TTD's direct publisher access initiative without SSP intermediary — reduces fees</li>
</ul>
<strong>CTV-specific challenges:</strong>
<ul>
  <li><strong>Measurement:</strong> no click — metrics are view-through, reach and frequency</li>
  <li><strong>Cross-device frequency:</strong> same household may have multiple CTVs + mobile + desktop</li>
  <li><strong>IDs:</strong> CTV uses device IDs (not cookies) — tracking differs from web display</li>
  <li><strong>Walled gardens:</strong> Netflix, Amazon Prime have their own closed ecosystems with limited access via external DSPs</li>
</ul>`,
            es: `<strong>TTD es líder en CTV</strong> por tener partnerships directos con los principales SSPs y streamers — Magnite, SpotX, FreeWheel, Paramount, Disney+, Max, etc.<br><br>
<strong>Tipos de compra CTV en TTD:</strong>
<ul>
  <li><em>Open Auction:</em> subasta abierta de inventario de streaming — CPM menor, menos control</li>
  <li><em>PMP / Programmatic Guaranteed:</em> deals directos con streamers via Deal ID — mejor brand safety y targeting</li>
  <li><em>OpenPath:</em> iniciativa de TTD de acceso directo a publishers sin SSP intermediario — reduce fees</li>
</ul>
<strong>Desafíos específicos del CTV:</strong>
<ul>
  <li><strong>Medición:</strong> no hay clic — las métricas son view-through, reach y frecuencia</li>
  <li><strong>Frecuencia cross-device:</strong> el mismo hogar puede tener múltiples CTVs + mobile + desktop</li>
  <li><strong>IDs:</strong> CTV usa device IDs (no cookies) — el tracking difiere del display web</li>
  <li><strong>Walled gardens:</strong> Netflix, Amazon Prime tienen sus propios ecosistemas cerrados con acceso limitado via DSPs externas</li>
</ul>`,
          },
          tags: ['CTV', 'OTT', 'OpenPath', 'streaming', 'device-id'],
        },
      ],
    },
  ],
};

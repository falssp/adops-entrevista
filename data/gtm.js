// Módulo GTM/GA4 — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['gtm'] = {
  icon: '🏷️',
  name: { pt: 'Google Tag Manager / GA4', en: 'Google Tag Manager / GA4', es: 'Google Tag Manager / GA4' },
  desc: {
    pt: 'Gerenciamento de tags sem código e analytics de próxima geração do Google.',
    en: "Codeless tag management and Google's next-generation analytics.",
    es: 'Gestión de tags sin código y analytics de próxima generación de Google.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'O que é o GTM e quais são seus três componentes principais?',
            en: 'What is GTM and what are its three main components?',
            es: '¿Qué es GTM y cuáles son sus tres componentes principales?',
          },
          a: {
            pt: `O <strong>Google Tag Manager</strong> é um sistema de gerenciamento de tags que permite instalar e atualizar snippets de código em sites sem modificar o código-fonte diretamente.<br><br>
<strong>Três componentes:</strong>
<ul>
  <li><strong>Tag:</strong> o código a ser executado (Floodlight, Meta Pixel, GA4, LinkedIn Insight, etc.)</li>
  <li><strong>Trigger:</strong> quando a tag deve disparar (Page View, clique em elemento, scroll, envio de formulário, evento customizado via dataLayer)</li>
  <li><strong>Variable:</strong> valores dinâmicos usados em tags e triggers (URL atual, ID de produto, valor de transação, texto de botão clicado)</li>
</ul>
<strong>Por que é essencial em AdOps:</strong>
<ul>
  <li>Instalar pixels de conversão sem depender do dev</li>
  <li>Gestão centralizada de todas as tags de terceiros</li>
  <li>Preview Mode para debug antes de publicar</li>
  <li>Versionamento com rollback fácil em caso de erro</li>
</ul>`,
            en: `<strong>Google Tag Manager</strong> is a tag management system that allows installing and updating code snippets on websites without modifying the source code directly.<br><br>
<strong>Three components:</strong>
<ul>
  <li><strong>Tag:</strong> the code to execute (Floodlight, Meta Pixel, GA4, LinkedIn Insight, etc.)</li>
  <li><strong>Trigger:</strong> when the tag should fire (Page View, element click, scroll, form submission, custom event via dataLayer)</li>
  <li><strong>Variable:</strong> dynamic values used in tags and triggers (current URL, product ID, transaction value, clicked button text)</li>
</ul>
<strong>Why it's essential in AdOps:</strong>
<ul>
  <li>Install conversion pixels without depending on developers</li>
  <li>Centralized management of all third-party tags</li>
  <li>Preview Mode for debugging before publishing</li>
  <li>Versioning with easy rollback in case of error</li>
</ul>`,
            es: `<strong>Google Tag Manager</strong> es un sistema de gestión de tags que permite instalar y actualizar snippets de código en sitios web sin modificar el código fuente directamente.<br><br>
<strong>Tres componentes:</strong>
<ul>
  <li><strong>Tag:</strong> el código a ejecutar (Floodlight, Meta Pixel, GA4, LinkedIn Insight, etc.)</li>
  <li><strong>Trigger:</strong> cuándo debe disparar la tag (Page View, clic en elemento, scroll, envío de formulario, evento personalizado via dataLayer)</li>
  <li><strong>Variable:</strong> valores dinámicos usados en tags y triggers (URL actual, ID de producto, valor de transacción, texto de botón clickeado)</li>
</ul>
<strong>Por qué es esencial en AdOps:</strong>
<ul>
  <li>Instalar pixels de conversión sin depender del dev</li>
  <li>Gestión centralizada de todas las tags de terceros</li>
  <li>Preview Mode para debug antes de publicar</li>
  <li>Versionado con rollback fácil en caso de error</li>
</ul>`,
          },
          tags: ['GTM', 'tag-management', 'trigger', 'variable'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'O que é o dataLayer e como ele é usado para passar informações para o GTM?',
            en: 'What is the dataLayer and how is it used to pass information to GTM?',
            es: '¿Qué es el dataLayer y cómo se usa para pasar información a GTM?',
          },
          a: {
            pt: `O <strong>dataLayer</strong> é um array JavaScript que serve como ponte entre o site e o GTM. O desenvolvedor "empurra" objetos para o dataLayer, e o GTM captura esses valores via variáveis.<br><br>
<strong>Exemplo de push:</strong>
<code>window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: 'purchase',
  transaction_id: 'TXN-001',
  value: 299.90,
  currency: 'BRL'
});</code><br><br>
<strong>No GTM:</strong>
<ol>
  <li>Criar Variable do tipo <em>Data Layer Variable</em> com o nome da chave (ex: <code>value</code>)</li>
  <li>Criar Trigger de <em>Custom Event</em> com o nome do evento (ex: <code>purchase</code>)</li>
  <li>Criar Tag (ex: Floodlight Sales) que dispara com esse trigger e usa as variables para popular valor e transaction ID</li>
</ol>
<strong>Por que é importante:</strong> sem dataLayer, o GTM só consegue capturar dados estáticos da página. Com ele, é possível trackear eventos dinâmicos como e-commerce, logins e interações de app.`,
            en: `The <strong>dataLayer</strong> is a JavaScript array that serves as a bridge between the website and GTM. The developer "pushes" objects to the dataLayer, and GTM captures those values via variables.<br><br>
<strong>Push example:</strong>
<code>window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: 'purchase',
  transaction_id: 'TXN-001',
  value: 299.90,
  currency: 'BRL'
});</code><br><br>
<strong>In GTM:</strong>
<ol>
  <li>Create a Variable of type <em>Data Layer Variable</em> with the key name (e.g., <code>value</code>)</li>
  <li>Create a Trigger of <em>Custom Event</em> with the event name (e.g., <code>purchase</code>)</li>
  <li>Create a Tag (e.g., Floodlight Sales) that fires on that trigger and uses variables to populate value and transaction ID</li>
</ol>
<strong>Why it matters:</strong> without dataLayer, GTM can only capture static page data. With it, dynamic events like e-commerce, logins and app interactions can be tracked.`,
            es: `El <strong>dataLayer</strong> es un array JavaScript que sirve como puente entre el sitio y GTM. El desarrollador "empuja" objetos al dataLayer, y GTM captura esos valores via variables.<br><br>
<strong>Ejemplo de push:</strong>
<code>window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: 'purchase',
  transaction_id: 'TXN-001',
  value: 299.90,
  currency: 'BRL'
});</code><br><br>
<strong>En GTM:</strong>
<ol>
  <li>Crear Variable de tipo <em>Data Layer Variable</em> con el nombre de la clave (ej: <code>value</code>)</li>
  <li>Crear Trigger de <em>Custom Event</em> con el nombre del evento (ej: <code>purchase</code>)</li>
  <li>Crear Tag (ej: Floodlight Sales) que dispare con ese trigger y use las variables para popular valor e ID de transacción</li>
</ol>
<strong>Por qué importa:</strong> sin dataLayer, GTM solo puede capturar datos estáticos de la página. Con él, se pueden trackear eventos dinámicos como e-commerce, logins e interacciones de app.`,
          },
          tags: ['dataLayer', 'custom-event', 'ecommerce-tracking'],
        },
        {
          q: {
            pt: 'Qual a diferença entre GA4 e Universal Analytics? O que muda para AdOps?',
            en: 'What is the difference between GA4 and Universal Analytics? What changes for AdOps?',
            es: '¿Cuál es la diferencia entre GA4 y Universal Analytics? ¿Qué cambia para AdOps?',
          },
          a: {
            pt: `<table>
<tr><th>Aspecto</th><th>Universal Analytics</th><th>GA4</th></tr>
<tr><td>Modelo de dados</td><td>Sessão + Pageview</td><td>Evento + Parâmetro</td></tr>
<tr><td>Cookies</td><td>_ga (3P cookie)</td><td>_ga + modeling cookieless</td></tr>
<tr><td>Cross-platform</td><td>Web apenas</td><td>Web + App (Firebase)</td></tr>
<tr><td>Integração CM360</td><td>View-through limitado</td><td>Floodlight + GA4 unificados</td></tr>
<tr><td>Relatórios</td><td>Pré-definidos fixos</td><td>Explorations flexíveis</td></tr>
</table><br>
<strong>Impacto em AdOps:</strong>
<ul>
  <li>Conversões importadas do CM360 via Floodlight ficam disponíveis nos relatórios de Ads do GA4</li>
  <li>Modelo orientado a eventos permite criar micro-conversões com mais flexibilidade</li>
  <li>Relatórios de funil agora cruzam web e app na mesma propriedade</li>
  <li>GA4 usa modelagem de dados para preencher lacunas de cookies — métricas podem diferir do UA</li>
</ul>`,
            en: `<table>
<tr><th>Aspect</th><th>Universal Analytics</th><th>GA4</th></tr>
<tr><td>Data model</td><td>Session + Pageview</td><td>Event + Parameter</td></tr>
<tr><td>Cookies</td><td>_ga (3P cookie)</td><td>_ga + cookieless modeling</td></tr>
<tr><td>Cross-platform</td><td>Web only</td><td>Web + App (Firebase)</td></tr>
<tr><td>CM360 integration</td><td>Limited view-through</td><td>Unified Floodlight + GA4</td></tr>
<tr><td>Reports</td><td>Fixed pre-built</td><td>Flexible Explorations</td></tr>
</table><br>
<strong>AdOps impact:</strong>
<ul>
  <li>Conversions imported from CM360 via Floodlight are available in GA4's Ads reports</li>
  <li>Event-driven model allows creating micro-conversions more flexibly</li>
  <li>Funnel reports now cross web and app in the same property</li>
  <li>GA4 uses data modeling to fill cookie gaps — metrics may differ from UA</li>
</ul>`,
            es: `<table>
<tr><th>Aspecto</th><th>Universal Analytics</th><th>GA4</th></tr>
<tr><td>Modelo de datos</td><td>Sesión + Pageview</td><td>Evento + Parámetro</td></tr>
<tr><td>Cookies</td><td>_ga (3P cookie)</td><td>_ga + modelado cookieless</td></tr>
<tr><td>Cross-platform</td><td>Web solo</td><td>Web + App (Firebase)</td></tr>
<tr><td>Integración CM360</td><td>View-through limitado</td><td>Floodlight + GA4 unificados</td></tr>
<tr><td>Reportes</td><td>Predefinidos fijos</td><td>Explorations flexibles</td></tr>
</table><br>
<strong>Impacto en AdOps:</strong>
<ul>
  <li>Conversiones importadas desde CM360 via Floodlight disponibles en reportes de Ads de GA4</li>
  <li>Modelo orientado a eventos permite crear micro-conversiones con más flexibilidad</li>
  <li>Reportes de embudo ahora cruzan web y app en la misma propiedad</li>
  <li>GA4 usa modelado de datos para llenar vacíos de cookies — las métricas pueden diferir de UA</li>
</ul>`,
          },
          tags: ['GA4', 'UA', 'event-model', 'cookieless', 'cross-platform'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como implementar server-side tagging no GTM e por que é relevante?',
            en: 'How to implement server-side tagging in GTM and why is it relevant?',
            es: '¿Cómo implementar server-side tagging en GTM y por qué es relevante?',
          },
          a: {
            pt: `O <strong>Server-side GTM</strong> adiciona um contêiner intermediário rodando em um servidor (GCP, normalmente) entre o browser do usuário e os vendors de terceiros.<br><br>
<strong>Arquitetura:</strong>
<code>Browser → GTM Web Container → Servidor GTM (1st party) → Vendors (Meta, CM360, etc.)</code><br><br>
<strong>Benefícios:</strong>
<ul>
  <li><strong>Contorna ITP/ad blockers:</strong> o cookie é setado pelo servidor (1P), não pelo JS de terceiro</li>
  <li><strong>Duração de cookie:</strong> cookies 1P têm validade maior (até 400 dias no Chrome vs. 7 dias via JS no Safari)</li>
  <li><strong>Segurança de dados:</strong> dados sensíveis não trafegam pelo browser do usuário</li>
  <li><strong>Desempenho:</strong> reduz scripts de terceiros carregando no browser — melhora Core Web Vitals</li>
</ul>
<strong>Setup básico:</strong>
<ol>
  <li>Criar contêiner Server no GTM</li>
  <li>Provisionar servidor no GCP (App Engine ou Cloud Run)</li>
  <li>Apontar subdomínio próprio (ex: <code>gtm.seusite.com.br</code>) para o servidor</li>
  <li>Configurar Client (GA4, Meta CAPI) e Tags no contêiner server</li>
</ol>`,
            en: `<strong>Server-side GTM</strong> adds an intermediate container running on a server (usually GCP) between the user's browser and third-party vendors.<br><br>
<strong>Architecture:</strong>
<code>Browser → GTM Web Container → GTM Server (1st party) → Vendors (Meta, CM360, etc.)</code><br><br>
<strong>Benefits:</strong>
<ul>
  <li><strong>Bypasses ITP/ad blockers:</strong> cookie is set by the server (1P), not third-party JS</li>
  <li><strong>Cookie duration:</strong> 1P cookies last longer (up to 400 days in Chrome vs. 7 days via JS in Safari)</li>
  <li><strong>Data security:</strong> sensitive data doesn't travel through the user's browser</li>
  <li><strong>Performance:</strong> reduces third-party scripts loading in browser — improves Core Web Vitals</li>
</ul>
<strong>Basic setup:</strong>
<ol>
  <li>Create a Server container in GTM</li>
  <li>Provision server on GCP (App Engine or Cloud Run)</li>
  <li>Point own subdomain (e.g., <code>gtm.yoursite.com</code>) to the server</li>
  <li>Configure Client (GA4, Meta CAPI) and Tags in the server container</li>
</ol>`,
            es: `El <strong>Server-side GTM</strong> agrega un contenedor intermedio corriendo en un servidor (GCP, normalmente) entre el browser del usuario y los vendors de terceros.<br><br>
<strong>Arquitectura:</strong>
<code>Browser → GTM Web Container → Servidor GTM (1P) → Vendors (Meta, CM360, etc.)</code><br><br>
<strong>Beneficios:</strong>
<ul>
  <li><strong>Evita ITP/ad blockers:</strong> la cookie es seteada por el servidor (1P), no por JS de terceros</li>
  <li><strong>Duración de cookie:</strong> las cookies 1P duran más (hasta 400 días en Chrome vs. 7 días via JS en Safari)</li>
  <li><strong>Seguridad de datos:</strong> datos sensibles no viajan por el browser del usuario</li>
  <li><strong>Rendimiento:</strong> reduce scripts de terceros cargando en el browser — mejora Core Web Vitals</li>
</ul>
<strong>Setup básico:</strong>
<ol>
  <li>Crear contenedor Server en GTM</li>
  <li>Provisionar servidor en GCP (App Engine o Cloud Run)</li>
  <li>Apuntar subdominio propio (ej: <code>gtm.tusitio.com</code>) al servidor</li>
  <li>Configurar Client (GA4, Meta CAPI) y Tags en el contenedor server</li>
</ol>`,
          },
          tags: ['server-side', 'GTM-server', 'ITP', 'first-party', 'GCP'],
        },
      ],
    },
  ],
};

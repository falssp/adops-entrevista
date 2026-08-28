// Módulo GTM/GA4 — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['gtm'] = {
  icon: '🏷️',
  name: { pt: 'GTM / GA4', en: 'GTM / GA4', es: 'GTM / GA4' },
  desc: {
    pt: 'Google Tag Manager para gestão de tags e Google Analytics 4 para mensuração — o duo fundamental de tracking na web.',
    en: 'Google Tag Manager for tag management and Google Analytics 4 for measurement — the fundamental tracking duo on the web.',
    es: 'Google Tag Manager para gestión de tags y Google Analytics 4 para medición — el dúo fundamental de tracking en la web.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'O que é o Google Tag Manager e por que ele é usado em vez de colocar tags diretamente no código do site?',
            en: 'What is Google Tag Manager and why is it used instead of placing tags directly in the site code?',
            es: '¿Qué es Google Tag Manager y por qué se usa en lugar de colocar tags directamente en el código del sitio?',
          },
          a: {
            pt: `<strong>Google Tag Manager (GTM)</strong> é um sistema de gestão de tags que permite adicionar, editar e remover snippets de código (tags) em um site sem precisar mexer diretamente no código-fonte.<br><br>
<strong>Por que usar GTM em vez de tags diretas no código:</strong>
<ul>
  <li><strong>Autonomia:</strong> marketing/AdOps pode publicar tags sem depender do time de desenvolvimento</li>
  <li><strong>Velocidade:</strong> adicionar uma nova tag leva minutos, não dias (sem fila de dev)</li>
  <li><strong>Controle centralizado:</strong> todas as tags em um único lugar, com histórico de versões</li>
  <li><strong>Rollback fácil:</strong> se uma tag causar problema, basta reverter para a versão anterior</li>
  <li><strong>Organização:</strong> tags, triggers e variáveis gerenciados com clareza</li>
  <li><strong>Preview mode:</strong> testar antes de publicar, sem afetar usuários reais</li>
</ul>
<strong>Componentes básicos do GTM:</strong>
<ul>
  <li><strong>Tag:</strong> o snippet a ser executado (ex: Google Analytics, Floodlight, Meta Pixel)</li>
  <li><strong>Trigger:</strong> a condição que dispara a tag (ex: pageview, clique em botão, tempo na página)</li>
  <li><strong>Variable:</strong> valor dinâmico usado por tags e triggers (ex: URL atual, ID de transação)</li>
</ul>`,
            en: `<strong>Google Tag Manager (GTM)</strong> is a tag management system that allows adding, editing and removing code snippets (tags) on a website without directly touching the source code.<br><br>
<strong>Why use GTM instead of direct code tags:</strong>
<ul>
  <li><strong>Autonomy:</strong> marketing/AdOps can publish tags without depending on the development team</li>
  <li><strong>Speed:</strong> adding a new tag takes minutes, not days (no dev queue)</li>
  <li><strong>Centralized control:</strong> all tags in one place, with version history</li>
  <li><strong>Easy rollback:</strong> if a tag causes a problem, just revert to the previous version</li>
  <li><strong>Organization:</strong> tags, triggers and variables managed with clarity</li>
  <li><strong>Preview mode:</strong> test before publishing, without affecting real users</li>
</ul>
<strong>Basic GTM components:</strong>
<ul>
  <li><strong>Tag:</strong> the snippet to be executed (e.g. Google Analytics, Floodlight, Meta Pixel)</li>
  <li><strong>Trigger:</strong> the condition that fires the tag (e.g. pageview, button click, time on page)</li>
  <li><strong>Variable:</strong> dynamic value used by tags and triggers (e.g. current URL, transaction ID)</li>
</ul>`,
            es: `<strong>Google Tag Manager (GTM)</strong> es un sistema de gestión de tags que permite agregar, editar y eliminar fragmentos de código (tags) en un sitio sin necesidad de tocar directamente el código fuente.<br><br>
<strong>Por qué usar GTM en lugar de tags directas en el código:</strong>
<ul>
  <li><strong>Autonomía:</strong> marketing/AdOps puede publicar tags sin depender del equipo de desarrollo</li>
  <li><strong>Velocidad:</strong> agregar una nueva tag tarda minutos, no días (sin cola de dev)</li>
  <li><strong>Control centralizado:</strong> todas las tags en un solo lugar, con historial de versiones</li>
  <li><strong>Rollback fácil:</strong> si una tag causa un problema, solo hay que revertir a la versión anterior</li>
  <li><strong>Organización:</strong> tags, triggers y variables gestionados con claridad</li>
  <li><strong>Preview mode:</strong> probar antes de publicar, sin afectar a usuarios reales</li>
</ul>
<strong>Componentes básicos de GTM:</strong>
<ul>
  <li><strong>Tag:</strong> el snippet a ejecutar (ej: Google Analytics, Floodlight, Meta Pixel)</li>
  <li><strong>Trigger:</strong> la condición que dispara la tag (ej: pageview, clic en botón, tiempo en página)</li>
  <li><strong>Variable:</strong> valor dinámico usado por tags y triggers (ej: URL actual, ID de transacción)</li>
</ul>`,
          },
          tags: ['GTM', 'tag-manager', 'tracking', 'autonomia'],
        },
        {
          q: {
            pt: 'Qual a diferença entre o Universal Analytics (UA) e o Google Analytics 4 (GA4)?',
            en: 'What is the difference between Universal Analytics (UA) and Google Analytics 4 (GA4)?',
            es: '¿Cuál es la diferencia entre Universal Analytics (UA) y Google Analytics 4 (GA4)?',
          },
          a: {
            pt: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Característica</th><th style="padding:6px">Universal Analytics (UA)</th><th style="padding:6px">GA4</th></tr>
<tr><td style="padding:6px">Modelo de dados</td><td style="padding:6px">Sessão-based (hits)</td><td style="padding:6px">Event-based</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Cookies</td><td style="padding:6px">3rd party cookies</td><td style="padding:6px">1st party + cookieless modeling</td></tr>
<tr><td style="padding:6px">Cross-platform</td><td style="padding:6px">Apenas web</td><td style="padding:6px">Web + App (Firebase) unificados</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Relatórios</td><td style="padding:6px">Interface fixa</td><td style="padding:6px">Explorations + BigQuery export</td></tr>
<tr><td style="padding:6px">IA/ML</td><td style="padding:6px">Limitado</td><td style="padding:6px">Predictive metrics nativas (churn, purchase probability)</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Status</td><td style="padding:6px">Descontinuado (julho 2023)</td><td style="padding:6px">Atual — obrigatório</td></tr>
</table><br>
<strong>Mudança de mindset UA → GA4:</strong>
<ul>
  <li>No UA: "quantas sessões com pageview na página X?" → No GA4: "quantos eventos page_view na página X?"</li>
  <li>GA4 não tem bounce rate tradicional — usa "engaged sessions" (sessão com 10s+ ou 2+ pageviews ou conversão)</li>
  <li>GA4 não tem "views" — é "data streams" (web, iOS, Android)</li>
  <li>Metas no UA = Conversions no GA4 (eventos marcados como conversion)</li>
</ul>`,
            en: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Feature</th><th style="padding:6px">Universal Analytics (UA)</th><th style="padding:6px">GA4</th></tr>
<tr><td style="padding:6px">Data model</td><td style="padding:6px">Session-based (hits)</td><td style="padding:6px">Event-based</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Cookies</td><td style="padding:6px">3rd party cookies</td><td style="padding:6px">1st party + cookieless modeling</td></tr>
<tr><td style="padding:6px">Cross-platform</td><td style="padding:6px">Web only</td><td style="padding:6px">Web + App (Firebase) unified</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Reports</td><td style="padding:6px">Fixed interface</td><td style="padding:6px">Explorations + BigQuery export</td></tr>
<tr><td style="padding:6px">AI/ML</td><td style="padding:6px">Limited</td><td style="padding:6px">Native predictive metrics (churn, purchase probability)</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Status</td><td style="padding:6px">Discontinued (July 2023)</td><td style="padding:6px">Current — required</td></tr>
</table><br>
<strong>Mindset shift UA → GA4:</strong>
<ul>
  <li>In UA: "how many sessions with pageview on page X?" → In GA4: "how many page_view events on page X?"</li>
  <li>GA4 doesn't have traditional bounce rate — uses "engaged sessions" (session with 10s+ or 2+ pageviews or conversion)</li>
  <li>GA4 doesn't have "views" — it has "data streams" (web, iOS, Android)</li>
  <li>Goals in UA = Conversions in GA4 (events marked as conversion)</li>
</ul>`,
            es: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Característica</th><th style="padding:6px">Universal Analytics (UA)</th><th style="padding:6px">GA4</th></tr>
<tr><td style="padding:6px">Modelo de datos</td><td style="padding:6px">Basado en sesión (hits)</td><td style="padding:6px">Basado en eventos</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Cookies</td><td style="padding:6px">3rd party cookies</td><td style="padding:6px">1st party + modelado cookieless</td></tr>
<tr><td style="padding:6px">Cross-platform</td><td style="padding:6px">Solo web</td><td style="padding:6px">Web + App (Firebase) unificados</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Reportes</td><td style="padding:6px">Interfaz fija</td><td style="padding:6px">Explorations + exportación BigQuery</td></tr>
<tr><td style="padding:6px">IA/ML</td><td style="padding:6px">Limitado</td><td style="padding:6px">Métricas predictivas nativas (churn, probabilidad de compra)</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Estado</td><td style="padding:6px">Descontinuado (julio 2023)</td><td style="padding:6px">Actual — obligatorio</td></tr>
</table><br>
<strong>Cambio de mindset UA → GA4:</strong>
<ul>
  <li>En UA: "¿cuántas sesiones con pageview en la página X?" → En GA4: "¿cuántos eventos page_view en la página X?"</li>
  <li>GA4 no tiene bounce rate tradicional — usa "engaged sessions" (sesión con 10s+ o 2+ pageviews o conversión)</li>
  <li>GA4 no tiene "views" — tiene "data streams" (web, iOS, Android)</li>
  <li>Metas en UA = Conversiones en GA4 (eventos marcados como conversión)</li>
</ul>`,
          },
          tags: ['GA4', 'Universal-Analytics', 'migração', 'events', 'sessão'],
        },
        {
          q: {
            pt: 'Como configurar um evento personalizado no GA4 via GTM? Descreva o passo a passo.',
            en: 'How to configure a custom event in GA4 via GTM? Describe the step by step.',
            es: '¿Cómo configurar un evento personalizado en GA4 via GTM? Describe el paso a paso.',
          },
          a: {
            pt: `<strong>Exemplo: rastrear clique em botão "Solicitar Orçamento"</strong><br><br>
<strong>1. Criar Trigger no GTM:</strong>
<ul>
  <li>Triggers → New → Click - All Elements (ou Just Links)</li>
  <li>Condition: Click Text contains "Solicitar Orçamento" (ou usar CSS selector/ID)</li>
  <li>Nomear: "Click - Botão Orçamento"</li>
</ul>
<strong>2. Criar Tag GA4 Event:</strong>
<ul>
  <li>Tags → New → Google Analytics: GA4 Event</li>
  <li>Configuration Tag: selecionar sua tag de configuração GA4 (ou inserir Measurement ID)</li>
  <li>Event Name: <code>solicitar_orcamento</code> (snake_case, sem espaços)</li>
  <li>Event Parameters (opcional): adicionar parâmetros como <code>button_location: {{Page Path}}</code></li>
</ul>
<strong>3. Associar o Trigger à Tag</strong><br><br>
<strong>4. Preview e Debug:</strong>
<ul>
  <li>GTM Preview Mode → abrir o site → clicar no botão → verificar no GTM Debug se a tag disparou</li>
  <li>GA4 DebugView: Admin → DebugView → verificar o evento chegando em tempo real</li>
</ul>
<strong>5. Publicar</strong> — versão com nome e descrição documentando a mudança<br><br>
<strong>6. Marcar como Conversão no GA4 (se necessário):</strong> Admin → Events → ativar "Mark as conversion"`,
            en: `<strong>Example: tracking click on "Request a Quote" button</strong><br><br>
<strong>1. Create Trigger in GTM:</strong>
<ul>
  <li>Triggers → New → Click - All Elements (or Just Links)</li>
  <li>Condition: Click Text contains "Request a Quote" (or use CSS selector/ID)</li>
  <li>Name: "Click - Quote Button"</li>
</ul>
<strong>2. Create GA4 Event Tag:</strong>
<ul>
  <li>Tags → New → Google Analytics: GA4 Event</li>
  <li>Configuration Tag: select your GA4 configuration tag (or enter Measurement ID)</li>
  <li>Event Name: <code>request_quote</code> (snake_case, no spaces)</li>
  <li>Event Parameters (optional): add parameters like <code>button_location: {{Page Path}}</code></li>
</ul>
<strong>3. Associate the Trigger to the Tag</strong><br><br>
<strong>4. Preview and Debug:</strong>
<ul>
  <li>GTM Preview Mode → open the site → click the button → verify in GTM Debug if the tag fired</li>
  <li>GA4 DebugView: Admin → DebugView → verify the event arriving in real time</li>
</ul>
<strong>5. Publish</strong> — version with name and description documenting the change<br><br>
<strong>6. Mark as Conversion in GA4 (if needed):</strong> Admin → Events → enable "Mark as conversion"`,
            es: `<strong>Ejemplo: rastrear clic en botón "Solicitar Presupuesto"</strong><br><br>
<strong>1. Crear Trigger en GTM:</strong>
<ul>
  <li>Triggers → New → Click - All Elements (o Just Links)</li>
  <li>Condition: Click Text contains "Solicitar Presupuesto" (o usar CSS selector/ID)</li>
  <li>Nombre: "Click - Botón Presupuesto"</li>
</ul>
<strong>2. Crear Tag GA4 Event:</strong>
<ul>
  <li>Tags → New → Google Analytics: GA4 Event</li>
  <li>Configuration Tag: seleccionar tu tag de configuración GA4 (o ingresar Measurement ID)</li>
  <li>Event Name: <code>solicitar_presupuesto</code> (snake_case, sin espacios)</li>
  <li>Event Parameters (opcional): agregar parámetros como <code>button_location: {{Page Path}}</code></li>
</ul>
<strong>3. Asociar el Trigger a la Tag</strong><br><br>
<strong>4. Preview y Debug:</strong>
<ul>
  <li>GTM Preview Mode → abrir el sitio → hacer clic en el botón → verificar en GTM Debug si la tag disparó</li>
  <li>GA4 DebugView: Admin → DebugView → verificar el evento llegando en tiempo real</li>
</ul>
<strong>5. Publicar</strong> — versión con nombre y descripción documentando el cambio<br><br>
<strong>6. Marcar como Conversión en GA4 (si es necesario):</strong> Admin → Events → activar "Mark as conversion"`,
          },
          tags: ['GTM', 'GA4', 'evento-customizado', 'debug', 'conversão'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'Como usar o DataLayer no GTM? Qual a vantagem em relação ao scraping de DOM?',
            en: 'How to use the DataLayer in GTM? What is the advantage over DOM scraping?',
            es: '¿Cómo usar el DataLayer en GTM? ¿Cuál es la ventaja frente al scraping de DOM?',
          },
          a: {
            pt: `<strong>DataLayer</strong> é um array JavaScript que o site popula com dados estruturados para o GTM consumir.<br><br>
<strong>Como funciona:</strong>
<pre style="background:#f5f5f5;padding:8px;border-radius:4px;font-size:0.85em">// O dev insere no código do site:
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'purchase',
  transaction_id: '12345',
  value: 299.90,
  currency: 'BRL',
  items: [{item_name: 'Produto X', price: 299.90}]
});</pre>
<strong>No GTM:</strong> criar uma variável do tipo "Data Layer Variable" com o nome do campo desejado (ex: <code>transaction_id</code>) → usar essa variável na tag GA4 como parâmetro.<br><br>
<strong>DataLayer vs. Scraping de DOM:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Critério</th><th style="padding:6px">DataLayer</th><th style="padding:6px">DOM Scraping</th></tr>
<tr><td style="padding:6px">Confiabilidade</td><td style="padding:6px">Alta — dado estruturado</td><td style="padding:6px">Baixa — quebra com mudança de layout</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Manutenção</td><td style="padding:6px">Baixa — mudança no dev, não no GTM</td><td style="padding:6px">Alta — qualquer redesign quebra</td></tr>
<tr><td style="padding:6px">Dados ricos</td><td style="padding:6px">Sim (arrays, objetos)</td><td style="padding:6px">Apenas texto visível na página</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Setup inicial</td><td style="padding:6px">Requer dev</td><td style="padding:6px">Não requer dev</td></tr>
</table>
<strong>Conclusão:</strong> DataLayer é sempre preferível para dados de negócio (transações, leads). DOM scraping é aceitável apenas para dados simples que nunca mudam (ex: texto fixo de um título).`,
            en: `<strong>DataLayer</strong> is a JavaScript array that the site populates with structured data for GTM to consume.<br><br>
<strong>How it works:</strong>
<pre style="background:#f5f5f5;padding:8px;border-radius:4px;font-size:0.85em">// Dev inserts in site code:
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'purchase',
  transaction_id: '12345',
  value: 299.90,
  currency: 'USD',
  items: [{item_name: 'Product X', price: 299.90}]
});</pre>
<strong>In GTM:</strong> create a "Data Layer Variable" type variable with the desired field name (e.g. <code>transaction_id</code>) → use that variable in the GA4 tag as a parameter.<br><br>
<strong>DataLayer vs. DOM Scraping:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Criterion</th><th style="padding:6px">DataLayer</th><th style="padding:6px">DOM Scraping</th></tr>
<tr><td style="padding:6px">Reliability</td><td style="padding:6px">High — structured data</td><td style="padding:6px">Low — breaks with layout change</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Maintenance</td><td style="padding:6px">Low — change in dev, not GTM</td><td style="padding:6px">High — any redesign breaks it</td></tr>
<tr><td style="padding:6px">Rich data</td><td style="padding:6px">Yes (arrays, objects)</td><td style="padding:6px">Only visible text on page</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Initial setup</td><td style="padding:6px">Requires dev</td><td style="padding:6px">No dev required</td></tr>
</table>
<strong>Conclusion:</strong> DataLayer is always preferable for business data (transactions, leads). DOM scraping is acceptable only for simple data that never changes (e.g. fixed heading text).`,
            es: `<strong>DataLayer</strong> es un array JavaScript que el sitio rellena con datos estructurados para que GTM los consuma.<br><br>
<strong>Cómo funciona:</strong>
<pre style="background:#f5f5f5;padding:8px;border-radius:4px;font-size:0.85em">// El dev inserta en el código del sitio:
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'purchase',
  transaction_id: '12345',
  value: 299.90,
  currency: 'BRL',
  items: [{item_name: 'Producto X', price: 299.90}]
});</pre>
<strong>En GTM:</strong> crear una variable tipo "Data Layer Variable" con el nombre del campo deseado (ej: <code>transaction_id</code>) → usar esa variable en la tag GA4 como parámetro.<br><br>
<strong>DataLayer vs. Scraping de DOM:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Criterio</th><th style="padding:6px">DataLayer</th><th style="padding:6px">DOM Scraping</th></tr>
<tr><td style="padding:6px">Confiabilidad</td><td style="padding:6px">Alta — dato estructurado</td><td style="padding:6px">Baja — se rompe con cambio de layout</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Mantenimiento</td><td style="padding:6px">Bajo — cambio en dev, no en GTM</td><td style="padding:6px">Alto — cualquier rediseño rompe</td></tr>
<tr><td style="padding:6px">Datos ricos</td><td style="padding:6px">Sí (arrays, objetos)</td><td style="padding:6px">Solo texto visible en la página</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Setup inicial</td><td style="padding:6px">Requiere dev</td><td style="padding:6px">No requiere dev</td></tr>
</table>
<strong>Conclusión:</strong> DataLayer es siempre preferible para datos de negocio (transacciones, leads). DOM scraping es aceptable solo para datos simples que nunca cambian (ej: texto fijo de un título).`,
          },
          tags: ['dataLayer', 'GTM', 'DOM', 'variável', 'ecommerce'],
        },
        {
          q: {
            pt: 'Como usar o GA4 para analisar a jornada do usuário e identificar gargalos no funil?',
            en: 'How to use GA4 to analyze the user journey and identify funnel bottlenecks?',
            es: '¿Cómo usar GA4 para analizar el journey del usuario e identificar cuellos de botella en el embudo?',
          },
          a: {
            pt: `<strong>Ferramentas do GA4 para análise de jornada:</strong><br><br>
<strong>1. Funnel Exploration:</strong>
<ul>
  <li>Explore → Funnel Exploration</li>
  <li>Definir as etapas do funil (ex: page_view → add_to_cart → begin_checkout → purchase)</li>
  <li>GA4 mostra % de usuários que avançam em cada etapa e onde abandonam</li>
  <li>Segmentar por device, geo ou source para identificar onde o problema é maior</li>
</ul>
<strong>2. Path Exploration:</strong>
<ul>
  <li>Mostra os caminhos reais que usuários percorrem no site</li>
  <li>Identificar loops inesperados (usuário voltando para a mesma página) ou saídas antecipadas</li>
</ul>
<strong>3. Segment Overlap:</strong>
<ul>
  <li>Comparar usuários que converteram vs. não converteram — quais páginas visitaram, qual canal vieram</li>
</ul>
<strong>Como identificar gargalos:</strong>
<ol>
  <li>Criar o Funnel Exploration com as etapas críticas</li>
  <li>Encontrar a etapa com maior drop-off (%)</li>
  <li>Segmentar por device — se mobile tem drop-off maior, pode ser problema de UX</li>
  <li>Segmentar por source — se tráfego pago tem drop-off maior que orgânico, pode ser expectativa incorreta gerada pelo anúncio</li>
  <li>Cruzar com heatmaps (Hotjar, Microsoft Clarity) na página de maior abandono para diagnóstico visual</li>
</ol>`,
            en: `<strong>GA4 tools for journey analysis:</strong><br><br>
<strong>1. Funnel Exploration:</strong>
<ul>
  <li>Explore → Funnel Exploration</li>
  <li>Define the funnel stages (e.g. page_view → add_to_cart → begin_checkout → purchase)</li>
  <li>GA4 shows % of users advancing at each stage and where they drop off</li>
  <li>Segment by device, geo or source to identify where the problem is greatest</li>
</ul>
<strong>2. Path Exploration:</strong>
<ul>
  <li>Shows the actual paths users take on the site</li>
  <li>Identify unexpected loops (user returning to the same page) or early exits</li>
</ul>
<strong>3. Segment Overlap:</strong>
<ul>
  <li>Compare users who converted vs. didn't convert — which pages they visited, which channel they came from</li>
</ul>
<strong>How to identify bottlenecks:</strong>
<ol>
  <li>Create the Funnel Exploration with the critical stages</li>
  <li>Find the step with the highest drop-off (%)</li>
  <li>Segment by device — if mobile has higher drop-off, it may be a UX issue</li>
  <li>Segment by source — if paid traffic has higher drop-off than organic, it may be incorrect expectations generated by the ad</li>
  <li>Cross with heatmaps (Hotjar, Microsoft Clarity) on the highest abandonment page for visual diagnosis</li>
</ol>`,
            es: `<strong>Herramientas de GA4 para análisis de journey:</strong><br><br>
<strong>1. Funnel Exploration:</strong>
<ul>
  <li>Explore → Funnel Exploration</li>
  <li>Definir las etapas del embudo (ej: page_view → add_to_cart → begin_checkout → purchase)</li>
  <li>GA4 muestra % de usuarios que avanzan en cada etapa y dónde abandonan</li>
  <li>Segmentar por device, geo o source para identificar dónde el problema es mayor</li>
</ul>
<strong>2. Path Exploration:</strong>
<ul>
  <li>Muestra los caminos reales que los usuarios recorren en el sitio</li>
  <li>Identificar loops inesperados (usuario volviendo a la misma página) o salidas anticipadas</li>
</ul>
<strong>3. Segment Overlap:</strong>
<ul>
  <li>Comparar usuarios que convirtieron vs. no convirtieron — qué páginas visitaron, de qué canal llegaron</li>
</ul>
<strong>Cómo identificar cuellos de botella:</strong>
<ol>
  <li>Crear el Funnel Exploration con las etapas críticas</li>
  <li>Encontrar la etapa con mayor drop-off (%)</li>
  <li>Segmentar por device — si mobile tiene mayor drop-off, puede ser un problema de UX</li>
  <li>Segmentar por source — si el tráfico pago tiene mayor drop-off que el orgánico, puede ser expectativa incorrecta generada por el anuncio</li>
  <li>Cruzar con heatmaps (Hotjar, Microsoft Clarity) en la página de mayor abandono para diagnóstico visual</li>
</ol>`,
          },
          tags: ['GA4', 'funil', 'jornada', 'funnel-exploration', 'drop-off'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como fazer auditoria completa de uma implementação de GTM + GA4 em uma conta que você acabou de assumir?',
            en: 'How to perform a complete audit of a GTM + GA4 implementation in an account you just took over?',
            es: '¿Cómo realizar una auditoría completa de una implementación de GTM + GA4 en una cuenta que acabas de asumir?',
          },
          a: {
            pt: `<strong>Framework de auditoria GTM + GA4:</strong><br><br>
<strong>1. GTM — verificações estruturais:</strong>
<ul>
  <li>Quantas tags existem? Tags órfãs (sem trigger) ou tags duplicadas?</li>
  <li>Há tags disparando em "All Pages" sem necessidade?</li>
  <li>Versões publicadas têm descrições? Consegue rastrear mudanças?</li>
  <li>Existe tag de GA4 Configuration publicada corretamente? Está com o Measurement ID certo?</li>
  <li>Tags de terceiros (Meta, LinkedIn, TikTok) estão com triggers corretos?</li>
</ul>
<strong>2. GA4 — verificações de dados:</strong>
<ul>
  <li>DebugView: disparar eventos no Preview Mode e verificar se chegam corretamente</li>
  <li>Relatório de Eventos: há eventos com nomes inconsistentes? (ex: "click_button" e "button_click" para a mesma ação)</li>
  <li>Conversões configuradas: fazem sentido com os objetivos de negócio?</li>
  <li>Dados históricos: o GA4 tem pelo menos 30 dias de dados para comparação?</li>
  <li>Filtros/exclusões de IP interno configurados? (Dev e escritório não devem contaminar dados)</li>
  <li>Google Signals ativado? Consent Mode configurado corretamente para LGPD/GDPR?</li>
</ul>
<strong>3. Tracking de conversões cross-plataforma:</strong>
<ul>
  <li>Floodlight (CM360), Meta Pixel e GA4 estão medindo as mesmas conversões? Discrepâncias esperadas?</li>
  <li>Deduplicação entre Pixel browser e CAPI configurada?</li>
</ul>
<strong>Output da auditoria:</strong> documento com o que foi encontrado, classificado por severidade (crítico / importante / melhoria), com recomendação de ação e prazo.`,
            en: `<strong>GTM + GA4 audit framework:</strong><br><br>
<strong>1. GTM — structural checks:</strong>
<ul>
  <li>How many tags exist? Orphan tags (no trigger) or duplicate tags?</li>
  <li>Are there tags firing on "All Pages" unnecessarily?</li>
  <li>Do published versions have descriptions? Can you track changes?</li>
  <li>Is there a GA4 Configuration tag published correctly? Does it have the right Measurement ID?</li>
  <li>Third-party tags (Meta, LinkedIn, TikTok) have correct triggers?</li>
</ul>
<strong>2. GA4 — data checks:</strong>
<ul>
  <li>DebugView: fire events in Preview Mode and verify they arrive correctly</li>
  <li>Events report: are there events with inconsistent names? (e.g. "click_button" and "button_click" for the same action)</li>
  <li>Configured conversions: do they make sense with business objectives?</li>
  <li>Historical data: does GA4 have at least 30 days of data for comparison?</li>
  <li>Internal IP filters/exclusions configured? (Dev and office shouldn't contaminate data)</li>
  <li>Google Signals enabled? Consent Mode correctly configured for LGPD/GDPR?</li>
</ul>
<strong>3. Cross-platform conversion tracking:</strong>
<ul>
  <li>Floodlight (CM360), Meta Pixel and GA4 measuring the same conversions? Expected discrepancies?</li>
  <li>Deduplication between browser Pixel and CAPI configured?</li>
</ul>
<strong>Audit output:</strong> document with findings, classified by severity (critical / important / improvement), with recommended action and timeline.`,
            es: `<strong>Framework de auditoría GTM + GA4:</strong><br><br>
<strong>1. GTM — verificaciones estructurales:</strong>
<ul>
  <li>¿Cuántas tags existen? ¿Tags huérfanas (sin trigger) o tags duplicadas?</li>
  <li>¿Hay tags disparando en "All Pages" sin necesidad?</li>
  <li>¿Las versiones publicadas tienen descripciones? ¿Se pueden rastrear cambios?</li>
  <li>¿Existe una tag de GA4 Configuration publicada correctamente? ¿Tiene el Measurement ID correcto?</li>
  <li>¿Las tags de terceros (Meta, LinkedIn, TikTok) tienen los triggers correctos?</li>
</ul>
<strong>2. GA4 — verificaciones de datos:</strong>
<ul>
  <li>DebugView: disparar eventos en Preview Mode y verificar si llegan correctamente</li>
  <li>Reporte de Eventos: ¿hay eventos con nombres inconsistentes? (ej: "click_button" y "button_click" para la misma acción)</li>
  <li>¿Las conversiones configuradas tienen sentido con los objetivos de negocio?</li>
  <li>¿GA4 tiene al menos 30 días de datos para comparación?</li>
  <li>¿Filtros/exclusiones de IP interno configurados? (Dev y oficina no deben contaminar datos)</li>
  <li>¿Google Signals activado? ¿Consent Mode correctamente configurado para LGPD/GDPR?</li>
</ul>
<strong>3. Tracking de conversiones cross-plataforma:</strong>
<ul>
  <li>¿Floodlight (CM360), Meta Pixel y GA4 miden las mismas conversiones? ¿Discrepancias esperadas?</li>
  <li>¿Deduplicación entre Pixel browser y CAPI configurada?</li>
</ul>
<strong>Output de la auditoría:</strong> documento con los hallazgos, clasificados por severidad (crítico / importante / mejora), con recomendación de acción y plazo.`,
          },
          tags: ['auditoria', 'GTM', 'GA4', 'implementação', 'QA'],
        },
      ],
    },
  ],
};

// ── APPEND: GTM/GA4 expandido ──
;(function(){
const d = window.__adopsData['gtm'];
d.tiers[0].questions.push(
  {
    q:{pt:'O que é o dataLayer e como ele funciona no GTM?',en:'What is the dataLayer and how does it work in GTM?',es:'¿Qué es el dataLayer y cómo funciona en GTM?'},
    a:{
      pt:`O <strong>dataLayer</strong> é um objeto JavaScript que serve como ponte entre o código do site e o GTM — permite passar dados dinâmicos (ID de produto, valor de transação, nome de página) para as tags sem hardcodar no código de cada tag.<br><br>
<strong>Como funciona:</strong>
<ol>
  <li>O desenvolvedor do site implementa um <code>dataLayer.push()</code> nos momentos relevantes (clique em botão, conclusão de compra, visualização de produto)</li>
  <li>O GTM "escuta" o dataLayer e captura os valores quando o evento ocorre</li>
  <li>As Tags do GTM usam esses valores via Variáveis (ex: <code>{{dlv - transactionValue}}</code>)</li>
</ol>
<strong>Exemplo prático — evento de compra:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">// Disparado pelo site quando a compra é concluída
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'T12345',
    value: 149.90,
    currency: 'BRL',
    items: [{ item_id: 'SKU-001', item_name: 'Produto X', quantity: 1, price: 149.90 }]
  }
});</pre>
<strong>No GTM:</strong>
<ul>
  <li>Criar Variável de Camada de Dados (Data Layer Variable) para cada campo: <code>ecommerce.value</code>, <code>ecommerce.transaction_id</code></li>
  <li>Criar Acionador de Evento Personalizado com nome do evento: <code>purchase</code></li>
  <li>Tag do GA4 ou Floodlight usa as variáveis para enviar os valores corretos</li>
</ul>
<strong>Por que usar dataLayer:</strong>
<ul>
  <li>Desacopla o marketing do desenvolvimento — mudanças nas tags não requerem alterar o código do site</li>
  <li>Dados consistentes e tipados — evita pegar valores de DOM scraping (frágil)</li>
  <li>Padrão de mercado — GA4, Meta, TikTok, Floodlight todos suportam dataLayer</li>
</ul>`,
      en:`The <strong>dataLayer</strong> is a JavaScript object that serves as a bridge between the site code and GTM — allows passing dynamic data (product ID, transaction value, page name) to tags without hardcoding in each tag's code.<br><br>
<strong>How it works:</strong>
<ol>
  <li>Site developer implements <code>dataLayer.push()</code> at relevant moments (button click, purchase completion, product view)</li>
  <li>GTM "listens" to the dataLayer and captures values when event occurs</li>
  <li>GTM Tags use these values via Variables</li>
</ol>
<strong>Practical example — purchase event:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'T12345',
    value: 149.90,
    currency: 'USD',
    items: [{ item_id: 'SKU-001', item_name: 'Product X', quantity: 1, price: 149.90 }]
  }
});</pre>
<strong>Why use dataLayer:</strong>
<ul>
  <li>Decouples marketing from development — tag changes don't require altering site code</li>
  <li>Consistent, typed data — avoids fragile DOM scraping</li>
  <li>Industry standard — GA4, Meta, TikTok, Floodlight all support dataLayer</li>
</ul>`,
      es:`El <strong>dataLayer</strong> es un objeto JavaScript que sirve como puente entre el código del sitio y GTM — permite pasar datos dinámicos a las tags sin hardcodear en el código de cada tag.<br><br>
<strong>Cómo funciona:</strong>
<ol>
  <li>El desarrollador del sitio implementa <code>dataLayer.push()</code> en los momentos relevantes</li>
  <li>GTM "escucha" el dataLayer y captura los valores cuando ocurre el evento</li>
  <li>Las Tags de GTM usan esos valores via Variables</li>
</ol>
<strong>Ejemplo práctico — evento de compra:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'T12345',
    value: 149.90,
    currency: 'BRL'
  }
});</pre>
<strong>Por qué usar dataLayer:</strong>
<ul>
  <li>Desacopla marketing de desarrollo — los cambios en tags no requieren modificar el código del sitio</li>
  <li>Datos consistentes y tipados — evita el DOM scraping (frágil)</li>
  <li>Estándar de mercado</li>
</ul>`,
    },
    tags:['dataLayer','GTM','JavaScript','GA4','evento','variável','ecommerce'],
  },
  {
    q:{pt:'Como migrar do Universal Analytics (UA) para o GA4 e quais as principais diferenças?',en:'How to migrate from Universal Analytics (UA) to GA4 and what are the main differences?',es:'¿Cómo migrar de Universal Analytics (UA) a GA4 y cuáles son las principales diferencias?'},
    a:{
      pt:`O <strong>Google Analytics 4 (GA4)</strong> substituiu definitivamente o Universal Analytics em julho de 2023. Entender as diferenças é essencial para qualquer profissional de AdOps.<br><br>
<strong>Principais diferenças UA vs. GA4:</strong>
<table>
<tr><th>Aspecto</th><th>Universal Analytics</th><th>GA4</th></tr>
<tr><td>Modelo de dados</td><td>Sessions + Pageviews</td><td>Eventos (tudo é evento)</td></tr>
<tr><td>Métricas principais</td><td>Sessions, Bounces, Goals</td><td>Events, Conversions, Engagement Rate</td></tr>
<tr><td>Bounce Rate</td><td>% sessões com 1 pageview</td><td>Substituído por Engagement Rate (inverso)</td></tr>
<tr><td>Visão cross-device</td><td>Limitada</td><td>Nativa (User ID, Google Signals)</td></tr>
<tr><td>App tracking</td><td>Firebase separado</td><td>Unificado web + app</td></tr>
<tr><td>Privacy</td><td>Cookie-based</td><td>Modelagem + consent mode</td></tr>
<tr><td>BigQuery</td><td>GA 360 (pago)</td><td>Nativo e gratuito</td></tr>
</table><br>
<strong>Configuração essencial do GA4:</strong>
<ul>
  <li><strong>Measurement ID:</strong> formato G-XXXXXXXX — substituiu o UA-XXXXXX</li>
  <li><strong>Eventos automáticos:</strong> GA4 rastreia automaticamente page_view, scroll, click, session_start, first_visit sem configuração adicional</li>
  <li><strong>Eventos recomendados:</strong> purchase, add_to_cart, login, sign_up — seguir nomenclatura padrão do GA4 para compatibilidade</li>
  <li><strong>Conversões:</strong> marcar eventos específicos como conversão em Admin → Events → marcar "Mark as conversion"</li>
</ul>
<strong>Consent Mode v2 (obrigatório para Google Ads desde março/2024):</strong>
<ul>
  <li>Integração com CMP para informar ao GA4 e Google Ads o status de consentimento do usuário</li>
  <li>Com consentimento: coleta completa. Sem consentimento: modelagem estatística para estimar conversões</li>
  <li>Sem Consent Mode v2: campanhas do Google Ads perdem acesso a conversões modeladas — impacto direto na otimização de Smart Bidding</li>
</ul>`,
      en:`<strong>Google Analytics 4 (GA4)</strong> definitively replaced Universal Analytics in July 2023.<br><br>
<strong>Main differences UA vs. GA4:</strong>
<table>
<tr><th>Aspect</th><th>Universal Analytics</th><th>GA4</th></tr>
<tr><td>Data model</td><td>Sessions + Pageviews</td><td>Events (everything is an event)</td></tr>
<tr><td>Main metrics</td><td>Sessions, Bounces, Goals</td><td>Events, Conversions, Engagement Rate</td></tr>
<tr><td>Bounce Rate</td><td>% sessions with 1 pageview</td><td>Replaced by Engagement Rate (inverse)</td></tr>
<tr><td>Cross-device view</td><td>Limited</td><td>Native (User ID, Google Signals)</td></tr>
<tr><td>BigQuery</td><td>GA 360 (paid)</td><td>Native and free</td></tr>
</table><br>
<strong>Essential GA4 configuration:</strong>
<ul>
  <li><strong>Measurement ID:</strong> G-XXXXXXXX format — replaced UA-XXXXXX</li>
  <li><strong>Automatic events:</strong> GA4 automatically tracks page_view, scroll, click, session_start, first_visit</li>
  <li><strong>Conversions:</strong> mark specific events as conversion in Admin → Events → "Mark as conversion"</li>
</ul>
<strong>Consent Mode v2 (required for Google Ads since March 2024):</strong>
<ul>
  <li>Integration with CMP to inform GA4 and Google Ads of user consent status</li>
  <li>Without Consent Mode v2: Google Ads campaigns lose access to modeled conversions — direct impact on Smart Bidding optimization</li>
</ul>`,
      es:`<strong>Google Analytics 4 (GA4)</strong> sustituyó definitivamente a Universal Analytics en julio de 2023.<br><br>
<strong>Principales diferencias UA vs. GA4:</strong>
<table>
<tr><th>Aspecto</th><th>Universal Analytics</th><th>GA4</th></tr>
<tr><td>Modelo de datos</td><td>Sesiones + Pageviews</td><td>Eventos (todo es evento)</td></tr>
<tr><td>Métricas principales</td><td>Sessions, Bounces, Goals</td><td>Events, Conversions, Engagement Rate</td></tr>
<tr><td>Bounce Rate</td><td>% sesiones con 1 pageview</td><td>Reemplazado por Engagement Rate</td></tr>
<tr><td>BigQuery</td><td>GA 360 (pago)</td><td>Nativo y gratuito</td></tr>
</table><br>
<strong>Configuración esencial del GA4:</strong>
<ul>
  <li><strong>Measurement ID:</strong> formato G-XXXXXXXX</li>
  <li><strong>Eventos automáticos:</strong> GA4 rastrea automáticamente page_view, scroll, click, session_start, first_visit</li>
  <li><strong>Conversiones:</strong> marcar eventos específicos como conversión en Admin → Events</li>
</ul>
<strong>Consent Mode v2 (obligatorio para Google Ads desde marzo/2024):</strong>
<ul>
  <li>Sin Consent Mode v2: las campañas de Google Ads pierden acceso a conversiones modeladas</li>
</ul>`,
    },
    tags:['GA4','Universal-Analytics','migração','Consent-Mode','BigQuery','evento','Measurement-ID'],
  }
);
d.tiers[1].questions.push(
  {
    q:{pt:'Como configurar o Google Consent Mode v2 e por que é obrigatório?',en:'How to configure Google Consent Mode v2 and why is it mandatory?',es:'¿Cómo configurar Google Consent Mode v2 y por qué es obligatorio?'},
    a:{
      pt:`O <strong>Google Consent Mode v2</strong> é um framework que conecta sua CMP (Consent Management Platform) ao ecossistema Google — informando automaticamente o status de consentimento do usuário para GA4, Google Ads e Floodlight.<br><br>
<strong>Por que é essencial (desde março/2024):</strong>
<ul>
  <li>Google exige Consent Mode v2 para anunciantes que exibem anúncios para usuários no EEE (Europa) e Reino Unido</li>
  <li>Sem implementação: perda de conversões modeladas no Google Ads → Smart Bidding fica cego para usuários que não consentiram</li>
  <li>No Brasil: ainda não obrigatório formalmente, mas a boa prática de LGPD recomenda implementação</li>
</ul>
<strong>Os 4 parâmetros do Consent Mode:</strong>
<ul>
  <li><code>ad_storage:</code> permite armazenamento de cookies relacionados a anúncios (Google Ads, Floodlight)</li>
  <li><code>analytics_storage:</code> permite armazenamento de cookies do GA4</li>
  <li><code>ad_user_data:</code> (v2 novo) permite envio de dados de usuário ao Google para publicidade</li>
  <li><code>ad_personalization:</code> (v2 novo) permite personalização de anúncios (retargeting, remarketing)</li>
</ul>
<strong>Implementação via GTM (método mais comum):</strong>
<ol>
  <li>Configurar a CMP (OneTrust, Cookiebot, Didomi) para integração com Google Consent Mode</li>
  <li>No GTM, adicionar a tag de inicialização do Consent Mode com estado padrão "denied" (antes do banner)</li>
  <li>Quando o usuário aceita no banner: a CMP atualiza os parâmetros para "granted" via dataLayer</li>
  <li>GA4 e Google Ads respondem ao status em tempo real — sem necessidade de reload da página</li>
</ol>
<strong>Comportamento por status:</strong>
<ul>
  <li><strong>Granted:</strong> coleta completa de dados, cookies setados normalmente</li>
  <li><strong>Denied:</strong> sem cookies, mas GA4 e Google Ads usam modelagem estatística (Behavioral Modeling) para estimar o comportamento dos usuários que não consentiram e incluir na otimização</li>
</ul>`,
      en:`<strong>Google Consent Mode v2</strong> is a framework that connects your CMP to the Google ecosystem — automatically informing user consent status to GA4, Google Ads and Floodlight.<br><br>
<strong>Why it's essential (since March 2024):</strong>
<ul>
  <li>Google requires Consent Mode v2 for advertisers showing ads to EEA and UK users</li>
  <li>Without implementation: loss of modeled conversions in Google Ads → Smart Bidding blind to non-consenting users</li>
</ul>
<strong>The 4 Consent Mode parameters:</strong>
<ul>
  <li><code>ad_storage:</code> allows ad-related cookie storage</li>
  <li><code>analytics_storage:</code> allows GA4 cookie storage</li>
  <li><code>ad_user_data:</code> (v2 new) allows sending user data to Google for advertising</li>
  <li><code>ad_personalization:</code> (v2 new) allows ad personalization (retargeting, remarketing)</li>
</ul>
<strong>Implementation via GTM:</strong>
<ol>
  <li>Configure CMP for Google Consent Mode integration</li>
  <li>In GTM, add Consent Mode initialization tag with default "denied" state</li>
  <li>When user accepts banner: CMP updates parameters to "granted" via dataLayer</li>
  <li>GA4 and Google Ads respond to status in real time</li>
</ol>`,
      es:`El <strong>Google Consent Mode v2</strong> es un framework que conecta tu CMP al ecosistema Google — informando automáticamente el estado de consentimiento del usuario a GA4, Google Ads y Floodlight.<br><br>
<strong>Por qué es esencial (desde marzo/2024):</strong>
<ul>
  <li>Google exige Consent Mode v2 para anunciantes que muestran anuncios a usuarios del EEE y Reino Unido</li>
  <li>Sin implementación: pérdida de conversiones modeladas en Google Ads</li>
</ul>
<strong>Los 4 parámetros del Consent Mode:</strong>
<ul>
  <li><code>ad_storage</code>, <code>analytics_storage</code>, <code>ad_user_data</code> (v2 nuevo), <code>ad_personalization</code> (v2 nuevo)</li>
</ul>
<strong>Implementación via GTM:</strong>
<ol>
  <li>Configurar la CMP para integración con Google Consent Mode</li>
  <li>En GTM, agregar la tag de inicialización con estado predeterminado "denied"</li>
  <li>Cuando el usuario acepta: la CMP actualiza los parámetros a "granted" via dataLayer</li>
</ol>`,
    },
    tags:['Consent-Mode-v2','GTM','CMP','GA4','Google-Ads','GDPR','privacidade','Smart-Bidding'],
  }
);
d.tiers[2].questions.push(
  {
    q:{pt:'Como fazer debug avançado de tags no GTM usando o Preview Mode e o Chrome DevTools?',en:'How to do advanced tag debugging in GTM using Preview Mode and Chrome DevTools?',es:'¿Cómo hacer debug avanzado de tags en GTM usando el Preview Mode y Chrome DevTools?'},
    a:{
      pt:`Debug eficiente de tags é uma das habilidades mais valorizadas em AdOps — resolver rapidamente por que uma tag não dispara economiza horas de investigação.<br><br>
<strong>GTM Preview Mode (Tag Assistant):</strong>
<ol>
  <li>No GTM, clique em <strong>"Visualizar"</strong> — abre uma nova aba com o site em modo debug</li>
  <li>O painel do Tag Assistant aparece no rodapé da página mostrando:
    <ul>
      <li><strong>Tags Fired:</strong> quais tags dispararam com sucesso nesta página/evento</li>
      <li><strong>Tags Not Fired:</strong> quais tags existem mas não dispararam (e por quê — trigger não atendido)</li>
      <li><strong>Variables:</strong> valores de todas as variáveis no momento do evento</li>
      <li><strong>Data Layer:</strong> histórico completo de eventos e pushes do dataLayer</li>
    </ul>
  </li>
  <li>Navegar pelo site simulando o comportamento do usuário — cada ação aparece como novo evento no painel</li>
</ol>
<strong>Chrome DevTools — Network Tab (para verificar requests):</strong>
<ul>
  <li>F12 → Network → filtrar por domínio específico:
    <ul>
      <li><code>fls.doubleclick.net</code> → requests do Floodlight (CM360)</li>
      <li><code>facebook.com/tr</code> → requests do Meta Pixel</li>
      <li><code>analytics.google.com</code> → requests do GA4</li>
      <li><code>googletagmanager.com</code> → próprio GTM</li>
    </ul>
  </li>
  <li>Clicar em um request → ver Headers e Payload com os parâmetros enviados</li>
  <li>Status 200: request bem-sucedido. Status 400/500: erro no request — inspecionar os parâmetros</li>
</ul>
<strong>Console Tab — verificar erros JavaScript:</strong>
<ul>
  <li>Erros de JavaScript na página podem bloquear a execução das tags</li>
  <li>Verificar por mensagens de erro (vermelho) que aparecem no console — especialmente erros relacionados ao gtag, dataLayer ou objeto de ecommerce</li>
</ul>
<strong>Checklist de debug de tag que não dispara:</strong>
<ol>
  <li>A tag está publicada? (ou só salva no container)</li>
  <li>O trigger está configurado corretamente? (URL exata, nome do evento correto)</li>
  <li>O dataLayer.push está sendo executado? (verificar no painel Data Layer)</li>
  <li>Há erro de JavaScript impedindo a execução? (verificar Console)</li>
  <li>A tag está em conflito com outra tag da mesma sequência? (Tag Sequencing)</li>
</ol>`,
      en:`Efficient tag debugging is one of the most valued skills in AdOps.<br><br>
<strong>GTM Preview Mode (Tag Assistant):</strong>
<ol>
  <li>In GTM, click <strong>"Preview"</strong> — opens new tab with site in debug mode</li>
  <li>Tag Assistant panel shows: Tags Fired, Tags Not Fired (and why), Variables values, dataLayer history</li>
  <li>Navigate site simulating user behavior — each action appears as new event in panel</li>
</ol>
<strong>Chrome DevTools — Network Tab:</strong>
<ul>
  <li>F12 → Network → filter by specific domain: <code>fls.doubleclick.net</code> (Floodlight), <code>facebook.com/tr</code> (Meta Pixel), <code>analytics.google.com</code> (GA4)</li>
  <li>Click a request → see Headers and Payload with sent parameters</li>
  <li>Status 200: successful request. Status 400/500: error</li>
</ul>
<strong>Debug checklist for tag not firing:</strong>
<ol>
  <li>Is the tag published? (or just saved in container)</li>
  <li>Is the trigger correctly configured? (exact URL, correct event name)</li>
  <li>Is the dataLayer.push executing? (check Data Layer panel)</li>
  <li>Is there a JavaScript error blocking execution? (check Console)</li>
  <li>Is the tag conflicting with another tag in the same sequence?</li>
</ol>`,
      es:`El debug eficiente de tags es una de las habilidades más valoradas en AdOps.<br><br>
<strong>GTM Preview Mode (Tag Assistant):</strong>
<ol>
  <li>En GTM, haz clic en <strong>"Vista previa"</strong> — abre nueva pestaña con el sitio en modo debug</li>
  <li>El panel muestra: Tags disparadas, Tags no disparadas (y por qué), Valores de Variables, historial del dataLayer</li>
</ol>
<strong>Chrome DevTools — Pestaña Network:</strong>
<ul>
  <li>F12 → Network → filtrar por dominio: <code>fls.doubleclick.net</code>, <code>facebook.com/tr</code>, <code>analytics.google.com</code></li>
  <li>Clic en una solicitud → ver Headers y Payload con los parámetros enviados</li>
</ul>
<strong>Checklist de debug de tag que no se dispara:</strong>
<ol>
  <li>¿Está la tag publicada?</li>
  <li>¿El activador está configurado correctamente?</li>
  <li>¿Se está ejecutando el dataLayer.push?</li>
  <li>¿Hay un error de JavaScript que impide la ejecución?</li>
</ol>`,
    },
    tags:['GTM','debug','Preview-Mode','DevTools','Network-Tab','dataLayer','troubleshooting'],
  }
);
})();

window.__adopsData = window.__adopsData || {};
window.__adopsData['setup_google'] = {
  icon: '🔧',
  name: { pt: 'Setup Google Stack', en: 'Google Stack Setup', es: 'Configuración Google Stack' },
  desc: {
    pt: 'Como conectar e configurar CM360, DV360, GAM, GTM, GA4, contadores, tags e toda a stack Google do zero.',
    en: 'How to connect and configure CM360, DV360, GAM, GTM, GA4, counters, tags and the entire Google stack from scratch.',
    es: 'Cómo conectar y configurar CM360, DV360, GAM, GTM, GA4, contadores, tags y todo el Google stack desde cero.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: { pt: 'Como criar uma conta no Campaign Manager 360 (CM360) e estruturar o primeiro advertiser?', en: 'How to create a CM360 account and structure the first advertiser?', es: '¿Cómo crear una cuenta en Campaign Manager 360 (CM360) y estructurar el primer advertiser?' },
          a: {
            pt: `O <strong>Campaign Manager 360 (CM360)</strong> é o ad server central da stack Google — usado para trafficking, mensuração e relatórios de campanhas display, video e rich media.<br><br>
<strong>Acesso ao CM360:</strong>
<ul>
  <li>URL: <code>campaignmanager.google.com</code></li>
  <li>Requer uma conta Google Marketing Platform (GMP) com licença de CM360</li>
  <li>Para agências: gerenciado pelo Google ou parceiro certificado. Para anunciantes grandes: acesso direto via GMP.</li>
  <li>Solicitar acesso: através do representante Google ou via <code>marketingplatform.google.com</code></li>
</ul>
<strong>Estrutura hierárquica do CM360:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Network (conta raiz)
  └── Advertiser (anunciante / cliente)
        └── Campaign (campanha)
              └── Placement (espaço/veículo)
                    └── Ad (anúncio)
                          └── Creative (criativo)</pre>
<strong>Criar um Advertiser:</strong>
<ol>
  <li>No CM360, clique no menu superior → <strong>"Advertisers"</strong> → <strong>"New Advertiser"</strong></li>
  <li>Preencha: nome do advertiser (ex: "Unilever BR"), fuso horário, moeda</li>
  <li>Defina o <strong>Default Landing Page URL</strong> — URL padrão para cliques sem destino definido</li>
  <li>Ative as funcionalidades: <strong>Floodlight</strong> (pixel de conversão), <strong>Active View</strong> (viewability)</li>
  <li>Salve — o Advertiser ID é gerado automaticamente (anote para futuras integrações)</li>
</ol>
<strong>Criar uma Campanha dentro do Advertiser:</strong>
<ol>
  <li>Dentro do Advertiser, clique em <strong>"New Campaign"</strong></li>
  <li>Defina: nome, período (start/end date), landing page URL padrão da campanha</li>
  <li>Selecione o tipo: Display, Video, Mobile ou Rich Media</li>
  <li>Defina o budget (apenas para controle — não limita entrega)</li>
</ol>
<strong>Configurações essenciais do Advertiser:</strong>
<ul>
  <li><strong>Floodlight Configuration:</strong> configurar o código Floodlight para rastrear conversões no site</li>
  <li><strong>Audience Lists:</strong> criar listas de remarketing baseadas em Floodlight</li>
  <li><strong>User Access:</strong> adicionar usuários com permissões específicas (Admin, Standard User, Read Only)</li>
</ul>`,
            en: `<strong>Campaign Manager 360 (CM360)</strong> is the central ad server in the Google stack — used for trafficking, measurement and reporting of display, video and rich media campaigns.<br><br>
<strong>Access to CM360:</strong>
<ul>
  <li>URL: <code>campaignmanager.google.com</code></li>
  <li>Requires a Google Marketing Platform (GMP) account with CM360 license</li>
  <li>For agencies: managed by Google or certified partner. For large advertisers: direct access via GMP.</li>
  <li>Request access: through Google representative or via <code>marketingplatform.google.com</code></li>
</ul>
<strong>CM360 hierarchical structure:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Network (root account)
  └── Advertiser (advertiser / client)
        └── Campaign
              └── Placement (space/publisher)
                    └── Ad
                          └── Creative</pre>
<strong>Create an Advertiser:</strong>
<ol>
  <li>In CM360, click top menu → <strong>"Advertisers"</strong> → <strong>"New Advertiser"</strong></li>
  <li>Fill in: advertiser name (e.g. "Brand US"), timezone, currency</li>
  <li>Define <strong>Default Landing Page URL</strong></li>
  <li>Activate features: <strong>Floodlight</strong> (conversion pixel), <strong>Active View</strong> (viewability)</li>
  <li>Save — Advertiser ID is automatically generated</li>
</ol>
<strong>Create a Campaign within the Advertiser:</strong>
<ol>
  <li>Inside Advertiser, click <strong>"New Campaign"</strong></li>
  <li>Define: name, period (start/end date), campaign default landing page URL</li>
  <li>Select type: Display, Video, Mobile or Rich Media</li>
  <li>Define budget (control only — doesn't limit delivery)</li>
</ol>
<strong>Essential Advertiser settings:</strong>
<ul>
  <li><strong>Floodlight Configuration:</strong> configure Floodlight code to track conversions on site</li>
  <li><strong>Audience Lists:</strong> create remarketing lists based on Floodlight</li>
  <li><strong>User Access:</strong> add users with specific permissions</li>
</ul>`,
            es: `<strong>Campaign Manager 360 (CM360)</strong> es el ad server central del Google stack — utilizado para trafficking, medición y reporting de campañas display, video y rich media.<br><br>
<strong>Acceso al CM360:</strong>
<ul>
  <li>URL: <code>campaignmanager.google.com</code></li>
  <li>Requiere una cuenta Google Marketing Platform (GMP) con licencia de CM360</li>
</ul>
<strong>Estructura jerárquica del CM360:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Network (cuenta raíz)
  └── Advertiser (anunciante / cliente)
        └── Campaign (campaña)
              └── Placement (espacio/medio)
                    └── Ad (anuncio)
                          └── Creative (creativo)</pre>
<strong>Crear un Advertiser:</strong>
<ol>
  <li>En CM360, haz clic en el menú superior → <strong>"Advertisers"</strong> → <strong>"New Advertiser"</strong></li>
  <li>Rellena: nombre del advertiser, zona horaria, moneda</li>
  <li>Define el <strong>Default Landing Page URL</strong></li>
  <li>Activa las funcionalidades: <strong>Floodlight</strong>, <strong>Active View</strong></li>
  <li>Guarda — el Advertiser ID se genera automáticamente</li>
</ol>
<strong>Crear una Campaña dentro del Advertiser:</strong>
<ol>
  <li>Dentro del Advertiser, haz clic en <strong>"New Campaign"</strong></li>
  <li>Define: nombre, período (fecha inicio/fin), URL de landing page por defecto</li>
  <li>Selecciona el tipo: Display, Video, Mobile o Rich Media</li>
</ol>`,
          },
          tags: ['CM360', 'Campaign-Manager', 'Advertiser', 'Floodlight', 'GMP', 'setup', 'trafficking'],
        },
        {
          q: { pt: 'O que é o Floodlight e como criar uma tag de contador (Activity) no CM360?', en: 'What is Floodlight and how to create a counter tag (Activity) in CM360?', es: '¿Qué es Floodlight y cómo crear una tag de contador (Activity) en CM360?' },
          a: {
            pt: `<strong>Floodlight</strong> é o sistema de tracking de conversão do CM360 — equivalente ao Pixel do Meta, mas para a stack Google. Registra ações do usuário no site após clique ou impressão nos anúncios.<br><br>
<strong>Tipos de Floodlight Activity:</strong>
<ul>
  <li><strong>Counter (Contador):</strong> conta o número de conversões. Usado para leads, cadastros, pageviews de páginas específicas. Subtipos: Standard (conta cada conversão), Unique (conta apenas a 1ª conversão por usuário), Per Session (conta uma vez por sessão).</li>
  <li><strong>Sales (Venda):</strong> registra o valor e quantidade da transação. Obrigatório para e-commerce — captura o <code>cost</code> (valor total) e <code>quantity</code> (itens vendidos).</li>
</ul>
<strong>Como criar uma Activity (Counter) no CM360:</strong>
<ol>
  <li>No CM360, dentro do Advertiser, clique em <strong>Floodlight → Activities → New Activity</strong></li>
  <li>Defina:
    <ul>
      <li><strong>Nome:</strong> ex: "Lead - Formulário Contato"</li>
      <li><strong>Tipo:</strong> Counter ou Sales</li>
      <li><strong>Activity Group:</strong> agrupar atividades similares (ex: "Conversões de Lead", "Compras")</li>
      <li><strong>Counting Method:</strong> Standard, Unique ou Per Session</li>
      <li><strong>Expected URL:</strong> URL da página de confirmação onde o tag vai disparar</li>
    </ul>
  </li>
  <li>Salve — o CM360 gera automaticamente o <strong>código Floodlight</strong> (iframe + script)</li>
  <li>Copie o código e implemente via GTM ou diretamente na página de obrigado</li>
</ol>
<strong>Parâmetros essenciais do Floodlight:</strong>
<ul>
  <li><code>src</code>: ID do advertiser no CM360</li>
  <li><code>type</code>: Activity Group tag string</li>
  <li><code>cat</code>: Activity tag string (identificador único da atividade)</li>
  <li><code>cost</code>: valor da transação (Sales apenas)</li>
  <li><code>qty</code>: quantidade (Sales apenas)</li>
  <li><code>ord</code>: order ID — identificador único da transação para evitar duplicação</li>
  <li><code>u1...u100</code>: variáveis customizadas para dados adicionais</li>
</ul>
<strong>Verificar se o Floodlight está funcionando:</strong>
<ul>
  <li>No CM360: Reports → Floodlight → verificar se os hits aparecem nas últimas horas</li>
  <li>Usar o <strong>Google Tag Assistant</strong> ou abrir o DevTools (F12) → Network → filtrar por "fls.doubleclick.net" para ver o request do Floodlight disparando</li>
</ul>`,
            en: `<strong>Floodlight</strong> is CM360's conversion tracking system — equivalent to Meta Pixel, but for the Google stack. Records user actions on the site after click or impression on ads.<br><br>
<strong>Floodlight Activity types:</strong>
<ul>
  <li><strong>Counter:</strong> counts the number of conversions. Used for leads, registrations, specific page pageviews. Subtypes: Standard (counts each conversion), Unique (counts only 1st conversion per user), Per Session (counts once per session).</li>
  <li><strong>Sales:</strong> records transaction value and quantity. Required for e-commerce — captures <code>cost</code> (total value) and <code>quantity</code> (items sold).</li>
</ul>
<strong>How to create an Activity (Counter) in CM360:</strong>
<ol>
  <li>In CM360, inside the Advertiser, click <strong>Floodlight → Activities → New Activity</strong></li>
  <li>Define:
    <ul>
      <li><strong>Name:</strong> e.g. "Lead - Contact Form"</li>
      <li><strong>Type:</strong> Counter or Sales</li>
      <li><strong>Activity Group:</strong> group similar activities (e.g. "Lead Conversions", "Purchases")</li>
      <li><strong>Counting Method:</strong> Standard, Unique or Per Session</li>
      <li><strong>Expected URL:</strong> URL of confirmation page where tag will fire</li>
    </ul>
  </li>
  <li>Save — CM360 automatically generates the <strong>Floodlight code</strong> (iframe + script)</li>
  <li>Copy the code and implement via GTM or directly on thank-you page</li>
</ol>
<strong>Essential Floodlight parameters:</strong>
<ul>
  <li><code>src</code>: advertiser ID in CM360</li>
  <li><code>type</code>: Activity Group tag string</li>
  <li><code>cat</code>: Activity tag string (unique activity identifier)</li>
  <li><code>cost</code>: transaction value (Sales only)</li>
  <li><code>qty</code>: quantity (Sales only)</li>
  <li><code>ord</code>: order ID — unique transaction identifier to avoid duplication</li>
  <li><code>u1...u100</code>: custom variables for additional data</li>
</ul>
<strong>Verify Floodlight is working:</strong>
<ul>
  <li>In CM360: Reports → Floodlight → check if hits appear in last few hours</li>
  <li>Use Google Tag Assistant or open DevTools (F12) → Network → filter by "fls.doubleclick.net" to see Floodlight request firing</li>
</ul>`,
            es: `<strong>Floodlight</strong> es el sistema de seguimiento de conversiones de CM360 — equivalente al Píxel de Meta, pero para el Google stack. Registra acciones del usuario en el sitio después de un clic o impresión en los anuncios.<br><br>
<strong>Tipos de Floodlight Activity:</strong>
<ul>
  <li><strong>Counter (Contador):</strong> cuenta el número de conversiones. Subtipos: Standard (cuenta cada conversión), Unique (solo la 1ª por usuario), Per Session (una vez por sesión).</li>
  <li><strong>Sales (Venta):</strong> registra el valor y cantidad de la transacción. Obligatorio para e-commerce.</li>
</ul>
<strong>Cómo crear una Activity (Counter) en CM360:</strong>
<ol>
  <li>En CM360, dentro del Advertiser, haz clic en <strong>Floodlight → Activities → New Activity</strong></li>
  <li>Define:
    <ul>
      <li><strong>Nombre:</strong> ej: "Lead - Formulario de Contacto"</li>
      <li><strong>Tipo:</strong> Counter o Sales</li>
      <li><strong>Activity Group:</strong> agrupar actividades similares</li>
      <li><strong>Counting Method:</strong> Standard, Unique o Per Session</li>
      <li><strong>Expected URL:</strong> URL de la página de confirmación</li>
    </ul>
  </li>
  <li>Guarda — CM360 genera automáticamente el <strong>código Floodlight</strong></li>
  <li>Copia el código e implementa via GTM o directamente en la página de agradecimiento</li>
</ol>
<strong>Parámetros esenciales del Floodlight:</strong>
<ul>
  <li><code>src</code>: ID del advertiser en CM360</li>
  <li><code>type</code>: Activity Group tag string</li>
  <li><code>cat</code>: Activity tag string</li>
  <li><code>cost</code>: valor de la transacción (Sales únicamente)</li>
  <li><code>ord</code>: order ID — identificador único de la transacción para evitar duplicación</li>
</ul>`,
          },
          tags: ['Floodlight', 'CM360', 'contador', 'tag', 'conversão', 'Activity', 'Sales', 'GTM'],
        },
        {
          q: { pt: 'Como conectar o DV360 ao CM360 e qual a relação entre as duas plataformas?', en: 'How to connect DV360 to CM360 and what is the relationship between the two platforms?', es: '¿Cómo conectar DV360 a CM360 y cuál es la relación entre las dos plataformas?' },
          a: {
            pt: `<strong>DV360 (Display & Video 360)</strong> é o DSP do Google — onde você compra mídia programática. O <strong>CM360</strong> é o ad server — onde você trafica criativos e mede resultados. Eles se complementam:<br><br>
<strong>DV360 sem CM360:</strong> você compra mídia mas não tem relatório unificado cross-publisher, não tem Floodlight nativo, não tem frequency cap cross-channel.<br>
<strong>DV360 + CM360:</strong> compra programática com mensuração e frequência centralizada — o setup profissional padrão.<br><br>
<strong>Como fazer a integração DV360 ↔ CM360:</strong>
<ol>
  <li>No <strong>DV360</strong>, acesse <strong>Partner Settings → Campaign Manager 360 Linking</strong></li>
  <li>Clique em <strong>"Link a CM360 Account"</strong></li>
  <li>Selecione o Network ID do CM360 e o Advertiser ID correspondente</li>
  <li>Confirme — o DV360 envia uma solicitação ao CM360</li>
  <li>No <strong>CM360</strong>, acesse <strong>Admin → DV360 Linking → aceitar a solicitação</strong></li>
  <li>Após aceito, os Floodlight Activities do CM360 ficam disponíveis no DV360 como métricas de conversão</li>
</ol>
<strong>O que a integração permite:</strong>
<ul>
  <li><strong>Floodlights compartilhados:</strong> o pixel de conversão do CM360 é usado automaticamente no DV360 para otimização</li>
  <li><strong>Audience Lists do CM360:</strong> listas de remarketing criadas no CM360 (via Floodlight) ficam disponíveis como segmentação no DV360</li>
  <li><strong>Relatório unificado no CM360:</strong> impressões do DV360 + outros publishers aparecem no mesmo relatório</li>
  <li><strong>Frequency capping cross-publisher:</strong> o CM360 gerencia a frequência across todos os canais</li>
  <li><strong>Creatives do CM360 no DV360:</strong> você pode usar criativos traficados no CM360 dentro das campanhas DV360</li>
</ul>
<strong>Como usar criativos do CM360 em campanhas DV360:</strong>
<ol>
  <li>No DV360, ao criar/editar um Line Item → Criativos → Selecionar tipo → "Campaign Manager 360"</li>
  <li>Selecione a campanha do CM360 e os anúncios/criativos desejados</li>
  <li>O serving acontece via CM360 — o DV360 serve via ad call ao CM360</li>
</ol>`,
            en: `<strong>DV360 (Display & Video 360)</strong> is Google's DSP — where you buy programmatic media. <strong>CM360</strong> is the ad server — where you traffic creatives and measure results. They complement each other:<br><br>
<strong>DV360 without CM360:</strong> you buy media but don't have unified cross-publisher reporting, no native Floodlight, no cross-channel frequency capping.<br>
<strong>DV360 + CM360:</strong> programmatic buying with centralized measurement and frequency — the standard professional setup.<br><br>
<strong>How to integrate DV360 ↔ CM360:</strong>
<ol>
  <li>In <strong>DV360</strong>, access <strong>Partner Settings → Campaign Manager 360 Linking</strong></li>
  <li>Click <strong>"Link a CM360 Account"</strong></li>
  <li>Select the CM360 Network ID and corresponding Advertiser ID</li>
  <li>Confirm — DV360 sends a request to CM360</li>
  <li>In <strong>CM360</strong>, access <strong>Admin → DV360 Linking → accept the request</strong></li>
  <li>Once accepted, CM360 Floodlight Activities become available in DV360 as conversion metrics</li>
</ol>
<strong>What the integration enables:</strong>
<ul>
  <li><strong>Shared Floodlights:</strong> CM360 conversion pixel is automatically used in DV360 for optimization</li>
  <li><strong>CM360 Audience Lists:</strong> remarketing lists created in CM360 (via Floodlight) become available as segmentation in DV360</li>
  <li><strong>Unified reporting in CM360:</strong> DV360 impressions + other publishers appear in the same report</li>
  <li><strong>Cross-publisher frequency capping:</strong> CM360 manages frequency across all channels</li>
  <li><strong>CM360 Creatives in DV360:</strong> you can use creatives trafficked in CM360 within DV360 campaigns</li>
</ul>
<strong>How to use CM360 creatives in DV360 campaigns:</strong>
<ol>
  <li>In DV360, when creating/editing a Line Item → Creatives → Select type → "Campaign Manager 360"</li>
  <li>Select the CM360 campaign and desired ads/creatives</li>
  <li>Serving happens via CM360 — DV360 serves via ad call to CM360</li>
</ol>`,
            es: `<strong>DV360 (Display & Video 360)</strong> es el DSP de Google — donde compras medios programáticos. <strong>CM360</strong> es el ad server — donde traficas creativos y mides resultados. Se complementan:<br><br>
<strong>DV360 sin CM360:</strong> compras medios pero no tienes reporte unificado cross-publisher, no tienes Floodlight nativo, no tienes frequency cap cross-channel.<br>
<strong>DV360 + CM360:</strong> compra programática con medición y frecuencia centralizadas — el setup profesional estándar.<br><br>
<strong>Cómo hacer la integración DV360 ↔ CM360:</strong>
<ol>
  <li>En <strong>DV360</strong>, accede a <strong>Partner Settings → Campaign Manager 360 Linking</strong></li>
  <li>Haz clic en <strong>"Link a CM360 Account"</strong></li>
  <li>Selecciona el Network ID de CM360 y el Advertiser ID correspondiente</li>
  <li>Confirma — DV360 envía una solicitud a CM360</li>
  <li>En <strong>CM360</strong>, accede a <strong>Admin → DV360 Linking → aceptar la solicitud</strong></li>
  <li>Tras la aceptación, los Floodlight Activities de CM360 están disponibles en DV360 como métricas de conversión</li>
</ol>
<strong>Lo que habilita la integración:</strong>
<ul>
  <li><strong>Floodlights compartidos:</strong> el píxel de conversión de CM360 se usa automáticamente en DV360</li>
  <li><strong>Audience Lists de CM360:</strong> listas de remarketing disponibles como segmentación en DV360</li>
  <li><strong>Reporte unificado en CM360:</strong> impresiones de DV360 + otros publishers en el mismo reporte</li>
  <li><strong>Frequency capping cross-publisher</strong></li>
  <li><strong>Creativos de CM360 en DV360</strong></li>
</ul>`,
          },
          tags: ['DV360', 'CM360', 'integração', 'linking', 'Floodlight', 'programático', 'GMP'],
        },
        {
          q: { pt: 'Como criar uma campanha no DV360 do zero — Advertiser, Campaign, Insertion Order e Line Item?', en: 'How to create a campaign in DV360 from scratch — Advertiser, Campaign, Insertion Order and Line Item?', es: '¿Cómo crear una campaña en DV360 desde cero — Advertiser, Campaign, Insertion Order y Line Item?' },
          a: {
            pt: `O DV360 tem uma hierarquia de 5 níveis. Entender cada nível é fundamental para configurar campanhas corretamente.<br><br>
<strong>Hierarquia DV360:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Partner (agência/empresa)
  └── Advertiser (anunciante / cliente)
        └── Campaign (campanha / objetivo)
              └── Insertion Order (IO / canal / budget group)
                    └── Line Item (targeting / leilão)
                          └── Creative (criativo)</pre>
<strong>Nível 1 — Partner:</strong> conta raiz da agência. Configurações globais, billing, permissões de usuário.<br><br>
<strong>Nível 2 — Advertiser:</strong>
<ul>
  <li>Criar: Partner → Advertisers → New Advertiser</li>
  <li>Configurar: nome, fuso horário, moeda, Floodlight (linkar ao CM360 ou configurar nativo)</li>
</ul>
<strong>Nível 3 — Campaign:</strong>
<ul>
  <li>Criar dentro do Advertiser: Campaigns → New Campaign</li>
  <li>Definir: nome, objetivo (Awareness, Consideration, Action), período, budget total</li>
  <li>O Campaign agrupa IOs relacionados ao mesmo objetivo de marketing</li>
</ul>
<strong>Nível 4 — Insertion Order (IO):</strong>
<ul>
  <li>Criar dentro da Campaign: New Insertion Order</li>
  <li>Definir: nome, tipo (Display, Video, Audio, CTV), budget do IO (diário ou total), período, KPI principal (CPM, CTR, CPA, Viewability), pacing (even, ahead, ASAP)</li>
  <li>O IO representa o "budget envelope" — agrupa Line Items do mesmo canal/objetivo</li>
  <li>Budget Segments: dividir o budget em períodos diferentes (ex: R$10k semana 1, R$20k semana 2)</li>
</ul>
<strong>Nível 5 — Line Item:</strong>
<ul>
  <li>Criar dentro do IO: New Line Item</li>
  <li>Configurar: nome, tipo (RTB, Deal ID, TrueView), budget do LI, período, frequência, targeting:</li>
</ul>
<strong>Targeting disponível no Line Item:</strong>
<ul>
  <li><strong>Geo:</strong> país, estado, cidade, raio em km</li>
  <li><strong>Audience:</strong> Google Audiences (In-Market, Affinity, Life Events), First-Party (Floodlight Lists), Custom Intent (keywords de busca), Similar Audiences</li>
  <li><strong>Contextual:</strong> categorias de conteúdo, keywords na página, topics</li>
  <li><strong>Dispositivo:</strong> desktop, mobile, tablet, CTV</li>
  <li><strong>Viewability:</strong> ativar Active View para filtrar por viewability mínima</li>
  <li><strong>Brand Safety:</strong> categorias de exclusão, listas de blocklist</li>
  <li><strong>Deal IDs:</strong> vincular a PMPs ou PGs negociados com publishers</li>
</ul>`,
            en: `DV360 has a 5-level hierarchy. Understanding each level is essential for correctly configuring campaigns.<br><br>
<strong>DV360 hierarchy:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Partner (agency/company)
  └── Advertiser (advertiser / client)
        └── Campaign (campaign / objective)
              └── Insertion Order (IO / channel / budget group)
                    └── Line Item (targeting / auction)
                          └── Creative</pre>
<strong>Level 2 — Advertiser:</strong>
<ul>
  <li>Create: Partner → Advertisers → New Advertiser</li>
  <li>Configure: name, timezone, currency, Floodlight (link to CM360 or configure native)</li>
</ul>
<strong>Level 3 — Campaign:</strong>
<ul>
  <li>Create inside Advertiser: Campaigns → New Campaign</li>
  <li>Define: name, objective (Awareness, Consideration, Action), period, total budget</li>
  <li>Campaign groups IOs related to the same marketing objective</li>
</ul>
<strong>Level 4 — Insertion Order (IO):</strong>
<ul>
  <li>Create inside Campaign: New Insertion Order</li>
  <li>Define: name, type (Display, Video, Audio, CTV), IO budget (daily or total), period, main KPI (CPM, CTR, CPA, Viewability), pacing (even, ahead, ASAP)</li>
  <li>IO represents the "budget envelope" — groups Line Items of the same channel/objective</li>
</ul>
<strong>Level 5 — Line Item:</strong>
<ul>
  <li>Create inside IO: New Line Item</li>
  <li>Configure: name, type (RTB, Deal ID, TrueView), LI budget, period, frequency, targeting:</li>
</ul>
<strong>Targeting available in Line Item:</strong>
<ul>
  <li><strong>Geo, Audience, Contextual, Device, Viewability, Brand Safety, Deal IDs</strong></li>
</ul>`,
            es: `DV360 tiene una jerarquía de 5 niveles. Entender cada nivel es fundamental para configurar campañas correctamente.<br><br>
<strong>Jerarquía DV360:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Partner (agencia/empresa)
  └── Advertiser (anunciante / cliente)
        └── Campaign (campaña / objetivo)
              └── Insertion Order (IO / canal / grupo de presupuesto)
                    └── Line Item (targeting / subasta)
                          └── Creative (creativo)</pre>
<strong>Nivel 2 — Advertiser:</strong>
<ul>
  <li>Crear: Partner → Advertisers → New Advertiser</li>
  <li>Configurar: nombre, zona horaria, moneda, Floodlight</li>
</ul>
<strong>Nivel 3 — Campaign:</strong>
<ul>
  <li>Crear dentro del Advertiser: Campaigns → New Campaign</li>
  <li>Definir: nombre, objetivo, período, presupuesto total</li>
</ul>
<strong>Nivel 4 — Insertion Order (IO):</strong>
<ul>
  <li>Crear dentro de la Campaign: New Insertion Order</li>
  <li>Definir: nombre, tipo (Display, Video, Audio, CTV), presupuesto, período, KPI principal, pacing</li>
  <li>El IO representa el "sobre de presupuesto" — agrupa Line Items del mismo canal/objetivo</li>
</ul>
<strong>Nivel 5 — Line Item:</strong>
<ul>
  <li>Crear dentro del IO: New Line Item</li>
  <li>Configurar: nombre, tipo, presupuesto, período, frecuencia, targeting:</li>
  <li><strong>Targeting disponible:</strong> Geo, Audiencia, Contextual, Dispositivo, Viewability, Brand Safety, Deal IDs</li>
</ul>`,
          },
          tags: ['DV360', 'campanha', 'IO', 'Line-Item', 'targeting', 'pacing', 'estrutura', 'setup'],
        },
        {
          q: { pt: 'Como configurar o Google Tag Manager do zero — conta, container, tags, acionadores e publicação?', en: 'How to configure Google Tag Manager from scratch — account, container, tags, triggers and publishing?', es: '¿Cómo configurar Google Tag Manager desde cero — cuenta, contenedor, tags, activadores y publicación?' },
          a: {
            pt: `O <strong>Google Tag Manager (GTM)</strong> é um sistema de gerenciamento de tags que permite instalar e gerenciar scripts (Google Analytics, pixels, Floodlights, etc.) no site sem precisar mexer no código a cada mudança.<br><br>
<strong>Criar conta e container GTM:</strong>
<ol>
  <li>Acesse <code>tagmanager.google.com</code> com sua conta Google</li>
  <li>Clique em <strong>"Criar conta"</strong></li>
  <li>Nome da conta (ex: "Empresa XYZ") e país</li>
  <li>Nome do container (ex: "Site Principal") e tipo: <strong>Web</strong> (para sites), iOS, Android ou AMP</li>
  <li>Aceite os termos → o GTM gera 2 snippets de código: um para o <code>&lt;head&gt;</code> e outro logo após o <code>&lt;body&gt;</code></li>
  <li>Copie e cole os 2 snippets no código do site (ou use plugin WordPress/Shopify para instalação)</li>
</ol>
<strong>Conceitos fundamentais do GTM:</strong>
<ul>
  <li><strong>Tag:</strong> o código que você quer disparar (ex: Google Analytics 4, Meta Pixel, Floodlight, código customizado)</li>
  <li><strong>Acionador (Trigger):</strong> a condição que dispara a tag (ex: "todas as páginas", "clique no botão X", "URL contém /obrigado")</li>
  <li><strong>Variável (Variable):</strong> valores dinâmicos usados em tags e triggers (ex: URL atual, valor de transação do dataLayer)</li>
  <li><strong>DataLayer:</strong> objeto JavaScript no site que passa informações dinâmicas ao GTM (ex: dados de produto, valor de compra)</li>
</ul>
<strong>Criar uma Tag GA4 (exemplo prático):</strong>
<ol>
  <li>No GTM, clique em <strong>Tags → Nova</strong></li>
  <li>Configuração da tag: tipo → <strong>Google Analytics: evento do GA4</strong></li>
  <li>Tag de configuração: selecione ou crie uma Tag de Configuração GA4 com seu Measurement ID (G-XXXXXXXX)</li>
  <li>Nome do evento: <code>page_view</code> (ou evento customizado)</li>
  <li>Acionamento: selecione o trigger <strong>"All Pages"</strong> (built-in)</li>
  <li>Nomeie a tag e salve</li>
</ol>
<strong>Publicar alterações:</strong>
<ol>
  <li>Clique em <strong>"Visualizar"</strong> para testar no Preview Mode antes de publicar</li>
  <li>O Preview Mode abre o site com o GTM em modo de debug — mostra quais tags dispararam em cada página</li>
  <li>Após validar, clique em <strong>"Enviar"</strong> → adicione nome e descrição da versão → <strong>"Publicar"</strong></li>
  <li>Toda publicação cria uma nova versão — você pode fazer rollback para versões anteriores</li>
</ol>
<strong>Boas práticas GTM:</strong>
<ul>
  <li>Nomear tags/triggers descritivamente: "GA4 - PageView - All Pages" (não "Tag 1")</li>
  <li>Usar folders para organizar tags por ferramenta</li>
  <li>Sempre testar no Preview antes de publicar</li>
  <li>Documentar cada publicação com descrição clara do que mudou</li>
  <li>Manter permissões restritas — apenas quem precisa ter acesso de publicação</li>
</ul>`,
            en: `<strong>Google Tag Manager (GTM)</strong> is a tag management system that allows installing and managing scripts (Google Analytics, pixels, Floodlights, etc.) on the site without touching the code for each change.<br><br>
<strong>Create GTM account and container:</strong>
<ol>
  <li>Access <code>tagmanager.google.com</code> with your Google account</li>
  <li>Click <strong>"Create account"</strong></li>
  <li>Account name (e.g. "Company XYZ") and country</li>
  <li>Container name (e.g. "Main Site") and type: <strong>Web</strong> (for sites), iOS, Android or AMP</li>
  <li>Accept terms → GTM generates 2 code snippets: one for <code>&lt;head&gt;</code> and another right after <code>&lt;body&gt;</code></li>
  <li>Copy and paste both snippets into the site code (or use WordPress/Shopify plugin)</li>
</ol>
<strong>GTM fundamental concepts:</strong>
<ul>
  <li><strong>Tag:</strong> the code you want to fire (e.g. Google Analytics 4, Meta Pixel, Floodlight, custom code)</li>
  <li><strong>Trigger:</strong> the condition that fires the tag (e.g. "all pages", "click on button X", "URL contains /thank-you")</li>
  <li><strong>Variable:</strong> dynamic values used in tags and triggers (e.g. current URL, transaction value from dataLayer)</li>
  <li><strong>DataLayer:</strong> JavaScript object on the site that passes dynamic information to GTM</li>
</ul>
<strong>Create a GA4 Tag (practical example):</strong>
<ol>
  <li>In GTM, click <strong>Tags → New</strong></li>
  <li>Tag configuration: type → <strong>Google Analytics: GA4 event</strong></li>
  <li>Configuration tag: select or create a GA4 Configuration Tag with your Measurement ID (G-XXXXXXXX)</li>
  <li>Event name: <code>page_view</code> (or custom event)</li>
  <li>Triggering: select <strong>"All Pages"</strong> trigger (built-in)</li>
  <li>Name the tag and save</li>
</ol>
<strong>Publish changes:</strong>
<ol>
  <li>Click <strong>"Preview"</strong> to test in Preview Mode before publishing</li>
  <li>Preview Mode opens the site with GTM in debug mode — shows which tags fired on each page</li>
  <li>After validating, click <strong>"Submit"</strong> → add version name and description → <strong>"Publish"</strong></li>
  <li>Every publication creates a new version — you can roll back to previous versions</li>
</ol>`,
            es: `<strong>Google Tag Manager (GTM)</strong> es un sistema de gestión de etiquetas que permite instalar y gestionar scripts en el sitio sin tener que modificar el código en cada cambio.<br><br>
<strong>Crear cuenta y contenedor GTM:</strong>
<ol>
  <li>Accede a <code>tagmanager.google.com</code> con tu cuenta de Google</li>
  <li>Haz clic en <strong>"Crear cuenta"</strong></li>
  <li>Nombre de la cuenta y país</li>
  <li>Nombre del contenedor y tipo: <strong>Web</strong>, iOS, Android o AMP</li>
  <li>Acepta los términos → GTM genera 2 fragmentos de código: uno para el <code>&lt;head&gt;</code> y otro justo después del <code>&lt;body&gt;</code></li>
  <li>Copia y pega ambos fragmentos en el código del sitio</li>
</ol>
<strong>Conceptos fundamentales de GTM:</strong>
<ul>
  <li><strong>Tag:</strong> el código que quieres disparar</li>
  <li><strong>Activador (Trigger):</strong> la condición que dispara la tag</li>
  <li><strong>Variable:</strong> valores dinámicos usados en tags y activadores</li>
  <li><strong>DataLayer:</strong> objeto JavaScript en el sitio que pasa información dinámica a GTM</li>
</ul>
<strong>Crear una Tag GA4 (ejemplo práctico):</strong>
<ol>
  <li>En GTM, haz clic en <strong>Tags → Nueva</strong></li>
  <li>Tipo: <strong>Google Analytics: evento de GA4</strong></li>
  <li>Selecciona o crea una Tag de Configuración GA4 con tu Measurement ID</li>
  <li>Activador: <strong>"All Pages"</strong></li>
  <li>Nombra la tag y guarda</li>
</ol>
<strong>Publicar cambios:</strong>
<ol>
  <li>Haz clic en <strong>"Vista previa"</strong> para probar antes de publicar</li>
  <li>Tras validar, haz clic en <strong>"Enviar"</strong> → agrega nombre y descripción → <strong>"Publicar"</strong></li>
  <li>Cada publicación crea una nueva versión — puedes hacer rollback a versiones anteriores</li>
</ol>`,
          },
          tags: ['GTM', 'Tag-Manager', 'tag', 'trigger', 'variable', 'dataLayer', 'GA4', 'setup'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: { pt: 'Como criar um Link de Rastreamento no CM360 e o que são os parâmetros de URL (clique tracker)?', en: 'How to create a Tracking Link in CM360 and what are URL parameters (click tracker)?', es: '¿Cómo crear un Tracking Link en CM360 y qué son los parámetros de URL (click tracker)?' },
          a: {
            pt: `Um <strong>Tracking Link (link de rastreamento)</strong> no CM360 é uma URL especial que passa pelo servidor do CM360 antes de redirecionar para a landing page — registrando o clique e permitindo atribuição.<br><br>
<strong>Por que usar Tracking Links:</strong>
<ul>
  <li>Rastrear cliques em formatos que não suportam tags padrão (e-mail, banners em apps, QR codes, links em redes sociais não integradas)</li>
  <li>Medir conversões vindas de formatos offline e não-display</li>
  <li>Centralizar todos os cliques no relatório do CM360 mesmo de canais sem tag de impressão</li>
</ul>
<strong>Criar um Tracking Link no CM360:</strong>
<ol>
  <li>Dentro do Advertiser no CM360, vá em <strong>Trafficking → Tracking Links → New</strong></li>
  <li>Defina: nome, landing page URL de destino</li>
  <li>Selecione o Campaign e Placement associado (ou crie um novo placement de tipo "Tracking Link")</li>
  <li>O CM360 gera a URL no formato: <code>https://ad.doubleclick.net/ddm/trackclk/N[NetworkID];[EncryptedInfo]</code></li>
  <li>Use essa URL como destino de links em email, social, QR code</li>
</ol>
<strong>UTM Parameters — rastreamento adicional via Google Analytics:</strong>
<ul>
  <li>UTM parameters são parâmetros anexados à URL de destino para rastrear a origem no GA4</li>
  <li>Exemplos:</li>
</ul>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">https://loja.com.br/produto?
  utm_source=newsletter
  &utm_medium=email
  &utm_campaign=lancamento-verao-2025
  &utm_content=banner-principal
  &utm_term=produto-xyz</pre>
<ul>
  <li><code>utm_source</code>: origem do tráfego (google, facebook, newsletter, dv360)</li>
  <li><code>utm_medium</code>: tipo de mídia (cpc, display, email, social, video)</li>
  <li><code>utm_campaign</code>: nome da campanha</li>
  <li><code>utm_content</code>: identificador do criativo (para A/B test entre criativos)</li>
  <li><code>utm_term</code>: keyword ou segmentação (no Search) ou targeting específico</li>
</ul>
<strong>Ferramenta:</strong> Google Campaign URL Builder (<code>ga-dev-tools.google/campaign-url-builder</code>) para gerar UTMs sem erro de digitação.`,
            en: `A <strong>Tracking Link</strong> in CM360 is a special URL that passes through the CM360 server before redirecting to the landing page — recording the click and enabling attribution.<br><br>
<strong>Why use Tracking Links:</strong>
<ul>
  <li>Track clicks on formats that don't support standard tags (email, banners in apps, QR codes, links in non-integrated social networks)</li>
  <li>Measure conversions from offline and non-display formats</li>
  <li>Centralize all clicks in CM360 report even from channels without impression tag</li>
</ul>
<strong>Create a Tracking Link in CM360:</strong>
<ol>
  <li>Inside Advertiser in CM360, go to <strong>Trafficking → Tracking Links → New</strong></li>
  <li>Define: name, destination landing page URL</li>
  <li>Select associated Campaign and Placement (or create new placement of "Tracking Link" type)</li>
  <li>CM360 generates URL in format: <code>https://ad.doubleclick.net/ddm/trackclk/N[NetworkID];[EncryptedInfo]</code></li>
  <li>Use this URL as destination for links in email, social, QR code</li>
</ol>
<strong>UTM Parameters — additional tracking via Google Analytics:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">https://store.com/product?
  utm_source=newsletter
  &utm_medium=email
  &utm_campaign=summer-launch-2025
  &utm_content=main-banner
  &utm_term=product-xyz</pre>
<ul>
  <li><code>utm_source</code>: traffic origin (google, facebook, newsletter, dv360)</li>
  <li><code>utm_medium</code>: media type (cpc, display, email, social, video)</li>
  <li><code>utm_campaign</code>: campaign name</li>
  <li><code>utm_content</code>: creative identifier (for A/B test between creatives)</li>
  <li><code>utm_term</code>: keyword or segmentation (in Search) or specific targeting</li>
</ul>`,
            es: `Un <strong>Tracking Link (enlace de seguimiento)</strong> en CM360 es una URL especial que pasa por el servidor de CM360 antes de redirigir a la landing page — registrando el clic y permitiendo la atribución.<br><br>
<strong>Por qué usar Tracking Links:</strong>
<ul>
  <li>Rastrear clics en formatos que no soportan tags estándar (email, banners en apps, códigos QR)</li>
  <li>Medir conversiones provenientes de formatos offline y no-display</li>
  <li>Centralizar todos los clics en el reporte de CM360</li>
</ul>
<strong>Crear un Tracking Link en CM360:</strong>
<ol>
  <li>Dentro del Advertiser en CM360, ve a <strong>Trafficking → Tracking Links → New</strong></li>
  <li>Define: nombre, URL de destino de la landing page</li>
  <li>CM360 genera la URL en el formato: <code>https://ad.doubleclick.net/ddm/trackclk/N[NetworkID];[EncryptedInfo]</code></li>
  <li>Usa esta URL como destino de enlaces en email, social, código QR</li>
</ol>
<strong>Parámetros UTM — seguimiento adicional via Google Analytics:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">https://tienda.com/producto?
  utm_source=newsletter
  &utm_medium=email
  &utm_campaign=lanzamiento-verano-2025
  &utm_content=banner-principal
  &utm_term=producto-xyz</pre>
<ul>
  <li><code>utm_source</code>: origen del tráfico</li>
  <li><code>utm_medium</code>: tipo de medio</li>
  <li><code>utm_campaign</code>: nombre de la campaña</li>
  <li><code>utm_content</code>: identificador del creativo</li>
  <li><code>utm_term</code>: keyword o segmentación</li>
</ul>`,
          },
          tags: ['Tracking-Link', 'CM360', 'UTM', 'click-tracker', 'GA4', 'rastreamento', 'doubleclick'],
        },
        {
          q: { pt: 'Como conectar o Google Ads ao CM360 e ao Google Analytics 4?', en: 'How to connect Google Ads to CM360 and Google Analytics 4?', es: '¿Cómo conectar Google Ads a CM360 y Google Analytics 4?' },
          a: {
            pt: `Conectar as ferramentas da stack Google entre si é essencial para ter visão unificada de performance e habilitar funcionalidades avançadas.<br><br>
<strong>1. Conectar Google Ads ↔ CM360 (Cross-Channel):</strong>
<ol>
  <li>No <strong>Google Ads</strong>, acesse <strong>Ferramentas → Configurações → Vinculação de contas → Campaign Manager 360</strong></li>
  <li>Clique em <strong>"+"</strong> → insira o ID do CM360 Floodlight Configuration</li>
  <li>No <strong>CM360</strong>, aceite a solicitação de vinculação (Admin → Google Ads Linking)</li>
  <li>Após vinculado: Floodlight Activities do CM360 ficam disponíveis como conversões no Google Ads, e o histórico de cliques é compartilhado para atribuição cross-channel</li>
</ol>
<strong>2. Conectar Google Ads ↔ GA4:</strong>
<ol>
  <li>No <strong>Google Ads</strong>, acesse <strong>Ferramentas → Configurações → Vinculação de contas → Google Analytics</strong></li>
  <li>Selecione a propriedade GA4 → clique em Vincular</li>
  <li>No <strong>GA4</strong>, confirme em Admin → Vinculações de produtos Google → Google Ads</li>
  <li>Após vinculado: importar conversões do GA4 para o Google Ads, ver dados de sessão/engajamento do GA4 nos relatórios do Google Ads, habilitar listas de remarketing do GA4 para uso no Google Ads</li>
</ol>
<strong>3. Conectar GA4 ↔ BigQuery (para análise avançada):</strong>
<ol>
  <li>No GA4, acesse <strong>Admin → Vinculações de produtos → BigQuery</strong></li>
  <li>Selecione o projeto BigQuery → definir frequência de exportação (diária ou contínua)</li>
  <li>Os dados brutos de eventos do GA4 são exportados automaticamente para o BigQuery</li>
  <li>Permite análises SQL customizadas, integração com CRM, data warehouse próprio</li>
</ol>
<strong>4. Conectar Google Ads ↔ Google Merchant Center (para Shopping):</strong>
<ol>
  <li>No <strong>Google Ads</strong>, acesse <strong>Ferramentas → Vinculação de contas → Google Merchant Center</strong></li>
  <li>Insira o ID do Merchant Center → enviar convite</li>
  <li>No <strong>Merchant Center</strong>, aceite em Configurações → Contas vinculadas</li>
  <li>Após vinculado: campanhas Shopping e Performance Max com feed de produtos ficam disponíveis</li>
</ol>
<strong>5. Conectar Search Console ↔ GA4:</strong>
<ol>
  <li>No GA4, Admin → Vinculações de produtos → Search Console → Adicionar</li>
  <li>Selecione a propriedade do Search Console → Vincular</li>
  <li>Dados de performance orgânica (impressões, cliques, CTR, posição) ficam disponíveis no GA4</li>
</ol>`,
            en: `Connecting tools in the Google stack is essential for unified performance visibility and enabling advanced features.<br><br>
<strong>1. Connect Google Ads ↔ CM360:</strong>
<ol>
  <li>In <strong>Google Ads</strong>, access <strong>Tools → Settings → Account linking → Campaign Manager 360</strong></li>
  <li>Click <strong>"+"</strong> → enter CM360 Floodlight Configuration ID</li>
  <li>In <strong>CM360</strong>, accept the linking request (Admin → Google Ads Linking)</li>
  <li>After linking: CM360 Floodlight Activities available as conversions in Google Ads, click history shared for cross-channel attribution</li>
</ol>
<strong>2. Connect Google Ads ↔ GA4:</strong>
<ol>
  <li>In <strong>Google Ads</strong>, access <strong>Tools → Settings → Account linking → Google Analytics</strong></li>
  <li>Select GA4 property → click Link</li>
  <li>In <strong>GA4</strong>, confirm in Admin → Google product links → Google Ads</li>
  <li>After linking: import GA4 conversions to Google Ads, see GA4 session/engagement data in Google Ads reports, enable GA4 remarketing lists for Google Ads</li>
</ol>
<strong>3. Connect GA4 ↔ BigQuery:</strong>
<ol>
  <li>In GA4, access <strong>Admin → Product links → BigQuery</strong></li>
  <li>Select BigQuery project → define export frequency (daily or streaming)</li>
  <li>Raw GA4 event data is automatically exported to BigQuery</li>
</ol>
<strong>4. Connect Google Ads ↔ Google Merchant Center:</strong>
<ol>
  <li>In <strong>Google Ads</strong>, access <strong>Tools → Account linking → Google Merchant Center</strong></li>
  <li>Enter Merchant Center ID → send invite</li>
  <li>In <strong>Merchant Center</strong>, accept in Settings → Linked accounts</li>
</ol>
<strong>5. Connect Search Console ↔ GA4:</strong>
<ol>
  <li>In GA4, Admin → Product links → Search Console → Add</li>
  <li>Select Search Console property → Link</li>
</ol>`,
            es: `Conectar las herramientas del Google stack entre sí es esencial para tener visión unificada de performance y habilitar funcionalidades avanzadas.<br><br>
<strong>1. Conectar Google Ads ↔ CM360:</strong>
<ol>
  <li>En <strong>Google Ads</strong>, accede a <strong>Herramientas → Configuración → Vinculación de cuentas → Campaign Manager 360</strong></li>
  <li>Haz clic en <strong>"+"</strong> → introduce el ID de la Floodlight Configuration de CM360</li>
  <li>En <strong>CM360</strong>, acepta la solicitud de vinculación</li>
  <li>Tras la vinculación: los Floodlight Activities de CM360 están disponibles como conversiones en Google Ads</li>
</ol>
<strong>2. Conectar Google Ads ↔ GA4:</strong>
<ol>
  <li>En <strong>Google Ads</strong>, accede a <strong>Herramientas → Configuración → Vinculación de cuentas → Google Analytics</strong></li>
  <li>Selecciona la propiedad GA4 → haz clic en Vincular</li>
  <li>En <strong>GA4</strong>, confirma en Admin → Vinculaciones de productos → Google Ads</li>
</ol>
<strong>3. Conectar GA4 ↔ BigQuery:</strong>
<ol>
  <li>En GA4, accede a <strong>Admin → Vinculaciones de productos → BigQuery</strong></li>
  <li>Selecciona el proyecto BigQuery → define la frecuencia de exportación</li>
</ol>
<strong>4. Conectar Google Ads ↔ Google Merchant Center:</strong>
<ol>
  <li>En <strong>Google Ads</strong>, accede a <strong>Herramientas → Vinculación de cuentas → Google Merchant Center</strong></li>
  <li>Introduce el ID del Merchant Center → enviar invitación</li>
</ol>`,
          },
          tags: ['Google-Ads', 'CM360', 'GA4', 'BigQuery', 'Merchant-Center', 'vinculação', 'integração', 'stack'],
        },
        {
          q: { pt: 'Como estruturar permissões de usuários no Google Marketing Platform (GMP)?', en: 'How to structure user permissions in Google Marketing Platform (GMP)?', es: '¿Cómo estructurar los permisos de usuarios en Google Marketing Platform (GMP)?' },
          a: {
            pt: `O GMP tem um sistema de permissões granular que permite controlar exatamente o que cada usuário pode ver ou fazer em cada plataforma.<br><br>
<strong>CM360 — Níveis de permissão:</strong>
<ul>
  <li><strong>Network Admin:</strong> acesso total — pode criar/editar/deletar qualquer coisa, incluindo advertisers e usuários. Apenas para admins internos confiáveis.</li>
  <li><strong>Network User:</strong> acesso padrão configurável por advertiser. Pode ser combinado com permissões específicas.</li>
  <li><strong>Permissões por Advertiser (configuráveis individualmente):</strong>
    <ul>
      <li>Read: visualizar campanhas e relatórios</li>
      <li>Read/Write: criar e editar campanhas, placements, ads</li>
      <li>Admin: tudo acima + gerenciar usuários e floodlights</li>
    </ul>
  </li>
</ul>
<strong>DV360 — Estrutura de permissões:</strong>
<ul>
  <li><strong>Partner Level:</strong> Admin (acesso total), Read Only (só visualização)</li>
  <li><strong>Advertiser Level:</strong> Admin, Standard (criar/editar), Read Only</li>
  <li>Best practice: não dar acesso de Admin de Partner para equipes de cliente — dar acesso de Advertiser Admin apenas para o advertiser deles</li>
</ul>
<strong>Google Ads — Níveis de acesso:</strong>
<ul>
  <li><strong>Admin:</strong> acesso total, pode adicionar/remover usuários</li>
  <li><strong>Standard:</strong> pode criar/editar campanhas mas não gerenciar usuários ou billing</li>
  <li><strong>Read Only:</strong> visualização sem edição</li>
  <li><strong>Email Only:</strong> recebe relatórios por email sem acesso à conta</li>
  <li><strong>Billing:</strong> acesso apenas a informações de cobrança</li>
</ul>
<strong>Boas práticas de gestão de acesso em AdOps:</strong>
<ul>
  <li>Princípio do mínimo privilégio: cada pessoa recebe apenas o acesso que precisa para suas funções</li>
  <li>Auditoria trimestral: verificar e revogar acessos de ex-funcionários e ex-clientes</li>
  <li>Separação de ambientes: conta de teste separada da conta de produção</li>
  <li>MCC (Google Ads): gerenciar múltiplas contas de clientes via conta gerenciadora, sem precisar compartilhar credenciais</li>
  <li>Documentar acessos: manter planilha com quem tem acesso a quê — essencial em auditoria</li>
  <li>Two-factor authentication obrigatório para contas com acesso a billing</li>
</ul>`,
            en: `GMP has a granular permission system that allows precisely controlling what each user can see or do in each platform.<br><br>
<strong>CM360 — Permission levels:</strong>
<ul>
  <li><strong>Network Admin:</strong> full access — can create/edit/delete anything, including advertisers and users. Only for trusted internal admins.</li>
  <li><strong>Network User:</strong> configurable standard access per advertiser. Can be combined with specific permissions.</li>
  <li><strong>Permissions per Advertiser (individually configurable):</strong>
    <ul>
      <li>Read: view campaigns and reports</li>
      <li>Read/Write: create and edit campaigns, placements, ads</li>
      <li>Admin: all above + manage users and floodlights</li>
    </ul>
  </li>
</ul>
<strong>DV360 — Permission structure:</strong>
<ul>
  <li><strong>Partner Level:</strong> Admin (full access), Read Only (view only)</li>
  <li><strong>Advertiser Level:</strong> Admin, Standard (create/edit), Read Only</li>
  <li>Best practice: don't give Partner Admin access to client teams — give Advertiser Admin access only for their advertiser</li>
</ul>
<strong>Google Ads — Access levels:</strong>
<ul>
  <li><strong>Admin:</strong> full access, can add/remove users</li>
  <li><strong>Standard:</strong> can create/edit campaigns but not manage users or billing</li>
  <li><strong>Read Only:</strong> view without editing</li>
  <li><strong>Email Only:</strong> receives email reports without account access</li>
  <li><strong>Billing:</strong> access to billing information only</li>
</ul>
<strong>Access management best practices in AdOps:</strong>
<ul>
  <li>Principle of least privilege: each person receives only the access they need for their functions</li>
  <li>Quarterly audit: check and revoke access for ex-employees and ex-clients</li>
  <li>Environment separation: test account separate from production account</li>
  <li>MCC (Google Ads): manage multiple client accounts via manager account, without sharing credentials</li>
  <li>Document access: maintain spreadsheet with who has access to what</li>
  <li>Two-factor authentication required for accounts with billing access</li>
</ul>`,
            es: `GMP tiene un sistema de permisos granular que permite controlar exactamente qué puede ver o hacer cada usuario en cada plataforma.<br><br>
<strong>CM360 — Niveles de permiso:</strong>
<ul>
  <li><strong>Network Admin:</strong> acceso total — puede crear/editar/eliminar cualquier cosa. Solo para admins internos de confianza.</li>
  <li><strong>Network User:</strong> acceso estándar configurable por advertiser.</li>
  <li><strong>Permisos por Advertiser:</strong>
    <ul>
      <li>Read: visualizar campañas e informes</li>
      <li>Read/Write: crear y editar campañas, placements, ads</li>
      <li>Admin: todo lo anterior + gestionar usuarios y floodlights</li>
    </ul>
  </li>
</ul>
<strong>DV360 — Estructura de permisos:</strong>
<ul>
  <li><strong>Partner Level:</strong> Admin, Read Only</li>
  <li><strong>Advertiser Level:</strong> Admin, Standard, Read Only</li>
  <li>Best practice: no dar acceso de Admin de Partner a equipos de clientes</li>
</ul>
<strong>Google Ads — Niveles de acceso:</strong>
<ul>
  <li><strong>Admin:</strong> acceso total, puede agregar/eliminar usuarios</li>
  <li><strong>Standard:</strong> puede crear/editar campañas pero no gestionar usuarios o facturación</li>
  <li><strong>Read Only:</strong> visualización sin edición</li>
  <li><strong>Email Only:</strong> recibe informes por email sin acceso a la cuenta</li>
  <li><strong>Billing:</strong> acceso solo a información de facturación</li>
</ul>
<strong>Buenas prácticas de gestión de acceso en AdOps:</strong>
<ul>
  <li>Principio de mínimo privilegio</li>
  <li>Auditoría trimestral: verificar y revocar accesos de ex-empleados y ex-clientes</li>
  <li>MCC (Google Ads): gestionar múltiples cuentas de clientes via cuenta gestora</li>
  <li>Two-factor authentication obligatorio para cuentas con acceso a facturación</li>
</ul>`,
          },
          tags: ['GMP', 'permissões', 'CM360', 'DV360', 'Google-Ads', 'MCC', 'acesso', 'segurança'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: { pt: 'Como fazer troubleshooting completo de uma tag de Floodlight que não está disparando?', en: 'How to do complete troubleshooting of a Floodlight tag that is not firing?', es: '¿Cómo hacer el troubleshooting completo de una tag de Floodlight que no está disparando?' },
          a: {
            pt: `<strong>Processo sistemático de diagnóstico de Floodlight com problema:</strong><br><br>
<strong>Passo 1 — Verificar o código na página:</strong>
<ol>
  <li>Abra o Chrome, acesse a página onde o Floodlight deveria disparar (ex: página de obrigado)</li>
  <li>Pressione F12 → Network → no filtro, digite <strong>"fls.doubleclick.net"</strong></li>
  <li>Se não aparecer nenhuma requisição: o código não está sendo executado nessa página</li>
  <li>Alternativa: use o <strong>Google Tag Assistant Legacy</strong> ou <strong>Google Tag Assistant (Recording)</strong> para ver todas as tags da página</li>
</ol>
<strong>Passo 2 — Verificar se o código está instalado:</strong>
<ul>
  <li>Ctrl+U para ver o source da página (ou F12 → Sources) — procurar pelo Floodlight ID (<code>src=[advertiserID]</code>)</li>
  <li>Se instalado via GTM: verificar no Preview do GTM se a tag está disparando na página correta</li>
  <li>Se instalado direto no código: confirmar com o time de desenvolvimento que o código está na página de obrigado E apenas na página de obrigado (não em todas as páginas)</li>
</ul>
<strong>Passo 3 — Problemas comuns e soluções:</strong>
<ul>
  <li><strong>Página em HTTPS mas tag em HTTP:</strong> browsers modernos bloqueiam mixed content. Verificar se a tag usa <code>https://</code> — o CM360 gera sempre HTTPS na tag atual.</li>
  <li><strong>Tag sendo bloqueada por ad blocker:</strong> testar em aba anônima com ad blockers desativados</li>
  <li><strong>CORS (Cross-Origin) error:</strong> verificar no console do browser se há erro de CORS bloqueando o request</li>
  <li><strong>Tag no lugar errado no GTM:</strong> verificar se o trigger correto está associado — usar Preview Mode do GTM</li>
  <li><strong>Cache da página:</strong> o usuário pode estar vendo a versão em cache sem a nova tag — hard refresh (Ctrl+Shift+R)</li>
  <li><strong>Parâmetro ord= não sendo passado dinamicamente:</strong> se ord é fixo (não muda), o browser faz cache da requisição. Deve ser dinâmico (timestamp ou order ID único)</li>
</ul>
<strong>Passo 4 — Verificar no CM360 se os hits chegam:</strong>
<ol>
  <li>No CM360, vá em <strong>Floodlight → Activities → selecione a activity</strong></li>
  <li>Clique em <strong>"Test"</strong> para gerar um test hit manualmente</li>
  <li>Em <strong>Reports → Standard Reports → Floodlight → Activity</strong>: verificar se há impressões nos últimos dias (pode ter delay de 24-48h para aparecer em relatórios padrão)</li>
  <li>Para dados mais rápidos: usar <strong>Report Builder → Data Studio</strong> com atualização mais frequente</li>
</ol>
<strong>Passo 5 — Se o problema persistir:</strong>
<ul>
  <li>Gerar um novo Floodlight code no CM360 e reimplementar via GTM</li>
  <li>Verificar se o Advertiser ID (<code>src=</code>) e o Activity Group/Category (<code>type=</code>, <code>cat=</code>) correspondem exatamente ao configurado no CM360</li>
  <li>Contatar o suporte do Google Marketing Platform com print do Network tab mostrando o request (ou a ausência dele)</li>
</ul>`,
            en: `<strong>Systematic Floodlight issue diagnosis process:</strong><br><br>
<strong>Step 1 — Check the code on the page:</strong>
<ol>
  <li>Open Chrome, access the page where Floodlight should fire (e.g. thank-you page)</li>
  <li>Press F12 → Network → in filter, type <strong>"fls.doubleclick.net"</strong></li>
  <li>If no request appears: the code is not being executed on this page</li>
  <li>Alternative: use <strong>Google Tag Assistant Legacy</strong> or <strong>Google Tag Assistant (Recording)</strong> to see all page tags</li>
</ol>
<strong>Step 2 — Verify if code is installed:</strong>
<ul>
  <li>Ctrl+U to view page source (or F12 → Sources) — search for Floodlight ID (<code>src=[advertiserID]</code>)</li>
  <li>If installed via GTM: check GTM Preview if tag is firing on correct page</li>
  <li>If installed directly in code: confirm with dev team that code is on thank-you page AND only on thank-you page</li>
</ul>
<strong>Step 3 — Common problems and solutions:</strong>
<ul>
  <li><strong>HTTPS page but HTTP tag:</strong> modern browsers block mixed content. Verify tag uses <code>https://</code></li>
  <li><strong>Tag blocked by ad blocker:</strong> test in incognito tab with ad blockers disabled</li>
  <li><strong>CORS error:</strong> check browser console for CORS error blocking the request</li>
  <li><strong>Wrong place in GTM:</strong> check if correct trigger is associated — use GTM Preview Mode</li>
  <li><strong>Page cache:</strong> user may be seeing cached version without new tag — hard refresh (Ctrl+Shift+R)</li>
  <li><strong>ord= parameter not being passed dynamically:</strong> if ord is fixed (doesn't change), browser caches the request. Must be dynamic (timestamp or unique order ID)</li>
</ul>
<strong>Step 4 — Check in CM360 if hits arrive:</strong>
<ol>
  <li>In CM360, go to <strong>Floodlight → Activities → select the activity</strong></li>
  <li>Click <strong>"Test"</strong> to manually generate a test hit</li>
  <li>In <strong>Reports → Standard Reports → Floodlight → Activity</strong>: check if there are impressions in recent days (may have 24-48h delay)</li>
</ol>
<strong>Step 5 — If problem persists:</strong>
<ul>
  <li>Generate new Floodlight code in CM360 and reimplement via GTM</li>
  <li>Verify Advertiser ID (<code>src=</code>) and Activity Group/Category (<code>type=</code>, <code>cat=</code>) exactly match CM360 configuration</li>
  <li>Contact Google Marketing Platform support with Network tab screenshot showing request (or its absence)</li>
</ul>`,
            es: `<strong>Proceso sistemático de diagnóstico de Floodlight con problema:</strong><br><br>
<strong>Paso 1 — Verificar el código en la página:</strong>
<ol>
  <li>Abre Chrome, accede a la página donde debería dispararse el Floodlight (ej: página de agradecimiento)</li>
  <li>Presiona F12 → Network → en el filtro, escribe <strong>"fls.doubleclick.net"</strong></li>
  <li>Si no aparece ninguna solicitud: el código no se está ejecutando en esta página</li>
  <li>Alternativa: usa <strong>Google Tag Assistant</strong> para ver todas las tags de la página</li>
</ol>
<strong>Paso 2 — Verificar si el código está instalado:</strong>
<ul>
  <li>Ctrl+U para ver el source de la página — buscar el Floodlight ID (<code>src=[advertiserID]</code>)</li>
  <li>Si está instalado via GTM: verificar en el Preview del GTM si la tag se dispara en la página correcta</li>
</ul>
<strong>Paso 3 — Problemas comunes y soluciones:</strong>
<ul>
  <li><strong>Página en HTTPS pero tag en HTTP:</strong> los browsers modernos bloquean contenido mixto</li>
  <li><strong>Tag bloqueada por ad blocker:</strong> probar en pestaña de incógnito con ad blockers desactivados</li>
  <li><strong>Tag en el lugar equivocado en GTM:</strong> verificar si el activador correcto está asociado</li>
  <li><strong>Caché de página:</strong> hard refresh (Ctrl+Shift+R)</li>
  <li><strong>Parámetro ord= no dinámico:</strong> debe ser dinámico (timestamp u order ID único)</li>
</ul>
<strong>Paso 4 — Verificar en CM360 si llegan los hits:</strong>
<ol>
  <li>En CM360, ve a <strong>Floodlight → Activities → selecciona la actividad</strong></li>
  <li>Haz clic en <strong>"Test"</strong> para generar un test hit manualmente</li>
  <li>En <strong>Reports → Floodlight → Activity</strong>: verificar si hay impresiones en los últimos días</li>
</ol>`,
          },
          tags: ['Floodlight', 'troubleshooting', 'debug', 'CM360', 'GTM', 'Network-tab', 'HTTPS', 'ord'],
        },
      ],
    },
  ],
};

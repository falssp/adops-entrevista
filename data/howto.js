window.__adopsData = window.__adopsData || {};
window.__adopsData['howto'] = {
  icon: '🛠️',
  name: { pt: 'Como Fazer — Setup & Integrações', en: 'How To — Setup & Integrations', es: 'Cómo Hacer — Setup & Integraciones' },
  desc: {
    pt: 'Passo a passo real: criar BM, conectar plataformas, subir tags, configurar contadores, integrações DV360↔CM360 e muito mais.',
    en: 'Real step-by-step: create BM, connect platforms, upload tags, configure counters, DV360↔CM360 integrations and more.',
    es: 'Paso a paso real: crear BM, conectar plataformas, subir tags, configurar contadores, integraciones DV360↔CM360 y más.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: { pt: 'Como criar um Business Manager (BM) no Meta e qual a estrutura correta de uma conta?', en: 'How to create a Business Manager (BM) on Meta and what is the correct account structure?', es: '¿Cómo crear un Business Manager (BM) en Meta y cuál es la estructura correcta de una cuenta?' },
          a: {
            pt: `<strong>Criando o Business Manager (Meta Business Suite):</strong><br><br>
<strong>Passo a passo de criação:</strong>
<ol>
  <li>Acesse <code>business.facebook.com</code> com uma conta pessoal do Facebook</li>
  <li>Clique em <strong>"Criar conta"</strong> no canto superior direito</li>
  <li>Preencha: nome do negócio, seu nome e e-mail corporativo</li>
  <li>Confirme o e-mail recebido na caixa de entrada</li>
  <li>Seu BM está criado — agora configure a estrutura</li>
</ol>
<strong>Estrutura hierárquica do Meta Business Manager:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Business Manager (BM)
├── Ad Accounts (Contas de Anúncio)
│   └── Campanhas → Conjuntos de Anúncios → Anúncios
├── Pages (Páginas do Facebook)
├── Instagram Accounts
├── Pixel(s)
├── Catálogos de Produto
├── Públicos Personalizados
├── Aplicativos (App IDs)
└── Pessoas e Parceiros (acesso)</pre>
<strong>Configurações essenciais após criar o BM:</strong>
<ol>
  <li><strong>Adicionar Ad Account:</strong> BM Settings → Ad Accounts → "Adicionar conta de anúncios". Pode criar nova, reivindicar existente ou solicitar acesso.</li>
  <li><strong>Conectar Página:</strong> BM Settings → Pages → Adicionar Página. A Página precisa existir previamente no Facebook.</li>
  <li><strong>Conectar Instagram:</strong> BM Settings → Instagram Accounts → Conectar conta.</li>
  <li><strong>Instalar Pixel:</strong> Events Manager → Criar pixel → Nomear → Copiar o código base e instalar no site (via GTM ou direto no código).</li>
  <li><strong>Adicionar Pessoas:</strong> BM Settings → People → Convidar via e-mail. Definir nível de acesso: Employee (acesso limitado) ou Admin (acesso total ao BM).</li>
  <li><strong>Conceder acesso a parceiros (agência):</strong> BM Settings → Partners → Compartilhar ID do BM com a agência. A agência solicita acesso ou você adiciona o BM ID dela.</li>
</ol>
<strong>Erro comum:</strong> criar a Ad Account dentro do BM pessoal e não do BM da empresa. Se a pessoa sair da empresa, a conta vai junto — sempre crie o BM no CNPJ/conta da empresa.`,
            en: `<strong>Creating Business Manager (Meta Business Suite):</strong><br><br>
<strong>Step-by-step creation:</strong>
<ol>
  <li>Access <code>business.facebook.com</code> with a personal Facebook account</li>
  <li>Click <strong>"Create account"</strong> in the upper right corner</li>
  <li>Fill in: business name, your name and corporate email</li>
  <li>Confirm the email received in your inbox</li>
  <li>Your BM is created — now configure the structure</li>
</ol>
<strong>Meta Business Manager hierarchical structure:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Business Manager (BM)
├── Ad Accounts
│   └── Campaigns → Ad Sets → Ads
├── Pages (Facebook Pages)
├── Instagram Accounts
├── Pixel(s)
├── Product Catalogs
├── Custom Audiences
├── Apps (App IDs)
└── People and Partners (access)</pre>
<strong>Essential settings after creating BM:</strong>
<ol>
  <li><strong>Add Ad Account:</strong> BM Settings → Ad Accounts → "Add ad accounts". Can create new, claim existing or request access.</li>
  <li><strong>Connect Page:</strong> BM Settings → Pages → Add Page. The Page must exist previously on Facebook.</li>
  <li><strong>Connect Instagram:</strong> BM Settings → Instagram Accounts → Connect account.</li>
  <li><strong>Install Pixel:</strong> Events Manager → Create pixel → Name it → Copy base code and install on site (via GTM or directly in code).</li>
  <li><strong>Add People:</strong> BM Settings → People → Invite via email. Set access level: Employee (limited access) or Admin (full BM access).</li>
  <li><strong>Grant access to partners (agency):</strong> BM Settings → Partners → Share your BM ID with the agency.</li>
</ol>
<strong>Common mistake:</strong> creating Ad Account inside personal BM instead of company BM. If the person leaves the company, the account goes with them — always create BM under the company's account.`,
            es: `<strong>Crear el Business Manager (Meta Business Suite):</strong><br><br>
<strong>Paso a paso de creación:</strong>
<ol>
  <li>Accede a <code>business.facebook.com</code> con una cuenta personal de Facebook</li>
  <li>Haz clic en <strong>"Crear cuenta"</strong> en la esquina superior derecha</li>
  <li>Completa: nombre del negocio, tu nombre y email corporativo</li>
  <li>Confirma el email recibido en tu bandeja de entrada</li>
  <li>Tu BM está creado — ahora configura la estructura</li>
</ol>
<strong>Estructura jerárquica del Meta Business Manager:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Business Manager (BM)
├── Ad Accounts (Cuentas de Anuncio)
│   └── Campañas → Conjuntos de Anuncios → Anuncios
├── Pages (Páginas de Facebook)
├── Instagram Accounts
├── Pixel(s)
├── Catálogos de Producto
├── Públicos Personalizados
└── Personas y Socios (acceso)</pre>
<strong>Configuraciones esenciales tras crear el BM:</strong>
<ol>
  <li><strong>Agregar Ad Account:</strong> BM Settings → Ad Accounts → "Agregar cuentas de anuncio".</li>
  <li><strong>Conectar Página:</strong> BM Settings → Pages → Agregar Página.</li>
  <li><strong>Conectar Instagram:</strong> BM Settings → Instagram Accounts → Conectar cuenta.</li>
  <li><strong>Instalar Pixel:</strong> Events Manager → Crear píxel → Nombrar → Copiar el código base e instalar en el sitio.</li>
  <li><strong>Agregar Personas:</strong> BM Settings → People → Invitar via email. Nivel de acceso: Employee o Admin.</li>
  <li><strong>Acceso a socios (agencia):</strong> BM Settings → Partners → Compartir ID del BM con la agencia.</li>
</ol>`,
          },
          tags: ['Business-Manager', 'BM', 'Meta', 'Ad-Account', 'Pixel', 'estrutura', 'agência'],
        },
        {
          q: { pt: 'Como criar e instalar o Meta Pixel e configurar eventos de conversão?', en: 'How to create and install the Meta Pixel and configure conversion events?', es: '¿Cómo crear e instalar el Meta Pixel y configurar eventos de conversión?' },
          a: {
            pt: `<strong>Criando o Meta Pixel:</strong>
<ol>
  <li>No BM, acesse <strong>Events Manager</strong> (menu esquerdo)</li>
  <li>Clique em <strong>"Conectar fontes de dados"</strong> → Web</li>
  <li>Selecione <strong>"Meta Pixel"</strong> → Clique em "Conectar"</li>
  <li>Dê um nome ao pixel (ex: "Pixel - Site Principal [Empresa]")</li>
  <li>Informe a URL do site → Clique em "Verificar"</li>
  <li>O pixel foi criado — agora instale no site</li>
</ol>
<strong>3 formas de instalação:</strong><br><br>
<strong>Opção A — Via GTM (recomendado):</strong>
<ol>
  <li>No Events Manager, escolha "Google Tag Manager" como método</li>
  <li>Copie o ID do pixel (ex: 123456789)</li>
  <li>No GTM: Nova Tag → Template da galeria → "Facebook Pixel" (buscar e adicionar o template)</li>
  <li>Insira o Pixel ID → Trigger: All Pages → Publicar</li>
</ol>
<strong>Opção B — Código manual no site:</strong>
<ol>
  <li>Copie o código base do pixel no Events Manager</li>
  <li>Cole entre as tags <code>&lt;head&gt;</code> e <code>&lt;/head&gt;</code> de todas as páginas</li>
  <li>Para eventos específicos (compra, lead), adicione o código de evento na página correspondente</li>
</ol>
<strong>Opção C — Integração nativa (Shopify, WooCommerce, VTEX):</strong>
<ol>
  <li>No Events Manager → Configurações → Parceiros</li>
  <li>Selecionar a plataforma de e-commerce</li>
  <li>Seguir o wizard de integração — insere o Pixel ID no painel da plataforma</li>
</ol>
<strong>Configurando eventos padrão (Standard Events):</strong>
<ul>
  <li><code>PageView</code> — automático com o pixel base</li>
  <li><code>ViewContent</code> — página de produto visualizada</li>
  <li><code>AddToCart</code> — produto adicionado ao carrinho</li>
  <li><code>InitiateCheckout</code> — início do checkout</li>
  <li><code>Purchase</code> — compra concluída (mais importante — incluir value e currency)</li>
  <li><code>Lead</code> — formulário enviado</li>
  <li><code>CompleteRegistration</code> — cadastro concluído</li>
</ul>
<strong>Verificação:</strong> instale a extensão <strong>Meta Pixel Helper</strong> no Chrome. Acesse o site e verifique se o pixel está disparando corretamente em cada página/evento.`,
            en: `<strong>Creating the Meta Pixel:</strong>
<ol>
  <li>In BM, access <strong>Events Manager</strong> (left menu)</li>
  <li>Click <strong>"Connect data sources"</strong> → Web</li>
  <li>Select <strong>"Meta Pixel"</strong> → Click "Connect"</li>
  <li>Give the pixel a name (e.g. "Pixel - Main Site [Company]")</li>
  <li>Enter site URL → Click "Verify"</li>
  <li>Pixel created — now install on site</li>
</ol>
<strong>3 installation methods:</strong><br><br>
<strong>Option A — Via GTM (recommended):</strong>
<ol>
  <li>In Events Manager, choose "Google Tag Manager" as method</li>
  <li>Copy the pixel ID (e.g. 123456789)</li>
  <li>In GTM: New Tag → Gallery template → "Facebook Pixel" (search and add template)</li>
  <li>Insert Pixel ID → Trigger: All Pages → Publish</li>
</ol>
<strong>Option B — Manual site code:</strong>
<ol>
  <li>Copy the pixel base code from Events Manager</li>
  <li>Paste between <code>&lt;head&gt;</code> and <code>&lt;/head&gt;</code> tags on all pages</li>
  <li>For specific events (purchase, lead), add event code on corresponding page</li>
</ol>
<strong>Option C — Native integration (Shopify, WooCommerce, VTEX):</strong>
<ol>
  <li>Events Manager → Settings → Partners</li>
  <li>Select the e-commerce platform</li>
  <li>Follow integration wizard — insert Pixel ID in platform panel</li>
</ol>
<strong>Standard Events configuration:</strong>
<ul>
  <li><code>PageView</code> — automatic with base pixel</li>
  <li><code>ViewContent</code> — product page viewed</li>
  <li><code>AddToCart</code> — product added to cart</li>
  <li><code>InitiateCheckout</code> — checkout started</li>
  <li><code>Purchase</code> — purchase completed (most important — include value and currency)</li>
  <li><code>Lead</code> — form submitted</li>
</ul>
<strong>Verification:</strong> install the <strong>Meta Pixel Helper</strong> Chrome extension. Visit the site and verify pixel is firing correctly on each page/event.`,
            es: `<strong>Crear el Meta Pixel:</strong>
<ol>
  <li>En BM, accede a <strong>Events Manager</strong> (menú izquierdo)</li>
  <li>Haz clic en <strong>"Conectar fuentes de datos"</strong> → Web</li>
  <li>Selecciona <strong>"Meta Pixel"</strong> → Haz clic en "Conectar"</li>
  <li>Dale un nombre al píxel (ej: "Pixel - Sitio Principal [Empresa]")</li>
  <li>Ingresa la URL del sitio → Haz clic en "Verificar"</li>
  <li>El píxel fue creado — ahora instálalo en el sitio</li>
</ol>
<strong>3 formas de instalación:</strong><br><br>
<strong>Opción A — Via GTM (recomendado):</strong>
<ol>
  <li>En Events Manager, elige "Google Tag Manager" como método</li>
  <li>Copia el ID del píxel</li>
  <li>En GTM: Nueva Tag → Template de la galería → "Facebook Pixel"</li>
  <li>Inserta el Pixel ID → Trigger: All Pages → Publicar</li>
</ol>
<strong>Opción B — Código manual:</strong>
<ol>
  <li>Copia el código base del píxel en Events Manager</li>
  <li>Pégalo entre las tags <code>&lt;head&gt;</code> y <code>&lt;/head&gt;</code> en todas las páginas</li>
</ol>
<strong>Eventos estándar principales:</strong>
<ul>
  <li><code>PageView</code> — automático con el píxel base</li>
  <li><code>ViewContent</code> — página de producto vista</li>
  <li><code>AddToCart</code> — producto agregado al carrito</li>
  <li><code>Purchase</code> — compra completada (incluir value y currency)</li>
  <li><code>Lead</code> — formulario enviado</li>
</ul>
<strong>Verificación:</strong> instala la extensión <strong>Meta Pixel Helper</strong> en Chrome.`,
          },
          tags: ['Meta-Pixel', 'GTM', 'Events-Manager', 'Purchase', 'Lead', 'instalação', 'CAPI'],
        },
        {
          q: { pt: 'Como criar uma conta no Google Ads e configurar o Conversion Tracking via GTM?', en: 'How to create a Google Ads account and configure Conversion Tracking via GTM?', es: '¿Cómo crear una cuenta en Google Ads y configurar el Conversion Tracking via GTM?' },
          a: {
            pt: `<strong>Criando a conta Google Ads:</strong>
<ol>
  <li>Acesse <code>ads.google.com</code> com uma conta Google</li>
  <li>Clique em <strong>"Começar agora"</strong></li>
  <li>Informe o objetivo principal (Vendas, Leads, Tráfego, Awareness) ou clique em "Criar conta sem campanha" para configurar depois — recomendado para AdOps</li>
  <li>Informe nome da conta, fuso horário e moeda</li>
  <li>Configure o faturamento (cartão ou boleto/fatura)</li>
</ol>
<strong>Vinculando ao Google Analytics 4 (GA4):</strong>
<ol>
  <li>Google Ads → Ferramentas → Configurações → Contas vinculadas</li>
  <li>Selecione "Google Analytics 4 e Firebase"</li>
  <li>Clique em "Vincular" ao lado da propriedade GA4 correta</li>
  <li>Confirme a vinculação no GA4 (Admin → Vinculações com Google Ads)</li>
</ol>
<strong>Criando uma conversão no Google Ads (via GTM):</strong>
<ol>
  <li>Google Ads → Ferramentas → Medição → <strong>Conversões</strong> → "Nova ação de conversão"</li>
  <li>Selecione "Site"</li>
  <li>Configure:
    <ul>
      <li><strong>Categoria:</strong> Compra, Lead, Inscrição, etc.</li>
      <li><strong>Nome:</strong> ex: "Compra - Checkout" ou "Lead - Formulário Contato"</li>
      <li><strong>Valor:</strong> Usar valor da transação (e-commerce) ou valor fixo (lead)</li>
      <li><strong>Contagem:</strong> "Cada" (e-commerce) ou "Uma" (lead)</li>
      <li><strong>Janela de conversão por clique:</strong> 30 dias (padrão)</li>
      <li><strong>Modelo de atribuição:</strong> Data-Driven (recomendado)</li>
    </ul>
  </li>
  <li>Na próxima tela, selecione "Usar o Google Tag Manager"</li>
  <li>Anote o <strong>ID de conversão</strong> e o <strong>Rótulo de conversão</strong></li>
</ol>
<strong>Configurando a tag no GTM:</strong>
<ol>
  <li>GTM → Nova tag → <strong>Conversão do Google Ads</strong></li>
  <li>Insira o ID de Conversão e o Rótulo de Conversão copiados</li>
  <li>Para e-commerce: ative "Enviar dados de transação" e mapeie as variáveis (order ID, value, currency)</li>
  <li>Trigger: o evento que representa a conversão (ex: disparar em pageview da página /obrigado ou no evento de purchase do dataLayer)</li>
  <li>Nomeie a tag → Salvar → Publicar o container do GTM</li>
</ol>
<strong>Verificação:</strong> use o <strong>Preview Mode</strong> do GTM para confirmar que a tag dispara no momento correto. Após 24h, verifique em Google Ads → Conversões se estão sendo registradas.`,
            en: `<strong>Creating the Google Ads account:</strong>
<ol>
  <li>Access <code>ads.google.com</code> with a Google account</li>
  <li>Click <strong>"Get started"</strong></li>
  <li>Enter main objective (Sales, Leads, Traffic, Awareness) or click "Create account without campaign" to configure later — recommended for AdOps</li>
  <li>Enter account name, time zone and currency</li>
  <li>Configure billing (card or invoice)</li>
</ol>
<strong>Linking to Google Analytics 4 (GA4):</strong>
<ol>
  <li>Google Ads → Tools → Settings → Linked accounts</li>
  <li>Select "Google Analytics 4 and Firebase"</li>
  <li>Click "Link" next to the correct GA4 property</li>
  <li>Confirm linking in GA4 (Admin → Google Ads Links)</li>
</ol>
<strong>Creating a Google Ads conversion (via GTM):</strong>
<ol>
  <li>Google Ads → Tools → Measurement → <strong>Conversions</strong> → "New conversion action"</li>
  <li>Select "Website"</li>
  <li>Configure:
    <ul>
      <li><strong>Category:</strong> Purchase, Lead, Sign-up, etc.</li>
      <li><strong>Name:</strong> e.g. "Purchase - Checkout" or "Lead - Contact Form"</li>
      <li><strong>Value:</strong> Use transaction value (e-commerce) or fixed value (lead)</li>
      <li><strong>Count:</strong> "Every" (e-commerce) or "One" (lead)</li>
      <li><strong>Click conversion window:</strong> 30 days (default)</li>
      <li><strong>Attribution model:</strong> Data-Driven (recommended)</li>
    </ul>
  </li>
  <li>On next screen, select "Use Google Tag Manager"</li>
  <li>Note the <strong>Conversion ID</strong> and <strong>Conversion Label</strong></li>
</ol>
<strong>Setting up the tag in GTM:</strong>
<ol>
  <li>GTM → New tag → <strong>Google Ads Conversion Tracking</strong></li>
  <li>Enter the Conversion ID and Conversion Label copied</li>
  <li>For e-commerce: enable "Send transaction data" and map variables</li>
  <li>Trigger: the event that represents the conversion</li>
  <li>Name the tag → Save → Publish GTM container</li>
</ol>
<strong>Verification:</strong> use GTM <strong>Preview Mode</strong> to confirm tag fires at the right moment.`,
            es: `<strong>Crear la cuenta de Google Ads:</strong>
<ol>
  <li>Accede a <code>ads.google.com</code> con una cuenta Google</li>
  <li>Haz clic en <strong>"Comenzar ahora"</strong></li>
  <li>Informa el objetivo principal o haz clic en "Crear cuenta sin campaña" — recomendado para AdOps</li>
  <li>Informa nombre de cuenta, zona horaria y moneda</li>
  <li>Configura el facturación</li>
</ol>
<strong>Crear una conversión en Google Ads (via GTM):</strong>
<ol>
  <li>Google Ads → Herramientas → Medición → <strong>Conversiones</strong> → "Nueva acción de conversión"</li>
  <li>Selecciona "Sitio web"</li>
  <li>Configura: Categoría, Nombre, Valor, Conteo, Ventana de conversión, Modelo de atribución Data-Driven</li>
  <li>Selecciona "Usar Google Tag Manager"</li>
  <li>Anota el <strong>ID de conversión</strong> y la <strong>Etiqueta de conversión</strong></li>
</ol>
<strong>Configurando la tag en GTM:</strong>
<ol>
  <li>GTM → Nueva tag → <strong>Conversión de Google Ads</strong></li>
  <li>Inserta el ID y la Etiqueta de conversión</li>
  <li>Trigger: el evento que representa la conversión</li>
  <li>Nombre de la tag → Guardar → Publicar el contenedor GTM</li>
</ol>
<strong>Verificación:</strong> usa el <strong>Modo Vista Previa</strong> del GTM.`,
          },
          tags: ['Google-Ads', 'Conversion-Tracking', 'GTM', 'GA4', 'DataLayer', 'purchase', 'lead'],
        },
        {
          q: { pt: 'Como criar um contador de Floodlight no CM360 e configurá-lo no GTM?', en: 'How to create a Floodlight counter in CM360 and configure it in GTM?', es: '¿Cómo crear un contador Floodlight en CM360 y configurarlo en GTM?' },
          a: {
            pt: `<strong>O que é o Floodlight:</strong> sistema de rastreamento de conversão do Campaign Manager 360. Equivalente ao pixel, mas nativo do ecossistema Google Marketing Platform (GMP). É o que alimenta os relatórios de conversão no CM360 e o targeting de remarketing no DV360.<br><br>
<strong>Tipos de Floodlight Activity:</strong>
<ul>
  <li><strong>Counter (Contador):</strong> conta o número de visitas a uma página após clicar/ver um anúncio. Usado para: páginas de obrigado, pageviews de confirmação, visitas a seções específicas.</li>
  <li><strong>Sales (Vendas):</strong> conta transações e registra o valor de cada uma. Usado para: e-commerce, contratos assinados, qualquer evento com valor monetário.</li>
</ul>
<strong>Criando um Floodlight Activity no CM360:</strong>
<ol>
  <li>No CM360, acesse o <strong>Advertiser</strong> correto</li>
  <li>Clique em <strong>Floodlight Configuration</strong> no menu lateral</li>
  <li>Vá em <strong>Floodlight Activities</strong> → clique em <strong>"New"</strong></li>
  <li>Preencha:
    <ul>
      <li><strong>Name:</strong> ex: "Lead - Formulário Contato" ou "Purchase - Checkout"</li>
      <li><strong>Type:</strong> Counter (visita) ou Sales (transação com valor)</li>
      <li><strong>Counting method (Counter):</strong>
        <ul>
          <li>Standard: conta cada visita única por sessão</li>
          <li>Unique: conta apenas uma vez por usuário no lookback window</li>
          <li>Per session: conta cada sessão (pode recontar)</li>
        </ul>
      </li>
      <li><strong>Tag type:</strong> Global Site Tag (gtag.js) — recomendado para GTM</li>
      <li><strong>Expected URL:</strong> URL onde o tag vai disparar (ex: /obrigado)</li>
    </ul>
  </li>
  <li>Salve → O CM360 gera o snippet do Floodlight com o <strong>src</strong>, <strong>type</strong> e <strong>cat</strong></li>
</ol>
<strong>Instalando via GTM:</strong>
<ol>
  <li>GTM → Nova Tag → <strong>Floodlight Counter</strong> (ou Floodlight Sales)</li>
  <li>Insira o <strong>Advertiser ID</strong> (src=), <strong>Group Tag String</strong> (type=) e <strong>Activity Tag String</strong> (cat=) — encontrados no snippet gerado pelo CM360</li>
  <li>Para Sales: mapear variáveis de ord= (order ID único), num= (quantidade) e cost= (valor)</li>
  <li>Trigger: disparar no evento/página de conversão</li>
  <li>Salvar → Publicar</li>
</ol>
<strong>Verificação no CM360:</strong>
<ul>
  <li>Aguardar 24h e verificar no CM360 → Floodlight Activities se a coluna "Status" mostra ativo (✓)</li>
  <li>Usar o <strong>Tag Assistant</strong> da Google ou inspecionar o Network do Chrome para confirmar que o ping foi enviado</li>
</ul>`,
            en: `<strong>What is Floodlight:</strong> Campaign Manager 360's conversion tracking system. Equivalent to a pixel, but native to the Google Marketing Platform (GMP) ecosystem. It feeds conversion reports in CM360 and remarketing targeting in DV360.<br><br>
<strong>Floodlight Activity types:</strong>
<ul>
  <li><strong>Counter:</strong> counts page visits after clicking/viewing an ad. Used for: thank-you pages, confirmation pageviews, visits to specific sections.</li>
  <li><strong>Sales:</strong> counts transactions and records the value of each. Used for: e-commerce, signed contracts, any event with monetary value.</li>
</ul>
<strong>Creating a Floodlight Activity in CM360:</strong>
<ol>
  <li>In CM360, access the correct <strong>Advertiser</strong></li>
  <li>Click <strong>Floodlight Configuration</strong> in the side menu</li>
  <li>Go to <strong>Floodlight Activities</strong> → click <strong>"New"</strong></li>
  <li>Fill in:
    <ul>
      <li><strong>Name:</strong> e.g. "Lead - Contact Form" or "Purchase - Checkout"</li>
      <li><strong>Type:</strong> Counter (visit) or Sales (transaction with value)</li>
      <li><strong>Counting method (Counter):</strong> Standard / Unique / Per session</li>
      <li><strong>Tag type:</strong> Global Site Tag (gtag.js) — recommended for GTM</li>
      <li><strong>Expected URL:</strong> URL where tag will fire (e.g. /thank-you)</li>
    </ul>
  </li>
  <li>Save → CM360 generates Floodlight snippet with <strong>src</strong>, <strong>type</strong> and <strong>cat</strong></li>
</ol>
<strong>Installing via GTM:</strong>
<ol>
  <li>GTM → New Tag → <strong>Floodlight Counter</strong> (or Floodlight Sales)</li>
  <li>Enter <strong>Advertiser ID</strong> (src=), <strong>Group Tag String</strong> (type=) and <strong>Activity Tag String</strong> (cat=) — found in snippet generated by CM360</li>
  <li>For Sales: map variables ord= (unique order ID), num= (quantity) and cost= (value)</li>
  <li>Trigger: fire on conversion event/page</li>
  <li>Save → Publish</li>
</ol>
<strong>Verification in CM360:</strong> wait 24h and check CM360 → Floodlight Activities if "Status" column shows active (✓).`,
            es: `<strong>Qué es el Floodlight:</strong> sistema de seguimiento de conversión de Campaign Manager 360. Nativo del ecosistema Google Marketing Platform (GMP). Alimenta los informes de conversión en CM360 y el targeting de remarketing en DV360.<br><br>
<strong>Tipos de Floodlight Activity:</strong>
<ul>
  <li><strong>Counter (Contador):</strong> cuenta el número de visitas a una página. Usado para: páginas de gracias, pageviews de confirmación.</li>
  <li><strong>Sales (Ventas):</strong> cuenta transacciones y registra el valor de cada una. Usado para: e-commerce, eventos con valor monetario.</li>
</ul>
<strong>Crear un Floodlight Activity en CM360:</strong>
<ol>
  <li>En CM360, accede al <strong>Advertiser</strong> correcto</li>
  <li>Haz clic en <strong>Floodlight Configuration</strong> en el menú lateral</li>
  <li>Ve a <strong>Floodlight Activities</strong> → haz clic en <strong>"New"</strong></li>
  <li>Completa: Name, Type (Counter o Sales), Counting method, Tag type: Global Site Tag</li>
  <li>Guardar → CM360 genera el snippet con src, type y cat</li>
</ol>
<strong>Instalar via GTM:</strong>
<ol>
  <li>GTM → Nueva tag → <strong>Floodlight Counter</strong> (o Floodlight Sales)</li>
  <li>Inserta el Advertiser ID (src=), Group Tag String (type=) y Activity Tag String (cat=)</li>
  <li>Para Sales: mapear variables ord= (order ID único), num= (cantidad) y cost= (valor)</li>
  <li>Trigger: disparar en el evento/página de conversión → Guardar → Publicar</li>
</ol>`,
          },
          tags: ['Floodlight', 'CM360', 'GTM', 'Counter', 'Sales', 'conversão', 'remarketing'],
        },
        {
          q: { pt: 'Como configurar uma tag no Google Tag Manager do zero?', en: 'How to configure a tag in Google Tag Manager from scratch?', es: '¿Cómo configurar una tag en Google Tag Manager desde cero?' },
          a: {
            pt: `<strong>Criando um container GTM e instalando no site:</strong>
<ol>
  <li>Acesse <code>tagmanager.google.com</code> com conta Google</li>
  <li>Crie uma <strong>conta</strong> (nome da empresa) e um <strong>container</strong> (nome do site, plataforma: Web)</li>
  <li>O GTM gera dois snippets de código — copie e cole:
    <ul>
      <li>Snippet 1 (JavaScript): dentro do <code>&lt;head&gt;</code></li>
      <li>Snippet 2 (iframe noscript): logo após a abertura do <code>&lt;body&gt;</code></li>
    </ul>
  </li>
  <li>Confirme a instalação em: Admin → Google Tag Assistant</li>
</ol>
<strong>Estrutura do GTM:</strong>
<ul>
  <li><strong>Tags:</strong> o código que é executado (Google Ads, GA4, Meta Pixel, Floodlight, etc.)</li>
  <li><strong>Triggers (Gatilhos):</strong> quando a tag dispara (pageview, clique, evento customizado)</li>
  <li><strong>Variables (Variáveis):</strong> valores dinâmicos usados pelas tags (URL, dataLayer, clique ID)</li>
  <li><strong>DataLayer:</strong> objeto JavaScript que passa informações do site para o GTM</li>
</ul>
<strong>Criando uma tag — exemplo: GA4 Configuration:</strong>
<ol>
  <li>GTM → <strong>Tags</strong> → "Nova tag"</li>
  <li>Clique em "Configuração de tag" → Escolha o tipo: <strong>Google Tag</strong></li>
  <li>Insira o <strong>ID da tag</strong> do GA4 (ex: G-XXXXXXXXXX)</li>
  <li>Clique em "Acionamento" → Selecione <strong>All Pages</strong> (dispara em todas as páginas)</li>
  <li>Dê um nome → "Salvar"</li>
</ol>
<strong>Criando um trigger customizado (evento de clique em botão):</strong>
<ol>
  <li>GTM → Acionamentos → "Novo"</li>
  <li>Tipo: <strong>Clique — Todos os elementos</strong></li>
  <li>Configure: "Aguardar tags" ✓, "Verificar validação" ✓</li>
  <li>Condição: <code>Click ID</code> contém <code>btn-comprar</code> (ID do botão no HTML)</li>
  <li>Nomeie → Salvar</li>
</ol>
<strong>Usando o DataLayer para passar variáveis:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">// No código do site, na página de obrigado/compra:
dataLayer.push({
  'event': 'purchase',
  'transaction_id': '12345',
  'value': 299.90,
  'currency': 'BRL',
  'items': [{ 'item_id': 'PROD-001', 'item_name': 'Produto X' }]
});</pre>
<strong>No GTM:</strong> crie Variáveis de Camada de Dados para capturar esses valores (ex: variável <code>transaction_id</code> → Nome da variável no dataLayer: <code>transaction_id</code>). Use essas variáveis nas tags de conversão.<br><br>
<strong>Publicando:</strong> todas as alterações ficam em rascunho até você clicar em <strong>"Enviar"</strong> (canto superior direito). Sempre use o <strong>Preview Mode</strong> para testar antes de publicar em produção.`,
            en: `<strong>Creating a GTM container and installing on site:</strong>
<ol>
  <li>Access <code>tagmanager.google.com</code> with Google account</li>
  <li>Create an <strong>account</strong> (company name) and a <strong>container</strong> (site name, platform: Web)</li>
  <li>GTM generates two code snippets — copy and paste:
    <ul>
      <li>Snippet 1 (JavaScript): inside <code>&lt;head&gt;</code></li>
      <li>Snippet 2 (iframe noscript): right after opening <code>&lt;body&gt;</code></li>
    </ul>
  </li>
</ol>
<strong>GTM structure:</strong>
<ul>
  <li><strong>Tags:</strong> code that runs (Google Ads, GA4, Meta Pixel, Floodlight, etc.)</li>
  <li><strong>Triggers:</strong> when the tag fires (pageview, click, custom event)</li>
  <li><strong>Variables:</strong> dynamic values used by tags (URL, dataLayer, click ID)</li>
  <li><strong>DataLayer:</strong> JavaScript object that passes information from site to GTM</li>
</ul>
<strong>Creating a tag — example: GA4 Configuration:</strong>
<ol>
  <li>GTM → <strong>Tags</strong> → "New tag"</li>
  <li>Click "Tag configuration" → Choose type: <strong>Google Tag</strong></li>
  <li>Enter GA4 <strong>Tag ID</strong> (e.g. G-XXXXXXXXXX)</li>
  <li>Click "Triggering" → Select <strong>All Pages</strong></li>
  <li>Name it → "Save"</li>
</ol>
<strong>DataLayer usage:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">// In site code, on thank-you/purchase page:
dataLayer.push({
  'event': 'purchase',
  'transaction_id': '12345',
  'value': 299.90,
  'currency': 'USD',
  'items': [{ 'item_id': 'PROD-001', 'item_name': 'Product X' }]
});</pre>
<strong>Publishing:</strong> all changes stay in draft until you click <strong>"Submit"</strong> (upper right corner). Always use <strong>Preview Mode</strong> to test before publishing to production.`,
            es: `<strong>Crear un contenedor GTM e instalar en el sitio:</strong>
<ol>
  <li>Accede a <code>tagmanager.google.com</code> con cuenta Google</li>
  <li>Crea una <strong>cuenta</strong> (nombre de la empresa) y un <strong>contenedor</strong> (nombre del sitio, plataforma: Web)</li>
  <li>GTM genera dos snippets de código:
    <ul>
      <li>Snippet 1 (JavaScript): dentro del <code>&lt;head&gt;</code></li>
      <li>Snippet 2 (iframe noscript): justo después de abrir el <code>&lt;body&gt;</code></li>
    </ul>
  </li>
</ol>
<strong>Estructura del GTM:</strong>
<ul>
  <li><strong>Tags:</strong> el código que se ejecuta</li>
  <li><strong>Triggers (Disparadores):</strong> cuándo se dispara la tag</li>
  <li><strong>Variables:</strong> valores dinámicos usados por las tags</li>
  <li><strong>DataLayer:</strong> objeto JavaScript que pasa información del sitio al GTM</li>
</ul>
<strong>DataLayer para pasar variables:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">dataLayer.push({
  'event': 'purchase',
  'transaction_id': '12345',
  'value': 299.90,
  'currency': 'USD'
});</pre>
<strong>Publicación:</strong> todos los cambios quedan en borrador hasta que hagas clic en <strong>"Enviar"</strong>. Siempre usa el <strong>Modo Vista Previa</strong> para probar antes de publicar.`,
          },
          tags: ['GTM', 'Tag-Manager', 'DataLayer', 'trigger', 'GA4', 'tag', 'publish', 'preview'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: { pt: 'Como conectar o DV360 ao CM360 e qual a diferença entre as duas plataformas?', en: 'How to connect DV360 to CM360 and what is the difference between the two platforms?', es: '¿Cómo conectar DV360 al CM360 y cuál es la diferencia entre las dos plataformas?' },
          a: {
            pt: `<strong>CM360 vs. DV360 — entendendo os papéis:</strong>
<ul>
  <li><strong>CM360 (Campaign Manager 360):</strong> ad server de buy-side — faz o trafficking dos criativos, gera as tags, registra impressões/cliques de forma independente, mede conversões via Floodlight, gera relatórios unificados. É o "sistema de registro" da campanha.</li>
  <li><strong>DV360 (Display & Video 360):</strong> DSP — compra mídia programática em RTB, gerencia lances, audiências e otimização de budget. Não serve criativos diretamente — chama o CM360 para servir.</li>
</ul>
<strong>Como funciona a integração DV360 ↔ CM360:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">DV360 (compra o inventário) → ganha o leilão → 
chama o CM360 (serve o criativo) → 
CM360 registra a impressão independentemente</pre>
<strong>Passo a passo para conectar DV360 ao CM360:</strong>
<ol>
  <li><strong>No CM360:</strong>
    <ul>
      <li>Acesse o Advertiser correto → Admin</li>
      <li>Vá em <strong>Linked Accounts</strong></li>
      <li>Clique em <strong>"Link Display & Video 360"</strong></li>
      <li>Selecione o Advertiser do DV360 correspondente → Confirme</li>
    </ul>
  </li>
  <li><strong>No DV360:</strong>
    <ul>
      <li>Acesse o Advertiser → Configurações do Advertiser</li>
      <li>Em <strong>Linked Accounts</strong>, a vinculação ao CM360 deve aparecer</li>
      <li>Confirme a vinculação se necessário</li>
    </ul>
  </li>
</ol>
<strong>Benefícios da integração:</strong>
<ul>
  <li>Criativos do CM360 ficam disponíveis automaticamente no DV360 para uso nas campanhas</li>
  <li>Floodlight Activities do CM360 ficam disponíveis no DV360 para otimização de conversão e remarketing</li>
  <li>Relatórios unificados: impressões do DV360 aparecem no CM360 com dados de conversão Floodlight</li>
  <li>Audience lists criadas via Floodlight no CM360 ficam disponíveis no DV360 para targeting</li>
</ul>
<strong>Criando um criativo no CM360 para usar no DV360:</strong>
<ol>
  <li>CM360 → Advertiser → Creatives → New Creative</li>
  <li>Fazer upload do HTML5 zip ou imagem</li>
  <li>O criativo fica disponível no DV360 em Recursos → Criativos do Campaign Manager</li>
  <li>No DV360, criar o Line Item → adicionar criativo do CM360 → o sistema gera automaticamente o ad com tracking integrado</li>
</ol>`,
            en: `<strong>CM360 vs. DV360 — understanding the roles:</strong>
<ul>
  <li><strong>CM360 (Campaign Manager 360):</strong> buy-side ad server — does creative trafficking, generates tags, records impressions/clicks independently, measures conversions via Floodlight, generates unified reports. It's the campaign's "system of record".</li>
  <li><strong>DV360 (Display & Video 360):</strong> DSP — buys programmatic media in RTB, manages bids, audiences and budget optimization. Doesn't serve creatives directly — calls CM360 to serve.</li>
</ul>
<strong>How DV360 ↔ CM360 integration works:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">DV360 (buys inventory) → wins auction → 
calls CM360 (serves creative) → 
CM360 records impression independently</pre>
<strong>Step-by-step to connect DV360 to CM360:</strong>
<ol>
  <li><strong>In CM360:</strong>
    <ul>
      <li>Access correct Advertiser → Admin</li>
      <li>Go to <strong>Linked Accounts</strong></li>
      <li>Click <strong>"Link Display & Video 360"</strong></li>
      <li>Select corresponding DV360 Advertiser → Confirm</li>
    </ul>
  </li>
  <li><strong>In DV360:</strong>
    <ul>
      <li>Access Advertiser → Advertiser Settings</li>
      <li>In <strong>Linked Accounts</strong>, the CM360 link should appear</li>
      <li>Confirm the link if necessary</li>
    </ul>
  </li>
</ol>
<strong>Integration benefits:</strong>
<ul>
  <li>CM360 creatives automatically available in DV360 for campaign use</li>
  <li>CM360 Floodlight Activities available in DV360 for conversion optimization and remarketing</li>
  <li>Unified reports: DV360 impressions appear in CM360 with Floodlight conversion data</li>
  <li>Audience lists created via Floodlight in CM360 available in DV360 for targeting</li>
</ul>`,
            es: `<strong>CM360 vs. DV360 — entendiendo los roles:</strong>
<ul>
  <li><strong>CM360 (Campaign Manager 360):</strong> ad server buy-side — hace el trafficking de creativos, genera las tags, registra impresiones/clics de forma independiente, mide conversiones via Floodlight, genera informes unificados.</li>
  <li><strong>DV360 (Display & Video 360):</strong> DSP — compra medios programáticos en RTB, gestiona pujas, audiencias y optimización de presupuesto. No sirve creativos directamente — llama al CM360 para servir.</li>
</ul>
<strong>Cómo funciona la integración DV360 ↔ CM360:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">DV360 (compra el inventario) → gana la subasta → 
llama al CM360 (sirve el creativo) → 
CM360 registra la impresión independientemente</pre>
<strong>Paso a paso para conectar DV360 al CM360:</strong>
<ol>
  <li><strong>En CM360:</strong>
    <ul>
      <li>Accede al Advertiser correcto → Admin</li>
      <li>Ve a <strong>Linked Accounts</strong></li>
      <li>Haz clic en <strong>"Link Display & Video 360"</strong></li>
      <li>Selecciona el Advertiser de DV360 correspondiente → Confirma</li>
    </ul>
  </li>
  <li><strong>En DV360:</strong>
    <ul>
      <li>Accede al Advertiser → Configuración del Advertiser</li>
      <li>En <strong>Linked Accounts</strong>, el vínculo con CM360 debe aparecer</li>
    </ul>
  </li>
</ol>
<strong>Beneficios de la integración:</strong>
<ul>
  <li>Los creativos del CM360 están disponibles automáticamente en DV360</li>
  <li>Los Floodlight Activities del CM360 están disponibles en DV360 para optimización y remarketing</li>
  <li>Informes unificados: las impresiones de DV360 aparecen en CM360 con datos de conversión Floodlight</li>
</ul>`,
          },
          tags: ['DV360', 'CM360', 'integração', 'Floodlight', 'GMP', 'criativo', 'remarketing', 'DSP'],
        },
        {
          q: { pt: 'Como criar uma campanha de Display no DV360 do zero?', en: 'How to create a Display campaign in DV360 from scratch?', es: '¿Cómo crear una campaña de Display en DV360 desde cero?' },
          a: {
            pt: `<strong>Estrutura do DV360:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Partner (agência/trading desk)
└── Advertiser (marca/cliente)
    └── Campaign (campanha — objetivo e budget)
        └── Insertion Order (IO — pacote de compra)
            └── Line Item (segmentação específica)
                └── Creative (criativo associado)</pre>
<strong>Passo a passo — criando uma campanha Display:</strong>
<ol>
  <li><strong>Criar o Advertiser</strong> (se não existir):
    <ul>
      <li>Partner → "New Advertiser"</li>
      <li>Nome, fuso horário, moeda, domínio do site</li>
      <li>Vincular ao CM360 (Linked Accounts) — fundamental</li>
    </ul>
  </li>
  <li><strong>Criar a Campaign:</strong>
    <ul>
      <li>Advertiser → Campaigns → "New Campaign"</li>
      <li>Nome da campanha (use naming convention)</li>
      <li>Objetivo: Brand Awareness, Reach, Conversions, etc.</li>
      <li>Budget total e datas de início/fim</li>
    </ul>
  </li>
  <li><strong>Criar o Insertion Order (IO):</strong>
    <ul>
      <li>Dentro da Campaign → "New Insertion Order"</li>
      <li>Tipo: Display & Video 360</li>
      <li>Budget do IO (pode ser parte do budget total da campanha)</li>
      <li>Pacing: Daily / Flight / ASAP</li>
      <li>Frequência cap</li>
    </ul>
  </li>
  <li><strong>Criar o Line Item (segmentação):</strong>
    <ul>
      <li>Dentro do IO → "New Line Item"</li>
      <li>Tipo: Display (padrão) ou Video</li>
      <li>Budget e lances (CPM, Target CPA, etc.)</li>
      <li>Configurar targeting:
        <ul>
          <li>Geography (país/estado/cidade)</li>
          <li>Language</li>
          <li>Device (desktop/mobile/tablet/CTV)</li>
          <li>Audience (remarketing, in-market, custom intent)</li>
          <li>Environment (web, app, AMP)</li>
          <li>Inventory Source (open auction, deals)</li>
          <li>Brand Safety (IAS/DV pré-bid)</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>Adicionar criativos:</strong>
    <ul>
      <li>Line Item → Creatives → "Add Creative"</li>
      <li>Selecionar criativos do CM360 vinculado ou fazer upload direto</li>
      <li>Verificar se os tamanhos dos criativos batem com os formatos configurados</li>
    </ul>
  </li>
  <li><strong>Revisar e ativar:</strong>
    <ul>
      <li>Verificar o checklist de QA antes de ativar</li>
      <li>Confirmar que os criativos foram aprovados pelo sistema</li>
      <li>Ativar o Line Item → aguardar aprovação (pode levar até 24h)</li>
    </ul>
  </li>
</ol>`,
            en: `<strong>DV360 structure:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Partner (agency/trading desk)
└── Advertiser (brand/client)
    └── Campaign (objective and budget)
        └── Insertion Order (IO — buying package)
            └── Line Item (specific segmentation)
                └── Creative (associated creative)</pre>
<strong>Step-by-step — creating a Display campaign:</strong>
<ol>
  <li><strong>Create Advertiser</strong> (if it doesn't exist):
    <ul>
      <li>Partner → "New Advertiser"</li>
      <li>Name, timezone, currency, site domain</li>
      <li>Link to CM360 (Linked Accounts) — essential</li>
    </ul>
  </li>
  <li><strong>Create Campaign:</strong> Objective, total budget, flight dates</li>
  <li><strong>Create Insertion Order (IO):</strong> Budget, pacing, frequency cap</li>
  <li><strong>Create Line Item (segmentation):</strong>
    <ul>
      <li>Type: Display or Video</li>
      <li>Budget and bids (CPM, Target CPA, etc.)</li>
      <li>Targeting: Geography, Language, Device, Audience, Environment, Inventory Source, Brand Safety</li>
    </ul>
  </li>
  <li><strong>Add creatives:</strong> Select from linked CM360 or upload directly. Verify sizes match configured formats.</li>
  <li><strong>Review and activate:</strong> QA checklist → Confirm creative approval → Activate Line Item</li>
</ol>`,
            es: `<strong>Estructura del DV360:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Partner (agencia/trading desk)
└── Advertiser (marca/cliente)
    └── Campaign (objetivo y presupuesto)
        └── Insertion Order (IO — paquete de compra)
            └── Line Item (segmentación específica)
                └── Creative (creativo asociado)</pre>
<strong>Paso a paso — crear una campaña de Display:</strong>
<ol>
  <li><strong>Crear el Advertiser</strong> (si no existe):
    <ul>
      <li>Partner → "New Advertiser"</li>
      <li>Nombre, zona horaria, moneda, dominio del sitio</li>
      <li>Vincular al CM360 (Linked Accounts) — fundamental</li>
    </ul>
  </li>
  <li><strong>Crear la Campaign:</strong> Objetivo, presupuesto total, fechas de inicio/fin</li>
  <li><strong>Crear el Insertion Order (IO):</strong> Presupuesto, pacing, frequency cap</li>
  <li><strong>Crear el Line Item (segmentación):</strong>
    <ul>
      <li>Tipo: Display o Video</li>
      <li>Presupuesto y pujas (CPM, Target CPA, etc.)</li>
      <li>Targeting: Geografía, Idioma, Dispositivo, Audiencia, Entorno, Fuente de inventario, Brand Safety</li>
    </ul>
  </li>
  <li><strong>Agregar creativos:</strong> Seleccionar del CM360 vinculado o subir directamente. Verificar que los tamaños coincidan.</li>
  <li><strong>Revisar y activar:</strong> Checklist de QA → Confirmar aprobación de creativos → Activar el Line Item</li>
</ol>`,
          },
          tags: ['DV360', 'Display', 'Line-Item', 'IO', 'targeting', 'campanha', 'criativo', 'pacing'],
        },
        {
          q: { pt: 'Como configurar o Conversions API (CAPI) do Meta via GTM Server-Side?', en: 'How to configure Meta Conversions API (CAPI) via GTM Server-Side?', es: '¿Cómo configurar la Conversions API (CAPI) de Meta via GTM Server-Side?' },
          a: {
            pt: `O <strong>Meta CAPI (Conversions API)</strong> envia eventos de conversão do servidor do anunciante diretamente para a Meta — complementando o pixel client-side e recuperando conversões perdidas por ad blockers e iOS 14+.<br><br>
<strong>Arquitetura CAPI via GTM Server-Side:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Usuário (browser) → GTM Web (client-side) → 
Envia eventos para → GTM Server (servidor seu) → 
GTM Server envia para → Meta CAPI (servidor Meta)</pre>
<strong>Passo a passo de implementação:</strong><br><br>
<strong>Etapa 1 — Configurar o GTM Server-Side:</strong>
<ol>
  <li>Em <code>tagmanager.google.com</code>, crie um novo container do tipo <strong>"Server"</strong></li>
  <li>Escolha a opção de provisionamento (Google Cloud Run é o mais comum — tem custo mensal ~$50-150/mês)</li>
  <li>Configure o <strong>Server Container URL</strong> — essa é a URL do seu servidor de tag (ex: <code>metrics.seusite.com.br</code>) com CNAME no seu domínio</li>
</ol>
<strong>Etapa 2 — Conectar GTM Web ao GTM Server:</strong>
<ol>
  <li>No GTM Web, crie uma tag do tipo <strong>"Google Tag"</strong> com seu GA4 Measurement ID</li>
  <li>Nas configurações avançadas, defina o <strong>Server Container URL</strong> como destino dos eventos</li>
  <li>Isso faz com que os eventos GA4 sejam enviados para o seu servidor antes de chegar ao Google</li>
</ol>
<strong>Etapa 3 — Configurar o CAPI no GTM Server:</strong>
<ol>
  <li>No GTM Server, adicione o template <strong>"Facebook Conversions API"</strong> (buscar na galeria de templates)</li>
  <li>Configure:
    <ul>
      <li><strong>Pixel ID:</strong> ID do seu Meta Pixel (encontrado no Events Manager)</li>
      <li><strong>API Access Token:</strong> gerar em Events Manager → Configurações → Conversions API → Gerar Token de Acesso</li>
      <li><strong>Mapeamento de eventos:</strong> mapear eventos GA4 (purchase, lead) para eventos Meta (Purchase, Lead)</li>
      <li><strong>User data:</strong> mapear email hasheado, telefone hasheado, IP, user agent para melhor match</li>
    </ul>
  </li>
  <li>Trigger: disparar nos eventos de conversão relevantes</li>
  <li>Publicar o container Server</li>
</ol>
<strong>Etapa 4 — Verificação no Meta Events Manager:</strong>
<ul>
  <li>Events Manager → seu Pixel → Verificar Eventos</li>
  <li>Verificar que eventos aparecem com Source: "Server" (CAPI) E "Browser" (pixel) — a deduplicação é feita automaticamente pelo Meta via event_id</li>
  <li>Event Match Quality Score: meta &gt;6.0/10 para boa performance</li>
</ul>
<strong>Deduplicação:</strong> para evitar contar a mesma conversão duas vezes (pixel + CAPI), é essencial enviar o mesmo <code>event_id</code> único por transação em ambas as fontes.`,
            en: `<strong>Meta CAPI (Conversions API)</strong> sends conversion events from the advertiser's server directly to Meta — complementing the client-side pixel and recovering conversions lost to ad blockers and iOS 14+.<br><br>
<strong>CAPI via GTM Server-Side architecture:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">User (browser) → GTM Web (client-side) → 
Sends events to → GTM Server (your server) → 
GTM Server sends to → Meta CAPI (Meta server)</pre>
<strong>Implementation step-by-step:</strong><br><br>
<strong>Step 1 — Set up GTM Server-Side:</strong>
<ol>
  <li>In <code>tagmanager.google.com</code>, create a new container of type <strong>"Server"</strong></li>
  <li>Choose provisioning option (Google Cloud Run is most common — ~$50-150/month cost)</li>
  <li>Configure <strong>Server Container URL</strong> with CNAME on your domain</li>
</ol>
<strong>Step 2 — Connect GTM Web to GTM Server:</strong>
<ol>
  <li>In GTM Web, create a <strong>"Google Tag"</strong> type tag with your GA4 Measurement ID</li>
  <li>In advanced settings, set <strong>Server Container URL</strong> as event destination</li>
</ol>
<strong>Step 3 — Configure CAPI in GTM Server:</strong>
<ol>
  <li>In GTM Server, add <strong>"Facebook Conversions API"</strong> template (search in template gallery)</li>
  <li>Configure:
    <ul>
      <li><strong>Pixel ID:</strong> your Meta Pixel ID (found in Events Manager)</li>
      <li><strong>API Access Token:</strong> generate in Events Manager → Settings → Conversions API → Generate Access Token</li>
      <li><strong>Event mapping:</strong> map GA4 events (purchase, lead) to Meta events (Purchase, Lead)</li>
      <li><strong>User data:</strong> map hashed email, hashed phone, IP, user agent</li>
    </ul>
  </li>
  <li>Publish the Server container</li>
</ol>
<strong>Step 4 — Verification in Meta Events Manager:</strong>
<ul>
  <li>Check events appear with Source: "Server" (CAPI) AND "Browser" (pixel)</li>
  <li>Event Match Quality Score: target &gt;6.0/10</li>
</ul>
<strong>Deduplication:</strong> to avoid counting the same conversion twice, send the same unique <code>event_id</code> per transaction from both sources.`,
            es: `La <strong>Meta CAPI (Conversions API)</strong> envía eventos de conversión desde el servidor del anunciante directamente a Meta — complementando el píxel client-side y recuperando conversiones perdidas por ad blockers y iOS 14+.<br><br>
<strong>Arquitectura CAPI via GTM Server-Side:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Usuario (browser) → GTM Web (client-side) → 
Envía eventos a → GTM Server (tu servidor) → 
GTM Server envía a → Meta CAPI (servidor Meta)</pre>
<strong>Paso a paso de implementación:</strong>
<ol>
  <li><strong>Etapa 1 — Configurar GTM Server-Side:</strong> Crear contenedor tipo "Server" en tagmanager.google.com. Configurar Server Container URL con CNAME en tu dominio.</li>
  <li><strong>Etapa 2 — Conectar GTM Web al GTM Server:</strong> En GTM Web, configurar Google Tag GA4 apuntando al Server Container URL.</li>
  <li><strong>Etapa 3 — Configurar CAPI en GTM Server:</strong>
    <ul>
      <li>Agregar template "Facebook Conversions API" desde la galería</li>
      <li>Configurar: Pixel ID, API Access Token (generar en Events Manager → Settings), Mapeo de eventos, User data hasheado</li>
      <li>Publicar el contenedor Server</li>
    </ul>
  </li>
  <li><strong>Etapa 4 — Verificar en Meta Events Manager:</strong>
    <ul>
      <li>Verificar que eventos aparecen con Source: "Server" (CAPI) Y "Browser" (píxel)</li>
      <li>Event Match Quality Score: meta &gt;6.0/10</li>
    </ul>
  </li>
</ol>
<strong>Deduplicación:</strong> enviar el mismo <code>event_id</code> único por transacción desde ambas fuentes.`,
          },
          tags: ['CAPI', 'Meta', 'GTM-Server', 'server-side', 'conversão', 'iOS14', 'deduplicação'],
        },
        {
          q: { pt: 'Como criar e configurar audiências de remarketing no DV360 usando Floodlight?', en: 'How to create and configure remarketing audiences in DV360 using Floodlight?', es: '¿Cómo crear y configurar audiencias de remarketing en DV360 usando Floodlight?' },
          a: {
            pt: `<strong>Fluxo completo de remarketing DV360 + Floodlight:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Floodlight (CM360) coleta visitantes → 
Audience List criada → 
DV360 usa a lista para targeting</pre>
<strong>Etapa 1 — Criar a Audience List no CM360:</strong>
<ol>
  <li>No CM360, acesse o Advertiser → <strong>Audiences</strong></li>
  <li>Clique em <strong>"New Audience Segment"</strong> → tipo <strong>Floodlight</strong></li>
  <li>Configure:
    <ul>
      <li><strong>Nome:</strong> ex: "Visitantes Página Produto — 30 dias"</li>
      <li><strong>Floodlight Activity:</strong> selecionar qual activity alimenta a lista (ex: Page View - Produto)</li>
      <li><strong>Membership duration:</strong> por quantos dias o usuário fica na lista (7 / 30 / 90 / 180 / 540 dias)</li>
      <li><strong>Regras (opcional):</strong> filtrar por URL específica, valor de conversão, etc.</li>
    </ul>
  </li>
  <li>Salvar — a lista começa a ser populada imediatamente</li>
</ol>
<strong>Etapa 2 — Sincronizar a audiência com o DV360:</strong>
<ol>
  <li>No DV360, acesse Advertiser → <strong>Audiences</strong></li>
  <li>As listas criadas no CM360 vinculado aparecem automaticamente em <strong>"Campaign Manager Audiences"</strong></li>
  <li>Aguardar mínimo de 100 usuários para ativar (requisito do Google para preservar privacidade)</li>
</ol>
<strong>Etapa 3 — Usar a audiência no Line Item:</strong>
<ol>
  <li>No Line Item do DV360 → Targeting → <strong>Audience Lists</strong></li>
  <li>Adicionar a lista de remarketing</li>
  <li>Definir se é inclusão (mostrar para quem está na lista) ou exclusão (não mostrar)</li>
  <li>Combinar audiências: ex: visitantes de produto (inclusão) E compradores recentes (exclusão) = visitantes que ainda não compraram</li>
</ol>
<strong>Estratégias de remarketing avançadas no DV360:</strong>
<ul>
  <li><strong>Sequencial:</strong> criar múltiplas listas por etapa do funil (visualizou → adicionou ao carrinho → iniciou checkout) e criar Line Items separados com criativos específicos para cada etapa</li>
  <li><strong>Lookalike (Similar Audiences):</strong> DV360 → criar audiência "similar" baseada nos compradores (necessita lista-semente de 100+ usuários)</li>
  <li><strong>Combinado:</strong> visitantes do site + interesse em-market + dados demográficos = audiência qualificada para campanha de prospecting</li>
</ul>`,
            en: `<strong>Complete DV360 + Floodlight remarketing flow:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Floodlight (CM360) collects visitors → 
Audience List created → 
DV360 uses list for targeting</pre>
<strong>Step 1 — Create Audience List in CM360:</strong>
<ol>
  <li>In CM360, access Advertiser → <strong>Audiences</strong></li>
  <li>Click <strong>"New Audience Segment"</strong> → type <strong>Floodlight</strong></li>
  <li>Configure:
    <ul>
      <li><strong>Name:</strong> e.g. "Product Page Visitors — 30 days"</li>
      <li><strong>Floodlight Activity:</strong> select which activity feeds the list</li>
      <li><strong>Membership duration:</strong> how many days user stays in list (7/30/90/180/540 days)</li>
      <li><strong>Rules (optional):</strong> filter by specific URL, conversion value, etc.</li>
    </ul>
  </li>
  <li>Save — list starts being populated immediately</li>
</ol>
<strong>Step 2 — Sync audience with DV360:</strong>
<ol>
  <li>In DV360, access Advertiser → <strong>Audiences</strong></li>
  <li>Lists created in linked CM360 appear automatically in <strong>"Campaign Manager Audiences"</strong></li>
  <li>Wait minimum 100 users to activate</li>
</ol>
<strong>Step 3 — Use audience in Line Item:</strong>
<ol>
  <li>In DV360 Line Item → Targeting → <strong>Audience Lists</strong></li>
  <li>Add the remarketing list as inclusion or exclusion</li>
  <li>Combine audiences: e.g. product visitors (inclusion) AND recent buyers (exclusion) = visitors who haven't bought yet</li>
</ol>`,
            es: `<strong>Flujo completo de remarketing DV360 + Floodlight:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Floodlight (CM360) recopila visitantes → 
Audience List creada → 
DV360 usa la lista para targeting</pre>
<strong>Etapa 1 — Crear Audience List en CM360:</strong>
<ol>
  <li>En CM360, accede al Advertiser → <strong>Audiences</strong></li>
  <li>Haz clic en <strong>"New Audience Segment"</strong> → tipo <strong>Floodlight</strong></li>
  <li>Configura: Nombre, Floodlight Activity, Membership duration (7/30/90/180/540 días), Reglas opcionales</li>
  <li>Guardar — la lista empieza a poblarse inmediatamente</li>
</ol>
<strong>Etapa 2 — Sincronizar la audiencia con DV360:</strong>
<ol>
  <li>En DV360, las listas del CM360 vinculado aparecen automáticamente en <strong>"Campaign Manager Audiences"</strong></li>
  <li>Esperar mínimo 100 usuarios para activar</li>
</ol>
<strong>Etapa 3 — Usar la audiencia en el Line Item:</strong>
<ol>
  <li>En el Line Item → Targeting → <strong>Audience Lists</strong></li>
  <li>Agregar como inclusión o exclusión</li>
  <li>Combinar: visitantes del producto (inclusión) Y compradores recientes (exclusión) = visitantes que aún no compraron</li>
</ol>`,
          },
          tags: ['remarketing', 'DV360', 'Floodlight', 'audience', 'CM360', 'lookalike', 'targeting'],
        },
        {
          q: { pt: 'Como configurar o Google Analytics 4 (GA4) via GTM e estruturar eventos corretamente?', en: 'How to configure Google Analytics 4 (GA4) via GTM and correctly structure events?', es: '¿Cómo configurar Google Analytics 4 (GA4) via GTM y estructurar eventos correctamente?' },
          a: {
            pt: `<strong>Criando a propriedade GA4:</strong>
<ol>
  <li>Acesse <code>analytics.google.com</code> → Admin → "Criar Propriedade"</li>
  <li>Informe: nome, fuso horário, moeda, setor, tamanho da empresa</li>
  <li>Selecione plataforma: Web</li>
  <li>Informe URL do site e nome do stream</li>
  <li>Copie o <strong>Measurement ID</strong> (ex: G-XXXXXXXXXX) — você vai precisar dele no GTM</li>
</ol>
<strong>Instalando GA4 via GTM:</strong>
<ol>
  <li>GTM → Nova tag → <strong>Google Tag</strong></li>
  <li>Insira o Measurement ID (G-XXXXXXXXXX)</li>
  <li>Trigger: <strong>All Pages</strong></li>
  <li>Nome: "GA4 - Config" → Salvar</li>
</ol>
<strong>Modelo de eventos do GA4 — estrutura:</strong>
<ul>
  <li>GA4 usa modelo baseado em <strong>eventos</strong> (diferente do UA que usava hits de pageview/evento/transação)</li>
  <li>Cada evento tem um <strong>nome</strong> e pode ter até 25 <strong>parâmetros</strong> (pares chave-valor)</li>
</ul>
<strong>Eventos automáticos do GA4 (coletados sem configuração extra):</strong>
<ul>
  <li><code>page_view</code> — pageview</li>
  <li><code>session_start</code> — início de sessão</li>
  <li><code>first_visit</code> — primeiro acesso</li>
  <li><code>scroll</code> — scroll de 90% da página</li>
  <li><code>click</code> — cliques em links externos</li>
  <li><code>file_download</code> — downloads de arquivo</li>
  <li><code>video_*</code> — eventos de YouTube embedado</li>
</ul>
<strong>Eventos de e-commerce recomendados (Enhanced E-commerce GA4):</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">view_item_list → visualizou lista de produtos
view_item     → visualizou página de produto
add_to_cart   → adicionou ao carrinho
begin_checkout → iniciou checkout
add_payment_info → informou pagamento
purchase      → compra concluída (com items, value, transaction_id)</pre>
<strong>Configurando eventos customizados via GTM:</strong>
<ol>
  <li>GTM → Nova tag → <strong>Google Analytics: Evento GA4</strong></li>
  <li>Selecione "Usar configuração do Google Tag" (referencia a tag GA4 Config)</li>
  <li>Nome do evento: ex: <code>generate_lead</code></li>
  <li>Adicione parâmetros: ex: <code>form_type</code> = "Contato", <code>lead_source</code> = "site"</li>
  <li>Trigger: evento de envio do formulário</li>
  <li>Salvar → Publicar</li>
</ol>
<strong>Vinculando GA4 ao Google Ads:</strong>
<ol>
  <li>GA4 Admin → Vinculações com Google Ads → "Vincular"</li>
  <li>Selecionar conta do Google Ads → Vincular</li>
  <li>Isso permite importar conversões do GA4 para o Google Ads e usar audiências GA4 no remarketing</li>
</ol>`,
            en: `<strong>Creating GA4 property:</strong>
<ol>
  <li>Access <code>analytics.google.com</code> → Admin → "Create Property"</li>
  <li>Enter: name, timezone, currency, industry, company size</li>
  <li>Select platform: Web</li>
  <li>Copy the <strong>Measurement ID</strong> (e.g. G-XXXXXXXXXX)</li>
</ol>
<strong>Installing GA4 via GTM:</strong>
<ol>
  <li>GTM → New tag → <strong>Google Tag</strong></li>
  <li>Enter Measurement ID (G-XXXXXXXXXX)</li>
  <li>Trigger: <strong>All Pages</strong></li>
  <li>Name: "GA4 - Config" → Save</li>
</ol>
<strong>GA4 event model:</strong>
<ul>
  <li>GA4 uses event-based model with event name + up to 25 parameters</li>
</ul>
<strong>Recommended e-commerce events (Enhanced E-commerce GA4):</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">view_item_list → viewed product list
view_item     → viewed product page
add_to_cart   → added to cart
begin_checkout → started checkout
add_payment_info → entered payment
purchase      → purchase completed</pre>
<strong>Configuring custom events via GTM:</strong>
<ol>
  <li>GTM → New tag → <strong>Google Analytics: GA4 Event</strong></li>
  <li>Select "Use Google Tag configuration"</li>
  <li>Event name: e.g. <code>generate_lead</code></li>
  <li>Add parameters: e.g. <code>form_type</code> = "Contact"</li>
  <li>Trigger: form submission event → Save → Publish</li>
</ol>
<strong>Linking GA4 to Google Ads:</strong>
<ol>
  <li>GA4 Admin → Google Ads Links → "Link"</li>
  <li>Select Google Ads account → Link</li>
</ol>`,
            es: `<strong>Crear la propiedad GA4:</strong>
<ol>
  <li>Accede a <code>analytics.google.com</code> → Admin → "Crear Propiedad"</li>
  <li>Completa: nombre, zona horaria, moneda, sector</li>
  <li>Copia el <strong>Measurement ID</strong> (ej: G-XXXXXXXXXX)</li>
</ol>
<strong>Instalar GA4 via GTM:</strong>
<ol>
  <li>GTM → Nueva tag → <strong>Google Tag</strong></li>
  <li>Inserta el Measurement ID → Trigger: All Pages → Guardar</li>
</ol>
<strong>Eventos de e-commerce recomendados (Enhanced E-commerce GA4):</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">view_item_list → visualizó lista de productos
view_item     → visualizó página de producto
add_to_cart   → agregó al carrito
begin_checkout → inició el checkout
purchase      → compra completada</pre>
<strong>Configurar eventos personalizados via GTM:</strong>
<ol>
  <li>GTM → Nueva tag → <strong>Google Analytics: Evento GA4</strong></li>
  <li>Nombre del evento: ej: <code>generate_lead</code></li>
  <li>Agregar parámetros: ej: <code>form_type</code> = "Contacto"</li>
  <li>Trigger: evento de envío del formulario → Guardar → Publicar</li>
</ol>
<strong>Vincular GA4 a Google Ads:</strong>
<ol>
  <li>GA4 Admin → Vinculaciones con Google Ads → "Vincular"</li>
  <li>Seleccionar cuenta Google Ads → Vincular</li>
</ol>`,
          },
          tags: ['GA4', 'GTM', 'evento', 'e-commerce', 'Measurement-ID', 'Google-Ads', 'DataLayer'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: { pt: 'Como configurar o Enhanced Conversions do Google Ads e por que é importante?', en: 'How to configure Google Ads Enhanced Conversions and why is it important?', es: '¿Cómo configurar Enhanced Conversions de Google Ads y por qué es importante?' },
          a: {
            pt: `<strong>Enhanced Conversions</strong> é um recurso do Google Ads que melhora a precisão do rastreamento de conversões enviando dados de usuário hasheados (SHA256) junto com os eventos de conversão — permitindo ao Google fazer matching com usuários autenticados no Google Account mesmo quando o cookie está ausente.<br><br>
<strong>Por que é fundamental (pós-iOS 14 e pós-cookie):</strong>
<ul>
  <li>Recupera conversões que o pixel client-side não captura (ad blockers, Safari ITP, iOS 14+)</li>
  <li>Melhora a qualidade dos dados para Smart Bidding (tCPA, tROAS)</li>
  <li>Matching via email hash SHA256 — sem expor dados reais</li>
  <li>Pode aumentar conversões rastreadas em 20-40%</li>
</ul>
<strong>Implementação via GTM (método recomendado):</strong>
<ol>
  <li><strong>Habilitar no Google Ads:</strong>
    <ul>
      <li>Google Ads → Ferramentas → Conversões → Configurações</li>
      <li>Ative <strong>"Enhanced Conversions"</strong></li>
      <li>Aceite os termos de uso</li>
    </ul>
  </li>
  <li><strong>No GTM — configurar variáveis de usuário:</strong>
    <ul>
      <li>Criar variáveis de Camada de Dados para capturar dados do usuário enviados via dataLayer na página de confirmação:
        <ul>
          <li><code>email</code> — email do comprador (ex: "usuario@email.com")</li>
          <li><code>phone_number</code> — telefone (formato E.164: "+5511999999999")</li>
          <li><code>first_name</code>, <code>last_name</code> — nome</li>
          <li><code>address</code> — objeto com street, city, state, postal_code, country</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>Configurar a tag de conversão com Enhanced Conversions:</strong>
    <ul>
      <li>Na tag de Conversão do Google Ads no GTM, expanda <strong>"Enhanced Conversions"</strong></li>
      <li>Ative a opção</li>
      <li>Mapeie os campos: Email → variável de email, Phone → variável de phone</li>
      <li>O GTM vai fazer o hash SHA256 automaticamente antes de enviar</li>
    </ul>
  </li>
  <li><strong>No dataLayer do site (página de obrigado/confirmação):</strong>
    <pre style="background:#0a0c10;padding:10px;border-radius:6px;font-size:0.82em">dataLayer.push({
  'event': 'purchase',
  'transaction_id': 'ORDER-12345',
  'value': 299.90,
  'currency': 'BRL',
  'enhanced_conversion_data': {
    'email': 'usuario@email.com',
    'phone_number': '+5511999999999'
  }
});</pre>
  </li>
</ol>
<strong>Verificação:</strong>
<ul>
  <li>Google Ads → Conversões → sua conversão → coluna "Enhanced Conversions" deve mostrar "Ativo"</li>
  <li>No Tag Assistant: verificar que a tag de conversão está enviando os campos de usuário hasheados</li>
</ul>`,
            en: `<strong>Enhanced Conversions</strong> is a Google Ads feature that improves conversion tracking accuracy by sending hashed user data (SHA256) with conversion events — allowing Google to match with authenticated Google Account users even when cookies are absent.<br><br>
<strong>Why it's essential (post-iOS 14 and post-cookie):</strong>
<ul>
  <li>Recovers conversions the client-side pixel doesn't capture (ad blockers, Safari ITP, iOS 14+)</li>
  <li>Improves data quality for Smart Bidding (tCPA, tROAS)</li>
  <li>Matching via SHA256 email hash — without exposing real data</li>
  <li>Can increase tracked conversions by 20-40%</li>
</ul>
<strong>Implementation via GTM (recommended method):</strong>
<ol>
  <li><strong>Enable in Google Ads:</strong> Tools → Conversions → Settings → Enable "Enhanced Conversions" → Accept terms</li>
  <li><strong>In GTM — configure user variables:</strong> Create Data Layer variables for email, phone_number, first_name, last_name, address from the confirmation page dataLayer</li>
  <li><strong>Configure conversion tag with Enhanced Conversions:</strong> In Google Ads conversion tag in GTM → expand "Enhanced Conversions" → Enable → Map fields (Email, Phone) to your variables. GTM will SHA256 hash automatically.</li>
  <li><strong>In site dataLayer (thank-you/confirmation page):</strong>
    <pre style="background:#0a0c10;padding:10px;border-radius:6px;font-size:0.82em">dataLayer.push({
  'event': 'purchase',
  'transaction_id': 'ORDER-12345',
  'value': 299.90,
  'currency': 'USD',
  'enhanced_conversion_data': {
    'email': 'user@email.com',
    'phone_number': '+15551234567'
  }
});</pre>
  </li>
</ol>
<strong>Verification:</strong> Google Ads → Conversions → your conversion → "Enhanced Conversions" column should show "Active".`,
            es: `<strong>Enhanced Conversions</strong> es una función de Google Ads que mejora la precisión del seguimiento de conversiones enviando datos de usuario hasheados (SHA256) junto con los eventos de conversión.<br><br>
<strong>Por qué es fundamental (post-iOS 14 y post-cookie):</strong>
<ul>
  <li>Recupera conversiones que el píxel client-side no captura</li>
  <li>Mejora la calidad de los datos para Smart Bidding</li>
  <li>Matching via hash SHA256 de email — sin exponer datos reales</li>
  <li>Puede aumentar conversiones rastreadas en un 20-40%</li>
</ul>
<strong>Implementación via GTM:</strong>
<ol>
  <li><strong>Habilitar en Google Ads:</strong> Herramientas → Conversiones → Configuración → Activar "Enhanced Conversions" → Aceptar términos</li>
  <li><strong>En GTM — configurar variables de usuario:</strong> Crear variables de Capa de Datos para email, phone_number, first_name, last_name, address</li>
  <li><strong>Configurar la tag de conversión con Enhanced Conversions:</strong> En la tag de conversión de Google Ads → expandir "Enhanced Conversions" → Activar → Mapear campos</li>
  <li><strong>En el dataLayer del sitio (página de confirmación):</strong>
    <pre style="background:#0a0c10;padding:10px;border-radius:6px;font-size:0.82em">dataLayer.push({
  'event': 'purchase',
  'transaction_id': 'ORDER-12345',
  'enhanced_conversion_data': {
    'email': 'usuario@email.com',
    'phone_number': '+5491112345678'
  }
});</pre>
  </li>
</ol>`,
          },
          tags: ['Enhanced-Conversions', 'Google-Ads', 'SHA256', 'GTM', 'DataLayer', 'iOS14', 'cookieless'],
        },
        {
          q: { pt: 'Como estruturar e implementar uma solução completa de rastreamento de e-commerce com GA4, Google Ads e Meta?', en: 'How to structure and implement a complete e-commerce tracking solution with GA4, Google Ads and Meta?', es: '¿Cómo estructurar e implementar una solución completa de seguimiento de e-commerce con GA4, Google Ads y Meta?' },
          a: {
            pt: `<strong>Arquitetura completa de tracking para e-commerce:</strong><br><br>
<strong>Diagrama de fluxo:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Site / Plataforma (Shopify, VTEX, WooCommerce)
    ↓ dataLayer (eventos padronizados)
GTM Web Container (client-side)
    ├── GA4 Config Tag (All Pages)
    ├── GA4 Event Tags (purchase, add_to_cart, etc.)
    ├── Google Ads Conversion (purchase com Enhanced Conversions)
    ├── Meta Pixel (purchase, AddToCart, ViewContent)
    └── Floodlight CM360 (se aplicável)
    ↓ envia eventos para
GTM Server Container (server-side)
    ├── GA4 → BigQuery (dados raw)
    ├── Meta CAPI (deduplicado com event_id)
    └── Google Enhanced Conversions (email hash)</pre>

<strong>Etapa 1 — DataLayer padronizado na plataforma:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">// Página de produto (view_item)
dataLayer.push({
  event: 'view_item',
  ecommerce: {
    currency: 'BRL',
    value: 299.90,
    items: [{
      item_id: 'SKU-001',
      item_name: 'Produto X',
      category: 'Eletrônicos',
      brand: 'Marca Y',
      price: 299.90,
      quantity: 1
    }]
  }
});

// Página de confirmação (purchase)
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'ORDER-12345', // ÚNICO — fundamental para deduplicação
    value: 299.90,
    shipping: 15.00,
    tax: 0,
    currency: 'BRL',
    items: [{ item_id: 'SKU-001', item_name: 'Produto X', price: 299.90, quantity: 1 }]
  },
  enhanced_conversion_data: {
    email: 'comprador@email.com',    // para Enhanced Conversions
    phone_number: '+5511999999999'
  },
  fbp: '{{Cookie _fbp}}',           // para Meta deduplicação
  fbc: '{{Cookie _fbc}}',
  event_id: 'ORDER-12345-purchase'  // MESMA ID no pixel e no CAPI → deduplicação
});</pre>

<strong>Etapa 2 — Tags no GTM Web:</strong>
<ul>
  <li>GA4 purchase event com todos os parâmetros de ecommerce</li>
  <li>Google Ads Conversion com Enhanced Conversions (email + phone hash)</li>
  <li>Meta Pixel Purchase com fbp, fbc e event_id</li>
  <li>Floodlight Sales (se campanha via CM360/DV360)</li>
</ul>
<strong>Etapa 3 — GTM Server para CAPI e BigQuery:</strong>
<ul>
  <li>Meta CAPI com os mesmos parâmetros + event_id idêntico ao pixel (deduplicação automática)</li>
  <li>GA4 → BigQuery para análise de dados raw (sem sampling)</li>
</ul>
<strong>Etapa 4 — Verificação por plataforma:</strong>
<ul>
  <li>GA4: DebugView em tempo real</li>
  <li>Google Ads: Tag Assistant + Google Ads Dashboard conversões</li>
  <li>Meta: Pixel Helper + Events Manager (check event match quality)</li>
  <li>CM360: Tag Debugger + Floodlight Activity status</li>
</ul>
<strong>Regra de ouro:</strong> o <code>transaction_id</code> / <code>order_id</code> deve ser <strong>único, imutável e consistente</strong> em todas as plataformas — é a chave para deduplicação e reconciliação de dados.`,
            en: `<strong>Complete tracking architecture for e-commerce:</strong><br><br>
<strong>Flow diagram:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Site / Platform (Shopify, VTEX, WooCommerce)
    ↓ dataLayer (standardized events)
GTM Web Container (client-side)
    ├── GA4 Config Tag (All Pages)
    ├── GA4 Event Tags (purchase, add_to_cart, etc.)
    ├── Google Ads Conversion (purchase with Enhanced Conversions)
    ├── Meta Pixel (purchase, AddToCart, ViewContent)
    └── Floodlight CM360 (if applicable)
    ↓ sends events to
GTM Server Container (server-side)
    ├── GA4 → BigQuery (raw data)
    ├── Meta CAPI (deduplicated with event_id)
    └── Google Enhanced Conversions (email hash)</pre>

<strong>Key dataLayer example (purchase page):</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'ORDER-12345', // UNIQUE — essential for deduplication
    value: 299.90,
    currency: 'USD',
    items: [{ item_id: 'SKU-001', item_name: 'Product X', price: 299.90, quantity: 1 }]
  },
  enhanced_conversion_data: { email: 'buyer@email.com', phone_number: '+15551234567' },
  event_id: 'ORDER-12345-purchase' // SAME ID in pixel and CAPI → deduplication
});</pre>

<strong>Golden rule:</strong> the <code>transaction_id</code> must be <strong>unique, immutable and consistent</strong> across all platforms — it's the key for deduplication and data reconciliation.`,
            es: `<strong>Arquitectura completa de tracking para e-commerce:</strong><br><br>
<strong>Diagrama de flujo:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">Sitio / Plataforma (Shopify, VTEX, WooCommerce)
    ↓ dataLayer (eventos estandarizados)
GTM Web Container (client-side)
    ├── GA4 Config Tag (All Pages)
    ├── GA4 Event Tags (purchase, add_to_cart, etc.)
    ├── Google Ads Conversion (con Enhanced Conversions)
    ├── Meta Pixel (purchase, AddToCart, ViewContent)
    └── Floodlight CM360 (si aplica)
    ↓ envía eventos a
GTM Server Container (server-side)
    ├── Meta CAPI (deduplicado con event_id)
    └── Google Enhanced Conversions (hash de email)</pre>

<strong>DataLayer en la página de confirmación:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:0.85em">dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'ORDER-12345', // ÚNICO — fundamental para deduplicación
    value: 299.90,
    currency: 'BRL'
  },
  enhanced_conversion_data: {
    email: 'comprador@email.com',
    phone_number: '+5491112345678'
  },
  event_id: 'ORDER-12345-purchase' // MISMA ID en píxel y CAPI → deduplicación
});</pre>

<strong>Regla de oro:</strong> el <code>transaction_id</code> debe ser <strong>único, inmutable y consistente</strong> en todas las plataformas.`,
          },
          tags: ['e-commerce', 'GA4', 'GTM', 'Meta-CAPI', 'Enhanced-Conversions', 'DataLayer', 'deduplicação', 'tracking'],
        },
        {
          q: { pt: 'Como configurar um PMP Deal ID no DV360 e garantir que o inventário está sendo comprado corretamente?', en: 'How to configure a PMP Deal ID in DV360 and ensure inventory is being bought correctly?', es: '¿Cómo configurar un PMP Deal ID en DV360 y garantizar que el inventario se está comprando correctamente?' },
          a: {
            pt: `<strong>O que é um Deal ID e como é criado:</strong>
<ul>
  <li>Um Deal ID é um identificador único gerado pelo SSP/Publisher que representa um acordo de compra específico (PMP, Preferred Deal ou PG)</li>
  <li>O publisher configura o deal no SSP deles (GAM, Magnite, Pubmatic, etc.) e envia o Deal ID para o comprador</li>
  <li>O comprador configura o Deal ID no DSP (DV360) para que o sistema reconheça e priorize o inventário</li>
</ul>
<strong>Fluxo de configuração de PMP no DV360:</strong><br><br>
<strong>Etapa 1 — Receber o Deal ID do Publisher/SSP:</strong>
<ul>
  <li>O publisher envia por e-mail ou via plataforma: Deal ID, nome do deal, floor price, datas, formatos disponíveis e SSP de origem</li>
  <li>Ex: Deal ID = <code>DX-123456789</code>, SSP: Magnite, floor: R$30 CPM, formato: 300x250 + 728x90, período: Jan/2025</li>
</ul>
<strong>Etapa 2 — Configurar no DV360:</strong>
<ol>
  <li>DV360 → Advertiser → <strong>Inventory</strong> → <strong>My Inventory</strong></li>
  <li>Clique em <strong>"Add Deal"</strong></li>
  <li>Preencha:
    <ul>
      <li><strong>Deal ID:</strong> exatamente como fornecido pelo publisher (case-sensitive em alguns SSPs)</li>
      <li><strong>SSP:</strong> selecionar o SSP correto (Magnite, Pubmatic, Index Exchange, etc.)</li>
      <li><strong>Deal Name:</strong> nome interno para identificação</li>
      <li><strong>CPM negociado:</strong> (para Preferred Deal ou PG)</li>
    </ul>
  </li>
  <li>Salvar — aguardar sync com o SSP (pode levar até 24h)</li>
</ol>
<strong>Etapa 3 — Associar o Deal ao Line Item:</strong>
<ol>
  <li>No Line Item do DV360 → <strong>Inventory Source</strong></li>
  <li>Selecione <strong>"Specific Deals"</strong> em vez de Open Auction</li>
  <li>Buscar o deal pelo nome ou ID → Adicionar</li>
  <li>Para PMP: o sistema ainda participa do leilão — configure um CPM bid competitivo acima do floor</li>
  <li>Para PG: o sistema garante o volume contratado — configure a impressão cap e o CPM acordado</li>
</ol>
<strong>Diagnóstico quando o deal não está entregando:</strong>
<ul>
  <li><strong>Deal Status no DV360:</strong> verificar se está "Winning bids" ou "Eligible". Se "No matching impressions" → possível problema de targeting ou formatos incompatíveis</li>
  <li><strong>Verificar floor price:</strong> se seu bid está abaixo do floor → aumentar CPM</li>
  <li><strong>Confirmar com o publisher:</strong> o Deal ID está ativo no SSP deles? As datas estão corretas?</li>
  <li><strong>Targeting conflito:</strong> se o Line Item tem geo targeting restritivo que não inclui a audiência do deal</li>
  <li><strong>Deal report no DV360:</strong> Reporting → Inventory → "Deals" → filtrar pelo Deal ID para ver impressões bid e won</li>
</ul>`,
            en: `<strong>What is a Deal ID and how it's created:</strong>
<ul>
  <li>A Deal ID is a unique identifier generated by the SSP/Publisher that represents a specific purchase agreement (PMP, Preferred Deal or PG)</li>
  <li>Publisher configures the deal in their SSP (GAM, Magnite, Pubmatic, etc.) and sends the Deal ID to the buyer</li>
  <li>Buyer configures the Deal ID in the DSP (DV360) so the system recognizes and prioritizes the inventory</li>
</ul>
<strong>PMP configuration flow in DV360:</strong><br><br>
<strong>Step 1 — Receive Deal ID from Publisher/SSP:</strong>
<ul>
  <li>Publisher sends by email or via platform: Deal ID, deal name, floor price, dates, available formats and origin SSP</li>
</ul>
<strong>Step 2 — Configure in DV360:</strong>
<ol>
  <li>DV360 → Advertiser → <strong>Inventory</strong> → <strong>My Inventory</strong></li>
  <li>Click <strong>"Add Deal"</strong></li>
  <li>Fill in: Deal ID (exactly as provided — case-sensitive in some SSPs), SSP, Deal Name, negotiated CPM</li>
  <li>Save — wait for SSP sync (up to 24h)</li>
</ol>
<strong>Step 3 — Associate Deal with Line Item:</strong>
<ol>
  <li>In DV360 Line Item → <strong>Inventory Source</strong></li>
  <li>Select <strong>"Specific Deals"</strong> instead of Open Auction</li>
  <li>Search deal by name or ID → Add</li>
  <li>For PMP: set competitive CPM bid above floor</li>
  <li>For PG: configure impression cap and agreed CPM</li>
</ol>
<strong>Diagnosis when deal isn't delivering:</strong>
<ul>
  <li>Check Deal Status in DV360: "No matching impressions" → targeting or format mismatch</li>
  <li>Check floor price: if bid is below floor → increase CPM</li>
  <li>Confirm with publisher: is the Deal ID active in their SSP?</li>
  <li>Targeting conflict: overly restrictive geo targeting</li>
  <li>Deal report in DV360: Reporting → Inventory → "Deals" → filter by Deal ID</li>
</ul>`,
            es: `<strong>Qué es un Deal ID y cómo se crea:</strong>
<ul>
  <li>Un Deal ID es un identificador único generado por el SSP/Publisher que representa un acuerdo de compra específico</li>
  <li>El publisher configura el deal en su SSP y envía el Deal ID al comprador</li>
  <li>El comprador configura el Deal ID en el DSP (DV360)</li>
</ul>
<strong>Flujo de configuración de PMP en DV360:</strong><br><br>
<strong>Etapa 1 — Recibir el Deal ID del Publisher/SSP:</strong>
<ul>
  <li>El publisher envía por email: Deal ID, nombre del deal, precio mínimo, fechas, formatos disponibles y SSP de origen</li>
</ul>
<strong>Etapa 2 — Configurar en DV360:</strong>
<ol>
  <li>DV360 → Advertiser → <strong>Inventory</strong> → <strong>My Inventory</strong></li>
  <li>Haz clic en <strong>"Add Deal"</strong></li>
  <li>Completa: Deal ID (exactamente como fue proporcionado — case-sensitive en algunos SSPs), SSP, Deal Name, CPM negociado</li>
  <li>Guardar — esperar sincronización con el SSP (hasta 24h)</li>
</ol>
<strong>Etapa 3 — Asociar el Deal al Line Item:</strong>
<ol>
  <li>En el Line Item → <strong>Inventory Source</strong></li>
  <li>Selecciona <strong>"Specific Deals"</strong> en lugar de Open Auction</li>
  <li>Buscar el deal por nombre o ID → Agregar</li>
  <li>Para PMP: configurar CPM bid competitivo sobre el floor</li>
</ol>
<strong>Diagnóstico cuando el deal no está entregando:</strong>
<ul>
  <li>Verificar Deal Status en DV360: "No matching impressions" → posible problema de targeting o formatos incompatibles</li>
  <li>Verificar floor price: si tu bid está por debajo del floor → aumentar CPM</li>
  <li>Confirmar con el publisher: ¿el Deal ID está activo en su SSP?</li>
  <li>Deal report en DV360: Reporting → Inventory → "Deals" → filtrar por Deal ID</li>
</ul>`,
          },
          tags: ['PMP', 'Deal-ID', 'DV360', 'SSP', 'Magnite', 'programático', 'inventário', 'troubleshooting'],
        },
      ],
    },
  ],
};

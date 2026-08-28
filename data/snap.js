// © 2025 AdOps Interview Kit — Todos os direitos reservados. Reprodução proibida.
// Módulo Snapchat Ads — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['snap'] = {
  icon: '👻',
  name: { pt: 'Snapchat Ads', en: 'Snapchat Ads', es: 'Snapchat Ads' },
  desc: {
    pt: 'Plataforma de publicidade do Snapchat — alcance único entre Gen Z com formatos imersivos e AR.',
    en: "Snapchat's advertising platform — unique reach among Gen Z with immersive formats and AR.",
    es: 'Plataforma publicitaria de Snapchat — alcance único entre Gen Z con formatos inmersivos y AR.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'Qual a hierarquia de uma conta no Snapchat Ads Manager e quais os formatos principais?',
            en: 'What is the account hierarchy in Snapchat Ads Manager and what are the main formats?',
            es: '¿Cuál es la jerarquía de una cuenta en Snapchat Ads Manager y cuáles son los formatos principales?',
          },
          a: {
            pt: `<strong>Hierarquia no Snapchat Ads Manager:</strong>
<ul>
  <li><strong>Ad Account:</strong> contém o billing, Snap Pixel e toda a estrutura de campanhas.</li>
  <li><strong>Campaign:</strong> define o objetivo (Awareness, Consideration, Conversions, App Installs, Lead Generation, Traffic, Catalog Sales). Opcionalmente usa Campaign Budget Optimization.</li>
  <li><strong>Ad Set:</strong> define audience, placements, budget, bid, schedule e otimização de entrega.</li>
  <li><strong>Ad (Creative):</strong> o anúncio em si — associa o creative ao Ad Set.</li>
</ul>
<strong>Formatos principais:</strong>
<ul>
  <li><strong>Snap Ads:</strong> vídeo vertical fullscreen 9:16, até 3 minutos. O usuário pode deslizar para cima (swipe-up) para uma URL, app store ou long-form video.</li>
  <li><strong>Story Ads:</strong> série de Snaps exibida na seção Discover. Formato de coleção de conteúdo.</li>
  <li><strong>Collection Ads:</strong> tile de produtos clicáveis abaixo de um vídeo. Ideal para e-commerce.</li>
  <li><strong>Lens Ads (AR):</strong> filtros de realidade aumentada patrocinados — maior engajamento mas maior custo.</li>
  <li><strong>Filter Ads:</strong> overlay gráfico geolocalizado disponível para usuários em uma área específica.</li>
  <li><strong>Dynamic Ads:</strong> anúncios gerados automaticamente a partir de um catálogo de produtos.</li>
</ul>`,
            en: `<strong>Hierarchy in Snapchat Ads Manager:</strong>
<ul>
  <li><strong>Ad Account:</strong> contains billing, Snap Pixel and the entire campaign structure.</li>
  <li><strong>Campaign:</strong> defines the objective (Awareness, Consideration, Conversions, App Installs, Lead Generation, Traffic, Catalog Sales). Optionally uses Campaign Budget Optimization.</li>
  <li><strong>Ad Set:</strong> defines audience, placements, budget, bid, schedule and delivery optimization.</li>
  <li><strong>Ad (Creative):</strong> the ad itself — associates the creative with the Ad Set.</li>
</ul>
<strong>Main formats:</strong>
<ul>
  <li><strong>Snap Ads:</strong> fullscreen vertical 9:16 video, up to 3 minutes. User can swipe up to a URL, app store or long-form video.</li>
  <li><strong>Story Ads:</strong> series of Snaps displayed in the Discover section. Content collection format.</li>
  <li><strong>Collection Ads:</strong> clickable product tiles below a video. Ideal for e-commerce.</li>
  <li><strong>Lens Ads (AR):</strong> sponsored augmented reality filters — highest engagement but higher cost.</li>
  <li><strong>Filter Ads:</strong> geolocated graphic overlay available to users in a specific area.</li>
  <li><strong>Dynamic Ads:</strong> automatically generated ads from a product catalog.</li>
</ul>`,
            es: `<strong>Jerarquía en Snapchat Ads Manager:</strong>
<ul>
  <li><strong>Ad Account:</strong> contiene el billing, Snap Pixel y toda la estructura de campañas.</li>
  <li><strong>Campaign:</strong> define el objetivo (Awareness, Consideration, Conversions, App Installs, Lead Generation, Traffic, Catalog Sales). Opcionalmente usa Campaign Budget Optimization.</li>
  <li><strong>Ad Set:</strong> define audiencia, placements, budget, bid, schedule y optimización de entrega.</li>
  <li><strong>Ad (Creative):</strong> el anuncio en sí — asocia el creativo al Ad Set.</li>
</ul>
<strong>Formatos principales:</strong>
<ul>
  <li><strong>Snap Ads:</strong> video vertical fullscreen 9:16, hasta 3 minutos. El usuario puede deslizar hacia arriba (swipe-up) a una URL, app store o video long-form.</li>
  <li><strong>Story Ads:</strong> serie de Snaps mostrada en la sección Discover. Formato de colección de contenido.</li>
  <li><strong>Collection Ads:</strong> tiles de productos clicables debajo de un video. Ideal para e-commerce.</li>
  <li><strong>Lens Ads (AR):</strong> filtros de realidad aumentada patrocinados — mayor engagement pero mayor costo.</li>
  <li><strong>Filter Ads:</strong> overlay gráfico geolocalizado disponible para usuarios en un área específica.</li>
  <li><strong>Dynamic Ads:</strong> anuncios generados automáticamente a partir de un catálogo de productos.</li>
</ul>`,
          },
          tags: ['hierarquia', 'formatos', 'Snap-Ads', 'AR', 'Collection'],
        },
        {
          q: {
            pt: 'O que é o Snap Pixel e quais as opções de targeting disponíveis no Snapchat?',
            en: 'What is the Snap Pixel and what targeting options are available in Snapchat?',
            es: '¿Qué es el Snap Pixel y qué opciones de targeting están disponibles en Snapchat?',
          },
          a: {
            pt: `<strong>Snap Pixel</strong> é o código de tracking do Snapchat instalado no site para medir conversões e criar audiências.<br><br>
<strong>Eventos padrão:</strong> PAGE_VIEW, VIEW_CONTENT, ADD_TO_CART, ADD_TO_WISHLIST, INITIATE_CHECKOUT, ADD_BILLING, PURCHASE, SIGN_UP, SEARCH, SUBSCRIBE, COMPLETE_TUTORIAL.<br><br>
<strong>Implementação:</strong> via código direto ou GTM (template disponível).<br><br>
<strong>Opções de targeting:</strong>
<ul>
  <li><strong>Demográfico:</strong> idade (13+), gênero, localização, idioma, dispositivo/OS</li>
  <li><strong>Snap Audience Match:</strong> upload de lista de emails/phones para matching com usuários do Snapchat</li>
  <li><strong>Pixel Custom Audiences:</strong> visitantes do site segmentados por evento ou URL</li>
  <li><strong>Lookalike Audiences:</strong> baseadas em Custom Audiences — 1%, 2.5%, 5% de similaridade</li>
  <li><strong>Predefined Audiences (Snap Lifestyle Categories):</strong> segmentos de interesse predefinidos pelo Snapchat baseados em comportamento na plataforma</li>
  <li><strong>Third-party segments:</strong> dados de parceiros (Nielsen, Experian, Oracle) disponíveis no Audience Manager</li>
  <li><strong>Geofencing:</strong> segmentar usuários em localização geográfica específica (relevante para Lens/Filter Ads)</li>
</ul>
<strong>Diferenciais do Snapchat:</strong> a plataforma é fortemente focada em Gen Z (13-24 anos) e tem menor custo por impression que Meta em alguns mercados, com menos competição de anunciantes.`,
            en: `<strong>Snap Pixel</strong> is Snapchat's tracking code installed on the site to measure conversions and create audiences.<br><br>
<strong>Standard events:</strong> PAGE_VIEW, VIEW_CONTENT, ADD_TO_CART, ADD_TO_WISHLIST, INITIATE_CHECKOUT, ADD_BILLING, PURCHASE, SIGN_UP, SEARCH, SUBSCRIBE, COMPLETE_TUTORIAL.<br><br>
<strong>Implementation:</strong> via direct code or GTM (template available).<br><br>
<strong>Targeting options:</strong>
<ul>
  <li><strong>Demographic:</strong> age (13+), gender, location, language, device/OS</li>
  <li><strong>Snap Audience Match:</strong> email/phone list upload for matching with Snapchat users</li>
  <li><strong>Pixel Custom Audiences:</strong> site visitors segmented by event or URL</li>
  <li><strong>Lookalike Audiences:</strong> based on Custom Audiences — 1%, 2.5%, 5% similarity</li>
  <li><strong>Predefined Audiences (Snap Lifestyle Categories):</strong> interest segments predefined by Snapchat based on platform behavior</li>
  <li><strong>Third-party segments:</strong> data from partners (Nielsen, Experian, Oracle) available in Audience Manager</li>
  <li><strong>Geofencing:</strong> targeting users in a specific geographic location (relevant for Lens/Filter Ads)</li>
</ul>
<strong>Snapchat differentials:</strong> the platform is strongly focused on Gen Z (13-24 years) and has lower cost per impression than Meta in some markets, with less advertiser competition.`,
            es: `<strong>Snap Pixel</strong> es el código de tracking de Snapchat instalado en el sitio para medir conversiones y crear audiencias.<br><br>
<strong>Eventos estándar:</strong> PAGE_VIEW, VIEW_CONTENT, ADD_TO_CART, ADD_TO_WISHLIST, INITIATE_CHECKOUT, ADD_BILLING, PURCHASE, SIGN_UP, SEARCH, SUBSCRIBE, COMPLETE_TUTORIAL.<br><br>
<strong>Implementación:</strong> via código directo o GTM (template disponible).<br><br>
<strong>Opciones de targeting:</strong>
<ul>
  <li><strong>Demográfico:</strong> edad (13+), género, ubicación, idioma, dispositivo/OS</li>
  <li><strong>Snap Audience Match:</strong> carga de lista de emails/teléfonos para matching con usuarios de Snapchat</li>
  <li><strong>Pixel Custom Audiences:</strong> visitantes del sitio segmentados por evento o URL</li>
  <li><strong>Lookalike Audiences:</strong> basadas en Custom Audiences — 1%, 2.5%, 5% de similitud</li>
  <li><strong>Predefined Audiences (Snap Lifestyle Categories):</strong> segmentos de interés predefinidos por Snapchat basados en comportamiento en la plataforma</li>
  <li><strong>Third-party segments:</strong> datos de partners (Nielsen, Experian, Oracle) disponibles en Audience Manager</li>
  <li><strong>Geofencing:</strong> segmentar usuarios en una ubicación geográfica específica (relevante para Lens/Filter Ads)</li>
</ul>
<strong>Diferenciales de Snapchat:</strong> la plataforma está fuertemente orientada a Gen Z (13-24 años) y tiene menor costo por impresión que Meta en algunos mercados, con menos competencia de anunciantes.`,
          },
          tags: ['Snap-Pixel', 'targeting', 'Gen-Z', 'geofencing', 'lookalike'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'Quando faz sentido incluir Snapchat em um media plan? Como justificar para o cliente?',
            en: 'When does it make sense to include Snapchat in a media plan? How to justify to the client?',
            es: '¿Cuándo tiene sentido incluir Snapchat en un media plan? ¿Cómo justificar al cliente?',
          },
          a: {
            pt: `<strong>Snapchat faz sentido quando:</strong>
<ul>
  <li><strong>Público-alvo é Gen Z/Millennial (13-34):</strong> Snapchat tem penetração alta nessa faixa que muitas vezes não é alcançada eficientemente por Meta ou Google</li>
  <li><strong>Produto de consumo de massa ou lifestyle:</strong> moda, beleza, entretenimento, food, bebidas, games — categorias com alto engajamento na plataforma</li>
  <li><strong>Objetivo de awareness ou consideração:</strong> Snapchat brilha em awareness (CPM competitivo) e formatos de alto impacto (AR Lenses)</li>
  <li><strong>Estratégia de diversificação de media:</strong> reduzir dependência de Meta/Google e testar novos canais</li>
  <li><strong>Lançamento de produto com experiência imersiva:</strong> AR Lens pode criar uma experiência única de produto (ex: "prove" óculos virtualmente)</li>
</ul>
<strong>Como justificar para o cliente:</strong>
<ul>
  <li>Dados de reach incremental: Snapchat alcança usuários que não veriam o anúncio em Meta/Google</li>
  <li>Benchmark de CPM: em alguns mercados, CPM 20-40% menor que Meta para o mesmo público</li>
  <li>Propor como teste: alocar 10-15% do budget social para Snapchat por 4-8 semanas e comparar resultados</li>
</ul>
<strong>Quando NÃO incluir:</strong> público 45+, B2B, mercados onde Snapchat tem penetração baixa, ou quando o budget total não comporta um terceiro canal com volume mínimo para aprendizado.`,
            en: `<strong>Snapchat makes sense when:</strong>
<ul>
  <li><strong>Target audience is Gen Z/Millennial (13-34):</strong> Snapchat has high penetration in this range that is often not efficiently reached by Meta or Google</li>
  <li><strong>Mass consumer product or lifestyle:</strong> fashion, beauty, entertainment, food, beverages, games — categories with high engagement on the platform</li>
  <li><strong>Awareness or consideration objective:</strong> Snapchat excels at awareness (competitive CPM) and high-impact formats (AR Lenses)</li>
  <li><strong>Media diversification strategy:</strong> reduce dependence on Meta/Google and test new channels</li>
  <li><strong>Product launch with immersive experience:</strong> AR Lens can create a unique product experience (e.g. "try on" glasses virtually)</li>
</ul>
<strong>How to justify to the client:</strong>
<ul>
  <li>Incremental reach data: Snapchat reaches users who wouldn't see the ad on Meta/Google</li>
  <li>CPM benchmark: in some markets, CPM 20-40% lower than Meta for the same audience</li>
  <li>Propose as a test: allocate 10-15% of social budget to Snapchat for 4-8 weeks and compare results</li>
</ul>
<strong>When NOT to include:</strong> 45+ audience, B2B, markets where Snapchat has low penetration, or when the total budget doesn't support a third channel with minimum volume for learning.`,
            es: `<strong>Snapchat tiene sentido cuando:</strong>
<ul>
  <li><strong>Público objetivo es Gen Z/Millennial (13-34):</strong> Snapchat tiene alta penetración en este rango que muchas veces no es alcanzado eficientemente por Meta o Google</li>
  <li><strong>Producto de consumo masivo o lifestyle:</strong> moda, belleza, entretenimiento, food, bebidas, games — categorías con alto engagement en la plataforma</li>
  <li><strong>Objetivo de awareness o consideración:</strong> Snapchat brilla en awareness (CPM competitivo) y formatos de alto impacto (AR Lenses)</li>
  <li><strong>Estrategia de diversificación de medios:</strong> reducir dependencia de Meta/Google y probar nuevos canales</li>
  <li><strong>Lanzamiento de producto con experiencia inmersiva:</strong> AR Lens puede crear una experiencia única de producto (ej: "probar" lentes virtualmente)</li>
</ul>
<strong>Cómo justificar al cliente:</strong>
<ul>
  <li>Datos de reach incremental: Snapchat alcanza usuarios que no verían el anuncio en Meta/Google</li>
  <li>Benchmark de CPM: en algunos mercados, CPM 20-40% menor que Meta para el mismo público</li>
  <li>Proponer como prueba: asignar 10-15% del presupuesto social a Snapchat por 4-8 semanas y comparar resultados</li>
</ul>
<strong>Cuándo NO incluir:</strong> público 45+, B2B, mercados donde Snapchat tiene baja penetración, o cuando el presupuesto total no soporta un tercer canal con volumen mínimo para aprendizaje.`,
          },
          tags: ['media-plan', 'Gen-Z', 'justificativa', 'AR', 'diversificação'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como usar AR Lens Ads do Snapchat em uma campanha de lançamento de produto? Quais os critérios de sucesso?',
            en: 'How to use Snapchat AR Lens Ads in a product launch campaign? What are the success criteria?',
            es: '¿Cómo usar los AR Lens Ads de Snapchat en una campaña de lanzamiento de producto? ¿Cuáles son los criterios de éxito?',
          },
          a: {
            pt: `<strong>AR Lens Ads — o formato premium do Snapchat:</strong><br><br>
<strong>Tipos de Lens:</strong>
<ul>
  <li><strong>Face Lens:</strong> sobrepõe elementos no rosto do usuário (maquiagem virtual, acessórios, personagens)</li>
  <li><strong>World Lens:</strong> posiciona objetos 3D no ambiente ao redor do usuário (ex: carro em frente à casa)</li>
  <li><strong>Body Lens:</strong> rastreia o corpo inteiro (roupas virtuais, transformações)</li>
</ul>
<strong>Como funciona em um lançamento:</strong>
<ol>
  <li><strong>Desenvolvimento da Lens:</strong> via Lens Studio (plataforma gratuita do Snapchat) ou agências parceiras certificadas. Desenvolvimento leva 3-6 semanas — planejar com antecedência.</li>
  <li><strong>Distribuição:</strong>
    <ul>
      <li>Lens attachment em Snap Ads (usuário acessa ao deslizar)</li>
      <li>Snapcode compartilhável (QR code para acesso à Lens)</li>
      <li>Featured in Lens Explorer (inventário comprado separadamente)</li>
    </ul>
  </li>
  <li><strong>Amplificação:</strong> parceria com creators que usem a Lens — UGC orgânico amplifica o investimento pago</li>
</ol>
<strong>Critérios de sucesso:</strong>
<ul>
  <li><strong>Plays:</strong> número de vezes que a Lens foi aberta</li>
  <li><strong>Playtime:</strong> tempo médio de uso (meta: >10s = alta intenção)</li>
  <li><strong>Shares:</strong> Snaps enviados com a Lens — indicador de earned media</li>
  <li><strong>Attach Rate:</strong> % de usuários que abriram o Snap Ad e acessaram a Lens</li>
  <li><strong>Brand Lift:</strong> Snapchat oferece estudos de lift para Lens Ads com investimento acima de threshold</li>
</ul>
<strong>Custo típico:</strong> CPM para Lens Ads é significativamente maior que Snap Ads padrão, mas o engajamento e tempo de exposição compensam para lançamentos de impacto.`,
            en: `<strong>AR Lens Ads — Snapchat's premium format:</strong><br><br>
<strong>Lens types:</strong>
<ul>
  <li><strong>Face Lens:</strong> overlays elements on the user's face (virtual makeup, accessories, characters)</li>
  <li><strong>World Lens:</strong> positions 3D objects in the user's environment (e.g. car in front of house)</li>
  <li><strong>Body Lens:</strong> tracks the full body (virtual clothing, transformations)</li>
</ul>
<strong>How it works in a launch:</strong>
<ol>
  <li><strong>Lens development:</strong> via Lens Studio (Snapchat's free platform) or certified partner agencies. Development takes 3-6 weeks — plan ahead.</li>
  <li><strong>Distribution:</strong>
    <ul>
      <li>Lens attachment in Snap Ads (user accesses by swiping)</li>
      <li>Shareable Snapcode (QR code to access the Lens)</li>
      <li>Featured in Lens Explorer (separately purchased inventory)</li>
    </ul>
  </li>
  <li><strong>Amplification:</strong> partner with creators who use the Lens — organic UGC amplifies the paid investment</li>
</ol>
<strong>Success criteria:</strong>
<ul>
  <li><strong>Plays:</strong> number of times the Lens was opened</li>
  <li><strong>Playtime:</strong> average usage time (target: >10s = high intent)</li>
  <li><strong>Shares:</strong> Snaps sent with the Lens — earned media indicator</li>
  <li><strong>Attach Rate:</strong> % of users who opened the Snap Ad and accessed the Lens</li>
  <li><strong>Brand Lift:</strong> Snapchat offers lift studies for Lens Ads with investment above threshold</li>
</ul>
<strong>Typical cost:</strong> CPM for Lens Ads is significantly higher than standard Snap Ads, but engagement and exposure time compensate for high-impact launches.`,
            es: `<strong>AR Lens Ads — el formato premium de Snapchat:</strong><br><br>
<strong>Tipos de Lens:</strong>
<ul>
  <li><strong>Face Lens:</strong> superpone elementos en el rostro del usuario (maquillaje virtual, accesorios, personajes)</li>
  <li><strong>World Lens:</strong> posiciona objetos 3D en el entorno del usuario (ej: auto frente a la casa)</li>
  <li><strong>Body Lens:</strong> rastrea el cuerpo completo (ropa virtual, transformaciones)</li>
</ul>
<strong>Cómo funciona en un lanzamiento:</strong>
<ol>
  <li><strong>Desarrollo de la Lens:</strong> via Lens Studio (plataforma gratuita de Snapchat) o agencias partners certificadas. El desarrollo tarda 3-6 semanas — planificar con anticipación.</li>
  <li><strong>Distribución:</strong>
    <ul>
      <li>Lens attachment en Snap Ads (usuario accede al deslizar)</li>
      <li>Snapcode compartible (código QR para acceder a la Lens)</li>
      <li>Featured in Lens Explorer (inventario comprado por separado)</li>
    </ul>
  </li>
  <li><strong>Amplificación:</strong> alianza con creators que usen la Lens — UGC orgánico amplifica la inversión pagada</li>
</ol>
<strong>Criterios de éxito:</strong>
<ul>
  <li><strong>Plays:</strong> número de veces que se abrió la Lens</li>
  <li><strong>Playtime:</strong> tiempo promedio de uso (meta: >10s = alta intención)</li>
  <li><strong>Shares:</strong> Snaps enviados con la Lens — indicador de earned media</li>
  <li><strong>Attach Rate:</strong> % de usuarios que abrieron el Snap Ad y accedieron a la Lens</li>
  <li><strong>Brand Lift:</strong> Snapchat ofrece estudios de lift para Lens Ads con inversión por encima del umbral</li>
</ul>
<strong>Costo típico:</strong> el CPM para Lens Ads es significativamente mayor que los Snap Ads estándar, pero el engagement y el tiempo de exposición compensan para lanzamientos de impacto.`,
          },
          tags: ['AR', 'Lens', 'lançamento', 'UGC', 'Brand-Lift'],
        },
      ],
    },
  ],
};

// ── APPEND: perguntas adicionais Snapchat ──
;(function(){
const d = window.__adopsData['snap'];
// adiciona ao easy
d.tiers[0].questions.push(
  {
    q:{pt:'Como criar e instalar o Snap Pixel?',en:'How to create and install the Snap Pixel?',es:'¿Cómo crear e instalar el Snap Pixel?'},
    a:{
      pt:`O <strong>Snap Pixel</strong> rastreia ações no site após exposição a anúncios no Snapchat — instalação, eventos, conversões.<br><br>
<strong>Criar o Pixel:</strong>
<ol>
  <li>Acesse <strong>Snap Ads Manager → Assets → Snap Pixel</strong></li>
  <li>Clique em <strong>"Create Pixel"</strong> → copie o Pixel ID</li>
</ol>
<strong>Instalar — 3 métodos:</strong>
<ul>
  <li><strong>Via GTM:</strong> Tag Custom HTML com o código base do Snap Pixel. Disparo: All Pages.</li>
  <li><strong>Manual:</strong> colar o snippet no &lt;head&gt; de todas as páginas</li>
  <li><strong>Shopify/WooCommerce:</strong> integração nativa — inserir o Pixel ID nas configurações da loja</li>
</ul>
<strong>Eventos padrão:</strong> PAGE_VIEW, VIEW_CONTENT, ADD_TO_CART, PURCHASE (com price e currency), SIGN_UP, SEARCH, START_CHECKOUT.<br><br>
<strong>Snap Conversions API (CAPI):</strong> disponível para complementar o Pixel — envia eventos do servidor diretamente ao Snap, recuperando conversões perdidas por ad blockers e iOS 14. Configurar em: Snap Ads Manager → Assets → Snap Pixel → Conversions API.`,
      en:`The <strong>Snap Pixel</strong> tracks site actions after exposure to Snapchat ads.<br><br>
<strong>Create Pixel:</strong> Snap Ads Manager → Assets → Snap Pixel → Create Pixel → copy Pixel ID.<br><br>
<strong>Install:</strong> Via GTM (Custom HTML tag, All Pages trigger), Manual (&lt;head&gt; snippet), or native Shopify/WooCommerce integration.<br><br>
<strong>Standard events:</strong> PAGE_VIEW, VIEW_CONTENT, ADD_TO_CART, PURCHASE (with price and currency), SIGN_UP, SEARCH, START_CHECKOUT.<br><br>
<strong>Snap Conversions API:</strong> available to complement the Pixel — sends server events directly to Snap, recovering conversions lost by ad blockers and iOS 14.`,
      es:`El <strong>Snap Pixel</strong> rastrea acciones en el sitio tras la exposición a anuncios en Snapchat.<br><br>
<strong>Crear:</strong> Snap Ads Manager → Assets → Snap Pixel → Create Pixel → copiar Pixel ID.<br><br>
<strong>Instalar:</strong> Via GTM, Manual o integración nativa Shopify/WooCommerce.<br><br>
<strong>Eventos estándar:</strong> PAGE_VIEW, VIEW_CONTENT, ADD_TO_CART, PURCHASE, SIGN_UP, SEARCH, START_CHECKOUT.<br><br>
<strong>Snap Conversions API:</strong> disponible para complementar el Pixel — envía eventos del servidor directamente a Snap.`,
    },
    tags:['Snap-Pixel','GTM','CAPI','Snapchat','instalação','conversão'],
  },
  {
    q:{pt:'Quais são os formatos de anúncio do Snapchat e como cada um funciona?',en:'What are Snapchat ad formats and how does each work?',es:'¿Cuáles son los formatos de anuncio de Snapchat y cómo funciona cada uno?'},
    a:{
      pt:`<strong>Formatos de anúncio do Snapchat:</strong><br><br>
<strong>Snap Ads (Single Image ou Video):</strong>
<ul>
  <li>Anúncio vertical full-screen (9:16) exibido entre Stories de amigos</li>
  <li>Duração: até 3 minutos (recomendado: 3-10 segundos para maior retenção)</li>
  <li>Swipe up: usuário arrasta para cima → abre URL, app store, AR Lens ou outro destino</li>
</ul>
<strong>Collection Ads:</strong>
<ul>
  <li>Vídeo ou imagem hero + 4 miniaturas de produto clicáveis abaixo</li>
  <li>Ideal para e-commerce — usuário vê o produto no contexto e pode explorar mais sem sair do Snap</li>
</ul>
<strong>Story Ads:</strong>
<ul>
  <li>Série de 3-20 Snaps que aparecem no feed "Discover" como um tile patrocinado</li>
  <li>Usuário toca no tile → abre a sequência de anúncios</li>
  <li>Formato nativo do Snapchat — alta imersão</li>
</ul>
<strong>AR Lenses (Sponsored Lenses):</strong>
<ul>
  <li>Filtros de realidade aumentada patrocinados — usuário "experimenta" o produto virtualmente</li>
  <li>Muito usado em beleza (maquiagem), moda (óculos, chapéus) e entretenimento (filmes)</li>
  <li>Alto engajamento e compartilhamento orgânico (usuário cria conteúdo com a marca)</li>
</ul>
<strong>Filters (Geofilters):</strong>
<ul>
  <li>Overlay de imagem que aparece como opção ao tirar Snap em área geográfica específica</li>
  <li>Ideal para eventos, lojas físicas, lançamentos regionais</li>
</ul>
<strong>Commercials:</strong>
<ul>
  <li>Vídeo de 6 segundos não pulável exibido dentro do conteúdo Snap Originals e Shows</li>
  <li>Garantia de viewability — audiência premium e engajada</li>
</ul>`,
      en:`<strong>Snapchat ad formats:</strong><br><br>
<strong>Snap Ads (Single Image or Video):</strong> vertical full-screen (9:16) ad shown between friends' Stories. Up to 3 minutes (recommended: 3-10 seconds). Swipe up to open URL, app store, AR Lens.<br><br>
<strong>Collection Ads:</strong> hero video/image + 4 clickable product thumbnails below. Ideal for e-commerce.<br><br>
<strong>Story Ads:</strong> series of 3-20 Snaps appearing in Discover feed as a sponsored tile. High immersion.<br><br>
<strong>AR Lenses (Sponsored Lenses):</strong> branded augmented reality filters. High in beauty, fashion, entertainment. High engagement and organic sharing.<br><br>
<strong>Filters (Geofilters):</strong> image overlay appearing in specific geographic area. Ideal for events, physical stores.<br><br>
<strong>Commercials:</strong> non-skippable 6-second video in Snap Originals. Viewability guaranteed.`,
      es:`<strong>Formatos de anuncio de Snapchat:</strong><br><br>
<strong>Snap Ads:</strong> anuncio vertical full-screen (9:16) mostrado entre Stories. Hasta 3 minutos. Swipe up para abrir URL, tienda de apps, AR Lens.<br><br>
<strong>Collection Ads:</strong> video/imagen hero + 4 miniaturas de producto clicables. Ideal para e-commerce.<br><br>
<strong>Story Ads:</strong> serie de 3-20 Snaps en el feed Discover como tile patrocinado. Alta inmersión.<br><br>
<strong>AR Lenses:</strong> filtros de realidad aumentada patrocinados. Alto en belleza, moda, entretenimiento.<br><br>
<strong>Filters (Geofilters):</strong> overlay de imagen en área geográfica específica.<br><br>
<strong>Commercials:</strong> video no omitible de 6 segundos en Snap Originals.`,
    },
    tags:['Snapchat','formatos','AR-Lens','Story-Ads','Collection','Geofilter','Commercials'],
  }
);
// adiciona ao mid
d.tiers[1].questions.push(
  {
    q:{pt:'Como funciona o targeting no Snapchat Ads e quais as opções de audiência?',en:'How does targeting work in Snapchat Ads and what are the audience options?',es:'¿Cómo funciona el targeting en Snapchat Ads y cuáles son las opciones de audiencia?'},
    a:{
      pt:`O Snapchat tem audiência predominantemente jovem (13-34 anos) com targeting baseado em dados próprios da plataforma + parceiros.<br><br>
<strong>Tipos de targeting:</strong>
<ul>
  <li><strong>Demográfico:</strong> localização, faixa etária, gênero, idioma, renda (EUA), educação</li>
  <li><strong>Interests & Behaviors:</strong> categorias de interesse baseadas no comportamento dentro do Snap (conteúdo que consome, apps que usa, compras realizadas). Categorias: Gaming, Fashion, Beauty, Sports, Technology, Food, Travel, etc.</li>
  <li><strong>Snap Audience Match (Custom Audiences):</strong>
    <ul>
      <li>Customer List: upload de emails ou números de telefone hasheados</li>
      <li>Pixel Custom Audience: visitantes do site via Snap Pixel</li>
      <li>App Custom Audience: usuários do app via SDK do Snap</li>
      <li>Engagement Audience: quem interagiu com anúncios anteriores</li>
    </ul>
  </li>
  <li><strong>Lookalike Audiences:</strong> expansão baseada em Custom Audience semente (1-10% da população)</li>
  <li><strong>Lifestyle Categories:</strong> segmentos predefinidos da Snap (ex: "Beauty Enthusiasts", "Gamers", "Sports Fans")</li>
  <li><strong>3rd Party Audiences:</strong> parceiros de dados como Nielsen, Oracle Data Cloud, Experian (disponível em alguns países)</li>
</ul>
<strong>Particularidade do Snap:</strong> forte em <strong>contextual targeting por horário e situação</strong> — targeting de "Snapchatters que estão assistindo TV simultaneamente" ou "Snapchatters em modo de descoberta" são opções exclusivas da plataforma.`,
      en:`Snapchat has a predominantly young audience (13-34) with targeting based on platform's own data + partners.<br><br>
<strong>Targeting types:</strong>
<ul>
  <li><strong>Demographic:</strong> location, age range, gender, language, income (US), education</li>
  <li><strong>Interests & Behaviors:</strong> interest categories based on Snap behavior. Categories: Gaming, Fashion, Beauty, Sports, Technology, Food, Travel, etc.</li>
  <li><strong>Snap Audience Match (Custom Audiences):</strong> Customer List, Pixel Custom Audience, App Custom Audience, Engagement Audience</li>
  <li><strong>Lookalike Audiences:</strong> expansion based on Custom Audience seed (1-10% of population)</li>
  <li><strong>Lifestyle Categories:</strong> predefined Snap segments</li>
  <li><strong>3rd Party Audiences:</strong> data partners like Nielsen, Oracle Data Cloud, Experian</li>
</ul>
<strong>Snap particularity:</strong> strong in <strong>contextual targeting by time and situation</strong> — targeting "Snapchatters watching TV simultaneously" or "Snapchatters in discovery mode" are exclusive platform options.`,
      es:`Snapchat tiene una audiencia predominantemente joven (13-34 años) con targeting basado en datos propios de la plataforma + socios.<br><br>
<strong>Tipos de targeting:</strong>
<ul>
  <li><strong>Demográfico:</strong> ubicación, franja etaria, género, idioma</li>
  <li><strong>Interests & Behaviors:</strong> categorías de interés basadas en el comportamiento dentro de Snap</li>
  <li><strong>Snap Audience Match:</strong> Customer List, Pixel Custom Audience, App Custom Audience, Engagement Audience</li>
  <li><strong>Lookalike Audiences:</strong> expansión basada en Custom Audience semilla</li>
  <li><strong>Lifestyle Categories:</strong> segmentos predefinidos de Snap</li>
</ul>`,
    },
    tags:['Snapchat','targeting','Custom-Audience','Lookalike','Lifestyle','interesse'],
  },
  {
    q:{pt:'Como estruturar uma campanha de performance no Snapchat para e-commerce?',en:'How to structure a performance campaign on Snapchat for e-commerce?',es:'¿Cómo estructurar una campaña de performance en Snapchat para e-commerce?'},
    a:{
      pt:`Snapchat tem público jovem com alta intenção de compra em categorias de moda, beleza e lifestyle — mas requer estratégia diferente de Meta/Google.<br><br>
<strong>Estrutura de campanha recomendada:</strong>
<ol>
  <li><strong>Objetivo:</strong> "Product Catalog Sales" para Dynamic Ads ou "Website Conversions" para landing page</li>
  <li><strong>Criativo:</strong> vídeo vertical 9:16, primeiros 2 segundos DEVEM prender atenção (sem introdução). Mostrar produto em uso real, não em estúdio. Texto na tela é essencial (usuário assiste sem som).</li>
  <li><strong>Audiência de prospecting:</strong> Lookalike de compradores (1-3%) + Interest targeting em categoria do produto</li>
  <li><strong>Audiência de retargeting:</strong> Pixel Audience de visitantes de produto (últimos 14-30 dias) com Dynamic Product Ads</li>
</ol>
<strong>Dynamic Ads no Snap (equivalente ao Dynamic Catalog do Meta):</strong>
<ul>
  <li>Conectar catálogo de produtos (CSV feed ou Shopify integration)</li>
  <li>Snap gera criativos automaticamente com imagem, título e preço do produto</li>
  <li>Retargeting: mostra exatamente o produto que o usuário visualizou no site</li>
</ul>
<strong>Métricas de performance Snap:</strong>
<ul>
  <li>Swipe Up Rate (SUR): % que deslizou para cima → benchmark &gt;1% é bom</li>
  <li>Story Opens Rate: % que abriu a Story completa</li>
  <li>ROAS: receita atribuída / gasto. Janela de atribuição: 1 dia para swipe, 28 dias para view.</li>
  <li>CPP (Cost Per Purchase): custo por compra atribuída</li>
</ul>
<strong>Boas práticas:</strong>
<ul>
  <li>UGC (User Generated Content) performa melhor que produção profissional no Snap</li>
  <li>Testar múltiplos criativos — a plataforma tem alta velocidade de fadiga criativa</li>
  <li>Hora do dia importa: pico de uso 10h-14h e 19h-23h (principalmente mobile)</li>
</ul>`,
      en:`Snapchat has a young audience with high purchase intent in fashion, beauty and lifestyle — but requires different strategy than Meta/Google.<br><br>
<strong>Recommended campaign structure:</strong>
<ol>
  <li><strong>Objective:</strong> "Product Catalog Sales" for Dynamic Ads or "Website Conversions" for landing page</li>
  <li><strong>Creative:</strong> vertical video 9:16, first 2 seconds MUST grab attention. Show product in real use. On-screen text essential (users watch without sound).</li>
  <li><strong>Prospecting audience:</strong> Lookalike of buyers (1-3%) + Interest targeting in product category</li>
  <li><strong>Retargeting audience:</strong> Pixel Audience of product visitors (last 14-30 days) with Dynamic Product Ads</li>
</ol>
<strong>Dynamic Ads on Snap:</strong> connect product catalog (CSV feed or Shopify integration). Snap auto-generates creatives with product image, title and price.<br><br>
<strong>Snap performance metrics:</strong>
<ul>
  <li>Swipe Up Rate (SUR): % who swiped up → benchmark &gt;1% is good</li>
  <li>ROAS: attributed revenue / spend. Attribution window: 1 day swipe, 28 days view.</li>
  <li>CPP (Cost Per Purchase)</li>
</ul>`,
      es:`Snapchat tiene una audiencia joven con alta intención de compra en moda, belleza y lifestyle.<br><br>
<strong>Estructura de campaña recomendada:</strong>
<ol>
  <li><strong>Objetivo:</strong> "Product Catalog Sales" para Dynamic Ads o "Website Conversions"</li>
  <li><strong>Creativo:</strong> video vertical 9:16, los primeros 2 segundos DEBEN captar la atención. Texto en pantalla esencial.</li>
  <li><strong>Audiencia de prospecting:</strong> Lookalike de compradores (1-3%) + Interest targeting</li>
  <li><strong>Audiencia de retargeting:</strong> Pixel Audience de visitantes de producto con Dynamic Product Ads</li>
</ol>
<strong>Métricas de performance Snap:</strong>
<ul>
  <li>Swipe Up Rate (SUR): benchmark &gt;1% es bueno</li>
  <li>ROAS: ingresos atribuidos / gasto. Ventana de atribución: 1 día swipe, 28 días view.</li>
</ul>`,
    },
    tags:['Snapchat','performance','Dynamic-Ads','ROAS','catálogo','UGC','retargeting'],
  }
);
// adiciona ao hard
d.tiers[2].questions.push(
  {
    q:{pt:'Como o Snapchat AR pode ser usado como estratégia de marketing e quais os casos de uso mais eficazes?',en:'How can Snapchat AR be used as a marketing strategy and what are the most effective use cases?',es:'¿Cómo se puede usar Snapchat AR como estrategia de marketing y cuáles son los casos de uso más efectivos?'},
    a:{
      pt:`O <strong>AR (Augmented Reality) do Snapchat</strong> é a funcionalidade mais diferenciada da plataforma — mais de 250 milhões de usuários interagem com AR diariamente, criando oportunidades únicas para marcas.<br><br>
<strong>Tipos de AR no Snapchat para marcas:</strong>
<ul>
  <li><strong>Sponsored Lenses:</strong> filtros AR patrocinados disponíveis para todos os usuários na câmera. O usuário cria conteúdo com a marca e compartilha. Alto viral potential.</li>
  <li><strong>Try-On Lenses:</strong> provador virtual. Usuário "experimenta" produto virtualmente em tempo real:
    <ul>
      <li>Maquiagem: batom, sombra, base na face do usuário</li>
      <li>Óculos: frame se encaixa no rosto</li>
      <li>Chapéus, acessórios: posicionamento na cabeça</li>
      <li>Tênis: via câmera apontada para os pés</li>
    </ul>
  </li>
  <li><strong>World Lenses (Object AR):</strong> colocar objeto 3D no ambiente do usuário. Ex: novo carro na garagem, sofá na sala, personagem de game no quarto.</li>
  <li><strong>Shoppable AR:</strong> Lens com botão de compra integrado — usuário experimenta o produto e pode comprar sem sair do Snap</li>
</ul>
<strong>Resultados de campanhas AR (dados Snap):</strong>
<ul>
  <li>Tempo médio de interação com Sponsored Lens: 20+ segundos (vs. 2-3s de banner)</li>
  <li>Share rate: usuários compartilham Lenses organicamente, gerando impressões earned media</li>
  <li>Try-On Lenses aumentam intenção de compra em 2.4x vs. anúncio estático (estudo Snap/Nielsen)</li>
</ul>
<strong>Como criar uma Sponsored Lens:</strong>
<ul>
  <li>Via <strong>Snap AR Studio</strong> (Lens Studio) — software gratuito de desenvolvimento de AR</li>
  <li>Ou via parceiros criativos certificados da Snap</li>
  <li>Tempo de desenvolvimento: 2-6 semanas dependendo da complexidade</li>
  <li>Custo: compra por impressões de Lens. Budget mínimo varia — campanhas nacionais podem exigir US$300k+.</li>
</ul>
<strong>Métricas de AR:</strong> Lens Opens, Swipes (usuário compartilhou), Play Time, Reach, Earned Impressions (compartilhamentos orgânicos gerados).`,
      en:`Snapchat <strong>AR (Augmented Reality)</strong> is the platform's most differentiated feature — over 250 million users interact with AR daily.<br><br>
<strong>AR types for brands:</strong>
<ul>
  <li><strong>Sponsored Lenses:</strong> branded AR filters available to all users. User creates content with brand and shares. High viral potential.</li>
  <li><strong>Try-On Lenses:</strong> virtual fitting room. User "tries on" products virtually: makeup, glasses, hats, sneakers (via camera pointed at feet).</li>
  <li><strong>World Lenses:</strong> place 3D object in user's environment. E.g.: new car in garage, sofa in living room.</li>
  <li><strong>Shoppable AR:</strong> Lens with integrated purchase button — user tries product and can buy without leaving Snap</li>
</ul>
<strong>AR campaign results (Snap data):</strong>
<ul>
  <li>Average interaction time with Sponsored Lens: 20+ seconds (vs. 2-3s for banner)</li>
  <li>Try-On Lenses increase purchase intent by 2.4x vs. static ad (Snap/Nielsen study)</li>
</ul>
<strong>AR metrics:</strong> Lens Opens, Swipes (user shared), Play Time, Reach, Earned Impressions.`,
      es:`El <strong>AR (Realidad Aumentada) de Snapchat</strong> es la funcionalidad más diferenciada de la plataforma — más de 250 millones de usuarios interactúan con AR diariamente.<br><br>
<strong>Tipos de AR para marcas:</strong>
<ul>
  <li><strong>Sponsored Lenses:</strong> filtros AR patrocinados disponibles para todos los usuarios. Alto potencial viral.</li>
  <li><strong>Try-On Lenses:</strong> probador virtual. Maquillaje, gafas, sombreros, zapatillas.</li>
  <li><strong>World Lenses:</strong> colocar objeto 3D en el entorno del usuario.</li>
  <li><strong>Shoppable AR:</strong> Lens con botón de compra integrado</li>
</ul>
<strong>Resultados de campañas AR:</strong> tiempo de interacción promedio con Sponsored Lens: 20+ segundos. Try-On Lenses aumentan la intención de compra en 2.4x.<br><br>
<strong>Métricas de AR:</strong> Lens Opens, Swipes, Play Time, Reach, Earned Impressions.`,
    },
    tags:['Snapchat','AR','Sponsored-Lens','Try-On','Shoppable','AR-Studio','viral'],
  }
);
})();

;(function(){
const d = window.__adopsData['snap'];
d.tiers[0].questions.push(
  {
    q:{pt:'Passo a passo: como criar uma campanha no Snapchat Ads Manager?',en:'Step by step: how to create a campaign in Snapchat Ads Manager?',es:'Paso a paso: ¿cómo crear una campaña en Snapchat Ads Manager?'},
    a:{
      pt:`<strong>Pré-requisitos:</strong>
<ul>
  <li>Conta de negócios no Snap (<strong>ads.snapchat.com</strong>)</li>
  <li>Perfil público do Snapchat (para o anúncio ter identidade)</li>
  <li>Snap Pixel instalado (para conversão e retargeting)</li>
  <li>Criativo vertical 9:16 (imagem ou vídeo)</li>
</ul>
<strong>Estrutura do Snap Ads:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">Campaign (objetivo + budget da campanha)
  └── Ad Set (targeting + budget + período + placement)
        └── Ad (criativo)</pre>
<strong>Passo 1 — Criar Campaign:</strong>
<ol>
  <li>Acesse Snap Ads Manager → <strong>+ Criar campanha</strong></li>
  <li>Objetivo: Awareness (Reconhecimento de marca, Alcance), Consideração (Tráfego, Engajamento, Instalações de app, Visualizações de vídeo, Geração de leads), Conversões (Conversões no site, Vendas de catálogo)</li>
  <li>Nome da campanha</li>
  <li>Budget da campanha (opcional — pode definir por Ad Set)</li>
</ol>
<strong>Passo 2 — Criar Ad Set:</strong>
<ol>
  <li>Nome: ex: <code>AdSet_Prospecting_18-24_BR</code></li>
  <li>Placements: automático (Stories, Feed, Spotlight) ou manual</li>
  <li><strong>Audience:</strong>
    <ul>
      <li>Localização: Brasil</li>
      <li>Idade: 13-17, 18-24, 25-34, etc. (Snap tem público jovem)</li>
      <li>Gênero</li>
      <li>Interesses e comportamentos</li>
      <li>Custom Audiences (Snap Pixel visitors, Customer List)</li>
    </ul>
  </li>
  <li>Orçamento: diário ou total</li>
  <li>Período: início e fim</li>
  <li>Otimização: Impressões, Swipe Ups, Visualizações de vídeo, Conversões (pixel)</li>
  <li>Lance: automático (recomendado) ou manual</li>
</ol>
<strong>Passo 3 — Criar Ad:</strong>
<ol>
  <li>Formato: Single Image, Single Video, Story, Collection</li>
  <li>Upload do criativo (9:16 obrigatório)</li>
  <li>Headline: até 34 caracteres</li>
  <li>Brand name: nome da marca</li>
  <li>Call to action: "Deslize para cima", "Comprar", "Saiba mais"</li>
  <li>URL de destino</li>
</ol>
<strong>Passo 4 — Publicar:</strong>
<ol>
  <li>Revisar → <strong>Publicar</strong></li>
  <li>Aprovação: até 24h (geralmente mais rápido)</li>
  <li>Monitorar nas primeiras horas: impressões e Swipe-Up Rate</li>
</ol>`,
      en:`<strong>Snapchat Ads structure:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">Campaign → Ad Set (targeting + budget + placement) → Ad (creative)</pre>
<strong>Step 1 — Create Campaign:</strong> objective (Awareness/Consideration/Conversions), name, optional campaign budget.<br><br>
<strong>Step 2 — Create Ad Set:</strong>
<ol>
  <li>Placements: automatic or manual</li>
  <li>Audience: location, age (13+), gender, interests, Custom Audiences</li>
  <li>Budget: daily or total</li>
  <li>Optimization: Impressions, Swipe Ups, Video Views, Conversions (pixel)</li>
  <li>Bid: automatic (recommended) or manual</li>
</ol>
<strong>Step 3 — Create Ad:</strong> format (Single Image/Video/Story/Collection), upload 9:16 creative, headline (34 chars), brand name, CTA, destination URL.<br><br>
<strong>Step 4 — Publish:</strong> Review → Publish. Approval: up to 24h. Monitor first hours: impressions and Swipe-Up Rate.`,
      es:`<strong>Estructura de Snap Ads:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">Campaign → Ad Set (targeting + presupuesto + placement) → Ad (creativo)</pre>
<strong>Paso 2 — Crear Ad Set:</strong>
<ol>
  <li>Placements: automático o manual</li>
  <li>Audiencia: ubicación, edad (13+), género, intereses, Custom Audiences</li>
  <li>Presupuesto: diario o total</li>
  <li>Optimización: Impresiones, Swipe Ups, Vistas de video, Conversiones</li>
</ol>
<strong>Paso 3 — Crear Ad:</strong> formato (Single Image/Video/Story/Collection), subir creativo 9:16, titular (34 caracteres), nombre de marca, CTA, URL de destino.<br><br>
<strong>Paso 4 — Publicar:</strong> Revisar → Publicar. Aprobación: hasta 24h.`,
    },
    tags:['Snapchat','passo-a-passo','campanha','Ad-Set','9:16','Swipe-Up','Pixel','Ads-Manager'],
  }
);
})();

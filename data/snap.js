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

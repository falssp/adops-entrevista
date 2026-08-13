// Módulo Snap — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['snap'] = {
  icon: '👻',
  name: { pt: 'Snapchat Ads', en: 'Snapchat Ads', es: 'Snapchat Ads' },
  desc: {
    pt: 'Plataforma focada em Gen Z com formatos únicos de AR e Stories verticais.',
    en: 'Gen Z-focused platform with unique AR formats and vertical Stories.',
    es: 'Plataforma enfocada en Gen Z con formatos únicos de AR y Stories verticales.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'Quais são os principais formatos de anúncio no Snapchat e quando usar cada um?',
            en: 'What are the main ad formats on Snapchat and when to use each?',
            es: '¿Cuáles son los principales formatos de anuncio en Snapchat y cuándo usar cada uno?',
          },
          a: {
            pt: `<ul>
  <li><strong>Snap Ads (Single Image/Video):</strong> full screen entre Stories — formato mais versátil. Swipe up para destino. Objetivo: Awareness, Traffic, Conversões.</li>
  <li><strong>Story Ads:</strong> série de 3–20 Snaps acessíveis via tile no Discover — bom para narrativa de marca e conteúdo editorial.</li>
  <li><strong>Collection Ads:</strong> vídeo + 4 produtos abaixo — e-commerce e catálogos dinâmicos.</li>
  <li><strong>Dynamic Ads:</strong> integração com catálogo de produtos para retargeting automático.</li>
  <li><strong>AR Lenses:</strong> filtros de realidade aumentada — maior engajamento, custo mais alto (reserva de mídia). Ideal para lançamentos de produto e experiências de marca.</li>
  <li><strong>Filters:</strong> overlay geolocalizado — eventos presenciais, pontos de venda específicos.</li>
  <li><strong>Commercials:</strong> vídeo de 6s não-pulável dentro do Snapchat Shows — garante visualização completa.</li>
</ul>
<strong>Audiência:</strong> Snap é mais forte para 13–34 anos. Para 35+, ROI tende a ser menor vs. Meta.`,
            en: `<ul>
  <li><strong>Snap Ads (Single Image/Video):</strong> full screen between Stories — most versatile format. Swipe up to destination. Objective: Awareness, Traffic, Conversions.</li>
  <li><strong>Story Ads:</strong> series of 3–20 Snaps accessible via Discover tile — good for brand storytelling and editorial content.</li>
  <li><strong>Collection Ads:</strong> video + 4 products below — e-commerce and dynamic catalogs.</li>
  <li><strong>Dynamic Ads:</strong> product catalog integration for automatic retargeting.</li>
  <li><strong>AR Lenses:</strong> augmented reality filters — highest engagement, higher cost (media reservation). Ideal for product launches and brand experiences.</li>
  <li><strong>Filters:</strong> geolocated overlay — live events, specific points of sale.</li>
  <li><strong>Commercials:</strong> non-skippable 6s video within Snapchat Shows — guarantees full view.</li>
</ul>
<strong>Audience:</strong> Snap is strongest for ages 13–34. For 35+, ROI tends to be lower vs. Meta.`,
            es: `<ul>
  <li><strong>Snap Ads (Single Image/Video):</strong> full screen entre Stories — formato más versátil. Swipe up al destino. Objetivo: Awareness, Traffic, Conversiones.</li>
  <li><strong>Story Ads:</strong> serie de 3–20 Snaps accesibles via tile en Discover — bueno para narrativa de marca y contenido editorial.</li>
  <li><strong>Collection Ads:</strong> video + 4 productos abajo — e-commerce y catálogos dinámicos.</li>
  <li><strong>Dynamic Ads:</strong> integración con catálogo de productos para retargeting automático.</li>
  <li><strong>AR Lenses:</strong> filtros de realidad aumentada — mayor engagement, costo más alto (reserva de medios). Ideal para lanzamientos de producto y experiencias de marca.</li>
  <li><strong>Filters:</strong> overlay geolocalizado — eventos presenciales, puntos de venta específicos.</li>
  <li><strong>Commercials:</strong> video de 6s no saltable dentro de Snapchat Shows — garantiza visualización completa.</li>
</ul>
<strong>Audiencia:</strong> Snap es más fuerte para 13–34 años. Para 35+, el ROI tiende a ser menor vs. Meta.`,
          },
          tags: ['Snap', 'AR-Lens', 'Story-Ads', 'Gen-Z', 'formats'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'Como funciona o Snap Pixel e o Conversions API do Snapchat?',
            en: 'How does the Snap Pixel and Snapchat Conversions API work?',
            es: '¿Cómo funciona el Snap Pixel y el Conversions API de Snapchat?',
          },
          a: {
            pt: `<strong>Snap Pixel:</strong> tag JavaScript instalada no site para rastrear ações de usuários provenientes de anúncios Snap.<br><br>
<strong>Eventos padrão:</strong> PAGE_VIEW, VIEW_CONTENT, ADD_TO_CART, ADD_TO_WISHLIST, SIGN_UP, PURCHASE, START_CHECKOUT, SEARCH, SUBSCRIBE.<br><br>
<strong>Conversions API (CAPI):</strong> integração server-side que envia eventos diretamente para o Snap, sem depender do browser. Mesma lógica do Meta CAPI — necessário para cobrir usuários com ad blockers ou ITP.<br><br>
<strong>Deduplicação:</strong> usar <code>client_dedup_id</code> idêntico entre Pixel e CAPI para evitar contagem dupla.<br><br>
<strong>Snap Pixel Helper:</strong> extensão Chrome para validar disparos antes de ativar otimização de conversão.<br><br>
<strong>Advanced Conversions:</strong> recurso de hashing de dados de cliente (email, telefone) para melhorar o match rate de conversões — especialmente relevante pós-iOS 14.5.`,
            en: `<strong>Snap Pixel:</strong> JavaScript tag installed on the website to track actions from users coming from Snap ads.<br><br>
<strong>Standard events:</strong> PAGE_VIEW, VIEW_CONTENT, ADD_TO_CART, ADD_TO_WISHLIST, SIGN_UP, PURCHASE, START_CHECKOUT, SEARCH, SUBSCRIBE.<br><br>
<strong>Conversions API (CAPI):</strong> server-side integration that sends events directly to Snap, without relying on the browser. Same logic as Meta CAPI — necessary to cover users with ad blockers or ITP.<br><br>
<strong>Deduplication:</strong> use identical <code>client_dedup_id</code> between Pixel and CAPI to avoid double counting.<br><br>
<strong>Snap Pixel Helper:</strong> Chrome extension to validate fires before enabling conversion optimization.<br><br>
<strong>Advanced Conversions:</strong> customer data hashing feature (email, phone) to improve conversion match rate — especially relevant post-iOS 14.5.`,
            es: `<strong>Snap Pixel:</strong> tag JavaScript instalada en el sitio para rastrear acciones de usuarios provenientes de anuncios de Snap.<br><br>
<strong>Eventos estándar:</strong> PAGE_VIEW, VIEW_CONTENT, ADD_TO_CART, ADD_TO_WISHLIST, SIGN_UP, PURCHASE, START_CHECKOUT, SEARCH, SUBSCRIBE.<br><br>
<strong>Conversions API (CAPI):</strong> integración server-side que envía eventos directamente a Snap, sin depender del browser. Misma lógica que Meta CAPI — necesario para cubrir usuarios con ad blockers o ITP.<br><br>
<strong>Deduplicación:</strong> usar <code>client_dedup_id</code> idéntico entre Pixel y CAPI para evitar conteo doble.<br><br>
<strong>Snap Pixel Helper:</strong> extensión Chrome para validar disparos antes de activar optimización de conversión.<br><br>
<strong>Advanced Conversions:</strong> función de hashing de datos de cliente (email, teléfono) para mejorar el match rate de conversiones — especialmente relevante post-iOS 14.5.`,
          },
          tags: ['Snap-pixel', 'CAPI', 'deduplication', 'Advanced-Conversions'],
        },
        {
          q: {
            pt: 'Quais são as opções de targeting de audience no Snapchat Ads Manager?',
            en: 'What are the audience targeting options in Snapchat Ads Manager?',
            es: '¿Cuáles son las opciones de targeting de audience en Snapchat Ads Manager?',
          },
          a: {
            pt: `<strong>Predefined Audiences (Snap Audiences):</strong>
<ul>
  <li><em>Demographics:</em> idade, gênero, idioma, localização</li>
  <li><em>Interests & Behaviors:</em> categorias de interesse baseadas em comportamento no app</li>
  <li><em>Lifestyle Categories:</em> segmentos pré-construídos pelo Snap (esporte, moda, gaming, etc.)</li>
</ul>
<strong>Custom Audiences:</strong>
<ul>
  <li><em>Customer List:</em> upload de hashed emails/phones (CRM)</li>
  <li><em>Pixel Custom Audience:</em> quem visitou páginas específicas ou realizou eventos</li>
  <li><em>App Custom Audience:</em> usuários do app que realizaram eventos in-app</li>
  <li><em>Engagement Audience:</em> quem interagiu com anúncios ou perfil Snap da marca</li>
</ul>
<strong>Lookalike Audiences:</strong> expansão similar a partir de qualquer Custom Audience (tamanho: 1%, 5% ou 10% do país).<br><br>
<strong>Third-party data:</strong> parceiros como Nielsen, Experian e Oracle disponíveis via Snap Audience Network para dados comportamentais e demográficos avançados.`,
            en: `<strong>Predefined Audiences (Snap Audiences):</strong>
<ul>
  <li><em>Demographics:</em> age, gender, language, location</li>
  <li><em>Interests & Behaviors:</em> interest categories based on in-app behavior</li>
  <li><em>Lifestyle Categories:</em> pre-built segments by Snap (sports, fashion, gaming, etc.)</li>
</ul>
<strong>Custom Audiences:</strong>
<ul>
  <li><em>Customer List:</em> hashed email/phone upload (CRM)</li>
  <li><em>Pixel Custom Audience:</em> who visited specific pages or completed events</li>
  <li><em>App Custom Audience:</em> app users who completed in-app events</li>
  <li><em>Engagement Audience:</em> who interacted with brand's Snap ads or profile</li>
</ul>
<strong>Lookalike Audiences:</strong> similar expansion from any Custom Audience (size: 1%, 5% or 10% of country).<br><br>
<strong>Third-party data:</strong> partners like Nielsen, Experian and Oracle available via Snap Audience Network for advanced behavioral and demographic data.`,
            es: `<strong>Predefined Audiences (Snap Audiences):</strong>
<ul>
  <li><em>Demographics:</em> edad, género, idioma, ubicación</li>
  <li><em>Interests & Behaviors:</em> categorías de interés basadas en comportamiento en la app</li>
  <li><em>Lifestyle Categories:</em> segmentos pre-construidos por Snap (deporte, moda, gaming, etc.)</li>
</ul>
<strong>Custom Audiences:</strong>
<ul>
  <li><em>Customer List:</em> upload de emails/teléfonos hasheados (CRM)</li>
  <li><em>Pixel Custom Audience:</em> quién visitó páginas específicas o realizó eventos</li>
  <li><em>App Custom Audience:</em> usuarios de la app que realizaron eventos in-app</li>
  <li><em>Engagement Audience:</em> quién interactuó con anuncios o perfil Snap de la marca</li>
</ul>
<strong>Lookalike Audiences:</strong> expansión similar a partir de cualquier Custom Audience (tamaño: 1%, 5% o 10% del país).<br><br>
<strong>Third-party data:</strong> partners como Nielsen, Experian y Oracle disponibles via Snap Audience Network para datos conductuales y demográficos avanzados.`,
          },
          tags: ['targeting', 'custom-audience', 'lookalike', 'third-party-data'],
        },
      ],
    },
  ],
};

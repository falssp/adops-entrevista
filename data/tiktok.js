// © 2025 AdOps Interview Kit — Todos os direitos reservados. Reprodução proibida.
// Módulo TikTok Ads — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['tiktok'] = {
  icon: '🎵',
  name: { pt: 'TikTok Ads', en: 'TikTok Ads', es: 'TikTok Ads' },
  desc: {
    pt: 'Plataforma de publicidade do TikTok — vídeo nativo de curta duração com alcance massivo entre audiências jovens.',
    en: 'TikTok advertising platform — short-form native video with massive reach among young audiences.',
    es: 'Plataforma publicitaria de TikTok — video nativo de formato corto con alcance masivo entre audiencias jóvenes.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'Qual a hierarquia de uma conta no TikTok Ads Manager?',
            en: 'What is the account hierarchy in TikTok Ads Manager?',
            es: '¿Cuál es la jerarquía de una cuenta en TikTok Ads Manager?',
          },
          a: {
            pt: `<ul>
  <li><strong>Ad Account:</strong> nível raiz — contém o billing, pixel e toda a estrutura de campanhas de um anunciante.</li>
  <li><strong>Campaign:</strong> define o objetivo (Awareness, Consideration, Conversion) e o budget global (Campaign Budget Optimization).</li>
  <li><strong>Ad Group:</strong> nível de targeting — define audience, placements (TikTok, Pangle, Global App Bundle), budget/bid, schedule e otimização de entrega.</li>
  <li><strong>Ad:</strong> o criativo em si — vídeo (obrigatório), copy, CTA e URL de destino.</li>
</ul>
<strong>Diferença-chave vs. Meta:</strong> no TikTok, o vídeo é o único formato de creative no feed principal. Imagens são permitidas apenas em alguns placements (Pangle). A plataforma é <strong>video-first por design</strong>.<br><br>
<strong>Placements principais:</strong>
<ul>
  <li>TikTok — feed principal (maior alcance)</li>
  <li>Pangle — Audience Network do TikTok (apps parceiros)</li>
  <li>Global App Bundle — inventário global de apps</li>
</ul>`,
            en: `<ul>
  <li><strong>Ad Account:</strong> root level — contains billing, pixel and the entire campaign structure for an advertiser.</li>
  <li><strong>Campaign:</strong> defines the objective (Awareness, Consideration, Conversion) and global budget (Campaign Budget Optimization).</li>
  <li><strong>Ad Group:</strong> targeting level — defines audience, placements (TikTok, Pangle, Global App Bundle), budget/bid, schedule and delivery optimization.</li>
  <li><strong>Ad:</strong> the creative itself — video (required), copy, CTA and destination URL.</li>
</ul>
<strong>Key difference vs. Meta:</strong> on TikTok, video is the only creative format in the main feed. Images are only allowed on some placements (Pangle). The platform is <strong>video-first by design</strong>.<br><br>
<strong>Main placements:</strong>
<ul>
  <li>TikTok — main feed (largest reach)</li>
  <li>Pangle — TikTok's Audience Network (partner apps)</li>
  <li>Global App Bundle — global app inventory</li>
</ul>`,
            es: `<ul>
  <li><strong>Ad Account:</strong> nivel raíz — contiene el billing, pixel y toda la estructura de campañas de un anunciante.</li>
  <li><strong>Campaign:</strong> define el objetivo (Awareness, Consideration, Conversion) y el budget global (Campaign Budget Optimization).</li>
  <li><strong>Ad Group:</strong> nivel de targeting — define audiencia, placements (TikTok, Pangle, Global App Bundle), budget/bid, schedule y optimización de entrega.</li>
  <li><strong>Ad:</strong> el creativo en sí — video (obligatorio), copy, CTA y URL de destino.</li>
</ul>
<strong>Diferencia clave vs. Meta:</strong> en TikTok, el video es el único formato de creativo en el feed principal. Las imágenes solo están permitidas en algunos placements (Pangle). La plataforma es <strong>video-first por diseño</strong>.<br><br>
<strong>Placements principales:</strong>
<ul>
  <li>TikTok — feed principal (mayor alcance)</li>
  <li>Pangle — Audience Network de TikTok (apps asociadas)</li>
  <li>Global App Bundle — inventario global de apps</li>
</ul>`,
          },
          tags: ['hierarquia', 'Ad-Group', 'placements', 'video'],
        },
        {
          q: {
            pt: 'O que é o TikTok Pixel e como ele se compara ao Meta Pixel?',
            en: 'What is the TikTok Pixel and how does it compare to the Meta Pixel?',
            es: '¿Qué es el TikTok Pixel y cómo se compara con el Meta Pixel?',
          },
          a: {
            pt: `<strong>TikTok Pixel</strong> é o código de tracking do TikTok instalado no site para medir conversões e alimentar a otimização das campanhas.<br><br>
<strong>Eventos padrão:</strong> ViewContent, AddToWishlist, AddToCart, InitiateCheckout, CompletePayment, PlaceAnOrder, Contact, Download, SubmitForm.<br><br>
<strong>Implementação:</strong> via código direto no site ou via GTM (template disponível na Gallery do GTM).<br><br>
<strong>Comparação TikTok Pixel vs. Meta Pixel:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Aspecto</th><th style="padding:6px">TikTok Pixel</th><th style="padding:6px">Meta Pixel</th></tr>
<tr><td style="padding:6px">Server-side</td><td style="padding:6px">TikTok Events API</td><td style="padding:6px">Conversions API (CAPI)</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Janela de atribuição</td><td style="padding:6px">7d clique / 1d view (padrão)</td><td style="padding:6px">7d clique / 1d view</td></tr>
<tr><td style="padding:6px">Audience creation</td><td style="padding:6px">Custom Audiences com pixel data</td><td style="padding:6px">Custom Audiences com pixel data</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Lookalike</td><td style="padding:6px">Sim (TikTok chama de "Lookalike")</td><td style="padding:6px">Sim</td></tr>
</table><br>
<strong>TikTok Events API:</strong> equivalente ao Meta CAPI — envia eventos direto do servidor para contornar ad blockers e limitações de cookies.`,
            en: `<strong>TikTok Pixel</strong> is TikTok's tracking code installed on the site to measure conversions and feed campaign optimization.<br><br>
<strong>Standard events:</strong> ViewContent, AddToWishlist, AddToCart, InitiateCheckout, CompletePayment, PlaceAnOrder, Contact, Download, SubmitForm.<br><br>
<strong>Implementation:</strong> via direct code on the site or via GTM (template available in GTM Gallery).<br><br>
<strong>TikTok Pixel vs. Meta Pixel comparison:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Aspect</th><th style="padding:6px">TikTok Pixel</th><th style="padding:6px">Meta Pixel</th></tr>
<tr><td style="padding:6px">Server-side</td><td style="padding:6px">TikTok Events API</td><td style="padding:6px">Conversions API (CAPI)</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Attribution window</td><td style="padding:6px">7d click / 1d view (default)</td><td style="padding:6px">7d click / 1d view</td></tr>
<tr><td style="padding:6px">Audience creation</td><td style="padding:6px">Custom Audiences with pixel data</td><td style="padding:6px">Custom Audiences with pixel data</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Lookalike</td><td style="padding:6px">Yes (TikTok calls it "Lookalike")</td><td style="padding:6px">Yes</td></tr>
</table><br>
<strong>TikTok Events API:</strong> equivalent to Meta CAPI — sends events directly from the server to bypass ad blockers and cookie limitations.`,
            es: `<strong>TikTok Pixel</strong> es el código de tracking de TikTok instalado en el sitio para medir conversiones y alimentar la optimización de campañas.<br><br>
<strong>Eventos estándar:</strong> ViewContent, AddToWishlist, AddToCart, InitiateCheckout, CompletePayment, PlaceAnOrder, Contact, Download, SubmitForm.<br><br>
<strong>Implementación:</strong> via código directo en el sitio o via GTM (template disponible en la Galería de GTM).<br><br>
<strong>Comparación TikTok Pixel vs. Meta Pixel:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Aspecto</th><th style="padding:6px">TikTok Pixel</th><th style="padding:6px">Meta Pixel</th></tr>
<tr><td style="padding:6px">Server-side</td><td style="padding:6px">TikTok Events API</td><td style="padding:6px">Conversions API (CAPI)</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Ventana de atribución</td><td style="padding:6px">7d clic / 1d view (por defecto)</td><td style="padding:6px">7d clic / 1d view</td></tr>
<tr><td style="padding:6px">Creación de audiencias</td><td style="padding:6px">Custom Audiences con datos de pixel</td><td style="padding:6px">Custom Audiences con datos de pixel</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Lookalike</td><td style="padding:6px">Sí (TikTok lo llama "Lookalike")</td><td style="padding:6px">Sí</td></tr>
</table><br>
<strong>TikTok Events API:</strong> equivalente al Meta CAPI — envía eventos directamente desde el servidor para evadir ad blockers y limitaciones de cookies.`,
          },
          tags: ['pixel', 'tracking', 'Events-API', 'conversão'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'Quais as melhores práticas para criar conteúdo de alta performance no TikTok Ads?',
            en: 'What are the best practices for creating high-performance content in TikTok Ads?',
            es: '¿Cuáles son las mejores prácticas para crear contenido de alto rendimiento en TikTok Ads?',
          },
          a: {
            pt: `<strong>"Don't Make Ads, Make TikToks"</strong> — o mantra oficial da plataforma resume a filosofia:<br><br>
<strong>Princípios de criativo de alta performance:</strong>
<ul>
  <li><strong>Hook nos primeiros 3 segundos:</strong> o TikTok tem skip rate altíssimo. A abertura define se o usuário fica. Comece com movimento, pergunta direta ou dado surpreendente — nunca com logo.</li>
  <li><strong>Formato vertical 9:16:</strong> sempre nativo. Vídeos horizontais recortados parecem "anúncio de banner" e performam pior.</li>
  <li><strong>Duração ideal:</strong> 15-30 segundos para campanhas de performance. Até 60s para awareness com storytelling.</li>
  <li><strong>Som:</strong> 80%+ dos usuários assistem com som — use música trending ou narração em voz over. Legenda é obrigatória para quem assiste sem som.</li>
  <li><strong>UGC e tom autêntico:</strong> vídeos que parecem criados por usuários (low production value intencional) costumam superar produções polidas.</li>
  <li><strong>CTA explícito:</strong> falar o que você quer que o usuário faça ("Clique no link da bio", "Saiba mais", "Compre agora").</li>
  <li><strong>Tendências:</strong> usar sounds trending, formatos virais (duet, stitch, trend challenges) aumenta descoberta orgânica.</li>
</ul>
<strong>Creative testing:</strong> TikTok recomenda mínimo 3-5 variações de creative por Ad Group para o algoritmo otimizar.`,
            en: `<strong>"Don't Make Ads, Make TikToks"</strong> — the platform's official mantra summarizes the philosophy:<br><br>
<strong>High-performance creative principles:</strong>
<ul>
  <li><strong>Hook in the first 3 seconds:</strong> TikTok has a very high skip rate. The opening determines whether the user stays. Start with movement, a direct question or a surprising fact — never with a logo.</li>
  <li><strong>Vertical 9:16 format:</strong> always native. Cropped horizontal videos look like "banner ads" and perform worse.</li>
  <li><strong>Ideal duration:</strong> 15-30 seconds for performance campaigns. Up to 60s for awareness with storytelling.</li>
  <li><strong>Sound:</strong> 80%+ of users watch with sound — use trending music or voiceover narration. Subtitles are required for those watching without sound.</li>
  <li><strong>UGC and authentic tone:</strong> videos that look user-generated (intentional low production value) often outperform polished productions.</li>
  <li><strong>Explicit CTA:</strong> say what you want the user to do ("Click the link in bio", "Learn more", "Shop now").</li>
  <li><strong>Trends:</strong> using trending sounds, viral formats (duet, stitch, trend challenges) increases organic discovery.</li>
</ul>
<strong>Creative testing:</strong> TikTok recommends a minimum of 3-5 creative variations per Ad Group for the algorithm to optimize.`,
            es: `<strong>"Don't Make Ads, Make TikToks"</strong> — el mantra oficial de la plataforma resume la filosofía:<br><br>
<strong>Principios de creativo de alto rendimiento:</strong>
<ul>
  <li><strong>Hook en los primeros 3 segundos:</strong> TikTok tiene una tasa de skip muy alta. La apertura determina si el usuario se queda. Comienza con movimiento, pregunta directa o dato sorprendente — nunca con logo.</li>
  <li><strong>Formato vertical 9:16:</strong> siempre nativo. Los videos horizontales recortados parecen "anuncio de banner" y rinden peor.</li>
  <li><strong>Duración ideal:</strong> 15-30 segundos para campañas de performance. Hasta 60s para awareness con storytelling.</li>
  <li><strong>Sonido:</strong> más del 80% de los usuarios ven con sonido — usa música trending o narración en voz over. Los subtítulos son obligatorios para quienes ven sin sonido.</li>
  <li><strong>UGC y tono auténtico:</strong> los videos que parecen creados por usuarios (bajo valor de producción intencional) suelen superar a las producciones pulidas.</li>
  <li><strong>CTA explícito:</strong> decir qué quieres que el usuario haga ("Haz clic en el enlace de la bio", "Saber más", "Compra ahora").</li>
  <li><strong>Tendencias:</strong> usar sonidos trending, formatos virales (duet, stitch, trend challenges) aumenta el descubrimiento orgánico.</li>
</ul>
<strong>Creative testing:</strong> TikTok recomienda mínimo 3-5 variaciones de creativo por Ad Group para que el algoritmo optimice.`,
          },
          tags: ['criativo', 'UGC', 'hook', 'vídeo', 'performance'],
        },
        {
          q: {
            pt: 'Como funciona o targeting no TikTok Ads? Quais as opções disponíveis?',
            en: 'How does targeting work in TikTok Ads? What options are available?',
            es: '¿Cómo funciona el targeting en TikTok Ads? ¿Qué opciones están disponibles?',
          },
          a: {
            pt: `<strong>Opções de targeting no TikTok Ads Manager (nível Ad Group):</strong><br><br>
<strong>Demográfico:</strong>
<ul>
  <li>Localização (país, estado, cidade)</li>
  <li>Idade (13-17, 18-24, 25-34, 35-44, 45-54, 55+)</li>
  <li>Gênero</li>
  <li>Idioma</li>
</ul>
<strong>Interesses e comportamentos:</strong>
<ul>
  <li><strong>Interest Targeting:</strong> categorias de interesse inferidas pelo comportamento na plataforma (ex: Beleza, Games, Moda)</li>
  <li><strong>Hashtag Targeting:</strong> alcançar usuários que interagiram com hashtags específicas</li>
  <li><strong>Video Interaction Audiences:</strong> usuários que viram, curtiram, comentaram ou compartilharam vídeos de categorias específicas</li>
  <li><strong>Creator Interaction Audiences:</strong> seguidores ou interagidores de creators de nicho específico</li>
</ul>
<strong>Custom Audiences (1st party):</strong>
<ul>
  <li>Pixel-based (visitantes do site, eventos específicos)</li>
  <li>Customer File Upload (lista de emails/phones)</li>
  <li>App Activity (eventos dentro do app)</li>
  <li>TikTok Engagement (usuários que interagiram com seu conteúdo)</li>
</ul>
<strong>Lookalike Audiences:</strong> baseadas em Custom Audiences — TikTok encontra usuários similares.<br><br>
<strong>Broad Targeting (recomendado para performance):</strong> sem interesse definido — deixar o algoritmo do TikTok encontrar o melhor público baseado no sinal do criativo e pixel.`,
            en: `<strong>Targeting options in TikTok Ads Manager (Ad Group level):</strong><br><br>
<strong>Demographic:</strong>
<ul>
  <li>Location (country, state, city)</li>
  <li>Age (13-17, 18-24, 25-34, 35-44, 45-54, 55+)</li>
  <li>Gender</li>
  <li>Language</li>
</ul>
<strong>Interests and behaviors:</strong>
<ul>
  <li><strong>Interest Targeting:</strong> interest categories inferred by platform behavior (e.g. Beauty, Games, Fashion)</li>
  <li><strong>Hashtag Targeting:</strong> reach users who interacted with specific hashtags</li>
  <li><strong>Video Interaction Audiences:</strong> users who watched, liked, commented or shared videos from specific categories</li>
  <li><strong>Creator Interaction Audiences:</strong> followers or engagers of niche-specific creators</li>
</ul>
<strong>Custom Audiences (1st party):</strong>
<ul>
  <li>Pixel-based (website visitors, specific events)</li>
  <li>Customer File Upload (email/phone list)</li>
  <li>App Activity (in-app events)</li>
  <li>TikTok Engagement (users who interacted with your content)</li>
</ul>
<strong>Lookalike Audiences:</strong> based on Custom Audiences — TikTok finds similar users.<br><br>
<strong>Broad Targeting (recommended for performance):</strong> no defined interests — let TikTok's algorithm find the best audience based on creative signals and pixel.`,
            es: `<strong>Opciones de targeting en TikTok Ads Manager (nivel Ad Group):</strong><br><br>
<strong>Demográfico:</strong>
<ul>
  <li>Ubicación (país, estado, ciudad)</li>
  <li>Edad (13-17, 18-24, 25-34, 35-44, 45-54, 55+)</li>
  <li>Género</li>
  <li>Idioma</li>
</ul>
<strong>Intereses y comportamientos:</strong>
<ul>
  <li><strong>Interest Targeting:</strong> categorías de interés inferidas por el comportamiento en la plataforma (ej: Belleza, Games, Moda)</li>
  <li><strong>Hashtag Targeting:</strong> alcanzar usuarios que interactuaron con hashtags específicos</li>
  <li><strong>Video Interaction Audiences:</strong> usuarios que vieron, les gustó, comentaron o compartieron videos de categorías específicas</li>
  <li><strong>Creator Interaction Audiences:</strong> seguidores o interactores de creators de nicho específico</li>
</ul>
<strong>Custom Audiences (1st party):</strong>
<ul>
  <li>Basadas en pixel (visitantes del sitio, eventos específicos)</li>
  <li>Customer File Upload (lista de emails/teléfonos)</li>
  <li>App Activity (eventos dentro de la app)</li>
  <li>TikTok Engagement (usuarios que interactuaron con tu contenido)</li>
</ul>
<strong>Lookalike Audiences:</strong> basadas en Custom Audiences — TikTok encuentra usuarios similares.<br><br>
<strong>Broad Targeting (recomendado para performance):</strong> sin interés definido — dejar que el algoritmo de TikTok encuentre la mejor audiencia basándose en las señales del creativo y el pixel.`,
          },
          tags: ['targeting', 'audience', 'interesse', 'lookalike', 'broad'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como estruturar uma estratégia de TikTok Ads integrada com influencer marketing?',
            en: 'How to structure a TikTok Ads strategy integrated with influencer marketing?',
            es: '¿Cómo estructurar una estrategia de TikTok Ads integrada con influencer marketing?',
          },
          a: {
            pt: `<strong>TikTok é a plataforma onde paid e orgânico mais se complementam</strong> — a integração com influencers é estratégica, não opcional.<br><br>
<strong>Spark Ads — o produto central da integração:</strong>
<ul>
  <li>Permite "impulsionar" um post orgânico do TikTok (da marca ou de um creator) como anúncio pago</li>
  <li>O anúncio mantém os likes, comentários e compartilhamentos do post original — social proof genuíno</li>
  <li>Creator precisa conceder permissão via código de autorização (válido por 30-60 dias)</li>
  <li>Performance histórica: Spark Ads têm CVR 134% maior que non-Spark (fonte: TikTok for Business)</li>
</ul>
<strong>Framework de integração paid + influencer:</strong>
<ol>
  <li><strong>Identificar creators</strong> com audience alinhada ao produto (TikTok Creator Marketplace)</li>
  <li><strong>Produção:</strong> brief para conteúdo autêntico — dar liberdade criativa, não roteiro rígido</li>
  <li><strong>Teste orgânico:</strong> publicar o vídeo organicamente e medir engajamento inicial (1-3 dias)</li>
  <li><strong>Seleção:</strong> escalar com paid os vídeos com melhor retenção e engajamento orgânico</li>
  <li><strong>Spark Ads:</strong> rodar como anúncio com targeting expandido, mantendo social proof</li>
</ol>
<strong>Métricas de integração:</strong>
<ul>
  <li>VCR (Video Completion Rate) — meta >50%</li>
  <li>Hook Rate (% que assiste os primeiros 3s) — meta >30%</li>
  <li>Earned Media Value (valor do engajamento orgânico gerado pelo paid)</li>
  <li>Brand Lift (via TikTok Brand Lift Study para campanhas maiores)</li>
</ul>`,
            en: `<strong>TikTok is the platform where paid and organic complement each other the most</strong> — integration with influencers is strategic, not optional.<br><br>
<strong>Spark Ads — the central product of integration:</strong>
<ul>
  <li>Allows "boosting" an organic TikTok post (from the brand or a creator) as a paid ad</li>
  <li>The ad retains the original post's likes, comments and shares — genuine social proof</li>
  <li>Creator needs to grant permission via authorization code (valid for 30-60 days)</li>
  <li>Historical performance: Spark Ads have 134% higher CVR than non-Spark (source: TikTok for Business)</li>
</ul>
<strong>Paid + influencer integration framework:</strong>
<ol>
  <li><strong>Identify creators</strong> with audience aligned to the product (TikTok Creator Marketplace)</li>
  <li><strong>Production:</strong> brief for authentic content — give creative freedom, not a rigid script</li>
  <li><strong>Organic test:</strong> publish the video organically and measure initial engagement (1-3 days)</li>
  <li><strong>Selection:</strong> scale with paid the videos with best organic retention and engagement</li>
  <li><strong>Spark Ads:</strong> run as an ad with expanded targeting, maintaining social proof</li>
</ol>
<strong>Integration metrics:</strong>
<ul>
  <li>VCR (Video Completion Rate) — target >50%</li>
  <li>Hook Rate (% watching the first 3s) — target >30%</li>
  <li>Earned Media Value (value of organic engagement generated by paid)</li>
  <li>Brand Lift (via TikTok Brand Lift Study for larger campaigns)</li>
</ul>`,
            es: `<strong>TikTok es la plataforma donde paid y orgánico más se complementan</strong> — la integración con influencers es estratégica, no opcional.<br><br>
<strong>Spark Ads — el producto central de la integración:</strong>
<ul>
  <li>Permite "impulsar" un post orgánico de TikTok (de la marca o de un creator) como anuncio pagado</li>
  <li>El anuncio mantiene los likes, comentarios y compartidos del post original — social proof genuino</li>
  <li>El creator necesita otorgar permiso via código de autorización (válido 30-60 días)</li>
  <li>Performance histórica: los Spark Ads tienen un CVR 134% mayor que los non-Spark (fuente: TikTok for Business)</li>
</ul>
<strong>Framework de integración paid + influencer:</strong>
<ol>
  <li><strong>Identificar creators</strong> con audiencia alineada al producto (TikTok Creator Marketplace)</li>
  <li><strong>Producción:</strong> brief para contenido auténtico — dar libertad creativa, no guión rígido</li>
  <li><strong>Prueba orgánica:</strong> publicar el video orgánicamente y medir el engagement inicial (1-3 días)</li>
  <li><strong>Selección:</strong> escalar con paid los videos con mejor retención y engagement orgánico</li>
  <li><strong>Spark Ads:</strong> correr como anuncio con targeting expandido, manteniendo el social proof</li>
</ol>
<strong>Métricas de integración:</strong>
<ul>
  <li>VCR (Video Completion Rate) — meta >50%</li>
  <li>Hook Rate (% que ve los primeros 3s) — meta >30%</li>
  <li>Earned Media Value (valor del engagement orgánico generado por el paid)</li>
  <li>Brand Lift (via TikTok Brand Lift Study para campañas más grandes)</li>
</ul>`,
          },
          tags: ['Spark-Ads', 'influencer', 'UGC', 'paid-organic', 'VCR'],
        },
      ],
    },
  ],
};

// ── APPEND: TikTok expandido ──
;(function(){
const d = window.__adopsData['tiktok'];
d.tiers[0].questions.push(
  {
    q:{pt:'Como instalar o TikTok Pixel e configurar eventos?',en:'How to install the TikTok Pixel and configure events?',es:'¿Cómo instalar el TikTok Pixel y configurar eventos?'},
    a:{
      pt:`O <strong>TikTok Pixel</strong> rastreia ações no site para mensuração de conversões, retargeting e otimização de campanhas.<br><br>
<strong>Criar o Pixel:</strong>
<ol>
  <li>Acesse <strong>TikTok Ads Manager → Assets → Events → Web Events → Create Pixel</strong></li>
  <li>Escolha o método de instalação</li>
  <li>Anote o <strong>Pixel ID</strong></li>
</ol>
<strong>Instalar — 3 métodos:</strong>
<ul>
  <li><strong>Via GTM (recomendado):</strong> Tag Custom HTML ou template nativo do TikTok no GTM. Disparo: All Pages para o base code.</li>
  <li><strong>Manual:</strong> colar o código base no &lt;head&gt; de todas as páginas. Adicionar eventos específicos nas páginas relevantes.</li>
  <li><strong>Shopify/WooCommerce:</strong> app "TikTok" ou plugin nativo — inserir o Pixel ID.</li>
</ul>
<strong>Eventos padrão do TikTok Pixel:</strong>
<ul>
  <li><code>ViewContent</code> — visualizou produto/página</li>
  <li><code>AddToWishlist</code> — adicionou à lista de desejos</li>
  <li><code>AddToCart</code> — adicionou ao carrinho</li>
  <li><code>InitiateCheckout</code> — iniciou checkout</li>
  <li><code>PlaceAnOrder</code> — realizou pedido</li>
  <li><code>CompletePayment</code> — pagamento concluído (com value, currency)</li>
  <li><code>Subscribe</code>, <code>Download</code>, <code>Register</code></li>
</ul>
<strong>TikTok Events API (CAPI):</strong>
<ul>
  <li>Envia eventos do servidor diretamente ao TikTok — complementa o Pixel</li>
  <li>Configurar em: Assets → Events → Web Events → Set Up Events API</li>
  <li>Implementar deduplicação com o mesmo <code>event_id</code> no Pixel e na API</li>
</ul>
<strong>Verificar:</strong> usar a extensão <strong>TikTok Pixel Helper</strong> no Chrome para confirmar eventos disparando em tempo real.`,
      en:`The <strong>TikTok Pixel</strong> tracks site actions for conversion measurement, retargeting and campaign optimization.<br><br>
<strong>Create Pixel:</strong> TikTok Ads Manager → Assets → Events → Web Events → Create Pixel → note Pixel ID.<br><br>
<strong>Install:</strong> Via GTM (Custom HTML tag or native template), Manual (&lt;head&gt; snippet), or native Shopify/WooCommerce integration.<br><br>
<strong>Standard TikTok Pixel events:</strong> ViewContent, AddToWishlist, AddToCart, InitiateCheckout, PlaceAnOrder, CompletePayment (with value, currency), Subscribe, Download, Register.<br><br>
<strong>TikTok Events API:</strong> sends server events directly to TikTok — complements Pixel. Implement deduplication with same event_id in both Pixel and API.`,
      es:`El <strong>TikTok Pixel</strong> rastrea acciones en el sitio para medición de conversiones, retargeting y optimización de campañas.<br><br>
<strong>Crear:</strong> TikTok Ads Manager → Assets → Events → Web Events → Create Pixel → anotar Pixel ID.<br><br>
<strong>Instalar:</strong> Via GTM, Manual o integración nativa Shopify/WooCommerce.<br><br>
<strong>Eventos estándar:</strong> ViewContent, AddToWishlist, AddToCart, InitiateCheckout, PlaceAnOrder, CompletePayment, Subscribe, Download, Register.<br><br>
<strong>TikTok Events API:</strong> envía eventos del servidor directamente a TikTok. Implementar deduplicación con el mismo event_id.`,
    },
    tags:['TikTok-Pixel','GTM','Events-API','CAPI','instalação','conversão','Shopify'],
  },
  {
    q:{pt:'Quais são os formatos de anúncio do TikTok e como cada um funciona?',en:'What are TikTok ad formats and how does each work?',es:'¿Cuáles son los formatos de anuncio de TikTok y cómo funciona cada uno?'},
    a:{
      pt:`<strong>Formatos de anúncio do TikTok:</strong><br><br>
<strong>In-Feed Ads:</strong>
<ul>
  <li>Vídeo vertical (9:16) de 5-60 segundos que aparece no feed "Para Você" entre vídeos orgânicos</li>
  <li>Pulável pelo usuário — os primeiros 3 segundos são críticos</li>
  <li>CTA clicável: visitar site, baixar app, ver produto</li>
  <li>Formato mais acessível e amplamente usado — disponível via self-serve</li>
</ul>
<strong>TopView:</strong>
<ul>
  <li>Primeiro anúncio que o usuário vê ao abrir o TikTok — ocupa toda a tela por até 60 segundos</li>
  <li>Compra por reserva (não RTB) — garantia de visibilidade máxima</li>
  <li>Alto impacto, alto custo — usado em lançamentos e grandes campanhas de brand</li>
</ul>
<strong>Brand Takeover:</strong>
<ul>
  <li>Anúncio estático ou vídeo de 3-5 segundos que aparece ao abrir o app antes do feed</li>
  <li>Exclusivo: apenas uma marca por categoria por dia</li>
  <li>Inclui link para hashtag challenge, landing page ou TopView</li>
</ul>
<strong>Branded Hashtag Challenge:</strong>
<ul>
  <li>Marca cria um desafio com hashtag própria — usuários criam conteúdo participando</li>
  <li>Alta geração de UGC e awareness orgânico</li>
  <li>Aparece na página de Discovery por 6 dias</li>
  <li>Case clássico: marcas de beleza, moda e bebidas</li>
</ul>
<strong>Branded Effects (Filtros e Stickers):</strong>
<ul>
  <li>Efeitos de AR, filtros e stickers interativos com a marca</li>
  <li>Usuários usam nos próprios vídeos — geração de conteúdo orgânico com a marca</li>
</ul>
<strong>TikTok Shopping Ads:</strong>
<ul>
  <li>Video Shopping Ads: In-Feed com produto tagueado diretamente no vídeo</li>
  <li>Catalog Listing Ads: exibe produtos do catálogo no feed de compras</li>
  <li>LIVE Shopping Ads: anúncio que leva para live commerce</li>
</ul>`,
      en:`<strong>TikTok ad formats:</strong><br><br>
<strong>In-Feed Ads:</strong> vertical video (9:16) 5-60 seconds appearing in "For You" feed. Skippable — first 3 seconds critical. Clickable CTA.<br><br>
<strong>TopView:</strong> first ad user sees when opening TikTok — full screen for up to 60 seconds. Reservation buy. Maximum visibility.<br><br>
<strong>Brand Takeover:</strong> static/video 3-5 seconds appearing when app opens. Exclusive: one brand per category per day.<br><br>
<strong>Branded Hashtag Challenge:</strong> brand creates challenge with own hashtag — users create participating content. High UGC and organic awareness. Discovery page for 6 days.<br><br>
<strong>Branded Effects:</strong> AR effects, filters and interactive stickers with brand. Users use in own videos.<br><br>
<strong>TikTok Shopping Ads:</strong> Video Shopping Ads (tagged product in video), Catalog Listing Ads, LIVE Shopping Ads.`,
      es:`<strong>Formatos de anuncio de TikTok:</strong><br><br>
<strong>In-Feed Ads:</strong> video vertical (9:16) de 5-60 segundos en el feed "Para Ti". Omitible — los primeros 3 segundos son críticos.<br><br>
<strong>TopView:</strong> primer anuncio que el usuario ve al abrir TikTok — pantalla completa hasta 60 segundos. Compra por reserva.<br><br>
<strong>Brand Takeover:</strong> estático/video de 3-5 segundos al abrir la app. Exclusivo: una marca por categoría por día.<br><br>
<strong>Branded Hashtag Challenge:</strong> la marca crea un desafío con hashtag propio — los usuarios crean contenido participando. Alta generación de UGC.<br><br>
<strong>Branded Effects:</strong> efectos AR, filtros y stickers interactivos con la marca.<br><br>
<strong>TikTok Shopping Ads:</strong> Video Shopping Ads, Catalog Listing Ads, LIVE Shopping Ads.`,
    },
    tags:['TikTok','formatos','TopView','Brand-Takeover','Hashtag-Challenge','Shopping','In-Feed'],
  }
);
d.tiers[1].questions.push(
  {
    q:{pt:'O que é o TikTok Creative Center e como usar dados de tendências para criar anúncios melhores?',en:'What is TikTok Creative Center and how to use trend data to create better ads?',es:'¿Qué es el TikTok Creative Center y cómo usar datos de tendencias para crear mejores anuncios?'},
    a:{
      pt:`O <strong>TikTok Creative Center</strong> (ads.tiktok.com/business/creativecenter) é uma ferramenta gratuita do TikTok que oferece insights sobre trends, criativos de alta performance e dados de audiência para ajudar anunciantes a criar conteúdo mais eficaz.<br><br>
<strong>Funcionalidades principais:</strong>
<ul>
  <li><strong>Top Ads:</strong> biblioteca de anúncios de alta performance — filtráveis por país, setor, objetivo, período e formato. Ver quais criativos têm mais cliques, impressões e engajamento em cada categoria. Inspiração direta de what's working.</li>
  <li><strong>Trending:</strong> hashtags em alta, músicas virais, palavras-chave em crescimento por país e categoria. Usar músicas em tendência aumenta significativamente o reach orgânico de anúncios.</li>
  <li><strong>Creator Insights:</strong> dados sobre criadores por nicho, tamanho de audiência e taxa de engajamento — útil para selecionar influencers para campanhas</li>
  <li><strong>Keyword Insights:</strong> palavras-chave mais buscadas na categoria do anunciante — alimentar criativos e copy com termos que a audiência usa</li>
  <li><strong>Creative Insights:</strong> análise de quais elementos criativos (duração, gancho, estilo de filmagem, textos, CTAs) performam melhor em cada indústria</li>
</ul>
<strong>Boas práticas de criativo no TikTok (baseado em dados do Creative Center):</strong>
<ul>
  <li><strong>Hook nos primeiros 3 segundos:</strong> mostrar o produto em ação, fazer pergunta ou afirmação surpreendente, ou usar tendência de áudio reconhecível</li>
  <li><strong>Formato nativo:</strong> parecer com conteúdo orgânico do TikTok, não com anúncio polido de TV</li>
  <li><strong>UGC e depoimentos:</strong> pessoa falando diretamente para a câmera sobre o produto performa melhor que produção high-end</li>
  <li><strong>Subtítulos sempre:</strong> 60-80% dos usuários assistem sem som</li>
  <li><strong>Música em tendência:</strong> usar sons virais (quando licenciados comercialmente) aumenta engajamento</li>
</ul>`,
      en:`The <strong>TikTok Creative Center</strong> (ads.tiktok.com/business/creativecenter) is a free TikTok tool offering insights about trends, high-performance creatives and audience data.<br><br>
<strong>Main features:</strong>
<ul>
  <li><strong>Top Ads:</strong> high-performance ad library — filterable by country, industry, objective, period and format. See what's working.</li>
  <li><strong>Trending:</strong> trending hashtags, viral music, growing keywords by country and category</li>
  <li><strong>Creator Insights:</strong> creator data by niche, audience size and engagement rate</li>
  <li><strong>Keyword Insights:</strong> most searched keywords in advertiser's category</li>
  <li><strong>Creative Insights:</strong> which creative elements (duration, hook, filming style, texts, CTAs) perform best per industry</li>
</ul>
<strong>TikTok creative best practices:</strong>
<ul>
  <li><strong>Hook in first 3 seconds</strong></li>
  <li><strong>Native format:</strong> look like organic TikTok content, not polished TV ad</li>
  <li><strong>UGC and testimonials:</strong> person speaking directly to camera outperforms high-end production</li>
  <li><strong>Always subtitles:</strong> 60-80% of users watch without sound</li>
  <li><strong>Trending music:</strong> using viral sounds increases engagement</li>
</ul>`,
      es:`El <strong>TikTok Creative Center</strong> es una herramienta gratuita de TikTok que ofrece insights sobre tendencias, creativos de alto rendimiento y datos de audiencia.<br><br>
<strong>Funcionalidades principales:</strong>
<ul>
  <li><strong>Top Ads:</strong> biblioteca de anuncios de alto rendimiento — filtrable por país, sector, objetivo y período</li>
  <li><strong>Trending:</strong> hashtags en tendencia, música viral, palabras clave en crecimiento</li>
  <li><strong>Creator Insights:</strong> datos sobre creadores por nicho y tasa de engagement</li>
  <li><strong>Keyword Insights:</strong> palabras clave más buscadas en la categoría del anunciante</li>
</ul>
<strong>Buenas prácticas de creativo en TikTok:</strong>
<ul>
  <li>Hook en los primeros 3 segundos</li>
  <li>Formato nativo — parecer contenido orgánico</li>
  <li>UGC y testimonios: persona hablando directamente a la cámara</li>
  <li>Subtítulos siempre: 60-80% de los usuarios ven sin sonido</li>
</ul>`,
    },
    tags:['TikTok','Creative-Center','trends','UGC','hook','criativo','música-viral'],
  },
  {
    q:{pt:'Como funciona o TikTok Shop e o Live Commerce no contexto de publicidade?',en:'How does TikTok Shop and Live Commerce work in the advertising context?',es:'¿Cómo funciona TikTok Shop y el Live Commerce en el contexto publicitario?'},
    a:{
      pt:`O <strong>TikTok Shop</strong> transformou o TikTok de plataforma de entretenimento em canal de e-commerce — integrando descoberta, conteúdo e compra em uma única experiência.<br><br>
<strong>Componentes do TikTok Shop:</strong>
<ul>
  <li><strong>Product Links in Videos:</strong> criador ou marca tageia produtos diretamente no vídeo orgânico ou anúncio — botãozinho de produto aparece sobre o vídeo. Usuário toca e pode comprar sem sair do TikTok.</li>
  <li><strong>TikTok Shop Tab:</strong> aba de compras dentro do app com produtos recomendados algoritmicamente</li>
  <li><strong>LIVE Shopping:</strong> transmissão ao vivo com produtos exibidos em tempo real. Criador (ou marca) apresenta produtos, usuários compram durante a live. Formato dominante no mercado asiático (China, Indonésia), crescendo no BR/US.</li>
  <li><strong>Affiliate Program:</strong> criadores promovem produtos de marcas parceiras com link de afiliado — ganham comissão por cada venda gerada</li>
</ul>
<strong>Para anunciantes — TikTok Shopping Ads:</strong>
<ul>
  <li><strong>Video Shopping Ads:</strong> In-Feed com produto tagueado + CTA de compra direto no vídeo</li>
  <li><strong>LIVE Shopping Ads:</strong> amplifica uma live commerce com budget de mídia — direciona tráfego pago para a transmissão</li>
  <li><strong>Catalog Listing Ads:</strong> produtos do catálogo exibidos no feed de shopping — semelhante ao Google Shopping</li>
</ul>
<strong>Por que Live Commerce importa para AdOps:</strong>
<ul>
  <li>Mensuração em tempo real: vendas, GMV (Gross Merchandise Value), espectadores simultâneos</li>
  <li>Atribuição: TikTok Shop tem atribuição nativa — sem dependência de Pixel externo para vendas dentro do app</li>
  <li>Integração com catálogo: mesmo feed de produtos usado nos Shopping Ads alimenta a loja no TikTok Shop</li>
</ul>`,
      en:`<strong>TikTok Shop</strong> transformed TikTok from entertainment platform to e-commerce channel — integrating discovery, content and purchase in a single experience.<br><br>
<strong>TikTok Shop components:</strong>
<ul>
  <li><strong>Product Links in Videos:</strong> creator or brand tags products directly in organic video or ad — product button appears over video. User taps and can buy without leaving TikTok.</li>
  <li><strong>TikTok Shop Tab:</strong> shopping tab inside app with algorithmically recommended products</li>
  <li><strong>LIVE Shopping:</strong> live stream with products displayed in real time. Dominant format in Asian markets, growing in BR/US.</li>
  <li><strong>Affiliate Program:</strong> creators promote brand partner products with affiliate link — earn commission per sale generated</li>
</ul>
<strong>For advertisers — TikTok Shopping Ads:</strong>
<ul>
  <li><strong>Video Shopping Ads:</strong> In-Feed with tagged product + direct purchase CTA</li>
  <li><strong>LIVE Shopping Ads:</strong> amplifies live commerce with media budget</li>
  <li><strong>Catalog Listing Ads:</strong> catalog products shown in shopping feed</li>
</ul>`,
      es:`<strong>TikTok Shop</strong> transformó TikTok de plataforma de entretenimiento a canal de e-commerce.<br><br>
<strong>Componentes de TikTok Shop:</strong>
<ul>
  <li><strong>Product Links in Videos:</strong> el creador o la marca etiqueta productos directamente en el video — botón de producto aparece sobre el video</li>
  <li><strong>TikTok Shop Tab:</strong> pestaña de compras dentro de la app</li>
  <li><strong>LIVE Shopping:</strong> transmisión en vivo con productos mostrados en tiempo real. Formato dominante en mercados asiáticos.</li>
  <li><strong>Affiliate Program:</strong> creadores promocionan productos con enlace de afiliado</li>
</ul>
<strong>Para anunciantes — TikTok Shopping Ads:</strong>
<ul>
  <li><strong>Video Shopping Ads:</strong> In-Feed con producto etiquetado + CTA de compra directa</li>
  <li><strong>LIVE Shopping Ads:</strong> amplifica un live commerce con presupuesto de medios</li>
  <li><strong>Catalog Listing Ads:</strong> productos del catálogo en el feed de shopping</li>
</ul>`,
    },
    tags:['TikTok-Shop','Live-Commerce','Shopping-Ads','GMV','afiliado','catálogo','e-commerce'],
  }
);
d.tiers[2].questions.push(
  {
    q:{pt:'Como estruturar uma estratégia de conteúdo criativo escalável para TikTok Ads?',en:'How to structure a scalable creative content strategy for TikTok Ads?',es:'¿Cómo estructurar una estrategia de contenido creativo escalable para TikTok Ads?'},
    a:{
      pt:`No TikTok, <strong>o criativo É a segmentação</strong> — o algoritmo distribui o conteúdo para quem tem maior probabilidade de engajar, independente do targeting definido pelo anunciante. Isso torna a estratégia criativa o fator mais crítico de performance.<br><br>
<strong>Framework de teste criativo escalável:</strong>
<ol>
  <li><strong>Identificar hooks:</strong> criar 5-10 variações de abertura diferentes para o mesmo produto. Testar em paralelo com o mesmo corpo e CTA. Identificar qual hook tem maior 3-second view rate e menor skip rate.</li>
  <li><strong>Testar formatos:</strong> UGC (pessoa falando), demo de produto, unboxing, problema-solução, depoimento, trend native (usar som ou meme atual)</li>
  <li><strong>Testar CTAs:</strong> "Compre agora", "Saiba mais", "Experimente grátis" — qual converte mais no objetivo</li>
  <li><strong>Escalar winners:</strong> pegar o criativo com melhor CPR (Cost Per Result) e criar variações (hook diferente, duração diferente, locutor diferente)</li>
</ol>
<strong>Sinais de fadiga criativa:</strong>
<ul>
  <li>CTR caindo progressivamente sem mudança de audiência</li>
  <li>CPM crescendo (o algoritmo está pagando mais para atingir a mesma audiência)</li>
  <li>Frequency aumentando — mesmos usuários vendo o mesmo anúncio repetidamente</li>
</ul>
<strong>Velocidade de produção — TikTok exige volume:</strong>
<ul>
  <li>Meta/Google: 1-2 criativos novos por mês é suficiente</li>
  <li>TikTok: 5-10 criativos novos por semana para contas em escala — a plataforma consome criativos muito mais rápido</li>
</ul>
<strong>Spark Ads — amplificar conteúdo orgânico:</strong>
<ul>
  <li>Transformar vídeos orgânicos (da marca ou de criadores) em anúncios pagos</li>
  <li>Mantém os likes, comentários e compartilhamentos do post original — prova social</li>
  <li>Performa melhor que anúncios "from scratch" em muitos casos — parece mais autêntico</li>
  <li>Para usar vídeo de criador: obter código de autorização do criador no app</li>
</ul>`,
      en:`On TikTok, <strong>the creative IS the targeting</strong> — the algorithm distributes content to those most likely to engage, regardless of advertiser-defined targeting. This makes creative strategy the most critical performance factor.<br><br>
<strong>Scalable creative testing framework:</strong>
<ol>
  <li><strong>Identify hooks:</strong> create 5-10 different opening variations for the same product. Test in parallel with same body and CTA. Identify which hook has highest 3-second view rate and lowest skip rate.</li>
  <li><strong>Test formats:</strong> UGC, product demo, unboxing, problem-solution, testimonial, trend native</li>
  <li><strong>Test CTAs:</strong> which converts best for the objective</li>
  <li><strong>Scale winners:</strong> take best CPR creative and create variations</li>
</ol>
<strong>Creative fatigue signals:</strong>
<ul>
  <li>Progressively falling CTR without audience change</li>
  <li>Rising CPM — algorithm paying more to reach same audience</li>
  <li>Increasing frequency</li>
</ul>
<strong>Production speed — TikTok requires volume:</strong>
<ul>
  <li>Meta/Google: 1-2 new creatives per month is sufficient</li>
  <li>TikTok: 5-10 new creatives per week for scaled accounts</li>
</ul>
<strong>Spark Ads — amplify organic content:</strong>
<ul>
  <li>Turn organic videos (from brand or creators) into paid ads</li>
  <li>Keeps original post's likes, comments and shares — social proof</li>
  <li>Often outperforms "from scratch" ads — appears more authentic</li>
</ul>`,
      es:`En TikTok, <strong>el creativo ES la segmentación</strong> — el algoritmo distribuye el contenido a quienes tienen mayor probabilidad de interactuar.<br><br>
<strong>Framework de prueba creativa escalable:</strong>
<ol>
  <li><strong>Identificar hooks:</strong> crear 5-10 variaciones de apertura diferentes. Probar en paralelo. Identificar cuál tiene mayor 3-second view rate y menor skip rate.</li>
  <li><strong>Probar formatos:</strong> UGC, demo de producto, unboxing, problema-solución, testimonio, trend native</li>
  <li><strong>Probar CTAs</strong></li>
  <li><strong>Escalar ganadores:</strong> tomar el creativo con mejor CPR y crear variaciones</li>
</ol>
<strong>Señales de fatiga creativa:</strong> CTR cayendo, CPM creciendo, frecuencia aumentando.<br><br>
<strong>Velocidad de producción:</strong> TikTok: 5-10 creativos nuevos por semana para cuentas a escala.<br><br>
<strong>Spark Ads:</strong> transformar vídeos orgánicos en anuncios pagos. Mantiene likes, comentarios y compartidos — prueba social.`,
    },
    tags:['TikTok','criativo','hook','Spark-Ads','UGC','fadiga','escala','CPR'],
  }
);
})();

;(function(){
const d = window.__adopsData['tiktok'];
d.tiers[0].questions.push(
  {
    q:{pt:'Passo a passo: como criar uma campanha no TikTok Ads Manager?',en:'Step by step: how to create a campaign in TikTok Ads Manager?',es:'Paso a paso: ¿cómo crear una campaña en TikTok Ads Manager?'},
    a:{
      pt:`<strong>Pré-requisitos:</strong>
<ul>
  <li>Conta de negócios no TikTok Ads Manager (<strong>ads.tiktok.com</strong>)</li>
  <li>Método de pagamento adicionado</li>
  <li>TikTok Pixel instalado (para campanhas de conversão)</li>
  <li>Criativo em formato vertical 9:16 pronto</li>
</ul>
<strong>Estrutura do TikTok Ads:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">Campaign (objetivo + budget da campanha)
  └── Ad Group (targeting + budget + período)
        └── Ad (criativo)</pre>
<strong>Passo 1 — Criar Campaign:</strong>
<ol>
  <li>Acesse o TikTok Ads Manager → <strong>+ Criar</strong></li>
  <li>Objetivo:
    <ul>
      <li>Awareness: Alcance</li>
      <li>Consideração: Tráfego, Visualizações de vídeo, Interação com o perfil</li>
      <li>Conversão: Geração de leads, Promoção de app, Conversões de site, Vendas de catálogo</li>
    </ul>
  </li>
  <li>Nome: ex: <code>TT_Conversao_Produto_BR_Ago25</code></li>
  <li>Orçamento da campanha: ativar se quiser limite total (ou definir no Ad Group)</li>
</ol>
<strong>Passo 2 — Criar Ad Group:</strong>
<ol>
  <li>Nome: ex: <code>AdGroup_Prospecting_18-34_BR</code></li>
  <li>Locais de promoção: TikTok (recomendado) — ou adicionar Pangle/outros apps da rede</li>
  <li><strong>Targeting:</strong>
    <ul>
      <li>Localização: Brasil</li>
      <li>Idioma: Português</li>
      <li>Idade: ex 18-34</li>
      <li>Gênero: todos ou específico</li>
      <li>Interesses e comportamentos: selecionar categorias relevantes</li>
      <li>Expansão de público: ativar para o TikTok expandir automaticamente</li>
    </ul>
  </li>
  <li><strong>Orçamento do Ad Group:</strong> diário (mínimo R$50/dia) ou total do período</li>
  <li><strong>Período:</strong> data início e fim</li>
  <li><strong>Otimização:</strong> selecionar o evento de otimização (ex: Compra, Lead) e o Pixel correto</li>
  <li><strong>Lance:</strong> custo mais baixo (automático) ou lance limite</li>
</ol>
<strong>Passo 3 — Criar Ad (criativo):</strong>
<ol>
  <li>Nome: ex: <code>Video_Hook_Produto_v1</code></li>
  <li>Identidade: selecione a conta TikTok da marca</li>
  <li>Upload do vídeo (9:16, mínimo 5s, máximo 60s para In-Feed)</li>
  <li>Texto do anúncio: até 100 caracteres</li>
  <li>CTA: "Compre agora", "Saiba mais", "Baixar app", etc.</li>
  <li>URL de destino com UTM parameters</li>
</ol>
<strong>Passo 4 — Publicar:</strong>
<ol>
  <li>Revisar tudo → <strong>Enviar</strong></li>
  <li>Status: Em revisão → Ativo (aprovação: geralmente 1-2 horas, máximo 24h)</li>
  <li>Nas primeiras horas: verificar se impressões iniciaram e o vídeo está renderizando corretamente</li>
</ol>`,
      en:`<strong>Prerequisites:</strong>
<ul>
  <li>Business account at TikTok Ads Manager (<strong>ads.tiktok.com</strong>)</li>
  <li>Payment method added</li>
  <li>TikTok Pixel installed (for conversion campaigns)</li>
  <li>Vertical 9:16 creative ready</li>
</ul>
<strong>TikTok Ads structure:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">Campaign → Ad Group (targeting + budget) → Ad (creative)</pre>
<strong>Step 1 — Create Campaign:</strong> objective (Awareness/Consideration/Conversion), name, optional campaign budget.<br><br>
<strong>Step 2 — Create Ad Group:</strong>
<ol>
  <li>Promotion locations: TikTok (recommended)</li>
  <li>Targeting: location, language, age, gender, interests & behaviors, audience expansion</li>
  <li>Budget: daily (minimum ~$10/day) or total period</li>
  <li>Optimization event: select event (e.g. Purchase) and correct Pixel</li>
  <li>Bid: lowest cost (automatic) or bid cap</li>
</ol>
<strong>Step 3 — Create Ad:</strong> upload video (9:16, 5-60s), ad text (100 chars), CTA, destination URL with UTMs.<br><br>
<strong>Step 4 — Publish:</strong> Review → Submit. Approval: usually 1-2 hours, max 24h.`,
      es:`<strong>Prerequisitos:</strong>
<ul>
  <li>Cuenta de negocio en TikTok Ads Manager (<strong>ads.tiktok.com</strong>)</li>
  <li>Método de pago agregado</li>
  <li>TikTok Pixel instalado</li>
  <li>Creativo vertical 9:16 listo</li>
</ul>
<strong>Estructura de TikTok Ads:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">Campaign → Ad Group (targeting + presupuesto) → Ad (creativo)</pre>
<strong>Paso 2 — Crear Ad Group:</strong>
<ol>
  <li>Targeting: ubicación, idioma, edad, género, intereses y comportamientos</li>
  <li>Presupuesto: diario (mínimo R$50/día) o total del período</li>
  <li>Optimización: seleccionar evento (ej: Compra) y Pixel correcto</li>
  <li>Puja: costo más bajo (automático) o límite de puja</li>
</ol>
<strong>Paso 3 — Crear Ad:</strong> subir video (9:16, 5-60s), texto del anuncio (100 caracteres), CTA, URL de destino con UTMs.<br><br>
<strong>Paso 4 — Publicar:</strong> Revisar → Enviar. Aprobación: generalmente 1-2 horas, máximo 24h.`,
    },
    tags:['TikTok','passo-a-passo','campanha','Ad-Group','targeting','criativo','conversão','Pixel'],
  }
);
})();

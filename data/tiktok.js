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

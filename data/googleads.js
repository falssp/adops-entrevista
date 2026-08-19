window.__adopsData = window.__adopsData || {};
window.__adopsData['googleads'] = {
  icon: '🔍',
  name: { pt: 'Google Ads', en: 'Google Ads', es: 'Google Ads' },
  desc: {
    pt: 'Plataforma de anúncios do Google — Search, Display, YouTube, Shopping, Performance Max e App Campaigns.',
    en: "Google's advertising platform — Search, Display, YouTube, Shopping, Performance Max and App Campaigns.",
    es: 'Plataforma de anuncios de Google — Search, Display, YouTube, Shopping, Performance Max y App Campaigns.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: { pt: 'Qual a hierarquia de uma conta no Google Ads?', en: 'What is the account hierarchy in Google Ads?', es: '¿Cuál es la jerarquía de una cuenta en Google Ads?' },
          a: {
            pt: `<ul>
  <li><strong>Account:</strong> nível raiz — vinculado a um e-mail Google, contém billing e configurações globais. Gerenciável via MCC (Manager Account).</li>
  <li><strong>Campaign:</strong> define o tipo (Search, Display, Shopping, Video, PMax, App), objetivo, budget diário e estratégia de lance.</li>
  <li><strong>Ad Group:</strong> agrupa keywords relacionadas e os anúncios associados. Define lances de CPC no nível de grupo.</li>
  <li><strong>Ad:</strong> o criativo — RSA no Search, imagem/HTML5 no Display, vídeo no YouTube.</li>
  <li><strong>Keyword:</strong> específico do Search — define quando o anúncio aparece. Cada keyword tem lance próprio e match type.</li>
</ul>
<strong>MCC (My Client Center):</strong> conta de gerenciamento que centraliza múltiplas contas — fundamental para agências.`,
            en: `<ul>
  <li><strong>Account:</strong> root level — linked to a Google email, contains billing and global settings. Manageable via MCC (Manager Account).</li>
  <li><strong>Campaign:</strong> defines type (Search, Display, Shopping, Video, PMax, App), objective, daily budget and bid strategy.</li>
  <li><strong>Ad Group:</strong> groups related keywords and associated ads. Sets CPC bids at group level.</li>
  <li><strong>Ad:</strong> the creative — RSA in Search, image/HTML5 in Display, video on YouTube.</li>
  <li><strong>Keyword:</strong> Search-specific — defines when the ad shows. Each keyword has its own bid and match type.</li>
</ul>
<strong>MCC (My Client Center):</strong> management account that centralizes multiple accounts — essential for agencies.`,
            es: `<ul>
  <li><strong>Account:</strong> nivel raíz — vinculado a un email de Google, contiene billing y configuraciones globales. Gestionable via MCC (Manager Account).</li>
  <li><strong>Campaign:</strong> define tipo (Search, Display, Shopping, Video, PMax, App), objetivo, presupuesto diario y estrategia de puja.</li>
  <li><strong>Ad Group:</strong> agrupa keywords relacionadas y los anuncios asociados. Define pujas de CPC a nivel de grupo.</li>
  <li><strong>Ad:</strong> el creativo — RSA en Search, imagen/HTML5 en Display, video en YouTube.</li>
  <li><strong>Keyword:</strong> específico de Search — define cuándo aparece el anuncio. Cada keyword tiene su propia puja y match type.</li>
</ul>
<strong>MCC (My Client Center):</strong> cuenta de gestión que centraliza múltiples cuentas — fundamental para agencias.`,
          },
          tags: ['hierarquia', 'MCC', 'Ad-Group', 'campanha', 'estrutura'],
        },
        {
          q: { pt: 'Quais são os tipos de correspondência (match types) de palavras-chave no Google Search?', en: 'What are the keyword match types in Google Search?', es: '¿Cuáles son los tipos de concordancia de palabras clave en Google Search?' },
          a: {
            pt: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Tipo</th><th style="padding:6px">Sintaxe</th><th style="padding:6px">Alcance</th></tr>
<tr><td style="padding:6px"><strong>Broad Match</strong></td><td style="padding:6px">tênis corrida</td><td style="padding:6px">Variações amplas, sinônimos, temas relacionados</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>Phrase Match</strong></td><td style="padding:6px">"tênis corrida"</td><td style="padding:6px">Contém o significado da frase, ordem pode variar</td></tr>
<tr><td style="padding:6px"><strong>Exact Match</strong></td><td style="padding:6px">[tênis corrida]</td><td style="padding:6px">Pesquisa exata ou variações muito próximas</td></tr>
</table><br>
<strong>Quando usar cada um:</strong>
<ul>
  <li><strong>Exact:</strong> máximo controle, menor volume — termos de alto valor e conversão conhecida</li>
  <li><strong>Phrase:</strong> equilíbrio — captura variações sem perder controle do intent</li>
  <li><strong>Broad:</strong> maior alcance e descoberta — melhor com Smart Bidding e metas de conversão</li>
</ul>
<strong>Palavras-chave negativas:</strong> bloqueiam pesquisas indesejadas. Funcionam em Exact <code>[termo]</code>, Phrase <code>"termo"</code> e Broad. Essenciais para qualquer campanha Search.`,
            en: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Type</th><th style="padding:6px">Syntax</th><th style="padding:6px">Reach</th></tr>
<tr><td style="padding:6px"><strong>Broad Match</strong></td><td style="padding:6px">running shoes</td><td style="padding:6px">Broad variations, synonyms, related themes</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>Phrase Match</strong></td><td style="padding:6px">"running shoes"</td><td style="padding:6px">Contains the phrase meaning, order may vary</td></tr>
<tr><td style="padding:6px"><strong>Exact Match</strong></td><td style="padding:6px">[running shoes]</td><td style="padding:6px">Exact search or very close variations</td></tr>
</table><br>
<strong>When to use each:</strong>
<ul>
  <li><strong>Exact:</strong> maximum control, lower volume — high-value terms with known conversion</li>
  <li><strong>Phrase:</strong> balance — captures variations without losing intent control</li>
  <li><strong>Broad:</strong> greater reach and discovery — best with Smart Bidding and conversion goals</li>
</ul>
<strong>Negative keywords:</strong> block unwanted searches. Work in Exact <code>[term]</code>, Phrase <code>"term"</code> and Broad. Essential for any Search campaign.`,
            es: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Tipo</th><th style="padding:6px">Sintaxis</th><th style="padding:6px">Alcance</th></tr>
<tr><td style="padding:6px"><strong>Broad Match</strong></td><td style="padding:6px">zapatillas running</td><td style="padding:6px">Variaciones amplias, sinónimos, temas relacionados</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>Phrase Match</strong></td><td style="padding:6px">"zapatillas running"</td><td style="padding:6px">Contiene el significado de la frase, el orden puede variar</td></tr>
<tr><td style="padding:6px"><strong>Exact Match</strong></td><td style="padding:6px">[zapatillas running]</td><td style="padding:6px">Búsqueda exacta o variaciones muy cercanas</td></tr>
</table><br>
<strong>Cuándo usar cada uno:</strong>
<ul>
  <li><strong>Exact:</strong> máximo control, menor volumen — términos de alto valor y conversión conocida</li>
  <li><strong>Phrase:</strong> equilibrio — captura variaciones sin perder control del intent</li>
  <li><strong>Broad:</strong> mayor alcance y descubrimiento — mejor con Smart Bidding y objetivos de conversión</li>
</ul>
<strong>Palabras clave negativas:</strong> bloquean búsquedas no deseadas. Funcionan en Exact <code>[término]</code>, Phrase <code>"término"</code> y Broad. Esenciales para cualquier campaña Search.`,
          },
          tags: ['match-type', 'keyword', 'broad', 'exact', 'phrase', 'negativa'],
        },
        {
          q: { pt: 'O que é o Quality Score e quais fatores o compõem?', en: 'What is Quality Score and what factors make it up?', es: '¿Qué es el Quality Score y qué factores lo componen?' },
          a: {
            pt: `O <strong>Quality Score (Índice de Qualidade)</strong> é uma métrica de 1-10 que o Google atribui a cada palavra-chave.<br><br>
<strong>3 componentes:</strong>
<ul>
  <li><strong>Expected CTR (~40%):</strong> probabilidade de clique baseada no histórico da keyword</li>
  <li><strong>Ad Relevance (~30%):</strong> quão bem o texto do anúncio corresponde à intenção de busca</li>
  <li><strong>Landing Page Experience (~30%):</strong> relevância, velocidade, mobile-friendliness e taxa de rejeição da LP</li>
</ul>
<strong>Por que importa — Ad Rank:</strong><br>
<code>Ad Rank = Lance × Quality Score × Impacto das Extensões</code><br><br>
QS alto = pagar menos por posição mais alta. QS 10 pode pagar metade do CPC de um concorrente com QS 5 na mesma posição.<br><br>
<strong>Como melhorar:</strong> separar keywords em ad groups temáticos, usar a keyword no headline 1, garantir landing page específica e rápida.`,
            en: `<strong>Quality Score</strong> is a 1-10 metric Google assigns to each keyword.<br><br>
<strong>3 components:</strong>
<ul>
  <li><strong>Expected CTR (~40%):</strong> click probability based on keyword history</li>
  <li><strong>Ad Relevance (~30%):</strong> how well the ad text matches search intent</li>
  <li><strong>Landing Page Experience (~30%):</strong> relevance, speed, mobile-friendliness and bounce rate of the LP</li>
</ul>
<strong>Why it matters — Ad Rank:</strong><br>
<code>Ad Rank = Bid × Quality Score × Extension Impact</code><br><br>
High QS = pay less for a higher position. QS 10 may pay half the CPC of a competitor with QS 5 in the same position.<br><br>
<strong>How to improve:</strong> separate keywords into thematic ad groups, use keyword in headline 1, ensure specific and fast landing page.`,
            es: `El <strong>Quality Score (Índice de calidad)</strong> es una métrica del 1 al 10 que Google asigna a cada palabra clave.<br><br>
<strong>3 componentes:</strong>
<ul>
  <li><strong>Expected CTR (~40%):</strong> probabilidad de clic basada en el historial de la keyword</li>
  <li><strong>Ad Relevance (~30%):</strong> cuán bien el texto del anuncio corresponde a la intención de búsqueda</li>
  <li><strong>Landing Page Experience (~30%):</strong> relevancia, velocidad, mobile-friendliness y tasa de rebote de la LP</li>
</ul>
<strong>Por qué importa — Ad Rank:</strong><br>
<code>Ad Rank = Puja × Quality Score × Impacto de extensiones</code><br><br>
QS alto = pagar menos por una posición más alta. QS 10 puede pagar la mitad del CPC de un competidor con QS 5 en la misma posición.<br><br>
<strong>Cómo mejorar:</strong> separar keywords en ad groups temáticos, usar la keyword en el headline 1, garantizar landing page específica y rápida.`,
          },
          tags: ['Quality-Score', 'Ad-Rank', 'CTR', 'landing-page', 'relevância'],
        },
        {
          q: { pt: 'Quais são os principais tipos de campanha no Google Ads e quando usar cada um?', en: 'What are the main campaign types in Google Ads and when to use each?', es: '¿Cuáles son los principales tipos de campaña en Google Ads y cuándo usar cada uno?' },
          a: {
            pt: `<ul>
  <li><strong>Search:</strong> anúncios de texto nos resultados de busca. Usar quando há demanda ativa — o usuário já está buscando. Melhor canal para captura de demanda. KPI: CPC, CTR, CPA.</li>
  <li><strong>Display:</strong> banners em sites parceiros (GDN — 2M+ sites). Usar para awareness, remarketing e alcançar usuários em momento de entretenimento. KPI: CPM, Viewability.</li>
  <li><strong>Shopping:</strong> anúncios de produto com foto, nome e preço. Requer Google Merchant Center. Ideal para e-commerce. KPI: ROAS, CPC por produto.</li>
  <li><strong>Video (YouTube):</strong> TrueView pulável, Non-Skippable (15s), Bumper (6s). KPI: VCR, CPV, Brand Lift.</li>
  <li><strong>Performance Max:</strong> automação total — distribui budget em Search, Display, YouTube, Gmail, Maps e Discover via IA. Requer histórico de conversões. Menos transparente.</li>
  <li><strong>App:</strong> instalações e engajamento de apps no Google Play, Search, YouTube e Display. Totalmente automatizado.</li>
  <li><strong>Demand Gen:</strong> substituto do Discovery — campanhas visuais no YouTube, Gmail e Discover. Abordagem de interrupção (não intenção).</li>
</ul>`,
            en: `<ul>
  <li><strong>Search:</strong> text ads in search results. Use when there's active demand — user is already searching. Best channel for demand capture. KPI: CPC, CTR, CPA.</li>
  <li><strong>Display:</strong> banners on partner sites (GDN — 2M+ sites). Use for awareness, remarketing and reaching users in entertainment moments. KPI: CPM, Viewability.</li>
  <li><strong>Shopping:</strong> product ads with photo, name and price. Requires Google Merchant Center. Ideal for e-commerce. KPI: ROAS, CPC per product.</li>
  <li><strong>Video (YouTube):</strong> Skippable TrueView, Non-Skippable (15s), Bumper (6s). KPI: VCR, CPV, Brand Lift.</li>
  <li><strong>Performance Max:</strong> full automation — distributes budget across Search, Display, YouTube, Gmail, Maps and Discover via AI. Requires conversion history. Less transparent.</li>
  <li><strong>App:</strong> installs and engagement on Google Play, Search, YouTube and Display. Fully automated.</li>
  <li><strong>Demand Gen:</strong> Discovery replacement — visual campaigns on YouTube, Gmail and Discover. Interruption approach (not intent).</li>
</ul>`,
            es: `<ul>
  <li><strong>Search:</strong> anuncios de texto en los resultados de búsqueda. Usar cuando hay demanda activa. Mejor canal para captura de demanda. KPI: CPC, CTR, CPA.</li>
  <li><strong>Display:</strong> banners en sitios asociados (GDN — 2M+ sitios). Usar para awareness, remarketing. KPI: CPM, Viewability.</li>
  <li><strong>Shopping:</strong> anuncios de producto con foto, nombre y precio. Requiere Google Merchant Center. Ideal para e-commerce. KPI: ROAS.</li>
  <li><strong>Video (YouTube):</strong> TrueView omitible, Non-Skippable (15s), Bumper (6s). KPI: VCR, CPV, Brand Lift.</li>
  <li><strong>Performance Max:</strong> automatización total — distribuye presupuesto en Search, Display, YouTube, Gmail, Maps y Discover via IA. Requiere historial de conversiones. Menos transparente.</li>
  <li><strong>App:</strong> instalaciones y engagement en Google Play, Search, YouTube y Display. Totalmente automatizado.</li>
  <li><strong>Demand Gen:</strong> sustituto de Discovery — campañas visuales en YouTube, Gmail y Discover.</li>
</ul>`,
          },
          tags: ['Search', 'Display', 'Shopping', 'PMax', 'Video', 'App', 'tipos'],
        },
        {
          q: { pt: 'O que é o Ad Rank e como ele determina a posição do anúncio no leilão?', en: 'What is Ad Rank and how does it determine ad position in the auction?', es: '¿Qué es el Ad Rank y cómo determina la posición del anuncio en la subasta?' },
          a: {
            pt: `<strong>Ad Rank</strong> é a pontuação calculada em cada leilão que determina se seu anúncio aparece e em qual posição.<br><br>
<code>Ad Rank = Lance × Quality Score × Impacto das Extensões × Contexto da busca</code><br><br>
<strong>Fatores:</strong>
<ul>
  <li><strong>Bid:</strong> CPC máximo ou Target CPA/ROAS</li>
  <li><strong>Quality Score:</strong> CTR esperado + relevância + experiência da LP</li>
  <li><strong>Extensões:</strong> sitelinks, callouts, etc. Aumentam Ad Rank sem custo adicional</li>
  <li><strong>Contexto:</strong> hora, localização, dispositivo, query exata — recalculado em cada leilão</li>
</ul>
<strong>CPC Real (o que você paga):</strong><br>
Você nunca paga o lance máximo — paga o mínimo necessário para manter a posição:<br>
<code>CPC Real = Ad Rank do concorrente abaixo ÷ Seu QS + R$0,01</code><br><br>
<strong>Implicação:</strong> melhorar QS é frequentemente mais eficiente do que aumentar o lance.`,
            en: `<strong>Ad Rank</strong> is the score calculated at each auction that determines whether your ad shows and at what position.<br><br>
<code>Ad Rank = Bid × Quality Score × Extension Impact × Search Context</code><br><br>
<strong>Factors:</strong>
<ul>
  <li><strong>Bid:</strong> max CPC or Target CPA/ROAS</li>
  <li><strong>Quality Score:</strong> expected CTR + relevance + LP experience</li>
  <li><strong>Extensions:</strong> sitelinks, callouts, etc. Increase Ad Rank at no extra cost</li>
  <li><strong>Context:</strong> time, location, device, exact query — recalculated at every auction</li>
</ul>
<strong>Actual CPC (what you pay):</strong><br>
You never pay the max bid — you pay the minimum necessary to maintain position:<br>
<code>Actual CPC = Competitor's Ad Rank below ÷ Your QS + $0.01</code><br><br>
<strong>Implication:</strong> improving QS is often more efficient than increasing bid.`,
            es: `<strong>Ad Rank</strong> es la puntuación calculada en cada subasta que determina si tu anuncio aparece y en qué posición.<br><br>
<code>Ad Rank = Puja × Quality Score × Impacto de extensiones × Contexto de búsqueda</code><br><br>
<strong>Factores:</strong>
<ul>
  <li><strong>Bid:</strong> CPC máximo o Target CPA/ROAS</li>
  <li><strong>Quality Score:</strong> CTR esperado + relevancia + experiencia de la LP</li>
  <li><strong>Extensiones:</strong> sitelinks, callouts, etc. Aumentan el Ad Rank sin costo adicional</li>
  <li><strong>Contexto:</strong> hora, ubicación, dispositivo, query exacta — recalculado en cada subasta</li>
</ul>
<strong>CPC Real (lo que pagas):</strong><br>
Nunca pagas la puja máxima — pagas el mínimo necesario para mantener la posición:<br>
<code>CPC Real = Ad Rank del competidor debajo ÷ Tu QS + $0.01</code><br><br>
<strong>Implicación:</strong> mejorar el QS es frecuentemente más eficiente que aumentar la puja.`,
          },
          tags: ['Ad-Rank', 'leilão', 'Quality-Score', 'bid', 'CPC'],
        },
        {
          q: { pt: 'O que são extensões de anúncio (Assets) e quais os principais tipos?', en: 'What are ad extensions (Assets) and what are the main types?', es: '¿Qué son las extensiones de anuncio (Assets) y cuáles son los principales tipos?' },
          a: {
            pt: `<strong>Extensions/Assets</strong> são informações adicionais ao anúncio que aumentam visibilidade, CTR e Ad Rank — sem custo extra por exibição.<br><br>
<ul>
  <li><strong>Sitelinks:</strong> links para páginas específicas. Até 8, exibidos até 4 por vez. +20-30% de CTR típico.</li>
  <li><strong>Callout:</strong> textos curtos com diferenciais ("Frete Grátis", "Atendimento 24h"). Não clicáveis.</li>
  <li><strong>Structured Snippets:</strong> lista por categoria ("Serviços: SEO, Google Ads, Social"). Não clicáveis.</li>
  <li><strong>Call Extension:</strong> número de telefone — em mobile permite ligar diretamente.</li>
  <li><strong>Location Extension:</strong> endereço da empresa. Requer Google Business Profile vinculado.</li>
  <li><strong>Lead Form Extension:</strong> formulário nativo de captura de lead dentro do Google.</li>
  <li><strong>Price Extension:</strong> tabela de preços de produtos/serviços diretamente no anúncio.</li>
  <li><strong>Image Extension:</strong> imagem ao lado do anúncio de texto (disponível no Search).</li>
  <li><strong>Promotion Extension:</strong> destaca promoções com desconto, código e data.</li>
</ul>
<strong>Boas práticas:</strong> ativar todos os tipos relevantes — o Google escolhe automaticamente quais exibir para maximizar Ad Rank.`,
            en: `<strong>Extensions/Assets</strong> are additional information attached to the ad that increases visibility, CTR and Ad Rank — at no extra display cost.<br><br>
<ul>
  <li><strong>Sitelinks:</strong> links to specific pages. Up to 8, displayed up to 4 at a time. Typical +20-30% CTR.</li>
  <li><strong>Callout:</strong> short texts highlighting differentials ("Free Shipping", "24/7 Support"). Not clickable.</li>
  <li><strong>Structured Snippets:</strong> item list by category ("Services: SEO, Google Ads, Social"). Not clickable.</li>
  <li><strong>Call Extension:</strong> phone number — on mobile allows calling directly.</li>
  <li><strong>Location Extension:</strong> company address. Requires linked Google Business Profile.</li>
  <li><strong>Lead Form Extension:</strong> native lead capture form within Google.</li>
  <li><strong>Price Extension:</strong> pricing table directly in the ad.</li>
  <li><strong>Image Extension:</strong> image alongside text ad (available in Search).</li>
  <li><strong>Promotion Extension:</strong> highlights promotions with discount, code and date.</li>
</ul>
<strong>Best practices:</strong> activate all relevant types — Google automatically chooses which to show to maximize Ad Rank.`,
            es: `Las <strong>Extensions/Assets</strong> son información adicional adjunta al anuncio que aumenta visibilidad, CTR y Ad Rank — sin costo extra por visualización.<br><br>
<ul>
  <li><strong>Sitelinks:</strong> enlaces a páginas específicas. Hasta 8, mostrados hasta 4 a la vez. CTR típico +20-30%.</li>
  <li><strong>Callout:</strong> textos cortos con diferenciales ("Envío gratis", "Atención 24h"). No son clicables.</li>
  <li><strong>Structured Snippets:</strong> lista por categoría ("Servicios: SEO, Google Ads, Social"). No son clicables.</li>
  <li><strong>Call Extension:</strong> número de teléfono — en mobile permite llamar directamente.</li>
  <li><strong>Location Extension:</strong> dirección de la empresa. Requiere Google Business Profile vinculado.</li>
  <li><strong>Lead Form Extension:</strong> formulario nativo de captura de lead dentro de Google.</li>
  <li><strong>Price Extension:</strong> tabla de precios directamente en el anuncio.</li>
  <li><strong>Image Extension:</strong> imagen junto al anuncio de texto (disponible en Search).</li>
  <li><strong>Promotion Extension:</strong> destaca promociones con descuento, código y fecha.</li>
</ul>
<strong>Buenas prácticas:</strong> activar todos los tipos relevantes — Google elige automáticamente cuáles mostrar para maximizar el Ad Rank.`,
          },
          tags: ['extensões', 'assets', 'sitelinks', 'callout', 'CTR', 'Ad-Rank'],
        },
        {
          q: { pt: 'Quais são as principais estratégias de lance (bid strategies) no Google Ads?', en: 'What are the main bid strategies in Google Ads?', es: '¿Cuáles son las principales estrategias de puja en Google Ads?' },
          a: {
            pt: `<strong>Smart Bidding (IA):</strong>
<ul>
  <li><strong>Target CPA:</strong> maximiza conversões ao custo-por-aquisição alvo. Requer histórico. Ideal para geração de leads com CPL definido.</li>
  <li><strong>Target ROAS:</strong> maximiza valor de conversão com base no ROAS alvo. Ideal para e-commerce.</li>
  <li><strong>Maximize Conversions:</strong> usa todo o budget para o máximo de conversões sem restrição de CPA. Bom para iniciar.</li>
  <li><strong>Maximize Conversion Value:</strong> maximiza valor total de conversões. Requer valores configurados.</li>
  <li><strong>Enhanced CPC:</strong> manual com ajuste automático — aumenta lance em até 30% quando detecta alta probabilidade de conversão. Em desuso.</li>
</ul>
<strong>Manual:</strong>
<ul>
  <li><strong>Manual CPC:</strong> controle total por keyword. Mais trabalho mas visibilidade granular. Útil com baixo volume de conversões (&lt;30/mês).</li>
  <li><strong>CPM / vCPM:</strong> Display e YouTube — paga por mil impressões.</li>
  <li><strong>CPV:</strong> Video — paga quando usuário assiste 30s+ ou a duração completa.</li>
</ul>
<strong>Regra:</strong> Smart Bidding precisa de mínimo 30-50 conversões/mês para o algoritmo ter dados suficientes.`,
            en: `<strong>Smart Bidding (AI):</strong>
<ul>
  <li><strong>Target CPA:</strong> maximizes conversions at target cost-per-acquisition. Requires history. Ideal for lead gen with defined CPL.</li>
  <li><strong>Target ROAS:</strong> maximizes conversion value based on target ROAS. Ideal for e-commerce.</li>
  <li><strong>Maximize Conversions:</strong> uses entire budget for max conversions without CPA constraint. Good to start.</li>
  <li><strong>Maximize Conversion Value:</strong> maximizes total conversion value. Requires configured values.</li>
  <li><strong>Enhanced CPC:</strong> manual with auto-adjustment — increases bid by up to 30% when detecting high conversion probability. Deprecating.</li>
</ul>
<strong>Manual:</strong>
<ul>
  <li><strong>Manual CPC:</strong> full control per keyword. More work but granular visibility. Useful with low conversion volume (&lt;30/month).</li>
  <li><strong>CPM / vCPM:</strong> Display and YouTube — pays per thousand impressions.</li>
  <li><strong>CPV:</strong> Video — pays when user watches 30s+ or full duration.</li>
</ul>
<strong>Rule:</strong> Smart Bidding needs minimum 30-50 conversions/month for enough data.`,
            es: `<strong>Smart Bidding (IA):</strong>
<ul>
  <li><strong>Target CPA:</strong> maximiza conversiones al costo-por-adquisición objetivo. Requiere historial. Ideal para generación de leads con CPL definido.</li>
  <li><strong>Target ROAS:</strong> maximiza valor de conversión basándose en el ROAS objetivo. Ideal para e-commerce.</li>
  <li><strong>Maximize Conversions:</strong> usa todo el presupuesto para el máximo de conversiones sin restricción de CPA. Bueno para comenzar.</li>
  <li><strong>Maximize Conversion Value:</strong> maximiza el valor total de conversiones. Requiere valores configurados.</li>
  <li><strong>Enhanced CPC:</strong> manual con ajuste automático. En desuso.</li>
</ul>
<strong>Manual:</strong>
<ul>
  <li><strong>Manual CPC:</strong> control total por keyword. Útil con bajo volumen de conversiones (&lt;30/mes).</li>
  <li><strong>CPM / vCPM:</strong> Display y YouTube — paga por mil impresiones.</li>
  <li><strong>CPV:</strong> Video — paga cuando el usuario ve 30s+ o la duración completa.</li>
</ul>
<strong>Regla:</strong> Smart Bidding necesita mínimo 30-50 conversiones/mes para tener suficientes datos.`,
          },
          tags: ['bid-strategy', 'Smart-Bidding', 'tCPA', 'tROAS', 'Manual-CPC'],
        },
        {
          q: { pt: 'O que é o Search Terms Report e como usá-lo na otimização?', en: 'What is the Search Terms Report and how to use it in optimization?', es: '¿Qué es el Search Terms Report y cómo usarlo en la optimización?' },
          a: {
            pt: `O <strong>Search Terms Report</strong> mostra as pesquisas reais que acionaram seus anúncios — diferente das keywords configuradas.<br><br>
<strong>Por que é fundamental:</strong>
<ul>
  <li>Revela termos irrelevantes que estão desperdiçando budget</li>
  <li>Fonte primária para palavras-chave negativas</li>
  <li>Identifica oportunidades de novas keywords positivas</li>
  <li>Mostra o real intent do usuário que converte</li>
</ul>
<strong>Acesso:</strong> Google Ads → Keywords → Search Terms<br><br>
<strong>Fluxo semanal de otimização:</strong>
<ol>
  <li>Filtrar por período (última semana/quinzena)</li>
  <li>Termos com impressões mas zero cliques e irrelevantes → negativa</li>
  <li>Termos com cliques mas zero conversões após volume suficiente → negativa</li>
  <li>Termos com boa conversão sem keyword exata associada → adicionar como [Exact Match]</li>
  <li>Termos que revelam intent diferente do esperado → ajustar copy do anúncio</li>
</ol>
<strong>Limitação:</strong> desde 2020 o Google omite termos de baixo volume por "privacidade" — você não vê 100% das pesquisas que acionaram seus anúncios.`,
            en: `The <strong>Search Terms Report</strong> shows the actual searches that triggered your ads — different from configured keywords.<br><br>
<strong>Why it's essential:</strong>
<ul>
  <li>Reveals irrelevant terms wasting budget</li>
  <li>Primary source for negative keywords</li>
  <li>Identifies new positive keyword opportunities</li>
  <li>Shows real intent of the converting user</li>
</ul>
<strong>Access:</strong> Google Ads → Keywords → Search Terms<br><br>
<strong>Weekly optimization workflow:</strong>
<ol>
  <li>Filter by period (last week/two weeks)</li>
  <li>Terms with impressions but zero clicks and irrelevant → negative</li>
  <li>Terms with clicks but zero conversions after sufficient volume → negative</li>
  <li>Terms with good conversion without exact keyword → add as [Exact Match]</li>
  <li>Terms revealing different intent than expected → adjust ad copy</li>
</ol>
<strong>Limitation:</strong> since 2020 Google omits low-volume terms for "privacy" — you don't see 100% of searches that triggered your ads.`,
            es: `El <strong>Search Terms Report</strong> muestra las búsquedas reales que activaron tus anuncios — diferente de las keywords configuradas.<br><br>
<strong>Por qué es fundamental:</strong>
<ul>
  <li>Revela términos irrelevantes que desperdician presupuesto</li>
  <li>Fuente primaria para palabras clave negativas</li>
  <li>Identifica oportunidades de nuevas keywords positivas</li>
  <li>Muestra el intent real del usuario que convierte</li>
</ul>
<strong>Acceso:</strong> Google Ads → Keywords → Search Terms<br><br>
<strong>Flujo semanal de optimización:</strong>
<ol>
  <li>Filtrar por período (última semana/quincena)</li>
  <li>Términos con impresiones pero cero clics e irrelevantes → negativa</li>
  <li>Términos con clics pero cero conversiones tras volumen suficiente → negativa</li>
  <li>Términos con buena conversión sin keyword exacta asociada → agregar como [Exact Match]</li>
  <li>Términos que revelan intent diferente al esperado → ajustar copy del anuncio</li>
</ol>
<strong>Limitación:</strong> desde 2020 Google omite términos de bajo volumen por "privacidad".`,
          },
          tags: ['Search-Terms', 'negativas', 'keyword', 'otimização', 'intent'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: { pt: 'O que é o Performance Max (PMax) e quais suas vantagens e desvantagens?', en: 'What is Performance Max (PMax) and what are its advantages and disadvantages?', es: '¿Qué es Performance Max (PMax) y cuáles son sus ventajas y desventajas?' },
          a: {
            pt: `<strong>Performance Max</strong> distribui budget em todos os canais Google (Search, Display, YouTube, Gmail, Maps, Discover) via IA em uma única campanha.<br><br>
<strong>Como funciona:</strong>
<ul>
  <li>Você fornece <strong>Asset Groups</strong>: headlines, descrições, imagens, vídeos, logos e URLs</li>
  <li>IA gera combinações para cada canal e audiência</li>
  <li><strong>Audience Signals:</strong> forneça remarketing, customer match e interesses como ponto de partida para expansão</li>
</ul>
<strong>Vantagens:</strong>
<ul>
  <li>Cobertura total da rede Google com uma campanha</li>
  <li>Pode descobrir segmentos não mapeados</li>
  <li>Bom para e-commerce e geração de leads com histórico robusto de conversões</li>
</ul>
<strong>Desvantagens:</strong>
<ul>
  <li>Baixa transparência — sem breakdown por canal ou Search Terms Report detalhado</li>
  <li>Pode canibalizar campanhas de Search — monitorar Search Impression Share</li>
  <li>Requer mínimo 30-50 conversões/mês</li>
  <li>Brand terms podem ser acionados sem controle</li>
</ul>
<strong>Melhor prática:</strong> rodar PMax + Search de brand terms em paralelo. PMax cobre rede ampla, Search garante controle sobre termos de alto valor.`,
            en: `<strong>Performance Max</strong> distributes budget across all Google channels (Search, Display, YouTube, Gmail, Maps, Discover) via AI in a single campaign.<br><br>
<strong>How it works:</strong>
<ul>
  <li>You provide <strong>Asset Groups</strong>: headlines, descriptions, images, videos, logos and URLs</li>
  <li>AI generates combinations for each channel and audience</li>
  <li><strong>Audience Signals:</strong> provide remarketing, customer match and interests as a starting point for expansion</li>
</ul>
<strong>Advantages:</strong>
<ul>
  <li>Full Google network coverage with one campaign</li>
  <li>Can discover unmapped segments</li>
  <li>Good for e-commerce and lead gen with robust conversion history</li>
</ul>
<strong>Disadvantages:</strong>
<ul>
  <li>Low transparency — no breakdown by channel or detailed Search Terms Report</li>
  <li>Can cannibalize Search campaigns — monitor Search Impression Share</li>
  <li>Requires minimum 30-50 conversions/month</li>
  <li>Brand terms may be triggered without control</li>
</ul>
<strong>Best practice:</strong> run PMax + brand Search campaigns in parallel. PMax covers broad network, Search ensures control over high-value terms.`,
            es: `<strong>Performance Max</strong> distribuye el presupuesto en todos los canales de Google (Search, Display, YouTube, Gmail, Maps, Discover) via IA en una sola campaña.<br><br>
<strong>Cómo funciona:</strong>
<ul>
  <li>Proporcionas <strong>Asset Groups</strong>: headlines, descripciones, imágenes, videos, logos y URLs</li>
  <li>La IA genera combinaciones para cada canal y audiencia</li>
  <li><strong>Audience Signals:</strong> proporciona remarketing, customer match e intereses como punto de partida</li>
</ul>
<strong>Ventajas:</strong>
<ul>
  <li>Cobertura total de la red de Google con una campaña</li>
  <li>Puede descubrir segmentos no mapeados</li>
  <li>Bueno para e-commerce y generación de leads con historial robusto</li>
</ul>
<strong>Desventajas:</strong>
<ul>
  <li>Baja transparencia — sin desglose por canal ni Search Terms Report detallado</li>
  <li>Puede canibalizar campañas de Search</li>
  <li>Requiere mínimo 30-50 conversiones/mes</li>
</ul>
<strong>Mejor práctica:</strong> ejecutar PMax + Search de brand terms en paralelo.`,
          },
          tags: ['PMax', 'Performance-Max', 'automação', 'AI', 'transparência'],
        },
        {
          q: { pt: 'Como funciona o Google Shopping e o Google Merchant Center?', en: 'How does Google Shopping and Google Merchant Center work?', es: '¿Cómo funciona Google Shopping y Google Merchant Center?' },
          a: {
            pt: `<strong>Google Shopping</strong> exibe produto com foto, nome e preço nos resultados de busca — ideal para e-commerce.<br><br>
<strong>Estrutura:</strong>
<ul>
  <li><strong>Google Merchant Center:</strong> plataforma onde o e-commerce cadastra o feed de produtos. Conectado ao Google Ads.</li>
  <li><strong>Product Feed:</strong> arquivo (XML, CSV, Sheets, API) com todos os atributos. Obrigatórios: id, title, description, link, image_link, price, availability, condition, gtin.</li>
  <li><strong>Google Ads:</strong> onde as campanhas de Shopping são criadas. O Google decide QUANDO mostrar cada produto com base no feed — não há keywords manuais.</li>
</ul>
<strong>Fatores de ranking (não apenas lance):</strong>
<ul>
  <li>Qualidade e completude do feed</li>
  <li>Preço competitivo</li>
  <li>Avaliações de produto (Google Product Ratings)</li>
  <li>CTR histórico do produto</li>
</ul>
<strong>Otimização do title (campo mais importante):</strong><br>
"Nike Air Max 270 Masculino Branco 42" supera "Tênis Nike" em qualquer leilão de Shopping. Incluir: marca + modelo + atributos relevantes (tamanho, cor, material).`,
            en: `<strong>Google Shopping</strong> displays products with photo, name and price in search results — ideal for e-commerce.<br><br>
<strong>Structure:</strong>
<ul>
  <li><strong>Google Merchant Center:</strong> platform where e-commerce registers the product feed. Connected to Google Ads.</li>
  <li><strong>Product Feed:</strong> file (XML, CSV, Sheets, API) with all attributes. Required: id, title, description, link, image_link, price, availability, condition, gtin.</li>
  <li><strong>Google Ads:</strong> where Shopping campaigns are created. Google decides WHEN to show each product based on the feed — no manual keywords.</li>
</ul>
<strong>Ranking factors (not just bid):</strong>
<ul>
  <li>Feed quality and completeness</li>
  <li>Competitive price</li>
  <li>Product reviews (Google Product Ratings)</li>
  <li>Historical product CTR</li>
</ul>
<strong>Title optimization (most important field):</strong><br>
"Nike Air Max 270 Men's White Size 10" beats "Nike Sneakers" in any Shopping auction. Include: brand + model + relevant attributes (size, color, material).`,
            es: `<strong>Google Shopping</strong> muestra productos con foto, nombre y precio en los resultados de búsqueda — ideal para e-commerce.<br><br>
<strong>Estructura:</strong>
<ul>
  <li><strong>Google Merchant Center:</strong> plataforma donde el e-commerce registra el feed de productos. Conectado a Google Ads.</li>
  <li><strong>Product Feed:</strong> archivo (XML, CSV, Sheets, API) con todos los atributos. Obligatorios: id, title, description, link, image_link, price, availability, condition, gtin.</li>
  <li><strong>Google Ads:</strong> donde se crean las campañas de Shopping. Google decide CUÁNDO mostrar cada producto basándose en el feed — no hay keywords manuales.</li>
</ul>
<strong>Factores de ranking (no solo puja):</strong>
<ul>
  <li>Calidad y completitud del feed</li>
  <li>Precio competitivo</li>
  <li>Reseñas de producto (Google Product Ratings)</li>
  <li>CTR histórico del producto</li>
</ul>
<strong>Optimización del título (campo más importante):</strong><br>
"Nike Air Max 270 Hombre Blanco Talla 43" supera "Zapatillas Nike" en cualquier subasta. Incluir: marca + modelo + atributos relevantes.`,
          },
          tags: ['Shopping', 'Merchant-Center', 'feed', 'e-commerce', 'ROAS', 'title'],
        },
        {
          q: { pt: 'Como funciona o remarketing no Google Ads? Quais os tipos disponíveis?', en: 'How does remarketing work in Google Ads? What types are available?', es: '¿Cómo funciona el remarketing en Google Ads? ¿Qué tipos están disponibles?' },
          a: {
            pt: `<strong>Remarketing</strong> exibe anúncios para usuários que já interagiram com seu site, app ou canal YouTube.<br><br>
<strong>Tipos:</strong>
<ul>
  <li><strong>Standard Remarketing (Display):</strong> banners na GDN para visitantes do site. Segmentável por página, tempo de visita, ações.</li>
  <li><strong>Dynamic Remarketing:</strong> exibe o produto exato que o usuário visualizou. Requer feed no Merchant Center. Alta relevância → maior CTR.</li>
  <li><strong>RLSA (Remarketing Lists for Search Ads):</strong> modifica lances no Search para quem já visitou o site. Ex: +50% de lance para quem acessou /carrinho. Não exclui outros usuários.</li>
  <li><strong>Video Remarketing:</strong> segmentar espectadores do canal YouTube ou vídeos específicos.</li>
  <li><strong>Customer Match:</strong> upload de lista de emails do CRM. Funciona em Search, Display, YouTube e Gmail. Matching rate ~50-60%.</li>
</ul>
<strong>Janela de remarketing:</strong> até 540 dias para Display/YouTube, 90 dias para Search.<br>
<strong>Mínimo de audiência:</strong> 1.000 usuários para Display/Search/YouTube.`,
            en: `<strong>Remarketing</strong> shows ads to users who already interacted with your site, app or YouTube channel.<br><br>
<strong>Types:</strong>
<ul>
  <li><strong>Standard Remarketing (Display):</strong> GDN banners for site visitors. Segmentable by page, visit time, actions.</li>
  <li><strong>Dynamic Remarketing:</strong> shows the exact product the user viewed. Requires Merchant Center feed. High relevance → higher CTR.</li>
  <li><strong>RLSA (Remarketing Lists for Search Ads):</strong> modifies Search bids for site visitors. E.g. +50% bid for those who visited /cart. Doesn't exclude other users.</li>
  <li><strong>Video Remarketing:</strong> target YouTube channel viewers or specific videos.</li>
  <li><strong>Customer Match:</strong> email list upload from CRM. Works in Search, Display, YouTube and Gmail. Matching rate ~50-60%.</li>
</ul>
<strong>Remarketing window:</strong> up to 540 days for Display/YouTube, 90 days for Search.<br>
<strong>Minimum audience:</strong> 1,000 users for Display/Search/YouTube.`,
            es: `El <strong>remarketing</strong> muestra anuncios a usuarios que ya interactuaron con tu sitio, app o canal de YouTube.<br><br>
<strong>Tipos:</strong>
<ul>
  <li><strong>Standard Remarketing (Display):</strong> banners en la GDN para visitantes del sitio. Segmentable por página, tiempo de visita, acciones.</li>
  <li><strong>Dynamic Remarketing:</strong> muestra el producto exacto que el usuario vio. Requiere feed en Merchant Center. Alta relevancia → mayor CTR.</li>
  <li><strong>RLSA (Remarketing Lists for Search Ads):</strong> modifica pujas en Search para visitantes del sitio. Ej: +50% de puja para quienes visitaron /carrito. No excluye a otros usuarios.</li>
  <li><strong>Video Remarketing:</strong> segmentar espectadores del canal de YouTube o videos específicos.</li>
  <li><strong>Customer Match:</strong> carga de lista de emails del CRM. Funciona en Search, Display, YouTube y Gmail. Tasa de matching ~50-60%.</li>
</ul>
<strong>Ventana de remarketing:</strong> hasta 540 días para Display/YouTube, 90 días para Search.<br>
<strong>Mínimo de audiencia:</strong> 1,000 usuarios para Display/Search/YouTube.`,
          },
          tags: ['remarketing', 'RLSA', 'Customer-Match', 'Dynamic', 'audiência'],
        },
        {
          q: { pt: 'Como configurar o Conversion Tracking no Google Ads e quais os modelos de atribuição disponíveis?', en: 'How to set up Conversion Tracking in Google Ads and what attribution models are available?', es: '¿Cómo configurar el Conversion Tracking en Google Ads y qué modelos de atribución están disponibles?' },
          a: {
            pt: `<strong>Conversion Tracking</strong> mede ações valiosas após cliques em anúncios — fundamental para Smart Bidding funcionar.<br><br>
<strong>Tipos de conversão:</strong>
<ul>
  <li>Website Actions (compra, cadastro, clique em botão, pageview de obrigado)</li>
  <li>Phone Calls (de extensões de chamada)</li>
  <li>App Downloads (instalações e eventos in-app)</li>
  <li>Import GA4 (metas e eventos do Google Analytics 4)</li>
  <li>Import CRM (conversões offline do Salesforce/HubSpot)</li>
</ul>
<strong>Configuração de conversão de website:</strong>
<ol>
  <li>Google Ads → Tools → Conversions → New Conversion → Website</li>
  <li>Definir: nome, categoria, valor (fixo ou variável), contagem (every vs. one per click)</li>
  <li>Janela de atribuição: padrão 30d clique / 1d view</li>
  <li>Implementar via gtag.js no código ou via GTM</li>
</ol>
<strong>Modelos de atribuição:</strong>
<ul>
  <li><strong>Last Click:</strong> 100% ao último clique (legado)</li>
  <li><strong>First Click:</strong> 100% ao primeiro clique</li>
  <li><strong>Linear:</strong> divide igualmente entre todos os cliques</li>
  <li><strong>Time Decay:</strong> mais crédito para cliques mais próximos da conversão</li>
  <li><strong>Position Based:</strong> 40% primeiro, 40% último, 20% dividido no meio</li>
  <li><strong>Data-Driven (recomendado):</strong> IA distribui baseada em padrões reais da conta. Requer volume mínimo de conversões.</li>
</ul>`,
            en: `<strong>Conversion Tracking</strong> measures valuable actions after ad clicks — fundamental for Smart Bidding to work.<br><br>
<strong>Conversion types:</strong>
<ul>
  <li>Website Actions (purchase, sign-up, button click, thank-you pageview)</li>
  <li>Phone Calls (from call extensions)</li>
  <li>App Downloads (installs and in-app events)</li>
  <li>Import GA4 (Google Analytics 4 goals and events)</li>
  <li>Import CRM (offline conversions from Salesforce/HubSpot)</li>
</ul>
<strong>Website conversion setup:</strong>
<ol>
  <li>Google Ads → Tools → Conversions → New Conversion → Website</li>
  <li>Define: name, category, value (fixed or variable), count (every vs. one per click)</li>
  <li>Attribution window: default 30d click / 1d view</li>
  <li>Implement via gtag.js in code or via GTM</li>
</ol>
<strong>Attribution models:</strong>
<ul>
  <li><strong>Last Click:</strong> 100% to last click (legacy)</li>
  <li><strong>First Click:</strong> 100% to first click</li>
  <li><strong>Linear:</strong> divides equally among all clicks</li>
  <li><strong>Time Decay:</strong> more credit for clicks closer to conversion</li>
  <li><strong>Position Based:</strong> 40% first, 40% last, 20% divided in middle</li>
  <li><strong>Data-Driven (recommended):</strong> AI distributes based on actual account patterns. Requires minimum conversion volume.</li>
</ul>`,
            es: `El <strong>Conversion Tracking</strong> mide acciones valiosas después de clics en anuncios — fundamental para que funcione Smart Bidding.<br><br>
<strong>Tipos de conversión:</strong>
<ul>
  <li>Website Actions (compra, registro, clic en botón, pageview de gracias)</li>
  <li>Phone Calls (de extensiones de llamada)</li>
  <li>App Downloads (instalaciones y eventos in-app)</li>
  <li>Import GA4 (metas y eventos de Google Analytics 4)</li>
  <li>Import CRM (conversiones offline de Salesforce/HubSpot)</li>
</ul>
<strong>Configuración de conversión de website:</strong>
<ol>
  <li>Google Ads → Tools → Conversions → New Conversion → Website</li>
  <li>Definir: nombre, categoría, valor (fijo o variable), conteo (every vs. one per click)</li>
  <li>Ventana de atribución: por defecto 30d clic / 1d view</li>
  <li>Implementar via gtag.js en el código o via GTM</li>
</ol>
<strong>Modelos de atribución:</strong>
<ul>
  <li><strong>Last Click:</strong> 100% al último clic (legado)</li>
  <li><strong>First Click:</strong> 100% al primer clic</li>
  <li><strong>Linear:</strong> divide igualmente entre todos los clics</li>
  <li><strong>Time Decay:</strong> más crédito para clics más cercanos a la conversión</li>
  <li><strong>Position Based:</strong> 40% primero, 40% último, 20% dividido en el medio</li>
  <li><strong>Data-Driven (recomendado):</strong> IA distribuye basándose en patrones reales de la cuenta.</li>
</ul>`,
          },
          tags: ['Conversion-Tracking', 'atribuição', 'Smart-Bidding', 'GTM', 'Data-Driven'],
        },
        {
          q: { pt: 'Como interpretar o Impression Share (IS) e seus componentes para diagnóstico de campanhas?', en: 'How to interpret Impression Share (IS) and its components for campaign diagnosis?', es: '¿Cómo interpretar el Impression Share (IS) y sus componentes para diagnóstico de campañas?' },
          a: {
            pt: `O <strong>Impression Share</strong> revela quanto da demanda elegível você está capturando — e por que está perdendo o restante.<br><br>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Métrica</th><th style="padding:6px">Significado</th><th style="padding:6px">Ação</th></tr>
<tr><td style="padding:6px"><strong>Search IS</strong></td><td style="padding:6px">% de elegíveis em que apareceu</td><td style="padding:6px">Meta: &gt;80% brand, &gt;40% genérico</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>IS Lost (Budget)</strong></td><td style="padding:6px">% perdida por budget esgotado</td><td style="padding:6px">→ Aumentar budget diário</td></tr>
<tr><td style="padding:6px"><strong>IS Lost (Rank)</strong></td><td style="padding:6px">% perdida por Ad Rank baixo</td><td style="padding:6px">→ Melhorar QS ou aumentar lance</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>Top IS</strong></td><td style="padding:6px">% acima dos resultados orgânicos</td><td style="padding:6px">Meta: &gt;90% brand, &gt;50% competitivo</td></tr>
<tr><td style="padding:6px"><strong>Abs. Top IS</strong></td><td style="padding:6px">% na posição #1 exata</td><td style="padding:6px">Meta: &gt;50% para brand</td></tr>
</table><br>
<strong>Diagnóstico por cenário:</strong>
<ul>
  <li>IS 40% com Lost Budget 35% e Lost Rank 25% → problema misto: aumentar budget primeiro, depois QS</li>
  <li>IS 60% com Lost Budget 0% e Lost Rank 40% → problema de relevância/lance: melhorar QS ou CPC</li>
  <li>IS 90%+, Top IS 60% → boa cobertura mas budget indo para posições baixas: avaliar lance para top</li>
</ul>
<strong>Limitação:</strong> IS é sobre impressões ELEGÍVEIS, não o universo total de buscas.`,
            en: `<strong>Impression Share</strong> reveals how much of the eligible demand you're capturing — and why you're losing the rest.<br><br>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Metric</th><th style="padding:6px">Meaning</th><th style="padding:6px">Action</th></tr>
<tr><td style="padding:6px"><strong>Search IS</strong></td><td style="padding:6px">% of eligibles where you appeared</td><td style="padding:6px">Target: &gt;80% brand, &gt;40% generic</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>IS Lost (Budget)</strong></td><td style="padding:6px">% lost due to exhausted budget</td><td style="padding:6px">→ Increase daily budget</td></tr>
<tr><td style="padding:6px"><strong>IS Lost (Rank)</strong></td><td style="padding:6px">% lost due to low Ad Rank</td><td style="padding:6px">→ Improve QS or increase bid</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>Top IS</strong></td><td style="padding:6px">% above organic results</td><td style="padding:6px">Target: &gt;90% brand, &gt;50% competitive</td></tr>
<tr><td style="padding:6px"><strong>Abs. Top IS</strong></td><td style="padding:6px">% in exact position #1</td><td style="padding:6px">Target: &gt;50% for brand</td></tr>
</table><br>
<strong>Diagnosis by scenario:</strong>
<ul>
  <li>IS 40% with Lost Budget 35% and Lost Rank 25% → mixed problem: increase budget first, then QS</li>
  <li>IS 60% with Lost Budget 0% and Lost Rank 40% → relevance/bid problem: improve QS or CPC</li>
  <li>IS 90%+, Top IS 60% → good coverage but budget going to low positions: evaluate bid for top</li>
</ul>
<strong>Limitation:</strong> IS is calculated on ELIGIBLE impressions, not the total search universe.`,
            es: `El <strong>Impression Share</strong> revela qué parte de la demanda elegible estás capturando — y por qué estás perdiendo el resto.<br><br>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Métrica</th><th style="padding:6px">Significado</th><th style="padding:6px">Acción</th></tr>
<tr><td style="padding:6px"><strong>Search IS</strong></td><td style="padding:6px">% de elegibles en los que apareciste</td><td style="padding:6px">Meta: &gt;80% brand, &gt;40% genérico</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>IS Lost (Budget)</strong></td><td style="padding:6px">% perdida por presupuesto agotado</td><td style="padding:6px">→ Aumentar presupuesto diario</td></tr>
<tr><td style="padding:6px"><strong>IS Lost (Rank)</strong></td><td style="padding:6px">% perdida por Ad Rank bajo</td><td style="padding:6px">→ Mejorar QS o aumentar puja</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>Top IS</strong></td><td style="padding:6px">% sobre los resultados orgánicos</td><td style="padding:6px">Meta: &gt;90% brand, &gt;50% competitivo</td></tr>
<tr><td style="padding:6px"><strong>Abs. Top IS</strong></td><td style="padding:6px">% en la posición #1 exacta</td><td style="padding:6px">Meta: &gt;50% para brand</td></tr>
</table><br>
<strong>Diagnóstico por escenario:</strong>
<ul>
  <li>IS 40% con Lost Budget 35% y Lost Rank 25% → problema mixto: aumentar presupuesto primero, luego QS</li>
  <li>IS 60% con Lost Budget 0% y Lost Rank 40% → problema de relevancia/puja: mejorar QS o CPC</li>
  <li>IS 90%+, Top IS 60% → buena cobertura pero presupuesto yendo a posiciones bajas: evaluar puja para top</li>
</ul>`,
          },
          tags: ['Impression-Share', 'IS', 'budget', 'Ad-Rank', 'diagnóstico'],
        },
        {
          q: { pt: 'Como usar o Auction Insights para análise competitiva no Google Ads?', en: 'How to use Auction Insights for competitive analysis in Google Ads?', es: '¿Cómo usar Auction Insights para análisis competitivo en Google Ads?' },
          a: {
            pt: `O <strong>Auction Insights</strong> compara sua performance com concorrentes que participaram dos mesmos leilões.<br><br>
<strong>Métricas disponíveis:</strong>
<ul>
  <li><strong>Impression Share:</strong> % de leilões em que você apareceu vs. total de elegíveis</li>
  <li><strong>Overlap Rate:</strong> % das suas impressões em que o concorrente também apareceu</li>
  <li><strong>Position Above Rate:</strong> % das vezes que o concorrente apareceu acima de você</li>
  <li><strong>Top of Page Rate:</strong> % das impressões no topo da página (posições 1-3)</li>
  <li><strong>Absolute Top of Page Rate:</strong> % na posição #1 exata</li>
  <li><strong>Outranking Share:</strong> % dos leilões em que você apareceu mais alto OU o concorrente não apareceu</li>
</ul>
<strong>Como usar:</strong>
<ul>
  <li>IS baixo + Lost IS Budget → aumentar budget</li>
  <li>IS baixo + Lost IS Rank → melhorar QS ou lance</li>
  <li>Concorrente com Outranking Share alto → revisar lance e QS para keywords-chave</li>
  <li>Novos players aparecendo → monitoramento de entrada de concorrentes no mercado</li>
</ul>
<strong>Disponível para:</strong> Search e Shopping. NÃO disponível para Display ou Video.`,
            en: `<strong>Auction Insights</strong> compares your performance with competitors who participated in the same auctions.<br><br>
<strong>Available metrics:</strong>
<ul>
  <li><strong>Impression Share:</strong> % of auctions you appeared in vs. total eligible</li>
  <li><strong>Overlap Rate:</strong> % of your impressions where competitor also appeared</li>
  <li><strong>Position Above Rate:</strong> % of times competitor appeared above you</li>
  <li><strong>Top of Page Rate:</strong> % of impressions at top of page (positions 1-3)</li>
  <li><strong>Absolute Top of Page Rate:</strong> % in exact position #1</li>
  <li><strong>Outranking Share:</strong> % of auctions where you appeared higher OR competitor didn't appear</li>
</ul>
<strong>How to use:</strong>
<ul>
  <li>Low IS + Lost IS Budget → increase budget</li>
  <li>Low IS + Lost IS Rank → improve QS or bid</li>
  <li>Competitor with high Outranking Share → review bid and QS for key keywords</li>
  <li>New players appearing → monitor competitor market entry</li>
</ul>
<strong>Available for:</strong> Search and Shopping. NOT available for Display or Video.`,
            es: `<strong>Auction Insights</strong> compara tu rendimiento con competidores que participaron en las mismas subastas.<br><br>
<strong>Métricas disponibles:</strong>
<ul>
  <li><strong>Impression Share:</strong> % de subastas en las que apareciste vs. total elegibles</li>
  <li><strong>Overlap Rate:</strong> % de tus impresiones en las que el competidor también apareció</li>
  <li><strong>Position Above Rate:</strong> % de las veces que el competidor apareció sobre ti</li>
  <li><strong>Top of Page Rate:</strong> % de impresiones en la parte superior (posiciones 1-3)</li>
  <li><strong>Absolute Top of Page Rate:</strong> % en la posición #1 exacta</li>
  <li><strong>Outranking Share:</strong> % de subastas en las que apareciste más alto O el competidor no apareció</li>
</ul>
<strong>Cómo usar:</strong>
<ul>
  <li>IS bajo + Lost IS Budget → aumentar presupuesto</li>
  <li>IS bajo + Lost IS Rank → mejorar QS o puja</li>
  <li>Competidor con alto Outranking Share → revisar puja y QS para keywords clave</li>
  <li>Nuevos players apareciendo → monitorear entrada de competidores al mercado</li>
</ul>
<strong>Disponible para:</strong> Search y Shopping. NO disponible para Display o Video.`,
          },
          tags: ['Auction-Insights', 'competidor', 'Impression-Share', 'análise', 'Search'],
        },
        {
          q: { pt: 'Como analisar e otimizar campanhas de Display no Google Ads?', en: 'How to analyze and optimize Display campaigns in Google Ads?', es: '¿Cómo analizar y optimizar campañas de Display en Google Ads?' },
          a: {
            pt: `<strong>Métricas críticas para Display:</strong>
<ul>
  <li><strong>Viewability (% Viewable Impressions):</strong> meta &gt;70%. Impressões não viewable são desperdício.</li>
  <li><strong>CTR:</strong> 0.1-0.3% é normal no Display. CTR muito alto pode indicar invalid traffic.</li>
  <li><strong>View-Through Conversions (VTC):</strong> conversões de quem viu mas não clicou. Questionar se a janela de 30 dias faz sentido para o ciclo do negócio.</li>
</ul>
<strong>Relatório de Placements — onde o budget vai parar:</strong>
<ul>
  <li>Campaigns → Display → Placements → Where Ads Showed</li>
  <li>Excluir: apps mobile irrelevantes (frequentemente fraudulentos), sites de baixa qualidade, conteúdo infantil</li>
  <li>Criar listas de exclusão de placements compartilhadas entre campanhas</li>
</ul>
<strong>Brand Safety (exclusões essenciais):</strong>
<ul>
  <li>Tópicos sensíveis: violência, conteúdo adulto, desastres</li>
  <li>Parked Domains (páginas de domínio sem conteúdo)</li>
  <li>Configuração: Standard, Limited ou Expanded inventory</li>
</ul>
<strong>Audience targeting no Display:</strong>
<ul>
  <li><strong>In-Market Audiences:</strong> usuários ativamente pesquisando produtos/serviços semelhantes</li>
  <li><strong>Custom Intent:</strong> criar audiências baseadas em keywords e URLs que o usuário pesquisou/visitou</li>
  <li><strong>Detailed Demographics:</strong> parental status, education, homeownership</li>
</ul>`,
            en: `<strong>Critical metrics for Display:</strong>
<ul>
  <li><strong>Viewability (% Viewable Impressions):</strong> target &gt;70%. Non-viewable impressions are pure waste.</li>
  <li><strong>CTR:</strong> 0.1-0.3% is normal in Display. Very high CTR may indicate invalid traffic.</li>
  <li><strong>View-Through Conversions (VTC):</strong> conversions from those who saw but didn't click. Question whether the 30-day window makes sense for the business cycle.</li>
</ul>
<strong>Placements Report — where budget ends up:</strong>
<ul>
  <li>Campaigns → Display → Placements → Where Ads Showed</li>
  <li>Exclude: irrelevant mobile apps (frequently fraudulent), low-quality sites, children's content</li>
  <li>Create shared placement exclusion lists across campaigns</li>
</ul>
<strong>Brand Safety (essential exclusions):</strong>
<ul>
  <li>Sensitive topics: violence, adult content, disasters</li>
  <li>Parked Domains (domain parking pages with no content)</li>
  <li>Setting: Standard, Limited or Expanded inventory</li>
</ul>
<strong>Audience targeting in Display:</strong>
<ul>
  <li><strong>In-Market Audiences:</strong> users actively researching similar products/services</li>
  <li><strong>Custom Intent:</strong> create audiences based on keywords and URLs user searched/visited</li>
  <li><strong>Detailed Demographics:</strong> parental status, education, homeownership</li>
</ul>`,
            es: `<strong>Métricas críticas para Display:</strong>
<ul>
  <li><strong>Viewability (% Viewable Impressions):</strong> meta &gt;70%. Las impresiones no viewable son desperdicio.</li>
  <li><strong>CTR:</strong> 0.1-0.3% es normal en Display. CTR muy alto puede indicar invalid traffic.</li>
  <li><strong>View-Through Conversions (VTC):</strong> conversiones de quienes vieron pero no hicieron clic. Cuestionar si la ventana de 30 días tiene sentido para el ciclo del negocio.</li>
</ul>
<strong>Reporte de Placements — dónde va el presupuesto:</strong>
<ul>
  <li>Campaigns → Display → Placements → Where Ads Showed</li>
  <li>Excluir: apps móviles irrelevantes (frecuentemente fraudulentos), sitios de baja calidad, contenido infantil</li>
  <li>Crear listas de exclusión de placements compartidas entre campañas</li>
</ul>
<strong>Brand Safety (exclusiones esenciales):</strong>
<ul>
  <li>Temas sensibles: violencia, contenido adulto, desastres</li>
  <li>Parked Domains</li>
  <li>Configuración: Standard, Limited o Expanded inventory</li>
</ul>
<strong>Audience targeting en Display:</strong>
<ul>
  <li><strong>In-Market Audiences:</strong> usuarios que buscan activamente productos/servicios similares</li>
  <li><strong>Custom Intent:</strong> crear audiencias basadas en keywords y URLs que el usuario buscó/visitó</li>
  <li><strong>Detailed Demographics:</strong> estado parental, educación, propiedad de vivienda</li>
</ul>`,
          },
          tags: ['Display', 'GDN', 'viewability', 'brand-safety', 'placements', 'audiência'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: { pt: 'Como estruturar uma estratégia completa de Google Ads para e-commerce com múltiplos produtos?', en: 'How to structure a complete Google Ads strategy for e-commerce with multiple products?', es: '¿Cómo estructurar una estrategia completa de Google Ads para e-commerce con múltiples productos?' },
          a: {
            pt: `<strong>Camada 1 — Captura de demanda (Search + Shopping):</strong>
<ul>
  <li><strong>Brand Search:</strong> keywords com nome da marca. Bid baixo, IS alto. tROAS agressivo — usuários já familiarizados.</li>
  <li><strong>Shopping Standard por categoria:</strong> segmentar feed por categoria. Custom labels para controle de lance por margem.</li>
  <li><strong>Search Genérico por categoria:</strong> Phrase + Broad com Smart Bidding.</li>
  <li><strong>Search Competidor:</strong> termos de marcas concorrentes. Atenção: mencionar o concorrente na copy é proibido pelo Google.</li>
</ul>
<strong>Camada 2 — Remarketing:</strong>
<ul>
  <li><strong>Dynamic Remarketing Display:</strong> produto exato que o usuário viu. Frequency cap: 7-10 impressões/usuário/dia.</li>
  <li><strong>RLSA:</strong> +30-50% de lance para carrinhos abandonados e visitantes de produto.</li>
  <li><strong>YouTube Remarketing:</strong> vídeo de oferta para visitantes de alta intenção.</li>
</ul>
<strong>Camada 3 — Construção de demanda:</strong>
<ul>
  <li><strong>PMax por categoria:</strong> feeder de novos clientes. Audience signals: compradores anteriores como semente.</li>
  <li><strong>YouTube TrueView:</strong> vídeos para audiências In-Market. Brand building para funil longo.</li>
</ul>
<strong>Custom labels no feed (fundamental para Shopping):</strong>
<ul>
  <li>custom_label_0: margem (alta/média/baixa) → lances proporcionais</li>
  <li>custom_label_1: sazonalidade (verão/inverno/sempreverde)</li>
  <li>custom_label_2: estoque (alto/baixo/esgotando) → pausar sem estoque</li>
  <li>custom_label_3: performance (best_seller/slow_mover)</li>
</ul>`,
            en: `<strong>Layer 1 — Demand capture (Search + Shopping):</strong>
<ul>
  <li><strong>Brand Search:</strong> brand name keywords. Low bid, high IS. Aggressive tROAS — already familiar users.</li>
  <li><strong>Standard Shopping by category:</strong> segment feed by category. Custom labels for bid control by margin.</li>
  <li><strong>Generic Search by category:</strong> Phrase + Broad with Smart Bidding.</li>
  <li><strong>Competitor Search:</strong> competitor brand terms. Note: mentioning competitor in copy is prohibited by Google.</li>
</ul>
<strong>Layer 2 — Remarketing:</strong>
<ul>
  <li><strong>Dynamic Remarketing Display:</strong> exact product user viewed. Frequency cap: 7-10 impressions/user/day.</li>
  <li><strong>RLSA:</strong> +30-50% bid for abandoned carts and product page visitors.</li>
  <li><strong>YouTube Remarketing:</strong> offer video for high-intent visitors.</li>
</ul>
<strong>Layer 3 — Demand building:</strong>
<ul>
  <li><strong>PMax by category:</strong> new customer feeder. Audience signals: previous buyers as seed.</li>
  <li><strong>YouTube TrueView:</strong> videos for In-Market audiences. Brand building for long funnel.</li>
</ul>
<strong>Custom labels in feed (essential for Shopping):</strong>
<ul>
  <li>custom_label_0: margin (high/medium/low) → proportional bids</li>
  <li>custom_label_1: seasonality (summer/winter/evergreen)</li>
  <li>custom_label_2: stock (high/low/running out) → pause out of stock</li>
  <li>custom_label_3: performance (best_seller/slow_mover)</li>
</ul>`,
            es: `<strong>Capa 1 — Captura de demanda (Search + Shopping):</strong>
<ul>
  <li><strong>Brand Search:</strong> keywords con nombre de marca. Puja baja, IS alto. tROAS agresivo.</li>
  <li><strong>Shopping Standard por categoría:</strong> segmentar feed por categoría. Custom labels para control de puja por margen.</li>
  <li><strong>Search Genérico por categoría:</strong> Phrase + Broad con Smart Bidding.</li>
  <li><strong>Search Competidor:</strong> términos de marcas competidoras. Atención: mencionar al competidor en el copy está prohibido por Google.</li>
</ul>
<strong>Capa 2 — Remarketing:</strong>
<ul>
  <li><strong>Dynamic Remarketing Display:</strong> producto exacto que vio el usuario. Frequency cap: 7-10 impresiones/usuario/día.</li>
  <li><strong>RLSA:</strong> +30-50% de puja para carritos abandonados y visitantes de producto.</li>
  <li><strong>YouTube Remarketing:</strong> video de oferta para visitantes de alta intención.</li>
</ul>
<strong>Capa 3 — Construcción de demanda:</strong>
<ul>
  <li><strong>PMax por categoría:</strong> generador de nuevos clientes. Audience signals: compradores anteriores como semilla.</li>
  <li><strong>YouTube TrueView:</strong> videos para audiencias In-Market. Brand building para embudo largo.</li>
</ul>
<strong>Custom labels en el feed (fundamental para Shopping):</strong>
<ul>
  <li>custom_label_0: margen (alto/medio/bajo)</li>
  <li>custom_label_1: estacionalidad (verano/invierno/siempreverde)</li>
  <li>custom_label_2: stock (alto/bajo/agotándose)</li>
  <li>custom_label_3: performance (best_seller/slow_mover)</li>
</ul>`,
          },
          tags: ['e-commerce', 'Shopping', 'Search', 'PMax', 'ROAS', 'estratégia', 'feed'],
        },
        {
          q: { pt: 'O que é o Google Ads Scripts e como usar para automação de conta?', en: 'What is Google Ads Scripts and how to use it for account automation?', es: '¿Qué es Google Ads Scripts y cómo usarlo para automatizar cuentas?' },
          a: {
            pt: `<strong>Google Ads Scripts</strong> é uma plataforma de automação em JavaScript que permite interagir programaticamente com o Google Ads sem precisar de API credentials.<br><br>
<strong>O que pode fazer:</strong>
<ul>
  <li>Pausar/ativar keywords, ad groups e campanhas automaticamente</li>
  <li>Ajustar lances com base em regras personalizadas</li>
  <li>Gerar relatórios automáticos no Google Sheets</li>
  <li>Enviar alertas por email quando thresholds são atingidos</li>
  <li>Sincronizar dados externos (preços, estoque, clima) com campanhas</li>
</ul>
<strong>Casos de uso práticos:</strong>
<ul>
  <li><strong>Weather bidding:</strong> aumentar lance de protetor solar quando temperatura &gt;30°C via API de clima</li>
  <li><strong>Stock checker:</strong> pausar produto no Shopping quando estoque &lt;5 via ERP</li>
  <li><strong>Budget monitor:</strong> email quando budget mensal atingir 80%</li>
  <li><strong>N-gram analysis:</strong> identificar termos negativos automaticamente do Search Terms Report</li>
  <li><strong>QS tracker:</strong> dashboard semanal de Quality Score por keyword no Sheets</li>
</ul>
<strong>Scripts vs. Automated Rules:</strong>
<ul>
  <li><strong>Automated Rules:</strong> interface visual sem código. Simples mas limitado. Bom para regras básicas.</li>
  <li><strong>Scripts:</strong> JavaScript puro — lógica complexa, dados externos, loops, condicionais. Para automações sofisticadas.</li>
</ul>
<strong>Recursos:</strong> developers.google.com/google-ads/scripts tem dezenas de scripts prontos.`,
            en: `<strong>Google Ads Scripts</strong> is a JavaScript automation platform that allows programmatically interacting with Google Ads without API credentials.<br><br>
<strong>What it can do:</strong>
<ul>
  <li>Pause/activate keywords, ad groups and campaigns automatically</li>
  <li>Adjust bids based on custom rules</li>
  <li>Generate automatic reports in Google Sheets</li>
  <li>Send email alerts when thresholds are hit</li>
  <li>Sync external data (prices, stock, weather) with campaigns</li>
</ul>
<strong>Practical use cases:</strong>
<ul>
  <li><strong>Weather bidding:</strong> increase sunscreen bid when temperature &gt;30°C via weather API</li>
  <li><strong>Stock checker:</strong> pause Shopping product when stock &lt;5 via ERP</li>
  <li><strong>Budget monitor:</strong> email when monthly budget hits 80%</li>
  <li><strong>N-gram analysis:</strong> automatically identify negative terms from Search Terms Report</li>
  <li><strong>QS tracker:</strong> weekly Quality Score dashboard per keyword in Sheets</li>
</ul>
<strong>Scripts vs. Automated Rules:</strong>
<ul>
  <li><strong>Automated Rules:</strong> visual interface, no code. Simple but limited. Good for basic rules.</li>
  <li><strong>Scripts:</strong> pure JavaScript — complex logic, external data, loops, conditionals. For sophisticated automations.</li>
</ul>
<strong>Resources:</strong> developers.google.com/google-ads/scripts has dozens of ready-to-use scripts.`,
            es: `<strong>Google Ads Scripts</strong> es una plataforma de automatización en JavaScript que permite interactuar programáticamente con Google Ads sin necesitar credenciales de API.<br><br>
<strong>Qué puede hacer:</strong>
<ul>
  <li>Pausar/activar keywords, ad groups y campañas automáticamente</li>
  <li>Ajustar pujas basándose en reglas personalizadas</li>
  <li>Generar reportes automáticos en Google Sheets</li>
  <li>Enviar alertas por email cuando se alcanzan umbrales</li>
  <li>Sincronizar datos externos (precios, stock, clima) con campañas</li>
</ul>
<strong>Casos de uso prácticos:</strong>
<ul>
  <li><strong>Weather bidding:</strong> aumentar puja de protector solar cuando temperatura &gt;30°C via API de clima</li>
  <li><strong>Stock checker:</strong> pausar producto en Shopping cuando stock &lt;5 via ERP</li>
  <li><strong>Budget monitor:</strong> email cuando el presupuesto mensual alcance el 80%</li>
  <li><strong>N-gram analysis:</strong> identificar automáticamente términos negativos del Search Terms Report</li>
  <li><strong>QS tracker:</strong> dashboard semanal de Quality Score por keyword en Sheets</li>
</ul>
<strong>Scripts vs. Automated Rules:</strong>
<ul>
  <li><strong>Automated Rules:</strong> interfaz visual sin código. Simple pero limitado.</li>
  <li><strong>Scripts:</strong> JavaScript puro — lógica compleja, datos externos, bucles, condicionales.</li>
</ul>
<strong>Recursos:</strong> developers.google.com/google-ads/scripts tiene decenas de scripts listos para usar.`,
          },
          tags: ['Scripts', 'automação', 'JavaScript', 'Sheets', 'bidding', 'budget'],
        },
        {
          q: { pt: 'Como funciona o YouTube Ads? Quais os formatos e métricas principais?', en: 'How does YouTube Ads work? What are the main formats and metrics?', es: '¿Cómo funciona YouTube Ads? ¿Cuáles son los principales formatos y métricas?' },
          a: {
            pt: `<strong>Formatos In-Stream (antes/durante vídeos):</strong>
<ul>
  <li><strong>Skippable In-Stream (TrueView):</strong> pulável após 5s. Paga apenas se o usuário assistir 30s+ ou clicar. CPV médio: R$0,05-0,25. Ideal para awareness e consideração.</li>
  <li><strong>Non-Skippable:</strong> 15s, sem opção de pular. 100% de exposição garantida. Cobrança por CPM. Usar para mensagens que precisam ser vistas integralmente.</li>
  <li><strong>Bumper Ads:</strong> 6s não puláveis. Alta memorabilidade. CPM mais baixo. Ideal para reforço de marca em escala.</li>
</ul>
<strong>In-Feed Video Ads:</strong> aparece nos resultados de busca do YouTube e na aba Início. Usuário escolhe clicar. Paga por clique. Ideal para usuários com intenção sobre o tema.<br><br>
<strong>YouTube Shorts Ads:</strong> vertical 9:16 no feed de Shorts. CPMs ainda mais competitivos que In-Stream tradicional.<br><br>
<strong>Métricas de Video:</strong>
<ul>
  <li><strong>VCR (Video Completion Rate):</strong> % que assistiu 100% do vídeo. Meta &gt;40% para Skippable.</li>
  <li><strong>View Rate:</strong> % que não pulou (Skippable). Indica qualidade do criativo nos primeiros 5s.</li>
  <li><strong>CPV:</strong> custo médio por visualização de 30s+</li>
  <li><strong>Brand Lift:</strong> variação em awareness, recall e purchase intent via survey com grupo controle</li>
</ul>
<strong>Ad Sequencing (avançado):</strong> exibe série de vídeos para o mesmo usuário em ordem definida (ex: bumper teaser → in-stream longo → bumper CTA). Aumenta recall em até 40% vs. formato único.`,
            en: `<strong>In-Stream formats (before/during videos):</strong>
<ul>
  <li><strong>Skippable In-Stream (TrueView):</strong> skippable after 5s. Pay only if user watches 30s+ or clicks. Average CPV: $0.01-0.05. Ideal for awareness and consideration.</li>
  <li><strong>Non-Skippable:</strong> 15s, no skip option. 100% guaranteed exposure. Charged by CPM. Use for messages that need to be fully seen.</li>
  <li><strong>Bumper Ads:</strong> 6s non-skippable. High memorability. Lower CPM. Ideal for brand reinforcement at scale.</li>
</ul>
<strong>In-Feed Video Ads:</strong> appears in YouTube search results and Home tab. User chooses to click. Pays per click. Ideal for users with topic intent.<br><br>
<strong>YouTube Shorts Ads:</strong> vertical 9:16 in Shorts feed. Even more competitive CPMs than traditional In-Stream.<br><br>
<strong>Video metrics:</strong>
<ul>
  <li><strong>VCR (Video Completion Rate):</strong> % who watched 100% of video. Target &gt;40% for Skippable.</li>
  <li><strong>View Rate:</strong> % who didn't skip (Skippable). Indicates creative quality in first 5s.</li>
  <li><strong>CPV:</strong> average cost per 30s+ view</li>
  <li><strong>Brand Lift:</strong> change in awareness, recall and purchase intent via survey with control group</li>
</ul>
<strong>Ad Sequencing (advanced):</strong> shows video series to the same user in defined order (e.g. bumper teaser → long in-stream → bumper CTA). Increases recall by up to 40% vs. single format.`,
            es: `<strong>Formatos In-Stream (antes/durante videos):</strong>
<ul>
  <li><strong>Skippable In-Stream (TrueView):</strong> omitible tras 5s. Pagas solo si el usuario ve 30s+ o hace clic. CPV medio: $0.01-0.05. Ideal para awareness y consideración.</li>
  <li><strong>Non-Skippable:</strong> 15s, sin opción de omitir. 100% de exposición garantizada. Cobro por CPM.</li>
  <li><strong>Bumper Ads:</strong> 6s no omitibles. Alta memorabilidad. CPM más bajo. Ideal para refuerzo de marca a escala.</li>
</ul>
<strong>In-Feed Video Ads:</strong> aparece en los resultados de búsqueda de YouTube y en la pestaña Inicio. El usuario elige hacer clic. Paga por clic.<br><br>
<strong>YouTube Shorts Ads:</strong> vertical 9:16 en el feed de Shorts. CPMs aún más competitivos que el In-Stream tradicional.<br><br>
<strong>Métricas de Video:</strong>
<ul>
  <li><strong>VCR (Video Completion Rate):</strong> % que vio el 100% del video. Meta &gt;40% para Skippable.</li>
  <li><strong>View Rate:</strong> % que no omitió (Skippable). Indica calidad del creativo en los primeros 5s.</li>
  <li><strong>CPV:</strong> costo promedio por visualización de 30s+</li>
  <li><strong>Brand Lift:</strong> variación en awareness, recall e intención de compra via encuesta con grupo de control</li>
</ul>
<strong>Ad Sequencing (avanzado):</strong> muestra serie de videos al mismo usuario en orden definido. Aumenta el recall hasta un 40% vs. formato único.`,
          },
          tags: ['YouTube', 'Video', 'TrueView', 'Bumper', 'VCR', 'Brand-Lift', 'Shorts'],
        },
        {
          q: { pt: 'Como estruturar campanhas de Search para B2B com ciclo de venda longo?', en: 'How to structure Search campaigns for B2B with long sales cycles?', es: '¿Cómo estructurar campañas de Search para B2B con ciclo de venta largo?' },
          a: {
            pt: `<strong>Desafios do B2B Search:</strong> ciclo de 3-18 meses, múltiplos decisores, conversão final offline → Last Click subestima o valor real do Search.<br><br>
<strong>Estrutura de campanha B2B Search:</strong>
<ul>
  <li><strong>Brand:</strong> proteção de marca + captura de demanda já gerada por outros canais (email, eventos, LinkedIn). Bid baixo, tROAS agressivo.</li>
  <li><strong>Produto/Solução — High Intent:</strong> "[produto] + preço", "[produto] + demo", "[produto] + contratar". Exact Match. Smart Bidding para CPA.</li>
  <li><strong>Produto/Solução — Consideração:</strong> "melhor [categoria]", "comparativo [produto] vs [concorrente]". Phrase Match.</li>
  <li><strong>Problema — TOFU:</strong> termos de problema, não de solução. Ex: "como reduzir custo de [X]". Broad Match + CPC manual (volume baixo, difícil converter).</li>
  <li><strong>Competidor:</strong> termos de marca concorrente + seu produto. Bid baixo, negativas para evitar termos de suporte do concorrente.</li>
</ul>
<strong>Métricas adaptadas para B2B:</strong>
<ul>
  <li>Conversão macro: Lead qualificado (MQL/SQL), não pageview de obrigado</li>
  <li>Importar conversões offline do CRM (oportunidades criadas, negócios fechados)</li>
  <li>Usar Enhanced Conversions para melhorar matching de leads com CRM</li>
</ul>
<strong>RLSA em B2B:</strong> +50-100% de lance para visitantes de /produto e /pricing que ainda não converteram. São os mais próximos de conversão.`,
            en: `<strong>B2B Search challenges:</strong> 3-18 month cycle, multiple decision-makers, final conversion offline → Last Click underestimates the real value of Search.<br><br>
<strong>B2B Search campaign structure:</strong>
<ul>
  <li><strong>Brand:</strong> brand protection + capturing demand generated by other channels (email, events, LinkedIn). Low bid, aggressive tROAS.</li>
  <li><strong>Product/Solution — High Intent:</strong> "[product] + price", "[product] + demo", "[product] + buy". Exact Match. Smart Bidding for CPA.</li>
  <li><strong>Product/Solution — Consideration:</strong> "best [category]", "[product] vs [competitor] comparison". Phrase Match.</li>
  <li><strong>Problem — TOFU:</strong> problem terms, not solution. E.g. "how to reduce cost of [X]". Broad Match + manual CPC (low volume, hard to convert).</li>
  <li><strong>Competitor:</strong> competitor brand terms + your product. Low bid, negatives to avoid competitor support terms.</li>
</ul>
<strong>B2B-adapted metrics:</strong>
<ul>
  <li>Macro conversion: qualified lead (MQL/SQL), not thank-you pageview</li>
  <li>Import offline conversions from CRM (created opportunities, closed deals)</li>
  <li>Use Enhanced Conversions to improve lead matching with CRM</li>
</ul>
<strong>RLSA in B2B:</strong> +50-100% bid for /product and /pricing visitors who haven't converted yet. They're closest to conversion.`,
            es: `<strong>Desafíos del B2B Search:</strong> ciclo de 3-18 meses, múltiples decisores, conversión final offline → Last Click subestima el valor real de Search.<br><br>
<strong>Estructura de campaña B2B Search:</strong>
<ul>
  <li><strong>Brand:</strong> protección de marca + captura de demanda generada por otros canales (email, eventos, LinkedIn). Puja baja, tROAS agresivo.</li>
  <li><strong>Producto/Solución — Alta Intención:</strong> "[producto] + precio", "[producto] + demo", "[producto] + contratar". Exact Match. Smart Bidding para CPA.</li>
  <li><strong>Producto/Solución — Consideración:</strong> "mejor [categoría]", "comparativa [producto] vs [competidor]". Phrase Match.</li>
  <li><strong>Problema — TOFU:</strong> términos de problema, no de solución. Ej: "cómo reducir costo de [X]". Broad Match + CPC manual.</li>
  <li><strong>Competidor:</strong> términos de marca competidora + tu producto. Puja baja, negativas para evitar términos de soporte del competidor.</li>
</ul>
<strong>Métricas adaptadas para B2B:</strong>
<ul>
  <li>Conversión macro: lead calificado (MQL/SQL), no pageview de gracias</li>
  <li>Importar conversiones offline del CRM (oportunidades creadas, negocios cerrados)</li>
  <li>Usar Enhanced Conversions para mejorar el matching de leads con CRM</li>
</ul>
<strong>RLSA en B2B:</strong> +50-100% de puja para visitantes de /producto y /pricing que aún no convirtieron.`,
          },
          tags: ['B2B', 'Search', 'ciclo-longo', 'RLSA', 'CRM', 'offline-conversions'],
        },
      ],
    },
  ],
};

// ── APPEND: YouTube Ads ──
window.__adopsData['googleads'].tiers[1].questions.push(
  {
    q: { pt: 'Quais são os formatos de anúncio do YouTube e como cada um funciona?', en: 'What are YouTube ad formats and how does each work?', es: '¿Cuáles son los formatos de anuncio de YouTube y cómo funciona cada uno?' },
    a: {
      pt: `O YouTube oferece o maior inventário de vídeo online — comprado via Google Ads ou DV360.<br><br>
<strong>Formatos In-Stream (dentro do vídeo):</strong>
<ul>
  <li><strong>TrueView In-Stream Pulável:</strong> vídeo de qualquer duração que pode ser pulado após 5 segundos. Cobrado apenas quando o usuário assiste &gt;30s (ou o vídeo completo se &lt;30s) ou clica. CPV (Cost Per View). Objetivo: awareness e consideração.</li>
  <li><strong>In-Stream Não Pulável:</strong> vídeos de até 15 segundos obrigatórios (o usuário não pode pular). CPM. Objetivo: máximo alcance de mensagem completa.</li>
  <li><strong>Bumper Ads:</strong> vídeos de até 6 segundos não puláveis. CPM. Ultra-rápido, ideal para reforço de mensagem de branding em complemento a campanhas maiores.</li>
</ul>
<strong>Formatos Discovery / Feed:</strong>
<ul>
  <li><strong>TrueView Video Discovery (In-Feed):</strong> aparece nos resultados de busca do YouTube e na homepage como miniatura. Usuário clica para assistir voluntariamente. Cobrado no clique (CPC). Indica intenção alta.</li>
</ul>
<strong>Formatos Premium:</strong>
<ul>
  <li><strong>Masthead:</strong> banner de vídeo na homepage do YouTube por 24h. Compra por reserva (CPD — Cost Per Day). Alcance massivo garantido — usado em lançamentos e eventos.</li>
  <li><strong>YouTube Select:</strong> pacotes de inventário premium em canais top de categorias específicas (esportes, beleza, games). CPM mais alto, audiência mais qualificada.</li>
</ul>
<strong>YouTube Shorts Ads:</strong>
<ul>
  <li>Anúncios verticais (9:16) veiculados entre Shorts. Puláveis. Crescimento acelerado com a ascensão do formato Shorts.</li>
</ul>
<strong>Métricas-chave de YouTube:</strong>
<ul>
  <li><strong>VCR (Video Completion Rate):</strong> % que assistiu o vídeo completo</li>
  <li><strong>CPV (Cost Per View):</strong> custo por visualização qualificada (&gt;30s ou completo)</li>
  <li><strong>View-Through Rate (VTR):</strong> similar ao VCR no contexto do YouTube</li>
  <li><strong>Brand Lift Study:</strong> mensuração de uplift em awareness, recall e intenção de compra via pesquisa com grupo controle vs. grupo exposto</li>
</ul>`,
      en: `YouTube offers the largest online video inventory — bought via Google Ads or DV360.<br><br>
<strong>In-Stream formats (within video):</strong>
<ul>
  <li><strong>TrueView In-Stream Skippable:</strong> any length video, skippable after 5 seconds. Charged only when user watches &gt;30s or clicks. CPV. Objective: awareness and consideration.</li>
  <li><strong>Non-Skippable In-Stream:</strong> up to 15 second videos, mandatory. CPM. Objective: maximum complete message reach.</li>
  <li><strong>Bumper Ads:</strong> up to 6 second non-skippable videos. CPM. Ultra-fast, ideal for branding message reinforcement.</li>
</ul>
<strong>Discovery / Feed formats:</strong>
<ul>
  <li><strong>TrueView Video Discovery (In-Feed):</strong> appears in YouTube search results and homepage as thumbnail. User clicks to watch voluntarily. Charged per click. High intent signal.</li>
</ul>
<strong>Premium formats:</strong>
<ul>
  <li><strong>Masthead:</strong> video banner on YouTube homepage for 24h. Reservation buy (CPD). Massive guaranteed reach.</li>
  <li><strong>YouTube Select:</strong> premium inventory packages on top channels in specific categories. Higher CPM, more qualified audience.</li>
</ul>
<strong>Key YouTube metrics:</strong>
<ul>
  <li><strong>VCR (Video Completion Rate), CPV, Brand Lift Study</strong></li>
</ul>`,
      es: `YouTube ofrece el mayor inventario de video online — comprado via Google Ads o DV360.<br><br>
<strong>Formatos In-Stream (dentro del video):</strong>
<ul>
  <li><strong>TrueView In-Stream Omitible:</strong> video de cualquier duración, omitible tras 5 segundos. Cobrado solo cuando el usuario ve &gt;30s o hace clic. CPV.</li>
  <li><strong>In-Stream No Omitible:</strong> videos de hasta 15 segundos obligatorios. CPM.</li>
  <li><strong>Bumper Ads:</strong> videos de hasta 6 segundos no omitibles. CPM.</li>
</ul>
<strong>Formatos Discovery / Feed:</strong>
<ul>
  <li><strong>TrueView Video Discovery (In-Feed):</strong> aparece en los resultados de búsqueda de YouTube y en la homepage como miniatura. Se cobra al hacer clic.</li>
</ul>
<strong>Formatos Premium:</strong>
<ul>
  <li><strong>Masthead:</strong> banner de video en la homepage de YouTube durante 24h. Compra por reserva (CPD).</li>
  <li><strong>YouTube Select:</strong> paquetes de inventario premium en canales top.</li>
</ul>
<strong>Métricas clave:</strong> VCR, CPV, Brand Lift Study.`,
    },
    tags: ['YouTube', 'TrueView', 'Bumper', 'Masthead', 'In-Stream', 'VCR', 'CPV', 'Brand-Lift'],
  }
);

// ── APPEND: básicos práticos (patch) ──
;(function(){
const d = window.__adopsData['googleads'];
d.tiers[0].questions.push(
  {
    q:{pt:'Como criar uma campanha de Search no Google Ads do zero?',en:'How to create a Search campaign in Google Ads from scratch?',es:'¿Cómo crear una campaña de Search en Google Ads desde cero?'},
    a:{
      pt:`<strong>Estrutura do Google Ads:</strong> Campanha → Grupo de Anúncios → Anúncio + Keywords<br><br>
<strong>Passo 1 — Nova Campanha:</strong>
<ol>
  <li><code>ads.google.com</code> → <strong>+ Nova Campanha</strong></li>
  <li><strong>Objetivo:</strong> Vendas, Leads, Tráfego do site, Consideração de marca, Alcance de marca, Promoção de app, Sem orientação de objetivo</li>
  <li><strong>Tipo de campanha:</strong> Pesquisa (Search)</li>
  <li><strong>Conversão:</strong> selecionar qual ação rastrear (requer conversão já configurada)</li>
  <li><strong>Rede:</strong> desmarcar "Rede de Display" para campanhas de Search puro (evitar mistura)</li>
  <li><strong>Localização:</strong> país, estado, cidade, raio em km. Atenção à opção "Presença ou interesse" vs. "Presença"</li>
  <li><strong>Idiomas:</strong> português (e inglês para alcançar browsers em inglês no BR)</li>
  <li><strong>Budget:</strong> valor diário. Google pode gastar até 2× o diário em dias bons, mas a média mensal não ultrapassa o diário × 30,4</li>
  <li><strong>Lance:</strong> CPC Manual (controle total) ou estratégias automatizadas: Maximizar cliques, Maximizar conversões, CPA desejado, ROAS desejado</li>
</ol>
<strong>Passo 2 — Grupos de Anúncios e Keywords:</strong>
<ol>
  <li>Nome do grupo (ex: "Produto X - Marca", "Produto X - Genérico")</li>
  <li>Adicionar keywords com match types:
    <ul>
      <li><strong>Correspondência ampla:</strong> <code>tênis corrida</code> → aparece para variações e sinônimos</li>
      <li><strong>Correspondência de frase:</strong> <code>"tênis de corrida"</code> → a frase deve estar presente</li>
      <li><strong>Correspondência exata:</strong> <code>[tênis de corrida]</code> → busca deve corresponder exatamente</li>
    </ul>
  </li>
  <li>Lance por keyword (no CPC manual) ou herdar o lance do grupo</li>
</ol>
<strong>Passo 3 — Criar Anúncios Responsivos de Pesquisa (RSA):</strong>
<ol>
  <li>URL final: a landing page com UTMs</li>
  <li>Títulos: até 15 (máx. 30 caracteres cada). Google combina automaticamente até 3 por vez.</li>
  <li>Descrições: até 4 (máx. 90 caracteres cada). 2 aparecem por vez.</li>
  <li>Fixar título/descrição em posição específica (opcional)</li>
</ol>`,
      en:`<strong>Google Ads structure:</strong> Campaign → Ad Group → Ad + Keywords<br><br>
<strong>Step 1 — New Campaign:</strong>
<ol>
  <li><code>ads.google.com</code> → <strong>+ New Campaign</strong></li>
  <li><strong>Objective:</strong> Sales, Leads, Website traffic, Brand consideration, Brand awareness, App promotion, No objective guidance</li>
  <li><strong>Campaign type:</strong> Search</li>
  <li>Uncheck "Display Network" for pure Search campaigns</li>
  <li><strong>Location, Language, Budget, Bid strategy</strong> (Manual CPC or automated: Maximize clicks, Maximize conversions, Target CPA, Target ROAS)</li>
</ol>
<strong>Step 2 — Ad Groups and Keywords:</strong>
<ol>
  <li>Group name</li>
  <li>Add keywords with match types:
    <ul>
      <li><strong>Broad match:</strong> <code>running shoes</code></li>
      <li><strong>Phrase match:</strong> <code>"running shoes"</code></li>
      <li><strong>Exact match:</strong> <code>[running shoes]</code></li>
    </ul>
  </li>
</ol>
<strong>Step 3 — Responsive Search Ads (RSA):</strong>
<ol>
  <li>Final URL with UTMs</li>
  <li>Headlines: up to 15 (max 30 characters each) — Google automatically combines up to 3 at a time</li>
  <li>Descriptions: up to 4 (max 90 characters each) — 2 shown at a time</li>
</ol>`,
      es:`<strong>Estructura de Google Ads:</strong> Campaña → Grupo de Anuncios → Anuncio + Keywords<br><br>
<strong>Paso 1 — Nueva Campaña:</strong>
<ol>
  <li><code>ads.google.com</code> → <strong>+ Nueva Campaña</strong></li>
  <li><strong>Objetivo, Tipo de campaña (Búsqueda), Desmarcar Red de Display</strong></li>
  <li><strong>Ubicación, Idiomas, Presupuesto, Estrategia de puja</strong> (CPC Manual o automatizada)</li>
</ol>
<strong>Paso 2 — Grupos de Anuncios y Keywords:</strong>
<ul>
  <li>Match types: Amplia (<code>zapatos corrida</code>), Frase (<code>"zapatos de corrida"</code>), Exacta (<code>[zapatos de corrida]</code>)</li>
</ul>
<strong>Paso 3 — Anuncios Responsivos de Búsqueda (RSA):</strong>
<ul>
  <li>URL final con UTMs, hasta 15 títulos (máx. 30 caracteres), hasta 4 descripciones (máx. 90 caracteres)</li>
</ul>`,
    },
    tags:['Google-Ads','Search','campanha','RSA','keyword','match-type','CPC','criação'],
  },
  {
    q:{pt:'Como criar uma campanha de Display no Google Ads?',en:'How to create a Display campaign in Google Ads?',es:'¿Cómo crear una campaña de Display en Google Ads?'},
    a:{
      pt:`As campanhas de Display do Google Ads (GDN — Google Display Network) veiculam banners em milhões de sites parceiros do Google.<br><br>
<strong>Criar campanha de Display:</strong>
<ol>
  <li>Google Ads → <strong>+ Nova Campanha → Display</strong></li>
  <li>Objetivo: Vendas, Leads, Tráfego ou Sem objetivo</li>
  <li>Subtipo: <strong>Campanha de display padrão</strong> (controle manual) ou <strong>Campanha de display inteligente</strong> (automação total)</li>
  <li>Localização, idioma, budget e lance (CPM manual ou Maximizar conversões)</li>
</ol>
<strong>Targeting disponível em Display padrão:</strong>
<ul>
  <li><strong>Públicos-alvo:</strong> Afinidade (interests amplos), In-Market (intenção de compra), Público personalizado (keywords ou URLs), Remarketing (visitantes do site via GA4 tag)</li>
  <li><strong>Contexto:</strong> keywords na página, tópicos de conteúdo, categorias de conteúdo</li>
  <li><strong>Posicionamentos:</strong> sites específicos da GDN onde o anúncio deve aparecer</li>
  <li><strong>Demográfico:</strong> idade, gênero, renda familiar, presença de filhos</li>
</ul>
<strong>Criar anúncios Display — Anúncio Display Responsivo:</strong>
<ol>
  <li>Imagens: até 15 imagens em diferentes proporções (1,91:1 horizontal, 1:1 quadrado)</li>
  <li>Logos: até 5 versões do logotipo</li>
  <li>Títulos curtos: até 5 (30 caracteres)</li>
  <li>Título longo: 1 (90 caracteres)</li>
  <li>Descrições: até 5 (90 caracteres)</li>
  <li>Nome da empresa e URL final</li>
  <li>O Google combina os elementos automaticamente para criar o anúncio ideal para cada espaço</li>
</ol>
<strong>Excluções importantes:</strong>
<ul>
  <li>Excluir categorias de conteúdo inadequado (conteúdo adulto, violência)</li>
  <li>Excluir apps para evitar cliques acidentais em jogos mobile</li>
  <li>Adicionar lista de sites negativos (placement exclusions)</li>
</ul>`,
      en:`Google Ads Display campaigns (GDN) serve banners on millions of Google partner sites.<br><br>
<strong>Create Display campaign:</strong>
<ol>
  <li>Google Ads → <strong>+ New Campaign → Display</strong></li>
  <li>Objective, Subtype: Standard display (manual control) or Smart display (full automation)</li>
  <li>Location, language, budget, bid (manual CPM or Maximize conversions)</li>
</ol>
<strong>Targeting in Standard Display:</strong>
<ul>
  <li>Audiences: Affinity, In-Market, Custom audience, Remarketing</li>
  <li>Contextual: page keywords, content topics, content categories</li>
  <li>Placements: specific GDN sites</li>
  <li>Demographic: age, gender, household income, parental status</li>
</ul>
<strong>Create Responsive Display Ads:</strong>
<ul>
  <li>Up to 15 images, 5 logos, 5 short headlines (30 char), 1 long headline (90 char), 5 descriptions (90 char)</li>
  <li>Google automatically combines elements to create optimal ad for each space</li>
</ul>`,
      es:`Las campañas de Display de Google Ads (GDN) sirven banners en millones de sitios asociados de Google.<br><br>
<strong>Crear campaña de Display:</strong>
<ol>
  <li>Google Ads → <strong>+ Nueva Campaña → Display</strong></li>
  <li>Objetivo, Subtipo: Display estándar (control manual) o Display inteligente (automatización total)</li>
  <li>Ubicación, idioma, presupuesto, puja</li>
</ol>
<strong>Targeting en Display estándar:</strong>
<ul>
  <li>Audiencias: Afinidad, In-Market, Audiencia personalizada, Remarketing</li>
  <li>Contextual: keywords en la página, temas, categorías</li>
  <li>Emplazamientos: sitios específicos de la GDN</li>
</ul>
<strong>Crear Anuncios Display Responsivos:</strong>
<ul>
  <li>Hasta 15 imágenes, 5 logos, 5 títulos cortos (30 car.), 1 título largo (90 car.), 5 descripciones (90 car.)</li>
  <li>Google combina los elementos automáticamente</li>
</ul>`,
    },
    tags:['Google-Ads','Display','GDN','RSA','targeting','remarketing','responsivo','criação'],
  }
);

// ──────────────────────────────────────────────────────────────
})();

;(function(){
const d = window.__adopsData['googleads'];
d.tiers[0].questions.push(
  {
    q:{pt:'Passo a passo: como criar uma campanha de Search no Google Ads do zero?',en:'Step by step: how to create a Search campaign in Google Ads from scratch?',es:'Paso a paso: ¿cómo crear una campaña de Search en Google Ads desde cero?'},
    a:{
      pt:`<strong>Pré-requisitos:</strong>
<ul>
  <li>Conta Google Ads criada (ads.google.com)</li>
  <li>Faturamento configurado (cartão de crédito ou boleto)</li>
  <li>Tag de conversão do Google Ads ou Floodlight no site (para medir resultados)</li>
  <li>Landing page pronta e funcionando</li>
</ul>
<strong>Passo 1 — Nova Campanha:</strong>
<ol>
  <li>No Google Ads, clique em <strong>+ Nova campanha</strong></li>
  <li>Objetivo: selecione "Vendas", "Leads" ou "Tráfego do site" — ou crie sem objetivo</li>
  <li>Tipo de campanha: <strong>Pesquisa (Search)</strong></li>
  <li>Resultados que você quer: marque "Visitas ao site" e insira a URL do site</li>
  <li>Nome da campanha: ex: <code>Search_Marca_Produto_BR_Ago25</code></li>
</ol>
<strong>Passo 2 — Configurações da Campanha:</strong>
<ol>
  <li><strong>Rede:</strong> desmarque "Rede de Display" (evitar misturar canais)</li>
  <li><strong>Localização:</strong> Brasil ou estado/cidade específico</li>
  <li><strong>Idioma:</strong> Português</li>
  <li><strong>Orçamento diário:</strong> ex: R$50/dia</li>
  <li><strong>Lances:</strong> Conversões maximizadas (se já tem dados) ou CPC manual (se começando)</li>
</ol>
<strong>Passo 3 — Criar Grupo de Anúncios (Ad Group):</strong>
<ol>
  <li>Nome: ex: <code>Produto X - Intenção Alta</code></li>
  <li><strong>Keywords:</strong> adicionar palavras-chave relevantes com o tipo de correspondência correto:
    <ul>
      <li><code>[palavra exata]</code> → correspondência exata</li>
      <li><code>"frase de correspondência"</code> → correspondência de frase</li>
      <li><code>palavra ampla</code> → correspondência ampla (cuidado — pode trazer tráfego irrelevante)</li>
    </ul>
  </li>
</ol>
<strong>Passo 4 — Criar Anúncios (Responsive Search Ad):</strong>
<ol>
  <li>URL final: landing page com UTMs</li>
  <li>Headlines: adicionar 8-15 títulos diferentes (Google testa automaticamente as combinações)</li>
  <li>Descrições: adicionar 2-4 descrições</li>
  <li>O Google monta automaticamente as melhores combinações para cada busca</li>
</ol>
<strong>Passo 5 — Publicar e monitorar:</strong>
<ol>
  <li>Salvar → campanha entra em análise (aprovação de anúncios: 1-3 dias)</li>
  <li>Verificar: impressões, cliques, CTR e posição média nas primeiras 24-48h</li>
  <li>Checar Relatório de Termos de Pesquisa (Search Terms): ver quais buscas ativaram seus anúncios</li>
  <li>Adicionar negativos para buscas irrelevantes</li>
</ol>`,
      en:`<strong>Prerequisites:</strong>
<ul>
  <li>Google Ads account created (ads.google.com)</li>
  <li>Billing configured</li>
  <li>Google Ads conversion tag or Floodlight on site</li>
  <li>Landing page ready and working</li>
</ul>
<strong>Step 1 — New Campaign:</strong>
<ol>
  <li>In Google Ads, click <strong>+ New campaign</strong></li>
  <li>Goal: "Sales", "Leads" or "Website traffic"</li>
  <li>Campaign type: <strong>Search</strong></li>
  <li>Campaign name: e.g. <code>Search_Brand_Product_US_Aug25</code></li>
</ol>
<strong>Step 2 — Campaign Settings:</strong>
<ol>
  <li>Network: uncheck "Display Network"</li>
  <li>Location: target country/region</li>
  <li>Daily budget: e.g. $20/day</li>
  <li>Bidding: Maximize Conversions (with data) or Manual CPC (starting out)</li>
</ol>
<strong>Step 3 — Create Ad Group:</strong>
<ol>
  <li>Add keywords with correct match type: [exact match], "phrase match", broad match</li>
</ol>
<strong>Step 4 — Create Responsive Search Ads:</strong>
<ol>
  <li>Final URL with UTMs</li>
  <li>Add 8-15 headlines and 2-4 descriptions — Google auto-tests combinations</li>
</ol>
<strong>Step 5 — Publish and monitor:</strong>
<ol>
  <li>Check Search Terms Report to see which searches triggered your ads</li>
  <li>Add negatives for irrelevant searches</li>
</ol>`,
      es:`<strong>Prerequisitos:</strong>
<ul>
  <li>Cuenta de Google Ads creada (ads.google.com)</li>
  <li>Facturación configurada</li>
  <li>Tag de conversión de Google Ads o Floodlight en el sitio</li>
</ul>
<strong>Paso 1 — Nueva Campaña:</strong>
<ol>
  <li>En Google Ads, haz clic en <strong>+ Nueva campaña</strong></li>
  <li>Objetivo: "Ventas", "Clientes potenciales" o "Tráfico del sitio web"</li>
  <li>Tipo de campaña: <strong>Búsqueda (Search)</strong></li>
</ol>
<strong>Paso 2 — Configuración:</strong>
<ol>
  <li>Red: desmarcar "Red de Display"</li>
  <li>Ubicación: Brasil u otra región objetivo</li>
  <li>Presupuesto diario</li>
  <li>Pujas: Maximizar conversiones o CPC manual</li>
</ol>
<strong>Paso 3 — Crear Grupo de Anuncios:</strong>
<ol>
  <li>Agregar palabras clave con el tipo de concordancia correcto: [exacta], "frase", amplia</li>
</ol>
<strong>Paso 4 — Crear Anuncios de Búsqueda Responsivos:</strong>
<ol>
  <li>URL final con UTMs</li>
  <li>Agregar 8-15 títulos y 2-4 descripciones — Google prueba automáticamente las combinaciones</li>
</ol>
<strong>Paso 5 — Publicar y monitorear:</strong>
<ol>
  <li>Verificar el Informe de Términos de Búsqueda — agregar negativos para búsquedas irrelevantes</li>
</ol>`,
    },
    tags:['Google-Ads','Search','passo-a-passo','keywords','RSA','CPC','campanha','negativos'],
  },
  {
    q:{pt:'O que são tipos de correspondência de palavras-chave no Google Ads e como escolher?',en:'What are keyword match types in Google Ads and how to choose?',es:'¿Qué son los tipos de concordancia de palabras clave en Google Ads y cómo elegirlos?'},
    a:{
      pt:`Os <strong>tipos de correspondência</strong> controlam quais buscas ativam seus anúncios — a escolha errada pode desperdiçar budget ou perder clientes.<br><br>
<strong>1. Correspondência Exata <code>[palavra-chave]</code>:</strong>
<ul>
  <li>Anúncio aparece apenas quando a busca é exatamente a keyword (ou variações muito próximas: plurais, erros de digitação, reordenação de palavras sem mudança de significado)</li>
  <li>Ex: <code>[tênis nike masculino]</code> → ativa para "tenis nike masculino", "tênis masculino nike" — mas NÃO para "comprar tênis nike masculino barato"</li>
  <li>Menor volume, maior precisão, CTR mais alto, menor CPC desperdiçado</li>
  <li>Usar para: keywords de alta conversão que você já conhece, branded terms, produtos específicos</li>
</ul>
<strong>2. Correspondência de Frase <code>"palavra-chave"</code>:</strong>
<ul>
  <li>Anúncio aparece quando a busca contém a keyword como parte de uma frase, preservando o significado</li>
  <li>Ex: <code>"tênis nike"</code> → ativa para "comprar tênis nike barato", "tênis nike air max" — mas NÃO para "nike tênis" (ordem alterada com mudança de significado)</li>
  <li>Volume médio, precisão média — bom equilíbrio para a maioria dos casos</li>
</ul>
<strong>3. Correspondência Ampla <code>palavra-chave</code> (sem símbolos):</strong>
<ul>
  <li>Anúncio pode aparecer para buscas relacionadas, sinônimos, tópicos relacionados — Google decide</li>
  <li>Ex: <code>tênis esportivo</code> → pode ativar para "calçado para corrida", "adidas running", "sapato fitness"</li>
  <li>Maior volume, menor precisão — pode gerar muito tráfego irrelevante</li>
  <li>Usar apenas com Smart Bidding e com budget para absorver tráfego indesejado + negativos bem configurados</li>
</ul>
<strong>Estratégia prática recomendada:</strong>
<ul>
  <li>Comece com <strong>exata e frase</strong> para ter controle</li>
  <li>Monitore o Relatório de Termos de Pesquisa diariamente e adicione negativos</li>
  <li>Adicione ampla apenas depois de ter dados suficientes e com Smart Bidding ativo</li>
  <li>Nunca misture todos os tipos no mesmo ad group — dificulta a análise</li>
</ul>`,
      en:`<strong>Match types</strong> control which searches trigger your ads — the wrong choice can waste budget or miss customers.<br><br>
<strong>1. Exact Match <code>[keyword]</code>:</strong>
<ul>
  <li>Ad appears only when search is exactly the keyword (or very close variations: plurals, typos, word reordering without meaning change)</li>
  <li>Lowest volume, highest precision, highest CTR, least wasted CPC</li>
  <li>Use for: high-conversion keywords you already know, branded terms, specific products</li>
</ul>
<strong>2. Phrase Match <code>"keyword"</code>:</strong>
<ul>
  <li>Ad appears when search contains keyword as part of a phrase, preserving meaning</li>
  <li>Medium volume, medium precision — good balance for most cases</li>
</ul>
<strong>3. Broad Match <code>keyword</code> (no symbols):</strong>
<ul>
  <li>Ad can appear for related searches, synonyms, related topics — Google decides</li>
  <li>Highest volume, lowest precision — can generate lots of irrelevant traffic</li>
  <li>Use only with Smart Bidding and budget to absorb unwanted traffic + well-configured negatives</li>
</ul>
<strong>Recommended practical strategy:</strong>
<ul>
  <li>Start with <strong>exact and phrase</strong> for control</li>
  <li>Monitor Search Terms Report daily and add negatives</li>
  <li>Add broad only after having sufficient data with active Smart Bidding</li>
</ul>`,
      es:`Los <strong>tipos de concordancia</strong> controlan qué búsquedas activan tus anuncios.<br><br>
<strong>1. Concordancia Exacta <code>[palabra clave]</code>:</strong>
<ul>
  <li>El anuncio aparece solo cuando la búsqueda es exactamente la keyword (o variaciones muy cercanas)</li>
  <li>Menor volumen, mayor precisión, mayor CTR, menor CPC desperdiciado</li>
  <li>Usar para: keywords de alta conversión, términos de marca, productos específicos</li>
</ul>
<strong>2. Concordancia de Frase <code>"palabra clave"</code>:</strong>
<ul>
  <li>El anuncio aparece cuando la búsqueda contiene la keyword como parte de una frase, preservando el significado</li>
  <li>Volumen medio, precisión media — buen equilibrio para la mayoría de los casos</li>
</ul>
<strong>3. Concordancia Amplia <code>palabra clave</code> (sin símbolos):</strong>
<ul>
  <li>El anuncio puede aparecer para búsquedas relacionadas, sinónimos, temas relacionados — Google decide</li>
  <li>Mayor volumen, menor precisión — puede generar mucho tráfico irrelevante</li>
  <li>Usar solo con Smart Bidding y negativos bien configurados</li>
</ul>
<strong>Estrategia práctica recomendada:</strong>
<ul>
  <li>Comenzar con <strong>exacta y frase</strong> para tener control</li>
  <li>Monitorear el Informe de Términos de Búsqueda diariamente y agregar negativos</li>
</ul>`,
    },
    tags:['Google-Ads','correspondência','match-type','exata','frase','ampla','keywords','negativos'],
  },
  {
    q:{pt:'O que são palavras-chave negativas e por que são essenciais no Search?',en:'What are negative keywords and why are they essential in Search?',es:'¿Qué son las palabras clave negativas y por qué son esenciales en Search?'},
    a:{
      pt:`<strong>Palavras-chave negativas</strong> excluem buscas que você NÃO quer que ativem seus anúncios — essenciais para evitar desperdício de budget e manter o tráfego relevante.<br><br>
<strong>Por que são críticas:</strong>
<ul>
  <li>Sem negativos bem configurados, campanhas com correspondência ampla ou de frase podem mostrar anúncios para buscas completamente irrelevantes</li>
  <li>Ex: campanha de "advogado trabalhista" sem negativos pode ativar para "série de advogado netflix" ou "jogo de advogado"</li>
  <li>Cada clique irrelevante = budget desperdiçado + CTR baixo = Quality Score ruim</li>
</ul>
<strong>Tipos de correspondência de negativos:</strong>
<ul>
  <li><code>-palavra</code>: exclui buscas que contenham essa palavra em qualquer posição</li>
  <li><code>-"frase negativa"</code>: exclui buscas que contenham exatamente essa sequência</li>
  <li><code>-[exata negativa]</code>: exclui apenas buscas exatas para essa keyword</li>
</ul>
<strong>Categorias de negativos mais comuns:</strong>
<ul>
  <li><strong>Concorrentes gratuitos ou alternativos:</strong> "grátis", "gratuito", "free", "open source", "alternativa a"</li>
  <li><strong>Busca por emprego (se você vende produto):</strong> "vaga", "emprego", "salário", "curriculo"</li>
  <li><strong>Conteúdo informacional (se quer compra):</strong> "o que é", "como funciona", "definição", "wikipedia"</li>
  <li><strong>Localização errada:</strong> se serve só BR, excluir países/cidades que aparecem nas buscas mas não atende</li>
  <li><strong>Produtos que não vende:</strong> modelos ou variantes fora do seu catálogo</li>
</ul>
<strong>Como gerenciar negativos:</strong>
<ul>
  <li>Verificar o <strong>Relatório de Termos de Pesquisa</strong> (Keywords → Termos de pesquisa) pelo menos 2x/semana</li>
  <li>Criar <strong>Lista de Negativos compartilhada</strong> (Biblioteca compartilhada → Listas de palavras-chave negativas) — aplica em múltiplas campanhas de uma vez</li>
  <li>Adicionar negativos por campanha ou ad group conforme a especificidade da exclusão</li>
</ul>`,
      en:`<strong>Negative keywords</strong> exclude searches you do NOT want to trigger your ads — essential to avoid budget waste and maintain relevant traffic.<br><br>
<strong>Why they're critical:</strong>
<ul>
  <li>Without well-configured negatives, broad or phrase match campaigns can show ads for completely irrelevant searches</li>
  <li>E.g.: "employment lawyer" campaign without negatives may trigger for "lawyer TV series netflix" or "lawyer game"</li>
  <li>Each irrelevant click = wasted budget + low CTR = poor Quality Score</li>
</ul>
<strong>Common negative categories:</strong>
<ul>
  <li>Free/alternative seekers: "free", "open source", "alternative to"</li>
  <li>Job seekers: "job", "salary", "resume", "vacancy"</li>
  <li>Informational searches (if you want purchases): "what is", "how does it work", "definition", "wikipedia"</li>
  <li>Products you don't sell: models or variants outside your catalog</li>
</ul>
<strong>How to manage negatives:</strong>
<ul>
  <li>Check <strong>Search Terms Report</strong> at least 2x/week</li>
  <li>Create <strong>Shared Negative Lists</strong> (Shared library → Negative keyword lists) — applies across multiple campaigns</li>
</ul>`,
      es:`Las <strong>palabras clave negativas</strong> excluyen búsquedas que NO quieres que activen tus anuncios.<br><br>
<strong>Por qué son críticas:</strong>
<ul>
  <li>Sin negativos bien configurados, las campañas pueden mostrar anuncios para búsquedas completamente irrelevantes</li>
  <li>Cada clic irrelevante = presupuesto desperdiciado + CTR bajo = peor Quality Score</li>
</ul>
<strong>Categorías de negativos más comunes:</strong>
<ul>
  <li>Búsquedas de gratuidad: "gratis", "free", "alternativa a"</li>
  <li>Búsquedas de empleo: "trabajo", "salario", "currículum"</li>
  <li>Contenido informacional: "qué es", "cómo funciona", "definición", "wikipedia"</li>
  <li>Productos que no vendes</li>
</ul>
<strong>Cómo gestionar negativos:</strong>
<ul>
  <li>Revisar el <strong>Informe de Términos de Búsqueda</strong> al menos 2 veces/semana</li>
  <li>Crear <strong>Listas de Negativos compartidas</strong> — se aplica en múltiplas campañas a la vez</li>
</ul>`,
    },
    tags:['Google-Ads','negativos','Search','keywords','Quality-Score','budget','Search-Terms-Report'],
  },
  {
    q:{pt:'O que é Quality Score no Google Ads e como melhorá-lo?',en:'What is Quality Score in Google Ads and how to improve it?',es:'¿Qué es el Quality Score en Google Ads y cómo mejorarlo?'},
    a:{
      pt:`O <strong>Quality Score (QS)</strong> é uma pontuação de 1-10 que o Google dá para cada palavra-chave, baseada na relevância do anúncio para a busca do usuário. Afeta diretamente o custo e a posição dos anúncios.<br><br>
<strong>Os 3 componentes do Quality Score:</strong>
<ul>
  <li><strong>CTR Esperado (Expected CTR):</strong> com base no histórico da keyword, qual a probabilidade de alguém clicar no anúncio? Acima/Na Média/Abaixo da Média</li>
  <li><strong>Relevância do Anúncio (Ad Relevance):</strong> o anúncio corresponde à intenção da busca? A keyword aparece no título e descrição?</li>
  <li><strong>Experiência na Página de Destino (Landing Page Experience):</strong> a landing page é relevante, rápida e fácil de navegar? Contém o conteúdo prometido no anúncio?</li>
</ul>
<strong>Como o QS afeta os custos (Ad Rank):</strong>
<ul>
  <li><code>Ad Rank = Lance × Quality Score × Extensões e outros fatores</code></li>
  <li>QS 10 pode pagar menos e aparecer em posição maior que concorrente com lance mais alto mas QS 4</li>
  <li>Diferença de 1 ponto no QS pode reduzir o CPC real em 5-16%</li>
</ul>
<strong>Como melhorar o Quality Score:</strong>
<ul>
  <li><strong>Aumentar CTR:</strong> escrever anúncios mais atraentes, usar números/ofertas/USP, testar diferentes headlines</li>
  <li><strong>Aumentar Relevância do Anúncio:</strong> incluir a keyword principal no headline 1, agrupar keywords por tema próximo (ad groups temáticos pequenos)</li>
  <li><strong>Melhorar Landing Page:</strong> velocidade (Core Web Vitals), conteúdo relevante à keyword, CTA claro, mobile-friendly, HTTPS</li>
  <li><strong>Estrutura de Ad Groups:</strong> SKAGs (Single Keyword Ad Groups) ou ad groups bem temáticos garantem máxima relevância anúncio-keyword</li>
</ul>`,
      en:`<strong>Quality Score (QS)</strong> is a 1-10 score Google gives to each keyword, based on ad relevance to the user's search. Directly affects cost and ad position.<br><br>
<strong>The 3 Quality Score components:</strong>
<ul>
  <li><strong>Expected CTR:</strong> based on keyword history, what's the probability someone will click the ad?</li>
  <li><strong>Ad Relevance:</strong> does the ad match the search intent? Does the keyword appear in title and description?</li>
  <li><strong>Landing Page Experience:</strong> is the landing page relevant, fast and easy to navigate?</li>
</ul>
<strong>How QS affects costs (Ad Rank):</strong>
<ul>
  <li><code>Ad Rank = Bid × Quality Score × Extensions and other factors</code></li>
  <li>QS 10 can pay less and appear higher than competitor with higher bid but QS 4</li>
  <li>1 point difference in QS can reduce actual CPC by 5-16%</li>
</ul>
<strong>How to improve Quality Score:</strong>
<ul>
  <li>Increase CTR: more compelling ads, numbers/offers/USP, test different headlines</li>
  <li>Increase Ad Relevance: include main keyword in headline 1, thematic ad groups</li>
  <li>Improve Landing Page: speed, relevant content, clear CTA, mobile-friendly, HTTPS</li>
</ul>`,
      es:`El <strong>Quality Score (QS)</strong> es una puntuación de 1-10 que Google da a cada palabra clave, basada en la relevancia del anuncio para la búsqueda del usuario. Afecta directamente el coste y la posición de los anuncios.<br><br>
<strong>Los 3 componentes del Quality Score:</strong>
<ul>
  <li><strong>CTR Esperado:</strong> ¿cuál es la probabilidad de que alguien haga clic en el anuncio?</li>
  <li><strong>Relevancia del Anuncio:</strong> ¿el anuncio corresponde a la intención de la búsqueda?</li>
  <li><strong>Experiencia en la Página de Destino:</strong> ¿la landing page es relevante, rápida y fácil de navegar?</li>
</ul>
<strong>Cómo el QS afecta los costes:</strong>
<ul>
  <li><code>Ad Rank = Puja × Quality Score × Extensiones y otros factores</code></li>
  <li>QS 10 puede pagar menos y aparecer en posición mayor que un competidor con puja más alta pero QS 4</li>
</ul>
<strong>Cómo mejorar el Quality Score:</strong>
<ul>
  <li>Aumentar CTR: anuncios más atractivos, números/ofertas/USP</li>
  <li>Aumentar Relevancia: incluir la keyword principal en el título 1, grupos de anuncios temáticos</li>
  <li>Mejorar Landing Page: velocidad, contenido relevante, CTA claro, mobile-friendly, HTTPS</li>
</ul>`,
    },
    tags:['Google-Ads','Quality-Score','CTR','Ad-Rank','landing-page','relevância','CPC'],
  }
);
})();

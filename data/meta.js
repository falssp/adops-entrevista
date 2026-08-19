// Módulo Meta Ads — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['meta'] = {
  icon: '📘',
  name: { pt: 'Meta Ads', en: 'Meta Ads', es: 'Meta Ads' },
  desc: {
    pt: 'Plataforma de anúncios do Facebook, Instagram, Messenger e Audience Network — o maior ecossistema de social advertising do mundo.',
    en: 'Facebook, Instagram, Messenger and Audience Network advertising platform — the largest social advertising ecosystem in the world.',
    es: 'Plataforma de anuncios de Facebook, Instagram, Messenger y Audience Network — el ecosistema de social advertising más grande del mundo.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'Explique a estrutura hierárquica do Meta Ads: Business Manager → Ad Account → Campaign → Ad Set → Ad.',
            en: 'Explain the Meta Ads hierarchy: Business Manager → Ad Account → Campaign → Ad Set → Ad.',
            es: 'Explica la jerarquía de Meta Ads: Business Manager → Ad Account → Campaign → Ad Set → Ad.',
          },
          a: {
            pt: `<ul>
  <li><strong>Business Manager (Meta Business Suite):</strong> Hub central da empresa — gerencia múltiplas Ad Accounts, Pages, pixels, catálogos e usuários. Essencial para agências que gerenciam múltiplos clientes.</li>
  <li><strong>Ad Account:</strong> Container financeiro — cada conta tem seu próprio billing, moeda e limite de gasto. Um BM pode ter múltiplas Ad Accounts.</li>
  <li><strong>Campaign:</strong> Define o <strong>objetivo</strong> de marketing (Awareness, Traffic, Engagement, Leads, App Promotion, Sales). O objetivo determina o algoritmo de otimização disponível.</li>
  <li><strong>Ad Set:</strong> Define <strong>quem</strong> (audience), <strong>onde</strong> (placements), <strong>quando</strong> (schedule) e <strong>quanto</strong> (budget/bid). É o nível de targeting.</li>
  <li><strong>Ad:</strong> O criativo em si — combinação de formato (imagem, vídeo, carrossel, collection), copy, CTA e URL de destino.</li>
</ul>
<strong>Regra importante:</strong> o objetivo da Campaign não pode ser alterado depois de criado — se errar o objetivo, precisa criar uma nova campanha do zero.`,
            en: `<ul>
  <li><strong>Business Manager (Meta Business Suite):</strong> Company central hub — manages multiple Ad Accounts, Pages, pixels, catalogs and users. Essential for agencies managing multiple clients.</li>
  <li><strong>Ad Account:</strong> Financial container — each account has its own billing, currency and spend limit. One BM can have multiple Ad Accounts.</li>
  <li><strong>Campaign:</strong> Defines the <strong>marketing objective</strong> (Awareness, Traffic, Engagement, Leads, App Promotion, Sales). The objective determines the available optimization algorithm.</li>
  <li><strong>Ad Set:</strong> Defines <strong>who</strong> (audience), <strong>where</strong> (placements), <strong>when</strong> (schedule) and <strong>how much</strong> (budget/bid). This is the targeting level.</li>
  <li><strong>Ad:</strong> The creative itself — combination of format (image, video, carousel, collection), copy, CTA and destination URL.</li>
</ul>
<strong>Important rule:</strong> the Campaign objective cannot be changed after creation — if you get it wrong, you need to create a new campaign from scratch.`,
            es: `<ul>
  <li><strong>Business Manager (Meta Business Suite):</strong> Hub central de la empresa — gestiona múltiples Ad Accounts, Pages, pixels, catálogos y usuarios. Esencial para agencias que gestionan múltiples clientes.</li>
  <li><strong>Ad Account:</strong> Contenedor financiero — cada cuenta tiene su propio billing, moneda y límite de gasto. Un BM puede tener múltiples Ad Accounts.</li>
  <li><strong>Campaign:</strong> Define el <strong>objetivo</strong> de marketing (Awareness, Traffic, Engagement, Leads, App Promotion, Sales). El objetivo determina el algoritmo de optimización disponible.</li>
  <li><strong>Ad Set:</strong> Define <strong>quién</strong> (audiencia), <strong>dónde</strong> (placements), <strong>cuándo</strong> (schedule) y <strong>cuánto</strong> (budget/bid). Es el nivel de targeting.</li>
  <li><strong>Ad:</strong> El creativo en sí — combinación de formato (imagen, video, carrusel, collection), copy, CTA y URL de destino.</li>
</ul>
<strong>Regla importante:</strong> el objetivo de la Campaign no puede cambiarse después de creado — si se equivoca, hay que crear una nueva campaña desde cero.`,
          },
          tags: ['hierarquia', 'Business-Manager', 'campaign', 'ad-set'],
        },
        {
          q: {
            pt: 'O que é o Meta Pixel e como ele funciona? Qual a diferença entre o Pixel e a Conversions API?',
            en: 'What is the Meta Pixel and how does it work? What is the difference between the Pixel and the Conversions API?',
            es: '¿Qué es el Meta Pixel y cómo funciona? ¿Cuál es la diferencia entre el Pixel y la Conversions API?',
          },
          a: {
            pt: `<strong>Meta Pixel</strong> é um snippet de JavaScript instalado no site que envia eventos ao Meta quando usuários realizam ações.<br><br>
<strong>Como funciona:</strong>
<ol>
  <li>Usuário visita o site → Pixel carrega no browser</li>
  <li>Usuário realiza uma ação (PageView, AddToCart, Purchase)</li>
  <li>Pixel dispara um evento para os servidores do Meta via browser</li>
  <li>Meta usa esse dado para otimizar campanhas e medir conversões</li>
</ol>
<strong>Eventos padrão mais comuns:</strong> PageView, ViewContent, AddToCart, InitiateCheckout, Purchase, Lead, CompleteRegistration.<br><br>
<strong>Pixel vs Conversions API (CAPI):</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Característica</th><th style="padding:6px">Pixel (browser)</th><th style="padding:6px">CAPI (server)</th></tr>
<tr><td style="padding:6px">Via</td><td style="padding:6px">JavaScript no browser</td><td style="padding:6px">Servidor para servidor</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Afetado por ad blockers</td><td style="padding:6px">Sim</td><td style="padding:6px">Não</td></tr>
<tr><td style="padding:6px">Afetado por iOS 14+</td><td style="padding:6px">Sim (ATT)</td><td style="padding:6px">Menos impactado</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Latência</td><td style="padding:6px">Instantânea</td><td style="padding:6px">Pode ter delay</td></tr>
</table><br>
<strong>Melhor prática:</strong> usar Pixel + CAPI juntos (redundância) com deduplication habilitada para evitar dupla contagem. O Meta deduplica pelos campos event_name + event_id.`,
            en: `<strong>Meta Pixel</strong> is a JavaScript snippet installed on the website that sends events to Meta when users perform actions.<br><br>
<strong>How it works:</strong>
<ol>
  <li>User visits the site → Pixel loads in browser</li>
  <li>User performs an action (PageView, AddToCart, Purchase)</li>
  <li>Pixel fires an event to Meta's servers via browser</li>
  <li>Meta uses this data to optimize campaigns and measure conversions</li>
</ol>
<strong>Most common standard events:</strong> PageView, ViewContent, AddToCart, InitiateCheckout, Purchase, Lead, CompleteRegistration.<br><br>
<strong>Pixel vs Conversions API (CAPI):</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Feature</th><th style="padding:6px">Pixel (browser)</th><th style="padding:6px">CAPI (server)</th></tr>
<tr><td style="padding:6px">Via</td><td style="padding:6px">JavaScript in browser</td><td style="padding:6px">Server to server</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Affected by ad blockers</td><td style="padding:6px">Yes</td><td style="padding:6px">No</td></tr>
<tr><td style="padding:6px">Affected by iOS 14+</td><td style="padding:6px">Yes (ATT)</td><td style="padding:6px">Less impacted</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Latency</td><td style="padding:6px">Instant</td><td style="padding:6px">May have delay</td></tr>
</table><br>
<strong>Best practice:</strong> use Pixel + CAPI together (redundancy) with deduplication enabled to avoid double counting. Meta deduplicates by event_name + event_id fields.`,
            es: `<strong>Meta Pixel</strong> es un snippet de JavaScript instalado en el sitio que envía eventos a Meta cuando los usuarios realizan acciones.<br><br>
<strong>Cómo funciona:</strong>
<ol>
  <li>Usuario visita el sitio → Pixel carga en el browser</li>
  <li>Usuario realiza una acción (PageView, AddToCart, Purchase)</li>
  <li>Pixel dispara un evento a los servidores de Meta via browser</li>
  <li>Meta usa este dato para optimizar campañas y medir conversiones</li>
</ol>
<strong>Eventos estándar más comunes:</strong> PageView, ViewContent, AddToCart, InitiateCheckout, Purchase, Lead, CompleteRegistration.<br><br>
<strong>Pixel vs Conversions API (CAPI):</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Característica</th><th style="padding:6px">Pixel (browser)</th><th style="padding:6px">CAPI (servidor)</th></tr>
<tr><td style="padding:6px">Vía</td><td style="padding:6px">JavaScript en browser</td><td style="padding:6px">Servidor a servidor</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Afectado por ad blockers</td><td style="padding:6px">Sí</td><td style="padding:6px">No</td></tr>
<tr><td style="padding:6px">Afectado por iOS 14+</td><td style="padding:6px">Sí (ATT)</td><td style="padding:6px">Menos impactado</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Latencia</td><td style="padding:6px">Instantánea</td><td style="padding:6px">Puede tener delay</td></tr>
</table><br>
<strong>Mejor práctica:</strong> usar Pixel + CAPI juntos (redundancia) con deduplicación habilitada para evitar doble conteo. Meta deduplica por los campos event_name + event_id.`,
          },
          tags: ['pixel', 'CAPI', 'conversions-api', 'tracking', 'iOS14'],
        },
        {
          q: {
            pt: 'Quais são os principais objetivos de campanha no Meta e quando usar cada um?',
            en: 'What are the main campaign objectives in Meta and when to use each?',
            es: '¿Cuáles son los principales objetivos de campaña en Meta y cuándo usar cada uno?',
          },
          a: {
            pt: `<strong>Objetivos de campanha no Meta (estrutura ODAX):</strong><br><br>
<ul>
  <li><strong>Awareness:</strong> maximizar alcance e lembrança de marca. Usar para lançamentos, rebranding, share of voice. KPIs: Reach, Impressões, Estimated Ad Recall Lift.</li>
  <li><strong>Traffic:</strong> direcionar usuários para URL externa, app ou WhatsApp. Usar quando o objetivo é sessões no site sem conversão específica. KPIs: Cliques, CTR, Landing Page Views.</li>
  <li><strong>Engagement:</strong> maximizar interações (curtidas, comentários, compartilhamentos, mensagens). Usar para construção de comunidade ou social proof. KPIs: Post Engagement, Reach.</li>
  <li><strong>Leads:</strong> coletar dados via Lead Forms (dentro do Meta) ou site. Usar para funis B2B ou quando o site tem alta taxa de abandono. KPIs: CPL (Custo por Lead), Lead Quality Score.</li>
  <li><strong>App Promotion:</strong> instalações ou eventos dentro de apps mobile. Requer integração com SDK (Facebook SDK ou SKAdNetwork para iOS). KPIs: CPI, In-app events.</li>
  <li><strong>Sales:</strong> otimização para compras ou conversões de valor. Requer Pixel/CAPI configurado. KPIs: CPA, ROAS, Conversões.</li>
</ul>
<strong>Dica:</strong> o objetivo determina o algoritmo de otimização e o pool de usuários elegíveis. Escolher o objetivo errado é o erro mais custoso em Meta Ads.`,
            en: `<strong>Meta campaign objectives (ODAX structure):</strong><br><br>
<ul>
  <li><strong>Awareness:</strong> maximize reach and brand recall. Use for launches, rebranding, share of voice. KPIs: Reach, Impressions, Estimated Ad Recall Lift.</li>
  <li><strong>Traffic:</strong> direct users to external URL, app or WhatsApp. Use when the goal is website sessions without a specific conversion. KPIs: Clicks, CTR, Landing Page Views.</li>
  <li><strong>Engagement:</strong> maximize interactions (likes, comments, shares, messages). Use for community building or social proof. KPIs: Post Engagement, Reach.</li>
  <li><strong>Leads:</strong> collect data via Lead Forms (within Meta) or site. Use for B2B funnels or when the site has high abandonment rate. KPIs: CPL (Cost per Lead), Lead Quality Score.</li>
  <li><strong>App Promotion:</strong> installs or events within mobile apps. Requires SDK integration (Facebook SDK or SKAdNetwork for iOS). KPIs: CPI, In-app events.</li>
  <li><strong>Sales:</strong> optimization for purchases or value conversions. Requires Pixel/CAPI configured. KPIs: CPA, ROAS, Conversions.</li>
</ul>
<strong>Tip:</strong> the objective determines the optimization algorithm and pool of eligible users. Choosing the wrong objective is the most costly mistake in Meta Ads.`,
            es: `<strong>Objetivos de campaña en Meta (estructura ODAX):</strong><br><br>
<ul>
  <li><strong>Awareness:</strong> maximizar alcance y recuerdo de marca. Usar para lanzamientos, rebranding, share of voice. KPIs: Reach, Impresiones, Estimated Ad Recall Lift.</li>
  <li><strong>Traffic:</strong> dirigir usuarios a URL externa, app o WhatsApp. Usar cuando el objetivo son sesiones en el sitio sin conversión específica. KPIs: Clics, CTR, Landing Page Views.</li>
  <li><strong>Engagement:</strong> maximizar interacciones (me gusta, comentarios, compartidos, mensajes). Usar para construcción de comunidad o social proof. KPIs: Post Engagement, Reach.</li>
  <li><strong>Leads:</strong> recopilar datos via Lead Forms (dentro de Meta) o sitio. Usar para embudos B2B o cuando el sitio tiene alta tasa de abandono. KPIs: CPL (Costo por Lead), Lead Quality Score.</li>
  <li><strong>App Promotion:</strong> instalaciones o eventos dentro de apps móviles. Requiere integración con SDK (Facebook SDK o SKAdNetwork para iOS). KPIs: CPI, Eventos in-app.</li>
  <li><strong>Sales:</strong> optimización para compras o conversiones de valor. Requiere Pixel/CAPI configurado. KPIs: CPA, ROAS, Conversiones.</li>
</ul>
<strong>Consejo:</strong> el objetivo determina el algoritmo de optimización y el pool de usuarios elegibles. Elegir el objetivo incorrecto es el error más costoso en Meta Ads.`,
          },
          tags: ['objetivo', 'ODAX', 'awareness', 'conversão', 'leads'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'O que é o Advantage+ e como ele mudou a forma de fazer campanhas no Meta?',
            en: 'What is Advantage+ and how has it changed the way campaigns are run in Meta?',
            es: '¿Qué es Advantage+ y cómo cambió la forma de hacer campañas en Meta?',
          },
          a: {
            pt: `<strong>Advantage+</strong> é o conjunto de ferramentas de automação e IA do Meta, que transfere decisões de targeting, placement e criativo para o algoritmo.<br><br>
<strong>Principais produtos Advantage+:</strong>
<ul>
  <li><strong>Advantage+ Audience:</strong> o Meta expande ou substitui o targeting definido se detectar oportunidades de melhor performance. Anunciante define o público como "sugestão", não como limite fixo.</li>
  <li><strong>Advantage+ Placements:</strong> Meta distribui automaticamente o budget entre todos os placements (Feed, Stories, Reels, Audience Network) conforme performance. Mais eficiente que selecionar manualmente.</li>
  <li><strong>Advantage+ Shopping Campaigns (ASC):</strong> campanha de e-commerce totalmente automatizada — combina prospecting + retargeting em um único Ad Set com budget único.</li>
  <li><strong>Advantage+ Creative:</strong> Meta pode ajustar automaticamente o criativo (brilho, contraste, proporção, adicionar música) para cada placement.</li>
</ul>
<strong>Impacto na operação:</strong>
<ul>
  <li>Menos controle granular de targeting — operadores precisam focar mais em dados de qualidade (Pixel/CAPI bem configurados)</li>
  <li>Testes A/B de audience se tornaram menos relevantes — algoritmo já testa internamente</li>
  <li>Criativo se torna o principal diferencial — com targeting automatizado, o creative é o targeting</li>
</ul>`,
            en: `<strong>Advantage+</strong> is Meta's set of automation and AI tools that transfers targeting, placement and creative decisions to the algorithm.<br><br>
<strong>Main Advantage+ products:</strong>
<ul>
  <li><strong>Advantage+ Audience:</strong> Meta expands or replaces the defined targeting if it detects better performance opportunities. Advertiser sets audience as a "suggestion," not a fixed limit.</li>
  <li><strong>Advantage+ Placements:</strong> Meta automatically distributes budget across all placements (Feed, Stories, Reels, Audience Network) based on performance. More efficient than manual selection.</li>
  <li><strong>Advantage+ Shopping Campaigns (ASC):</strong> fully automated e-commerce campaign — combines prospecting + retargeting in a single Ad Set with a single budget.</li>
  <li><strong>Advantage+ Creative:</strong> Meta can automatically adjust the creative (brightness, contrast, ratio, add music) for each placement.</li>
</ul>
<strong>Operational impact:</strong>
<ul>
  <li>Less granular targeting control — operators need to focus more on data quality (well-configured Pixel/CAPI)</li>
  <li>Audience A/B tests became less relevant — algorithm already tests internally</li>
  <li>Creative becomes the main differentiator — with automated targeting, the creative IS the targeting</li>
</ul>`,
            es: `<strong>Advantage+</strong> es el conjunto de herramientas de automatización e IA de Meta, que transfiere decisiones de targeting, placement y creativo al algoritmo.<br><br>
<strong>Principales productos Advantage+:</strong>
<ul>
  <li><strong>Advantage+ Audience:</strong> Meta expande o reemplaza el targeting definido si detecta oportunidades de mejor performance. El anunciante define la audiencia como "sugerencia", no como límite fijo.</li>
  <li><strong>Advantage+ Placements:</strong> Meta distribuye automáticamente el budget entre todos los placements (Feed, Stories, Reels, Audience Network) según performance. Más eficiente que la selección manual.</li>
  <li><strong>Advantage+ Shopping Campaigns (ASC):</strong> campaña de e-commerce totalmente automatizada — combina prospecting + retargeting en un único Ad Set con presupuesto único.</li>
  <li><strong>Advantage+ Creative:</strong> Meta puede ajustar automáticamente el creativo (brillo, contraste, proporción, agregar música) para cada placement.</li>
</ul>
<strong>Impacto en la operación:</strong>
<ul>
  <li>Menos control granular de targeting — los operadores necesitan enfocarse más en calidad de datos (Pixel/CAPI bien configurados)</li>
  <li>Los tests A/B de audiencias se volvieron menos relevantes — el algoritmo ya prueba internamente</li>
  <li>El creativo se convierte en el principal diferencial — con targeting automatizado, el creativo ES el targeting</li>
</ul>`,
          },
          tags: ['Advantage+', 'automação', 'IA', 'ASC', 'criativo'],
        },
        {
          q: {
            pt: 'Como o iOS 14+ impactou as campanhas no Meta e quais são as soluções?',
            en: 'How did iOS 14+ impact Meta campaigns and what are the solutions?',
            es: '¿Cómo impactó iOS 14+ en las campañas de Meta y cuáles son las soluciones?',
          },
          a: {
            pt: `<strong>Impacto do iOS 14+ (ATT — App Tracking Transparency):</strong><br><br>
A partir do iOS 14.5 (abril 2021), a Apple exige que apps solicitem permissão explícita para rastrear usuários. A maioria dos usuários recusa → Meta perde dados de conversão dos usuários Apple.<br><br>
<strong>Consequências práticas:</strong>
<ul>
  <li>Janela de atribuição forçada para 7 dias clique / 1 dia view (era 28 dias)</li>
  <li>Limite de 8 eventos de conversão por domínio (Aggregated Event Measurement)</li>
  <li>Dados de performance subrepresentados — conversões reais > conversões reportadas</li>
  <li>Retargeting de usuários iOS drasticamente reduzido</li>
  <li>Lookalike audiences baseadas em eventos do Pixel menos precisas</li>
</ul>
<strong>Soluções implementadas pelo Meta:</strong>
<ul>
  <li><strong>Conversions API (CAPI):</strong> envio de eventos direto do servidor — não depende do browser iOS</li>
  <li><strong>Aggregated Event Measurement:</strong> priorizar os 8 eventos mais importantes por domínio</li>
  <li><strong>Modelagem estatística:</strong> Meta estima conversões não reportadas via modelos preditivos</li>
  <li><strong>Verificação de domínio:</strong> obrigatória para usar AEM</li>
</ul>
<strong>Melhor prática atual:</strong> Pixel + CAPI + verificação de domínio + priorizar eventos de maior valor no AEM.`,
            en: `<strong>iOS 14+ impact (ATT — App Tracking Transparency):</strong><br><br>
Starting with iOS 14.5 (April 2021), Apple requires apps to explicitly request permission to track users. Most users decline → Meta loses conversion data from Apple users.<br><br>
<strong>Practical consequences:</strong>
<ul>
  <li>Attribution window forced to 7-day click / 1-day view (was 28 days)</li>
  <li>Limit of 8 conversion events per domain (Aggregated Event Measurement)</li>
  <li>Underrepresented performance data — actual conversions > reported conversions</li>
  <li>iOS user retargeting drastically reduced</li>
  <li>Pixel event-based lookalike audiences less precise</li>
</ul>
<strong>Solutions implemented by Meta:</strong>
<ul>
  <li><strong>Conversions API (CAPI):</strong> sending events directly from the server — doesn't depend on iOS browser</li>
  <li><strong>Aggregated Event Measurement:</strong> prioritize the 8 most important events per domain</li>
  <li><strong>Statistical modeling:</strong> Meta estimates unreported conversions via predictive models</li>
  <li><strong>Domain verification:</strong> required to use AEM</li>
</ul>
<strong>Current best practice:</strong> Pixel + CAPI + domain verification + prioritize highest-value events in AEM.`,
            es: `<strong>Impacto de iOS 14+ (ATT — App Tracking Transparency):</strong><br><br>
A partir de iOS 14.5 (abril 2021), Apple exige que las apps soliciten permiso explícito para rastrear usuarios. La mayoría rechaza → Meta pierde datos de conversión de usuarios Apple.<br><br>
<strong>Consecuencias prácticas:</strong>
<ul>
  <li>Ventana de atribución forzada a 7 días clic / 1 día view (era 28 días)</li>
  <li>Límite de 8 eventos de conversión por dominio (Aggregated Event Measurement)</li>
  <li>Datos de performance subrepresentados — conversiones reales > conversiones reportadas</li>
  <li>Retargeting de usuarios iOS drásticamente reducido</li>
  <li>Audiencias lookalike basadas en eventos del Pixel menos precisas</li>
</ul>
<strong>Soluciones implementadas por Meta:</strong>
<ul>
  <li><strong>Conversions API (CAPI):</strong> envío de eventos directo desde el servidor — no depende del browser iOS</li>
  <li><strong>Aggregated Event Measurement:</strong> priorizar los 8 eventos más importantes por dominio</li>
  <li><strong>Modelado estadístico:</strong> Meta estima conversiones no reportadas via modelos predictivos</li>
  <li><strong>Verificación de dominio:</strong> obligatoria para usar AEM</li>
</ul>
<strong>Mejor práctica actual:</strong> Pixel + CAPI + verificación de dominio + priorizar eventos de mayor valor en AEM.`,
          },
          tags: ['iOS14', 'ATT', 'privacidade', 'CAPI', 'atribuição'],
        },
        {
          q: {
            pt: 'Como estruturar testes A/B no Meta Ads de forma eficiente?',
            en: 'How to efficiently structure A/B tests in Meta Ads?',
            es: '¿Cómo estructurar pruebas A/B en Meta Ads de forma eficiente?',
          },
          a: {
            pt: `<strong>Framework de testes A/B no Meta:</strong><br><br>
<strong>Ferramenta nativa:</strong> Meta tem a funcionalidade "A/B Test" que divide o audience aleatoriamente e garante que as mesmas pessoas não vejam os dois grupos — elimina sobreposição e garante validade estatística.<br><br>
<strong>O que testar (por prioridade de impacto):</strong>
<ol>
  <li><strong>Criativo</strong> — maior impacto. Testar: formato (vídeo vs. imagem), copy, CTA, thumbnail</li>
  <li><strong>Audience</strong> — interest targeting vs. broad vs. lookalike</li>
  <li><strong>Placement</strong> — feed vs. stories vs. reels</li>
  <li><strong>Bid strategy</strong> — lowest cost vs. cost cap vs. bid cap</li>
</ol>
<strong>Regras de um bom teste:</strong>
<ul>
  <li><strong>Uma variável por vez</strong> — nunca mudar criativo E audience ao mesmo tempo</li>
  <li><strong>Budget suficiente</strong> — Meta recomenda budget para pelo menos 50 conversões por variação para atingir significância</li>
  <li><strong>Duração mínima:</strong> 7 dias (evitar efeito dia-da-semana)</li>
  <li><strong>Métrica principal definida antes</strong> — não escolher o vencedor depois de ver os dados</li>
</ul>
<strong>Pós-teste:</strong> implementar o vencedor, documentar o aprendizado, e testar a próxima variável.`,
            en: `<strong>A/B testing framework in Meta:</strong><br><br>
<strong>Native tool:</strong> Meta has the "A/B Test" feature that randomly splits the audience and ensures the same people don't see both groups — eliminates overlap and ensures statistical validity.<br><br>
<strong>What to test (by impact priority):</strong>
<ol>
  <li><strong>Creative</strong> — highest impact. Test: format (video vs. image), copy, CTA, thumbnail</li>
  <li><strong>Audience</strong> — interest targeting vs. broad vs. lookalike</li>
  <li><strong>Placement</strong> — feed vs. stories vs. reels</li>
  <li><strong>Bid strategy</strong> — lowest cost vs. cost cap vs. bid cap</li>
</ol>
<strong>Rules for a good test:</strong>
<ul>
  <li><strong>One variable at a time</strong> — never change creative AND audience simultaneously</li>
  <li><strong>Sufficient budget</strong> — Meta recommends budget for at least 50 conversions per variation to reach significance</li>
  <li><strong>Minimum duration:</strong> 7 days (avoid day-of-week effect)</li>
  <li><strong>Primary metric defined beforehand</strong> — don't pick the winner after seeing the data</li>
</ul>
<strong>Post-test:</strong> implement the winner, document the learning, and test the next variable.`,
            es: `<strong>Framework de pruebas A/B en Meta:</strong><br><br>
<strong>Herramienta nativa:</strong> Meta tiene la funcionalidad "A/B Test" que divide aleatoriamente la audiencia y garantiza que las mismas personas no vean ambos grupos — elimina superposición y garantiza validez estadística.<br><br>
<strong>Qué probar (por prioridad de impacto):</strong>
<ol>
  <li><strong>Creativo</strong> — mayor impacto. Probar: formato (video vs. imagen), copy, CTA, thumbnail</li>
  <li><strong>Audiencia</strong> — interest targeting vs. broad vs. lookalike</li>
  <li><strong>Placement</strong> — feed vs. stories vs. reels</li>
  <li><strong>Estrategia de bid</strong> — lowest cost vs. cost cap vs. bid cap</li>
</ol>
<strong>Reglas de una buena prueba:</strong>
<ul>
  <li><strong>Una variable a la vez</strong> — nunca cambiar creativo Y audiencia al mismo tiempo</li>
  <li><strong>Presupuesto suficiente</strong> — Meta recomienda presupuesto para al menos 50 conversiones por variación para alcanzar significancia</li>
  <li><strong>Duración mínima:</strong> 7 días (evitar efecto día de la semana)</li>
  <li><strong>Métrica principal definida antes</strong> — no elegir el ganador después de ver los datos</li>
</ul>
<strong>Post-prueba:</strong> implementar el ganador, documentar el aprendizaje, y probar la siguiente variable.`,
          },
          tags: ['AB-test', 'teste', 'criativo', 'audience', 'significância'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como estruturar uma estratégia full-funnel no Meta? Como integrar Awareness, Consideração e Conversão sem canibalização?',
            en: 'How to structure a full-funnel strategy in Meta? How to integrate Awareness, Consideration and Conversion without cannibalization?',
            es: '¿Cómo estructurar una estrategia full-funnel en Meta? ¿Cómo integrar Awareness, Consideración y Conversión sin canibalización?',
          },
          a: {
            pt: `<strong>Estratégia full-funnel no Meta:</strong><br><br>
<strong>Estrutura de campanhas por etapa:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Etapa</th><th style="padding:6px">Objetivo</th><th style="padding:6px">Audience</th><th style="padding:6px">Creative</th></tr>
<tr><td style="padding:6px">TOFU</td><td style="padding:6px">Awareness</td><td style="padding:6px">Broad / Interests / LAL 5-10%</td><td style="padding:6px">Vídeo curto, storytelling de marca</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">MOFU</td><td style="padding:6px">Traffic/Engagement</td><td style="padding:6px">Video viewers 50-75% / Page engagers</td><td style="padding:6px">Conteúdo educativo, demonstrações</td></tr>
<tr><td style="padding:6px">BOFU</td><td style="padding:6px">Conversão</td><td style="padding:6px">Site visitors, Adicionou ao carrinho</td><td style="padding:6px">Oferta direta, prova social, urgência</td></tr>
</table><br>
<strong>Como evitar canibalização entre etapas:</strong>
<ul>
  <li><strong>Exclusões:</strong> excluir do TOFU quem já está no MOFU e BOFU; excluir do MOFU quem já converteu</li>
  <li><strong>Audiences separadas:</strong> nunca usar a mesma audience em campanhas de etapas diferentes simultaneamente</li>
  <li><strong>Budget allocation:</strong> regra prática 60/20/20 (TOFU/MOFU/BOFU) ajustável por volume de negócio</li>
</ul>
<strong>Com Advantage+ (nova realidade):</strong> o Meta tende a mesclar etapas internamente. Monitorar o relatório de breakdown por "audience type" (new vs. existing customers) para garantir equilíbrio.`,
            en: `<strong>Full-funnel strategy in Meta:</strong><br><br>
<strong>Campaign structure by stage:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Stage</th><th style="padding:6px">Objective</th><th style="padding:6px">Audience</th><th style="padding:6px">Creative</th></tr>
<tr><td style="padding:6px">TOFU</td><td style="padding:6px">Awareness</td><td style="padding:6px">Broad / Interests / LAL 5-10%</td><td style="padding:6px">Short video, brand storytelling</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">MOFU</td><td style="padding:6px">Traffic/Engagement</td><td style="padding:6px">Video viewers 50-75% / Page engagers</td><td style="padding:6px">Educational content, demonstrations</td></tr>
<tr><td style="padding:6px">BOFU</td><td style="padding:6px">Conversion</td><td style="padding:6px">Site visitors, Added to cart</td><td style="padding:6px">Direct offer, social proof, urgency</td></tr>
</table><br>
<strong>How to avoid cannibalization between stages:</strong>
<ul>
  <li><strong>Exclusions:</strong> exclude from TOFU those already in MOFU and BOFU; exclude from MOFU those who already converted</li>
  <li><strong>Separate audiences:</strong> never use the same audience in campaigns of different stages simultaneously</li>
  <li><strong>Budget allocation:</strong> practical rule 60/20/20 (TOFU/MOFU/BOFU) adjustable by business volume</li>
</ul>
<strong>With Advantage+ (new reality):</strong> Meta tends to merge stages internally. Monitor the breakdown report by "audience type" (new vs. existing customers) to ensure balance.`,
            es: `<strong>Estrategia full-funnel en Meta:</strong><br><br>
<strong>Estructura de campañas por etapa:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Etapa</th><th style="padding:6px">Objetivo</th><th style="padding:6px">Audiencia</th><th style="padding:6px">Creativo</th></tr>
<tr><td style="padding:6px">TOFU</td><td style="padding:6px">Awareness</td><td style="padding:6px">Broad / Interests / LAL 5-10%</td><td style="padding:6px">Video corto, storytelling de marca</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">MOFU</td><td style="padding:6px">Traffic/Engagement</td><td style="padding:6px">Video viewers 50-75% / Page engagers</td><td style="padding:6px">Contenido educativo, demostraciones</td></tr>
<tr><td style="padding:6px">BOFU</td><td style="padding:6px">Conversión</td><td style="padding:6px">Visitantes del sitio, Añadió al carrito</td><td style="padding:6px">Oferta directa, prueba social, urgencia</td></tr>
</table><br>
<strong>Cómo evitar canibalización entre etapas:</strong>
<ul>
  <li><strong>Exclusiones:</strong> excluir del TOFU a quienes ya están en MOFU y BOFU; excluir del MOFU a quienes ya convirtieron</li>
  <li><strong>Audiencias separadas:</strong> nunca usar la misma audiencia en campañas de etapas diferentes simultáneamente</li>
  <li><strong>Asignación de budget:</strong> regla práctica 60/20/20 (TOFU/MOFU/BOFU) ajustable por volumen de negocio</li>
</ul>
<strong>Con Advantage+ (nueva realidad):</strong> Meta tiende a fusionar etapas internamente. Monitorear el reporte de breakdown por "audience type" (new vs. existing customers) para garantizar equilibrio.`,
          },
          tags: ['full-funnel', 'TOFU', 'BOFU', 'retargeting', 'exclusão'],
        },
      ],
    },
  ],
};

// ── APPEND: Meta expandido ──
;(function(){
const d = window.__adopsData['meta'];
d.tiers[0].questions.push(
  {
    q:{pt:'O que são as Advantage+ Campaigns do Meta e como diferem das campanhas manuais?',en:'What are Meta Advantage+ Campaigns and how do they differ from manual campaigns?',es:'¿Qué son las Advantage+ Campaigns de Meta y cómo difieren de las campañas manuales?'},
    a:{
      pt:`As <strong>Advantage+ Campaigns</strong> (ASC — Advantage+ Shopping Campaigns e ACT — Advantage+ App Campaigns) são campanhas altamente automatizadas onde o Meta controla targeting, criativos e orçamento com mínima intervenção humana.<br><br>
<strong>Advantage+ Shopping Campaigns (ASC):</strong>
<ul>
  <li>Combina prospecção e retargeting automaticamente — o Meta decide a proporção ideal em tempo real</li>
  <li>Targeting: o Meta pode atingir qualquer pessoa no país selecionado (sem restrições de interesse ou demo além do obrigatório)</li>
  <li>Criativos: até 150 criativos por campanha — o Meta testa e distribui automaticamente</li>
  <li>Budget: único por campanha — o Meta distribui entre prospecting e retargeting</li>
  <li>Ideal para: e-commerce com histórico de conversões, catálogo de produtos, pelo menos 100 eventos de compra/semana</li>
</ul>
<strong>Advantage+ vs. Campanha Manual:</strong>
<table>
<tr><th>Aspecto</th><th>Advantage+</th><th>Manual</th></tr>
<tr><td>Targeting</td><td>Meta decide (mínimo controle)</td><td>Você define (geo, demo, interesse)</td></tr>
<tr><td>Orçamento</td><td>Otimizado automaticamente</td><td>Você define por Ad Set</td></tr>
<tr><td>Criativos</td><td>Até 150, Meta testa</td><td>Você gerencia rotação</td></tr>
<tr><td>Prospecção/Retargeting</td><td>Automático e dinâmico</td><td>Separado em Ad Sets</td></tr>
<tr><td>Melhor para</td><td>E-commerce com volume</td><td>Controle granular, testes A/B</td></tr>
</table><br>
<strong>Quando usar Advantage+ vs. Manual:</strong>
<ul>
  <li>Use ASC quando: você tem volume (&gt;50 compras/semana), quer maximizar ROAS, tem criativo abundante</li>
  <li>Use manual quando: está testando novos públicos, precisa controlar frequência por segmento, tem budget pequeno (&lt;R$3k/mês)</li>
</ul>`,
      en:`<strong>Advantage+ Campaigns</strong> are highly automated campaigns where Meta controls targeting, creatives and budget with minimal human intervention.<br><br>
<strong>Advantage+ Shopping Campaigns (ASC):</strong>
<ul>
  <li>Combines prospecting and retargeting automatically — Meta decides optimal ratio in real time</li>
  <li>Targeting: Meta can reach anyone in selected country (no interest or demo restrictions beyond mandatory)</li>
  <li>Creatives: up to 150 per campaign — Meta tests and distributes automatically</li>
  <li>Budget: single per campaign — Meta distributes between prospecting and retargeting</li>
  <li>Ideal for: e-commerce with conversion history, product catalog, at least 100 purchase events/week</li>
</ul>
<strong>When to use Advantage+ vs. Manual:</strong>
<ul>
  <li>Use ASC when: you have volume (&gt;50 purchases/week), want to maximize ROAS, have abundant creative</li>
  <li>Use manual when: testing new audiences, need granular frequency control, have small budget</li>
</ul>`,
      es:`Las <strong>Advantage+ Campaigns</strong> son campañas altamente automatizadas donde Meta controla targeting, creativos y presupuesto con mínima intervención humana.<br><br>
<strong>Advantage+ Shopping Campaigns (ASC):</strong>
<ul>
  <li>Combina prospecting y retargeting automáticamente — Meta decide la proporción óptima en tiempo real</li>
  <li>Targeting: Meta puede alcanzar a cualquier persona en el país seleccionado</li>
  <li>Creativos: hasta 150 por campaña — Meta prueba y distribuye automáticamente</li>
  <li>Ideal para: e-commerce con historial de conversiones, catálogo de productos, al menos 100 eventos de compra/semana</li>
</ul>
<strong>Cuándo usar Advantage+ vs. Manual:</strong>
<ul>
  <li>Usar ASC cuando: tienes volumen (&gt;50 compras/semana), quieres maximizar ROAS, tienes creativos abundantes</li>
  <li>Usar manual cuando: estás probando nuevas audiencias, necesitas control granular de frecuencia</li>
</ul>`,
    },
    tags:['Advantage+','ASC','Meta','automação','ROAS','targeting','e-commerce'],
  },
  {
    q:{pt:'Como funciona a atribuição no Meta Ads e quais as diferenças entre janelas de atribuição?',en:'How does attribution work in Meta Ads and what are the differences between attribution windows?',es:'¿Cómo funciona la atribución en Meta Ads y cuáles son las diferencias entre ventanas de atribución?'},
    a:{
      pt:`A atribuição no Meta Ads determina quais conversões são creditadas às campanhas e por quanto tempo após a exposição ao anúncio.<br><br>
<strong>Modelos de atribuição disponíveis no Meta:</strong>
<ul>
  <li><strong>Last Click:</strong> 100% do crédito ao último clique antes da conversão</li>
  <li><strong>Last Touch (padrão Meta):</strong> crédito ao último ponto de contato — clique tem prioridade sobre impressão</li>
  <li><strong>Data-Driven Attribution (DDA):</strong> ML distribui o crédito entre todos os touchpoints de acordo com a contribuição estimada de cada um</li>
</ul>
<strong>Janelas de atribuição:</strong>
<ul>
  <li><strong>Click:</strong> 1 dia, 7 dias (padrão) ou desativado. Conversão dentro deste prazo após clique = atribuída ao anúncio.</li>
  <li><strong>View:</strong> 1 dia (padrão) ou desativado. Conversão dentro de 1 dia após visualizar o anúncio (sem clicar) = atribuída ao anúncio.</li>
</ul>
<strong>Configuração padrão do Meta (atual): 7-day click + 1-day view.</strong><br><br>
<strong>Como escolher a janela correta:</strong>
<ul>
  <li>Ciclo de compra curto (impulso, &lt;R$100): 1-day click é suficiente</li>
  <li>Ciclo médio (produto considerado, R$100-500): 7-day click padrão</li>
  <li>Ciclo longo (B2B, produto caro): 28-day click (disponível apenas em alguns objetivos)</li>
</ul>
<strong>Impacto pós-iOS 14:</strong>
<ul>
  <li>Usuários iOS sem ATT opt-in: conversões rastreadas com delay de 24-72h via SKAdNetwork</li>
  <li>Conversões "modeladas": o Meta estima conversões não rastreáveis de usuários iOS e adiciona à contagem — aparecem em relatórios como "modeled conversions"</li>
  <li>Discrepância frequente entre Meta e GA4 por conta de janelas diferentes e conversões modeladas</li>
</ul>`,
      en:`Attribution in Meta Ads determines which conversions are credited to campaigns and for how long after ad exposure.<br><br>
<strong>Available attribution models:</strong>
<ul>
  <li><strong>Last Click:</strong> 100% credit to last click before conversion</li>
  <li><strong>Last Touch (Meta default):</strong> credit to last touchpoint — click has priority over impression</li>
  <li><strong>Data-Driven Attribution (DDA):</strong> ML distributes credit among all touchpoints according to estimated contribution</li>
</ul>
<strong>Attribution windows:</strong>
<ul>
  <li><strong>Click:</strong> 1 day, 7 days (default) or disabled</li>
  <li><strong>View:</strong> 1 day (default) or disabled</li>
</ul>
<strong>Current Meta default: 7-day click + 1-day view.</strong><br><br>
<strong>Post-iOS 14 impact:</strong>
<ul>
  <li>iOS users without ATT opt-in: conversions tracked with 24-72h delay via SKAdNetwork</li>
  <li>"Modeled conversions": Meta estimates untrackable iOS user conversions and adds to count</li>
  <li>Frequent discrepancy between Meta and GA4 due to different windows and modeled conversions</li>
</ul>`,
      es:`La atribución en Meta Ads determina qué conversiones se acreditan a las campañas y durante cuánto tiempo tras la exposición al anuncio.<br><br>
<strong>Modelos de atribución disponibles:</strong>
<ul>
  <li><strong>Last Click:</strong> 100% del crédito al último clic antes de la conversión</li>
  <li><strong>Last Touch (predeterminado Meta):</strong> crédito al último punto de contacto</li>
  <li><strong>Data-Driven Attribution (DDA):</strong> ML distribuye el crédito entre todos los touchpoints</li>
</ul>
<strong>Ventanas de atribución:</strong>
<ul>
  <li><strong>Clic:</strong> 1 día, 7 días (predeterminado) o desactivado</li>
  <li><strong>Visualización:</strong> 1 día (predeterminado) o desactivado</li>
</ul>
<strong>Configuración predeterminada actual de Meta: 7-day click + 1-day view.</strong><br><br>
<strong>Impacto post-iOS 14:</strong>
<ul>
  <li>Conversiones rastreadas con retraso de 24-72h via SKAdNetwork para usuarios iOS sin opt-in</li>
  <li>"Modeled conversions": Meta estima conversiones no rastreables y las agrega al conteo</li>
</ul>`,
    },
    tags:['Meta','atribuição','janela','Last-Click','DDA','iOS14','SKAdNetwork','modelagem'],
  }
);
d.tiers[2].questions.push(
  {
    q:{pt:'Como escalar uma conta de Meta Ads mantendo ROAS estável?',en:'How to scale a Meta Ads account while maintaining stable ROAS?',es:'¿Cómo escalar una cuenta de Meta Ads manteniendo un ROAS estable?'},
    a:{
      pt:`Escalar no Meta sem destruir o ROAS é o desafio central de qualquer gestor de performance — o algoritmo precisa de dados suficientes para otimizar enquanto a audiência não satura.<br><br>
<strong>Tipos de escala:</strong>
<ul>
  <li><strong>Escala vertical (budget):</strong> aumentar o budget do Ad Set ou campanha. Regra: aumentos de no máximo 20-30% por vez, a cada 3-5 dias. Aumentos maiores reiniciam a fase de aprendizado.</li>
  <li><strong>Escala horizontal (audiências):</strong> duplicar Ad Sets com novos públicos (Lookalike 3-6%, novos interesses, países adicionais). Manter o mesmo criativo para isolar a variável de audiência.</li>
  <li><strong>Escala criativa:</strong> adicionar novos criativos ao Ad Set ou campanha. Mais criativos = mais dados para o algoritmo testar e mais superfície de alcance.</li>
</ul>
<strong>Framework de escala sustentável:</strong>
<ol>
  <li>Identificar Ad Set com ROAS consistente por 7+ dias</li>
  <li>Aumentar budget em 20% — aguardar 3 dias para avaliação</li>
  <li>Se ROAS mantido: novo aumento de 20%</li>
  <li>Se ROAS caiu: pausar aumento, adicionar novo criativo ou nova audiência</li>
  <li>Criar campanha ASC paralela com budget crescente — ASC escala mais facilmente que campanhas manuais</li>
</ol>
<strong>Sinais de saturação de audiência:</strong>
<ul>
  <li>Frequência &gt;3 em 7 dias para awareness, &gt;5 para retargeting</li>
  <li>CPM crescendo sem mudança de sazonalidade</li>
  <li>CTR caindo progressivamente</li>
</ul>
<strong>Combater saturação:</strong>
<ul>
  <li>Expandir audiência: aumentar % do Lookalike, adicionar novos países</li>
  <li>Exclusões: excluir quem já converteu nos últimos X dias para reciclar budget para novos usuários</li>
  <li>Novos criativos: rotação criativa é a principal alavanca de escala no Meta</li>
  <li>CBO (Campaign Budget Optimization): deixar o Meta distribuir budget entre Ad Sets automaticamente</li>
</ul>`,
      en:`Scaling on Meta without destroying ROAS is the central challenge of any performance manager.<br><br>
<strong>Types of scaling:</strong>
<ul>
  <li><strong>Vertical scaling (budget):</strong> increase Ad Set or campaign budget. Rule: max 20-30% increases, every 3-5 days. Larger increases restart learning phase.</li>
  <li><strong>Horizontal scaling (audiences):</strong> duplicate Ad Sets with new audiences (Lookalike 3-6%, new interests, additional countries). Keep same creative to isolate audience variable.</li>
  <li><strong>Creative scaling:</strong> add new creatives to Ad Set or campaign. More creatives = more algorithm testing data and more reach surface.</li>
</ul>
<strong>Sustainable scaling framework:</strong>
<ol>
  <li>Identify Ad Set with consistent ROAS for 7+ days</li>
  <li>Increase budget by 20% — wait 3 days for evaluation</li>
  <li>If ROAS maintained: new 20% increase</li>
  <li>If ROAS dropped: pause increase, add new creative or new audience</li>
  <li>Create parallel ASC campaign with growing budget — ASC scales more easily than manual campaigns</li>
</ol>
<strong>Audience saturation signals:</strong> Frequency &gt;3 in 7 days, CPM rising without seasonality change, CTR progressively falling.<br><br>
<strong>Combat saturation:</strong> expand audience, add exclusions of recent converters, new creatives (main scaling lever on Meta), CBO.`,
      es:`Escalar en Meta sin destruir el ROAS es el desafío central de cualquier gestor de performance.<br><br>
<strong>Tipos de escala:</strong>
<ul>
  <li><strong>Escala vertical (presupuesto):</strong> aumentar el presupuesto máximo un 20-30% a la vez, cada 3-5 días. Aumentos mayores reinician la fase de aprendizaje.</li>
  <li><strong>Escala horizontal (audiencias):</strong> duplicar Ad Sets con nuevas audiencias. Mantener el mismo creativo para aislar la variable de audiencia.</li>
  <li><strong>Escala creativa:</strong> agregar nuevos creativos. Más creativos = más datos de prueba para el algoritmo.</li>
</ul>
<strong>Framework de escala sostenible:</strong>
<ol>
  <li>Identificar Ad Set con ROAS consistente por 7+ días</li>
  <li>Aumentar presupuesto un 20% — esperar 3 días para evaluación</li>
  <li>Si el ROAS se mantiene: nuevo aumento del 20%</li>
  <li>Si el ROAS cae: pausar el aumento, agregar nuevo creativo o nueva audiencia</li>
</ol>
<strong>Señales de saturación:</strong> Frecuencia &gt;3 en 7 días, CPM creciente, CTR cayendo progresivamente.<br><br>
<strong>Combatir la saturación:</strong> expandir audiencia, exclusiones de conversores recientes, nuevos creativos, CBO.`,
    },
    tags:['Meta','escala','ROAS','CBO','ASC','saturação','Lookalike','budget'],
  }
);
})();

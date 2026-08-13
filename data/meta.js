// Módulo Meta — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['meta'] = {
  icon: '📘',
  name: { pt: 'Meta Ads', en: 'Meta Ads', es: 'Meta Ads' },
  desc: {
    pt: 'Facebook, Instagram, WhatsApp e Audience Network — maior plataforma social de mídia paga.',
    en: 'Facebook, Instagram, WhatsApp and Audience Network — largest paid social platform.',
    es: 'Facebook, Instagram, WhatsApp y Audience Network — mayor plataforma social de medios pagos.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'Explique a estrutura de conta Meta: Business Manager → Ad Account → Campaign → Ad Set → Ad.',
            en: 'Explain the Meta account structure: Business Manager → Ad Account → Campaign → Ad Set → Ad.',
            es: 'Explica la estructura de cuenta Meta: Business Manager → Ad Account → Campaign → Ad Set → Ad.',
          },
          a: {
            pt: `<ul>
  <li><strong>Business Manager:</strong> hub administrativo — gerencia múltiplas Ad Accounts, Pages, pixels, catálogos e permissões.</li>
  <li><strong>Ad Account:</strong> unidade de cobrança — tem seu próprio pixel, audiences e limites de gasto.</li>
  <li><strong>Campaign:</strong> define o <em>objetivo</em> (Awareness, Traffic, Engagement, Leads, App, Sales). O objetivo determina quais otimizações ficam disponíveis.</li>
  <li><strong>Ad Set:</strong> define <em>quem, quando e quanto</em> — targeting, placements, schedule, orçamento e bid strategy.</li>
  <li><strong>Ad:</strong> a peça criativa — formato (image, carousel, vídeo, collection), copy, CTA e URL.</li>
</ul>
<strong>Budget:</strong> pode ser definido no Ad Set (ABO) ou na Campaign (CBO / Advantage Campaign Budget).`,
            en: `<ul>
  <li><strong>Business Manager:</strong> admin hub — manages multiple Ad Accounts, Pages, pixels, catalogs and permissions.</li>
  <li><strong>Ad Account:</strong> billing unit — has its own pixel, audiences and spend limits.</li>
  <li><strong>Campaign:</strong> defines the <em>objective</em> (Awareness, Traffic, Engagement, Leads, App, Sales). The objective determines available optimizations.</li>
  <li><strong>Ad Set:</strong> defines <em>who, when and how much</em> — targeting, placements, schedule, budget and bid strategy.</li>
  <li><strong>Ad:</strong> the creative — format (image, carousel, video, collection), copy, CTA and URL.</li>
</ul>
<strong>Budget:</strong> can be set at Ad Set level (ABO) or Campaign level (CBO / Advantage Campaign Budget).`,
            es: `<ul>
  <li><strong>Business Manager:</strong> hub administrativo — gestiona múltiples Ad Accounts, Pages, pixels, catálogos y permisos.</li>
  <li><strong>Ad Account:</strong> unidad de facturación — tiene su propio pixel, audiences y límites de gasto.</li>
  <li><strong>Campaign:</strong> define el <em>objetivo</em> (Awareness, Traffic, Engagement, Leads, App, Sales). El objetivo determina las optimizaciones disponibles.</li>
  <li><strong>Ad Set:</strong> define <em>quién, cuándo y cuánto</em> — targeting, placements, schedule, presupuesto y bid strategy.</li>
  <li><strong>Ad:</strong> la pieza creativa — formato (image, carousel, video, collection), copy, CTA y URL.</li>
</ul>
<strong>Budget:</strong> puede definirse en el Ad Set (ABO) o en la Campaign (CBO / Advantage Campaign Budget).`,
          },
          tags: ['meta', 'structure', 'CBO', 'ABO'],
        },
        {
          q: {
            pt: 'Quais são os principais objetivos de campanha no Meta e quando usar cada um?',
            en: 'What are the main campaign objectives in Meta and when to use each?',
            es: '¿Cuáles son los principales objetivos de campaña en Meta y cuándo usar cada uno?',
          },
          a: {
            pt: `<ul>
  <li><strong>Awareness:</strong> maximizar alcance e reconhecimento de marca — CPM otimizado para impressões. Usar para lançamentos.</li>
  <li><strong>Traffic:</strong> gerar cliques para site ou app — otimiza para Link Clicks ou Landing Page Views. Usar no topo/meio de funil.</li>
  <li><strong>Engagement:</strong> maximizar interações (curtidas, comentários, compartilhamentos, saves). Usar para conteúdo orgânico impulsionado.</li>
  <li><strong>Leads:</strong> captar leads via Lead Forms nativos (sem sair do app) ou via site. Usar para B2B e formulários de cadastro.</li>
  <li><strong>App Promotion:</strong> installs e eventos in-app — integra com SKAdNetwork (iOS) e SDK do Meta.</li>
  <li><strong>Sales:</strong> conversões no site, catálogo dinâmico ou WhatsApp. Requer pixel ou CAPI configurado. Usar para e-commerce e performance.</li>
</ul>
<strong>Regra:</strong> o objetivo define o evento de otimização disponível — nunca rodar campanha de Sales sem pixel ou CAPI funcionando.`,
            en: `<ul>
  <li><strong>Awareness:</strong> maximize reach and brand recognition — CPM optimized for impressions. Use for launches.</li>
  <li><strong>Traffic:</strong> drive clicks to website or app — optimizes for Link Clicks or Landing Page Views. Use for top/mid funnel.</li>
  <li><strong>Engagement:</strong> maximize interactions (likes, comments, shares, saves). Use for boosted organic content.</li>
  <li><strong>Leads:</strong> capture leads via native Lead Forms (without leaving the app) or via website. Use for B2B and registration forms.</li>
  <li><strong>App Promotion:</strong> installs and in-app events — integrates with SKAdNetwork (iOS) and Meta SDK.</li>
  <li><strong>Sales:</strong> website conversions, dynamic catalog or WhatsApp. Requires pixel or CAPI. Use for e-commerce and performance.</li>
</ul>
<strong>Rule:</strong> the objective defines the available optimization event — never run a Sales campaign without pixel or CAPI working.`,
            es: `<ul>
  <li><strong>Awareness:</strong> maximizar alcance y reconocimiento de marca — CPM optimizado para impresiones. Usar para lanzamientos.</li>
  <li><strong>Traffic:</strong> generar clics al sitio o app — optimiza para Link Clicks o Landing Page Views. Usar en top/medio de embudo.</li>
  <li><strong>Engagement:</strong> maximizar interacciones (likes, comentarios, compartidos, saves). Usar para contenido orgánico impulsado.</li>
  <li><strong>Leads:</strong> captar leads via Lead Forms nativos (sin salir de la app) o via sitio. Usar para B2B y formularios de registro.</li>
  <li><strong>App Promotion:</strong> installs y eventos in-app — integra con SKAdNetwork (iOS) y SDK de Meta.</li>
  <li><strong>Sales:</strong> conversiones en el sitio, catálogo dinámico o WhatsApp. Requiere pixel o CAPI. Usar para e-commerce y performance.</li>
</ul>
<strong>Regla:</strong> el objetivo define el evento de optimización disponible — nunca correr campaña de Sales sin pixel o CAPI funcionando.`,
          },
          tags: ['objectives', 'awareness', 'sales', 'leads', 'funnel'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'O que é o Meta Pixel e como ele se diferencia da Conversions API (CAPI)?',
            en: 'What is the Meta Pixel and how does it differ from the Conversions API (CAPI)?',
            es: '¿Qué es el Meta Pixel y cómo se diferencia de la Conversions API (CAPI)?',
          },
          a: {
            pt: `<strong>Meta Pixel:</strong> código JavaScript (client-side) no site. Coleta eventos do browser e envia para o Meta. Fácil de instalar, mas bloqueado por ad blockers e ITP (Safari).<br><br>
<strong>Conversions API (CAPI):</strong> integração server-side — o servidor do anunciante envia eventos diretamente para a API do Meta, sem depender do browser. Não é afetada por blockers ou ITP, mas requer desenvolvimento técnico.<br><br>
<strong>Melhor prática — implementação redundante:</strong> Pixel + CAPI simultaneamente com <em>Event Deduplication</em> via <code>event_id</code> para o Meta não contar o mesmo evento duas vezes.<br><br>
<strong>Por que importa pós-iOS 14.5:</strong> com o App Tracking Transparency, eventos de usuários iOS têm cobertura reduzida via pixel. CAPI recupera parte desse sinal.`,
            en: `<strong>Meta Pixel:</strong> JavaScript code (client-side) on the site. Collects browser events and sends them to Meta. Easy to install, but blocked by ad blockers and ITP (Safari).<br><br>
<strong>Conversions API (CAPI):</strong> server-side integration — the advertiser's server sends events directly to Meta's API, without relying on the browser. Not affected by blockers or ITP, but requires technical development.<br><br>
<strong>Best practice — redundant implementation:</strong> Pixel + CAPI simultaneously with <em>Event Deduplication</em> via <code>event_id</code> so Meta doesn't count the same event twice.<br><br>
<strong>Why it matters post-iOS 14.5:</strong> with App Tracking Transparency, iOS user events have reduced pixel coverage. CAPI recovers part of that signal.`,
            es: `<strong>Meta Pixel:</strong> código JavaScript (client-side) en el sitio. Recopila eventos del browser y los envía a Meta. Fácil de instalar, pero bloqueado por ad blockers e ITP (Safari).<br><br>
<strong>Conversions API (CAPI):</strong> integración server-side — el servidor del anunciante envía eventos directamente a la API de Meta, sin depender del browser. No es afectada por blockers ni ITP, pero requiere desarrollo técnico.<br><br>
<strong>Mejor práctica — implementación redundante:</strong> Pixel + CAPI simultáneamente con <em>Event Deduplication</em> via <code>event_id</code> para que Meta no cuente el mismo evento dos veces.<br><br>
<strong>Por qué importa post-iOS 14.5:</strong> con App Tracking Transparency, los eventos de usuarios iOS tienen cobertura reducida via pixel. CAPI recupera parte de esa señal.`,
          },
          tags: ['pixel', 'CAPI', 'server-side', 'iOS14', 'deduplication'],
        },
        {
          q: {
            pt: 'O que é Advantage+ Audience e como ela difere do targeting manual?',
            en: 'What is Advantage+ Audience and how does it differ from manual targeting?',
            es: '¿Qué es Advantage+ Audience y cómo difiere del targeting manual?',
          },
          a: {
            pt: `<strong>Targeting manual:</strong> o anunciante define explicitamente interesses, comportamentos, idade, gênero e geos. O algoritmo entrega apenas para esse público definido.<br><br>
<strong>Advantage+ Audience (antes: Broad Audience / ASC):</strong> o anunciante fornece sugestões (interesse, custom audience) mas o algoritmo do Meta tem liberdade para expandir além dessas sugestões se identificar oportunidade de conversão melhor.<br><br>
<strong>Quando usar Advantage+:</strong>
<ul>
  <li>Contas com histórico suficiente de conversão (mínimo ~50 eventos/semana)</li>
  <li>Objetivo Sales com pixel/CAPI funcionando</li>
  <li>Quando o targeting manual está saturando ou com CPAs altos</li>
</ul>
<strong>Quando manter manual:</strong> campanhas de nicho muito específico, conteúdo regulado (saúde, crédito, emprego) onde Meta restringe a expansão de audience.`,
            en: `<strong>Manual targeting:</strong> the advertiser explicitly defines interests, behaviors, age, gender and geos. The algorithm delivers only to that defined audience.<br><br>
<strong>Advantage+ Audience (formerly: Broad Audience / ASC):</strong> the advertiser provides suggestions (interest, custom audience) but Meta's algorithm has freedom to expand beyond those suggestions if it identifies a better conversion opportunity.<br><br>
<strong>When to use Advantage+:</strong>
<ul>
  <li>Accounts with sufficient conversion history (minimum ~50 events/week)</li>
  <li>Sales objective with pixel/CAPI working</li>
  <li>When manual targeting is saturating or CPAs are high</li>
</ul>
<strong>When to keep manual:</strong> very specific niche campaigns, regulated content (health, credit, employment) where Meta restricts audience expansion.`,
            es: `<strong>Targeting manual:</strong> el anunciante define explícitamente intereses, comportamientos, edad, género y geos. El algoritmo entrega solo a ese público definido.<br><br>
<strong>Advantage+ Audience (antes: Broad Audience / ASC):</strong> el anunciante proporciona sugerencias (interés, custom audience) pero el algoritmo de Meta tiene libertad para expandirse más allá de esas sugerencias si identifica mejor oportunidad de conversión.<br><br>
<strong>Cuándo usar Advantage+:</strong>
<ul>
  <li>Cuentas con historial suficiente de conversión (mínimo ~50 eventos/semana)</li>
  <li>Objetivo Sales con pixel/CAPI funcionando</li>
  <li>Cuando el targeting manual está saturando o los CPAs son altos</li>
</ul>
<strong>Cuándo mantener manual:</strong> campañas de nicho muy específico, contenido regulado (salud, crédito, empleo) donde Meta restringe la expansión de audience.`,
          },
          tags: ['Advantage+', 'targeting', 'broad-audience', 'automation'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como estruturar testes A/B no Meta de forma estatisticamente válida?',
            en: 'How to structure statistically valid A/B tests in Meta?',
            es: '¿Cómo estructurar tests A/B estadísticamente válidos en Meta?',
          },
          a: {
            pt: `<strong>Usar o recurso nativo de Experiment no Meta Ads Manager</strong> — ele garante audiences mutuamente exclusivas sem sobreposição, o que um teste manual entre Ad Sets não garante.<br><br>
<strong>Configuração:</strong>
<ol>
  <li>Em Ads Manager, clicar em <em>Experiments</em></li>
  <li>Escolher o tipo: A/B Test, Holdout Test ou Brand Survey</li>
  <li>Selecionar as campanhas/Ad Sets a comparar</li>
  <li>Definir a métrica primária (CPA, CPL, ROAS, etc.)</li>
  <li>O Meta calcula automaticamente o tamanho de amostra necessário</li>
</ol>
<strong>Regras para validade estatística:</strong>
<ul>
  <li>Testar <strong>uma variável por vez</strong> (criativo, audience, placement, objetivo)</li>
  <li>Budget mínimo suficiente para atingir pelo menos 100 eventos de conversão por variante</li>
  <li>Duração mínima recomendada: 7–14 dias (para capturar variações de dia da semana)</li>
  <li>Não interromper antes do Meta indicar significância estatística (&gt;95%)</li>
</ul>`,
            en: `<strong>Use the native Experiment feature in Meta Ads Manager</strong> — it guarantees mutually exclusive audiences without overlap, which a manual test between Ad Sets does not.<br><br>
<strong>Setup:</strong>
<ol>
  <li>In Ads Manager, click <em>Experiments</em></li>
  <li>Choose the type: A/B Test, Holdout Test or Brand Survey</li>
  <li>Select the campaigns/Ad Sets to compare</li>
  <li>Define the primary metric (CPA, CPL, ROAS, etc.)</li>
  <li>Meta automatically calculates the required sample size</li>
</ol>
<strong>Rules for statistical validity:</strong>
<ul>
  <li>Test <strong>one variable at a time</strong> (creative, audience, placement, objective)</li>
  <li>Minimum budget sufficient for at least 100 conversion events per variant</li>
  <li>Recommended minimum duration: 7–14 days (to capture day-of-week variation)</li>
  <li>Do not stop before Meta indicates statistical significance (&gt;95%)</li>
</ul>`,
            es: `<strong>Usar el recurso nativo de Experiment en Meta Ads Manager</strong> — garantiza audiences mutuamente exclusivas sin sobreposición, lo que un test manual entre Ad Sets no garantiza.<br><br>
<strong>Configuración:</strong>
<ol>
  <li>En Ads Manager, hacer clic en <em>Experiments</em></li>
  <li>Elegir el tipo: A/B Test, Holdout Test o Brand Survey</li>
  <li>Seleccionar las campañas/Ad Sets a comparar</li>
  <li>Definir la métrica primaria (CPA, CPL, ROAS, etc.)</li>
  <li>Meta calcula automáticamente el tamaño de muestra necesario</li>
</ol>
<strong>Reglas para validez estadística:</strong>
<ul>
  <li>Testear <strong>una variable por vez</strong> (creativo, audience, placement, objetivo)</li>
  <li>Budget mínimo suficiente para al menos 100 eventos de conversión por variante</li>
  <li>Duración mínima recomendada: 7–14 días (para capturar variaciones de día de semana)</li>
  <li>No interrumpir antes de que Meta indique significancia estadística (&gt;95%)</li>
</ul>`,
          },
          tags: ['A/B-test', 'experiment', 'statistical-significance', 'holdout'],
        },
      ],
    },
  ],
};

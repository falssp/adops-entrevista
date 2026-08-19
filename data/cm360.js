// Módulo CM360 — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['cm360'] = {
  icon: '📊',
  name: { pt: 'Campaign Manager 360', en: 'Campaign Manager 360', es: 'Campaign Manager 360' },
  desc: {
    pt: 'Ad server central do ecossistema Google — tracking, tráfego, relatórios e verificação.',
    en: "Google's central ad server — tracking, trafficking, reporting and verification.",
    es: 'El ad server central del ecosistema Google — tracking, tráfico, reportes y verificación.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'O que é o Campaign Manager 360 e qual é seu papel no ecossistema Google?',
            en: 'What is Campaign Manager 360 and what is its role in the Google ecosystem?',
            es: '¿Qué es Campaign Manager 360 y cuál es su rol en el ecosistema Google?',
          },
          a: {
            pt: `O CM360 é o <strong>ad server</strong> do Google Marketing Platform. Funciona como hub central que unifica tracking, tráfego de peças, relatórios e verificação de brand safety.<br><br>
<strong>Funções principais:</strong>
<ul>
  <li><strong>Ad Serving:</strong> entrega das peças criativas nos publishers</li>
  <li><strong>Tracking:</strong> mensuração de impressões, cliques e conversões via Floodlight</li>
  <li><strong>Attribution:</strong> atribuição de crédito em jornadas multiponto</li>
  <li><strong>Integração:</strong> alimenta DV360, SA360 e GA4</li>
</ul>
Ponto-chave: o CM360 é agnóstico a mídia — ele tracka inventário comprado via DV360, publishers diretos e outras DSPs.`,
            en: `CM360 is Google Marketing Platform's <strong>ad server</strong>. It acts as the central hub unifying tracking, creative trafficking, reporting, and brand safety verification.<br><br>
<strong>Key roles:</strong>
<ul>
  <li><strong>Ad Serving:</strong> creative delivery to publishers</li>
  <li><strong>Tracking:</strong> impression, click and conversion measurement via Floodlight</li>
  <li><strong>Attribution:</strong> multi-touch credit assignment</li>
  <li><strong>Integration:</strong> feeds DV360, SA360 and GA4</li>
</ul>
Key point: CM360 is media-agnostic — it tracks inventory bought via DV360, direct publishers, and other DSPs.`,
            es: `CM360 es el <strong>ad server</strong> de Google Marketing Platform. Actúa como hub central que unifica tracking, tráfico de piezas, reportes y verificación de brand safety.<br><br>
<strong>Roles principales:</strong>
<ul>
  <li><strong>Ad Serving:</strong> entrega de piezas creativas en los publishers</li>
  <li><strong>Tracking:</strong> medición de impresiones, clics y conversiones via Floodlight</li>
  <li><strong>Attribution:</strong> asignación de crédito en journeys multi-touch</li>
  <li><strong>Integración:</strong> alimenta DV360, SA360 y GA4</li>
</ul>
Punto clave: CM360 es agnóstico a medios — trackea inventario comprado via DV360, publishers directos y otras DSPs.`,
          },
          tags: ['ad-server', 'ecosystem', 'GMP'],
        },
        {
          q: {
            pt: 'Explique a hierarquia de uma conta no CM360: Advertiser → Campaign → Placement → Ad → Creative.',
            en: 'Explain the CM360 account hierarchy: Advertiser → Campaign → Placement → Ad → Creative.',
            es: 'Explica la jerarquía de cuenta en CM360: Advertiser → Campaign → Placement → Ad → Creative.',
          },
          a: {
            pt: `<ul>
  <li><strong>Advertiser:</strong> nível raiz — agrupa todas as campanhas de um cliente. Aqui ficam os Floodlight Activities e Audiences.</li>
  <li><strong>Campaign:</strong> envelope de datas (start/end). Agrupa os Placements.</li>
  <li><strong>Site / Placement:</strong> representa o espaço de inventário no publisher. Define formato e dimensões aceitas.</li>
  <li><strong>Ad:</strong> camada de regras — define quando e como a peça é exibida (scheduling, targeting, priority).</li>
  <li><strong>Creative:</strong> o arquivo em si — HTML5, VAST, imagem ou redirect tag. Um creative pode ser reutilizado em múltiplos Ads.</li>
</ul>
<strong>Relação Ad ↔ Creative:</strong> um Ad pode ter múltiplos Creatives com peso (rotation) ou regras de sequência.`,
            en: `<ul>
  <li><strong>Advertiser:</strong> root level — groups all campaigns for a client. Floodlight Activities and Audiences live here.</li>
  <li><strong>Campaign:</strong> date envelope (start/end). Groups Placements.</li>
  <li><strong>Site / Placement:</strong> represents the inventory space at the publisher. Defines accepted format and dimensions.</li>
  <li><strong>Ad:</strong> rules layer — defines when and how the creative shows (scheduling, targeting, priority).</li>
  <li><strong>Creative:</strong> the actual file — HTML5, VAST, image or redirect tag. A creative can be reused across multiple Ads.</li>
</ul>
<strong>Ad ↔ Creative relationship:</strong> one Ad can have multiple Creatives with weights (rotation) or sequencing rules.`,
            es: `<ul>
  <li><strong>Advertiser:</strong> nivel raíz — agrupa todas las campañas de un cliente. Aquí viven Floodlight Activities y Audiences.</li>
  <li><strong>Campaign:</strong> envoltorio de fechas (inicio/fin). Agrupa los Placements.</li>
  <li><strong>Site / Placement:</strong> representa el espacio de inventario en el publisher. Define formato y dimensiones aceptadas.</li>
  <li><strong>Ad:</strong> capa de reglas — define cuándo y cómo se muestra la pieza (scheduling, targeting, prioridad).</li>
  <li><strong>Creative:</strong> el archivo en sí — HTML5, VAST, imagen o redirect tag. Un creative puede reutilizarse en múltiples Ads.</li>
</ul>
<strong>Relación Ad ↔ Creative:</strong> un Ad puede tener múltiples Creatives con peso (rotation) o reglas de secuencia.`,
          },
          tags: ['hierarchy', 'structure', 'placement'],
        },
        {
          q: {
            pt: 'O que são tags de impressão e tags de clique? Como elas funcionam?',
            en: 'What are impression tags and click tags? How do they work?',
            es: '¿Qué son las tags de impresión y de clic? ¿Cómo funcionan?',
          },
          a: {
            pt: `<strong>Tag de Impressão:</strong> pixel 1x1 (imagem ou JS) disparado quando a peça é renderizada no browser. Registra que uma impressão ocorreu no CM360.<br><br>
<strong>Tag de Clique (Click Tracker):</strong> URL de redirect que passa pelo CM360 antes de levar o usuário ao destino final — assim o clique é registrado.<br><br>
Fluxo: <code>Usuário clica → CM360 click tracker → landing page do anunciante</code><br><br>
Diferença importante: o click tag fica dentro do criativo HTML5 ou no campo de destino do Ad. O impression tag pode ser servido independentemente pelo publisher para auditoria de terceiros.`,
            en: `<strong>Impression Tag:</strong> 1x1 pixel (image or JS) fired when the creative renders in the user's browser. Records the impression in CM360.<br><br>
<strong>Click Tag (Click Tracker):</strong> redirect URL that passes through CM360 before sending the user to the final destination — click is recorded.<br><br>
Flow: <code>User clicks → CM360 click tracker → advertiser landing page</code><br><br>
Key difference: the click tag lives inside the HTML5 creative or in the Ad's destination field. Impression tags can be served independently by the publisher for third-party auditing.`,
            es: `<strong>Tag de Impresión:</strong> pixel 1x1 (imagen o JS) disparado cuando la pieza se renderiza en el browser del usuario. Registra la impresión en CM360.<br><br>
<strong>Tag de Clic (Click Tracker):</strong> URL de redirect que pasa por CM360 antes de llevar al usuario al destino final — el clic queda registrado.<br><br>
Flujo: <code>Usuario hace clic → CM360 click tracker → landing page del anunciante</code><br><br>
Diferencia importante: el click tag vive dentro del creativo HTML5 o en el campo de destino del Ad. Los impression tags pueden ser servidos independientemente por el publisher para auditoría de terceros.`,
          },
          tags: ['impression-tag', 'click-tag', 'tracking'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'O que é o Floodlight? Qual a diferença entre Activity e Activity Group?',
            en: 'What is Floodlight? What is the difference between Activity and Activity Group?',
            es: '¿Qué es Floodlight? ¿Cuál es la diferencia entre Activity y Activity Group?',
          },
          a: {
            pt: `<strong>Floodlight</strong> é o sistema de tracking de conversões do CM360, instalado via tag JS ou iframe nas páginas de confirmação do anunciante.<br><br>
<strong>Activity Group:</strong> contêiner organizacional — agrupa Activities relacionadas. Define o parâmetro <code>cat=</code> nas tags geradas. Ex: grupo "Compras".<br><br>
<strong>Floodlight Activity:</strong> o evento específico a ser trackeado. Define <code>type=</code> (<em>counter</em> ou <em>sales</em>) e o <code>src=</code> do anunciante.<br><br>
<strong>Counter vs Sales:</strong>
<ul>
  <li><em>Counter:</em> conta eventos (visita à página de obrigado, download)</li>
  <li><em>Sales:</em> registra valor monetário e quantidade (e-commerce)</li>
</ul>
Janela de conversão configurável por Activity — padrão 30 dias pós-clique e 1 dia pós-impressão.`,
            en: `<strong>Floodlight</strong> is CM360's conversion tracking system, installed via JS tag or iframe on the advertiser's confirmation pages.<br><br>
<strong>Activity Group:</strong> organizational container — groups related Activities. Defines the <code>cat=</code> parameter in generated tags. E.g., "Purchases" group.<br><br>
<strong>Floodlight Activity:</strong> the specific event to track. Defines <code>type=</code> (<em>counter</em> or <em>sales</em>) and the advertiser's <code>src=</code>.<br><br>
<strong>Counter vs Sales:</strong>
<ul>
  <li><em>Counter:</em> counts events (thank-you page visit, download)</li>
  <li><em>Sales:</em> records monetary value and quantity (e-commerce)</li>
</ul>
Conversion window configurable per Activity — default 30 days post-click and 1 day post-impression.`,
            es: `<strong>Floodlight</strong> es el sistema de tracking de conversiones de CM360, instalado via tag JS o iframe en las páginas de confirmación del anunciante.<br><br>
<strong>Activity Group:</strong> contenedor organizacional — agrupa Activities relacionadas. Define el parámetro <code>cat=</code> en las tags generadas. Ej: grupo "Compras".<br><br>
<strong>Floodlight Activity:</strong> el evento específico a trackear. Define <code>type=</code> (<em>counter</em> o <em>sales</em>) y el <code>src=</code> del anunciante.<br><br>
<strong>Counter vs Sales:</strong>
<ul>
  <li><em>Counter:</em> cuenta eventos (visita a página de agradecimiento, descarga)</li>
  <li><em>Sales:</em> registra valor monetario y cantidad (e-commerce)</li>
</ul>
Ventana de conversión configurable por Activity — default 30 días post-clic y 1 día post-impresión.`,
          },
          tags: ['floodlight', 'conversion', 'counter', 'sales'],
        },
        {
          q: {
            pt: 'O que é discrepância entre ad servers? Quais as principais causas e como tratar?',
            en: 'What is ad server discrepancy? What are the main causes and how to handle it?',
            es: '¿Qué es la discrepancia entre ad servers? ¿Cuáles son las causas principales y cómo tratarla?',
          },
          a: {
            pt: `Discrepância é a diferença entre os números do ad server do comprador (CM360) e do vendedor (publisher). Tolerância aceitável: <strong>até 10–15%</strong>.<br><br>
<strong>Causas principais:</strong>
<ul>
  <li><strong>Latência:</strong> o impression do publisher dispara antes do pixel CM360 carregar</li>
  <li><strong>Ad Blockers:</strong> bloqueiam o pixel de terceiro</li>
  <li><strong>ITP/STP (Safari/Firefox):</strong> restrições de cookies de terceiros</li>
  <li><strong>Fuso horário:</strong> relatórios cortados em momentos diferentes</li>
  <li><strong>Bot traffic:</strong> filtrado pelo CM360 mas contado pelo publisher</li>
  <li><strong>Caching:</strong> publisher cacheia o tag e dispara múltiplos impressions</li>
</ul>
<strong>Tratamento:</strong> ao detectar &gt;10%, abrir investigação com o publisher com exportação de logs de ambos os lados.`,
            en: `Discrepancy is the difference between numbers from the buyer's ad server (CM360) and the seller's (publisher). Acceptable tolerance: <strong>up to 10–15%</strong>.<br><br>
<strong>Main causes:</strong>
<ul>
  <li><strong>Latency:</strong> publisher impression fires before CM360 pixel loads</li>
  <li><strong>Ad Blockers:</strong> block the third-party pixel</li>
  <li><strong>ITP/STP (Safari/Firefox):</strong> third-party cookie restrictions</li>
  <li><strong>Timezone:</strong> reports cut at different moments</li>
  <li><strong>Bot traffic:</strong> filtered by CM360 but counted by publisher</li>
  <li><strong>Caching:</strong> publisher caches the tag and fires multiple impressions</li>
</ul>
<strong>Handling:</strong> when &gt;10% detected, open investigation with publisher including log exports from both sides.`,
            es: `La discrepancia es la diferencia entre los números del ad server del comprador (CM360) y del vendedor (publisher). Tolerancia aceptable: <strong>hasta 10–15%</strong>.<br><br>
<strong>Causas principales:</strong>
<ul>
  <li><strong>Latencia:</strong> la impresión del publisher dispara antes de que cargue el pixel de CM360</li>
  <li><strong>Ad Blockers:</strong> bloquean el pixel de terceros</li>
  <li><strong>ITP/STP (Safari/Firefox):</strong> restricciones de cookies de terceros</li>
  <li><strong>Zona horaria:</strong> reportes cortados en momentos distintos</li>
  <li><strong>Bot traffic:</strong> filtrado por CM360 pero contado por el publisher</li>
  <li><strong>Caching:</strong> el publisher cachea el tag y dispara múltiples impresiones</li>
</ul>
<strong>Tratamiento:</strong> al detectar &gt;10%, abrir investigación con el publisher con exportación de logs de ambos lados.`,
          },
          tags: ['discrepancy', 'ITP', 'ad-blockers', 'bot-traffic'],
        },
        {
          q: {
            pt: 'Como funciona o modelo de atribuição do CM360? Quais modelos estão disponíveis?',
            en: 'How does CM360 attribution work? What models are available?',
            es: '¿Cómo funciona la atribución en CM360? ¿Qué modelos están disponibles?',
          },
          a: {
            pt: `O CM360 usa por padrão o modelo <strong>Last Touch</strong> — toda a conversão é atribuída ao último touchpoint antes da conversão.<br><br>
<strong>Modelos disponíveis:</strong>
<ul>
  <li><strong>Last Interaction:</strong> 100% ao último clique ou impressão</li>
  <li><strong>First Interaction:</strong> 100% ao primeiro touchpoint</li>
  <li><strong>Linear:</strong> crédito igual entre todos os touchpoints</li>
  <li><strong>Time Decay:</strong> mais crédito para touchpoints mais próximos da conversão</li>
  <li><strong>Position Based:</strong> 40% ao primeiro, 40% ao último, 20% distribuído</li>
  <li><strong>Data-Driven (DDA):</strong> modelo de ML usando dados reais da conta</li>
</ul>
Regra de prioridade: clique sempre tem prioridade sobre impressão dentro da janela.`,
            en: `CM360 defaults to <strong>Last Touch</strong> — all conversion credit goes to the last touchpoint before conversion.<br><br>
<strong>Available models:</strong>
<ul>
  <li><strong>Last Interaction:</strong> 100% to the last click or impression</li>
  <li><strong>First Interaction:</strong> 100% to the first touchpoint</li>
  <li><strong>Linear:</strong> equal credit across all touchpoints</li>
  <li><strong>Time Decay:</strong> more credit to touchpoints closer to conversion</li>
  <li><strong>Position Based:</strong> 40% to first, 40% to last, 20% distributed</li>
  <li><strong>Data-Driven (DDA):</strong> ML-based model using real account data</li>
</ul>
Priority rule: clicks always take priority over impressions within the attribution window.`,
            es: `CM360 usa por defecto el modelo <strong>Last Touch</strong> — todo el crédito de conversión va al último touchpoint antes de la conversión.<br><br>
<strong>Modelos disponibles:</strong>
<ul>
  <li><strong>Last Interaction:</strong> 100% al último clic o impresión</li>
  <li><strong>First Interaction:</strong> 100% al primer touchpoint</li>
  <li><strong>Linear:</strong> crédito igual entre todos los touchpoints</li>
  <li><strong>Time Decay:</strong> más crédito a touchpoints más cercanos a la conversión</li>
  <li><strong>Position Based:</strong> 40% al primero, 40% al último, 20% distribuido</li>
  <li><strong>Data-Driven (DDA):</strong> modelo ML usando datos reales de la cuenta</li>
</ul>
Regla de prioridad: los clics siempre tienen prioridad sobre las impresiones dentro de la ventana.`,
          },
          tags: ['attribution', 'last-touch', 'DDA', 'multi-touch'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como configurar Audience Lists no CM360 para remarketing e integrá-las ao DV360?',
            en: 'How to set up Audience Lists in CM360 for remarketing and integrate them with DV360?',
            es: '¿Cómo configurar Audience Lists en CM360 para remarketing e integrarlas con DV360?',
          },
          a: {
            pt: `<strong>Passo a passo:</strong>
<ol>
  <li>Criar Floodlight Activity com <code>type=counter</code> na página desejada (ex: página de produto)</li>
  <li>Em <em>Advertiser → Audience Lists</em>, criar nova lista baseada nessa Activity</li>
  <li>Definir membership duration (padrão: 30 dias)</li>
  <li>Compartilhar a lista com DV360 via <em>Linked Accounts</em></li>
  <li>No DV360, usar a lista em Line Items com bid multiplier ou exclusão</li>
</ol>
<strong>Tipos de lista:</strong>
<ul>
  <li><em>Floodlight-based:</em> quem visitou página X ou converteu</li>
  <li><em>Lookalike:</em> similar ao público da lista base (mínimo ~1000 cookies)</li>
  <li><em>CRM-based:</em> upload de hashed emails via Customer Match</li>
</ul>
<strong>Limitação pós-iOS 14.5+:</strong> listas baseadas em Floodlight têm cobertura reduzida em Safari/Firefox. Alternativa: server-side tagging via GTM.`,
            en: `<strong>Step by step:</strong>
<ol>
  <li>Create Floodlight Activity with <code>type=counter</code> on the desired page (e.g., product page)</li>
  <li>In <em>Advertiser → Audience Lists</em>, create a new list based on that Activity</li>
  <li>Set membership duration (default: 30 days)</li>
  <li>Share the list with DV360 via <em>Linked Accounts</em></li>
  <li>In DV360, use the list in Line Items with bid multiplier or exclusion</li>
</ol>
<strong>List types:</strong>
<ul>
  <li><em>Floodlight-based:</em> who visited page X or converted</li>
  <li><em>Lookalike:</em> similar to base list audience (min ~1000 cookies)</li>
  <li><em>CRM-based:</em> hashed email upload via Customer Match</li>
</ul>
<strong>Post-iOS 14.5+ limitation:</strong> Floodlight-based lists have reduced coverage on Safari/Firefox. Alternative: server-side tagging via GTM.`,
            es: `<strong>Paso a paso:</strong>
<ol>
  <li>Crear Floodlight Activity con <code>type=counter</code> en la página deseada (ej: página de producto)</li>
  <li>En <em>Advertiser → Audience Lists</em>, crear nueva lista basada en esa Activity</li>
  <li>Definir membership duration (default: 30 días)</li>
  <li>Compartir la lista con DV360 via <em>Linked Accounts</em></li>
  <li>En DV360, usar la lista en Line Items con bid multiplier o exclusión</li>
</ol>
<strong>Tipos de lista:</strong>
<ul>
  <li><em>Floodlight-based:</em> quién visitó la página X o convirtió</li>
  <li><em>Lookalike:</em> similar al público de la lista base (mínimo ~1000 cookies)</li>
  <li><em>CRM-based:</em> upload de emails hasheados via Customer Match</li>
</ul>
<strong>Limitación post-iOS 14.5+:</strong> listas basadas en Floodlight tienen cobertura reducida en Safari/Firefox. Alternativa: server-side tagging via GTM.`,
          },
          tags: ['remarketing', 'audience-lists', 'customer-match', 'ITP'],
        },
        {
          q: {
            pt: 'Como usar a API do CM360 para automação de relatórios?',
            en: 'How to use the CM360 API to automate reports?',
            es: '¿Cómo usar la API de CM360 para automatizar reportes?',
          },
          a: {
            pt: `A CM360 Report API permite criar, rodar e baixar relatórios via HTTP.<br><br>
<strong>Fluxo:</strong>
<ol>
  <li>Autenticação via OAuth 2.0 (Service Account para automação)</li>
  <li><code>POST /reports</code> — criar a definição do relatório (dimensões, métricas, filtros)</li>
  <li><code>POST /reports/{reportId}/run</code> — disparar a execução</li>
  <li>Polling em <code>GET /reports/{reportId}/files/{fileId}</code> até <code>REPORT_AVAILABLE</code></li>
  <li>Download via URL retornada</li>
</ol>
<strong>Casos de uso:</strong>
<ul>
  <li>Dashboard diário automático com dados de impressão/clique/conversão</li>
  <li>Alertas de pacing por e-mail via Apps Script</li>
  <li>Alimentação de BigQuery para análise histórica</li>
</ul>
Alternativa sem código: Looker Studio com conector nativo do CM360.`,
            en: `The CM360 Report API lets you create, run, and download reports via HTTP.<br><br>
<strong>Flow:</strong>
<ol>
  <li>Authentication via OAuth 2.0 (Service Account for automation)</li>
  <li><code>POST /reports</code> — create the report definition (dimensions, metrics, filters)</li>
  <li><code>POST /reports/{reportId}/run</code> — trigger execution</li>
  <li>Poll at <code>GET /reports/{reportId}/files/{fileId}</code> until <code>REPORT_AVAILABLE</code></li>
  <li>Download via returned URL</li>
</ol>
<strong>Use cases:</strong>
<ul>
  <li>Automated daily dashboard with impression/click/conversion data</li>
  <li>Pacing alerts via email using Apps Script</li>
  <li>BigQuery feed for historical analysis</li>
</ul>
No-code alternative: Looker Studio with native CM360 connector.`,
            es: `La CM360 Report API permite crear, ejecutar y descargar reportes via HTTP.<br><br>
<strong>Flujo:</strong>
<ol>
  <li>Autenticación via OAuth 2.0 (Service Account para automatización)</li>
  <li><code>POST /reports</code> — crear la definición del reporte (dimensiones, métricas, filtros)</li>
  <li><code>POST /reports/{reportId}/run</code> — disparar la ejecución</li>
  <li>Polling en <code>GET /reports/{reportId}/files/{fileId}</code> hasta <code>REPORT_AVAILABLE</code></li>
  <li>Descarga via URL retornada</li>
</ol>
<strong>Casos de uso:</strong>
<ul>
  <li>Dashboard diario automático con datos de impresión/clic/conversión</li>
  <li>Alertas de pacing por email via Apps Script</li>
  <li>Feed a BigQuery para análisis histórico</li>
</ul>
Alternativa sin código: Looker Studio con conector nativo de CM360.`,
          },
          tags: ['API', 'automation', 'BigQuery', 'OAuth'],
        },
      ],
    },
  ],
};

// ── APPEND: CM360 expandido ──
;(function(){
const d = window.__adopsData['cm360'];
d.tiers[0].questions.push(
  {
    q:{pt:'O que são as tags INS, IFRAME e JavaScript do CM360 e quando usar cada uma?',en:'What are CM360 INS, IFRAME and JavaScript tags and when to use each?',es:'¿Qué son las tags INS, IFRAME y JavaScript de CM360 y cuándo usar cada una?'},
    a:{
      pt:`O CM360 gera diferentes formatos de tag de impressão para diferentes contextos de uso.<br><br>
<strong>Tag INS (padrão moderno — recomendada):</strong>
<ul>
  <li>Elemento HTML <code>&lt;ins&gt;</code> — sintaxe mais limpa</li>
  <li>Carrega de forma assíncrona — não bloqueia o carregamento da página</li>
  <li>Suporta rich media, video e display</li>
  <li>Compatível com HTTPS</li>
  <li><strong>Use quando:</strong> implementação moderna em sites/apps com suporte a HTML5. É o padrão atual do mercado.</li>
</ul>
<strong>Tag IFRAME:</strong>
<ul>
  <li>Usa elemento <code>&lt;iframe&gt;</code> para carregar o anúncio em sandbox isolado</li>
  <li>Compatibilidade máxima com sistemas legados de ad serving de publishers antigos</li>
  <li>Mais seguro do ponto de vista de isolamento (o criativo não acessa o DOM da página)</li>
  <li><strong>Use quando:</strong> publisher exige IFRAME ou o sistema deles não suporta INS</li>
</ul>
<strong>Tag JavaScript:</strong>
<ul>
  <li>Script que escreve o anúncio dinamicamente na página</li>
  <li>Pode ser síncrono (bloqueia carregamento — evitar) ou assíncrono</li>
  <li><strong>Use quando:</strong> publisher aceita apenas JavaScript ou é necessário para funcionalidades específicas de rich media</li>
</ul>
<strong>Tag de clique apenas (Click Tracker):</strong>
<ul>
  <li>Não serve criativo — só registra o clique e redireciona para a URL de destino</li>
  <li><strong>Use quando:</strong> o publisher serve o criativo, mas o anunciante quer rastrear os cliques de forma independente</li>
</ul>
<strong>Escolha prática:</strong> quase sempre usar INS. Mudar para IFRAME apenas quando solicitado pelo publisher. Evitar JavaScript síncrono.`,
      en:`CM360 generates different impression tag formats for different usage contexts.<br><br>
<strong>INS tag (modern standard — recommended):</strong>
<ul>
  <li>HTML <code>&lt;ins&gt;</code> element — cleaner syntax</li>
  <li>Loads asynchronously — doesn't block page loading</li>
  <li>Supports rich media, video and display</li>
  <li><strong>Use when:</strong> modern implementation on sites/apps with HTML5 support. Current market standard.</li>
</ul>
<strong>IFRAME tag:</strong>
<ul>
  <li>Uses <code>&lt;iframe&gt;</code> element to load ad in isolated sandbox</li>
  <li>Maximum compatibility with legacy ad serving systems</li>
  <li><strong>Use when:</strong> publisher requires IFRAME or their system doesn't support INS</li>
</ul>
<strong>JavaScript tag:</strong>
<ul>
  <li>Script that dynamically writes the ad on the page</li>
  <li><strong>Use when:</strong> publisher accepts only JavaScript or specific rich media functionality is needed</li>
</ul>
<strong>Click-only tag (Click Tracker):</strong>
<ul>
  <li>Doesn't serve creative — only records click and redirects to destination URL</li>
  <li><strong>Use when:</strong> publisher serves the creative, but advertiser wants to track clicks independently</li>
</ul>`,
      es:`CM360 genera diferentes formatos de tag de impresión para diferentes contextos de uso.<br><br>
<strong>Tag INS (estándar moderno — recomendada):</strong>
<ul>
  <li>Elemento HTML <code>&lt;ins&gt;</code> — sintaxis más limpia</li>
  <li>Carga de forma asíncrona — no bloquea la carga de la página</li>
  <li><strong>Usar cuando:</strong> implementación moderna en sitios/apps con soporte HTML5. Estándar actual del mercado.</li>
</ul>
<strong>Tag IFRAME:</strong>
<ul>
  <li>Compatibilidad máxima con sistemas legacy de ad serving</li>
  <li><strong>Usar cuando:</strong> el publisher exige IFRAME o su sistema no soporta INS</li>
</ul>
<strong>Tag JavaScript:</strong>
<ul>
  <li><strong>Usar cuando:</strong> el publisher acepta solo JavaScript o se necesitan funcionalidades específicas</li>
</ul>
<strong>Tag de solo clic (Click Tracker):</strong>
<ul>
  <li>No sirve creativo — solo registra el clic y redirige a la URL de destino</li>
  <li><strong>Usar cuando:</strong> el publisher sirve el creativo, pero el anunciante quiere rastrear los clics de forma independiente</li>
</ul>`,
    },
    tags:['CM360','tag','INS','IFRAME','JavaScript','Click-Tracker','ad-serving'],
  },
  {
    q:{pt:'Como usar o Report Builder do CM360 para criar relatórios customizados?',en:'How to use CM360 Report Builder to create custom reports?',es:'¿Cómo usar el Report Builder de CM360 para crear informes personalizados?'},
    a:{
      pt:`O <strong>Report Builder</strong> do CM360 é a ferramenta de relatórios avançada que permite criar extrações customizadas com qualquer combinação de dimensões e métricas disponíveis na conta.<br><br>
<strong>Tipos de relatório no CM360:</strong>
<ul>
  <li><strong>Standard:</strong> relatório pré-configurado com dimensões e métricas padrão (campanha, placement, criativo). Acesso rápido mas limitado em customização.</li>
  <li><strong>Cross-Dimension Reach:</strong> análise de alcance único entre dimensões — quantas pessoas únicas foram atingidas por diferentes campanhas ou canais</li>
  <li><strong>Floodlight:</strong> relatório de conversões específico — ver quais Floodlight Activities dispararam, por campanha, por data</li>
  <li><strong>Path to Conversion:</strong> jornada completa do usuário — todos os touchpoints antes da conversão (impressões e cliques)</li>
</ul>
<strong>Como criar um relatório customizado:</strong>
<ol>
  <li>No CM360, vá em <strong>Reports → New Report → Report Builder</strong></li>
  <li>Defina o <strong>Report Type</strong> (Standard é o mais comum)</li>
  <li>Selecione <strong>Dimensions</strong> (o que você quer nas linhas): Date, Campaign, Placement, Ad, Creative, Site, Country, Device, etc.</li>
  <li>Selecione <strong>Metrics</strong> (colunas numéricas): Impressions, Clicks, CTR, Conversions (Floodlights específicos), Cost (se integrado com DV360/Google Ads)</li>
  <li>Defina o <strong>período</strong> e o <strong>filtro</strong> (por advertiser, campaign, placement específico)</li>
  <li>Salve e <strong>Schedule</strong>: envio automático por email (diário, semanal, mensal) em formato CSV ou Excel</li>
</ol>
<strong>Dimensões mais usadas em AdOps:</strong>
<ul>
  <li>Date + Campaign + Placement: visão de entrega por veículo por dia</li>
  <li>Date + Creative + Ad: análise de performance criativa</li>
  <li>Country + Device + OS: análise de audiência técnica</li>
  <li>Placement + Site: identificar quais sites dentro de uma campanha programática performam melhor</li>
</ul>
<strong>Integração com Looker Studio:</strong> conectar o CM360 como fonte de dados no Looker Studio para dashboards atualizados automaticamente.`,
      en:`The CM360 <strong>Report Builder</strong> is the advanced reporting tool that allows creating custom extractions with any combination of available dimensions and metrics.<br><br>
<strong>CM360 report types:</strong>
<ul>
  <li><strong>Standard:</strong> pre-configured report with default dimensions and metrics</li>
  <li><strong>Cross-Dimension Reach:</strong> unique reach analysis between dimensions</li>
  <li><strong>Floodlight:</strong> conversion-specific report</li>
  <li><strong>Path to Conversion:</strong> complete user journey — all touchpoints before conversion</li>
</ul>
<strong>How to create a custom report:</strong>
<ol>
  <li>In CM360, go to <strong>Reports → New Report → Report Builder</strong></li>
  <li>Define Report Type (Standard most common)</li>
  <li>Select Dimensions: Date, Campaign, Placement, Ad, Creative, Site, Country, Device, etc.</li>
  <li>Select Metrics: Impressions, Clicks, CTR, Conversions (specific Floodlights), Cost</li>
  <li>Define period and filter</li>
  <li>Save and Schedule: automatic email delivery (daily, weekly, monthly) in CSV or Excel format</li>
</ol>`,
      es:`El <strong>Report Builder</strong> de CM360 es la herramienta de informes avanzada que permite crear extracciones personalizadas con cualquier combinación de dimensiones y métricas disponibles.<br><br>
<strong>Tipos de informe en CM360:</strong>
<ul>
  <li><strong>Standard, Cross-Dimension Reach, Floodlight, Path to Conversion</strong></li>
</ul>
<strong>Cómo crear un informe personalizado:</strong>
<ol>
  <li>En CM360, ve a <strong>Reports → New Report → Report Builder</strong></li>
  <li>Define el Report Type</li>
  <li>Selecciona Dimensiones: Date, Campaign, Placement, Ad, Creative, Site, Country, Device</li>
  <li>Selecciona Métricas: Impressions, Clicks, CTR, Conversions, Cost</li>
  <li>Define período y filtro</li>
  <li>Guarda y programa (Schedule): envío automático por email en CSV o Excel</li>
</ol>`,
    },
    tags:['CM360','Report-Builder','relatório','Floodlight','Path-to-Conversion','Looker-Studio','schedule'],
  },
  {
    q:{pt:'O que é o Verification no CM360 e como monitorar viewability e brand safety?',en:'What is Verification in CM360 and how to monitor viewability and brand safety?',es:'¿Qué es Verification en CM360 y cómo monitorear viewability y brand safety?'},
    a:{
      pt:`O <strong>Verification</strong> (Active View + verificação de brand safety) é uma funcionalidade nativa do CM360 que mede viewability e monitora o contexto de publicação dos anúncios.<br><br>
<strong>Active View (Viewability):</strong>
<ul>
  <li>Padrão MRC integrado nativo: mede se o anúncio cumpriu o critério de 50% pixels visíveis por ≥1 segundo (display) ou ≥2 segundos (video)</li>
  <li>Métricas disponíveis nos relatórios: Active View Viewable Impressions, Active View % Viewable, Average Viewable Time</li>
  <li>Filtrar campanhas por viewability mínima: no DV360, configurar target de viewability no Line Item — o algoritmo prioriza impressões com maior probabilidade de atingir o threshold</li>
</ul>
<strong>Brand Safety no CM360:</strong>
<ul>
  <li>Site categorization: relatório de Site por categoria de conteúdo — identificar se anúncios apareceram em conteúdo inadequado</li>
  <li>Blocklists: adicionar domínios específicos para exclusão no CM360 Advertiser → Blocked Sites</li>
  <li>Integração com DoubleVerify / IAS: adicionar as tags de verificação de terceiros para monitoramento mais granular de IVT e brand safety além do nativo</li>
</ul>
<strong>Pre-bid vs. Post-bid verification:</strong>
<ul>
  <li><strong>Post-bid (CM360 nativo):</strong> mede após a impressão ser servida — você sabe quantas foram viewable, mas já gastou no inventário problemático</li>
  <li><strong>Pre-bid (DoubleVerify/IAS no DV360):</strong> filtra antes de licitar — o DSP só dá lance em impressões que o verificador prevê como viewable e brand-safe. Custo mais alto por impressão, mas qualidade garantida.</li>
</ul>
<strong>Relatório de Verification no CM360:</strong>
<ul>
  <li>Reports → Standard → adicionar dimensões de Verification e métricas de Active View</li>
  <li>Filtrar por campanha para ver: % viewable, % com IVT suspeito, distribuição por publisher</li>
</ul>`,
      en:`<strong>Verification</strong> (Active View + brand safety verification) is a native CM360 feature measuring viewability and monitoring ad publication context.<br><br>
<strong>Active View (Viewability):</strong>
<ul>
  <li>Integrated native MRC standard: measures if ad met 50% pixels visible for ≥1 second (display) or ≥2 seconds (video) criterion</li>
  <li>Available metrics: Active View Viewable Impressions, Active View % Viewable, Average Viewable Time</li>
</ul>
<strong>Brand Safety in CM360:</strong>
<ul>
  <li>Site categorization: site report by content category — identify if ads appeared in inappropriate content</li>
  <li>Blocklists: add specific domains for exclusion in CM360 Advertiser → Blocked Sites</li>
  <li>DoubleVerify / IAS integration: add third-party verification tags for more granular IVT and brand safety monitoring</li>
</ul>
<strong>Pre-bid vs. Post-bid verification:</strong>
<ul>
  <li><strong>Post-bid (native CM360):</strong> measures after impression is served — you know how many were viewable, but already spent on problematic inventory</li>
  <li><strong>Pre-bid (DoubleVerify/IAS in DV360):</strong> filters before bidding — DSP only bids on impressions predictor classifies as viewable and brand-safe</li>
</ul>`,
      es:`<strong>Verification</strong> (Active View + verificación de brand safety) es una funcionalidad nativa de CM360 que mide viewability y monitorea el contexto de publicación de los anuncios.<br><br>
<strong>Active View (Viewability):</strong>
<ul>
  <li>Estándar MRC integrado nativo: mide si el anuncio cumplió el criterio de 50% píxeles visibles por ≥1 segundo (display) o ≥2 segundos (video)</li>
  <li>Métricas disponibles: Active View Viewable Impressions, Active View % Viewable, Average Viewable Time</li>
</ul>
<strong>Brand Safety en CM360:</strong>
<ul>
  <li>Categorización de sitios: informe por categoría de contenido</li>
  <li>Blocklists: agregar dominios para exclusión en CM360 Advertiser → Blocked Sites</li>
  <li>Integración con DoubleVerify / IAS para monitoreo más granular</li>
</ul>
<strong>Pre-bid vs. Post-bid:</strong>
<ul>
  <li><strong>Post-bid (CM360 nativo):</strong> mide tras servir la impresión</li>
  <li><strong>Pre-bid (DoubleVerify/IAS en DV360):</strong> filtra antes de pujar — mayor calidad garantizada</li>
</ul>`,
    },
    tags:['CM360','Active-View','viewability','brand-safety','DoubleVerify','IAS','pre-bid','blocklist'],
  }
);
d.tiers[2].questions.push(
  {
    q:{pt:'Como usar o Dynamic Targeting e Audience Lists no CM360 para campanhas avançadas?',en:'How to use Dynamic Targeting and Audience Lists in CM360 for advanced campaigns?',es:'¿Cómo usar Dynamic Targeting y Audience Lists en CM360 para campañas avanzadas?'},
    a:{
      pt:`O CM360 permite criar <strong>Audience Lists</strong> (listas de remarketing) baseadas em ações Floodlight e usar <strong>Dynamic Targeting</strong> para segmentar criativos dinamicamente por audiência.<br><br>
<strong>Audience Lists no CM360:</strong>
<ol>
  <li>Dentro do Advertiser → <strong>Audience Lists → New</strong></li>
  <li>Definir:
    <ul>
      <li><strong>Nome:</strong> ex. "Visitantes - Página de Produto - 30 dias"</li>
      <li><strong>Membership duration:</strong> quantos dias o usuário fica na lista (1-540 dias)</li>
      <li><strong>Rules:</strong> qual Floodlight Activity dispara a entrada na lista (ex: "quem disparou o Floodlight de Product View mas NÃO disparou o de Purchase")</li>
    </ul>
  </li>
  <li>A lista é populada automaticamente conforme usuários disparam o Floodlight definido</li>
  <li>Usar a lista no DV360 como segmentação de audiência no Line Item</li>
</ol>
<strong>Lógica booleana em Audience Lists:</strong>
<ul>
  <li><code>AND:</code> usuário deve ter disparado Floodlight A E Floodlight B</li>
  <li><code>OR:</code> usuário disparou Floodlight A OU Floodlight B</li>
  <li><code>NOT:</code> excluir usuários que dispararam Floodlight C (ex: compradores)</li>
  <li>Exemplo complexo: (Visitou produto A OU produto B) E NÃO (comprou nos últimos 7 dias) = remarketing perfeito de abandono</li>
</ul>
<strong>Dynamic Targeting (Segmentação Dinâmica):</strong>
<ul>
  <li>Permite servir criativos diferentes para audiências diferentes dentro do mesmo placement/ad</li>
  <li>Configurar no Ad: adicionar múltiplos criativos com condições de exibição por audiência</li>
  <li>Ex: visitante que viu calçados → criativo de calçado específico; visitante que viu roupas → criativo de roupa</li>
  <li>Requer que as Audience Lists estejam ativas e com volume suficiente (&gt;100 usuários)</li>
</ul>
<strong>Compartilhar Audience Lists com o DV360:</strong>
<ul>
  <li>Automático quando CM360 e DV360 estão linkados</li>
  <li>No DV360 Line Item → Audiences → First-party audiences → selecionar a lista do CM360</li>
</ul>`,
      en:`CM360 allows creating <strong>Audience Lists</strong> (remarketing lists) based on Floodlight actions and using <strong>Dynamic Targeting</strong> to dynamically segment creatives by audience.<br><br>
<strong>Audience Lists in CM360:</strong>
<ol>
  <li>Inside Advertiser → <strong>Audience Lists → New</strong></li>
  <li>Define: Name, Membership duration (1-540 days), Rules (which Floodlight Activity triggers list entry)</li>
  <li>List is automatically populated as users trigger the defined Floodlight</li>
  <li>Use list in DV360 as audience targeting in Line Item</li>
</ol>
<strong>Boolean logic in Audience Lists:</strong>
<ul>
  <li><code>AND, OR, NOT</code> — complex combinations: (Visited product A OR product B) AND NOT (purchased in last 7 days) = perfect abandonment remarketing</li>
</ul>
<strong>Dynamic Targeting:</strong>
<ul>
  <li>Serve different creatives to different audiences within the same placement/ad</li>
  <li>E.g.: visitor who saw footwear → footwear-specific creative; visitor who saw clothing → clothing creative</li>
</ul>`,
      es:`CM360 permite crear <strong>Audience Lists</strong> (listas de remarketing) basadas en acciones Floodlight y usar <strong>Dynamic Targeting</strong> para segmentar creativos dinámicamente por audiencia.<br><br>
<strong>Audience Lists en CM360:</strong>
<ol>
  <li>Dentro del Advertiser → <strong>Audience Lists → New</strong></li>
  <li>Definir: Nombre, Membership duration (1-540 días), Rules (qué Floodlight Activity activa la entrada en la lista)</li>
  <li>La lista se popula automáticamente cuando los usuarios activan el Floodlight definido</li>
  <li>Usar la lista en DV360 como segmentación de audiencia en el Line Item</li>
</ol>
<strong>Lógica booleana en Audience Lists:</strong>
<ul>
  <li><code>AND, OR, NOT</code> — (Visitó producto A O producto B) Y NO (compró en los últimos 7 días) = remarketing perfecto de abandono</li>
</ul>
<strong>Dynamic Targeting:</strong>
<ul>
  <li>Sirve creativos diferentes a audiencias diferentes dentro del mismo placement/ad</li>
</ul>`,
    },
    tags:['CM360','Audience-Lists','Dynamic-Targeting','Floodlight','remarketing','DV360','booleano'],
  }
);
})();

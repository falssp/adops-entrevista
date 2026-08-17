// Módulo DV360 — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['dv360'] = {
  icon: '🎯',
  name: { pt: 'Display & Video 360', en: 'Display & Video 360', es: 'Display & Video 360' },
  desc: {
    pt: 'DSP do Google Marketing Platform — compra programática de display, vídeo, áudio, nativo e CTV.',
    en: 'Google Marketing Platform DSP — programmatic buying of display, video, audio, native and CTV.',
    es: 'DSP de Google Marketing Platform — compra programática de display, video, audio, nativo y CTV.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'O que é o DV360 e como ele se diferencia do Google Ads?',
            en: 'What is DV360 and how does it differ from Google Ads?',
            es: '¿Qué es DV360 y cómo se diferencia de Google Ads?',
          },
          a: {
            pt: `O DV360 (Display & Video 360) é a <strong>DSP (Demand-Side Platform)</strong> do Google Marketing Platform, focada em compra programática premium.<br><br>
<strong>Diferenças principais vs Google Ads:</strong>
<ul>
  <li><strong>Inventário:</strong> DV360 acessa open auction, PMP, PD e programmatic guaranteed em múltiplos SSPs (além do Google). Google Ads é majoritariamente GDN.</li>
  <li><strong>Público-alvo:</strong> DV360 é para agências e anunciantes com budgets maiores e equipes especializadas.</li>
  <li><strong>Controle:</strong> DV360 oferece brand controls, frequency cap cross-publisher, e integração nativa com CM360 e GA4.</li>
  <li><strong>Canais:</strong> DV360 cobre display, vídeo, áudio, nativo e CTV/OTT. Google Ads foca em search, shopping e GDN.</li>
</ul>
<strong>Resumo:</strong> Google Ads = self-serve massa. DV360 = programático premium com controle total.`,
            en: `DV360 (Display & Video 360) is Google Marketing Platform's <strong>DSP (Demand-Side Platform)</strong>, focused on premium programmatic buying.<br><br>
<strong>Key differences vs Google Ads:</strong>
<ul>
  <li><strong>Inventory:</strong> DV360 accesses open auction, PMP, PD and programmatic guaranteed across multiple SSPs (beyond Google). Google Ads is mostly GDN.</li>
  <li><strong>Audience:</strong> DV360 targets agencies and advertisers with larger budgets and specialized teams.</li>
  <li><strong>Control:</strong> DV360 offers brand controls, cross-publisher frequency caps, and native integration with CM360 and GA4.</li>
  <li><strong>Channels:</strong> DV360 covers display, video, audio, native and CTV/OTT. Google Ads focuses on search, shopping and GDN.</li>
</ul>
<strong>Summary:</strong> Google Ads = mass self-serve. DV360 = premium programmatic with full control.`,
            es: `DV360 (Display & Video 360) es el <strong>DSP (Demand-Side Platform)</strong> de Google Marketing Platform, orientado a la compra programática premium.<br><br>
<strong>Diferencias clave vs Google Ads:</strong>
<ul>
  <li><strong>Inventario:</strong> DV360 accede a open auction, PMP, PD y programmatic guaranteed en múltiples SSPs (más allá de Google). Google Ads es mayormente GDN.</li>
  <li><strong>Público:</strong> DV360 es para agencias y anunciantes con presupuestos mayores y equipos especializados.</li>
  <li><strong>Control:</strong> DV360 ofrece brand controls, frequency cap cross-publisher e integración nativa con CM360 y GA4.</li>
  <li><strong>Canales:</strong> DV360 cubre display, video, audio, nativo y CTV/OTT. Google Ads se enfoca en search, shopping y GDN.</li>
</ul>
<strong>Resumen:</strong> Google Ads = self-serve masivo. DV360 = programático premium con control total.`,
          },
          tags: ['dsp', 'programmatic', 'GMP'],
        },
        {
          q: {
            pt: 'Explique a hierarquia do DV360: Partner → Advertiser → Campaign → Insertion Order → Line Item → Creative.',
            en: 'Explain the DV360 hierarchy: Partner → Advertiser → Campaign → Insertion Order → Line Item → Creative.',
            es: 'Explica la jerarquía de DV360: Partner → Advertiser → Campaign → Insertion Order → Line Item → Creative.',
          },
          a: {
            pt: `<ul>
  <li><strong>Partner:</strong> nível raiz — representa a agência ou trading desk. Controla seats de inventário e acessos.</li>
  <li><strong>Advertiser:</strong> o cliente/marca. Aqui ficam as configurações de Floodlight, brand safety e audiences compartilhadas.</li>
  <li><strong>Campaign:</strong> agrupa os IOs por objetivo de negócio. Sem budget próprio — o orçamento fica nos IOs.</li>
  <li><strong>Insertion Order (IO):</strong> representa o "contrato" de uma iniciativa. Define budget total, pace e datas.</li>
  <li><strong>Line Item (LI):</strong> onde acontece a compra de fato — define tipo de compra (RTB, PMP, PG), targeting, bid e frequency cap.</li>
  <li><strong>Creative:</strong> as peças associadas ao LI. Podem ser HTML5, vídeo (VAST/VPAID), nativo ou áudio.</li>
</ul>
<strong>Ponto crítico:</strong> Targeting no LI afina o que foi definido no IO. Budget não utilizado no LI não "sobe" automaticamente ao IO — requer ajuste manual ou auto-budget allocation ativado.`,
            en: `<ul>
  <li><strong>Partner:</strong> root level — represents the agency or trading desk. Controls inventory seats and access.</li>
  <li><strong>Advertiser:</strong> the client/brand. Floodlight settings, brand safety and shared audiences live here.</li>
  <li><strong>Campaign:</strong> groups IOs by business objective. No own budget — budget sits at IO level.</li>
  <li><strong>Insertion Order (IO):</strong> represents the "contract" for an initiative. Sets total budget, pacing and dates.</li>
  <li><strong>Line Item (LI):</strong> where actual buying happens — defines purchase type (RTB, PMP, PG), targeting, bid and frequency cap.</li>
  <li><strong>Creative:</strong> assets assigned to the LI. Can be HTML5, video (VAST/VPAID), native or audio.</li>
</ul>
<strong>Critical note:</strong> Targeting at the LI refines what was set at the IO. Unused budget at LI level doesn't automatically roll up to IO — requires manual adjustment or auto-budget allocation enabled.`,
            es: `<ul>
  <li><strong>Partner:</strong> nivel raíz — representa a la agencia o trading desk. Controla seats de inventario y accesos.</li>
  <li><strong>Advertiser:</strong> el cliente/marca. Aquí viven las configuraciones de Floodlight, brand safety y audiences compartidas.</li>
  <li><strong>Campaign:</strong> agrupa los IOs por objetivo de negocio. Sin presupuesto propio — el budget está en los IOs.</li>
  <li><strong>Insertion Order (IO):</strong> representa el "contrato" de una iniciativa. Define budget total, pace y fechas.</li>
  <li><strong>Line Item (LI):</strong> donde ocurre la compra real — define tipo de compra (RTB, PMP, PG), targeting, bid y frequency cap.</li>
  <li><strong>Creative:</strong> las piezas asociadas al LI. Pueden ser HTML5, video (VAST/VPAID), nativo o audio.</li>
</ul>
<strong>Punto crítico:</strong> El targeting en el LI refina lo definido en el IO. El budget no usado en el LI no sube automáticamente al IO — requiere ajuste manual o auto-budget allocation activado.`,
          },
          tags: ['hierarquia', 'IO', 'line-item'],
        },
        {
          q: {
            pt: 'Qual a diferença entre Open Auction, Private Marketplace (PMP) e Programmatic Guaranteed (PG)?',
            en: 'What is the difference between Open Auction, Private Marketplace (PMP) and Programmatic Guaranteed (PG)?',
            es: '¿Cuál es la diferencia entre Open Auction, Private Marketplace (PMP) y Programmatic Guaranteed (PG)?',
          },
          a: {
            pt: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px;text-align:left">Tipo</th><th style="padding:6px">Inventário</th><th style="padding:6px">Preço</th><th style="padding:6px">Garantia</th></tr>
<tr><td style="padding:6px"><strong>Open Auction (RTB)</strong></td><td style="padding:6px">Aberto a todos</td><td style="padding:6px">CPM dinâmico</td><td style="padding:6px">Nenhuma</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>PMP (Deal)</strong></td><td style="padding:6px">Seleto — deal ID</td><td style="padding:6px">Floor price negociado</td><td style="padding:6px">Não — ainda é leilão</td></tr>
<tr><td style="padding:6px"><strong>Preferred Deal</strong></td><td style="padding:6px">Seleto — 1:1</td><td style="padding:6px">CPM fixo negociado</td><td style="padding:6px">Não — right of first refusal</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>Programmatic Guaranteed</strong></td><td style="padding:6px">Reservado</td><td style="padding:6px">CPM fixo</td><td style="padding:6px">Sim — impressões garantidas</td></tr>
</table><br>
<strong>No DV360:</strong> cada tipo exige um Line Item diferente. PMP requer o Deal ID configurado no LI. PG requer aprovação do publisher e geralmente tem mínimo de investimento.<br>
<strong>Quando usar PG:</strong> lançamentos com data crítica, formatos exclusivos (home page takeover), ou quando precisar garantir share of voice.`,
            en: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px;text-align:left">Type</th><th style="padding:6px">Inventory</th><th style="padding:6px">Price</th><th style="padding:6px">Guarantee</th></tr>
<tr><td style="padding:6px"><strong>Open Auction (RTB)</strong></td><td style="padding:6px">Open to all</td><td style="padding:6px">Dynamic CPM</td><td style="padding:6px">None</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>PMP (Deal)</strong></td><td style="padding:6px">Curated — deal ID</td><td style="padding:6px">Negotiated floor</td><td style="padding:6px">No — still auction</td></tr>
<tr><td style="padding:6px"><strong>Preferred Deal</strong></td><td style="padding:6px">Curated — 1:1</td><td style="padding:6px">Fixed negotiated CPM</td><td style="padding:6px">No — right of first refusal</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>Programmatic Guaranteed</strong></td><td style="padding:6px">Reserved</td><td style="padding:6px">Fixed CPM</td><td style="padding:6px">Yes — guaranteed impressions</td></tr>
</table><br>
<strong>In DV360:</strong> each type requires a different Line Item. PMP requires the Deal ID set up in the LI. PG requires publisher approval and usually has a minimum spend.<br>
<strong>When to use PG:</strong> time-critical launches, exclusive formats (home page takeover), or when you need to guarantee share of voice.`,
            es: `<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px;text-align:left">Tipo</th><th style="padding:6px">Inventario</th><th style="padding:6px">Precio</th><th style="padding:6px">Garantía</th></tr>
<tr><td style="padding:6px"><strong>Open Auction (RTB)</strong></td><td style="padding:6px">Abierto a todos</td><td style="padding:6px">CPM dinámico</td><td style="padding:6px">Ninguna</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>PMP (Deal)</strong></td><td style="padding:6px">Selecto — deal ID</td><td style="padding:6px">Floor price negociado</td><td style="padding:6px">No — sigue siendo subasta</td></tr>
<tr><td style="padding:6px"><strong>Preferred Deal</strong></td><td style="padding:6px">Selecto — 1:1</td><td style="padding:6px">CPM fijo negociado</td><td style="padding:6px">No — right of first refusal</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px"><strong>Programmatic Guaranteed</strong></td><td style="padding:6px">Reservado</td><td style="padding:6px">CPM fijo</td><td style="padding:6px">Sí — impresiones garantizadas</td></tr>
</table><br>
<strong>En DV360:</strong> cada tipo requiere un Line Item diferente. PMP requiere el Deal ID configurado en el LI. PG requiere aprobación del publisher y generalmente tiene un mínimo de inversión.<br>
<strong>Cuándo usar PG:</strong> lanzamientos con fecha crítica, formatos exclusivos (home page takeover), o cuando se necesite garantizar share of voice.`,
          },
          tags: ['RTB', 'PMP', 'programmatic-guaranteed', 'deal'],
        },
        {
          q: {
            pt: 'O que é frequency cap e como configurar no DV360?',
            en: 'What is frequency cap and how to configure it in DV360?',
            es: '¿Qué es frequency cap y cómo configurarlo en DV360?',
          },
          a: {
            pt: `<strong>Frequency cap</strong> limita quantas vezes um usuário vê o mesmo anúncio em um período.<br><br>
<strong>Níveis no DV360:</strong>
<ul>
  <li><strong>IO level:</strong> cap global para toda a iniciativa</li>
  <li><strong>LI level:</strong> cap específico por line item (adicional ao IO)</li>
</ul>
<strong>Períodos disponíveis:</strong> por minuto, hora, dia, semana, mês ou duração total da campanha.<br><br>
<strong>Opções de exposição:</strong>
<ul>
  <li><strong>Impression-based:</strong> limita por número de impressões</li>
  <li><strong>Active View-based:</strong> limita apenas impressões viewable (requer tag IAS/Moat)</li>
</ul>
<strong>Boas práticas:</strong> 3-5 impressões/semana para display padrão. Vídeo pode tolerar menos (1-3). CTV: mais restritivo ainda. Sempre verificar se o cap do LI não está mais restritivo que o IO — o mais restritivo prevalece.`,
            en: `<strong>Frequency cap</strong> limits how many times a user sees the same ad in a given period.<br><br>
<strong>Levels in DV360:</strong>
<ul>
  <li><strong>IO level:</strong> global cap for the entire initiative</li>
  <li><strong>LI level:</strong> specific cap per line item (in addition to IO)</li>
</ul>
<strong>Available periods:</strong> per minute, hour, day, week, month or lifetime.<br><br>
<strong>Exposure options:</strong>
<ul>
  <li><strong>Impression-based:</strong> limits by number of impressions</li>
  <li><strong>Active View-based:</strong> limits only viewable impressions (requires IAS/Moat tag)</li>
</ul>
<strong>Best practices:</strong> 3-5 impressions/week for standard display. Video can tolerate less (1-3). CTV: even more restrictive. Always check that LI cap isn't more restrictive than IO — the most restrictive applies.`,
            es: `<strong>Frequency cap</strong> limita cuántas veces un usuario ve el mismo anuncio en un período dado.<br><br>
<strong>Niveles en DV360:</strong>
<ul>
  <li><strong>IO level:</strong> cap global para toda la iniciativa</li>
  <li><strong>LI level:</strong> cap específico por line item (adicional al IO)</li>
</ul>
<strong>Períodos disponibles:</strong> por minuto, hora, día, semana, mes o duración total.<br><br>
<strong>Opciones de exposición:</strong>
<ul>
  <li><strong>Impression-based:</strong> limita por número de impresiones</li>
  <li><strong>Active View-based:</strong> limita solo impresiones viewable (requiere tag IAS/Moat)</li>
</ul>
<strong>Buenas prácticas:</strong> 3-5 impresiones/semana para display estándar. Video puede tolerar menos (1-3). CTV: aún más restrictivo. Siempre verificar que el cap del LI no sea más restrictivo que el IO — el más restrictivo prevalece.`,
          },
          tags: ['frequency', 'cap', 'viewability'],
        },
        {
          q: {
            pt: 'Como funciona o Brand Safety no DV360?',
            en: 'How does Brand Safety work in DV360?',
            es: '¿Cómo funciona el Brand Safety en DV360?',
          },
          a: {
            pt: `Brand safety no DV360 opera em múltiplas camadas:<br><br>
<strong>1. Configurações no Advertiser:</strong>
<ul>
  <li>Sensitive categories blocking (ex: violência, conteúdo adulto, jogo)</li>
  <li>Digital Content Labels (DL-G, DL-PG, DL-T, DL-MA)</li>
</ul>
<strong>2. No IO/LI:</strong>
<ul>
  <li>Publisher blocklist (URLs específicas)</li>
  <li>App category exclusions</li>
  <li>Third-party brand safety segments (IAS, DoubleVerify, Moat)</li>
</ul>
<strong>3. Verificação terceiros:</strong> IAS e DoubleVerify funcionam como tag de verificação pré-bid (evita comprar inventário ruim) e pós-bid (reporta o que foi entregue).<br><br>
<strong>Ponto de atenção:</strong> bloqueios muito agressivos podem limitar drasticamente o alcance — monitorar custo por oportunidade. Recommended approach: usar listas de contextos positivos (keyword targeting) além dos bloqueios negativos.`,
            en: `Brand safety in DV360 operates across multiple layers:<br><br>
<strong>1. Advertiser settings:</strong>
<ul>
  <li>Sensitive categories blocking (e.g. violence, adult content, gambling)</li>
  <li>Digital Content Labels (DL-G, DL-PG, DL-T, DL-MA)</li>
</ul>
<strong>2. At IO/LI:</strong>
<ul>
  <li>Publisher blocklist (specific URLs)</li>
  <li>App category exclusions</li>
  <li>Third-party brand safety segments (IAS, DoubleVerify, Moat)</li>
</ul>
<strong>3. Third-party verification:</strong> IAS and DoubleVerify work as pre-bid verification tags (avoid buying bad inventory) and post-bid (reports what was delivered).<br><br>
<strong>Watch out:</strong> overly aggressive blocking can drastically limit reach — monitor opportunity cost. Recommended approach: use positive context lists (keyword targeting) alongside negative blocks.`,
            es: `Brand safety en DV360 opera en múltiples capas:<br><br>
<strong>1. Configuraciones del Advertiser:</strong>
<ul>
  <li>Bloqueo de categorías sensibles (ej: violencia, contenido adulto, juego)</li>
  <li>Digital Content Labels (DL-G, DL-PG, DL-T, DL-MA)</li>
</ul>
<strong>2. En IO/LI:</strong>
<ul>
  <li>Publisher blocklist (URLs específicas)</li>
  <li>App category exclusions</li>
  <li>Segmentos de brand safety de terceros (IAS, DoubleVerify, Moat)</li>
</ul>
<strong>3. Verificación de terceros:</strong> IAS y DoubleVerify funcionan como tags de verificación pre-bid (evitar comprar inventario malo) y post-bid (reporta lo entregado).<br><br>
<strong>Atención:</strong> bloqueos muy agresivos pueden limitar drásticamente el alcance — monitorear costo de oportunidad. Enfoque recomendado: usar listas de contextos positivos (keyword targeting) además de los bloqueos negativos.`,
          },
          tags: ['brand-safety', 'IAS', 'DoubleVerify', 'blocking'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'Explique a diferença entre pacing Even, ASAP e Ahead. Quando usar cada um?',
            en: 'Explain the difference between Even, ASAP and Ahead pacing. When to use each?',
            es: 'Explica la diferencia entre pacing Even, ASAP y Ahead. ¿Cuándo usar cada uno?',
          },
          a: {
            pt: `<strong>Pacing</strong> controla como o budget é distribuído ao longo do período do IO ou LI.<br><br>
<ul>
  <li><strong>Even:</strong> distribui o budget uniformemente ao longo do período. Ideal para campanhas de branding com duração longa e sem urgência de entrega.</li>
  <li><strong>ASAP:</strong> entrega o budget o mais rápido possível. Usar em campanhas de performance onde velocidade de aprendizado é crítica, ou em IOs com poucos dias restantes.</li>
  <li><strong>Ahead:</strong> entrega mais rápido que even no início, desacelerando à medida que o fim do período se aproxima. Bom para campanhas sazonais onde os primeiros dias têm maior valor.</li>
</ul>
<strong>Cuidado com ASAP:</strong> pode gastar todo o budget nas primeiras horas se não houver daily budget ou frequency caps adequados. Sempre combinar com teto diário.<br>
<strong>Monitoring:</strong> verificar o "Budget Remaining vs. Days Remaining" no dashboard — se estiver desbalanceado, ajustar o tipo de pacing.`,
            en: `<strong>Pacing</strong> controls how budget is distributed over the IO or LI period.<br><br>
<ul>
  <li><strong>Even:</strong> distributes budget evenly over the period. Ideal for long branding campaigns without delivery urgency.</li>
  <li><strong>ASAP:</strong> delivers budget as fast as possible. Use for performance campaigns where learning speed is critical, or IOs with few days remaining.</li>
  <li><strong>Ahead:</strong> delivers faster than even at the start, slowing as the period end approaches. Good for seasonal campaigns where early days have higher value.</li>
</ul>
<strong>ASAP warning:</strong> can spend the entire budget in the first few hours if there's no daily budget or adequate frequency caps. Always combine with a daily ceiling.<br>
<strong>Monitoring:</strong> check "Budget Remaining vs. Days Remaining" on the dashboard — if imbalanced, adjust the pacing type.`,
            es: `<strong>Pacing</strong> controla cómo se distribuye el presupuesto a lo largo del período del IO o LI.<br><br>
<ul>
  <li><strong>Even:</strong> distribuye el presupuesto uniformemente a lo largo del período. Ideal para campañas de branding largas sin urgencia de entrega.</li>
  <li><strong>ASAP:</strong> entrega el presupuesto lo más rápido posible. Usar en campañas de performance donde la velocidad de aprendizaje es crítica, o en IOs con pocos días restantes.</li>
  <li><strong>Ahead:</strong> entrega más rápido que even al inicio, desacelerando a medida que se acerca el fin del período. Bueno para campañas estacionales donde los primeros días tienen mayor valor.</li>
</ul>
<strong>Cuidado con ASAP:</strong> puede gastar todo el presupuesto en las primeras horas si no hay daily budget o frequency caps adecuados. Siempre combinar con techo diario.<br>
<strong>Monitoring:</strong> verificar "Budget Remaining vs. Days Remaining" en el dashboard — si está desbalanceado, ajustar el tipo de pacing.`,
          },
          tags: ['pacing', 'budget', 'delivery'],
        },
        {
          q: {
            pt: 'Como funciona o bidding no DV360? Explique Fixed Bid, Maximize Spend e Custom Bidding.',
            en: 'How does bidding work in DV360? Explain Fixed Bid, Maximize Spend and Custom Bidding.',
            es: '¿Cómo funciona el bidding en DV360? Explica Fixed Bid, Maximize Spend y Custom Bidding.',
          },
          a: {
            pt: `<strong>Tipos de bidding no DV360:</strong><br><br>
<ul>
  <li><strong>Fixed Bid (CPM manual):</strong> você define o CPM máximo. Controle total, mas sem otimização. Usar em PMPs onde o floor já está negociado ou em testes onde você precisa de variáveis controladas.</li>
  <li><strong>Maximize Spend:</strong> algoritmo automático tenta gastar o budget inteiro ao menor CPM possível. Bom para campanhas de awareness sem meta de CPA.</li>
  <li><strong>Target CPA:</strong> algoritmo mira em um custo por ação específico. Requer volume de conversões suficiente para treinamento (≥50 conversões/mês recomendado).</li>
  <li><strong>Target ROAS:</strong> otimiza para valor de conversão. Requer integração com Floodlight e passagem de revenue.</li>
  <li><strong>Custom Bidding:</strong> você escreve uma fórmula própria usando sinais do DV360 (ex: viewability score, hora do dia, device). Flexibilidade máxima para quem tem dados proprietários.</li>
</ul>
<strong>Hierarquia de prioridade:</strong> Fixed Bid sempre "vence" sobre automação. Se o LI tem Fixed Bid, não há aprendizado de máquina.`,
            en: `<strong>DV360 bidding types:</strong><br><br>
<ul>
  <li><strong>Fixed Bid (manual CPM):</strong> you set the max CPM. Full control but no optimization. Use in PMPs where the floor is already negotiated or in tests where you need controlled variables.</li>
  <li><strong>Maximize Spend:</strong> automatic algorithm tries to spend the full budget at the lowest possible CPM. Good for awareness campaigns without a CPA goal.</li>
  <li><strong>Target CPA:</strong> algorithm targets a specific cost per action. Requires sufficient conversion volume for training (≥50 conversions/month recommended).</li>
  <li><strong>Target ROAS:</strong> optimizes for conversion value. Requires Floodlight integration and revenue passback.</li>
  <li><strong>Custom Bidding:</strong> you write your own formula using DV360 signals (e.g. viewability score, time of day, device). Maximum flexibility for those with proprietary data.</li>
</ul>
<strong>Priority hierarchy:</strong> Fixed Bid always "wins" over automation. If the LI has Fixed Bid, there's no machine learning.`,
            es: `<strong>Tipos de bidding en DV360:</strong><br><br>
<ul>
  <li><strong>Fixed Bid (CPM manual):</strong> defines el CPM máximo. Control total pero sin optimización. Usar en PMPs donde el floor ya está negociado o en pruebas donde necesitas variables controladas.</li>
  <li><strong>Maximize Spend:</strong> algoritmo automático intenta gastar todo el presupuesto al menor CPM posible. Bueno para campañas de awareness sin meta de CPA.</li>
  <li><strong>Target CPA:</strong> el algoritmo apunta a un costo por acción específico. Requiere volumen suficiente de conversiones para entrenamiento (≥50 conversiones/mes recomendado).</li>
  <li><strong>Target ROAS:</strong> optimiza para valor de conversión. Requiere integración con Floodlight y passback de revenue.</li>
  <li><strong>Custom Bidding:</strong> escribes tu propia fórmula usando señales de DV360 (ej: viewability score, hora del día, dispositivo). Máxima flexibilidad para quienes tienen datos propietarios.</li>
</ul>
<strong>Jerarquía de prioridad:</strong> Fixed Bid siempre "gana" sobre la automatización. Si el LI tiene Fixed Bid, no hay machine learning.`,
          },
          tags: ['bidding', 'CPA', 'custom-bidding', 'automated'],
        },
        {
          q: {
            pt: 'Como configurar audience targeting no DV360? Qual a diferença entre 1st, 2nd e 3rd party audiences?',
            en: 'How to configure audience targeting in DV360? What is the difference between 1st, 2nd and 3rd party audiences?',
            es: '¿Cómo configurar audience targeting en DV360? ¿Cuál es la diferencia entre audiencias de 1st, 2nd y 3rd party?',
          },
          a: {
            pt: `<strong>Tipos de audience por origem:</strong><br><br>
<ul>
  <li><strong>1st Party:</strong> dados do próprio anunciante — listas de remarketing via Floodlight, Customer Match (upload de emails), GA4 audiences. Alta precisão e sem custo adicional.</li>
  <li><strong>2nd Party:</strong> dados de parceiros diretos compartilhados via acordo — ex: publisher compartilha audiência com a marca. Menos comum, requer negociação.</li>
  <li><strong>3rd Party:</strong> segmentos comprados de data providers (Oracle, Nielsen, Experian, Lotame). Cobertura ampla, mas com custo adicional no CPM (data fee) e qualidade variável.</li>
</ul>
<strong>Configuração no DV360:</strong>
<ul>
  <li>Audiences ficam no nível Advertiser e podem ser compartilhadas entre LIs</li>
  <li>No LI: seção "Audience Targeting" → adicionar inclusion ou exclusion lists</li>
  <li>Combinar audiences com operadores AND/OR para refinar</li>
</ul>
<strong>Dica:</strong> Audience expansion no DV360 permite alcançar usuários similares ao seed list. Ativar com cautela — pode diluir a precisão do targeting.`,
            en: `<strong>Audience types by source:</strong><br><br>
<ul>
  <li><strong>1st Party:</strong> advertiser's own data — remarketing lists via Floodlight, Customer Match (email upload), GA4 audiences. High precision and no additional cost.</li>
  <li><strong>2nd Party:</strong> data from direct partners shared by agreement — e.g. publisher shares audience with the brand. Less common, requires negotiation.</li>
  <li><strong>3rd Party:</strong> segments purchased from data providers (Oracle, Nielsen, Experian, Lotame). Wide coverage, but with additional CPM cost (data fee) and variable quality.</li>
</ul>
<strong>Configuration in DV360:</strong>
<ul>
  <li>Audiences live at the Advertiser level and can be shared across LIs</li>
  <li>In the LI: "Audience Targeting" section → add inclusion or exclusion lists</li>
  <li>Combine audiences with AND/OR operators to refine</li>
</ul>
<strong>Tip:</strong> Audience expansion in DV360 allows reaching users similar to the seed list. Activate with caution — can dilute targeting precision.`,
            es: `<strong>Tipos de audiencia por origen:</strong><br><br>
<ul>
  <li><strong>1st Party:</strong> datos del propio anunciante — listas de remarketing via Floodlight, Customer Match (carga de emails), audiencias de GA4. Alta precisión y sin costo adicional.</li>
  <li><strong>2nd Party:</strong> datos de socios directos compartidos por acuerdo — ej: publisher comparte audiencia con la marca. Menos común, requiere negociación.</li>
  <li><strong>3rd Party:</strong> segmentos comprados a data providers (Oracle, Nielsen, Experian, Lotame). Amplia cobertura, pero con costo adicional en CPM (data fee) y calidad variable.</li>
</ul>
<strong>Configuración en DV360:</strong>
<ul>
  <li>Las audiencias viven en el nivel Advertiser y pueden compartirse entre LIs</li>
  <li>En el LI: sección "Audience Targeting" → agregar listas de inclusión o exclusión</li>
  <li>Combinar audiencias con operadores AND/OR para refinar</li>
</ul>
<strong>Consejo:</strong> Audience expansion en DV360 permite alcanzar usuarios similares a la seed list. Activar con cautela — puede diluir la precisión del targeting.`,
          },
          tags: ['audience', '1st-party', 'remarketing', 'Customer-Match'],
        },
        {
          q: {
            pt: 'Como o DV360 se integra ao CM360? Qual o papel de cada ferramenta?',
            en: 'How does DV360 integrate with CM360? What is the role of each tool?',
            es: '¿Cómo se integra DV360 con CM360? ¿Cuál es el rol de cada herramienta?',
          },
          a: {
            pt: `A integração DV360 ↔ CM360 é nativa dentro do Google Marketing Platform.<br><br>
<strong>Fluxo:</strong>
<ol>
  <li>Criatives são upadas no CM360 (ad server)</li>
  <li>CM360 gera tags de anúncio (Trafficking Sheet)</li>
  <li>DV360 (DSP) recebe essas tags e usa o CM360 como ad server externo</li>
  <li>Todas as impressões, cliques e conversões são reportadas no CM360</li>
</ol>
<strong>Por que usar CM360 como ad server no DV360?</strong>
<ul>
  <li>Relatório unificado: inventário DV360 + publishers diretos no mesmo report</li>
  <li>Floodlight centralizado: uma única fonte de verdade para conversões</li>
  <li>Creative management: rotação, sequenciamento e QA no CM360, não em cada DSP</li>
  <li>Attribution cross-channel: DV360, SA360 e outros canais com o mesmo cookie</li>
</ul>
<strong>Ativar integração:</strong> Admin → Linked Accounts no DV360 → linkar ao Advertiser do CM360.`,
            en: `DV360 ↔ CM360 integration is native within Google Marketing Platform.<br><br>
<strong>Flow:</strong>
<ol>
  <li>Creatives are uploaded in CM360 (ad server)</li>
  <li>CM360 generates ad tags (Trafficking Sheet)</li>
  <li>DV360 (DSP) receives these tags and uses CM360 as the external ad server</li>
  <li>All impressions, clicks and conversions are reported in CM360</li>
</ol>
<strong>Why use CM360 as ad server in DV360?</strong>
<ul>
  <li>Unified reporting: DV360 inventory + direct publishers in the same report</li>
  <li>Centralized Floodlight: single source of truth for conversions</li>
  <li>Creative management: rotation, sequencing and QA in CM360, not in each DSP</li>
  <li>Cross-channel attribution: DV360, SA360 and other channels with the same cookie</li>
</ul>
<strong>Enable integration:</strong> Admin → Linked Accounts in DV360 → link to CM360 Advertiser.`,
            es: `La integración DV360 ↔ CM360 es nativa dentro de Google Marketing Platform.<br><br>
<strong>Flujo:</strong>
<ol>
  <li>Los creativos se suben en CM360 (ad server)</li>
  <li>CM360 genera tags de anuncio (Trafficking Sheet)</li>
  <li>DV360 (DSP) recibe esas tags y usa CM360 como ad server externo</li>
  <li>Todas las impresiones, clics y conversiones se reportan en CM360</li>
</ol>
<strong>¿Por qué usar CM360 como ad server en DV360?</strong>
<ul>
  <li>Reporte unificado: inventario DV360 + publishers directos en el mismo reporte</li>
  <li>Floodlight centralizado: única fuente de verdad para conversiones</li>
  <li>Gestión creativa: rotación, secuenciamiento y QA en CM360, no en cada DSP</li>
  <li>Atribución cross-channel: DV360, SA360 y otros canales con la misma cookie</li>
</ul>
<strong>Activar integración:</strong> Admin → Linked Accounts en DV360 → vincular al Advertiser de CM360.`,
          },
          tags: ['CM360', 'integração', 'ad-server', 'Floodlight'],
        },
        {
          q: {
            pt: 'O que são Deals no DV360 e como troubleshootear quando um PMP não está entregando?',
            en: 'What are Deals in DV360 and how to troubleshoot when a PMP is not delivering?',
            es: '¿Qué son los Deals en DV360 y cómo hacer troubleshooting cuando un PMP no está entregando?',
          },
          a: {
            pt: `<strong>Deals</strong> são acordos de inventário entre um comprador (DSP) e um vendedor (SSP/publisher), identificados por um <strong>Deal ID</strong>.<br><br>
<strong>Processo de ativação no DV360:</strong>
<ol>
  <li>Publisher envia o Deal ID para a agência</li>
  <li>No DV360: Inventory → Deals → My Deals → inserir o Deal ID</li>
  <li>Linkar o deal ao LI correto (seção Inventory Source no LI)</li>
</ol>
<strong>Troubleshoot PMP sem entrega — checklist:</strong>
<ul>
  <li>✅ Deal ID está ativo no painel de Deals?</li>
  <li>✅ Deal foi linkado ao LI (não só salvo no inventory)?</li>
  <li>✅ Datas do deal são compatíveis com o período do LI?</li>
  <li>✅ Floor price do deal é compatível com o bid do LI?</li>
  <li>✅ Targeting do LI não é conflitante com o inventário do deal (ex: geo)?</li>
  <li>✅ Publisher confirmou que o deal está ativo no lado deles (SSP)?</li>
  <li>✅ Creative aprovada para o formato do deal?</li>
</ul>
<strong>Ferramenta útil:</strong> Deal Troubleshooter em Inventory → Deals → ícone de diagnóstico. Mostra bid requests recebidos vs. ganhos.`,
            en: `<strong>Deals</strong> are inventory agreements between a buyer (DSP) and a seller (SSP/publisher), identified by a <strong>Deal ID</strong>.<br><br>
<strong>Activation process in DV360:</strong>
<ol>
  <li>Publisher sends the Deal ID to the agency</li>
  <li>In DV360: Inventory → Deals → My Deals → enter the Deal ID</li>
  <li>Link the deal to the correct LI (Inventory Source section in LI)</li>
</ol>
<strong>PMP not delivering — troubleshoot checklist:</strong>
<ul>
  <li>✅ Deal ID is active in the Deals panel?</li>
  <li>✅ Deal was linked to the LI (not just saved in inventory)?</li>
  <li>✅ Deal dates are compatible with the LI period?</li>
  <li>✅ Deal floor price is compatible with the LI bid?</li>
  <li>✅ LI targeting doesn't conflict with deal inventory (e.g. geo)?</li>
  <li>✅ Publisher confirmed the deal is active on their side (SSP)?</li>
  <li>✅ Creative approved for the deal format?</li>
</ul>
<strong>Useful tool:</strong> Deal Troubleshooter at Inventory → Deals → diagnostics icon. Shows bid requests received vs. won.`,
            es: `<strong>Deals</strong> son acuerdos de inventario entre un comprador (DSP) y un vendedor (SSP/publisher), identificados por un <strong>Deal ID</strong>.<br><br>
<strong>Proceso de activación en DV360:</strong>
<ol>
  <li>Publisher envía el Deal ID a la agencia</li>
  <li>En DV360: Inventory → Deals → My Deals → ingresar el Deal ID</li>
  <li>Vincular el deal al LI correcto (sección Inventory Source en el LI)</li>
</ol>
<strong>Troubleshoot PMP sin entrega — checklist:</strong>
<ul>
  <li>✅ ¿El Deal ID está activo en el panel de Deals?</li>
  <li>✅ ¿El deal fue vinculado al LI (no solo guardado en inventory)?</li>
  <li>✅ ¿Las fechas del deal son compatibles con el período del LI?</li>
  <li>✅ ¿El floor price del deal es compatible con el bid del LI?</li>
  <li>✅ ¿El targeting del LI no conflictúa con el inventario del deal (ej: geo)?</li>
  <li>✅ ¿Publisher confirmó que el deal está activo de su lado (SSP)?</li>
  <li>✅ ¿Creative aprobada para el formato del deal?</li>
</ul>
<strong>Herramienta útil:</strong> Deal Troubleshooter en Inventory → Deals → ícono de diagnóstico. Muestra bid requests recibidos vs. ganados.`,
          },
          tags: ['PMP', 'deal-ID', 'troubleshoot', 'delivery'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como funciona o leilão de RTB (Real-Time Bidding) no DV360? Explique o fluxo completo em menos de 100ms.',
            en: 'How does the RTB (Real-Time Bidding) auction work in DV360? Explain the complete flow in under 100ms.',
            es: '¿Cómo funciona la subasta de RTB (Real-Time Bidding) en DV360? Explica el flujo completo en menos de 100ms.',
          },
          a: {
            pt: `O RTB acontece em milissegundos. Fluxo completo:<br><br>
<ol>
  <li><strong>Usuário acessa a página (0ms):</strong> o browser carrega e encontra um ad slot.</li>
  <li><strong>SSP envia Bid Request (~5ms):</strong> o publisher's SSP (ex: Google Ad Manager, Xandr) envia uma bid request com: user ID, contexto da página, tamanho do slot, floor price e dados de audience.</li>
  <li><strong>DV360 processa (~20-30ms):</strong> avalia quais LIs têm elegibilidade (targeting match, budget disponível, criativo aprovado). Calcula o bid price via algoritmo (fixed ou automated).</li>
  <li><strong>DV360 envia Bid Response (~40ms):</strong> retorna o CPM ofertado e o creative ID.</li>
  <li><strong>SSP realiza o leilão (~50ms):</strong> compara todas as bids. Vence a maior bid acima do floor. Mecanismo: leilão de segundo preço (paga o segundo maior bid + $0.01) ou primeiro preço (cada vez mais comum).</li>
  <li><strong>Win Notice (~60ms):</strong> SSP notifica o DV360 que ganhou. DV360 confirma e "commita" o orçamento.</li>
  <li><strong>Ad Serving (~80-100ms):</strong> browser carrega o creative do CM360. Floodlight registra a impressão.</li>
</ol>
<strong>Ponto crítico:</strong> timeout típico é 100-150ms. Se o DV360 não responder nesse prazo, o bid é descartado. Por isso LIs com targeting muito complexo podem ter win rates menores.`,
            en: `RTB happens in milliseconds. Complete flow:<br><br>
<ol>
  <li><strong>User loads the page (0ms):</strong> browser loads and finds an ad slot.</li>
  <li><strong>SSP sends Bid Request (~5ms):</strong> publisher's SSP (e.g. Google Ad Manager, Xandr) sends a bid request with: user ID, page context, slot size, floor price and audience data.</li>
  <li><strong>DV360 processes (~20-30ms):</strong> evaluates which LIs have eligibility (targeting match, budget available, approved creative). Calculates the bid price via algorithm (fixed or automated).</li>
  <li><strong>DV360 sends Bid Response (~40ms):</strong> returns the offered CPM and creative ID.</li>
  <li><strong>SSP runs the auction (~50ms):</strong> compares all bids. Highest bid above the floor wins. Mechanism: second-price auction (pays second highest bid + $0.01) or first-price (increasingly common).</li>
  <li><strong>Win Notice (~60ms):</strong> SSP notifies DV360 it won. DV360 confirms and commits the budget.</li>
  <li><strong>Ad Serving (~80-100ms):</strong> browser loads creative from CM360. Floodlight records the impression.</li>
</ol>
<strong>Critical point:</strong> typical timeout is 100-150ms. If DV360 doesn't respond within that window, the bid is discarded. That's why LIs with very complex targeting may have lower win rates.`,
            es: `El RTB sucede en milisegundos. Flujo completo:<br><br>
<ol>
  <li><strong>Usuario carga la página (0ms):</strong> el browser carga y encuentra un ad slot.</li>
  <li><strong>SSP envía Bid Request (~5ms):</strong> el SSP del publisher (ej: Google Ad Manager, Xandr) envía una bid request con: user ID, contexto de la página, tamaño del slot, floor price y datos de audiencia.</li>
  <li><strong>DV360 procesa (~20-30ms):</strong> evalúa qué LIs tienen elegibilidad (targeting match, presupuesto disponible, creativo aprobado). Calcula el precio de bid via algoritmo (fijo o automatizado).</li>
  <li><strong>DV360 envía Bid Response (~40ms):</strong> devuelve el CPM ofertado y el creative ID.</li>
  <li><strong>SSP realiza la subasta (~50ms):</strong> compara todas las bids. Gana la mayor bid por encima del floor. Mecanismo: subasta de segundo precio (paga la segunda mayor bid + $0.01) o primer precio (cada vez más común).</li>
  <li><strong>Win Notice (~60ms):</strong> SSP notifica a DV360 que ganó. DV360 confirma y "commitea" el presupuesto.</li>
  <li><strong>Ad Serving (~80-100ms):</strong> browser carga el creativo de CM360. Floodlight registra la impresión.</li>
</ol>
<strong>Punto crítico:</strong> el timeout típico es 100-150ms. Si DV360 no responde en ese plazo, el bid se descarta. Por eso LIs con targeting muy complejo pueden tener win rates menores.`,
          },
          tags: ['RTB', 'leilão', 'bid-request', 'SSP', 'ad-serving'],
        },
        {
          q: {
            pt: 'Explique como construir uma estratégia de CTV/OTT no DV360. Quais os desafios específicos desse canal?',
            en: 'Explain how to build a CTV/OTT strategy in DV360. What are the specific challenges of this channel?',
            es: 'Explica cómo construir una estrategia de CTV/OTT en DV360. ¿Cuáles son los desafíos específicos de este canal?',
          },
          a: {
            pt: `<strong>CTV (Connected TV) / OTT no DV360:</strong><br><br>
<strong>Configuração do Line Item:</strong>
<ul>
  <li>Environment: "Connected TV" (não Desktop ou Mobile)</li>
  <li>Formato: VAST video (15s ou 30s, preferencialmente non-skippable)</li>
  <li>Inventory: Google TV, YouTube TV via PMP, ou SSPs de CTV (SpotX, FreeWheel, Magnite)</li>
</ul>
<strong>Targeting disponível:</strong>
<ul>
  <li>Device make/model (Samsung Smart TV, Roku, Apple TV)</li>
  <li>App/Channel (Pluto TV, Globoplay, Crunchyroll)</li>
  <li>Audience segments (sem cookies — baseado em IP ou household ID)</li>
</ul>
<strong>Desafios específicos do CTV:</strong>
<ul>
  <li><strong>Sem cookies:</strong> targeting e attribution baseados em IP — menos precisos e sem remarketing individual</li>
  <li><strong>Frequency cap limitado:</strong> múltiplos apps no mesmo dispositivo = fragmentação da frequência</li>
  <li><strong>Brand safety:</strong> menos controle granular que web — inventário de streaming tem conteúdo variável</li>
  <li><strong>Measurement:</strong> sem clique — KPIs são reach, frequency, VCR (Video Completion Rate) e incrementality</li>
  <li><strong>Higher CPMs:</strong> inventário escasso = CPM 3-10x maior que display web</li>
</ul>
<strong>Métricas principais:</strong> VCR (meta: >90%), Unique Reach, CPM, Household Reach.`,
            en: `<strong>CTV (Connected TV) / OTT in DV360:</strong><br><br>
<strong>Line Item configuration:</strong>
<ul>
  <li>Environment: "Connected TV" (not Desktop or Mobile)</li>
  <li>Format: VAST video (15s or 30s, preferably non-skippable)</li>
  <li>Inventory: Google TV, YouTube TV via PMP, or CTV SSPs (SpotX, FreeWheel, Magnite)</li>
</ul>
<strong>Available targeting:</strong>
<ul>
  <li>Device make/model (Samsung Smart TV, Roku, Apple TV)</li>
  <li>App/Channel (Pluto TV, streaming apps, etc.)</li>
  <li>Audience segments (cookieless — based on IP or household ID)</li>
</ul>
<strong>CTV-specific challenges:</strong>
<ul>
  <li><strong>No cookies:</strong> targeting and attribution based on IP — less precise, no individual remarketing</li>
  <li><strong>Limited frequency cap:</strong> multiple apps on the same device = frequency fragmentation</li>
  <li><strong>Brand safety:</strong> less granular control than web — streaming inventory has variable content</li>
  <li><strong>Measurement:</strong> no click — KPIs are reach, frequency, VCR (Video Completion Rate) and incrementality</li>
  <li><strong>Higher CPMs:</strong> scarce inventory = CPM 3-10x higher than web display</li>
</ul>
<strong>Key metrics:</strong> VCR (target: >90%), Unique Reach, CPM, Household Reach.`,
            es: `<strong>CTV (Connected TV) / OTT en DV360:</strong><br><br>
<strong>Configuración del Line Item:</strong>
<ul>
  <li>Environment: "Connected TV" (no Desktop ni Mobile)</li>
  <li>Formato: VAST video (15s o 30s, preferiblemente non-skippable)</li>
  <li>Inventory: Google TV, YouTube TV via PMP, o SSPs de CTV (SpotX, FreeWheel, Magnite)</li>
</ul>
<strong>Targeting disponible:</strong>
<ul>
  <li>Device make/model (Samsung Smart TV, Roku, Apple TV)</li>
  <li>App/Canal (Pluto TV, apps de streaming, etc.)</li>
  <li>Segmentos de audiencia (sin cookies — basados en IP o household ID)</li>
</ul>
<strong>Desafíos específicos del CTV:</strong>
<ul>
  <li><strong>Sin cookies:</strong> targeting y atribución basados en IP — menos precisos y sin remarketing individual</li>
  <li><strong>Frequency cap limitado:</strong> múltiples apps en el mismo dispositivo = fragmentación de frecuencia</li>
  <li><strong>Brand safety:</strong> menos control granular que web — inventario de streaming tiene contenido variable</li>
  <li><strong>Measurement:</strong> sin clics — KPIs son reach, frequency, VCR (Video Completion Rate) e incrementalidad</li>
  <li><strong>CPMs más altos:</strong> inventario escaso = CPM 3-10x mayor que display web</li>
</ul>
<strong>Métricas principales:</strong> VCR (meta: >90%), Unique Reach, CPM, Household Reach.`,
          },
          tags: ['CTV', 'OTT', 'video', 'reach', 'cookieless'],
        },
        {
          q: {
            pt: 'Como usar o Insights & Reporting do DV360 para identificar underperformance e tomar decisões de otimização?',
            en: 'How to use DV360 Insights & Reporting to identify underperformance and make optimization decisions?',
            es: '¿Cómo usar Insights & Reporting de DV360 para identificar underperformance y tomar decisiones de optimización?',
          },
          a: {
            pt: `<strong>Framework de análise no DV360:</strong><br><br>
<strong>1. Relatórios padrão a monitorar semanalmente:</strong>
<ul>
  <li><strong>Pacing Report:</strong> budget gasto vs. esperado por dia. Se <80% do esperado → problema de entrega.</li>
  <li><strong>Win Rate Report:</strong> bids ganhos / bids enviados. Win rate <10% → bid muito baixo ou targeting muito restrito.</li>
  <li><strong>Auction Insights:</strong> mostra em quais leilões você está perdendo e para quem.</li>
</ul>
<strong>2. Sinais de underperformance e diagnóstico:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Sintoma</th><th style="padding:6px">Causa provável</th><th style="padding:6px">Ação</th></tr>
<tr><td style="padding:6px">Impressões baixas</td><td style="padding:6px">Targeting muito restrito / bid abaixo do floor</td><td style="padding:6px">Expandir geo ou audience; aumentar bid</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">CTR abaixo do benchmark</td><td style="padding:6px">Creative ruim ou audience errada</td><td style="padding:6px">A/B test de criativos; revisar audience</td></tr>
<tr><td style="padding:6px">CPA alto</td><td style="padding:6px">Algoritmo ainda aprendendo ou Floodlight mal configurado</td><td style="padding:6px">Aguardar 7 dias ou revisar Floodlight</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Budget não gasto</td><td style="padding:6px">Frequency cap muito restritivo ou targeting muito nichado</td><td style="padding:6px">Relaxar frequency ou expandir audience</td></tr>
</table><br>
<strong>3. Custom Reports:</strong> criar na aba Reports com dimensões como Publisher, Device, Geo, Creative Size para identificar os melhores segmentos e alocar mais budget.`,
            en: `<strong>Analysis framework in DV360:</strong><br><br>
<strong>1. Standard reports to monitor weekly:</strong>
<ul>
  <li><strong>Pacing Report:</strong> budget spent vs. expected per day. If <80% of expected → delivery problem.</li>
  <li><strong>Win Rate Report:</strong> bids won / bids sent. Win rate <10% → bid too low or targeting too restrictive.</li>
  <li><strong>Auction Insights:</strong> shows which auctions you're losing and to whom.</li>
</ul>
<strong>2. Underperformance signals and diagnosis:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Symptom</th><th style="padding:6px">Likely cause</th><th style="padding:6px">Action</th></tr>
<tr><td style="padding:6px">Low impressions</td><td style="padding:6px">Too restrictive targeting / bid below floor</td><td style="padding:6px">Expand geo or audience; increase bid</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">CTR below benchmark</td><td style="padding:6px">Poor creative or wrong audience</td><td style="padding:6px">A/B test creatives; review audience</td></tr>
<tr><td style="padding:6px">High CPA</td><td style="padding:6px">Algorithm still learning or misconfigured Floodlight</td><td style="padding:6px">Wait 7 days or review Floodlight</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Budget not spent</td><td style="padding:6px">Frequency cap too restrictive or niche targeting</td><td style="padding:6px">Relax frequency or expand audience</td></tr>
</table><br>
<strong>3. Custom Reports:</strong> create in the Reports tab with dimensions like Publisher, Device, Geo, Creative Size to identify top segments and allocate more budget.`,
            es: `<strong>Framework de análisis en DV360:</strong><br><br>
<strong>1. Reportes estándar a monitorear semanalmente:</strong>
<ul>
  <li><strong>Pacing Report:</strong> presupuesto gastado vs. esperado por día. Si <80% del esperado → problema de entrega.</li>
  <li><strong>Win Rate Report:</strong> bids ganados / bids enviados. Win rate <10% → bid muy bajo o targeting muy restrictivo.</li>
  <li><strong>Auction Insights:</strong> muestra en qué subastas estás perdiendo y a quién.</li>
</ul>
<strong>2. Señales de underperformance y diagnóstico:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Síntoma</th><th style="padding:6px">Causa probable</th><th style="padding:6px">Acción</th></tr>
<tr><td style="padding:6px">Impresiones bajas</td><td style="padding:6px">Targeting muy restrictivo / bid por debajo del floor</td><td style="padding:6px">Expandir geo o audiencia; aumentar bid</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">CTR por debajo del benchmark</td><td style="padding:6px">Creative malo o audiencia incorrecta</td><td style="padding:6px">A/B test de creativos; revisar audiencia</td></tr>
<tr><td style="padding:6px">CPA alto</td><td style="padding:6px">Algoritmo aún aprendiendo o Floodlight mal configurado</td><td style="padding:6px">Esperar 7 días o revisar Floodlight</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Presupuesto sin gastar</td><td style="padding:6px">Frequency cap muy restrictivo o targeting muy nicho</td><td style="padding:6px">Relajar frequency o expandir audiencia</td></tr>
</table><br>
<strong>3. Custom Reports:</strong> crear en la pestaña Reports con dimensiones como Publisher, Device, Geo, Creative Size para identificar los mejores segmentos y asignar más presupuesto.`,
          },
          tags: ['reporting', 'otimização', 'win-rate', 'pacing', 'analytics'],
        },
      ],
    },
  ],
};

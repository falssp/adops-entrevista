window.__adopsData = window.__adopsData || {};
window.__adopsData['atribuicao'] = {
  icon: '📐',
  name: { pt: 'Atribuição & Mensuração', en: 'Attribution & Measurement', es: 'Atribución & Medición' },
  desc: {
    pt: 'Modelos de atribuição, MTA, incrementalidade, MMM, privacy-safe measurement e métricas de negócio.',
    en: 'Attribution models, MTA, incrementality, MMM, privacy-safe measurement and business metrics.',
    es: 'Modelos de atribución, MTA, incrementalidad, MMM, medición privacy-safe y métricas de negocio.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: { pt: 'O que é atribuição em marketing digital e por que ela importa?', en: 'What is attribution in digital marketing and why does it matter?', es: '¿Qué es la atribución en marketing digital y por qué importa?' },
          a: {
            pt: `<strong>Atribuição</strong> é o processo de identificar quais canais, campanhas ou touchpoints contribuíram para uma conversão — e quanto crédito cada um merece.<br><br>
<strong>Por que é fundamental:</strong>
<ul>
  <li>Determina como o budget de marketing é alocado entre canais</li>
  <li>Influencia decisões de escalar ou pausar campanhas</li>
  <li>Afeta o que o Smart Bidding "aprende" sobre o valor de cada interação</li>
  <li>Modelos diferentes podem resultar em alocações de budget radicalmente diferentes</li>
</ul>
<strong>O problema central da atribuição:</strong><br>
Uma conversão raramente é resultado de um único touchpoint. O usuário típico:
<ol>
  <li>Viu um anúncio de Display (awareness)</li>
  <li>Pesquisou no Google e clicou em anúncio de Search (consideração)</li>
  <li>Recebeu um e-mail com promoção (nurturing)</li>
  <li>Clicou em um anúncio de remarketing e comprou (conversão)</li>
</ol>
Qual desses touchpoints merece o crédito pela venda? A resposta depende do modelo escolhido.<br><br>
<strong>Impacto prático:</strong> um anunciante usando Last Click vai subinvestir em Display (que iniciou o processo de descoberta) e superinvestir em remarketing (que só capturou uma intenção já existente).`,
            en: `<strong>Attribution</strong> is the process of identifying which channels, campaigns or touchpoints contributed to a conversion — and how much credit each deserves.<br><br>
<strong>Why it's fundamental:</strong>
<ul>
  <li>Determines how marketing budget is allocated between channels</li>
  <li>Influences decisions to scale or pause campaigns</li>
  <li>Affects what Smart Bidding "learns" about the value of each interaction</li>
  <li>Different models can result in radically different budget allocations</li>
</ul>
<strong>The central attribution problem:</strong><br>
A conversion is rarely the result of a single touchpoint. The typical user:
<ol>
  <li>Saw a Display ad (awareness)</li>
  <li>Searched on Google and clicked a Search ad (consideration)</li>
  <li>Received a promotional email (nurturing)</li>
  <li>Clicked a remarketing ad and purchased (conversion)</li>
</ol>
Which of these touchpoints deserves credit for the sale? The answer depends on the chosen model.<br><br>
<strong>Practical impact:</strong> an advertiser using Last Click will underinvest in Display (which started the discovery process) and overinvest in remarketing (which only captured an already existing intent).`,
            es: `La <strong>atribución</strong> es el proceso de identificar qué canales, campañas o touchpoints contribuyeron a una conversión — y cuánto crédito merece cada uno.<br><br>
<strong>Por qué es fundamental:</strong>
<ul>
  <li>Determina cómo se asigna el presupuesto de marketing entre canales</li>
  <li>Influye en decisiones de escalar o pausar campañas</li>
  <li>Afecta lo que el Smart Bidding "aprende" sobre el valor de cada interacción</li>
  <li>Modelos diferentes pueden resultar en asignaciones de presupuesto radicalmente diferentes</li>
</ul>
<strong>El problema central de la atribución:</strong><br>
Una conversión rara vez es el resultado de un único touchpoint. El usuario típico:
<ol>
  <li>Vio un anuncio de Display (awareness)</li>
  <li>Buscó en Google y hizo clic en un anuncio de Search (consideración)</li>
  <li>Recibió un email con promoción (nurturing)</li>
  <li>Hizo clic en un anuncio de remarketing y compró (conversión)</li>
</ol>
¿Cuál de estos touchpoints merece el crédito por la venta? La respuesta depende del modelo elegido.<br><br>
<strong>Impacto práctico:</strong> un anunciante usando Last Click subestimará Display y sobreinvertirá en remarketing.`,
          },
          tags: ['atribuição', 'touchpoint', 'conversão', 'last-click', 'budget'],
        },
        {
          q: { pt: 'Quais são os principais modelos de atribuição e quando usar cada um?', en: 'What are the main attribution models and when to use each?', es: '¿Cuáles son los principales modelos de atribución y cuándo usar cada uno?' },
          a: {
            pt: `<table>
<tr><th>Modelo</th><th>Lógica</th><th>Crédito</th><th>Quando usar</th></tr>
<tr><td><strong>Last Click</strong></td><td>100% ao último touchpoint</td><td>🔴 Favorece canais de fundo de funil (Search, remarketing)</td><td>Quando só um canal é usado ou início de mensuração</td></tr>
<tr><td><strong>First Click</strong></td><td>100% ao primeiro touchpoint</td><td>🔴 Favorece canais de topo (Display, Social)</td><td>Focar em awareness e descoberta de marca</td></tr>
<tr><td><strong>Linear</strong></td><td>Divide igualmente entre todos os touchpoints</td><td>🟡 Neutro — todos têm o mesmo peso</td><td>Ciclos de compra longos com touchpoints similares</td></tr>
<tr><td><strong>Time Decay</strong></td><td>Mais crédito para touchpoints mais próximos da conversão</td><td>🟡 Favorece canais de fundo de funil mas menos extremo que Last Click</td><td>Vendas com ciclos curtos e influência crescente</td></tr>
<tr><td><strong>Position-Based (U-shape)</strong></td><td>40% primeiro + 40% último + 20% dividido no meio</td><td>🟡 Valoriza descoberta e fechamento</td><td>Quando primeiro e último contato têm valor estratégico claro</td></tr>
<tr><td><strong>Data-Driven (DDC)</strong></td><td>IA analisa todos os caminhos de conversão e distribui crédito por probabilidade real</td><td>🟢 Mais preciso — baseado em dados reais da conta</td><td>Contas com volume suficiente de conversões (≥600/mês recomendado)</td></tr>
</table><br>
<strong>Recomendação geral:</strong> Data-Driven Attribution é o mais preciso — usar sempre que a conta tiver volume suficiente. Para contas menores, Position-Based ou Linear são mais equilibrados que Last Click.`,
            en: `<table>
<tr><th>Model</th><th>Logic</th><th>Credit</th><th>When to use</th></tr>
<tr><td><strong>Last Click</strong></td><td>100% to last touchpoint</td><td>🔴 Favors bottom-of-funnel channels (Search, remarketing)</td><td>When only one channel is used or at start of measurement</td></tr>
<tr><td><strong>First Click</strong></td><td>100% to first touchpoint</td><td>🔴 Favors top channels (Display, Social)</td><td>Focus on awareness and brand discovery</td></tr>
<tr><td><strong>Linear</strong></td><td>Divides equally among all touchpoints</td><td>🟡 Neutral — all have same weight</td><td>Long purchase cycles with similar touchpoints</td></tr>
<tr><td><strong>Time Decay</strong></td><td>More credit to touchpoints closer to conversion</td><td>🟡 Favors bottom-of-funnel but less extreme than Last Click</td><td>Sales with short cycles and growing influence</td></tr>
<tr><td><strong>Position-Based (U-shape)</strong></td><td>40% first + 40% last + 20% divided in middle</td><td>🟡 Values discovery and closing</td><td>When first and last contact have clear strategic value</td></tr>
<tr><td><strong>Data-Driven (DDC)</strong></td><td>AI analyzes all conversion paths and distributes credit by real probability</td><td>🟢 Most accurate — based on real account data</td><td>Accounts with sufficient conversion volume (≥600/month recommended)</td></tr>
</table><br>
<strong>General recommendation:</strong> Data-Driven Attribution is the most accurate — use whenever the account has sufficient volume. For smaller accounts, Position-Based or Linear are more balanced than Last Click.`,
            es: `<table>
<tr><th>Modelo</th><th>Lógica</th><th>Crédito</th><th>Cuándo usar</th></tr>
<tr><td><strong>Last Click</strong></td><td>100% al último touchpoint</td><td>🔴 Favorece canales de fondo de embudo</td><td>Cuando solo se usa un canal o al inicio de la medición</td></tr>
<tr><td><strong>First Click</strong></td><td>100% al primer touchpoint</td><td>🔴 Favorece canales de tope (Display, Social)</td><td>Enfoque en awareness y descubrimiento de marca</td></tr>
<tr><td><strong>Linear</strong></td><td>Divide igualmente entre todos los touchpoints</td><td>🟡 Neutro — todos tienen el mismo peso</td><td>Ciclos de compra largos con touchpoints similares</td></tr>
<tr><td><strong>Time Decay</strong></td><td>Más crédito a touchpoints más cercanos a la conversión</td><td>🟡 Favorece canales de fondo pero menos extremo que Last Click</td><td>Ventas con ciclos cortos</td></tr>
<tr><td><strong>Position-Based</strong></td><td>40% primero + 40% último + 20% dividido en el medio</td><td>🟡 Valora descubrimiento y cierre</td><td>Cuando el primer y último contacto tienen valor estratégico claro</td></tr>
<tr><td><strong>Data-Driven (DDC)</strong></td><td>IA analiza todos los caminos de conversión y distribuye crédito por probabilidad real</td><td>🟢 Más preciso — basado en datos reales de la cuenta</td><td>Cuentas con volumen suficiente de conversiones (≥600/mes)</td></tr>
</table><br>
<strong>Recomendación general:</strong> Data-Driven Attribution es el más preciso. Para cuentas pequeñas, Position-Based o Linear son más equilibrados que Last Click.`,
          },
          tags: ['last-click', 'first-click', 'linear', 'Data-Driven', 'position-based', 'modelos'],
        },
        {
          q: { pt: 'O que é uma janela de atribuição (attribution window) e como ela afeta os resultados?', en: 'What is an attribution window and how does it affect results?', es: '¿Qué es una ventana de atribución y cómo afecta los resultados?' },
          a: {
            pt: `A <strong>janela de atribuição</strong> define o período após um clique ou impressão dentro do qual uma conversão é atribuída ao anúncio.<br><br>
<strong>Tipos de janela:</strong>
<ul>
  <li><strong>Click-through window:</strong> período após o clique. Padrão do mercado: 7-30 dias. Google Ads default: 30 dias.</li>
  <li><strong>View-through window (VTC):</strong> período após uma impressão vista (sem clique). Padrão: 1 dia. Para video: até 7 dias em alguns casos.</li>
</ul>
<strong>Como a janela afeta os resultados:</strong>
<ul>
  <li><strong>Janela maior → mais conversões atribuídas ao canal</strong> → CPA aparente menor, ROAS aparente maior. Pode inflar a performance percebida.</li>
  <li><strong>Janela menor → menos conversões atribuídas</strong> → CPA real mais alto. Pode subvalorizar campanhas com ciclo de compra longo.</li>
</ul>
<strong>Exemplos práticos:</strong>
<ul>
  <li>E-commerce de produto de baixo ticket (decisão rápida): janela de 7 dias é suficiente</li>
  <li>B2B SaaS com ciclo de 3 meses: janela de 90 dias para capturar conversões</li>
  <li>Remarketing: usuário que clicou e voltou em 25 dias → janela de 30 dias captura; janela de 7 dias não captura</li>
</ul>
<strong>View-through attribution — use com cuidado:</strong><br>
VTC de 30 dias em Display pode inflar artificialmente o valor percebido do canal. Questione sempre: o usuário teria convertido mesmo sem ver o anúncio? → Resposta: teste de incrementalidade.`,
            en: `An <strong>attribution window</strong> defines the period after a click or impression within which a conversion is attributed to the ad.<br><br>
<strong>Window types:</strong>
<ul>
  <li><strong>Click-through window:</strong> period after the click. Market standard: 7-30 days. Google Ads default: 30 days.</li>
  <li><strong>View-through window (VTC):</strong> period after a viewed impression (without click). Standard: 1 day. For video: up to 7 days in some cases.</li>
</ul>
<strong>How the window affects results:</strong>
<ul>
  <li><strong>Larger window → more conversions attributed to the channel</strong> → lower apparent CPA, higher apparent ROAS. Can inflate perceived performance.</li>
  <li><strong>Smaller window → fewer conversions attributed</strong> → higher real CPA. Can undervalue campaigns with long purchase cycles.</li>
</ul>
<strong>Practical examples:</strong>
<ul>
  <li>Low-ticket e-commerce (quick decision): 7-day window is sufficient</li>
  <li>B2B SaaS with 3-month cycle: 90-day window to capture conversions</li>
  <li>Remarketing: user who clicked and returned in 25 days → 30-day window captures; 7-day window doesn't</li>
</ul>
<strong>View-through attribution — use with care:</strong><br>
30-day VTC in Display can artificially inflate the channel's perceived value. Always ask: would the user have converted even without seeing the ad? → Answer: incrementality test.`,
            es: `Una <strong>ventana de atribución</strong> define el período después de un clic o impresión dentro del cual se atribuye una conversión al anuncio.<br><br>
<strong>Tipos de ventana:</strong>
<ul>
  <li><strong>Click-through window:</strong> período después del clic. Estándar del mercado: 7-30 días. Google Ads por defecto: 30 días.</li>
  <li><strong>View-through window (VTC):</strong> período después de una impresión vista (sin clic). Estándar: 1 día.</li>
</ul>
<strong>Cómo afecta la ventana a los resultados:</strong>
<ul>
  <li><strong>Ventana mayor → más conversiones atribuidas al canal</strong> → CPA aparente menor, ROAS aparente mayor. Puede inflar el rendimiento percibido.</li>
  <li><strong>Ventana menor → menos conversiones atribuidas</strong> → CPA real más alto. Puede subestimar campañas con ciclo de compra largo.</li>
</ul>
<strong>Ejemplos prácticos:</strong>
<ul>
  <li>E-commerce de producto de bajo ticket (decisión rápida): ventana de 7 días es suficiente</li>
  <li>B2B SaaS con ciclo de 3 meses: ventana de 90 días para capturar conversiones</li>
  <li>Remarketing: usuario que hizo clic y volvió en 25 días → ventana de 30 días captura; ventana de 7 días no captura</li>
</ul>
<strong>View-through attribution — usar con cuidado:</strong><br>
VTC de 30 días en Display puede inflar artificialmente el valor percibido del canal.`,
          },
          tags: ['janela-atribuição', 'click-through', 'view-through', 'VTC', 'conversão', 'CPA'],
        },
        {
          q: { pt: 'Quais são as principais métricas de negócio em mídia digital e como calculá-las?', en: 'What are the main business metrics in digital media and how to calculate them?', es: '¿Cuáles son las principales métricas de negocio en medios digitales y cómo calcularlas?' },
          a: {
            pt: `<strong>Métricas de eficiência de mídia:</strong>
<ul>
  <li><strong>CPC (Custo por Clique):</strong> <code>Gasto ÷ Cliques</code>. Mede o custo de tráfego.</li>
  <li><strong>CPM (Custo por Mil Impressões):</strong> <code>Gasto ÷ Impressões × 1.000</code>. Mede o custo de visibilidade.</li>
  <li><strong>CTR (Click-Through Rate):</strong> <code>Cliques ÷ Impressões × 100</code>. Mede a relevância/atratividade do criativo.</li>
  <li><strong>CVR (Conversion Rate):</strong> <code>Conversões ÷ Cliques × 100</code>. Mede a qualidade do tráfego e da landing page.</li>
  <li><strong>CPA (Custo por Aquisição/Ação):</strong> <code>Gasto ÷ Conversões</code>. Custo de cada lead/venda.</li>
  <li><strong>CPL (Custo por Lead):</strong> variação do CPA para campanhas de geração de leads.</li>
</ul>
<strong>Métricas de retorno:</strong>
<ul>
  <li><strong>ROAS (Return on Ad Spend):</strong> <code>Receita ÷ Gasto</code>. ROAS 4x = cada R$1 investido retornou R$4. Não considera custos de produto.</li>
  <li><strong>ROI (Return on Investment):</strong> <code>(Receita − Custo Total) ÷ Custo Total × 100</code>. Considera todos os custos, não só mídia.</li>
  <li><strong>LTV (Lifetime Value):</strong> <code>Ticket médio × Frequência de compra × Duração do relacionamento</code>. Fundamental para definir CPA máximo sustentável.</li>
  <li><strong>CAC (Custo de Aquisição de Cliente):</strong> <code>Gasto Total em Marketing ÷ Novos Clientes</code>. Inclui todos os canais, não apenas um. LTV/CAC &gt;3 = negócio saudável.</li>
</ul>
<strong>Fórmula de CPA máximo sustentável:</strong><br>
<code>CPA max = LTV × Margem de lucro desejada</code>`,
            en: `<strong>Media efficiency metrics:</strong>
<ul>
  <li><strong>CPC (Cost Per Click):</strong> <code>Spend ÷ Clicks</code>. Measures traffic cost.</li>
  <li><strong>CPM (Cost Per Thousand Impressions):</strong> <code>Spend ÷ Impressions × 1,000</code>. Measures visibility cost.</li>
  <li><strong>CTR (Click-Through Rate):</strong> <code>Clicks ÷ Impressions × 100</code>. Measures creative relevance/attractiveness.</li>
  <li><strong>CVR (Conversion Rate):</strong> <code>Conversions ÷ Clicks × 100</code>. Measures traffic quality and landing page quality.</li>
  <li><strong>CPA (Cost Per Acquisition/Action):</strong> <code>Spend ÷ Conversions</code>. Cost of each lead/sale.</li>
  <li><strong>CPL (Cost Per Lead):</strong> CPA variation for lead generation campaigns.</li>
</ul>
<strong>Return metrics:</strong>
<ul>
  <li><strong>ROAS (Return on Ad Spend):</strong> <code>Revenue ÷ Spend</code>. ROAS 4x = each $1 invested returned $4. Doesn't account for product costs.</li>
  <li><strong>ROI (Return on Investment):</strong> <code>(Revenue − Total Cost) ÷ Total Cost × 100</code>. Considers all costs, not just media.</li>
  <li><strong>LTV (Lifetime Value):</strong> <code>Avg Ticket × Purchase Frequency × Relationship Duration</code>. Essential for defining max sustainable CPA.</li>
  <li><strong>CAC (Customer Acquisition Cost):</strong> <code>Total Marketing Spend ÷ New Customers</code>. Includes all channels. LTV/CAC &gt;3 = healthy business.</li>
</ul>
<strong>Formula for max sustainable CPA:</strong><br>
<code>Max CPA = LTV × Desired Profit Margin</code>`,
            es: `<strong>Métricas de eficiencia de medios:</strong>
<ul>
  <li><strong>CPC (Costo por Clic):</strong> <code>Gasto ÷ Clics</code>. Mide el costo de tráfico.</li>
  <li><strong>CPM (Costo por Mil Impresiones):</strong> <code>Gasto ÷ Impresiones × 1.000</code>. Mide el costo de visibilidad.</li>
  <li><strong>CTR (Click-Through Rate):</strong> <code>Clics ÷ Impresiones × 100</code>. Mide la relevancia/atractivo del creativo.</li>
  <li><strong>CVR (Conversion Rate):</strong> <code>Conversiones ÷ Clics × 100</code>. Mide la calidad del tráfico y la landing page.</li>
  <li><strong>CPA (Costo por Adquisición/Acción):</strong> <code>Gasto ÷ Conversiones</code>. Costo de cada lead/venta.</li>
  <li><strong>CPL (Costo por Lead):</strong> variación del CPA para campañas de generación de leads.</li>
</ul>
<strong>Métricas de retorno:</strong>
<ul>
  <li><strong>ROAS:</strong> <code>Ingresos ÷ Gasto</code>. No considera costos de producto.</li>
  <li><strong>ROI:</strong> <code>(Ingresos − Costo Total) ÷ Costo Total × 100</code>. Considera todos los costos.</li>
  <li><strong>LTV (Lifetime Value):</strong> <code>Ticket promedio × Frecuencia de compra × Duración de la relación</code>.</li>
  <li><strong>CAC (Costo de Adquisición de Cliente):</strong> <code>Gasto Total en Marketing ÷ Nuevos Clientes</code>. LTV/CAC &gt;3 = negocio saludable.</li>
</ul>
<strong>Fórmula de CPA máximo sostenible:</strong><br>
<code>CPA max = LTV × Margen de beneficio deseado</code>`,
          },
          tags: ['CPA', 'ROAS', 'ROI', 'LTV', 'CAC', 'CTR', 'CVR', 'CPM', 'CPC', 'métricas'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: { pt: 'O que é MTA (Multi-Touch Attribution) e quais são seus desafios?', en: 'What is MTA (Multi-Touch Attribution) and what are its challenges?', es: '¿Qué es el MTA (Multi-Touch Attribution) y cuáles son sus desafíos?' },
          a: {
            pt: `<strong>MTA (Multi-Touch Attribution)</strong> é uma abordagem de mensuração que distribui crédito de conversão entre múltiplos touchpoints do customer journey, usando regras (rule-based) ou algoritmos (data-driven) para determinar a contribuição de cada interação.<br><br>
<strong>Tipos de MTA:</strong>
<ul>
  <li><strong>Rule-Based MTA:</strong> modelos como Linear, Time Decay, Position-Based — regras fixas independentemente dos dados reais</li>
  <li><strong>Algorithmic/Data-Driven MTA:</strong> usa machine learning para analisar padrões reais de conversão e distribuir crédito com base na probabilidade que cada touchpoint contribuiu. Ex: Google Data-Driven Attribution, Rockerbox, Northbeam, Triple Whale</li>
</ul>
<strong>Desafios críticos do MTA:</strong>
<ul>
  <li><strong>Dependência de cookies:</strong> touchpoints cross-device e cross-browser são "perdidos" sem um identificador persistente. Com o fim dos 3rd party cookies, MTA perdeu precisão significativa.</li>
  <li><strong>Walled gardens:</strong> Meta e Google não compartilham dados de impressão entre si. Um usuário que viu um anúncio no Instagram e depois clicou em um Google Search não é rastreável de forma unificada.</li>
  <li><strong>Offline touchpoints:</strong> visitas a lojas físicas, chamadas telefônicas e eventos não são capturados no MTA tradicional.</li>
  <li><strong>Correlação vs. Causalidade:</strong> MTA mede o que aconteceu antes de uma conversão, mas não prova que o touchpoint CAUSOU a conversão (problema de incrementalidade).</li>
  <li><strong>Custo e complexidade:</strong> implementar MTA de qualidade requer investimento significativo em ferramentas e dados.</li>
</ul>
<strong>Ferramentas de MTA:</strong> Rockerbox, Northbeam, Triple Whale, Measured, Nielsen Attribution, Google Ads Data Hub.`,
            en: `<strong>MTA (Multi-Touch Attribution)</strong> is a measurement approach that distributes conversion credit among multiple customer journey touchpoints, using rules (rule-based) or algorithms (data-driven) to determine each interaction's contribution.<br><br>
<strong>MTA types:</strong>
<ul>
  <li><strong>Rule-Based MTA:</strong> models like Linear, Time Decay, Position-Based — fixed rules regardless of real data</li>
  <li><strong>Algorithmic/Data-Driven MTA:</strong> uses machine learning to analyze real conversion patterns and distribute credit based on probability each touchpoint contributed. E.g.: Google Data-Driven Attribution, Rockerbox, Northbeam, Triple Whale</li>
</ul>
<strong>Critical MTA challenges:</strong>
<ul>
  <li><strong>Cookie dependency:</strong> cross-device and cross-browser touchpoints are "lost" without a persistent identifier. With the end of 3rd party cookies, MTA has lost significant accuracy.</li>
  <li><strong>Walled gardens:</strong> Meta and Google don't share impression data with each other. A user who saw an Instagram ad and then clicked a Google Search can't be tracked in a unified way.</li>
  <li><strong>Offline touchpoints:</strong> store visits, phone calls and events aren't captured in traditional MTA.</li>
  <li><strong>Correlation vs. Causation:</strong> MTA measures what happened before a conversion, but doesn't prove the touchpoint CAUSED the conversion (incrementality problem).</li>
  <li><strong>Cost and complexity:</strong> implementing quality MTA requires significant investment in tools and data.</li>
</ul>
<strong>MTA tools:</strong> Rockerbox, Northbeam, Triple Whale, Measured, Nielsen Attribution, Google Ads Data Hub.`,
            es: `El <strong>MTA (Multi-Touch Attribution)</strong> es un enfoque de medición que distribuye el crédito de conversión entre múltiples touchpoints del customer journey, usando reglas (rule-based) o algoritmos (data-driven) para determinar la contribución de cada interacción.<br><br>
<strong>Tipos de MTA:</strong>
<ul>
  <li><strong>Rule-Based MTA:</strong> modelos como Linear, Time Decay, Position-Based — reglas fijas independientemente de los datos reales</li>
  <li><strong>Algorithmic/Data-Driven MTA:</strong> usa machine learning para analizar patrones reales de conversión. Ej: Google Data-Driven Attribution, Rockerbox, Northbeam, Triple Whale</li>
</ul>
<strong>Desafíos críticos del MTA:</strong>
<ul>
  <li><strong>Dependencia de cookies:</strong> los touchpoints cross-device y cross-browser se "pierden" sin un identificador persistente. Con el fin de las cookies de terceros, el MTA perdió precisión significativa.</li>
  <li><strong>Walled gardens:</strong> Meta y Google no comparten datos de impresión entre sí.</li>
  <li><strong>Touchpoints offline:</strong> visitas a tiendas físicas, llamadas telefónicas y eventos no se capturan en el MTA tradicional.</li>
  <li><strong>Correlación vs. Causalidad:</strong> el MTA mide lo que sucedió antes de una conversión, pero no prueba que el touchpoint CAUSÓ la conversión.</li>
  <li><strong>Costo y complejidad:</strong> implementar MTA de calidad requiere inversión significativa.</li>
</ul>
<strong>Herramientas de MTA:</strong> Rockerbox, Northbeam, Triple Whale, Measured, Nielsen Attribution, Google Ads Data Hub.`,
          },
          tags: ['MTA', 'Multi-Touch', 'Data-Driven', 'cookie', 'walled-garden', 'causalidade'],
        },
        {
          q: { pt: 'O que é MMM (Marketing Mix Modeling) e quando ele é preferível ao MTA?', en: 'What is MMM (Marketing Mix Modeling) and when is it preferable to MTA?', es: '¿Qué es el MMM (Marketing Mix Modeling) y cuándo es preferible al MTA?' },
          a: {
            pt: `<strong>MMM (Marketing Mix Modeling)</strong> é um modelo estatístico (tipicamente regressão) que analisa dados históricos de vendas e investimentos em marketing para estimar o impacto de cada canal no resultado de negócio — sem depender de cookies, pixels ou dados individuais.<br><br>
<strong>Como funciona:</strong>
<ul>
  <li>Inputs: dados históricos de venda (semanas/meses), investimento por canal, variáveis externas (sazonalidade, preço, promoções, fatores econômicos)</li>
  <li>Output: coeficientes de impacto de cada variável nas vendas → ROI estimado por canal</li>
  <li>Permite simulações: "se eu aumentar 20% o budget de TV e reduzir 20% de Search, qual o impacto projetado nas vendas?"</li>
</ul>
<strong>MMM vs. MTA — quando usar cada um:</strong>
<table>
<tr><th>Critério</th><th>MMM</th><th>MTA</th></tr>
<tr><td>Privacidade</td><td>✅ Privacy-safe — dados agregados</td><td>❌ Depende de cookies/IDs individuais</td></tr>
<tr><td>Escopo</td><td>Todos os canais, incluindo offline (TV, OOH, rádio)</td><td>Apenas canais digitais rastreáveis</td></tr>
<tr><td>Granularidade</td><td>Baixa — visão macro, semanal/mensal</td><td>Alta — nível de campanha, diário</td></tr>
<tr><td>Latência</td><td>Alta — requer histórico de meses/anos</td><td>Baixa — próximo do tempo real</td></tr>
<tr><td>Custo</td><td>Alto (análise estatística complexa ou ferramentas especializadas)</td><td>Médio a Alto</td></tr>
<tr><td>Ideal para</td><td>Planejamento estratégico de budget, campanhas de branding, canais offline</td><td>Otimização tática de campanhas digitais</td></tr>
</table><br>
<strong>Tendência atual:</strong> com o declínio dos cookies, o MMM voltou a ganhar relevância como principal framework de mensuração. Meta, Google (Meridian — open source) e Nielsen oferecem soluções de MMM próprias.`,
            en: `<strong>MMM (Marketing Mix Modeling)</strong> is a statistical model (typically regression) that analyzes historical sales and marketing investment data to estimate the impact of each channel on business results — without depending on cookies, pixels or individual data.<br><br>
<strong>How it works:</strong>
<ul>
  <li>Inputs: historical sales data (weeks/months), investment by channel, external variables (seasonality, price, promotions, economic factors)</li>
  <li>Output: impact coefficients of each variable on sales → estimated ROI by channel</li>
  <li>Enables simulations: "if I increase TV budget by 20% and decrease Search by 20%, what's the projected impact on sales?"</li>
</ul>
<strong>MMM vs. MTA — when to use each:</strong>
<table>
<tr><th>Criterion</th><th>MMM</th><th>MTA</th></tr>
<tr><td>Privacy</td><td>✅ Privacy-safe — aggregated data</td><td>❌ Depends on cookies/individual IDs</td></tr>
<tr><td>Scope</td><td>All channels, including offline (TV, OOH, radio)</td><td>Only trackable digital channels</td></tr>
<tr><td>Granularity</td><td>Low — macro view, weekly/monthly</td><td>High — campaign level, daily</td></tr>
<tr><td>Latency</td><td>High — requires months/years of history</td><td>Low — near real-time</td></tr>
<tr><td>Cost</td><td>High (complex statistical analysis or specialized tools)</td><td>Medium to High</td></tr>
<tr><td>Ideal for</td><td>Strategic budget planning, branding campaigns, offline channels</td><td>Tactical optimization of digital campaigns</td></tr>
</table><br>
<strong>Current trend:</strong> with cookie decline, MMM has regained relevance as the primary measurement framework. Meta, Google (Meridian — open source) and Nielsen offer their own MMM solutions.`,
            es: `El <strong>MMM (Marketing Mix Modeling)</strong> es un modelo estadístico (típicamente regresión) que analiza datos históricos de ventas e inversiones en marketing para estimar el impacto de cada canal en el resultado de negocio — sin depender de cookies, píxeles o datos individuales.<br><br>
<strong>Cómo funciona:</strong>
<ul>
  <li>Inputs: datos históricos de ventas (semanas/meses), inversión por canal, variables externas (estacionalidad, precio, promociones, factores económicos)</li>
  <li>Output: coeficientes de impacto de cada variable en las ventas → ROI estimado por canal</li>
  <li>Permite simulaciones: "si aumento un 20% el presupuesto de TV y reduzco un 20% el de Search, ¿cuál es el impacto proyectado en ventas?"</li>
</ul>
<strong>MMM vs. MTA — cuándo usar cada uno:</strong>
<table>
<tr><th>Criterio</th><th>MMM</th><th>MTA</th></tr>
<tr><td>Privacidad</td><td>✅ Privacy-safe — datos agregados</td><td>❌ Depende de cookies/IDs individuales</td></tr>
<tr><td>Alcance</td><td>Todos los canales, incluyendo offline</td><td>Solo canales digitales rastreables</td></tr>
<tr><td>Granularidad</td><td>Baja — visión macro, semanal/mensual</td><td>Alta — nivel de campaña, diario</td></tr>
<tr><td>Latencia</td><td>Alta — requiere meses/años de historial</td><td>Baja — cercano al tiempo real</td></tr>
<tr><td>Ideal para</td><td>Planificación estratégica, campañas de branding, canales offline</td><td>Optimización táctica de campañas digitales</td></tr>
</table><br>
<strong>Tendencia actual:</strong> con el declive de las cookies, el MMM volvió a ganar relevancia. Meta, Google (Meridian — open source) y Nielsen ofrecen soluciones propias de MMM.`,
          },
          tags: ['MMM', 'Marketing-Mix', 'regressão', 'privacidade', 'MTA', 'ROI', 'Meridian'],
        },
        {
          q: { pt: 'O que é incrementalidade e como medi-la em campanhas digitais?', en: 'What is incrementality and how to measure it in digital campaigns?', es: '¿Qué es la incrementalidad y cómo medirla en campañas digitales?' },
          a: {
            pt: `<strong>Incrementalidade</strong> responde à pergunta fundamental: <em>"Quantas conversões aconteceram POR CAUSA do anúncio que não teriam ocorrido sem ele?"</em><br><br>
<strong>Por que é a métrica mais honesta de atribuição:</strong>
<ul>
  <li>MTA e Last Click medem correlação — o anúncio estava na jornada, mas não prova causalidade</li>
  <li>Retargeting sempre parece eficiente no last click porque atinge usuários já propensos a converter</li>
  <li>Incrementalidade elimina o viés de seleção: compara dois grupos idênticos, um exposto e um não exposto</li>
</ul>
<strong>Métodos de teste de incrementalidade:</strong><br><br>
<strong>1. Ghost Ads / PSA Test (Holdout Test):</strong>
<ul>
  <li>Dividir audiência aleatoriamente: 85% vê o anúncio (grupo exposto), 15% vê anúncio de PSA/serviço público (grupo controle)</li>
  <li>Comparar CVR entre grupos após o período</li>
  <li>Conversões incrementais = (CVR exposto − CVR controle) × tamanho do grupo exposto</li>
  <li>Lift incremental = (CVR exposto − CVR controle) ÷ CVR controle × 100</li>
</ul>
<strong>2. Geo-Based Holdout:</strong>
<ul>
  <li>Ativar campanha em mercados/regiões selecionadas, manter outras como controle</li>
  <li>Comparar crescimento de vendas entre mercados com e sem campanha</li>
  <li>Mais confiável para campanhas de awareness (TV, OOH, branding digital)</li>
</ul>
<strong>3. Time-Based (Interrupted Time Series):</strong>
<ul>
  <li>Comparar performance antes vs. depois da ativação de uma campanha</li>
  <li>Mais simples mas menos preciso — não controla variáveis externas</li>
</ul>
<strong>Ferramentas:</strong> Meta Conversion Lift, Google Ads Conversion Lift (YouTube), The Trade Desk Kokai, Measured.com, Northbeam, Nielsen MTA.`,
            en: `<strong>Incrementality</strong> answers the fundamental question: <em>"How many conversions happened BECAUSE OF the ad that wouldn't have occurred without it?"</em><br><br>
<strong>Why it's the most honest attribution metric:</strong>
<ul>
  <li>MTA and Last Click measure correlation — the ad was in the journey, but doesn't prove causation</li>
  <li>Retargeting always looks efficient in last click because it targets users already likely to convert</li>
  <li>Incrementality eliminates selection bias: compares two identical groups, one exposed and one not</li>
</ul>
<strong>Incrementality testing methods:</strong><br><br>
<strong>1. Ghost Ads / PSA Test (Holdout Test):</strong>
<ul>
  <li>Randomly split audience: 85% see the ad (exposed group), 15% see PSA/public service ad (control group)</li>
  <li>Compare CVR between groups after the period</li>
  <li>Incremental conversions = (Exposed CVR − Control CVR) × exposed group size</li>
  <li>Incremental lift = (Exposed CVR − Control CVR) ÷ Control CVR × 100</li>
</ul>
<strong>2. Geo-Based Holdout:</strong>
<ul>
  <li>Activate campaign in selected markets/regions, keep others as control</li>
  <li>Compare sales growth between markets with and without campaign</li>
  <li>More reliable for awareness campaigns (TV, OOH, digital branding)</li>
</ul>
<strong>3. Time-Based (Interrupted Time Series):</strong>
<ul>
  <li>Compare performance before vs. after campaign activation</li>
  <li>Simpler but less accurate — doesn't control external variables</li>
</ul>
<strong>Tools:</strong> Meta Conversion Lift, Google Ads Conversion Lift (YouTube), The Trade Desk Kokai, Measured.com, Northbeam, Nielsen MTA.`,
            es: `La <strong>incrementalidad</strong> responde a la pregunta fundamental: <em>"¿Cuántas conversiones ocurrieron POR CAUSA del anuncio que no habrían ocurrido sin él?"</em><br><br>
<strong>Por qué es la métrica más honesta de atribución:</strong>
<ul>
  <li>MTA y Last Click miden correlación — el anuncio estaba en el journey, pero no prueba causalidad</li>
  <li>El retargeting siempre parece eficiente en last click porque alcanza usuarios ya propensos a convertir</li>
  <li>La incrementalidad elimina el sesgo de selección: compara dos grupos idénticos, uno expuesto y otro no</li>
</ul>
<strong>Métodos de test de incrementalidad:</strong><br><br>
<strong>1. Ghost Ads / PSA Test (Holdout Test):</strong>
<ul>
  <li>Dividir audiencia aleatoriamente: 85% ve el anuncio (grupo expuesto), 15% ve anuncio de PSA (grupo control)</li>
  <li>Comparar CVR entre grupos después del período</li>
  <li>Conversiones incrementales = (CVR expuesto − CVR control) × tamaño del grupo expuesto</li>
  <li>Lift incremental = (CVR expuesto − CVR control) ÷ CVR control × 100</li>
</ul>
<strong>2. Geo-Based Holdout:</strong>
<ul>
  <li>Activar campaña en mercados/regiones seleccionadas, mantener otras como control</li>
  <li>Más confiable para campañas de awareness</li>
</ul>
<strong>3. Time-Based (Interrupted Time Series):</strong>
<ul>
  <li>Comparar performance antes vs. después de la activación de una campaña</li>
  <li>Más simple pero menos preciso</li>
</ul>
<strong>Herramientas:</strong> Meta Conversion Lift, Google Ads Conversion Lift, The Trade Desk Kokai, Measured.com, Northbeam.`,
          },
          tags: ['incrementalidade', 'holdout', 'Ghost-Ads', 'causalidade', 'lift', 'atribuição'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: { pt: 'Como construir um framework de mensuração robusto em um mundo pós-cookie?', en: 'How to build a robust measurement framework in a post-cookie world?', es: '¿Cómo construir un framework de medición robusto en un mundo post-cookie?' },
          a: {
            pt: `<strong>O desafio:</strong> com cookies de terceiros extintos e iOS 14.5+ limitando tracking mobile, nenhuma solução isolada fornece uma visão completa. A resposta é uma abordagem triangular.<br><br>
<strong>Framework de Mensuração em 3 camadas (Triangulation Approach):</strong><br><br>
<strong>Camada 1 — Marketing Mix Modeling (visão macro):</strong>
<ul>
  <li>Responde: qual o ROI de cada canal ao longo do tempo?</li>
  <li>Inputs: dados de vendas + investimento por canal + variáveis externas</li>
  <li>Ideal para planejamento trimestral e anual de budget</li>
  <li>Ferramentas: Google Meridian (open source), Meta Robyn (open source), Nielsen, Analytic Partners</li>
</ul>
<strong>Camada 2 — Testes de Incrementalidade (validação causal):</strong>
<ul>
  <li>Responde: este canal/campanha REALMENTE gerou conversões incrementais?</li>
  <li>Geo holdouts, PSA tests, time-based tests</li>
  <li>Executar trimestralmente por canal/objetivo</li>
  <li>Ferramentas: Meta Conversion Lift, Google Brand Lift, Measured.com</li>
</ul>
<strong>Camada 3 — In-Platform Attribution (otimização tática):</strong>
<ul>
  <li>Responde: quais campanhas/keywords/audiências performam melhor dentro de cada plataforma?</li>
  <li>Google Ads DDC, Meta CAPI, GA4 — imperfeito mas útil para decisões táticas</li>
  <li>Complementar com Conversions API (CAPI) para melhorar o matching sem cookies</li>
</ul>
<strong>Implementações críticas:</strong>
<ul>
  <li><strong>Conversions API (CAPI) / Server-Side Tracking:</strong> enviar eventos de conversão diretamente do servidor do anunciante para Meta/TikTok/Google — bypassa bloqueadores e iOS 14 restrictions</li>
  <li><strong>Google Enhanced Conversions:</strong> hash de emails/telefones para melhorar matching no Google</li>
  <li><strong>GA4 + BigQuery:</strong> centralizar dados first-party para análises próprias</li>
  <li><strong>1st Party Data Strategy:</strong> login, CRM, email marketing — dados próprios são a base de qualquer estratégia robusta</li>
</ul>`,
            en: `<strong>The challenge:</strong> with third-party cookies extinct and iOS 14.5+ limiting mobile tracking, no single solution provides a complete view. The answer is a triangular approach.<br><br>
<strong>3-Layer Measurement Framework (Triangulation Approach):</strong><br><br>
<strong>Layer 1 — Marketing Mix Modeling (macro view):</strong>
<ul>
  <li>Answers: what's the ROI of each channel over time?</li>
  <li>Inputs: sales data + investment by channel + external variables</li>
  <li>Ideal for quarterly and annual budget planning</li>
  <li>Tools: Google Meridian (open source), Meta Robyn (open source), Nielsen, Analytic Partners</li>
</ul>
<strong>Layer 2 — Incrementality Tests (causal validation):</strong>
<ul>
  <li>Answers: did this channel/campaign REALLY generate incremental conversions?</li>
  <li>Geo holdouts, PSA tests, time-based tests</li>
  <li>Run quarterly per channel/objective</li>
  <li>Tools: Meta Conversion Lift, Google Brand Lift, Measured.com</li>
</ul>
<strong>Layer 3 — In-Platform Attribution (tactical optimization):</strong>
<ul>
  <li>Answers: which campaigns/keywords/audiences perform best within each platform?</li>
  <li>Google Ads DDC, Meta CAPI, GA4 — imperfect but useful for tactical decisions</li>
  <li>Complement with Conversions API (CAPI) to improve matching without cookies</li>
</ul>
<strong>Critical implementations:</strong>
<ul>
  <li><strong>Conversions API (CAPI) / Server-Side Tracking:</strong> send conversion events directly from advertiser's server to Meta/TikTok/Google — bypasses blockers and iOS 14 restrictions</li>
  <li><strong>Google Enhanced Conversions:</strong> hash of emails/phones to improve matching in Google</li>
  <li><strong>GA4 + BigQuery:</strong> centralize first-party data for own analyses</li>
  <li><strong>1st Party Data Strategy:</strong> login, CRM, email marketing — own data is the foundation of any robust strategy</li>
</ul>`,
            es: `<strong>El desafío:</strong> con las cookies de terceros extintas e iOS 14.5+ limitando el tracking móvil, ninguna solución aislada proporciona una visión completa.<br><br>
<strong>Framework de Medición en 3 capas (Triangulation Approach):</strong><br><br>
<strong>Capa 1 — Marketing Mix Modeling (visión macro):</strong>
<ul>
  <li>Responde: ¿cuál es el ROI de cada canal a lo largo del tiempo?</li>
  <li>Inputs: datos de ventas + inversión por canal + variables externas</li>
  <li>Ideal para planificación trimestral y anual de presupuesto</li>
  <li>Herramientas: Google Meridian (open source), Meta Robyn (open source), Nielsen</li>
</ul>
<strong>Capa 2 — Tests de Incrementalidad (validación causal):</strong>
<ul>
  <li>Responde: ¿este canal/campaña REALMENTE generó conversiones incrementales?</li>
  <li>Geo holdouts, PSA tests, tests basados en tiempo</li>
  <li>Ejecutar trimestralmente por canal/objetivo</li>
</ul>
<strong>Capa 3 — Atribución In-Platform (optimización táctica):</strong>
<ul>
  <li>Responde: ¿qué campañas/keywords/audiencias funcionan mejor dentro de cada plataforma?</li>
  <li>Google Ads DDC, Meta CAPI, GA4 — imperfecto pero útil para decisiones tácticas</li>
</ul>
<strong>Implementaciones críticas:</strong>
<ul>
  <li><strong>Conversions API (CAPI) / Server-Side Tracking:</strong> enviar eventos de conversión directamente desde el servidor del anunciante — bypasea bloqueadores y restricciones de iOS 14</li>
  <li><strong>Google Enhanced Conversions:</strong> hash de emails/teléfonos para mejorar el matching</li>
  <li><strong>GA4 + BigQuery:</strong> centralizar datos first-party para análisis propios</li>
  <li><strong>1st Party Data Strategy:</strong> login, CRM, email marketing — los datos propios son la base de cualquier estrategia robusta</li>
</ul>`,
          },
          tags: ['MMM', 'incrementalidade', 'CAPI', 'cookieless', '1st-party', 'server-side', 'Meridian', 'GA4'],
        },
      ],
    },
  ],
};

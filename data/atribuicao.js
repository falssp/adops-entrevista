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

// ── APPEND: Atribuição expandida ──
;(function(){
const d = window.__adopsData['atribuicao'];
d.tiers[0].questions.push(
  {
    q:{pt:'O que é MMM (Media Mix Modeling) e como ele funciona?',en:'What is MMM (Media Mix Modeling) and how does it work?',es:'¿Qué es el MMM (Media Mix Modeling) y cómo funciona?'},
    a:{
      pt:`O <strong>Media Mix Modeling (MMM)</strong> é um método estatístico que usa dados históricos de gasto em mídia e resultados de negócio para estimar a contribuição de cada canal na receita total — sem depender de cookies ou dados individuais de usuário.<br><br>
<strong>Como funciona:</strong>
<ul>
  <li>Coleta dados históricos: gasto semanal/mensal por canal (TV, Google, Meta, OOH), variáveis externas (sazonalidade, preço, competição) e resultado de negócio (vendas, receita)</li>
  <li>Modelo de regressão múltipla ou Bayesiano identifica correlação entre variações de gasto e variações de resultado</li>
  <li>Gera curvas de resposta por canal: quanto cada R$1 adicional em cada canal gera de receita incremental</li>
  <li>Permite simular cenários: "se realocarmos 20% do budget de TV para Google, o que acontece?"</li>
</ul>
<strong>MMM vs. Atribuição multi-touch (MTA):</strong>
<table>
<tr><th>Aspecto</th><th>MMM</th><th>MTA</th></tr>
<tr><td>Dados necessários</td><td>Agregados (gasto + resultado)</td><td>Individuais (cookies, IDs)</td></tr>
<tr><td>Canais cobertos</td><td>Todos (online + offline)</td><td>Apenas digitais rastreáveis</td></tr>
<tr><td>Privacy-safe</td><td>✅ Sim</td><td>❌ Depende de consentimento</td></tr>
<tr><td>Velocidade</td><td>Semanas/meses de dados</td><td>Tempo real</td></tr>
<tr><td>Melhor uso</td><td>Alocação estratégica de budget</td><td>Otimização tática de campanha</td></tr>
</table><br>
<strong>Por que MMM voltou a ser relevante:</strong>
<ul>
  <li>Fim dos 3rd party cookies e iOS 14 limitaram a MTA baseada em usuário individual</li>
  <li>MMM é naturalmente privacy-safe — trabalha com dados agregados</li>
  <li>Google (Meridian), Meta (Robyn) e startups como Recast, Northbeam lançaram soluções modernas de MMM</li>
</ul>`,
      en:`<strong>Media Mix Modeling (MMM)</strong> is a statistical method that uses historical media spend data and business results to estimate each channel's contribution to total revenue — without depending on cookies or individual user data.<br><br>
<strong>How it works:</strong>
<ul>
  <li>Collects historical data: weekly/monthly spend by channel (TV, Google, Meta, OOH), external variables (seasonality, pricing, competition) and business result (sales, revenue)</li>
  <li>Multiple regression or Bayesian model identifies correlation between spend variations and result variations</li>
  <li>Generates response curves per channel: how much each additional $1 in each channel generates in incremental revenue</li>
</ul>
<strong>MMM vs. Multi-touch Attribution (MTA):</strong>
<table>
<tr><th>Aspect</th><th>MMM</th><th>MTA</th></tr>
<tr><td>Required data</td><td>Aggregated (spend + result)</td><td>Individual (cookies, IDs)</td></tr>
<tr><td>Channels covered</td><td>All (online + offline)</td><td>Trackable digitals only</td></tr>
<tr><td>Privacy-safe</td><td>✅ Yes</td><td>❌ Depends on consent</td></tr>
<tr><td>Best use</td><td>Strategic budget allocation</td><td>Tactical campaign optimization</td></tr>
</table><br>
<strong>Why MMM became relevant again:</strong> end of 3rd party cookies and iOS 14 limited user-individual MTA. MMM is naturally privacy-safe. Google (Meridian), Meta (Robyn) and startups like Recast, Northbeam launched modern MMM solutions.`,
      es:`El <strong>Media Mix Modeling (MMM)</strong> es un método estadístico que usa datos históricos de gasto en medios y resultados de negocio para estimar la contribución de cada canal en los ingresos totales — sin depender de cookies ni datos individuales de usuario.<br><br>
<strong>Cómo funciona:</strong>
<ul>
  <li>Recopila datos históricos: gasto semanal/mensual por canal, variables externas (estacionalidad, precios, competencia) y resultado de negocio</li>
  <li>Modelo de regresión múltiple o Bayesiano identifica correlación entre variaciones de gasto y resultado</li>
  <li>Genera curvas de respuesta por canal: cuánto genera cada €/R$1 adicional en cada canal</li>
</ul>
<strong>MMM vs. Atribución multi-touch (MTA):</strong>
<table>
<tr><th>Aspecto</th><th>MMM</th><th>MTA</th></tr>
<tr><td>Datos necesarios</td><td>Agregados</td><td>Individuales (cookies, IDs)</td></tr>
<tr><td>Canales cubiertos</td><td>Todos (online + offline)</td><td>Solo digitales rastreables</td></tr>
<tr><td>Privacy-safe</td><td>✅ Sí</td><td>❌ Depende de consentimiento</td></tr>
<tr><td>Mejor uso</td><td>Asignación estratégica de presupuesto</td><td>Optimización táctica de campaña</td></tr>
</table>`,
    },
    tags:['MMM','Media-Mix-Modeling','atribuição','privacy','Bayesian','Robyn','Meridian','budget'],
  },
  {
    q:{pt:'O que é Incrementality Testing e como fazer um teste de holdout?',en:'What is Incrementality Testing and how to run a holdout test?',es:'¿Qué es el Incrementality Testing y cómo realizar un test de holdout?'},
    a:{
      pt:`<strong>Incrementality Testing</strong> mede o impacto <em>causal</em> de uma campanha — quanto de resultado adicional ela gerou que não teria acontecido sem ela. É a única forma de medir o efeito real (vs. atribuição, que apenas correlaciona).<br><br>
<strong>O problema da atribuição clássica:</strong>
<ul>
  <li>Usuário que ia comprar de qualquer forma clica no anúncio → a atribuição credita a conversão ao anúncio</li>
  <li>Resultado: ROAS inflado, CPA subestimado — a campanha parece mais eficiente do que é</li>
</ul>
<strong>Como funciona um Holdout Test (teste de grupo controle):</strong>
<ol>
  <li><strong>Dividir a audiência:</strong> aleatoriamente, separar um grupo de controle (10-20% da audiência alvo) que NÃO receberá o anúncio</li>
  <li><strong>Expor o grupo de teste:</strong> o restante da audiência recebe a campanha normalmente</li>
  <li><strong>Medir por período suficiente:</strong> mínimo 2-4 semanas para ter significância estatística</li>
  <li><strong>Calcular o uplift incremental:</strong><br>
  <code>Incrementalidade = (conversões do grupo exposto - conversões do grupo controle) / conversões do grupo controle</code></li>
  <li><strong>ROAS incremental:</strong> <code>Receita incremental / Gasto em mídia</code> — mais real que o ROAS de atribuição</li>
</ol>
<strong>Implementação por plataforma:</strong>
<ul>
  <li><strong>Meta:</strong> Meta Experiments → Conversion Lift Study (holdout nativo dentro do Meta)</li>
  <li><strong>Google:</strong> Google Ads → Experiments → Conversion Lift ou Geographic Experiment</li>
  <li><strong>Geo-based test:</strong> pausar campanha em regiões específicas e comparar resultado com regiões ativas — funciona para qualquer canal, incluindo offline</li>
</ul>
<strong>Quando usar:</strong>
<ul>
  <li>Antes de escalar um canal significativamente</li>
  <li>Quando o ROAS reportado parece "bom demais"</li>
  <li>Para justificar budget de brand awareness (difícil de atribuir por métodos clássicos)</li>
</ul>`,
      en:`<strong>Incrementality Testing</strong> measures the <em>causal</em> impact of a campaign — how much additional result it generated that wouldn't have happened without it. It's the only way to measure real effect (vs. attribution, which only correlates).<br><br>
<strong>The classic attribution problem:</strong>
<ul>
  <li>User who was going to buy anyway clicks the ad → attribution credits conversion to the ad</li>
  <li>Result: inflated ROAS, underestimated CPA</li>
</ul>
<strong>How a Holdout Test (control group test) works:</strong>
<ol>
  <li><strong>Split audience:</strong> randomly separate a control group (10-20% of target audience) that will NOT receive the ad</li>
  <li><strong>Expose test group:</strong> rest of audience receives campaign normally</li>
  <li><strong>Measure for sufficient period:</strong> minimum 2-4 weeks for statistical significance</li>
  <li><strong>Calculate incremental uplift:</strong><br>
  <code>Incrementality = (exposed group conversions - control group conversions) / control group conversions</code></li>
  <li><strong>Incremental ROAS:</strong> <code>Incremental revenue / Media spend</code></li>
</ol>
<strong>Implementation by platform:</strong>
<ul>
  <li><strong>Meta:</strong> Meta Experiments → Conversion Lift Study</li>
  <li><strong>Google:</strong> Google Ads → Experiments → Conversion Lift or Geographic Experiment</li>
  <li><strong>Geo-based test:</strong> pause campaign in specific regions and compare result with active regions</li>
</ul>`,
      es:`El <strong>Incrementality Testing</strong> mide el impacto <em>causal</em> de una campaña — cuánto resultado adicional generó que no habría ocurrido sin ella.<br><br>
<strong>El problema de la atribución clásica:</strong>
<ul>
  <li>Un usuario que iba a comprar de todas formas hace clic en el anuncio → la atribución acredita la conversión al anuncio</li>
  <li>Resultado: ROAS inflado, CPA subestimado</li>
</ul>
<strong>Cómo funciona un Holdout Test:</strong>
<ol>
  <li><strong>Dividir la audiencia:</strong> separar aleatoriamente un grupo de control (10-20%) que NO recibirá el anuncio</li>
  <li><strong>Exponer el grupo de prueba:</strong> el resto recibe la campaña normalmente</li>
  <li><strong>Calcular el uplift incremental:</strong><br>
  <code>Incrementalidad = (conversiones del grupo expuesto - conversiones del grupo control) / conversiones del grupo control</code></li>
  <li><strong>ROAS incremental:</strong> <code>Ingresos incrementales / Gasto en medios</code></li>
</ol>
<strong>Implementación por plataforma:</strong>
<ul>
  <li><strong>Meta:</strong> Meta Experiments → Conversion Lift Study</li>
  <li><strong>Google:</strong> Google Ads → Experiments → Conversion Lift o Geographic Experiment</li>
  <li><strong>Geo-based test:</strong> pausar campaña en regiones específicas y comparar</li>
</ul>`,
    },
    tags:['incrementalidade','holdout','ROAS','Meta-Experiments','atribuição','causalidade','uplift'],
  }
);
d.tiers[2].questions.push(
  {
    q:{pt:'Como reconciliar dados de atribuição entre plataformas com discrepâncias significativas?',en:'How to reconcile attribution data between platforms with significant discrepancies?',es:'¿Cómo reconciliar datos de atribución entre plataformas con discrepancias significativas?'},
    a:{
      pt:`Discrepâncias de atribuição entre plataformas são inevitáveis — cada uma conta conversões de forma diferente. O trabalho de AdOps avançado é criar uma visão unificada e confiável.<br><br>
<strong>Por que as plataformas divergem tanto:</strong>
<ul>
  <li>Cada plataforma usa sua própria janela de atribuição (Meta: 7-day click; Google: 30-day click; TikTok: 7-day click + 1-day view)</li>
  <li>Cada plataforma se credita pelo toque que aconteceu em seus canais — sem "ver" os outros canais</li>
  <li>Usuário que clicou em Google Ads E viu um anúncio do Meta antes de comprar: ambas se creditam pela conversão</li>
  <li>Resultado: soma das conversões reportadas pelas plataformas pode ser 2-5x o número real de conversões</li>
</ul>
<strong>Framework de reconciliação:</strong>
<ol>
  <li><strong>Estabelecer a fonte da verdade (source of truth):</strong> GA4 + dados do e-commerce/CRM são as conversões reais — independentes das plataformas de mídia</li>
  <li><strong>Mapear as diferenças:</strong> criar tabela comparativa por período:
    <ul>
      <li>Conversões reais (GA4 / e-commerce): ex. 1.000 compras</li>
      <li>Meta reporta: 800 compras atribuídas</li>
      <li>Google reporta: 600 compras atribuídas</li>
      <li>TikTok reporta: 200 compras atribuídas</li>
      <li>Soma das plataformas: 1.600 — 60% acima do real</li>
    </ul>
  </li>
  <li><strong>Fator de desconto por plataforma:</strong> calcular o ratio histórico entre conversões reportadas e conversões reais atribuídas a cada canal via UTM no GA4</li>
  <li><strong>Unified measurement:</strong> usar GA4 como base e complementar com dados de last-click de cada plataforma via UTM para entender contribuição de cada canal</li>
</ol>
<strong>Ferramentas de reconciliação:</strong>
<ul>
  <li><strong>Northbeam / Triple Whale:</strong> plataformas de MTA que agregam dados de múltiplos canais e aplicam modelagem própria para atribuição unificada</li>
  <li><strong>Looker Studio com blended data:</strong> combinar GA4 + planilhas de dados das plataformas para visão unificada com fator de desconto manual</li>
  <li><strong>BigQuery:</strong> exportar dados brutos de GA4 + dados via API das plataformas → SQL para criar modelo de atribuição customizado</li>
</ul>
<strong>Comunicação com o cliente:</strong>
<ul>
  <li>Nunca reportar a soma das conversões das plataformas — é enganoso</li>
  <li>Reportar sempre com base na fonte de verdade (GA4/e-commerce) + benchmarks de contribuição por canal</li>
  <li>Educar o cliente sobre por que as plataformas divergem: é esperado, não é erro</li>
</ul>`,
      en:`Attribution discrepancies between platforms are inevitable — each counts conversions differently. Advanced AdOps work is creating a unified, trustworthy view.<br><br>
<strong>Why platforms diverge so much:</strong>
<ul>
  <li>Each platform uses its own attribution window</li>
  <li>Each platform credits itself for touches that occurred in its channels — without "seeing" other channels</li>
  <li>User who clicked Google Ads AND saw a Meta ad before buying: both credit themselves for the conversion</li>
  <li>Result: sum of platform-reported conversions can be 2-5x the real number</li>
</ul>
<strong>Reconciliation framework:</strong>
<ol>
  <li><strong>Establish source of truth:</strong> GA4 + e-commerce/CRM data are the real conversions — independent of media platforms</li>
  <li><strong>Map differences:</strong> create comparative table: Real conversions (GA4): 1,000 purchases; Meta reports: 800; Google reports: 600; TikTok reports: 200; Sum: 1,600 — 60% above real</li>
  <li><strong>Discount factor per platform:</strong> calculate historical ratio between reported and real conversions via UTM in GA4</li>
</ol>
<strong>Reconciliation tools:</strong>
<ul>
  <li><strong>Northbeam / Triple Whale:</strong> MTA platforms aggregating multi-channel data with proprietary attribution modeling</li>
  <li><strong>Looker Studio with blended data:</strong> combine GA4 + platform data spreadsheets</li>
  <li><strong>BigQuery:</strong> export raw GA4 data + platform API data → SQL for custom attribution model</li>
</ul>`,
      es:`Las discrepancias de atribución entre plataformas son inevitables — cada una cuenta las conversiones de forma diferente.<br><br>
<strong>Por qué las plataformas divergen tanto:</strong>
<ul>
  <li>Cada plataforma usa su propia ventana de atribución</li>
  <li>Cada plataforma se acredita por los toques que ocurrieron en sus canales</li>
  <li>Resultado: la suma de conversiones reportadas puede ser 2-5x el número real</li>
</ul>
<strong>Framework de reconciliación:</strong>
<ol>
  <li><strong>Establecer la fuente de verdad:</strong> GA4 + datos de e-commerce/CRM son las conversiones reales</li>
  <li><strong>Mapear las diferencias:</strong> tabla comparativa por período con conversiones reales vs. reportadas por plataforma</li>
  <li><strong>Factor de descuento por plataforma:</strong> calcular el ratio histórico entre conversiones reportadas y reales via UTM en GA4</li>
</ol>
<strong>Herramientas:</strong> Northbeam / Triple Whale, Looker Studio con blended data, BigQuery con SQL personalizado.<br><br>
<strong>Comunicación con el cliente:</strong> nunca reportar la suma de conversiones de las plataformas — es engañoso. Siempre basarse en la fuente de verdad.`,
    },
    tags:['atribuição','discrepância','reconciliação','GA4','Northbeam','Triple-Whale','BigQuery','UTM'],
  }
);
})();

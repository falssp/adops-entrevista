window.__adopsData = window.__adopsData || {};
window.__adopsData['programatico'] = {
  icon: '🤖',
  name: { pt: 'Programático', en: 'Programmatic', es: 'Programático' },
  desc: {
    pt: 'RTB, DSP, SSP, Ad Exchange, Deal Types, Header Bidding e ecossistema de mídia programática.',
    en: 'RTB, DSP, SSP, Ad Exchange, Deal Types, Header Bidding and the programmatic media ecosystem.',
    es: 'RTB, DSP, SSP, Ad Exchange, tipos de deals, Header Bidding y el ecosistema de medios programáticos.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: { pt: 'O que é mídia programática e como ela se diferencia da compra direta?', en: 'What is programmatic media and how does it differ from direct buying?', es: '¿Qué es la publicidad programática y cómo se diferencia de la compra directa?' },
          a: {
            pt: `<strong>Mídia programática</strong> é a compra e venda de espaço publicitário de forma automatizada, em tempo real, por meio de tecnologia e algoritmos — sem necessidade de negociação manual entre anunciante e veículo.<br><br>
<strong>Comparativo:</strong>
<table>
<tr><th>Aspecto</th><th>Compra Direta (IO)</th><th>Programática</th></tr>
<tr><td>Negociação</td><td>Manual, com time de vendas</td><td>Automatizada via plataforma</td></tr>
<tr><td>Velocidade</td><td>Dias a semanas</td><td>Milissegundos (RTB)</td></tr>
<tr><td>Segmentação</td><td>Contexto do site</td><td>Audiência (dados + contexto)</td></tr>
<tr><td>Garantia de inventário</td><td>Sim (reservado)</td><td>Depende do deal type</td></tr>
<tr><td>Transparência</td><td>Alta — site escolhido</td><td>Variável por tipo de deal</td></tr>
<tr><td>Escala</td><td>Limitada por veículo</td><td>Milhões de sites/apps</td></tr>
</table><br>
<strong>Vantagem central do programático:</strong> comprar a <em>audiência certa</em> onde quer que ela esteja, ao invés de comprar um placement específico e esperar que a audiência certa apareça.`,
            en: `<strong>Programmatic media</strong> is the automated, real-time buying and selling of advertising space through technology and algorithms — without manual negotiation between advertiser and publisher.<br><br>
<strong>Comparison:</strong>
<table>
<tr><th>Aspect</th><th>Direct Buy (IO)</th><th>Programmatic</th></tr>
<tr><td>Negotiation</td><td>Manual, with sales team</td><td>Automated via platform</td></tr>
<tr><td>Speed</td><td>Days to weeks</td><td>Milliseconds (RTB)</td></tr>
<tr><td>Targeting</td><td>Site context</td><td>Audience (data + context)</td></tr>
<tr><td>Inventory guarantee</td><td>Yes (reserved)</td><td>Depends on deal type</td></tr>
<tr><td>Transparency</td><td>High — site chosen</td><td>Variable by deal type</td></tr>
<tr><td>Scale</td><td>Limited by publisher</td><td>Millions of sites/apps</td></tr>
</table><br>
<strong>Core advantage of programmatic:</strong> buying the <em>right audience</em> wherever they are, instead of buying a specific placement and hoping the right audience shows up.`,
            es: `La <strong>publicidad programática</strong> es la compra y venta automatizada de espacio publicitario en tiempo real, mediante tecnología y algoritmos — sin necesidad de negociación manual entre anunciante y medio.<br><br>
<strong>Comparativo:</strong>
<table>
<tr><th>Aspecto</th><th>Compra Directa (IO)</th><th>Programática</th></tr>
<tr><td>Negociación</td><td>Manual, con equipo de ventas</td><td>Automatizada via plataforma</td></tr>
<tr><td>Velocidad</td><td>Días a semanas</td><td>Milisegundos (RTB)</td></tr>
<tr><td>Segmentación</td><td>Contexto del sitio</td><td>Audiencia (datos + contexto)</td></tr>
<tr><td>Garantía de inventario</td><td>Sí (reservado)</td><td>Depende del tipo de deal</td></tr>
<tr><td>Transparencia</td><td>Alta — sitio elegido</td><td>Variable por tipo de deal</td></tr>
<tr><td>Escala</td><td>Limitada por el medio</td><td>Millones de sitios/apps</td></tr>
</table><br>
<strong>Ventaja central de la programática:</strong> comprar a la <em>audiencia correcta</em> donde sea que esté, en lugar de comprar un placement específico y esperar que la audiencia correcta aparezca.`,
          },
          tags: ['programático', 'IO', 'RTB', 'compra-direta', 'automação'],
        },
        {
          q: { pt: 'O que é RTB (Real-Time Bidding) e como funciona o leilão em tempo real?', en: 'What is RTB (Real-Time Bidding) and how does the real-time auction work?', es: '¿Qué es RTB (Real-Time Bidding) y cómo funciona la subasta en tiempo real?' },
          a: {
            pt: `<strong>RTB (Real-Time Bidding)</strong> é o processo de leilão em tempo real onde, a cada page load ou ad call, múltiplos anunciantes disputam um impression em milissegundos.<br><br>
<strong>Fluxo completo do RTB (100-200ms totais):</strong>
<ol>
  <li><strong>Usuário acessa um site/app</strong> com espaço de anúncio</li>
  <li><strong>Publisher (SSP)</strong> envia um bid request para o Ad Exchange com: URL do site, dados do usuário (cookie/device ID), tamanho do ad, floor price, deal IDs disponíveis</li>
  <li><strong>Ad Exchange</strong> distribui o bid request simultaneamente para múltiplos DSPs</li>
  <li><strong>DSPs</strong> avaliam a impressão: corresponde ao targeting? Qual o valor máximo a pagar? Enviam bid response com o lance (ou no-bid)</li>
  <li><strong>Ad Exchange</strong> realiza o leilão: ganha quem tem o maior lance acima do floor price</li>
  <li><strong>Leilão de 2º preço (padrão histórico):</strong> vencedor paga o lance do 2º colocado + $0.01. Hoje muitos exchanges usam leilão de 1º preço (paga o que lançou)</li>
  <li><strong>Ad server do vencedor</strong> serve o criativo no espaço em milissegundos</li>
</ol>
<strong>Tempo total:</strong> 100-200 milissegundos — o usuário nem percebe.`,
            en: `<strong>RTB (Real-Time Bidding)</strong> is the real-time auction process where, at each page load or ad call, multiple advertisers compete for an impression in milliseconds.<br><br>
<strong>Complete RTB flow (100-200ms total):</strong>
<ol>
  <li><strong>User visits a site/app</strong> with ad space</li>
  <li><strong>Publisher (SSP)</strong> sends a bid request to the Ad Exchange with: site URL, user data (cookie/device ID), ad size, floor price, available deal IDs</li>
  <li><strong>Ad Exchange</strong> simultaneously distributes the bid request to multiple DSPs</li>
  <li><strong>DSPs</strong> evaluate the impression: does it match targeting? What's the max bid? Send bid response with the bid (or no-bid)</li>
  <li><strong>Ad Exchange</strong> runs the auction: highest bidder above the floor price wins</li>
  <li><strong>2nd price auction (historical standard):</strong> winner pays 2nd place bid + $0.01. Today many exchanges use 1st price auction (pays what was bid)</li>
  <li><strong>Winner's ad server</strong> serves the creative in the space within milliseconds</li>
</ol>
<strong>Total time:</strong> 100-200 milliseconds — the user doesn't even notice.`,
            es: `El <strong>RTB (Real-Time Bidding)</strong> es el proceso de subasta en tiempo real donde, en cada carga de página o ad call, múltiples anunciantes compiten por una impresión en milisegundos.<br><br>
<strong>Flujo completo del RTB (100-200ms totales):</strong>
<ol>
  <li><strong>El usuario accede a un sitio/app</strong> con espacio publicitario</li>
  <li><strong>El publisher (SSP)</strong> envía un bid request al Ad Exchange con: URL del sitio, datos del usuario (cookie/device ID), tamaño del anuncio, precio mínimo, deal IDs disponibles</li>
  <li><strong>El Ad Exchange</strong> distribuye el bid request simultáneamente a múltiples DSPs</li>
  <li><strong>Los DSPs</strong> evalúan la impresión: ¿coincide con el targeting? ¿Cuál es el valor máximo a pagar? Envían bid response con la puja (o no-bid)</li>
  <li><strong>El Ad Exchange</strong> realiza la subasta: gana quien tiene la puja más alta sobre el precio mínimo</li>
  <li><strong>Subasta de 2º precio (estándar histórico):</strong> el ganador paga la puja del 2º clasificado + $0.01. Hoy muchos exchanges usan subasta de 1er precio</li>
  <li><strong>El ad server del ganador</strong> sirve el creativo en el espacio en milisegundos</li>
</ol>
<strong>Tiempo total:</strong> 100-200 milisegundos.`,
          },
          tags: ['RTB', 'leilão', 'bid-request', 'Ad-Exchange', '2nd-price', '1st-price'],
        },
        {
          q: { pt: 'O que é um DSP e o que é um SSP? Qual o papel de cada um?', en: 'What is a DSP and what is an SSP? What is the role of each?', es: '¿Qué es un DSP y qué es un SSP? ¿Cuál es el papel de cada uno?' },
          a: {
            pt: `<strong>DSP (Demand-Side Platform):</strong> plataforma usada pelos <em>anunciantes/agências</em> para comprar mídia programática.<br>
<ul>
  <li>Conecta-se a múltiplos Ad Exchanges e SSPs via RTB</li>
  <li>Centraliza targeting de audiência, gestão de criativos e otimização de lances</li>
  <li>Permite definir segmentação por: comportamento, dados demográficos, contexto, retargeting, lookalike</li>
  <li>Exemplos: DV360 (Google), The Trade Desk (TTD), Amazon DSP, Xandr, MediaMath, Basis</li>
</ul>
<strong>SSP (Supply-Side Platform / Sell-Side Platform):</strong> plataforma usada pelos <em>publishers/veículos</em> para vender seu inventário programaticamente.<br>
<ul>
  <li>Conecta o inventário do publisher a múltiplos Ad Exchanges e DSPs</li>
  <li>Maximiza o revenue do publisher via yield optimization</li>
  <li>Permite configurar floor prices, deal IDs, bloqueios de anunciantes/categorias</li>
  <li>Exemplos: Google Ad Manager (GAM/DFP), Magnite, Pubmatic, Index Exchange, OpenX, Xandr</li>
</ul>
<strong>Ad Exchange:</strong> o "mercado" entre DSP e SSP onde os leilões acontecem. Muitas SSPs hoje funcionam também como Ad Exchange.<br><br>
<strong>Resumo visual:</strong><br>
<code>Anunciante → DSP → Ad Exchange/SSP → Publisher</code>`,
            en: `<strong>DSP (Demand-Side Platform):</strong> platform used by <em>advertisers/agencies</em> to buy programmatic media.<br>
<ul>
  <li>Connects to multiple Ad Exchanges and SSPs via RTB</li>
  <li>Centralizes audience targeting, creative management and bid optimization</li>
  <li>Allows targeting by: behavior, demographics, context, retargeting, lookalike</li>
  <li>Examples: DV360 (Google), The Trade Desk (TTD), Amazon DSP, Xandr, MediaMath, Basis</li>
</ul>
<strong>SSP (Supply-Side Platform / Sell-Side Platform):</strong> platform used by <em>publishers</em> to sell their inventory programmatically.<br>
<ul>
  <li>Connects publisher inventory to multiple Ad Exchanges and DSPs</li>
  <li>Maximizes publisher revenue via yield optimization</li>
  <li>Allows configuration of floor prices, deal IDs, advertiser/category blocks</li>
  <li>Examples: Google Ad Manager (GAM/DFP), Magnite, Pubmatic, Index Exchange, OpenX, Xandr</li>
</ul>
<strong>Ad Exchange:</strong> the "marketplace" between DSP and SSP where auctions happen. Many SSPs today also function as Ad Exchanges.<br><br>
<strong>Visual summary:</strong><br>
<code>Advertiser → DSP → Ad Exchange/SSP → Publisher</code>`,
            es: `<strong>DSP (Demand-Side Platform):</strong> plataforma utilizada por <em>anunciantes/agencias</em> para comprar medios programáticos.<br>
<ul>
  <li>Se conecta a múltiples Ad Exchanges y SSPs via RTB</li>
  <li>Centraliza targeting de audiencia, gestión de creativos y optimización de pujas</li>
  <li>Permite definir segmentación por: comportamiento, demografía, contexto, retargeting, lookalike</li>
  <li>Ejemplos: DV360 (Google), The Trade Desk (TTD), Amazon DSP, Xandr, MediaMath, Basis</li>
</ul>
<strong>SSP (Supply-Side Platform / Sell-Side Platform):</strong> plataforma utilizada por <em>publishers/medios</em> para vender su inventario programáticamente.<br>
<ul>
  <li>Conecta el inventario del publisher a múltiples Ad Exchanges y DSPs</li>
  <li>Maximiza el revenue del publisher via yield optimization</li>
  <li>Permite configurar precios mínimos, deal IDs, bloqueos de anunciantes/categorías</li>
  <li>Ejemplos: Google Ad Manager (GAM/DFP), Magnite, Pubmatic, Index Exchange, OpenX, Xandr</li>
</ul>
<strong>Ad Exchange:</strong> el "mercado" entre DSP y SSP donde ocurren las subastas.<br><br>
<strong>Resumen visual:</strong><br>
<code>Anunciante → DSP → Ad Exchange/SSP → Publisher</code>`,
          },
          tags: ['DSP', 'SSP', 'Ad-Exchange', 'DV360', 'Trade-Desk', 'publisher'],
        },
        {
          q: { pt: 'Quais são os principais tipos de deal no programático?', en: 'What are the main deal types in programmatic?', es: '¿Cuáles son los principales tipos de deals en programática?' },
          a: {
            pt: `<strong>4 tipos de deal programático:</strong><br><br>
<table>
<tr><th>Tipo</th><th>Leilão?</th><th>Garantia de volume?</th><th>Preço</th><th>Acesso</th></tr>
<tr><td><strong>Open Auction (OA)</strong></td><td>Sim — todos disputam</td><td>Não</td><td>Dinâmico (market price)</td><td>Aberto</td></tr>
<tr><td><strong>Private Marketplace (PMP)</strong></td><td>Sim — mas só convidados</td><td>Não</td><td>Dinâmico + floor price</td><td>Restrito a DSPs/anunciantes selecionados</td></tr>
<tr><td><strong>Preferred Deal (PD)</strong></td><td>Não — preço fixo negociado</td><td>Não (direito de compra, não obrigação)</td><td>Fixo (CPM acordado)</td><td>1 anunciante com acesso preferencial</td></tr>
<tr><td><strong>Programmatic Guaranteed (PG)</strong></td><td>Não</td><td>Sim — volume e CPM garantidos</td><td>Fixo (negociado)</td><td>1 anunciante, igual a IO tradicional</td></tr>
</table><br>
<strong>Quando usar cada um:</strong>
<ul>
  <li><strong>Open Auction:</strong> máxima escala e eficiência de custo. Menos controle de contexto.</li>
  <li><strong>PMP:</strong> inventário premium com melhor brand safety. Publishers top-tier (UOL, Globo, etc.) — floor price acima do OA.</li>
  <li><strong>Preferred Deal:</strong> acesso preferencial a inventário sem garantia de volume. Flexibilidade de não comprar.</li>
  <li><strong>PG (Programmatic Guaranteed):</strong> substitui a IO tradicional — mesma garantia de volume e placement, mas com targeting de audiência e automação de serving.</li>
</ul>`,
            en: `<strong>4 programmatic deal types:</strong><br><br>
<table>
<tr><th>Type</th><th>Auction?</th><th>Volume guarantee?</th><th>Price</th><th>Access</th></tr>
<tr><td><strong>Open Auction (OA)</strong></td><td>Yes — everyone competes</td><td>No</td><td>Dynamic (market price)</td><td>Open</td></tr>
<tr><td><strong>Private Marketplace (PMP)</strong></td><td>Yes — invited only</td><td>No</td><td>Dynamic + floor price</td><td>Restricted to selected DSPs/advertisers</td></tr>
<tr><td><strong>Preferred Deal (PD)</strong></td><td>No — fixed negotiated price</td><td>No (right to buy, not obligation)</td><td>Fixed (agreed CPM)</td><td>1 advertiser with preferential access</td></tr>
<tr><td><strong>Programmatic Guaranteed (PG)</strong></td><td>No</td><td>Yes — volume and CPM guaranteed</td><td>Fixed (negotiated)</td><td>1 advertiser, same as traditional IO</td></tr>
</table><br>
<strong>When to use each:</strong>
<ul>
  <li><strong>Open Auction:</strong> maximum scale and cost efficiency. Less context control.</li>
  <li><strong>PMP:</strong> premium inventory with better brand safety. Top-tier publishers — floor price above OA.</li>
  <li><strong>Preferred Deal:</strong> preferential access to inventory without volume guarantee. Flexibility of not buying.</li>
  <li><strong>PG:</strong> replaces traditional IO — same volume and placement guarantee, but with audience targeting and serving automation.</li>
</ul>`,
            es: `<strong>4 tipos de deals programáticos:</strong><br><br>
<table>
<tr><th>Tipo</th><th>¿Subasta?</th><th>¿Garantía de volumen?</th><th>Precio</th><th>Acceso</th></tr>
<tr><td><strong>Open Auction (OA)</strong></td><td>Sí — todos compiten</td><td>No</td><td>Dinámico (precio de mercado)</td><td>Abierto</td></tr>
<tr><td><strong>Private Marketplace (PMP)</strong></td><td>Sí — solo invitados</td><td>No</td><td>Dinámico + precio mínimo</td><td>Restringido a DSPs/anunciantes seleccionados</td></tr>
<tr><td><strong>Preferred Deal (PD)</strong></td><td>No — precio fijo negociado</td><td>No (derecho de compra, no obligación)</td><td>Fijo (CPM acordado)</td><td>1 anunciante con acceso preferencial</td></tr>
<tr><td><strong>Programmatic Guaranteed (PG)</strong></td><td>No</td><td>Sí — volumen y CPM garantizados</td><td>Fijo (negociado)</td><td>1 anunciante, igual que IO tradicional</td></tr>
</table><br>
<strong>Cuándo usar cada uno:</strong>
<ul>
  <li><strong>Open Auction:</strong> máxima escala y eficiencia de costo. Menos control de contexto.</li>
  <li><strong>PMP:</strong> inventario premium con mejor brand safety.</li>
  <li><strong>Preferred Deal:</strong> acceso preferencial sin garantía de volumen.</li>
  <li><strong>PG:</strong> reemplaza el IO tradicional — misma garantía, pero con targeting de audiencia y automatización.</li>
</ul>`,
          },
          tags: ['Open-Auction', 'PMP', 'Preferred-Deal', 'PG', 'deal-type', 'RTB'],
        },
        {
          q: { pt: 'O que é um DMP (Data Management Platform) e qual seu papel no programático?', en: 'What is a DMP (Data Management Platform) and what is its role in programmatic?', es: '¿Qué es un DMP (Data Management Platform) y cuál es su papel en la programática?' },
          a: {
            pt: `Um <strong>DMP (Data Management Platform)</strong> é uma plataforma de centralização, organização e ativação de dados de audiência — usada para enriquecer o targeting programático.<br><br>
<strong>O que o DMP faz:</strong>
<ul>
  <li>Coleta e unifica dados de múltiplas fontes (1st, 2nd e 3rd party)</li>
  <li>Cria segmentos de audiência baseados em comportamento, demografía e interesses</li>
  <li>Envia esses segmentos para o DSP para uso no targeting de campanhas programáticas</li>
  <li>Gera relatórios de audiência para insights de planejamento</li>
</ul>
<strong>Tipos de dados gerenciados pelo DMP:</strong>
<ul>
  <li><strong>1st Party Data:</strong> dados próprios do anunciante (CRM, site, app). Os mais valiosos — já são clientes ou prospectos.</li>
  <li><strong>2nd Party Data:</strong> dados de um parceiro com quem se tem acordo direto (ex: publisher vendendo audiência). Mais confiável que 3rd party.</li>
  <li><strong>3rd Party Data:</strong> dados comprados de data brokers (Nielsen, Experian, Oracle Data Cloud). Alta escala mas qualidade e precisão variáveis.</li>
</ul>
<strong>Exemplos de DMP:</strong> Salesforce DMP (ex-Krux), Oracle BlueKai, Adobe Audience Manager, Nielsen DMP<br><br>
<strong>DMP vs. CDP:</strong> DMPs operam com cookies (anônimos), CDPs operam com dados identificados (email, login). Com o declínio dos cookies, CDPs ganharam relevância sobre DMPs.`,
            en: `A <strong>DMP (Data Management Platform)</strong> is a platform for centralizing, organizing and activating audience data — used to enrich programmatic targeting.<br><br>
<strong>What the DMP does:</strong>
<ul>
  <li>Collects and unifies data from multiple sources (1st, 2nd and 3rd party)</li>
  <li>Creates audience segments based on behavior, demographics and interests</li>
  <li>Sends these segments to the DSP for use in programmatic campaign targeting</li>
  <li>Generates audience reports for planning insights</li>
</ul>
<strong>Types of data managed by the DMP:</strong>
<ul>
  <li><strong>1st Party Data:</strong> advertiser's own data (CRM, site, app). Most valuable — already customers or prospects.</li>
  <li><strong>2nd Party Data:</strong> data from a partner with a direct agreement (e.g. publisher selling audience). More reliable than 3rd party.</li>
  <li><strong>3rd Party Data:</strong> data purchased from data brokers (Nielsen, Experian, Oracle Data Cloud). High scale but variable quality and accuracy.</li>
</ul>
<strong>DMP examples:</strong> Salesforce DMP (ex-Krux), Oracle BlueKai, Adobe Audience Manager, Nielsen DMP<br><br>
<strong>DMP vs. CDP:</strong> DMPs operate with cookies (anonymous), CDPs operate with identified data (email, login). With cookie decline, CDPs have gained relevance over DMPs.`,
            es: `Un <strong>DMP (Data Management Platform)</strong> es una plataforma para centralizar, organizar y activar datos de audiencia — utilizada para enriquecer el targeting programático.<br><br>
<strong>Qué hace el DMP:</strong>
<ul>
  <li>Recopila y unifica datos de múltiples fuentes (1st, 2nd y 3rd party)</li>
  <li>Crea segmentos de audiencia basados en comportamiento, demografía e intereses</li>
  <li>Envía estos segmentos al DSP para uso en el targeting de campañas programáticas</li>
  <li>Genera reportes de audiencia para insights de planificación</li>
</ul>
<strong>Tipos de datos gestionados por el DMP:</strong>
<ul>
  <li><strong>1st Party Data:</strong> datos propios del anunciante (CRM, sitio, app). Los más valiosos.</li>
  <li><strong>2nd Party Data:</strong> datos de un socio con acuerdo directo. Más confiable que 3rd party.</li>
  <li><strong>3rd Party Data:</strong> datos comprados de data brokers. Alta escala pero calidad variable.</li>
</ul>
<strong>Ejemplos de DMP:</strong> Salesforce DMP (ex-Krux), Oracle BlueKai, Adobe Audience Manager, Nielsen DMP<br><br>
<strong>DMP vs. CDP:</strong> los DMPs operan con cookies (anónimos), los CDPs operan con datos identificados (email, login). Con el declive de las cookies, los CDPs ganaron relevancia sobre los DMPs.`,
          },
          tags: ['DMP', 'CDP', '1st-party', '3rd-party', 'audiência', 'dados', 'cookie'],
        },
        {
          q: { pt: 'O que é viewability e quais os padrões do mercado?', en: 'What is viewability and what are the industry standards?', es: '¿Qué es la viewability y cuáles son los estándares del mercado?' },
          a: {
            pt: `<strong>Viewability</strong> mede se um anúncio foi de fato visto pelo usuário — não apenas carregado no HTML da página.<br><br>
<strong>Padrão MRC (Media Rating Council) — mínimo do mercado:</strong>
<ul>
  <li><strong>Display:</strong> ≥50% dos pixels visíveis por ≥1 segundo contínuo</li>
  <li><strong>Video:</strong> ≥50% dos pixels visíveis por ≥2 segundos contínuos</li>
  <li><strong>Large Format Display (≥242.500 px):</strong> ≥30% dos pixels visíveis por ≥1 segundo</li>
</ul>
<strong>Padrão GroupM (mais exigente, adotado por muitos anunciantes):</strong>
<ul>
  <li>Display: ≥50% pixels visíveis por ≥1 segundo — mas com meta de 100% viewable</li>
  <li>Video: ≥100% dos pixels visíveis por ≥50% da duração do vídeo</li>
</ul>
<strong>Por que importa:</strong>
<ul>
  <li>Anúncios abaixo da dobra, em abas não ativas ou carregados após o usuário sair não são viewable</li>
  <li>Pagamento por impressão não-viewable = orçamento desperdiçado</li>
  <li>Benchmark de mercado: 50-60% de viewability para open web display. Publishers premium chegam a 70-80%.</li>
</ul>
<strong>Ferramentas de medição:</strong> Integral Ad Science (IAS), DoubleVerify (DV), Moat (Oracle), JIVOX, Google Active View (built-in no DV360 e CM360).`,
            en: `<strong>Viewability</strong> measures whether an ad was actually seen by the user — not just loaded in the page HTML.<br><br>
<strong>MRC (Media Rating Council) Standard — market minimum:</strong>
<ul>
  <li><strong>Display:</strong> ≥50% of pixels visible for ≥1 continuous second</li>
  <li><strong>Video:</strong> ≥50% of pixels visible for ≥2 continuous seconds</li>
  <li><strong>Large Format Display (≥242,500 px):</strong> ≥30% of pixels visible for ≥1 second</li>
</ul>
<strong>GroupM Standard (more demanding, adopted by many advertisers):</strong>
<ul>
  <li>Display: ≥50% pixels visible for ≥1 second — but with 100% viewable target</li>
  <li>Video: ≥100% of pixels visible for ≥50% of video duration</li>
</ul>
<strong>Why it matters:</strong>
<ul>
  <li>Ads below the fold, in inactive tabs or loaded after user leaves are not viewable</li>
  <li>Payment for non-viewable impressions = wasted budget</li>
  <li>Market benchmark: 50-60% viewability for open web display. Premium publishers reach 70-80%.</li>
</ul>
<strong>Measurement tools:</strong> Integral Ad Science (IAS), DoubleVerify (DV), Moat (Oracle), JIVOX, Google Active View (built-in in DV360 and CM360).`,
            es: `La <strong>viewability</strong> mide si un anuncio fue visto realmente por el usuario — no solo cargado en el HTML de la página.<br><br>
<strong>Estándar MRC (Media Rating Council) — mínimo del mercado:</strong>
<ul>
  <li><strong>Display:</strong> ≥50% de los píxeles visibles por ≥1 segundo continuo</li>
  <li><strong>Video:</strong> ≥50% de los píxeles visibles por ≥2 segundos continuos</li>
  <li><strong>Large Format Display (≥242.500 px):</strong> ≥30% de los píxeles visibles por ≥1 segundo</li>
</ul>
<strong>Estándar GroupM (más exigente):</strong>
<ul>
  <li>Display: ≥50% píxeles visibles por ≥1 segundo — pero con meta de 100% viewable</li>
  <li>Video: ≥100% de los píxeles visibles por ≥50% de la duración del video</li>
</ul>
<strong>Por qué importa:</strong>
<ul>
  <li>Anuncios debajo del pliegue, en pestañas inactivas o cargados tras la salida del usuario no son viewable</li>
  <li>Pago por impresión no viewable = presupuesto desperdiciado</li>
  <li>Benchmark de mercado: 50-60% de viewability para display en open web. Publishers premium llegan al 70-80%.</li>
</ul>
<strong>Herramientas de medición:</strong> IAS, DoubleVerify (DV), Moat (Oracle), Google Active View.`,
          },
          tags: ['viewability', 'MRC', 'IAS', 'DoubleVerify', 'display', 'video'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: { pt: 'O que é Header Bidding e como ele mudou o mercado programático?', en: 'What is Header Bidding and how did it change the programmatic market?', es: '¿Qué es Header Bidding y cómo cambió el mercado programático?' },
          a: {
            pt: `<strong>Header Bidding</strong> é uma técnica que permite a publishers oferecer seu inventário simultaneamente a múltiplos Ad Exchanges/DSPs antes de chamar o ad server principal (GAM) — eliminando a cascata (waterfall) e maximizando o revenue.<br><br>
<strong>Problema que o Header Bidding resolveu — Waterfall (cascata):</strong><br>
No modelo antigo, o publisher tinha uma ordem de prioridade sequencial:
<ol>
  <li>DFP/GAM verifica se há campanha direta (IO) para servir</li>
  <li>Se não, passa para Ad Exchange 1 → se não comprar, passa para Ad Exchange 2 → e assim por diante</li>
</ol>
Resultado: Ad Exchanges no fim da fila nunca tinham chance de competir, mesmo tendo lances maiores.<br><br>
<strong>Como o Header Bidding funciona:</strong>
<ol>
  <li>Um wrapper JavaScript no <code>&lt;head&gt;</code> da página envia o bid request para múltiplos SSPs/Exchanges simultaneamente</li>
  <li>Todos respondem em paralelo (em ~300ms)</li>
  <li>O maior lance entra no GAM como um "line item" competindo com campanhas diretas</li>
  <li>Se ganhar, o ad é servido; o revenue do publisher aumenta</li>
</ol>
<strong>Tipos de Header Bidding:</strong>
<ul>
  <li><strong>Client-side:</strong> wrapper roda no browser do usuário. Mais latência, mais transparência.</li>
  <li><strong>Server-side (S2S):</strong> leilão acontece em servidor externo (Prebid Server). Menos latência, menos cookies disponíveis para targeting.</li>
</ul>
<strong>Impacto:</strong> publishers aumentaram CPMs em 30-50% com Header Bidding. Tornou-se o padrão para publishers premium.`,
            en: `<strong>Header Bidding</strong> is a technique that allows publishers to offer their inventory simultaneously to multiple Ad Exchanges/DSPs before calling the main ad server (GAM) — eliminating the waterfall and maximizing revenue.<br><br>
<strong>Problem Header Bidding solved — Waterfall:</strong><br>
In the old model, the publisher had a sequential priority order:
<ol>
  <li>DFP/GAM checks if there's a direct campaign (IO) to serve</li>
  <li>If not, passes to Ad Exchange 1 → if it doesn't buy, passes to Ad Exchange 2 → and so on</li>
</ol>
Result: Ad Exchanges at the end of the queue never had a chance to compete, even with higher bids.<br><br>
<strong>How Header Bidding works:</strong>
<ol>
  <li>A JavaScript wrapper in the page <code>&lt;head&gt;</code> sends the bid request to multiple SSPs/Exchanges simultaneously</li>
  <li>All respond in parallel (in ~300ms)</li>
  <li>The highest bid enters GAM as a "line item" competing with direct campaigns</li>
  <li>If it wins, the ad is served; publisher revenue increases</li>
</ol>
<strong>Header Bidding types:</strong>
<ul>
  <li><strong>Client-side:</strong> wrapper runs in user's browser. More latency, more transparency.</li>
  <li><strong>Server-side (S2S):</strong> auction happens on external server (Prebid Server). Less latency, fewer cookies available for targeting.</li>
</ul>
<strong>Impact:</strong> publishers increased CPMs by 30-50% with Header Bidding. Became the standard for premium publishers.`,
            es: `El <strong>Header Bidding</strong> es una técnica que permite a los publishers ofrecer su inventario simultáneamente a múltiples Ad Exchanges/DSPs antes de llamar al ad server principal (GAM) — eliminando la cascada (waterfall) y maximizando el revenue.<br><br>
<strong>Problema que resolvió el Header Bidding — Waterfall:</strong><br>
En el modelo antiguo, el publisher tenía un orden de prioridad secuencial:
<ol>
  <li>DFP/GAM verifica si hay campaña directa (IO) para servir</li>
  <li>Si no, pasa al Ad Exchange 1 → si no compra, pasa al Ad Exchange 2 → y así sucesivamente</li>
</ol>
Resultado: los Ad Exchanges al final de la cola nunca tenían oportunidad de competir, incluso con pujas más altas.<br><br>
<strong>Cómo funciona el Header Bidding:</strong>
<ol>
  <li>Un wrapper JavaScript en el <code>&lt;head&gt;</code> de la página envía el bid request a múltiples SSPs/Exchanges simultáneamente</li>
  <li>Todos responden en paralelo (en ~300ms)</li>
  <li>La puja más alta entra en GAM como un "line item" compitiendo con campañas directas</li>
  <li>Si gana, el anuncio se sirve; el revenue del publisher aumenta</li>
</ol>
<strong>Tipos de Header Bidding:</strong>
<ul>
  <li><strong>Client-side:</strong> wrapper se ejecuta en el browser del usuario. Más latencia, más transparencia.</li>
  <li><strong>Server-side (S2S):</strong> la subasta ocurre en un servidor externo (Prebid Server). Menos latencia, menos cookies disponibles.</li>
</ul>
<strong>Impacto:</strong> los publishers aumentaron CPMs en un 30-50% con Header Bidding.`,
          },
          tags: ['Header-Bidding', 'waterfall', 'Prebid', 'SSP', 'CPM', 'publisher', 'GAM'],
        },
        {
          q: { pt: 'O que é Ad Fraud (fraude publicitária) e quais os principais tipos?', en: 'What is Ad Fraud and what are the main types?', es: '¿Qué es el Ad Fraud y cuáles son los principales tipos?' },
          a: {
            pt: `<strong>Ad Fraud</strong> é qualquer atividade que gera impressões, cliques ou conversões artificiais, desperdiçando o budget do anunciante sem gerar valor real.<br><br>
<strong>Principais tipos de fraude:</strong>
<ul>
  <li><strong>Bot Traffic (IVT — Invalid Traffic):</strong> robôs automatizados que simulam navegação humana e carregam anúncios. Pode ser General IVT (GIVT — bots conhecidos de crawlers) ou Sophisticated IVT (SIVT — bots avançados que imitam comportamento humano).</li>
  <li><strong>Domain Spoofing:</strong> site fraudulento se disfarça de publisher premium no bid request. Anunciante paga CPM de UOL.com.br mas o anúncio vai para um site de baixa qualidade.</li>
  <li><strong>Ad Stacking:</strong> múltiplos anúncios empilhados num mesmo placement — só o topo é visível, mas todos geram impressão.</li>
  <li><strong>Pixel Stuffing:</strong> anúncio servido em iframe de 1x1 pixel — invisível ao usuário mas conta como impressão.</li>
  <li><strong>Click Fraud:</strong> cliques artificiais gerados por bots ou fazendas de cliques (click farms). Eleva CTR artificialmente e drena budget de CPC.</li>
  <li><strong>Conversion Fraud:</strong> conversões falsas geradas artificialmente — comum em campanhas de CPA com afiliados.</li>
</ul>
<strong>Estimativa de impacto:</strong> o mercado global perde US$80-100 bilhões/ano em ad fraud (Juniper Research, 2023).<br><br>
<strong>Proteção:</strong> IAS, DoubleVerify, HUMAN (ex-WhiteOps), ads.txt / sellers.json (padrão IAB para verificação de publisher).`,
            en: `<strong>Ad Fraud</strong> is any activity that generates artificial impressions, clicks or conversions, wasting advertiser budget without generating real value.<br><br>
<strong>Main fraud types:</strong>
<ul>
  <li><strong>Bot Traffic (IVT — Invalid Traffic):</strong> automated bots that simulate human browsing and load ads. Can be General IVT (GIVT — known crawler bots) or Sophisticated IVT (SIVT — advanced bots imitating human behavior).</li>
  <li><strong>Domain Spoofing:</strong> fraudulent site disguises itself as a premium publisher in the bid request. Advertiser pays premium CPM but the ad goes to a low-quality site.</li>
  <li><strong>Ad Stacking:</strong> multiple ads stacked in the same placement — only the top is visible, but all generate impressions.</li>
  <li><strong>Pixel Stuffing:</strong> ad served in a 1x1 pixel iframe — invisible to the user but counts as an impression.</li>
  <li><strong>Click Fraud:</strong> artificial clicks generated by bots or click farms. Artificially inflates CTR and drains CPC budget.</li>
  <li><strong>Conversion Fraud:</strong> artificially generated fake conversions — common in CPA campaigns with affiliates.</li>
</ul>
<strong>Impact estimate:</strong> the global market loses $80-100 billion/year to ad fraud (Juniper Research, 2023).<br><br>
<strong>Protection:</strong> IAS, DoubleVerify, HUMAN (ex-WhiteOps), ads.txt / sellers.json (IAB standard for publisher verification).`,
            es: `El <strong>Ad Fraud</strong> es cualquier actividad que genera impresiones, clics o conversiones artificiales, desperdiciando el presupuesto del anunciante sin generar valor real.<br><br>
<strong>Principales tipos de fraude:</strong>
<ul>
  <li><strong>Bot Traffic (IVT — Invalid Traffic):</strong> robots automatizados que simulan navegación humana y cargan anuncios. Puede ser General IVT (GIVT — bots conocidos de crawlers) o Sophisticated IVT (SIVT — bots avanzados que imitan comportamiento humano).</li>
  <li><strong>Domain Spoofing:</strong> sitio fraudulento se disfraza de publisher premium en el bid request.</li>
  <li><strong>Ad Stacking:</strong> múltiples anuncios apilados en un mismo placement — solo el superior es visible, pero todos generan impresión.</li>
  <li><strong>Pixel Stuffing:</strong> anuncio servido en un iframe de 1x1 píxel — invisible al usuario pero cuenta como impresión.</li>
  <li><strong>Click Fraud:</strong> clics artificiales generados por bots o granjas de clics. Infla artificialmente el CTR y drena el presupuesto de CPC.</li>
  <li><strong>Conversion Fraud:</strong> conversiones falsas generadas artificialmente — común en campañas de CPA con afiliados.</li>
</ul>
<strong>Estimación de impacto:</strong> el mercado global pierde $80-100 mil millones/año en ad fraud.<br><br>
<strong>Protección:</strong> IAS, DoubleVerify, HUMAN (ex-WhiteOps), ads.txt / sellers.json.`,
          },
          tags: ['ad-fraud', 'IVT', 'bot', 'domain-spoofing', 'IAS', 'DoubleVerify', 'ads.txt'],
        },
        {
          q: { pt: 'O que é brand safety e como garantir em campanhas programáticas?', en: 'What is brand safety and how to ensure it in programmatic campaigns?', es: '¿Qué es brand safety y cómo garantizarla en campañas programáticas?' },
          a: {
            pt: `<strong>Brand Safety</strong> é o conjunto de medidas para garantir que anúncios de uma marca não apareçam ao lado de conteúdo inadequado, nocivo ou incompatível com os valores da marca.<br><br>
<strong>Categorias de conteúdo inseguro (GARM — Global Alliance for Responsible Media):</strong>
<ul>
  <li>Conteúdo para adultos/pornografia</li>
  <li>Discurso de ódio / extremismo</li>
  <li>Violência gráfica / terrorismo</li>
  <li>Fake news e desinformação</li>
  <li>Pirataria / conteúdo ilegal</li>
  <li>Linguagem ofensiva</li>
</ul>
<strong>Camadas de proteção em programático:</strong>
<ol>
  <li><strong>Allowlists (whitelist):</strong> lista de sites/apps onde o anúncio PODE aparecer. Controle máximo, menor escala.</li>
  <li><strong>Blocklists (blacklist):</strong> lista de sites/apps onde o anúncio NÃO pode aparecer. Mais escala, proteção parcial.</li>
  <li><strong>Category exclusions:</strong> bloquear categorias de conteúdo via DSP (ex: excluir "Controversy", "Violence", "Adult").</li>
  <li><strong>Keyword blocking:</strong> bloquear páginas que contenham determinadas palavras-chave no conteúdo.</li>
  <li><strong>Brand Safety vendors:</strong> IAS, DoubleVerify, Zefr — monitoramento em tempo real, bloqueio pré-bid (IAS pre-bid) ou pós-bid.</li>
  <li><strong>PMP / Programmatic Guaranteed:</strong> comprar apenas de publishers conhecidos e previamente avaliados.</li>
</ol>
<strong>Custo do brand safety:</strong> restricções excessivas podem limitar demais o alcance e elevar CPMs. O equilíbrio é fundamental.`,
            en: `<strong>Brand Safety</strong> is the set of measures to ensure that a brand's ads don't appear next to inappropriate, harmful or brand-incompatible content.<br><br>
<strong>Unsafe content categories (GARM — Global Alliance for Responsible Media):</strong>
<ul>
  <li>Adult content/pornography</li>
  <li>Hate speech / extremism</li>
  <li>Graphic violence / terrorism</li>
  <li>Fake news and misinformation</li>
  <li>Piracy / illegal content</li>
  <li>Offensive language</li>
</ul>
<strong>Protection layers in programmatic:</strong>
<ol>
  <li><strong>Allowlists:</strong> list of sites/apps where the ad CAN appear. Maximum control, less scale.</li>
  <li><strong>Blocklists:</strong> list of sites/apps where the ad CANNOT appear. More scale, partial protection.</li>
  <li><strong>Category exclusions:</strong> block content categories via DSP (e.g. exclude "Controversy", "Violence", "Adult").</li>
  <li><strong>Keyword blocking:</strong> block pages containing certain keywords in content.</li>
  <li><strong>Brand Safety vendors:</strong> IAS, DoubleVerify, Zefr — real-time monitoring, pre-bid (IAS pre-bid) or post-bid blocking.</li>
  <li><strong>PMP / Programmatic Guaranteed:</strong> buy only from known and previously evaluated publishers.</li>
</ol>
<strong>Brand safety cost:</strong> excessive restrictions can overly limit reach and raise CPMs. Balance is essential.`,
            es: `<strong>Brand Safety</strong> es el conjunto de medidas para garantizar que los anuncios de una marca no aparezcan junto a contenido inadecuado, nocivo o incompatible con los valores de la marca.<br><br>
<strong>Categorías de contenido inseguro (GARM):</strong>
<ul>
  <li>Contenido adulto/pornografía</li>
  <li>Discurso de odio / extremismo</li>
  <li>Violencia gráfica / terrorismo</li>
  <li>Fake news y desinformación</li>
  <li>Piratería / contenido ilegal</li>
  <li>Lenguaje ofensivo</li>
</ul>
<strong>Capas de protección en programática:</strong>
<ol>
  <li><strong>Allowlists:</strong> lista de sitios/apps donde el anuncio PUEDE aparecer. Control máximo, menor escala.</li>
  <li><strong>Blocklists:</strong> lista de sitios/apps donde el anuncio NO puede aparecer. Más escala, protección parcial.</li>
  <li><strong>Category exclusions:</strong> bloquear categorías de contenido via DSP.</li>
  <li><strong>Keyword blocking:</strong> bloquear páginas que contengan ciertas palabras clave en el contenido.</li>
  <li><strong>Brand Safety vendors:</strong> IAS, DoubleVerify, Zefr — monitoreo en tiempo real, bloqueo pre-bid o post-bid.</li>
  <li><strong>PMP / PG:</strong> comprar solo de publishers conocidos y previamente evaluados.</li>
</ol>
<strong>Costo del brand safety:</strong> restricciones excesivas pueden limitar demasiado el alcance y elevar CPMs.`,
          },
          tags: ['brand-safety', 'GARM', 'IAS', 'DoubleVerify', 'blocklist', 'allowlist', 'PMP'],
        },
        {
          q: { pt: 'Como funciona o floor price e o que é o leilão de 1º preço vs. 2º preço?', en: 'How does floor price work and what is 1st price vs 2nd price auction?', es: '¿Cómo funciona el floor price y qué es la subasta de 1er precio vs. 2do precio?' },
          a: {
            pt: `<strong>Floor Price (preço mínimo):</strong> valor mínimo de CPM que o publisher define para seu inventário. Lances abaixo do floor são rejeitados automaticamente pelo SSP.<br><br>
<strong>Tipos de floor price:</strong>
<ul>
  <li><strong>Hard Floor:</strong> preço mínimo absoluto. Lance abaixo → não serve.</li>
  <li><strong>Soft Floor:</strong> preço de referência para o leilão de 2º preço. Um lance acima do soft floor mas abaixo do hard floor ainda pode ganhar, mas paga mais do que o 2º colocado pagaria normalmente.</li>
</ul>
<strong>Leilão de 2º Preço (Second Price / Vickrey):</strong>
<ul>
  <li>Vencedor paga o lance do 2º colocado + $0.01</li>
  <li>Incentivo: lançar o valor real máximo que se está disposto a pagar (bid shading automático é ineficiente)</li>
  <li>Foi o padrão do mercado programático por anos</li>
</ul>
<strong>Leilão de 1º Preço (First Price):</strong>
<ul>
  <li>Vencedor paga exatamente o que lançou</li>
  <li>Tornou-se padrão em ~2019-2020 (Google, Index Exchange, AppNexus migraram)</li>
  <li>Mais receita para publishers, mas exige <strong>bid shading</strong> pelos DSPs para não pagar a mais</li>
</ul>
<strong>Bid Shading:</strong> algoritmo do DSP que reduz automaticamente o lance enviado para algo entre o floor price e o lance máximo do anunciante, evitando pagar mais do que necessário no 1º preço. TTD, DV360 e outros têm bid shading nativo.`,
            en: `<strong>Floor Price:</strong> minimum CPM value the publisher sets for their inventory. Bids below the floor are automatically rejected by the SSP.<br><br>
<strong>Floor price types:</strong>
<ul>
  <li><strong>Hard Floor:</strong> absolute minimum price. Bid below → doesn't serve.</li>
  <li><strong>Soft Floor:</strong> reference price for the 2nd price auction. A bid above the soft floor but below the hard floor can still win, but pays more than the 2nd place would normally pay.</li>
</ul>
<strong>2nd Price Auction (Second Price / Vickrey):</strong>
<ul>
  <li>Winner pays 2nd place bid + $0.01</li>
  <li>Incentive: bid the real maximum you're willing to pay (automatic bid shading is inefficient)</li>
  <li>Was the standard in programmatic for years</li>
</ul>
<strong>1st Price Auction (First Price):</strong>
<ul>
  <li>Winner pays exactly what they bid</li>
  <li>Became standard in ~2019-2020 (Google, Index Exchange, AppNexus migrated)</li>
  <li>More revenue for publishers, but requires <strong>bid shading</strong> by DSPs to avoid overpaying</li>
</ul>
<strong>Bid Shading:</strong> DSP algorithm that automatically reduces the sent bid to something between the floor price and the advertiser's max bid, avoiding paying more than necessary in 1st price. TTD, DV360 and others have native bid shading.`,
            es: `<strong>Floor Price (precio mínimo):</strong> valor mínimo de CPM que el publisher define para su inventario. Las pujas por debajo del floor son rechazadas automáticamente por el SSP.<br><br>
<strong>Tipos de floor price:</strong>
<ul>
  <li><strong>Hard Floor:</strong> precio mínimo absoluto. Puja por debajo → no sirve.</li>
  <li><strong>Soft Floor:</strong> precio de referencia para la subasta de 2º precio.</li>
</ul>
<strong>Subasta de 2º Precio (Second Price / Vickrey):</strong>
<ul>
  <li>El ganador paga la puja del 2º clasificado + $0.01</li>
  <li>Incentivo: pujar el valor real máximo dispuesto a pagar</li>
  <li>Fue el estándar del mercado programático durante años</li>
</ul>
<strong>Subasta de 1er Precio (First Price):</strong>
<ul>
  <li>El ganador paga exactamente lo que pujó</li>
  <li>Se convirtió en estándar en ~2019-2020</li>
  <li>Más ingresos para publishers, pero requiere <strong>bid shading</strong> por los DSPs</li>
</ul>
<strong>Bid Shading:</strong> algoritmo del DSP que reduce automáticamente la puja enviada a algo entre el floor price y la puja máxima del anunciante.`,
          },
          tags: ['floor-price', '1st-price', '2nd-price', 'bid-shading', 'SSP', 'leilão'],
        },
        {
          q: { pt: 'O que é ads.txt e sellers.json? Como eles combatem o domain spoofing?', en: 'What is ads.txt and sellers.json? How do they combat domain spoofing?', es: '¿Qué es ads.txt y sellers.json? ¿Cómo combaten el domain spoofing?' },
          a: {
            pt: `<strong>ads.txt (Authorized Digital Sellers)</strong> é um padrão IAB criado para que publishers declarem explicitamente quais SSPs e Ad Exchanges estão autorizados a vender seu inventário.<br><br>
<strong>Como funciona:</strong>
<ul>
  <li>Publisher cria um arquivo <code>ads.txt</code> no root do domínio: <code>publisher.com/ads.txt</code></li>
  <li>Cada linha declara um vendedor autorizado no formato: <code>SSP, Publisher-ID, DIRECT ou RESELLER, Seller-Account-ID</code></li>
  <li>Ex: <code>google.com, pub-1234567890, DIRECT, f08c47fec0942fa0</code></li>
  <li>DSPs e crawlers verificam o ads.txt antes de fazer lances — inventário não listado é bloqueado ou desvalorizado</li>
</ul>
<strong>sellers.json</strong> é o complemento do lado do vendedor: SSPs publicam quem são seus publishers autorizados, permitindo ao comprador verificar toda a cadeia de fornecimento.<br><br>
<strong>app-ads.txt:</strong> versão para apps mobile — listada no Developer Store (Google Play, App Store).<br><br>
<strong>Como combate o Domain Spoofing:</strong>
<ul>
  <li>Se um site fraudulento declara vender inventário de "globo.com", o DSP consulta <code>globo.com/ads.txt</code></li>
  <li>Se a SSP fraudulenta não estiver listada → lance é bloqueado</li>
  <li>Adoção do ads.txt reduziu domain spoofing em ~70% (IAB, 2020)</li>
</ul>
<strong>Limitação:</strong> ads.txt não garante que o inventário é viewable ou livre de bots — apenas que o vendedor é legítimo.`,
            en: `<strong>ads.txt (Authorized Digital Sellers)</strong> is an IAB standard created for publishers to explicitly declare which SSPs and Ad Exchanges are authorized to sell their inventory.<br><br>
<strong>How it works:</strong>
<ul>
  <li>Publisher creates an <code>ads.txt</code> file at the root of the domain: <code>publisher.com/ads.txt</code></li>
  <li>Each line declares an authorized seller in the format: <code>SSP, Publisher-ID, DIRECT or RESELLER, Seller-Account-ID</code></li>
  <li>E.g.: <code>google.com, pub-1234567890, DIRECT, f08c47fec0942fa0</code></li>
  <li>DSPs and crawlers check ads.txt before bidding — unlisted inventory is blocked or devalued</li>
</ul>
<strong>sellers.json</strong> is the seller-side complement: SSPs publish who their authorized publishers are, allowing buyers to verify the entire supply chain.<br><br>
<strong>app-ads.txt:</strong> mobile app version — listed in Developer Store (Google Play, App Store).<br><br>
<strong>How it combats Domain Spoofing:</strong>
<ul>
  <li>If a fraudulent site claims to sell inventory from "nytimes.com", the DSP consults <code>nytimes.com/ads.txt</code></li>
  <li>If the fraudulent SSP isn't listed → bid is blocked</li>
  <li>ads.txt adoption reduced domain spoofing by ~70% (IAB, 2020)</li>
</ul>
<strong>Limitation:</strong> ads.txt doesn't guarantee inventory is viewable or bot-free — only that the seller is legitimate.`,
            es: `<strong>ads.txt (Authorized Digital Sellers)</strong> es un estándar IAB creado para que los publishers declaren explícitamente qué SSPs y Ad Exchanges están autorizados a vender su inventario.<br><br>
<strong>Cómo funciona:</strong>
<ul>
  <li>El publisher crea un archivo <code>ads.txt</code> en el root del dominio: <code>publisher.com/ads.txt</code></li>
  <li>Cada línea declara un vendedor autorizado en el formato: <code>SSP, Publisher-ID, DIRECT o RESELLER, Seller-Account-ID</code></li>
  <li>Los DSPs y crawlers verifican el ads.txt antes de pujar — el inventario no listado se bloquea o desvaloriza</li>
</ul>
<strong>sellers.json</strong> es el complemento del lado del vendedor: los SSPs publican quiénes son sus publishers autorizados.<br><br>
<strong>app-ads.txt:</strong> versión para apps móviles — listada en la Developer Store.<br><br>
<strong>Cómo combate el Domain Spoofing:</strong>
<ul>
  <li>Si un sitio fraudulento declara vender inventario de "elpais.com", el DSP consulta <code>elpais.com/ads.txt</code></li>
  <li>Si el SSP fraudulento no está listado → la puja se bloquea</li>
  <li>La adopción del ads.txt redujo el domain spoofing en ~70%</li>
</ul>
<strong>Limitación:</strong> ads.txt no garantiza que el inventario sea viewable o libre de bots.`,
          },
          tags: ['ads.txt', 'sellers.json', 'domain-spoofing', 'IAB', 'supply-chain', 'fraude'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: { pt: 'Como o fim dos third-party cookies impacta o programático e quais as alternativas?', en: 'How does the end of third-party cookies impact programmatic and what are the alternatives?', es: '¿Cómo impacta el fin de las cookies de terceros en la programática y cuáles son las alternativas?' },
          a: {
            pt: `<strong>Contexto:</strong> cookies de terceiros (3rd party cookies) foram o pilar do programático por 25 anos — rastreamento cross-site, segmentação de audiência, frequency capping e atribuição dependiam deles. Google Chrome (70% de share) bloqueou cookies de terceiros em 2024.<br><br>
<strong>O que se perde com os 3rd party cookies:</strong>
<ul>
  <li>Segmentação comportamental cross-site ("usuário visitou carro.com e shopping.com")</li>
  <li>Retargeting fora do ambiente do publisher</li>
  <li>Frequency capping cross-publisher</li>
  <li>Attribution multi-touch cross-site</li>
  <li>Audience extension de 3rd party data providers</li>
</ul>
<strong>Alternativas e soluções:</strong>
<ul>
  <li><strong>1st Party Data + Walled Gardens:</strong> dados próprios dentro de ambientes fechados (Google, Meta, Amazon). Mais precisão, menos escala open web.</li>
  <li><strong>Contextual Targeting:</strong> segmentação por contexto do conteúdo da página em vez de perfil do usuário. IA semântica (ex: GumGum Verity, Oracle Moat) para categorização avançada.</li>
  <li><strong>Universal IDs / Email-based IDs:</strong> UID2 (Trade Desk), LiveRamp RampID, ID5, SharedID — hash criptográfico de email para identificação cross-publisher com consentimento.</li>
  <li><strong>Privacy Sandbox (Google):</strong> conjunto de APIs que rodam no Chrome: Topics API (categorias de interesse sem revelar histórico), Protected Audience API (retargeting on-device), Attribution Reporting API.</li>
  <li><strong>Clean Rooms:</strong> ambientes seguros onde duas empresas cruzam dados sem expor dados brutos (ex: Google Ads Data Hub, AWS Clean Rooms, InfoSum). Permite análise de overlap sem compartilhar PII.</li>
  <li><strong>Cohort-based targeting:</strong> segmentar grupos de usuários com perfis semelhantes em vez de indivíduos.</li>
</ul>
<strong>Impacto por canal:</strong> walled gardens (Meta, Google, Amazon) são menos afetados — têm login. Open web programático é o mais impactado.`,
            en: `<strong>Context:</strong> third-party cookies were the pillar of programmatic for 25 years — cross-site tracking, audience segmentation, frequency capping and attribution depended on them. Google Chrome (70% share) blocked third-party cookies in 2024.<br><br>
<strong>What's lost with 3rd party cookies:</strong>
<ul>
  <li>Cross-site behavioral segmentation ("user visited car.com and shopping.com")</li>
  <li>Retargeting outside the publisher environment</li>
  <li>Cross-publisher frequency capping</li>
  <li>Cross-site multi-touch attribution</li>
  <li>Audience extension from 3rd party data providers</li>
</ul>
<strong>Alternatives and solutions:</strong>
<ul>
  <li><strong>1st Party Data + Walled Gardens:</strong> own data within closed environments (Google, Meta, Amazon). More precision, less open web scale.</li>
  <li><strong>Contextual Targeting:</strong> segmentation by page content context instead of user profile. Semantic AI for advanced categorization.</li>
  <li><strong>Universal IDs / Email-based IDs:</strong> UID2 (Trade Desk), LiveRamp RampID, ID5, SharedID — cryptographic email hash for cross-publisher identification with consent.</li>
  <li><strong>Privacy Sandbox (Google):</strong> set of APIs running in Chrome: Topics API, Protected Audience API (on-device retargeting), Attribution Reporting API.</li>
  <li><strong>Clean Rooms:</strong> secure environments where two companies cross-reference data without exposing raw data (Google Ads Data Hub, AWS Clean Rooms, InfoSum).</li>
  <li><strong>Cohort-based targeting:</strong> target groups of users with similar profiles instead of individuals.</li>
</ul>
<strong>Impact by channel:</strong> walled gardens (Meta, Google, Amazon) are less affected — they have login. Open web programmatic is the most impacted.`,
            es: `<strong>Contexto:</strong> las cookies de terceros fueron el pilar de la programática durante 25 años. Google Chrome (70% de cuota) bloqueó las cookies de terceros en 2024.<br><br>
<strong>Qué se pierde con las cookies de 3rd party:</strong>
<ul>
  <li>Segmentación conductual cross-site</li>
  <li>Retargeting fuera del entorno del publisher</li>
  <li>Frequency capping cross-publisher</li>
  <li>Atribución multi-touch cross-site</li>
  <li>Extensión de audiencia de proveedores de datos de terceros</li>
</ul>
<strong>Alternativas y soluciones:</strong>
<ul>
  <li><strong>1st Party Data + Walled Gardens:</strong> datos propios dentro de entornos cerrados. Más precisión, menos escala en la open web.</li>
  <li><strong>Contextual Targeting:</strong> segmentación por contexto del contenido de la página en lugar del perfil del usuario.</li>
  <li><strong>Universal IDs:</strong> UID2 (Trade Desk), LiveRamp RampID, ID5, SharedID — hash criptográfico de email para identificación cross-publisher con consentimiento.</li>
  <li><strong>Privacy Sandbox (Google):</strong> conjunto de APIs en Chrome: Topics API, Protected Audience API, Attribution Reporting API.</li>
  <li><strong>Clean Rooms:</strong> entornos seguros donde dos empresas cruzan datos sin exponer datos brutos (Google Ads Data Hub, AWS Clean Rooms, InfoSum).</li>
  <li><strong>Cohort-based targeting:</strong> segmentar grupos de usuarios con perfiles similares en lugar de individuos.</li>
</ul>
<strong>Impacto por canal:</strong> los walled gardens son menos afectados. La open web programática es la más impactada.`,
          },
          tags: ['cookie', 'Privacy-Sandbox', 'UID2', 'cookieless', '1st-party', 'Clean-Room', 'contextual'],
        },
        {
          q: { pt: 'Como estruturar uma estratégia de programático de alto desempenho para uma campanha de branding?', en: 'How to structure a high-performance programmatic strategy for a branding campaign?', es: '¿Cómo estructurar una estrategia programática de alto rendimiento para una campaña de branding?' },
          a: {
            pt: `<strong>Framework de programático para branding (awareness e consideração):</strong><br><br>
<strong>1. Definição de KPIs de branding (≠ KPIs de performance):</strong>
<ul>
  <li>Reach (Alcance único): quantas pessoas únicas foram impactadas</li>
  <li>Frequency: média de vezes que cada pessoa viu o anúncio (meta: 3-7x dependendo da campanha)</li>
  <li>Viewability: &gt;70% MRC, &gt;50% GroupM para video</li>
  <li>VCR (Video Completion Rate): &gt;40% para skippable</li>
  <li>Brand Lift: aumento em awareness, recall e purchase intent</li>
</ul>
<strong>2. Mix de deal types por objetivo:</strong>
<ul>
  <li><strong>PG em publishers premium:</strong> garantia de inventário contextualmente seguro e de alto impacto (Globo, UOL, Veja Digital, Folha). CPM mais alto, brand safety garantida.</li>
  <li><strong>PMP com SSPs premium:</strong> curadoria de inventário sem garantia de volume. Permite testar mais publishers com mais eficiência de custo que PG.</li>
  <li><strong>Open Auction com targeting rigoroso:</strong> escala para atingir alcance, com IAS/DV para brand safety e bloqueio de IVT.</li>
</ul>
<strong>3. Estratégia de frequência e sequência:</strong>
<ul>
  <li>Frequency cap cross-publisher (exige ID universal ou login) para evitar overexposure</li>
  <li>Sequenciamento de mensagem: primeiro vídeo longo (15-30s) de awareness → depois display de reforço → depois vídeo curto (6s bumper) de recall</li>
</ul>
<strong>4. Medição:</strong>
<ul>
  <li>Brand Lift Study (Google, Meta, Nielsen) para medir incrementalidade real</li>
  <li>Reach & Frequency report no DSP</li>
  <li>Post-campaign audience overlap analysis via Clean Room</li>
</ul>`,
            en: `<strong>Programmatic framework for branding (awareness and consideration):</strong><br><br>
<strong>1. Branding KPI definition (≠ performance KPIs):</strong>
<ul>
  <li>Reach (Unique Reach): how many unique people were reached</li>
  <li>Frequency: average times each person saw the ad (target: 3-7x depending on campaign)</li>
  <li>Viewability: &gt;70% MRC, &gt;50% GroupM for video</li>
  <li>VCR (Video Completion Rate): &gt;40% for skippable</li>
  <li>Brand Lift: increase in awareness, recall and purchase intent</li>
</ul>
<strong>2. Deal type mix by objective:</strong>
<ul>
  <li><strong>PG with premium publishers:</strong> guaranteed contextually safe, high-impact inventory. Higher CPM, guaranteed brand safety.</li>
  <li><strong>PMP with premium SSPs:</strong> curated inventory without volume guarantee. Allows testing more publishers with better cost efficiency than PG.</li>
  <li><strong>Open Auction with strict targeting:</strong> scale to achieve reach, with IAS/DV for brand safety and IVT blocking.</li>
</ul>
<strong>3. Frequency and sequencing strategy:</strong>
<ul>
  <li>Cross-publisher frequency cap (requires universal ID or login) to avoid overexposure</li>
  <li>Message sequencing: first long video (15-30s) for awareness → then display reinforcement → then short video (6s bumper) for recall</li>
</ul>
<strong>4. Measurement:</strong>
<ul>
  <li>Brand Lift Study (Google, Meta, Nielsen) to measure real incrementality</li>
  <li>Reach & Frequency report in DSP</li>
  <li>Post-campaign audience overlap analysis via Clean Room</li>
</ul>`,
            es: `<strong>Framework de programática para branding (awareness y consideración):</strong><br><br>
<strong>1. Definición de KPIs de branding (≠ KPIs de performance):</strong>
<ul>
  <li>Reach (Alcance único): cuántas personas únicas fueron impactadas</li>
  <li>Frequency: promedio de veces que cada persona vio el anuncio (meta: 3-7x)</li>
  <li>Viewability: &gt;70% MRC, &gt;50% GroupM para video</li>
  <li>VCR (Video Completion Rate): &gt;40% para skippable</li>
  <li>Brand Lift: aumento en awareness, recall e intención de compra</li>
</ul>
<strong>2. Mix de tipos de deal por objetivo:</strong>
<ul>
  <li><strong>PG con publishers premium:</strong> garantía de inventario contextualmente seguro y de alto impacto. CPM más alto, brand safety garantizada.</li>
  <li><strong>PMP con SSPs premium:</strong> inventario curado sin garantía de volumen.</li>
  <li><strong>Open Auction con targeting riguroso:</strong> escala para alcance, con IAS/DV para brand safety y bloqueo de IVT.</li>
</ul>
<strong>3. Estrategia de frecuencia y secuencia:</strong>
<ul>
  <li>Frequency cap cross-publisher para evitar sobreexposición</li>
  <li>Secuenciamiento de mensaje: primero video largo (awareness) → luego display de refuerzo → luego bumper (recall)</li>
</ul>
<strong>4. Medición:</strong>
<ul>
  <li>Brand Lift Study para medir incrementalidad real</li>
  <li>Reach & Frequency report en el DSP</li>
  <li>Análisis de overlap de audiencia post-campaña via Clean Room</li>
</ul>`,
          },
          tags: ['branding', 'reach', 'frequency', 'Brand-Lift', 'PG', 'PMP', 'sequência'],
        },
        {
          q: { pt: 'O que é incrementalidade e por que ela é mais importante que atribuição por último clique no programático?', en: 'What is incrementality and why is it more important than last-click attribution in programmatic?', es: '¿Qué es la incrementalidad y por qué es más importante que la atribución de último clic en programática?' },
          a: {
            pt: `<strong>Incrementalidade</strong> mede o impacto REAL de uma campanha: quantas conversões aconteceram <em>por causa</em> do anúncio que não teriam acontecido sem ele.<br><br>
<strong>Problema da atribuição por último clique no programático:</strong>
<ul>
  <li>Retargeting programático tem CPA baixo <em>aparente</em> — mas o usuário que clicou já estava prestes a converter de qualquer forma</li>
  <li>"Fishing downstream": pescar onde os peixes já estão → métricas brilhantes, ROI real questionável</li>
  <li>Attribution por último clique superestima o valor do retargeting e subvaloriza canais de topo de funil</li>
</ul>
<strong>Como medir incrementalidade:</strong>
<ol>
  <li><strong>Ghost Ads / Holdout Test:</strong> dividir audiência em grupo exposto (vê o anúncio) e grupo controle (não vê o anúncio ou vê PSA). Comparar taxas de conversão entre grupos.</li>
  <li><strong>Geo-based incrementality:</strong> ativar campanha em algumas regiões e medir diferença de conversão vs. regiões sem campanha.</li>
  <li><strong>Brand Lift Studies:</strong> para métricas de branding — awareness, recall, intent.</li>
  <li><strong>iROAS (Incremental ROAS):</strong> <code>iROAS = Receita incremental / Gasto em mídia</code></li>
</ol>
<strong>Resultado típico de testes de incrementalidade em retargeting:</strong> 20-40% das conversões atribuídas ao retargeting são incrementais — o restante teria ocorrido de qualquer forma. Isso muda radicalmente a alocação de budget ideal.<br><br>
<strong>Ferramentas:</strong> Google Ads Data Hub, Meta Conversion Lift, The Trade Desk Kokai Incrementality, Measured.com, Northbeam.`,
            en: `<strong>Incrementality</strong> measures the REAL impact of a campaign: how many conversions happened <em>because of</em> the ad that wouldn't have happened without it.<br><br>
<strong>Problem with last-click attribution in programmatic:</strong>
<ul>
  <li>Programmatic retargeting has an <em>apparent</em> low CPA — but the user who clicked was already about to convert anyway</li>
  <li>"Fishing downstream": fishing where fish already are → brilliant metrics, questionable real ROI</li>
  <li>Last-click attribution overestimates retargeting value and undervalues top-of-funnel channels</li>
</ul>
<strong>How to measure incrementality:</strong>
<ol>
  <li><strong>Ghost Ads / Holdout Test:</strong> split audience into exposed group (sees the ad) and control group (doesn't see the ad or sees PSA). Compare conversion rates between groups.</li>
  <li><strong>Geo-based incrementality:</strong> activate campaign in some regions and measure conversion difference vs. regions without campaign.</li>
  <li><strong>Brand Lift Studies:</strong> for branding metrics — awareness, recall, intent.</li>
  <li><strong>iROAS (Incremental ROAS):</strong> <code>iROAS = Incremental Revenue / Media Spend</code></li>
</ol>
<strong>Typical result of incrementality tests in retargeting:</strong> 20-40% of conversions attributed to retargeting are incremental — the rest would have occurred anyway. This radically changes the optimal budget allocation.<br><br>
<strong>Tools:</strong> Google Ads Data Hub, Meta Conversion Lift, The Trade Desk Kokai Incrementality, Measured.com, Northbeam.`,
            es: `La <strong>incrementalidad</strong> mide el impacto REAL de una campaña: cuántas conversiones ocurrieron <em>gracias al</em> anuncio que no habrían ocurrido sin él.<br><br>
<strong>Problema de la atribución de último clic en programática:</strong>
<ul>
  <li>El retargeting programático tiene un CPA bajo <em>aparente</em> — pero el usuario que hizo clic ya estaba a punto de convertir de todas formas</li>
  <li>"Pesca aguas abajo": pescar donde los peces ya están → métricas brillantes, ROI real cuestionable</li>
  <li>La atribución de último clic sobreestima el valor del retargeting y subestima los canales de tope de embudo</li>
</ul>
<strong>Cómo medir la incrementalidad:</strong>
<ol>
  <li><strong>Ghost Ads / Holdout Test:</strong> dividir la audiencia en grupo expuesto y grupo de control. Comparar tasas de conversión entre grupos.</li>
  <li><strong>Incrementalidad geográfica:</strong> activar campaña en algunas regiones y medir la diferencia de conversión vs. regiones sin campaña.</li>
  <li><strong>Brand Lift Studies:</strong> para métricas de branding.</li>
  <li><strong>iROAS (Incremental ROAS):</strong> <code>iROAS = Ingresos incrementales / Gasto en medios</code></li>
</ol>
<strong>Resultado típico de tests de incrementalidad en retargeting:</strong> 20-40% de las conversiones atribuidas al retargeting son incrementales.<br><br>
<strong>Herramientas:</strong> Google Ads Data Hub, Meta Conversion Lift, The Trade Desk Kokai Incrementality, Measured.com, Northbeam.`,
          },
          tags: ['incrementalidade', 'atribuição', 'holdout', 'iROAS', 'retargeting', 'Brand-Lift'],
        },
      ],
    },
  ],
};

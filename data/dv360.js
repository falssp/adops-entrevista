// Módulo DV360 — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['dv360'] = {
  icon: '🎯',
  name: { pt: 'Display & Video 360', en: 'Display & Video 360', es: 'Display & Video 360' },
  desc: {
    pt: 'DSP do Google — compra programática de display, vídeo, áudio, CTV e DOOH.',
    en: "Google's DSP — programmatic buying across display, video, audio, CTV and DOOH.",
    es: 'DSP de Google — compra programática de display, video, audio, CTV y DOOH.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'Qual a diferença entre DV360 e Google Ads para compra de display?',
            en: 'What is the difference between DV360 and Google Ads for display buying?',
            es: '¿Cuál es la diferencia entre DV360 y Google Ads para compra de display?',
          },
          a: {
            pt: `<table><tr><th>Critério</th><th>Google Ads</th><th>DV360</th></tr>
<tr><td>Inventário</td><td>GDN</td><td>GDN + Open Exchange + PMP + PG</td></tr>
<tr><td>Audience</td><td>Google 1P</td><td>Google + 3P data + CRM</td></tr>
<tr><td>Controle</td><td>Simplificado</td><td>Granular (bid, freq, placement)</td></tr>
<tr><td>Acesso</td><td>Self-serve</td><td>Agências / grandes anunciantes</td></tr></table>
<br>Regra de ouro: Google Ads para SMB e campanhas simples; DV360 quando precisa de deal access, audience de terceiros ou controle granular de brand safety.`,
            en: `<table><tr><th>Criteria</th><th>Google Ads</th><th>DV360</th></tr>
<tr><td>Inventory</td><td>GDN</td><td>GDN + Open Exchange + PMP + PG</td></tr>
<tr><td>Audience</td><td>Google 1P</td><td>Google + 3P data + CRM</td></tr>
<tr><td>Control</td><td>Simplified</td><td>Granular (bid, freq, placement)</td></tr>
<tr><td>Access</td><td>Self-serve</td><td>Agencies / large advertisers</td></tr></table>
<br>Golden rule: Google Ads for SMB and simple campaigns; DV360 when you need deal access, third-party audiences, or granular brand safety control.`,
            es: `<table><tr><th>Criterio</th><th>Google Ads</th><th>DV360</th></tr>
<tr><td>Inventario</td><td>GDN</td><td>GDN + Open Exchange + PMP + PG</td></tr>
<tr><td>Audience</td><td>Google 1P</td><td>Google + 3P data + CRM</td></tr>
<tr><td>Control</td><td>Simplificado</td><td>Granular (bid, freq, placement)</td></tr>
<tr><td>Acceso</td><td>Self-serve</td><td>Agencias / grandes anunciantes</td></tr></table>
<br>Regla de oro: Google Ads para SMB y campañas simples; DV360 cuando se necesita deal access, audiences de terceros o control granular de brand safety.`,
          },
          tags: ['DSP', 'programmatic', 'GDN', 'inventory'],
        },
        {
          q: {
            pt: 'Explique a hierarquia do DV360: Partner → Advertiser → Campaign → Insertion Order → Line Item.',
            en: 'Explain the DV360 hierarchy: Partner → Advertiser → Campaign → Insertion Order → Line Item.',
            es: 'Explica la jerarquía de DV360: Partner → Advertiser → Campaign → Insertion Order → Line Item.',
          },
          a: {
            pt: `<ul>
  <li><strong>Partner:</strong> nível de agência — agrupa múltiplos Advertisers. Controla billing e permissões globais.</li>
  <li><strong>Advertiser:</strong> nível de cliente — tem seu próprio Floodlight, audiences e brand safety settings.</li>
  <li><strong>Campaign:</strong> agrupa IOs por objetivo ou período de voo. Sem configurações de compra.</li>
  <li><strong>Insertion Order (IO):</strong> envelope de budget e datas. Define pacing (even vs. ASAP) e KPI de campanha.</li>
  <li><strong>Line Item (LI):</strong> onde acontece a compra — define targeting, bid strategy, frequência, criativos e tipo de inventário (display, vídeo, áudio, etc.).</li>
</ul>
<strong>Diferença chave vs CM360:</strong> no DV360 o budget fica no IO; no CM360 o conceito de budget é na Campaign mas não controla entrega diretamente.`,
            en: `<ul>
  <li><strong>Partner:</strong> agency level — groups multiple Advertisers. Controls billing and global permissions.</li>
  <li><strong>Advertiser:</strong> client level — has its own Floodlight, audiences and brand safety settings.</li>
  <li><strong>Campaign:</strong> groups IOs by objective or flight period. No buying settings.</li>
  <li><strong>Insertion Order (IO):</strong> budget and date envelope. Defines pacing (even vs. ASAP) and campaign KPI.</li>
  <li><strong>Line Item (LI):</strong> where buying happens — defines targeting, bid strategy, frequency, creatives and inventory type (display, video, audio, etc.).</li>
</ul>
<strong>Key difference vs CM360:</strong> in DV360 budget lives at the IO; in CM360 the budget concept is at Campaign level but doesn't directly control delivery.`,
            es: `<ul>
  <li><strong>Partner:</strong> nivel de agencia — agrupa múltiples Advertisers. Controla billing y permisos globales.</li>
  <li><strong>Advertiser:</strong> nivel de cliente — tiene su propio Floodlight, audiences y brand safety settings.</li>
  <li><strong>Campaign:</strong> agrupa IOs por objetivo o período de vuelo. Sin configuraciones de compra.</li>
  <li><strong>Insertion Order (IO):</strong> envoltorio de budget y fechas. Define pacing (even vs. ASAP) y KPI de campaña.</li>
  <li><strong>Line Item (LI):</strong> donde ocurre la compra — define targeting, bid strategy, frecuencia, creativos y tipo de inventario (display, video, audio, etc.).</li>
</ul>
<strong>Diferencia clave vs CM360:</strong> en DV360 el budget vive en el IO; en CM360 el concepto de budget está en Campaign pero no controla directamente la entrega.`,
          },
          tags: ['hierarchy', 'IO', 'line-item', 'pacing'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'Explique os tipos de deals programáticos: Open Auction, PMP, Preferred Deal e PG.',
            en: 'Explain programmatic deal types: Open Auction, PMP, Preferred Deal and PG.',
            es: 'Explica los tipos de deals programáticos: Open Auction, PMP, Preferred Deal y PG.',
          },
          a: {
            pt: `<ul>
  <li><strong>Open Auction (RTB):</strong> leilão aberto — qualquer comprador pode participar. Menor CPM, menor controle de brand safety.</li>
  <li><strong>Private Marketplace (PMP):</strong> leilão fechado com Deal ID — publisher convida DSPs selecionadas. CPM floor negociado, sem garantia de volume.</li>
  <li><strong>Preferred Deal:</strong> preço fixo negociado, sem garantia de entrega — o publisher oferece o inventário antes do open auction.</li>
  <li><strong>Programmatic Guaranteed (PG):</strong> preço fixo + volume garantido. Requer Deal ID configurado no DV360 e forecast do publisher.</li>
</ul>
<strong>Hierarquia de prioridade no ad server do publisher:</strong><br>
PG &gt; Direct &gt; Preferred &gt; PMP &gt; Open Auction`,
            en: `<ul>
  <li><strong>Open Auction (RTB):</strong> open auction — any buyer can participate. Lower CPM, less brand safety control.</li>
  <li><strong>Private Marketplace (PMP):</strong> closed auction with Deal ID — publisher invites selected DSPs. Negotiated floor CPM, no volume guarantee.</li>
  <li><strong>Preferred Deal:</strong> fixed negotiated price, no delivery guarantee — publisher offers inventory before open auction.</li>
  <li><strong>Programmatic Guaranteed (PG):</strong> fixed price + guaranteed volume. Requires Deal ID in DV360 and publisher forecast.</li>
</ul>
<strong>Publisher ad server priority hierarchy:</strong><br>
PG &gt; Direct &gt; Preferred &gt; PMP &gt; Open Auction`,
            es: `<ul>
  <li><strong>Open Auction (RTB):</strong> subasta abierta — cualquier comprador puede participar. CPM menor, menor control de brand safety.</li>
  <li><strong>Private Marketplace (PMP):</strong> subasta cerrada con Deal ID — el publisher invita DSPs seleccionadas. CPM floor negociado, sin garantía de volumen.</li>
  <li><strong>Preferred Deal:</strong> precio fijo negociado, sin garantía de entrega — el publisher ofrece el inventario antes del open auction.</li>
  <li><strong>Programmatic Guaranteed (PG):</strong> precio fijo + volumen garantizado. Requiere Deal ID en DV360 y forecast del publisher.</li>
</ul>
<strong>Jerarquía de prioridad en el ad server del publisher:</strong><br>
PG &gt; Direct &gt; Preferred &gt; PMP &gt; Open Auction`,
          },
          tags: ['PMP', 'PG', 'RTB', 'deal-id'],
        },
        {
          q: {
            pt: 'Como funciona a estratégia de bid no DV360? Quais são as opções disponíveis?',
            en: 'How does bidding strategy work in DV360? What options are available?',
            es: '¿Cómo funciona la estrategia de bid en DV360? ¿Qué opciones están disponibles?',
          },
          a: {
            pt: `<strong>Estratégias disponíveis no Line Item:</strong>
<ul>
  <li><strong>Fixed CPM:</strong> bid fixo — controle máximo, menor eficiência algorítmica</li>
  <li><strong>Maximize Viewable Impressions:</strong> DV360 ajusta bid para maximizar viewability</li>
  <li><strong>CPA Target:</strong> otimiza para custo por ação — requer dados de conversão via Floodlight</li>
  <li><strong>Maximize Conversions:</strong> gasta o budget maximizando volume de conversões</li>
  <li><strong>Minimize CPM:</strong> gasta no menor CPM possível (branding de alcance)</li>
  <li><strong>Maximize Clicks:</strong> otimiza para volume de cliques dentro do budget</li>
</ul>
<strong>Dica prática:</strong> para performance, usar CPA Target com janela de aprendizado de 2 semanas antes de avaliar. Sempre confirmar que o Floodlight está disparando antes de ativar otimização automática.`,
            en: `<strong>Available strategies at Line Item level:</strong>
<ul>
  <li><strong>Fixed CPM:</strong> fixed bid — maximum control, lower algorithmic efficiency</li>
  <li><strong>Maximize Viewable Impressions:</strong> DV360 adjusts bid to maximize viewability</li>
  <li><strong>CPA Target:</strong> optimizes for cost per action — requires conversion data via Floodlight</li>
  <li><strong>Maximize Conversions:</strong> spends budget maximizing conversion volume</li>
  <li><strong>Minimize CPM:</strong> spends at the lowest possible CPM (reach branding)</li>
  <li><strong>Maximize Clicks:</strong> optimizes for click volume within budget</li>
</ul>
<strong>Practical tip:</strong> for performance, use CPA Target with a 2-week learning window before evaluating. Always confirm Floodlight is firing before enabling automatic optimization.`,
            es: `<strong>Estrategias disponibles a nivel de Line Item:</strong>
<ul>
  <li><strong>Fixed CPM:</strong> bid fijo — control máximo, menor eficiencia algorítmica</li>
  <li><strong>Maximize Viewable Impressions:</strong> DV360 ajusta el bid para maximizar viewability</li>
  <li><strong>CPA Target:</strong> optimiza para costo por acción — requiere datos de conversión via Floodlight</li>
  <li><strong>Maximize Conversions:</strong> gasta el budget maximizando volumen de conversiones</li>
  <li><strong>Minimize CPM:</strong> gasta al menor CPM posible (branding de alcance)</li>
  <li><strong>Maximize Clicks:</strong> optimiza para volumen de clics dentro del budget</li>
</ul>
<strong>Consejo práctico:</strong> para performance, usar CPA Target con ventana de aprendizaje de 2 semanas antes de evaluar. Siempre confirmar que Floodlight dispara antes de activar optimización automática.`,
          },
          tags: ['bidding', 'CPA', 'viewability', 'optimization'],
        },
        {
          q: {
            pt: 'O que é brand safety no DV360 e quais ferramentas estão disponíveis?',
            en: 'What is brand safety in DV360 and what tools are available?',
            es: '¿Qué es brand safety en DV360 y qué herramientas están disponibles?',
          },
          a: {
            pt: `Brand safety é o conjunto de controles que evitam que um anúncio apareça em contextos inadequados (conteúdo adulto, violência, fake news, etc.).<br><br>
<strong>Ferramentas no DV360:</strong>
<ul>
  <li><strong>Content Labels:</strong> Google classifica o inventário — é possível excluir categorias (DL-G, DL-PG, DL-T, DL-MA)</li>
  <li><strong>Sensitive Categories:</strong> exclusão por tipo de conteúdo (álcool, jogos, política, etc.)</li>
  <li><strong>Publisher Blocklists:</strong> upload de lista de domínios/apps bloqueados</li>
  <li><strong>Publisher Allowlists:</strong> comprar APENAS em domínios aprovados (PMP ou lista manual)</li>
  <li><strong>Verification partners:</strong> integração nativa com IAS, DoubleVerify e Moat para camada adicional de controle e blocking em tempo real</li>
</ul>
<strong>Recomendação padrão:</strong> para marcas conservadoras, combinar Content Label DL-G/PG + Sensitive Categories off + DoubleVerify pre-bid filtering.`,
            en: `Brand safety is the set of controls that prevent an ad from appearing in inappropriate contexts (adult content, violence, fake news, etc.).<br><br>
<strong>Tools in DV360:</strong>
<ul>
  <li><strong>Content Labels:</strong> Google classifies inventory — categories can be excluded (DL-G, DL-PG, DL-T, DL-MA)</li>
  <li><strong>Sensitive Categories:</strong> exclusion by content type (alcohol, gambling, politics, etc.)</li>
  <li><strong>Publisher Blocklists:</strong> upload blocked domain/app list</li>
  <li><strong>Publisher Allowlists:</strong> buy ONLY on approved domains (PMP or manual list)</li>
  <li><strong>Verification partners:</strong> native integration with IAS, DoubleVerify and Moat for additional real-time blocking</li>
</ul>
<strong>Standard recommendation:</strong> for conservative brands, combine Content Label DL-G/PG + Sensitive Categories off + DoubleVerify pre-bid filtering.`,
            es: `Brand safety es el conjunto de controles que evitan que un anuncio aparezca en contextos inadecuados (contenido adulto, violencia, fake news, etc.).<br><br>
<strong>Herramientas en DV360:</strong>
<ul>
  <li><strong>Content Labels:</strong> Google clasifica el inventario — se pueden excluir categorías (DL-G, DL-PG, DL-T, DL-MA)</li>
  <li><strong>Sensitive Categories:</strong> exclusión por tipo de contenido (alcohol, juegos, política, etc.)</li>
  <li><strong>Publisher Blocklists:</strong> upload de lista de dominios/apps bloqueados</li>
  <li><strong>Publisher Allowlists:</strong> comprar SOLO en dominios aprobados (PMP o lista manual)</li>
  <li><strong>Verification partners:</strong> integración nativa con IAS, DoubleVerify y Moat para capa adicional de blocking en tiempo real</li>
</ul>
<strong>Recomendación estándar:</strong> para marcas conservadoras, combinar Content Label DL-G/PG + Sensitive Categories off + filtrado pre-bid de DoubleVerify.`,
          },
          tags: ['brand-safety', 'IAS', 'DoubleVerify', 'blocklist'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como configurar frequency capping cross-device no DV360?',
            en: 'How to set up cross-device frequency capping in DV360?',
            es: '¿Cómo configurar frequency capping cross-device en DV360?',
          },
          a: {
            pt: `O frequency capping padrão do DV360 é baseado em cookie — conta separado por device. O cross-device capping usa o Google Identity Graph para unificar usuários entre dispositivos.<br><br>
<strong>Configuração:</strong>
<ol>
  <li>No Line Item, acessar <em>Frequency Management</em></li>
  <li>Selecionar <strong>Exposed</strong> como tipo de contagem (ao invés de Cookie-based)</li>
  <li>Definir limite (ex: 5 impressões / 7 dias / usuário)</li>
  <li>Nível de aplicação: Line Item, IO ou Campaign</li>
</ol>
<strong>Requisitos:</strong> o Advertiser precisa estar com o <em>Cross-Device Tracking</em> ativado e vinculado ao CM360.<br><br>
<strong>Limitação:</strong> o grafo de identidade do Google tem cobertura maior em usuários logados (Gmail, YouTube). Em inventário open web sem login, o capping ainda depende de cookie.`,
            en: `DV360's default frequency capping is cookie-based — counts separately per device. Cross-device capping uses the Google Identity Graph to unify users across devices.<br><br>
<strong>Setup:</strong>
<ol>
  <li>In the Line Item, go to <em>Frequency Management</em></li>
  <li>Select <strong>Exposed</strong> as the counting type (instead of Cookie-based)</li>
  <li>Set the limit (e.g., 5 impressions / 7 days / user)</li>
  <li>Application level: Line Item, IO, or Campaign</li>
</ol>
<strong>Requirements:</strong> the Advertiser needs <em>Cross-Device Tracking</em> enabled and linked to CM360.<br><br>
<strong>Limitation:</strong> Google's identity graph has higher coverage for logged-in users (Gmail, YouTube). On open web inventory without login, capping still relies on cookies.`,
            es: `El frequency capping estándar de DV360 está basado en cookies — cuenta por separado por dispositivo. El cross-device capping usa el Google Identity Graph para unificar usuarios entre dispositivos.<br><br>
<strong>Configuración:</strong>
<ol>
  <li>En el Line Item, acceder a <em>Frequency Management</em></li>
  <li>Seleccionar <strong>Exposed</strong> como tipo de conteo (en lugar de Cookie-based)</li>
  <li>Definir límite (ej: 5 impresiones / 7 días / usuario)</li>
  <li>Nivel de aplicación: Line Item, IO o Campaign</li>
</ol>
<strong>Requisitos:</strong> el Advertiser necesita tener <em>Cross-Device Tracking</em> activado y vinculado a CM360.<br><br>
<strong>Limitación:</strong> el grafo de identidad de Google tiene mayor cobertura en usuarios logueados (Gmail, YouTube). En inventario open web sin login, el capping aún depende de cookies.`,
          },
          tags: ['frequency-capping', 'cross-device', 'identity-graph'],
        },
      ],
    },
  ],
};

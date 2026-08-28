// © 2025 AdOps Interview Kit — Todos os direitos reservados. Reprodução proibida.
window.__adopsData = window.__adopsData || {};
window.__adopsData['microsoft'] = {
  icon: '🪟',
  name: { pt: 'Microsoft Advertising', en: 'Microsoft Advertising', es: 'Microsoft Advertising' },
  desc: {
    pt: 'Bing Ads, Microsoft Audience Network, campanhas de Search e Display na plataforma Microsoft.',
    en: 'Bing Ads, Microsoft Audience Network, Search and Display campaigns on the Microsoft platform.',
    es: 'Bing Ads, Microsoft Audience Network, campañas de Search y Display en la plataforma Microsoft.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: { pt: 'Quais são as principais diferenças entre Microsoft Advertising e Google Ads e quando vale a pena usar o Bing?', en: 'What are the main differences between Microsoft Advertising and Google Ads and when is it worth using Bing?', es: '¿Cuáles son las principales diferencias entre Microsoft Advertising y Google Ads y cuándo vale la pena usar Bing?' },
          a: {
            pt: `<strong>Microsoft Advertising vs Google Ads:</strong><br><br>
<strong>Principais diferenças:</strong><br><br>
| Aspecto | Microsoft Ads | Google Ads |
|---------|--------------|------------|
| Market share (EUA) | ~6-8% | ~88-92% |
| Rede | Bing, Yahoo, AOL, MSN, Outlook, Edge | Google, YouTube, Gmail, GDN |
| Audiência | Mais velha (35-54), renda maior, B2B | Mais ampla, todas as idades |
| CPCs | 20-35% menores (média) | Benchmark do mercado |
| Competição | Menos leilões concorridos | Altamente competitivo |
| Integração | Microsoft 365, LinkedIn | Google Workspace, YouTube |<br><br>
<strong>Quando vale a pena usar Microsoft Ads:</strong><br>
• <strong>Sempre como complemento</strong> — mesmo que secundário, expande o alcance de search<br>
• <strong>B2B</strong> — integração nativa com LinkedIn (targeting por cargo, empresa, setor)<br>
• <strong>Público mais velho e renda maior</strong> — Windows, Edge e Outlook têm perfil demográfico diferente<br>
• <strong>CPCs muito altos no Google</strong> — nichos como seguros, financeiro, jurídico têm CPCs menores no Bing<br>
• <strong>Importar do Google</strong> — importação automática de campanhas Google em minutos<br>
• <strong>E-commerce com Bing Shopping</strong> — Product Ads com volume adicional`,
            en: `<strong>Microsoft Advertising vs Google Ads:</strong><br><br>
<strong>Key differences:</strong><br>
• Market share (US): Bing ~6-8% vs Google ~88-92%<br>
• Network: Bing, Yahoo, AOL, MSN, Outlook, Edge vs Google, YouTube, Gmail, GDN<br>
• Audience: Older (35-54), higher income, B2B vs broader, all ages<br>
• CPCs: 20-35% lower on average on Microsoft<br>
• Competition: Less competitive auctions vs highly competitive<br>
• Integration: Microsoft 365, LinkedIn vs Google Workspace, YouTube<br><br>
<strong>When to use Microsoft Ads:</strong><br>
• Always as complement — expands search reach<br>
• B2B — native LinkedIn targeting (job title, company, industry)<br>
• Older, higher-income audience — Windows/Edge/Outlook demographic profile<br>
• Very high Google CPCs — finance, insurance, legal niches are cheaper on Bing<br>
• Easy Google import — campaigns can be imported in minutes`,
            es: `<strong>Microsoft Advertising vs Google Ads:</strong><br><br>
<strong>Principales diferencias:</strong><br>
• Cuota de mercado (EE.UU.): Bing ~6-8% vs Google ~88-92%<br>
• Red: Bing, Yahoo, AOL, MSN, Outlook, Edge vs Google, YouTube, Gmail<br>
• Audiencia: Mayor (35-54 años), mayor ingreso, B2B vs más amplia<br>
• CPCs: 20-35% menores en promedio en Microsoft<br>
• Integración: Microsoft 365, LinkedIn vs Google Workspace<br><br>
<strong>Cuándo usar Microsoft Ads:</strong><br>
• Siempre como complemento — amplía el alcance de search<br>
• B2B — targeting nativo de LinkedIn (cargo, empresa, sector)<br>
• Audiencia mayor y de mayor ingreso<br>
• CPCs muy altos en Google — nichos de finanzas, seguros, legal son más baratos en Bing`,
          },
          tags: ['Microsoft', 'Bing', 'Google Ads', 'diferenças', 'B2B', 'CPC']
        },
        {
          q: { pt: 'Como importar campanhas do Google Ads para o Microsoft Advertising e quais ajustes são necessários?', en: 'How to import campaigns from Google Ads to Microsoft Advertising and what adjustments are needed?', es: '¿Cómo importar campañas de Google Ads a Microsoft Advertising y qué ajustes son necesarios?' },
          a: {
            pt: `<strong>Importação do Google Ads para Microsoft Advertising:</strong><br><br>
<strong>Como importar:</strong><br>
1. Microsoft Ads Manager → Import → Import from Google Ads<br>
2. Autenticar conta Google Ads<br>
3. Selecionar campanhas, ad groups e configurações a importar<br>
4. Escolher: importação única ou recorrente (diária/semanal/mensal)<br>
5. Revisar preview e confirmar<br><br>
<strong>O que é importado automaticamente:</strong><br>
• Campanhas, ad groups, anúncios, keywords, negativos<br>
• Extensões de anúncio (sitelinks, callouts, structured snippets)<br>
• Ajustes de lance por dispositivo, localização<br>
• Listas de remarketing (se UET Tag instalada)<br><br>
<strong>O que NÃO é importado / precisa ajuste manual:</strong><br>
• <strong>Match types</strong> — Bing tem comportamento ligeiramente diferente de broad match<br>
• <strong>Audience targeting</strong> — LinkedIn targeting (exclusivo do Bing) deve ser configurado separado<br>
• <strong>Budget</strong> — revisar: Bing tem CPCs menores, não precisa do mesmo orçamento<br>
• <strong>UET Tag</strong> — Universal Event Tracking (equivalente do Google Tag) precisa ser instalada no site separadamente<br>
• <strong>Smart Bidding</strong> — estratégias automáticas precisam de período de aprendizado<br>
• <strong>Extensões específicas do Bing</strong> — Action Extensions, Review Extensions não existem no Google<br><br>
<strong>Boas práticas pós-importação:</strong><br>
• Revisar Quality Score das keywords (pode diferir do Google)<br>
• Adicionar negativos específicos para a audiência do Bing<br>
• Ajustar lances para refletir o menor CPC histórico do Bing<br>
• Configurar UET Tag e metas de conversão antes de ativar`,
            en: `<strong>Google Ads to Microsoft Advertising import:</strong><br><br>
<strong>How to import:</strong><br>
1. Microsoft Ads Manager → Import → Import from Google Ads<br>
2. Authenticate Google Ads account<br>
3. Select campaigns, ad groups, settings to import<br>
4. Choose: one-time or recurring import (daily/weekly/monthly)<br>
5. Review preview and confirm<br><br>
<strong>What's imported automatically:</strong> Campaigns, ad groups, ads, keywords, negatives, ad extensions, bid adjustments, remarketing lists (if UET Tag installed)<br><br>
<strong>What's NOT imported / needs manual adjustment:</strong><br>
• LinkedIn targeting (Bing-exclusive) — configure separately<br>
• Budget — review: Bing has lower CPCs, doesn't need same budget<br>
• UET Tag — must be installed on site separately<br>
• Smart Bidding — needs learning period<br><br>
<strong>Post-import best practices:</strong> Review keyword Quality Score, add Bing-specific negatives, adjust bids for lower Bing CPCs, set up UET Tag before activating`,
            es: `<strong>Importación de Google Ads a Microsoft Advertising:</strong><br><br>
<strong>Cómo importar:</strong><br>
1. Microsoft Ads Manager → Import → Import from Google Ads<br>
2. Autenticar cuenta de Google Ads → seleccionar campañas → elegir frecuencia<br><br>
<strong>Qué se importa automáticamente:</strong> Campañas, grupos de anuncios, anuncios, palabras clave, negativos, extensiones, ajustes de puja<br><br>
<strong>Qué NO se importa / necesita ajuste manual:</strong><br>
• LinkedIn targeting (exclusivo de Bing)<br>
• Presupuesto — revisar: Bing tiene CPCs menores<br>
• UET Tag — debe instalarse en el sitio por separado<br>
• Smart Bidding — necesita período de aprendizaje`,
          },
          tags: ['Microsoft', 'Bing', 'import', 'Google Ads', 'UET', 'campanhas']
        },
      ]
    },
    {
      id: 'mid',
      questions: [
        {
          q: { pt: 'O que é a Microsoft Audience Network e como ela se diferencia do Google Display Network?', en: 'What is the Microsoft Audience Network and how does it differ from the Google Display Network?', es: '¿Qué es la Microsoft Audience Network y cómo se diferencia de la Google Display Network?' },
          a: {
            pt: `<strong>Microsoft Audience Network (MSAN):</strong><br><br>
<strong>O que é:</strong> Rede de display nativa da Microsoft que exibe anúncios em propriedades Microsoft (MSN, Outlook, Microsoft Edge, Xbox) e sites parceiros premium.<br><br>
<strong>Formatos disponíveis:</strong><br>
• <strong>Audience Ads</strong> — native ads que se integram ao conteúdo da página<br>
• <strong>Responsive Audience Ads</strong> — formato adaptável (headline, descrição, imagem, logo) similar ao RDA do Google<br>
• <strong>Image Ads</strong> — display tradicional<br>
• <strong>Video Ads</strong> (instream e outstream)<br><br>
<strong>Diferencial vs Google Display:</strong><br>
| Aspecto | MSAN | GDN |
|---------|------|-----|
| Audiência | Microsoft 365, LinkedIn profile data | Google account data |
| LinkedIn Targeting | ✅ Cargo, empresa, setor | ❌ Não disponível |
| Alcance (global) | Menor | Muito maior |
| CPM | Geralmente menor | Benchmark |
| Formato nativo | Forte (MSN, Outlook) | Google Discover |<br><br>
<strong>LinkedIn Profile Targeting (exclusivo):</strong><br>
Microsoft tem parceria com LinkedIn, permitindo targeting por:<br>
• Cargo (Job Title) — ex: "Marketing Manager", "Software Engineer"<br>
• Empresa (Company) — ex: campanhas para funcionários de empresas específicas<br>
• Setor (Industry) — ex: "Financial Services", "Technology"<br>
• Tamanho da empresa<br><br>
<strong>Quando usar MSAN:</strong><br>
• B2B com targeting por cargo/empresa que seria impossível no Google<br>
• Remarketing de visitantes em ambiente premium (Outlook, MSN)<br>
• CPMs menores para awareness com audiência de renda mais alta`,
            en: `<strong>Microsoft Audience Network (MSAN):</strong><br><br>
<strong>What it is:</strong> Microsoft's native display network showing ads on Microsoft properties (MSN, Outlook, Edge, Xbox) and premium partner sites.<br><br>
<strong>Key differentiator vs GDN — LinkedIn Profile Targeting (exclusive):</strong><br>
• Job Title — e.g., "Marketing Manager", "Software Engineer"<br>
• Company — campaigns targeting employees of specific companies<br>
• Industry — e.g., "Financial Services", "Technology"<br>
• Company size<br><br>
<strong>MSAN vs GDN comparison:</strong><br>
• Audience data: Microsoft 365 + LinkedIn vs Google account data<br>
• LinkedIn targeting: available vs not available<br>
• Global reach: smaller vs much larger<br>
• CPM: generally lower vs benchmark<br><br>
<strong>When to use MSAN:</strong> B2B with job title/company targeting, remarketing in premium environment, lower CPMs for higher-income audience`,
            es: `<strong>Microsoft Audience Network (MSAN):</strong><br><br>
<strong>Qué es:</strong> Red de display nativa de Microsoft que muestra anuncios en propiedades Microsoft (MSN, Outlook, Edge, Xbox) y sitios socios premium.<br><br>
<strong>Diferencial clave vs GDN — LinkedIn Profile Targeting (exclusivo):</strong><br>
• Cargo (Job Title), Empresa (Company), Sector (Industry), Tamaño de empresa<br><br>
<strong>Cuándo usar MSAN:</strong><br>
• B2B con targeting por cargo/empresa imposible en Google<br>
• Remarketing en entorno premium (Outlook, MSN)<br>
• CPMs menores para audiencia de mayor ingreso`,
          },
          tags: ['Microsoft', 'MSAN', 'LinkedIn', 'display', 'B2B', 'native', 'cargo']
        },
        {
          q: { pt: 'O que é a UET Tag (Universal Event Tracking) e como configurar conversões no Microsoft Ads?', en: 'What is the UET Tag (Universal Event Tracking) and how to set up conversions in Microsoft Ads?', es: '¿Qué es la UET Tag (Universal Event Tracking) y cómo configurar conversiones en Microsoft Ads?' },
          a: {
            pt: `<strong>UET Tag — Universal Event Tracking:</strong><br><br>
<strong>O que é:</strong> Tag JavaScript da Microsoft (equivalente ao gtag.js do Google) que registra o comportamento dos usuários no site e envia dados para o Microsoft Ads. Base para conversões, remarketing e Smart Bidding.<br><br>
<strong>Como instalar:</strong><br>
1. Microsoft Ads Manager → Tools → UET Tag → Create<br>
2. Dar nome à tag e gerar o código<br>
3. Instalar em TODAS as páginas do site (no &lt;head&gt;) — via GTM ou hard-coded<br>
4. Verificar instalação no UET Tag Helper (extensão Chrome)<br><br>
<strong>Como configurar metas de conversão:</strong><br>
1. Tools → Conversion Goals → Create<br>
2. Escolher tipo:<br>
• <strong>Destination URL</strong> — dispara quando usuário chega a URL específica (ex: /obrigado)<br>
• <strong>Duration</strong> — dispara após X minutos no site<br>
• <strong>Pages viewed</strong> — dispara após X páginas visitadas<br>
• <strong>Event</strong> — dispara em evento JavaScript customizado (compra, lead, download)<br>
3. Configurar janela de atribuição (padrão: 30 dias click-through)<br>
4. Definir valor da conversão (fixo ou variável via parâmetro)<br><br>
<strong>Eventos personalizados (sintaxe):</strong><br>
<code>window.uetq = window.uetq || []; window.uetq.push('event', 'purchase', {'revenue_value': 99.90, 'currency': 'BRL'});</code><br><br>
<strong>Remarketing com UET:</strong><br>
• UET cria automaticamente audiências de visitantes do site<br>
• Pode criar audiências customizadas por página visitada, evento disparado, duração<br>
• Janela de audiência: até 180 dias`,
            en: `<strong>UET Tag — Universal Event Tracking:</strong><br><br>
<strong>What it is:</strong> Microsoft's JavaScript tag (equivalent to Google's gtag.js) that records user behavior and sends data to Microsoft Ads. Foundation for conversions, remarketing, and Smart Bidding.<br><br>
<strong>Conversion goal types:</strong><br>
• Destination URL — fires when user reaches specific URL<br>
• Duration — fires after X minutes on site<br>
• Pages viewed — fires after X pages visited<br>
• Event — fires on custom JavaScript event (purchase, lead, download)<br><br>
<strong>Custom event syntax:</strong><br>
<code>window.uetq = window.uetq || []; window.uetq.push('event', 'purchase', {'revenue_value': 99.90, 'currency': 'USD'});</code><br><br>
<strong>Remarketing with UET:</strong> Automatically creates site visitor audiences; custom audiences by page/event/duration; audience window up to 180 days`,
            es: `<strong>UET Tag — Universal Event Tracking:</strong><br><br>
<strong>Qué es:</strong> Tag JavaScript de Microsoft (equivalente al gtag.js de Google) que registra el comportamiento de los usuarios y envía datos a Microsoft Ads.<br><br>
<strong>Tipos de objetivos de conversión:</strong><br>
• Destination URL — se activa cuando el usuario llega a una URL específica<br>
• Duration — se activa después de X minutos en el sitio<br>
• Pages viewed — se activa después de X páginas visitadas<br>
• Event — se activa en evento JavaScript personalizado<br><br>
<strong>Remarketing con UET:</strong> Crea automáticamente audiencias de visitantes del sitio; audiencias personalizadas por página/evento/duración; ventana de audiencia hasta 180 días`,
          },
          tags: ['Microsoft', 'UET', 'conversões', 'remarketing', 'tag', 'JavaScript']
        },
      ]
    },
    {
      id: 'hard',
      questions: [
        {
          q: { pt: 'Como você estruturaria uma estratégia de Microsoft Ads para uma empresa B2B SaaS querendo gerar leads de qualidade?', en: 'How would you structure a Microsoft Ads strategy for a B2B SaaS company looking to generate quality leads?', es: '¿Cómo estructurarías una estrategia de Microsoft Ads para una empresa B2B SaaS que busca generar leads de calidad?' },
          a: {
            pt: `<strong>Estratégia Microsoft Ads — B2B SaaS lead gen:</strong><br><br>
<strong>Por que Microsoft Ads é especialmente forte para B2B SaaS:</strong><br>
• Audiência de profissionais que usam Windows/Office/Teams no trabalho<br>
• LinkedIn Profile Targeting exclusivo (cargo, empresa, setor)<br>
• CPCs geralmente 20-40% menores que Google para keywords B2B<br>
• Edge e Outlook alcançam executivos durante o horário de trabalho<br><br>
<strong>Estrutura de campanha:</strong><br><br>
<strong>1. Search — Brand:</strong><br>
• Keywords: nome da marca + variações<br>
• Objetivo: proteger tráfego de marca de concorrentes<br>
• Bidding: CPC manual ou Target Impression Share<br><br>
<strong>2. Search — Competitor:</strong><br>
• Keywords: nomes de concorrentes diretos<br>
• Ad copy: destacar diferenciais e ter CTA de comparação<br><br>
<strong>3. Search — Problema/Solução:</strong><br>
• Keywords: termos de dor e solução (ex: "software gestão projetos", "automatizar relatórios excel")<br>
• Extensões: sitelinks para features, callouts para benefícios<br><br>
<strong>4. MSAN — LinkedIn Targeting (diferencial):</strong><br>
• Formato: Responsive Audience Ads<br>
• Targeting: Cargo (Decision Maker roles) + Setor (Industry vertical do ICP)<br>
• Conteúdo: whitepaper, case study, demo gratuita<br><br>
<strong>5. Remarketing:</strong><br>
• Visitantes de pricing page → ad de trial/demo<br>
• Visitantes de blog → ad de conteúdo mais avançado<br>
• Abandono de formulário → ad de objeção + social proof<br><br>
<strong>Otimização contínua:</strong><br>
• Analisar Search Term Report para negativos e expansão<br>
• Usar LinkedIn Insight Tag junto com UET para enriquecer dados de audiência<br>
• Testar RSA (Responsive Search Ads) com 15 headlines e 4 descrições<br>
• Monitora Quality Score — impacta custo e posição assim como no Google`,
            en: `<strong>Microsoft Ads strategy — B2B SaaS lead gen:</strong><br><br>
<strong>Why Microsoft Ads is strong for B2B SaaS:</strong><br>
• Professional audience using Windows/Office/Teams at work<br>
• Exclusive LinkedIn Profile Targeting (job title, company, industry)<br>
• CPCs generally 20-40% lower than Google for B2B keywords<br>
• Edge and Outlook reach executives during work hours<br><br>
<strong>Campaign structure:</strong><br>
1. Search Brand — protect brand traffic<br>
2. Search Competitor — highlight differentiators<br>
3. Search Problem/Solution — pain and solution keywords<br>
4. MSAN LinkedIn Targeting — Decision Maker roles + industry vertical with whitepaper/demo offer<br>
5. Remarketing — pricing page visitors → trial/demo ad; blog visitors → advanced content; form abandonment → objection handling<br><br>
<strong>Ongoing optimization:</strong> Search Term Report for negatives, test RSA, monitor Quality Score`,
            es: `<strong>Estrategia Microsoft Ads — B2B SaaS lead gen:</strong><br><br>
<strong>Por qué Microsoft Ads es especialmente fuerte para B2B SaaS:</strong><br>
• Audiencia de profesionales que usan Windows/Office/Teams en el trabajo<br>
• LinkedIn Profile Targeting exclusivo (cargo, empresa, sector)<br>
• CPCs generalmente 20-40% menores que Google para keywords B2B<br><br>
<strong>Estructura de campaña:</strong><br>
1. Search Brand — proteger tráfico de marca<br>
2. Search Competitor — destacar diferenciadores<br>
3. Search Problema/Solución — keywords de dolor y solución<br>
4. MSAN LinkedIn Targeting — roles de Decision Maker + vertical con whitepaper/demo<br>
5. Remarketing — visitantes de pricing → trial/demo; abandono formulario → manejo de objeciones`,
          },
          tags: ['Microsoft', 'B2B', 'SaaS', 'leads', 'LinkedIn', 'MSAN', 'estratégia']
        },
      ]
    },
  ]
};

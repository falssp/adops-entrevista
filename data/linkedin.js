// © 2025 AdOps Interview Kit — Todos os direitos reservados. Reprodução proibida.
// Módulo LinkedIn Ads — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['linkedin'] = {
  icon: '💼',
  name: { pt: 'LinkedIn Ads', en: 'LinkedIn Ads', es: 'LinkedIn Ads' },
  desc: {
    pt: 'Plataforma de publicidade do LinkedIn — líder em B2B com targeting profissional único por cargo, setor, empresa e seniority.',
    en: 'LinkedIn advertising platform — B2B leader with unique professional targeting by job title, industry, company and seniority.',
    es: 'Plataforma publicitaria de LinkedIn — líder en B2B con targeting profesional único por cargo, sector, empresa y seniority.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'Qual a hierarquia de uma conta no LinkedIn Campaign Manager?',
            en: 'What is the account hierarchy in LinkedIn Campaign Manager?',
            es: '¿Cuál es la jerarquía de una cuenta en LinkedIn Campaign Manager?',
          },
          a: {
            pt: `<ul>
  <li><strong>Ad Account:</strong> nível raiz — vinculado a uma LinkedIn Page. Contém o billing e toda a estrutura de campanhas.</li>
  <li><strong>Campaign Group:</strong> equivalente ao nível de "campanha" em outras plataformas. Agrupa campanhas relacionadas com budget compartilhado e datas comuns. Pode ter budget total ou ser ilimitado.</li>
  <li><strong>Campaign:</strong> define o objetivo, o targeting, o formato de anúncio, o budget/bid e o schedule. É onde ocorre toda a configuração de audiência.</li>
  <li><strong>Ad:</strong> o criativo em si — texto, imagem, vídeo, documento ou formulário de geração de leads.</li>
</ul>
<strong>Diferença vs. Meta:</strong> no LinkedIn o nível "Campaign Group" não existe no Meta — é uma camada extra de organização. O targeting fica no nível Campaign (não no Ad Set, pois o LinkedIn não tem Ad Sets).`,
            en: `<ul>
  <li><strong>Ad Account:</strong> root level — linked to a LinkedIn Page. Contains billing and the entire campaign structure.</li>
  <li><strong>Campaign Group:</strong> equivalent to the "campaign" level on other platforms. Groups related campaigns with shared budget and common dates. Can have a total budget or be unlimited.</li>
  <li><strong>Campaign:</strong> defines objective, targeting, ad format, budget/bid and schedule. This is where all audience configuration happens.</li>
  <li><strong>Ad:</strong> the creative itself — text, image, video, document or lead generation form.</li>
</ul>
<strong>Difference vs. Meta:</strong> LinkedIn's "Campaign Group" doesn't exist in Meta — it's an extra organizational layer. Targeting lives at the Campaign level (not Ad Set, since LinkedIn doesn't have Ad Sets).`,
            es: `<ul>
  <li><strong>Ad Account:</strong> nivel raíz — vinculado a una LinkedIn Page. Contiene el billing y toda la estructura de campañas.</li>
  <li><strong>Campaign Group:</strong> equivalente al nivel de "campaña" en otras plataformas. Agrupa campañas relacionadas con presupuesto compartido y fechas comunes. Puede tener presupuesto total o ser ilimitado.</li>
  <li><strong>Campaign:</strong> define el objetivo, el targeting, el formato de anuncio, el budget/bid y el schedule. Es donde ocurre toda la configuración de audiencia.</li>
  <li><strong>Ad:</strong> el creativo en sí — texto, imagen, video, documento o formulario de generación de leads.</li>
</ul>
<strong>Diferencia vs. Meta:</strong> el "Campaign Group" de LinkedIn no existe en Meta — es una capa extra de organización. El targeting está en el nivel Campaign (no en Ad Set, ya que LinkedIn no tiene Ad Sets).`,
          },
          tags: ['hierarquia', 'Campaign-Manager', 'Campaign-Group', 'estrutura'],
        },
        {
          q: {
            pt: 'Quais são os formatos de anúncio disponíveis no LinkedIn Ads?',
            en: 'What are the ad formats available in LinkedIn Ads?',
            es: '¿Cuáles son los formatos de anuncio disponibles en LinkedIn Ads?',
          },
          a: {
            pt: `<strong>Formatos de anúncio no LinkedIn Ads:</strong><br><br>
<strong>Sponsored Content (feed):</strong>
<ul>
  <li><strong>Single Image Ad:</strong> imagem estática com copy — o formato mais comum e versátil</li>
  <li><strong>Video Ad:</strong> vídeo nativo no feed — até 30 minutos (prático: 15-30s para awareness, até 2-3 min para conteúdo educativo)</li>
  <li><strong>Carousel Ad:</strong> 2-10 cards deslizáveis com imagem e texto independentes</li>
  <li><strong>Document Ad:</strong> PDF/documento nativo que pode ser lido direto no feed sem sair do LinkedIn. Excelente para whitepapers, e-books e cases</li>
  <li><strong>Event Ad:</strong> promove eventos do LinkedIn (LinkedIn Events) — gera RSVP diretamente</li>
</ul>
<strong>Message Ads (Inbox):</strong>
<ul>
  <li><strong>Message Ad (ex-Sponsored InMail):</strong> mensagem direta na inbox do usuário. Alta visibilidade mas maior CPM. Só entrega quando o usuário está ativo.</li>
  <li><strong>Conversation Ad:</strong> mensagem com botões de CTA múltiplos — cria um fluxo de conversa escolhido pelo usuário</li>
</ul>
<strong>Dynamic Ads (personalização):</strong>
<ul>
  <li><strong>Follower Ad:</strong> convida o usuário a seguir a página — personaliza com nome/foto do usuário automaticamente</li>
  <li><strong>Spotlight Ad:</strong> destaca produto/serviço com CTA personalizado</li>
</ul>
<strong>Lead Gen Forms:</strong> disponível como extensão de Sponsored Content ou Message Ad — formulário nativo pré-preenchido com dados do perfil LinkedIn.`,
            en: `<strong>Ad formats in LinkedIn Ads:</strong><br><br>
<strong>Sponsored Content (feed):</strong>
<ul>
  <li><strong>Single Image Ad:</strong> static image with copy — the most common and versatile format</li>
  <li><strong>Video Ad:</strong> native video in the feed — up to 30 minutes (practical: 15-30s for awareness, up to 2-3 min for educational content)</li>
  <li><strong>Carousel Ad:</strong> 2-10 swipeable cards with independent image and text</li>
  <li><strong>Document Ad:</strong> native PDF/document that can be read directly in the feed without leaving LinkedIn. Excellent for whitepapers, e-books and case studies</li>
  <li><strong>Event Ad:</strong> promotes LinkedIn Events — generates RSVP directly</li>
</ul>
<strong>Message Ads (Inbox):</strong>
<ul>
  <li><strong>Message Ad (ex-Sponsored InMail):</strong> direct message in the user's inbox. High visibility but higher CPM. Only delivers when the user is active.</li>
  <li><strong>Conversation Ad:</strong> message with multiple CTA buttons — creates a conversation flow chosen by the user</li>
</ul>
<strong>Dynamic Ads (personalization):</strong>
<ul>
  <li><strong>Follower Ad:</strong> invites user to follow the page — automatically personalizes with user's name/photo</li>
  <li><strong>Spotlight Ad:</strong> highlights product/service with personalized CTA</li>
</ul>
<strong>Lead Gen Forms:</strong> available as an extension of Sponsored Content or Message Ad — native form pre-filled with LinkedIn profile data.`,
            es: `<strong>Formatos de anuncio en LinkedIn Ads:</strong><br><br>
<strong>Sponsored Content (feed):</strong>
<ul>
  <li><strong>Single Image Ad:</strong> imagen estática con copy — el formato más común y versátil</li>
  <li><strong>Video Ad:</strong> video nativo en el feed — hasta 30 minutos (práctico: 15-30s para awareness, hasta 2-3 min para contenido educativo)</li>
  <li><strong>Carousel Ad:</strong> 2-10 cards deslizables con imagen y texto independientes</li>
  <li><strong>Document Ad:</strong> PDF/documento nativo que puede leerse directamente en el feed sin salir de LinkedIn. Excelente para whitepapers, e-books y cases</li>
  <li><strong>Event Ad:</strong> promueve eventos de LinkedIn (LinkedIn Events) — genera RSVP directamente</li>
</ul>
<strong>Message Ads (Inbox):</strong>
<ul>
  <li><strong>Message Ad (ex-Sponsored InMail):</strong> mensaje directo en la bandeja del usuario. Alta visibilidad pero mayor CPM. Solo entrega cuando el usuario está activo.</li>
  <li><strong>Conversation Ad:</strong> mensaje con botones de CTA múltiples — crea un flujo de conversación elegido por el usuario</li>
</ul>
<strong>Dynamic Ads (personalización):</strong>
<ul>
  <li><strong>Follower Ad:</strong> invita al usuario a seguir la página — personaliza automáticamente con nombre/foto del usuario</li>
  <li><strong>Spotlight Ad:</strong> destaca producto/servicio con CTA personalizado</li>
</ul>
<strong>Lead Gen Forms:</strong> disponible como extensión de Sponsored Content o Message Ad — formulario nativo pre-completado con datos del perfil de LinkedIn.`,
          },
          tags: ['formatos', 'Sponsored-Content', 'Message-Ads', 'Lead-Gen', 'Document-Ad'],
        },
        {
          q: {
            pt: 'Quais são as opções de targeting únicas do LinkedIn que não existem em outras plataformas?',
            en: 'What are the unique targeting options in LinkedIn that don\'t exist on other platforms?',
            es: '¿Cuáles son las opciones de targeting únicas de LinkedIn que no existen en otras plataformas?',
          },
          a: {
            pt: `O LinkedIn tem o <strong>targeting profissional mais preciso do mercado</strong> — baseado em dados reais de perfil, não em inferências comportamentais.<br><br>
<strong>Atributos exclusivos do LinkedIn:</strong>
<ul>
  <li><strong>Job Title:</strong> cargo exato (ex: "Marketing Manager", "CTO") — granularidade que nenhuma outra plataforma oferece com precisão</li>
  <li><strong>Job Function:</strong> função ampla (ex: Marketing, TI, Finanças, Vendas) — útil quando o título varia muito</li>
  <li><strong>Seniority:</strong> nível hierárquico (Entry, Senior, Manager, Director, VP, C-Level, Owner) — fundamental para B2B</li>
  <li><strong>Company Name:</strong> alcançar funcionários de empresas específicas (ex: todos funcionários da Ambev ou da Petrobras)</li>
  <li><strong>Company Industry:</strong> setor da empresa (ex: Tecnologia, Saúde, Serviços Financeiros)</li>
  <li><strong>Company Size:</strong> tamanho da empresa (1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10000+)</li>
  <li><strong>Company Growth Rate:</strong> taxa de crescimento da empresa (dados do LinkedIn)</li>
  <li><strong>Years of Experience:</strong> anos de experiência profissional total</li>
  <li><strong>Skills:</strong> habilidades listadas no perfil (ex: "Google Analytics", "Programmatic Advertising")</li>
  <li><strong>Degree / Field of Study:</strong> formação acadêmica</li>
  <li><strong>LinkedIn Groups:</strong> membros de grupos específicos</li>
</ul>
<strong>Por que isso importa:</strong> é a única plataforma onde você pode alcançar especificamente "Diretores de Marketing de empresas de Tecnologia com 500+ funcionários no Brasil". Nenhuma outra plataforma entrega esse nível de precisão B2B.`,
            en: `LinkedIn has the <strong>most precise professional targeting on the market</strong> — based on real profile data, not behavioral inferences.<br><br>
<strong>LinkedIn's exclusive attributes:</strong>
<ul>
  <li><strong>Job Title:</strong> exact title (e.g. "Marketing Manager", "CTO") — granularity no other platform offers with accuracy</li>
  <li><strong>Job Function:</strong> broad function (e.g. Marketing, IT, Finance, Sales) — useful when titles vary widely</li>
  <li><strong>Seniority:</strong> hierarchical level (Entry, Senior, Manager, Director, VP, C-Level, Owner) — fundamental for B2B</li>
  <li><strong>Company Name:</strong> reach employees of specific companies (e.g. all employees at a target account)</li>
  <li><strong>Company Industry:</strong> company sector (e.g. Technology, Healthcare, Financial Services)</li>
  <li><strong>Company Size:</strong> company headcount (1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10000+)</li>
  <li><strong>Company Growth Rate:</strong> company growth rate (LinkedIn data)</li>
  <li><strong>Years of Experience:</strong> total years of professional experience</li>
  <li><strong>Skills:</strong> skills listed in profile (e.g. "Google Analytics", "Programmatic Advertising")</li>
  <li><strong>Degree / Field of Study:</strong> academic background</li>
  <li><strong>LinkedIn Groups:</strong> members of specific groups</li>
</ul>
<strong>Why it matters:</strong> it's the only platform where you can specifically reach "Marketing Directors at Technology companies with 500+ employees in Brazil". No other platform delivers that level of B2B precision.`,
            es: `LinkedIn tiene el <strong>targeting profesional más preciso del mercado</strong> — basado en datos reales de perfil, no en inferencias comportamentales.<br><br>
<strong>Atributos exclusivos de LinkedIn:</strong>
<ul>
  <li><strong>Job Title:</strong> cargo exacto (ej: "Marketing Manager", "CTO") — granularidad que ninguna otra plataforma ofrece con precisión</li>
  <li><strong>Job Function:</strong> función amplia (ej: Marketing, TI, Finanzas, Ventas) — útil cuando el título varía mucho</li>
  <li><strong>Seniority:</strong> nivel jerárquico (Entry, Senior, Manager, Director, VP, C-Level, Owner) — fundamental para B2B</li>
  <li><strong>Company Name:</strong> alcanzar empleados de empresas específicas (ej: todos los empleados de una cuenta objetivo)</li>
  <li><strong>Company Industry:</strong> sector de la empresa (ej: Tecnología, Salud, Servicios Financieros)</li>
  <li><strong>Company Size:</strong> tamaño de la empresa (1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10000+)</li>
  <li><strong>Company Growth Rate:</strong> tasa de crecimiento de la empresa (datos de LinkedIn)</li>
  <li><strong>Years of Experience:</strong> años de experiencia profesional total</li>
  <li><strong>Skills:</strong> habilidades listadas en el perfil (ej: "Google Analytics", "Programmatic Advertising")</li>
  <li><strong>Degree / Field of Study:</strong> formación académica</li>
  <li><strong>LinkedIn Groups:</strong> miembros de grupos específicos</li>
</ul>
<strong>Por qué importa:</strong> es la única plataforma donde puedes alcanzar específicamente "Directores de Marketing de empresas de Tecnología con 500+ empleados en Brasil". Ninguna otra plataforma entrega ese nivel de precisión B2B.`,
          },
          tags: ['targeting', 'B2B', 'Job-Title', 'Seniority', 'Company'],
        },
        {
          q: {
            pt: 'O que é o LinkedIn Insight Tag e para que serve?',
            en: 'What is the LinkedIn Insight Tag and what is it used for?',
            es: '¿Qué es el LinkedIn Insight Tag y para qué sirve?',
          },
          a: {
            pt: `O <strong>LinkedIn Insight Tag</strong> é o pixel de tracking do LinkedIn — um snippet JavaScript instalado no site que habilita três funcionalidades principais:<br><br>
<strong>1. Conversion Tracking:</strong>
<ul>
  <li>Mede ações no site após clique ou visualização de um anúncio LinkedIn</li>
  <li>Conversões: preenchimento de formulário, compra, download, pageview específico</li>
  <li>Janela de atribuição padrão: 30 dias pós-clique, 7 dias pós-view</li>
</ul>
<strong>2. Website Audiences (Retargeting):</strong>
<ul>
  <li>Cria audiences de visitantes do site para retargeting</li>
  <li>Segmentar por URL visitada, frequência de visita ou ação realizada</li>
  <li>Mínimo de 300 membros para ativar a audience</li>
</ul>
<strong>3. Website Demographics:</strong>
<ul>
  <li>Relatório gratuito que mostra o perfil profissional dos visitantes do site: cargo, setor, seniority, empresa</li>
  <li>Não requer campanhas ativas — funciona só com o Insight Tag instalado</li>
  <li>Excelente para entender quem está visitando o site organicamente</li>
</ul>
<strong>Implementação:</strong> direto no código ou via GTM (tag template disponível). Deve estar em todas as páginas.`,
            en: `The <strong>LinkedIn Insight Tag</strong> is LinkedIn's tracking pixel — a JavaScript snippet installed on the site that enables three main functionalities:<br><br>
<strong>1. Conversion Tracking:</strong>
<ul>
  <li>Measures actions on the site after clicking or viewing a LinkedIn ad</li>
  <li>Conversions: form submission, purchase, download, specific pageview</li>
  <li>Default attribution window: 30 days post-click, 7 days post-view</li>
</ul>
<strong>2. Website Audiences (Retargeting):</strong>
<ul>
  <li>Creates site visitor audiences for retargeting</li>
  <li>Segment by visited URL, visit frequency or action taken</li>
  <li>Minimum of 300 members to activate the audience</li>
</ul>
<strong>3. Website Demographics:</strong>
<ul>
  <li>Free report showing the professional profile of site visitors: title, industry, seniority, company</li>
  <li>Doesn't require active campaigns — works just with the Insight Tag installed</li>
  <li>Excellent for understanding who is organically visiting the site</li>
</ul>
<strong>Implementation:</strong> directly in code or via GTM (tag template available). Should be on all pages.`,
            es: `El <strong>LinkedIn Insight Tag</strong> es el pixel de tracking de LinkedIn — un snippet JavaScript instalado en el sitio que habilita tres funcionalidades principales:<br><br>
<strong>1. Conversion Tracking:</strong>
<ul>
  <li>Mide acciones en el sitio después de hacer clic o ver un anuncio de LinkedIn</li>
  <li>Conversiones: completar formulario, compra, descarga, pageview específico</li>
  <li>Ventana de atribución por defecto: 30 días post-clic, 7 días post-view</li>
</ul>
<strong>2. Website Audiences (Retargeting):</strong>
<ul>
  <li>Crea audiencias de visitantes del sitio para retargeting</li>
  <li>Segmentar por URL visitada, frecuencia de visita o acción realizada</li>
  <li>Mínimo de 300 miembros para activar la audiencia</li>
</ul>
<strong>3. Website Demographics:</strong>
<ul>
  <li>Reporte gratuito que muestra el perfil profesional de los visitantes del sitio: cargo, sector, seniority, empresa</li>
  <li>No requiere campañas activas — funciona solo con el Insight Tag instalado</li>
  <li>Excelente para entender quién visita el sitio orgánicamente</li>
</ul>
<strong>Implementación:</strong> directo en el código o via GTM (template de tag disponible). Debe estar en todas las páginas.`,
          },
          tags: ['Insight-Tag', 'pixel', 'retargeting', 'conversão', 'Website-Demographics'],
        },
        {
          q: {
            pt: 'Quais são os objetivos de campanha disponíveis no LinkedIn e quando usar cada um?',
            en: 'What are the campaign objectives available in LinkedIn and when to use each?',
            es: '¿Cuáles son los objetivos de campaña disponibles en LinkedIn y cuándo usar cada uno?',
          },
          a: {
            pt: `<strong>Objetivos de campanha no LinkedIn (estrutura em 3 etapas do funil):</strong><br><br>
<strong>Awareness:</strong>
<ul>
  <li><strong>Brand Awareness:</strong> maximizar impressões e alcance. Otimiza para CPM. Usar para lançamentos, rebranding ou share of voice. KPI: Impressões, Reach, Frequência.</li>
</ul>
<strong>Consideration:</strong>
<ul>
  <li><strong>Website Visits:</strong> direcionar tráfego para o site. Otimiza para CPC. KPI: Cliques, CTR, Landing Page Views.</li>
  <li><strong>Engagement:</strong> maximizar interações (curtidas, comentários, shares, follows). Usar para construção de comunidade e awareness de conteúdo. KPI: Engajamentos, Taxa de Engajamento.</li>
  <li><strong>Video Views:</strong> otimiza para visualizações de vídeo (ThruPlay ou view de 2s). KPI: VCR, Views, CPV.</li>
</ul>
<strong>Conversions:</strong>
<ul>
  <li><strong>Lead Generation:</strong> coleta leads via Lead Gen Forms nativos. Recomendado para B2B — dados pré-preenchidos do perfil reduzem atrito. KPI: CPL, Leads, Taxa de Preenchimento.</li>
  <li><strong>Website Conversions:</strong> otimiza para ações específicas no site (requer Insight Tag + evento de conversão configurado). KPI: CPA, Conversões.</li>
  <li><strong>Job Applicants:</strong> direcionar candidatos a vagas publicadas no LinkedIn. Específico para RH/Recrutamento.</li>
</ul>
<strong>Regra prática:</strong> para B2B, Lead Generation é o objetivo mais eficiente — CPL tende a ser menor que Website Conversions pela redução de atrito do formulário nativo.`,
            en: `<strong>Campaign objectives in LinkedIn (3-stage funnel structure):</strong><br><br>
<strong>Awareness:</strong>
<ul>
  <li><strong>Brand Awareness:</strong> maximize impressions and reach. Optimizes for CPM. Use for launches, rebranding or share of voice. KPI: Impressions, Reach, Frequency.</li>
</ul>
<strong>Consideration:</strong>
<ul>
  <li><strong>Website Visits:</strong> drive traffic to the site. Optimizes for CPC. KPI: Clicks, CTR, Landing Page Views.</li>
  <li><strong>Engagement:</strong> maximize interactions (likes, comments, shares, follows). Use for community building and content awareness. KPI: Engagements, Engagement Rate.</li>
  <li><strong>Video Views:</strong> optimizes for video views (ThruPlay or 2s view). KPI: VCR, Views, CPV.</li>
</ul>
<strong>Conversions:</strong>
<ul>
  <li><strong>Lead Generation:</strong> collects leads via native Lead Gen Forms. Recommended for B2B — pre-filled profile data reduces friction. KPI: CPL, Leads, Form Fill Rate.</li>
  <li><strong>Website Conversions:</strong> optimizes for specific site actions (requires Insight Tag + configured conversion event). KPI: CPA, Conversions.</li>
  <li><strong>Job Applicants:</strong> direct candidates to jobs posted on LinkedIn. Specific to HR/Recruiting.</li>
</ul>
<strong>Practical rule:</strong> for B2B, Lead Generation is the most efficient objective — CPL tends to be lower than Website Conversions due to reduced friction from the native form.`,
            es: `<strong>Objetivos de campaña en LinkedIn (estructura de 3 etapas del embudo):</strong><br><br>
<strong>Awareness:</strong>
<ul>
  <li><strong>Brand Awareness:</strong> maximizar impresiones y alcance. Optimiza para CPM. Usar para lanzamientos, rebranding o share of voice. KPI: Impresiones, Reach, Frecuencia.</li>
</ul>
<strong>Consideration:</strong>
<ul>
  <li><strong>Website Visits:</strong> dirigir tráfico al sitio. Optimiza para CPC. KPI: Clics, CTR, Landing Page Views.</li>
  <li><strong>Engagement:</strong> maximizar interacciones (me gusta, comentarios, compartidos, follows). Usar para construcción de comunidad y awareness de contenido. KPI: Interacciones, Tasa de Engagement.</li>
  <li><strong>Video Views:</strong> optimiza para visualizaciones de video (ThruPlay o view de 2s). KPI: VCR, Views, CPV.</li>
</ul>
<strong>Conversions:</strong>
<ul>
  <li><strong>Lead Generation:</strong> recopila leads via Lead Gen Forms nativos. Recomendado para B2B — datos pre-completados del perfil reducen la fricción. KPI: CPL, Leads, Tasa de completado.</li>
  <li><strong>Website Conversions:</strong> optimiza para acciones específicas en el sitio (requiere Insight Tag + evento de conversión configurado). KPI: CPA, Conversiones.</li>
  <li><strong>Job Applicants:</strong> dirigir candidatos a vacantes publicadas en LinkedIn. Específico para RRHH/Reclutamiento.</li>
</ul>
<strong>Regla práctica:</strong> para B2B, Lead Generation es el objetivo más eficiente — el CPL tiende a ser menor que Website Conversions por la reducción de fricción del formulario nativo.`,
          },
          tags: ['objetivo', 'funil', 'Lead-Generation', 'Brand-Awareness', 'CPL'],
        },
        {
          q: {
            pt: 'Como funciona o sistema de bid e budget no LinkedIn Ads?',
            en: 'How does the bid and budget system work in LinkedIn Ads?',
            es: '¿Cómo funciona el sistema de bid y budget en LinkedIn Ads?',
          },
          a: {
            pt: `<strong>Sistema de bid no LinkedIn:</strong><br><br>
<strong>Estratégias de bid disponíveis:</strong>
<ul>
  <li><strong>Maximum Delivery (recomendado para iniciar):</strong> LinkedIn define o bid automaticamente para maximizar o objetivo dentro do budget. Sem controle manual de CPM/CPC — ideal para aprender a conta.</li>
  <li><strong>Target Cost:</strong> você define um custo médio alvo por resultado (ex: CPL de R$50). O LinkedIn oscila em torno desse valor. Requer histórico de performance para funcionar bem.</li>
  <li><strong>Manual Bidding:</strong> você define o bid máximo por clique (CPC), por mil impressões (CPM) ou por envio (para Message Ads). Maior controle mas exige mais otimização ativa.</li>
  <li><strong>Enhanced CPC:</strong> manual CPC com ajuste automático para conversões. O LinkedIn pode aumentar o bid em até 45% se detectar alta probabilidade de conversão.</li>
</ul>
<strong>Budget:</strong>
<ul>
  <li><strong>Daily Budget:</strong> valor máximo por dia — pode gastar até 20% a mais em dias de alta demanda</li>
  <li><strong>Total Budget:</strong> valor total da campanha — distribui automaticamente ao longo do período</li>
  <li><strong>Campaign Group Budget:</strong> budget compartilhado entre campanhas do mesmo grupo</li>
</ul>
<strong>CPM mínimo do LinkedIn:</strong> significativamente mais alto que Meta ou Google — CPMs de R$30-80 são comuns em audiências B2B nicho. Isso reflete a qualidade e precisão do targeting.`,
            en: `<strong>LinkedIn's bid system:</strong><br><br>
<strong>Available bid strategies:</strong>
<ul>
  <li><strong>Maximum Delivery (recommended to start):</strong> LinkedIn sets the bid automatically to maximize the objective within budget. No manual CPM/CPC control — ideal for learning the account.</li>
  <li><strong>Target Cost:</strong> you set a target average cost per result (e.g. CPL of $15). LinkedIn fluctuates around that value. Requires performance history to work well.</li>
  <li><strong>Manual Bidding:</strong> you set the max bid per click (CPC), per thousand impressions (CPM) or per send (for Message Ads). More control but requires more active optimization.</li>
  <li><strong>Enhanced CPC:</strong> manual CPC with automatic conversion adjustment. LinkedIn can increase the bid by up to 45% if it detects high conversion probability.</li>
</ul>
<strong>Budget:</strong>
<ul>
  <li><strong>Daily Budget:</strong> maximum per day — can spend up to 20% more on high-demand days</li>
  <li><strong>Total Budget:</strong> total campaign amount — distributes automatically over the period</li>
  <li><strong>Campaign Group Budget:</strong> shared budget across campaigns in the same group</li>
</ul>
<strong>LinkedIn's minimum CPM:</strong> significantly higher than Meta or Google — CPMs of $8-20 are common in niche B2B audiences. This reflects the quality and precision of targeting.`,
            es: `<strong>Sistema de bid en LinkedIn:</strong><br><br>
<strong>Estrategias de bid disponibles:</strong>
<ul>
  <li><strong>Maximum Delivery (recomendado para iniciar):</strong> LinkedIn define el bid automáticamente para maximizar el objetivo dentro del presupuesto. Sin control manual de CPM/CPC — ideal para aprender la cuenta.</li>
  <li><strong>Target Cost:</strong> defines un costo promedio objetivo por resultado (ej: CPL de $15). LinkedIn oscila alrededor de ese valor. Requiere historial de performance para funcionar bien.</li>
  <li><strong>Manual Bidding:</strong> defines el bid máximo por clic (CPC), por mil impresiones (CPM) o por envío (para Message Ads). Mayor control pero requiere más optimización activa.</li>
  <li><strong>Enhanced CPC:</strong> CPC manual con ajuste automático para conversiones. LinkedIn puede aumentar el bid hasta un 45% si detecta alta probabilidad de conversión.</li>
</ul>
<strong>Budget:</strong>
<ul>
  <li><strong>Daily Budget:</strong> valor máximo por día — puede gastar hasta un 20% más en días de alta demanda</li>
  <li><strong>Total Budget:</strong> valor total de la campaña — distribuye automáticamente a lo largo del período</li>
  <li><strong>Campaign Group Budget:</strong> presupuesto compartido entre campañas del mismo grupo</li>
</ul>
<strong>CPM mínimo de LinkedIn:</strong> significativamente más alto que Meta o Google — CPMs de $8-20 son comunes en audiencias B2B nicho. Esto refleja la calidad y precisión del targeting.`,
          },
          tags: ['bid', 'budget', 'CPM', 'CPC', 'Maximum-Delivery'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'O que é o LinkedIn Lead Gen Form e quais as vantagens em relação a uma landing page?',
            en: 'What is a LinkedIn Lead Gen Form and what are the advantages over a landing page?',
            es: '¿Qué es un LinkedIn Lead Gen Form y cuáles son las ventajas frente a una landing page?',
          },
          a: {
            pt: `<strong>Lead Gen Form (LGF)</strong> é um formulário nativo do LinkedIn que abre direto na plataforma quando o usuário clica no anúncio — sem redirecionar para um site externo.<br><br>
<strong>Como funciona:</strong>
<ol>
  <li>Usuário vê o Sponsored Content ou Message Ad</li>
  <li>Clica no CTA ("Baixar", "Saiba mais", "Cadastre-se")</li>
  <li>Abre um formulário já pré-preenchido com dados do perfil LinkedIn (nome, email, empresa, cargo, telefone)</li>
  <li>Usuário confirma e envia — você recebe o lead</li>
</ol>
<strong>Vantagens vs. landing page:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Critério</th><th style="padding:6px">Lead Gen Form</th><th style="padding:6px">Landing Page</th></tr>
<tr><td style="padding:6px">Atrito</td><td style="padding:6px">Mínimo — dados pré-preenchidos</td><td style="padding:6px">Alto — usuário digita tudo</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Taxa de conversão</td><td style="padding:6px">Geralmente 2-3x maior</td><td style="padding:6px">Menor (depende da LP)</td></tr>
<tr><td style="padding:6px">Qualidade dos dados</td><td style="padding:6px">Alta — dados reais do perfil</td><td style="padding:6px">Variável — usuário pode errar</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Mobile</td><td style="padding:6px">Ótimo — sem redirecionar</td><td style="padding:6px">Depende da LP ser responsiva</td></tr>
<tr><td style="padding:6px">Personalização da LP</td><td style="padding:6px">Não existe</td><td style="padding:6px">Total controle criativo</td></tr>
</table><br>
<strong>Quando usar LP em vez de LGF:</strong> produto complexo que precisa de mais contexto/educação antes da conversão; teste de mensagem na página; quando o remarketing de visitantes do site é estratégico.`,
            en: `A <strong>Lead Gen Form (LGF)</strong> is a native LinkedIn form that opens directly on the platform when the user clicks the ad — without redirecting to an external site.<br><br>
<strong>How it works:</strong>
<ol>
  <li>User sees the Sponsored Content or Message Ad</li>
  <li>Clicks the CTA ("Download", "Learn more", "Sign up")</li>
  <li>A form opens pre-filled with LinkedIn profile data (name, email, company, title, phone)</li>
  <li>User confirms and submits — you receive the lead</li>
</ol>
<strong>Advantages vs. landing page:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Criterion</th><th style="padding:6px">Lead Gen Form</th><th style="padding:6px">Landing Page</th></tr>
<tr><td style="padding:6px">Friction</td><td style="padding:6px">Minimal — pre-filled data</td><td style="padding:6px">High — user types everything</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Conversion rate</td><td style="padding:6px">Generally 2-3x higher</td><td style="padding:6px">Lower (depends on LP)</td></tr>
<tr><td style="padding:6px">Data quality</td><td style="padding:6px">High — real profile data</td><td style="padding:6px">Variable — user may make errors</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Mobile</td><td style="padding:6px">Excellent — no redirect</td><td style="padding:6px">Depends on LP being responsive</td></tr>
<tr><td style="padding:6px">LP customization</td><td style="padding:6px">Doesn't exist</td><td style="padding:6px">Full creative control</td></tr>
</table><br>
<strong>When to use LP instead of LGF:</strong> complex product that needs more context/education before conversion; message testing on page; when remarketing site visitors is strategic.`,
            es: `Un <strong>Lead Gen Form (LGF)</strong> es un formulario nativo de LinkedIn que se abre directamente en la plataforma cuando el usuario hace clic en el anuncio — sin redirigir a un sitio externo.<br><br>
<strong>Cómo funciona:</strong>
<ol>
  <li>El usuario ve el Sponsored Content o Message Ad</li>
  <li>Hace clic en el CTA ("Descargar", "Saber más", "Registrarse")</li>
  <li>Se abre un formulario pre-completado con datos del perfil de LinkedIn (nombre, email, empresa, cargo, teléfono)</li>
  <li>El usuario confirma y envía — recibes el lead</li>
</ol>
<strong>Ventajas vs. landing page:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Criterio</th><th style="padding:6px">Lead Gen Form</th><th style="padding:6px">Landing Page</th></tr>
<tr><td style="padding:6px">Fricción</td><td style="padding:6px">Mínima — datos pre-completados</td><td style="padding:6px">Alta — el usuario escribe todo</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Tasa de conversión</td><td style="padding:6px">Generalmente 2-3x mayor</td><td style="padding:6px">Menor (depende de la LP)</td></tr>
<tr><td style="padding:6px">Calidad de datos</td><td style="padding:6px">Alta — datos reales del perfil</td><td style="padding:6px">Variable — el usuario puede equivocarse</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Mobile</td><td style="padding:6px">Excelente — sin redirigir</td><td style="padding:6px">Depende de que la LP sea responsiva</td></tr>
<tr><td style="padding:6px">Personalización LP</td><td style="padding:6px">No existe</td><td style="padding:6px">Control creativo total</td></tr>
</table><br>
<strong>Cuándo usar LP en vez de LGF:</strong> producto complejo que necesita más contexto/educación antes de la conversión; test de mensaje en la página; cuando el remarketing de visitantes del sitio es estratégico.`,
          },
          tags: ['Lead-Gen-Form', 'conversão', 'CPL', 'landing-page', 'B2B'],
        },
        {
          q: {
            pt: 'O que é Account-Based Marketing (ABM) no LinkedIn e como implementar?',
            en: 'What is Account-Based Marketing (ABM) on LinkedIn and how to implement it?',
            es: '¿Qué es el Account-Based Marketing (ABM) en LinkedIn y cómo implementarlo?',
          },
          a: {
            pt: `<strong>ABM (Account-Based Marketing)</strong> é uma estratégia B2B onde a empresa mira contas específicas (empresas-alvo) em vez de um amplo segmento de mercado. O LinkedIn é a plataforma ideal para ABM por ter targeting por Company Name.<br><br>
<strong>Como implementar ABM no LinkedIn:</strong><br><br>
<strong>1. Construir a lista de contas-alvo:</strong>
<ul>
  <li>Exportar do CRM as empresas que o time de vendas está prospectando</li>
  <li>Criar uma lista de empresas (CSV com nomes das empresas) e fazer upload no Campaign Manager</li>
  <li>LinkedIn faz o matching com suas páginas de empresa — matching rate típico de 60-80%</li>
</ul>
<strong>2. Definir os decisores dentro de cada conta:</strong>
<ul>
  <li>Combinar Company Name com Seniority (Director+, VP, C-Level) e/ou Job Function</li>
  <li>Ex: "Todas as empresas da minha lista" + "Seniority: Director ou acima" + "Job Function: Finanças"</li>
</ul>
<strong>3. Estrutura de campanha ABM:</strong>
<ul>
  <li><strong>Awareness:</strong> Sponsored Content com conteúdo de liderança de pensamento para as contas-alvo</li>
  <li><strong>Consideration:</strong> Case studies, demos, webinars</li>
  <li><strong>Conversão:</strong> Oferta direta ou Lead Gen Form para solicitar contato com vendas</li>
</ul>
<strong>4. Integração com CRM (Salesforce, HubSpot):</strong>
<ul>
  <li>LinkedIn integra nativamente com Salesforce e HubSpot para sincronizar leads do Lead Gen Form diretamente no CRM</li>
  <li>Permite medir o impacto das campanhas no pipeline de vendas</li>
</ul>`,
            en: `<strong>ABM (Account-Based Marketing)</strong> is a B2B strategy where the company targets specific accounts (target companies) rather than a broad market segment. LinkedIn is the ideal platform for ABM because it has Company Name targeting.<br><br>
<strong>How to implement ABM on LinkedIn:</strong><br><br>
<strong>1. Build the target account list:</strong>
<ul>
  <li>Export from CRM the companies the sales team is prospecting</li>
  <li>Create a company list (CSV with company names) and upload in Campaign Manager</li>
  <li>LinkedIn matches with their company pages — typical matching rate of 60-80%</li>
</ul>
<strong>2. Define decision-makers within each account:</strong>
<ul>
  <li>Combine Company Name with Seniority (Director+, VP, C-Level) and/or Job Function</li>
  <li>E.g. "All companies on my list" + "Seniority: Director or above" + "Job Function: Finance"</li>
</ul>
<strong>3. ABM campaign structure:</strong>
<ul>
  <li><strong>Awareness:</strong> Sponsored Content with thought leadership content for target accounts</li>
  <li><strong>Consideration:</strong> Case studies, demos, webinars</li>
  <li><strong>Conversion:</strong> Direct offer or Lead Gen Form to request sales contact</li>
</ul>
<strong>4. CRM integration (Salesforce, HubSpot):</strong>
<ul>
  <li>LinkedIn integrates natively with Salesforce and HubSpot to sync Lead Gen Form leads directly into CRM</li>
  <li>Allows measuring the impact of campaigns on the sales pipeline</li>
</ul>`,
            es: `<strong>ABM (Account-Based Marketing)</strong> es una estrategia B2B donde la empresa apunta a cuentas específicas (empresas objetivo) en lugar de un amplio segmento de mercado. LinkedIn es la plataforma ideal para ABM por tener targeting por Company Name.<br><br>
<strong>Cómo implementar ABM en LinkedIn:</strong><br><br>
<strong>1. Construir la lista de cuentas objetivo:</strong>
<ul>
  <li>Exportar del CRM las empresas que el equipo de ventas está prospectando</li>
  <li>Crear una lista de empresas (CSV con nombres de empresas) y cargarla en Campaign Manager</li>
  <li>LinkedIn hace el matching con sus páginas de empresa — tasa de matching típica del 60-80%</li>
</ul>
<strong>2. Definir los decisores dentro de cada cuenta:</strong>
<ul>
  <li>Combinar Company Name con Seniority (Director+, VP, C-Level) y/o Job Function</li>
  <li>Ej: "Todas las empresas de mi lista" + "Seniority: Director o superior" + "Job Function: Finanzas"</li>
</ul>
<strong>3. Estructura de campaña ABM:</strong>
<ul>
  <li><strong>Awareness:</strong> Sponsored Content con contenido de liderazgo de pensamiento para las cuentas objetivo</li>
  <li><strong>Consideration:</strong> Cases de éxito, demos, webinars</li>
  <li><strong>Conversión:</strong> Oferta directa o Lead Gen Form para solicitar contacto con ventas</li>
</ul>
<strong>4. Integración con CRM (Salesforce, HubSpot):</strong>
<ul>
  <li>LinkedIn integra nativamente con Salesforce y HubSpot para sincronizar leads del Lead Gen Form directamente en el CRM</li>
  <li>Permite medir el impacto de las campañas en el pipeline de ventas</li>
</ul>`,
          },
          tags: ['ABM', 'B2B', 'conta-alvo', 'CRM', 'pipeline'],
        },
        {
          q: {
            pt: 'Como funciona o audience matching no LinkedIn? O que são Matched Audiences?',
            en: 'How does audience matching work on LinkedIn? What are Matched Audiences?',
            es: '¿Cómo funciona el audience matching en LinkedIn? ¿Qué son las Matched Audiences?',
          },
          a: {
            pt: `<strong>Matched Audiences</strong> é o conjunto de recursos do LinkedIn para ativar dados de 1st party na plataforma — conectando seus dados ao inventário do LinkedIn.<br><br>
<strong>Tipos de Matched Audiences:</strong>
<ul>
  <li><strong>Contact List Targeting:</strong> upload de lista de emails (CSV) — LinkedIn faz matching com perfis. Útil para: reativar clientes existentes, excluir clientes atuais de campanhas de prospecção, nutrir leads frios do CRM. Matching rate típico: 40-60% (emails pessoais têm matching baixo — emails corporativos são melhores).</li>
  <li><strong>Account List Targeting (ABM):</strong> upload de lista de empresas — LinkedIn faz matching com Company Pages. Matching rate típico: 60-80%.</li>
  <li><strong>Website Retargeting:</strong> audiência de visitantes do site via Insight Tag. Segmentável por URL, frequência ou evento de conversão.</li>
  <li><strong>LinkedIn Event Audiences:</strong> pessoas que interagiram com eventos do LinkedIn da sua empresa (registradas, participaram).</li>
  <li><strong>Video/Lead Gen/Document Audiences:</strong> usuários que interagiram com seus anúncios — assistiram ao vídeo, abriram o formulário, baixaram o documento.</li>
</ul>
<strong>Lookalike Audiences:</strong> disponível para qualquer Matched Audience com mínimo de 300 membros — LinkedIn encontra perfis similares.`,
            en: `<strong>Matched Audiences</strong> is LinkedIn's set of features for activating 1st party data on the platform — connecting your data to LinkedIn's inventory.<br><br>
<strong>Types of Matched Audiences:</strong>
<ul>
  <li><strong>Contact List Targeting:</strong> upload email list (CSV) — LinkedIn matches with profiles. Useful for: reactivating existing customers, excluding current customers from prospecting campaigns, nurturing cold CRM leads. Typical matching rate: 40-60% (personal emails have low matching — corporate emails are better).</li>
  <li><strong>Account List Targeting (ABM):</strong> upload company list — LinkedIn matches with Company Pages. Typical matching rate: 60-80%.</li>
  <li><strong>Website Retargeting:</strong> site visitor audience via Insight Tag. Segmentable by URL, frequency or conversion event.</li>
  <li><strong>LinkedIn Event Audiences:</strong> people who interacted with your company's LinkedIn events (registered, attended).</li>
  <li><strong>Video/Lead Gen/Document Audiences:</strong> users who interacted with your ads — watched the video, opened the form, downloaded the document.</li>
</ul>
<strong>Lookalike Audiences:</strong> available for any Matched Audience with minimum 300 members — LinkedIn finds similar profiles.`,
            es: `<strong>Matched Audiences</strong> es el conjunto de recursos de LinkedIn para activar datos de 1st party en la plataforma — conectando tus datos al inventario de LinkedIn.<br><br>
<strong>Tipos de Matched Audiences:</strong>
<ul>
  <li><strong>Contact List Targeting:</strong> carga de lista de emails (CSV) — LinkedIn hace matching con perfiles. Útil para: reactivar clientes existentes, excluir clientes actuales de campañas de prospección, nutrir leads fríos del CRM. Tasa de matching típica: 40-60% (emails personales tienen matching bajo — emails corporativos son mejores).</li>
  <li><strong>Account List Targeting (ABM):</strong> carga de lista de empresas — LinkedIn hace matching con Company Pages. Tasa de matching típica: 60-80%.</li>
  <li><strong>Website Retargeting:</strong> audiencia de visitantes del sitio via Insight Tag. Segmentable por URL, frecuencia o evento de conversión.</li>
  <li><strong>LinkedIn Event Audiences:</strong> personas que interactuaron con eventos de LinkedIn de tu empresa (registradas, asistieron).</li>
  <li><strong>Video/Lead Gen/Document Audiences:</strong> usuarios que interactuaron con tus anuncios — vieron el video, abrieron el formulario, descargaron el documento.</li>
</ul>
<strong>Lookalike Audiences:</strong> disponible para cualquier Matched Audience con mínimo de 300 miembros — LinkedIn encuentra perfiles similares.`,
          },
          tags: ['Matched-Audiences', 'retargeting', 'lookalike', '1st-party', 'ABM'],
        },
        {
          q: {
            pt: 'Por que o CPM do LinkedIn é mais alto que outras plataformas e como justificar isso para o cliente?',
            en: 'Why is LinkedIn\'s CPM higher than other platforms and how to justify this to the client?',
            es: '¿Por qué el CPM de LinkedIn es más alto que otras plataformas y cómo justificar esto al cliente?',
          },
          a: {
            pt: `O LinkedIn tem os <strong>CPMs mais altos do mercado</strong> — frequentemente 3-5x maior que Meta para audiências comparáveis. Justificar isso corretamente é uma habilidade fundamental em AdOps.<br><br>
<strong>Por que o CPM é mais alto:</strong>
<ul>
  <li><strong>Precisão de targeting:</strong> alcançar "CTO de empresa de SaaS com 200+ funcionários" no LinkedIn é determinístico — no Meta é uma estimativa comportamental</li>
  <li><strong>Qualidade da audiência:</strong> usuários do LinkedIn estão em mindset profissional — mais receptivos a mensagens B2B</li>
  <li><strong>Menor competição de anunciantes de baixo custo:</strong> sem e-commerce de R$20 de calçado inflacionando o leilão com clicks baratos</li>
  <li><strong>Dados verificados:</strong> as pessoas atualizam o LinkedIn para progressão de carreira — dados mais precisos que inferências comportamentais</li>
</ul>
<strong>Como justificar para o cliente — argumento correto:</strong>
<ul>
  <li>Não compare CPM isolado — compare <strong>CPL (Custo por Lead qualificado)</strong></li>
  <li>Ex: Meta com CPM R$15 mas 0.5% de conversão = CPL R$3.000 de um lead desqualificado</li>
  <li>LinkedIn com CPM R$60 mas 3% de conversão e lead qualificado (CTO da empresa-alvo) = CPL R$200</li>
  <li>O LinkedIn é mais barato por lead qualificado, não por impressão</li>
</ul>
<strong>Benchmark real:</strong> CPM de R$30-120 no LinkedIn Brasil em audiências B2B nicho. CPL de R$100-500 é considerado bom para o mercado B2B brasileiro.`,
            en: `LinkedIn has the <strong>highest CPMs on the market</strong> — often 3-5x higher than Meta for comparable audiences. Justifying this correctly is a fundamental AdOps skill.<br><br>
<strong>Why CPM is higher:</strong>
<ul>
  <li><strong>Targeting precision:</strong> reaching "CTO of SaaS company with 200+ employees" on LinkedIn is deterministic — on Meta it's a behavioral estimate</li>
  <li><strong>Audience quality:</strong> LinkedIn users are in professional mindset — more receptive to B2B messages</li>
  <li><strong>Less competition from low-cost advertisers:</strong> no $5 shoe e-commerce inflating the auction with cheap clicks</li>
  <li><strong>Verified data:</strong> people update LinkedIn for career progression — more accurate data than behavioral inferences</li>
</ul>
<strong>How to justify to client — correct argument:</strong>
<ul>
  <li>Don't compare CPM in isolation — compare <strong>CPL (Cost per qualified Lead)</strong></li>
  <li>E.g. Meta with $4 CPM but 0.5% conversion = $800 CPL for an unqualified lead</li>
  <li>LinkedIn with $18 CPM but 3% conversion and qualified lead (target company CTO) = $60 CPL</li>
  <li>LinkedIn is cheaper per qualified lead, not per impression</li>
</ul>
<strong>Real benchmark:</strong> CPM of $8-25 on LinkedIn in niche B2B audiences. CPL of $30-150 is considered good for the B2B market.`,
            es: `LinkedIn tiene los <strong>CPMs más altos del mercado</strong> — frecuentemente 3-5x mayor que Meta para audiencias comparables. Justificar esto correctamente es una habilidad fundamental en AdOps.<br><br>
<strong>Por qué el CPM es más alto:</strong>
<ul>
  <li><strong>Precisión de targeting:</strong> alcanzar "CTO de empresa de SaaS con 200+ empleados" en LinkedIn es determinístico — en Meta es una estimación comportamental</li>
  <li><strong>Calidad de la audiencia:</strong> los usuarios de LinkedIn están en mindset profesional — más receptivos a mensajes B2B</li>
  <li><strong>Menos competencia de anunciantes de bajo costo:</strong> sin e-commerce de $5 de calzado inflando la subasta con clics baratos</li>
  <li><strong>Datos verificados:</strong> las personas actualizan LinkedIn para la progresión de carrera — datos más precisos que inferencias comportamentales</li>
</ul>
<strong>Cómo justificar al cliente — argumento correcto:</strong>
<ul>
  <li>No compares el CPM de forma aislada — compara el <strong>CPL (Costo por Lead calificado)</strong></li>
  <li>Ej: Meta con CPM $4 pero 0.5% de conversión = CPL $800 de un lead no calificado</li>
  <li>LinkedIn con CPM $18 pero 3% de conversión y lead calificado (CTO de la empresa objetivo) = CPL $60</li>
  <li>LinkedIn es más barato por lead calificado, no por impresión</li>
</ul>
<strong>Benchmark real:</strong> CPM de $8-25 en LinkedIn en audiencias B2B nicho. CPL de $30-150 se considera bueno para el mercado B2B.`,
          },
          tags: ['CPM', 'CPL', 'justificativa', 'B2B', 'cliente'],
        },
        {
          q: {
            pt: 'Como estruturar testes A/B no LinkedIn Ads?',
            en: 'How to structure A/B tests in LinkedIn Ads?',
            es: '¿Cómo estructurar pruebas A/B en LinkedIn Ads?',
          },
          a: {
            pt: `<strong>A/B Testing no LinkedIn — regras e framework:</strong><br><br>
<strong>Ferramenta nativa:</strong> o LinkedIn Campaign Manager tem um módulo de "A/B Testing" em fase beta — disponível apenas para algumas contas. Na maioria dos casos, o teste é feito manualmente (campanhas duplicadas).<br><br>
<strong>O que testar (por prioridade de impacto):</strong>
<ol>
  <li><strong>Formato de anúncio:</strong> Single Image vs. Carousel vs. Video vs. Document — qual formato ressoa melhor com a audiência-alvo</li>
  <li><strong>Targeting:</strong> Job Title vs. Job Function + Seniority — qual gera mais volume com melhor qualidade de lead</li>
  <li><strong>Copy:</strong> headline, introdução, CTA — especialmente importante no LinkedIn onde o texto é mais lido que em outras plataformas</li>
  <li><strong>Oferta:</strong> e-book vs. webinar vs. demo — qual isca de conteúdo gera mais conversão</li>
  <li><strong>Lead Gen Form vs. Landing Page</strong></li>
</ol>
<strong>Regras de um teste válido no LinkedIn:</strong>
<ul>
  <li><strong>Isolamento:</strong> mudar apenas uma variável por vez</li>
  <li><strong>Budget mínimo:</strong> LinkedIn recomenda mínimo de 100 conversões por variação para significância — dado o CPL alto, isso pode requerer budget considerável</li>
  <li><strong>Duração mínima:</strong> 2 semanas (evitar variações de dia da semana — o LinkedIn tem padrões de uso muito diferentes entre segunda e sexta vs. fim de semana)</li>
  <li><strong>Audiência separada:</strong> criar campanhas separadas com a mesma audiência e excluir sobreposição via audiences</li>
</ul>`,
            en: `<strong>A/B Testing on LinkedIn — rules and framework:</strong><br><br>
<strong>Native tool:</strong> LinkedIn Campaign Manager has an "A/B Testing" module in beta — only available for some accounts. In most cases, testing is done manually (duplicated campaigns).<br><br>
<strong>What to test (by impact priority):</strong>
<ol>
  <li><strong>Ad format:</strong> Single Image vs. Carousel vs. Video vs. Document — which format resonates best with the target audience</li>
  <li><strong>Targeting:</strong> Job Title vs. Job Function + Seniority — which generates more volume with better lead quality</li>
  <li><strong>Copy:</strong> headline, introduction, CTA — especially important on LinkedIn where text is read more than on other platforms</li>
  <li><strong>Offer:</strong> e-book vs. webinar vs. demo — which content bait generates more conversion</li>
  <li><strong>Lead Gen Form vs. Landing Page</strong></li>
</ol>
<strong>Rules for a valid LinkedIn test:</strong>
<ul>
  <li><strong>Isolation:</strong> change only one variable at a time</li>
  <li><strong>Minimum budget:</strong> LinkedIn recommends minimum 100 conversions per variation for significance — given the high CPL, this may require considerable budget</li>
  <li><strong>Minimum duration:</strong> 2 weeks (avoid day-of-week variations — LinkedIn has very different usage patterns between Mon-Fri vs. weekends)</li>
  <li><strong>Separate audience:</strong> create separate campaigns with the same audience and exclude overlap via audiences</li>
</ul>`,
            es: `<strong>A/B Testing en LinkedIn — reglas y framework:</strong><br><br>
<strong>Herramienta nativa:</strong> LinkedIn Campaign Manager tiene un módulo de "A/B Testing" en fase beta — solo disponible para algunas cuentas. En la mayoría de los casos, el test se hace manualmente (campañas duplicadas).<br><br>
<strong>Qué probar (por prioridad de impacto):</strong>
<ol>
  <li><strong>Formato de anuncio:</strong> Single Image vs. Carousel vs. Video vs. Document — qué formato resuena mejor con la audiencia objetivo</li>
  <li><strong>Targeting:</strong> Job Title vs. Job Function + Seniority — cuál genera más volumen con mejor calidad de lead</li>
  <li><strong>Copy:</strong> headline, introducción, CTA — especialmente importante en LinkedIn donde el texto se lee más que en otras plataformas</li>
  <li><strong>Oferta:</strong> e-book vs. webinar vs. demo — qué cebo de contenido genera más conversión</li>
  <li><strong>Lead Gen Form vs. Landing Page</strong></li>
</ol>
<strong>Reglas de un test válido en LinkedIn:</strong>
<ul>
  <li><strong>Aislamiento:</strong> cambiar solo una variable a la vez</li>
  <li><strong>Presupuesto mínimo:</strong> LinkedIn recomienda mínimo 100 conversiones por variación para significancia — dado el CPL alto, esto puede requerir un presupuesto considerable</li>
  <li><strong>Duración mínima:</strong> 2 semanas (evitar variaciones de día de la semana — LinkedIn tiene patrones de uso muy diferentes entre lunes-viernes vs. fin de semana)</li>
  <li><strong>Audiencia separada:</strong> crear campañas separadas con la misma audiencia y excluir superposición via audiences</li>
</ul>`,
          },
          tags: ['AB-test', 'teste', 'formato', 'copy', 'targeting'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como estruturar uma estratégia full-funnel no LinkedIn para uma empresa B2B SaaS?',
            en: 'How to structure a full-funnel LinkedIn strategy for a B2B SaaS company?',
            es: '¿Cómo estructurar una estrategia full-funnel en LinkedIn para una empresa B2B SaaS?',
          },
          a: {
            pt: `<strong>Framework full-funnel LinkedIn para B2B SaaS:</strong><br><br>
<strong>TOFU — Awareness (Construção de demanda):</strong>
<ul>
  <li><strong>Objetivo:</strong> Brand Awareness ou Video Views</li>
  <li><strong>Audience:</strong> Profissionais do ICP (Ideal Customer Profile) — ex: Head of IT de empresas 200-2000 funcionários no setor de varejo</li>
  <li><strong>Formato:</strong> Video Ad (liderança de pensamento, problema do mercado) ou Thought Leadership Ads (posts de executivos da empresa)</li>
  <li><strong>KPI:</strong> Impressões, Frequência 3-5x, View Rate</li>
</ul>
<strong>MOFU — Consideração (Captura de demanda):</strong>
<ul>
  <li><strong>Objetivo:</strong> Engagement ou Website Visits</li>
  <li><strong>Audience:</strong> Video Viewers (25%+ do TOFU) + refinamento por seniority e empresa</li>
  <li><strong>Formato:</strong> Document Ad (case study, whitepaper, ROI calculator), Carousel (comparação de soluções)</li>
  <li><strong>KPI:</strong> CTR, Downloads, Tempo no site</li>
</ul>
<strong>BOFU — Conversão (Geração de pipeline):</strong>
<ul>
  <li><strong>Objetivo:</strong> Lead Generation</li>
  <li><strong>Audience:</strong> Website Retargeting (visitantes de /produto, /pricing) + ABM list das contas-alvo do time de vendas</li>
  <li><strong>Formato:</strong> Lead Gen Form (oferta de demo, trial, consulta gratuita)</li>
  <li><strong>KPI:</strong> CPL, MQL Rate, Pipeline gerado</li>
</ul>
<strong>Exclusões críticas:</strong>
<ul>
  <li>Excluir clientes atuais (Contact List) de todas as campanhas de aquisição</li>
  <li>Excluir BOFU converters do MOFU para não desperdiçar budget</li>
</ul>
<strong>Integração com vendas:</strong> leads do LGF entram direto no CRM via integração nativa. SDRs contatam em até 24h — lead quente esfria rápido.`,
            en: `<strong>Full-funnel LinkedIn framework for B2B SaaS:</strong><br><br>
<strong>TOFU — Awareness (Demand creation):</strong>
<ul>
  <li><strong>Objective:</strong> Brand Awareness or Video Views</li>
  <li><strong>Audience:</strong> ICP (Ideal Customer Profile) professionals — e.g. Head of IT at 200-2000 employee retail companies</li>
  <li><strong>Format:</strong> Video Ad (thought leadership, market problem) or Thought Leadership Ads (company executive posts)</li>
  <li><strong>KPI:</strong> Impressions, Frequency 3-5x, View Rate</li>
</ul>
<strong>MOFU — Consideration (Demand capture):</strong>
<ul>
  <li><strong>Objective:</strong> Engagement or Website Visits</li>
  <li><strong>Audience:</strong> Video Viewers (25%+ from TOFU) + refinement by seniority and company</li>
  <li><strong>Format:</strong> Document Ad (case study, whitepaper, ROI calculator), Carousel (solution comparison)</li>
  <li><strong>KPI:</strong> CTR, Downloads, Time on site</li>
</ul>
<strong>BOFU — Conversion (Pipeline generation):</strong>
<ul>
  <li><strong>Objective:</strong> Lead Generation</li>
  <li><strong>Audience:</strong> Website Retargeting (/product, /pricing visitors) + ABM list from sales team's target accounts</li>
  <li><strong>Format:</strong> Lead Gen Form (demo offer, trial, free consultation)</li>
  <li><strong>KPI:</strong> CPL, MQL Rate, Generated Pipeline</li>
</ul>
<strong>Critical exclusions:</strong>
<ul>
  <li>Exclude current customers (Contact List) from all acquisition campaigns</li>
  <li>Exclude BOFU converters from MOFU to avoid wasting budget</li>
</ul>
<strong>Sales integration:</strong> LGF leads go directly into CRM via native integration. SDRs contact within 24h — hot leads cool fast.`,
            es: `<strong>Framework full-funnel LinkedIn para B2B SaaS:</strong><br><br>
<strong>TOFU — Awareness (Creación de demanda):</strong>
<ul>
  <li><strong>Objetivo:</strong> Brand Awareness o Video Views</li>
  <li><strong>Audiencia:</strong> Profesionales del ICP (Ideal Customer Profile) — ej: Head of IT de empresas 200-2000 empleados en el sector retail</li>
  <li><strong>Formato:</strong> Video Ad (liderazgo de pensamiento, problema del mercado) o Thought Leadership Ads (posts de ejecutivos de la empresa)</li>
  <li><strong>KPI:</strong> Impresiones, Frecuencia 3-5x, View Rate</li>
</ul>
<strong>MOFU — Consideración (Captura de demanda):</strong>
<ul>
  <li><strong>Objetivo:</strong> Engagement o Website Visits</li>
  <li><strong>Audiencia:</strong> Video Viewers (25%+ del TOFU) + refinamiento por seniority y empresa</li>
  <li><strong>Formato:</strong> Document Ad (case study, whitepaper, calculadora de ROI), Carousel (comparación de soluciones)</li>
  <li><strong>KPI:</strong> CTR, Descargas, Tiempo en el sitio</li>
</ul>
<strong>BOFU — Conversión (Generación de pipeline):</strong>
<ul>
  <li><strong>Objetivo:</strong> Lead Generation</li>
  <li><strong>Audiencia:</strong> Website Retargeting (visitantes de /producto, /pricing) + lista ABM de las cuentas objetivo del equipo de ventas</li>
  <li><strong>Formato:</strong> Lead Gen Form (oferta de demo, trial, consulta gratuita)</li>
  <li><strong>KPI:</strong> CPL, Tasa de MQL, Pipeline generado</li>
</ul>
<strong>Exclusiones críticas:</strong>
<ul>
  <li>Excluir clientes actuales (Contact List) de todas las campañas de adquisición</li>
  <li>Excluir conversores del BOFU del MOFU para no desperdiciar presupuesto</li>
</ul>
<strong>Integración con ventas:</strong> leads del LGF entran directamente en el CRM via integración nativa. Los SDRs contactan en menos de 24h — el lead caliente se enfría rápido.`,
          },
          tags: ['full-funnel', 'SaaS', 'B2B', 'ICP', 'pipeline', 'ABM'],
        },
        {
          q: {
            pt: 'Como medir o ROI de campanhas LinkedIn em ciclos de venda longos (B2B enterprise)?',
            en: 'How to measure the ROI of LinkedIn campaigns in long sales cycles (B2B enterprise)?',
            es: '¿Cómo medir el ROI de campañas de LinkedIn en ciclos de venta largos (B2B enterprise)?',
          },
          a: {
            pt: `Medir ROI de LinkedIn em B2B enterprise é o maior desafio da plataforma — ciclos de 3-18 meses tornam a atribuição last-click inútil.<br><br>
<strong>Framework de mensuração para ciclos longos:</strong><br><br>
<strong>1. Métricas de pipeline (não de conversão imediata):</strong>
<ul>
  <li>MQL (Marketing Qualified Lead) gerado por LinkedIn</li>
  <li>SQL (Sales Qualified Lead) — MQL que o time de vendas aceitou</li>
  <li>Oportunidades abertas no CRM originadas de leads LinkedIn</li>
  <li>Pipeline Value (valor total das oportunidades em andamento)</li>
  <li>Negócios fechados won originados de LinkedIn (6-18 meses depois)</li>
</ul>
<strong>2. LinkedIn Revenue Attribution Report:</strong>
<ul>
  <li>Recurso nativo do Campaign Manager (disponível com integração CRM)</li>
  <li>Mostra a influência das campanhas LinkedIn no pipeline e receita do CRM</li>
  <li>Atribuição multi-touch — não apenas last-click</li>
</ul>
<strong>3. Self-reported attribution:</strong>
<ul>
  <li>Perguntar no formulário: "Como você nos conheceu?" — simples mas eficaz</li>
  <li>Leads que mencionam LinkedIn são trackeados separadamente no CRM</li>
</ul>
<strong>4. Velocity de pipeline:</strong>
<ul>
  <li>Medir se leads originados de LinkedIn têm ciclo de venda menor ou maior taxa de fechamento que outros canais</li>
  <li>Se menor ciclo: o LinkedIn está gerando leads mais qualificados mesmo com CPL maior</li>
</ul>
<strong>5. Brand Lift Study:</strong>
<ul>
  <li>Disponível para campanhas com budget acima de threshold</li>
  <li>Mede impacto em awareness, consideração e intenção de compra via survey com grupo controle</li>
</ul>`,
            en: `Measuring LinkedIn ROI in B2B enterprise is the platform's biggest challenge — 3-18 month cycles make last-click attribution useless.<br><br>
<strong>Measurement framework for long cycles:</strong><br><br>
<strong>1. Pipeline metrics (not immediate conversion):</strong>
<ul>
  <li>MQL (Marketing Qualified Lead) generated by LinkedIn</li>
  <li>SQL (Sales Qualified Lead) — MQL accepted by the sales team</li>
  <li>Opportunities opened in CRM originated from LinkedIn leads</li>
  <li>Pipeline Value (total value of opportunities in progress)</li>
  <li>Won deals originated from LinkedIn (6-18 months later)</li>
</ul>
<strong>2. LinkedIn Revenue Attribution Report:</strong>
<ul>
  <li>Native Campaign Manager feature (available with CRM integration)</li>
  <li>Shows the influence of LinkedIn campaigns on CRM pipeline and revenue</li>
  <li>Multi-touch attribution — not just last-click</li>
</ul>
<strong>3. Self-reported attribution:</strong>
<ul>
  <li>Ask in the form: "How did you hear about us?" — simple but effective</li>
  <li>Leads that mention LinkedIn are tracked separately in CRM</li>
</ul>
<strong>4. Pipeline velocity:</strong>
<ul>
  <li>Measure whether LinkedIn-originated leads have shorter sales cycles or higher close rates than other channels</li>
  <li>If shorter cycle: LinkedIn is generating more qualified leads even with higher CPL</li>
</ul>
<strong>5. Brand Lift Study:</strong>
<ul>
  <li>Available for campaigns above budget threshold</li>
  <li>Measures impact on awareness, consideration and purchase intent via survey with control group</li>
</ul>`,
            es: `Medir el ROI de LinkedIn en B2B enterprise es el mayor desafío de la plataforma — ciclos de 3-18 meses hacen que la atribución last-click sea inútil.<br><br>
<strong>Framework de medición para ciclos largos:</strong><br><br>
<strong>1. Métricas de pipeline (no de conversión inmediata):</strong>
<ul>
  <li>MQL (Marketing Qualified Lead) generado por LinkedIn</li>
  <li>SQL (Sales Qualified Lead) — MQL que el equipo de ventas aceptó</li>
  <li>Oportunidades abiertas en el CRM originadas de leads de LinkedIn</li>
  <li>Pipeline Value (valor total de las oportunidades en curso)</li>
  <li>Negocios cerrados-ganados originados de LinkedIn (6-18 meses después)</li>
</ul>
<strong>2. LinkedIn Revenue Attribution Report:</strong>
<ul>
  <li>Recurso nativo de Campaign Manager (disponible con integración CRM)</li>
  <li>Muestra la influencia de las campañas de LinkedIn en el pipeline y los ingresos del CRM</li>
  <li>Atribución multi-touch — no solo last-click</li>
</ul>
<strong>3. Self-reported attribution:</strong>
<ul>
  <li>Preguntar en el formulario: "¿Cómo nos conociste?" — simple pero efectivo</li>
  <li>Los leads que mencionan LinkedIn se rastrean por separado en el CRM</li>
</ul>
<strong>4. Velocidad del pipeline:</strong>
<ul>
  <li>Medir si los leads originados de LinkedIn tienen ciclos de venta más cortos o mayor tasa de cierre que otros canales</li>
  <li>Si el ciclo es más corto: LinkedIn está generando leads más calificados incluso con un CPL mayor</li>
</ul>
<strong>5. Brand Lift Study:</strong>
<ul>
  <li>Disponible para campañas con presupuesto por encima del umbral</li>
  <li>Mide el impacto en awareness, consideración e intención de compra via encuesta con grupo de control</li>
</ul>`,
          },
          tags: ['ROI', 'B2B', 'ciclo-de-venda', 'atribuição', 'pipeline', 'CRM'],
        },
        {
          q: {
            pt: 'Como usar o LinkedIn para campanhas de employer branding e recrutamento?',
            en: 'How to use LinkedIn for employer branding and recruitment campaigns?',
            es: '¿Cómo usar LinkedIn para campañas de employer branding y reclutamiento?',
          },
          a: {
            pt: `O LinkedIn é a plataforma nativa de recrutamento — mas as ferramentas de Ads podem amplificar massivamente o alcance de employer branding.<br><br>
<strong>Objetivos e estratégias:</strong><br><br>
<strong>1. Employer Branding (awareness de marca empregadora):</strong>
<ul>
  <li><strong>Objetivo:</strong> Brand Awareness ou Engagement</li>
  <li><strong>Formato:</strong> Video Ads (cultura da empresa, depoimentos de funcionários), Thought Leadership Ads (CEOs e líderes falando sobre a empresa)</li>
  <li><strong>Audience:</strong> profissionais do setor com perfil para as vagas — mesmo sem vaga aberta, construir percepção da marca empregadora</li>
  <li><strong>KPI:</strong> Impressões no público-alvo, engajamento, crescimento de seguidores da página</li>
</ul>
<strong>2. Recrutamento (atração de candidatos):</strong>
<ul>
  <li><strong>Objetivo:</strong> Job Applicants (formato específico do LinkedIn Recruiter) ou Website Visits para página de carreiras</li>
  <li><strong>Formato:</strong> Single Image Ad com detalhes da vaga + CTA "Candidate-se"</li>
  <li><strong>Audience precisão:</strong> combinar Job Function + Seniority + Skills + Localização — ex: "Desenvolvedores Sênior com skill Python em São Paulo"</li>
</ul>
<strong>3. Thought Leadership de funcionários:</strong>
<ul>
  <li>Amplificar posts de funcionários (Thought Leadership Ads) — mais autêntico que conteúdo da marca</li>
  <li>Candidatos confiam mais em depoimentos de funcionários do que em anúncios oficiais</li>
</ul>
<strong>Integração com LinkedIn Recruiter:</strong>
<ul>
  <li>Usuários que interagem com os anúncios podem ser identificados no LinkedIn Recruiter para contato direto</li>
  <li>InMail de recrutamento tem taxa de abertura de 50-70% vs. 15-25% de email</li>
</ul>`,
            en: `LinkedIn is the native recruitment platform — but Ads tools can massively amplify employer branding reach.<br><br>
<strong>Objectives and strategies:</strong><br><br>
<strong>1. Employer Branding (employer brand awareness):</strong>
<ul>
  <li><strong>Objective:</strong> Brand Awareness or Engagement</li>
  <li><strong>Format:</strong> Video Ads (company culture, employee testimonials), Thought Leadership Ads (CEOs and leaders talking about the company)</li>
  <li><strong>Audience:</strong> sector professionals with profile for the positions — even without an open vacancy, build employer brand perception</li>
  <li><strong>KPI:</strong> Impressions to target audience, engagement, page follower growth</li>
</ul>
<strong>2. Recruitment (candidate attraction):</strong>
<ul>
  <li><strong>Objective:</strong> Job Applicants (specific LinkedIn Recruiter format) or Website Visits to careers page</li>
  <li><strong>Format:</strong> Single Image Ad with job details + "Apply Now" CTA</li>
  <li><strong>Precision audience:</strong> combine Job Function + Seniority + Skills + Location — e.g. "Senior Python Developers in São Paulo"</li>
</ul>
<strong>3. Employee thought leadership:</strong>
<ul>
  <li>Amplify employee posts (Thought Leadership Ads) — more authentic than brand content</li>
  <li>Candidates trust employee testimonials more than official ads</li>
</ul>
<strong>Integration with LinkedIn Recruiter:</strong>
<ul>
  <li>Users who interact with ads can be identified in LinkedIn Recruiter for direct contact</li>
  <li>Recruiter InMail has 50-70% open rate vs. 15-25% for email</li>
</ul>`,
            es: `LinkedIn es la plataforma nativa de reclutamiento — pero las herramientas de Ads pueden amplificar masivamente el alcance del employer branding.<br><br>
<strong>Objetivos y estrategias:</strong><br><br>
<strong>1. Employer Branding (awareness de marca empleadora):</strong>
<ul>
  <li><strong>Objetivo:</strong> Brand Awareness o Engagement</li>
  <li><strong>Formato:</strong> Video Ads (cultura de la empresa, testimonios de empleados), Thought Leadership Ads (CEOs y líderes hablando sobre la empresa)</li>
  <li><strong>Audiencia:</strong> profesionales del sector con perfil para los puestos — incluso sin vacante abierta, construir percepción de marca empleadora</li>
  <li><strong>KPI:</strong> Impresiones al público objetivo, engagement, crecimiento de seguidores de la página</li>
</ul>
<strong>2. Reclutamiento (atracción de candidatos):</strong>
<ul>
  <li><strong>Objetivo:</strong> Job Applicants (formato específico de LinkedIn Recruiter) o Website Visits a la página de carreras</li>
  <li><strong>Formato:</strong> Single Image Ad con detalles del puesto + CTA "Postúlate"</li>
  <li><strong>Audiencia de precisión:</strong> combinar Job Function + Seniority + Skills + Ubicación — ej: "Desarrolladores Senior con skill Python en São Paulo"</li>
</ul>
<strong>3. Thought Leadership de empleados:</strong>
<ul>
  <li>Amplificar posts de empleados (Thought Leadership Ads) — más auténtico que el contenido de la marca</li>
  <li>Los candidatos confían más en los testimonios de empleados que en los anuncios oficiales</li>
</ul>
<strong>Integración con LinkedIn Recruiter:</strong>
<ul>
  <li>Los usuarios que interactúan con los anuncios pueden ser identificados en LinkedIn Recruiter para contacto directo</li>
  <li>El InMail de reclutamiento tiene una tasa de apertura del 50-70% vs. 15-25% del email</li>
</ul>`,
          },
          tags: ['employer-branding', 'recrutamento', 'Thought-Leadership', 'InMail', 'RH'],
        },
        {
          q: {
            pt: 'Quais os erros mais comuns em campanhas LinkedIn e como evitá-los?',
            en: 'What are the most common mistakes in LinkedIn campaigns and how to avoid them?',
            es: '¿Cuáles son los errores más comunes en campañas de LinkedIn y cómo evitarlos?',
          },
          a: {
            pt: `<strong>Os 8 erros mais comuns em LinkedIn Ads:</strong><br><br>
<ol>
  <li><strong>Audience muito pequena:</strong> LinkedIn recomenda mínimo de 50.000 usuários para campanhas de performance. Audiências menores = pouca entrega e CPM explodiram. Solução: ampliar via Job Function ao invés de Job Title, ou remover filtros secundários.</li>
  <li><strong>Audience muito grande sem qualificação:</strong> o oposto — broad demais sem seniority ou company size resulta em leads desqualificados com CPL alto. Sempre definir ao menos: Localização + Job Function/Title + Seniority.</li>
  <li><strong>Usar o mesmo targeting em todas as etapas do funil:</strong> TOFU e BOFU com a mesma audience desperdiça budget e confunde o algoritmo.</li>
  <li><strong>Não excluir clientes atuais:</strong> gastar para alcançar quem já é cliente é desperdício e pode irritar o cliente. Sempre fazer upload da Contact List de clientes para exclusão.</li>
  <li><strong>Pausar campanha muito cedo:</strong> LinkedIn precisa de 2+ semanas e 10+ conversões para otimizar o algoritmo. Pausar na primeira semana é matar a campanha antes de aprender.</li>
  <li><strong>Criativo genérico sem personalização:</strong> "Somos líderes em X" não funciona. Mencionar o cargo do target na headline ("Para Diretores de Marketing:") aumenta CTR significativamente.</li>
  <li><strong>Ignorar o Insight Tag:</strong> sem o pixel instalado, não há retargeting, não há conversions tracking e não há Website Demographics — perde-se 80% do valor da plataforma.</li>
  <li><strong>Medir apenas pelo custo por clique:</strong> no LinkedIn o CPC é naturalmente mais alto. A métrica correta é CPL e a qualidade do lead, não o CPC isolado.</li>
</ol>`,
            en: `<strong>The 8 most common mistakes in LinkedIn Ads:</strong><br><br>
<ol>
  <li><strong>Audience too small:</strong> LinkedIn recommends a minimum of 50,000 users for performance campaigns. Smaller audiences = poor delivery and exploding CPMs. Solution: expand via Job Function instead of Job Title, or remove secondary filters.</li>
  <li><strong>Audience too large without qualification:</strong> the opposite — too broad without seniority or company size results in unqualified leads with high CPL. Always define at least: Location + Job Function/Title + Seniority.</li>
  <li><strong>Using the same targeting at all funnel stages:</strong> TOFU and BOFU with the same audience wastes budget and confuses the algorithm.</li>
  <li><strong>Not excluding current customers:</strong> spending to reach existing customers is waste and can irritate them. Always upload the customer Contact List for exclusion.</li>
  <li><strong>Pausing campaigns too early:</strong> LinkedIn needs 2+ weeks and 10+ conversions to optimize the algorithm. Pausing in the first week kills the campaign before it can learn.</li>
  <li><strong>Generic creative without personalization:</strong> "We are leaders in X" doesn't work. Mentioning the target's title in the headline ("For Marketing Directors:") significantly increases CTR.</li>
  <li><strong>Ignoring the Insight Tag:</strong> without the pixel installed, there's no retargeting, no conversion tracking and no Website Demographics — you lose 80% of the platform's value.</li>
  <li><strong>Measuring only by cost per click:</strong> LinkedIn's CPC is naturally higher. The correct metric is CPL and lead quality, not CPC in isolation.</li>
</ol>`,
            es: `<strong>Los 8 errores más comunes en LinkedIn Ads:</strong><br><br>
<ol>
  <li><strong>Audiencia muy pequeña:</strong> LinkedIn recomienda un mínimo de 50,000 usuarios para campañas de performance. Audiencias más pequeñas = poca entrega y CPMs disparados. Solución: ampliar via Job Function en vez de Job Title, o eliminar filtros secundarios.</li>
  <li><strong>Audiencia muy grande sin calificación:</strong> lo opuesto — demasiado broad sin seniority o company size resulta en leads no calificados con CPL alto. Siempre definir al menos: Ubicación + Job Function/Title + Seniority.</li>
  <li><strong>Usar el mismo targeting en todas las etapas del embudo:</strong> TOFU y BOFU con la misma audiencia desperdicia presupuesto y confunde el algoritmo.</li>
  <li><strong>No excluir clientes actuales:</strong> gastar para alcanzar a quienes ya son clientes es desperdicio y puede irritarlos. Siempre hacer upload de la Contact List de clientes para exclusión.</li>
  <li><strong>Pausar la campaña muy pronto:</strong> LinkedIn necesita 2+ semanas y 10+ conversiones para optimizar el algoritmo. Pausar en la primera semana es matar la campaña antes de que aprenda.</li>
  <li><strong>Creativo genérico sin personalización:</strong> "Somos líderes en X" no funciona. Mencionar el cargo del target en el headline ("Para Directores de Marketing:") aumenta el CTR significativamente.</li>
  <li><strong>Ignorar el Insight Tag:</strong> sin el pixel instalado, no hay retargeting, no hay seguimiento de conversiones y no hay Website Demographics — se pierde el 80% del valor de la plataforma.</li>
  <li><strong>Medir solo por el costo por clic:</strong> el CPC de LinkedIn es naturalmente más alto. La métrica correcta es el CPL y la calidad del lead, no el CPC de forma aislada.</li>
</ol>`,
          },
          tags: ['erros', 'boas-práticas', 'audience', 'Insight-Tag', 'CPL', 'otimização'],
        },
      ],
    },
  ],
};

// ── APPEND: básicos práticos (patch) ──
;(function(){
const d = window.__adopsData['linkedin'];
d.tiers[0].questions.push(
  {
    q:{pt:'Como criar uma campanha no LinkedIn Ads do zero?',en:'How to create a LinkedIn Ads campaign from scratch?',es:'¿Cómo crear una campaña en LinkedIn Ads desde cero?'},
    a:{
      pt:`O LinkedIn Campaign Manager tem 3 níveis: <strong>Grupo de Campanhas → Campanha → Anúncio</strong>.<br><br>
<strong>Passo 1 — Criar Grupo de Campanhas:</strong>
<ol>
  <li>Acesse <code>linkedin.com/campaignmanager</code></li>
  <li>Selecione a Conta de Anúncios (ou crie uma)</li>
  <li>Clique em <strong>Criar → Grupo de Campanhas</strong></li>
  <li>Defina: nome, status (ativo), budget total do grupo (opcional) e datas</li>
</ol>
<strong>Passo 2 — Criar Campanha:</strong>
<ol>
  <li>Dentro do Grupo, clique em <strong>Criar Campanha</strong></li>
  <li><strong>Objetivo:</strong> Conhecimento (Awareness), Consideração (Visitas ao site, Engajamento, Visualizações de vídeo), Conversões (Geração de leads, Conversões no site, Candidatos a emprego)</li>
  <li><strong>Público:</strong> localização (obrigatório) + atributos profissionais: cargo, setor, empresa, senioridade, habilidades, grupos, grau de instrução</li>
  <li><strong>Formato do anúncio:</strong> Single Image, Carousel, Video, Text Ad, Spotlight, Message Ad, Conversation Ad, Document Ad</li>
  <li><strong>Placement:</strong> LinkedIn Feed + LinkedIn Audience Network (opcional — sites parceiros)</li>
  <li><strong>Budget:</strong> diário ou total. Lance: CPC, CPM ou CPV automatizado</li>
  <li><strong>Conversão:</strong> vincular o LinkedIn Insight Tag e evento de conversão</li>
</ol>
<strong>Passo 3 — Criar Anúncio:</strong>
<ol>
  <li>Dentro da Campanha, clique em <strong>Criar Anúncio</strong></li>
  <li>Escolha: usar conteúdo existente da Página ou criar novo</li>
  <li>Preencha: imagem/vídeo, texto introdutório (150 caracteres visíveis), headline (70 char), descrição, URL de destino e CTA</li>
  <li>Preview em desktop e mobile antes de salvar</li>
</ol>
<strong>Revisão e publicação:</strong> o LinkedIn revisa anúncios em até 24h antes de ativar. Status inicial: "Em revisão".`,
      en:`LinkedIn Campaign Manager has 3 levels: <strong>Campaign Group → Campaign → Ad</strong>.<br><br>
<strong>Step 1 — Create Campaign Group:</strong>
<ol>
  <li>Access <code>linkedin.com/campaignmanager</code></li>
  <li>Select Ad Account (or create one)</li>
  <li>Click <strong>Create → Campaign Group</strong></li>
  <li>Define: name, status (active), group total budget (optional) and dates</li>
</ol>
<strong>Step 2 — Create Campaign:</strong>
<ol>
  <li>Inside Group, click <strong>Create Campaign</strong></li>
  <li><strong>Objective:</strong> Awareness, Consideration (Website visits, Engagement, Video views), Conversions (Lead generation, Website conversions, Job applicants)</li>
  <li><strong>Audience:</strong> location (required) + professional attributes: job title, industry, company, seniority, skills, groups, education</li>
  <li><strong>Ad format:</strong> Single Image, Carousel, Video, Text Ad, Spotlight, Message Ad, Conversation Ad, Document Ad</li>
  <li><strong>Budget:</strong> daily or total. Bid: CPC, CPM or automated CPV</li>
</ol>
<strong>Step 3 — Create Ad:</strong>
<ol>
  <li>Inside Campaign, click <strong>Create Ad</strong></li>
  <li>Fill in: image/video, introductory text (150 visible characters), headline (70 char), description, destination URL and CTA</li>
  <li>Preview in desktop and mobile before saving</li>
</ol>`,
      es:`LinkedIn Campaign Manager tiene 3 niveles: <strong>Grupo de Campañas → Campaña → Anuncio</strong>.<br><br>
<strong>Paso 1 — Crear Grupo de Campañas:</strong>
<ol>
  <li>Accede a <code>linkedin.com/campaignmanager</code></li>
  <li>Selecciona la Cuenta de Anuncios</li>
  <li>Haz clic en <strong>Crear → Grupo de Campañas</strong></li>
  <li>Define: nombre, estado (activo), presupuesto total del grupo y fechas</li>
</ol>
<strong>Paso 2 — Crear Campaña:</strong>
<ol>
  <li>Dentro del Grupo, haz clic en <strong>Crear Campaña</strong></li>
  <li><strong>Objetivo:</strong> Conocimiento, Consideración (Visitas al sitio, Interacción, Visualizaciones de video), Conversiones (Generación de leads, Conversiones en el sitio)</li>
  <li><strong>Audiencia:</strong> ubicación (obligatoria) + atributos profesionales</li>
  <li><strong>Formato del anuncio, Presupuesto, Lance</strong></li>
</ol>
<strong>Paso 3 — Crear Anuncio:</strong>
<ol>
  <li>Dentro de la Campaña, haz clic en <strong>Crear Anuncio</strong></li>
  <li>Rellena: imagen/video, texto introductorio, headline, descripción, URL de destino y CTA</li>
</ol>`,
    },
    tags:['LinkedIn','campanha','Campaign-Manager','Lead-Gen','objetivo','criação'],
  },
  {
    q:{pt:'Como instalar o LinkedIn Insight Tag e criar conversões?',en:'How to install the LinkedIn Insight Tag and create conversions?',es:'¿Cómo instalar el LinkedIn Insight Tag y crear conversiones?'},
    a:{
      pt:`O <strong>LinkedIn Insight Tag</strong> é o pixel do LinkedIn — rastreia visitas ao site, permite retargeting e mede conversões após clique ou visualização de anúncio.<br><br>
<strong>Criar e instalar o Insight Tag:</strong>
<ol>
  <li>No Campaign Manager → <strong>Recursos da Conta → Insight Tag</strong></li>
  <li>Copie o snippet JavaScript gerado (único por conta)</li>
  <li><strong>Via GTM (recomendado):</strong> nova Tag → Custom HTML → cole o snippet → disparo All Pages → Preview → Publish</li>
  <li><strong>Manual:</strong> cole antes do <code>&lt;/body&gt;</code> em todas as páginas</li>
  <li>Verificar: o domínio aparece como "Verificado" no Campaign Manager em até 24h</li>
</ol>
<strong>Criar Conversão:</strong>
<ol>
  <li>Campaign Manager → <strong>Conversões → Criar Conversão</strong></li>
  <li>Nome: ex. "Lead - Formulário de Contato"</li>
  <li>Tipo: Compra, Adição ao carrinho, Download, Instalação de app, Inscrição, Geração de leads, Página visualizada, Outro</li>
  <li>Valor: valor monetário opcional da conversão</li>
  <li>Janela de atribuição: 1, 7, 30 ou 90 dias pós-clique; 1 ou 7 dias pós-impressão</li>
  <li>Método de rastreamento:
    <ul>
      <li><strong>Insight Tag + URL específica:</strong> dispara quando o usuário chega à URL de obrigado</li>
      <li><strong>Insight Tag + evento:</strong> dispara em evento específico no site</li>
      <li><strong>Conversão API:</strong> server-side, similar ao CAPI do Meta</li>
    </ul>
  </li>
</ol>
<strong>Público de retargeting com Insight Tag:</strong>
<ul>
  <li>Campaign Manager → Públicos Correspondentes → Criar público → Retargeting de site</li>
  <li>Segmentar por: todos os visitantes, URL específica, evento específico, tempo na página</li>
  <li>Mínimo de 300 membros para ativar o público</li>
</ul>`,
      en:`The <strong>LinkedIn Insight Tag</strong> is LinkedIn's pixel — tracks site visits, enables retargeting and measures conversions after ad click or view.<br><br>
<strong>Create and install Insight Tag:</strong>
<ol>
  <li>In Campaign Manager → <strong>Account Assets → Insight Tag</strong></li>
  <li>Copy the generated JavaScript snippet (unique per account)</li>
  <li><strong>Via GTM (recommended):</strong> new Tag → Custom HTML → paste snippet → All Pages trigger → Preview → Publish</li>
  <li>Verify: domain appears as "Verified" in Campaign Manager within 24h</li>
</ol>
<strong>Create Conversion:</strong>
<ol>
  <li>Campaign Manager → <strong>Conversions → Create Conversion</strong></li>
  <li>Name, Type (Purchase, Lead, Page View, etc.), optional monetary value</li>
  <li>Attribution window: 1, 7, 30 or 90 days post-click; 1 or 7 days post-impression</li>
  <li>Tracking method: Insight Tag + specific URL, Insight Tag + event, or Conversions API</li>
</ol>`,
      es:`El <strong>LinkedIn Insight Tag</strong> es el píxel de LinkedIn — rastrea visitas al sitio, permite retargeting y mide conversiones.<br><br>
<strong>Crear e instalar Insight Tag:</strong>
<ol>
  <li>En Campaign Manager → <strong>Recursos de la Cuenta → Insight Tag</strong></li>
  <li>Copia el snippet JavaScript generado</li>
  <li>Via GTM: nueva Tag → Custom HTML → pega el snippet → All Pages → Publish</li>
  <li>Verificar: el dominio aparece como "Verificado" en Campaign Manager en hasta 24h</li>
</ol>
<strong>Crear Conversión:</strong>
<ol>
  <li>Campaign Manager → <strong>Conversiones → Crear Conversión</strong></li>
  <li>Nombre, Tipo, Valor opcional, Ventana de atribución</li>
  <li>Método: Insight Tag + URL específica, Insight Tag + evento, o API de Conversiones</li>
</ol>`,
    },
    tags:['LinkedIn','Insight-Tag','GTM','conversão','retargeting','pixel','instalação'],
  }
);

// ──────────────────────────────────────────────────────────────
})();

;(function(){
const d = window.__adopsData['linkedin'];
d.tiers[0].questions.push(
  {
    q:{pt:'Passo a passo: como criar uma campanha no LinkedIn Campaign Manager?',en:'Step by step: how to create a campaign in LinkedIn Campaign Manager?',es:'Paso a paso: ¿cómo crear una campaña en LinkedIn Campaign Manager?'},
    a:{
      pt:`<strong>Pré-requisitos:</strong>
<ul>
  <li>Página de empresa no LinkedIn criada</li>
  <li>Conta de anúncios criada em <strong>linkedin.com/campaignmanager</strong></li>
  <li>Método de pagamento adicionado</li>
  <li>LinkedIn Insight Tag instalada no site (para conversões e retargeting)</li>
</ul>
<strong>Estrutura do LinkedIn Campaign Manager:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">Campaign Group (agrupa campanhas por objetivo/período)
  └── Campaign (targeting + formato + budget)
        └── Ad (criativo)</pre>
<strong>Passo 1 — Criar Campaign Group:</strong>
<ol>
  <li>Clique em <strong>+ Criar → Campaign Group</strong></li>
  <li>Nome: ex: <code>Grupo_Awareness_Q3-2025</code></li>
  <li>Status: Ativo</li>
  <li>Orçamento e datas do grupo (opcional — pode deixar no nível de campanha)</li>
</ol>
<strong>Passo 2 — Criar Campaign (dentro do grupo):</strong>
<ol>
  <li>Objetivo: Awareness (Reconhecimento de marca), Consideração (Visitas ao site, Engajamento, Visualizações de vídeo, Geração de leads) ou Conversões (Conversões no site, Candidatos a vagas)</li>
  <li>Nome: ex: <code>Decision-Makers_TI_SP_Lead-Gen_Ago25</code></li>
  <li><strong>Audience (Público-alvo):</strong>
    <ul>
      <li>Localização: Brasil, São Paulo, etc.</li>
      <li>Segmentação profissional:
        <ul>
          <li>Cargo: "IT Manager", "CTO", "Head of Technology"</li>
          <li>Setor: "Tecnologia da Informação", "Serviços financeiros"</li>
          <li>Tamanho da empresa: 200-10.000 funcionários</li>
          <li>Habilidades: "Cloud Computing", "Cybersecurity"</li>
          <li>Nível de senioridade: Diretor, Gerente, C-suite</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>Formato do anúncio:</strong> Single Image Ad, Video Ad, Carousel, Document Ad, Message Ad, Lead Gen Form</li>
  <li><strong>Orçamento:</strong> diário (mínimo ~R$25/dia) ou total</li>
  <li><strong>Lance:</strong> automático (recomendado) ou manual (CPC, CPM, CPV)</li>
</ol>
<strong>Passo 3 — Criar Ad (criativo):</strong>
<ol>
  <li>Selecione ou crie um anúncio</li>
  <li>Headline: até 150 caracteres</li>
  <li>Texto introdutório: até 600 caracteres</li>
  <li>Imagem: 1200×627px recomendado</li>
  <li>URL de destino com UTM parameters</li>
  <li>CTA: "Saiba mais", "Baixar", "Inscreva-se", "Obter orçamento"</li>
</ol>
<strong>Passo 4 — Revisar e Lançar:</strong>
<ol>
  <li>Revisar targeting e estimativa de alcance (mínimo recomendado: 50.000 pessoas)</li>
  <li>Salvar e Lançar — aprovação em até 24h</li>
</ol>`,
      en:`<strong>Prerequisites:</strong>
<ul>
  <li>Company LinkedIn Page created</li>
  <li>Ad account created at <strong>linkedin.com/campaignmanager</strong></li>
  <li>Payment method added</li>
  <li>LinkedIn Insight Tag installed on site</li>
</ul>
<strong>LinkedIn Campaign Manager structure:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">Campaign Group → Campaign (targeting + format + budget) → Ad (creative)</pre>
<strong>Step 1 — Create Campaign Group:</strong> name, status, optional budget/dates.<br><br>
<strong>Step 2 — Create Campaign:</strong>
<ol>
  <li>Objective: Awareness, Consideration or Conversions</li>
  <li>Audience: location + professional targeting (job title, industry, company size, skills, seniority)</li>
  <li>Ad format: Single Image, Video, Carousel, Document, Message Ad, Lead Gen Form</li>
  <li>Budget: daily (minimum ~$5/day) or total</li>
  <li>Bid: automatic (recommended) or manual</li>
</ol>
<strong>Step 3 — Create Ad:</strong> headline (150 chars), intro text (600 chars), image (1200×627px), destination URL with UTMs, CTA.<br><br>
<strong>Step 4 — Review and Launch:</strong> check audience estimate (minimum 50,000 people recommended). Approval up to 24h.`,
      es:`<strong>Prerequisitos:</strong>
<ul>
  <li>Página de empresa en LinkedIn creada</li>
  <li>Cuenta de anuncios creada en <strong>linkedin.com/campaignmanager</strong></li>
  <li>Método de pago agregado</li>
  <li>LinkedIn Insight Tag instalada en el sitio</li>
</ul>
<strong>Estructura de LinkedIn Campaign Manager:</strong>
<pre style="background:#0a0c10;padding:12px;border-radius:6px;font-size:13px">Campaign Group → Campaign (targeting + formato + presupuesto) → Ad (creativo)</pre>
<strong>Paso 2 — Crear Campaign:</strong>
<ol>
  <li>Objetivo: Awareness, Consideración o Conversiones</li>
  <li>Audiencia: ubicación + segmentación profesional (cargo, sector, tamaño de empresa, habilidades, antigüedad)</li>
  <li>Formato del anuncio: Single Image, Video, Carousel, Document, Message Ad, Lead Gen Form</li>
  <li>Presupuesto: diario (mínimo ~R$25/día) o total</li>
</ol>
<strong>Paso 3 — Crear Ad:</strong> titular (150 caracteres), texto introductorio (600 caracteres), imagen (1200×627px), URL de destino con UTMs, CTA.<br><br>
<strong>Paso 4 — Revisar y Lanzar:</strong> verificar estimativa de alcance (mínimo recomendado: 50.000 personas). Aprobación en hasta 24h.`,
    },
    tags:['LinkedIn','Campaign-Manager','passo-a-passo','targeting','Lead-Gen-Form','B2B','campanha'],
  },
  {
    q:{pt:'O que é o LinkedIn Insight Tag e como funciona?',en:'What is LinkedIn Insight Tag and how does it work?',es:'¿Qué es el LinkedIn Insight Tag y cómo funciona?'},
    a:{
      pt:`O <strong>LinkedIn Insight Tag</strong> é o pixel do LinkedIn — um snippet JavaScript instalado no site que permite rastrear visitas, mensurar conversões de campanhas e criar audiências de retargeting.<br><br>
<strong>O que o Insight Tag faz:</strong>
<ul>
  <li>Rastreia quais páginas do site os usuários visitam</li>
  <li>Identifica se os visitantes são membros do LinkedIn (via cookie) — sem expor dados pessoais</li>
  <li>Registra conversões: formulários preenchidos, compras, cadastros após clique/visualização de anúncio</li>
  <li>Gera <strong>Website Demographics:</strong> relatório que mostra o perfil profissional (cargo, setor, tamanho de empresa) dos visitantes do seu site — mesmo sem campanha ativa</li>
</ul>
<strong>Como instalar:</strong>
<ol>
  <li>No Campaign Manager → <strong>Ativos da conta → Insight Tag</strong></li>
  <li>Copie o código JavaScript</li>
  <li>Cole antes do fechamento do <code>&lt;/body&gt;</code> em todas as páginas</li>
  <li>Ou instale via GTM: Tag Custom HTML, disparo All Pages</li>
  <li>Verificar: Campaign Manager → Insight Tag → status "Ativo" (pode demorar 24h para confirmar)</li>
</ol>
<strong>Configurar Conversões:</strong>
<ol>
  <li>Campaign Manager → <strong>Ativos da conta → Conversões → Criar conversão</strong></li>
  <li>Definir: nome, tipo (Download, Lead, Compra, etc.), valor (opcional), janela de atribuição</li>
  <li>Método de rastreamento: URL (dispara quando usuário visita URL específica — ex: /obrigado) ou por evento JavaScript</li>
  <li>Associar à campanha no momento da criação</li>
</ol>
<strong>Criar Website Retargeting Audience:</strong>
<ol>
  <li>Campaign Manager → <strong>Audiences → Criar audience → Retargeting → Website</strong></li>
  <li>Selecionar: todos os visitantes, visitantes de URL específica, ou baseado em tempo na página</li>
  <li>Janela: últimos 30, 90 ou 180 dias</li>
  <li>Mínimo de 300 membros para ativar o targeting</li>
</ol>`,
      en:`The <strong>LinkedIn Insight Tag</strong> is LinkedIn's pixel — a JavaScript snippet installed on site that enables tracking visits, measuring campaign conversions and creating retargeting audiences.<br><br>
<strong>What Insight Tag does:</strong>
<ul>
  <li>Tracks which site pages users visit</li>
  <li>Identifies if visitors are LinkedIn members</li>
  <li>Records conversions after ad click/view</li>
  <li>Generates <strong>Website Demographics:</strong> report showing professional profile (job title, industry, company size) of site visitors</li>
</ul>
<strong>How to install:</strong>
<ol>
  <li>Campaign Manager → <strong>Account assets → Insight Tag</strong></li>
  <li>Copy JavaScript code → paste before <code>&lt;/body&gt;</code> on all pages, or install via GTM</li>
  <li>Verify: status "Active" (may take 24h)</li>
</ol>
<strong>Configure Conversions:</strong> Account assets → Conversions → Create conversion → define name, type, attribution window, tracking method (URL or JavaScript event).<br><br>
<strong>Create Website Retargeting Audience:</strong> minimum 300 members to activate targeting.`,
      es:`El <strong>LinkedIn Insight Tag</strong> es el píxel de LinkedIn — un snippet JavaScript instalado en el sitio que permite rastrear visitas, medir conversiones y crear audiencias de retargeting.<br><br>
<strong>Qué hace el Insight Tag:</strong>
<ul>
  <li>Rastrea qué páginas del sitio visitan los usuarios</li>
  <li>Identifica si los visitantes son miembros de LinkedIn</li>
  <li>Registra conversiones tras clic/visualización de anuncio</li>
  <li>Genera <strong>Website Demographics:</strong> informe con el perfil profesional (cargo, sector, tamaño de empresa) de los visitantes del sitio</li>
</ul>
<strong>Cómo instalar:</strong>
<ol>
  <li>Campaign Manager → <strong>Activos de la cuenta → Insight Tag</strong></li>
  <li>Copiar el código → pegar antes del cierre del <code>&lt;/body&gt;</code>, o instalar via GTM</li>
</ol>
<strong>Configurar Conversiones:</strong> Activos de la cuenta → Conversiones → Crear conversión → nombre, tipo, ventana de atribución, método de rastreo.<br><br>
<strong>Crear Audience de Retargeting:</strong> mínimo 300 miembros para activar el targeting.`,
    },
    tags:['LinkedIn','Insight-Tag','pixel','conversão','retargeting','Website-Demographics','GTM'],
  }
);
})();

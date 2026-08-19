window.__adopsData = window.__adopsData || {};
window.__adopsData['privacidade'] = {
  icon: '🔒',
  name: { pt: 'Privacidade & Cookieless', en: 'Privacy & Cookieless', es: 'Privacidad & Cookieless' },
  desc: {
    pt: 'LGPD, GDPR, Privacy Sandbox, consentimento, first-party data, identidade e o futuro da publicidade sem cookies.',
    en: 'LGPD, GDPR, Privacy Sandbox, consent, first-party data, identity and the future of cookieless advertising.',
    es: 'LGPD, GDPR, Privacy Sandbox, consentimiento, first-party data, identidad y el futuro de la publicidad sin cookies.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: { pt: 'O que são cookies e qual a diferença entre first-party e third-party cookies?', en: 'What are cookies and what is the difference between first-party and third-party cookies?', es: '¿Qué son las cookies y cuál es la diferencia entre cookies de primera y de terceros?' },
          a: {
            pt: `<strong>Cookies</strong> são pequenos arquivos de texto armazenados no browser do usuário que permitem que sites reconheçam visitantes entre sessões e rastreiem comportamento online.<br><br>
<strong>First-Party Cookies:</strong>
<ul>
  <li>Criados e lidos pelo mesmo domínio que o usuário está visitando</li>
  <li>Ex: você acessa <code>loja.com.br</code> — o cookie é de <code>loja.com.br</code></li>
  <li>Uso legítimo: manter sessão de login, preferências do usuário, carrinho de compras</li>
  <li>Ainda suportados em todos os browsers — não estão sendo eliminados</li>
  <li>Duração típica: dias a anos, dependendo da configuração</li>
</ul>
<strong>Third-Party Cookies:</strong>
<ul>
  <li>Criados por um domínio diferente do site visitado — normalmente um ad tech ou tracker</li>
  <li>Ex: você acessa <code>loja.com.br</code>, mas o cookie é de <code>doubleclick.net</code> (Google) ou <code>facebook.com</code></li>
  <li>Uso em publicidade: rastrear usuário across sites, construir perfil de comportamento, frequency capping cross-publisher, retargeting</li>
  <li>Bloqueados por padrão em Safari (ITP desde 2017) e Firefox (ETP desde 2019). Chrome bloqueou em 2024.</li>
</ul>
<strong>Por que o fim dos 3rd party cookies importa para AdOps:</strong> toda a segmentação comportamental programática, retargeting cross-site e atribuição multi-canal dependiam deles. Com o bloqueio, essas capacidades precisam ser reconstruídas com alternativas.`,
            en: `<strong>Cookies</strong> are small text files stored in the user's browser that allow sites to recognize visitors between sessions and track online behavior.<br><br>
<strong>First-Party Cookies:</strong>
<ul>
  <li>Created and read by the same domain the user is visiting</li>
  <li>E.g.: you access <code>store.com</code> — the cookie is from <code>store.com</code></li>
  <li>Legitimate use: maintaining login session, user preferences, shopping cart</li>
  <li>Still supported in all browsers — not being eliminated</li>
  <li>Typical duration: days to years, depending on configuration</li>
</ul>
<strong>Third-Party Cookies:</strong>
<ul>
  <li>Created by a different domain than the visited site — usually an ad tech or tracker</li>
  <li>E.g.: you access <code>store.com</code>, but the cookie is from <code>doubleclick.net</code> (Google) or <code>facebook.com</code></li>
  <li>Advertising use: track user across sites, build behavior profile, cross-publisher frequency capping, retargeting</li>
  <li>Blocked by default in Safari (ITP since 2017) and Firefox (ETP since 2019). Chrome blocked in 2024.</li>
</ul>
<strong>Why the end of 3rd party cookies matters for AdOps:</strong> all programmatic behavioral segmentation, cross-site retargeting and multi-channel attribution depended on them.`,
            es: `Las <strong>cookies</strong> son pequeños archivos de texto almacenados en el browser del usuario que permiten a los sitios reconocer visitantes entre sesiones y rastrear el comportamiento online.<br><br>
<strong>Cookies de Primera Parte (First-Party):</strong>
<ul>
  <li>Creadas y leídas por el mismo dominio que el usuario está visitando</li>
  <li>Uso legítimo: mantener sesión de login, preferencias del usuario, carrito de compras</li>
  <li>Aún soportadas en todos los browsers — no están siendo eliminadas</li>
</ul>
<strong>Cookies de Terceros (Third-Party):</strong>
<ul>
  <li>Creadas por un dominio diferente al sitio visitado — normalmente un ad tech o tracker</li>
  <li>Uso en publicidad: rastrear al usuario entre sitios, construir perfil de comportamiento, frequency capping cross-publisher, retargeting</li>
  <li>Bloqueadas por defecto en Safari (ITP desde 2017) y Firefox (ETP desde 2019). Chrome bloqueó en 2024.</li>
</ul>
<strong>Por qué el fin de las cookies de 3rd party importa para AdOps:</strong> toda la segmentación comportamental programática, el retargeting cross-site y la atribución multi-canal dependían de ellas.`,
          },
          tags: ['cookie', 'first-party', 'third-party', 'ITP', 'Chrome', 'browser'],
        },
        {
          q: { pt: 'O que é a LGPD e quais são suas implicações para publicidade digital no Brasil?', en: 'What is LGPD and what are its implications for digital advertising in Brazil?', es: '¿Qué es la LGPD y cuáles son sus implicaciones para la publicidad digital en Brasil?' },
          a: {
            pt: `A <strong>LGPD (Lei Geral de Proteção de Dados Pessoais)</strong> — Lei nº 13.709/2018 — é a legislação brasileira que regula o tratamento de dados pessoais, em vigor desde setembro de 2020 com sanções desde agosto de 2021.<br><br>
<strong>Princípios fundamentais da LGPD relevantes para AdOps:</strong>
<ul>
  <li><strong>Finalidade:</strong> dados coletados só podem ser usados para a finalidade declarada ao titular</li>
  <li><strong>Adequação:</strong> o tratamento deve ser compatível com as finalidades informadas</li>
  <li><strong>Necessidade:</strong> coletar apenas o mínimo necessário</li>
  <li><strong>Transparência:</strong> o titular deve saber como seus dados são usados</li>
  <li><strong>Segurança e prevenção:</strong> proteção contra vazamentos e acessos não autorizados</li>
</ul>
<strong>Bases legais para tratamento de dados em publicidade:</strong>
<ul>
  <li><strong>Consentimento:</strong> mais comum em publicidade — o usuário deve aceitar ativamente (opt-in) o uso de dados para fins publicitários. Cookie banners são a implementação prática.</li>
  <li><strong>Legítimo Interesse:</strong> pode ser usado pelo controlador para finalidades legítimas, desde que não prevaleçam sobre os interesses do titular. Aplicação em publicidade é debatida.</li>
</ul>
<strong>Impactos diretos em AdOps:</strong>
<ul>
  <li>Necessidade de CMP (Consent Management Platform) para coletar e registrar consentimento</li>
  <li>Integração com TCF (Transparency and Consent Framework do IAB) para repasse de consentimento a DSPs e SSPs</li>
  <li>Auditorias de cookies e pixels no site</li>
  <li>Política de privacidade atualizada com finalidades de uso de dados para publicidade</li>
</ul>
<strong>Sanções:</strong> ANPD (Autoridade Nacional de Proteção de Dados) pode aplicar multas de até 2% do faturamento no Brasil, limitadas a R$50 milhões por infração.`,
            en: `The <strong>LGPD (Lei Geral de Proteção de Dados Pessoais)</strong> — Law No. 13,709/2018 — is the Brazilian legislation that regulates the processing of personal data, in force since September 2020 with sanctions since August 2021.<br><br>
<strong>Fundamental LGPD principles relevant for AdOps:</strong>
<ul>
  <li><strong>Purpose:</strong> collected data can only be used for the declared purpose to the data subject</li>
  <li><strong>Adequacy:</strong> processing must be compatible with informed purposes</li>
  <li><strong>Necessity:</strong> collect only the minimum necessary</li>
  <li><strong>Transparency:</strong> the data subject must know how their data is used</li>
  <li><strong>Security and prevention:</strong> protection against leaks and unauthorized access</li>
</ul>
<strong>Legal bases for data processing in advertising:</strong>
<ul>
  <li><strong>Consent:</strong> most common in advertising — the user must actively accept (opt-in) the use of data for advertising purposes. Cookie banners are the practical implementation.</li>
  <li><strong>Legitimate Interest:</strong> can be used by the controller for legitimate purposes, as long as they don't override data subject interests. Application in advertising is debated.</li>
</ul>
<strong>Direct impacts on AdOps:</strong>
<ul>
  <li>Need for CMP (Consent Management Platform) to collect and record consent</li>
  <li>Integration with TCF (IAB's Transparency and Consent Framework) to pass consent to DSPs and SSPs</li>
  <li>Cookie and pixel audits on the site</li>
  <li>Updated privacy policy with purposes of data use for advertising</li>
</ul>
<strong>Sanctions:</strong> ANPD can apply fines of up to 2% of revenue in Brazil, limited to R$50 million per infraction.`,
            es: `La <strong>LGPD (Lei Geral de Proteção de Dados Pessoais)</strong> — Ley Nº 13.709/2018 — es la legislación brasileña que regula el tratamiento de datos personales, en vigor desde septiembre de 2020 con sanciones desde agosto de 2021.<br><br>
<strong>Principios fundamentales de la LGPD relevantes para AdOps:</strong>
<ul>
  <li><strong>Finalidad:</strong> los datos recogidos solo pueden usarse para la finalidad declarada al titular</li>
  <li><strong>Adecuación:</strong> el tratamiento debe ser compatible con las finalidades informadas</li>
  <li><strong>Necesidad:</strong> recopilar solo lo mínimo necesario</li>
  <li><strong>Transparencia:</strong> el titular debe saber cómo se usan sus datos</li>
  <li><strong>Seguridad y prevención:</strong> protección contra filtraciones y accesos no autorizados</li>
</ul>
<strong>Bases legales para el tratamiento de datos en publicidad:</strong>
<ul>
  <li><strong>Consentimiento:</strong> el más común en publicidad — el usuario debe aceptar activamente (opt-in). Los banners de cookies son la implementación práctica.</li>
  <li><strong>Interés Legítimo:</strong> puede ser usado por el controlador para fines legítimos.</li>
</ul>
<strong>Impactos directos en AdOps:</strong>
<ul>
  <li>Necesidad de CMP para recopilar y registrar el consentimiento</li>
  <li>Integración con TCF del IAB para transmitir el consentimiento a DSPs y SSPs</li>
  <li>Auditorías de cookies y píxeles en el sitio</li>
</ul>
<strong>Sanciones:</strong> la ANPD puede aplicar multas de hasta el 2% de la facturación en Brasil, limitadas a R$50 millones por infracción.`,
          },
          tags: ['LGPD', 'ANPD', 'consentimento', 'CMP', 'TCF', 'dados-pessoais', 'Brasil'],
        },
        {
          q: { pt: 'O que é o GDPR e como ele se relaciona com campanhas digitais para a Europa?', en: 'What is GDPR and how does it relate to digital campaigns for Europe?', es: '¿Qué es el GDPR y cómo se relaciona con las campañas digitales para Europa?' },
          a: {
            pt: `O <strong>GDPR (General Data Protection Regulation)</strong> — Regulamento Geral de Proteção de Dados — é a lei europeia de privacidade mais rigorosa do mundo, em vigor desde maio de 2018. Aplicado pela UE/EEE.<br><br>
<strong>Impactos do GDPR em publicidade digital:</strong>
<ul>
  <li><strong>Consentimento explícito obrigatório:</strong> antes de servir cookies de publicidade, o usuário DEVE aceitar ativamente. Pré-marcação de caixas e dark patterns são ilegais.</li>
  <li><strong>Finalidade específica:</strong> o consentimento deve ser por finalidade (ex: analytics ≠ publicidade personalizada)</li>
  <li><strong>Direito de retirada:</strong> retirar consentimento deve ser tão fácil quanto dar</li>
  <li><strong>Transparência total:</strong> o usuário deve saber quais empresas recebem seus dados (vendor list do TCF)</li>
</ul>
<strong>TCF (Transparency and Consent Framework — IAB Europe):</strong>
<ul>
  <li>Framework técnico que padroniza a coleta e transmissão de consentimento no ecossistema programático</li>
  <li>O CMP gera um TC String (string de consentimento) que é transmitida via bid request para todos os players da cadeia</li>
  <li>DSPs e SSPs respeitam o consentimento — sem consentimento, não há targeting behavioural nem cookies de terceiros</li>
</ul>
<strong>Implicações práticas para campanhas europeia:</strong>
<ul>
  <li>Opt-in rates na Europa: 40-70% dependendo do CMP e UX do banner. Só usuários que aceitaram podem ser impactados com publicidade personalizada.</li>
  <li>Para os que não aceitam: only contextual targeting é permitida</li>
  <li>Multas GDPR: até €20 milhões ou 4% do faturamento global anual — o que for maior</li>
</ul>`,
            en: `The <strong>GDPR (General Data Protection Regulation)</strong> is the world's strictest privacy law, in force since May 2018. Applied by the EU/EEA.<br><br>
<strong>GDPR impacts on digital advertising:</strong>
<ul>
  <li><strong>Mandatory explicit consent:</strong> before serving advertising cookies, the user MUST actively accept. Pre-checked boxes and dark patterns are illegal.</li>
  <li><strong>Specific purpose:</strong> consent must be per purpose (e.g.: analytics ≠ personalized advertising)</li>
  <li><strong>Right to withdraw:</strong> withdrawing consent must be as easy as giving it</li>
  <li><strong>Full transparency:</strong> the user must know which companies receive their data (TCF vendor list)</li>
</ul>
<strong>TCF (Transparency and Consent Framework — IAB Europe):</strong>
<ul>
  <li>Technical framework that standardizes consent collection and transmission in the programmatic ecosystem</li>
  <li>CMP generates a TC String (consent string) transmitted via bid request to all chain players</li>
  <li>DSPs and SSPs respect consent — without consent, no behavioral targeting or third-party cookies</li>
</ul>
<strong>Practical implications for European campaigns:</strong>
<ul>
  <li>Opt-in rates in Europe: 40-70% depending on CMP and banner UX. Only users who accepted can be reached with personalized advertising.</li>
  <li>For those who don't accept: only contextual targeting is permitted</li>
  <li>GDPR fines: up to €20 million or 4% of annual global revenue — whichever is higher</li>
</ul>`,
            es: `El <strong>GDPR (General Data Protection Regulation)</strong> es la ley de privacidad más estricta del mundo, en vigor desde mayo de 2018. Aplicado por la UE/EEE.<br><br>
<strong>Impactos del GDPR en publicidad digital:</strong>
<ul>
  <li><strong>Consentimiento explícito obligatorio:</strong> antes de servir cookies publicitarias, el usuario DEBE aceptar activamente. Las casillas preseleccionadas y los dark patterns son ilegales.</li>
  <li><strong>Finalidad específica:</strong> el consentimiento debe ser por finalidad</li>
  <li><strong>Derecho de retirada:</strong> retirar el consentimiento debe ser tan fácil como darlo</li>
  <li><strong>Transparencia total:</strong> el usuario debe saber qué empresas reciben sus datos</li>
</ul>
<strong>TCF (Transparency and Consent Framework — IAB Europe):</strong>
<ul>
  <li>Framework técnico que estandariza la recopilación y transmisión de consentimiento en el ecosistema programático</li>
  <li>El CMP genera una TC String que se transmite via bid request a todos los actores de la cadena</li>
  <li>DSPs y SSPs respetan el consentimiento — sin consentimiento, no hay targeting conductual</li>
</ul>
<strong>Implicaciones prácticas para campañas europeas:</strong>
<ul>
  <li>Tasas de opt-in en Europa: 40-70%. Solo usuarios que aceptaron pueden ser impactados con publicidad personalizada.</li>
  <li>Para quienes no aceptan: solo targeting contextual está permitido</li>
  <li>Multas GDPR: hasta €20 millones o el 4% de la facturación global anual</li>
</ul>`,
          },
          tags: ['GDPR', 'TCF', 'consentimento', 'CMP', 'Europa', 'opt-in', 'cookie-banner'],
        },
        {
          q: { pt: 'O que é uma CMP (Consent Management Platform) e como ela funciona?', en: 'What is a CMP (Consent Management Platform) and how does it work?', es: '¿Qué es una CMP (Consent Management Platform) y cómo funciona?' },
          a: {
            pt: `Uma <strong>CMP (Consent Management Platform)</strong> é uma solução tecnológica que gerencia a coleta, armazenamento e transmissão do consentimento do usuário para uso de cookies e dados pessoais em publicidade.<br><br>
<strong>O que uma CMP faz:</strong>
<ol>
  <li>Exibe o <strong>cookie banner</strong> na primeira visita do usuário ao site</li>
  <li>Apresenta as <strong>finalidades</strong> de uso de dados (analytics, publicidade personalizada, medição, etc.) e a <strong>vendor list</strong> (quais empresas de ad tech recebem os dados)</li>
  <li>Registra a <strong>escolha do usuário</strong> (aceitar tudo, rejeitar tudo ou personalizar)</li>
  <li>Gera a <strong>TC String</strong> (Transparency and Consent string — padrão TCF/IAB) com as preferências codificadas</li>
  <li>Transmite a TC String via <strong>bid request</strong> para DSPs, SSPs e ad servers</li>
  <li>Armazena o <strong>prova de consentimento</strong> (audit log) para fins de conformidade regulatória</li>
</ol>
<strong>Principais CMPs do mercado:</strong>
<ul>
  <li>OneTrust (mais usada globalmente)</li>
  <li>Cookiebot (simples, popular em sites menores)</li>
  <li>Sourcepoint (especializada em mídia/publishers)</li>
  <li>Didomi (popular na Europa e Brasil)</li>
  <li>TrustArc</li>
</ul>
<strong>Impacto na publicidade:</strong> sem TC String válida com consentimento, a maioria dos DSPs e exchanges limita ou bloqueia o targeting comportamental — o anúncio pode ainda ser exibido, mas sem personalização.`,
            en: `A <strong>CMP (Consent Management Platform)</strong> is a technology solution that manages the collection, storage and transmission of user consent for the use of cookies and personal data in advertising.<br><br>
<strong>What a CMP does:</strong>
<ol>
  <li>Displays the <strong>cookie banner</strong> on the user's first site visit</li>
  <li>Presents the <strong>purposes</strong> of data use and the <strong>vendor list</strong> (which ad tech companies receive the data)</li>
  <li>Records the <strong>user's choice</strong> (accept all, reject all or customize)</li>
  <li>Generates the <strong>TC String</strong> (Transparency and Consent string — TCF/IAB standard) with encoded preferences</li>
  <li>Transmits the TC String via <strong>bid request</strong> to DSPs, SSPs and ad servers</li>
  <li>Stores the <strong>consent proof</strong> (audit log) for regulatory compliance purposes</li>
</ol>
<strong>Main CMPs on the market:</strong> OneTrust, Cookiebot, Sourcepoint, Didomi, TrustArc<br><br>
<strong>Advertising impact:</strong> without a valid TC String with consent, most DSPs and exchanges limit or block behavioral targeting — the ad may still be displayed, but without personalization.`,
            es: `Una <strong>CMP (Consent Management Platform)</strong> es una solución tecnológica que gestiona la recopilación, almacenamiento y transmisión del consentimiento del usuario para el uso de cookies y datos personales en publicidad.<br><br>
<strong>Qué hace una CMP:</strong>
<ol>
  <li>Muestra el <strong>banner de cookies</strong> en la primera visita del usuario al sitio</li>
  <li>Presenta las <strong>finalidades</strong> de uso de datos y la <strong>vendor list</strong></li>
  <li>Registra la <strong>elección del usuario</strong> (aceptar todo, rechazar todo o personalizar)</li>
  <li>Genera la <strong>TC String</strong> (estándar TCF/IAB) con las preferencias codificadas</li>
  <li>Transmite la TC String via <strong>bid request</strong> a DSPs, SSPs y ad servers</li>
  <li>Almacena la <strong>prueba de consentimiento</strong> para fines de conformidad regulatoria</li>
</ol>
<strong>Principales CMPs del mercado:</strong> OneTrust, Cookiebot, Sourcepoint, Didomi, TrustArc<br><br>
<strong>Impacto en publicidad:</strong> sin TC String válida con consentimiento, la mayoría de los DSPs y exchanges limita o bloquea el targeting conductual.`,
          },
          tags: ['CMP', 'TCF', 'TC-String', 'consentimento', 'cookie-banner', 'GDPR', 'LGPD'],
        },
        {
          q: { pt: 'O que é o Privacy Sandbox do Google e quais as principais APIs?', en: 'What is Google Privacy Sandbox and what are the main APIs?', es: '¿Qué es el Google Privacy Sandbox y cuáles son las principales APIs?' },
          a: {
            pt: `O <strong>Privacy Sandbox</strong> é uma iniciativa do Google (Chromium) para substituir os third-party cookies por APIs que preservam a privacidade do usuário enquanto permitem publicidade relevante.<br><br>
<strong>Principais APIs do Privacy Sandbox:</strong>
<ul>
  <li><strong>Topics API:</strong> o browser observa os sites que o usuário visita e atribui "topics" de interesse (ex: "Esportes", "Tecnologia", "Culinária"). Anunciantes podem solicitar os tópicos de interesse sem saber o histórico de navegação do usuário. Máximo de 3 topics por semana, renovados. Substitui o targeting comportamental de 3rd party data.</li>
  <li><strong>Protected Audience API (ex-FLEDGE):</strong> permite retargeting on-device. O browser armazena a "interest group" do usuário (definida pelo anunciante) e realiza o leilão diretamente no browser, sem expor dados individuais para SSPs/DSPs. O anúncio ganhador é renderizado sem que o vendedor saiba qual usuário específico viu.</li>
  <li><strong>Attribution Reporting API:</strong> mede conversões de forma agregada e com ruído (differential privacy), sem identificar o usuário individual. Substitui o pixel de conversão baseado em 3rd party cookies.</li>
  <li><strong>Private State Tokens (ex-Trust Tokens):</strong> alternativa às soluções anti-fraud baseadas em fingerprinting — permite que sites confiem em usuários verificados sem rastrear identidade.</li>
  <li><strong>Shared Storage:</strong> armazenamento cross-site limitado para casos de uso específicos (frequency capping, A/B testing, relatórios).</li>
</ul>
<strong>Status (2024):</strong> Privacy Sandbox ainda em evolução. Chrome manteve cookies de terceiros com controles de usuário em vez do bloqueio total — pressão de reguladores e da indústria adiou o plano original.`,
            en: `The <strong>Privacy Sandbox</strong> is a Google (Chromium) initiative to replace third-party cookies with APIs that preserve user privacy while allowing relevant advertising.<br><br>
<strong>Main Privacy Sandbox APIs:</strong>
<ul>
  <li><strong>Topics API:</strong> the browser observes sites the user visits and assigns interest "topics" (e.g. "Sports", "Technology", "Cooking"). Advertisers can request interest topics without knowing the user's browsing history. Max 3 topics per week, renewed. Replaces 3rd party data behavioral targeting.</li>
  <li><strong>Protected Audience API (ex-FLEDGE):</strong> enables on-device retargeting. The browser stores the user's "interest group" (defined by the advertiser) and runs the auction directly in the browser, without exposing individual data to SSPs/DSPs.</li>
  <li><strong>Attribution Reporting API:</strong> measures conversions in aggregate and with noise (differential privacy), without identifying the individual user. Replaces the conversion pixel based on 3rd party cookies.</li>
  <li><strong>Private State Tokens:</strong> alternative to fingerprinting-based anti-fraud solutions.</li>
  <li><strong>Shared Storage:</strong> limited cross-site storage for specific use cases (frequency capping, A/B testing, reports).</li>
</ul>
<strong>Status (2024):</strong> Privacy Sandbox still evolving. Chrome maintained third-party cookies with user controls instead of full blocking — regulator and industry pressure delayed the original plan.`,
            es: `El <strong>Privacy Sandbox</strong> es una iniciativa de Google (Chromium) para reemplazar las cookies de terceros con APIs que preservan la privacidad del usuario mientras permiten publicidad relevante.<br><br>
<strong>Principales APIs del Privacy Sandbox:</strong>
<ul>
  <li><strong>Topics API:</strong> el browser observa los sitios que el usuario visita y asigna "topics" de interés. Los anunciantes pueden solicitar los tópicos sin conocer el historial de navegación. Máximo 3 topics por semana. Reemplaza el targeting conductual de 3rd party data.</li>
  <li><strong>Protected Audience API (ex-FLEDGE):</strong> permite retargeting on-device. El browser almacena el "interest group" del usuario y realiza la subasta directamente en el browser, sin exponer datos individuales.</li>
  <li><strong>Attribution Reporting API:</strong> mide conversiones de forma agregada y con ruido (privacidad diferencial), sin identificar al usuario individual.</li>
  <li><strong>Private State Tokens:</strong> alternativa a las soluciones anti-fraude basadas en fingerprinting.</li>
  <li><strong>Shared Storage:</strong> almacenamiento cross-site limitado para casos de uso específicos.</li>
</ul>
<strong>Estado (2024):</strong> Privacy Sandbox aún en evolución. Chrome mantuvo las cookies de terceros con controles de usuario en lugar del bloqueo total.`,
          },
          tags: ['Privacy-Sandbox', 'Topics-API', 'Protected-Audience', 'FLEDGE', 'Chrome', 'cookieless'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: { pt: 'O que são Universal IDs e como eles tentam substituir os third-party cookies?', en: 'What are Universal IDs and how do they attempt to replace third-party cookies?', es: '¿Qué son los Universal IDs y cómo intentan reemplazar las cookies de terceros?' },
          a: {
            pt: `<strong>Universal IDs</strong> são identificadores alternativos ao cookie que permitem rastrear e segmentar usuários de forma cross-publisher, baseados tipicamente em email (hash criptográfico) ou login.<br><br>
<strong>Como funcionam:</strong>
<ol>
  <li>Usuário faz login ou fornece email em um site (ex: jornal digital)</li>
  <li>O email é hasheado (SHA256/MD5) — nunca em texto claro</li>
  <li>O hash é enviado para um ID provider que gera um token único e criptografado</li>
  <li>Publishers e DSPs que participam do mesmo sistema podem reconhecer o usuário cross-site pelo token</li>
</ol>
<strong>Principais Universal ID solutions:</strong>
<ul>
  <li><strong>UID2.0 (The Trade Desk):</strong> open-source, baseado em email hasheado com consentimento. Gerenciado pelo Trade Desk mas acesso aberto. Usado por publishers, SSPs e DSPs. Mais adotado no mercado.</li>
  <li><strong>LiveRamp RampID:</strong> conectado ao ecossistema do LiveRamp. Forte em CRM matching e offline data.</li>
  <li><strong>ID5:</strong> solução independente usada por publishers europeus. Compatível com GDPR.</li>
  <li><strong>SharedID (Prebid):</strong> solução open-source do Prebid.org. Baseada em first-party cookie do publisher.</li>
  <li><strong>Panorama ID (Lotame):</strong> multi-touch, inclui dados probabilísticos além do email.</li>
</ul>
<strong>Limitações dos Universal IDs:</strong>
<ul>
  <li>Requerem que o usuário esteja logado ou tenha fornecido email — cobertura limitada (20-40% dos usuários)</li>
  <li>Dependem de consentimento explícito — especialmente crítico no GDPR/LGPD</li>
  <li>Fragmentação: diferentes IDs não interoperam facilmente</li>
  <li>Apple (Safari/iOS) bloqueia ativamente — não funciona no ecossistema Apple</li>
</ul>`,
            en: `<strong>Universal IDs</strong> are alternative identifiers to cookies that allow tracking and segmenting users across publishers, typically based on email (cryptographic hash) or login.<br><br>
<strong>How they work:</strong>
<ol>
  <li>User logs in or provides email on a site (e.g. digital newspaper)</li>
  <li>Email is hashed (SHA256/MD5) — never in plain text</li>
  <li>Hash is sent to an ID provider that generates a unique encrypted token</li>
  <li>Publishers and DSPs participating in the same system can recognize the user cross-site by token</li>
</ol>
<strong>Main Universal ID solutions:</strong>
<ul>
  <li><strong>UID2.0 (The Trade Desk):</strong> open-source, email-hash based with consent. Managed by Trade Desk but open access. Most adopted in the market.</li>
  <li><strong>LiveRamp RampID:</strong> connected to LiveRamp ecosystem. Strong in CRM matching and offline data.</li>
  <li><strong>ID5:</strong> independent solution used by European publishers. GDPR compatible.</li>
  <li><strong>SharedID (Prebid):</strong> open-source solution from Prebid.org. Based on publisher first-party cookie.</li>
  <li><strong>Panorama ID (Lotame):</strong> multi-touch, includes probabilistic data beyond email.</li>
</ul>
<strong>Universal ID limitations:</strong>
<ul>
  <li>Require user to be logged in or have provided email — limited coverage (20-40% of users)</li>
  <li>Depend on explicit consent — especially critical under GDPR/LGPD</li>
  <li>Fragmentation: different IDs don't easily interoperate</li>
  <li>Apple (Safari/iOS) actively blocks — doesn't work in Apple ecosystem</li>
</ul>`,
            es: `Los <strong>Universal IDs</strong> son identificadores alternativos a las cookies que permiten rastrear y segmentar usuarios de forma cross-publisher, basados típicamente en email (hash criptográfico) o login.<br><br>
<strong>Cómo funcionan:</strong>
<ol>
  <li>El usuario inicia sesión o proporciona email en un sitio</li>
  <li>El email se hashea (SHA256/MD5) — nunca en texto claro</li>
  <li>El hash se envía a un proveedor de ID que genera un token único y encriptado</li>
  <li>Publishers y DSPs que participan en el mismo sistema pueden reconocer al usuario cross-site por el token</li>
</ol>
<strong>Principales soluciones de Universal ID:</strong>
<ul>
  <li><strong>UID2.0 (The Trade Desk):</strong> open-source, basado en email hasheado con consentimiento. El más adoptado en el mercado.</li>
  <li><strong>LiveRamp RampID:</strong> fuerte en CRM matching y datos offline.</li>
  <li><strong>ID5:</strong> solución independiente usada por publishers europeos. Compatible con GDPR.</li>
  <li><strong>SharedID (Prebid):</strong> solución open-source de Prebid.org.</li>
  <li><strong>Panorama ID (Lotame):</strong> multi-touch, incluye datos probabilísticos.</li>
</ul>
<strong>Limitaciones de los Universal IDs:</strong>
<ul>
  <li>Requieren que el usuario esté logueado — cobertura limitada (20-40% de los usuarios)</li>
  <li>Dependen de consentimiento explícito</li>
  <li>Fragmentación: diferentes IDs no interoperan fácilmente</li>
  <li>Apple (Safari/iOS) bloquea activamente</li>
</ul>`,
          },
          tags: ['Universal-ID', 'UID2', 'LiveRamp', 'ID5', 'cookieless', 'email-hash', 'consentimento'],
        },
        {
          q: { pt: 'O que é contextual targeting e como ele funciona sem cookies?', en: 'What is contextual targeting and how does it work without cookies?', es: '¿Qué es el targeting contextual y cómo funciona sin cookies?' },
          a: {
            pt: `<strong>Contextual targeting</strong> segmenta anúncios com base no <em>conteúdo da página</em> onde o anúncio será exibido — não no perfil do usuário. Completamente independente de cookies ou dados pessoais.<br><br>
<strong>Como funciona o targeting contextual moderno:</strong>
<ul>
  <li><strong>Crawling e indexação:</strong> robôs do ad server/DSP/SSP varrem o conteúdo da página (texto, metadados, imagens, URL)</li>
  <li><strong>Categorização semântica:</strong> IA e NLP classificam o conteúdo por temas (IAB Content Taxonomy — ex: "Esportes &gt; Futebol", "Tecnologia &gt; Smartphones")</li>
  <li><strong>Brand safety analysis:</strong> identificação de conteúdo inadequado antes do lance</li>
  <li><strong>Matching:</strong> anunciante define quais categorias/keywords de contexto quer comprar — DSP filtra impressões em tempo real</li>
</ul>
<strong>Contextual targeting vs. Audience targeting:</strong>
<table>
<tr><th>Aspecto</th><th>Contextual</th><th>Audience (Comportamental)</th></tr>
<tr><td>Dados necessários</td><td>Conteúdo da página</td><td>Dados de usuário (cookies/IDs)</td></tr>
<tr><td>Privacidade</td><td>100% privacy-safe</td><td>Depende de consentimento</td></tr>
<tr><td>Cobertura</td><td>100% do inventário</td><td>Limitado a usuários com dados disponíveis</td></tr>
<tr><td>Relevância</td><td>Alta para interesse atual</td><td>Alta para interesse histórico</td></tr>
<tr><td>Funciona sem cookies</td><td>✅ Sim</td><td>❌ Não (sem alternativa)</td></tr>
</table><br>
<strong>Contextual AI moderno (além de keywords):</strong>
<ul>
  <li><strong>GumGum Verity:</strong> análise semântica profunda de texto + imagem + áudio de vídeos</li>
  <li><strong>Oracle Moat / IAS Context Control:</strong> categorização de conteúdo e brand safety em tempo real</li>
  <li><strong>Zefr:</strong> especializado em YouTube — categoriza conteúdo de vídeo por semântica</li>
</ul>`,
            en: `<strong>Contextual targeting</strong> segments ads based on the <em>content of the page</em> where the ad will be shown — not the user profile. Completely independent of cookies or personal data.<br><br>
<strong>How modern contextual targeting works:</strong>
<ul>
  <li><strong>Crawling and indexing:</strong> ad server/DSP/SSP bots scan page content (text, metadata, images, URL)</li>
  <li><strong>Semantic categorization:</strong> AI and NLP classify content by topics (IAB Content Taxonomy — e.g. "Sports &gt; Soccer", "Technology &gt; Smartphones")</li>
  <li><strong>Brand safety analysis:</strong> identification of inappropriate content before bidding</li>
  <li><strong>Matching:</strong> advertiser defines which context categories/keywords to buy — DSP filters impressions in real time</li>
</ul>
<strong>Contextual vs. Audience targeting:</strong>
<table>
<tr><th>Aspect</th><th>Contextual</th><th>Audience (Behavioral)</th></tr>
<tr><td>Required data</td><td>Page content</td><td>User data (cookies/IDs)</td></tr>
<tr><td>Privacy</td><td>100% privacy-safe</td><td>Depends on consent</td></tr>
<tr><td>Coverage</td><td>100% of inventory</td><td>Limited to users with available data</td></tr>
<tr><td>Relevance</td><td>High for current interest</td><td>High for historical interest</td></tr>
<tr><td>Works without cookies</td><td>✅ Yes</td><td>❌ No (without alternative)</td></tr>
</table><br>
<strong>Modern contextual AI (beyond keywords):</strong>
<ul>
  <li><strong>GumGum Verity:</strong> deep semantic analysis of text + image + video audio</li>
  <li><strong>Oracle Moat / IAS Context Control:</strong> real-time content categorization and brand safety</li>
  <li><strong>Zefr:</strong> specialized in YouTube — categorizes video content by semantics</li>
</ul>`,
            es: `El <strong>targeting contextual</strong> segmenta anuncios basándose en el <em>contenido de la página</em> donde se mostrará el anuncio — no en el perfil del usuario. Completamente independiente de cookies o datos personales.<br><br>
<strong>Cómo funciona el targeting contextual moderno:</strong>
<ul>
  <li><strong>Crawling e indexación:</strong> los robots del ad server/DSP/SSP escanean el contenido de la página</li>
  <li><strong>Categorización semántica:</strong> IA y NLP clasifican el contenido por temas (IAB Content Taxonomy)</li>
  <li><strong>Análisis de brand safety:</strong> identificación de contenido inapropiado antes de la puja</li>
  <li><strong>Matching:</strong> el anunciante define qué categorías/keywords de contexto quiere comprar</li>
</ul>
<strong>Contextual vs. Audience targeting:</strong>
<table>
<tr><th>Aspecto</th><th>Contextual</th><th>Audiencia (Conductual)</th></tr>
<tr><td>Datos necesarios</td><td>Contenido de la página</td><td>Datos de usuario (cookies/IDs)</td></tr>
<tr><td>Privacidad</td><td>100% privacy-safe</td><td>Depende de consentimiento</td></tr>
<tr><td>Cobertura</td><td>100% del inventario</td><td>Limitado a usuarios con datos disponibles</td></tr>
<tr><td>Funciona sin cookies</td><td>✅ Sí</td><td>❌ No</td></tr>
</table><br>
<strong>IA contextual moderna:</strong> GumGum Verity, Oracle Moat / IAS Context Control, Zefr (YouTube).`,
          },
          tags: ['contextual', 'NLP', 'IAB-taxonomy', 'brand-safety', 'cookieless', 'privacidade'],
        },
        {
          q: { pt: 'O que é server-side tracking (CAPI) e por que se tornou essencial?', en: 'What is server-side tracking (CAPI) and why has it become essential?', es: '¿Qué es el server-side tracking (CAPI) y por qué se ha vuelto esencial?' },
          a: {
            pt: `<strong>Server-Side Tracking</strong> (também chamado de <strong>CAPI — Conversions API</strong>) é uma técnica de medição onde os eventos de conversão são enviados diretamente do servidor do anunciante para as plataformas de publicidade (Meta, Google, TikTok), bypassando o browser do usuário.<br><br>
<strong>Por que o pixel client-side está perdendo eficiência:</strong>
<ul>
  <li>Ad blockers bloqueiam pixels e tags no browser</li>
  <li>iOS 14.5+ (App Tracking Transparency) limita rastreamento em apps e Safari</li>
  <li>ITP (Intelligent Tracking Prevention) do Safari limita duração de 1st party cookies para 7 dias</li>
  <li>Fim dos 3rd party cookies no Chrome</li>
  <li>Resultado: perda de 20-40% dos eventos de conversão rastreados via pixel apenas</li>
</ul>
<strong>Como funciona o CAPI/Server-Side:</strong>
<ol>
  <li>Usuário realiza uma ação no site (compra, cadastro)</li>
  <li>O servidor do anunciante captura o evento com dados disponíveis (email hash, telefone hash, IP, user agent)</li>
  <li>O servidor envia o evento diretamente para a API da plataforma (Meta CAPI, Google Enhanced Conversions, TikTok Events API)</li>
  <li>A plataforma faz o matching do evento com um usuário autenticado (via email/telefone hash)</li>
  <li>A conversão é registrada mesmo sem cookie ou com cookie bloqueado</li>
</ol>
<strong>Benefícios do CAPI:</strong>
<ul>
  <li>Recuperação de 20-40% de conversões perdidas pelo pixel</li>
  <li>Melhora a qualidade dos dados para Smart Bidding</li>
  <li>Reduz o CPA aparente (mais conversões com mesmo gasto)</li>
  <li>Necessário para conformidade com LGPD/GDPR — dados enviados com consentimento registrado</li>
</ul>
<strong>Implementação:</strong> via GTM Server-Side, Tealium, Segment, ou integração direta com a API da plataforma.`,
            en: `<strong>Server-Side Tracking</strong> (also called <strong>CAPI — Conversions API</strong>) is a measurement technique where conversion events are sent directly from the advertiser's server to advertising platforms (Meta, Google, TikTok), bypassing the user's browser.<br><br>
<strong>Why client-side pixel is losing efficiency:</strong>
<ul>
  <li>Ad blockers block pixels and tags in the browser</li>
  <li>iOS 14.5+ (App Tracking Transparency) limits tracking in apps and Safari</li>
  <li>Safari's ITP limits 1st party cookie duration to 7 days</li>
  <li>End of 3rd party cookies in Chrome</li>
  <li>Result: loss of 20-40% of conversion events tracked via pixel alone</li>
</ul>
<strong>How CAPI/Server-Side works:</strong>
<ol>
  <li>User performs an action on the site (purchase, sign-up)</li>
  <li>Advertiser's server captures the event with available data (email hash, phone hash, IP, user agent)</li>
  <li>Server sends the event directly to the platform API (Meta CAPI, Google Enhanced Conversions, TikTok Events API)</li>
  <li>Platform matches the event with an authenticated user (via email/phone hash)</li>
  <li>Conversion is recorded even without a cookie or with a blocked cookie</li>
</ol>
<strong>CAPI benefits:</strong>
<ul>
  <li>Recovery of 20-40% of conversions lost by pixel</li>
  <li>Improves data quality for Smart Bidding</li>
  <li>Reduces apparent CPA (more conversions with same spend)</li>
  <li>Necessary for LGPD/GDPR compliance</li>
</ul>
<strong>Implementation:</strong> via GTM Server-Side, Tealium, Segment, or direct API integration.`,
            es: `El <strong>Server-Side Tracking</strong> (también llamado <strong>CAPI — Conversions API</strong>) es una técnica de medición donde los eventos de conversión se envían directamente desde el servidor del anunciante a las plataformas publicitarias, bypasseando el browser del usuario.<br><br>
<strong>Por qué el píxel client-side está perdiendo eficiencia:</strong>
<ul>
  <li>Los ad blockers bloquean píxeles y tags en el browser</li>
  <li>iOS 14.5+ (App Tracking Transparency) limita el rastreo en apps y Safari</li>
  <li>ITP de Safari limita la duración de cookies de primera parte a 7 días</li>
  <li>Fin de las cookies de terceros en Chrome</li>
  <li>Resultado: pérdida del 20-40% de los eventos de conversión rastreados solo via píxel</li>
</ul>
<strong>Cómo funciona el CAPI/Server-Side:</strong>
<ol>
  <li>El usuario realiza una acción en el sitio</li>
  <li>El servidor del anunciante captura el evento con datos disponibles (email hash, teléfono hash, IP)</li>
  <li>El servidor envía el evento directamente a la API de la plataforma</li>
  <li>La plataforma hace el matching del evento con un usuario autenticado</li>
  <li>La conversión se registra incluso sin cookie o con cookie bloqueada</li>
</ol>
<strong>Beneficios del CAPI:</strong>
<ul>
  <li>Recuperación del 20-40% de conversiones perdidas por el píxel</li>
  <li>Mejora la calidad de los datos para Smart Bidding</li>
  <li>Implementación: via GTM Server-Side, Tealium, Segment, o integración directa con la API.</li>
</ul>`,
          },
          tags: ['CAPI', 'server-side', 'conversão', 'iOS14', 'ITP', 'Meta', 'Google', 'GTM'],
        },
        {
          q: { pt: 'O que são Clean Rooms e como elas funcionam para análise de dados com privacidade?', en: 'What are Clean Rooms and how do they work for privacy-safe data analysis?', es: '¿Qué son los Clean Rooms y cómo funcionan para el análisis de datos con privacidad?' },
          a: {
            pt: `<strong>Clean Rooms (Salas Limpas de Dados)</strong> são ambientes seguros e controlados onde duas ou mais partes podem realizar análises conjuntas de dados sem que nenhuma delas tenha acesso direto aos dados brutos da outra.<br><br>
<strong>Problema que resolvem:</strong>
<ul>
  <li>Anunciante quer saber: "Quantos dos meus clientes de CRM também são usuários desta plataforma?"</li>
  <li>Plataforma quer saber: "Qual foi o incremento de vendas para quem viu meus anúncios?"</li>
  <li>Ambos têm dados valiosos mas não podem compartilhar PII diretamente (LGPD/GDPR)</li>
</ul>
<strong>Como funciona:</strong>
<ol>
  <li>Anunciante e plataforma enviam dados hasheados para o ambiente neutro da Clean Room</li>
  <li>O ambiente realiza queries e análises (join, overlap, incrementality) sobre os dados combinados</li>
  <li>Apenas os <strong>resultados agregados</strong> saem da Clean Room — nunca dados individuais</li>
  <li>Nenhuma das partes "vê" os dados brutos da outra</li>
</ol>
<strong>Principais Clean Rooms:</strong>
<ul>
  <li><strong>Google Ads Data Hub:</strong> análise de dados do Google Ads (YouTube, DV360) combinados com dados do anunciante. Baseada no BigQuery. Responde: quem viu meus anúncios no YouTube e comprou no meu site?</li>
  <li><strong>Meta Advanced Analytics:</strong> similar ao ADH mas para dados do Meta</li>
  <li><strong>AWS Clean Rooms:</strong> solução neutra da Amazon para qualquer combinação de dados</li>
  <li><strong>InfoSum:</strong> plataforma independente de clean room, usada por publishers e anunciantes</li>
  <li><strong>Habu / LiveRamp Clean Room:</strong> conecta CRM do anunciante com dados de publishers e plataformas</li>
</ul>
<strong>Casos de uso:</strong> audience overlap analysis, incrementality measurement, lookalike audience building, cross-channel attribution, publisher audience validation.`,
            en: `<strong>Clean Rooms</strong> are secure, controlled environments where two or more parties can perform joint data analyses without any of them having direct access to the other's raw data.<br><br>
<strong>Problem they solve:</strong>
<ul>
  <li>Advertiser wants to know: "How many of my CRM customers are also users of this platform?"</li>
  <li>Platform wants to know: "What was the sales increment for those who saw my ads?"</li>
  <li>Both have valuable data but can't share PII directly (LGPD/GDPR)</li>
</ul>
<strong>How it works:</strong>
<ol>
  <li>Advertiser and platform send hashed data to the Clean Room's neutral environment</li>
  <li>The environment performs queries and analyses (join, overlap, incrementality) on the combined data</li>
  <li>Only <strong>aggregated results</strong> leave the Clean Room — never individual data</li>
  <li>Neither party "sees" the other's raw data</li>
</ol>
<strong>Main Clean Rooms:</strong>
<ul>
  <li><strong>Google Ads Data Hub:</strong> analysis of Google Ads data combined with advertiser data. BigQuery-based.</li>
  <li><strong>Meta Advanced Analytics:</strong> similar to ADH but for Meta data</li>
  <li><strong>AWS Clean Rooms:</strong> Amazon's neutral solution for any data combination</li>
  <li><strong>InfoSum:</strong> independent clean room platform used by publishers and advertisers</li>
  <li><strong>Habu / LiveRamp Clean Room:</strong> connects advertiser CRM with publisher and platform data</li>
</ul>
<strong>Use cases:</strong> audience overlap analysis, incrementality measurement, lookalike audience building, cross-channel attribution, publisher audience validation.`,
            es: `Los <strong>Clean Rooms (Salas Limpias de Datos)</strong> son entornos seguros y controlados donde dos o más partes pueden realizar análisis conjuntos de datos sin que ninguna tenga acceso directo a los datos brutos de la otra.<br><br>
<strong>Problema que resuelven:</strong>
<ul>
  <li>El anunciante quiere saber: "¿Cuántos de mis clientes de CRM también son usuarios de esta plataforma?"</li>
  <li>La plataforma quiere saber: "¿Cuál fue el incremento de ventas para quienes vieron mis anuncios?"</li>
  <li>Ambos tienen datos valiosos pero no pueden compartir PII directamente</li>
</ul>
<strong>Cómo funciona:</strong>
<ol>
  <li>El anunciante y la plataforma envían datos hasheados al entorno neutro del Clean Room</li>
  <li>El entorno realiza queries y análisis sobre los datos combinados</li>
  <li>Solo los <strong>resultados agregados</strong> salen del Clean Room — nunca datos individuales</li>
  <li>Ninguna de las partes "ve" los datos brutos de la otra</li>
</ol>
<strong>Principales Clean Rooms:</strong> Google Ads Data Hub, Meta Advanced Analytics, AWS Clean Rooms, InfoSum, Habu / LiveRamp Clean Room.<br><br>
<strong>Casos de uso:</strong> análisis de overlap de audiencia, medición de incrementalidad, construcción de lookalike audiences, atribución cross-channel.`,
          },
          tags: ['Clean-Room', 'ADH', 'privacidade', 'PII', 'BigQuery', 'AWS', 'InfoSum'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: { pt: 'Como construir uma estratégia de first-party data robusta para substituir dependência de third-party data?', en: 'How to build a robust first-party data strategy to replace third-party data dependency?', es: '¿Cómo construir una estrategia de first-party data robusta para reemplazar la dependencia de third-party data?' },
          a: {
            pt: `<strong>First-party data</strong> são os dados que a própria empresa coleta diretamente de seus clientes e visitantes — os mais valiosos, precisos e privacy-compliant num mundo sem cookies.<br><br>
<strong>Fontes de first-party data:</strong>
<ul>
  <li>CRM (clientes existentes — email, telefone, histórico de compra)</li>
  <li>Cadastros e newsletters (leads captados)</li>
  <li>Login/área do cliente (identificação determinística)</li>
  <li>App mobile (dados de uso, localização com consentimento)</li>
  <li>Programa de fidelidade (comportamento de compra detalhado)</li>
  <li>Pesquisas e formulários de preferência</li>
  <li>Eventos e webinars (dados de participantes)</li>
</ul>
<strong>Pilares de uma estratégia de first-party data:</strong><br><br>
<strong>1. Coleta — maximizar pontos de captura com consentimento:</strong>
<ul>
  <li>Implementar CMP robusta para registrar consentimento granular</li>
  <li>Criar incentivos para login (conteúdo exclusivo, descontos, gamificação)</li>
  <li>Lead magnets para captura de email (e-books, trials, ferramentas)</li>
  <li>Progressive profiling: coletar dados gradualmente em múltiplas interações</li>
</ul>
<strong>2. Unificação — CDP (Customer Data Platform):</strong>
<ul>
  <li>Centralizar dados de CRM + web + app + offline em perfil único por cliente</li>
  <li>Resolver identidade: conectar visitante anônimo com cliente conhecido (identity resolution)</li>
  <li>CDPs principais: Segment, Tealium, mParticle, Adobe Real-Time CDP, Salesforce CDP</li>
</ul>
<strong>3. Ativação — usar o first-party data em mídia:</strong>
<ul>
  <li>Customer Match (Google/Meta/LinkedIn): upload de listas para targeting</li>
  <li>Custom Audiences: segmentar por comportamento de compra ou etapa do funil</li>
  <li>Exclusão de clientes já convertidos para evitar desperdício de budget</li>
  <li>Lookalike/Similar Audiences: expandir para perfis semelhantes aos melhores clientes</li>
</ul>
<strong>4. Enriquecimento:</strong>
<ul>
  <li>Combinar first-party data com second-party data de publishers (via Clean Room)</li>
  <li>Modelagem preditiva: LTV scoring, propensity to buy, churn prediction</li>
</ul>`,
            en: `<strong>First-party data</strong> is data the company collects directly from its customers and visitors — the most valuable, accurate and privacy-compliant in a cookieless world.<br><br>
<strong>First-party data sources:</strong>
<ul>
  <li>CRM (existing customers — email, phone, purchase history)</li>
  <li>Sign-ups and newsletters (captured leads)</li>
  <li>Login/customer area (deterministic identification)</li>
  <li>Mobile app (usage data, location with consent)</li>
  <li>Loyalty program (detailed purchase behavior)</li>
  <li>Surveys and preference forms</li>
  <li>Events and webinars (participant data)</li>
</ul>
<strong>Pillars of a first-party data strategy:</strong><br><br>
<strong>1. Collection — maximize capture points with consent:</strong>
<ul>
  <li>Implement robust CMP to record granular consent</li>
  <li>Create login incentives (exclusive content, discounts, gamification)</li>
  <li>Lead magnets for email capture (e-books, trials, tools)</li>
  <li>Progressive profiling: collect data gradually across multiple interactions</li>
</ul>
<strong>2. Unification — CDP (Customer Data Platform):</strong>
<ul>
  <li>Centralize CRM + web + app + offline data in a single profile per customer</li>
  <li>Identity resolution: connect anonymous visitor with known customer</li>
  <li>Main CDPs: Segment, Tealium, mParticle, Adobe Real-Time CDP, Salesforce CDP</li>
</ul>
<strong>3. Activation — use first-party data in media:</strong>
<ul>
  <li>Customer Match (Google/Meta/LinkedIn): list upload for targeting</li>
  <li>Custom Audiences: segment by purchase behavior or funnel stage</li>
  <li>Exclusion of already-converted customers to avoid budget waste</li>
  <li>Lookalike/Similar Audiences: expand to profiles similar to best customers</li>
</ul>
<strong>4. Enrichment:</strong>
<ul>
  <li>Combine first-party data with publisher second-party data (via Clean Room)</li>
  <li>Predictive modeling: LTV scoring, propensity to buy, churn prediction</li>
</ul>`,
            es: `Los <strong>first-party data</strong> son los datos que la propia empresa recopila directamente de sus clientes y visitantes — los más valiosos, precisos y privacy-compliant en un mundo sin cookies.<br><br>
<strong>Fuentes de first-party data:</strong>
<ul>
  <li>CRM (clientes existentes — email, teléfono, historial de compra)</li>
  <li>Registros y newsletters (leads captados)</li>
  <li>Login/área del cliente (identificación determinística)</li>
  <li>App mobile (datos de uso, ubicación con consentimiento)</li>
  <li>Programa de fidelidad (comportamiento de compra detallado)</li>
  <li>Encuestas y formularios de preferencia</li>
</ul>
<strong>Pilares de una estrategia de first-party data:</strong><br><br>
<strong>1. Recopilación — maximizar puntos de captura con consentimiento:</strong>
<ul>
  <li>Implementar CMP robusta para registrar consentimiento granular</li>
  <li>Crear incentivos para login (contenido exclusivo, descuentos, gamificación)</li>
  <li>Lead magnets para captura de email</li>
  <li>Progressive profiling: recopilar datos gradualmente</li>
</ul>
<strong>2. Unificación — CDP:</strong>
<ul>
  <li>Centralizar datos de CRM + web + app + offline en perfil único por cliente</li>
  <li>CDPs principales: Segment, Tealium, mParticle, Adobe Real-Time CDP, Salesforce CDP</li>
</ul>
<strong>3. Activación — usar los first-party data en medios:</strong>
<ul>
  <li>Customer Match: carga de listas para targeting</li>
  <li>Exclusión de clientes ya convertidos</li>
  <li>Lookalike/Similar Audiences</li>
</ul>
<strong>4. Enriquecimiento:</strong>
<ul>
  <li>Combinar con second-party data de publishers (via Clean Room)</li>
  <li>Modelado predictivo: LTV scoring, propensity to buy, churn prediction</li>
</ul>`,
          },
          tags: ['1st-party', 'CDP', 'CRM', 'identity-resolution', 'Customer-Match', 'cookieless'],
        },
        {
          q: { pt: 'O que é fingerprinting de dispositivo e por que é problemático para privacidade?', en: 'What is device fingerprinting and why is it problematic for privacy?', es: '¿Qué es el fingerprinting de dispositivo y por qué es problemático para la privacidad?' },
          a: {
            pt: `<strong>Device Fingerprinting</strong> é uma técnica de identificação que combina múltiplos atributos do dispositivo e browser do usuário para criar um identificador único — sem usar cookies.<br><br>
<strong>Atributos usados no fingerprint:</strong>
<ul>
  <li>User agent (browser + versão + OS)</li>
  <li>Resolução de tela e configuração de display</li>
  <li>Fonts instaladas (via Canvas API)</li>
  <li>Plugins do browser</li>
  <li>Fuso horário</li>
  <li>Configurações de idioma</li>
  <li>WebGL renderer (GPU)</li>
  <li>AudioContext fingerprint</li>
  <li>Endereço IP (parcial)</li>
</ul>
<strong>Por que é problemático:</strong>
<ul>
  <li><strong>Invisível ao usuário:</strong> não há cookie para deletar, não há consentimento claro possível</li>
  <li><strong>Não responde a opt-out:</strong> o usuário não pode "deletar" seu fingerprint como deleta cookies</li>
  <li><strong>Viola o princípio do consentimento:</strong> GDPR e LGPD exigem consentimento para tracking — fingerprinting sem consentimento é ilegal na UE</li>
  <li><strong>Reconstrói perfis após opt-out:</strong> usuário que deletou cookies e optou por não ser rastreado pode ser re-identificado</li>
</ul>
<strong>Como browsers combatem:</strong>
<ul>
  <li><strong>Safari (WebKit):</strong> limita resolução do Canvas, agrupa valores de fontes, mascarece user agent</li>
  <li><strong>Firefox:</strong> modo Enhanced Tracking Protection bloqueia fingerprinting</li>
  <li><strong>Chrome:</strong> Privacy Sandbox inclui APIs para reduzir entropia de fingerprinting (Privacy Budget)</li>
  <li><strong>Brave:</strong> randomiza fingerprint a cada sessão</li>
</ul>
<strong>Uso legítimo vs. abusivo:</strong> fingerprinting tem uso legítimo em fraude e segurança (detectar bots, prevenir account takeover). O problema é quando usado para tracking publicitário sem consentimento.`,
            en: `<strong>Device Fingerprinting</strong> is an identification technique that combines multiple attributes of the user's device and browser to create a unique identifier — without using cookies.<br><br>
<strong>Attributes used in fingerprint:</strong>
<ul>
  <li>User agent (browser + version + OS)</li>
  <li>Screen resolution and display configuration</li>
  <li>Installed fonts (via Canvas API)</li>
  <li>Browser plugins</li>
  <li>Time zone</li>
  <li>Language settings</li>
  <li>WebGL renderer (GPU)</li>
  <li>AudioContext fingerprint</li>
  <li>IP address (partial)</li>
</ul>
<strong>Why it's problematic:</strong>
<ul>
  <li><strong>Invisible to user:</strong> no cookie to delete, no clear consent possible</li>
  <li><strong>Doesn't respond to opt-out:</strong> user can't "delete" their fingerprint like they delete cookies</li>
  <li><strong>Violates consent principle:</strong> GDPR and LGPD require consent for tracking — fingerprinting without consent is illegal in the EU</li>
  <li><strong>Rebuilds profiles after opt-out:</strong> user who deleted cookies and opted out may be re-identified</li>
</ul>
<strong>How browsers combat it:</strong>
<ul>
  <li><strong>Safari (WebKit):</strong> limits Canvas resolution, groups font values, masks user agent</li>
  <li><strong>Firefox:</strong> Enhanced Tracking Protection mode blocks fingerprinting</li>
  <li><strong>Chrome:</strong> Privacy Sandbox includes APIs to reduce fingerprinting entropy (Privacy Budget)</li>
  <li><strong>Brave:</strong> randomizes fingerprint each session</li>
</ul>
<strong>Legitimate vs. abusive use:</strong> fingerprinting has legitimate use in fraud and security (detecting bots, preventing account takeover). The problem is when used for advertising tracking without consent.`,
            es: `El <strong>Device Fingerprinting</strong> es una técnica de identificación que combina múltiples atributos del dispositivo y el browser del usuario para crear un identificador único — sin usar cookies.<br><br>
<strong>Atributos usados en el fingerprint:</strong>
<ul>
  <li>User agent (browser + versión + OS)</li>
  <li>Resolución de pantalla y configuración de display</li>
  <li>Fuentes instaladas (via Canvas API)</li>
  <li>Plugins del browser</li>
  <li>Zona horaria, configuración de idioma</li>
  <li>WebGL renderer (GPU), AudioContext fingerprint</li>
  <li>Dirección IP (parcial)</li>
</ul>
<strong>Por qué es problemático:</strong>
<ul>
  <li><strong>Invisible al usuario:</strong> no hay cookie que borrar, no hay consentimiento claro posible</li>
  <li><strong>No responde al opt-out:</strong> el usuario no puede "borrar" su fingerprint</li>
  <li><strong>Viola el principio de consentimiento:</strong> el fingerprinting sin consentimiento es ilegal en la UE</li>
  <li><strong>Reconstruye perfiles tras el opt-out</strong></li>
</ul>
<strong>Cómo los browsers lo combaten:</strong>
<ul>
  <li><strong>Safari:</strong> limita la resolución del Canvas, agrupa valores de fuentes</li>
  <li><strong>Firefox:</strong> Enhanced Tracking Protection bloquea el fingerprinting</li>
  <li><strong>Chrome:</strong> Privacy Sandbox incluye APIs para reducir la entropía del fingerprinting</li>
  <li><strong>Brave:</strong> aleatoriza el fingerprint en cada sesión</li>
</ul>`,
          },
          tags: ['fingerprinting', 'privacidade', 'GDPR', 'Safari', 'ITP', 'Canvas-API', 'tracking'],
        },
      ],
    },
  ],
};

// ── APPEND: básicos práticos (patch) ──
;(function(){
const d = window.__adopsData['privacidade'];
d.tiers[0].questions.push(
  {
    q:{pt:'O que é opt-in e opt-out e como funcionam na prática em publicidade digital?',en:'What is opt-in and opt-out and how do they work in practice in digital advertising?',es:'¿Qué es opt-in y opt-out y cómo funcionan en la práctica en publicidad digital?'},
    a:{
      pt:`<strong>Opt-in</strong> e <strong>opt-out</strong> são os dois mecanismos de consentimento para uso de dados pessoais em publicidade — com implicações legais e operacionais completamente diferentes.<br><br>
<strong>Opt-in (aceitar ativamente):</strong>
<ul>
  <li>O usuário precisa <em>tomar uma ação positiva</em> para dar consentimento — clicar em "Aceitar", marcar uma caixa, etc.</li>
  <li>O padrão exigido pelo <strong>GDPR (Europa)</strong> e recomendado pela <strong>LGPD (Brasil)</strong></li>
  <li>O consentimento não pode ser presumido — caixas pré-marcadas são ilegais no GDPR</li>
  <li>Para publicidade: o usuário deve aceitar explicitamente o uso de cookies de publicidade</li>
  <li>Resultado prático: taxas de aceitação de 40-70% na Europa; usuários que não aceitam recebem apenas publicidade contextual</li>
</ul>
<strong>Opt-out (recusar ativamente):</strong>
<ul>
  <li>O consentimento é presumido — o usuário <em>já está "dentro"</em> por padrão e precisa tomar ação para sair</li>
  <li>Historicamente usado em email marketing: usuário recebe emails até clicar em "Descadastrar"</li>
  <li>Em publicidade programática: opt-out via NAI (Network Advertising Initiative) ou DAA (Digital Advertising Alliance) — usuário visita optout.aboutads.info e opta por não receber publicidade comportamental</li>
  <li>Não é mais considerado válido para cookies de publicidade no contexto GDPR/LGPD</li>
</ul>
<strong>Na prática em AdOps:</strong>
<ul>
  <li>Cookie banner com opt-in: usuários que aceitam → 3rd party cookies setados → targeting comportamental disponível</li>
  <li>Usuários que recusam ou não interagem → apenas contextual targeting</li>
  <li>O CMP registra o status de cada usuário → TCF string passa o status nas bid requests</li>
  <li>DSPs e SSPs respeitam o status: sem consentimento = sem behavioral targeting = menor CPM</li>
</ul>`,
      en:`<strong>Opt-in</strong> and <strong>opt-out</strong> are the two consent mechanisms for personal data use in advertising — with completely different legal and operational implications.<br><br>
<strong>Opt-in (actively accept):</strong>
<ul>
  <li>User needs to take a <em>positive action</em> to give consent — click "Accept", check a box, etc.</li>
  <li>The standard required by <strong>GDPR (Europe)</strong> and recommended by <strong>LGPD (Brazil)</strong></li>
  <li>Consent cannot be presumed — pre-checked boxes are illegal under GDPR</li>
  <li>Practical result: 40-70% acceptance rates in Europe</li>
</ul>
<strong>Opt-out (actively refuse):</strong>
<ul>
  <li>Consent is presumed — user is already "in" by default and must take action to leave</li>
  <li>Historically used in email marketing</li>
  <li>In programmatic advertising: opt-out via NAI or DAA</li>
  <li>No longer considered valid for advertising cookies under GDPR/LGPD</li>
</ul>
<strong>In practice for AdOps:</strong>
<ul>
  <li>Opt-in cookie banner: users who accept → 3rd party cookies set → behavioral targeting available</li>
  <li>Users who refuse → contextual targeting only</li>
  <li>CMP records each user's status → TCF string passes status in bid requests</li>
  <li>DSPs and SSPs respect status: no consent = no behavioral targeting = lower CPM</li>
</ul>`,
      es:`<strong>Opt-in</strong> y <strong>opt-out</strong> son los dos mecanismos de consentimiento para el uso de datos personales en publicidad.<br><br>
<strong>Opt-in (aceptar activamente):</strong>
<ul>
  <li>El usuario necesita tomar una <em>acción positiva</em> para dar consentimiento</li>
  <li>El estándar requerido por el <strong>GDPR (Europa)</strong> y recomendado por la <strong>LGPD (Brasil)</strong></li>
  <li>Las casillas preseleccionadas son ilegales bajo el GDPR</li>
  <li>Tasas de aceptación: 40-70% en Europa</li>
</ul>
<strong>Opt-out (rechazar activamente):</strong>
<ul>
  <li>El consentimiento se presume — el usuario ya está "dentro" por defecto</li>
  <li>Ya no se considera válido para cookies publicitarias bajo GDPR/LGPD</li>
</ul>
<strong>En la práctica para AdOps:</strong>
<ul>
  <li>Banner con opt-in: usuarios que aceptan → cookies de 3rd party disponibles → targeting conductual</li>
  <li>Usuarios que rechazan → solo targeting contextual → menor CPM</li>
</ul>`,
    },
    tags:['opt-in','opt-out','consentimento','GDPR','LGPD','cookie-banner','CMP','TCF'],
  }
);

// ──────────────────────────────────────────────────────────────
})();

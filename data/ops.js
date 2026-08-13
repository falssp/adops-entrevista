// Módulo Ops — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['ops'] = {
  icon: '⚙️',
  name: {
    pt: 'Operacional & Processos',
    en: 'Operational & Processes',
    es: 'Operacional & Procesos',
  },
  desc: {
    pt: 'QA, comunicação com cliente, gestão de campanhas e resolução de problemas.',
    en: 'QA, client communication, campaign management and problem solving.',
    es: 'QA, comunicación con cliente, gestión de campañas y resolución de problemas.',
  },
  tiers: [
    {
      id: 'ops',
      questions: [
        {
          q: {
            pt: 'Descreva seu processo de QA antes de lançar uma campanha no CM360.',
            en: 'Describe your QA process before launching a campaign in CM360.',
            es: 'Describe tu proceso de QA antes de lanzar una campaña en CM360.',
          },
          a: {
            pt: `<strong>Checklist pré-live (CM360):</strong>
<ol>
  <li><strong>Estrutura:</strong> nomenclatura correta de Campaign, Placement, Ad e Creative conforme taxonomia do cliente</li>
  <li><strong>Datas:</strong> start/end corretas; fuso horário alinhado com o briefing</li>
  <li><strong>Creatives:</strong> preview em todos os tamanhos; HTML5 funcionando; click tag apontando para URL correta</li>
  <li><strong>Floodlight:</strong> disparar manualmente via GTM Preview e confirmar no CM360 Activity Report (aguardar até 1h)</li>
  <li><strong>Tags ao publisher:</strong> confirmar recebimento e implementação correta</li>
  <li><strong>Targeting:</strong> geos, audiences e brand safety lists configurados</li>
  <li><strong>Frequência:</strong> cap configurado para evitar saturação</li>
  <li><strong>Ad Preview:</strong> usar URL de preview do CM360 para ver a peça como o usuário verá</li>
</ol>
<strong>Regra de ouro:</strong> nunca lançar sem confirmar que pelo menos um Floodlight disparou em QA.`,
            en: `<strong>Pre-live checklist (CM360):</strong>
<ol>
  <li><strong>Structure:</strong> correct naming of Campaign, Placement, Ad and Creative per client taxonomy</li>
  <li><strong>Dates:</strong> correct start/end; timezone aligned with the brief</li>
  <li><strong>Creatives:</strong> preview at all sizes; HTML5 working; click tag pointing to correct URL</li>
  <li><strong>Floodlight:</strong> manually fire via GTM Preview and confirm in CM360 Activity Report (wait up to 1h)</li>
  <li><strong>Tags to publisher:</strong> confirm receipt and correct implementation</li>
  <li><strong>Targeting:</strong> geos, audiences and brand safety lists configured</li>
  <li><strong>Frequency:</strong> cap configured to avoid saturation</li>
  <li><strong>Ad Preview:</strong> use CM360 preview URL to see the creative as the user will see it</li>
</ol>
<strong>Golden rule:</strong> never launch without confirming at least one Floodlight fired in QA.`,
            es: `<strong>Checklist pre-live (CM360):</strong>
<ol>
  <li><strong>Estructura:</strong> nomenclatura correcta de Campaign, Placement, Ad y Creative según taxonomía del cliente</li>
  <li><strong>Fechas:</strong> start/end correctas; zona horaria alineada con el briefing</li>
  <li><strong>Creatives:</strong> preview en todos los tamaños; HTML5 funcionando; click tag apuntando a URL correcta</li>
  <li><strong>Floodlight:</strong> disparar manualmente via GTM Preview y confirmar en CM360 Activity Report (esperar hasta 1h)</li>
  <li><strong>Tags al publisher:</strong> confirmar recepción e implementación correcta</li>
  <li><strong>Targeting:</strong> geos, audiences y listas de brand safety configuradas</li>
  <li><strong>Frecuencia:</strong> cap configurado para evitar saturación</li>
  <li><strong>Ad Preview:</strong> usar URL de preview de CM360 para ver la pieza como la verá el usuario</li>
</ol>
<strong>Regla de oro:</strong> nunca lanzar sin confirmar que al menos un Floodlight disparó en QA.`,
          },
          tags: ['QA', 'pre-launch', 'checklist', 'floodlight'],
        },
        {
          q: {
            pt: 'Como você gerencia uma campanha que está underdelivering?',
            en: 'How do you manage an underdelivering campaign?',
            es: '¿Cómo gestionas una campaña que está underdelivering?',
          },
          a: {
            pt: `<strong>Diagnóstico primeiro — identificar a causa:</strong>
<ul>
  <li><em>Pacing lento:</em> entregando devagar mas sem erro — problema de budget, bid ou targeting</li>
  <li><em>Eligibility zero:</em> campanha não está competindo — erro de configuração, creative rejeitado ou conflito de targeting</li>
</ul>
<strong>Ações por causa:</strong>
<ul>
  <li><strong>Budget baixo / CPM floor alto:</strong> aumentar budget ou reduzir floor</li>
  <li><strong>Targeting muito restrito:</strong> ampliar geos, afrouxar audience segments, adicionar inventário</li>
  <li><strong>Creative rejeitado:</strong> revisar políticas da plataforma, corrigir e resubmeter</li>
  <li><strong>Freq cap muito baixo:</strong> aumentar cap ou checar se audience é muito pequena</li>
  <li><strong>Campanha pausada indevida:</strong> verificar status em todos os níveis da hierarquia</li>
</ul>
<strong>Comunicação:</strong> reportar proativamente ao cliente com diagnóstico + plano de ação. Nunca esperar o cliente notar o problema.`,
            en: `<strong>Diagnose first — identify the cause:</strong>
<ul>
  <li><em>Slow pacing:</em> delivering slowly but without error — budget, bid or targeting issue</li>
  <li><em>Zero eligibility:</em> campaign not competing — configuration error, rejected creative or targeting conflict</li>
</ul>
<strong>Actions by cause:</strong>
<ul>
  <li><strong>Low budget / high CPM floor:</strong> increase budget or reduce floor</li>
  <li><strong>Targeting too restrictive:</strong> expand geos, loosen audience segments, add inventory</li>
  <li><strong>Rejected creative:</strong> review platform policies, fix and resubmit</li>
  <li><strong>Freq cap too low:</strong> increase cap or check if audience is too small</li>
  <li><strong>Campaign paused unintentionally:</strong> check status at all hierarchy levels</li>
</ul>
<strong>Communication:</strong> proactively report to client with diagnosis + action plan. Never wait for the client to notice the problem.`,
            es: `<strong>Diagnóstico primero — identificar la causa:</strong>
<ul>
  <li><em>Pacing lento:</em> entregando lento pero sin error — problema de budget, bid o targeting</li>
  <li><em>Eligibility cero:</em> campaña no compite — error de configuración, creativo rechazado o conflicto de targeting</li>
</ul>
<strong>Acciones por causa:</strong>
<ul>
  <li><strong>Budget bajo / CPM floor alto:</strong> aumentar budget o reducir floor</li>
  <li><strong>Targeting muy restrictivo:</strong> ampliar geos, aflojar audience segments, agregar inventario</li>
  <li><strong>Creative rechazado:</strong> revisar políticas de la plataforma, corregir y resubmitir</li>
  <li><strong>Freq cap muy bajo:</strong> aumentar cap o verificar si el audience es muy pequeño</li>
  <li><strong>Campaña pausada involuntariamente:</strong> verificar status en todos los niveles de la jerarquía</li>
</ul>
<strong>Comunicación:</strong> reportar proactivamente al cliente con diagnóstico + plan de acción. Nunca esperar a que el cliente note el problema.`,
          },
          tags: ['pacing', 'underdelivery', 'troubleshooting', 'client-comms'],
        },
        {
          q: {
            pt: 'Como você prioriza múltiplas campanhas simultâneas com prazos conflitantes?',
            en: 'How do you prioritize multiple simultaneous campaigns with conflicting deadlines?',
            es: '¿Cómo priorizas múltiples campañas simultáneas con plazos en conflicto?',
          },
          a: {
            pt: `<strong>Framework de priorização (ordem decrescente):</strong>
<ol>
  <li>Campanhas ao vivo com problema (impacto imediato no cliente)</li>
  <li>Lançamentos agendados para hoje</li>
  <li>Lançamentos desta semana</li>
  <li>Otimizações e ajustes em campanhas saudáveis</li>
  <li>Relatórios e tarefas administrativas</li>
</ol>
<strong>Boas práticas de gestão:</strong>
<ul>
  <li>Nunca agendar tráfego para o mesmo dia do live — buffer mínimo de 24h</li>
  <li>Checklist padronizado por campanha (reduz retrabalho e erros)</li>
  <li>Planilha de pacing diário com status por campanha</li>
  <li>Alertas de budget e entrega configurados na plataforma</li>
</ul>
<strong>Gestão de expectativas:</strong> comunicar proativamente ao cliente/gestor quando há risco de não cumprir prazo, apresentando alternativas (ex: lançamento parcial, prioritização de formatos).`,
            en: `<strong>Prioritization framework (descending order):</strong>
<ol>
  <li>Live campaigns with issues (immediate client impact)</li>
  <li>Launches scheduled for today</li>
  <li>Launches this week</li>
  <li>Optimizations and adjustments on healthy campaigns</li>
  <li>Reports and administrative tasks</li>
</ol>
<strong>Management best practices:</strong>
<ul>
  <li>Never schedule trafficking for the same day as live — minimum 24h buffer</li>
  <li>Standardized checklist per campaign (reduces rework and errors)</li>
  <li>Daily pacing spreadsheet with status per campaign</li>
  <li>Budget and delivery alerts configured on the platform</li>
</ul>
<strong>Expectation management:</strong> proactively communicate to client/manager when there's a deadline risk, presenting alternatives (e.g., partial launch, format prioritization).`,
            es: `<strong>Framework de priorización (orden decreciente):</strong>
<ol>
  <li>Campañas en vivo con problemas (impacto inmediato en el cliente)</li>
  <li>Lanzamientos programados para hoy</li>
  <li>Lanzamientos de esta semana</li>
  <li>Optimizaciones y ajustes en campañas saludables</li>
  <li>Reportes y tareas administrativas</li>
</ol>
<strong>Buenas prácticas de gestión:</strong>
<ul>
  <li>Nunca programar el tráfico para el mismo día del live — buffer mínimo de 24h</li>
  <li>Checklist estandarizado por campaña (reduce retrabajo y errores)</li>
  <li>Planilla de pacing diario con status por campaña</li>
  <li>Alertas de budget y entrega configuradas en la plataforma</li>
</ul>
<strong>Gestión de expectativas:</strong> comunicar proactivamente al cliente/manager cuando hay riesgo de incumplir plazo, presentando alternativas (ej: lanzamiento parcial, priorización de formatos).`,
          },
          tags: ['prioritization', 'project-management', 'pacing', 'workflow'],
        },
        {
          q: {
            pt: 'Como você explica uma discrepância de dados para um cliente não técnico?',
            en: 'How do you explain a data discrepancy to a non-technical client?',
            es: '¿Cómo explicas una discrepancia de datos a un cliente no técnico?',
          },
          a: {
            pt: `<strong>Princípio:</strong> nunca falar "os números estão errados" — explicar que diferentes ferramentas medem de formas diferentes, o que é normal no mercado.<br><br>
<strong>Estrutura de comunicação (3 partes):</strong>
<ol>
  <li><strong>Reconhecer e contextualizar:</strong> "Identificamos uma diferença entre os dados do CM360 e os do publisher. Isso é comum no mercado digital e tem causas técnicas conhecidas."</li>
  <li><strong>Explicar a causa (linguagem simples):</strong> "A diferença acontece porque o sistema do publisher conta o anúncio como exibido um pouco antes de o nosso sistema de tracking registrar — é como dois cronômetros iniciando em momentos ligeiramente diferentes."</li>
  <li><strong>Apresentar o próximo passo:</strong> "Abrimos uma investigação com o publisher. A diferença está dentro do limite aceitável do mercado (até 15%), mas vamos monitorar e acionar formalmente se ultrapassar esse threshold."</li>
</ol>
<strong>O que nunca fazer:</strong> entrar em detalhes técnicos de ITP, ad blockers ou latência sem que o cliente pergunte — isso gera mais dúvida do que clareza.`,
            en: `<strong>Principle:</strong> never say "the numbers are wrong" — explain that different tools measure in different ways, which is normal in the market.<br><br>
<strong>Communication structure (3 parts):</strong>
<ol>
  <li><strong>Acknowledge and contextualize:</strong> "We identified a difference between CM360 data and the publisher's. This is common in digital advertising and has known technical causes."</li>
  <li><strong>Explain the cause (simple language):</strong> "The difference happens because the publisher's system counts the ad as served slightly before our tracking system records it — like two stopwatches starting at slightly different moments."</li>
  <li><strong>Present the next step:</strong> "We've opened an investigation with the publisher. The difference is within the acceptable market threshold (up to 15%), but we'll monitor and escalate formally if it exceeds that."</li>
</ol>
<strong>What never to do:</strong> go into technical details about ITP, ad blockers or latency unless the client asks — it creates more confusion than clarity.`,
            es: `<strong>Principio:</strong> nunca decir "los números están mal" — explicar que diferentes herramientas miden de maneras distintas, lo cual es normal en el mercado.<br><br>
<strong>Estructura de comunicación (3 partes):</strong>
<ol>
  <li><strong>Reconocer y contextualizar:</strong> "Identificamos una diferencia entre los datos de CM360 y los del publisher. Esto es común en la publicidad digital y tiene causas técnicas conocidas."</li>
  <li><strong>Explicar la causa (lenguaje simple):</strong> "La diferencia ocurre porque el sistema del publisher cuenta el anuncio como servido un poco antes de que nuestro sistema de tracking lo registre — como dos cronómetros iniciando en momentos ligeramente distintos."</li>
  <li><strong>Presentar el próximo paso:</strong> "Abrimos una investigación con el publisher. La diferencia está dentro del umbral aceptable del mercado (hasta 15%), pero monitorearemos y escalaremos formalmente si supera ese threshold."</li>
</ol>
<strong>Lo que nunca hacer:</strong> entrar en detalles técnicos de ITP, ad blockers o latencia sin que el cliente lo pregunte — genera más confusión que claridad.`,
          },
          tags: ['discrepancy', 'client-communication', 'non-technical', 'escalation'],
        },
        {
          q: {
            pt: 'O que é brand safety e como você garante isso operacionalmente?',
            en: 'What is brand safety and how do you ensure it operationally?',
            es: '¿Qué es brand safety y cómo lo garantizas operacionalmente?',
          },
          a: {
            pt: `<strong>Brand safety</strong> é o conjunto de práticas que garantem que o anúncio de uma marca não apareça ao lado de conteúdo inadequado (violência, desinformação, conteúdo adulto, discurso de ódio, etc.).<br><br>
<strong>Camadas de proteção operacional:</strong>
<ol>
  <li><strong>Configurações de plataforma:</strong> Content Labels, Sensitive Categories e Publisher Blocklists no DV360/CM360</li>
  <li><strong>Parceiros de verificação:</strong> IAS ou DoubleVerify — pre-bid filtering (bloqueia antes de comprar) e post-bid reporting (audita o que foi entregue)</li>
  <li><strong>Allowlists:</strong> para clientes mais sensíveis, comprar APENAS em lista de publishers aprovados</li>
  <li><strong>Revisão pós-campanha:</strong> relatório de placement level para identificar sites inadequados e adicionar à blocklist</li>
</ol>
<strong>Responsabilidade operacional:</strong>
<ul>
  <li>Documentar as configurações de brand safety aplicadas em cada campanha</li>
  <li>Alertar o cliente quando inventário inadequado for detectado, antes que ele pergunte</li>
  <li>Manter blocklist atualizada e reutilizável entre campanhas do mesmo anunciante</li>
</ul>`,
            en: `<strong>Brand safety</strong> is the set of practices that ensure a brand's ad doesn't appear next to inappropriate content (violence, misinformation, adult content, hate speech, etc.).<br><br>
<strong>Operational protection layers:</strong>
<ol>
  <li><strong>Platform settings:</strong> Content Labels, Sensitive Categories and Publisher Blocklists in DV360/CM360</li>
  <li><strong>Verification partners:</strong> IAS or DoubleVerify — pre-bid filtering (blocks before buying) and post-bid reporting (audits what was delivered)</li>
  <li><strong>Allowlists:</strong> for more sensitive clients, buy ONLY on approved publisher lists</li>
  <li><strong>Post-campaign review:</strong> placement-level report to identify inappropriate sites and add to blocklist</li>
</ol>
<strong>Operational responsibility:</strong>
<ul>
  <li>Document brand safety settings applied in each campaign</li>
  <li>Alert the client when inappropriate inventory is detected, before they ask</li>
  <li>Keep blocklist updated and reusable across campaigns from the same advertiser</li>
</ul>`,
            es: `<strong>Brand safety</strong> es el conjunto de prácticas que garantizan que el anuncio de una marca no aparezca junto a contenido inadecuado (violencia, desinformación, contenido adulto, discurso de odio, etc.).<br><br>
<strong>Capas de protección operacional:</strong>
<ol>
  <li><strong>Configuraciones de plataforma:</strong> Content Labels, Sensitive Categories y Publisher Blocklists en DV360/CM360</li>
  <li><strong>Partners de verificación:</strong> IAS o DoubleVerify — filtrado pre-bid (bloquea antes de comprar) y reporte post-bid (audita lo entregado)</li>
  <li><strong>Allowlists:</strong> para clientes más sensibles, comprar SOLO en lista de publishers aprobados</li>
  <li><strong>Revisión post-campaña:</strong> reporte de placement level para identificar sitios inadecuados y agregar a la blocklist</li>
</ol>
<strong>Responsabilidad operacional:</strong>
<ul>
  <li>Documentar las configuraciones de brand safety aplicadas en cada campaña</li>
  <li>Alertar al cliente cuando se detecte inventario inadecuado, antes de que pregunte</li>
  <li>Mantener blocklist actualizada y reutilizable entre campañas del mismo anunciante</li>
</ul>`,
          },
          tags: ['brand-safety', 'IAS', 'DoubleVerify', 'blocklist', 'allowlist'],
        },
      ],
    },
  ],
};

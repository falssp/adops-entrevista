// Módulo Operacional — AdOps Interview Kit v2
window.__adopsData = window.__adopsData || {};
window.__adopsData['ops'] = {
  icon: '⚙️',
  name: { pt: 'Operacional AdOps', en: 'AdOps Operations', es: 'Operaciones AdOps' },
  desc: {
    pt: 'Processos, QA, comunicação com cliente, troubleshoot e boas práticas do dia a dia em operações de mídia digital.',
    en: 'Processes, QA, client communication, troubleshooting and daily best practices in digital media operations.',
    es: 'Procesos, QA, comunicación con cliente, troubleshooting y buenas prácticas del día a día en operaciones de medios digitales.',
  },
  tiers: [
    {
      id: 'easy',
      questions: [
        {
          q: {
            pt: 'O que é QA em AdOps e quais os itens básicos de um checklist de QA antes de uma campanha ir ao ar?',
            en: 'What is QA in AdOps and what are the basic items of a QA checklist before a campaign goes live?',
            es: '¿Qué es QA en AdOps y cuáles son los ítems básicos de un checklist de QA antes de que una campaña salga al aire?',
          },
          a: {
            pt: `QA (Quality Assurance) em AdOps é o processo de verificação sistemática de todos os elementos de uma campanha <strong>antes da ativação</strong>, para evitar erros em produção.<br><br>
<strong>Checklist básico pré-live:</strong>
<ul>
  <li>✅ <strong>Datas:</strong> start/end corretos, fuso horário validado</li>
  <li>✅ <strong>Budget:</strong> valor total e daily cap conferidos com o media plan</li>
  <li>✅ <strong>Criativos:</strong> todos aprovados, sem tags quebradas, dimensões corretas</li>
  <li>✅ <strong>Tracking:</strong> Floodlight/pixels disparando corretamente (Preview Tool ou Tag Assistant)</li>
  <li>✅ <strong>URLs de destino:</strong> todas funcionando, redirecionamentos testados, UTMs corretos</li>
  <li>✅ <strong>Targeting:</strong> geo, device, audience conforme o briefing</li>
  <li>✅ <strong>Frequency cap:</strong> configurado no nível correto</li>
  <li>✅ <strong>Nomenclatura:</strong> nome de campaign/IO/LI/creative seguindo a taxonomia acordada</li>
  <li>✅ <strong>Status:</strong> tudo ativo (não pausado acidentalmente)</li>
  <li>✅ <strong>Preview:</strong> criativos renderizando corretamente em todos os formatos</li>
</ul>
<strong>Regra de ouro:</strong> QA deve ser feito por uma pessoa diferente de quem traficou a campanha. "Olho viciado" erra o mesmo erro.`,
            en: `QA (Quality Assurance) in AdOps is the process of systematically checking all campaign elements <strong>before activation</strong> to prevent production errors.<br><br>
<strong>Basic pre-live checklist:</strong>
<ul>
  <li>✅ <strong>Dates:</strong> start/end correct, timezone validated</li>
  <li>✅ <strong>Budget:</strong> total amount and daily cap confirmed against media plan</li>
  <li>✅ <strong>Creatives:</strong> all approved, no broken tags, correct dimensions</li>
  <li>✅ <strong>Tracking:</strong> Floodlight/pixels firing correctly (Preview Tool or Tag Assistant)</li>
  <li>✅ <strong>Destination URLs:</strong> all working, redirects tested, UTMs correct</li>
  <li>✅ <strong>Targeting:</strong> geo, device, audience per briefing</li>
  <li>✅ <strong>Frequency cap:</strong> configured at the correct level</li>
  <li>✅ <strong>Naming:</strong> campaign/IO/LI/creative names following agreed taxonomy</li>
  <li>✅ <strong>Status:</strong> everything active (not accidentally paused)</li>
  <li>✅ <strong>Preview:</strong> creatives rendering correctly across all formats</li>
</ul>
<strong>Golden rule:</strong> QA should be done by someone different from who trafficked the campaign. The person who built it misses the same mistakes.`,
            es: `QA (Quality Assurance) en AdOps es el proceso de verificación sistemática de todos los elementos de una campaña <strong>antes de la activación</strong>, para evitar errores en producción.<br><br>
<strong>Checklist básico pre-live:</strong>
<ul>
  <li>✅ <strong>Fechas:</strong> inicio/fin correctos, zona horaria validada</li>
  <li>✅ <strong>Presupuesto:</strong> monto total y daily cap verificados contra el media plan</li>
  <li>✅ <strong>Creativos:</strong> todos aprobados, sin tags rotas, dimensiones correctas</li>
  <li>✅ <strong>Tracking:</strong> Floodlight/pixels disparando correctamente (Preview Tool o Tag Assistant)</li>
  <li>✅ <strong>URLs de destino:</strong> todas funcionando, redirecciones probadas, UTMs correctos</li>
  <li>✅ <strong>Targeting:</strong> geo, device, audiencia conforme el briefing</li>
  <li>✅ <strong>Frequency cap:</strong> configurado en el nivel correcto</li>
  <li>✅ <strong>Nomenclatura:</strong> nombres de campaign/IO/LI/creative siguiendo la taxonomía acordada</li>
  <li>✅ <strong>Estado:</strong> todo activo (no pausado accidentalmente)</li>
  <li>✅ <strong>Preview:</strong> creativos renderizando correctamente en todos los formatos</li>
</ul>
<strong>Regla de oro:</strong> el QA debe hacerlo una persona diferente a quien trafficked la campaña. El "ojo viciado" comete el mismo error.`,
          },
          tags: ['QA', 'checklist', 'pre-live', 'trafficking'],
        },
        {
          q: {
            pt: 'O que é uma Trafficking Sheet (TS) e qual sua função no fluxo de AdOps?',
            en: 'What is a Trafficking Sheet (TS) and what is its function in the AdOps workflow?',
            es: '¿Qué es una Trafficking Sheet (TS) y cuál es su función en el flujo de AdOps?',
          },
          a: {
            pt: `A <strong>Trafficking Sheet</strong> é o documento central do fluxo de AdOps — a "planta baixa" de uma campanha.<br><br>
<strong>O que contém:</strong>
<ul>
  <li>Estrutura completa: advertiser, campaign, placements, ads, criativos</li>
  <li>Especificações de cada formato: dimensão, peso máximo, duração de vídeo</li>
  <li>URLs de destino por peça</li>
  <li>Floodlight Activities associadas</li>
  <li>Nomenclatura de cada elemento (seguindo a taxonomia)</li>
  <li>Status de aprovação dos criativos</li>
</ul>
<strong>Fluxo típico:</strong>
<ol>
  <li>Planejamento de mídia gera o media plan</li>
  <li>AdOps cria a TS baseada no media plan</li>
  <li>Cliente/criação aprova a TS</li>
  <li>Criativos são entregues conforme as specs da TS</li>
  <li>AdOps trafega no ad server usando a TS como referência</li>
  <li>Publisher recebe as tags geradas pelo ad server</li>
</ol>
<strong>Formatos comuns:</strong> Google Sheets, Excel, ou templates proprietários de cada agência. Algumas plataformas (CM360) têm TS nativa com upload automatizado.`,
            en: `The <strong>Trafficking Sheet</strong> is the central document in the AdOps workflow — the campaign blueprint.<br><br>
<strong>What it contains:</strong>
<ul>
  <li>Complete structure: advertiser, campaign, placements, ads, creatives</li>
  <li>Specifications for each format: dimension, max weight, video duration</li>
  <li>Destination URLs per piece</li>
  <li>Associated Floodlight Activities</li>
  <li>Naming for each element (following the taxonomy)</li>
  <li>Creative approval status</li>
</ul>
<strong>Typical flow:</strong>
<ol>
  <li>Media planning generates the media plan</li>
  <li>AdOps creates the TS based on the media plan</li>
  <li>Client/creative team approves the TS</li>
  <li>Creatives are delivered per TS specs</li>
  <li>AdOps traffics in the ad server using the TS as reference</li>
  <li>Publisher receives the tags generated by the ad server</li>
</ol>
<strong>Common formats:</strong> Google Sheets, Excel, or agency-proprietary templates. Some platforms (CM360) have a native TS with automated upload.`,
            es: `La <strong>Trafficking Sheet</strong> es el documento central del flujo de AdOps — el "plano" de una campaña.<br><br>
<strong>Qué contiene:</strong>
<ul>
  <li>Estructura completa: advertiser, campaign, placements, ads, creativos</li>
  <li>Especificaciones de cada formato: dimensión, peso máximo, duración de video</li>
  <li>URLs de destino por pieza</li>
  <li>Floodlight Activities asociadas</li>
  <li>Nomenclatura de cada elemento (siguiendo la taxonomía)</li>
  <li>Estado de aprobación de los creativos</li>
</ul>
<strong>Flujo típico:</strong>
<ol>
  <li>Planeación de medios genera el media plan</li>
  <li>AdOps crea la TS basándose en el media plan</li>
  <li>Cliente/equipo creativo aprueba la TS</li>
  <li>Creativos se entregan según las specs de la TS</li>
  <li>AdOps traffica en el ad server usando la TS como referencia</li>
  <li>Publisher recibe los tags generados por el ad server</li>
</ol>
<strong>Formatos comunes:</strong> Google Sheets, Excel, o templates propietarios de cada agencia. Algunas plataformas (CM360) tienen TS nativa con carga automatizada.`,
          },
          tags: ['trafficking-sheet', 'workflow', 'ad-server', 'taxonomy'],
        },
        {
          q: {
            pt: 'O que é taxonomia de nomenclatura e por que ela é crítica em AdOps?',
            en: 'What is naming taxonomy and why is it critical in AdOps?',
            es: '¿Qué es la taxonomía de nomenclatura y por qué es crítica en AdOps?',
          },
          a: {
            pt: `<strong>Taxonomia</strong> é o sistema de nomenclatura padronizado para todos os elementos de campanha — campaigns, IOs, line items, ads e criativos.<br><br>
<strong>Por que é crítica:</strong>
<ul>
  <li><strong>Relatórios:</strong> filtros e pivôs nos dashboards dependem de nomes consistentes. Um nome errado = dado perdido nos relatórios</li>
  <li><strong>Automatização:</strong> scripts de extração de dados e APIs usam o nome como chave. Inconsistência quebra automações</li>
  <li><strong>Auditoria:</strong> conseguir entender o que foi feito meses depois sem precisar abrir cada elemento</li>
  <li><strong>Escalabilidade:</strong> em contas com centenas de campanhas, taxonomia é o único jeito de manter organização</li>
</ul>
<strong>Estrutura típica de nomenclatura:</strong><br>
<code>[Cliente]_[Produto]_[Objetivo]_[Canal]_[Formato]_[Período]</code><br><br>
Exemplo: <code>COCA_COCA-ZERO_AWARENESS_DV360_BANNER-300x250_2024Q1</code><br><br>
<strong>Boas práticas:</strong>
<ul>
  <li>Sem espaços — usar underscores ou hífens</li>
  <li>Sem acentos ou caracteres especiais</li>
  <li>Datas em formato consistente (YYYYMM ou QX)</li>
  <li>Documentar a taxonomia em um wiki ou README acessível a toda a equipe</li>
</ul>`,
            en: `<strong>Taxonomy</strong> is the standardized naming system for all campaign elements — campaigns, IOs, line items, ads and creatives.<br><br>
<strong>Why it's critical:</strong>
<ul>
  <li><strong>Reporting:</strong> dashboard filters and pivots depend on consistent names. A wrong name = data lost in reports</li>
  <li><strong>Automation:</strong> data extraction scripts and APIs use the name as a key. Inconsistency breaks automations</li>
  <li><strong>Audit:</strong> being able to understand what was done months later without opening each element</li>
  <li><strong>Scalability:</strong> in accounts with hundreds of campaigns, taxonomy is the only way to maintain organization</li>
</ul>
<strong>Typical naming structure:</strong><br>
<code>[Client]_[Product]_[Goal]_[Channel]_[Format]_[Period]</code><br><br>
Example: <code>COCA_COCA-ZERO_AWARENESS_DV360_BANNER-300x250_2024Q1</code><br><br>
<strong>Best practices:</strong>
<ul>
  <li>No spaces — use underscores or hyphens</li>
  <li>No accents or special characters</li>
  <li>Dates in consistent format (YYYYMM or QX)</li>
  <li>Document taxonomy in a wiki or README accessible to the whole team</li>
</ul>`,
            es: `<strong>Taxonomía</strong> es el sistema de nomenclatura estandarizado para todos los elementos de campaña — campaigns, IOs, line items, ads y creativos.<br><br>
<strong>Por qué es crítica:</strong>
<ul>
  <li><strong>Reportes:</strong> los filtros y pivots de dashboards dependen de nombres consistentes. Un nombre incorrecto = dato perdido en los reportes</li>
  <li><strong>Automatización:</strong> los scripts de extracción de datos y APIs usan el nombre como clave. La inconsistencia rompe las automatizaciones</li>
  <li><strong>Auditoría:</strong> poder entender qué se hizo meses después sin abrir cada elemento</li>
  <li><strong>Escalabilidad:</strong> en cuentas con cientos de campañas, la taxonomía es la única forma de mantener organización</li>
</ul>
<strong>Estructura típica de nomenclatura:</strong><br>
<code>[Cliente]_[Producto]_[Objetivo]_[Canal]_[Formato]_[Período]</code><br><br>
Ejemplo: <code>COCA_COCA-ZERO_AWARENESS_DV360_BANNER-300x250_2024Q1</code><br><br>
<strong>Buenas prácticas:</strong>
<ul>
  <li>Sin espacios — usar underscores o guiones</li>
  <li>Sin acentos ni caracteres especiales</li>
  <li>Fechas en formato consistente (YYYYMM o QX)</li>
  <li>Documentar la taxonomía en un wiki o README accesible a todo el equipo</li>
</ul>`,
          },
          tags: ['taxonomia', 'nomenclatura', 'naming', 'organização'],
        },
        {
          q: {
            pt: 'Como você lida com um erro em uma campanha que já está no ar? Descreva o processo.',
            en: 'How do you handle an error in a live campaign? Describe the process.',
            es: '¿Cómo manejas un error en una campaña que ya está en el aire? Describe el proceso.',
          },
          a: {
            pt: `<strong>Protocolo de gestão de erros em campanha live:</strong><br><br>
<strong>1. Identificar e conter (imediato)</strong>
<ul>
  <li>Pausar o elemento com problema (não a campanha toda, se possível)</li>
  <li>Avaliar impacto: qual o volume afetado? Quanto tempo o erro existe?</li>
</ul>
<strong>2. Diagnosticar (5-15 min)</strong>
<ul>
  <li>Isolar a causa: foi mudança recente? Problema técnico? Erro de tráfego?</li>
  <li>Verificar logs de alterações na plataforma (Change History)</li>
</ul>
<strong>3. Comunicar (antes de corrigir)</strong>
<ul>
  <li>Avisar o cliente/supervisor ANTES de corrigir — nunca "esconder" um erro</li>
  <li>Informar: o que aconteceu, qual o impacto estimado, o que será feito</li>
</ul>
<strong>4. Corrigir e reativar</strong>
<ul>
  <li>Fazer a correção com um segundo par de olhos validando</li>
  <li>Reativar e monitorar por 30 min para confirmar normalidade</li>
</ul>
<strong>5. Post-mortem</strong>
<ul>
  <li>Documentar: causa raiz, impacto real, solução aplicada, como evitar recorrência</li>
  <li>Atualizar checklist de QA se necessário</li>
</ul>
<strong>Postura crítica:</strong> transparência imediata com o cliente é mais importante do que ter a solução perfeita antes de avisar.`,
            en: `<strong>Error management protocol for live campaigns:</strong><br><br>
<strong>1. Identify and contain (immediate)</strong>
<ul>
  <li>Pause the problematic element (not the entire campaign if possible)</li>
  <li>Assess impact: what volume was affected? How long has the error existed?</li>
</ul>
<strong>2. Diagnose (5-15 min)</strong>
<ul>
  <li>Isolate the cause: was it a recent change? Technical issue? Trafficking error?</li>
  <li>Check platform change logs (Change History)</li>
</ul>
<strong>3. Communicate (before fixing)</strong>
<ul>
  <li>Notify the client/supervisor BEFORE fixing — never "hide" an error</li>
  <li>Inform: what happened, estimated impact, what will be done</li>
</ul>
<strong>4. Fix and reactivate</strong>
<ul>
  <li>Make the correction with a second pair of eyes validating</li>
  <li>Reactivate and monitor for 30 min to confirm normality</li>
</ul>
<strong>5. Post-mortem</strong>
<ul>
  <li>Document: root cause, actual impact, solution applied, how to prevent recurrence</li>
  <li>Update QA checklist if necessary</li>
</ul>
<strong>Critical attitude:</strong> immediate transparency with the client is more important than having the perfect solution before informing them.`,
            es: `<strong>Protocolo de gestión de errores en campaña live:</strong><br><br>
<strong>1. Identificar y contener (inmediato)</strong>
<ul>
  <li>Pausar el elemento con problema (no toda la campaña si es posible)</li>
  <li>Evaluar impacto: ¿qué volumen fue afectado? ¿Cuánto tiempo lleva el error?</li>
</ul>
<strong>2. Diagnosticar (5-15 min)</strong>
<ul>
  <li>Aislar la causa: ¿fue un cambio reciente? ¿Problema técnico? ¿Error de tráfico?</li>
  <li>Verificar logs de cambios en la plataforma (Change History)</li>
</ul>
<strong>3. Comunicar (antes de corregir)</strong>
<ul>
  <li>Avisar al cliente/supervisor ANTES de corregir — nunca "esconder" un error</li>
  <li>Informar: qué pasó, cuál es el impacto estimado, qué se hará</li>
</ul>
<strong>4. Corregir y reactivar</strong>
<ul>
  <li>Hacer la corrección con un segundo par de ojos validando</li>
  <li>Reactivar y monitorear por 30 min para confirmar normalidad</li>
</ul>
<strong>5. Post-mortem</strong>
<ul>
  <li>Documentar: causa raíz, impacto real, solución aplicada, cómo evitar recurrencia</li>
  <li>Actualizar checklist de QA si es necesario</li>
</ul>
<strong>Actitud crítica:</strong> la transparencia inmediata con el cliente es más importante que tener la solución perfecta antes de avisar.`,
          },
          tags: ['erro', 'live', 'comunicação', 'protocolo', 'post-mortem'],
        },
      ],
    },
    {
      id: 'mid',
      questions: [
        {
          q: {
            pt: 'Como montar um relatório de performance para o cliente? Quais métricas incluir e como estruturar a narrativa?',
            en: 'How to build a performance report for the client? Which metrics to include and how to structure the narrative?',
            es: '¿Cómo armar un reporte de performance para el cliente? ¿Qué métricas incluir y cómo estructurar la narrativa?',
          },
          a: {
            pt: `<strong>Estrutura de relatório de performance:</strong><br><br>
<strong>1. Executive Summary (1 parágrafo)</strong>
<ul>
  <li>O que foi entregue vs. o que foi planejado</li>
  <li>Principal insight do período</li>
  <li>Recomendação ou próximo passo</li>
</ul>
<strong>2. Métricas por objetivo:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Objetivo</th><th style="padding:6px">Métricas primárias</th><th style="padding:6px">Métricas secundárias</th></tr>
<tr><td style="padding:6px">Awareness</td><td style="padding:6px">Impressões, Reach, Freq.</td><td style="padding:6px">Viewability, CPM, VCR</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Consideração</td><td style="padding:6px">CTR, Cliques, Sessões</td><td style="padding:6px">Bounce rate, Tempo na página</td></tr>
<tr><td style="padding:6px">Conversão</td><td style="padding:6px">Conversões, CPA, ROAS</td><td style="padding:6px">Funil, Atribuição</td></tr>
</table><br>
<strong>3. Análise de pacing:</strong> budget investido vs. programado<br>
<strong>4. Top e bottom performers:</strong> quais criativos, publishers, geos, devices entregaram melhor/pior<br>
<strong>5. Próximas ações:</strong> otimizações recomendadas com justificativa<br><br>
<strong>Princípio fundamental:</strong> cliente não quer ver número — quer entender o que o número significa para o negócio dele. Traduza métricas em linguagem de negócio.`,
            en: `<strong>Performance report structure:</strong><br><br>
<strong>1. Executive Summary (1 paragraph)</strong>
<ul>
  <li>What was delivered vs. what was planned</li>
  <li>Main insight of the period</li>
  <li>Recommendation or next step</li>
</ul>
<strong>2. Metrics by objective:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Objective</th><th style="padding:6px">Primary metrics</th><th style="padding:6px">Secondary metrics</th></tr>
<tr><td style="padding:6px">Awareness</td><td style="padding:6px">Impressions, Reach, Freq.</td><td style="padding:6px">Viewability, CPM, VCR</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Consideration</td><td style="padding:6px">CTR, Clicks, Sessions</td><td style="padding:6px">Bounce rate, Time on page</td></tr>
<tr><td style="padding:6px">Conversion</td><td style="padding:6px">Conversions, CPA, ROAS</td><td style="padding:6px">Funnel, Attribution</td></tr>
</table><br>
<strong>3. Pacing analysis:</strong> budget invested vs. planned<br>
<strong>4. Top and bottom performers:</strong> which creatives, publishers, geos, devices performed best/worst<br>
<strong>5. Next actions:</strong> recommended optimizations with rationale<br><br>
<strong>Fundamental principle:</strong> clients don't want to see numbers — they want to understand what the number means for their business. Translate metrics into business language.`,
            es: `<strong>Estructura de reporte de performance:</strong><br><br>
<strong>1. Executive Summary (1 párrafo)</strong>
<ul>
  <li>Qué se entregó vs. qué se planeó</li>
  <li>Principal insight del período</li>
  <li>Recomendación o próximo paso</li>
</ul>
<strong>2. Métricas por objetivo:</strong>
<table style="width:100%;border-collapse:collapse;font-size:0.9em">
<tr style="background:#f0f4ff"><th style="padding:6px">Objetivo</th><th style="padding:6px">Métricas primarias</th><th style="padding:6px">Métricas secundarias</th></tr>
<tr><td style="padding:6px">Awareness</td><td style="padding:6px">Impresiones, Reach, Frec.</td><td style="padding:6px">Viewability, CPM, VCR</td></tr>
<tr style="background:#f9f9f9"><td style="padding:6px">Consideración</td><td style="padding:6px">CTR, Clics, Sesiones</td><td style="padding:6px">Bounce rate, Tiempo en página</td></tr>
<tr><td style="padding:6px">Conversión</td><td style="padding:6px">Conversiones, CPA, ROAS</td><td style="padding:6px">Embudo, Atribución</td></tr>
</table><br>
<strong>3. Análisis de pacing:</strong> presupuesto invertido vs. planeado<br>
<strong>4. Top y bottom performers:</strong> qué creativos, publishers, geos, dispositivos rindieron mejor/peor<br>
<strong>5. Próximas acciones:</strong> optimizaciones recomendadas con justificación<br><br>
<strong>Principio fundamental:</strong> el cliente no quiere ver números — quiere entender qué significa el número para su negocio. Traduce métricas a lenguaje de negocio.`,
          },
          tags: ['relatório', 'KPI', 'performance', 'cliente', 'narrativa'],
        },
        {
          q: {
            pt: 'Como gerenciar prazos e prioridades quando você tem múltiplas campanhas para trafegar ao mesmo tempo?',
            en: 'How do you manage deadlines and priorities when you have multiple campaigns to traffic at the same time?',
            es: '¿Cómo manejas plazos y prioridades cuando tienes múltiples campañas para trafiquear al mismo tiempo?',
          },
          a: {
            pt: `<strong>Framework de priorização em AdOps:</strong><br><br>
<strong>Critérios de prioridade (em ordem):</strong>
<ol>
  <li><strong>Go-live iminente:</strong> campanhas que entram no ar hoje ou amanhã vêm primeiro, sempre</li>
  <li><strong>Impacto financeiro:</strong> campanhas com maior budget ou cliente estratégico</li>
  <li><strong>Complexidade técnica:</strong> o que precisa de mais tempo de QA vai antes</li>
  <li><strong>Dependências externas:</strong> o que depende de aprovação do cliente ou publisher tem margem menor</li>
</ol>
<strong>Organização prática:</strong>
<ul>
  <li>Lista de tarefas com data de go-live de cada campanha visível</li>
  <li>Buffer de QA: nunca trafegar no mesmo dia do go-live — mínimo 24h antes</li>
  <li>Template de TS padronizado reduz tempo de tráfego em 30-40%</li>
  <li>Comunicar ao cliente/supervisor proativamente se houver risco de atraso</li>
</ul>
<strong>Quando o volume é impossível:</strong>
<ul>
  <li>Escalar para supervisor com evidências (lista de demandas + horas estimadas)</li>
  <li>Nunca aceitar trabalho inviável em silêncio — isso gera erros</li>
  <li>Propor priorização junto com o cliente quando necessário</li>
</ul>`,
            en: `<strong>Prioritization framework in AdOps:</strong><br><br>
<strong>Priority criteria (in order):</strong>
<ol>
  <li><strong>Imminent go-live:</strong> campaigns going live today or tomorrow always come first</li>
  <li><strong>Financial impact:</strong> campaigns with larger budgets or strategic clients</li>
  <li><strong>Technical complexity:</strong> what needs more QA time goes first</li>
  <li><strong>External dependencies:</strong> what depends on client or publisher approval has less margin</li>
</ol>
<strong>Practical organization:</strong>
<ul>
  <li>Task list with each campaign's go-live date visible</li>
  <li>QA buffer: never traffic on the same day as go-live — minimum 24h before</li>
  <li>Standardized TS template reduces trafficking time by 30-40%</li>
  <li>Proactively communicate to client/supervisor if there's a delay risk</li>
</ul>
<strong>When volume is impossible:</strong>
<ul>
  <li>Escalate to supervisor with evidence (demand list + estimated hours)</li>
  <li>Never silently accept unfeasible work — this generates errors</li>
  <li>Propose prioritization with the client when necessary</li>
</ul>`,
            es: `<strong>Framework de priorización en AdOps:</strong><br><br>
<strong>Criterios de prioridad (en orden):</strong>
<ol>
  <li><strong>Go-live inminente:</strong> campañas que entran al aire hoy o mañana siempre van primero</li>
  <li><strong>Impacto financiero:</strong> campañas con mayor presupuesto o cliente estratégico</li>
  <li><strong>Complejidad técnica:</strong> lo que necesita más tiempo de QA va antes</li>
  <li><strong>Dependencias externas:</strong> lo que depende de aprobación del cliente o publisher tiene menor margen</li>
</ol>
<strong>Organización práctica:</strong>
<ul>
  <li>Lista de tareas con fecha de go-live de cada campaña visible</li>
  <li>Buffer de QA: nunca trafiquear el mismo día del go-live — mínimo 24h antes</li>
  <li>Template de TS estandarizado reduce el tiempo de tráfico en 30-40%</li>
  <li>Comunicar proactivamente al cliente/supervisor si hay riesgo de atraso</li>
</ul>
<strong>Cuando el volumen es imposible:</strong>
<ul>
  <li>Escalar al supervisor con evidencias (lista de demandas + horas estimadas)</li>
  <li>Nunca aceptar trabajo inviable en silencio — esto genera errores</li>
  <li>Proponer priorización junto con el cliente cuando sea necesario</li>
</ul>`,
          },
          tags: ['priorização', 'prazos', 'organização', 'gestão'],
        },
        {
          q: {
            pt: 'Como você explica uma discrepância de dados entre o ad server e o relatório do publisher para o cliente?',
            en: 'How do you explain a data discrepancy between the ad server and the publisher report to the client?',
            es: '¿Cómo explicas una discrepancia de datos entre el ad server y el reporte del publisher al cliente?',
          },
          a: {
            pt: `Discrepâncias entre ad server e publisher são normais — o problema é quando ultrapassam o threshold aceitável.<br><br>
<strong>Threshold padrão da indústria:</strong> até ~10% de discrepância é considerada normal. Acima de 20% exige investigação.<br><br>
<strong>Causas comuns:</strong>
<ul>
  <li><strong>Diferença de contagem:</strong> ad server conta quando o ad é requisitado; publisher conta quando é renderizado</li>
  <li><strong>Latência de tag:</strong> usuário fecha a página antes da tag do ad server registrar</li>
  <li><strong>Ad blockers:</strong> bloqueiam a tag do ad server mas o publisher já serviu o anúncio</li>
  <li><strong>Fuso horário:</strong> ad server e publisher em fusos diferentes reportam dias diferentes</li>
  <li><strong>Tag mal implementada:</strong> publisher duplicou ou omitiu parte da tag</li>
</ul>
<strong>Como comunicar ao cliente:</strong>
<ol>
  <li>Explique que discrepâncias são normais e esperadas na indústria</li>
  <li>Apresente o % de discrepância (ex: 8% = dentro do esperado)</li>
  <li>Informe qual número é a fonte de verdade para billing (geralmente o ad server)</li>
  <li>Se estiver acima do threshold, relate o que está sendo investigado</li>
</ol>
<strong>Fonte de verdade:</strong> em contratos com CM360 como ad server, o número do CM360 é o oficial para billing.`,
            en: `Discrepancies between ad server and publisher are normal — the issue is when they exceed the acceptable threshold.<br><br>
<strong>Industry standard threshold:</strong> up to ~10% discrepancy is considered normal. Above 20% requires investigation.<br><br>
<strong>Common causes:</strong>
<ul>
  <li><strong>Counting difference:</strong> ad server counts when the ad is requested; publisher counts when it's rendered</li>
  <li><strong>Tag latency:</strong> user closes page before the ad server tag registers</li>
  <li><strong>Ad blockers:</strong> block the ad server tag but publisher already served the ad</li>
  <li><strong>Timezone:</strong> ad server and publisher in different timezones report different days</li>
  <li><strong>Poorly implemented tag:</strong> publisher duplicated or omitted part of the tag</li>
</ul>
<strong>How to communicate to client:</strong>
<ol>
  <li>Explain that discrepancies are normal and expected in the industry</li>
  <li>Present the % discrepancy (e.g. 8% = within expected)</li>
  <li>Inform which number is the source of truth for billing (usually the ad server)</li>
  <li>If above threshold, report what is being investigated</li>
</ol>
<strong>Source of truth:</strong> in contracts with CM360 as ad server, the CM360 number is official for billing.`,
            es: `Las discrepancias entre ad server y publisher son normales — el problema es cuando superan el umbral aceptable.<br><br>
<strong>Umbral estándar de la industria:</strong> hasta ~10% de discrepancia se considera normal. Más del 20% requiere investigación.<br><br>
<strong>Causas comunes:</strong>
<ul>
  <li><strong>Diferencia de conteo:</strong> ad server cuenta cuando el anuncio es solicitado; publisher cuenta cuando se renderiza</li>
  <li><strong>Latencia de tag:</strong> usuario cierra la página antes de que la tag del ad server registre</li>
  <li><strong>Ad blockers:</strong> bloquean la tag del ad server pero el publisher ya sirvió el anuncio</li>
  <li><strong>Zona horaria:</strong> ad server y publisher en zonas horarias distintas reportan días diferentes</li>
  <li><strong>Tag mal implementada:</strong> publisher duplicó u omitió parte de la tag</li>
</ul>
<strong>Cómo comunicar al cliente:</strong>
<ol>
  <li>Explicar que las discrepancias son normales y esperadas en la industria</li>
  <li>Presentar el % de discrepancia (ej: 8% = dentro de lo esperado)</li>
  <li>Informar qué número es la fuente de verdad para facturación (generalmente el ad server)</li>
  <li>Si está por encima del umbral, reportar qué se está investigando</li>
</ol>
<strong>Fuente de verdad:</strong> en contratos con CM360 como ad server, el número de CM360 es el oficial para facturación.`,
          },
          tags: ['discrepância', 'publisher', 'ad-server', 'billing', 'cliente'],
        },
      ],
    },
    {
      id: 'hard',
      questions: [
        {
          q: {
            pt: 'Como construir e documentar um processo de onboarding de novo cliente em AdOps? Quais os elementos críticos?',
            en: 'How to build and document a new client onboarding process in AdOps? What are the critical elements?',
            es: '¿Cómo construir y documentar un proceso de onboarding de nuevo cliente en AdOps? ¿Cuáles son los elementos críticos?',
          },
          a: {
            pt: `<strong>Onboarding de novo cliente — framework completo:</strong><br><br>
<strong>Fase 1: Discovery (semana 1)</strong>
<ul>
  <li>Kick-off com cliente: objetivos de negócio, KPIs esperados, budget anual estimado</li>
  <li>Mapeamento de plataformas: quais ad servers, DSPs e social já usam</li>
  <li>Acesso e permissões: solicitar acesso às contas existentes (CM360, DV360, Meta BM)</li>
  <li>Auditoria de conta: verificar estrutura, histórico de campanhas, naming, pixels</li>
</ul>
<strong>Fase 2: Setup (semanas 2-3)</strong>
<ul>
  <li>Definir e documentar taxonomia de nomenclatura</li>
  <li>Validar/criar Floodlights e pixels de conversão</li>
  <li>Configurar brand safety: blocklists, sensitive categories</li>
  <li>Criar audiences de 1st party (remarketing, customer match)</li>
  <li>Definir template de Trafficking Sheet</li>
  <li>Definir template de relatório e cadência de reporting</li>
</ul>
<strong>Fase 3: Piloto (semana 4)</strong>
<ul>
  <li>Campanha piloto pequena para validar fluxo end-to-end</li>
  <li>QA duplo em todos os elementos</li>
  <li>Reunião de alinhamento pós-piloto</li>
</ul>
<strong>Documentação obrigatória:</strong>
<ul>
  <li>README de conta: todos os acessos, contatos do cliente, plataformas e regras específicas</li>
  <li>Taxonomia documentada e aprovada pelo cliente</li>
  <li>Mapa de Floodlights: cada activity, o que tracka, qual URL</li>
</ul>`,
            en: `<strong>New client onboarding — complete framework:</strong><br><br>
<strong>Phase 1: Discovery (week 1)</strong>
<ul>
  <li>Kick-off with client: business objectives, expected KPIs, estimated annual budget</li>
  <li>Platform mapping: which ad servers, DSPs and social they already use</li>
  <li>Access and permissions: request access to existing accounts (CM360, DV360, Meta BM)</li>
  <li>Account audit: check structure, campaign history, naming, pixels</li>
</ul>
<strong>Phase 2: Setup (weeks 2-3)</strong>
<ul>
  <li>Define and document naming taxonomy</li>
  <li>Validate/create Floodlights and conversion pixels</li>
  <li>Configure brand safety: blocklists, sensitive categories</li>
  <li>Create 1st party audiences (remarketing, customer match)</li>
  <li>Create Trafficking Sheet template</li>
  <li>Define report template and reporting cadence</li>
</ul>
<strong>Phase 3: Pilot (week 4)</strong>
<ul>
  <li>Small pilot campaign to validate end-to-end flow</li>
  <li>Double QA on all elements</li>
  <li>Post-pilot alignment meeting</li>
</ul>
<strong>Required documentation:</strong>
<ul>
  <li>Account README: all accesses, client contacts, platforms and specific rules</li>
  <li>Taxonomy documented and approved by client</li>
  <li>Floodlight map: each activity, what it tracks, which URL</li>
</ul>`,
            es: `<strong>Onboarding de nuevo cliente — framework completo:</strong><br><br>
<strong>Fase 1: Discovery (semana 1)</strong>
<ul>
  <li>Kick-off con cliente: objetivos de negocio, KPIs esperados, presupuesto anual estimado</li>
  <li>Mapeo de plataformas: qué ad servers, DSPs y social ya usan</li>
  <li>Accesos y permisos: solicitar acceso a cuentas existentes (CM360, DV360, Meta BM)</li>
  <li>Auditoría de cuenta: verificar estructura, historial de campañas, naming, pixels</li>
</ul>
<strong>Fase 2: Setup (semanas 2-3)</strong>
<ul>
  <li>Definir y documentar taxonomía de nomenclatura</li>
  <li>Validar/crear Floodlights y pixels de conversión</li>
  <li>Configurar brand safety: blocklists, categorías sensibles</li>
  <li>Crear audiencias de 1st party (remarketing, customer match)</li>
  <li>Crear template de Trafficking Sheet</li>
  <li>Definir template de reporte y cadencia de reporting</li>
</ul>
<strong>Fase 3: Piloto (semana 4)</strong>
<ul>
  <li>Campaña piloto pequeña para validar el flujo end-to-end</li>
  <li>QA doble en todos los elementos</li>
  <li>Reunión de alineación post-piloto</li>
</ul>
<strong>Documentación obligatoria:</strong>
<ul>
  <li>README de cuenta: todos los accesos, contactos del cliente, plataformas y reglas específicas</li>
  <li>Taxonomía documentada y aprobada por el cliente</li>
  <li>Mapa de Floodlights: cada activity, qué trackea, qué URL</li>
</ul>`,
          },
          tags: ['onboarding', 'cliente', 'setup', 'documentação', 'processo'],
        },
        {
          q: {
            pt: 'Como você avaliaria e proporia melhorias no processo de AdOps de uma agência que você acabou de entrar?',
            en: 'How would you evaluate and propose improvements to the AdOps process at an agency you just joined?',
            es: '¿Cómo evaluarías y propondrías mejoras al proceso de AdOps de una agencia a la que acabas de entrar?',
          },
          a: {
            pt: `<strong>Framework de diagnóstico e melhoria de processo:</strong><br><br>
<strong>1. Mapeamento (primeiros 30 dias — observar, não mudar)</strong>
<ul>
  <li>Documentar o fluxo atual end-to-end: como uma campanha passa desde o briefing até o relatório final</li>
  <li>Identificar onde estão os gargalos: onde o time perde mais tempo? Onde ocorrem mais erros?</li>
  <li>Entrevistar os colegas: quais as principais dores e quais "gambiarras" já existem</li>
</ul>
<strong>2. Auditoria de ferramentas e templates</strong>
<ul>
  <li>Existe Trafficking Sheet padronizada? Se não, é a primeira melhoria</li>
  <li>QA checklist formal existe? Se não, criar é ganho imediato</li>
  <li>Taxonomia está documentada e seguida? Inconsistências = problema de dados</li>
  <li>Relatório é feito manualmente? Automatizar via Looker Studio ou scripts economiza horas/semana</li>
</ul>
<strong>3. Priorizar por impacto × esforço</strong>
<ul>
  <li><strong>Quick wins (fazer primeiro):</strong> checklist de QA, template de TS, taxonomia documentada</li>
  <li><strong>Médio prazo:</strong> automação de relatórios, biblioteca de criativos, processo de onboarding</li>
  <li><strong>Longo prazo:</strong> integração de dados cross-plataforma, dashboards em tempo real</li>
</ul>
<strong>4. Apresentar como proposta, não como crítica</strong>
<ul>
  <li>Usar dados para embasar ("esse processo leva X horas, com esse template seria Y")</li>
  <li>Envolver o time na solução — mudança de cima pra baixo sem buy-in não funciona</li>
</ul>`,
            en: `<strong>Process diagnosis and improvement framework:</strong><br><br>
<strong>1. Mapping (first 30 days — observe, don't change)</strong>
<ul>
  <li>Document the current end-to-end flow: how a campaign moves from briefing to final report</li>
  <li>Identify bottlenecks: where does the team lose the most time? Where do most errors occur?</li>
  <li>Interview colleagues: what are the main pain points and what workarounds already exist</li>
</ul>
<strong>2. Tools and templates audit</strong>
<ul>
  <li>Is there a standardized Trafficking Sheet? If not, that's the first improvement</li>
  <li>Does a formal QA checklist exist? Creating one is an immediate gain</li>
  <li>Is taxonomy documented and followed? Inconsistencies = data problems</li>
  <li>Is reporting done manually? Automating via Looker Studio or scripts saves hours/week</li>
</ul>
<strong>3. Prioritize by impact × effort</strong>
<ul>
  <li><strong>Quick wins (do first):</strong> QA checklist, TS template, documented taxonomy</li>
  <li><strong>Medium term:</strong> report automation, creative library, onboarding process</li>
  <li><strong>Long term:</strong> cross-platform data integration, real-time dashboards</li>
</ul>
<strong>4. Present as a proposal, not a criticism</strong>
<ul>
  <li>Use data to support ("this process takes X hours, with this template it would be Y")</li>
  <li>Involve the team in the solution — top-down change without buy-in doesn't work</li>
</ul>`,
            es: `<strong>Framework de diagnóstico y mejora de proceso:</strong><br><br>
<strong>1. Mapeo (primeros 30 días — observar, no cambiar)</strong>
<ul>
  <li>Documentar el flujo actual end-to-end: cómo pasa una campaña desde el briefing hasta el reporte final</li>
  <li>Identificar cuellos de botella: ¿dónde pierde más tiempo el equipo? ¿Dónde ocurren más errores?</li>
  <li>Entrevistar colegas: cuáles son los principales dolores y qué "soluciones provisorias" ya existen</li>
</ul>
<strong>2. Auditoría de herramientas y templates</strong>
<ul>
  <li>¿Existe Trafficking Sheet estandarizada? Si no, es la primera mejora</li>
  <li>¿Existe checklist formal de QA? Crearlo es una ganancia inmediata</li>
  <li>¿La taxonomía está documentada y se sigue? Inconsistencias = problema de datos</li>
  <li>¿El reporte se hace manualmente? Automatizar via Looker Studio o scripts ahorra horas/semana</li>
</ul>
<strong>3. Priorizar por impacto × esfuerzo</strong>
<ul>
  <li><strong>Quick wins (hacer primero):</strong> checklist de QA, template de TS, taxonomía documentada</li>
  <li><strong>Mediano plazo:</strong> automatización de reportes, biblioteca de creativos, proceso de onboarding</li>
  <li><strong>Largo plazo:</strong> integración de datos cross-plataforma, dashboards en tiempo real</li>
</ul>
<strong>4. Presentar como propuesta, no como crítica</strong>
<ul>
  <li>Usar datos para fundamentar ("este proceso toma X horas, con este template serían Y")</li>
  <li>Involucrar al equipo en la solución — el cambio de arriba hacia abajo sin buy-in no funciona</li>
</ul>`,
          },
          tags: ['processo', 'melhoria', 'agência', 'diagnóstico', 'liderança'],
        },
      ],
    },
  ],
};

// ── APPEND: Looker Studio, BigQuery, Influencer tracking ──
window.__adopsData['ops'].tiers[1].questions.push(
  {
    q: { pt: 'Como construir um dashboard de campanhas no Looker Studio conectado ao CM360, GA4 e planilhas?', en: 'How to build a campaign dashboard in Looker Studio connected to CM360, GA4 and spreadsheets?', es: '¿Cómo construir un dashboard de campañas en Looker Studio conectado a CM360, GA4 y hojas de cálculo?' },
    a: {
      pt: `O <strong>Looker Studio</strong> (antigo Google Data Studio) é a ferramenta gratuita do Google para criar dashboards interativos conectados a múltiplas fontes de dados.<br><br>
<strong>Conectores nativos úteis para AdOps:</strong>
<ul>
  <li><strong>Campaign Manager 360:</strong> conector nativo — conecta impressões, cliques, conversões Floodlight diretamente</li>
  <li><strong>Google Analytics 4:</strong> conector nativo — sessões, conversões, receita por fonte</li>
  <li><strong>Google Ads:</strong> conector nativo — custo, cliques, conversões, Quality Score</li>
  <li><strong>DV360:</strong> conector nativo — impressões, viewability, budget</li>
  <li><strong>Google Sheets:</strong> conector nativo — alimentar com dados manuais de plataformas sem conector (Meta, TikTok)</li>
  <li><strong>BigQuery:</strong> conector nativo — para dashboards com grande volume de dados ou transformações complexas</li>
</ul>
<strong>Como criar o dashboard:</strong>
<ol>
  <li>Acesse <code>lookerstudio.google.com</code> → Criar → Relatório</li>
  <li>Adicionar fonte de dados: selecione o conector (CM360, GA4, etc.) e autorize</li>
  <li>Criar páginas por tema: Visão Geral, Entrega por Canal, Performance por Criativo, Conversões</li>
  <li>Adicionar componentes: tabelas, gráficos de linha/barra/pizza, scorecards (número único), filtros de data</li>
  <li>Configurar filtros interativos: por campanha, período, canal, formato</li>
  <li>Misturar fontes: um dashboard pode ter uma tabela do CM360 e um gráfico do GA4 na mesma página</li>
</ol>
<strong>Boas práticas para dashboards de AdOps:</strong>
<ul>
  <li>Página 1 — Scorecard executivo: impressões, cliques, conversões, CTR, CPA, budget gasto vs. planejado</li>
  <li>Página 2 — Entrega: pace diário, entrega por veículo, discrepância CM360 vs. veículo</li>
  <li>Página 3 — Performance: métricas por campanha/linha, breakdown por device/formato/geo</li>
  <li>Usar blended data para combinar custo do Google Ads com receita do GA4 no mesmo gráfico</li>
  <li>Agendar envio automático de email do dashboard para clientes (Compartilhar → Programar entrega)</li>
</ul>
<strong>Para plataformas sem conector nativo (Meta, TikTok, LinkedIn):</strong>
<ul>
  <li>Exportar dados manualmente para Google Sheets → conectar Sheets ao Looker Studio</li>
  <li>Ou usar conectores de terceiros: Supermetrics, Power My Analytics, windsor.ai (pagos)</li>
</ul>`,
      en: `<strong>Looker Studio</strong> (formerly Google Data Studio) is Google's free tool for creating interactive dashboards connected to multiple data sources.<br><br>
<strong>Useful native connectors for AdOps:</strong>
<ul>
  <li><strong>Campaign Manager 360, Google Analytics 4, Google Ads, DV360, Google Sheets, BigQuery</strong> — all native</li>
</ul>
<strong>How to create the dashboard:</strong>
<ol>
  <li>Access <code>lookerstudio.google.com</code> → Create → Report</li>
  <li>Add data source: select connector (CM360, GA4, etc.) and authorize</li>
  <li>Create pages by theme: Overview, Delivery by Channel, Creative Performance, Conversions</li>
  <li>Add components: tables, line/bar/pie charts, scorecards, date filters</li>
  <li>Configure interactive filters: by campaign, period, channel, format</li>
</ol>
<strong>AdOps dashboard best practices:</strong>
<ul>
  <li>Page 1 — Executive scorecard: impressions, clicks, conversions, CTR, CPA, budget spent vs. planned</li>
  <li>Page 2 — Delivery: daily pace, delivery by publisher, CM360 vs. publisher discrepancy</li>
  <li>Page 3 — Performance: metrics by campaign/line, breakdown by device/format/geo</li>
  <li>Schedule automatic email delivery of dashboard to clients</li>
</ul>
<strong>For platforms without native connector (Meta, TikTok, LinkedIn):</strong>
<ul>
  <li>Export data manually to Google Sheets → connect Sheets to Looker Studio</li>
  <li>Or use third-party connectors: Supermetrics, Power My Analytics, windsor.ai (paid)</li>
</ul>`,
      es: `<strong>Looker Studio</strong> (antes Google Data Studio) es la herramienta gratuita de Google para crear dashboards interactivos conectados a múltiples fuentes de datos.<br><br>
<strong>Conectores nativos útiles para AdOps:</strong> Campaign Manager 360, Google Analytics 4, Google Ads, DV360, Google Sheets, BigQuery — todos nativos.<br><br>
<strong>Cómo crear el dashboard:</strong>
<ol>
  <li>Accede a <code>lookerstudio.google.com</code> → Crear → Informe</li>
  <li>Agregar fuente de datos: selecciona el conector y autoriza</li>
  <li>Crear páginas por tema: Visión General, Entrega por Canal, Performance por Creativo, Conversiones</li>
  <li>Agregar componentes: tablas, gráficos, scorecards, filtros de fecha</li>
</ol>
<strong>Buenas prácticas para dashboards de AdOps:</strong>
<ul>
  <li>Página 1 — Scorecard ejecutivo: impresiones, clics, conversiones, CTR, CPA, presupuesto gastado vs. planificado</li>
  <li>Página 2 — Entrega: ritmo diario, entrega por medio, discrepancia CM360 vs. medio</li>
  <li>Página 3 — Performance: métricas por campaña, breakdown por dispositivo/formato/geo</li>
  <li>Programar envío automático de email del dashboard a clientes</li>
</ul>`,
    },
    tags: ['Looker-Studio', 'dashboard', 'CM360', 'GA4', 'BigQuery', 'Supermetrics', 'reporting'],
  },
  {
    q: { pt: 'Como rastrear e mensurar campanhas de Influencer Marketing?', en: 'How to track and measure Influencer Marketing campaigns?', es: '¿Cómo rastrear y medir campañas de Influencer Marketing?' },
    a: {
      pt: `Influencer Marketing apresenta desafios únicos de mensuração — o conteúdo acontece em plataformas que não pertencem ao anunciante, com audiências que o criador não compartilha diretamente.<br><br>
<strong>Métodos de rastreamento de influencer:</strong>
<ul>
  <li><strong>UTM Links únicos por criador:</strong> cada influencer recebe um link com UTMs específicos (utm_source=influencer_nome, utm_medium=instagram, utm_campaign=lancamento). Permite rastrear tráfego e conversões por criador no GA4.</li>
  <li><strong>Códigos de desconto únicos:</strong> cada criador divulga um código próprio (NOME10). Rastreado diretamente no e-commerce. Desvantagem: só captura quem usa o código na hora — subestima o impacto.</li>
  <li><strong>Link na bio / Link tree:</strong> links rastreáveis na bio do Instagram. Ferramentas: Linktree, Milkshake, ou link direto com UTM.</li>
  <li><strong>Pixel de Branded Content:</strong> Meta permite que anunciantes adicionem seu Pixel ao conteúdo patrocinado do influencer — o influencer marca a publicação como "parceria paga" e o anunciante acessa os dados de conversão via Meta Ads Manager.</li>
  <li><strong>Collab Posts (Meta):</strong> post criado em co-autoria com o influencer — aparece no perfil dele E no da marca. O anunciante tem acesso a todas as métricas.</li>
</ul>
<strong>Métricas de Influencer Marketing:</strong>
<ul>
  <li><strong>Reach:</strong> quantas pessoas únicas viram o conteúdo</li>
  <li><strong>Impressões:</strong> total de vezes que o conteúdo foi exibido (inclui múltiplas visualizações)</li>
  <li><strong>Engagement Rate:</strong> (curtidas + comentários + salvamentos + shares) ÷ alcance × 100. Benchmark: &gt;3% é bom, &gt;6% é excelente</li>
  <li><strong>CPV (Custo Por View):</strong> cachê do influencer ÷ views do vídeo</li>
  <li><strong>CPE (Custo Por Engajamento):</strong> cachê ÷ interações totais</li>
  <li><strong>Conversões rastreadas:</strong> sessões, leads e vendas vindas dos links UTM ou códigos do influencer</li>
  <li><strong>EMV (Earned Media Value):</strong> estimativa do valor equivalente em mídia paga para o alcance obtido organicamente</li>
</ul>
<strong>Plataformas de gestão de influencer:</strong>
<ul>
  <li>Brasil: Squid, HypeAuditor, Influency.me, Cadastra Influence</li>
  <li>Global: Creator.co, Grin, AspireIQ, Sprout Social</li>
</ul>`,
      en: `Influencer Marketing presents unique measurement challenges — content happens on platforms not owned by the advertiser, with audiences the creator doesn't share directly.<br><br>
<strong>Influencer tracking methods:</strong>
<ul>
  <li><strong>Unique UTM links per creator:</strong> each influencer gets a link with specific UTMs. Tracks traffic and conversions per creator in GA4.</li>
  <li><strong>Unique discount codes:</strong> each creator promotes their own code. Tracked directly in e-commerce. Downside: only captures those who use code immediately.</li>
  <li><strong>Pixel in Branded Content:</strong> Meta allows advertisers to add their Pixel to sponsored influencer content — influencer marks post as "paid partnership" and advertiser accesses conversion data via Meta Ads Manager.</li>
  <li><strong>Collab Posts (Meta):</strong> post co-authored with influencer — appears on their profile AND the brand's. Advertiser has access to all metrics.</li>
</ul>
<strong>Influencer Marketing metrics:</strong>
<ul>
  <li><strong>Reach, Impressions, Engagement Rate</strong> (benchmark: &gt;3% good, &gt;6% excellent)</li>
  <li><strong>CPV (Cost Per View), CPE (Cost Per Engagement)</strong></li>
  <li><strong>Tracked conversions:</strong> sessions, leads and sales from UTM links or influencer codes</li>
  <li><strong>EMV (Earned Media Value):</strong> estimated equivalent value in paid media for organically obtained reach</li>
</ul>`,
      es: `El Influencer Marketing presenta desafíos únicos de medición — el contenido ocurre en plataformas que no pertenecen al anunciante.<br><br>
<strong>Métodos de rastreo de influencer:</strong>
<ul>
  <li><strong>Links UTM únicos por creador:</strong> cada influencer recibe un link con UTMs específicos. Permite rastrear tráfico y conversiones por creador en GA4.</li>
  <li><strong>Códigos de descuento únicos:</strong> cada creador divulga su propio código. Rastreado directamente en el e-commerce.</li>
  <li><strong>Pixel en Branded Content:</strong> Meta permite que los anunciantes añadan su Píxel al contenido patrocinado del influencer.</li>
  <li><strong>Collab Posts (Meta):</strong> post en co-autoría con el influencer — el anunciante tiene acceso a todas las métricas.</li>
</ul>
<strong>Métricas de Influencer Marketing:</strong>
<ul>
  <li><strong>Reach, Impressiones, Engagement Rate</strong> (benchmark: &gt;3% bueno, &gt;6% excelente)</li>
  <li><strong>CPV, CPE, Conversiones rastreadas, EMV (Earned Media Value)</strong></li>
</ul>`,
    },
    tags: ['influencer', 'UTM', 'Pixel', 'Branded-Content', 'EMV', 'engagement-rate', 'Squid', 'rastreamento'],
  }
);

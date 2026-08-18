// ── CONFIG ──────────────────────────────────────────────
const PLATFORMS = [
  { id: 'cm360',    label: 'CM360',       icon: '📊', file: 'data/cm360.js'    },
  { id: 'dv360',    label: 'DV360',       icon: '🎯', file: 'data/dv360.js'    },
  { id: 'meta',     label: 'Meta',        icon: '📘', file: 'data/meta.js'     },
  { id: 'gtm',      label: 'GTM/GA4',     icon: '🏷️', file: 'data/gtm.js'    },
  { id: 'tiktok',   label: 'TikTok',      icon: '🎵', file: 'data/tiktok.js'  },
  { id: 'snap',     label: 'Snap',        icon: '👻', file: 'data/snap.js'    },
  { id: 'ttd',      label: 'TTD',         icon: '🔵', file: 'data/ttd.js'     },
  { id: 'linkedin', label: 'LinkedIn',    icon: '💼', file: 'data/linkedin.js' },
  { id: 'googleads',label: 'Google Ads',  icon: '🔍', file: 'data/googleads.js'},
  { id: 'programatico', label: 'Programático', icon: '🤖', file: 'data/programatico.js' },
  { id: 'amazon',    label: 'Amazon Ads',  icon: '📦', file: 'data/amazon.js'    },
  { id: 'atribuicao',label: 'Atribuição',  icon: '📐', file: 'data/atribuicao.js' },
  { id: 'privacidade', label: 'Privacidade',   icon: '🔒', file: 'data/privacidade.js' },
  { id: 'ctv',         label: 'CTV & TV',      icon: '📺', file: 'data/ctv.js'         },
  { id: 'fundamentos', label: 'Fundamentos',   icon: '🎓', file: 'data/fundamentos.js' },
  { id: 'ops',         label: 'Operacional',   icon: '⚙️', file: 'data/ops.js'         },
];

const I18N = {
  pt: { answerLabel:'Resposta modelo', expand:'▼ Expandir tudo', collapse:'▲ Fechar tudo', loading:'Carregando...', easy:'🟢 Básico', mid:'🟡 Intermediário', hard:'🔴 Avançado', ops:'🔵 Processos', searchPlaceholder:'Buscar em todas as plataformas...', searchResults:'resultados em', noResults:'Nenhum resultado para', allPlatforms:'todas as plataformas' },
  en: { answerLabel:'Model answer',    expand:'▼ Expand all',    collapse:'▲ Collapse all',  loading:'Loading...',    easy:'🟢 Basic',    mid:'🟡 Intermediate', hard:'🔴 Advanced',  ops:'🔵 Processes',  searchPlaceholder:'Search across all platforms...', searchResults:'results in', noResults:'No results for', allPlatforms:'all platforms' },
  es: { answerLabel:'Respuesta modelo',expand:'▼ Expandir todo', collapse:'▲ Colapsar todo', loading:'Cargando...',   easy:'🟢 Básico',   mid:'🟡 Intermedio',   hard:'🔴 Avanzado',  ops:'🔵 Procesos',   searchPlaceholder:'Buscar en todas las plataformas...', searchResults:'resultados en', noResults:'Sin resultados para', allPlatforms:'todas las plataformas' },
};

// ── STATE ────────────────────────────────────────────────
let lang = 'pt';
let currentPlatform = PLATFORMS[0].id;
const loadedModules = {};
let searchTimeout = null;
let isSearchActive = false;

// ── BOOT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  loadPlatform(PLATFORMS[0].id);
  PLATFORMS.forEach(p => loadModuleData(p.id));
  updateStats();
});

// ── STATS ────────────────────────────────────────────────
function updateStats() {
  const pEl = document.getElementById('stat-platforms');
  const qEl = document.getElementById('stat-questions');
  if (pEl) pEl.textContent = PLATFORMS.length;
  setTimeout(() => {
    let total = 0;
    PLATFORMS.forEach(p => {
      const d = loadedModules[p.id];
      if (d) d.tiers.forEach(t => { total += t.questions.length; });
    });
    if (qEl && total > 0) qEl.textContent = total + '+';
  }, 3500);
}

// ── NAV ─────────────────────────────────────────────────
function buildNav() {
  const nav = document.getElementById('platform-nav');
  PLATFORMS.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'nav-item' + (p.id === currentPlatform ? ' active' : '');
    btn.id = 'nav-' + p.id;
    btn.innerHTML = `<span>${p.icon}</span> ${p.label}`;
    btn.onclick = () => { clearSearch(); switchPlatform(p.id, btn); };
    nav.appendChild(btn);
  });
}

function switchPlatform(id, btn) {
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentPlatform = id;
  loadPlatform(id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── SEARCH ────────────────────────────────────────────────
function onSearchInput(val) {
  clearTimeout(searchTimeout);
  document.getElementById('search-clear').style.display = val ? 'block' : 'none';
  if (!val.trim()) { clearSearch(); return; }
  searchTimeout = setTimeout(() => runSearch(val.trim()), 220);
}

function clearSearch() {
  const input  = document.getElementById('search-input');
  const clear  = document.getElementById('search-clear');
  const status = document.getElementById('search-status');
  if (input)  input.value = '';
  if (clear)  clear.style.display = 'none';
  if (status) { status.innerHTML = ''; status.classList.remove('visible'); }
  isSearchActive = false;
  const main = document.getElementById('main-content');
  if (loadedModules[currentPlatform]) renderPlatform(main, loadedModules[currentPlatform]);
}

function runSearch(query) {
  isSearchActive = true;
  const q = query.toLowerCase();
  const results = [];
  PLATFORMS.forEach(p => {
    const data = loadedModules[p.id];
    if (!data) return;
    data.tiers.forEach(tier => {
      tier.questions.forEach((question, qi) => {
        const qText = (question.q[lang] || '').toLowerCase();
        const aText = stripHtml(question.a[lang] || '').toLowerCase();
        const tags  = (question.tags || []).join(' ').toLowerCase();
        if (qText.includes(q) || aText.includes(q) || tags.includes(q)) {
          results.push({ platform: p, tier, question, qi });
        }
      });
    });
  });
  renderSearchResults(results, query);
}

function renderSearchResults(results, query) {
  const main   = document.getElementById('main-content');
  const status = document.getElementById('search-status');
  const t = I18N[lang];
  const byPlatform = {};
  results.forEach(r => {
    if (!byPlatform[r.platform.id]) byPlatform[r.platform.id] = { platform: r.platform, items: [] };
    byPlatform[r.platform.id].items.push(r);
  });
  const platformCount = Object.keys(byPlatform).length;
  status.classList.add('visible');
  if (results.length === 0) {
    status.innerHTML = `<span class="status-none">${t.noResults} "<strong>${query}</strong>"</span>`;
    main.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><p>${t.noResults} "<strong>${query}</strong>"</p></div>`;
    return;
  }
  status.innerHTML = `<span class="status-count"><strong>${results.length}</strong> ${t.searchResults} <strong>${platformCount}</strong> ${platformCount === 1 ? PLATFORMS.find(p=>p.id===Object.keys(byPlatform)[0]).label : t.allPlatforms}</span>`;
  const badgeClasses = { easy:'badge-easy', mid:'badge-mid', hard:'badge-hard', ops:'badge-ops' };
  let html = '';
  Object.values(byPlatform).forEach(group => {
    html += `<div class="search-platform-group">
      <div class="search-platform-label" onclick="clearSearch();switchPlatform('${group.platform.id}',document.getElementById('nav-${group.platform.id}'))">
        <span>${group.platform.icon}</span> ${group.platform.label}
        <span class="search-platform-count">${group.items.length}</span>
      </div>`;
    group.items.forEach(({ tier, question, qi }) => {
      const num = String(qi + 1).padStart(2, '0');
      html += `
        <div class="q-card open" onclick="toggleQ(this)">
          <button class="q-trigger">
            <span class="q-num">${num}</span>
            <span class="q-text">${highlight(question.q[lang], query)}</span>
            <span class="q-badge ${badgeClasses[tier.id] || 'badge-easy'}">${tier.id}</span>
            <span class="q-arrow">▼</span>
          </button>
          <div class="q-body" style="display:block">
            <div class="q-answer-label">${t.answerLabel}</div>
            <div class="q-answer">${highlight(question.a[lang], query)}</div>
            <div class="q-tags">${(question.tags||[]).map(tag=>`<span class="q-tag">${tag}</span>`).join('')}</div>
          </div>
        </div>`;
    });
    html += `</div>`;
  });
  main.innerHTML = html;
}

// ── HELPERS ──────────────────────────────────────────────
function highlight(text, query) {
  if (!query || !text) return text;
  return text.replace(new RegExp(`(${escapeRegex(query)})`, 'gi'), '<mark class="hl">$1</mark>');
}
function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function stripHtml(html) { return html.replace(/<[^>]*>/g, ' '); }

// ── LOAD MODULE ──────────────────────────────────────────
function loadPlatform(id) {
  const main = document.getElementById('main-content');
  if (loadedModules[id]) { renderPlatform(main, loadedModules[id]); return; }
  main.innerHTML = `<div class="loading"><div class="loading-spinner"></div><p>${I18N[lang].loading}</p></div>`;
  loadModuleData(id, () => renderPlatform(main, loadedModules[id]));
}

function loadModuleData(id, callback) {
  if (loadedModules[id]) { if (callback) callback(); return; }
  const script = document.createElement('script');
  script.src = PLATFORMS.find(p => p.id === id).file + '?v=4';
  script.onload = () => {
    if (window.__adopsData && window.__adopsData[id]) loadedModules[id] = window.__adopsData[id];
    if (callback) callback();
  };
  document.head.appendChild(script);
}

// ── RENDER ───────────────────────────────────────────────
function renderPlatform(container, data) {
  const t = I18N[lang];
  const tierClasses  = { easy:'tier-easy', mid:'tier-mid', hard:'tier-hard', ops:'tier-ops' };
  const badgeClasses = { easy:'badge-easy', mid:'badge-mid', hard:'badge-hard', ops:'badge-ops' };
  let html = `
    <div class="platform-header">
      <div class="platform-icon">${data.icon}</div>
      <div>
        <div class="platform-name">${data.name[lang]}</div>
        <div class="platform-desc">${data.desc[lang]}</div>
      </div>
    </div>`;
  data.tiers.forEach(tier => {
    html += `<div class="tier-block">
      <div class="tier-title ${tierClasses[tier.id] || 'tier-easy'}">${t[tier.id] || tier.id}</div>`;
    tier.questions.forEach((q, i) => {
      const num = String(i + 1).padStart(2, '0');
      html += `
        <div class="q-card" onclick="toggleQ(this)">
          <button class="q-trigger">
            <span class="q-num">${num}</span>
            <span class="q-text">${q.q[lang]}</span>
            <span class="q-badge ${badgeClasses[tier.id] || 'badge-easy'}">${tier.id}</span>
            <span class="q-arrow">▼</span>
          </button>
          <div class="q-body">
            <div class="q-answer-label">${t.answerLabel}</div>
            <div class="q-answer">${q.a[lang]}</div>
            <div class="q-tags">${(q.tags||[]).map(tag=>`<span class="q-tag">${tag}</span>`).join('')}</div>
          </div>
        </div>`;
    });
    html += `</div>`;
  });
  container.innerHTML = html;
}

// ── LANG ─────────────────────────────────────────────────
function setLang(newLang) {
  lang = newLang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.getElementById('btn-expand').textContent   = I18N[lang].expand;
  document.getElementById('btn-collapse').textContent = I18N[lang].collapse;
  document.querySelectorAll('.kit-subtitle span').forEach(el => {
    el.style.display = el.dataset.lang === lang ? '' : 'none';
  });
  const input = document.getElementById('search-input');
  if (input) input.placeholder = I18N[lang].searchPlaceholder;
  if (isSearchActive) {
    const val = input ? input.value : '';
    if (val) runSearch(val);
  } else {
    const main = document.getElementById('main-content');
    if (loadedModules[currentPlatform]) renderPlatform(main, loadedModules[currentPlatform]);
  }
}

// ── ACCORDION ────────────────────────────────────────────
function toggleQ(card) { card.classList.toggle('open'); }
function expandAll()   { document.querySelectorAll('#main-content .q-card').forEach(c => c.classList.add('open')); }
function collapseAll() { document.querySelectorAll('#main-content .q-card').forEach(c => c.classList.remove('open')); }

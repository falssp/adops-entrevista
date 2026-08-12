// ── CONFIG ──────────────────────────────────────────────
const PLATFORMS = [
  { id: 'cm360',  label: 'CM360',      icon: '📊', file: 'data/cm360.js'  },
  { id: 'dv360',  label: 'DV360',      icon: '🎯', file: 'data/dv360.js'  },
  { id: 'meta',   label: 'Meta',       icon: '📘', file: 'data/meta.js'   },
  { id: 'gtm',    label: 'GTM/GA4',    icon: '🏷️', file: 'data/gtm.js'   },
  { id: 'tiktok', label: 'TikTok',     icon: '🎵', file: 'data/tiktok.js' },
  { id: 'snap',   label: 'Snap',       icon: '👻', file: 'data/snap.js'   },
  { id: 'ttd',    label: 'TTD',        icon: '🔮', file: 'data/ttd.js'    },
  { id: 'ops',    label: 'Operacional',icon: '⚙️', file: 'data/ops.js'   },
];

const I18N = {
  pt: { answerLabel:'Resposta modelo', expand:'▼ Expandir tudo', collapse:'▲ Fechar tudo', loading:'Carregando...', easy:'🟢 Básico', mid:'🟡 Intermediário', hard:'🔴 Avançado', ops:'🔵 Processos' },
  en: { answerLabel:'Model answer',    expand:'▼ Expand all',    collapse:'▲ Collapse all',  loading:'Loading...',    easy:'🟢 Basic',    mid:'🟡 Intermediate', hard:'🔴 Advanced',  ops:'🔵 Processes' },
  es: { answerLabel:'Respuesta modelo',expand:'▼ Expandir todo', collapse:'▲ Colapsar todo', loading:'Cargando...',   easy:'🟢 Básico',   mid:'🟡 Intermedio',   hard:'🔴 Avanzado',  ops:'🔵 Procesos'  },
};

// ── STATE ────────────────────────────────────────────────
let lang = 'pt';
let currentPlatform = PLATFORMS[0].id;
const loadedModules = {}; // cache: id → data

// ── BOOT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  loadPlatform(PLATFORMS[0].id);
});

// ── NAV ─────────────────────────────────────────────────
function buildNav() {
  const nav = document.getElementById('platform-nav');
  PLATFORMS.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'nav-item' + (p.id === currentPlatform ? ' active' : '');
    btn.innerHTML = `<span>${p.icon}</span> ${p.label}`;
    btn.onclick = () => switchPlatform(p.id, btn);
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

// ── LOAD MODULE ──────────────────────────────────────────
function loadPlatform(id) {
  const main = document.getElementById('main-content');

  if (loadedModules[id]) {
    renderPlatform(main, loadedModules[id]);
    return;
  }

  main.innerHTML = `<div class="loading"><div class="loading-spinner"></div><p>${I18N[lang].loading}</p></div>`;

  const script = document.createElement('script');
  script.src = PLATFORMS.find(p => p.id === id).file + '?v=1';
  script.onload = () => {
    if (window.__adopsData && window.__adopsData[id]) {
      loadedModules[id] = window.__adopsData[id];
      renderPlatform(main, loadedModules[id]);
    }
  };
  script.onerror = () => {
    main.innerHTML = `<div class="loading"><p>❌ Módulo não encontrado: ${id}.js</p></div>`;
  };
  document.head.appendChild(script);
}

// ── RENDER ───────────────────────────────────────────────
function renderPlatform(container, data) {
  const t = I18N[lang];
  const tierClasses = { easy:'tier-easy', mid:'tier-mid', hard:'tier-hard', ops:'tier-ops' };
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
    const tierLabel = t[tier.id] || tier.id;
    html += `<div class="tier-block">
      <div class="tier-title ${tierClasses[tier.id] || 'tier-easy'}">${tierLabel}</div>`;

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

// ── LANG ────────────────────────────────────────────────
function setLang(newLang) {
  lang = newLang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  // re-render current platform from cache
  const main = document.getElementById('main-content');
  if (loadedModules[currentPlatform]) {
    renderPlatform(main, loadedModules[currentPlatform]);
  }

  // update expand/collapse labels
  document.getElementById('btn-expand').textContent   = I18N[lang].expand;
  document.getElementById('btn-collapse').textContent = I18N[lang].collapse;

  // update subtitle
  document.querySelectorAll('.kit-subtitle span').forEach(el => {
    el.style.display = el.dataset.lang === lang ? '' : 'none';
  });
}

// ── ACCORDION ───────────────────────────────────────────
function toggleQ(card) {
  card.classList.toggle('open');
}

function expandAll() {
  document.querySelectorAll('#main-content .q-card').forEach(c => c.classList.add('open'));
}

function collapseAll() {
  document.querySelectorAll('#main-content .q-card').forEach(c => c.classList.remove('open'));
}

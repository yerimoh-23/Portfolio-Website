// ── Language Toggle ──
const LANG_KEY = 'portfolio-lang';

function initLang() {
  const saved = localStorage.getItem(LANG_KEY) || 'en';
  setLang(saved, false);
}

function setLang(lang, save = true) {
  if (save) localStorage.setItem(LANG_KEY, lang);
  const btn = document.getElementById('lang-toggle');
  if (lang === 'ko') {
    document.body.classList.add('ko');
    if (btn) btn.textContent = 'EN';
  } else {
    document.body.classList.remove('ko');
    if (btn) btn.textContent = '한국어';
  }
}

function toggleLang() {
  const isKo = document.body.classList.contains('ko');
  setLang(isKo ? 'en' : 'ko');
}

// ── Active Nav Link ──
function initNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Tab Switch ──
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabViews = document.querySelectorAll('.tl-view');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabViews.forEach(v => v.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initNav();
  initTabs();
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', toggleLang);
});

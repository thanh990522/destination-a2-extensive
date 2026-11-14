/* Destination A2 · 16:9 teaching slides generated from the same Unit data */
(async function () {
  'use strict';
  const A2 = window.A2, esc = A2.esc, md = A2.md, ic = A2.icon;
  const root = document.getElementById('app');
  const n = A2.unitParam();
  await A2.loadSettings();
  const lock = (t, m) => { root.innerHTML = `<div class="lock"><div class="lock-box">${ic('🔒', 'hero')}<h1>${esc(t)}</h1><p>${esc(m)}</p><a class="btn" href="index.html">← All Units</a></div></div>`; };
  if (!A2.built(n)) return lock(`Unit ${n} is coming soon`, 'These slides are still being prepared.');
  if (!A2.canOpen(n, 'slides')) return lock(`Unit ${n} slides are not open`, 'Your teacher will open the slides in class.');
  try { await A2.loadScript(`assets/data/units/u${A2.pad(n)}.js`); } catch (e) { return lock('The slides could not load', 'Please check your internet connection.'); }
  const U = window.A2_UNITS[n];
  document.title = `Slides · Unit ${n} · ${U.title}`;
  const KEY = `a2.u${n}`;
  const store = Object.assign({ ans: {}, drafts: {}, ticks: {}, scores: {} }, A2.LS.get(KEY, {}));
  const save = () => A2.LS.set(KEY, store);
  const itemsById = A2.itemsIndex(U);

  /* one card = one slide: no dividers, no splitting */
  const slides = [];
  U.stages.forEach(st => U.cards.filter(c => c.stage === st.id).forEach(c => slides.push({ card: c })));

  root.innerHTML = `
    <div class="deck-wrap"><div class="deck" id="deck" role="region" aria-roledescription="slide" aria-live="polite"></div></div>
    <nav class="deck-ui" aria-label="Slide controls">
      <a class="dbtn" href="lesson.html?u=${n}" title="Lesson view">☰ Lesson</a>
      <button class="dbtn" data-act="menu" title="All slides (M)">▦ <span id="pos"></span></button>
      <button class="dbtn" data-act="prev" title="Previous (←)">←</button>
      <button class="dbtn" data-act="next" title="Next (→)">→</button>
      <button class="dbtn" data-act="full" title="Full screen (F)">⛶</button>
    </nav>
    <div class="deck-progress"><span id="bar"></span></div>
    <div class="overview" id="overview" hidden><div class="ov-head"><b>Unit ${n} · ${esc(U.title)}</b><button class="dbtn" data-act="menu">✕ Close</button></div><div class="ov-grid">${slides.map((s, i) => {
      const st = s.divider || A2.stageOf(U, s.card.stage);
      const t = s.divider ? s.divider.name : (s.card.type === 'cover' ? U.title : s.card.title);
      return `<button class="ov-item sk-${st.skill || 'start'}" data-go="${i}"><span>${i + 1}</span>${ic(s.divider ? s.divider.icon : (s.card.icon || st.icon), 'sm')}<b>${md(t || '')}</b>${s.part ? `<small>${s.part.k}/${s.part.of}</small>` : ''}</button>`;
    }).join('')}</div></div>`;
  const deck = document.getElementById('deck');
  const q = A2.bindQuestions(deck, store, itemsById, save);
  A2.bindCommon(deck, store, save);
  let cur = Math.min(slides.length - 1, Math.max(0, (parseInt((location.hash.match(/s=(\d+)/) || [])[1], 10) || 1) - 1));

  function render() {
    const s = slides[cur];
    document.querySelectorAll('[data-player] audio').forEach(a => a.pause());
    let html, sk;
    if (s.divider) { sk = s.divider.skill; html = `<div class="slide divider-slide sk-${sk}">${A2.renderDivider(s.divider, U)}${foot()}</div>`; }
    else {
      const c = s.card; sk = A2.stageOf(U, c.stage).skill;
      html = c.type === 'cover'
        ? `<div class="slide cover-slide sk-${sk}">${A2.renderCard(c, U, 'slide')}${foot()}</div>`
        : `<div class="slide sk-${sk} type-${c.type}">${A2.cardHead(c, U, s.part)}<div class="slide-body"><div class="fit">${A2.renderCard(c, U, 'slide', s.part)}</div></div>${foot()}</div>`;
    }
    deck.innerHTML = html;
    q.restore(); A2.restoreCommon(deck, store);
    document.getElementById('pos').textContent = `${cur + 1} / ${slides.length}`;
    document.getElementById('bar').style.width = ((cur + 1) / slides.length) * 100 + '%';
    history.replaceState(null, '', `?u=${n}#s=${cur + 1}`);
    fit(); fitBody();
  }
  function fitBody() {
    const body = deck.querySelector('.slide-body'), inner = body && body.querySelector('.fit');
    if (!inner) return;
    const avail = body.clientHeight - 6;
    const set = z => { inner.style.width = (100 / z) + '%'; inner.style.transform = `scale(${z})`; };
    let z = 1.22; set(z);
    while (inner.scrollHeight * z > avail && z > 0.6) { z -= 0.02; set(z); }
  }
  function foot() { return `<footer class="slide-foot"><span>Destination A2 · Unit ${A2.pad(n)} · ${esc(U.title)}</span><span class="sf-r">Mr. Hà Chí Thanh · <b>${A2.pad(cur + 1)}</b></span></footer>`; }
  function go(i) { cur = Math.max(0, Math.min(slides.length - 1, i)); render(); }
  function fit() {
    const sc = Math.min(window.innerWidth / 1600, (window.innerHeight - 4) / 900);
    deck.style.transform = `scale(${sc})`;
    deck.parentElement.style.height = 900 * sc + 'px'; deck.parentElement.style.width = 1600 * sc + 'px';
  }
  window.addEventListener('resize', fit);
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-act]');
    if (a) {
      const act = a.dataset.act;
      if (act === 'prev') go(cur - 1); else if (act === 'next') go(cur + 1);
      else if (act === 'menu') { const o = document.getElementById('overview'); o.hidden = !o.hidden; if (!o.hidden) o.querySelector(`[data-go="${cur}"]`).focus(); }
      else if (act === 'full') { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {}); }
      return;
    }
    const g = e.target.closest('[data-go]'); if (g) { document.getElementById('overview').hidden = true; go(+g.dataset.go); }
  });
  document.addEventListener('keydown', e => {
    if (e.target.closest('input, textarea, select, [contenteditable]')) return;
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(cur + 1); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); go(cur - 1); }
    else if (e.key === 'Home') go(0); else if (e.key === 'End') go(slides.length - 1);
    else if (e.key.toLowerCase() === 'f') document.querySelector('[data-act="full"]').click();
    else if (e.key.toLowerCase() === 'm') document.querySelector('[data-act="menu"]').click();
  });
  render();
})();

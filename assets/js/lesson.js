/* Destination A2 · lesson view (one learning stage at a time) */
(async function () {
  'use strict';
  const A2 = window.A2, esc = A2.esc, md = A2.md, ic = A2.icon;
  const root = document.getElementById('app');
  const n = A2.unitParam();
  await A2.loadSettings();
  const lockScreen = (title, msg) => {
    root.innerHTML = `<div class="lock"><div class="lock-box">${ic('🔒', 'hero')}<h1>${esc(title)}</h1><p>${esc(msg)}</p><a class="btn" href="index.html">← All Units</a></div></div>`;
  };
  if (!A2.built(n)) return lockScreen(`Unit ${n} is coming soon`, 'Your teacher is still preparing this Unit.');
  if (!A2.canOpen(n, 'lesson')) return lockScreen(`Unit ${n} is not open yet`, 'Your teacher will open this lesson in class. Please check again later.');
  try { await A2.loadScript(`assets/data/units/u${A2.pad(n)}.js`); } catch (e) { return lockScreen('The lesson could not load', 'Please check your internet connection and refresh the page.'); }
  const U = window.A2_UNITS[n];
  document.title = `Unit ${n} · ${U.title} · Destination A2`;
  const KEY = `a2.u${n}`;
  const store = Object.assign({ ans: {}, drafts: {}, ticks: {}, scores: {}, stage: U.stages[0].id }, A2.LS.get(KEY, {}));
  const save = () => A2.LS.set(KEY, store);
  const itemsById = A2.itemsIndex(U);
  if (!A2.isTeacher()) { A2.ensureStudent().then(() => A2.log({ unit: n, kind: 'lesson' })); }

  const conf = A2.unitConf(n);
  const teacherNote = A2.isTeacher() && !conf.lesson ? `<div class="banner">${ic('🧑‍🏫', 'xs')} Teacher view: this lesson is closed for students.</div>` : '';
  root.innerHTML = `
  <header class="topbar sk-top">
    <a class="brand" href="index.html" aria-label="All Units">${ic('🧭', 'sm')}<span>DESTINATION <b>A2</b></span></a>
    <div class="top-title"><span class="unit-pill">UNIT ${A2.pad(n)}</span><b>${esc(U.title)}</b><small>${md(U.focus)}</small></div>
    <nav class="top-actions"><a class="btn sm ghost" href="slides.html?u=${n}">${ic('🖥️', 'xs')} Slides</a><a class="btn sm y" href="homework.html?u=${n}">${ic('🏠', 'xs')} Homework</a>${A2.studentChip()}</nav>
  </header>${teacherNote}
  <div class="lesson">
    <aside class="stages" aria-label="Learning stages"><p class="aside-h">Learning path</p><ol>${U.stages.map((s, i) => `<li><button type="button" data-stage="${s.id}" class="sk-${s.skill}"><span class="st-ic">${ic(s.icon, 'sm')}</span><span><b>${i + 1}. ${md(s.name)}</b><small>${esc((A2.SKILL[s.skill] || [''])[0])}</small></span></button></li>`).join('')}</ol>
      <div class="aside-foot"><p>${ic('📘', 'xs')} ${esc(U.book)}</p><button type="button" class="linkbtn" data-reset-all>Reset my answers</button></div></aside>
    <main id="stage" tabindex="-1"></main>
  </div>`;
  const main = document.getElementById('stage');
  const q = A2.bindQuestions(main, store, itemsById, save);
  A2.bindCommon(main, store, save);

  function show(id, focus) {
    const st = U.stages.find(s => s.id === id) || U.stages[0];
    store.stage = st.id; save();
    const idx = U.stages.indexOf(st);
    const cards = U.cards.filter(c => c.stage === st.id);
    main.innerHTML = `<section class="stage-head sk-${st.skill}"><div class="stage-art">${ic(st.icon, 'xl')}</div><div><p class="kicker">STAGE ${idx + 1} OF ${U.stages.length} · ${esc(((A2.SKILL[st.skill] || [''])[0]).toUpperCase())}</p><h1>${md(st.name)}</h1><p class="lead">${md(st.caption || '')}</p></div></section>
      ${cards.map(c => `<section class="card sk-${A2.stageOf(U, c.stage).skill} type-${c.type}" id="${c.id}">${c.type === 'cover' ? '' : A2.cardHead(c, U)}<div class="card-body">${A2.renderCard(c, U, 'lesson')}</div></section>`).join('')}
      <nav class="stage-nav">${idx > 0 ? `<button class="btn ghost" data-stage="${U.stages[idx - 1].id}">← ${md(U.stages[idx - 1].name)}</button>` : '<span></span>'}${idx < U.stages.length - 1 ? `<button class="btn" data-stage="${U.stages[idx + 1].id}">Next: ${md(U.stages[idx + 1].name)} →</button>` : `<a class="btn y" href="homework.html?u=${n}">Go to homework →</a>`}</nav>`;
    q.restore(); A2.restoreCommon(main, store);
    document.querySelectorAll('.stages [data-stage]').forEach(b => b.classList.toggle('on', b.dataset.stage === st.id));
    if (focus) { window.scrollTo({ top: 0 }); main.focus({ preventScroll: true }); }
    history.replaceState(null, '', `?u=${n}#${st.id}`);
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-stage]'); if (b) { show(b.dataset.stage, true); return; }
    if (e.target.closest('[data-reset-all]') && confirm('Clear all your answers and drafts for this Unit on this device?')) { A2.LS.del(KEY); location.reload(); }
  });
  const fromHash = location.hash.slice(1);
  show(U.stages.some(s => s.id === fromHash) ? fromHash : store.stage, false);
})();

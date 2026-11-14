/* Destination A2 · homework: auto-checked parts, pass mark, retries, writing and speaking tasks */
(async function () {
  'use strict';
  const A2 = window.A2, esc = A2.esc, md = A2.md, ic = A2.icon;
  const root = document.getElementById('app');
  const n = A2.unitParam();
  await A2.loadSettings();
  const lock = (t, m) => { root.innerHTML = `<div class="lock"><div class="lock-box">${ic('🔒', 'hero')}<h1>${esc(t)}</h1><p>${esc(m)}</p><a class="btn" href="index.html">← All Units</a></div></div>`; };
  if (!A2.built(n)) return lock(`Unit ${n} homework is coming soon`, 'Your teacher is still preparing it.');
  if (!A2.canOpen(n, 'homework')) return lock(`Unit ${n} homework is not open yet`, 'Your teacher will open it after the lesson.');
  try { await A2.loadScript(`assets/data/homework/hw${A2.pad(n)}.js?t=${Date.now()}`); } catch (e) { return lock('The homework could not load', 'Please check your internet connection.'); }
  const H = window.A2_HOMEWORK[n];
  H.parts.forEach(p => A2.balance(p.items, 'hw' + n + p.id));
  const conf = A2.unitConf(n), pass = A2.passMark(n);
  document.title = `Homework · Unit ${n} · Destination A2`;
  const KEY = `a2.hw${n}`;
  const store = Object.assign({ ans: {}, parts: {}, drafts: {}, ticks: {}, done: false }, A2.LS.get(KEY, {}));
  const save = () => A2.LS.set(KEY, store);
  const itemsById = {};
  H.parts.forEach(p => (p.items || []).forEach((it, i) => { itemsById[`hw-${p.id}-${i + 1}`] = it; }));
  if (!A2.isTeacher()) await A2.ensureStudent();
  const due = conf.due ? new Date(conf.due + 'T23:59:59') : null;
  const late = due && Date.now() > due.getTime();
  const autoParts = H.parts.filter(p => p.auto !== false);
  const pstate = id => (store.parts[id] = store.parts[id] || { best: 0, attempts: 0, passed: false });

  const partHtml = (p, k) => {
    const st = pstate(p.id);
    const revealed = st.passed || st.attempts >= 3;
    let body = '';
    if (p.audio) body += (Array.isArray(p.audio) ? p.audio : [p.audio]).map(key => A2.player(H.audio[key], key)).join('') + (p.glossary ? `<p class="gloss"><b>Words you may hear:</b> ${md(p.glossary)}</p>` : '');
    if (p.text) body += `<div class="text-card hw-text">${p.text.title ? `<h3>${ic(p.text.icon || '📄', 'sm')} ${md(p.text.title)}</h3>` : ''}${p.text.paragraphs.map((x, i) => `<p><span class="pn">${i + 1}</span>${md(x)}</p>`).join('')}</div>`;
    if (p.bank) body += `<div class="bank">${p.bank.map(w => `<span>${esc(w)}</span>`).join('')}</div>`;
    if (p.items) body += `<div class="set ${revealed ? '' : 'no-eye'}" data-set="hw-${p.id}">${A2.renderItems(p.items, `hw-${p.id}`, { matchOptions: p.matchOptions, cols: p.cols })}</div>`;
    if (p.type === 'writing') body += `<div class="task big">${ic('📝', 'md')}<div><b>Your task</b><p>${md(p.task)}</p></div></div>${p.plan ? `<div class="plan"><b>Plan</b><ol>${p.plan.map(x => `<li>${md(x)}</li>`).join('')}</ol></div>` : ''}
      <label class="draft-l" for="hw-draft">Your text <span class="wc" data-wc="hw-${p.id}">0 words</span> · ${p.min}–${p.max} words</label><textarea class="draft" id="hw-draft" data-draft="hw-${p.id}" rows="8" placeholder="Write here…"></textarea>
      <div class="checklist"><b>Check before you send</b>${p.checklist.map((x, i) => `<label><input type="checkbox" data-tick="hw-${p.id}-${i}"> ${md(x)}</label>`).join('')}</div>`;
    if (p.type === 'speaking') body += `<div class="task big">${ic('🎙️', 'md')}<div><b>Your task</b><p>${md(p.task)}</p></div></div>${p.prompts ? `<ol class="steps">${p.prompts.map(x => `<li>${md(x)}</li>`).join('')}</ol>` : ''}
      <div class="rec"><button type="button" class="btn sm y" data-rec>● Record</button><audio controls hidden></audio><a class="btn sm ghost" data-rec-dl hidden download="unit${n}-speaking.webm">⬇ Save my recording</a></div>
      <div class="checklist">${(p.checklist || []).map((x, i) => `<label><input type="checkbox" data-tick="hw-${p.id}-${i}"> ${md(x)}</label>`).join('')}</div>`;
    const status = p.auto === false
      ? (st.passed ? `<span class="pstat ok">✓ Sent</span>` : `<span class="pstat">To do</span>`)
      : (st.passed ? `<span class="pstat ok">✓ Passed · ${st.best}%</span>` : st.attempts ? `<span class="pstat bad">${st.best}% · try again</span>` : `<span class="pstat">${(p.items || []).length} questions</span>`);
    const action = p.auto === false
      ? `<button type="button" class="btn" data-submit="${p.id}">${p.type === 'writing' ? 'Send my writing' : 'Mark as done'}</button>`
      : `<button type="button" class="btn" data-grade="${p.id}">✓ Check part ${k + 1}</button><span class="score" data-score="hw-${p.id}">${st.attempts ? st.best + '%' : '–'}</span>`;
    return `<section class="hw-part ${st.passed ? 'passed' : ''}" id="part-${p.id}">
      <header class="hw-head"><div class="hw-ic">${ic(p.icon || '📝', 'md')}</div><div><h2>Part ${k + 1} · ${md(p.title)}</h2><p>${md(p.instructions || '')}</p></div>${status}</header>
      <div class="hw-body">${body}<div class="hw-actions">${action}<span class="hw-msg" data-msg="${p.id}" aria-live="polite">${p.auto === false ? '' : revealed ? 'You can now open each answer with the eye.' : `You need ${pass}%. The answers open after you pass (or after three tries).`}</span></div></div></section>`;
  };

  function render() {
    const passedAuto = autoParts.filter(p => pstate(p.id).passed).length;
    const total = H.parts.length, done = H.parts.filter(p => pstate(p.id).passed).length;
    root.innerHTML = `
      <header class="topbar"><a class="brand" href="index.html">${ic('🧭', 'sm')}<span>DESTINATION <b>A2</b></span></a>
        <div class="top-title"><span class="unit-pill">HOMEWORK · UNIT ${A2.pad(n)}</span><b>${esc(H.title)}</b></div>
        <nav class="top-actions"><a class="btn sm ghost" href="lesson.html?u=${n}">${ic('📘', 'xs')} Lesson</a>${A2.studentChip()}</nav></header>
      ${A2.isTeacher() && !conf.homework ? `<div class="banner">${ic('🧑‍🏫', 'xs')} Teacher view: this homework is closed for students.</div>` : ''}
      <main class="hw">
        <section class="hw-hero"><div><p class="kicker">UNIT ${A2.pad(n)} · ${esc(H.unitTitle || '')}</p><h1>${md(H.heading || 'Homework')}</h1><p class="lead">${md(H.intro || '')}</p>
          <div class="hw-meta">${due ? `<span class="chip ${late ? 'late' : ''}">${ic('📅', 'xs')} Due ${esc(due.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }))}${late ? ' · late' : ''}</span>` : ''}<span class="chip">${ic('🎯', 'xs')} Pass mark ${pass}% per part</span><span class="chip">${ic('🧩', 'xs')} ${total} parts</span></div>
          ${conf.note ? `<p class="note">${ic('📌', 'xs')}<span><b>Teacher’s note:</b> ${esc(conf.note)}</span></p>` : ''}</div>
          <div class="hw-progress"><div class="ring" style="--p:${Math.round((done / total) * 100)}"><b>${done}/${total}</b><small>parts done</small></div></div></section>
        ${H.parts.map(partHtml).join('')}
        <section class="hw-final ${store.done ? 'ok' : ''}">${store.done ? `${ic('🏆', 'xl')}<h2>Homework complete!</h2><p>Great work. Your teacher can see your results.</p>` : `${ic('🚩', 'lg')}<h2>${passedAuto}/${autoParts.length} checked parts passed</h2><p>Pass every checked part and send your writing to finish.</p>`}</section>
      </main>`;
    const main = root.querySelector('.hw');
    q = A2.bindQuestions(main, store, itemsById, save);
    A2.bindCommon(main, store, save);
    A2.restoreCommon(main, store);
    H.parts.forEach(p => { if (pstate(p.id).attempts) markPart(main, p, false); });
  }
  let q;
  const markPart = (main, p, count) => {
    const [ok, total] = A2.grade(main, `hw-${p.id}`, store, itemsById);
    if (!count || !total) return;
    const pct = Math.round((ok / total) * 100), st = pstate(p.id);
    st.attempts++; st.best = Math.max(st.best, pct);
    const wasPassed = st.passed; if (pct >= pass) st.passed = true;
    save();
    A2.log({ unit: n, kind: 'hw-part', part: p.id, pct, passed: pct >= pass, late: !!late });
    if (st.passed && !wasPassed) A2.toast(`Part passed with ${pct}%! 🎉`); else if (!st.passed) A2.toast(`${pct}%. You need ${pass}%. Check the red questions and try again.`);
    checkDone(); render();
    const el = document.getElementById('part-' + p.id); if (el) el.scrollIntoView({ block: 'start' });
  };
  const checkDone = () => {
    if (store.done) return;
    if (H.parts.every(p => pstate(p.id).passed)) {
      store.done = true; save();
      const scores = {}; autoParts.forEach(p => { scores[p.id] = pstate(p.id).best; });
      const avg = Math.round(autoParts.reduce((s, p) => s + pstate(p.id).best, 0) / Math.max(1, autoParts.length));
      const w = H.parts.find(p => p.type === 'writing');
      A2.log({ unit: n, kind: 'homework', pct: avg, passed: true, late: !!late, parts: scores, writing: w ? String((store.drafts || {})['hw-' + w.id] || '').slice(0, 2000) : '' });
    }
  };
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-grade]');
    if (g) {
      const p = H.parts.find(x => x.id === g.dataset.grade);
      const unanswered = p.items.filter((it, i) => !String(store.ans[`hw-${p.id}-${i + 1}`] || '').trim()).length;
      if (unanswered && !confirm(`${unanswered} question(s) are empty. Check anyway?`)) return;
      markPart(root.querySelector('.hw'), p, true); return;
    }
    const s = e.target.closest('[data-submit]');
    if (s) {
      const p = H.parts.find(x => x.id === s.dataset.submit);
      const ticks = (p.checklist || []).every((x, i) => (store.ticks || {})[`hw-${p.id}-${i}`]);
      const msg = root.querySelector(`[data-msg="${p.id}"]`);
      if (p.type === 'writing') {
        const text = (store.drafts || {})['hw-' + p.id] || ''; const wc = A2.words(text);
        if (wc < p.min) { msg.textContent = `Please write at least ${p.min} words (now ${wc}).`; return; }
        if (!ticks) { msg.textContent = 'Please tick every line of the checklist first.'; return; }
        A2.log({ unit: n, kind: 'hw-writing', part: p.id, words: wc, writing: text.slice(0, 2000), late: !!late });
      } else if (!ticks) { msg.textContent = 'Please tick every line first.'; return; }
      else A2.log({ unit: n, kind: 'hw-speaking', part: p.id, late: !!late });
      pstate(p.id).passed = true; save(); checkDone(); render(); A2.toast('Sent. Well done!');
    }
  });
  render();
})();

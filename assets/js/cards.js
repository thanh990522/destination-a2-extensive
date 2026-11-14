/* Destination A2 · card renderers shared by the lesson view and the slides */
(function () {
  'use strict';
  const A2 = window.A2, esc = A2.esc, md = A2.md, ic = A2.icon;
  const SKILL = {
    start: ['Warm-up', '👋'], vocab: ['Vocabulary', '📚'], grammar: ['Grammar', '🧩'], listening: ['Listening', '🎧'],
    reading: ['Reading', '📖'], speaking: ['Speaking', '💬'], writing: ['Writing', '✍️'], review: ['Review', '🏁']
  };
  A2.SKILL = SKILL;
  A2.stageOf = (U, id) => U.stages.find(s => s.id === id) || { skill: 'start', name: '', icon: '📌' };

  /* every question-bearing card keeps items in .items; cloze keeps blanks in .items too */
  A2.itemsIndex = U => {
    const map = {};
    U.cards.forEach(c => (c.items || []).forEach((it, i) => { map[`${c.id}-${i + 1}`] = it; }));
    return map;
  };
  A2.countItems = U => U.cards.reduce((n, c) => n + (c.items ? c.items.filter(i => !['say', 'open'].includes(i.t)).length : 0), 0);

  const chips = list => (list || []).map(([e, t]) => `<span class="chip">${ic(e, 'xs')}${esc(t)}</span>`).join('');
  const lead = c => (c.lead ? `<p class="lead">${md(c.lead)}</p>` : '');
  const note = c => (c.note ? `<p class="note">${ic('💡', 'xs')}<span>${md(c.note)}</span></p>` : '');
  const vi = t => (t ? `<p class="vi"><span class="vi-badge">VI</span><span>${md(t)}</span></p>` : '');
  const bank = c => (c.bank ? `<div class="bank" aria-label="Word box">${c.bank.map(w => `<span>${esc(w)}</span>`).join('')}</div>` : '');
  const example = c => (c.example ? `<p class="example"><span class="tagmini">Example</span> ${md(c.example)}</p>` : '');
  const transfer = c => (c.transfer ? `<div class="transfer">${ic('🗣️', 'sm')}<div><b>Now say it</b><p>${md(c.transfer)}</p></div></div>` : '');
  const range = (c, part) => (part ? c.items.slice(part.from, part.to) : c.items || []);
  const setId = (c, part) => (part && part.k ? `${c.id}~${part.k}` : c.id);

  const R = {};

  R.cover = (c, U) => `
    <div class="cover">
      <div class="cover-copy">
        <p class="kicker">DESTINATION A2 · UNIT ${A2.pad(U.n)} · ${esc(U.type.toUpperCase())}</p>
        <h1>${md(c.title || U.title)}</h1>
        <p class="cover-focus">${md(U.focus)}</p>
        <ul class="goals">${(U.goals || []).map(g => `<li>${ic('✅', 'xs')}<span>${md(g)}</span></li>`).join('')}</ul>
        <div class="teacher-line"><span class="avatar">HT</span><div><b>Mr. Hà Chí Thanh</b><small>${esc(U.book)}</small></div></div>
      </div>
      <div class="cover-path"><p class="kicker">IN THIS UNIT</p><ol>${U.stages.filter(s => s.skill !== 'start').map((s, i) => `<li class="sk-${s.skill}"><span class="cp-n">${i + 1}</span>${ic(s.icon, 'sm')}<span><b>${md(s.name)}</b><small>${esc((SKILL[s.skill] || [''])[0])}</small></span></li>`).join('')}</ol></div>
    </div>`;

  R.divider = (st, U) => {
    const [label, emoji] = SKILL[st.skill] || ['', '📌'];
    return `<div class="divider sk-${st.skill}"><div class="divider-art">${ic(st.icon || emoji, 'hero')}</div><div><p class="kicker">${esc(label.toUpperCase())}</p><h1>${md(st.name)}</h1><p class="lead">${md(st.caption || '')}</p>${st.steps ? `<ol class="steps">${st.steps.map(s => `<li>${md(s)}</li>`).join('')}</ol>` : ''}</div></div>`;
  };

  R.talk = (c, U, mode, part) => `
    <div class="talk ${c.art ? 'with-art' : ''}">
      ${c.art ? `<div class="talk-art">${c.art.map(e => ic(e, 'lg')).join('')}</div>` : ''}
      <div>${lead(c)}${A2.renderItems(range(c, part).map(p => Object.assign({ t: 'say' }, p)), c.id, { offset: part ? part.from : 0, cls: 'say-list' })}
      ${c.useful ? `<div class="useful"><b>Useful language</b>${c.useful.map(u => `<span>${md(u)}</span>`).join('')}</div>` : ''}${note(c)}</div>
    </div>`;

  R.words = (c, U, mode, part) => {
    const list = part ? c.words.slice(part.from, part.to) : c.words;
    return `${lead(c)}<div class="words ${list.length > 6 ? 'many' : ''}">${list.map(([e, w, ipa, pos, mean, ex]) => `
      <article class="word">
        <div class="word-pic">${ic(e, 'lg')}</div>
        <div class="word-main">
          <div class="word-top"><h3>${esc(w)}</h3><button type="button" class="say" data-say="${esc(w)}" aria-label="Hear ${esc(w)}">${A2.speakerSvg}</button></div>
          <p class="word-meta">${pos ? `<span class="pos">${esc(pos)}</span>` : ''}${ipa ? `<span class="ipa">${esc(ipa)}</span>` : ''}</p>
          <p class="word-vi">${esc(mean)}</p>
          ${ex ? `<p class="word-ex">${md(ex)}</p>` : ''}
        </div>
      </article>`).join('')}</div>${note(c)}`;
  };

  const gBlock = b => {
    if (b.form) {
      const f = b.form;
      return `<div class="gform">${f.title ? `<h4>${md(f.title)}</h4>` : ''}<div class="tbl"><table><thead><tr>${f.cols.map(h => `<th>${md(h)}</th>`).join('')}</tr></thead><tbody>${f.rows.map(r => `<tr>${r.map(x => `<td>${md(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
    }
    if (b.uses) return `<div class="guses">${b.uses.map(([u, ex, v]) => `<div class="guse"><b>${md(u)}</b><p class="gex">${md(ex)}</p>${v ? `<p class="gvi">${md(v)}</p>` : ''}</div>`).join('')}</div>`;
    if (b.rules) return `<div class="grules">${b.rules.map(([p, ex, v]) => `<div class="grule"><p class="gpat">${md(p)}</p><p class="gex">${md(ex)}</p>${v ? `<p class="gvi">${md(v)}</p>` : ''}</div>`).join('')}</div>`;
    if (b.hint) return `<aside class="ghint">${ic('💡', 'sm')}<div><b>${md(b.hint.title || 'Helpful hint')}</b>${b.hint.text ? `<p>${md(b.hint.text)}</p>` : ''}${b.hint.list ? `<ul>${b.hint.list.map(x => `<li>${md(x)}</li>`).join('')}</ul>` : ''}${b.hint.ex ? b.hint.ex.map(x => `<p class="gex">${md(x)}</p>`).join('') : ''}</div></aside>`;
    if (b.watch) return `<aside class="gwatch">${ic('⚠️', 'sm')}<div><b>Watch out!</b>${b.watch.text ? `<p>${md(b.watch.text)}</p>` : ''}${b.watch.ex ? b.watch.ex.map(x => `<p class="gex">${md(x)}</p>`).join('') : ''}</div></aside>`;
    if (b.groups) return `<div class="ggroups">${b.groups.map(([e, h, words, v]) => `<div class="ggroup">${ic(e, 'md')}<b>${md(h)}</b><p>${md(words)}</p>${v ? `<small>${md(v)}</small>` : ''}</div>`).join('')}</div>`;
    if (b.vi) return vi(b.vi);
    if (b.text) return `<p class="gtext">${md(b.text)}</p>`;
    return '';
  };
  R.grammar = (c) => `${lead(c)}<div class="grammar ${c.layout || ''}">${(c.blocks || []).map(gBlock).join('')}</div>${note(c)}`;

  R.practice = (c, U, mode, part) => {
    const items = range(c, part);
    const graded = items.filter(i => !['say', 'open'].includes(i.t)).length;
    return `${lead(c)}${bank(c)}${example(c)}<div class="set" data-set="${setId(c, part)}">${A2.renderItems(items, c.id, { offset: part ? part.from : 0, cols: c.cols, matchOptions: c.matchOptions, abc: c.abc })}${graded ? A2.checkBar(setId(c, part), graded) : ''}</div>${transfer(c)}${note(c)}`;
  };

  R.cloze = (c) => {
    let i = 0;
    const html = md(c.text).replace(/\[(\d+)[a-z]?\]/g, (m, label) => {
      const it = c.items[i]; const id = `${c.id}-${++i}`; it.t = 'gap';
      const w = Math.max(6, Math.min(16, Math.max(...A2.answers(it).map(a => String(a).length)) + 2));
      return `<span class="item cz" data-item="${id}"><sup>${label}</sup><input class="gap" data-q="${id}" style="width:${w}ch" autocomplete="off" spellcheck="false" aria-label="Gap ${i}">${it.hint ? `<em class="czh">(${esc(it.hint)})</em>` : ''}<button class="eye mini" type="button" data-eye="${id}" aria-label="Show answer ${i}" aria-expanded="false">${A2.eye}</button><span class="ans inline" id="ans-${id}" hidden><b>${md(A2.shown(it))}</b></span></span>`;
    });
    return `${lead(c)}${bank(c)}<div class="set" data-set="${c.id}"><div class="cloze ${c.style || 'letter'}">${c.textTitle ? `<p class="cz-title">${md(c.textTitle)}</p>` : ''}<p>${html.replace(/<br><br>/g, '</p><p>')}</p></div>${A2.checkBar(c.id, c.items.length)}</div>${transfer(c)}${note(c)}`;
  };

  R.listen = (c, U, mode, part) => {
    const a = U.audio[c.audio];
    const items = range(c, part);
    return `<div class="split listen">
      <div class="side">${A2.player(a, c.audio)}</div>
      <div class="main">${c.task ? `<p class="lead">${md(c.task)}</p>` : lead(c)}<div class="set" data-set="${setId(c, part)}">${A2.renderItems(items, c.id, { offset: part ? part.from : 0, cols: c.cols })}${A2.checkBar(setId(c, part), items.filter(i => !['say', 'open'].includes(i.t)).length)}</div>${transfer(c)}${note(c)}</div></div>`;
  };

  R.read = (c, U, mode, part) => {
    const items = range(c, part);
    const t = c.textRef ? U.cards.find(x => x.id === c.textRef) : c;
    return `<div class="split read">
      <div class="side text-card ${t.style || ''}">${t.textTitle ? `<h3>${ic(t.textIcon || '📄', 'sm')} ${md(t.textTitle)}</h3>` : ''}${(t.text || []).map((p, i) => `<p>${t.numbered === false ? '' : `<span class="pn">${i + 1}</span>`}${md(p)}</p>`).join('')}</div>
      <div class="main">${lead(c)}${items.length ? `<div class="set" data-set="${setId(c, part)}">${A2.renderItems(items, c.id, { offset: part ? part.from : 0 })}${A2.checkBar(setId(c, part), items.filter(i => !['say', 'open'].includes(i.t)).length)}</div>` : ''}${transfer(c)}${note(c)}</div></div>`;
  };

  R.gap = (c) => `${lead(c)}<div class="roles">${c.roles.map((r, k) => `
      <div class="role r${k}">
        <button type="button" class="role-head" data-role="${c.id}-${k}" aria-expanded="true">${ic(r.icon || (k ? '🅱️' : '🅰️'), 'md')}<span><b>${esc(r.name)}</b><small>${esc(r.who || '')}</small></span><i>Hide / show</i></button>
        <div class="role-body" id="role-${c.id}-${k}">
          ${r.intro ? `<p>${md(r.intro)}</p>` : ''}
          ${r.info ? `<div class="infobox"><b>Your information</b><ul>${r.info.map(x => `<li>${md(x)}</li>`).join('')}</ul></div>` : ''}
          ${r.ask ? `<div class="askbox"><b>Find out</b><ul>${r.ask.map(x => `<li>${md(x)}</li>`).join('')}</ul></div>` : ''}
        </div></div>`).join('')}</div>
      ${c.useful ? `<div class="useful"><b>Useful language</b>${c.useful.map(u => `<span>${md(u)}</span>`).join('')}</div>` : ''}
      ${c.model ? `<div class="model-wrap"><button type="button" class="btn sm ghost" data-model="${c.id}">${A2.eye} Show a model conversation</button><div class="model" id="model-${c.id}" hidden>${c.model.map(l => `<p>${md(l)}</p>`).join('')}</div></div>` : ''}${note(c)}`;

  const rubric = () => `<div class="rubric"><b>Peer feedback (0–2 each)</b><table><thead><tr><th></th><th>0</th><th>1</th><th>2</th></tr></thead><tbody>
    <tr><th>Task</th><td>Not finished</td><td>Partly finished</td><td>Finished, clear outcome</td></tr>
    <tr><th>Interaction</th><td>No questions</td><td>Some questions</td><td>Asks and answers, follows up</td></tr>
    <tr><th>Unit language</th><td>Very little</td><td>Some, with errors</td><td>Range used mostly correctly</td></tr>
    <tr><th>Pronunciation</th><td>Hard to follow</td><td>Mostly clear</td><td>Clear and confident</td></tr></tbody></table></div>`;
  R.speak = (c) => `<div class="split speak">
      <div class="side"><div class="task big">${ic(c.icon || '🎯', 'md')}<div><b>Your task</b><p>${md(c.task)}</p></div></div>
        ${c.steps ? `<ol class="steps">${c.steps.map(s => `<li>${md(s)}</li>`).join('')}</ol>` : ''}
        <div class="tools-row">${c.timer ? `<div class="timer" data-timer="${c.timer}"><span>${Math.floor(c.timer / 60)}:${String(c.timer % 60).padStart(2, '0')}</span><button type="button" class="btn sm" data-timer-go>▶ Start</button><button type="button" class="btn sm ghost" data-timer-reset>↺</button></div>` : ''}
        ${c.record ? `<div class="rec"><button type="button" class="btn sm y" data-rec>● Record</button><audio controls hidden></audio><a class="btn sm ghost" data-rec-dl hidden download="speaking.webm">⬇ Save</a></div>` : ''}</div>
      </div>
      <div class="main">${c.useful ? `<div class="useful"><b>Useful language</b>${c.useful.map(u => `<span>${md(u)}</span>`).join('')}</div>` : ''}
        ${c.model ? `<div class="model-wrap"><button type="button" class="btn sm ghost" data-model="${c.id}">${A2.eye} Show a model</button><div class="model" id="model-${c.id}" hidden>${c.model.map(l => `<p>${md(l)}</p>`).join('')}</div></div>` : ''}
        ${c.rubric ? rubric() : ''}${note(c)}</div></div>`;

  R.write = (c, U, mode) => `<div class="split write">
      <div class="side"><div class="task big">${ic('📝', 'md')}<div><b>Your task</b><p>${md(c.task)}</p></div></div>
        ${c.plan ? `<div class="plan"><b>Plan</b><ol>${c.plan.map(p => `<li>${md(p)}</li>`).join('')}</ol></div>` : ''}
        ${c.model ? `<div class="model-wrap"><button type="button" class="btn sm ghost" data-model="${c.id}">${A2.eye} Show the model text</button><div class="model letter" id="model-${c.id}" hidden>${c.model.map(l => `<p>${md(l)}</p>`).join('')}</div></div>` : ''}</div>
      <div class="main">${mode === 'lesson' || c.draft ? `<label class="draft-l" for="draft-${c.id}">Your text <span class="wc" data-wc="${c.id}">0 words</span>${c.min ? ` · aim for ${c.min}–${c.max} words` : ''}</label><textarea class="draft" id="draft-${c.id}" data-draft="${c.id}" rows="9" placeholder="Start writing here…"></textarea>` : ''}
        ${c.checklist ? `<div class="checklist"><b>Checklist</b>${c.checklist.map((x, i) => `<label><input type="checkbox" data-tick="${c.id}-${i}"> ${md(x)}</label>`).join('')}</div>` : ''}
        ${mode === 'lesson' ? `<div class="row"><button type="button" class="btn sm ghost" data-dl="${c.id}">⬇ Download my text</button></div>` : ''}${note(c)}</div></div>`;

  R.wrap = (c, U) => `<div class="wrap-card"><div class="cando"><h3>${ic('🏆', 'sm')} I can…</h3>${(c.cando || []).map((x, i) => `<label><input type="checkbox" data-tick="${c.id}-${i}"> ${md(x)}</label>`).join('')}</div>
      <div class="next">${c.book ? `<div class="task">${ic('📘', 'sm')}<p><b>Book practice</b><br>${md(c.book)}</p></div>` : ''}
      <a class="btn y big" href="${A2.base}homework.html?u=${U.n}">${ic('🏠', 'xs')} Open Unit ${U.n} homework</a>
      ${c.extra ? `<p class="note">${md(c.extra)}</p>` : ''}</div></div>`;

  A2.renderCard = (c, U, mode, part) => (R[c.type] ? R[c.type](c, U, mode, part) : `<p>Unknown card type: ${esc(c.type)}</p>`);
  A2.renderDivider = R.divider;
  A2.cardHead = (c, U, part) => {
    const st = A2.stageOf(U, c.stage);
    const label = c.tag || (SKILL[st.skill] || [''])[0].toUpperCase();
    const book = c.book ? `<span class="booktag">📘 Book · Exercise ${esc(c.book)}${c.page ? ' · p. ' + c.page : ''}</span>` : '';
    const pt = part && part.of > 1 ? ` <span class="part">${part.k}/${part.of}</span>` : '';
    return `<header class="card-head sk-${st.skill}"><div class="tagrow"><span class="tag">${ic(c.icon || st.icon, 'xs')}${esc(label)}${pt}</span>${book}</div><h2>${md(c.title || '')}</h2></header>`;
  };

  /* --- interactions common to both views: speak, role cards, models, timer, recorder, ticks --- */
  A2.bindCommon = (root, store, save) => {
    root.addEventListener('click', async e => {
      const s = e.target.closest('[data-say]'); if (s) { A2.speak(s.dataset.say); return; }
      const r = e.target.closest('[data-role]');
      if (r) { const b = root.querySelector('#role-' + CSS.escape(r.dataset.role)); b.hidden = !b.hidden; r.setAttribute('aria-expanded', String(!b.hidden)); return; }
      const m = e.target.closest('[data-model]');
      if (m) { const b = root.querySelector('#model-' + CSS.escape(m.dataset.model)); b.hidden = !b.hidden; m.classList.toggle('on', !b.hidden); return; }
      const tg = e.target.closest('[data-timer-go]');
      if (tg) {
        const box = tg.closest('[data-timer]'); const span = box.querySelector('span');
        if (box._t) { clearInterval(box._t); box._t = null; tg.textContent = '▶ Start'; return; }
        box._left = box._left == null ? Number(box.dataset.timer) : box._left; tg.textContent = '❚❚ Pause';
        box._t = setInterval(() => { box._left--; span.textContent = Math.floor(box._left / 60) + ':' + String(box._left % 60).padStart(2, '0'); if (box._left <= 0) { clearInterval(box._t); box._t = null; box.classList.add('done'); tg.textContent = '▶ Start'; box._left = null; } }, 1000);
        return;
      }
      const tr = e.target.closest('[data-timer-reset]');
      if (tr) { const box = tr.closest('[data-timer]'); clearInterval(box._t); box._t = null; box._left = null; box.classList.remove('done'); box.querySelector('span').textContent = Math.floor(box.dataset.timer / 60) + ':' + String(box.dataset.timer % 60).padStart(2, '0'); box.querySelector('[data-timer-go]').textContent = '▶ Start'; return; }
      const rec = e.target.closest('[data-rec]');
      if (rec) {
        const box = rec.closest('.rec');
        if (box._rec && box._rec.state === 'recording') { box._rec.stop(); return; }
        if (!navigator.mediaDevices || !window.MediaRecorder) { A2.toast('Recording is not supported in this browser.'); return; }
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); const chunks = [];
          const mr = new MediaRecorder(stream); box._rec = mr;
          mr.ondataavailable = ev => chunks.push(ev.data);
          mr.onstop = () => { stream.getTracks().forEach(t => t.stop()); const url = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType })); const au = box.querySelector('audio'); au.src = url; au.hidden = false; const dl = box.querySelector('[data-rec-dl]'); dl.href = url; dl.hidden = false; rec.textContent = '● Record again'; rec.classList.remove('live'); };
          mr.start(); rec.textContent = '■ Stop'; rec.classList.add('live');
        } catch (err) { A2.toast('Microphone permission was not given.'); }
        return;
      }
      const dl = e.target.closest('[data-dl]');
      if (dl) { const t = (store.drafts || {})[dl.dataset.dl] || ''; A2.download(`destination-a2-${dl.dataset.dl}.txt`, t); }
    });
    root.addEventListener('input', e => {
      const d = e.target.closest('[data-draft]');
      if (d) { store.drafts = store.drafts || {}; store.drafts[d.dataset.draft] = d.value; const wc = root.querySelector(`[data-wc="${CSS.escape(d.dataset.draft)}"]`); if (wc) wc.textContent = A2.words(d.value) + ' words'; save(); }
    });
    root.addEventListener('change', e => {
      const t = e.target.closest('[data-tick]'); if (t) { store.ticks = store.ticks || {}; store.ticks[t.dataset.tick] = t.checked; save(); }
    });
  };
  A2.restoreCommon = (root, store) => {
    root.querySelectorAll('[data-draft]').forEach(d => { const v = (store.drafts || {})[d.dataset.draft]; if (v) { d.value = v; const wc = root.querySelector(`[data-wc="${CSS.escape(d.dataset.draft)}"]`); if (wc) wc.textContent = A2.words(v) + ' words'; } });
    root.querySelectorAll('[data-tick]').forEach(t => { t.checked = !!(store.ticks || {})[t.dataset.tick]; });
  };
})();

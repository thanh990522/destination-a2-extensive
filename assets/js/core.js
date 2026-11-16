/* Destination A2 · shared core
   Settings and lesson locks, student identity, progress logging,
   icons, answer checking and every interactive question type.      */
(function () {
  'use strict';
  const A2 = (window.A2 = window.A2 || {});
  const script = document.currentScript;
  A2.base = (script && script.dataset.base) || '';
  window.A2_UNITS = window.A2_UNITS || {};
  window.A2_HOMEWORK = window.A2_HOMEWORK || {};

  /* ---------- small utilities ---------- */
  const LS = (A2.LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }
  });
  const esc = (A2.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])));
  A2.params = new URLSearchParams(location.search);
  A2.pad = n => String(n).padStart(2, '0');
  A2.unitParam = () => { const n = parseInt(A2.params.get('u') || '1', 10); return (n >= 1 && n <= 42) || (n >= 101 && n <= 114) ? n : 1; };
  /* Reviews use numbers 101–114 (Review 1 = 101) */
  A2.isReview = n => n > 100;
  A2.name = n => (n > 100 ? `Review ${n - 100}` : `Unit ${n}`);
  A2.tag = n => (n > 100 ? `REVIEW ${String(n - 100).padStart(2, '0')}` : `UNIT ${String(n).padStart(2, '0')}`);
  A2.loadScript = src => new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src; s.onload = () => resolve(); s.onerror = () => reject(new Error('Could not load ' + src));
    document.head.appendChild(s);
  });
  /* **bold**, *italic*, ==highlight==, ~~strike~~ and line breaks (___ stays a gap) */
  A2.md = s => esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/(^|[^*\w])\*([^*\n]+?)\*(?![*\w])/g, '$1<i>$2</i>')
    .replace(/==(.+?)==/g, '<mark>$1</mark>')
    .replace(/~~(.+?)~~/g, '<s>$1</s>')
    .replace(/\n/g, '<br>');
  A2.toast = msg => {
    let t = document.querySelector('.a2-toast');
    if (!t) { t = document.createElement('div'); t.className = 'a2-toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('on'); clearTimeout(A2.toast.t); A2.toast.t = setTimeout(() => t.classList.remove('on'), 3200);
  };
  A2.words = v => (String(v || '').trim() ? String(v).trim().split(/\s+/u).length : 0);
  A2.download = (name, text) => {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  /* ---------- icons (Fluent 3D emoji, MIT) with emoji fallback ---------- */
  A2.cp = e => Array.from(String(e)).map(c => c.codePointAt(0).toString(16)).filter(h => h !== 'fe0f').join('-');
  A2.icon = (e, cls = '') => {
    if (!e) return '';
    const map = window.A2_ICONS || {};
    const key = A2.cp(e);
    return map[key]
      ? `<img class="ic ${cls}" src="${A2.base}assets/icons/${map[key]}" alt="" loading="lazy" decoding="async">`
      : `<span class="ic emo ${cls}" aria-hidden="true">${esc(e)}</span>`;
  };
  A2.eye = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
  A2.eyeOff = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 5.1A10.6 10.6 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a10 10 0 0 0 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
  A2.speakerSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.6 6a8.5 8.5 0 0 1 0 12"/></svg>';

  /* ---------- pronunciation with the browser voice (British where available) ---------- */
  A2.speak = text => {
    try {
      const synth = window.speechSynthesis; if (!synth) { A2.toast('Pronunciation audio is not available in this browser.'); return; }
      synth.cancel();
      const u = new SpeechSynthesisUtterance(String(text).replace(/\(.*?\)/g, '').replace(/\//g, ', '));
      const voices = synth.getVoices();
      u.voice = voices.find(v => /en-GB/i.test(v.lang) && /female|libby|sonia|google uk/i.test(v.name)) || voices.find(v => /en-GB/i.test(v.lang)) || voices.find(v => /^en/i.test(v.lang)) || null;
      u.lang = (u.voice && u.voice.lang) || 'en-GB'; u.rate = 0.88; synth.speak(u);
    } catch (e) { A2.toast('Pronunciation audio is not available.'); }
  };

  /* ---------- settings: lesson / slides / homework locks ---------- */
  A2.settings = { units: {}, passMark: 80, progressUrl: '' };
  A2.loadSettings = async () => {
    try { await A2.loadScript(A2.base + 'assets/data/settings.js?t=' + Date.now()); } catch (e) { /* offline: defaults */ }
    A2.settings = Object.assign({ units: {}, passMark: 80, progressUrl: '' }, window.A2_SETTINGS || {});
    return A2.settings;
  };
  A2.isTeacher = () => LS.get('a2_teacher', false) === true;
  A2.built = n => !!(window.COURSE && (window.COURSE.built || []).includes(n));
  A2.unitConf = n => Object.assign({ lesson: false, slides: false, homework: false, due: '', note: '', passMark: '' }, (A2.settings.units || {})[n] || {});
  A2.canOpen = (n, what) => A2.built(n) && (A2.isTeacher() || !!A2.unitConf(n)[what]);
  A2.passMark = n => Number(A2.unitConf(n).passMark || A2.settings.passMark || 80);

  /* ---------- student identity and progress logging ---------- */
  A2.student = () => LS.get('a2_student', null);
  A2.askStudent = (opts = {}) => new Promise(resolve => {
    const cur = A2.student() || {};
    const ov = document.createElement('div'); ov.className = 'a2-modal';
    ov.innerHTML = `<div class="a2-modal-box" role="dialog" aria-modal="true" aria-labelledby="stTitle">
      <div class="a2-modal-art">${A2.icon('👋', 'xl')}</div>
      <h2 id="stTitle">${esc(opts.title || 'Hello! Who is learning today?')}</h2>
      <p>${esc(opts.msg || 'Type your full name so your teacher can see your progress and homework results.')}</p>
      <label for="stName">Full name</label><input id="stName" maxlength="60" autocomplete="name" value="${esc(cur.name || '')}" placeholder="e.g. Nguyễn Minh Anh">
      <label for="stCls">Class</label><input id="stCls" maxlength="30" value="${esc(cur.cls || '')}" placeholder="e.g. A2-K1">
      <p class="a2-err" id="stErr" role="alert"></p>
      <div class="a2-modal-row">${opts.noSkip ? '' : '<button class="btn ghost" data-x="skip">Later</button>'}<button class="btn" data-x="go">Start learning →</button></div></div>`;
    document.body.appendChild(ov);
    const name = ov.querySelector('#stName'); setTimeout(() => name.focus(), 40);
    const finish = v => { ov.remove(); resolve(v); };
    ov.addEventListener('click', e => {
      const x = e.target.closest('[data-x]'); if (!x) return;
      if (x.dataset.x === 'skip') return finish(null);
      const n = name.value.trim().replace(/\s+/g, ' ');
      if (n.length < 2) { ov.querySelector('#stErr').textContent = 'Please type your full name.'; return; }
      const st = { id: cur.id || ('s' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)), name: n, cls: ov.querySelector('#stCls').value.trim() };
      LS.set('a2_student', st); finish(st);
    });
    ov.addEventListener('keydown', e => { if (e.key === 'Enter') ov.querySelector('[data-x="go"]').click(); });
  });
  A2.ensureStudent = async () => A2.student() || (A2.isTeacher() ? null : A2.askStudent());
  A2.log = payload => {
    const url = A2.settings.progressUrl; const st = A2.student();
    if (!url || !st || A2.isTeacher()) return;
    const body = JSON.stringify(Object.assign({ id: st.id, name: st.name, cls: st.cls, ua: /Mobi/i.test(navigator.userAgent) ? 'mobile' : 'desktop' }, payload));
    try { fetch(url, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body }); } catch (e) { /* offline */ }
  };
  A2.studentChip = () => {
    const st = A2.student();
    if (A2.isTeacher()) return `<span class="who teacher">${A2.icon('🧑‍🏫', 'sm')} Teacher device</span>`;
    return `<button class="who" data-action="who">${A2.icon('🙂', 'sm')} ${st ? esc(st.name) : 'Add your name'}<b>${st ? 'Change' : 'Add'}</b></button>`;
  };
  document.addEventListener('click', async e => {
    if (e.target.closest('[data-action="who"]')) { await A2.askStudent({ title: 'Your name and class' }); location.reload(); }
  });

  /* ---------- answer checking ---------- */
  const CONTRACT = [["don't", 'do not'], ["doesn't", 'does not'], ["isn't", 'is not'], ["aren't", 'are not'], ["i'm", 'i am'], ["it's", 'it is'], ["there's", 'there is'], ["he's", 'he is'], ["she's", 'she is'], ["they're", 'they are'], ["we're", 'we are'], ["you're", 'you are'], ["what's", 'what is'], ["where's", 'where is'], ["who's", 'who is'], ["that's", 'that is'], ["can't", 'cannot'], ["haven't", 'have not'], ["hasn't", 'has not'], ["i've", 'i have'], ["let's", 'let us']];
  A2.norm = s => String(s == null ? '' : s).toLowerCase().normalize('NFC')
    .replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"')
    .replace(/[.,!?;:"()]/g, ' ').replace(/\s+/g, ' ').trim();
  const expand = s => { let v = ' ' + s + ' '; CONTRACT.forEach(([c, f]) => { v = v.split(' ' + c + ' ').join(' ' + f + ' '); }); return v.trim(); };
  A2.answers = item => (Array.isArray(item.a) ? item.a : [item.a]).filter(v => v != null && v !== '');
  A2.isCorrect = (item, value) => {
    if (value == null || String(value).trim() === '') return false;
    const v = expand(A2.norm(value));
    return A2.answers(item).some(a => expand(A2.norm(a)) === v);
  };
  A2.shown = item => item.show || A2.answers(item)[0] || '';
  A2.optionsOf = item => item.o || [];
  const gradable = item => !['open', 'say'].includes(item.t);

  /* ---------- spread correct answers evenly over A/B/C (book exercises keep the book’s order) ---------- */
  const PAT = { 2: [0, 1, 1, 0, 1, 0, 0, 1], 3: [1, 0, 2, 2, 1, 0, 0, 2, 1], 4: [2, 0, 3, 1, 1, 3, 0, 2] };
  const hash = s => [...String(s)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  A2.balance = (items, seed) => {
    const h = hash(seed);
    (items || []).forEach((it, i) => {
      if (it.fixed || (it.o && it.o.every(o => /^(true|false|not given)$/i.test(o)))) return;
      const keys = A2.answers(it).map(A2.norm);
      const reorder = list => {
        const n = list.length, pat = PAT[n]; if (!pat) return list;
        const ci = list.findIndex(o => keys.includes(A2.norm(o))); if (ci < 0) return list;
        const rest = list.filter((_, k) => k !== ci), pos = pat[(i + h) % pat.length];
        rest.splice(pos, 0, list[ci]); return rest;
      };
      if (it.o && !it._bal) { it.o = reorder(it.o); it._bal = 1; }
      else if (!it._bal && /\{[^}]+\|[^}]+\}/.test(it.q || '')) { it.q = it.q.replace(/\{([^}]+)\}/, (m, g) => '{' + reorder(g.split('|').map(x => x.trim())).join('|') + '}'); it._bal = 1; }
    });
  };
  A2.balanceUnit = U => (U.cards || []).forEach(c => { if (!c.book && c.type !== 'cloze') A2.balance(c.items, U.n + c.id); });

  /* ---------- evidence: wrap the sentence that answers each question ---------- */
  A2.withEvidence = (raw, items, prefix, offset = 0) => {
    const hits = [];
    (items || []).forEach((it, i) => {
      if (!it.ev) return; const k = raw.indexOf(it.ev);
      if (k >= 0 && !hits.some(h => k < h.e && k + it.ev.length > h.s)) hits.push({ s: k, e: k + it.ev.length, id: `${prefix}-${offset + i + 1}`, n: offset + i + 1 });
    });
    hits.sort((a, b) => a.s - b.s);
    let out = '', pos = 0;
    hits.forEach(h => { out += A2.md(raw.slice(pos, h.s)) + `<span class="evi" data-ev="${h.id}"><sup>${h.n}</sup>${A2.md(raw.slice(h.s, h.e))}</span>`; pos = h.e; });
    return out + A2.md(raw.slice(pos));
  };
  const showEv = (root, id, on) => root.querySelectorAll(`[data-ev="${CSS.escape(id)}"]`).forEach(x => x.classList.toggle('on', on));

  /* ---------- question rendering ---------- */
  const eyeBtn = (id, label = 'Show this answer') => `<button class="eye" type="button" data-eye="${id}" aria-expanded="false" aria-controls="ans-${id}" title="${label}" aria-label="${label}">${A2.eye}</button>`;
  const ansBox = (id, item) => {
    const main = item.t === 'open' || item.t === 'say' ? (item.model || A2.shown(item)) : A2.shown(item);
    return `<div class="ans" id="ans-${id}" hidden><span class="ans-k">${item.t === 'open' || item.t === 'say' ? 'Possible answer' : 'Answer'}</span> <b>${A2.md(main)}</b>${item.why ? `<small>${A2.md(item.why)}</small>` : ''}</div>`;
  };
  /* q with ___ for a gap, {a|b|c} for an inline choice */
  A2.renderItem = (item, id, n, opts = {}) => {
    const t = item.t || (item.o ? 'mc' : /\{[^}]+\|[^}]+\}/.test(item.q || '') ? 'pick' : /___/.test(item.q || '') ? 'gap' : 'short');
    item.t = t;
    const num = `<span class="num">${n}</span>`;
    const pic = item.e ? `<span class="qpic">${A2.icon(item.e)}</span>` : '';
    let body = '';
    if (t === 'mc' || t === 'tf') {
      const opts2 = t === 'tf' ? (item.o || ['True', 'False']) : item.o;
      body = `<p class="qtext">${A2.md(item.q || '')}</p><div class="opts" role="group">${opts2.map((o, k) => `<button type="button" class="opt" data-q="${id}" data-v="${esc(o)}">${opts.abc ? `<i class="abc">${'ABCDE'[k]}</i>` : ''}${A2.md(o)}</button>`).join('')}</div>`;
    } else if (t === 'pick') {
      const html = A2.md(item.q).replace(/\{([^}]+)\}/, (m, g) => `<span class="pick" role="group">${g.split('|').map(o => `<button type="button" class="opt mini" data-q="${id}" data-v="${esc(o.trim())}">${o.trim()}</button>`).join('<i>/</i>')}</span>`);
      body = `<p class="qtext">${html}</p>`;
    } else if (t === 'gap') {
      const parts = A2.md(item.q).split('___');
      const w = Math.max(5, Math.min(18, Math.max(...A2.answers(item).map(a => String(a).length)) + 2));
      body = `<p class="qtext">${parts[0]}<input class="gap" data-q="${id}" style="width:${w}ch" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Answer ${n}">${parts.slice(1).join('___')}</p>${item.hint ? `<span class="hint">${A2.md(item.hint)}</span>` : ''}`;
    } else if (t === 'write' || t === 'error' || t === 'order' || t === 'short') {
      const lead = t === 'error' ? `<span class="tagmini">Find and correct the mistake</span>` : t === 'order' ? `<span class="tagmini">Put the words in order</span>` : '';
      body = `${lead}<p class="qtext">${A2.md(item.q)}</p><input class="line" data-q="${id}" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="${t === 'error' ? 'Write the correct words' : t === 'short' ? 'Answer' : 'Write your answer'}" aria-label="Answer ${n}">`;
    } else if (t === 'match') {
      body = `<p class="qtext">${A2.md(item.q)}</p><select class="sel" data-q="${id}" aria-label="Match ${n}"><option value="">Choose…</option>${(opts.matchOptions || item.o || []).map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join('')}</select>`;
    } else if (t === 'open' || t === 'say') {
      body = `<p class="qtext">${A2.md(item.q)}</p>${item.frame ? `<p class="frame"><span>Try:</span> ${A2.md(item.frame)}</p>` : ''}${t === 'open' ? `<textarea class="line area" data-q="${id}" rows="2" placeholder="Your answer"></textarea>` : ''}`;
    }
    return `<li class="item t-${t}" data-item="${id}">${num}${pic}<div class="qbody">${body}${ansBox(id, item)}</div>${eyeBtn(id, t === 'say' || t === 'open' ? 'Show a possible answer' : 'Show this answer')}</li>`;
  };
  A2.renderItems = (items, prefix, opts = {}) => {
    const matchOptions = opts.matchOptions;
    return `<ol class="items ${opts.cols ? 'cols' : ''} ${opts.cls || ''}" ${opts.start ? `start="${opts.start}"` : ''}>${items.map((it, i) => (it.sec ? `<li class="boxrow"><p class="secrow">${A2.md(it.sec)}</p></li>` : '') + (it.box ? `<li class="boxrow"><div class="bank" aria-label="Word box">${it.box.map(w => `<span>${esc(w)}</span>`).join('')}</div></li>` : '') + A2.renderItem(it, `${prefix}-${(opts.offset || 0) + i + 1}`, (opts.numStart || 1) + (opts.offset || 0) + i, { matchOptions, abc: opts.abc })).join('')}</ol>`;
  };
  A2.checkBar = (id, total) => `<div class="checkbar" data-checkbar="${id}"><button type="button" class="btn sm" data-check="${id}">✓ Check</button><button type="button" class="btn sm ghost" data-showall="${id}">${A2.eye} All answers</button><button type="button" class="btn sm ghost" data-reset="${id}">↺ Reset</button><span class="score" data-score="${id}" aria-live="polite">${total ? `– / ${total}` : ''}</span></div>`;

  /* ---------- binding: one store per page ---------- */
  A2.bindQuestions = (root, store, itemsById, onChange) => {
    const save = () => onChange && onChange();
    const valOf = id => store.ans[id];
    const restore = () => {
      root.querySelectorAll('[data-q]').forEach(el => {
        const v = valOf(el.dataset.q); if (v == null) return;
        if (el.classList.contains('opt')) el.classList.toggle('on', el.dataset.v === v);
        else el.value = v;
      });
    };
    restore();
    root.addEventListener('click', e => {
      const opt = e.target.closest('.opt[data-q]');
      if (opt) {
        const id = opt.dataset.q; store.ans[id] = opt.dataset.v;
        root.querySelectorAll(`.opt[data-q="${id}"]`).forEach(b => b.classList.toggle('on', b === opt));
        const li = opt.closest('.item'); li && li.classList.remove('ok', 'bad'); save(); return;
      }
      const eye = e.target.closest('[data-eye]');
      if (eye) {
        const box = root.querySelector('#ans-' + CSS.escape(eye.dataset.eye)); if (!box) return;
        box.hidden = !box.hidden; eye.setAttribute('aria-expanded', String(!box.hidden)); eye.innerHTML = box.hidden ? A2.eye : A2.eyeOff; eye.classList.toggle('on', !box.hidden); showEv(root, eye.dataset.eye, !box.hidden); return;
      }
      const chk = e.target.closest('[data-check]');
      if (chk) { A2.grade(root, chk.dataset.check, store, itemsById); save(); return; }
      const all = e.target.closest('[data-showall]');
      if (all) {
        const scope = root.querySelector(`[data-set="${CSS.escape(all.dataset.showall)}"]`) || root;
        const boxes = [...scope.querySelectorAll('.ans')]; const open = boxes.some(b => b.hidden);
        boxes.forEach(b => { b.hidden = !open; showEv(root, b.id.replace(/^ans-/, ''), open); });
        scope.querySelectorAll('[data-eye]').forEach(b => { b.innerHTML = open ? A2.eyeOff : A2.eye; b.classList.toggle('on', open); b.setAttribute('aria-expanded', String(open)); });
        return;
      }
      const rs = e.target.closest('[data-reset]');
      if (rs) {
        const scope = root.querySelector(`[data-set="${CSS.escape(rs.dataset.reset)}"]`) || root;
        scope.querySelectorAll('[data-q]').forEach(el => { delete store.ans[el.dataset.q]; if (el.classList.contains('opt')) el.classList.remove('on'); else el.value = ''; });
        scope.querySelectorAll('.item').forEach(li => li.classList.remove('ok', 'bad'));
        scope.querySelectorAll('.ans').forEach(b => { b.hidden = true; showEv(root, b.id.replace(/^ans-/, ''), false); });
        scope.querySelectorAll('[data-eye]').forEach(b => { b.innerHTML = A2.eye; b.classList.remove('on'); });
        const sc = root.querySelector(`[data-score="${CSS.escape(rs.dataset.reset)}"]`); if (sc) sc.textContent = sc.textContent.replace(/^\S+/, '–');
        save();
      }
    });
    root.addEventListener('input', e => {
      const el = e.target.closest('[data-q]'); if (!el || el.classList.contains('opt')) return;
      store.ans[el.dataset.q] = el.value; const li = el.closest('.item'); li && li.classList.remove('ok', 'bad'); save();
    });
    root.addEventListener('change', e => { const el = e.target.closest('select[data-q]'); if (el) { store.ans[el.dataset.q] = el.value; save(); } });
    return { restore };
  };
  A2.grade = (root, setId, store, itemsById) => {
    const scope = root.querySelector(`[data-set="${CSS.escape(setId)}"]`) || root;
    let ok = 0, total = 0;
    scope.querySelectorAll('.item[data-item]').forEach(li => {
      const id = li.dataset.item, item = itemsById[id]; if (!item || !gradable(item)) return;
      total++; const good = A2.isCorrect(item, store.ans[id]);
      li.classList.toggle('ok', good); li.classList.toggle('bad', !good); if (good) ok++;
    });
    const sc = root.querySelector(`[data-score="${CSS.escape(setId)}"]`);
    if (sc && total) sc.textContent = `${ok} / ${total}`;
    if (total) { store.scores = store.scores || {}; store.scores[setId] = [ok, total]; }
    return [ok, total];
  };

  /* ---------- audio player for real recordings ---------- */
  A2.player = (a, key) => {
    if (!a) return '';
    const src = a.type === 'soundcloud'
      ? `<iframe class="sc" title="${esc(a.title)} – audio player" allow="autoplay" loading="lazy" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${esc(a.track)}&color=%231d4ed8&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false"></iframe>`
      : `<div class="pl" data-player="${key}"><button type="button" class="pl-play" data-pl="toggle" aria-label="Play or pause">▶</button><div class="pl-mid"><div class="pl-bar" data-pl="seek"><span></span></div><div class="pl-time"><span data-pl="cur">0:00</span> / <span data-pl="dur">${esc(a.length || '–:––')}</span></div></div><button type="button" class="pl-btn" data-pl="back" title="Back 5 seconds">↺ 5s</button><button type="button" class="pl-btn" data-pl="rate" title="Speed">1×</button><audio preload="none" src="${esc(a.src)}"></audio></div>`;
    return `<div class="audio-card"><div class="audio-head">${A2.icon('🎧', 'md')}<div><b>${esc(a.title)}</b><small>${esc(a.speakers || '')}${a.level ? ' · ' + esc(a.level) : ''}${a.length ? ' · ' + esc(a.length) : ''}</small></div></div>${src}<p class="audio-src">Source: <a href="${esc(a.page)}" target="_blank" rel="noopener">${esc(a.provider || 'ELLLO')}</a></p></div>`;
  };
  const fmt = s => (isFinite(s) ? Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0') : '–:––');
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-pl]'); if (!b) return;
    const box = b.closest('[data-player]'); const au = box.querySelector('audio'); const act = b.dataset.pl;
    if (act === 'toggle') {
      document.querySelectorAll('[data-player] audio').forEach(x => { if (x !== au) x.pause(); });
      if (au.paused) au.play().catch(() => A2.toast('The recording could not start. Check your internet connection.')); else au.pause();
    } else if (act === 'back') au.currentTime = Math.max(0, au.currentTime - 5);
    else if (act === 'rate') { const r = au.playbackRate === 1 ? 0.85 : au.playbackRate === 0.85 ? 0.75 : 1; au.playbackRate = r; b.textContent = r + '×'; }
    else if (act === 'seek') { const r = b.getBoundingClientRect(); if (au.duration) au.currentTime = ((e.clientX - r.left) / r.width) * au.duration; }
  });
  document.addEventListener('play', e => { const box = e.target.closest && e.target.closest('[data-player]'); if (box) box.querySelector('.pl-play').textContent = '❚❚'; }, true);
  document.addEventListener('pause', e => { const box = e.target.closest && e.target.closest('[data-player]'); if (box) box.querySelector('.pl-play').textContent = '▶'; }, true);
  document.addEventListener('timeupdate', e => {
    const box = e.target.closest && e.target.closest('[data-player]'); if (!box) return; const au = e.target;
    box.querySelector('[data-pl="cur"]').textContent = fmt(au.currentTime);
    if (au.duration) { box.querySelector('[data-pl="dur"]').textContent = fmt(au.duration); box.querySelector('.pl-bar span').style.width = (au.currentTime / au.duration) * 100 + '%'; }
  }, true);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('[data-player] audio').forEach(a => a.pause()); });
})();

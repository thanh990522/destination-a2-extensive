/* Destination A2 · course home: Units, status, homework progress and the programme map */
(async function () {
  'use strict';
  const A2 = window.A2, esc = A2.esc, md = A2.md, ic = A2.icon, C = window.COURSE;
  const root = document.getElementById('app');
  await A2.loadSettings();
  const ICON = ['🏡', '🛋️', '🫶', '📔', '❓', '🎳', '⚡', '🧭', '⚽', '🌟', '📈', '🏫', '🔮', '🎒', '💼', '🗓️', '🚦', '🛍️', '🏭', '🗺️', '🎎', '🍲', '🥗', '👗', '⚖️', '🏆', '🏙️', '🏃', '📍', '✈️', '🔀', '💭', '💪', '🤝', '✔️', '📱', '🔎', '⏪', '🌿', '📨', '🕰️', '🌍'];
  let filter = 'all';
  const hwState = n => A2.LS.get(`a2.hw${n}`, null);
  const status = n => {
    if (!A2.built(n)) return ['soon', 'Coming soon'];
    if (A2.canOpen(n, 'lesson')) return ['open', A2.isTeacher() && !A2.unitConf(n).lesson ? 'Closed for students' : 'Open'];
    return ['locked', 'Not open yet'];
  };
  const card = u => {
    const n = u[0], [st, label] = status(n), conf = A2.unitConf(n), hw = hwState(n);
    const hwDone = hw && hw.done, hwParts = hw ? Object.values(hw.parts || {}).filter(p => p.passed).length : 0;
    const btn = (what, href, text, cls) => (A2.canOpen(n, what) ? `<a class="btn sm ${cls}" href="${href}">${text}</a>` : `<span class="btn sm disabled" aria-disabled="true">🔒 ${text.replace(/<[^>]+>/g, '').trim()}</span>`);
    return `<article class="ucard st-${st} ${u[1] === 'Vocabulary' ? 'voc' : 'gra'}" data-type="${u[1]}" data-st="${st}">
      <div class="ucard-top"><span class="uno">UNIT ${A2.pad(n)}</span><span class="upill ${st}">${esc(label)}</span></div>
      <div class="ucard-ic">${ic(ICON[n - 1] || '📘', 'lg')}</div>
      <p class="utype">${esc(u[1])}</p><h3>${esc(u[3])}</h3><p class="ufocus">${esc(u[2])}</p>
      ${A2.built(n) ? `<div class="ubtns">${btn('lesson', `lesson.html?u=${n}`, `${ic('📘', 'xs')} Lesson`, '')}${btn('slides', `slides.html?u=${n}`, `${ic('🖥️', 'xs')} Slides`, 'ghost')}${btn('homework', `homework.html?u=${n}`, `${ic('🏠', 'xs')} Homework`, 'y')}</div>
        <p class="uhw">${hwDone ? '🏆 Homework complete' : hw ? `📝 Homework: ${hwParts} part(s) done` : ''}${conf.due && A2.canOpen(n, 'homework') ? ` · due ${esc(new Date(conf.due + 'T00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }))}` : ''}</p>`
        : `<p class="uplan">${ic('🗺️', 'xs')} Planned: ${esc(u[7])}</p>`}
    </article>`;
  };
  const reviewBox = g => {
    const r = 100 + g.review, label = `Review ${g.review} · Units ${g.units[0][0]}–${g.units[g.units.length - 1][0]}`;
    if (!A2.built(r)) return `<div class="review">${ic('🔁', 'sm')}<div><b>${label}</b><small>${esc(C.reviews[g.review - 1] || '')}</small></div></div>`;
    const btn = (what, href, text, cls) => (A2.canOpen(r, what) ? `<a class="btn sm ${cls}" href="${href}">${text}</a>` : `<span class="btn sm disabled" aria-disabled="true">🔒 ${text.replace(/<[^>]+>/g, '').trim()}</span>`);
    const hw = hwState(r), done = hw && hw.done;
    return `<div class="review built">${ic('🔁', 'sm')}<div><b>${label}</b><small>Book review exercises + extra challenge · Homework: 50 vocabulary + 50 grammar questions${done ? ' · 🏆 done' : ''}</small></div>
      <div class="ubtns">${btn('lesson', `lesson.html?u=${r}`, `${ic('📘', 'xs')} Review`, '')}${btn('slides', `slides.html?u=${r}`, `${ic('🖥️', 'xs')} Slides`, 'ghost')}${btn('homework', `homework.html?u=${r}`, `${ic('🏠', 'xs')} Homework`, 'y')}</div></div>`;
  };
  const groups = [];
  for (let i = 0; i < 42; i += 3) groups.push({ units: C.units.slice(i, i + 3), review: i / 3 + 1 });

  function draw() {
    const open = C.units.filter(u => A2.canOpen(u[0], 'lesson')).length;
    root.innerHTML = `
    <header class="topbar home-top"><a class="brand" href="index.html">${ic('🧭', 'sm')}<span>DESTINATION <b>A2</b></span></a><div class="top-title"><small>English for everyday life · Teacher: Mr. Hà Chí Thanh</small></div><nav class="top-actions"><a class="btn sm ghost" href="#programme">Programme</a>${A2.studentChip()}</nav></header>
    <main class="home">
      <section class="hero"><div class="hero-copy"><p class="kicker">A2 ENGLISH · FOUR SKILLS · SPEAKING FIRST</p><h1>Speak English for <mark>everyday life</mark>.</h1>
        <p class="lead">One Unit at a time: learn the words, master the grammar, hear real people and talk with confidence.</p>
        <div class="hero-stats"><span>${ic('📘', 'xs')} 42 Units</span><span>${ic('✅', 'xs')} ${C.built.length} ready</span><span>${ic('🔓', 'xs')} ${open} open now</span><span>${ic('🎧', 'xs')} Real recordings</span></div>
        <div class="row">${C.built.map(n => A2.canOpen(n, 'lesson') ? `<a class="btn" href="lesson.html?u=${n}">Start ${A2.name(n)} →</a>` : '').find(Boolean) || ''}<a class="btn ghost" href="#units">See all Units</a></div></div>
        <div class="hero-art" aria-hidden="true"><div class="hero-circle">${ic('🙋', 'hero')}</div>${[['🎧', 'Listen'], ['💬', 'Speak'], ['📖', 'Read'], ['✍️', 'Write'], ['📚', 'Words'], ['🧩', 'Grammar']].map(([e, t], i) => `<span class="float f${i}">${ic(e, 'sm')}${t}</span>`).join('')}</div></section>
      <section class="skills">${[['📚', 'Words in small sets', 'Every set has practice straight away.'], ['🧩', 'Grammar step by step', 'All the rules first, then six exercises.'], ['🎧', 'Real voices', 'Real recordings, with key words taught first.'], ['💬', 'Speaking every Unit', 'Information gaps, role plays and voice notes.']].map(([e, t, s]) => `<div>${ic(e, 'md')}<p><b>${t}</b><small>${s}</small></p></div>`).join('')}</section>
      <section id="units"><div class="sec-head"><div><p class="kicker">YOUR LEARNING JOURNEY</p><h2>Units and reviews</h2></div>
        <div class="filters" role="group" aria-label="Filter">${[['all', 'All'], ['open', 'Open'], ['Grammar', 'Grammar'], ['Vocabulary', 'Vocabulary']].map(([k, t]) => `<button class="fbtn ${filter === k ? 'on' : ''}" data-f="${k}">${t}</button>`).join('')}</div></div>
        ${groups.map(g => {
          const cards = g.units.filter(u => filter === 'all' || (filter === 'open' ? A2.canOpen(u[0], 'lesson') : u[1] === filter));
          if (!cards.length) return '';
          return `<div class="group"><div class="ugrid">${cards.map(card).join('')}</div>${reviewBox(g)}${g.review === 7 ? `<div class="review test">${ic('🏅', 'sm')}<div><b>Progress Test 1</b><small>Units 1–21</small></div></div>` : g.review === 14 ? `<div class="review test">${ic('🏅', 'sm')}<div><b>Progress Test 2</b><small>Units 22–42</small></div></div>` : ''}</div>`;
        }).join('')}
      </section>
      <section id="programme" class="programme"><div class="sec-head"><div><p class="kicker">THE WHOLE PROGRAMME</p><h2>42 Units · four connected skills</h2><p class="lead">${esc(C.note)}</p></div></div>
        <div class="principles">${C.principles.map((p, i) => `<article><span>${A2.pad(i + 1)}</span><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p></article>`).join('')}</div>
        <div class="tbl"><table class="ptable"><thead><tr><th>Unit</th><th>Book focus</th><th>Context</th><th>Reading</th><th>Listening</th><th>Speaking outcome</th><th>Writing outcome</th></tr></thead><tbody>${C.units.map(u => `<tr class="${A2.built(u[0]) ? 'built' : ''}"><td><b>${u[0]}</b><br><small>${esc(u[1])}${A2.built(u[0]) ? ' · ✅' : ''}</small></td><td>${esc(u[2])}<br><small>p. ${u[9]}</small></td><td>${esc(u[3])}</td><td>${esc(u[5])}</td><td>${esc(u[6])}</td><td>${esc(u[7])}</td><td>${esc(u[8])}</td></tr>`).join('')}</tbody></table></div></section>
      <footer class="foot"><span>Destination A2 · English for everyday life</span><span>Teacher: Mr. Hà Chí Thanh · Independent companion materials · <a href="admin/">Teacher admin</a></span></footer>
    </main>`;
  }
  document.addEventListener('click', e => { const f = e.target.closest('[data-f]'); if (f) { filter = f.dataset.f; draw(); document.getElementById('units').scrollIntoView(); } });
  draw();
  if (location.hash) { const t = document.querySelector(location.hash); if (t) t.scrollIntoView(); }
})();

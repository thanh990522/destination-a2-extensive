import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';

const read = p => readFileSync(new URL('../' + p, import.meta.url), 'utf8');
const ctx = { window: { A2_UNITS: {}, A2_HOMEWORK: {} } };
vm.createContext(ctx);
vm.runInContext(read('assets/data/course.js'), ctx);
vm.runInContext(read('assets/data/settings.js'), ctx);
vm.runInContext(read('assets/icons/icons.js'), ctx);
const C = ctx.window.COURSE;
for (const n of C.built) {
  vm.runInContext(read(`assets/data/units/u${String(n).padStart(2, '0')}.js`), ctx);
  vm.runInContext(read(`assets/data/homework/hw${String(n).padStart(2, '0')}.js`), ctx);
}
const norm = s => String(s).toLowerCase().replace(/[’‘]/g, "'").replace(/[.,!?]/g, '').trim();
const keys = it => (Array.isArray(it.a) ? it.a : [it.a]);
const choiceOf = q => { const m = /\{([^}]+)\}/.exec(q || ''); return m ? m[1].split('|').map(s => s.trim()) : null; };

function checkItem(it, where) {
  assert.ok(it.q || it.q === undefined, where);
  if (['say', 'open'].includes(it.t)) { assert.ok(it.q && it.model, where + ' needs a model answer'); return; }
  assert.ok(keys(it).length && keys(it).every(a => String(a).trim()), where + ' needs an answer');
  if (it.o) {
    assert.equal(new Set(it.o.map(norm)).size, it.o.length, where + ' duplicate options');
    assert.equal(it.o.filter(o => keys(it).some(a => norm(a) === norm(o))).length, 1, where + ' exactly one correct option');
  } else if (choiceOf(it.q)) {
    assert.equal(choiceOf(it.q).filter(o => keys(it).some(a => norm(a) === norm(o))).length, 1, where + ' answer must be one of the inline choices');
  }
}

test('the programme keeps the 42 Units, 14 Reviews and lists the built Units', () => {
  assert.equal(C.units.length, 42); assert.equal(C.reviews.length, 14);
  C.units.forEach((u, i) => { assert.equal(u[0], i + 1); assert.equal(u.length, 10); });
  assert.deepEqual([...C.built], [1, 2, 3, 4, 5, 6]);
  assert.match(C.units[0][2], /Present simple/); assert.match(C.units[1][2], /Present continuous/); assert.match(C.units[2][2], /Family and friends/);
});

for (const n of C.built) {
  const U = ctx.window.A2_UNITS[n];
  test(`Unit ${n}: structure, IDs and four skills`, () => {
    assert.equal(U.n, n);
    const ids = new Set();
    U.cards.forEach(c => { assert.ok(!ids.has(c.id), 'duplicate card ' + c.id); ids.add(c.id); assert.ok(U.stages.some(s => s.id === c.stage), 'stage of ' + c.id); });
    U.stages.forEach(s => assert.ok(U.cards.some(c => c.stage === s.id), 'empty stage ' + s.id));
    for (const sk of ['listening', 'reading', 'speaking', 'writing']) assert.ok(U.stages.some(s => s.skill === sk), `Unit ${n} lacks ${sk}`);
    assert.ok(U.stages.some(s => s.skill === (U.type === 'Grammar' ? 'grammar' : 'vocab')));
    assert.ok(U.cards.some(c => c.type === 'speak'), 'speaking task');
    U.cards.filter(c => c.type === 'talk').forEach(c => c.items.forEach(it => assert.ok(n !== 1 || it.frame, c.id + ': speaking questions need a suggested structure')));
    const w = U.cards.find(c => c.type === 'write'); assert.ok(w && w.min && w.max && w.checklist.length);
    const words = w.model.slice(1).join(' ').split(/\s+/).filter(Boolean).length;
    assert.ok(words >= w.min - 5 && words <= w.max + 5, `writing model ${words} words`);
  });
  test(`Unit ${n}: every vocabulary category teaches its words first, then its book exercises`, () => {
    U.stages.filter(s => s.skill === 'vocab').forEach(s => {
      const cs = U.cards.filter(c => c.stage === s.id);
      const isEx = c => ['practice', 'pairs', 'cloze'].includes(c.type);
      const firstEx = cs.findIndex(isEx);
      assert.ok(firstEx > 0, s.id + ': words, then exercises');
      assert.ok(cs.slice(firstEx).every(isEx), s.id + ': no new words after the exercises start');
      assert.ok(cs.slice(firstEx).every(c => c.book), s.id + ': exercises come from the book');
    });
    if (U.type === 'Vocabulary') {
      const taught = U.cards.filter(c => c.type === 'words' && U.stages.find(s => s.id === c.stage).skill === 'vocab');
      assert.ok(taught.length >= 8, 'vocabulary Units teach every book category');
    }
  });
  test(`Unit ${n}: grammar stages give all theory before any exercise`, () => {
    U.stages.filter(s => s.skill === 'grammar').forEach(s => {
      const cards = U.cards.filter(c => c.stage === s.id);
      const lastTheory = cards.map(c => c.type).lastIndexOf('grammar');
      const firstEx = cards.findIndex(c => ['practice', 'cloze'].includes(c.type));
      assert.ok(lastTheory >= 0 && firstEx > lastTheory, `${s.id}: theory first, then exercises`);
    });
  });
  test(`Unit ${n}: every closed question has one unambiguous key`, () => {
    let count = 0;
    U.cards.forEach(c => (c.items || []).forEach((it, i) => { if (c.type === 'cloze') { assert.ok(keys(it).length); count++; return; } if (c.type !== 'talk') { checkItem(it, `${c.id}-${i + 1}`); count++; } }));
    U.cards.filter(c => c.type === 'cloze').forEach(c => assert.equal((c.text.match(/\[\d+[a-z]?\]/g) || []).length, c.items.length, c.id + ' gaps = items'));
    U.cards.filter(c => c.matchOptions).forEach(c => c.items.filter(it => it.t === 'match').forEach(it => assert.ok(c.matchOptions.includes(it.a), c.id + ' match key')));
    assert.ok(count >= 80, `Unit ${n}: substantial practice (${count})`);
  });
  test(`Unit ${n}: listening uses verified real recordings, prepared by key words`, () => {
    Object.values(U.audio).forEach(a => {
      assert.match(a.page, /^https:\/\/(www\.)?elllo\.org\//);
      if (a.type === 'soundcloud') assert.match(a.track, /^\d+$/); else assert.match(a.src, /^https:\/\/(www\.)?elllo\.org\/Audio\/.+\.mp3$/);
    });
    U.cards.filter(c => c.type === 'listen').forEach(c => {
      assert.ok(U.audio[c.audio], c.id + ' audio');
      const stageCards = U.cards.filter(x => x.stage === c.stage);
      assert.ok(stageCards.findIndex(x => x.type === 'words') < stageCards.indexOf(c), c.id + ': key words come before listening');
    });
  });
  test(`Unit ${n}: every evidence quote is found in its reading text`, () => {
    U.cards.filter(c => c.type === 'read' && !c.textRef).forEach(c => c.items.forEach(it => { if (it.ev) assert.ok(c.text.join(' ').includes(it.ev), c.id + ': ' + it.ev); }));
    const H = ctx.window.A2_HOMEWORK[n];
    H.parts.filter(p => p.text).forEach(p => p.items.forEach(it => { if (it.ev) assert.ok(p.text.paragraphs.join(' ').includes(it.ev), p.id + ': ' + it.ev); }));
  });
  test(`Unit ${n}: homework parts are valid`, () => {
    const H = ctx.window.A2_HOMEWORK[n];
    assert.equal(H.unit, n); assert.ok(H.parts.length >= 5);
    H.parts.forEach(p => {
      assert.ok(p.id && p.title);
      if (p.auto === false) { if (p.type === 'writing') assert.ok(p.task && p.min && p.max && p.checklist.length); return; }
      assert.ok(p.items.length >= 6); p.items.forEach((it, i) => checkItem(it, `hw${n} ${p.id}-${i + 1}`));
      if (p.audio) [].concat(p.audio).forEach(k => assert.match(H.audio[k].src, /^https:\/\/elllo\.org\/Audio\/.+\.mp3$/));
    });
  });
}

test('settings and icons are consistent', () => {
  const S = ctx.window.A2_SETTINGS;
  assert.ok(S.passMark >= 50 && S.passMark <= 100);
  for (const [k, v] of Object.entries(S.units)) { assert.ok(+k >= 1 && +k <= 42); ['lesson', 'slides', 'homework'].forEach(f => assert.equal(typeof v[f], 'boolean')); }
  for (const f of Object.values(ctx.window.A2_ICONS)) assert.ok(existsSync(new URL('../assets/icons/' + f, import.meta.url)), f);
});

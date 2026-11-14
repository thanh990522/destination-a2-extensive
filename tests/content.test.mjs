import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const context={window:{}};
vm.runInNewContext(readFileSync(new URL('../assets/unit1.js',import.meta.url),'utf8'),context);
vm.runInNewContext(readFileSync(new URL('../assets/curriculum.js',import.meta.url),'utf8'),context);
const U=context.window.UNIT1,C=context.window.COURSE;
const normal=s=>String(s).toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?]/g,'').trim();

test('the programme retains the complete 42-Unit source sequence and review structure',()=>{
  assert.equal(C.units.length,42);assert.equal(C.reviews.length,14);
  C.units.forEach((r,i)=>{assert.equal(r[0],i+1);assert.equal(r.length,10);for(let j=1;j<9;j++)assert.ok(r[j].trim());});
  assert.match(C.units[0][2],/Present simple, there is \/ there are/);
  assert.match(C.units[1][2],/Present continuous/);
  assert.match(C.units[2][2],/Family and friends/);
});
test('all lesson and question IDs are unique and each closed question has an unambiguous key',()=>{
  const ids=new Set(),qs=new Set();
  for(const s of U.slides){assert.ok(!ids.has(s.id),s.id);ids.add(s.id);assert.ok(s.title&&s.stage&&s.kind&&s.tag);
    for(const q of s.questions||[]){assert.ok(!qs.has(q.id),q.id);qs.add(q.id);assert.ok(q.text);assert.ok(q.answer);
      if(q.options){assert.equal(new Set(q.options.map(normal)).size,q.options.length);const keys=Array.isArray(q.answer)?q.answer:[q.answer];assert.equal(q.options.filter(v=>keys.some(a=>normal(a)===normal(v))).length,1,q.id);}
    }
  }
  assert.ok(qs.size>=80,'substantial Unit practice');
});
test('each vocabulary or grammar block has immediate practice before the next language block',()=>{
  U.slides.forEach((s,i)=>{if(['vocab','grammar'].includes(s.kind)){const next=U.slides[i+1];assert.equal(next.kind,'quiz',s.id);assert.equal(next.stage,s.stage,s.id);assert.ok(next.questions.length,s.id);}});
});
test('the Unit has all four skills, two sourced recordings and a final speaking/writing outcome',()=>{
  assert.equal(Object.keys(U.audio).length,2);
  for(const a of Object.values(U.audio)){assert.match(a.source,/^https:\/\/(www\.)?elllo\.org\//);assert.match(a.src,/^https:\/\/(www\.)?elllo\.org\/Audio\/.+\.mp3$/);}
  assert.ok(U.slides.some(s=>s.kind==='reading'));assert.ok(U.slides.some(s=>s.kind==='roleplay'));assert.ok(U.slides.some(s=>s.record));
  const writing=U.slides.find(s=>s.kind==='writing'),n=writing.model.split(/\s+/).length;
  assert.ok(n>=80&&n<=100,'writing model meets the stated word range');
  assert.equal(U.slides.filter(s=>s.tag.startsWith('UNIT CHECK')).reduce((n,s)=>n+s.questions.length,0),10);
  for(const stage of U.stages)assert.ok(U.slides.some(s=>s.stage===stage.id));
});

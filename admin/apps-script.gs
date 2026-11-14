/**
 * DESTINATION A2 — progress and homework tracker (Google Apps Script)
 * 1) Create a Google Sheet → Extensions → Apps Script → paste this file.
 * 2) Change ADMIN_KEY below to your own password → Save.
 * 3) Deploy → New deployment → Web app · Execute as: Me · Who has access: Anyone → Deploy.
 * 4) Copy the Web app URL → Admin page → Settings → "Save to website".
 */
const ADMIN_KEY = 'change-this-password';
const SHEET = 'Progress';
const HEAD = ['Time', 'Student ID', 'Name', 'Class', 'Unit', 'Kind', 'Part', 'Score %', 'Passed', 'Late', 'Words', 'Writing', 'Parts', 'Device'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName(SHEET);
  if (!s) { s = ss.insertSheet(SHEET); s.appendRow(HEAD); s.setFrozenRows(1); }
  return s;
}
/* plain text only: never let a value start a formula */
function clean_(v, n) { v = String(v == null ? '' : v).slice(0, n); return /^[=+\-@]/.test(v) ? "'" + v : v; }

function doPost(e) {
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (!d.id || !d.name) return out_({ ok: false });
    const lock = LockService.getScriptLock(); lock.waitLock(5000);
    sheet_().appendRow([
      new Date(), clean_(d.id, 40), clean_(d.name, 60), clean_(d.cls, 30), Number(d.unit) || '', clean_(d.kind, 20), clean_(d.part, 20),
      d.pct == null || d.pct === '' ? '' : Number(d.pct), d.passed === true ? 'yes' : d.passed === false ? 'no' : '',
      d.late ? 'late' : '', d.words || '', clean_(d.writing, 2000), d.parts ? clean_(JSON.stringify(d.parts), 300) : '', clean_(d.ua, 10)
    ]);
    lock.releaseLock();
    return out_({ ok: true });
  } catch (err) { return out_({ ok: false, error: String(err) }); }
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.ping) return out_({ ok: true, ping: true });
  if (p.key !== ADMIN_KEY) return out_({ ok: false, error: 'wrong key' });
  const v = sheet_().getDataRange().getValues(); v.shift();
  return out_({ ok: true, rows: v.map(r => ({ t: r[0], id: r[1], name: r[2], cls: r[3], unit: r[4], kind: r[5], part: r[6], pct: r[7], passed: r[8], late: r[9], words: r[10], writing: r[11], parts: r[12] })) });
}

function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

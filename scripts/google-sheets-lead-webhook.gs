/**
 * Google Apps Script web app that receives leads from the landing pages
 * (/ai-automation and /healthcare-platforms) and appends them to this spreadsheet.
 *
 * Paste into Extensions > Apps Script of the target Google Sheet, then
 * Deploy > New deployment > Web app, "Execute as: Me", "Who has access: Anyone".
 * Use the resulting /exec URL for VITE_AIA_WEBHOOK_URL and VITE_HC_WEBHOOK_URL in Vercel.
 */

const NOTIFY_EMAIL = "info@inowix.in";

const SHEET_BY_SOURCE = {
  "ai-automation-lp": "UAE leads",
  "lp-healthcare-platforms": "Healthcare leads",
};

// Both landing pages send step-1 captures ("step1" / "partial") before the full form is done.
const COMPLETE_STAGE = "complete";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const lead = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const sheet = getSheet_(SHEET_BY_SOURCE[lead.source] || "Other leads");
    appendLead_(sheet, lead);
    if (lead.stage === COMPLETE_STAGE && NOTIFY_EMAIL) notify_(lead, sheet.getName());
    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, message: "Lead webhook is running" });
}

function getSheet_(name) {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  return book.getSheetByName(name) || book.insertSheet(name);
}

/** New payload keys become new columns, so the pages can add fields without editing this script. */
function appendLead_(sheet, lead) {
  const keys = ["received_at"].concat(Object.keys(lead));
  let headers = sheet.getLastColumn() > 0
    ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    : [];
  const missing = keys.filter((key) => headers.indexOf(key) === -1);
  if (missing.length) {
    headers = headers.concat(missing);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  const row = headers.map((key) => {
    if (key === "received_at") return new Date();
    const value = lead[key];
    return value === undefined || value === null ? "" : value;
  });
  sheet.appendRow(row);
}

function notify_(lead, sheetName) {
  const who = lead.full_name || lead.email || "Unknown";
  const lines = Object.keys(lead)
    .filter((key) => lead[key] !== "" && lead[key] !== null && lead[key] !== undefined)
    .map((key) => key + ": " + lead[key]);
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "New lead (" + sheetName + "): " + who,
    body: lines.join("\n") + "\n\nSpreadsheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    replyTo: lead.email || NOTIFY_EMAIL,
  });
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

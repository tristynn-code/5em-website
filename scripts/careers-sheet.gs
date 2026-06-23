/**
 * 5th Element Media - Careers application receiver (Google Apps Script).
 *
 * Paste this into the Apps Script editor of the Google Sheet that should
 * collect job applications, then deploy it as a Web App (see
 * docs/CAREERS-SETUP.md). The website's /api/careers/apply route POSTs each
 * application here; this script appends a row and, if a resume file was
 * attached, saves it to a Drive folder and drops the shareable link in the row.
 *
 * SECURITY: set SECRET below to a long random string and put the SAME value in
 * the website's SHEETS_WEBHOOK_SECRET env var. Requests without it are ignored.
 */

var SECRET = 'REPLACE_WITH_A_LONG_RANDOM_STRING';
var SHEET_NAME = 'Applications';
var DRIVE_FOLDER_NAME = '5EM Job Applications';
// Resumes are PII - by default they stay private to the Drive account that owns
// this script (you). To let specific teammates open the resume links, list their
// Google emails here, e.g. ['hiring@5them.com', 'tristynn@5them.com']. Leave empty
// to keep resumes visible only to you. Never make these world-readable.
var SHARE_RESUMES_WITH = [];

var HEADERS = [
  'Submitted At', 'Role', 'Full Name', 'Email', 'Phone', 'Based In',
  'LinkedIn / Portfolio', 'Resume (Drive)', 'Resume Link', 'Why 5EM', 'How They Heard',
];

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    if (!SECRET || body.secret !== SECRET) {
      return json_({ ok: false, error: 'unauthorized' });
    }

    var sheet = getSheet_();

    // Save resume to Drive (if present) and capture a viewable link.
    var driveUrl = '';
    if (body.resume && body.resume.base64) {
      driveUrl = saveResume_(body);
    }

    sheet.appendRow([
      body.submittedAt || new Date().toISOString(),
      body.role || '',
      body.fullName || '',
      body.email || '',
      body.phone || '',
      body.basedLocation || '',
      body.linkedin || '',
      driveUrl,
      body.resumeLink || '',
      body.coverNote || '',
      body.howHeard || '',
    ]);

    return json_({ ok: true, driveUrl: driveUrl });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function saveResume_(body) {
  var folders = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
  var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(DRIVE_FOLDER_NAME);

  var bytes = Utilities.base64Decode(body.resume.base64);
  var safeName = (body.fullName || 'applicant').replace(/[^a-z0-9]+/gi, '-');

  // Rebuild the filename ourselves from a sanitized name + a whitelisted
  // extension - never trust the raw browser-supplied filename.
  var ext = String(body.resume.filename || '').toLowerCase().match(/\.(pdf|docx?|txt|rtf)$/);
  var fileName = safeName + (ext ? ext[0] : '');
  var blob = Utilities.newBlob(bytes, body.resume.mimeType || 'application/octet-stream', fileName);

  var file = folder.createFile(blob);

  // Resumes contain PII - keep them private to the owner. Only grant view access
  // to explicitly listed internal teammates. Never ANYONE_WITH_LINK.
  for (var i = 0; i < SHARE_RESUMES_WITH.length; i++) {
    try { file.addViewer(SHARE_RESUMES_WITH[i]); } catch (e) {}
  }
  return file.getUrl();
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

# Visit Tracking → Google Sheet

Logs each page visit (approximate location, referrer, device, timestamp) to a
Google Sheet. The flow:

```
Browser ──POST /api/track──▶ Vercel function ──POST──▶ Apps Script ──▶ Google Sheet
                            (adds geo headers)        (appends a row)
```

You only need to do this once.

## 1. Create the Sheet

1. Make a new Google Sheet (e.g. "Portfolio Visits").
2. In row 1, add these headers (order matters — it matches the script below):

   | timestamp | city | region | country | timezone | referrer | path | userAgent | ip |
   |-----------|------|--------|---------|----------|----------|------|-----------|----|

## 2. Add the Apps Script web app

1. In the Sheet: **Extensions → Apps Script**.
2. Delete the placeholder and paste:

   ```js
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
     const d = JSON.parse(e.postData.contents)
     sheet.appendRow([
       d.timestamp, d.city, d.region, d.country, d.timezone,
       d.referrer, d.path, d.userAgent, d.ip
     ])
     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON)
   }
   ```

3. **Deploy → New deployment → type: Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, authorize, and copy the **Web app URL**
     (looks like `https://script.google.com/macros/s/AKfy.../exec`).

## 3. Give the URL to Vercel

In your Vercel project: **Settings → Environment Variables**, add:

- **Name:** `SHEET_WEBHOOK_URL`
- **Value:** the Apps Script web app URL from step 2
- Apply to Production (and Preview if you want)

Redeploy so the new env var takes effect. Done — visits will start appearing in
the Sheet.

## Notes

- **Geo is approximate** (city/region from IP) and comes free from Vercel's
  edge — it's only populated on real deployments, not `vercel dev` locally.
- **Raw IP** is stored in the last column. If you'd rather not keep it, remove
  the `ip` line in `api/track.js` and the `ip` column/field here.
- Consider adding a one-line privacy note to your site if you keep IPs.
- The function fails silently: if the Sheet or env var is missing, the page
  still loads normally.

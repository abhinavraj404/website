// Serverless function: records a page visit to a Google Sheet.
//
// It reads the geolocation headers Vercel attaches to every request
// (no third-party IP lookup needed), then forwards the visit to a Google
// Apps Script web app that appends a row. Set SHEET_WEBHOOK_URL in your
// Vercel project env vars to the Apps Script deployment URL.
// See TRACKING_SETUP.md for the one-time setup.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const webhookUrl = process.env.SHEET_WEBHOOK_URL
  if (!webhookUrl) {
    // Tracking not configured yet — don't error the client.
    res.status(204).end()
    return
  }

  const h = req.headers
  const ip = (h['x-forwarded-for'] || '').split(',')[0].trim()
  const body = req.body && typeof req.body === 'object' ? req.body : {}

  const visit = {
    timestamp: new Date().toISOString(),
    city: decodeURIComponent(h['x-vercel-ip-city'] || ''),
    region: h['x-vercel-ip-country-region'] || '',
    country: h['x-vercel-ip-country'] || '',
    timezone: h['x-vercel-ip-timezone'] || '',
    referrer: h['referer'] || body.referrer || '',
    path: body.path || '',
    userAgent: h['user-agent'] || '',
    ip, // remove this line if you'd rather not store raw IPs
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(visit),
    })
  } catch (err) {
    // Never let analytics break the page — swallow failures.
  }

  res.status(204).end()
}

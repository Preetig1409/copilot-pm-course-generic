#!/usr/bin/env node
/**
 * Generates SharePoint-ready HTML files with absolute SharePoint URLs.
 * Rewrites every relative .html link to the full AllItems.aspx viewer URL
 * so navigation works inside SharePoint's document viewer.
 *
 * No JavaScript required — pure HTML link rewriting.
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'final-version-static-site');
const OUT_DIR = path.join(__dirname, 'sharepoint-upload');

// SharePoint config — derived from working URL:
// https://ts.accenture.com/sites/AgileCapabilityReports/Shared%20Documents/Forms/AllItems.aspx
//   ?viewid=687768c9-7f97-47f8-a0aa-713271e6db7b
//   &id=/sites/AgileCapabilityReports/Shared Documents/sharepoint-upload/index.html
//   &parent=/sites/AgileCapabilityReports/Shared Documents/sharepoint-upload
const SP = {
  origin: 'https://ts.accenture.com',
  viewer: '/sites/AgileCapabilityReports/Shared%20Documents/Forms/AllItems.aspx',
  viewId: '687768c9-7f97-47f8-a0aa-713271e6db7b',
  folder: '/sites/AgileCapabilityReports/Shared Documents/sharepoint-upload',
};

function buildSharePointUrl(filename) {
  const id = encodeURIComponent(SP.folder + '/' + filename);
  const parent = encodeURIComponent(SP.folder);
  return `${SP.origin}${SP.viewer}?viewid=${SP.viewId}&id=${id}&parent=${parent}`;
}

function rewriteLinks(html) {
  // Match href="something.html" (relative links only, not http)
  return html.replace(/href="([^":/]+\.html)"/g, (match, filename) => {
    const url = buildSharePointUrl(filename);
    return `href="${url}"`;
  });
}

// Process all files
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(SRC_DIR).filter(f => f.endsWith('.html'));
let count = 0;

for (const file of files) {
  const src = fs.readFileSync(path.join(SRC_DIR, file), 'utf8');
  const out = rewriteLinks(src);
  fs.writeFileSync(path.join(OUT_DIR, file), out, 'utf8');
  count++;
}

// Verify: check a sample link
const sample = fs.readFileSync(path.join(OUT_DIR, 'index.html'), 'utf8');
const linkMatch = sample.match(/href="https:\/\/ts\.accenture\.com[^"]+module-1\.1\.html[^"]*"/);
console.log(`Generated ${count} files in ${OUT_DIR}/`);
console.log(`Sample link: ${linkMatch ? linkMatch[0] : 'NOT FOUND — check script'}`);

# SharePoint Hosting: Learnings & Constraints

## Goal
Host the 38-file arena-style static course on Accenture SharePoint (`ts.accenture.com`) so users access it without GitHub Pages exposure.

## SharePoint Environment
- **Site**: `https://ts.accenture.com/sites/AgileCapabilityReports`
- **Library**: Shared Documents
- **Upload folder**: `sharepoint-upload`
- **Viewer URL pattern**: `AllItems.aspx?viewid=687768c9-7f97-47f8-a0aa-713271e6db7b&id=<encoded-path>&parent=<encoded-folder>`

## What Works
- Clicking an HTML file in the SharePoint document library **renders it** in the browser
- Each file is self-contained (~20KB): inlined CSS, no external dependencies except Google Fonts
- Files render individually when clicked directly from the library

## What Does NOT Work

### 1. Relative HTML links → 404
Relative links like `href="module-1.1.html"` resolve against `AllItems.aspx` (the viewer page), not the file's folder. Result: `Shared%20Documents/Forms/module-1.1.html` → 404.

### 2. Direct file URLs → Download
Navigating to `https://ts.accenture.com/.../sharepoint-upload/module-1.1.html` downloads the file instead of rendering it. SharePoint's "custom scripting" is disabled (common in corporate tenants).

### 3. JavaScript is stripped/blocked
SharePoint's HTML viewer sanitizes or sandboxes injected HTML. `<script>` tags do not execute. JavaScript-based link rewriting is not viable.

### 4. `target="_top"` blocked
Adding `target="_top"` to links causes "nothing happens" — likely blocked by SharePoint's iframe sandbox policy.

### 5. Single combined file too slow
A 462KB single-file version with all 38 pages combined took too long to render in SharePoint's viewer.

### 6. Absolute AllItems.aspx URLs — untested
Current attempt: hardcoded absolute URLs pointing to `AllItems.aspx?id=...&parent=...` (matching the working viewer URL pattern). Links exist but navigation result unknown — may be blocked by SharePoint's HTML sanitizer stripping or neutralizing anchor hrefs to external/absolute URLs.

## Build Script
`node build-sharepoint.js` — reads from `final-version-static-site/`, rewrites links per SharePoint config, outputs to `sharepoint-upload/`. Config lives at top of script (site URL, viewId, folder path).

## Approaches NOT Yet Tried
- Upload to **Site Assets** library instead of Shared Documents (may serve HTML directly)
- SharePoint **Embed web part** pointing to an internal URL
- Rename `.html` → `.aspx` (SharePoint may render .aspx natively, but could also reject non-server HTML)
- **Power Pages** or SPFx for a proper SharePoint-native solution
- Ask IT to enable custom scripting on the site

## Constraint
User does not want GitHub Pages used — the repo is personal and they don't want corporate exposure to it.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A 6-hour self-paced course teaching Product Managers to use Microsoft 365 Copilot. The simulated context is a Senior Product Owner at Accenture building two internal tools (AKX and ADH). Content is markdown files rendered through a React SPA deployed to GitHub Pages.

Live site: https://sanjaygupta-professional.github.io/copilot-pm-course/

## Commands

All viewer commands run from `viewer/`:

- **Dev server:** `cd viewer && npm run dev` (copies content + starts Vite dev server)
- **Build:** `cd viewer && npm run build` (copies content + TypeScript check + Vite build → `viewer/dist/`)
- **Preview build:** `cd viewer && npm run preview`
- **Copy content only:** `cd viewer && npm run copy-content` (syncs root markdown into `viewer/public/content/`)
- **Static site (alternative):** `node build-static.js` (generates standalone HTML files in `static-site/` using `marked`)

No test or lint commands exist. TypeScript strict mode (`noUnusedLocals`, `noUnusedParameters`) in the build step is the only automated code quality check.

## Architecture

### Two rendering paths

1. **React SPA** (`viewer/`) — Primary. Vite + React 18 + TypeScript + Tailwind CSS. Deployed via GitHub Actions (`deploy.yml`) to GitHub Pages. Markdown files are fetched at runtime from `public/content/`.

2. **Static site** (`build-static.js`) — Secondary. Node.js script using `marked` to generate standalone HTML files for offline/file:// use into `static-site/`.

### Content pipeline

Root markdown directories (`lesson-modules/`, `company-context/`, `prompt-library/`, `sample-files/`) are the **source of truth**. The `copy-content` script (`viewer/scripts/copy-content.js`) copies them into `viewer/public/content/` before every dev/build. Never edit files in `viewer/public/content/` directly.

**Generated directories (do not edit):** `viewer/public/content/` (copied by `copy-content`) and `viewer/dist/` (build output). The `.gitignore` is incomplete — it doesn't exclude `node_modules/`, `viewer/dist/`, or `viewer/public/content/`, so `git status` will show noise from these directories. Ignore them.

### Viewer source (`viewer/src/`)

- **Routing** (`App.tsx`): Uses `HashRouter` (not `BrowserRouter`) for GitHub Pages compatibility — all URLs use `#/` prefix. Routes: `/` (home), `/module/:moduleId` (lessons), `/resource/*` (prompts, samples, context)
- **Content loading** (`hooks/useContent.ts`): Fetches `.md` files at runtime via fetch API
- **Progress tracking** (`hooks/useProgress.ts`): localStorage-based module completion
- **Course structure** (`data/courseStructure.ts`): TypeScript definition of all modules, mirroring `course-structure.json`. These two files must stay in sync — the TypeScript file is what the app uses; the JSON is a reference/alternative format
- **Markdown rendering** (`components/Markdown/MarkdownRenderer.tsx`): react-markdown + remark-gfm + react-syntax-highlighter

### Key configuration

- Vite base path: `/copilot-pm-course/` (required for GitHub Pages sub-path)
- Tailwind theme: Custom Accenture purple `#A100FF`
- TypeScript: Strict mode with `noUnusedLocals` and `noUnusedParameters`
- Path alias: `@/*` → `src/*`
- Code block styling: Terminal green (`#4ade80`) on dark background (`#1a1a2e`), defined in `viewer/src/index.css`
- Two `package.json` files: Root has only `marked` (for `build-static.js`). All SPA dependencies are in `viewer/package.json`

### Content structure

- `lesson-modules/` — 15 modules across 3 levels (1-fundamentals, 2-advanced-pm-work, 3-product-visuals), each in a `MODULE.md` file
- `company-context/` — Simulated company/product/persona/competitive docs
- `prompt-library/` — Reusable persona and template prompts
- `sample-files/` — Exercise materials (meeting notes, user interviews, CSVs)
- `notebooklm-upload/` — Flattened copies of all content for Google NotebookLM bulk upload

### Deployment

GitHub Actions (`deploy.yml`) triggers on push to `main`: installs deps in `viewer/`, runs copy-content + build, deploys `viewer/dist/` to GitHub Pages.

### SharePoint hosting (in progress)

See **`LEARNING.md`** for detailed constraints and learnings from attempting to host the static site on Accenture SharePoint (`ts.accenture.com`). Key issues: SharePoint blocks JavaScript in rendered HTML, downloads files on direct URL access, and resolves relative links against the viewer page (not the file's folder). Build script: `node build-sharepoint.js` (config at top of file).

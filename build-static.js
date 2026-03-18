#!/usr/bin/env node
/**
 * Static Site Generator — The AI-Augmented Product Manager
 * Generates standalone arena-style HTML pages from markdown
 * Works with file:// protocol (no server needed)
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const PROJECT_ROOT = __dirname;
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'static-site');

// ─── Course Structure ───

const levels = [
  {
    id: '0', title: 'The PM Craft', description: 'Core PM skills through a practitioner lens — with Copilot from day one',
    modules: [
      { id: '0.1', title: 'What Product Management Actually Is', duration: '20 min', path: 'lesson-modules/0-pm-fundamentals/0.1-what-is-pm/MODULE.md' },
      { id: '0.2', title: 'Knowing Your Users — Beyond Persona Templates', duration: '25 min', path: 'lesson-modules/0-pm-fundamentals/0.2-understanding-users/MODULE.md' },
      { id: '0.3', title: 'Prioritization That Actually Works', duration: '25 min', path: 'lesson-modules/0-pm-fundamentals/0.3-discovery-prioritization/MODULE.md' },
      { id: '0.4', title: 'Writing Requirements That Engineers Love', duration: '25 min', path: 'lesson-modules/0-pm-fundamentals/0.4-user-stories-requirements/MODULE.md' },
      { id: '0.5', title: 'Agile in Practice', duration: '20 min', path: 'lesson-modules/0-pm-fundamentals/0.5-agile-scrum/MODULE.md' },
      { id: '0.6', title: 'Stakeholder Management — The Unwritten PM Skill', duration: '25 min', path: 'lesson-modules/0-pm-fundamentals/0.6-stakeholder-communication/MODULE.md' },
    ]
  },
  {
    id: '1', title: 'Copilot as Teammate', description: 'Master Copilot workflows for every PM pain point',
    modules: [
      { id: '1.1', title: 'Your AI Working Environment', duration: '15 min', path: 'lesson-modules/1-copilot-teammate/1.1-ai-working-environment/MODULE.md' },
      { id: '1.2', title: 'Meeting Intelligence', duration: '25 min', path: 'lesson-modules/1-copilot-teammate/1.2-meeting-intelligence/MODULE.md' },
      { id: '1.3', title: 'User Research Synthesis at Scale', duration: '25 min', path: 'lesson-modules/1-copilot-teammate/1.3-user-research-synthesis/MODULE.md' },
      { id: '1.4', title: 'Communication That Lands', duration: '25 min', path: 'lesson-modules/1-copilot-teammate/1.4-communication-that-lands/MODULE.md' },
      { id: '1.5', title: 'Copilot Across M365', duration: '20 min', path: 'lesson-modules/1-copilot-teammate/1.5-m365-integrated-workflow/MODULE.md' },
      { id: '1.6', title: 'Deep Research with Agents', duration: '25 min', path: 'lesson-modules/1-copilot-teammate/1.6-deep-research-agents/MODULE.md' },
      { id: '1.7', title: 'Building Context & Memory', duration: '20 min', path: 'lesson-modules/1-copilot-teammate/1.7-context-and-memory/MODULE.md' },
      { id: '1.8', title: 'Teams & Outlook Mastery', duration: '25 min', path: 'lesson-modules/1-copilot-teammate/1.8-teams-outlook-mastery/MODULE.md' },
    ]
  },
  {
    id: '2', title: 'Strategic PM with AI', description: 'Strategic thinking, enterprise influence, and data-driven decisions',
    modules: [
      { id: '2.1', title: 'Writing PRDs That Get Buy-In', duration: '35 min', path: 'lesson-modules/2-strategic-pm/2.1-prds-that-get-buyin/MODULE.md' },
      { id: '2.2', title: 'Data-Driven Decisions with AI', duration: '30 min', path: 'lesson-modules/2-strategic-pm/2.2-data-driven-decisions/MODULE.md' },
      { id: '2.3', title: 'Product Strategy & Roadmapping', duration: '35 min', path: 'lesson-modules/2-strategic-pm/2.3-strategy-and-roadmapping/MODULE.md' },
      { id: '2.4', title: 'Running Effective Product Reviews', duration: '25 min', path: 'lesson-modules/2-strategic-pm/2.4-product-reviews/MODULE.md' },
      { id: '2.5', title: 'Navigating Organizational Politics', duration: '25 min', path: 'lesson-modules/2-strategic-pm/2.5-navigating-politics/MODULE.md' },
    ]
  },
  {
    id: '3', title: 'The 10x PM', description: 'Synthesis — visual communication, capstone project, and your AI toolkit',
    modules: [
      { id: '3.1', title: 'Visual Communication for PMs', duration: '25 min', path: 'lesson-modules/3-ten-x-pm/3.1-visual-communication/MODULE.md' },
      { id: '3.2', title: 'The Capstone — Run a Product Cycle', duration: '40 min', path: 'lesson-modules/3-ten-x-pm/3.2-capstone-product-cycle/MODULE.md' },
      { id: '3.3', title: 'Building Your Personal AI Toolkit', duration: '20 min', path: 'lesson-modules/3-ten-x-pm/3.3-personal-ai-toolkit/MODULE.md' },
      { id: '3.4', title: "What's Next — The AI-Era PM", duration: '15 min', path: 'lesson-modules/3-ten-x-pm/3.4-whats-next/MODULE.md' },
    ]
  }
];

const resources = [
  {
    id: 'company-context', title: 'Company Context',
    files: [
      { id: 'company', title: 'Company Overview', path: 'company-context/COMPANY.md' },
      { id: 'personas', title: 'User Personas', path: 'company-context/PERSONAS.md' },
      { id: 'product', title: 'Product Details', path: 'company-context/PRODUCT.md' },
      { id: 'competitive', title: 'Competitive Landscape', path: 'company-context/COMPETITIVE.md' },
    ]
  },
  {
    id: 'prompt-library', title: 'Prompt Library',
    files: [
      { id: 'executive', title: 'Executive Persona', path: 'prompt-library/personas/executive.md' },
      { id: 'engineer', title: 'Engineer Persona', path: 'prompt-library/personas/engineer.md' },
      { id: 'director', title: 'Director Persona', path: 'prompt-library/personas/director.md' },
      { id: 'user-researcher', title: 'User Researcher Persona', path: 'prompt-library/personas/user-researcher.md' },
      { id: 'meeting-notes', title: 'Meeting Notes Template', path: 'prompt-library/templates/meeting-notes.md' },
      { id: 'communication-transform', title: 'Communication Transform', path: 'prompt-library/templates/communication-transform.md' },
      { id: 'user-research-synthesis', title: 'User Research Synthesis', path: 'prompt-library/templates/user-research-synthesis.md' },
      { id: 'feedback-extraction', title: 'Feedback Extraction', path: 'prompt-library/templates/feedback-extraction.md' },
    ]
  },
  {
    id: 'references', title: 'References',
    files: [
      { id: 'prompting-101', title: 'Prompting 101', path: 'prompt-library/references/prompting-101.md' },
      { id: 'pm-resources', title: 'PM Learning Resources', path: 'prompt-library/references/pm-resources.md' },
    ]
  },
  {
    id: 'sample-files', title: 'Sample Files',
    files: [
      { id: 'meeting-raw', title: 'Meeting Notes (Raw)', path: 'sample-files/meeting-notes/meeting-notes-raw.md' },
      { id: 'product-sync', title: 'Product Sync Notes', path: 'sample-files/meeting-notes/product-sync-notes.md' },
      { id: 'interview-01', title: 'User Interview 01', path: 'sample-files/user-interviews/user-interview-01.md' },
      { id: 'interview-02', title: 'User Interview 02', path: 'sample-files/user-interviews/user-interview-02.md' },
      { id: 'interview-03', title: 'User Interview 03', path: 'sample-files/user-interviews/user-interview-03.md' },
      { id: 'interview-04', title: 'User Interview 04', path: 'sample-files/user-interviews/user-interview-04.md' },
      { id: 'interview-05', title: 'User Interview 05', path: 'sample-files/user-interviews/user-interview-05.md' },
      { id: 'interview-06', title: 'User Interview 06', path: 'sample-files/user-interviews/user-interview-06.md' },
      { id: 'interview-07', title: 'User Interview 07', path: 'sample-files/user-interviews/user-interview-07.md' },
      { id: 'interview-08', title: 'User Interview 08', path: 'sample-files/user-interviews/user-interview-08.md' },
    ]
  }
];

const allModules = levels.flatMap(l => l.modules);

const levelColors = {
  '0': { bg: '#487265', text: '#ffffff' },
  '1': { bg: '#A0C3C4', text: '#292C33' },
  '2': { bg: '#D4C68B', text: '#292C33' },
  '3': { bg: '#BC976A', text: '#ffffff' },
};

// ─── CSS (arena-style: warm earthy palette, Playfair Display, zero shadows) ───

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

:root {
  --white: #ffffff;
  --cream: #F7F6F5;
  --cream-dark: #F3F1EF;
  --cream-darker: #EEEDEA;
  --warm-gray: #D9D9D9;
  --warm-gray-dark: #898584;
  --border: #D9D9D9;
  --text-primary: #292C33;
  --text-secondary: #6B7280;
  --text-muted: #6A6A6A;
  --text-light: #F8F7F6;
  --teal: #487265;
  --teal-light: #DDEFEF;
  --teal-border: #568788;
  --teal-dark: #407967;
  --sage: #A0C3C4;
  --olive: #AAB788;
  --gold: #D4C68B;
  --copper: #BC976A;
  --bronze: #CAAB84;
  --sand: #CB9F69;
  --header-h: 55px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-primary);
  background: var(--white);
}

h1, h2, h3 { font-family: 'Playfair Display', serif; font-weight: 500; letter-spacing: -0.02em; }

.site-header {
  position: sticky; top: 0; z-index: 100;
  height: var(--header-h); background: var(--white);
  display: flex; align-items: center; justify-content: center;
  border-bottom: 1px solid var(--border);
}
.header-inner {
  width: 100%; max-width: 860px; padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between;
}
.header-brand {
  font-family: 'Playfair Display', serif; font-size: 1.05rem;
  font-weight: 600; color: var(--text-primary); text-decoration: none;
  letter-spacing: -0.02em;
}
.header-home {
  font-size: 0.85rem; color: var(--teal-dark); text-decoration: none;
  padding: 6px 14px; border-radius: 20px; border: 1px solid var(--border);
  transition: background 0.2s;
}
.header-home:hover { background: var(--cream); }

.page-container {
  max-width: 860px; margin: 0 auto;
  padding: calc(var(--header-h) + 32px) 24px 80px;
}

.hero {
  text-align: center; padding-bottom: 40px;
  border-bottom: 1px solid var(--border); margin-bottom: 40px;
}
.hero h1 { font-size: 2.6rem; letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 10px; }
.hero .tagline {
  font-family: 'Playfair Display', serif; font-style: italic;
  font-size: 1.15rem; color: var(--teal-dark); margin-bottom: 14px;
}
.hero .subtitle {
  font-size: 1rem; color: var(--text-secondary);
  max-width: 560px; margin: 0 auto 20px; line-height: 1.6;
}
.hero .meta { font-size: 0.85rem; color: var(--text-muted); }
.hero .meta span { margin: 0 6px; }

.differentiators {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 12px; margin-bottom: 32px; text-align: left;
}
.diff-card { background: var(--cream); border-radius: 8px; padding: 16px 18px; }
.diff-card .diff-title { font-weight: 600; font-size: 0.88rem; color: var(--teal-dark); margin-bottom: 4px; }
.diff-card .diff-desc { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }

.stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 40px; }
.stat-card { background: var(--cream); border-radius: 8px; padding: 18px 14px; text-align: center; }
.stat-card .number { font-size: 1.8rem; font-weight: 700; color: var(--teal-dark); line-height: 1.2; }
.stat-card .label { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; }

.level-section { margin-bottom: 32px; }
.level-header {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 12px; padding-bottom: 8px;
  border-bottom: 1px solid var(--cream-darker); flex-wrap: wrap;
}
.level-badge {
  font-size: 0.65rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.level-header h3 { font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0; }
.level-header .level-desc { color: var(--text-muted); font-size: 0.88rem; }

.module-list { list-style: none; display: grid; gap: 6px; }
.module-card {
  display: flex; align-items: center;
  background: var(--white); border: 1px solid var(--border);
  border-radius: 8px; padding: 12px 18px;
  text-decoration: none; color: inherit;
  transition: border-color 0.2s, transform 0.1s;
}
.module-card:hover { border-color: var(--teal-border); transform: translateY(-1px); }
.module-id { font-weight: 700; color: var(--teal-dark); min-width: 2.5rem; font-size: 0.95rem; }
.module-info { flex: 1; }
.module-info .title { font-weight: 500; font-size: 0.95rem; }
.module-info .duration { font-size: 0.78rem; color: var(--text-muted); }
.module-arrow { color: var(--warm-gray); font-size: 1.2rem; margin-left: 8px; }

.resources-section { margin-top: 40px; padding-top: 32px; border-top: 1px solid var(--border); }
.resources-section h3 { font-size: 1.3rem; color: var(--text-primary); margin-bottom: 16px; }
.resource-group { margin-bottom: 20px; }
.resource-group h4 {
  font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 600;
  color: var(--text-muted); margin-bottom: 8px; padding-left: 2px;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.resource-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 6px; }
.resource-link {
  display: block; background: var(--white);
  border: 1px solid var(--border); border-radius: 6px;
  padding: 8px 14px; text-decoration: none;
  color: var(--text-primary); font-size: 0.88rem;
  transition: border-color 0.2s;
}
.resource-link:hover { border-color: var(--teal-border); color: var(--teal-dark); }

.module-header { margin-bottom: 28px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
.module-header .breadcrumb { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 6px; }
.module-header .breadcrumb a { color: var(--teal-dark); text-decoration: none; }
.module-header .breadcrumb a:hover { text-decoration: underline; }
.module-meta { display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap; }
.meta-tag { font-size: 0.75rem; padding: 3px 10px; border-radius: 20px; font-weight: 500; }
.meta-tag.duration { background: var(--teal-light); color: var(--teal-dark); }
.meta-tag.level { background: var(--cream); color: var(--text-muted); }

.content { background: var(--white); padding: 0; }
.content h1 { font-family: 'Playfair Display', serif; font-size: 1.9rem; font-weight: 500; color: var(--text-primary); margin: 2rem 0 1rem; letter-spacing: -0.03em; }
.content h1:first-child { margin-top: 0; }
.content h2 { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 500; color: var(--teal-dark); margin: 2.5rem 0 0.75rem; padding-bottom: 6px; border-bottom: 1px solid var(--cream-darker); }
.content h3 { font-family: 'Playfair Display', serif; font-size: 1.12rem; font-weight: 500; color: var(--text-primary); margin: 1.5rem 0 0.5rem; }
.content h4 { font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin: 1.2rem 0 0.4rem; }
.content p { margin: 0.75rem 0; color: var(--text-secondary); }
.content ul, .content ol { margin: 0.75rem 0; padding-left: 1.5rem; }
.content li { margin: 0.3rem 0; color: var(--text-secondary); }
.content li p { margin: 0.25rem 0; }
.content strong { color: var(--text-primary); }
.content a { color: var(--teal-dark); text-decoration: none; border-bottom: 1px solid var(--sage); }
.content a:hover { color: var(--teal); border-bottom-color: var(--teal); }
.content blockquote { border-left: 3px solid var(--teal); background: var(--cream); padding: 12px 18px; margin: 1rem 0; border-radius: 0 6px 6px 0; }
.content blockquote p { color: var(--text-secondary); margin: 0.25rem 0; }
.content code { background: var(--cream-dark); color: var(--teal-dark); padding: 2px 6px; border-radius: 3px; font-size: 0.87em; font-family: 'SF Mono', 'Cascadia Code', 'Consolas', monospace; }
.content pre { background: #1a1a2e; color: #4ade80; padding: 18px 20px; border-radius: 8px; overflow-x: auto; margin: 1rem 0; font-size: 0.87rem; line-height: 1.55; }
.content pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
.content table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem; }
.content th { background: var(--cream); color: var(--text-primary); font-weight: 600; text-align: left; padding: 8px 12px; border-bottom: 2px solid var(--border); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.03em; }
.content td { padding: 8px 12px; border-bottom: 1px solid var(--cream-darker); color: var(--text-secondary); }
.content tr:hover td { background: var(--cream); }
.content hr { border: none; border-top: 1px solid var(--cream-darker); margin: 2rem 0; }
.content img { max-width: 100%; border-radius: 8px; margin: 1rem 0; }

.nav-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border); gap: 12px; }
.nav-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 18px; border-radius: 20px; text-decoration: none; font-size: 0.85rem; font-weight: 500; transition: background 0.2s; }
.nav-btn.prev { color: var(--text-secondary); background: var(--cream); border: 1px solid var(--border); }
.nav-btn.prev:hover { background: var(--cream-dark); }
.nav-btn.next { color: var(--white); background: var(--teal); border: 1px solid var(--teal); margin-left: auto; }
.nav-btn.next:hover { background: var(--teal-dark); }
.nav-btn.home { color: var(--teal-dark); background: var(--white); border: 1px solid var(--border); }
.nav-btn.home:hover { background: var(--cream); }

.site-footer { text-align: center; padding: 28px 24px; color: var(--text-muted); font-size: 0.78rem; border-top: 1px solid var(--border); margin-top: 48px; }

@media print {
  .site-header, .nav-footer, .site-footer { display: none; }
  .content { padding: 0; }
  .page-container { max-width: 100%; padding: 0; }
}

@media (max-width: 768px) {
  .page-container { padding: calc(var(--header-h) + 16px) 16px 60px; }
  .hero h1 { font-size: 1.8rem; }
  .hero .tagline { font-size: 1rem; }
  .stats-row { grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .differentiators { grid-template-columns: 1fr; }
  .resource-grid { grid-template-columns: 1fr; }
  .header-inner { padding: 0 16px; }
  .nav-footer { flex-wrap: wrap; }
}
`;

marked.setOptions({ gfm: true, breaks: false });

function htmlPage({ title, bodyContent, isIndex = false }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} — The AI-Augmented Product Manager</title>
  <style>${CSS}</style>
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="header-brand">The AI-Augmented PM</a>
      ${isIndex ? '' : '<a href="index.html" class="header-home">&larr; Course Home</a>'}
    </div>
  </header>
  <div class="page-container">
    ${bodyContent}
  </div>
  <footer class="site-footer">
    The AI-Augmented Product Manager &middot; v2.0 &middot; Master Microsoft Copilot for 10x PM Impact
  </footer>
</body>
</html>`;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function moduleFilename(mod) { return `module-${mod.id}.html`; }
function resourceFilename(res) { return `resource-${res.id}.html`; }

function readMarkdown(relativePath) {
  const fullPath = path.join(PROJECT_ROOT, relativePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  WARNING: File not found: ${relativePath}`);
    return '<p><em>Content not available.</em></p>';
  }
  return marked.parse(fs.readFileSync(fullPath, 'utf-8'));
}

function buildIndexPage() {
  const totalModules = allModules.length;

  let moduleSections = '';
  for (const level of levels) {
    const colors = levelColors[level.id];
    const moduleItems = level.modules.map(mod => `
      <a href="${moduleFilename(mod)}" class="module-card">
        <span class="module-id">${mod.id}</span>
        <span class="module-info">
          <span class="title">${escapeHtml(mod.title)}</span>
          <span class="duration">${mod.duration}</span>
        </span>
        <span class="module-arrow">&rsaquo;</span>
      </a>`).join('\n');

    moduleSections += `
    <div class="level-section">
      <div class="level-header">
        <span class="level-badge" style="background:${colors.bg};color:${colors.text}">Level ${level.id}</span>
        <h3>${escapeHtml(level.title)}</h3>
        <span class="level-desc">&mdash; ${escapeHtml(level.description)}</span>
      </div>
      <div class="module-list">${moduleItems}</div>
    </div>`;
  }

  let resourceSections = '';
  for (const section of resources) {
    const links = section.files.map(f =>
      `<a href="${resourceFilename(f)}" class="resource-link">${escapeHtml(f.title)}</a>`
    ).join('\n');
    resourceSections += `
    <div class="resource-group">
      <h4>${escapeHtml(section.title)}</h4>
      <div class="resource-grid">${links}</div>
    </div>`;
  }

  const body = `
    <div class="hero">
      <h1>The AI-Augmented Product Manager</h1>
      <p class="tagline">Master Microsoft Copilot for 10x PM Impact</p>
      <p class="subtitle">Practitioner-tested workflows that turn Copilot into your most valuable team member. Built on wisdom from Marty Cagan, Teresa Torres, Shreyas Doshi, and battle-tested enterprise PM experience.</p>
      <p class="meta">
        <span>Self-Paced</span> &middot;
        <span>${totalModules} Modules</span> &middot;
        <span>~11 Hours</span> &middot;
        <span>4 Levels</span> &middot;
        <span>v2.0</span>
      </p>
    </div>

    <div class="differentiators">
      <div class="diff-card">
        <div class="diff-title">Opinionated</div>
        <div class="diff-desc">We tell you what actually works and when &mdash; not 15 frameworks to pick from</div>
      </div>
      <div class="diff-card">
        <div class="diff-title">Simulation + Real Work</div>
        <div class="diff-desc">Practice in a realistic company context, then apply to your actual job</div>
      </div>
      <div class="diff-card">
        <div class="diff-title">AI-Native Workflows</div>
        <div class="diff-desc">Every skill taught AI-first &mdash; the way modern PMs actually work</div>
      </div>
      <div class="diff-card">
        <div class="diff-title">Built by Practitioners</div>
        <div class="diff-desc">Draws from Cagan, Torres, Doshi, Rachitsky, and enterprise PM experience</div>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-card"><div class="number">${totalModules}</div><div class="label">Modules</div></div>
      <div class="stat-card"><div class="number">11h</div><div class="label">Duration</div></div>
      <div class="stat-card"><div class="number">10+</div><div class="label">Hours Saved / Week</div></div>
      <div class="stat-card"><div class="number">4</div><div class="label">Levels</div></div>
    </div>

    ${moduleSections}

    <div class="resources-section">
      <h3>Resources &amp; Reference Material</h3>
      ${resourceSections}
    </div>`;

  return htmlPage({ title: 'Course Home', bodyContent: body, isIndex: true });
}

function buildModulePage(mod, index) {
  const level = levels.find(l => l.modules.some(m => m.id === mod.id));
  const contentHtml = readMarkdown(mod.path);
  const prev = index > 0 ? allModules[index - 1] : null;
  const next = index < allModules.length - 1 ? allModules[index + 1] : null;

  let navFooter = '<div class="nav-footer">';
  if (prev) navFooter += `<a href="${moduleFilename(prev)}" class="nav-btn prev">&larr; ${prev.id} ${escapeHtml(prev.title)}</a>`;
  else navFooter += '<span></span>';
  navFooter += `<a href="index.html" class="nav-btn home">Home</a>`;
  if (next) navFooter += `<a href="${moduleFilename(next)}" class="nav-btn next">${next.id} ${escapeHtml(next.title)} &rarr;</a>`;
  navFooter += '</div>';

  const body = `
    <div class="module-header">
      <div class="breadcrumb">
        <a href="index.html">Course Home</a> &rsaquo; Level ${level.id}: ${escapeHtml(level.title)} &rsaquo; Module ${mod.id}
      </div>
      <div class="module-meta">
        <span class="meta-tag duration">${mod.duration}</span>
        <span class="meta-tag level">Level ${level.id}: ${escapeHtml(level.title)}</span>
      </div>
    </div>
    <div class="content">${contentHtml}</div>
    ${navFooter}`;

  return htmlPage({ title: `Module ${mod.id}: ${mod.title}`, bodyContent: body });
}

function buildResourcePage(file, sectionTitle) {
  const contentHtml = readMarkdown(file.path);
  const body = `
    <div class="module-header">
      <div class="breadcrumb">
        <a href="index.html">Course Home</a> &rsaquo; ${escapeHtml(sectionTitle)} &rsaquo; ${escapeHtml(file.title)}
      </div>
    </div>
    <div class="content">${contentHtml}</div>
    <div class="nav-footer">
      <a href="index.html" class="nav-btn home">&larr; Back to Course Home</a>
    </div>`;

  return htmlPage({ title: file.title, bodyContent: body });
}

function build() {
  console.log('Building arena-style static site...\\n');

  if (fs.existsSync(OUTPUT_DIR)) fs.rmSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), buildIndexPage());
  console.log('  index.html');

  allModules.forEach((mod, index) => {
    const filename = moduleFilename(mod);
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), buildModulePage(mod, index));
    console.log(`  ${filename}`);
  });

  for (const section of resources) {
    for (const file of section.files) {
      const filename = resourceFilename(file);
      fs.writeFileSync(path.join(OUTPUT_DIR, filename), buildResourcePage(file, section.title));
      console.log(`  ${filename}`);
    }
  }

  const totalFiles = 1 + allModules.length + resources.reduce((sum, s) => sum + s.files.length, 0);
  console.log(`\\nDone! Generated ${totalFiles} HTML files in static-site/`);
  console.log('Open static-site/index.html in your browser to view the course.');
}

build();

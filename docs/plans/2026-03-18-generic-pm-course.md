# The AI-Augmented Product Manager — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a world-class, generic (non-Accenture) course — *"The AI-Augmented Product Manager: Master Microsoft Copilot for 10x PM Impact"* — that teaches junior and experienced PMs to leverage AI across every aspect of product management, anchored in practitioner wisdom from top PM thinkers.

**Architecture:** Fork `copilot-pm-course` into `copilot-pm-course-generic`. Replace Accenture simulation with "NovaTech Solutions" (5,000-person enterprise SaaS company). Restructure into 4 levels / 23 modules / ~11 hours. Every module follows: practitioner insight → real PM pain point → AI-native workflow → simulation exercise → "Apply to Your Work" guided reflection. Rebrand from Accenture purple to professional blue.

**Tech Stack:** React 18 + Vite + TypeScript + Tailwind CSS + Markdown content pipeline. No new dependencies.

**Design Principles:**
- Opinionated practitioner wisdom (Cagan, Torres, Doshi, Rachitsky) — not textbook frameworks
- AI-native workflows, not AI bolted onto traditional PM
- Simulation (NovaTech) + "Apply to Your Work" guided reflections in every module
- No filler. Every module solves a real PM pain point.
- Audience: Junior PMs leveling up + Experienced PMs learning AI

---

## Course Structure Overview

| Level | Theme | PM Growth | AI Proficiency | Modules | Hours |
|-------|-------|-----------|---------------|---------|-------|
| **0: The PM Craft** | Fundamentals through a practitioner lens | Core PM skills, opinionated | Copilot basics woven into every skill | 6 | ~2.5 |
| **1: Copilot as Teammate** | Day-to-day PM execution excellence | Workflow mastery | Copilot across M365 — Teams, Outlook, Word, Excel | 8 | ~3.5 |
| **2: Strategic PM with AI** | Strategic thinking & enterprise influence | Strategy, data, influence | Agents, multi-step chains, persona prompting | 5 | ~3 |
| **3: The 10x PM** | Synthesis — running a product end-to-end | Full product cycle | Capstone + visuals + personal AI toolkit | 4 | ~2 |

**Total: 23 modules, ~11 hours**

---

## NovaTech Solutions — Fictional Company Context

| Element | Detail |
|---------|--------|
| Company | NovaTech Solutions — 5,000-person enterprise SaaS company (Austin, London, Bangalore) |
| Industry | Workflow automation and collaboration tools, $850M revenue, Series D |
| Your role | Senior Product Owner, Internal Digital Products team (25 people) |
| Manager | Jennifer Walsh, VP of Digital Products |
| Product 1 | **KnowledgeHub** — internal knowledge management platform (43% WAU, target 60%) |
| Product 2 | **ProjectPulse** — project delivery and resource management (67% capacity visibility, target 95%) |
| Stakeholders | Richard Thorne (VP Knowledge & Innovation), Maya Patel (VP People Ops), David Kim (Director Engineering), Sarah Mitchell (Director Product Strategy) |
| Personas | Priya Sharma (Director, Customer Solutions), Marcus Johnson (Senior Engineer, Platform), Elena Rodriguez (Program Manager, Enterprise Delivery) |
| Competitors | Atlassian, Monday.com, Notion, Asana |

---

## Phase 1: Project Setup

### Task 1: Fork and initialize the new project

**Step 1: Copy the project**
```bash
cp -r /home/sanjayegupta/projects/copilot-pm-course /home/sanjayegupta/projects/copilot-pm-course-generic
```

**Step 2: Clean the copy**
```bash
cd /home/sanjayegupta/projects/copilot-pm-course-generic
rm -rf .git viewer/node_modules viewer/dist viewer/public/content .github
```

**Step 3: Initialize fresh git repo**
```bash
cd /home/sanjayegupta/projects/copilot-pm-course-generic
git init
git add -A
git commit -m "feat: fork copilot-pm-course as generic version"
```

**Step 4: Verify build**
```bash
cd /home/sanjayegupta/projects/copilot-pm-course-generic/viewer
npm install
npm run build
```

---

## Phase 2: De-Accenture All Content → NovaTech Solutions

### Terminology Mapping

| Accenture Term | NovaTech Replacement |
|---|---|
| Accenture | NovaTech Solutions / NovaTech |
| AKX / Accenture Knowledge Exchange | KnowledgeHub |
| ADH / Accenture Delivery Hub | ProjectPulse |
| Managing Director | Director |
| Practice | Department |
| Engagement | Project |
| Utilization | Capacity |
| Partner | VP / Director |
| consulting firm, 700,000+ employees | tech company, 5,000+ employees |
| `#A100FF` (Accenture purple) | `#2563EB` (professional blue) |
| McKinsey, BCG, Deloitte | Atlassian, Monday.com, Notion, Asana |

### Task 2: Rewrite company-context/COMPANY.md

**Files:** `company-context/COMPANY.md`

Rewrite entirely with NovaTech Solutions context:

```markdown
# NovaTech Solutions — Company Overview

**Welcome to NovaTech Solutions!** This is your company context throughout the course.

---

## Company Background

**Founded:** 2012
**Headquarters:** Austin, Texas (offices in London and Bangalore)
**Type:** Private (Series D, venture-backed)
**Employees:** 5,000+ globally
**Revenue:** $850M annually
**Industry:** Enterprise SaaS — workflow automation and collaboration tools

### Organizational Structure

**Core Departments:**
- Engineering (backend, frontend, infrastructure, QA)
- Product (product management, design, research)
- Sales & Customer Success
- Marketing
- People Operations (HR, L&D, culture)
- Finance & Operations

**Your Business Unit: Internal Digital Products**
- Part of the Product & Engineering organization
- Builds internal tools for 5,000+ employees
- Reports to VP of Digital Products

### Your Team Structure

**Internal Digital Products (25 people):**
- Jennifer Walsh — VP of Digital Products (your manager)
- You — Senior Product Owner
- 3 Product Owners (junior)
- 8 Developers (full-stack, mobile)
- 4 UX Designers
- 3 Business Analysts
- 2 Scrum Masters
- 4 QA Engineers

**Key Stakeholders:**
- Richard Thorne — VP, Knowledge & Innovation (KnowledgeHub sponsor)
- Maya Patel — VP, People Operations (ProjectPulse sponsor)
- David Kim — Director, Engineering
- Sarah Mitchell — Director, Product Strategy

---

## Company Mission & Values

**Mission:** Empower teams to do their best work through intelligent, human-centered tools.

**Core Values:**
- **Customer obsession:** Every decision starts with the user
- **Build in the open:** Transparency over politics
- **Own it:** Take responsibility, ship outcomes
- **Grow together:** Invest in each other's development
- **Move fast, stay grounded:** Speed with quality

---

## Culture & Working Norms

- **Communication:** Slack-first, docs over meetings, async by default
- **Decision-making:** RFCs for technical decisions, one-pagers for product bets
- **Tools:** Microsoft 365, Jira, Figma, GitHub, Slack
- **Cadence:** 2-week sprints, monthly product reviews, quarterly OKRs
- **Values in practice:** "Disagree and commit" — healthy debate, clear decisions, full alignment after
```

**Verify:** `grep -ci "accenture" company-context/COMPANY.md` → 0

**Commit:** `git commit -m "feat: replace Accenture company context with NovaTech Solutions"`

---

### Task 3: Rewrite company-context/PRODUCT.md

**Files:** `company-context/PRODUCT.md`

Read the current file, then rewrite with NovaTech products:

**KnowledgeHub** (replaces AKX):
- Internal knowledge management platform
- Current: 43% WAU (target 60%), NPS +12, avg search time 8 min (target 2 min)
- Features: expert directory, document search, knowledge base, Q&A forum
- Key problem: employees can't find what they need, recreate existing work

**ProjectPulse** (replaces ADH):
- Project delivery and resource management platform
- Current: 67% capacity visibility (target 95%), status reporting 4 hrs/week per manager
- Features: project dashboards, resource allocation, status automation, milestone tracking
- Key problem: no single view of project health across the company

Keep the same structure as original: overview, features, metrics, roadmap, technical details.

**Verify:** `grep -ci "accenture\|AKX\|ADH" company-context/PRODUCT.md` → 0

**Commit:** `git commit -m "feat: replace AKX/ADH with KnowledgeHub/ProjectPulse product context"`

---

### Task 4: Rewrite company-context/PERSONAS.md

**Files:** `company-context/PERSONAS.md`

Adapt personas from consulting to tech company:

| Original | New |
|----------|-----|
| Priya Sharma — Partner & Practice Lead, Financial Services Technology | Priya Sharma — Director, Customer Solutions |
| Marcus Johnson — Senior Consultant, Technology Strategy | Marcus Johnson — Senior Engineer, Platform Team |
| Elena Rodriguez — Delivery Manager, Technology Consulting | Elena Rodriguez — Program Manager, Enterprise Delivery |

Rewrite goals, pain points, jobs-to-be-done, daily workflow for each. Make them feel like real people at a tech company, not consulting archetypes.

**Verify:** `grep -ci "accenture\|partner.*practice\|consultant" company-context/PERSONAS.md` → 0

**Commit:** `git commit -m "feat: adapt personas from consulting to tech company context"`

---

### Task 5: Rewrite company-context/COMPETITIVE.md

**Files:** `company-context/COMPETITIVE.md`

Replace consulting competitors with enterprise SaaS competitors:
- Atlassian (Confluence + Jira) — the incumbent, strong but bloated
- Monday.com — workflow automation, beautiful UX, growing enterprise
- Notion — knowledge management darling, weak on enterprise features
- Asana — project tracking, good integrations, mid-market focus

Frame NovaTech's competitive position as an internal tooling team that competes for employee attention against these external tools employees already know.

**Verify:** `grep -ci "accenture\|mckinsey\|deloitte\|bcg" company-context/COMPETITIVE.md` → 0

**Commit:** `git commit -m "feat: replace consulting competitors with SaaS competitive landscape"`

---

### Task 6: Rewrite all prompt-library files

**Files:**
- `prompt-library/personas/executive.md`
- `prompt-library/personas/engineer.md`
- `prompt-library/personas/managing-director.md` → rename to `director.md`
- `prompt-library/personas/user-researcher.md`
- `prompt-library/templates/*.md` (all 4)
- `prompt-library/references/pm-resources.md`

Read each file. Apply terminology mapping throughout. Rename `managing-director.md` → `director.md`. Update all Accenture/AKX/ADH references.

**Verify:** `grep -rci "accenture\|AKX\|ADH\|managing.director" prompt-library/` → 0

**Commit:** `git commit -m "feat: de-Accenture all prompt library files"`

---

### Task 7: Rewrite all sample-files

**Files:** All files in `sample-files/meeting-notes/`, `sample-files/user-interviews/`, `sample-files/data/`

Read each file. Replace Accenture context with NovaTech. Update meeting notes to reference NovaTech product reviews. Update interview transcripts with tech company personas. Update CSV data column names/values.

**Verify:** `grep -rci "accenture\|AKX\|ADH" sample-files/` → 0

**Commit:** `git commit -m "feat: de-Accenture all sample exercise files"`

---

### Task 8: De-Accenture existing lesson modules (retain for reuse)

**Files:** All 15 `lesson-modules/*/MODULE.md` files

Run `grep -rn "Accenture\|AKX\|ADH\|Managing Director\|accenture" lesson-modules/` to find all references.

Apply terminology mapping to every file. Preserve all pedagogical structure, exercises, and learning objectives. Only change company/product context.

**Important:** These modules will be restructured in Phase 4, but de-Accenturing them first ensures we have clean source material to draw from.

**Verify:** `grep -rci "accenture\|AKX\|ADH\|andersen" lesson-modules/` → 0

**Commit:** `git commit -m "feat: de-Accenture all 15 existing lesson modules"`

---

## Phase 3: Rebrand & Configuration

### Task 9: Update Tailwind theme — purple → blue

**Files:** `viewer/tailwind.config.js`

Replace:
- Primary `#A100FF` → `#2563EB` (blue-600)
- Generate full blue palette for primary shades (50-950)
- Keep accent green/orange — they're not Accenture-branded

**Commit:** `git commit -m "feat: rebrand from Accenture purple to professional blue"`

---

### Task 10: Update viewer configuration and components

**Files:**
- `viewer/src/data/courseStructure.ts` — full rewrite (new 4-level structure)
- `viewer/src/App.tsx` — verify routing handles new module IDs (0.x)
- `viewer/vite.config.ts` — base path → `/copilot-pm-course-generic/`
- `viewer/src/components/Layout/Header.tsx` — update any branding text
- `course-structure.json` — keep in sync with TypeScript version

**The new courseStructure.ts** will be written in Phase 5 after all module content is created.

For now: update vite config base path, check Header for Accenture text, verify routing.

**Commit:** `git commit -m "feat: update viewer config for generic version"`

---

### Task 11: Update root documentation

**Files:** `CLAUDE.md`, `README.md`, `GETTING-STARTED.md`, `package.json`

- CLAUDE.md: Update project description, remove all Accenture references
- README.md: Rewrite for the new course identity and positioning
- GETTING-STARTED.md: Update for NovaTech context
- package.json: Update name field

**Verify:** `grep -rci "accenture" CLAUDE.md README.md GETTING-STARTED.md package.json` → 0

**Commit:** `git commit -m "feat: update project documentation for generic version"`

---

## Phase 4: Write All New Module Content

This is the heart of the 10x upgrade. Every module follows this template:

```markdown
# Module X.Y: [Title]

**Duration:** [X] minutes
**Prerequisites:** [previous module or "None"]

---

## What You'll Learn
[3-5 measurable objectives]

---

## [Practitioner Insight / Pain Point Introduction]
[Opening that hooks the reader with a real PM pain point, anchored in practitioner wisdom]

## [Core Content Sections — 2-4 sections]
[Opinionated, practical content. Tables, examples, frameworks taught in context.]

## Exercise [N]: [Title] (Simulation)
[NovaTech-based exercise with exact Copilot prompts]

## Exercise [N+1]: [Title] (Simulation)
[Second exercise building on the first]

---

## 🔄 Apply to Your Work

**Reflect:**
[2-3 guided reflection questions that build context from the learner's real work]

**Your Prompt:**
[Customized Copilot prompt incorporating their reflection answers]

**You should now have:**
[Concrete output the learner walks away with]

---

## Key Takeaways
[3-5 bullet points — the "if you remember nothing else" summary]

## What's Next
[1-2 sentence preview of the next module and how it builds on this one]
```

---

### Task 12: Create Level 0 directory structure

```bash
mkdir -p lesson-modules/0-pm-fundamentals/{0.1-what-is-pm,0.2-understanding-users,0.3-discovery-prioritization,0.4-user-stories-requirements,0.5-agile-scrum,0.6-stakeholder-communication}
```

**Commit:** `git commit -m "feat: create Level 0 PM Fundamentals directory structure"`

---

### Task 13: Write Module 0.1 — What Product Management Actually Is

**Files:** `lesson-modules/0-pm-fundamentals/0.1-what-is-pm/MODULE.md`

**Duration:** 20 min | **Prerequisites:** None

**Practitioner anchor:** Marty Cagan's distinction between "delivery teams" and "empowered product teams"

**Content sections:**
1. **The PM role is risk reduction** — The real job is reducing value risk, usability risk, feasibility risk, and business viability risk BEFORE engineering writes code. Cagan's four risks framework as the organizing lens for the entire course.
2. **PM vs PO vs BA — the honest take** — How these roles overlap in practice. When the title matters (enterprise orgs with formal Scrum). When it doesn't (startups, small teams). The spectrum from tactical (backlog management) to strategic (product vision).
3. **The product lifecycle** — Discovery → Definition → Development → Launch → Growth → Maturity. What PMs do at each stage. Where most PMs spend too much time (delivery) vs. where the leverage is (discovery).
4. **A day in the life** — Realistic PM day showing the balance of strategic work, execution, communication, and firefighting.

**Exercise 1:** "I'm starting as a PM on an internal knowledge management platform with 5,000 users and 43% weekly active usage. Using the four risks framework, help me identify the top questions I need to answer in my first two weeks. For each risk, suggest one concrete action I can take this week."

**Exercise 2:** "Compare these three role descriptions: Product Manager, Product Owner, and Business Analyst. What are the key differences in day-to-day work? Where do they overlap? If I could only hire one, which covers the most ground for an internal enterprise tool?"

**Apply to Your Work:** *What product do you own? Which of the four risks keeps you up at night — and which are you ignoring? Why?* → Prompt Copilot to analyze your biggest risk area and suggest a 2-week investigation plan.

**Commit:** `git commit -m "feat: write Module 0.1 - What Product Management Actually Is"`

---

### Task 14: Write Module 0.2 — Knowing Your Users Beyond Persona Templates

**Files:** `lesson-modules/0-pm-fundamentals/0.2-understanding-users/MODULE.md`

**Duration:** 25 min | **Prerequisites:** Module 0.1

**Practitioner anchor:** Teresa Torres's "Continuous Discovery Habits"

**Content sections:**
1. **Why most personas are useless** — They describe demographics, not behavior. A persona that says "35-year-old marketing manager" tells you nothing about product decisions. What makes a persona drive decisions: goals, frustrations, current workarounds, switching triggers.
2. **Jobs-to-Be-Done** — People don't want a knowledge platform. They want to find the right expert in under 2 minutes before a client call. JTBD as the superior lens. Job story format: "When [situation], I want to [motivation], so I can [outcome]."
3. **Continuous discovery** — Teresa Torres's approach: talk to users weekly, not quarterly. The interview snapshot technique. Why "we'll do research later" means "we'll never do research."
4. **The insight pyramid** — Observations → Patterns → Insights → Implications. Most PMs stop at observations ("users said X"). The value is in implications ("therefore we should Y").

**Exercise 1:** Upload NovaTech personas file. "Critique these personas — what's missing that would actually help me make product decisions? Rewrite the weakest persona using Jobs-to-be-Done lens. Include: 3 job stories, current workarounds, and switching triggers."

**Exercise 2:** "I need to set up a continuous discovery practice for KnowledgeHub. Design a weekly interview plan: who should I talk to, what questions should I ask, how do I recruit participants from 5,000 employees? Give me a 4-week ramp-up plan."

**Apply to Your Work:** *Think about the last product decision you made. Did you talk to a user first? Who is the user you understand least?* → Prompt to generate an interview guide for that user segment, with 10 questions that uncover jobs-to-be-done.

**Commit:** `git commit -m "feat: write Module 0.2 - Knowing Your Users Beyond Persona Templates"`

---

### Task 15: Write Module 0.3 — Prioritization That Actually Works

**Files:** `lesson-modules/0-pm-fundamentals/0.3-discovery-prioritization/MODULE.md`

**Duration:** 25 min | **Prerequisites:** Module 0.2

**Practitioner anchor:** Shreyas Doshi's LNO framework + Teresa Torres's Opportunity Solution Trees

**Content sections:**
1. **Why RICE/MoSCoW fail in practice** — Garbage-in-garbage-out, false precision, political gaming of scores. Teams spend hours scoring features and then ignore the results. When quantitative frameworks are still useful: forcing conversation, creating shared language.
2. **The LNO framework** — Leverage, Neutral, Overhead. The insight: prioritization starts with knowing which decisions matter, not scoring features. Spend 80% of your energy on Leverage work. Delegate or timebox Neutral. Eliminate or automate Overhead.
3. **Opportunity Solution Trees** — Connect business outcomes → opportunities → solutions → experiments. The antidote to "just build what the loudest stakeholder wants." How to use an OST to say no with evidence.
4. **The "stack rank, don't score" approach** — Instead of RICE scores, force-rank your top 10 features. If you can't decide between #3 and #4, you don't understand the problem well enough. Stack ranking reveals gaps in understanding.

**Exercise 1:** "Here are 8 feature requests for KnowledgeHub: [provide list with requester, context, and estimated effort]. Classify each as Leverage, Neutral, or Overhead. For the Leverage items, build an Opportunity Solution Tree connecting them to our goal of 60% WAU. Challenge me if any of my 'Leverage' items are actually Neutral."

**Exercise 2:** "Force-rank these 8 features. For each adjacent pair, explain why one ranks above the other. Flag any rankings where the evidence is weak and I should gather more data before committing."

**Apply to Your Work:** *List 3-5 things on your backlog right now. Which are Leverage? Which are Overhead you could delegate or drop?* → Prompt to challenge your current prioritization and identify hidden Overhead.

**Commit:** `git commit -m "feat: write Module 0.3 - Prioritization That Actually Works"`

---

### Task 16: Write Module 0.4 — Writing Requirements That Engineers Love

**Files:** `lesson-modules/0-pm-fundamentals/0.4-user-stories-requirements/MODULE.md`

**Duration:** 25 min | **Prerequisites:** Module 0.3

**Practitioner anchor:** The "one-pager" approach — ship context, not specs

**Content sections:**
1. **User stories are a conversation starter, not a contract** — The problem with over-specified requirements (engineers become ticket-takers) vs. under-specified ones (engineers build the wrong thing). The sweet spot: enough context to make good decisions, enough freedom to find the best solution.
2. **What engineers actually need** — Context about the problem. Constraints (performance, security, compatibility). What success looks like. What's explicitly out of scope. Open questions that need discussion. NOT: pixel-perfect specs with 47 acceptance criteria.
3. **The one-pager format** — Problem → Context → Proposed approach → Success criteria → Open questions. Fits on one page. Forces clarity. If you can't fit it on one page, you don't understand the problem yet.
4. **Acceptance criteria that matter** — Given/When/Then for critical paths only. The "3 acceptance criteria" rule: if you have more than 3, you're either specifying too much or the story is too big. Edge cases belong in conversation, not in Jira.

**Exercise 1:** "I need to write a one-pager for adding AI-powered search to KnowledgeHub. Current search takes 8 minutes on average and users give up. Help me draft the one-pager using the Problem → Context → Approach → Success → Open Questions format. Push back hard if my problem statement is vague or my success criteria aren't measurable."

**Exercise 2:** "Now write 3 user stories with acceptance criteria for the AI search feature. Each story should be small enough for one sprint. Use Given/When/Then format for acceptance criteria. Challenge me: are any of these stories too big?"

**Apply to Your Work:** *What's the next feature you need to spec? What's the actual problem it solves — in one sentence?* → Prompt to draft a one-pager and get Copilot to play devil's advocate on your assumptions.

**Commit:** `git commit -m "feat: write Module 0.4 - Writing Requirements That Engineers Love"`

---

### Task 17: Write Module 0.5 — Agile in Practice

**Files:** `lesson-modules/0-pm-fundamentals/0.5-agile-scrum/MODULE.md`

**Duration:** 20 min | **Prerequisites:** Module 0.4

**Practitioner anchor:** Cagan on dual-track agile + Allen Holub's pragmatic agile

**Content sections:**
1. **Scrum ceremonies — honestly** — Which earn their time: standups (if < 10 min), retros (if action items happen), sprint reviews (if stakeholders attend). Which become theater: status-meeting standups, checkbox retros, demo-nobody-watches reviews. How to fix the theatrical ones.
2. **The backlog is not a to-do list** — It's a prioritized list of hypotheses about what creates value. Items at the top are well-understood and ready. Items at the bottom are fuzzy bets. The middle is where the real PM work happens.
3. **Dual-track agile** — Discovery track (figuring out what to build) running alongside Delivery track (building it). Why most teams only do delivery and wonder why they build the wrong things. How PMs operate across both tracks.
4. **Sprint planning as negotiation** — How good PMs use planning to protect the team from overcommitment. The art of saying "we can do A or B this sprint, not both — which creates more value?" Velocity as a planning tool, not a performance metric.

**Exercise 1:** "Help me prepare for sprint planning. Team: 5 developers, 2-week sprint, ~40 story points capacity. Here are the top 10 backlog items [provide with estimates and dependencies]. Identify dependencies and risks. Recommend what fits. Flag items that need more refinement before committing."

**Exercise 2:** "Our retros have become stale — same complaints, no action. Design a retro format for a team of 10 that surfaces real issues and produces 2-3 concrete action items. Not another sticky-note exercise."

**Apply to Your Work:** *What's your biggest frustration with your current sprint process? Which ceremony feels like waste?* → Prompt to diagnose your specific agile dysfunction and suggest targeted fixes.

**Commit:** `git commit -m "feat: write Module 0.5 - Agile in Practice"`

---

### Task 18: Write Module 0.6 — Stakeholder Management: The Unwritten PM Skill

**Files:** `lesson-modules/0-pm-fundamentals/0.6-stakeholder-communication/MODULE.md`

**Duration:** 25 min | **Prerequisites:** Module 0.5

**Practitioner anchor:** Shreyas Doshi's pre-mortems + influence without authority

**Content sections:**
1. **Stakeholder management ≠ keeping people informed** — It's building the political capital to make good product decisions without getting overruled. The PM without stakeholder skills ships what they're told. The PM with stakeholder skills ships what's right.
2. **The real power/interest grid** — Who can kill your project? What do they actually care about? (Hint: it's rarely what they say in meetings. It's usually their own goals, fears, or political positioning.) How to discover the hidden motivations.
3. **Managing up** — Giving your VP what they need (confidence that things are on track) without becoming a status-reporting machine. The weekly 5-line update format. When to escalate vs. when to handle it yourself.
4. **The pre-mortem** — Shreyas Doshi's approach: "Imagine this initiative failed spectacularly 6 months from now. What went wrong?" The most underused PM tool. Forces the team to confront risks before they become crises.

**Exercise 1:** "Here are the key stakeholders for ProjectPulse [provide list with roles, concerns, influence level]. Build a power/interest grid. For each high-power stakeholder, draft a one-paragraph engagement strategy that addresses their hidden motivations, not just their stated concerns."

**Exercise 2:** "Run a pre-mortem for the KnowledgeHub AI search initiative. Imagine it's 6 months later and the project failed. Generate the top 7 reasons it failed — be creative and brutally honest. For each failure mode, suggest one preventive action we can take this month."

**Apply to Your Work:** *Who is the stakeholder you struggle with most? What do they actually care about — their stated concern vs. their real concern?* → Prompt to draft an engagement strategy for that specific person, with talking points for your next 1:1.

**Commit:** `git commit -m "feat: write Module 0.6 - Stakeholder Management"`

---

### Task 19: Restructure Level 1 modules

**Context:** The original Level 1 had 10 modules. The new Level 1 has 8 modules, restructured around PM pain points rather than Copilot features.

**Files:** Reorganize existing `lesson-modules/1-fundamentals/` directories

**Step 1:** Create new directory structure:
```bash
rm -rf lesson-modules/1-fundamentals/  # remove old structure
mkdir -p lesson-modules/1-copilot-teammate/{1.1-ai-working-environment,1.2-meeting-intelligence,1.3-user-research-synthesis,1.4-communication-that-lands,1.5-m365-integrated-workflow,1.6-deep-research-agents,1.7-context-and-memory,1.8-teams-outlook-mastery}
```

**Step 2:** Map old content to new modules. Reusable content from:
- Old 1.1 (Welcome) → New 1.1 (AI Working Environment) — access methods, setup
- Old 1.2 (Workspace Setup) → New 1.1 — ContextIQ, OneDrive, file upload
- Old 1.3 (First Tasks) → Split across New 1.2 (meetings), 1.3 (research), 1.4 (comms)
- Old 1.4 (Researcher/Analyst) → New 1.6 (Deep Research)
- Old 1.5 (Persona Prompting) → New 1.7 (Context & Memory)
- Old 1.6 (Memory) → New 1.7 (Context & Memory)
- Old 1.7 (M365 Navigation) → New 1.5 (M365 Integrated Workflow)
- Old 1.8 (Teams) → New 1.8 (Teams & Outlook Mastery)
- Old 1.9 (Outlook) → New 1.8 (Teams & Outlook Mastery)
- Old 1.10 (SharePoint) → Absorbed into 1.5 where relevant

**Commit:** `git commit -m "feat: restructure Level 1 directories for pain-point-based modules"`

---

### Task 20: Write Module 1.1 — Your AI Working Environment

**Files:** `lesson-modules/1-copilot-teammate/1.1-ai-working-environment/MODULE.md`

**Duration:** 15 min | **Prerequisites:** Level 0 (or PM experience)

**Pain point:** "I tried Copilot once, got a generic response, and went back to doing things manually."

**Content:**
1. **Mindset shift** — Copilot is a junior analyst on your team, not Google. Needs context and direction.
2. **Access methods** — Browser, Windows/Mac shortcuts, M365 in-app. When to use which.
3. **GCSE framework as habit** — Goal, Context, Source, Expectations. Every prompt uses it.
4. **Setting up your workspace** — ContextIQ, OneDrive file access, uploading company context.

**Exercise:** Upload all 4 NovaTech company context files. "You are my AI working partner. I'm a Senior PO at NovaTech. Read these files and tell me: what are the top 3 things I should be worried about this quarter, and why?"

**Apply to Your Work:** *What 3-5 documents define your product context?* → Upload them and ask Copilot to summarize your product landscape.

**Commit:** `git commit -m "feat: write Module 1.1 - Your AI Working Environment"`

---

### Task 21: Write Module 1.2 — Meeting Intelligence

**Files:** `lesson-modules/1-copilot-teammate/1.2-meeting-intelligence/MODULE.md`

**Duration:** 25 min | **Prerequisites:** Module 1.1

**Pain point:** "I spend 2 hours after every meeting writing up notes, action items, and follow-ups."

**Content:**
1. **The PM meeting burden** — 15-20 hrs/week in meetings. Leverage: extract max value with zero manual effort.
2. **Copilot in Teams** — Auto-transcription, summaries, action items. Setup walkthrough.
3. **Beyond auto-notes** — Analyzing meeting dynamics: commitments, unresolved disagreements, implicit decisions.
4. **The post-meeting workflow** — Transcript → structured notes → action items → follow-up emails, in 5 minutes.

**Exercise:** Upload NovaTech steering committee meeting notes. "Extract: (1) every decision, (2) every action item with owner and deadline, (3) unresolved disagreements, (4) draft follow-up email to the committee."

**Apply to Your Work:** *What fell through the cracks after your last important meeting?* → Build a reusable post-meeting workflow template.

**Commit:** `git commit -m "feat: write Module 1.2 - Meeting Intelligence"`

---

### Task 22: Write Module 1.3 — User Research Synthesis at Scale

**Files:** `lesson-modules/1-copilot-teammate/1.3-user-research-synthesis/MODULE.md`

**Duration:** 25 min | **Prerequisites:** Module 0.2 + Module 1.1

**Pain point:** "I have 12 interview transcripts and no time to synthesize them."

**Content:**
1. **Why PMs skip synthesis** — Tedious, subjective, time-consuming. Result: decisions based on the last interview you remember.
2. **AI-native synthesis workflow** — Upload → themes → patterns → insights → JTBD statements. A week → an hour.
3. **Interrogating Copilot's synthesis** — AI flattens nuance. Prompting for contradictions, outliers, surprises.
4. **The insight pyramid applied** — Observations → Patterns → Insights → Implications. Teaching Copilot to climb.

**Exercise:** Upload 4 NovaTech user interviews. "Synthesize using the insight pyramid. Cite sources. Flag contradictions. What would I miss if I only skimmed these?"

**Apply to Your Work:** *Do you have unprocessed user feedback?* → Upload it and find the signal.

**Commit:** `git commit -m "feat: write Module 1.3 - User Research Synthesis at Scale"`

---

### Task 23: Write Module 1.4 — Communication That Lands

**Files:** `lesson-modules/1-copilot-teammate/1.4-communication-that-lands/MODULE.md`

**Duration:** 25 min | **Prerequisites:** Module 1.1

**Pain point:** "I write the same update three different ways for three different audiences."

**Content:**
1. **The PM communication tax** — Same info, repackaged for engineers/execs/stakeholders/customers.
2. **Copilot in Outlook** — Drafting, tone adjustment, audience-aware rewriting.
3. **The communication pyramid** — Context → So What → Now What. Every PM communication.
4. **Difficult communications** — Pushing back, delivering bad news, escalating blockers. Copilot as draft partner.

**Exercise:** Transform a raw KnowledgeHub status update into: (1) Slack message for engineers, (2) email for VP, (3) executive briefing slides.

**Apply to Your Work:** *What communication are you dreading right now?* → Draft it with Copilot, critique the tone.

**Commit:** `git commit -m "feat: write Module 1.4 - Communication That Lands"`

---

### Task 24: Write Module 1.5 — Copilot Across M365

**Files:** `lesson-modules/1-copilot-teammate/1.5-m365-integrated-workflow/MODULE.md`

**Duration:** 20 min | **Prerequisites:** Module 1.1

**Pain point:** "I use Copilot in chat but forget it exists in Word, Excel, and PowerPoint."

**Content:**
1. **The AI layer** — Copilot isn't one tool, it's an AI layer across your entire work surface.
2. **Word** — Drafting PRDs, rewriting sections, summarizing documents. "Rewrite" as a thinking tool.
3. **Excel** — Data analysis without formulas. Trends, pivot tables, cohort analysis in plain English.
4. **PowerPoint** — Deck drafts from outlines. Honest about what works (structure) and what doesn't (design).

**Exercise:** Multi-app workflow — Copilot chat → Excel → Word → PowerPoint. One KnowledgeHub insight, four apps, 15 minutes.

**Apply to Your Work:** *Which M365 app do you spend the most time in? What's repetitive?* → Build a Copilot shortcut.

**Commit:** `git commit -m "feat: write Module 1.5 - Copilot Across M365"`

---

### Task 25: Write Module 1.6 — Deep Research with Agents

**Files:** `lesson-modules/1-copilot-teammate/1.6-deep-research-agents/MODULE.md`

**Duration:** 25 min | **Prerequisites:** Module 1.1

**Pain point:** "Competitive analysis and market research eat my entire Friday."

**Content:**
1. **Researcher vs Analyst agents** — What they are, how they differ, when to use which.
2. **The PM research stack** — Competitive intel, market sizing, tech trends, customer sentiment → agent mappings.
3. **Chaining agents** — Researcher finds → You filter → Analyst processes → You decide.
4. **BS detection** — Hallucination patterns, recency issues, source quality. When NOT to trust output.

**Exercise:** "Research competitive landscape for internal knowledge management: Confluence, Notion, Guru, Tettra. Pricing, differentiators, enterprise adoption, weaknesses. Where does KnowledgeHub have a defensible advantage?"

**Apply to Your Work:** *What research question have you been putting off?* → Tackle it now with the Researcher agent.

**Commit:** `git commit -m "feat: write Module 1.6 - Deep Research with Agents"`

---

### Task 26: Write Module 1.7 — Building Context & Memory

**Files:** `lesson-modules/1-copilot-teammate/1.7-context-and-memory/MODULE.md`

**Duration:** 20 min | **Prerequisites:** Module 1.1

**Pain point:** "Every Copilot conversation starts from scratch."

**Content:**
1. **Copilot Memory** — What it retains, what it doesn't, how to manage it actively.
2. **Context priming** — A reusable prompt that loads your full product context in 30 seconds.
3. **Persona prompting** — Teaching Copilot to think like your CTO, skeptical stakeholder, newest user. Perspective-shifting as decision-making tool.
4. **Building your prompt library** — The 10-15 prompts every PM reuses weekly.

**Exercise:** Build a NovaTech context primer. Test it: "Using this context, what should my agenda be for this week's stakeholder sync?"

**Apply to Your Work:** *Write your own context primer. What does Copilot need to know to be useful every day?* → Build, test, save it.

**Commit:** `git commit -m "feat: write Module 1.7 - Building Context and Memory"`

---

### Task 27: Write Module 1.8 — Teams & Outlook Mastery

**Files:** `lesson-modules/1-copilot-teammate/1.8-teams-outlook-mastery/MODULE.md`

**Duration:** 25 min | **Prerequisites:** Module 1.1

**Pain point:** "I live in Teams and Outlook but Copilot there feels like a toy."

**Content:**
1. **Teams beyond meetings** — Channel summarization, catching up after PTO, chat intelligence.
2. **Outlook beyond drafting** — Email prioritization, thread summarization, scheduling intelligence.
3. **Monday morning catch-up** — A single 10-minute routine that processes your weekend backlog.
4. **Daily rhythm** — Morning triage, pre-meeting prep, post-meeting follow-up, EOD synthesis. Habitual AI augmentation.

**Exercise:** "It's Monday morning. I was out Friday. Summarize: Teams channels, urgent emails, today's meetings and what to prepare."

**Apply to Your Work:** *Design your ideal Monday morning Copilot routine.* → Build and save your workflow.

**Commit:** `git commit -m "feat: write Module 1.8 - Teams and Outlook Mastery"`

---

### Task 28: Create Level 2 directory structure and write modules

**Context:** Level 2 reframes the original "Advanced Enterprise PM Workflows" into "Strategic PM with AI" — broader, deeper, more practitioner-driven.

**New Level 2 structure:**

| Module | Title | Duration | Practitioner Anchor |
|--------|-------|----------|-------------------|
| 2.1 | Writing PRDs That Get Buy-In | 35 min | Cagan's "evangelize, not just document" |
| 2.2 | Data-Driven Decisions with AI | 30 min | Lenny Rachitsky's product metrics hierarchy |
| 2.3 | Product Strategy & Roadmapping | 35 min | Gibson Biddle's DHM model (Delight, Hard-to-copy, Margin-enhancing) |
| 2.4 | Running Effective Product Reviews | 25 min | Shreyas Doshi's "high-agency PM" |
| 2.5 | Navigating Organizational Politics | 25 min | Pragmatic Institute's "political navigation" |

```bash
rm -rf lesson-modules/2-advanced-pm-work/
mkdir -p lesson-modules/2-strategic-pm/{2.1-prds-that-get-buyin,2.2-data-driven-decisions,2.3-strategy-and-roadmapping,2.4-product-reviews,2.5-navigating-politics}
```

**Module 2.1: Writing PRDs That Get Buy-In (35 min)**
- Enterprise PRDs are different: business case + ROI + stakeholder analysis + governance
- The PRD as an alignment tool, not a spec document. Cagan: "The purpose isn't the document, it's the thinking."
- Multi-perspective review: get Copilot to critique your PRD as your CTO, your VP, your most skeptical stakeholder
- Copilot workflow: Business context → Solution framing → RACI → Governance → Multi-persona review

**Module 2.2: Data-Driven Decisions with AI (30 min)**
- Lenny's metrics hierarchy: North Star → Input metrics → Health metrics
- Using Copilot + Excel to analyze adoption funnels, cohort retention, feature usage
- The "what story does this data tell?" prompt — turning numbers into narratives
- Statistical BS detection: when Copilot's analysis is misleading

**Module 2.3: Product Strategy & Roadmapping (35 min)**
- Gibson Biddle's DHM model: Delight users, Hard-to-copy, Margin-enhancing
- Strategy is about what you say NO to. Using Copilot to stress-test your strategy.
- Roadmapping: time-based vs. outcome-based vs. now/next/later. When each works.
- Using Copilot to build and pressure-test a product strategy document

**Module 2.4: Running Effective Product Reviews (25 min)**
- The product review as your most important recurring meeting
- Preparing: the right data, the right narrative, the right asks
- Handling tough questions: using Copilot to pre-generate challenges and prepare responses
- Post-review: turning decisions into action

**Module 2.5: Navigating Organizational Politics (25 min)**
- Politics isn't dirty — it's how decisions get made in organizations
- Reading the room: identifying power dynamics, hidden agendas, and decision-making patterns
- Building allies: how to create a coalition for your product vision
- Using Copilot to prepare for political situations: war-gaming conversations, drafting influence strategies

Write each module following the standard template (content sections + exercises + Apply to Your Work).

**Commit after each module.**

---

### Task 29: Create Level 3 directory structure and write modules

**Context:** Level 3 transforms from "just visuals" into a capstone synthesis level — the learner runs a full product cycle using everything they've learned.

**New Level 3 structure:**

| Module | Title | Duration | Focus |
|--------|-------|----------|-------|
| 3.1 | Visual Communication for PMs | 25 min | Image generation, diagrams, presentation visuals |
| 3.2 | The Capstone: Run a Product Cycle | 40 min | End-to-end: discovery → spec → build case → present |
| 3.3 | Building Your Personal AI Toolkit | 20 min | Custom prompts, workflows, habits for ongoing use |
| 3.4 | What's Next: The AI-Era PM | 15 min | Future of PM + AI, continuous learning, course conclusion |

```bash
rm -rf lesson-modules/3-product-visuals/
mkdir -p lesson-modules/3-ten-x-pm/{3.1-visual-communication,3.2-capstone-product-cycle,3.3-personal-ai-toolkit,3.4-whats-next}
```

**Module 3.1: Visual Communication for PMs (25 min)**
- DALL-E 3 and Microsoft Designer for PM visuals
- Practical PM visuals: persona cards, user journey maps, architecture diagrams, launch assets
- The "show, don't tell" principle for stakeholder communications
- When AI visuals work (concepts, early drafts) and when they don't (polished brand work)

**Module 3.2: The Capstone — Run a Product Cycle (40 min)**
- This is where it all comes together. The learner runs through an entire product cycle for a new NovaTech feature:
  1. **Discovery:** Research the opportunity using agents (Module 1.6)
  2. **User understanding:** Synthesize user needs (Modules 0.2, 1.3)
  3. **Prioritization:** Evaluate against competing priorities (Module 0.3)
  4. **Requirements:** Write the one-pager (Module 0.4)
  5. **Stakeholder alignment:** Prepare the business case and get buy-in (Modules 0.6, 2.1)
  6. **Communication:** Present to leadership (Module 1.4, 3.1)
- Each step uses Copilot. The learner produces a complete product artifact set.
- "Apply to Your Work" version: run this same cycle for a real initiative at your job.

**Module 3.3: Building Your Personal AI Toolkit (20 min)**
- Review: the prompts, workflows, and habits from the entire course
- Build your personal "PM Operating System" with Copilot:
  - Morning routine prompts
  - Weekly workflow templates
  - Stakeholder communication templates
  - Research and analysis workflows
  - Meeting intelligence setup
- Export your toolkit — a document you take with you

**Module 3.4: What's Next — The AI-Era PM (15 min)**
- How AI is changing PM: from feature factory to outcome-driven, from gut feel to data-informed
- Skills that matter MORE with AI: judgment, taste, empathy, storytelling, leadership
- Skills that matter LESS: data crunching, status reporting, document formatting
- Continuous learning: communities, newsletters, courses for staying current
- Course conclusion and next steps

Write each module following the standard template. The capstone (3.2) should be the most detailed — it references every previous module.

**Commit after each module.**

---

## Phase 5: Integrate Everything into the Platform

### Task 30: Write the complete new courseStructure.ts

**Files:** `viewer/src/data/courseStructure.ts`, `course-structure.json`

Rewrite completely with:
- New course title: "The AI-Augmented Product Manager"
- New description and metadata
- 4 levels, 23 modules, ~11 hours
- All new module paths, titles, durations, objectives
- Target audience: "Product Managers, Product Owners, Business Analysts — junior to experienced"

Keep TypeScript types unchanged. Update `course-structure.json` to match.

**Commit:** `git commit -m "feat: complete courseStructure.ts rewrite with 23-module structure"`

---

### Task 31: Update copy-content script and verify

**Files:** `viewer/scripts/copy-content.js`

Verify the script handles:
- New `0-pm-fundamentals/` directory
- Renamed `1-copilot-teammate/` (was `1-fundamentals/`)
- Renamed `2-strategic-pm/` (was `2-advanced-pm-work/`)
- Renamed `3-ten-x-pm/` (was `3-product-visuals/`)

Test: `npm run copy-content && ls -R public/content/lesson-modules/`

**Commit:** `git commit -m "fix: update copy-content for new directory structure"`

---

### Task 32: Update App.tsx routing

**Files:** `viewer/src/App.tsx`

Verify HashRouter handles module IDs starting with "0." (Level 0). The route pattern `/module/:moduleId` should work with "0.1" through "3.4" without changes, but verify.

**Commit if needed:** `git commit -m "fix: verify routing handles Level 0 module IDs"`

---

### Task 33: Update sidebar/navigation for 4 levels

**Files:** `viewer/src/components/Layout/Sidebar.tsx` (or wherever level navigation lives)

Ensure the sidebar renders 4 levels correctly. Check for any hardcoded "Level 1/2/3" references and update for Level 0.

**Commit:** `git commit -m "feat: update sidebar navigation for 4-level structure"`

---

## Phase 6: Final Verification & Polish

### Task 34: Full Accenture audit

```bash
grep -rni "accenture\|AKX\|ADH\|andersen\|consulting firm\|700,000\|A100FF\|managing director" \
  --include="*.md" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.json" --include="*.css" .
```

Fix any remaining references. Commit.

---

### Task 35: Build and run dev server

```bash
cd viewer && npm run build
```

- Zero TypeScript errors
- Dev server starts cleanly
- All 23 modules accessible
- Blue theme throughout
- NovaTech context everywhere
- Progress tracking works across 23 modules

Fix any issues. Commit.

---

### Task 36: Update notebooklm-upload if present

Regenerate flattened content copies from updated sources.

**Commit:** `git commit -m "feat: regenerate notebooklm-upload with new course content"`

---

### Task 37: Final README and documentation

Write a polished README.md that reflects the new course:
- Course title and positioning
- Module listing with descriptions
- Getting started instructions
- Tech stack
- Development commands
- Deployment instructions

**Commit:** `git commit -m "feat: write polished README for AI-Augmented PM course"`

---

## Summary

| Phase | Tasks | Description |
|-------|-------|-------------|
| 1 | 1 | Fork project |
| 2 | 2-8 | De-Accenture all content → NovaTech Solutions |
| 3 | 9-11 | Rebrand theme + update configs |
| 4 | 12-29 | Write all 23 module content files (Level 0: 6 new, Level 1: 8 restructured, Level 2: 5 rewritten, Level 3: 4 rewritten) |
| 5 | 30-33 | Integrate into React platform |
| 6 | 34-37 | Audit, build, verify, polish |

**Total: 37 tasks across 6 phases**
**New course: 23 modules, ~11 hours, 4 levels**
**Every module: practitioner wisdom + AI workflow + simulation exercise + Apply to Your Work reflection**

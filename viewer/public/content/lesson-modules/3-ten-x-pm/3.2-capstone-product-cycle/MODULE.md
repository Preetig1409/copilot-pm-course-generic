# Module 3.2: The Capstone — Run a Product Cycle

**Duration:** 40 minutes
**Prerequisites:** All previous levels completed (Levels 0, 1, 2, and Module 3.1)

---

## What You'll Learn

By the end of this module, you will:
1. Execute a complete product cycle — from discovery through launch communication — for a single initiative
2. Apply every major skill and Copilot workflow from this course to a realistic product scenario
3. Produce a full set of product artifacts: research summary, JTBD analysis, prioritization, spec, business case, stakeholder plan, and launch communications
4. Build the muscle memory to run this same cycle for any real initiative at your job

---

## The Capstone Challenge

This is the most important module in the course. Everything comes together here.

Over the past 22 modules, you have learned PM craft, mastered Copilot workflows, developed strategic thinking, and built visual communication skills. Now you will use all of it — in sequence — the way it actually works in real PM life.

**The Feature:** NovaTech leadership wants to add **Smart Recommendations** to KnowledgeHub. Instead of employees searching for what they need, KnowledgeHub would proactively surface relevant documents, experts, and knowledge based on the employee's role, current projects, and recent searches.

This is a major initiative. It needs discovery, validation, specification, and stakeholder buy-in. You are going to run the full cycle.

**What you will produce by the end of this module:**

| Artifact | Phase |
|---|---|
| Competitive research summary | Phase 1: Discovery |
| JTBD analysis for Smart Recommendations | Phase 2: User Understanding |
| Prioritization framework and recommendation | Phase 3: Prioritization |
| One-pager specification with user stories | Phase 4: Requirements |
| Business case with ROI and strategy alignment | Phase 5: Strategy Alignment |
| Stakeholder engagement plan and pre-mortem | Phase 6: Stakeholder Buy-In |
| Launch communication drafts and visuals | Phase 7: Communication |

Each phase references the module where you first learned the skill. If any phase feels unfamiliar, go back and review that module before continuing.

---

## Phase 1: Discovery

*Skills from Modules 0.2 and 1.6*

Before writing a single line of spec, you need to understand the opportunity. What do users actually need? What competitors offer this? What is technically feasible?

Smart Recommendations is not a new idea. Major platforms — Google Workspace, Notion, Confluence, Slack — have all explored proactive content surfacing. Some do it well. Many have failed. Your job is to learn from their attempts before committing NovaTech's resources.

**What good discovery produces:**
- Clarity on what "smart recommendations" actually means (there are many flavors)
- Competitive landscape — who does this, how, and what results they report
- Technical feasibility signals — what data does NovaTech already have that could power recommendations?
- Risk flags — privacy concerns, cold-start problems, recommendation fatigue

### Exercise 1: Competitive Research

**Context:** You need to understand the competitive landscape before proposing Smart Recommendations. What have other platforms done? What worked and what did not?

**Your Copilot Prompt:**
```
I'm a Senior Product Owner at NovaTech Solutions (5,000-person enterprise SaaS company). I own KnowledgeHub, our internal knowledge management platform (43% WAU, target 60%).

Leadership wants us to explore adding "Smart Recommendations" — proactively surfacing relevant documents, experts, and knowledge to employees based on their role, projects, and search history.

Before I write a spec, I need competitive research. Help me analyze:

1. What major platforms offer proactive content/knowledge recommendations (Google Workspace, Notion, Confluence, Slack, Microsoft Viva Topics, etc.)
2. For each: What approach do they take? What signals do they use? What results have they reported?
3. Common failure modes — recommendation fatigue, cold-start problems, irrelevant suggestions, privacy concerns
4. What NovaTech can learn from these examples — both what to emulate and what to avoid
5. Key differentiators we could pursue given our 5,000-person scale and enterprise SaaS context

Structure this as a competitive research summary I could share with my engineering lead and product leadership.
```

**What to Look For:**
- Good response: Specific analysis of real platforms with honest assessment of what works and what does not. Identifies the cold-start problem, recommendation fatigue, and privacy as real risks. Provides actionable takeaways, not just a list of features.
- Bad response: Generic description of recommendation systems without competitive specifics. No mention of failure modes. Overly optimistic about what recommendations can achieve.

---

## Phase 2: User Understanding

*Skills from Modules 0.2 and 1.3*

Discovery told you what the market looks like. Now you need to understand what NovaTech's users actually need. Not "smart recommendations" — that is a solution. The need is underneath.

Think back to Module 0.2: users do not want a recommendation engine. They want to walk into a meeting prepared. They want to stop spending 30 minutes searching for something a colleague already created. They want to feel like the company's collective knowledge is accessible, not buried.

### Exercise 2: JTBD Analysis

**Context:** You need to understand the jobs that Smart Recommendations would fulfill. What situations trigger the need? What are users currently doing instead?

**Your Copilot Prompt:**
```
I'm building the user understanding for a "Smart Recommendations" feature in KnowledgeHub, NovaTech's internal knowledge management platform.

Current state: Employees search manually when they need knowledge. 43% weekly active usage. When search fails (which is ~70% of the time), they ask colleagues on Teams or give up.

Help me create a Jobs-to-Be-Done analysis for Smart Recommendations:

1. Identify 4-5 distinct jobs that proactive recommendations could fulfill. Use the format: "When [situation], I want to [motivation], so I can [outcome]."

2. For each job:
   - What is the current workaround? (What do employees do today?)
   - What is the switching trigger? (What would make them start relying on recommendations?)
   - What is the abandon trigger? (What would make them ignore recommendations?)
   - Who is the primary persona for this job?

3. Prioritize these jobs: Which 2 jobs, if solved well, would drive the most adoption?

4. Identify the target persona for Smart Recommendations — the user segment most likely to adopt first and evangelize to others.

Base this on NovaTech's context: 5,000 employees, enterprise SaaS, with roles including consultants, managers, delivery leads, and executives. KnowledgeHub stores project documentation, best practices, templates, and expert profiles.
```

**What to Look For:**
- Good response: Job stories that capture real situations with time pressure and context — not abstract needs. Workarounds that reflect actual enterprise behavior (asking on Teams, maintaining personal bookmark folders, emailing a known expert). Abandon triggers that are realistic (irrelevant recommendations erode trust quickly).
- Bad response: Generic JTBD statements that could apply to any product. No switching or abandon triggers. Target persona based on demographics rather than behavior.

---

## Phase 3: Prioritization

*Skills from Module 0.3*

You now know the competitive landscape and the user needs. But Smart Recommendations is not the only thing on KnowledgeHub's roadmap. Should you build this? Where does it rank against other priorities?

Remember Module 0.3 and Shreyas Doshi's LNO framework: Is this Leverage (disproportionate impact), Neutral (expected outcome), or Overhead (necessary but not differentiating)?

### Exercise 3: Prioritize the Initiative

**Context:** You need to evaluate Smart Recommendations against KnowledgeHub's other priorities and make a recommendation to leadership.

**Your Copilot Prompt:**
```
I'm the Senior PO for KnowledgeHub at NovaTech. I need to prioritize "Smart Recommendations" against other KnowledgeHub initiatives.

Current KnowledgeHub backlog priorities:
1. Smart Recommendations — Proactive content surfacing based on role, projects, search history
2. Search Relevance Improvements — Better ranking algorithm, filters, and result previews
3. Expert Directory Enhancement — Richer profiles, skill tagging, availability status
4. Mobile App — Native mobile access to KnowledgeHub
5. Content Quality Scoring — Automated flagging of outdated or low-quality content
6. API Integration — Connect KnowledgeHub to Jira, Salesforce, and internal tools

Help me evaluate using two frameworks:

Framework 1 — LNO Analysis (Shreyas Doshi):
For each initiative, classify as Leverage, Neutral, or Overhead. Justify the classification.

Framework 2 — Opportunity Solution Tree (Teresa Torres):
The desired outcome is "Increase WAU from 43% to 60%."
Map these initiatives as potential solutions to the opportunities that drive that outcome.

Then give me your prioritization recommendation:
- What should we build first and why?
- What depends on what? (Are there prerequisites?)
- What is the honest case AGAINST building Smart Recommendations right now?

I need this analysis for a product leadership discussion.
```

**What to Look For:**
- Good response: Recognizes that Search Relevance Improvements may be a prerequisite for Smart Recommendations (you cannot recommend well if base search is broken). Honest about the case against — Smart Recommendations is high-effort and may not move WAU if the foundational experience is poor. LNO classification is justified with reasoning, not just labels.
- Bad response: Ranks Smart Recommendations first because the user asked about it. No consideration of dependencies. Treats all frameworks as equally weighted without synthesis.

---

## Phase 4: Requirements

*Skills from Module 0.4*

Assuming Smart Recommendations moves forward (perhaps alongside Search Relevance Improvements as a prerequisite), you need a one-pager specification. Not a full PRD yet — this is the document that gets alignment before you invest in a detailed spec.

### Exercise 4: Write the One-Pager

**Context:** You need a concise specification that communicates what Smart Recommendations is, who it is for, and what success looks like — in a format your engineering lead and product VP can review in 5 minutes.

**Your Copilot Prompt:**
```
Write a one-pager specification for Smart Recommendations in KnowledgeHub.

Context:
- Product: KnowledgeHub (internal knowledge management, 5,000 users, 43% WAU)
- Company: NovaTech Solutions (enterprise SaaS)
- Target persona: Mid-level consultants and managers who need knowledge for client work and project delivery
- Key insight from JTBD analysis: The highest-value job is "When I'm preparing for a client meeting, I need relevant past work and experts surfaced automatically, so I don't spend 30 minutes searching"

One-pager format:
1. Problem Statement (3-4 sentences — what is broken today)
2. Proposed Solution (what Smart Recommendations does, in plain language)
3. Target Users (who benefits first)
4. Key User Stories (3-4 user stories with acceptance criteria)
5. Success Metrics (how we know this is working)
6. Key Risks (what could go wrong)
7. Dependencies (what needs to be true for this to succeed)
8. Rough Scope (what is IN v1 and what is NOT)

Keep it to one page. No jargon. An executive and an engineer should both be able to read this and understand the initiative.
```

**What to Look For:**
- Good response: Problem statement rooted in user behavior, not technology. User stories with specific acceptance criteria that are testable. Success metrics tied to the WAU goal. Risks that include cold-start problem and recommendation quality. Honest "NOT in v1" section that prevents scope creep.
- Bad response: Problem statement focused on "we don't have recommendations." User stories that are feature descriptions. Success metrics that are vanity (number of recommendations shown vs. recommendations acted on).

---

## Phase 5: Strategy Alignment

*Skills from Modules 2.1 and 2.3*

You have a spec. Now you need the business case and strategic alignment. This is where you convince leadership that Smart Recommendations is worth the investment — not just a good idea, but a strategically sound investment with measurable ROI.

### Exercise 5: Build the Business Case

**Context:** You need to prepare a business case with ROI analysis and show how Smart Recommendations aligns with NovaTech's product strategy.

**Your Copilot Prompt:**
```
Help me build the business case for Smart Recommendations in KnowledgeHub.

Context:
- NovaTech Solutions: 5,000 employees, enterprise SaaS company
- KnowledgeHub WAU: 43% (target 60%)
- Average employee salary: $95,000/year
- Current time spent searching for knowledge: estimated 8 minutes per search, 3-4 searches per day for active users
- Smart Recommendations goal: reduce search time by 60%, increase search success rate from 30% to 85%

Build the business case with:

1. ROI Calculation
   - Time savings per employee per week
   - Productivity value at scale (5,000 employees)
   - Conservative, moderate, and optimistic scenarios
   - Payback period assuming $500K development investment

2. Strategic Alignment (DHM Model — Delight, Hard-to-Copy, Margin-Enhancing)
   - How does Smart Recommendations score on each dimension?
   - How does this align with NovaTech's broader product strategy?

3. Risk-Adjusted Business Case
   - What if adoption is lower than expected?
   - What if recommendation quality is mediocre at launch?
   - What is the minimum viable outcome that still justifies the investment?

4. Comparison to Alternatives
   - What if we improve basic search instead? (Lower cost, lower ceiling)
   - What if we do nothing? (Cost of inaction)

Format this for a product leadership review — quantified, honest, and decision-ready.
```

**What to Look For:**
- Good response: ROI calculation with realistic assumptions and multiple scenarios. Honest about risks — recommendation quality at launch is uncertain. DHM analysis that acknowledges Smart Recommendations may not be "hard to copy" without proprietary data advantages. Cost of inaction included.
- Bad response: Single optimistic ROI scenario. No risk adjustment. Strategic alignment that says "yes" to everything without critical analysis.

---

## Phase 6: Stakeholder Buy-In

*Skills from Modules 0.6, 2.4, and 2.5*

You have the spec and the business case. Now you need to get people on board. This means understanding who your stakeholders are, what they care about, what objections they will raise, and how to build a coalition before the formal review.

### Exercise 6: Stakeholder Strategy and Pre-Mortem

**Context:** You need to prepare for the product review where Smart Recommendations will be approved or deprioritized. You want to walk in with allies, pre-addressed objections, and a clear ask.

**Your Copilot Prompt:**
```
I'm preparing to get Smart Recommendations approved at NovaTech. Help me build my stakeholder strategy.

Key stakeholders:
- VP of Product (my manager) — Cares about portfolio balance and roadmap commitments
- CTO — Cares about technical feasibility, AI/ML infrastructure, data privacy
- VP of Engineering — Cares about team capacity, technical debt, delivery timelines
- CFO — Cares about ROI, budget allocation, competing investment priorities
- Head of Customer Success — Cares about whether this improves client-facing employees' effectiveness
- CISO — Cares about data privacy, what employee behavior data we are collecting and using

For each stakeholder:
1. What is their likely position on Smart Recommendations? (Champion / Supportive / Neutral / Skeptical / Opponent)
2. What is their #1 concern?
3. What evidence or argument would move them from their current position to supportive?
4. When should I engage them — before or during the formal review?

Then run a pre-mortem:
"It's 6 months from now and Smart Recommendations has failed. What went wrong?"
Give me the 5 most likely failure modes and a mitigation plan for each.

Finally, create a stakeholder engagement timeline:
- Who do I talk to first, second, third?
- What do I share with each person?
- What is my ask in each conversation?
- How do I build a coalition before the formal product review?
```

**What to Look For:**
- Good response: Identifies the CISO and CTO as likely skeptics with legitimate concerns (employee behavior tracking, AI infrastructure requirements). Pre-mortem includes realistic failures: recommendation quality too low at launch, employees ignore recommendations because they are irrelevant, privacy backlash from tracking search behavior. Engagement timeline starts with natural allies and works toward skeptics.
- Bad response: Assumes all stakeholders will be supportive. Pre-mortem only includes technical failures. No coalition-building strategy.

---

## Phase 7: Communication

*Skills from Modules 1.4 and 3.1*

The review is approved (congratulations). Now you need to communicate the initiative — internally to the team, upward to executives, and across the organization for the eventual launch.

### Exercise 7: Launch Communication and Visuals

**Context:** Smart Recommendations has been approved. You need to communicate this to three audiences: the engineering team (who will build it), the executive team (who approved it), and the broader NovaTech organization (who will use it).

**Your Copilot Prompt:**
```
Smart Recommendations for KnowledgeHub has been approved at NovaTech. Help me create launch communication for three audiences:

1. Engineering Team Kickoff Message
   - What we are building and why (link to the one-pager)
   - Key technical considerations and constraints
   - Timeline and milestones
   - How success will be measured
   - Tone: Collaborative, technically honest, energizing

2. Executive Update (for the VP of Product to share upward)
   - 3-sentence summary of the initiative
   - Investment and expected ROI
   - Key milestones and decision points
   - Risks being actively managed
   - Tone: Concise, confident, data-driven

3. Organization-Wide Announcement (for when v1 launches)
   - What Smart Recommendations does, in plain language a non-technical employee understands
   - How it helps them specifically (save time, find knowledge faster, discover experts)
   - How to use it (it's automatic — just open KnowledgeHub)
   - What to expect in v1 (set realistic expectations)
   - Tone: Excited but honest, employee-centric

Also suggest a visual for the organization-wide announcement — describe what it should show and provide an image generation prompt I can use to create it.
```

**What to Look For:**
- Good response: Three clearly distinct communications that match each audience's needs. Engineering kickoff is technically specific. Executive update is concise with metrics. Org announcement is jargon-free and employee-centric. Visual suggestion is practical and communicates the before/after story.
- Bad response: Three versions that sound the same. Org announcement full of technical jargon. No visual suggestion.

---

## What You've Produced

Take a moment to review your artifacts. Through this capstone, you have created:

- **A competitive research summary** — grounding the initiative in market reality
- **A JTBD analysis** — ensuring you are solving real user needs, not building features
- **A prioritization framework** — showing where Smart Recommendations fits against other priorities
- **A one-pager specification** — the artifact that aligns the team before detailed work begins
- **A business case with ROI** — quantified justification for the investment
- **A stakeholder engagement plan** — the political strategy that gets initiatives approved
- **A product review preparation** — pre-mortem, objection handling, coalition building
- **Launch communication drafts** — three audience-appropriate messages ready to customize

This is what a product cycle looks like when you use Copilot as a thinking partner through every phase.

---

## Apply to Your Work

**This is the big one.**

You just ran a full product cycle for a fictional NovaTech feature. Now do it for real.

**Reflect:**
1. What is the most important initiative on your roadmap right now — the one where getting the artifacts right would make the biggest difference?
2. Which phase of the product cycle is your weakest? Where do you usually cut corners?
3. Who is the stakeholder you most need to convince? What would it take to walk into that conversation fully prepared?

**Your Prompt:**
```
I'm a PM for [YOUR PRODUCT] at [YOUR COMPANY]. I'm working on [YOUR INITIATIVE — describe it in 2-3 sentences].

I just completed a capstone exercise running a full product cycle using Copilot. I want to apply the same 7-phase approach to my real initiative:

Phase 1 — Discovery: Help me research the competitive landscape for [YOUR INITIATIVE]
Phase 2 — User Understanding: Help me create a JTBD analysis for [YOUR USERS]
Phase 3 — Prioritization: Help me evaluate [YOUR INITIATIVE] against [YOUR OTHER PRIORITIES]
Phase 4 — Requirements: Help me write a one-pager spec for [YOUR INITIATIVE]
Phase 5 — Strategy Alignment: Help me build the business case with ROI
Phase 6 — Stakeholder Buy-In: Help me create a stakeholder engagement plan for [YOUR KEY STAKEHOLDERS]
Phase 7 — Communication: Help me draft launch communications for [YOUR AUDIENCES]

Let's start with Phase 1. Here is what I know so far: [WHAT YOU KNOW]
```

**You should now have:**
- A template for running any initiative through a complete product cycle
- Confidence that you can produce every major PM artifact using Copilot as a thinking partner
- A real initiative identified that you will apply this to starting this week

---

## Key Takeaways

- A complete product cycle has seven phases: Discovery, User Understanding, Prioritization, Requirements, Strategy Alignment, Stakeholder Buy-In, and Communication. Most PMs skip at least two of these and wonder why their initiatives stall.
- Copilot does not replace your judgment — it accelerates the production of artifacts so you can spend more time on the thinking. The competitive research takes 10 minutes instead of 2 hours. The one-pager takes 15 minutes instead of a full afternoon. That time goes back into the strategic work only you can do.
- Every phase builds on the one before it. The JTBD analysis informs the spec. The spec informs the business case. The business case informs the stakeholder strategy. Skip a phase and the downstream artifacts are weaker.

---

## What's Next

Module 3.3 helps you take everything you have learned across 23 modules and build your personal AI toolkit — the daily, weekly, and monthly workflows that make this sustainable. The capstone showed you what a full cycle looks like. The toolkit ensures you keep doing it.

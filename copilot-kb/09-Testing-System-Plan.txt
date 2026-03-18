# Testing System Plan: Frictionless Integrated Feedback

> **Goal:** A seamless, M365-native system where testers can ask questions about the course, submit free-form feedback that gets AI-structured, and track feedback through a review pipeline — all without leaving the tools they already use.

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        TESTER'S EXPERIENCE                         │
│                                                                     │
│  "I have a question"              "I have feedback"                 │
│         │                                │                          │
│         ▼                                ▼                          │
│  ┌─────────────┐                 ┌──────────────┐                  │
│  │  Copilot    │                 │   Copilot    │                  │
│  │  Chat       │                 │   Chat       │                  │
│  │             │                 │              │                  │
│  │ /reference  │                 │ Free-form    │                  │
│  │ knowledge   │                 │ feedback →   │                  │
│  │ base files  │                 │ AI structures│                  │
│  │             │                 │ + asks       │                  │
│  │ Gets answer │                 │ follow-ups   │                  │
│  └─────────────┘                 └──────┬───────┘                  │
│                                         │                          │
│                                         ▼                          │
│                                  ┌──────────────┐                  │
│                                  │ Microsoft    │                  │
│                                  │ Forms        │                  │
│                                  │ (structured  │                  │
│                                  │  submission) │                  │
│                                  └──────┬───────┘                  │
│                                         │ Power Automate           │
│                                         ▼                          │
│                                  ┌──────────────┐                  │
│                                  │ Planner      │                  │
│                                  │ Board        │                  │
│                                  │ in Teams     │                  │
│                                  └──────────────┘                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

The system has **three layers** that connect into one seamless experience:

| Layer | What | How |
|-------|------|-----|
| **1. Knowledge Base** | All course + testing docs in a shared location that Copilot can reference | SharePoint document library + Copilot file referencing |
| **2. Feedback Capture** | Conversational, free-form → structured feedback | Copilot prompt templates + Microsoft Forms |
| **3. Review Pipeline** | Track feedback through lead review → cross-team → approved | Microsoft Planner board in Teams |

---

## Layer 1: Knowledge Base

### What to Set Up

Create a **SharePoint document library** (or shared OneDrive folder) called `Course Testing Hub` with this structure:

```
Course Testing Hub/
├── 📁 Course Content/
│   ├── 📁 Level 1 - Foundation/
│   │   ├── 1.1 - Welcome to Microsoft Copilot.md
│   │   ├── 1.2 - Setting Up Your Workspace.md
│   │   ├── ...
│   │   └── 1.10 - SharePoint & Collaboration.md
│   ├── 📁 Level 2 - Advanced/
│   │   ├── 2.1 - Writing Enterprise PRDs.md
│   │   ├── 2.2 - Analyzing Enterprise Product Data.md
│   │   └── 2.3 - Enterprise Product Strategy.md
│   ├── 📁 Level 3 - Visuals/
│   │   ├── 3.1 - Image Generation Basics.md
│   │   └── 3.2 - Enterprise PM Visuals.md
│   └── 📁 Supporting Materials/
│       ├── Company Context - COMPANY.md
│       ├── Company Context - PRODUCT.md
│       ├── Company Context - PERSONAS.md
│       ├── Company Context - COMPETITIVE.md
│       ├── Prompt Library - Templates/
│       └── Sample Files/
│
├── 📁 Testing Strategy/
│   ├── Testing Strategy.md          ← (TESTING-STRATEGY.md from repo)
│   ├── Team Assignments.md          ← who is on which team
│   └── Quick Reference Card.md      ← one-pager for testers
│
└── 📁 Prompt Templates/
    ├── Ask About Course.md           ← prompt for knowledge queries
    ├── Submit Feedback.md            ← prompt for feedback capture
    └── Review Feedback.md            ← prompt for leads reviewing
```

### How Testers Use It

In **Microsoft Copilot** (web or Teams), testers reference files from the shared library:

**Asking a question:**
> "Refer to the files in Course Testing Hub. I'm on Team 2 (Instructional Design + Progressive Flow). I'm about to test module 1.3 - Your First Enterprise PM Tasks. What should I focus on with my owned lenses L5 and L6? What are the learning objectives this module claims to deliver?"

Copilot pulls from the knowledge base and gives a tailored answer.

**Understanding their role:**
> "Refer to Testing Strategy.md in Course Testing Hub. What is expected of me as a Team 3 tester? What does the quality gate look like for my feedback?"

### Prompt Template: Ask About Course

Save this as `Ask About Course.md` in the shared library. Testers paste it to start a Copilot session:

```
I am a tester for the Copilot PM Course. Please reference the files in
"Course Testing Hub" to answer my questions.

My context:
- Team: [1/2/3/4]
- Owned lenses: [e.g., L5: Instructional Design, L6: Progressive Flow]
- Currently testing module: [e.g., 1.3]

I'll ask you questions about:
- What this module covers and what I should focus on
- What the testing strategy expects from my team
- Course content details (company context, personas, sample files)
- How to submit feedback and what "good feedback" looks like

Please give concise, specific answers grounded in the shared documents.
```

---

## Layer 2: Feedback Capture

This is the core innovation — testers give **free-form, conversational feedback** to Copilot, and it structures it for them.

### Step 1: Copilot Structures the Feedback

Testers use this prompt template in Copilot when they have feedback:

#### Prompt Template: Submit Feedback

```
I'm testing the Copilot PM Course. Help me capture my feedback in
a structured format. Reference "Testing Strategy.md" in Course Testing
Hub for the 10 testing lenses and severity definitions.

Here's my raw feedback:

[TESTER PASTES OR TYPES THEIR FREE-FORM FEEDBACK HERE]

Based on what I described, please:

1. CLASSIFY — Which lens (L1-L10) does this best fit? Suggest primary
   and secondary if applicable.

2. CATEGORIZE — What type is this?
   (Content error / Prompt issue / Clarity / Learning design /
   UX-Navigation / Missing content / Enhancement)

3. SEVERITY — Based on the definitions in the testing strategy, what
   severity fits? (Critical / Major / Minor / Suggestion)

4. STRUCTURE — Rewrite my feedback in this format:
   - Module: [ID and title]
   - What I observed: [specific, quotable]
   - What I expected: [specific]
   - Suggested fix: [actionable]

5. GAPS — Is any required information missing from what I provided?
   Ask me follow-up questions to fill the gaps before I submit.

Do NOT finalize until all gaps are filled.
```

### How the Conversation Flows

```
Tester: "Module 1.4 - the researcher agent part - I tried the competitive
         analysis prompt and it just gave me generic stuff about market
         research. Nothing specific to AKX or the consulting industry.
         Felt useless honestly."

Copilot: Based on your feedback, here's what I've structured:

         📋 Classification
         Primary lens: L3 (Prompt Effectiveness) — the prompt didn't
         produce the expected output
         Secondary lens: L7 (Enterprise Realism) — output wasn't
         enterprise-specific

         📋 Category: Prompt issue
         📋 Severity: Major — misleads the learner about what the
         prompt can achieve

         📋 Structured feedback:
         - Module: 1.4 – Researcher & Analyst Agents
         - Observed: The competitive analysis prompt produced generic
           market research output with no specificity to AKX, Accenture,
           or the consulting industry.
         - Expected: Output should reference the AKX competitive
           landscape and consulting-specific dynamics as described in
           the course's company context.
         - Suggested fix: Add context-loading instructions to the
           prompt (e.g., "Reference the AKX competitive analysis in
           COMPETITIVE.md") or restructure the prompt to include
           industry-specific framing.

         ❓ Before you submit, I have two questions:
         1. Did you upload the company context files before running
            the prompt, or did you run it without them?
         2. Can you paste or screenshot the actual Copilot output
            you received?

Tester: "No I didn't upload any context files, the module didn't tell
         me to. And here's what I got: [pastes output]"

Copilot: Got it — this adds important nuance. Updated:
         - Observed: Module 1.4 doesn't instruct the learner to load
           company context files before running the competitive analysis
           prompt. Without them, the prompt produces generic output.
           [screenshot attached]
         - Suggested fix: Add a prerequisite step: "Before running this
           prompt, ensure you've uploaded COMPETITIVE.md from the company
           context folder" — or reference module 1.6 (Building Context
           with Memory) as a prerequisite.

         ✅ This is now complete and ready to submit. Copy the
         structured version into the feedback form:
         [link to Microsoft Form]
```

### Step 2: Submit via Microsoft Forms

After Copilot structures the feedback, the tester submits it through a **Microsoft Form** with these fields:

| Field | Type | Options/Notes |
|-------|------|--------------|
| Your name | Text | |
| Team | Choice | 1 / 2 / 3 / 4 |
| Module | Choice | Dropdown: 1.1 through 3.2 (with titles) |
| Primary lens | Choice | L1 through L10 |
| Secondary lens (optional) | Choice | L1 through L10 / None |
| Type | Choice | Content error / Prompt issue / Clarity / Learning design / UX-Navigation / Missing content / Enhancement |
| Severity | Choice | Critical / Major / Minor / Suggestion |
| What I observed | Long text | Pre-filled from Copilot output — paste here |
| What I expected | Long text | |
| Suggested fix | Long text | |
| Evidence | File upload | Screenshot, Copilot output, etc. |

> **Why Forms + Copilot instead of just Forms?** Forms alone is friction — dropdowns for 10 lenses and 7 types feel like bureaucracy. Copilot does the thinking (classify, categorize, ask follow-ups), and Forms just captures the final structured output. The tester's experience is conversational; the system's input is structured.

### Step 3: Power Automate Creates a Planner Task

A **Power Automate flow** triggers on every Forms submission and creates a Planner task:

```
Trigger: When a new response is submitted (Microsoft Forms)
    │
    ▼
Action: Create a task (Planner)
    │
    ├── Title: "[Module ID] — [Type] — [Severity]"
    │          e.g., "1.4 — Prompt issue — Major"
    │
    ├── Bucket: "Submitted" (initial bucket)
    │
    ├── Assigned to: Team Lead (based on Team field)
    │
    ├── Description:
    │   Team: {Team}
    │   Tester: {Name}
    │   Primary Lens: {Lens}
    │   Secondary Lens: {Secondary}
    │   ---
    │   OBSERVED: {Observed}
    │   EXPECTED: {Expected}
    │   FIX: {Suggested fix}
    │
    ├── Labels:
    │   ├── Severity label (color-coded)
    │   └── Lens label
    │
    └── Checklist:
        ├── [ ] Lead reviewed
        └── [ ] Cross-team validated
```

**Power Automate flow setup (step by step):**

1. Go to **flow.microsoft.com** → Create → Automated cloud flow
2. Trigger: "When a new response is submitted" → select your Form
3. Action: "Get response details" → select your Form + Response ID
4. Action: "Create a task" (Planner connector)
   - Plan: `Course Testing Feedback`
   - Bucket: `Submitted`
   - Title: Use dynamic content to build `[Module] — [Type] — [Severity]`
   - Assigned to: Map Team number to Team Lead email (use a Switch or Condition)
   - Description: Compose all form fields into the structured description
5. Optional: Action: "Post message in a chat or channel" (Teams) → notify the team channel

---

## Layer 3: Review Pipeline (Planner Board)

### Board Setup

Create a **Planner plan** called `Course Testing Feedback` inside the testing Team in Microsoft Teams.

**Buckets (columns):**

| Bucket | Who works here | What happens |
|--------|---------------|--------------|
| **Submitted** | Auto-populated by Power Automate | New feedback lands here, assigned to team lead |
| **Lead Reviewing** | Team Lead | Lead is actively reviewing this item |
| **Returned to Tester** | Team Lead → Tester | Feedback needs more detail; tester revises and resubmits |
| **Ready for Cross-Team** | Team Lead (approved) | Passed Checkpoint 1, awaiting cross-team lead |
| **Cross-Team Reviewing** | Cross-team Lead | Second lead is validating |
| **Challenged** | Cross-team Lead | Disagreement on severity/validity — for Meta-Team discussion |
| **Approved** | Done | Passed both checkpoints — endorsed for final report |

**Labels (color-coded for severity):**

| Color | Label |
|-------|-------|
| 🔴 Red | Critical |
| 🟠 Orange | Major |
| 🟡 Yellow | Minor |
| 🔵 Blue | Suggestion |
| 🟢 Green | Positive finding |
| 🟣 Purple | Cross-team agreed (flagged by multiple teams) |

**Practical flow:**

```
Power Automate             Team Lead              Cross-team Lead         Meta-Team
creates task                                                               (4 leads)

 Submitted ───▶ Lead Reviewing ───┬──▶ Ready for Cross-Team ───▶ Approved ✓
                                  │
                                  ├──▶ Returned to Tester
                                  │    (tester revises, resubmits)
                                  │
                                  └──▶ Rejected (deleted with comment)

                           Cross-Team Reviewing ───┬──▶ Approved ✓
                                                   │
                                                   └──▶ Challenged
                                                        (Meta-Team resolves)
```

### Lead Review Workflow

When a task appears in **Submitted** for a team lead:

1. **Open the task** — read the structured feedback in the description
2. **Check against the 5 criteria** (specific, evidence-based, actionable, non-duplicate, correctly categorized)
3. **Move to the right bucket:**
   - Passes → drag to **Ready for Cross-Team**, reassign to the cross-team lead (per rotation: Lead 1→Lead 2, Lead 2→Lead 3, Lead 3→Lead 4, Lead 4→Lead 1)
   - Needs work → drag to **Returned to Tester**, add a comment explaining what's missing, reassign to tester
   - Not valid → delete the task with a comment explaining why
4. **Check the "Lead reviewed" checkbox** on the task

### Cross-Team Lead Workflow

When a task appears in **Ready for Cross-Team**:

1. Read the feedback with fresh eyes
2. Check: Does the finding hold up? Is severity proportional? Already found by another team?
3. **Move:**
   - Valid → drag to **Approved**, check "Cross-team validated" checkbox
   - Disagree → drag to **Challenged**, add comment, discuss in Meta-Team sync

### Using Copilot to Help Leads Review

Leads can use a prompt template to speed up their review:

#### Prompt Template: Review Feedback

```
I'm a Team Lead reviewing feedback for the Copilot PM Course.
Reference "Testing Strategy.md" in Course Testing Hub for the
quality gate criteria.

Here's a feedback item I need to review:

Module: [paste module]
Lens: [paste lens]
Type: [paste type]
Severity: [paste severity]
Observed: [paste]
Expected: [paste]
Suggested fix: [paste]

Please evaluate:
1. Is this SPECIFIC enough? Does it reference an exact section/step?
2. Is it EVIDENCE-BASED? Is observed vs. expected clear?
3. Is it ACTIONABLE? Can the course author act on the suggested fix?
4. Is the SEVERITY appropriate per our definitions?
5. Is the LENS classification correct?

Flag any issues and suggest how the tester should improve it before
I approve.
```

---

## Setup Checklist

### Phase A: Foundation (before kickoff)

| # | Task | Owner | Tool |
|---|------|-------|------|
| A1 | Create a Teams team (or channel) for the testing group | Course author | Microsoft Teams |
| A2 | Create 4 team channels within it (Team 1, 2, 3, 4) + a Meta-Team channel | Course author | Microsoft Teams |
| A3 | Create SharePoint document library "Course Testing Hub" | Course author | SharePoint |
| A4 | Upload all course content (module .md files, company context, sample files) | Course author | SharePoint |
| A5 | Upload testing strategy + prompt templates | Course author | SharePoint |
| A6 | Create the Microsoft Form for feedback submission | Course author | Microsoft Forms |
| A7 | Create Planner plan "Course Testing Feedback" with 7 buckets + labels | Course author | Planner |
| A8 | Build Power Automate flow: Form submission → Planner task | Course author | Power Automate |
| A9 | Test the full pipeline: submit a test form → verify task appears in Planner | Course author | All |
| A10 | Share the Team + Hub + Form links with all 15 testers | Course author | Teams |

### Phase B: Kickoff Day

| # | Task | Owner |
|---|------|-------|
| B1 | Walk through the system: Hub → Copilot → Form → Planner | Course author |
| B2 | Every tester submits one practice feedback item using the Copilot prompt | All testers |
| B3 | Every lead reviews one practice item and moves it through the pipeline | Leads |
| B4 | Fix any issues found during practice run | Course author |

### Phase C: Ongoing During Testing

| # | Task | Owner | Frequency |
|---|------|-------|-----------|
| C1 | Testers submit feedback via Copilot → Form pipeline | Testers | Continuous |
| C2 | Leads review items in their Submitted bucket | Leads | Daily |
| C3 | Cross-team leads review items in Ready for Cross-Team | Cross-team leads | Every 2 days |
| C4 | Meta-Team sync: review Challenged items, dedup | Meta-Team | Day 7 + Day 13 |
| C5 | Meta-Team builds final report from Approved bucket | Meta-Team | Day 13–14 |

---

## Integration Map

Shows how the three layers connect and where data flows:

```
                    TESTER
                      │
            ┌─────────┴─────────┐
            │                   │
     "I have a question"   "I have feedback"
            │                   │
            ▼                   ▼
    ┌───────────────┐   ┌───────────────┐
    │   COPILOT     │   │   COPILOT     │
    │   + Knowledge │   │   + Feedback  │
    │   Base files  │   │   Prompt      │
    │               │   │               │
    │  (SharePoint) │   │ Structures,   │
    │               │   │ classifies,   │
    │  Answers      │   │ asks follow-  │
    │  questions    │   │ ups           │
    └───────────────┘   └───────┬───────┘
                                │
                    Tester copies structured
                    output into...
                                │
                                ▼
                     ┌───────────────────┐
                     │  MICROSOFT FORMS  │
                     │                   │
                     │  Captures:        │
                     │  - Module         │
                     │  - Lens + Type    │
                     │  - Severity       │
                     │  - Observed/      │
                     │    Expected/Fix   │
                     │  - Evidence       │
                     └────────┬──────────┘
                              │
                     Power Automate
                     (automatic)
                              │
                              ▼
                     ┌───────────────────┐
                     │  PLANNER BOARD    │
                     │  (in Teams)       │
                     │                   │
                     │  Submitted        │
                     │  → Lead Review    │
                     │  → Cross-Team     │
                     │  → Approved       │
                     │                   │
                     │  Leads use        │
                     │  Copilot +        │◄──── Copilot + Review
                     │  Review Prompt    │      Prompt Template
                     │  to evaluate      │
                     └───────────────────┘
```

---

## What Makes This Frictionless

| For testers | For leads | For course author |
|-------------|-----------|-------------------|
| Talk to Copilot naturally — no memorizing templates or lens definitions | Planner tasks auto-appear, pre-assigned, pre-structured | Final report pulls straight from the Approved bucket |
| Copilot classifies the lens and severity — tester just validates | Copilot helps evaluate quality gate criteria | Severity labels + lens tags = instant prioritization |
| One Form with pre-structured fields — paste from Copilot and submit | Drag-and-drop Kanban workflow they already know | Cross-team agreement visible via duplicate detection |
| No context switching — Copilot, Forms, and Planner all live in Teams | Comments on tasks = audit trail | Everything in one Teams team — nothing external |

---

## Limitations & Workarounds

| Limitation | Workaround |
|------------|------------|
| **Standard Copilot can't auto-submit to Forms** | Tester copies structured output from Copilot → pastes into Form. One extra step, but Copilot does the hard work. |
| **Copilot file referencing requires files in OneDrive/SharePoint** | All course content must be uploaded to the shared library (not just GitHub). Part of setup Phase A. |
| **Planner labels are limited to 6 colors** | Use colors for severity (4) + positive (1) + cross-team agreed (1). Tag lenses in the task title or description instead. |
| **Power Automate can't auto-assign to cross-team lead** | Lead manually reassigns when moving to "Ready for Cross-Team". Rotation is documented in testing strategy. |
| **No auto-deduplication across teams** | Meta-Team handles this manually during syncs. Copilot can help: "Compare these two Planner tasks and tell me if they're about the same issue." |

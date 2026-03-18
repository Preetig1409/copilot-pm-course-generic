# Module 1.1: Your AI Working Environment

**Duration:** 15 minutes
**Prerequisites:** Level 0 (or equivalent PM experience)

---

## What You'll Learn

By the end of this module, you will:
1. Adopt the mindset shift that makes Copilot useful — treating it as a junior analyst, not a search engine
2. Know which Copilot access method to use for which PM task
3. Apply the GCSE prompting framework (Goal, Context, Source, Expectations) to every interaction
4. Set up your workspace with product context so Copilot delivers relevant responses from day one

---

## "I Tried Copilot Once. It Was Useless."

You've heard this — maybe you've said it. You opened Copilot, typed "help me with my product strategy," got a generic response that could apply to any product at any company, and closed the tab.

That's not a Copilot problem. That's an onboarding problem.

Imagine hiring a junior analyst on their first day. You wouldn't say "help me with strategy" and expect something useful. You'd hand them the product brief, the metrics dashboard, the stakeholder map, and the last three quarterly reviews. Then you'd say: "Read these. Tell me what you think our biggest risk is this quarter."

That's exactly how Copilot works. Context in, insight out. No context, no value.

This module sets up the foundation every other module builds on. Skip it, and every prompt you write will underperform.

## The Mindset Shift: Junior Analyst, Not Google

Google answers questions. Copilot does work.

The difference matters. When you Google "product prioritization frameworks," you get articles to read. When you prompt Copilot correctly, you get a draft prioritization of *your* backlog using *your* criteria for *your* stakeholders.

But like any analyst, Copilot needs:
- **Context** — What company, product, and situation are we in?
- **Direction** — What specifically do you want it to produce?
- **Standards** — What does "good" look like?

Without these, you get generic output. With them, you get a working draft you can refine in minutes instead of hours.

**The key principle:** Every minute you spend giving Copilot context saves ten minutes of editing generic output.

## Access Methods: The Right Tool for the Moment

Copilot lives in multiple places. Each has a sweet spot:

| Access Method | How to Open | Best For |
|---|---|---|
| **Browser** (copilot.microsoft.com) | Any browser, any device | Deep work sessions, research, long prompts with file uploads |
| **Windows** | Alt + Space | Quick questions, calculations, rewording a sentence mid-flow |
| **Mac** | Option + Space | Same as Windows — fast, contextual, lightweight |
| **M365 In-App** | Alt + I (or the Copilot icon) | Working *inside* Word, Excel, PowerPoint, Outlook, Teams |

**The PM pattern:**
- Start your day in **Teams/Outlook** Copilot for triage
- Do deep analysis in **Browser** Copilot with uploaded files
- Use **Windows/Mac** Copilot for quick rewrites and lookups without switching apps
- Draft and refine deliverables with **In-App** Copilot in Word/PowerPoint

You don't need to memorize this. After a week of intentional use, it becomes muscle memory.

## The GCSE Framework: Your Prompting Habit

Every prompt in this course uses the GCSE framework. It's not theory — it's a checklist that turns vague prompts into useful ones.

| Element | What It Means | Example |
|---|---|---|
| **G** — Goal | What do you want Copilot to *produce*? | "Draft a stakeholder email" |
| **C** — Context | What situation are you in? | "I'm a Senior PO. Our adoption is 43% vs. 60% target." |
| **S** — Source | What data should Copilot use? | "Use the attached Q3 metrics report and sprint backlog." |
| **E** — Expectations | What does good output look like? | "Keep it under 200 words. Use bullet points. Executive tone." |

**Without GCSE:**
> "Write a status update."

**With GCSE:**
> "**Goal:** Draft a weekly status update email. **Context:** I'm Senior PO on KnowledgeHub at NovaTech. We're in Sprint 14, AI search feature is 70% complete, one blocker on API integration. **Source:** Use the sprint metrics I've uploaded. **Expectations:** 3 paragraphs — progress, risks, next steps. Tone: confident but honest. Under 150 words."

The second prompt gets a usable draft. The first gets filler.

You don't need to label G/C/S/E in every prompt — but until it's habit, doing so will dramatically improve your results.

## Setting Up Your Workspace

Before any exercise in this course works well, you need Copilot to know your world. Here's the setup:

### Step 1: Gather Your Context Files

For this course, you have 4 NovaTech context files:
- **Company Overview** — NovaTech's business, products, market position
- **Product Briefs** — KnowledgeHub and ProjectPulse details, metrics, roadmap
- **Stakeholder Profiles** — Key people, their priorities, communication preferences
- **User Personas** — Priya Sharma, Marcus Johnson, Elena Rodriguez

In your real work, the equivalent would be: your product brief, latest metrics, team/stakeholder overview, and customer research summary.

### Step 2: Enable ContextIQ and OneDrive Access

ContextIQ allows Copilot to reference your files and emails for richer responses:
1. Open Copilot in your browser (copilot.microsoft.com)
2. Ensure you're signed in with your work account
3. Verify OneDrive access — Copilot can reference files stored there
4. Check that M365 Copilot is enabled in your tenant (your IT admin controls this)

### Step 3: Upload and Validate

Upload your context files and verify Copilot can use them. The exercises below walk you through this.

---

## Exercise 1: Load Your Product Context

**Context:** It's your first day using Copilot as a real working tool. You need to give it the NovaTech context so it can be useful across every future conversation.

**Your Copilot Prompt:**
```
You're my AI working partner. I'm a Senior Product Owner at NovaTech Solutions, a 5,000-person enterprise SaaS company in Austin, TX. I own two products: KnowledgeHub (knowledge management) and ProjectPulse (project delivery platform).

I'm uploading 4 context files that define my working world. Read all of them carefully, then tell me:

1. What are the top 3 concerns for my products this quarter, and why?
2. What data is missing that you'd want to do your job well?
3. What surprised you or seems like a risk nobody's talking about?

Be specific. Reference the documents. Don't give me generic product management advice.
```

**What to Look For:**
- **Good response:** References specific metrics (like the 43% WAU gap), names specific stakeholders and their concerns, identifies tensions between priorities
- **Weak response:** Generic statements like "user adoption is important" without connecting to your specific numbers and people
- **If weak:** Your files may not have uploaded correctly, or you need to be more explicit about using them. Try: "Based specifically on the documents I just uploaded..."

---

## Exercise 2: Define Your Monthly Priorities

**Context:** You've loaded context. Now put Copilot to work on something immediately useful — clarifying what you should focus on this month.

**Your Copilot Prompt:**
```
Based on the NovaTech context you just reviewed, draft my 3 key priorities for this month as Senior PO of KnowledgeHub and ProjectPulse.

For each priority:
- Why it matters NOW (not just generally)
- What data I need to validate it
- Who I should talk to first and what I should ask them
- One thing that could derail it

Format as a table. Be opinionated — tell me what you'd prioritize if you were in my seat.
```

**What to Look For:**
- **Good response:** Priorities grounded in the actual NovaTech situation (adoption gap, AI search launch, stakeholder alignment), specific names and metrics
- **Weak response:** Generic PM priorities that could apply to any company
- **Key test:** Would this table be useful in a real 1:1 with your manager? If yes, Copilot is set up correctly

---

## Apply to Your Work

**Reflect:**
1. What 3-5 documents define your product context? (Product brief, metrics dashboard, roadmap, customer research, team overview?)
2. If a new PM joined your team tomorrow, what would you hand them to get up to speed in a day?
3. Where do those documents live right now — and can Copilot access them?

**Your Prompt:**
```
You're my AI working partner. I'm a [ROLE] at [COMPANY], working on [PRODUCT/AREA].

Here's my context: [UPLOAD YOUR 3-5 KEY DOCUMENTS]

Read everything and tell me:
1. What are my top 3 priorities based on what you see?
2. What's the biggest risk I might be underweighting?
3. What context are you missing that would make you more useful?
```

**You should now have:**
- Copilot configured with your product context
- A working understanding of the GCSE framework
- Your first AI-generated priority list to validate against your own thinking

---

## Key Takeaways

- Copilot is a junior analyst, not a search engine — it needs context and direction to be useful
- The GCSE framework (Goal, Context, Source, Expectations) is the difference between generic output and working drafts
- Spend 15 minutes loading context once, save hours across every future session
- Always evaluate Copilot's output against specificity: does it reference YOUR metrics, YOUR stakeholders, YOUR situation?
- The best test of setup quality: would you forward this output to your manager without major edits?

## What's Next

Your workspace is set up. In **Module 1.2: Meeting Intelligence**, you'll tackle the single biggest time sink in a PM's week — meetings. You'll learn to extract structured decisions, action items, and stakeholder dynamics from meeting transcripts in minutes instead of hours.

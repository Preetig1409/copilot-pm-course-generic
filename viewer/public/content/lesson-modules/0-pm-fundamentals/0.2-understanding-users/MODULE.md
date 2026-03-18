# Module 0.2: Knowing Your Users — Beyond Persona Templates

**Duration:** 25 minutes
**Prerequisites:** Module 0.1 (What Product Management Actually Is)

---

## What You'll Learn

By the end of this module, you will:
1. Identify why most persona documents fail to influence product decisions — and what to include instead
2. Reframe user needs using the Jobs-to-Be-Done framework and write job stories
3. Design a lightweight continuous discovery practice you can start this week
4. Move from raw observations to actionable insights using the insight pyramid

---

## The Persona Problem

Teresa Torres, in *Continuous Discovery Habits*, makes an observation that should make every PM uncomfortable: most teams that claim to be "user-centric" have not talked to a user in months. They have personas — beautifully designed PDFs with stock photos, demographics, and quotes — sitting in a Confluence page nobody opens.

Here is why: **demographics are not behavior.**

A persona that says "Sarah, 35, marketing manager, lives in Austin, uses Slack daily" tells you nothing about what to build. You could swap "Austin" for "Denver" and "35" for "42" and every product decision stays the same. That is a sign the persona is decorative, not functional.

Good personas — the kind that actually change what you build — capture four things:

| Decorative Persona | Functional Persona |
|---|---|
| Age, title, location | Goals they are trying to achieve |
| Generic frustrations ("wants things to be easier") | Specific workarounds they have built |
| Stock photo and a name | Switching triggers — what would make them abandon your product or adopt it |
| "Tech-savvy millennial" | Current behavior patterns with timestamps and frequency |

At NovaTech, if your persona says "Project Manager, 38, wants better visibility into team capacity" — that is decorative. If it says "Checks three different spreadsheets every Monday morning to piece together who is available, then manually updates a slide deck for her VP by noon, and is wrong about availability 30% of the time" — now you know what to build.

---

## Jobs-to-Be-Done: The Superior Lens

People do not want a knowledge management platform. They want to find the right expert in under 2 minutes before a client call. They do not want a project dashboard. They want to walk into a steering committee meeting knowing exactly which projects are at risk, without having spent 4 hours compiling data.

This is the Jobs-to-Be-Done (JTBD) framework: users "hire" your product to do a job. When it does the job well, they keep using it. When it does not, they find something else — a spreadsheet, a Slack message, a phone call to a colleague.

**The job story format:**

> When [situation], I want to [motivation], so I can [expected outcome].

This is better than traditional user stories ("As a [user], I want [feature]") because it starts with the situation, not the user type. The situation drives behavior more than the role does.

**Examples for KnowledgeHub:**

| Traditional User Story | Job Story |
|---|---|
| As a consultant, I want to search for documents. | When I am preparing for a client meeting in 30 minutes, I want to find relevant case studies from similar engagements, so I can demonstrate our company's experience without guessing. |
| As a manager, I want to find experts. | When a client asks if we have someone with a specific skill, I want to identify an available expert within 5 minutes, so I can respond before the client moves to a competitor. |
| As an employee, I want to save content. | When I find a useful template during a project, I want to bookmark it with context about how I used it, so I can find it again 6 months later when I need it for a similar situation. |

Notice how job stories contain implicit design constraints. "In 30 minutes" tells you the search has to be fast. "Without guessing" tells you results need credibility signals. "6 months later" tells you the save mechanism needs context, not just a bookmark.

**Switching triggers — the missing piece:**

Most persona work ignores what makes someone start or stop using your product. Switching triggers are the events that change behavior:

- **Adopt trigger:** "I got embarrassed in a client meeting because I could not find a case study I knew existed. That afternoon I started using KnowledgeHub seriously."
- **Abandon trigger:** "Search returned 200 irrelevant results three times in a row. I went back to asking on Slack."
- **Workaround trigger:** "I maintain my own bookmarks folder because the platform's save feature does not let me add notes."

If you do not understand switching triggers, you are guessing about adoption.

---

## Continuous Discovery — Talk to Users Weekly, Not Quarterly

Torres's most important contribution is this: **discovery is not a phase. It is a habit.**

The standard approach — "we'll do research before the next big initiative" — means you do research once or twice a year and make assumptions the rest of the time. By the time you talk to users, you have already committed to a direction.

**The continuous discovery cadence:**

| Frequency | Activity | Purpose |
|---|---|---|
| **Weekly** | 1-2 user interviews (30 min each) | Stay connected to real problems. Catch emerging issues before they become crises. |
| **Bi-weekly** | Interview snapshot review with team | Share patterns across interviews so the whole team builds user empathy. |
| **Monthly** | Insight synthesis | Roll up observations into themes and implications. Update your opportunity backlog. |
| **Quarterly** | Deep-dive research | Focused study on a specific area (new market, major redesign, competitive shift). |

**The interview snapshot technique:**

After each interview, write a snapshot in under 5 minutes:

1. **Quick summary** (2 sentences): What was this person trying to do? What happened?
2. **Surprising thing** (1 sentence): What did you learn that you did not expect?
3. **Opportunity** (1 sentence): What unmet need did this reveal?
4. **Quote** (verbatim): One thing they said that captured the essence.

This is fast enough to actually do. A 10-page research report after every interview is why teams stop doing research.

**Recruiting from an internal user base:**

For enterprise products like KnowledgeHub (5,000 users at NovaTech), recruiting interview participants is easier than B2C — and most PMs still do not do it. Tactics:

- Add a "Talk to the product team" link in the app's help menu
- Ask customer support to flag users who gave detailed feedback
- Pull a list of recently churned users (stopped using the product in last 30 days) — they have the most to tell you
- Attend team meetings in departments with low adoption — 5 minutes at the end of their standup
- Post in internal Slack/Teams channels: "We're improving search. 30-minute chat, coffee on us."

**"We'll do research later" = "We'll never do research."** If it is not on your calendar this week, it is not happening.

---

## The Insight Pyramid

Raw user feedback is not insight. "Users say search is slow" is an observation. Insight requires interpretation and implication.

**The four levels:**

```
           ┌───────────┐
           │Implications│  → What should we do about it?
          ┌┴───────────┴┐
          │   Insights   │  → Why is this happening?
         ┌┴─────────────┴┐
         │    Patterns     │  → What keeps coming up?
        ┌┴───────────────┴┐
        │   Observations    │  → What did users say/do?
        └──────────────────┘
```

**Applied to KnowledgeHub:**

| Level | Example |
|---|---|
| **Observation** | 4 of 6 users interviewed this month said they "give up on search after 2 minutes." |
| **Pattern** | Users who give up on search have a consistent workaround: they ask colleagues on Slack or Teams instead. |
| **Insight** | Users are not frustrated by search speed — they are frustrated by result relevance. They find results fast but cannot tell which ones are useful, so they switch to a channel where a human can interpret their question. |
| **Implication** | Improving search speed will not fix adoption. We need to surface relevance signals (recency, author credibility, usage count) so users can evaluate results without opening every document. |

Most PMs stop at observations. They hear "search is slow" and put "improve search speed" on the roadmap. The value is in the implication — it tells you what to actually build.

---

## Exercise 1: Critique and Rewrite Personas

**Context:** NovaTech has existing user personas for KnowledgeHub and ProjectPulse. Like most enterprise personas, they are heavy on demographics and light on actionable detail. You can find them in the company-context/PERSONAS.md file.

**Your Copilot Prompt:**
```
I'm uploading our user personas for an internal knowledge management platform (KnowledgeHub) and project delivery platform (ProjectPulse) at a 5,000-person enterprise SaaS company. These personas serve consultants, managers, and delivery leads.

Critique these personas — what's missing that would help me make product decisions? Specifically evaluate whether they include:
- Jobs-to-be-Done (situations that trigger product usage)
- Switching triggers (what causes adoption or abandonment)
- Current workarounds (what they do when the product fails them)
- Behavioral specifics (frequency, duration, context of use)

Then rewrite the weakest persona using the Jobs-to-Be-Done lens. Include:
1. Three job stories in "When [situation], I want to [motivation], so I can [outcome]" format
2. Current workarounds for each job
3. Switching triggers — what would make them start or stop using the product
```

**What to Look For:**
- Good response: Identifies specific gaps in the existing personas (not just "add more detail"). The rewritten persona drives product decisions — you should be able to read it and know what to build next. Job stories include realistic situations with time pressure and context.
- Bad response: Generic persona critique. Rewrite that just adds more demographics. Job stories that are really feature requests in disguise ("When I want to use AI search...").

---

## Exercise 2: Design a Continuous Discovery Practice

**Context:** KnowledgeHub has 5,000 users across NovaTech but only 43% weekly active usage. You need to understand why 57% of users are not engaging — and you need to do it systematically, not as a one-off study.

**Your Copilot Prompt:**
```
Design a continuous discovery practice for KnowledgeHub, an internal knowledge management platform at a 5,000-person enterprise company. Current weekly active usage is 43%, target is 60%.

I need a 4-week ramp-up plan covering:

Week 1: Getting started — who to talk to first, how to recruit, initial question set
Week 2: Expanding reach — different user segments, refining questions based on Week 1
Week 3: Building the habit — interview snapshot template, sharing cadence with team
Week 4: Synthesis — turning 4 weeks of observations into patterns and implications

For each week, include:
- Who to interview (role, usage level, and why they matter)
- 5 specific questions to ask (not generic — tailored to the 43% WAU problem)
- How to recruit participants from a 5,000-person company
- Expected time commitment
```

**What to Look For:**
- Good response: Suggests talking to non-users and churned users, not just active users. Questions dig into behavior ("Walk me through the last time you needed to find internal knowledge") rather than opinions ("Do you like KnowledgeHub?"). Recruitment tactics are realistic for an enterprise environment.
- Bad response: Generic interview guide. Only interviews active users. Questions are leading ("Would AI search make KnowledgeHub better?"). No attention to the ramp-up progression.

---

## Apply to Your Work

**Reflect:**
1. Think about the last product decision you made. Did you talk to a user before making it? How might the decision have been different if you had?
2. Who is the user segment you understand the least? What would it take to talk to three of them this week?
3. What workaround have your users built that should embarrass your product?

**Your Prompt:**
```
I'm a PM for [YOUR PRODUCT]. My users are [BRIEF DESCRIPTION]. The user segment I understand least is [SEGMENT] because [REASON].

Help me design a 2-week lightweight discovery sprint focused on this segment:
1. A recruiting message I can send to get 4-6 interviews scheduled
2. A 7-question interview guide focused on their workarounds and unmet needs (not feature requests)
3. An interview snapshot template I can fill out in 5 minutes after each conversation
4. A synthesis template for turning 4-6 interviews into 3 actionable insights
```

**You should now have:**
- A recruiting message ready to send today
- An interview guide that avoids leading questions and focuses on behavior
- A fast-capture template so you actually document what you learn
- A synthesis approach that moves from observations to implications

---

## Key Takeaways

- Personas are only useful if they capture goals, workarounds, and switching triggers — not demographics. If you can swap out the age and location without changing any product decisions, the persona is decorative.
- Jobs-to-Be-Done reframes the conversation from "what features do users want?" to "what situations trigger users to need our product?" Job stories include the context that drives design decisions.
- Continuous discovery means weekly user contact, not quarterly research projects. If you are not talking to users this week, your assumptions are aging.

---

## What's Next

Module 0.3 tackles the other side of discovery: once you understand what users need, how do you decide what to build first? We will cover why popular prioritization frameworks like RICE and MoSCoW often fail, and what to use instead — including Shreyas Doshi's LNO framework and Teresa Torres's Opportunity Solution Trees.

# Module 1.7: Building Context & Memory

**Duration:** 20 minutes
**Prerequisites:** Module 1.1

---

## What You'll Learn

By the end of this module, you will:
1. Understand how Copilot Memory works — what it retains, what it forgets, and how to actively manage it
2. Build a reusable context primer that loads your full product context in 30 seconds
3. Use persona prompting to get perspectives from your CTO, skeptical stakeholder, or newest user
4. Create a personal prompt library of 10-15 templates you'll reuse weekly

---

## Every Conversation Starts From Scratch

You've had this experience: you spend 10 minutes giving Copilot context about your product, your metrics, your stakeholders. You get a great response. Next day, you open a new conversation — and Copilot has no idea who you are, what you work on, or what you discussed yesterday.

It's like having an analyst with amnesia. Brilliant when briefed. Useless the next morning.

This is partly a technology limitation (Copilot's memory across sessions is still evolving) and partly a workflow problem. Most PMs treat every Copilot session as a fresh start instead of building reusable context they can load instantly.

This module solves both problems. You'll build the artifacts that make every Copilot interaction 10x faster — and learn how to manage memory so less context gets lost between sessions.

## Copilot Memory: What It Retains and What It Doesn't

### Within a Conversation
Copilot remembers everything in the current conversation. Earlier prompts and responses are all in context. This is why longer conversations where you build on previous responses work so well.

**Implication:** For complex tasks, stay in one conversation. Don't start fresh for each question on the same topic.

### Across Conversations
Copilot Memory (when enabled) allows Copilot to retain facts you explicitly tell it to remember. This is still evolving, but the core pattern works:

- **"Remember that..."** — Tells Copilot to store a fact for future conversations
- **"What do you remember about...?"** — Retrieves stored context
- **"Forget that..."** — Removes stored facts

### What Gets Remembered
- Facts you explicitly ask it to remember
- Preferences you state ("I prefer bullet points over paragraphs")
- Your role and product context (when you tell it to store this)

### What Doesn't Get Remembered
- Nuanced analysis from previous conversations
- The full depth of uploaded documents (it remembers summaries, not details)
- Tone and style preferences unless explicitly stated
- Emotional context (that you were frustrated about a stakeholder)

### Managing Memory Actively
Don't rely on passive memory. Treat it like a junior analyst's onboarding document — explicitly state what matters, verify it was retained, update it when things change.

## Context Priming: The 30-Second Briefing

A context primer is a reusable prompt that loads your full working context at the start of any session. Build it once, paste it anytime, and Copilot immediately knows your world.

### The Template

```
CONTEXT PRIMER — [Your Name], [Role]

COMPANY: [Company, size, industry, stage]
MY PRODUCTS: [Product 1 — what it does, key metric, current status]
              [Product 2 — what it does, key metric, current status]

KEY STAKEHOLDERS:
- [Name] ([Role]) — [What they care about, communication preference]
- [Name] ([Role]) — [What they care about, communication preference]
- [Name] ([Role]) — [What they care about, communication preference]

CURRENT PRIORITIES:
1. [Priority] — [Status, deadline, blocker]
2. [Priority] — [Status, deadline, blocker]
3. [Priority] — [Status, deadline, blocker]

KEY METRICS:
- [Metric]: [Current] vs. [Target]
- [Metric]: [Current] vs. [Target]

WORKING STYLE: [How you want Copilot to respond — direct, detailed, brief, etc.]
```

This takes 10 minutes to write and saves hours across every future session. Update it monthly or when priorities shift.

### Why It Works
Copilot's responses are only as good as its understanding of your context. Without a primer, every response is generic. With a primer, Copilot can:
- Reference specific stakeholders by name
- Ground recommendations in your actual metrics
- Account for organizational dynamics
- Tailor advice to your specific situation

## Persona Prompting: Thinking Through Other Eyes

One of Copilot's most underused capabilities is simulating perspectives. Not because AI "understands" people, but because it forces *you* to consider viewpoints you might skip.

### The Pattern

```
Respond to [QUESTION/PROPOSAL] from three perspectives:

1. As [PERSON/ROLE] — [Their key concern, what they optimize for]
2. As [PERSON/ROLE] — [Their key concern, what they optimize for]
3. As [PERSON/ROLE] — [Their key concern, what they optimize for]

For each: What questions would they ask? What objections would they raise?
Where would they agree? What would convince them?
```

### When to Use Persona Prompting
- **Pre-meeting preparation:** "What will Richard push back on in this proposal?"
- **Decision stress-testing:** "What would a skeptical CFO say about this investment?"
- **Empathy building:** "How would our newest user experience this feature?"
- **Stakeholder alignment:** "What does each stakeholder need to hear to support this initiative?"

### Limitations
Copilot simulates personas based on the context you provide. The more specific you are about a person's priorities, concerns, and communication style, the more useful the simulation. Generic personas ("a VP") produce generic responses.

## Personal Prompt Library: Your Weekly Toolkit

After a few weeks of using Copilot, you'll notice you reuse the same 10-15 prompts with minor variations. Templatize them.

### The PM Prompt Library Starter Kit

**Weekly Status Update:**
```
Based on this week's progress on [PRODUCT]: [PASTE NOTES].
Draft a status update using Context → So What → Now What.
Audience: [STAKEHOLDER]. Tone: [TONE]. Under [X] words.
```

**Meeting Prep:**
```
I have a meeting with [PERSON, ROLE] about [TOPIC] in [TIME].
Their key concerns are: [LIST]. My goals for this meeting: [LIST].
Draft an agenda (3-4 items, timeboxed) and prep notes for each item.
```

**Decision Framing:**
```
I need to decide between [OPTION A] and [OPTION B] for [PRODUCT/FEATURE].
Key considerations: [LIST].
Create a decision matrix. For each option: pros, cons, risks, reversibility, stakeholder impact.
Recommend one and explain why.
```

**Sprint Review Summary:**
```
Sprint [NUMBER] completed. Velocity: [X/Y story points].
Completed: [LIST]. Carried over: [LIST]. Blockers: [LIST].
Draft a sprint review summary for [AUDIENCE]. Highlight wins, flag risks, recommend adjustments.
```

**Stakeholder Prep:**
```
I'm meeting with [STAKEHOLDER, ROLE] who cares about [PRIORITIES].
They're likely concerned about [CONCERNS].
Draft my talking points: what to present, what to pre-empt, what to ask.
```

Store these in a OneNote page, a text file, or wherever you can grab them in 5 seconds. The goal: no prompt should take more than 30 seconds to customize and send.

---

## Exercise 1: Build and Use Your Context Primer

**Context:** You need to create a reusable context primer for your NovaTech work and immediately put it to use.

**Your Copilot Prompt:**
```
Store this context for our working relationship:

CONTEXT PRIMER — Senior Product Owner, NovaTech Solutions

COMPANY: NovaTech Solutions, 5,000 employees, enterprise SaaS, Austin TX. Building internal productivity tools.

MY PRODUCTS:
- KnowledgeHub — Internal knowledge management platform. Key metric: 43% WAU vs 60% target. Status: AI search feature in Sprint 14 of 16, launching Q3.
- ProjectPulse — Project delivery platform. Key metric: delivery predictability. Status: stable, incremental improvements.

KEY STAKEHOLDERS:
- Jennifer Walsh (VP Digital Products) — My direct stakeholder. Cares about: business outcomes, hitting Q3 commitments, cross-product synergy. Prefers: concise, data-driven updates.
- Richard Thorne (VP Knowledge & Innovation) — KnowledgeHub executive sponsor. Cares about: strategic positioning, AI capabilities, competitive differentiation. Prefers: big-picture framing.
- David Kim (Director Engineering) — Engineering lead. Cares about: technical quality, team capacity, sustainable velocity. Prefers: detailed, honest assessments.
- Maya Patel (Director Product Strategy) — Cross-product strategy. Cares about: platform integration, long-term vision.
- Sarah Mitchell (UX Research Lead) — User insights. Cares about: user evidence driving decisions.

KEY USERS:
- Priya Sharma (Director Customer Solutions) — Power user, vocal about search issues
- Marcus Johnson (Senior Engineer Platform) — Technical user, built personal workarounds
- Elena Rodriguez (Program Manager) — Cross-team coordinator, adoption champion

CURRENT PRIORITIES:
1. AI Search launch — Sprint 14/16, Q3 deadline, auth service dependency at risk
2. Adoption improvement — 43% to 60% WAU, department-specific strategies needed
3. Stakeholder alignment — Jennifer and Richard have different timelines for AI features

KEY METRICS:
- KnowledgeHub WAU: 43% (target 60%)
- Sprint velocity: 42/45 story points (93%)
- API latency: 180ms (target <200ms — achieved)

WORKING STYLE: Be direct. Lead with the answer. Use data. Challenge my assumptions when you see a flaw. Don't soften bad news.

Now, using this context — what should my agenda be for this week's stakeholder sync with Richard Thorne? He's been pushing for faster AI feature delivery, but I need to manage expectations around the auth service risk.
```

**What to Look For:**
- **Good response:** Agenda items reference Richard's specific priorities (strategic positioning, AI capabilities), account for the tension between his timeline and the auth risk, suggest framing that manages expectations while maintaining confidence
- **Weak response:** Generic meeting agenda that could apply to any stakeholder sync, doesn't reference Richard's specific concerns or communication preferences
- **Key test:** Does the response feel like it was written by someone who knows your organization? If yes, your context primer is working.

---

## Exercise 2: Persona-Based Perspective Shifting

**Context:** You're preparing to present the KnowledgeHub AI search initiative at the quarterly product review. You need to anticipate questions and objections from multiple stakeholders.

**Your Copilot Prompt:**
```
Using the NovaTech context, I'm presenting the KnowledgeHub AI search initiative at next week's quarterly product review. The key message: we're on track for Q3 launch, with one risk on auth service integration.

Give me three perspectives on this initiative:

1. AS DAVID KIM (Director Engineering):
You care about technical quality and team sustainability. The team has been at 93% velocity for 4 sprints. The auth service dependency is owned by another team.
- What 3 technical concerns would you raise?
- What question would you ask that I might not be prepared for?
- What would reassure you?

2. AS PRIYA SHARMA (Director Customer Solutions):
You're a power user who's frustrated with KnowledgeHub's current search. You've been promised AI search will fix your team's pain points. You've been burned by delayed launches before.
- What 3 user-impact questions would you ask?
- What's your biggest fear about this launch?
- What would make you a champion for this feature?

3. AS RICHARD THORNE (VP Knowledge & Innovation):
You see AI search as strategically critical for KnowledgeHub's competitive positioning. You want to move faster and add more AI features. You're concerned the team is being too conservative.
- What 3 strategic questions would you challenge me with?
- Where would you push for more ambition?
- What would make you feel the initiative is on the right track?

For each persona: be specific to that person, not generic. And for each question raised — draft my response in 2-3 sentences.
```

**What to Look For:**
- **Good response:** Each persona asks distinctly different questions reflecting their actual priorities, David's concerns are technical (capacity, dependency management), Priya's are practical (will this actually fix my problem?), Richard's are strategic (how does this position us?)
- **Weak response:** All three personas ask variations of the same questions, or the concerns are too generic ("Will it be on time?" from everyone)
- **Key test:** Do any of the questions surprise you or surface something you hadn't considered? If yes, persona prompting is working as a thinking tool.

---

## Apply to Your Work

**Reflect:**
1. How much time do you spend at the start of each Copilot session re-explaining your context?
2. What 3-5 prompts do you find yourself typing from scratch every week?
3. Whose perspective do you most often fail to consider before a big meeting or decision?

**Your Prompt:**
```
Store this context for our working relationship:

CONTEXT PRIMER — [YOUR NAME], [YOUR ROLE]

COMPANY: [Company, size, industry]
MY PRODUCTS: [Product — what it does, key metric, status]
KEY STAKEHOLDERS: [Name (Role) — what they care about]
CURRENT PRIORITIES: [Priority — status, deadline, blocker]
KEY METRICS: [Metric: current vs target]
WORKING STYLE: [How you want Copilot to behave]

Now using this context — [YOUR FIRST REAL QUESTION].
```

**You should now have:**
- A reusable context primer you can paste into any Copilot session
- The ability to use persona prompting to stress-test decisions before meetings
- A starter prompt library you can customize and expand over the coming weeks

---

## Key Takeaways

- Every minute spent on context priming saves ten minutes of editing generic output across every future session
- Build your context primer once, update it monthly — it's the single highest-ROI investment in your Copilot workflow
- Persona prompting isn't about AI "understanding" people — it's about forcing you to consider perspectives you might skip
- A personal prompt library of 10-15 templates eliminates the "blank prompt" problem and makes Copilot a habit, not an experiment
- Actively manage Copilot's memory: tell it what to remember, verify retention, update when things change

## What's Next

You have the context, the prompts, and the workflow. Now it's time to master the two apps where PMs spend most of their day. In **Module 1.8: Teams & Outlook Mastery**, you'll build daily routines that make Copilot a habitual part of how you process email, manage channels, and prepare for meetings.

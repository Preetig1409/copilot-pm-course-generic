# Module 0.6: Stakeholder Management — The Unwritten PM Skill

**Duration:** 25 minutes
**Prerequisites:** Module 0.5 (Agile in Practice)

---

## What You'll Learn

By the end of this module, you will:
1. Distinguish between stakeholder communication (keeping people informed) and stakeholder management (building political capital to make good decisions)
2. Build a power/interest grid that maps hidden motivations, not just org chart positions
3. Write concise upward updates that give executives confidence without turning you into a status machine
4. Run a pre-mortem that surfaces risks your team is too optimistic to see

---

## Stakeholder Management Is Not What You Think

Most PMs treat stakeholder management as a communication exercise: send the weekly update, present at the steering committee, respond to emails promptly. Keep people informed. Do not surprise anyone.

That is the bare minimum. It is table stakes. And it is not stakeholder management — it is stakeholder notification.

Real stakeholder management is about **building enough political capital to make good product decisions without getting overruled by the loudest voice in the room.** It is the skill that determines whether your carefully prioritized roadmap survives contact with a VP who has a pet feature, or whether your data-informed "no" gets respected instead of steamrolled.

Shreyas Doshi frames it well: the PM's job is to influence without authority. You do not control budgets, you do not hire engineers, you do not sign contracts. Your power comes from three things: trust, credibility, and the perception that you understand the business better than anyone else in the room.

This module teaches you to build all three.

---

## The Real Power/Interest Grid

You have probably seen the standard power/interest grid: High Power / High Interest gets "Manage Closely." Low Power / Low Interest gets "Monitor." It is a fine starting framework and completely insufficient for real stakeholder management.

The standard grid tells you *how much* to engage. It does not tell you *how* to engage — which depends on what stakeholders actually care about. And what they say they care about is often different from what they actually care about.

**The enhanced power/interest grid:**

| Stakeholder | Formal Power | Real Power | Stated Interest | Hidden Motivation | Engagement Approach |
|---|---|---|---|---|---|
| Richard Thorne (VP Knowledge & Innovation) | Can approve/kill KnowledgeHub initiatives | Influences CEO's view of innovation investments | "Cross-team knowledge sharing" | Wants to be seen as the executive who brought AI to the company. Fears being bypassed by a competitor initiative. | Lead with innovation narrative. Frame features as AI-enabled. Give him credit publicly. |
| Maya Patel (VP People Ops) | Controls ProjectPulse budget | Strong influence on change management resources | "Reduce manager administrative burden" | Worried about headcount justification. If ProjectPulse automates reporting, does her team shrink? | Address the headcount concern directly. Frame automation as "freeing managers to do higher-value work," not "replacing managers." |
| David Kim (Director Engineering) | Assigns engineering resources | Technical credibility with the team; engineers trust his judgment | "Build it right, not just fast" | Burned by a previous initiative that shipped half-baked and created 6 months of tech debt. Scope creep anxiety. | Tight scope. Clear technical constraints in one-pagers. Involve him early in approach decisions. Never surprise him with scope changes. |
| Sarah Mitchell (Director Product Strategy) | Influences roadmap direction | Owns the metrics framework everyone reports against | "Data-driven roadmap decisions" | Building a case for her own promotion by demonstrating strategic impact. Wants to align your work with her narrative. | Share data generously. Frame your roadmap in terms of her strategic framework. Make her look good to her boss. |

**How to uncover hidden motivations:**
- Listen to what they ask about repeatedly. If someone always asks about timeline, their hidden concern is risk, not curiosity.
- Notice what they push back on. Resistance reveals fear. "I'm not sure about that approach" often means "that approach threatens something I care about."
- Pay attention to their stakeholders. What does Richard's boss care about? Richard's behavior is shaped by what he needs to deliver upward.
- Ask directly, in a 1:1: "What would make this initiative a win for you personally?" Most people will tell you if you ask.

---

## Managing Up Without Becoming a Status Machine

Your VP does not want a 30-minute meeting to hear everything you did this week. They want three things:

1. **Confidence that things are on track** — or early warning that they are not
2. **Enough context to answer their boss's questions** — they are managing up too
3. **A heads-up before anything becomes a surprise** — no stakeholder likes learning bad news in a meeting they did not call

**The 5-line weekly update format:**

```
Subject: KnowledgeHub Weekly — [Date]

PROGRESS: [One sentence on what moved forward]
METRIC: [One key number with trend arrow]
RISK: [One risk with your mitigation plan, or "None this week"]
DECISION NEEDED: [One decision you need from them, or "None this week"]
NEXT WEEK: [One thing they should know about]
```

**Example:**

```
Subject: KnowledgeHub Weekly — March 18

PROGRESS: Search relevance scoring shipped to 10% of users (A/B test running through Friday).
METRIC: WAU 44.1% (up from 43% — early signal from search improvements, not yet statistically significant).
RISK: Search infrastructure API upgrade delayed 1 week due to platform team dependency. Mitigation: pulled forward relevance indicators work that doesn't depend on the upgrade.
DECISION NEEDED: None this week.
NEXT WEEK: A/B test results Friday — will share preliminary data Monday.
```

Five lines. Takes 3 minutes to write. Gives your VP everything they need. If they want more detail, they will ask — and that is a conversation worth having. The 5-line format also forces you to distill what actually matters, which clarifies your own thinking.

**When to escalate vs. handle yourself:**

| Escalate | Handle Yourself |
|---|---|
| Timeline risk greater than 2 weeks | Timeline risk under 1 week with a mitigation plan |
| Stakeholder conflict you cannot resolve | Stakeholder disagreement where you have a clear recommendation |
| Resource request that requires budget approval | Resource trade-offs within your existing team |
| Bad news that will reach your VP through other channels | Bad news that is contained and being addressed |
| A decision that sets a precedent for other teams | A decision that only affects your product |

**The escalation principle:** If your VP is going to hear about it from someone else, they should hear about it from you first. Always.

---

## The Pre-Mortem: The Most Underused PM Tool

A post-mortem asks "what went wrong?" after failure. A pre-mortem asks "what could go wrong?" before you start. The difference is everything — one produces lessons learned for next time, the other produces preventive actions for this time.

**How to run a pre-mortem:**

1. **Set the scene** (2 minutes): "It is 6 months from now. This project has failed. Not a partial disappointment — a clear failure. The feature launched but users hate it, or it never launched at all, or it launched and broke something else."

2. **Silent brainstorm** (5 minutes): Everyone writes down reasons the project failed. No discussion. The silence matters — it prevents groupthink and lets the skeptics speak.

3. **Share and cluster** (10 minutes): Go around the room. Each person shares one reason. No rebuttals. Keep going until all reasons are on the board. Cluster similar ones.

4. **Vote** (3 minutes): Everyone gets 3 votes. Put them on the failure reasons you think are most likely.

5. **Mitigate** (15 minutes): For the top 3-5 failure reasons, discuss: What is one thing we can do THIS MONTH to reduce this risk?

**Why pre-mortems work when other risk exercises do not:**
- They give people permission to be pessimistic. In a planning meeting, saying "this might fail because..." feels negative. In a pre-mortem, it is the entire point.
- They surface risks that optimistic teams overlook. The person who has been quietly worried about a dependency now has an invitation to say so.
- They produce action items, not just a risk register that nobody reads.

**The psychological trick:** Framing the project as already having failed activates different thinking than asking "what could go wrong?" When it has already failed, people think more concretely and creatively about causes.

---

## Influence Without Authority — The Daily Practice

Beyond the grid and the updates, stakeholder management is a daily practice of small actions that build trust over time.

**Trust-building moves:**
- **Follow through on small things.** If you said you would send the data by Thursday, send it by Wednesday. Reliability in small moments creates trust for big moments.
- **Share credit generously.** "Maya's team flagged this insight" costs you nothing and earns you an ally.
- **Bring bad news with a plan.** Never say "we have a problem" without "here is what I recommend." The PM who identifies problems is annoying. The PM who identifies problems and proposes solutions is invaluable.
- **Ask for input before decisions, not after.** Stakeholders who feel consulted support the decision even if they disagree. Stakeholders who feel surprised oppose it even if they agree.
- **Remember what matters to them.** If David Kim mentioned his daughter's soccer tournament last week, ask how it went. Humans trust humans, not role descriptions.

**Trust-destroying moves:**
- Surprising stakeholders with bad news in public forums
- Committing to timelines without consulting engineering
- Saying "the data says..." when you actually mean "I think..."
- Going around someone to their boss without talking to them first
- Treating stakeholder concerns as obstacles to manage rather than perspectives to integrate

---

## Exercise 1: Build a Stakeholder Map

**Context:** You own ProjectPulse, NovaTech's project delivery platform. You are about to propose a major initiative to improve capacity visibility from 67% to 95%. This will require buy-in from multiple stakeholders with different motivations.

**Your Copilot Prompt:**
```
I'm the PM for ProjectPulse, an internal project delivery platform at NovaTech Solutions (5,000-person enterprise SaaS company). I need to build a stakeholder engagement strategy for a major initiative: improving capacity visibility from 67% to 95%.

Key stakeholders:
- Richard Thorne (VP Knowledge & Innovation) — wants cross-team visibility into project health. Champions innovation initiatives. Reports to the CEO.
- Maya Patel (VP People Ops) — wants reduced administrative burden for managers. Concerned about headcount justification if tools automate her team's work. Controls change management resources.
- David Kim (Director Engineering) — worried about scope creep. Burned by a previous initiative that shipped half-baked. Engineers trust his technical judgment.
- Sarah Mitchell (Director Product Strategy) — wants data-driven roadmap decisions. Building a case for her own promotion through demonstrating strategic impact.

Build a power/interest grid. For each stakeholder:
1. Assess their formal power and real influence
2. Identify their stated interest AND likely hidden motivation
3. Draft a specific engagement strategy that addresses the hidden motivation
4. Suggest one specific action I should take this week for each person
```

**What to Look For:**
- Good response: Hidden motivations go beyond job descriptions — they address personal career concerns, past experiences, and political dynamics. Engagement strategies are specific and different for each stakeholder (not "keep them informed" for everyone). Weekly actions are concrete and achievable.
- Bad response: Power/interest grid uses only formal org chart positions. Hidden motivations are just restatements of stated interests. All engagement strategies say "regular updates." No specific actions.

---

## Exercise 2: Run a Pre-Mortem

**Context:** KnowledgeHub is about to launch AI-powered search — the biggest feature release in a year. It has been in development for 3 months and is scheduled to ship in 4 weeks. The team is optimistic. You are less sure.

**Your Copilot Prompt:**
```
Run a pre-mortem for KnowledgeHub's AI-powered search launch. Context:

- KnowledgeHub is an internal knowledge management platform at a 5,000-person enterprise company
- Current state: 43% WAU, target 60%. Search is the #1 pain point (8 min avg, 33% abandonment)
- AI search has been in development for 3 months, shipping in 4 weeks
- Team of 5 developers, dependencies on platform team's search infrastructure
- Key stakeholders: VP who wants to showcase AI innovation, engineering director worried about quality

It's 6 months after launch. The project has failed. Give me the top 7 reasons it failed. Be creative and brutally honest — include technical, organizational, user adoption, and political risks.

For each failure reason, suggest one specific preventive action I can take THIS MONTH (not next quarter, not "we should generally be aware of this" — a concrete action with a deliverable).
```

**What to Look For:**
- Good response: Failure reasons span multiple categories (technical, organizational, political, user behavior). They are specific to the KnowledgeHub context, not generic project risks. Preventive actions are things you can actually do in the next 30 days. At least one risk is something the team probably has not discussed.
- Bad response: Generic project failure reasons ("the project ran over budget"). All risks are technical. Preventive actions are vague ("communicate better"). No creative or non-obvious risks.

---

## Apply to Your Work

**Reflect:**
1. Who is the stakeholder you struggle with most? Not the one who is difficult — the one where your relationship is not working despite effort. What do they actually care about that you might be missing?
2. When was the last time a stakeholder surprised you with a concern? What would you have done differently if you had known earlier?
3. If your current project failed in 6 months, what is the most likely reason — and is anyone talking about it?

**Your Prompt:**
```
I'm a PM working on [YOUR PRODUCT/INITIATIVE]. My most challenging stakeholder is [ROLE/NAME] who [BRIEF DESCRIPTION OF THE DYNAMIC].

Help me:
1. Identify their likely hidden motivation based on their behavior (they [SPECIFIC BEHAVIORS YOU'VE OBSERVED])
2. Draft a 5-line weekly update template customized for my initiative
3. Run a quick pre-mortem: top 5 reasons my current initiative could fail in 6 months, with one preventive action for each
4. Suggest 3 trust-building actions I can take this week that cost me nothing but might shift the dynamic
```

**You should now have:**
- A hypothesis about your challenging stakeholder's hidden motivation
- A weekly update template you can start using immediately
- A pre-mortem with 5 preventive actions for your current initiative
- 3 concrete trust-building actions for this week

---

## Key Takeaways

- Stakeholder management is not communication — it is building political capital to make good product decisions. The PM who sends perfect weekly updates but cannot influence a roadmap decision has not managed stakeholders; they have notified them.
- Hidden motivations drive stakeholder behavior more than stated interests. Uncover them by listening to what people push back on, asking what success looks like for them personally, and paying attention to what they ask about repeatedly.
- The pre-mortem is the most underused tool in PM. It gives teams permission to be pessimistic, surfaces risks that optimism hides, and produces preventive actions instead of post-hoc lessons learned.

---

## What's Next

You have completed Level 0: PM Fundamentals. You now have a foundation in the core craft of product management — risk reduction, user understanding, prioritization, requirements, agile delivery, and stakeholder management.

Level 1 builds on this foundation by introducing Microsoft Copilot as your AI-augmented teammate. You will take every skill from Level 0 and learn how to do it faster, deeper, and with less manual effort — starting with Module 1.1: Welcome to Microsoft Copilot for Product Managers.

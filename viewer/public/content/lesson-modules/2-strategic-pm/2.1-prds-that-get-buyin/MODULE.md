# Module 2.1: Writing PRDs That Get Buy-In

**Duration:** 35 minutes
**Prerequisites:** Module 0.4, Level 1

---

## What You'll Learn
1. Distinguish enterprise internal PRDs from startup-style PRDs and explain why they require different elements
2. Use the PRD writing process as an alignment tool that surfaces disagreements before engineering begins
3. Apply the 4-phase enterprise PRD workflow to produce documents that drive decisions, not just describe features
4. Use AI persona prompting to stress-test your PRD from multiple stakeholder perspectives before the real review

---

## The Document Isn't the Point

Marty Cagan nails it: "The purpose of the PRD isn't the document, it's the thinking." And in enterprise environments, we'd add a corollary: "Evangelize, don't just document."

You've written PRDs before. You know the sections — problem statement, user stories, requirements, success metrics. But if you've ever had a PRD approved in a meeting and then quietly ignored afterward, you've experienced the gap between a *correct* PRD and an *effective* one.

At the strategic level, the PRD isn't a specification. It's a persuasion document. It's the artifact that forces five different leaders to confront the same problem, argue about the same tradeoffs, and commit to the same direction — before a single line of code gets written.

This module teaches you to write PRDs that don't just describe what you want to build. They get people to *want* to build it.

---

## Enterprise PRDs Are Different

Most PM courses teach you to write startup PRDs. Those are valuable — but they're optimized for speed, small teams, and environments where the PM has direct authority. Enterprise internal products live in a different world.

Here's what changes:

| Element | Standard/Startup PRD | Enterprise Internal PRD |
|---|---|---|
| **Business Case** | Brief — product-market fit focus | Detailed — ROI calculation, productivity impact, cost of inaction |
| **Stakeholder Analysis** | Minimal — small team alignment | Critical — multiple VPs, cross-functional dependencies, competing priorities |
| **Success Metrics** | Product metrics (DAU, retention) | Business metrics (productivity gain, cost reduction, adoption across departments) |
| **Adoption Plan** | "Ship it and they'll come" | Change management strategy — training, migration, rollout phases |
| **Governance** | Informal | RACI matrix, steering committee, escalation paths |
| **Risk Section** | Technical risks | Technical + organizational + political risks |

If your PRD for KnowledgeHub's AI search feature reads like a startup feature spec, it will fail — not because the feature is wrong, but because Jennifer Walsh can't take it to her leadership meeting and justify the investment. Richard Thorne can't use it to show alignment with the knowledge strategy. David Kim can't use it to plan engineering capacity.

The enterprise PRD serves multiple audiences with different needs, and it needs to work for all of them.

---

## The PRD as Alignment Tool

Here's the insight that separates good PMs from great ones: the document is 20% of the value. The conversations it forces are 80%.

Think about what happens when you write a thorough enterprise PRD:

- You write the ROI section and realize your numbers don't add up. Good — you caught that before the VP did.
- You write the stakeholder analysis and notice that Engineering and the Knowledge team have conflicting priorities. Good — you can broker that conversation now instead of mid-sprint.
- You write the adoption plan and realize you have no idea how the Sales team currently uses the tool. Good — now you'll go find out before you build something they'll ignore.

The PRD writing process is a *discovery process*. Every section you struggle to write is a signal that you don't yet understand something important.

**The practical move:** Write your PRD in stages. Share each stage with the relevant stakeholder before it's polished. A rough business case shared with your VP early is worth more than a perfect document shared too late.

Use disagreements as features, not bugs. When Richard Thorne and David Kim disagree about the scope of AI integration, that's not a problem — that's the exact conversation that needs to happen before engineering starts. Your PRD made it happen.

---

## The 4-Phase Enterprise PRD Workflow

### Phase 1: Business Context
*Purpose: Establish why this matters before discussing what to build*

- **Problem Statement** — What's broken, for whom, and what's the cost of doing nothing?
- **Quantified Impact** — Every 1% WAU increase = $X. Current state vs. target state = $Y gap.
- **ROI Calculation** — Investment required vs. expected return. Include time-to-value.
- **Stakeholder Analysis** — Who needs to say yes? Who can say no? What does each person care about?

This phase is where most enterprise PRDs fail. PMs jump to the solution because it's more fun. But if your business context doesn't make a VP lean forward and say "tell me more," no amount of brilliant solution design will save you.

### Phase 2: Solution & Impact
*Purpose: Show you've considered options and chosen wisely*

- **Options Considered** — At least 3, including "do nothing." Honest pros/cons for each.
- **Recommended Approach** — Your pick and a clear rationale.
- **Success Metrics** — Tied back to the business impact from Phase 1.
- **Change Management** — How will users transition? What training is needed? What breaks during migration?

### Phase 3: Document & Governance
*Purpose: Make it real and accountable*

- **Structured Document** — Clean, scannable, with an executive summary that stands alone.
- **RACI Matrix** — Who is Responsible, Accountable, Consulted, Informed for each workstream.
- **Steering Committee Plan** — Cadence, membership, decision rights.
- **Timeline & Milestones** — Phased delivery with clear go/no-go gates.

### Phase 4: Review & Alignment
*Purpose: Pressure-test before committing resources*

- **Multi-Perspective Review** — Get feedback from engineering, business, and end-user perspectives.
- **Red Team Exercise** — Actively try to poke holes in your own plan.
- **Final Alignment Meeting** — One meeting, one decision: go, no-go, or iterate.
- **Decision Record** — Document what was decided, what was deferred, and what conditions apply.

---

## Multi-Perspective Review with AI

This is where Copilot becomes genuinely powerful for strategic PM work.

Before you walk into a review with real stakeholders, you can simulate that review with AI. The technique is **persona prompting** — asking Copilot to adopt a specific stakeholder's perspective and critique your work from that angle.

This isn't about replacing stakeholder conversations. It's about having *better* stakeholder conversations because you've already anticipated their concerns.

**How it works:**

You give Copilot your PRD section and ask it to review as a specific person with specific concerns. The key is giving enough context about that person's priorities, fears, and communication style.

For example:
- **As your Engineering Director** — "You care about technical feasibility, LLM costs, team capacity, and technical debt. You've been burned by ambitious product roadmaps before."
- **As your VP sponsor** — "You care about strategic alignment, ROI, and whether this strengthens your position in the next leadership offsite."
- **As your most skeptical stakeholder** — "You think internal tools always overpromise and underdeliver. You want to see hard evidence, not projections."
- **As your newest user** — "You just joined the company. You've never used KnowledgeHub. You're comparing it to Google and finding it lacking."

Each persona will surface different blind spots. The Engineering Director finds the cost gap you glossed over. The VP finds the strategic narrative gap. The skeptic finds the assumption you're treating as fact. The new user finds the onboarding gap.

Run all four before your real review. You'll walk in with answers instead of surprises.

---

## Exercise 1: Build the Business Case

**Context:** You're writing a PRD for KnowledgeHub's AI-powered search feature. You need a business case compelling enough to get budget approval from leadership.

**Your Copilot Prompt:**

```
I'm writing a PRD for KnowledgeHub's AI-powered search feature. The business context: search currently takes 8 min avg (target: 2 min), 43% WAU, every 1% WAU increase = ~$200K annual productivity gain. Key stakeholders: Richard Thorne (sponsor, wants innovation), David Kim (engineering, worried about LLM costs), Jennifer Walsh (VP, wants ROI justification). Help me build Phase 1: the business case section. Include: problem statement, quantified impact, ROI calculation, and stakeholder analysis. Challenge me where my numbers are weak.
```

**What to Look For:**
- Does Copilot question your $200K per 1% WAU figure? (It should — where did that number come from?)
- Does the problem statement focus on business impact, not just user frustration?
- Does the stakeholder analysis capture what each person *actually* cares about, not just their title?
- Does the ROI calculation include costs (LLM API fees, engineering time, training) or just benefits?
- If Copilot gives you a polished output without pushback, add: "Now challenge the weakest assumptions in what you just wrote."

---

## Exercise 2: Multi-Perspective Review

**Context:** You've drafted the business case from Exercise 1. Now stress-test it from three different stakeholder perspectives.

**Your Copilot Prompt:**

```
Now review this PRD section from three perspectives:

(1) As David Kim, Director of Engineering — what technical concerns and cost questions would you raise? You're protective of your team's capacity and skeptical of LLM cost projections. You've seen "AI features" get approved without realistic infrastructure planning.

(2) As Richard Thorne, VP Knowledge & Innovation — does this align with the knowledge strategy? What's missing? You're enthusiastic about AI but need this to support your vision for NovaTech as a knowledge-driven organization.

(3) As a skeptical board member — is the ROI compelling? What assumptions are you questioning? You've seen too many internal tool projects that never delivered promised productivity gains.
```

**What to Look For:**
- Do the three perspectives raise genuinely different concerns, or do they sound the same?
- Does "David Kim" ask about LLM hosting costs, latency, data privacy, and engineering sprint allocation?
- Does "Richard Thorne" push on strategic differentiation and long-term knowledge architecture?
- Does the "board member" zero in on the ROI assumptions and ask for comparable benchmarks?
- Take the best objections and revise your Phase 1 section. The exercise works when it changes your document.

---

## Apply to Your Work

**Reflect:**
1. What's the biggest initiative you need buy-in for right now? Who needs to say yes? What would make them say no?
2. When was the last time a PRD you wrote got significant pushback? Was the pushback about the solution or the business case?
3. Do you know what each of your key stakeholders' top 3 priorities are this quarter? If not, how would you find out?

**Your Prompt:**

```
I'm writing an enterprise PRD for [YOUR INITIATIVE]. The business problem is [PROBLEM WITH CURRENT METRICS]. The target outcome is [DESIRED STATE WITH METRICS]. Key stakeholders who need to approve: [STAKEHOLDER 1 — THEIR ROLE AND PRIORITIES], [STAKEHOLDER 2 — THEIR ROLE AND PRIORITIES], [STAKEHOLDER 3 — THEIR ROLE AND PRIORITIES]. Help me build the Phase 1 business case: problem statement, quantified impact, ROI calculation, and stakeholder analysis. Then review it from each stakeholder's perspective and tell me where it's weakest.
```

**You should now have:**
- A Phase 1 business case section for your initiative with quantified impact and ROI
- A stakeholder analysis that maps each decision-maker's priorities and concerns
- Multi-perspective feedback that identifies the blind spots in your business case
- A clear sense of which stakeholder conversation you need to have first

---

## Key Takeaways

- Enterprise internal PRDs need elements that startup PRDs skip: ROI, stakeholder analysis, adoption planning, and governance.
- The PRD writing process matters more than the document itself — it forces alignment conversations that prevent costly mid-project pivots.
- The 4-phase workflow (Business Context → Solution & Impact → Document & Governance → Review & Alignment) ensures you build the case before designing the solution.
- AI persona prompting lets you stress-test your PRD from multiple stakeholder perspectives before the real review, so you walk in with answers instead of surprises.

---

## What's Next

Your PRD makes the case for what to build. But "what to build" should be driven by data, not instinct. In **Module 2.2: Data-Driven Decisions with AI**, you'll learn to build metrics hierarchies, tell stories with data, and use Copilot for product analytics — so your PRDs are backed by evidence that holds up to scrutiny.

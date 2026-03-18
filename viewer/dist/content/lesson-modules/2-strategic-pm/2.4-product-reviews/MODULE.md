# Module 2.4: Running Effective Product Reviews

**Duration:** 25 minutes
**Prerequisites:** Modules 2.2, 2.3

---

## What You'll Learn
1. Structure a product review around a narrative arc that drives a specific decision, not a status update
2. Pre-generate and prepare for the hardest questions leadership will ask using AI as a sparring partner
3. Handle unexpected tough questions with composure using the "investigate" response framework
4. Write post-review follow-up communications that lock in decisions and commitments within 24 hours

---

## Your Most Important Meeting

Shreyas Doshi draws a line between PMs who *survive* product reviews and PMs who *shape* them. The difference isn't presentation skills — it's agency. High-agency PMs walk into a review knowing exactly what decision they want, having anticipated every objection, and having pre-built the path to yes.

Low-agency PMs present their data, answer questions reactively, and leave the room hoping leadership will decide in their favor. They treat the review as something that happens *to* them.

Here's the reality of product reviews in enterprise organizations: this is where strategy meets resources. Where you build credibility or burn it. Where your roadmap gets funded or your initiative gets shelved. Every product review is a campaign, and the meeting itself is just the final event — the real work happened in the weeks before.

If you're walking into a product review and the outcome is genuinely uncertain, you've already made a mistake. By the time you present, you should have built alignment with every key stakeholder individually. The review formalizes decisions that were largely made in hallway conversations, 1:1s, and pre-read reviews.

This module teaches you to prepare like a high-agency PM — so the review confirms your direction instead of derailing it.

---

## Preparation: The Narrative Arc

Most PMs prepare for product reviews by assembling data. They open their dashboards, screenshot the charts, paste them into slides, and call it done. This produces a status update, not a decision document.

A product review needs a **narrative arc** — a story that leads your audience from where you are to where you recommend going, with evidence at every turn.

### The Structure

**1. Here's where we are** (2-3 minutes)
State the current situation with metrics, using the "what → so what" framework from Module 2.2. Don't just show the numbers — interpret them.

Not: "WAU is 43%."
But: "WAU grew from 38% to 43% — that's 250 more weekly users and roughly $1M in annualized productivity gains. But growth is decelerating, which means our current approach is running out of runway."

**2. Here's what we learned** (3-5 minutes)
What did you discover since the last review? What experiments ran? What surprised you? This is where you show that you're learning, not just executing.

"Our AI search pilot with the Engineering department showed 3x faster search times and a 12-point NPS increase within the pilot group. But we also learned that search quality degrades significantly for unstructured documents — which means 40% of our content library needs preprocessing before a full rollout."

**3. Here's what we recommend** (3-5 minutes)
Your recommendation, grounded in the evidence. Include what you're recommending and what you're explicitly NOT recommending (and why).

"We recommend a phased rollout of AI search, starting with the three departments that have the most structured content. We're NOT recommending a full rollout yet because the unstructured content issue would create a worse experience for Sales and Marketing."

**4. Here's what we need** (1-2 minutes)
The specific ask. Budget, headcount, timeline extension, executive sponsorship, stakeholder alignment. Be precise.

"We need: (1) Budget approval for LLM infrastructure — estimated $8K/month. (2) A 4-week pilot extension to validate the structured-content-first approach. (3) Richard Thorne's team to prioritize content cleanup for the next department in line."

### The One-Decision Rule

Every product review should drive toward exactly **one decision**. Not three. Not "several things to discuss." One.

If you need multiple decisions, you need multiple meetings — or you need to cascade the decisions so that one unlocks the others. "If we approve the phased rollout (the one decision), then the budget and timeline follow from that."

When you try to drive multiple independent decisions in one review, you get none of them. Leadership gets decision fatigue, the conversation drifts, and you leave with "let's schedule a follow-up" — which is PM code for "we failed to decide."

---

## Handling Tough Questions

### Pre-Generate the Hard Questions

Before any product review, generate the 10 hardest questions your audience could ask. This is where Copilot excels — give it context about your stakeholders, your data, and your recommendation, and ask it to play aggressive interviewer.

**The 7-and-3 rule:** Prepare full answers for 7 of the 10 questions. For the other 3 — the ones that are genuinely hard or require data you don't have — prepare "investigate" responses.

### The "Investigate" Response

When a question catches you off guard, don't bluff. Don't hedge with vague generalities. Use this format:

**"That's an important question. Here's what I know: [relevant context]. Here's what I'd need to investigate to give you a confident answer: [specific next step]. I'll have that by [specific date]."**

This does three things:
1. Shows you're thoughtful, not defensive
2. Demonstrates you know the boundaries of your knowledge
3. Creates a specific commitment that builds trust

**What NOT to do:**
- Don't make up numbers under pressure
- Don't say "I'll get back to you" without a specific date
- Don't deflect to someone else in the room unless they're genuinely better positioned to answer
- Don't treat the question as an attack — even if it feels like one

### The Reframe Technique

Sometimes a question is important but pulls the meeting off-track. The reframe brings it back:

"That's a great question about long-term platform architecture. I want to give that the attention it deserves — can I address it in our technical deep-dive next week? For today, the decision we need is whether to approve the phased rollout."

This acknowledges the question, validates the asker, and keeps the meeting focused on the one decision.

---

## Post-Review Execution

The review ended well. You got your approval. Now comes the part most PMs neglect: locking it in.

### The 24-Hour Rule

Send the follow-up email within 24 hours. Not because you're eager — because memory is unreliable and organizational context shifts fast. What felt like a clear "yes" in the room becomes "I think we discussed that, but what exactly did we agree on?" by next week.

### The Follow-Up Email Structure

**Subject:** "[Product Review] KnowledgeHub AI Search — Decisions & Next Steps"

**Decisions Made:**
- Bullet each decision precisely. "Approved phased rollout of AI search, starting with Engineering, Product, and People Ops departments."

**Conditions & Constraints:**
- Any caveats attached to the approval. "Contingent on 4-week pilot demonstrating [specific metric] with the Engineering department."

**Next Steps:**
- Each item has an owner and a date. "David Kim: Provision LLM infrastructure by April 15. Sanjay: Design pilot success metrics and share by April 8. Richard Thorne's team: Begin content cleanup for Product and People Ops by April 22."

**Open Items:**
- Questions that were deferred. "Platform architecture discussion — scheduled for April 12 technical deep-dive."

**Decision Record:**
- "This email serves as the record of decisions made in the March 18 product review. Please reply by [date] with any corrections."

That last line is critical. It gives stakeholders a window to correct misunderstandings, and their silence becomes implicit confirmation.

---

## Exercise 1: Build the Narrative and Anticipate Questions

**Context:** You're preparing for KnowledgeHub's quarterly product review. You have data, a recommendation, and an ask. Now you need to build the narrative and war-game the tough questions.

**Your Copilot Prompt:**

```
I'm preparing for KnowledgeHub's quarterly product review with Jennifer Walsh (VP Digital Products), Richard Thorne (VP Knowledge & Innovation, sponsor), and Sarah Mitchell (Director Product Strategy). Here's my data: 43% WAU (up from 38% last quarter), NPS +12 (flat), AI search pilot showing 3x faster results. I want to request budget for full AI search rollout. Help me build the narrative arc: (1) Where we are — current state with interpreted metrics, (2) What we learned — pilot results and key insights, (3) Our recommendation — phased rollout with rationale, (4) The ask — specific resources and approvals needed. Then generate the 10 toughest questions they might ask, considering each person's role and priorities.
```

**What to Look For:**
- Does the "where we are" section interpret the data (so what), not just state it (what)?
- Does it flag that NPS being flat despite WAU growth is a potential concern?
- Does the narrative build a logical case where the recommendation feels inevitable?
- Are the 10 questions genuinely tough? Do they include: cost questions (Jennifer), strategic alignment questions (Richard), scalability questions (Sarah)?
- Pick the 3 hardest questions and practice the "investigate" response format for those.

---

## Exercise 2: Draft the Follow-Up Email

**Context:** The review went well. You got conditional approval. Now lock it in.

**Your Copilot Prompt:**

```
Draft the post-review follow-up email. The review was with Jennifer Walsh, Richard Thorne, and Sarah Mitchell on March 18, 2026. Decisions: approved phased rollout of AI search for KnowledgeHub, starting with a 4-week pilot with the Engineering department. Conditions: pilot must demonstrate (1) at least 2x improvement in search time, (2) positive user feedback from at least 70% of pilot participants, (3) LLM costs under $10K/month at pilot scale. Budget: $8K/month for LLM infrastructure approved for pilot period. Next steps need owners and dates. Include an open item about long-term platform architecture that was raised but deferred. End with a decision record confirmation request.
```

**What to Look For:**
- Is every decision stated precisely enough that there's no room for misinterpretation?
- Are the success criteria for the pilot specific and measurable?
- Does every next step have exactly one owner (not "the team") and a specific date?
- Is the tone professional but not bureaucratic — concise enough that busy VPs will actually read it?
- Does it include the "reply by [date] with any corrections" commitment lock?

---

## Apply to Your Work

**Reflect:**
1. When is your next product review? What's the ONE decision you want to drive?
2. In your last product review, were you surprised by any question? Could you have anticipated it?
3. Do you send follow-up emails after reviews that lock in decisions? Or do decisions drift?

**Your Prompt:**

```
I'm preparing for a product review for [PRODUCT NAME] with [AUDIENCE — names, roles, and what they care about]. My data: [KEY METRICS WITH TRENDS]. My recommendation: [WHAT YOU WANT TO DO]. My ask: [SPECIFIC RESOURCES OR APPROVALS]. Help me build the narrative arc (where we are → what we learned → recommendation → the ask). Then generate the 10 toughest questions my audience might ask, tailored to each person's role and priorities. For the 3 hardest, draft "investigate" responses.
```

**You should now have:**
- A narrative arc for your product review that builds toward a specific decision
- 10 anticipated tough questions with prepared answers for 7 and "investigate" responses for 3
- A post-review follow-up email template that locks in decisions with owners, dates, and confirmation requests
- A clear understanding of the one decision you're driving in your next review

---

## Key Takeaways

- Product reviews are your most important meeting — treat them as campaigns to drive specific decisions, not status updates to survive.
- The narrative arc (where we are → what we learned → recommendation → the ask) builds a logical case that makes your recommendation feel inevitable.
- Pre-generate the 10 hardest questions and prepare for them using the 7-and-3 rule. For questions you can't fully answer, use the "investigate" response format.
- Send the follow-up email within 24 hours to lock in decisions with precise language, clear owners, specific dates, and a confirmation request.

---

## What's Next

You can build the case, present the data, and drive decisions in reviews. But what happens when the blocker isn't a data gap — it's a person? In **Module 2.5: Navigating Organizational Politics**, you'll learn to map the real decision-making network, build coalitions, and war-game stakeholder conversations so you win the argument before the meeting starts.

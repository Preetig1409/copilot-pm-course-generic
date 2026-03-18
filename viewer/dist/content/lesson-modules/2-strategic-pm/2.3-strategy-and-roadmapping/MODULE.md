# Module 2.3: Product Strategy & Roadmapping

**Duration:** 35 minutes
**Prerequisites:** Modules 0.3, 2.1

---

## What You'll Learn
1. Distinguish product strategy from a feature list by applying the "does it help me say no?" test
2. Evaluate strategic initiatives using Gibson Biddle's DHM model (Delight, Hard-to-copy, Margin-enhancing)
3. Choose the right roadmap format (time-based, outcome-based, Now/Next/Later) based on your organizational context
4. Use AI to stress-test your strategy by identifying its weakest assumptions, competitive vulnerabilities, and failure modes

---

## Strategy Is the Framework for Saying No

Gibson Biddle, former VP of Product at Netflix, distilled product strategy into a memorable model: every strategic initiative should Delight users in ways that are Hard-to-copy and Margin-enhancing. It's simple. It's practical. And it forces a discipline that most product "strategies" lack.

Here's the uncomfortable truth: most product strategies aren't strategies. They're prioritized feature lists dressed up with a vision statement. You know you have a real strategy when it helps you say no to a feature request that sounds perfectly reasonable.

"We should add a Slack integration to KnowledgeHub" sounds reasonable. Everyone uses Slack. But if your strategy is *"become the single source of truth for institutional knowledge through AI-powered discovery that no external tool can replicate"* — then a Slack integration might be a distraction from the hard, differentiated work of building the AI search layer. Your strategy gives you a reason to say "not now" that isn't just "we're busy."

If your strategy doesn't help you reject good ideas in favor of great ones, it's not a strategy. It's a wish list.

---

## Gibson Biddle's DHM Model

The DHM model gives you a concrete scoring framework for evaluating strategic directions. For each initiative, ask three questions:

### Delight: Does It Make Users Measurably Happier?

Not "users might like this." Measurably happier — NPS increase, task completion time reduction, unsolicited positive feedback, reduced support tickets.

The key word is *measurably*. If you can't define how you'd measure the delight, you don't understand the initiative well enough to commit to it.

**KnowledgeHub example:** AI-powered search that reduces average search time from 8 minutes to 2 minutes. That's measurable delight. Users will feel the difference every time they search.

### Hard-to-Copy: What's the Moat?

This is where enterprise internal products have a surprising advantage. External competitors (Confluence, Notion, SharePoint) can build better features, better UI, better performance. What they can't replicate: your deep integration with internal systems, your understanding of internal knowledge structures, and the organizational data that makes your AI search smarter the more people use it.

Hard-to-copy doesn't always mean technically difficult. It can mean:
- **Data advantage** — you have data competitors don't (internal project data, org structure, usage patterns)
- **Integration advantage** — you're embedded in workflows competitors can't access
- **Switching cost** — the cost of moving to a competitor increases over time
- **Network effects** — the product gets better as more people in the organization use it

### Margin-Enhancing: Does It Improve Unit Economics?

For enterprise internal products, "margin-enhancing" translates to: does this reduce cost-per-user, increase productivity-per-dollar-spent, or reduce the need for expensive alternatives?

If AI search costs $5/user/month in LLM fees but saves $50/user/month in productivity — that's margin-enhancing. If it costs $50 and saves $5 — it's not, no matter how much users love it.

### Scoring Strategic Directions

Every initiative should score well on at least 2 of 3 dimensions. An initiative that delights users and is hard-to-copy but destroys margins is a charity project. One that's hard-to-copy and margin-enhancing but doesn't delight anyone is an internal tool nobody uses. You need at least two.

The ideal initiative scores on all three. Those are rare — and when you find one, it should go to the top of your roadmap.

---

## Roadmapping Reality

You have a strategy. Now you need a roadmap. The format matters more than most PMs realize, because different formats create different expectations.

### Time-Based Roadmap (Q1 / Q2 / Q3 / Q4)

**When to use it:** When stakeholders need predictability. When you're coordinating with other teams on dependencies. When leadership wants to plan budgets and headcount against deliverables.

**The upside:** Clear expectations. Easy to communicate. Aligns with business planning cycles.

**The trap:** Every item on a time-based roadmap feels like a promise. When Q2 arrives and you haven't shipped the Q2 item because you learned something in Q1 that changed your plan — stakeholders feel misled, even if your decision was correct.

**The rule:** Never put discovery work on a time-based roadmap. You can commit to "ship AI search improvements in Q2" only if the discovery is done and you're confident in the solution. If you're still exploring, use a different format.

### Outcome-Based Roadmap (Goals, Not Features)

**When to use it:** When you need flexibility. When the problem is clear but the solution isn't. When you want to empower your team to find the best path.

**Format:** "Increase KnowledgeHub WAU from 43% to 50%" instead of "Build AI search." The team figures out *how*.

**The upside:** Focuses on results. Allows pivoting when you learn something new. Empowers the team.

**The trap:** Some stakeholders hear "we don't know what we're building" and get nervous. Outcome-based roadmaps require high organizational trust.

### Now / Next / Later

**When to use it:** When you want to be honest about decreasing certainty over time.

**Format:**
- **Now** (this quarter): Committed. In progress or about to start. High confidence.
- **Next** (next quarter): Planned. Scope is roughly defined. Medium confidence.
- **Later** (6+ months): Directional. We believe this matters but haven't designed it. Low confidence.

**The upside:** Honest about uncertainty. Allows you to communicate direction without making false promises. Stakeholders can see the trajectory without holding you to specific dates on uncertain work.

**The trap:** "Later" items can become a graveyard for ideas that never get prioritized. Review and prune regularly.

### Choosing Your Format

In practice, most enterprise PMs use a hybrid: time-based for committed work (this quarter), outcome-based for the next horizon, and Now/Next/Later when presenting to leadership. The format should match the audience and the decision being made.

---

## Stress-Testing with AI

A strategy you haven't tried to break is a strategy you don't understand. Copilot is an excellent sparring partner for this because it has no political stake in your strategy succeeding.

**Four stress tests to run:**

1. **Weakest link:** "What's the weakest part of this strategy? What assumption, if wrong, would cause the entire plan to fail?"

2. **Competitive threat:** "What competitor move — from an external tool or an internal alternative — would make this strategy irrelevant within 12 months?"

3. **Resource reality:** "Given a team of [X] engineers and [Y] budget, is this strategy achievable in the proposed timeline? What would you cut first?"

4. **Stakeholder objection:** "If a skeptical VP asked 'why should we invest in this instead of [alternative],' what's the strongest argument against my strategy?"

The goal isn't to find a strategy with no weaknesses — that doesn't exist. The goal is to *know* your weaknesses so you can mitigate them, address them proactively in reviews, or adjust the plan.

A strategy you've stress-tested and still believe in is ten times more credible than one you've never challenged.

---

## Exercise 1: Evaluate Strategic Directions with DHM

**Context:** You need to choose a strategic direction for KnowledgeHub that will drive WAU from 43% to 60%. Three options are on the table, and you need a rigorous framework for evaluating them.

**Your Copilot Prompt:**

```
I need to build a product strategy for KnowledgeHub. Context: 43% WAU (target 60%), competing with external tools like Confluence and Notion that employees already know, key differentiator is integration with internal systems. Using Gibson Biddle's DHM model, help me evaluate three strategic directions:

(1) AI-powered search and discovery — use LLMs to make finding internal knowledge fast and accurate
(2) Social/community features — comments, likes, expert tagging, discussion threads
(3) Deep integration with project tools — connect KnowledgeHub with ProjectPulse and other internal systems

Score each on Delight (does it measurably improve user experience?), Hard-to-copy (what's the moat vs. external tools?), Margin-enhancing (does it improve productivity per dollar spent?). Give each dimension a score of Low/Medium/High with rationale. Then recommend which direction to lead with and why.
```

**What to Look For:**
- Does Copilot give meaningfully different scores across the three options, or does everything score "Medium"?
- Does it identify that AI search scores highest on Delight (8 min → 2 min is dramatic)?
- Does it recognize that deep integration is the strongest on Hard-to-copy (external tools can't replicate internal system access)?
- Does it flag that social features score lowest on Hard-to-copy (Confluence and Notion already have these)?
- Does the recommendation include a rationale for sequencing — which to do first, second, third?

---

## Exercise 2: Build and Stress-Test a Roadmap

**Context:** Based on your strategic direction, you need a roadmap that communicates your plan to leadership while being honest about what's certain and what's not.

**Your Copilot Prompt:**

```
Build a Now/Next/Later roadmap for KnowledgeHub based on this strategy: lead with AI-powered search (highest Delight and Margin-enhancing scores), followed by deep integration with project tools (highest Hard-to-copy score). Social features are deprioritized.

Now (this quarter, high confidence): committed work already in progress or ready to start.
Next (next quarter, medium confidence): planned but scope is flexible.
Later (6+ months, low confidence): directional bets we believe in but haven't fully designed.

Include 3-4 items in each bucket. For each item, note which DHM dimension it primarily serves. Then stress-test: What's the biggest risk in this roadmap? What assumption, if wrong, would force us to rethink? What competitor move would we need to respond to?
```

**What to Look For:**
- Do "Now" items feel concrete and achievable (e.g., "Launch AI search pilot with Engineering department")?
- Do "Next" items feel planned but appropriately flexible (e.g., "Expand AI search to 3 departments based on pilot learnings")?
- Do "Later" items feel directional without false specificity (e.g., "Explore ProjectPulse integration for cross-product knowledge surfacing")?
- Does the stress test identify real risks — like LLM costs exceeding budget, or the pilot failing to show results?
- Does it identify the key assumption to monitor — likely that AI search quality is good enough to drive adoption?

---

## Apply to Your Work

**Reflect:**
1. Does your product have a clear strategy? Can you explain it in 2 sentences? Does it help you say no to reasonable feature requests?
2. What format is your current roadmap in? Does it match your audience's needs and your level of certainty?
3. When was the last time you said no to a feature request because of strategy, not just capacity?

**Your Prompt:**

```
My product is [PRODUCT NAME]. Our strategic context: [CURRENT STATE — key metrics, competitive position, user base]. Our business goal: [TARGET OUTCOME WITH METRICS]. We're considering these strategic directions: [OPTION 1], [OPTION 2], [OPTION 3].

Using Gibson Biddle's DHM model (Delight, Hard-to-copy, Margin-enhancing), evaluate each option. Then build a Now/Next/Later roadmap for the winning strategy. Finally, stress-test: what's the biggest risk, what assumption is most fragile, and what external change would force a pivot?
```

**You should now have:**
- A DHM evaluation of your strategic options with clear scoring rationale
- A recommended strategic direction with a sequencing rationale
- A Now/Next/Later roadmap that's honest about certainty levels
- A stress-test that identifies the key risks and assumptions to monitor

---

## Key Takeaways

- Product strategy is the framework that tells you what NOT to do — if it doesn't help you say no to reasonable requests, it's a feature list, not a strategy.
- Gibson Biddle's DHM model (Delight, Hard-to-copy, Margin-enhancing) gives you a concrete framework for evaluating strategic directions — aim for at least 2 of 3.
- Choose your roadmap format to match your audience: time-based for committed work, outcome-based for flexibility, Now/Next/Later for honest communication about uncertainty.
- Stress-test your strategy with AI before presenting it — know your weakest assumption, your competitive vulnerability, and your resource constraints.

---

## What's Next

You have a strategy and a roadmap. Now you need to present them to leadership and get approval. In **Module 2.4: Running Effective Product Reviews**, you'll learn to build a narrative arc, pre-generate the toughest questions, and drive the one decision that matters in every review meeting.

# Module 0.3: Prioritization That Actually Works

**Duration:** 25 minutes
**Prerequisites:** Module 0.2 (Knowing Your Users)

---

## What You'll Learn

By the end of this module, you will:
1. Explain why quantitative prioritization frameworks (RICE, MoSCoW) fail in practice and when they still have value
2. Apply Shreyas Doshi's LNO framework to separate high-leverage decisions from noise
3. Build an Opportunity Solution Tree that connects business outcomes to discovery-informed solutions
4. Force-rank a feature list and articulate why each item beats the one below it

---

## The Prioritization Theater Problem

Every PM has been in this meeting: the team spends two hours scoring features on Reach, Impact, Confidence, and Effort. People negotiate scores like diplomats. "I think the impact is a 3, not a 2." "Well, if we count indirect reach, it's really 5,000 users." At the end, the spreadsheet produces a ranked list — and the team ignores it because everyone knows the VP's pet project is shipping regardless.

This is prioritization theater. It looks rigorous. It feels productive. It wastes time.

**Why RICE and MoSCoW fail:**

| Framework | The Promise | The Reality |
|---|---|---|
| **RICE** (Reach, Impact, Confidence, Effort) | Objective scoring produces a defensible ranked list | Garbage-in-garbage-out. Teams game scores to get their preferred features to the top. "Confidence" is a magic knob — set it to 80% to make anything rank higher. |
| **MoSCoW** (Must/Should/Could/Won't) | Clear categorization of priorities | Everything becomes a "Must have." Stakeholders refuse to let their feature be a "Could." The categories are so broad they do not actually force hard decisions. |
| **Weighted scoring** | Customizable criteria make it fit your context | You spend more time debating criteria weights than discussing user problems. Changing the weights by 5% reshuffles the entire list. |

**When quantitative frameworks are still useful:**
- Communicating decisions to executives who want a rational justification (the score is the story, not the process)
- Breaking a tie between two genuinely similar options where you have real data
- Large backlogs (50+ items) where you need a rough first pass before applying judgment

But for the top 10 items on your roadmap — the ones that actually matter — frameworks cannot substitute for judgment. You need a different approach.

---

## The LNO Framework: Know Which Decisions Matter

Shreyas Doshi (former PM at Stripe, Twitter, Yahoo) offers a deceptively simple framework: categorize all your work as **Leverage**, **Neutral**, or **Overhead**.

| Category | Definition | Your Response | Example |
|---|---|---|---|
| **Leverage** | Disproportionate impact relative to effort. These are the decisions that move your metrics, change user behavior, or unlock new capabilities. | Invest 80% of your energy here. Do these yourself. Think deeply. | Redesigning KnowledgeHub search to surface relevance signals — directly attacks the 43% WAU problem. |
| **Neutral** | Needs to get done. Does not differentiate. Good execution matters but extra effort has diminishing returns. | Do these at "good enough" quality. Delegate where possible. Timebox ruthlessly. | Updating the KnowledgeHub settings page UI to match the new design system. Users need it, but it does not move adoption. |
| **Overhead** | Administrative work that keeps the system running but creates no user value. | Eliminate what you can. Automate the rest. Spend minimum viable time. | Weekly status report formatting. Recurring backlog grooming meetings that rehash the same items. |

**The LNO insight that most people miss:** Prioritization is not just about what to build. It is about where you spend your attention. A PM who spends 5 hours perfecting a status report (Overhead) and 30 minutes on a one-pager for the most important feature of the quarter (Leverage) has their priorities exactly backwards — even if their backlog is perfectly prioritized.

Before you prioritize features, prioritize your own time. Ask: "Is this Leverage, Neutral, or Overhead?" If you catch yourself spending significant energy on Neutral or Overhead work, stop. That is a signal to delegate, automate, or drop it.

---

## Opportunity Solution Trees: Say No With Evidence

Teresa Torres's Opportunity Solution Trees (OSTs) provide the structure that scoring frameworks lack. Instead of scoring features in isolation, an OST connects everything back to a measurable business outcome.

**The structure:**

```
                    [Business Outcome]
                    60% WAU for KnowledgeHub
                           │
              ┌────────────┼────────────┐
              │            │            │
        [Opportunity]  [Opportunity]  [Opportunity]
        Users can't    New users     Power users
        find relevant  don't         don't
        content        understand    contribute
                       value prop    content back
              │
        ┌─────┼─────┐
        │     │     │
    [Solution] [Solution] [Solution]
    AI search  Relevance  Expert-
    ranking    signals    curated
               on results collections
              │
        ┌─────┼─────┐
        │     │     │
    [Experiment] [Experiment] [Experiment]
    A/B test     User test    Survey 10
    new algo     result       power users
    vs. old      page with    on curation
                 signals      willingness
```

**Why this works:**
1. **Outcomes, not outputs.** The top of the tree is a measurable business result (60% WAU), not a feature. This means you evaluate every solution by whether it plausibly moves the outcome.
2. **Multiple paths.** Each outcome connects to multiple opportunities, and each opportunity has multiple possible solutions. This prevents premature commitment to one solution.
3. **Evidence-based pruning.** Experiments at the bottom validate or kill solutions cheaply before you invest in building them.
4. **A framework for saying no.** When a stakeholder says "we need feature X," you can ask: "Which opportunity does it address? How does it connect to our target outcome?" If they cannot answer, it does not belong on the tree.

**How to build one:**
1. Start with one business outcome you own (e.g., "Increase KnowledgeHub WAU from 43% to 60%")
2. Identify 3-5 opportunities from your user research (Module 0.2) — real user problems, not assumptions
3. For each opportunity, brainstorm 2-3 potential solutions
4. For each solution, define one cheap experiment to test the assumption

The tree is a living document. Update it as you learn from experiments and user conversations. Solutions get added, pruned, and reprioritized as evidence comes in.

---

## Stack Rank, Don't Score

After you have identified Leverage items and connected them to outcomes through an OST, there is one more step: force-rank them.

Not categorize. Not score. **Rank.** Number 1 through N, no ties.

**Why force-ranking works:**
- Scoring lets you avoid hard decisions ("they're both a 7!"). Ranking forces a choice.
- If you cannot decide between #3 and #4, that is useful information — it means you do not understand the problem well enough. Go learn more.
- Stakeholders game scoring systems. They cannot game a rank — either their feature is #1 or it is not.

**The adjacent-pair test:** For each pair of adjacent items (1 vs. 2, 2 vs. 3, etc.), you should be able to articulate in one sentence why the higher-ranked item beats the lower one. If you cannot, the ranking is not stable — you are guessing.

**Example for KnowledgeHub (top 5):**

| Rank | Feature | Why It Beats the Next One |
|---|---|---|
| 1 | Search relevance improvements | Directly addresses #1 reason users abandon the platform. No point driving new users if search fails them. |
| 2 | AI-powered search suggestions | Builds on relevance — helps users formulate better queries. But useless if underlying results are still irrelevant. |
| 3 | Expert profile badges | Credibility signals improve search result evaluation. Less direct impact on WAU than fixing core search. |
| 4 | Slack integration for Q&A | Meets users where they already are (the workaround). But it is a band-aid — does not fix the root cause. |
| 5 | Analytics dashboard for content owners | Helps content quality long-term. Indirect path to WAU. Not a user-facing improvement. |

Notice: every ranking is debatable. That is the point. The debate itself surfaces assumptions and reveals where you need more evidence.

---

## Exercise 1: Classify and Prioritize

**Context:** You have 8 feature requests for KnowledgeHub, each from different stakeholders with different estimated effort levels. Your north star metric is 60% WAU.

**Your Copilot Prompt:**
```
I'm the PM for KnowledgeHub, an internal knowledge management platform at a 5,000-person enterprise SaaS company. Current weekly active usage is 43%, target is 60%.

Here are 8 feature requests:
1. AI-powered search suggestions — requested by VP Product, estimated 8 weeks
2. Expert profile badges — requested by HR, estimated 3 weeks
3. Mobile app redesign — requested by field sales team, estimated 12 weeks
4. Slack integration for Q&A — requested by engineering teams, estimated 6 weeks
5. Document version history — requested by legal/compliance, estimated 4 weeks
6. Analytics dashboard for content owners — requested by content team, estimated 5 weeks
7. SSO improvements — requested by IT security, estimated 2 weeks
8. Automated knowledge base archival — requested by platform team, estimated 3 weeks

First, classify each as Leverage, Neutral, or Overhead using Shreyas Doshi's LNO framework. Explain your reasoning for each classification.

Then, for the Leverage items only, build an Opportunity Solution Tree connecting them to the 60% WAU goal. What opportunities (user problems) do the Leverage items address? Are there opportunities that have no solution on this list?
```

**What to Look For:**
- Good response: Classifications have clear reasoning tied to the WAU target, not just gut feel. Some items are correctly classified as Neutral or Overhead despite having vocal stakeholders. The OST reveals gaps — opportunities with no proposed solution. The response acknowledges that some classifications depend on evidence you may not have yet.
- Bad response: Everything is classified as Leverage. No connection to the WAU target. OST is just a reformatted list of features. No gaps identified.

---

## Exercise 2: Force-Rank With Justification

**Context:** Same 8 features. Now you need to put them in order and defend the ranking.

**Your Copilot Prompt:**
```
Force-rank these 8 KnowledgeHub features from highest to lowest priority. For each adjacent pair (1 vs 2, 2 vs 3, etc.), write one sentence explaining why the higher-ranked item beats the lower one.

The features:
1. AI-powered search suggestions (VP Product, 8 weeks)
2. Expert profile badges (HR, 3 weeks)
3. Mobile app redesign (field sales, 12 weeks)
4. Slack integration for Q&A (engineering, 6 weeks)
5. Document version history (legal/compliance, 2 weeks)
6. Analytics dashboard for content owners (content team, 5 weeks)
7. SSO improvements (IT security, 2 weeks)
8. Automated knowledge base archival (platform team, 3 weeks)

Context: Internal platform, 5,000 users, 43% WAU target 60%. Primary user pain points are irrelevant search results and inability to find experts quickly.

After ranking, flag any positions where your confidence is low and explain what evidence would change the ranking.
```

**What to Look For:**
- Good response: Rankings reflect the WAU target and known user pain points. Adjacent-pair justifications are specific, not vague ("more impactful"). Low-confidence flags are honest and point to specific unknowns. The ranking accounts for effort-to-impact ratio, not just impact alone.
- Bad response: Ranking matches the original numbered list. No adjacent-pair reasoning. Everything is "high confidence." No acknowledgment of trade-offs or uncertainties.

---

## Apply to Your Work

**Reflect:**
1. Look at your current backlog or roadmap. Pick 3-5 items. For each, is it Leverage, Neutral, or Overhead?
2. Which Overhead items could you drop this week without anyone noticing?
3. For your top Leverage item — can you articulate the business outcome it connects to in one sentence?

**Your Prompt:**
```
I'm a PM for [YOUR PRODUCT]. My top business outcome is [METRIC/GOAL].

Here are 3-5 items currently on my backlog:
1. [ITEM] — requested by [WHO], estimated [EFFORT]
2. [ITEM] — requested by [WHO], estimated [EFFORT]
3. [ITEM] — requested by [WHO], estimated [EFFORT]
[Add more if needed]

Classify each as Leverage, Neutral, or Overhead. For the Leverage items, help me build an Opportunity Solution Tree connecting them to my business outcome. Identify any gaps — are there important opportunities with no solution on my list?

Then force-rank all items and justify each adjacent pair.
```

**You should now have:**
- A clear LNO classification of your current work
- An Opportunity Solution Tree connecting your backlog to a measurable outcome
- A force-ranked list with defensible reasoning for each position

---

## Key Takeaways

- Quantitative prioritization frameworks fail because they create false precision and can be gamed. Use them for communication, not for decision-making.
- The LNO framework applies to your time as much as your backlog. If you are spending significant energy on Neutral or Overhead work, your prioritization problem is not about features — it is about your own calendar.
- Opportunity Solution Trees connect features to outcomes through opportunities, giving you a principled way to say no to requests that do not serve your target metric.

---

## What's Next

Module 0.4 shifts from deciding *what* to build to defining *how* it should work. You will learn to write requirements that engineers actually want to read — one-pagers that provide enough context for good decisions without over-specifying the solution.

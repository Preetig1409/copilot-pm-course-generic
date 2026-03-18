# Module 2.2: Data-Driven Decisions with AI

**Duration:** 30 minutes
**Prerequisites:** Module 1.5

---

## What You'll Learn
1. Build a metrics hierarchy (North Star, Input, Health) that connects daily product work to business outcomes
2. Apply the "what → so what → now what" framework to turn raw data into persuasive narratives
3. Use Copilot to perform product analytics — adoption funnels, cohort retention, feature usage — in plain English
4. Identify common statistical pitfalls (small samples, correlation vs. causation, survivorship bias) that lead to wrong decisions

---

## Numbers Don't Speak for Themselves

Lenny Rachitsky popularized a framework that every product team should tattoo on their wall: the metrics hierarchy. North Star metric at the top — the one number that tells you if your product is succeeding. Input metrics below — the levers you pull. Health metrics alongside — the things that shouldn't break while you're optimizing.

It sounds simple. It's not. Most product teams either drown in metrics (dashboards nobody looks at) or starve for them (decisions made on gut feel dressed up as "product intuition").

Here's the real problem: even when you have the data, you still need to *interpret* it correctly and *communicate* it persuasively. A chart showing 43% WAU means nothing to Jennifer Walsh unless you can explain what's driving it, what it costs, and what to do about it.

This module teaches you to build the right metrics framework, use AI to analyze data without writing formulas, and — critically — to spot when the data is lying to you.

---

## The Metrics Hierarchy

### North Star Metric

Your North Star is the single metric that best captures the core value your product delivers. It's not a vanity metric (total signups), not a business metric (revenue), and not an activity metric (logins). It measures *value delivered*.

**KnowledgeHub example:**

- Bad North Star: "Monthly Active Users" — measures presence, not value
- Better North Star: "Weekly Active Users" — at least measures frequency
- Best North Star: "Weekly searches that find a useful result" — measures the actual value: people finding knowledge they need

The test for a good North Star: if this number goes up and everything else stays flat, is the product succeeding? If it goes up but users are unhappy, it's the wrong metric.

### Input Metrics

Input metrics are the levers you can actually pull to move the North Star. They should be:
- **Actionable** — your team can directly influence them
- **Leading** — they move before the North Star does
- **Decomposable** — you can break them down by segment, cohort, or feature

For KnowledgeHub, Input metrics might include:
- **Search result relevance score** — if results are better, more searches succeed
- **Content freshness** — if knowledge is up to date, results are more useful
- **New user activation rate** — percentage of new users who complete their first successful search within 7 days
- **Department adoption rate** — percentage of each department using the tool weekly

Each Input metric has a clear mechanism connecting it to the North Star. Content freshness drives result usefulness. Activation rate drives the WAU numerator. You should be able to draw the causal chain.

### Health Metrics

Health metrics are the guardrails. They tell you when you're breaking something while optimizing for growth.

- **Search latency** — if you add AI search but it takes 30 seconds, you've traded accuracy for frustration
- **System uptime** — if your AI features increase downtime, net value is negative
- **Support ticket volume** — a spike means something is confusing or broken

Health metrics have thresholds, not targets. You don't optimize for fewer support tickets — you watch for spikes that signal a problem.

---

## Data Storytelling

You've been in the meeting. Someone puts up a slide with six charts and says, "As you can see from the data..." and everyone nods while understanding nothing.

Data doesn't persuade. Stories with data persuade. The difference is structure.

### The "What → So What → Now What" Framework

Every data point you present in a product review should answer three questions:

**What:** The fact, stated plainly.
"KnowledgeHub WAU increased from 38% to 43% this quarter."

**So What:** Why this matters — the interpretation.
"This 5-point gain represents approximately 250 additional weekly users and ~$1M in annualized productivity improvement. However, we're still 17 points below our 60% target, and the growth rate is decelerating — we gained 7 points last quarter."

**Now What:** The action this data drives.
"The deceleration suggests we've captured the 'easy' adopters. The remaining 17 points require a different strategy: targeted department-by-department rollouts with customized onboarding, starting with the three departments that have the lowest adoption."

Notice how the raw number (43% WAU) transforms from a data point into a decision driver. The "so what" adds context that makes the number meaningful. The "now what" makes it actionable.

**Common mistakes:**
- Presenting "what" without "so what" — your audience does the interpretation, and they'll do it wrong
- Presenting "so what" without "now what" — interesting but useless
- Skipping straight to "now what" without showing the data — your recommendation has no foundation

---

## Copilot and Excel for Product Analytics

You don't need to be a data analyst to analyze product data. Copilot can help you work through common product analytics tasks in plain English. Here's what to ask for:

### Adoption Funnels
"Here's our onboarding data: 500 users invited, 420 created accounts, 310 completed setup, 180 performed first search, 95 searched again within 7 days. Calculate the conversion rate at each step. Where's the biggest drop-off? What does that suggest about where to focus?"

### Cohort Retention
"Here's weekly retention data for users who joined in each of the last 8 weeks. [Paste data.] Create a cohort retention table. Which cohort has the best Week 4 retention? What was different about that week — what did we ship or change?"

### Feature Usage Analysis
"Here's feature usage data for KnowledgeHub's top 10 features. [Paste data.] Which features are used by the most users? Which are used most frequently by the users who do use them? Are there features that a small group uses heavily — those might be power-user features worth protecting even if they look low-usage."

### A/B Test Interpretation
"We ran an A/B test on the new search UI. Control: 1,200 users, 34% completed a successful search. Variant: 1,180 users, 38% completed a successful search. Is this statistically significant? What sample size would we need to be confident? Should we ship this?"

The key with all of these: give Copilot the actual data (or a representative sample), state what you're trying to understand, and ask it to explain the analysis in plain language. Then verify the logic makes sense before presenting it.

---

## Statistical BS Detection

Copilot is a powerful analysis tool. It's also a confident one — it will give you a clear, well-structured answer even when the underlying data doesn't support a clear conclusion. Your job is to catch when that happens.

### Small Sample Sizes
"Our A/B test shows a 15% improvement!" — with 30 users per group. That's noise, not signal. Ask Copilot: "Given these sample sizes, what's the confidence interval on this result?" If the confidence interval spans from -5% to +35%, you don't have a result.

**Rule of thumb:** Be skeptical of any product metric based on fewer than 100 data points per segment.

### Correlation vs. Causation
"Departments that use KnowledgeHub have 20% faster project completion." Maybe. Or maybe high-performing departments adopt tools faster AND complete projects faster, and KnowledgeHub has nothing to do with it.

**The test:** Can you identify the mechanism? Can you rule out obvious confounders? If not, say "correlated with" not "caused by."

### Survivorship Bias
"Users who complete onboarding have 80% retention!" Of course they do — you're only measuring people who already demonstrated commitment. The users who bounced in the first 30 seconds aren't in your dataset.

**The test:** Who's missing from this data? What happened to the people who didn't make it to the measurement point?

### Simpson's Paradox
Overall adoption is up 5%. But when you break it down: Engineering is down 3%, Sales is down 2%, Marketing is down 1%. How is overall adoption up? Because the People Ops team (which is large) started using the tool, masking declines everywhere else.

**The test:** Always break aggregate metrics down by segment. The overall number can hide opposite trends in subgroups.

When in doubt, ask Copilot: "What are the three most likely ways this analysis could be misleading?" A good AI partner helps you challenge your own conclusions.

---

## Exercise 1: Build a Metrics Hierarchy

**Context:** You need to define a clear metrics framework for KnowledgeHub that connects daily product work to business outcomes and gives leadership a coherent story.

**Your Copilot Prompt:**

```
Here's KnowledgeHub's metrics: 43% WAU, NPS +12, avg search time 8 min, 2,150 weekly active users out of 5,000. Define a metrics hierarchy: (1) North Star metric with clear definition, (2) 3-4 Input metrics that are levers to move the North Star, (3) 2-3 Health metrics. For each input metric, suggest a target and explain how moving it drives the North Star. Then apply the "what → so what → now what" framework to the current state of each metric.
```

**What to Look For:**
- Does the North Star measure value delivered, not just activity?
- Are the Input metrics actually actionable — can your team influence them directly?
- Is the causal chain from each Input metric to the North Star plausible and specific?
- Are Health metrics things you'd watch for degradation, not things you'd optimize?
- Does the "so what" for each metric add genuine insight, or is it just restating the number?

---

## Exercise 2: Analyze Adoption Data

**Context:** You need to understand KnowledgeHub adoption patterns to identify where to focus growth efforts.

**Your Copilot Prompt:**

```
Analyze this KnowledgeHub adoption data by department over 12 weeks:

Engineering (500 staff): Week 1: 55%, Week 4: 58%, Week 8: 52%, Week 12: 48%
Sales (800 staff): Week 1: 30%, Week 4: 32%, Week 8: 35%, Week 12: 34%
Marketing (400 staff): Week 1: 45%, Week 4: 50%, Week 8: 48%, Week 12: 46%
People Ops (600 staff): Week 1: 25%, Week 4: 30%, Week 8: 38%, Week 12: 45%
Product (200 staff): Week 1: 70%, Week 4: 72%, Week 8: 68%, Week 12: 65%

What's the trend for each department? Which are growing vs declining? What story does this data tell? What should I do about the departments that are declining? Apply the "what → so what → now what" framework to the overall picture.
```

**What to Look For:**
- Does Copilot catch that overall WAU might look stable while individual departments diverge?
- Does it flag Engineering's decline as particularly concerning (large team, was an early adopter)?
- Does it identify People Ops as the growth story and ask what's driving their adoption?
- Does the "now what" include specific, actionable recommendations (not just "improve adoption")?
- Ask follow-up: "What additional data would I need to understand WHY Engineering usage is declining?"

---

## Apply to Your Work

**Reflect:**
1. What's your product's North Star metric? Can you define it in one sentence? If you asked three team members, would they give the same answer?
2. When you present data to leadership, do you use "what → so what → now what" — or do you dump charts and let them draw conclusions?
3. Have you ever made a product decision based on data that, in hindsight, was misleading? What went wrong?

**Your Prompt:**

```
My product is [PRODUCT NAME] with [NUMBER] users. Current key metrics: [LIST 3-5 METRICS WITH VALUES]. Our business goal is [GOAL WITH TARGET]. Help me build a metrics hierarchy: (1) Define the North Star metric, (2) Identify 3-4 Input metrics with targets, (3) Set 2-3 Health metric thresholds. Then take our current metrics and apply "what → so what → now what" for each — what does the data say, what does it mean, and what should we do?
```

**You should now have:**
- A clear metrics hierarchy with North Star, Input, and Health metrics for your product
- Targets for each Input metric with a rationale connecting it to the North Star
- A "what → so what → now what" narrative for your current metrics that's ready for a product review
- An understanding of the statistical pitfalls to watch for when interpreting your data

---

## Key Takeaways

- The metrics hierarchy (North Star → Input → Health) creates clarity about what to measure and why — without it, you're drowning in dashboards or flying blind.
- Data storytelling using "what → so what → now what" transforms numbers into decisions — every metric you present should drive an action.
- Copilot can handle product analytics (funnels, cohorts, A/B tests) in plain English, but you need to provide real data and verify the logic.
- Statistical pitfalls (small samples, correlation vs. causation, survivorship bias, Simpson's paradox) are where smart PMs get fooled — always ask "how could this analysis be wrong?"

---

## What's Next

You have metrics. You have data stories. Now you need a strategy that ties it all together. In **Module 2.3: Product Strategy & Roadmapping**, you'll learn to build strategies that help you say no, evaluate initiatives with Gibson Biddle's DHM model, and create roadmaps that balance stakeholder predictability with product flexibility.

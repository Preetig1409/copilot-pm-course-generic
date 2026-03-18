# Module 1.6: Deep Research with Agents

**Duration:** 25 minutes
**Prerequisites:** Module 1.1

---

## What You'll Learn

By the end of this module, you will:
1. Understand the difference between Researcher and Analyst agents and when to use each
2. Map your PM research needs (competitive intel, market sizing, tech trends) to the right agent
3. Chain agents together — Researcher finds, you filter, Analyst processes, you decide
4. Detect hallucinations, recency issues, and source quality problems in AI-generated research

---

## Competitive Analysis Shouldn't Eat Your Entire Friday

Every PM has a backlog of research questions they never get to:

- "What's Confluence doing with AI features?"
- "How big is the knowledge management market in 2026?"
- "What adoption strategies worked for similar enterprise tools?"
- "What are the technical trends in semantic search that might affect our roadmap?"

Each of these is a 2-4 hour rabbit hole of Google searches, analyst reports, blog posts, and LinkedIn stalking. Important work that gets perpetually deprioritized because the day-to-day is louder.

Copilot's agents change the economics. A competitive landscape that took a Friday afternoon now takes 30 minutes. Market sizing that required buying a Gartner report takes 15 minutes (with caveats — we'll cover those). Technology trend analysis that required reading 20 blog posts takes 20 minutes.

The catch: AI research is fast but not automatically trustworthy. This module teaches you how to use agents effectively *and* how to know when the output is garbage.

## Researcher vs. Analyst: Two Different Tools

### The Researcher Agent
**What it does:** Searches the web with depth. Finds, synthesizes, and compares information from multiple sources.

**Best for:**
- Competitive intelligence (features, pricing, positioning)
- Market sizing and trends
- Technology landscape analysis
- "What's happening in [space]?" questions
- Finding examples, case studies, benchmarks

**Limitations:**
- Knowledge may lag recent events by days or weeks
- Sources aren't always authoritative
- Can confuse popular opinion with expert analysis
- May present outdated information as current

### The Analyst Agent
**What it does:** Reasons over data and documents you provide. Finds patterns, builds arguments, generates frameworks.

**Best for:**
- Analyzing your internal data (usage metrics, survey results, financial models)
- Processing documents (contracts, reports, transcripts)
- Building strategic arguments from evidence you provide
- "What does this data tell us?" questions

**Limitations:**
- Only as good as the data you provide
- Can find patterns in noise (false correlations)
- May overfit to small sample sizes
- Doesn't know what it doesn't know

### The Decision Rule
- **Need information you don't have?** → Researcher
- **Need analysis of information you do have?** → Analyst
- **Need both?** → Chain them: Researcher finds → you filter → Analyst processes

## The PM Research Stack

Here's how typical PM research needs map to agents:

| Research Need | Agent | Your Role |
|---|---|---|
| Competitive landscape | Researcher | Validate claims, check dates, add insider knowledge |
| Market sizing | Researcher → Analyst | Researcher finds data, Analyst builds model, you validate assumptions |
| Tech trend analysis | Researcher | Filter signal from noise, assess relevance to your stack |
| Customer sentiment | Analyst | Provide the data (reviews, tickets, surveys), interpret the synthesis |
| Strategic positioning | Researcher → Analyst | Researcher gathers competitive data, Analyst helps you frame positioning |
| Business case building | Analyst | Provide assumptions and data, have Analyst stress-test the logic |

## Chaining Agents: Human in the Loop

The most powerful research pattern isn't a single prompt — it's a chain with you in the middle:

**Step 1: Researcher finds raw material**
> "Research the competitive landscape for enterprise knowledge management platforms."

**Step 2: You filter**
Review the output. Remove outdated information. Add context Copilot doesn't have ("Actually, Notion's enterprise pricing changed last month." "We already evaluated Guru and rejected it for X reason.").

**Step 3: Analyst processes**
> "Given this competitive landscape [paste filtered research] and our product's position [describe KnowledgeHub], where is our defensible advantage? Where are we most vulnerable?"

**Step 4: You decide**
The Analyst's output is a starting point for your strategic thinking, not the conclusion.

This chain produces output that's both broadly researched *and* specifically tailored to your situation — something neither agent can do alone.

## BS Detection: When NOT to Trust the Output

AI research has specific failure modes. Learn these and you'll catch problems before they reach your stakeholders.

### Hallucinated Statistics
**Pattern:** Precise numbers with no source citation.
> "The enterprise knowledge management market is valued at $47.3 billion..."

**Response:** Ask "What's your source for that number? When was it published?" If Copilot can't cite a specific report and date, treat the number as directional at best.

### Recency Issues
**Pattern:** Information presented as current that's actually 1-2 years old.
> "Confluence's latest feature release includes..."

**Response:** Check dates explicitly. Ask "When was this information last confirmed? What's the most recent source you're drawing from?"

### Confident Fabrication
**Pattern:** Detailed, authoritative-sounding claims about specific companies that feel too clean.
> "Tettra reports 65% year-over-year enterprise adoption growth..."

**Response:** If a claim seems suspiciously specific or favorable, verify independently. Copilot sometimes generates plausible-sounding metrics that don't exist.

### The 3-Question Verification
For any important claim in AI-generated research, ask:
1. **"What's your source?"** — If it can't cite one, the claim is unreliable
2. **"When is this from?"** — If older than 6 months, verify it's still current
3. **"How confident are you?"** — Copilot will sometimes admit uncertainty when directly asked

---

## Exercise 1: Competitive Landscape Research

**Context:** Your quarterly product review is coming up, and Jennifer Walsh has asked for a competitive landscape analysis of the knowledge management space. You need to position KnowledgeHub relative to key competitors.

**Your Copilot Prompt:**
```
Use the Researcher agent to research the competitive landscape for internal enterprise knowledge management platforms.

Compare these 4 competitors to help me position KnowledgeHub:
1. Confluence (Atlassian)
2. Notion
3. Guru
4. Tettra

For each competitor, provide:
- PRICING MODEL: How they charge, approximate enterprise pricing, any free tier
- KEY DIFFERENTIATORS: What they do better than anyone else (2-3 points)
- ENTERPRISE ADOPTION: Notable enterprise customers, approximate market penetration
- WEAKNESSES: Known pain points, common complaints, where they fall short (2-3 points)
- AI CAPABILITIES: What AI features they've launched or announced

Then synthesize:
- Where does an internal enterprise KM platform like KnowledgeHub have a DEFENSIBLE advantage? (Consider: it's built into our enterprise ecosystem, customized for our workflows, no data leaves our tenant)
- Where is KnowledgeHub most VULNERABLE? (Where competitors are clearly better)
- What's the ONE competitive move we should be most worried about in the next 12 months?

Important: Cite your sources. For any specific statistic, tell me where it comes from and when it was published. If you're uncertain about a claim, say so.
```

**What to Look For:**
- **Good response:** Specific differentiators (not generic "easy to use"), pricing that's roughly accurate, weaknesses that match what you've heard from users, AI capabilities that reflect recent announcements
- **Weak response:** Generic comparisons that could have been written about any SaaS category, no source citations, suspiciously precise market share numbers
- **Verification step:** Pick 2-3 specific claims and verify them with a quick web search. How accurate was Copilot? Track your hit rate — it calibrates your trust level.

---

## Exercise 2: Adoption Strategy Analysis

**Context:** KnowledgeHub is at 43% WAU against a 60% target. You need to understand what has worked for competitors facing similar adoption challenges.

**Your Copilot Prompt:**
```
Use the Analyst agent for this analysis:

SITUATION:
KnowledgeHub (NovaTech's internal knowledge management platform) has 43% weekly active usage vs. a 60% target. Our top competitor Confluence reports approximately 65% adoption in enterprises of similar size.

RESEARCH QUESTIONS:
1. ADOPTION STRATEGIES: What strategies have enterprise knowledge management platforms used to drive adoption from the 40-60% range? Look for specific tactics, not generic advice like "improve UX." I want examples of what companies actually did.

2. ADOPTION BARRIERS: What are the most common reasons enterprise KM tools plateau at 40-50% adoption? Map each barrier to a potential mitigation strategy.

3. DEPARTMENT VARIANCE: Our adoption ranges from 22% (HR) to 67% (Engineering). What explains this kind of departmental variance in KM tool adoption? What have other companies done to close the gap?

4. COMPETITIVE LESSON: If Confluence achieves ~65% adoption, what specifically do they do that drives higher engagement? What can we learn without just copying their features?

5. 90-DAY PLAN: Given all the above, recommend a 90-day adoption improvement plan for KnowledgeHub. Prioritize by effort-to-impact ratio. Be specific about tactics, not just strategies.

For each recommendation, tell me: What's the evidence this works? What could go wrong? What would we need to be true for this to succeed?
```

**What to Look For:**
- **Good response:** Specific adoption tactics (e.g., "mandatory onboarding workflows," "department champion programs," "integration with existing tools"), evidence-based recommendations, honest assessment of what could go wrong
- **Weak response:** Generic advice ("improve user experience," "get executive sponsorship"), no examples or evidence, recommendations without risk assessment
- **Key test:** Show the 90-day plan to a colleague. Does it feel actionable and grounded, or does it feel like it was generated by an AI that doesn't know your company?

---

## Apply to Your Work

**Reflect:**
1. What research question have you been putting off because it feels like a full-day project?
2. When was the last time you presented competitive intelligence to a stakeholder? How old was the data?
3. How would your product strategy change if you could get competitive landscape updates monthly instead of quarterly?

**Your Prompt:**
```
RESEARCHER: Research [TOPIC/COMPETITIVE LANDSCAPE/MARKET TREND].

For each [competitor/trend/data point]:
- [Specific dimension 1]
- [Specific dimension 2]
- [Specific dimension 3]

Synthesize:
- What does this mean for [MY PRODUCT]?
- Where are we strong/vulnerable?
- What should we do about it in the next [TIMEFRAME]?

Cite sources. Flag uncertainty. Tell me what you don't know.
```

**You should now have:**
- A competitive landscape analysis you can refine and present
- An adoption improvement plan grounded in external evidence
- A calibrated sense of when to trust AI research output and when to verify

---

## Key Takeaways

- Researcher agents find information you don't have; Analyst agents process information you do have. Chain them for the best results.
- The most powerful pattern: Researcher finds → you filter → Analyst processes → you decide. Never remove yourself from the loop.
- AI research is fast but not automatically trustworthy. Always ask: "What's your source? When is this from? How confident are you?"
- Hallucinated statistics are the biggest risk. Precise numbers without source citations should be treated as unreliable until verified.
- The goal isn't to replace your strategic thinking — it's to compress the research phase so you spend more time on judgment and less on gathering.

## What's Next

You've been giving Copilot context in every conversation. But what if it remembered your product, your stakeholders, and your priorities automatically? In **Module 1.7: Building Context & Memory**, you'll build persistent context that makes every Copilot interaction faster and more relevant.

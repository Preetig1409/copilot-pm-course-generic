# Module 1.4: Communication That Lands

**Duration:** 25 minutes
**Prerequisites:** Module 1.1

---

## What You'll Learn

By the end of this module, you will:
1. Transform a single status update into audience-specific communications for engineers, executives, and stakeholders in minutes
2. Apply the Communication Pyramid (Context → So What → Now What) to every PM message
3. Use Copilot in Outlook for tone adjustment, audience-aware rewriting, and email drafting
4. Draft high-stakes communications — pushback, bad news, escalations — with Copilot as your thought partner

---

## The Same Update, Written Three Times

Every week, you produce essentially the same information in three different formats:

- **For engineering:** Detailed, technical, sprint-level. "API integration is at 72% completion, 3 story points remaining, blocked by the authentication service dependency."
- **For your VP:** Outcome-focused, strategic. "AI search is on track for Q3 launch. One dependency risk on authentication — mitigation plan in place."
- **For the steering committee:** Progress narrative with business impact. "KnowledgeHub's AI search initiative will reduce average knowledge retrieval time by 40%, launching in Q3 as planned."

Same facts. Three audiences. Three formats. Three writing sessions.

This is the PM communication tax. It's pure overhead — not thinking work, just repackaging. And it's not just weekly updates. It's every email, every Slack message, every deck. The constant translation between audiences eats hours every week that should go toward actual product decisions.

## Copilot in Outlook: Beyond "Write Me an Email"

Most PMs who try Copilot in Outlook type "write an email about the sprint review" and get something so generic they delete it. Here's what actually works:

### Drafting with Context
Don't ask Copilot to write from nothing. Give it the raw material:
- Paste your detailed notes
- Reference the meeting transcript
- Attach the sprint metrics

Then ask for a specific transformation: "Rewrite these technical notes as a 3-paragraph executive update. Lead with the business impact. Keep it under 150 words."

### Tone Adjustment
Copilot is surprisingly good at tone when you're specific:
- "More direct — I need this to sound like a decision, not a suggestion"
- "Softer — David might feel this is confrontational. Keep the message but reduce the edge"
- "More confident — remove hedging words like 'maybe,' 'I think,' 'potentially'"

### Reply Drafting
The highest-leverage Outlook Copilot use: drafting replies to complex threads. "Summarize this 14-email thread and draft my response. I need to agree on timeline, push back on scope addition, and ask for the data Sarah mentioned."

## The Communication Pyramid: Context → So What → Now What

Every PM communication — email, Slack, deck, standup update — should follow this structure:

**Context:** What's the situation? (2-3 sentences max)
> "KnowledgeHub AI search is in Sprint 14 of 16. Core search functionality is complete. We're integrating with the authentication service."

**So What:** Why does this matter to *this* audience? (1-2 sentences)
> "We're on track for Q3 launch, but the auth dependency could shift the timeline by 1-2 weeks if the Platform team's capacity issue isn't resolved by next Friday."

**Now What:** What action is needed? (Specific, with deadline)
> "I need a decision by Thursday: do we launch without SSO and add it in a fast-follow, or hold for full integration? I recommend the fast-follow approach — here's why."

Most PM communications fail at "So What" — they deliver information without interpretation. Copilot is excellent at adding the "So What" layer when you prompt for it.

## Difficult Communications: Copilot as Draft Partner

The communications that drain the most energy aren't status updates. They're the hard ones:

- **Pushing back** on a scope request from a senior stakeholder
- **Delivering bad news** about a timeline slip
- **Escalating** a resource conflict without burning relationships
- **Saying no** to a feature request from someone who outranks you

For these, Copilot isn't the writer — it's the sparring partner. Generate 2-3 draft approaches, evaluate the tradeoffs, then refine the one that fits.

**The pattern:**
1. Describe the situation and what you need to communicate
2. Ask for 3 versions: diplomatic, direct, and somewhere between
3. Choose the one that matches the relationship and stakes
4. Refine tone and specifics
5. Sleep on it if the stakes are high (Copilot can't replace that)

---

## Exercise 1: One Update, Three Audiences

**Context:** You have a detailed technical status update on KnowledgeHub's search improvement project. Sprint 14 is wrapping up. Core search is at 85% completion. API latency has dropped from 340ms to 180ms. There are 3 open bugs (2 medium, 1 low). The authentication service dependency is at risk because the Platform team lost a developer. Sprint velocity has been 42 story points against a target of 45.

**Your Copilot Prompt:**
```
Here's a detailed technical status update on KnowledgeHub's AI search improvement project:

- Sprint 14 of 16 complete
- Core search functionality: 85% complete
- API latency improved from 340ms to 180ms (target: <200ms — achieved)
- Open bugs: 3 (2 medium severity, 1 low)
- Authentication service integration: at risk — Platform team lost a senior developer last week
- Sprint velocity: 42 story points vs. 45 target (93%)
- Key milestone: semantic search demo scheduled for stakeholders next Wednesday

Transform this into three communications:

1. ENGINEERING SLACK (for #knowledgehub-dev channel)
Format: 3-5 bullet points, technical language, celebrate the latency win, flag the auth risk with specific ask. Under 100 words.

2. EMAIL TO JENNIFER WALSH (VP Digital Products)
Format: Communication Pyramid — Context, So What, Now What. Lead with business impact, not technical details. Flag the auth risk as a decision point, not just information. Include your recommendation. Under 150 words.

3. EXECUTIVE BRIEFING (2-slide outline for quarterly product review)
Slide 1: Progress and wins (what to be proud of)
Slide 2: Risks and decisions needed (what needs attention)
For each slide: title, 3-4 bullet points, one key data point to highlight.

Each version should feel like it was written for that specific audience — not like a longer version was just shortened.
```

**What to Look For:**
- **Good response:** Engineering version uses technical specifics (API latency numbers, story points); VP email leads with business outcome, not sprint metrics; executive briefing frames risks as decisions, not problems
- **Weak response:** All three versions feel like the same content at different lengths, or the executive version still includes sprint-level detail
- **Key test:** Would you actually send each of these with minimal editing? If the VP email reads like it was written by an engineer, the audience calibration needs work.

---

## Exercise 2: The Difficult Pushback

**Context:** David Kim (Director Engineering) has asked you to add a new analytics dashboard feature to the current sprint. He says the CEO mentioned wanting better visibility into KnowledgeHub usage at last week's leadership meeting. But your sprint is already at 93% capacity, and adding this feature would delay the AI search launch by approximately 2 weeks — right when you're approaching the Q3 deadline Jennifer Walsh committed to publicly.

**Your Copilot Prompt:**
```
I need to push back on a request from David Kim, Director of Engineering. Here's the situation:

- David wants to add a CEO-requested analytics dashboard to the current sprint
- Our sprint is at 93% capacity (42/45 story points consumed)
- Adding this feature would delay the AI search launch by ~2 weeks
- Jennifer Walsh (VP, David's peer) publicly committed to a Q3 launch date
- David outranks me, and the request is framed as "the CEO wants this"

Draft a message to David that:
1. Acknowledges the request is important and the CEO's interest is valid
2. Explains the specific tradeoff — not "we're busy" but "this delays AI search by 2 weeks, which puts Jennifer's Q3 commitment at risk"
3. Proposes an alternative — analytics dashboard starts Sprint 15 with dedicated capacity, or a lightweight version ships alongside AI search
4. Is firm on protecting the current sprint but collaborative on finding a solution

Tone: Respectful but direct. This is a peer-level conversation where I need to hold my ground without being adversarial. David should feel heard, not blocked.

Give me two versions:
- Version A: Slack message (under 150 words, conversational)
- Version B: Email (under 200 words, slightly more formal, cc-able to Jennifer if needed)
```

**What to Look For:**
- **Good response:** Acknowledges the CEO interest without caving, frames the tradeoff in terms David cares about (not just your workload), proposes a concrete alternative with timeline, maintains collaborative tone while being unmistakably firm
- **Weak response:** Either too soft (sounds like you'll probably do it) or too rigid (sounds like "no" without alternatives), or buries the tradeoff instead of leading with it
- **Key test:** Read it aloud. Does it sound like something a confident PM would actually send? Or does it sound like ChatGPT wrote a "professional email"?

---

## Apply to Your Work

**Reflect:**
1. What communication are you dreading right now? A pushback, a bad-news delivery, an awkward follow-up?
2. How many times this week did you rewrite the same information for different audiences?
3. When was the last time you sent a message and the recipient clearly didn't understand what action you needed from them?

**Your Prompt:**
```
I need to communicate [SITUATION] to [AUDIENCE AND THEIR ROLE].

Context:
- [Key facts]
- [Relationship dynamics]
- [What's at stake]

The message needs to:
- [Primary goal — inform, persuade, request action, push back]
- [Tone — direct, diplomatic, urgent, collaborative]
- [Length — under X words]
- [Format — email, Slack, deck talking points]

Give me two versions: one more direct, one more diplomatic. I'll pick the right one for the relationship.
```

**You should now have:**
- The ability to transform one piece of information into multiple audience-specific communications
- A framework (Context → So What → Now What) for every PM message
- Confidence using Copilot for high-stakes communications that require nuance and judgment

---

## Key Takeaways

- The PM communication tax — rewriting the same information for different audiences — is pure overhead that Copilot eliminates
- Every PM communication should follow Context → So What → Now What. Most fail at "So What" by delivering information without interpretation.
- For difficult communications (pushback, bad news, escalation), use Copilot as a sparring partner: generate multiple versions, choose the right approach, then refine
- Audience calibration is the test: an engineering Slack and an executive email should feel like different documents, not different-length versions of the same one
- Copilot handles tone adjustment well when you're specific — "more direct" works, "make it better" doesn't

## What's Next

You've been using Copilot in chat and Outlook. But Copilot lives across your entire M365 suite — Word, Excel, PowerPoint — and most PMs use less than 10% of what's available. In **Module 1.5: Copilot Across M365**, you'll build an integrated workflow across all your tools.

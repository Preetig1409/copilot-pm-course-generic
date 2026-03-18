# Module 0.4: Writing Requirements That Engineers Love

**Duration:** 25 minutes
**Prerequisites:** Module 0.3 (Prioritization That Actually Works)

---

## What You'll Learn

By the end of this module, you will:
1. Write user stories that function as conversation starters, not contracts — with the right level of detail
2. Identify what engineers actually need from a PM to do their best work
3. Structure a one-pager that fits problem, context, approach, success criteria, and open questions on a single page
4. Write acceptance criteria using Given/When/Then that are tight enough to test and loose enough to allow good engineering judgment

---

## The Two Ways to Fail at Requirements

There are exactly two failure modes, and most PMs are stuck in one of them.

**Failure mode 1: Over-specification.** The 47-page PRD with pixel-perfect mockups, 23 acceptance criteria per story, and implementation notes telling engineers which API to call. Engineers become ticket-takers. They stop thinking about the problem and start executing against a spec. When the spec is wrong — and it is always wrong somewhere — they build exactly what you wrote instead of what users need. You have turned your most expensive, most creative team members into a typing pool.

**Failure mode 2: Under-specification.** A one-line Jira ticket that says "Improve search." No context on why. No definition of success. No constraints. The engineer makes reasonable assumptions that happen to be different from yours. Three weeks later, you see the build and say "that's not what I meant." The engineer says "you didn't tell me what you meant." Both of you are right.

**The sweet spot:** Enough context for the engineer to make good decisions. Enough freedom for the engineer to find the best solution. You define the problem and the guardrails. They define the implementation.

The practitioner principle here is straightforward: **context over specs.** An engineer who understands *why* users need faster search results will make better micro-decisions in 200 lines of code than you could capture in 200 lines of acceptance criteria.

---

## What Engineers Actually Need From You

I have asked dozens of engineers what they want from their PM. The answers are remarkably consistent:

| What Engineers Want | What They Don't Want |
|---|---|
| **Problem context** — Why are we building this? What user pain does it solve? | Feature requests with no "why." "Add a button that does X" without explaining the problem X solves. |
| **Constraints** — What are the boundaries? Performance targets, compliance requirements, platform limitations. | Vague constraints. "It should be fast" means nothing. "Search results in under 2 seconds for 95% of queries" is actionable. |
| **What success looks like** — How will we know this worked? What metric moves? | Success defined as "ship the feature." Shipping is not success. Adoption is success. |
| **What's out of scope** — What are we explicitly NOT building? | Ambiguous scope that expands mid-sprint because "I assumed we'd also handle that case." |
| **Open questions** — What don't you know yet? Where should they flag design decisions? | False certainty. Pretending you have all the answers when you obviously don't. |
| **Access to users** — Can I talk to the person who needs this? | Being a wall between engineering and users. "I'll relay the feedback." No. Let them hear it firsthand. |

**The uncomfortable pattern:** Most of what engineers need is not specification — it is communication. They need to understand the problem well enough to solve it creatively. The PM who writes a great one-pager and then sits with the engineer for 20 minutes answering questions produces better software than the PM who writes a 30-page spec and throws it over the wall.

---

## The One-Pager

A one-pager is exactly what it sounds like: the entire feature definition fits on one page. If it does not fit, either the feature is too big (split it) or you do not understand it well enough yet (do more discovery).

**The structure:**

### 1. Problem (2-3 sentences)
What is the user's problem? Be specific. Not "search is bad" but "KnowledgeHub users spend an average of 8 minutes per search session and abandon 33% of searches without clicking a result, because search results lack relevance signals that help users evaluate which documents are worth opening."

### 2. Context (3-5 bullet points)
Why does this matter now? What evidence do we have?
- WAU is 43% against a 60% target. Exit surveys cite search quality as the #1 reason for disengagement.
- Users report switching to Slack to ask colleagues instead of using search — a workaround that does not scale.
- Competitor platform launched relevance-scored results in Q3 and saw 22% improvement in search completion rates.
- Engineering has a search infrastructure upgrade shipping next sprint that makes this technically feasible without a full rebuild.

### 3. Proposed Approach (3-5 sentences)
How might we solve this? Not a detailed design — a direction. "Add relevance signals to search results including recency, author credibility score, and usage count. Surface these as visual indicators on the results page so users can evaluate relevance without opening each document." Leave room for engineering to propose a better implementation.

### 4. Success Criteria (3-5 metrics, measurable)
How will we know this worked?
- Search abandonment rate decreases from 33% to below 20%
- Average search session time decreases from 8 minutes to under 4 minutes
- Search satisfaction score (post-search survey) improves from 3.2/5 to 3.8/5
- No increase in search result page load time (stays under 2 seconds)

### 5. Open Questions (2-5 items)
What do we not know yet?
- Do we have reliable data for "author credibility"? Need to validate with the data team.
- Should we show usage count publicly? Some content owners may feel competitive about low numbers.
- How do we handle search results for documents with no signals yet (new content)?
- Is the search infrastructure upgrade a hard dependency, or can we ship a partial version on the current system?

**The discipline:** If the Problem section takes more than 3 sentences, you are probably conflating multiple problems. Split them into separate one-pagers. If the Success Criteria are not measurable, you are not ready to build this yet — go get the data.

---

## User Stories and Acceptance Criteria

User stories break the one-pager into sprint-sized work. Each story should be small enough that an engineer can build it in a few days, not weeks.

**The format:**
> As a [user type], I want [capability], so that [benefit].

But remember from Module 0.2 — the job story format is often better:
> When [situation], I want to [motivation], so I can [outcome].

**The 3 AC Rule:** If a user story has more than 3 acceptance criteria, it is either over-specified or too big. Three forces you to focus on what really matters — the critical paths, the edge cases that would cause real problems, the behaviors that define "done." Everything else is implementation detail the engineer can figure out.

**Given/When/Then format:**

```
Given [precondition or context]
When [action the user takes]
Then [expected observable result]
```

**Example: KnowledgeHub search relevance signals**

**Story:** When I search KnowledgeHub and see results, I want relevance indicators on each result, so I can quickly identify which documents are worth opening without reading each one.

**Acceptance criteria:**

1. **Given** a search returns results, **When** results are displayed, **Then** each result shows a relevance score (1-5 dots), last updated date, and author department.

2. **Given** a document has been accessed more than 50 times, **When** it appears in results, **Then** it shows a "Frequently referenced" badge.

3. **Given** search results are loading, **When** page load exceeds 2 seconds, **Then** results appear with placeholder indicators rather than blocking the full page.

That is it. Three criteria. They cover the core experience, the power-user signal, and the performance guardrail. They do NOT specify the dot color, the badge icon, the exact position on the page, or the loading animation style. Those are design and engineering decisions.

**When to write more than 3:** Compliance features, payment flows, security-critical functionality — areas where getting it wrong has legal or financial consequences. These deserve exhaustive ACs. A settings page redesign does not.

---

## Common Mistakes and How to Fix Them

| Mistake | What It Looks Like | Fix |
|---|---|---|
| **Solutioning in the problem statement** | "The problem is we don't have AI search." | Rewrite: "Users spend 8 min per search and abandon 33% of searches." The solution is AI search. The problem is search failure. |
| **Unmeasurable success criteria** | "Users should find search more helpful." | Rewrite: "Search satisfaction score improves from 3.2 to 3.8." |
| **No open questions** | "We've got it all figured out." | You don't. If you have zero open questions, you haven't thought hard enough. Add at least 2. |
| **Stories too large** | "As a user, I want a completely redesigned search experience." | Split: Result relevance signals, search suggestions, filter improvements, saved searches. Each is one sprint. |
| **Acceptance criteria that are test scripts** | "Click the search box, type 'cloud migration', press Enter, verify 10 results appear in under 1.5 seconds with relevance scores..." | Rewrite using Given/When/Then. Let QA write the test scripts. |

---

## Exercise 1: Write a One-Pager

**Context:** KnowledgeHub's search takes an average of 8 minutes per session. Users report that results are not relevant — they open multiple documents before finding what they need, and 33% of searches are abandoned entirely. You need to write a one-pager for adding AI-powered search improvements.

**Your Copilot Prompt:**
```
Write a one-pager for adding AI-powered search to KnowledgeHub, an internal knowledge management platform at a 5,000-person enterprise company. Current search takes 8 min average per session, users give up on 33% of searches, and satisfaction is 3.2/5.

Use this structure:
1. Problem (2-3 sentences — specific, not vague)
2. Context (3-5 bullet points — evidence and timing)
3. Proposed Approach (3-5 sentences — direction, not detailed design)
4. Success Criteria (3-5 measurable metrics)
5. Open Questions (3-5 unknowns)

Push back hard if my problem statement is vague or success criteria aren't measurable. Flag anything that seems like a solution disguised as a problem. The whole thing should fit on one page — be concise.
```

**What to Look For:**
- Good response: Problem statement focuses on user pain, not missing features. Success criteria have specific numbers. Open questions reveal genuine unknowns (data availability, dependencies, edge cases). The approach gives direction without dictating implementation. It actually fits on one page.
- Bad response: Problem statement says "we need AI search" (that is a solution). Success criteria are vague ("improve search"). No open questions. Reads like a marketing brief instead of an engineering brief.

---

## Exercise 2: Break It Into Stories

**Context:** You have your one-pager. Now you need to break the AI search improvement into sprint-sized user stories with acceptance criteria — small enough for one 2-week sprint each.

**Your Copilot Prompt:**
```
Based on the AI-powered search one-pager for KnowledgeHub, write 3 user stories with acceptance criteria. Each story should be:
- Small enough for one 2-week sprint
- Written in job story format: "When [situation], I want [motivation], so I can [outcome]"
- Accompanied by exactly 3 acceptance criteria in Given/When/Then format
- Independent enough to ship value on its own

Challenge yourself: are any of these stories actually too big for one sprint? If so, suggest how to split them further. Also flag any hidden dependencies between the stories.
```

**What to Look For:**
- Good response: Stories are genuinely independent — shipping story 1 without story 2 still delivers value. ACs are tight (exactly 3 per story) and testable. The response identifies at least one story that might be too big and suggests a split. Dependencies between stories are flagged honestly.
- Bad response: Stories are just the one-pager sliced into three arbitrary chunks. ACs are either too detailed (test scripts) or too vague ("it works"). No self-critique on story size.

---

## Apply to Your Work

**Reflect:**
1. What is the next feature you need to spec? What is the actual problem — in one sentence, from the user's perspective?
2. Think about the last spec or PRD you wrote. Was it over-specified (engineers as ticket-takers) or under-specified (engineers guessing)?
3. If you had to write the whole spec on one page, what would you cut?

**Your Prompt:**
```
I need to write a one-pager for [YOUR FEATURE]. The user problem is: [ONE SENTENCE PROBLEM STATEMENT].

Help me write a one-pager using this structure:
1. Problem (2-3 sentences)
2. Context (3-5 bullet points with evidence)
3. Proposed Approach (direction, not detailed design)
4. Success Criteria (3-5 measurable metrics)
5. Open Questions (3-5 unknowns)

Then break it into [2-4] user stories with 3 acceptance criteria each in Given/When/Then format. Flag any stories that are too big for a 2-week sprint.

Be opinionated — if my problem statement is vague, tell me. If my success criteria aren't measurable, push back.
```

**You should now have:**
- A one-pager that communicates problem, context, approach, success, and unknowns on a single page
- 2-4 user stories sized for individual sprints with testable acceptance criteria

---

## Key Takeaways

- Requirements fail in two ways: over-specification (engineers become ticket-takers) and under-specification (engineers guess wrong). The sweet spot is enough context for good decisions, enough freedom for the best solution.
- Engineers need problem context, constraints, success criteria, scope boundaries, and open questions. Most of what they need is communication, not documentation.
- The one-pager forces clarity. If you cannot fit it on one page, either the feature is too big or you do not understand it yet. Both are signals to do more work before building.

---

## What's Next

Module 0.5 covers Agile and Scrum in practice — not the textbook version, but the honest take on which ceremonies earn their time, why your backlog is not a to-do list, and how dual-track agile prevents teams from building the wrong things efficiently.

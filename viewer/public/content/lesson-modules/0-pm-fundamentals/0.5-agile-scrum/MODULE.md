# Module 0.5: Agile in Practice — What Scrum Gets Right and Wrong

**Duration:** 20 minutes
**Prerequisites:** Module 0.4 (Writing Requirements That Engineers Love)

---

## What You'll Learn

By the end of this module, you will:
1. Evaluate each Scrum ceremony honestly — which earn their time and which become theater — and know how to fix the broken ones
2. Treat the backlog as a prioritized list of hypotheses, not a to-do list
3. Explain dual-track agile and why delivery without discovery builds the wrong things efficiently
4. Approach sprint planning as a negotiation about value, not a commitment ceremony

---

## The Agile Honesty Problem

Marty Cagan has a provocation that should bother every PM working in Scrum: **most agile teams are not agile. They are just doing waterfall in 2-week increments.**

Here is what he means. The team gets a roadmap from leadership. The PM translates it into user stories. The stories go into a backlog. The team pulls stories into sprints. They build, they ship, they demo. The process feels agile — there are standups and retros and a Jira board with swim lanes. But the decisions about *what* to build were made months ago by someone who never talked to a user. The team is efficiently delivering output that may or may not solve real problems.

Real agility means the team can change direction based on what they learn. That requires two things most Scrum implementations lack: continuous discovery (Module 0.2) and the organizational trust to pivot when evidence says you should.

This module is not an argument against Scrum. It is an argument for practicing it honestly — keeping what works, fixing what does not, and pairing delivery with discovery.

---

## Scrum Ceremonies — The Honest Assessment

| Ceremony | The Point | When It Works | When It Becomes Theater | How to Fix It |
|---|---|---|---|---|
| **Daily Standup** (15 min) | Surface blockers fast. Sync the team. | Under 10 minutes. People share blockers, not status. Conversations happen after. | 30+ minutes. People give detailed status updates nobody listens to. It becomes a performance for the PM or scrum master. | Strict timebox: 10 minutes max. Three questions only: What's blocked? What do you need? Anything the team should know? Status goes in Slack/Teams. |
| **Sprint Planning** (1-2 hours) | Agree on what the team will build this sprint and why. | Team understands the "why" behind each story. Negotiation about trade-offs. Capacity is realistic. | PM reads tickets aloud while engineers look at their laptops. No discussion of trade-offs. Team commits to more than they can deliver because saying no feels political. | Start with the sprint goal (one sentence: what outcome are we targeting?). Then fill with stories that serve the goal. If a story does not serve the goal, it does not go in the sprint. |
| **Sprint Review / Demo** (1 hour) | Show stakeholders what shipped. Get feedback. | Real stakeholders attend. Feedback is captured and acted on. Demo focuses on user value, not technical implementation. | Only the team attends. Demo is a checkbox. Nobody gives real feedback because the feature already shipped. | Invite at least one stakeholder from outside the team. Ask specific questions: "Does this solve the problem you described?" Demo from the user's perspective, not the developer's. |
| **Retrospective** (1 hour) | Improve the process. Address team friction. | Produces 2-3 concrete action items. Action items are assigned and tracked. Someone follows up next retro. | Same complaints every sprint. Sticky notes go on a board and are never mentioned again. People are afraid to raise real issues. | New format every 3-4 retros to prevent staleness. Require exactly 3 action items with owners and due dates. Start each retro by reviewing last retro's action items. |
| **Backlog Refinement** (1 hour) | Ensure upcoming stories are well-understood and estimated. | Stories for next sprint are discussed. Ambiguities are resolved. Engineers ask clarifying questions. | PM reads stories aloud and asks "any questions?" in a tone that discourages them. Stories are estimated without understanding. | Engineers lead the discussion, not the PM. PM presents the problem; engineers discuss the approach. If a story generates more than 5 minutes of debate, it is not ready — pull it. |

**The meta-principle:** Every ceremony should end with someone doing something different than they would have otherwise. If standup does not surface a blocker that gets resolved, it was a waste. If the retro does not produce an action that changes behavior, it was theater.

---

## Your Backlog Is Not a To-Do List

Most backlogs are graveyards of feature requests. Someone asked for something 9 months ago, a PM wrote a ticket, and now it sits at position #147, never to be built but never formally killed. The backlog grows forever because adding tickets is easy and removing them feels confrontational.

**A healthy backlog has three zones:**

| Zone | Position | State | PM's Job |
|---|---|---|---|
| **Top (next 1-2 sprints)** | #1-10 | Well-understood. Refined. Estimated. Ready to pull. | Keep these sharp. Answer engineering questions. Ensure acceptance criteria are clear. |
| **Middle (next 1-3 months)** | #11-30 | Direction is clear but details are fuzzy. Not estimated. | This is where PM work happens. Discovery, one-pagers, user research. Moving items from fuzzy to clear so they can enter the top zone. |
| **Bottom (someday / maybe)** | #31+ | Raw ideas. Feature requests. Things someone mentioned once. | Review quarterly. Kill anything that has sat here for 6+ months without anyone asking about it. If nobody missed it, nobody needs it. |

**The backlog grooming discipline:** Once a quarter, go through positions #31+ and delete anything that no longer matters. This is uncomfortable — the person who requested it might notice. But a 300-item backlog where 250 items will never be built is not a plan. It is an anxiety list.

**Hypotheses, not commitments:** Items in the middle zone are hypotheses: "We believe that [feature] will improve [metric] for [user segment]." They are not promises. As you learn more (through discovery, experiments, or changing business context), hypotheses get validated, invalidated, or replaced. A backlog that never changes is a sign you are not learning.

---

## Dual-Track Agile: Discovery Alongside Delivery

The biggest gap in most Scrum implementations is the absence of a discovery track. The delivery track (build, test, ship) runs on a sprint cadence. But where does the thinking happen? Where do you figure out *what* to build before you build it?

**Dual-track agile runs two parallel tracks:**

```
DISCOVERY TRACK                    DELIVERY TRACK
(PM + Design + 1 Engineer)         (Full engineering team)

 ┌─────────────┐                    ┌─────────────┐
 │  Research    │                    │  Sprint N    │
 │  & ideate   │ ──── validated ──→ │  Build &     │
 │  this week  │     solutions      │  ship        │
 └─────────────┘                    └─────────────┘
        │                                  │
   Interview users                    Ship features
   Run experiments                    Fix bugs
   Validate assumptions               Reduce tech debt
   Prototype solutions                Demo to stakeholders
```

**What discovery work looks like in practice:**
- User interviews (Module 0.2): 2-3 per week, 30 minutes each
- Prototype testing: Paper sketches or low-fidelity prototypes tested with 3-5 users before committing to a sprint
- Data analysis: Reviewing metrics to validate or invalidate hypotheses about user behavior
- Assumption testing: "We believe users abandon search because results are irrelevant" — how can we test that this week?

**Why most teams only do delivery:** Discovery feels slow. It does not produce visible output. Nobody demos an insight at sprint review. Stakeholders ask "what did you build?" not "what did you learn?" But teams that skip discovery build the wrong things faster. They have great velocity and poor outcomes.

**The NovaTech example:** KnowledgeHub has 43% WAU. A delivery-only team would look at the feature request list and start building. A dual-track team would first ask: "Why is WAU at 43%? What are the top 3 reasons users disengage?" They might discover that the #1 issue is not a missing feature but a confusing onboarding flow that never explains the product's value. That insight is worth more than the next 5 features on the backlog.

---

## Sprint Planning as Negotiation

Sprint planning is not a ceremony where the PM announces what will be built. It is a negotiation between what the business needs and what the team can deliver.

**The negotiation frame:**

> "We can do A or B this sprint, not both. Which creates more value?"

This reframe changes the dynamic entirely. Instead of the PM pushing scope and the team pushing back, both sides are working together to maximize value within a constraint.

**Velocity as a planning tool, not a performance metric:**

Velocity (story points completed per sprint) tells you roughly how much the team can take on next sprint. That is its only legitimate use.

| Healthy use of velocity | Toxic use of velocity |
|---|---|
| "We averaged 38 points last 3 sprints, so let's plan for 35-40." | "Your velocity dropped from 42 to 36. What happened?" |
| "This sprint has 45 points of requests but 38 of capacity — what do we cut?" | Comparing velocity across teams. ("Team A does 50 points, Team B does 30.") |
| Using velocity trends to identify systemic issues (consistent decline = team problem). | Setting velocity targets. ("We need 45 points this sprint.") |

**Velocity is not productivity.** A team that delivers 25 high-leverage points is outperforming a team that delivers 50 points of Neutral work. The unit of value is outcome, not output.

**The sprint planning checklist:**
1. State the sprint goal in one sentence. What outcome matters most?
2. Pull stories that serve the sprint goal. Resist scope creep.
3. Check capacity. Account for PTO, on-call rotations, meetings.
4. Identify dependencies. Flag anything that requires another team.
5. Leave 15-20% buffer for unplanned work. Bugs will appear. Production issues will happen. If you plan to 100% capacity, you are planning to fail.

---

## Exercise 1: Prepare for Sprint Planning

**Context:** You are the PM for KnowledgeHub. Your team has 5 developers, 2-week sprints, and averages about 40 story points per sprint. You have a prioritized backlog of 10 items that need to be sequenced into the next sprint.

**Your Copilot Prompt:**
```
Help me prepare for sprint planning. Here's my context:

Team: 5 developers, 2-week sprint, ~40 story points average velocity
Sprint goal: Improve search result quality to increase search completion rate
One developer is on PTO for 3 days this sprint.

Top 10 backlog items:
1. Search relevance scoring algorithm (13 pts) — depends on item #5
2. Relevance indicators on result cards (5 pts)
3. "Frequently referenced" badge for popular docs (3 pts)
4. Search analytics dashboard for PM (8 pts)
5. Search infrastructure API upgrade (8 pts) — no dependencies
6. User feedback widget on results page (5 pts)
7. Saved search functionality (8 pts)
8. Mobile search improvements (13 pts) — depends on item #5
9. Search suggestion autocomplete (5 pts)
10. Content freshness indicators (3 pts)

Identify dependencies and flag risks. Given the sprint goal and capacity (reduced by one developer's PTO), recommend what fits in this sprint. Explain what you'd cut and why. If there's a dependency that changes the order, call it out.
```

**What to Look For:**
- Good response: Accounts for PTO reducing capacity (roughly 35 points instead of 40). Identifies the dependency chain (#1 and #8 depend on #5). Prioritizes items that serve the sprint goal. Cuts items that don't serve the goal even if they're small. Flags the risk of the 13-point stories.
- Bad response: Tries to fit everything in. Ignores dependencies. Does not account for PTO. Treats all items as equally important.

---

## Exercise 2: Fix Your Retros

**Context:** Your team's retrospectives have gone stale. The same complaints come up every sprint — "too many meetings," "unclear requirements," "technical debt" — but nothing changes. People have stopped engaging.

**Your Copilot Prompt:**
```
Our team retrospectives are stale — same complaints every sprint, no real action items, people have stopped engaging. Team of 10 (5 devs, 2 designers, 1 PM, 1 scrum master, 1 QA).

Design a retro format that:
1. Breaks the staleness pattern — something different from the usual Start/Stop/Continue
2. Surfaces real issues, not surface-level complaints
3. Produces exactly 2-3 concrete action items with owners and due dates
4. Takes no more than 60 minutes
5. Includes a mechanism to review last retro's action items first

Bonus: give me 3 different formats I can rotate through over the next quarter so retros don't become stale again.
```

**What to Look For:**
- Good response: Formats are genuinely different from standard Start/Stop/Continue. Each format has a specific mechanism for producing action items (not just collecting feedback). The review of previous action items is built in, not an afterthought. Formats are practical for a 10-person team and fit in 60 minutes.
- Bad response: Repackaged Start/Stop/Continue with different labels. No mechanism for accountability on action items. Formats that require expensive materials or facilitator training.

---

## Apply to Your Work

**Reflect:**
1. What is your biggest frustration with your current sprint process? Is it a ceremony problem, a people problem, or a structural problem?
2. When was the last time your team changed direction mid-sprint based on something they learned? If it has never happened, you might not be agile.
3. Does your team have a discovery track? If not, where does the "what should we build?" thinking happen?

**Your Prompt:**
```
I'm a PM on a [TEAM SIZE]-person team running [SPRINT LENGTH]-week sprints. My biggest frustration with our current process is: [SPECIFIC FRUSTRATION].

Help me diagnose whether this is a ceremony problem, a people problem, or a structural problem. Then give me 3 specific changes I can propose at our next retrospective — each change should be concrete enough to implement next sprint and measurable enough to evaluate after 2-3 sprints.

If the issue is that we're doing delivery without discovery, help me propose a lightweight discovery track that doesn't require reorganizing the team — just 3-4 hours per week of structured PM + design + engineer time.
```

**You should now have:**
- A diagnosis of your current process friction and its root cause
- 3 concrete, implementable improvements to propose at your next retro
- A plan for introducing discovery work alongside delivery (if applicable)

---

## Key Takeaways

- Scrum ceremonies are tools, not rituals. Each one should end with someone doing something differently than they would have otherwise. If it does not, fix the format or drop the ceremony.
- A healthy backlog has three zones: ready (top), being refined (middle), and someday (bottom). Quarterly, delete items from the bottom that nobody missed. A 300-item backlog is not a plan.
- Dual-track agile pairs continuous discovery with sprint delivery. Teams that skip discovery build the wrong things efficiently — great velocity, poor outcomes.

---

## What's Next

Module 0.6 covers the unwritten PM skill: stakeholder management. You will learn why keeping stakeholders informed is the bare minimum, how to build political capital for the decisions that matter, and how to use Shreyas Doshi's pre-mortem technique to anticipate failure before it happens.

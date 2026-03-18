THURSDAY 2/13 - HEAVY MEETING DAY

=== Meeting 1: KnowledgeHub Steering Committee (9am) ===

attendees: richard thorne (VP Knowledge & Innovation, sponsor), jennifer walsh (VP internal digital), david kim (MD tech practice), sarah mitchell (MD product strategy department), me

context: monthly steering committee for KnowledgeHub

richard kicked off - "where are we on WAU?"
- current: 43% (same as last month basically)
- target: 60% by fiscal year end
- he's concerned we're not moving fast enough

jennifer showed the roadmap slide
- AI search: in development (on track for Q2)
- expert matching: requirements gathering
- mobile improvements: design phase

david kim (tech practice): "my team complains search is terrible"
- "they search for SAP S/4HANA migration experience, get 500 results"
- "most results are from 2019 - completely outdated"
- "people give up after 2-3 searches and just email their network"

sarah mitchell (product strategy department): "same issue"
- "Atlassian people who joined us say their knowledge center is so much better"
- "we're losing competitive positioning - partners can't find expertise fast enough"
- "lost a deal last month - client asked for blockchain expertise, took us 4 days to find someone"
  - competitor (Monday.com) had their team identified in 48 hours

DISCUSSION: AI Search priority
richard: "this is the #1 priority. nothing else matters until search works"
me: "AI search is in development, we're targeting Q2 launch"
david: "Q2 is too late. can we accelerate?"

jennifer: "team is constrained. mobile app work is ongoing"
richard: "mobile can slip. search is more important."
jennifer: "I'll discuss with the team"

sarah mentioned expert profiles are outdated
- "people don't update their skills"
- "project history isn't complete"
- "can't trust the data"

me: we're exploring automatic profile updates from ProjectPulse
- pull skills from project assignments
- validate with managers
- david liked this idea

ACTION ITEMS:
- jennifer: assess if we can accelerate AI search (Q2 → Q1 end)
- me: draft proposal for automatic skill profile updates
- david: identify 3 department leads to pilot improved search
- sarah: share the competitive loss analysis (Monday.com deal)

richard closing: "I'm presenting to the CEO next month. Need to show progress."
- pressure is HIGH
- adoption numbers need to move

side conversation with david after:
- "engineering department is your biggest advocate, but also your harshest critic"
- "we have 800 engineers who need this to work"
- suggested I shadow some of his team to understand search pain points

---

=== Meeting 2: Change Management Planning (11am) ===

attendees: me, lisa chen (change management lead), tom rodriguez (communications), priya's EA (scheduling)

context: planning adoption campaign for AI search launch

lisa: "feature launches fail when change management is an afterthought"
- "we need to start comms planning NOW, not when the feature ships"
- "people won't discover AI search on their own - need active promotion"

ADOPTION STRATEGY discussion:

lisa's framework:
1. awareness (know it exists)
2. desire (want to use it)
3. knowledge (know how to use it)
4. ability (can actually use it)
5. reinforcement (keep using it)

current state:
- awareness is OK (people know KnowledgeHub exists)
- desire is LOW (don't trust search results, gave up)
- knowledge is LOW (don't know tips/tricks)
- ability is OK (UI is relatively intuitive)
- reinforcement is LOW (no ongoing engagement)

PROPOSED CAMPAIGN:

tom: "we should target by role - partners need different messaging than team members"

director messaging (priya's persona):
- "find experts in 5 minutes, not 5 days"
- "win more deals with faster team identification"
- business impact focused

team member messaging (marcus's persona):
- "stop recreating work that already exists"
- "find templates and examples instantly"
- efficiency focused

program manager messaging (elena's persona):
- "find project plans and lessons learned"
- "staff projects with the right skills"
- project success focused

CHANNELS:
- global town hall announcement (richard)
- department-specific webinars (Directors)
- email campaign (3-part series)
- Teams channel notifications
- in-app banners and tutorials
- "KnowledgeHub Champions" program in each department

lisa: "we need executive sponsorship visible"
- richard should do a video
- Directors should endorse in practice meetings
- "if leadership doesn't use it, why should I?"

TIMELINE:
- week 1: pre-launch comms ("something big is coming")
- week 2: launch announcement
- weeks 3-4: training webinars
- weeks 5-8: reinforcement campaign
- week 8+: measure and adjust

CONCERNS:
tom: "competing priorities - there's always something"
- company town hall next month
- fiscal year end communications
- need to find the right window

lisa: "training capacity is limited"
- can only run 10-15 webinars
- suggest self-paced learning modules instead
- partner with L&D team

METRICS to track:
- campaign reach (how many saw comms)
- webinar attendance
- search usage before/after
- satisfaction surveys

ACTION ITEMS:
- me: confirm launch date with jennifer
- lisa: draft change management plan (by next friday)
- tom: create comms calendar and messaging
- me: coordinate with priya's team for practice pilot
- lisa: schedule stakeholder alignment meetings

tom: "oh, also - richard wants a steering committee update deck by EOD friday"
- need to summarize all this
- ugh, more powerpoint

---

=== Meeting 3: Technical Integration Review (2pm) ===

attendees: me, raj patel (tech lead), amit singh (ProjectPulse team), maya chen (security)

context: reviewing integration between KnowledgeHub and ProjectPulse for real-time expert availability

raj explaining current state:
- KnowledgeHub shows expert profiles
- ProjectPulse has real-time staffing data
- NO integration currently
- "we pull a monthly data dump - always stale"

PROBLEM:
- priya searches for expert in KnowledgeHub
- profile says "available"
- actually, that person got staffed 2 weeks ago
- frustrating experience, erodes trust

PROPOSED SOLUTION:
raj: "real-time API integration"
- ProjectPulse exposes availability endpoint
- KnowledgeHub queries on profile load
- "available", "on project (ends MM/DD)", "available"

amit (ProjectPulse): "we can build the API"
- concern: performance at scale
- 5K+ employees
- can't query for every profile view
- need caching strategy

raj's suggestion:
- cache availability data (refresh hourly)
- real-time query only for "detailed view"
- background sync overnight for full data

maya (security): "data classification concerns"
- availability data is HR-sensitive
- who can see who's available?
- "partners can see their practice, not all practices"
- need role-based access

OPEN QUESTIONS:
1. what exactly do we show?
   - just available/not available?
   - or project name and end date?
   - amit: "project name might be confidential"

2. skill matching accuracy
   - ProjectPulse skill data vs KnowledgeHub skill data
   - they don't always match
   - need single source of truth
   - raj: "this is a bigger project"

3. what about contractors?
   - raj: "contractors aren't in ProjectPulse consistently"
   - amit: "separate system for contingent workforce"
   - me: out of scope for now, but note it

TECHNICAL ESTIMATE (raj):
- API development (ProjectPulse side): 2 sprints
- integration code (KnowledgeHub side): 2 sprints
- testing and rollout: 1 sprint
- total: 5 sprints (~10 weeks)

SECURITY REQUIREMENTS (maya):
- all data in transit encrypted
- audit logging on access
- consent framework (GDPR concerns for EU employees)
- data retention policy

amit raised data sync issues
- employee terminations
- transfers between practices
- leave of absence status
- "edge cases are endless"

DECISION: proceed with MVP
- show "available now" or "on project"
- no project details in v1
- director-level visibility only
- revisit expanded features later

ACTION ITEMS:
- raj: detailed technical spec (2 weeks)
- amit: ProjectPulse API design and estimate
- maya: security review document
- me: update PRD with technical constraints
- me: get sponsor sign-off on MVP scope

raj after meeting: "this is going to be harder than it looks"
- data quality issues in both systems
- "garbage in, garbage out"
- suggests data cleanup initiative in parallel

---

RANDOM NOTES / PARKING LOT:

- jennifer mentioned budget review coming up (march)
  - need to prepare justification for additional headcount
  - ROI analysis needed

- david kim wants a "practice dashboard" in KnowledgeHub
  - see all expertise in his department
  - track knowledge contributions
  - "my department creates content, other departments consume it - I want credit"

- complaints about KnowledgeHub performance on mobile
  - multiple people mentioned this
  - "takes 10+ seconds to load"
  - need to prioritize mobile performance

- heard from lisa: some partners don't even know KnowledgeHub exists!
  - "I've been here 15 years, never heard of it"
  - brand awareness campaign needed

- sarah's assistant mentioned executive dashboard request
  - VP Knowledge & Innovation wants weekly metrics automatically
  - currently manual slide deck every week
  - could save hours

- overheard in hallway: Notion is investing heavily in their knowledge platform
  - competitive pressure increasing
  - Monday.com's AI tools are apparently impressive
  - need to move faster

---

PRIORITIES EMERGING:
1. AI search (CRITICAL - richard's #1 priority)
2. expert availability integration (enables expert matching)
3. adoption campaign (no point building if no one uses it)
4. mobile performance (partners are mobile)
5. data quality (underlying issue for everything)

need to balance feature development with adoption work
can't do everything at once - capacity constrained

---

FOLLOW-UPS NEEDED:
✓ reviewed steering committee notes
- draft proposal for automatic skill profiles (me)
- change management plan draft (lisa)
- comms calendar (tom)
- technical spec for integration (raj)
- ProjectPulse API design (amit)
- security review (maya)
- practice pilot coordination with david's team (me)
- ROI analysis for budget review (me)
- steering committee deck by friday (me)

way too much on my plate...

---

UPCOMING THIS WEEK:
- friday: steering committee deck due
- monday: change management review
- tuesday: technical deep dive with raj
- wednesday: 1:1 with jennifer
- thursday: practice shadowing with david's team

data to pull:
- KnowledgeHub usage by department (who's using, who's not?)
- search success rate trends (is it getting worse?)
- expert connection rates (are people finding experts?)
- ProjectPulse data quality metrics (how stale is the data?)
- competitive analysis (what's Monday.com doing?)

---

═══════════════════════════════════════════════════════════════════════════════
PROCESSED BY COPILOT
Generated: February 13, 2025 at 5:30 PM
═══════════════════════════════════════════════════════════════════════════════

# ACTION ITEMS SUMMARY

*The messy notes above were processed into this clean summary below*

## By Owner

### You (Senior Product Owner)
| Action Item | Meeting | Priority | Due Date |
|-------------|---------|----------|----------|
| Draft proposal for automatic skill profile updates | Steering Committee | High | Mon 2/17 |
| Confirm AI search launch date with Jennifer | Change Management | High | Fri 2/14 |
| Coordinate with Priya's team for practice pilot | Change Management | Medium | Mon 2/17 |
| Update PRD with technical constraints | Technical Review | High | Tue 2/18 |
| Get sponsor sign-off on MVP scope | Technical Review | High | Wed 2/19 |
| Steering committee update deck | Parking Lot | High | Fri 2/14 |
| ROI analysis for budget review | Parking Lot | Medium | Fri 2/28 |

### Jennifer Walsh (VP Internal Digital Products)
| Action Item | Meeting | Priority | Due Date |
|-------------|---------|----------|----------|
| Assess if AI search can be accelerated (Q2 → Q1) | Steering Committee | Critical | Mon 2/17 |

### David Kim (MD Engineering Department)
| Action Item | Meeting | Priority | Due Date |
|-------------|---------|----------|----------|
| Identify 3 department leads to pilot improved search | Steering Committee | Medium | Fri 2/21 |

### Sarah Mitchell (MD Product Strategy Department)
| Action Item | Meeting | Priority | Due Date |
|-------------|---------|----------|----------|
| Share competitive loss analysis (Monday.com deal) | Steering Committee | Medium | Fri 2/14 |

### Lisa Chen (Change Management Lead)
| Action Item | Meeting | Priority | Due Date |
|-------------|---------|----------|----------|
| Draft change management plan | Change Management | High | Fri 2/21 |
| Schedule stakeholder alignment meetings | Change Management | Medium | Mon 2/17 |

### Tom Rodriguez (Communications)
| Action Item | Meeting | Priority | Due Date |
|-------------|---------|----------|----------|
| Create comms calendar and messaging | Change Management | High | Fri 2/21 |

### Raj Patel (Tech Lead)
| Action Item | Meeting | Priority | Due Date |
|-------------|---------|----------|----------|
| Detailed technical spec for integration | Technical Review | High | Thu 2/27 |

### Amit Singh (ProjectPulse Team)
| Action Item | Meeting | Priority | Due Date |
|-------------|---------|----------|----------|
| ProjectPulse API design and estimate | Technical Review | High | Thu 2/27 |

### Maya Chen (Security)
| Action Item | Meeting | Priority | Due Date |
|-------------|---------|----------|----------|
| Security review document | Technical Review | High | Thu 2/27 |

---

## Key Decisions Needed
1. **AI Search Acceleration** - Can we move from Q2 to Q1 end? Jennifer assessing capacity
2. **Expert Availability MVP Scope** - Approved: show available/on project only, no details
3. **Adoption Campaign Timing** - Need to find window that doesn't conflict with fiscal year end comms

## Critical Risks Identified
- **Competitive Pressure**: Monday.com beat us on a deal due to faster expert identification (4 days vs 48 hours)
- **Executive Visibility**: VP Knowledge & Innovation presenting to CEO next month, needs to show progress
- **Data Quality**: Both KnowledgeHub and ProjectPulse have stale/incomplete data affecting feature reliability

## This Week's Calendar
- **Friday 2/14**: Steering committee deck due
- **Monday 2/17**: Change management review
- **Tuesday 2/18**: Technical deep dive with Raj
- **Wednesday 2/19**: 1:1 with Jennifer
- **Thursday 2/20**: Department shadowing with David's team

---
*Generated from 3 meetings on Thursday 2/13*

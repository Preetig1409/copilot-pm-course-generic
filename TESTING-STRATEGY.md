# Testing Strategy: Copilot PM Course

> **Version:** 2.1 | **Date:** 2026-02-18 | **Testers:** 15 Scrum Masters & Agile Coaches
> **Structure:** 4 teams × all 15 modules × 10 testing lenses | **Duration:** 2 weeks

---

## 1. Guiding Principles

- **Every team, every module** — All 4 teams test all 15 modules; different eyes catch different things
- **Focus more, not only** — Each team applies all 10 lenses but goes *deeper* on their 2 owned lenses
- **Test like a learner, think like a coach** — Experience it as the target PM, evaluate with practitioner expertise
- **Quality over volume** — 10 validated findings beat 50 vague complaints
- **Two-gate validation** — No feedback reaches the author without own lead + cross-team lead review

---

## 2. Team Structure

```
┌─────────────────────────────────────────────────┐
│                  COURSE AUTHOR                   │
└────────────────────────┬────────────────────────┘
                         │
            ┌────────────┴────────────┐
            │        META-TEAM        │
            │  Lead 1 + 2 + 3 + 4    │
            └──┬──────┬──────┬──────┬─┘
               │      │      │      │
         ┌─────┘      │      │      └─────┐
         ▼            ▼      ▼            ▼
   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
   │ TEAM 1   │ │ TEAM 2   │ │ TEAM 3   │ │ TEAM 4   │
   │ Lead + 3 │ │ Lead + 3 │ │ Lead + 3 │ │ Lead + 2 │
   │          │ │          │ │          │ │          │
   │ L3+L4    │ │ L5+L6    │ │ L7+L8    │ │ L9+L10   │
   │"Does it  │ │"Does it  │ │"Does it  │ │"Does it  │
   │  work?"  │ │  teach?" │ │  matter?"│ │  deliver?"│
   └──────────┘ └──────────┘ └──────────┘ └──────────┘
              ALL teams test ALL modules
            Common lenses L1+L2: ALL teams
```

### Roles

| Role | Responsibilities |
|------|-----------------|
| **Tester** (all 15) | Complete all 15 modules. Apply L1+L2 fully, owned lenses deeply, other lenses lightly. Submit feedback per template. |
| **Team Lead** (4) | All tester duties + review team feedback for quality → approve/return/reject → forward to cross-team lead. |
| **Meta-Team** (4 leads + author) | Meet twice (mid-sprint + end). Deduplicate across teams, resolve disagreements, prioritize, deliver final report. |

---

## 3. The 10 Testing Lenses

### Common Lenses (all teams, equal depth)

**L1: Content Accuracy** — *"Is what this module states factually correct?"*
- Technical correctness of M365/Copilot features, UI paths, shortcuts
- Version currency — do references match current capabilities?
- Internal consistency of metrics, terminology (AKX, ADH, persona names) across modules
- Link and cross-reference integrity
- **Standard:** Flag with exact quote + correction. Always Major or Critical.

**L2: Learner Clarity** — *"Could a first-time PM follow every step without guessing?"*
- Instruction precision — can you complete each step as written?
- Assumed knowledge not yet taught or referenced
- Ambiguous language ("set up your environment" — what does that mean?)
- Visual orientation when UI is referenced
- Jargon introduced before it's defined
- **Standard:** Quote the confusing passage, explain what tripped you up, suggest fix.

### Team-Owned Lenses (deep focus by assigned team)

**L3: Prompt Effectiveness** *(Team 1)* — *"Does the prompt actually produce something useful in Copilot?"*
- Copy every prompt into Copilot — does it run and match what the module promises?
- Output quality: genuinely useful or generic filler?
- Robustness with variations (different data, product names)
- Does the module explain *why* the prompt is structured that way?
- Edge cases with enterprise constraints (long docs, ambiguous data)
- **Standard:** Include prompt used, actual Copilot output (screenshot/paste), expected output.

**L4: Exercise Quality** *(Team 1)* — *"Are hands-on activities completable and teaching the right skill?"*
- Completability with provided materials and sample files
- Scaffolding — progressive build vs. complexity dump
- Clear success criteria for self-assessment
- Time realism — time yourself vs. stated duration
- Alignment — does the exercise practice the stated skill?
- **Standard:** Note exercise, time taken vs. stated, what was confusing or missing.

**L5: Instructional Design** *(Team 2)* — *"Does this teach effectively?"*
- Learning objectives: stated, measurable, delivered by the content?
- Cognitive load: appropriate density, natural pause points?
- Retention hooks: summaries, takeaways, reflection prompts?
- Multi-modal: mix of reading, doing, reviewing — or all one mode?
- Self-assessment opportunity before moving on?
- **Standard:** Reference specific objectives and whether content delivers on each.

**L6: Progressive Flow** *(Team 2)* — *"Does the course build logically across modules?"*
- Cross-module sequencing: does each build on the previous?
- Prerequisites stated or linked when needed?
- Level 1 → 2 → 3 difficulty feels like genuine progression?
- Repeated content = intentional reinforcement or accidental redundancy?
- Completion arc: satisfying endpoint or does it just stop?
- **Standard:** Map dependency/flow issues across modules — this lens is cross-module by nature.

**L7: Enterprise Realism** *(Team 3)* — *"Does this feel like a real enterprise, not a textbook?"*
- Accenture scenario (700K employees, AKX, ADH) feels authentic?
- Personas (Priya, Marcus, Elena) have believable concerns?
- Real enterprise friction acknowledged (governance, politics, legacy)?
- Sample data (meeting notes, interviews, CSVs) feels like real artifacts?
- Solutions work at enterprise scale (thousands of users, global teams)?
- **Standard:** Draw on your client engagement experience. Flag where simulation breaks.

**L8: Real-World Applicability** *(Team 3)* — *"Could a PM use this at their desk tomorrow?"*
- Techniques generalize beyond the AKX/ADH example?
- Immediately useful in current client engagements?
- Prompts/templates extractable and adaptable for real projects?
- Skills work across typical M365 environments, not just this specific setup?
- Adoption barriers addressed (manager buy-in, data sensitivity, IT policies)?
- **Standard:** Rate each module 1–5 on "I could use this tomorrow" with explanation.

**L9: Navigation & UX** *(Team 4)* — *"Does the site get in the way of learning?"*
- Any module findable in under 3 clicks? Course structure obvious?
- Cross-module links work?
- Mobile/tablet experience functional?
- Markdown tables, code blocks, formatting render correctly?
- Progress tracking works and persists across sessions?
- Performance: load times, broken assets, console errors?
- **Standard:** Include browser/device, screenshot, repro steps.

**L10: Gaps & Completeness** *(Team 4)* — *"What would a learner expect that isn't here?"*
- Missing Copilot capabilities or PM workflows?
- Unanswered "but what about...?" moments?
- Audience blind spots (assumes technical PM, misses business PM)?
- Copilot limitations acknowledged, or happy-path only?
- Post-course: does the learner know what to do next?
- **Standard:** Frame as "Learner expects [X] but course doesn't cover it because [Y is missing]."

### How "Focus More, Not Only" Works

| Lens type | Effort | Feedback expectation |
|-----------|--------|---------------------|
| Common (L1, L2) | Full attention, all teams | Flag every issue |
| Your owned lenses | Deep, deliberate — your primary job | Detailed findings with evidence |
| Other teams' lenses | Notice in passing | Flag only obvious/glaring issues |

**Result:** Each module gets 4x coverage on common lenses, 1x deep + 3x light on every owned lens.

---

## 4. Testing Phases

| Phase | Days | Activity |
|-------|------|----------|
| **1: Foundation** | 1–4 | Kickoff (Day 1, 60 min). All testers complete Level 1 (modules 1.1–1.10). Leads begin reviewing incoming feedback. |
| **2: Advanced + Visuals** | 5–8 | All testers complete Levels 2–3 (modules 2.1–3.2). **Mid-sprint sync** (Day 7, Meta-Team, 30 min). Day 8 = catch-up. |
| **3: Validation** | 9–14 | Leads complete Checkpoint 1 (Days 9–10). Cross-team validation (Day 11). Meta-Team dedup + consolidation (Days 12–13). **Final report delivered Day 14.** |

---

## 5. Feedback Quality Gate

```
Tester ──▶ Lead (Checkpoint 1) ──▶ Cross-team Lead (Checkpoint 2) ──▶ Meta-Team ──▶ Author
           Approve / Return /       Endorse / Challenge                Deduplicate
           Reject                                                      Prioritize
```

### Checkpoint 1: Team Lead Review

| Criteria | Pass | Fail |
|----------|------|------|
| **Specific** | References exact module + section | "The course is confusing" |
| **Observation + Expectation** | Both fields filled with concrete detail | Vague or missing either field |
| **Non-duplicate** | New finding | Already submitted by teammate |
| **Right lenses** | Tagged lenses actually match the finding | Prompt issue tagged as UX only |

### Checkpoint 2: Cross-Team Lead Validation

Another team's lead checks: Does the finding hold up? Is it about the course (not Copilot's general limitations)? Is severity proportional? Already found by another team?

**Rotation:** Team 1→Lead 2 validates | Team 2→Lead 3 | Team 3→Lead 4 | Team 4→Lead 1

---

## 6. Feedback Template

One item per finding. Keep it simple — just say what you saw, what you expected, and which lenses it touches.

```markdown
## [Module ID] — [Short title]

**Observation:** [What you saw or experienced — be specific, quote text or describe the step]

**Expectation:** [What should have happened instead]

**Lenses:** [L1, L3] ← tag 1–3 lenses this relates to
```

**That's it.** No severity ratings, no type checkboxes, no evidence sections. The course author will triage priority. Your job is to notice and describe — clearly and specifically.

---

## 7. Consolidated Report Format

Meta-Team delivers one final report:

1. **Executive Summary** — Funnel (submitted → approved → endorsed), lens breakdown, top 3 themes
2. **Findings by Module** — All endorsed findings grouped 1.1 through 3.2 with lens tags
3. **Findings by Lens** — Same findings regrouped by lens to reveal systemic patterns
4. **Cross-Team Agreement** — Issues flagged independently by multiple teams (high-confidence)
5. **Positive Findings** — What works well, organized by lens (protect during revisions)

---

## 8. Logistics

| Purpose | Tool |
|---------|------|
| Feedback submission | Shared folder (one `.md` per finding) or Microsoft Forms |
| Team coordination | Teams/Slack channel per team |
| Lead tracking | Shared spreadsheet — pipeline: submitted → approved → endorsed |
| Final report | Markdown file in this repo |

**Time commitment:** Tester ~10 hrs | Lead ~14 hrs | Meta-Team ~16 hrs (over 2 weeks)

**Kickoff (Day 1, 60 min):** Course overview (10 min) → Strategy + lenses walkthrough (15 min) → Team lens deep-dive (10 min) → Practice feedback submission (15 min) → Team breakout: leads, logistics (10 min)

---

## 9. Definition of Done

- [ ] All 4 teams have completed all 15 modules
- [ ] Each module has feedback from at least 3 of 4 teams
- [ ] All 10 lenses applied (deep by owning team, light by others)
- [ ] All feedback passed both checkpoints
- [ ] Cross-team duplicates merged by Meta-Team
- [ ] Consolidated report delivered and acknowledged

---

## Appendix: Lens Coverage Matrix

| Lens | Team 1 | Team 2 | Team 3 | Team 4 |
|------|--------|--------|--------|--------|
| **L1: Content Accuracy** | ● Full | ● Full | ● Full | ● Full |
| **L2: Learner Clarity** | ● Full | ● Full | ● Full | ● Full |
| **L3: Prompt Effectiveness** | ★ Deep | ○ Light | ○ Light | ○ Light |
| **L4: Exercise Quality** | ★ Deep | ○ Light | ○ Light | ○ Light |
| **L5: Instructional Design** | ○ Light | ★ Deep | ○ Light | ○ Light |
| **L6: Progressive Flow** | ○ Light | ★ Deep | ○ Light | ○ Light |
| **L7: Enterprise Realism** | ○ Light | ○ Light | ★ Deep | ○ Light |
| **L8: Real-World Applicability** | ○ Light | ○ Light | ★ Deep | ○ Light |
| **L9: Navigation & UX** | ○ Light | ○ Light | ○ Light | ★ Deep |
| **L10: Gaps & Completeness** | ○ Light | ○ Light | ○ Light | ★ Deep |

● Full = equal attention all teams | ★ Deep = authoritative review | ○ Light = flag obvious issues only

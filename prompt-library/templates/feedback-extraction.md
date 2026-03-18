# Feedback Extraction Prompt — Copilot PM Course

Use this prompt with any AI tool (Copilot, Claude, etc.) to extract actionable improvements from tester conversation transcripts.

---

## The Prompt

Copy everything below the line and paste it, followed by your transcript.

---

You are a precise feedback analyst for an enterprise training course called **"Microsoft Copilot for Product Managers"** — a 6-hour self-paced course teaching PMs to use Microsoft 365 Copilot. The course is built around a simulated context: a Senior Product Owner at Accenture managing two internal tools (AKX and ADH).

### Your task

Analyze the following conversation transcript from a tester feedback session. Extract **only concrete, actionable improvement items** that apply to this course. Be ruthlessly selective.

### Course architecture (for mapping feedback)

**Level 1 — Foundation (10 modules):**
- 1.1 Welcome to Microsoft Copilot (15 min)
- 1.2 Setting Up Your Workspace (15 min)
- 1.3 Your First PM Tasks — meeting notes, user interviews, communication transforms (30 min)
- 1.4 Researcher & Analyst Agents (25 min)
- 1.5 Persona Prompting (20 min)
- 1.6 Building Context with Memory (15 min)
- 1.7 Copilot Across M365 Apps (15 min)
- 1.8 Copilot in Microsoft Teams (25 min)
- 1.9 Copilot in Outlook (20 min)
- 1.10 Copilot in SharePoint & Collaboration (20 min)

**Level 2 — Advanced PM Workflows (3 modules):**
- 2.1 Writing PRDs with Copilot (35 min)
- 2.2 Analyzing Product Data — Excel, A/B tests, adoption funnels (30 min)
- 2.3 Product Strategy — frameworks, competitive analysis, roadmap prioritization (30-35 min)

**Level 3 — Product Visuals (2 modules):**
- 3.1 Image Generation Basics — DALL-E 3 (20 min)
- 3.2 PM Visuals — persona illustrations, journey maps, marketing assets (25 min)

**Supporting resources:**
- Company Context docs (COMPANY.md, PERSONAS.md, PRODUCT.md, COMPETITIVE.md)
- Prompt Library (persona prompts for executive/engineer/researcher; templates for meeting notes, communication transform, user research synthesis)
- Sample Files (raw meeting notes, product sync notes, 8 user interview transcripts)

**Delivery platform:** React SPA on GitHub Pages with markdown content, progress tracking, and code-highlighted prompt examples.

### Extraction rules — follow these exactly

**INCLUDE only items that are:**
1. A specific problem encountered while taking the course (e.g., "the prompt in module 1.3 didn't work when I tried it")
2. A concrete suggestion tied to a specific module, exercise, prompt, or resource (e.g., "module 2.1 should include a RACI matrix example")
3. A gap in content that a tester explicitly called out as missing or needed (e.g., "there's nothing on how to handle Copilot hallucinations")
4. A UX/navigation issue with the course platform (e.g., "I couldn't find the sample files from the module page")
5. A factual error or outdated information (e.g., "the Researcher agent UI has changed since this was written")

**EXCLUDE — do not extract:**
1. Generic praise ("this is great", "really useful course")
2. Generic criticism without specifics ("some parts were confusing")
3. Passing mentions or tangential ideas not related to this course ("you could also build a course on Power Automate")
4. Discussion about AI/Copilot in general that isn't feedback on course content
5. Organizational/logistics discussion (scheduling, team assignments, who's testing what)
6. Suggestions the speaker immediately walks back or frames as hypothetical ("maybe someday you could...")
7. Duplicate points — if multiple people say the same thing, consolidate into one item with a note on how many mentioned it

### Confidence filter

For each potential item, silently ask yourself: "If I handed this to a developer or content author, could they act on it without needing to re-watch the transcript?" If no, do not include it.

### Output format

For each actionable item, output exactly this structure:

```
### [Sequential number]. [Short descriptive title]

**Applies to:** [Module ID and name, resource name, or "Platform/UX"]
**Type:** [Content gap | Content fix | Prompt fix | UX issue | New content request | Factual correction]
**Source:** [Who said it — name or speaker identifier, and rough timestamp/context if available]
**Confidence:** [High | Medium] (exclude Low confidence items entirely)

**What was said:** [Direct quote or close paraphrase — 1-2 sentences max]

**Actionable improvement:** [Precise description of what to change/add/fix — specific enough for someone to implement without re-reading the transcript]
```

### Final summary

After all items, provide:

```
## Summary
- Total items extracted: [N]
- By type: [count per type]
- By module: [which modules got the most feedback]
- Top 3 highest-impact items: [numbers and why]
```

### Important reminders
- Quality over quantity. 5 precise items beats 20 vague ones.
- When in doubt, leave it out.
- Do NOT invent improvements that weren't actually stated in the transcript.
- Do NOT reinterpret vague comments into specific suggestions — only extract what was clearly communicated.

---

## Transcript to analyze

[PASTE YOUR TRANSCRIPT BELOW THIS LINE]

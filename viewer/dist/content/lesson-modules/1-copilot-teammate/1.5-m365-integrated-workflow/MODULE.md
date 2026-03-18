# Module 1.5: Copilot Across M365 — The Integrated Workflow

**Duration:** 20 minutes
**Prerequisites:** Module 1.1

---

## What You'll Learn

By the end of this module, you will:
1. Understand Copilot as an AI layer across your entire work surface — not a single chat tool
2. Use Copilot in Word to draft, restructure, and audience-adapt product documents
3. Use Copilot in Excel to analyze data in plain English without writing formulas
4. Use Copilot in PowerPoint to generate structured decks from outlines — and know where it helps vs. where it doesn't

---

## You're Using 10% of What You're Paying For

Most PMs who "use Copilot" mean one thing: they open the chat window, type a question, and sometimes get something useful. That's like buying the entire M365 suite and only using Notepad.

Copilot isn't one tool. It's an AI layer that runs across every M365 application you already use:
- **Word** — Drafting, rewriting, summarizing, restructuring
- **Excel** — Analysis, formulas, pivots, trends in plain English
- **PowerPoint** — Deck generation from outlines, slide restructuring
- **Outlook** — Email drafting, reply suggestions, thread summarization
- **Teams** — Meeting intelligence, channel catch-up, chat summaries
- **OneNote** — Note organization, summary generation

The power isn't in any single app. It's in the **workflow across them**: analyze data in Excel → summarize findings in Word → build the deck in PowerPoint → send the update in Outlook → discuss in Teams. Copilot assists at every step, and context carries across.

This module focuses on the three apps PMs underuse most: Word, Excel, and PowerPoint.

## Word: Your Thinking and Drafting Partner

Copilot in Word isn't a "write my document" tool. It's a thinking tool. Here's how PMs should use it:

### Drafting from Notes
You don't write PRDs from scratch. You have notes, meeting outputs, research findings, and half-formed ideas. Feed Copilot the raw material and ask for structure:

> "Here are my rough notes on the KnowledgeHub AI search feature. Organize these into a PRD outline with: Problem Statement, User Stories, Success Metrics, Scope (In/Out), and Open Questions."

### Rewriting for Audiences
The same document, restructured for different readers:

> "Rewrite the Problem Statement section for a non-technical executive audience. Lead with business impact. Remove all technical jargon. Keep it under 200 words."

### "Rewrite" as a Thinking Tool
This is the underrated superpower. When you're stuck on how to frame something:

> "Give me 3 alternative ways to frame this problem statement. Version 1: customer-centric. Version 2: business-metric-driven. Version 3: competitive-threat-driven."

Seeing three framings helps you think, even if you don't use any of them verbatim. Copilot as brainstorming partner, not ghostwriter.

### How to Access in Word
- Click the **Copilot** icon in the toolbar, or press Alt+I
- For inline: highlight text → right-click → "Rewrite with Copilot"
- For new content: place cursor → Copilot icon in the margin → "Draft about..."

## Excel: Data Analysis in Plain English

Most PMs have a guilty secret: they can't write advanced Excel formulas from memory. VLOOKUP, pivot tables, conditional formatting — skills they learned once and forgot.

Copilot in Excel eliminates this gap entirely. You describe what you want in plain English.

### What Works Well
- **Trend analysis:** "What's the trend in weekly active usage over the last 12 weeks? Is it increasing, stable, or declining?"
- **Comparisons:** "Which department has the lowest KnowledgeHub adoption rate? How does it compare to the highest?"
- **Pivot tables:** "Create a pivot table showing average weekly active usage by department and employee tenure"
- **Formulas:** "Add a column that calculates month-over-month growth rate for each department"
- **Data cleaning:** "Flag any rows where the usage number seems like an outlier — more than 2 standard deviations from the department mean"

### What Doesn't Work Well (Yet)
- Complex multi-step analyses where you need intermediate calculations
- Formatting and visualization polish (Copilot creates functional charts, not beautiful ones)
- Very large datasets (performance degrades above ~100K rows)

### How to Access in Excel
- Click the **Copilot** icon in the toolbar
- Your data must be in a **Table** format (select data → Insert → Table)
- Copilot works from the table's structure — clean column headers matter

## PowerPoint: Structure Yes, Design No

Let's be honest about what Copilot in PowerPoint does well and where it falls short.

### What It Does Well
- **Outline to deck:** Give it a structured outline, get a structured deck. The information architecture is usually solid.
- **Content restructuring:** "Split this dense slide into 3 slides with one point each"
- **Talking points:** "Generate speaker notes for each slide"
- **Deck from document:** "Create a presentation from this Word document" — surprisingly effective for first drafts

### What It Does Poorly
- **Visual design:** Copilot generates functional but visually basic slides. You'll still need to apply your company template and adjust layouts.
- **Data visualization:** Charts from Copilot are basic. For polished data visuals, build them in Excel and paste.
- **Storytelling flow:** The slide sequence is logical but rarely has narrative arc. You'll need to reorder for emotional impact.

### The PM Pattern for Decks
1. **Copilot:** Generate the structure and raw content from your outline
2. **You:** Reorder for narrative flow, cut slides, sharpen key messages
3. **Design:** Apply company template, polish visuals (or hand to designer)

This cuts deck creation from 3-4 hours to about 45 minutes for a 10-15 slide product review.

### How to Access in PowerPoint
- Click the **Copilot** icon in the toolbar
- "Create a presentation about..." for new decks
- Select a slide → Copilot for slide-level modifications

---

## Exercise 1: Cross-App PM Workflow

**Context:** You need to prepare for the monthly KnowledgeHub product review with Jennifer Walsh. You have adoption data, need a written summary, and need to present findings. This exercise walks through the cross-app workflow.

**Your Copilot Prompt:**
```
I'm preparing for the monthly KnowledgeHub product review. Here's what I know:

ADOPTION DATA:
- Overall WAU: 43% (target: 60%)
- Engineering department: 67% WAU
- Sales department: 28% WAU
- Customer Success: 51% WAU
- Marketing: 38% WAU
- HR: 22% WAU
- Trend: Overall WAU increased from 38% to 43% over last 6 weeks

Help me build the full workflow:

STEP 1 — ANALYSIS (Excel-ready)
Create a table with columns: Department, WAU%, Gap to Target, Trend (improving/stable/declining), Priority Action. Sort by gap to target (largest first). Add a row for overall metrics.

STEP 2 — WRITTEN SUMMARY (Word-ready)
Draft a 1-page executive summary of KnowledgeHub adoption. Structure: Current State (2 sentences), What's Working (3 bullets), Where We're Behind (3 bullets), Recommended Actions (3 bullets with owners). Under 300 words. Tone: confident, data-driven, action-oriented.

STEP 3 — PRESENTATION OUTLINE (PowerPoint-ready)
Outline a 3-slide deck for the product review:
- Slide 1: Adoption Overview (headline metric, department breakdown visual, 6-week trend)
- Slide 2: Bright Spots and Gaps (what's working in Engineering, what's failing in HR/Sales, root causes)
- Slide 3: 30-Day Action Plan (3 actions, owners, expected impact on WAU)

For each slide: title, 3-4 bullet points, suggested visual/chart type, one key talking point.
```

**What to Look For:**
- **Good response:** Excel table is sorted and actionable (not just data), written summary uses Communication Pyramid structure, deck outline has clear narrative flow from "here's where we are" to "here's what we're doing"
- **Weak response:** All three outputs feel like the same content in different containers rather than purpose-built for each format
- **Key test:** Could you actually paste the Excel table into a spreadsheet, the summary into a Word doc, and the outline into PowerPoint and start working immediately?

---

## Exercise 2: Excel Data Analysis in Plain English

**Context:** You've received KnowledgeHub usage data broken down by department and need to analyze it for patterns, underperformance, and trends.

**Your Copilot Prompt:**
```
Here are KnowledgeHub weekly active usage numbers by department for the last 8 weeks:

| Week | Engineering | Sales | Customer Success | Marketing | HR |
|------|------------|-------|-----------------|-----------|-----|
| W1   | 58%        | 22%   | 45%             | 31%       | 18% |
| W2   | 60%        | 23%   | 46%             | 33%       | 19% |
| W3   | 61%        | 24%   | 47%             | 34%       | 19% |
| W4   | 63%        | 25%   | 48%             | 35%       | 20% |
| W5   | 64%        | 26%   | 49%             | 36%       | 20% |
| W6   | 65%        | 27%   | 50%             | 37%       | 21% |
| W7   | 66%        | 27%   | 50%             | 37%       | 21% |
| W8   | 67%        | 28%   | 51%             | 38%       | 22% |

Analyze this data:

1. TREND ANALYSIS: Which departments are improving fastest? Which have plateaued? Calculate the week-over-week growth rate for each.

2. GAP ANALYSIS: At current growth rates, which departments will reach the 60% WAU target, and when? Which will never reach it at current trajectory?

3. PIVOT INSIGHT: If I can only focus on improving 2 departments this month, which 2 give me the most impact on overall WAU? Show the math.

4. ANOMALY: Weeks 7-8 show Sales, Customer Success, Marketing, and HR all slowing or plateauing. What might explain a simultaneous stall across multiple departments? What would you investigate?

Create a summary table with: Department | Current WAU | Growth Rate/Week | Projected Weeks to 60% Target | Priority (High/Medium/Low).
```

**What to Look For:**
- **Good response:** Calculates actual growth rates, identifies the plateau pattern in weeks 7-8, recommends the two highest-impact departments with math justification, asks smart questions about the stall
- **Weak response:** Just restates the numbers without analysis, or gives generic advice ("focus on low-performing departments") without quantitative reasoning
- **Key test:** Does the "Projected Weeks to 60% Target" calculation seem mathematically sound? Verify one department's projection yourself.

---

## Apply to Your Work

**Reflect:**
1. Which M365 app do you spend the most time in? What task in that app is most repetitive?
2. When was the last time you built a deck from scratch that took more than 2 hours? Could you have started from a Copilot-generated outline?
3. Do you have data in Excel that you've been meaning to analyze but haven't had time?

**Your Prompt:**
```
I need to prepare [DELIVERABLE] for [AUDIENCE] about [TOPIC].

Here's my raw input: [PASTE NOTES / DATA / BULLET POINTS]

Create three outputs:
1. ANALYSIS TABLE — [Describe the Excel analysis you need]
2. WRITTEN SUMMARY — [Length, audience, tone, structure]
3. PRESENTATION OUTLINE — [Number of slides, purpose, key message per slide]

Each output should be purpose-built for its format, not the same content at different lengths.
```

**You should now have:**
- A practical understanding of Copilot in Word, Excel, and PowerPoint for PM workflows
- A cross-app workflow pattern: Analyze → Summarize → Present
- The ability to do data analysis in plain English without writing formulas

---

## Key Takeaways

- Copilot is an AI layer across M365, not a single chat tool — most PMs use less than 10% of its capability
- Word Copilot is best used as a thinking tool (rewriting, reframing, restructuring) rather than a first-draft generator
- Excel Copilot eliminates the formula barrier — describe your analysis in plain English and get results
- PowerPoint Copilot is strong on structure, weak on design — use it for the 60% (content and outline), do the 40% (narrative flow and visuals) yourself
- The cross-app workflow (Excel → Word → PowerPoint) is where the real time savings compound

## What's Next

You've learned to work with Copilot across your daily tools. But some PM tasks need more than chat — they need deep research across the web and across your data. In **Module 1.6: Deep Research with Agents**, you'll learn to use Researcher and Analyst agents for competitive intelligence, market sizing, and strategic analysis.

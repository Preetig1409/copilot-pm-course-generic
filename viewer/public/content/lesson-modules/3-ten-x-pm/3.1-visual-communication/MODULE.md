# Module 3.1: Visual Communication for PMs

**Duration:** 25 minutes
**Prerequisites:** Level 1 completed

---

## What You'll Learn

By the end of this module, you will:
1. Use AI image generation to create PM-relevant visuals that replace paragraphs of text
2. Construct effective prompts for DALL-E 3 and Microsoft Designer through Copilot
3. Build a visual toolkit of persona cards, journey maps, architecture diagrams, and launch assets
4. Judge when AI-generated visuals are appropriate and when they are not

---

## Show, Don't Tell

PMs who communicate visually get faster buy-in. This is not opinion — it is how human cognition works. A user journey diagram beats three paragraphs of text. A persona card with a face and key attributes beats a bullet-point list buried in a PRD. A before/after comparison visual tells a story that a table of metrics cannot.

The problem: most PMs are not designers. You do not have Figma skills, you do not have a design team on call for internal presentations, and you do not have time to learn illustration tools for a quarterly product review.

That is where AI image generation comes in. You already know how to write prompts. Now you will use that skill to create visuals that make your stakeholders lean forward instead of glazing over.

**The visual advantage in practice:**

| Text-Only Communication | Visual Communication |
|---|---|
| "Our target persona is a mid-level manager who needs quick access to experts" | Persona card with professional photo, goals, frustrations, and JTBD — immediately memorable |
| "The user journey has 5 stages with pain points at stages 3 and 4" | Journey map showing emotions dropping at search and browse stages — instantly understood |
| "The new feature reduces search time from 8 minutes to under 2" | Before/after comparison visual — tells the story without explanation |

You do not need to be a designer. You need to be a PM who communicates clearly. AI closes the gap.

---

## DALL-E 3 and Microsoft Designer

### How to Access Image Generation

Microsoft Copilot integrates DALL-E 3 for image generation. You can access it through:

- **Microsoft Copilot chat** (copilot.microsoft.com) — ask directly for images
- **Microsoft Designer** (designer.microsoft.com) — more control over layout and style
- **Copilot in Edge** — generate images in the sidebar while working

### The Prompt Structure for PM Visuals

Image generation prompts follow a different structure than text prompts. For PM-relevant visuals, use this framework:

```
Create a [FORMAT] showing [SUBJECT].
Style: [VISUAL STYLE — professional, minimalist, infographic, etc.]
Include: [SPECIFIC ELEMENTS you need]
Layout: [How elements should be arranged]
Color palette: [Professional/brand-appropriate colors]
Text on image: [Any labels or text you need]
```

**Key differences from text prompts:**
- Be more specific about visual layout than you think necessary
- Specify "professional" or "corporate" style to avoid cartoonish results
- Include text labels in the prompt — do not assume the AI knows what to label
- Mention what the visual is for (presentation, PRD, internal comms) to set the right tone

### Iteration Is Normal

Your first image generation attempt is rarely what you want. This is expected. The workflow is:

1. Generate first attempt with your best prompt
2. Evaluate what is right and what is wrong
3. Refine the prompt — add specifics where the AI got it wrong
4. Regenerate — typically 2-3 iterations to get a usable result

Do not aim for perfection. Aim for "better than a bullet-point list." That bar is easier to clear than you think.

---

## The PM Visual Toolkit

These are the six categories of visuals every PM should be able to create. Each one replaces a common PM communication failure — walls of text that nobody reads.

### 1. Persona Cards

A persona card puts a face and structure to your user. It belongs in every PRD, every product review, every time you say "the user."

**What to include:** A professional headshot-style image, the persona's name and role, key goals (2-3), top frustration, the job-to-be-done, and a representative quote.

**Prompt pattern:**
```
Create a professional persona card for a product document.

Person: [Name], [Title] at [Company]
Photo style: Professional headshot, approachable, corporate environment
Card layout: Photo on the left, details on the right
Include these sections:
- Name and title
- Goals: [2-3 goals]
- Top Frustration: [frustration]
- Job-to-Be-Done: [JTBD statement]
- Quote: "[representative quote]"

Style: Clean, modern, suitable for a stakeholder presentation. Use a professional blue and white color scheme.
```

### 2. User Journey Maps

A journey map shows the emotional arc of a user experience. Stakeholders who would skim a text description will study a visual journey map because it tells a story.

**What to include:** Stages across the top, user actions at each stage, thoughts, emotional state (happy/neutral/frustrated with a simple indicator), and pain points highlighted.

**Prompt pattern:**
```
Create a user journey map infographic.

Journey: [User] doing [task]
Stages: [Stage 1] → [Stage 2] → [Stage 3] → [Stage 4] → [Stage 5]

For each stage, show:
- Action (what the user does)
- Thought (what they are thinking)
- Emotion (use a simple happy/neutral/frustrated face)
- Pain point (if any, highlighted in red)

Style: Horizontal flow, left to right. Professional infographic style. Clean lines, minimal color palette. Suitable for a product review presentation.
```

### 3. Architecture and System Diagrams

Simplified system diagrams help non-technical stakeholders understand how things connect. You are not drawing the technical architecture — you are drawing the story of how data and users flow through the system.

**What to include:** Major components as labeled boxes, connections with arrows, user entry points, and integration points. Keep it simple — 5-8 components maximum.

### 4. Launch and Announcement Assets

Internal launch communications with visuals get higher engagement than text-only emails. A simple visual banner or announcement graphic makes the difference between "another email" and "something worth reading."

### 5. Before/After Comparison Visuals

The most persuasive visual in a PM's toolkit. Show the current pain next to the proposed improvement. Let the contrast do the talking.

**What to include:** Clear "Before" and "After" labels, key metrics in both states, emotional indicators (frustrated vs. satisfied), and the specific improvement highlighted.

### 6. Process Flow Diagrams

When explaining how a feature works or how a workflow changes, a flow diagram communicates in seconds what paragraphs of text cannot.

---

## When AI Visuals Work and When They Don't

Honest assessment — AI image generation is powerful but not appropriate for everything.

### Great For

- **Concept communication** — "This is roughly what we mean" visuals for early-stage discussions
- **Internal presentations** — Product reviews, team meetings, sprint demos where polish matters less than clarity
- **Brainstorming and ideation** — Quick visual exploration of ideas before investing design resources
- **PRD and spec illustration** — Making documents more scannable and memorable
- **Stakeholder buy-in** — Showing a vision before committing design resources

### Not Great For

- **Customer-facing assets** — Anything going to customers needs professional design and brand consistency
- **Precise data visualization** — Charts, graphs, and dashboards should use proper data viz tools (Excel, Power BI)
- **Polished brand work** — Marketing materials, external communications, and brand assets need a designer
- **Detailed technical diagrams** — Complex architecture diagrams with precise specifications need proper diagramming tools (Visio, Mermaid, Lucidchart)
- **Accessibility-critical content** — AI-generated images may not meet accessibility standards

**The rule of thumb:** If the visual's job is to communicate an idea internally, AI generation is usually good enough. If the visual's job is to represent the company externally, invest in professional design.

---

## Exercise 1: Create a Persona Card

**Context:** You need a persona card for Priya Sharma, a key KnowledgeHub user. Right now she exists as a bullet point in your PRD. You want to make her real — a face and a story that stakeholders remember.

**Your Copilot Prompt:**
```
Create a persona card visual for Priya Sharma, Director of Customer Solutions at NovaTech. She needs to find internal experts quickly before client meetings.

Include:
- A professional headshot-style image of a South Asian woman in her late 30s, in a modern office setting
- Her key goals: (1) Find subject matter experts within 5 minutes of a client request, (2) Access relevant case studies before client meetings, (3) Build a reliable network of go-to experts across the company
- Top frustration: Spends 30+ minutes searching across multiple tools (email, Slack, SharePoint) to find who knows what, and still ends up asking around on Teams
- Job-to-be-done: "When a client asks if we have experience in a specific domain, I need to identify a credible expert and relevant past work within minutes, so I can respond before the client considers a competitor"
- Make it look like something I could put in a PRD or stakeholder presentation — professional, clean, and visually structured
```

**What to Look For:**
- Good result: A structured, professional-looking persona card that makes Priya feel like a real person. The goals and frustrations are visible at a glance. You could put this in a presentation and stakeholders would immediately understand who you are building for.
- Needs iteration: If the layout is cluttered, the text is hard to read, or the style feels cartoonish. Refine by specifying "minimalist layout" or "corporate presentation style."

---

## Exercise 2: Create a User Journey Map

**Context:** You want to show stakeholders where KnowledgeHub's search experience breaks down. A journey map will make the pain points visceral instead of abstract.

**Your Copilot Prompt:**
```
Create a user journey map for a NovaTech employee searching for information on KnowledgeHub.

Stages:
1. Need Arises — Employee gets a client question they can't answer from memory
   - Action: Realizes they need internal knowledge
   - Thought: "I know we've done this before somewhere"
   - Emotion: Neutral
   - Pain point: None yet

2. Open KnowledgeHub — Employee navigates to the platform
   - Action: Opens KnowledgeHub from browser bookmark
   - Thought: "Hopefully I can find it quickly this time"
   - Emotion: Neutral (slightly skeptical)
   - Pain point: Low confidence based on past experience

3. Search — Employee types their query
   - Action: Enters search terms, hits enter
   - Thought: "These results don't look right... let me try different keywords"
   - Emotion: Frustrated
   - Pain point: Search returns too many irrelevant results, no way to filter by relevance or recency

4. Browse Results — Employee scrolls through results
   - Action: Opens 4-5 documents, skims each one, goes back to results
   - Thought: "This is taking forever. Half of these are outdated."
   - Emotion: Frustrated
   - Pain point: Can't tell which results are current, authoritative, or relevant without opening each one

5. Find Answer (or Give Up) — Employee either finds what they need or abandons the search
   - Action: Either finds a usable document (30% of the time) or gives up and asks on Teams (70%)
   - Thought: "Next time I'll just ask someone directly"
   - Emotion: Frustrated / Relieved (if found)
   - Pain point: 8+ minutes spent, often with no result. Reinforces avoidance behavior.

Then generate an image that visualizes this journey as a horizontal flow with emotion indicators (smiley faces going from neutral to frustrated) and pain points highlighted in red. Professional infographic style suitable for a quarterly product review.
```

**What to Look For:**
- Good result: A clear visual flow that tells the story of declining confidence and rising frustration. Stakeholders should look at this and immediately understand why WAU is 43% — the experience breaks down at stages 3 and 4. Pain points are visually prominent.
- Needs iteration: If the journey is hard to follow, the emotions are not clearly differentiated, or the pain points do not stand out. Refine by specifying "make the frustration points larger and in red" or "add a clear emotional curve line."

---

## Exercise 3: Create a Before/After Comparison

**Context:** You are presenting KnowledgeHub's AI search initiative at a quarterly product review. You need a single visual that makes the case — current state vs. proposed state.

**Your Copilot Prompt:**
```
Create a before/after comparison visual for a quarterly product review presentation.

BEFORE — "KnowledgeHub Search Today":
- Time to find answer: 8+ minutes
- Tools checked: 3+ (KnowledgeHub, SharePoint, Teams/Slack)
- Success rate: ~30% find what they need
- User emotion: Frustrated, skeptical
- Result: Most employees give up and ask colleagues directly
- Visual style: Muted/grey tones, cluttered, multiple overlapping screens

AFTER — "KnowledgeHub with AI-Powered Search":
- Time to find answer: Under 2 minutes
- Tools needed: 1 (KnowledgeHub only)
- Success rate: 85%+ find what they need
- User emotion: Confident, satisfied
- Result: Employees trust the platform and return regularly
- Visual style: Bright, clean, single focused screen

Layout: Side by side, "Before" on left, "After" on right. Clear dividing line.
Include the key metrics prominently (8 min → 2 min, 30% → 85%).
Make it compelling — this needs to make executives say "we need this."
Professional presentation style with a blue and white color scheme.
```

**What to Look For:**
- Good result: The contrast is immediate and visceral. An executive glancing at this visual for 5 seconds should understand the value proposition. The "Before" side should feel heavy and frustrating. The "After" side should feel clean and efficient. Key metrics are large and prominent.
- Needs iteration: If both sides look similar, the contrast is not strong enough. Refine by emphasizing "make the Before side visually cluttered and grey" and "make the After side clean and bright with more whitespace."

---

## Apply to Your Work

**Reflect:**
1. What is the next presentation or document where a visual would be more persuasive than text? What story does that visual need to tell?
2. Think about your last product review — which slide had the most text? Could a visual have replaced it?
3. Who is a stakeholder you struggle to convince with words alone? What visual format might resonate with them — a journey map, a before/after, a persona card?

**Your Prompt:**
```
I'm a PM for [YOUR PRODUCT]. I have an upcoming [PRESENTATION/DOCUMENT] for [AUDIENCE].

The key message I need to communicate is: [YOUR MESSAGE]

Help me identify:
1. What type of visual would communicate this most effectively (persona card, journey map, before/after, process flow, architecture diagram, or something else)
2. A detailed image generation prompt I can use to create that visual
3. What text or data should be prominent in the visual
4. How to position the visual in my presentation for maximum impact

Then generate the visual.
```

**You should now have:**
- At least one AI-generated persona card you could use in a real PRD
- A user journey map that makes pain points visceral for stakeholders
- A before/after visual that tells a compelling improvement story
- Confidence to create PM visuals without design skills

---

## Key Takeaways

- PMs who communicate visually get faster stakeholder buy-in. A journey map, persona card, or before/after comparison communicates in seconds what paragraphs cannot.
- AI image generation through Copilot closes the gap between "I need a visual" and "I don't have design skills." You already know how to prompt — now use that skill for images.
- Iteration is normal. Expect 2-3 prompt refinements to get a usable result. The goal is "better than a bullet-point list," not design perfection.
- Use AI visuals for internal communication, concept exploration, and stakeholder presentations. Use professional designers for customer-facing assets and brand work.

---

## What's Next

Module 3.2 is the capstone — the most important module in the course. You will run through an entire product cycle for a new NovaTech feature, using every skill and Copilot workflow from all four levels. Visual communication is one of those skills. Everything comes together.

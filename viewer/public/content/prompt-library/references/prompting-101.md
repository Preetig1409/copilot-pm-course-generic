# Prompting 101: Getting the Most from Microsoft Copilot

A quick-start reference for writing effective prompts in Microsoft 365 Copilot.

---

## The GCSE Framework

Microsoft recommends structuring prompts with four elements. Only the **Goal** is required — add the others to get better results.

| Element | What It Means | Example |
|---------|--------------|---------|
| **Goal** | What you want Copilot to do | "Summarize the key decisions from..." |
| **Context** | Why you need it and how it will be used | "...for a steering committee update" |
| **Source** | Where Copilot should look for information | "...based on last week's meeting notes" |
| **Expectations** | How the output should look and feel | "...as 5 bullet points in a formal tone" |

### Putting It Together

**Weak prompt:**
```
Summarize this document
```

**Strong prompt using GCSE:**
```
Summarize the key decisions and action items from this document.
This is for a steering committee update — the audience is senior leadership.
Focus on the sections about timeline and budget.
Format as 5 bullet points, each starting with the decision owner's name.
```

> **Tip:** The order matters. Copilot gives more weight to what appears later in your prompt. Put your most important constraints (source, format) at the end.

---

## The Four Things Copilot Does Well

| Action | What It Means | PM Example |
|--------|--------------|------------|
| **Summarize** | Condense long content into key points | "Summarize this 30-page PRD into a 1-page executive brief" |
| **Create** | Generate new content from scratch | "Draft a stakeholder communication about the launch delay" |
| **Edit** | Rewrite or transform existing content | "Rewrite this technical spec for a non-technical audience" |
| **Analyze** | Find patterns, answer questions about data | "What themes emerge from these 8 user interviews?" |

When you're not sure how to start, ask yourself: *Am I trying to summarize, create, edit, or analyze?* Then build your prompt from there.

---

## 8 Starter Prompts for Product Managers

Try these in Copilot Chat to get comfortable. Each one demonstrates a different use of the GCSE framework.

### 1. Meeting Summary
```
Summarize my last meeting with [person's name].
List the key decisions, open questions, and action items with owners.
Format as a table.
```

### 2. Stakeholder Email
```
Draft a project status update email for executive stakeholders.
The project is on track but the timeline shifted by 2 weeks due to
a dependency on the platform team. Keep the tone professional and
concise — no more than 8 sentences.
```

### 3. PRD Section
```
Help me write the "Problem Statement" section of a PRD.
The product is an internal knowledge management tool for 700,000 employees.
The main problem: employees spend 8+ minutes searching for information
that should take 2 minutes. Include business impact and user impact.
```

### 4. Competitive Research
```
What are the main differences between Jira, Linear, and Shortcut
for product management? Compare them on: pricing, key features,
best suited team size, and integration ecosystem.
Format as a comparison table.
```

### 5. User Interview Synthesis
```
I'm going to paste 3 user interview transcripts.
Identify the top 5 recurring themes across all interviews.
For each theme, include a representative quote and note
how many interviews mention it.
```

### 6. Data Interpretation
```
Here is adoption data for our internal tool over 12 weeks.
What trends do you see? Where is the biggest drop-off?
If the current trend continues, when will we reach 60% weekly active users?
Show your reasoning.
```

### 7. Presentation Outline
```
Create a 6-slide outline for a quarterly product review presentation.
Audience: VP-level leadership. Include: accomplishments, metrics,
roadmap, risks, and asks. Add one sentence of speaker notes per slide.
```

### 8. Rewrite for Audience
```
Rewrite this technical requirement for a non-technical audience.
Keep the meaning the same but remove jargon. The reader is a
business sponsor who cares about impact, not implementation details.
```

---

## Common Mistakes to Avoid

| Mistake | Why It Fails | Fix |
|---------|-------------|-----|
| **Too vague** ("Help me with this") | Copilot doesn't know what "help" means | State a specific goal: "Summarize," "Draft," "Compare" |
| **No audience context** | Output may be wrong tone/level | Add who will read it: "for engineers," "for executives" |
| **Ignoring sources** | Copilot guesses instead of using your data | Point to specific files, emails, or meetings |
| **Not iterating** | First response is rarely perfect | Follow up: "Make it shorter," "Add more detail to point 3" |
| **Trusting without checking** | AI can generate plausible but wrong content | Always verify facts, calculations, and quotes |

---

## Pro Tips

1. **Start simple, then refine.** A 2-sentence prompt that you iterate on beats a 20-sentence prompt you spent 10 minutes writing.

2. **Use follow-up prompts.** Copilot remembers your conversation. Say "Make that more concise" or "Now format it as a table" instead of rewriting from scratch.

3. **Say "new topic" when switching tasks.** This resets Copilot's focus so previous context doesn't bleed in.

4. **Be polite.** Microsoft's own research shows that courteous phrasing ("please," "could you") produces better results.

5. **Reference your actual work files.** The power of M365 Copilot over generic AI tools is that it can access your emails, documents, and meetings. Use prompts like "Based on the file [filename]..." or "From my emails with [person] last week..."

---

## Learn More

These are official Microsoft resources for deeper learning:

- **Craft effective prompts for Microsoft 365 Copilot** — Microsoft Learn training path covering Word, Excel, PowerPoint, Teams, and Outlook prompting
  `https://learn.microsoft.com/en-us/training/paths/craft-effective-prompts-copilot-microsoft-365/`

- **Cooking up a great prompt** — Microsoft's official how-to guide with principles and examples
  `https://support.microsoft.com/en-us/topic/cooking-up-a-great-prompt-getting-the-most-from-copilot-7b614306-d5aa-4b62-8509-e46674a29165`

- **Example prompts to try** — Starter examples organized by scenario
  `https://support.microsoft.com/en-gb/topic/example-prompts-to-try-with-copilot-for-microsoft-365-68ca1ee5-47c3-4f60-8bab-160cc665d84f`

- **Microsoft 365 Copilot Prompt Gallery** — Curated prompts organized by task type (requires M365 sign-in)
  `https://m365.cloud.microsoft/copilot-prompts`

---

*This reference page is part of the Microsoft Copilot for Product Managers course. Return to the course modules to practice these techniques in real PM scenarios.*

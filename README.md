# The AI-Augmented Product Manager: Master Microsoft Copilot for 10x PM Impact

An opinionated, 11-hour, 23-module self-paced course that teaches Product Managers how to use Microsoft 365 Copilot to save 14+ hours per week on real PM work.

> **[Live Website](https://sanjaygupta-professional.github.io/copilot-pm-course-generic/)** | **[Getting Started Guide](GETTING-STARTED.md)** | **[GitHub Repo](https://github.com/sanjaygupta-professional/copilot-pm-course-generic)**

## What Makes This Different

- **Opinionated, not generic.** Every module teaches a specific workflow with a specific prompt — not "here's what Copilot can do" but "here's exactly how to do it."
- **Practitioner wisdom.** Built by a PM who uses Copilot daily. The prompts, patterns, and warnings come from real experience.
- **Simulation + real work.** You play a Senior Product Manager at NovaTech Solutions (a fictional B2B SaaS company) with realistic products, personas, and data — then apply the same techniques to your actual job.

## Prerequisites

- **Microsoft 365 Copilot Enterprise license**
- OneDrive access
- Microsoft Word, Excel, PowerPoint, Teams, Outlook
- Browser access to copilot.microsoft.com

## Course Structure: 4 Levels, 23 Modules, ~11 Hours

### Level 1: PM Craft (~3.5 hours)

| Module | Topic | Duration |
|--------|-------|----------|
| 1.1 | Welcome to Microsoft Copilot | 15 min |
| 1.2 | Setting Up Your Workspace | 15 min |
| 1.3 | Your First PM Tasks | 30 min |
| 1.4 | Researcher & Analyst Agents | 25 min |
| 1.5 | Persona Prompting | 20 min |
| 1.6 | Building Context with Memory | 15 min |
| 1.7 | Copilot Across M365 Apps | 15 min |
| 1.8 | Copilot in Microsoft Teams | 25 min |
| 1.9 | Copilot in Outlook | 20 min |
| 1.10 | Copilot in SharePoint & Collaboration | 20 min |

### Level 2: Copilot as Teammate (~2 hours)

| Module | Topic | Duration |
|--------|-------|----------|
| 2.1 | Writing PRDs with Copilot | 35 min |
| 2.2 | Analyzing Product Data | 30 min |
| 2.3 | Product Strategy | 30 min |

### Level 3: Strategic PM (~3 hours)

| Module | Topic | Duration |
|--------|-------|----------|
| 3.1 | Image Generation Basics | 20 min |
| 3.2 | PM Visuals | 25 min |

### Level 4: The 10x PM (~2.5 hours)

Additional advanced modules covering force-multiplier techniques for experienced PMs.

## Getting Started

### Option A: Use the Website (Recommended)

1. Open the **[course website](https://sanjaygupta-professional.github.io/copilot-pm-course-generic/)**
2. Start with **Module 1.1** from the sidebar
3. Follow the step-by-step instructions and complete exercises as you go

See the **[Getting Started Guide](GETTING-STARTED.md)** for detailed onboarding instructions.

### Option B: Browse the Repo

1. Open `lesson-modules/1-fundamentals/1.1-welcome/MODULE.md`
2. Follow the instructions in each module
3. Complete exercises as you go
4. Use the prompt library for reference

## Tech Stack

- **Content:** Markdown files (source of truth)
- **Viewer:** React 18 + TypeScript + Vite + Tailwind CSS
- **Deployment:** GitHub Actions → GitHub Pages
- **Alternative:** Static HTML generator (`build-static.js`) for offline use

## Development

```bash
# Install dependencies
cd viewer && npm install

# Start dev server (copies content + starts Vite)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Folder Structure

```
copilot-pm-course-generic/
├── lesson-modules/
│   ├── 1-fundamentals/        # Level 1: PM Craft (10 modules)
│   ├── 2-advanced-pm-work/    # Level 2: Copilot as Teammate (3 modules)
│   └── 3-product-visuals/     # Level 3: Strategic PM (2 modules)
├── company-context/           # NovaTech Solutions company context files
├── prompt-library/
│   ├── personas/              # Engineer, Executive, Researcher, Managing Director
│   └── templates/             # Reusable prompt templates
├── sample-files/              # Exercise files (meeting notes, interviews, CSVs)
├── viewer/                    # React companion website (auto-deployed)
├── .github/                   # GitHub Actions deployment workflow
├── notebooklm-upload/         # Flattened files for NotebookLM upload
├── GETTING-STARTED.md         # Learner onboarding guide
└── README.md                  # This file
```

## Company Context: NovaTech Solutions

Throughout this course, you work as a **Senior Product Manager** at **NovaTech Solutions**, a mid-size B2B SaaS company building tools for enterprise teams.

- **Company:** NovaTech Solutions — B2B SaaS, ~2,000 employees
- **Your team:** Product Management (cross-functional)
- **Your products:** TaskFlow Pro (project management) and DataSync Hub (data integration)
- **Your focus:** Improving adoption, user experience, and product-market fit

## Support

This course is designed for self-paced learning. Each module includes:
- Clear learning objectives
- Step-by-step instructions
- Hands-on exercises
- Quick reference guides

## License

This course is for training purposes.

---

**Ready to start?** Open the **[course website](https://sanjaygupta-professional.github.io/copilot-pm-course-generic/)** or read the **[Getting Started Guide](GETTING-STARTED.md)**!

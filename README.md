# The AI-Augmented Product Manager: Master Microsoft Copilot for 10x PM Impact

An opinionated, 11-hour, 23-module self-paced course that teaches Product Managers how to use Microsoft 365 Copilot to save 14+ hours per week on real PM work.

> **[Live Website](https://preetig1409.github.io/copilot-pm-course-generic/)** | **[Getting Started Guide](GETTING-STARTED.md)** | **[GitHub Repo](https://github.com/Preetig1409/copilot-pm-course-generic)**

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

### Level 0: The PM Craft (~2.5 hours)

| Module | Topic | Duration |
|--------|-------|----------|
| 0.1 | What Product Management Actually Is | 20 min |
| 0.2 | Knowing Your Users — Beyond Persona Templates | 25 min |
| 0.3 | Prioritization That Actually Works | 25 min |
| 0.4 | Writing Requirements That Engineers Love | 25 min |
| 0.5 | Agile in Practice | 20 min |
| 0.6 | Stakeholder Management — The Unwritten PM Skill | 25 min |

### Level 1: Copilot as Teammate (~3 hours)

| Module | Topic | Duration |
|--------|-------|----------|
| 1.1 | Your AI Working Environment | 15 min |
| 1.2 | Meeting Intelligence | 25 min |
| 1.3 | User Research Synthesis at Scale | 25 min |
| 1.4 | Communication That Lands | 25 min |
| 1.5 | Copilot Across M365 | 20 min |
| 1.6 | Deep Research with Agents | 25 min |
| 1.7 | Building Context & Memory | 20 min |
| 1.8 | Teams & Outlook Mastery | 25 min |

### Level 2: Strategic PM with AI (~2.5 hours)

| Module | Topic | Duration |
|--------|-------|----------|
| 2.1 | Writing PRDs That Get Buy-In | 35 min |
| 2.2 | Data-Driven Decisions with AI | 30 min |
| 2.3 | Product Strategy & Roadmapping | 35 min |
| 2.4 | Running Effective Product Reviews | 25 min |
| 2.5 | Navigating Organizational Politics | 25 min |

### Level 3: The 10x PM (~1.5 hours)

| Module | Topic | Duration |
|--------|-------|----------|
| 3.1 | Visual Communication for PMs | 25 min |
| 3.2 | The Capstone — Run a Product Cycle | 40 min |
| 3.3 | Building Your Personal AI Toolkit | 20 min |
| 3.4 | What's Next — The AI-Era PM | 15 min |

## Getting Started

### Option A: Use the Website (Recommended)

1. Open the **[course website](https://preetig1409.github.io/copilot-pm-course-generic/)**
2. Start with **Module 0.1** from the sidebar
3. Follow the step-by-step instructions and complete exercises as you go

See the **[Getting Started Guide](GETTING-STARTED.md)** for detailed onboarding instructions.

### Option B: Browse the Repo

1. Open `lesson-modules/0-pm-fundamentals/0.1-what-is-pm/MODULE.md`
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
│   ├── 0-pm-fundamentals/        # Level 0: The PM Craft (6 modules)
│   ├── 1-copilot-teammate/       # Level 1: Copilot as Teammate (8 modules)
│   ├── 2-strategic-pm/           # Level 2: Strategic PM with AI (5 modules)
│   └── 3-ten-x-pm/              # Level 3: The 10x PM (4 modules)
├── company-context/              # NovaTech Solutions company context files
├── prompt-library/
│   ├── personas/                 # Engineer, Executive, Researcher, Managing Director
│   ├── templates/                # Reusable prompt templates
│   └── references/               # Prompting 101, PM learning resources
├── sample-files/                 # Exercise files (meeting notes, interviews, CSVs)
├── viewer/                       # React companion website (auto-deployed)
├── .github/                      # GitHub Actions deployment workflow
├── notebooklm-upload/            # Flattened files for NotebookLM upload
├── GETTING-STARTED.md            # Learner onboarding guide
└── README.md                     # This file
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

**Ready to start?** Open the **[course website](https://preetig1409.github.io/copilot-pm-course-generic/)** or read the **[Getting Started Guide](GETTING-STARTED.md)**!

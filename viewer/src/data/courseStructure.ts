import { CourseStructure, ResourceSection } from '../types/course'

export const courseStructure: CourseStructure = {
  course: {
    title: "The AI-Augmented Product Manager",
    version: "2.0.0",
    description: "Master Microsoft Copilot for 10x PM impact — practitioner-tested workflows from Cagan, Torres, Doshi, and more",
    targetAudience: "Product Managers, Product Owners, Business Analysts — junior to experienced",
    prerequisites: [
      "Microsoft 365 Copilot Enterprise license",
      "OneDrive access",
      "Basic familiarity with M365 apps"
    ],
    estimatedDuration: "11 hours",
    lastUpdated: "2026-03-18"
  },
  levels: [
    {
      id: "0",
      title: "The PM Craft",
      description: "Core PM skills through a practitioner lens — with Copilot from day one",
      modules: [
        {
          id: "0.1",
          title: "What Product Management Actually Is",
          duration: "20 min",
          path: "lesson-modules/0-pm-fundamentals/0.1-what-is-pm/MODULE.md",
          objectives: [
            "Understand Cagan's four risks framework",
            "Distinguish PM vs PO vs BA roles in practice",
            "Map the product lifecycle and where PMs add leverage"
          ]
        },
        {
          id: "0.2",
          title: "Knowing Your Users — Beyond Persona Templates",
          duration: "25 min",
          path: "lesson-modules/0-pm-fundamentals/0.2-understanding-users/MODULE.md",
          objectives: [
            "Apply Jobs-to-be-Done over demographic personas",
            "Design a continuous discovery practice",
            "Use Copilot to synthesize user research"
          ]
        },
        {
          id: "0.3",
          title: "Prioritization That Actually Works",
          duration: "25 min",
          path: "lesson-modules/0-pm-fundamentals/0.3-discovery-prioritization/MODULE.md",
          objectives: [
            "Apply Shreyas Doshi's LNO framework",
            "Build Opportunity Solution Trees",
            "Use Copilot to challenge your prioritization"
          ]
        },
        {
          id: "0.4",
          title: "Writing Requirements That Engineers Love",
          duration: "25 min",
          path: "lesson-modules/0-pm-fundamentals/0.4-user-stories-requirements/MODULE.md",
          objectives: [
            "Write one-pagers that ship context, not specs",
            "Craft acceptance criteria that matter",
            "Use Copilot to draft and challenge requirements"
          ]
        },
        {
          id: "0.5",
          title: "Agile in Practice",
          duration: "20 min",
          path: "lesson-modules/0-pm-fundamentals/0.5-agile-scrum/MODULE.md",
          objectives: [
            "Evaluate which Scrum ceremonies earn their time",
            "Understand dual-track agile",
            "Use Copilot for sprint planning and retros"
          ]
        },
        {
          id: "0.6",
          title: "Stakeholder Management — The Unwritten PM Skill",
          duration: "25 min",
          path: "lesson-modules/0-pm-fundamentals/0.6-stakeholder-communication/MODULE.md",
          objectives: [
            "Map stakeholders by real power and hidden motivations",
            "Run pre-mortems to surface risks early",
            "Use Copilot to draft stakeholder engagement strategies"
          ]
        }
      ]
    },
    {
      id: "1",
      title: "Copilot as Teammate",
      description: "Master Copilot workflows for every PM pain point",
      modules: [
        {
          id: "1.1",
          title: "Your AI Working Environment",
          duration: "15 min",
          path: "lesson-modules/1-copilot-teammate/1.1-ai-working-environment/MODULE.md",
          objectives: [
            "Set up Copilot for PM work",
            "Master the GCSE prompting framework",
            "Upload and prime product context"
          ]
        },
        {
          id: "1.2",
          title: "Meeting Intelligence",
          duration: "25 min",
          path: "lesson-modules/1-copilot-teammate/1.2-meeting-intelligence/MODULE.md",
          objectives: [
            "Extract decisions and action items automatically",
            "Analyze meeting dynamics with Copilot",
            "Build a post-meeting workflow"
          ]
        },
        {
          id: "1.3",
          title: "User Research Synthesis at Scale",
          duration: "25 min",
          path: "lesson-modules/1-copilot-teammate/1.3-user-research-synthesis/MODULE.md",
          objectives: [
            "Synthesize multiple interview transcripts in an hour",
            "Apply the insight pyramid to AI synthesis",
            "Interrogate Copilot for contradictions and outliers"
          ]
        },
        {
          id: "1.4",
          title: "Communication That Lands",
          duration: "25 min",
          path: "lesson-modules/1-copilot-teammate/1.4-communication-that-lands/MODULE.md",
          objectives: [
            "Transform one update for multiple audiences",
            "Apply the Context → So What → Now What framework",
            "Draft difficult communications with Copilot"
          ]
        },
        {
          id: "1.5",
          title: "Copilot Across M365",
          duration: "20 min",
          path: "lesson-modules/1-copilot-teammate/1.5-m365-integrated-workflow/MODULE.md",
          objectives: [
            "Use Copilot in Word, Excel, and PowerPoint",
            "Build multi-app workflows",
            "Know what each app does best"
          ]
        },
        {
          id: "1.6",
          title: "Deep Research with Agents",
          duration: "25 min",
          path: "lesson-modules/1-copilot-teammate/1.6-deep-research-agents/MODULE.md",
          objectives: [
            "Use Researcher for competitive and market analysis",
            "Use Analyst for data reasoning",
            "Detect hallucinations and source quality issues"
          ]
        },
        {
          id: "1.7",
          title: "Building Context & Memory",
          duration: "20 min",
          path: "lesson-modules/1-copilot-teammate/1.7-context-and-memory/MODULE.md",
          objectives: [
            "Build a reusable context primer",
            "Use persona prompting for multi-perspective thinking",
            "Create a personal prompt library"
          ]
        },
        {
          id: "1.8",
          title: "Teams & Outlook Mastery",
          duration: "25 min",
          path: "lesson-modules/1-copilot-teammate/1.8-teams-outlook-mastery/MODULE.md",
          objectives: [
            "Build a Monday morning catch-up routine",
            "Prioritize emails and channels with Copilot",
            "Design a daily AI-augmented PM rhythm"
          ]
        }
      ]
    },
    {
      id: "2",
      title: "Strategic PM with AI",
      description: "Strategic thinking, enterprise influence, and data-driven decisions",
      modules: [
        {
          id: "2.1",
          title: "Writing PRDs That Get Buy-In",
          duration: "35 min",
          path: "lesson-modules/2-strategic-pm/2.1-prds-that-get-buyin/MODULE.md",
          objectives: [
            "Build enterprise PRDs with business cases and ROI",
            "Create RACI matrices and governance sections",
            "Get multi-perspective AI feedback on your PRD"
          ]
        },
        {
          id: "2.2",
          title: "Data-Driven Decisions with AI",
          duration: "30 min",
          path: "lesson-modules/2-strategic-pm/2.2-data-driven-decisions/MODULE.md",
          objectives: [
            "Build a metrics hierarchy (North Star → Input → Health)",
            "Turn data into compelling narratives",
            "Detect statistical BS in AI analysis"
          ]
        },
        {
          id: "2.3",
          title: "Product Strategy & Roadmapping",
          duration: "35 min",
          path: "lesson-modules/2-strategic-pm/2.3-strategy-and-roadmapping/MODULE.md",
          objectives: [
            "Apply Gibson Biddle's DHM model",
            "Choose the right roadmap format",
            "Stress-test strategy with AI devil's advocate"
          ]
        },
        {
          id: "2.4",
          title: "Running Effective Product Reviews",
          duration: "25 min",
          path: "lesson-modules/2-strategic-pm/2.4-product-reviews/MODULE.md",
          objectives: [
            "Build a narrative arc for product reviews",
            "Pre-generate tough questions and prepare answers",
            "Lock in decisions with follow-up execution"
          ]
        },
        {
          id: "2.5",
          title: "Navigating Organizational Politics",
          duration: "25 min",
          path: "lesson-modules/2-strategic-pm/2.5-navigating-politics/MODULE.md",
          objectives: [
            "Map real decision-making networks",
            "Build sponsor-champion-implementer coalitions",
            "War-game political scenarios with AI"
          ]
        }
      ]
    },
    {
      id: "3",
      title: "The 10x PM",
      description: "Synthesis — visual communication, capstone project, and your AI toolkit",
      modules: [
        {
          id: "3.1",
          title: "Visual Communication for PMs",
          duration: "25 min",
          path: "lesson-modules/3-ten-x-pm/3.1-visual-communication/MODULE.md",
          objectives: [
            "Create persona cards and journey maps with AI",
            "Generate presentation-ready visuals",
            "Know when AI visuals work and when they don't"
          ]
        },
        {
          id: "3.2",
          title: "The Capstone — Run a Product Cycle",
          duration: "40 min",
          path: "lesson-modules/3-ten-x-pm/3.2-capstone-product-cycle/MODULE.md",
          objectives: [
            "Run a complete product cycle: discovery → spec → buy-in → launch",
            "Produce a full set of PM artifacts with Copilot",
            "Apply every skill from the course in one workflow"
          ]
        },
        {
          id: "3.3",
          title: "Building Your Personal AI Toolkit",
          duration: "20 min",
          path: "lesson-modules/3-ten-x-pm/3.3-personal-ai-toolkit/MODULE.md",
          objectives: [
            "Assemble daily, weekly, and monthly PM workflows",
            "Build a master context primer for your real work",
            "Create a maintainable prompt library"
          ]
        },
        {
          id: "3.4",
          title: "What's Next — The AI-Era PM",
          duration: "15 min",
          path: "lesson-modules/3-ten-x-pm/3.4-whats-next/MODULE.md",
          objectives: [
            "Identify skills that matter more (and less) with AI",
            "Build a 90-day personal development plan",
            "Connect with the PM community for continuous learning"
          ]
        }
      ]
    }
  ]
}

export const resourceStructure: ResourceSection[] = [
  {
    id: "company-context",
    title: "Company Context",
    categories: [
      {
        id: "novatech",
        title: "NovaTech Solutions",
        files: [
          { id: "company", title: "Company Overview", path: "company-context/COMPANY.md" },
          { id: "personas", title: "User Personas", path: "company-context/PERSONAS.md" },
          { id: "product", title: "Product Details", path: "company-context/PRODUCT.md" },
          { id: "competitive", title: "Competitive Landscape", path: "company-context/COMPETITIVE.md" }
        ]
      }
    ]
  },
  {
    id: "prompt-library",
    title: "Prompt Library",
    categories: [
      {
        id: "personas",
        title: "Persona Prompts",
        files: [
          { id: "executive", title: "Executive Persona", path: "prompt-library/personas/executive.md" },
          { id: "engineer", title: "Engineer Persona", path: "prompt-library/personas/engineer.md" },
          { id: "director", title: "Director Persona", path: "prompt-library/personas/director.md" },
          { id: "user-researcher", title: "User Researcher Persona", path: "prompt-library/personas/user-researcher.md" }
        ]
      },
      {
        id: "templates",
        title: "Templates",
        files: [
          { id: "meeting-notes", title: "Meeting Notes", path: "prompt-library/templates/meeting-notes.md" },
          { id: "communication-transform", title: "Communication Transform", path: "prompt-library/templates/communication-transform.md" },
          { id: "user-research-synthesis", title: "User Research Synthesis", path: "prompt-library/templates/user-research-synthesis.md" },
          { id: "feedback-extraction", title: "Feedback Extraction", path: "prompt-library/templates/feedback-extraction.md" }
        ]
      },
      {
        id: "references",
        title: "References",
        files: [
          { id: "prompting-101", title: "Prompting 101", path: "prompt-library/references/prompting-101.md" },
          { id: "pm-resources", title: "PM Learning Resources", path: "prompt-library/references/pm-resources.md" }
        ]
      }
    ]
  },
  {
    id: "sample-files",
    title: "Sample Files",
    categories: [
      {
        id: "meeting-notes",
        title: "Meeting Notes",
        files: [
          { id: "meeting-raw", title: "Meeting Notes (Raw)", path: "sample-files/meeting-notes/meeting-notes-raw.md" },
          { id: "product-sync", title: "Product Sync Notes", path: "sample-files/meeting-notes/product-sync-notes.md" }
        ]
      },
      {
        id: "user-interviews",
        title: "User Interviews",
        files: [
          { id: "interview-01", title: "User Interview 01", path: "sample-files/user-interviews/user-interview-01.md" },
          { id: "interview-02", title: "User Interview 02", path: "sample-files/user-interviews/user-interview-02.md" },
          { id: "interview-03", title: "User Interview 03", path: "sample-files/user-interviews/user-interview-03.md" },
          { id: "interview-04", title: "User Interview 04", path: "sample-files/user-interviews/user-interview-04.md" },
          { id: "interview-05", title: "User Interview 05", path: "sample-files/user-interviews/user-interview-05.md" },
          { id: "interview-06", title: "User Interview 06", path: "sample-files/user-interviews/user-interview-06.md" },
          { id: "interview-07", title: "User Interview 07", path: "sample-files/user-interviews/user-interview-07.md" },
          { id: "interview-08", title: "User Interview 08", path: "sample-files/user-interviews/user-interview-08.md" }
        ]
      }
    ]
  }
]

// Helper function to get all modules in order
export function getAllModules() {
  return courseStructure.levels.flatMap(level => level.modules)
}

// Helper function to get a module by ID
export function getModuleById(id: string) {
  return getAllModules().find(m => m.id === id)
}

// Helper function to get level by module ID
export function getLevelByModuleId(moduleId: string) {
  return courseStructure.levels.find(level =>
    level.modules.some(m => m.id === moduleId)
  )
}

// Helper function to get prev/next module
export function getAdjacentModules(currentId: string) {
  const modules = getAllModules()
  const currentIndex = modules.findIndex(m => m.id === currentId)

  return {
    prev: currentIndex > 0 ? modules[currentIndex - 1] : null,
    next: currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null
  }
}

// Helper function to get resource by path
export function getResourceByPath(path: string) {
  for (const section of resourceStructure) {
    for (const category of section.categories) {
      const file = category.files.find(f => f.path === path)
      if (file) {
        return { section, category, file }
      }
    }
  }
  return null
}

import { MissionData } from "./missions/world0";
import { AllInOneCheckpoint } from "@/components/course/AllInOneMission";

export type Mission = {
  id: string;
  title: string;
  description?: string;
  xpReward?: number;
};

export type World = {
  id: number;
  phaseId: number;
  slug: string;
  title: string;
  subtitle?: string;
  missions: Mission[];
  project?: string; // Description of the project
  blackBox?: {
    title: string;
    description: string;
  };
  secretDrop?: {
    title: string;
    description: string;
  };
  allInOneMission?: {
    title: string;
    description: string;
    checkpoints: AllInOneCheckpoint[];
    totalXpReward: number;
  };
  lockedByDefault?: boolean;
};

export type Phase = {
  id: number;
  title: string;
  subtitle?: string;
  worlds: World[];
};

export const curriculum: { phases: Phase[] } = {
  phases: [
    {
      id: 0,
      title: "Phase 0: Tutorial",
      worlds: [
        {
          id: 0,
          phaseId: 0,
          slug: "tutorial",
          title: "The Tutorial",
          subtitle: "Your First Vibe Check",
          missions: [
            { id: "what-is-vibe-coding", title: "What is Vibe Coding", description: "Understanding the shift from Scribe to Commander.", xpReward: 10 },
            { id: "overview-restaurant", title: "Overview: The Restaurant Analogy", description: "The mental model for how apps work.", xpReward: 10 },
            { id: "frontend-fundamentals", title: "Frontend Fundamentals", description: "UI, Components, and State.", xpReward: 10 },
            { id: "backend-fundamentals", title: "Backend Fundamentals", description: "Servers, Logic, and Secrets.", xpReward: 10 },
            { id: "api-fundamentals", title: "API Fundamentals", description: "Requests, Responses, and The Menu.", xpReward: 10 },
            { id: "database-fundamentals", title: "Database Fundamentals", description: "Persistence and Tables.", xpReward: 10 },
            { id: "devtools-fundamentals", title: "Dev Tools & Workflow", description: "Node, Git, Cursor, and Vercel.", xpReward: 10 },
            { id: "build-first-stack", title: "Build Your First Stack", description: "Assemble the ultimate Vibe Coding Stack.", xpReward: 10 }
          ],
          blackBox: {
            title: "What HTML, CSS, JS actually do",
            description: "DOM explained simply"
          },
          allInOneMission: {
            title: "The Ultimate Vibe Check Challenge",
            description: "Put everything you've learned to the test. Complete all checkpoints to prove you've mastered the fundamentals and unlock your first achievement badge.",
            checkpoints: [
              {
                id: "checkpoint-1",
                title: "Explain the Restaurant Analogy",
                description: "Describe how frontend, backend, and database work together using the restaurant mental model.",
                xpReward: 15
              },
              {
                id: "checkpoint-2",
                title: "Identify Stack Components",
                description: "List all the tools in your Vibe Coding stack and explain what each one does.",
                xpReward: 15
              },
              {
                id: "checkpoint-3",
                title: "Map the Data Flow",
                description: "Trace how data flows from user interaction → frontend → backend → database and back.",
                xpReward: 20
              }
            ],
            totalXpReward: 50
          }
        }
      ]
    },
    {
      id: 1,
      title: "Phase 1: Ignition",
      subtitle: "Zero to One",
      worlds: [
        {
          id: 1,
          phaseId: 1,
          slug: "vibe-philosophy",
          title: "The Vibe Philosophy",
          subtitle: "Think like a founder",
          missions: [
            { id: "director-mindset", title: "The Director's Chair", description: "Stop typing, start directing.", xpReward: 10 },
            { id: "manifesto", title: "The Vibe Coder Manifesto", description: "Speed > Perfection.", xpReward: 10 },
            { id: "founder-mode", title: "Founder Mode Activated", description: "Product > Code.", xpReward: 10 },
            { id: "shipping-is-breathing", title: "Shipping is Breathing", description: "Deploy early, deploy often.", xpReward: 10 },
            { id: "vibe-check-quiz", title: "Vibe Check: Phase 1", description: "Test your mindset.", xpReward: 10 }
          ],
          blackBox: {
            title: "How the browser renders your page",
            description: "The Critical Rendering Path."
          },
          secretDrop: {
            title: "AI Pair Programming Ritual",
            description: "Unlock the secrets of AI collaboration."
          }
        },
        {
          id: 2,
          phaseId: 1,
          slug: "god-mode-workflow",
          title: "God Mode Workflow",
          subtitle: "Coding becomes English class",
          missions: [
            { id: "god-mode-loop", title: "The God Mode Loop", description: "Prompt → Generate → Check → Refine.", xpReward: 10 },
            { id: "context-game", title: "The Context Game", description: "Garbage in, garbage out.", xpReward: 10 },
            { id: "iterative-prompting", title: "Iterative Prompting", description: "Don't command. Discuss.", xpReward: 10 },
            { id: "debug-dialogue", title: "Debugging as Dialogue", description: "Errors are clues.", xpReward: 10 },
            { id: "workflow-sim", title: "Workflow Simulator", description: "Practice the loop.", xpReward: 10 }
          ],
          blackBox: {
            title: "React re-renders",
            description: "Component fundamentals and lifecycle."
          },
          secretDrop: {
            title: "Prompt Transfusion System",
            description: "Advanced prompting techniques."
          }
        },
        {
          id: 3,
          phaseId: 1,
          slug: "your-tool-stack",
          title: "Your Tool Stack",
          subtitle: "The Avengers Assembly",
          missions: [
            { id: "stack-overview", title: "The Modern Stack", description: "Meet your team.", xpReward: 10 },
            { id: "cursor-deep-dive", title: "Cursor: The Magic Wand", description: "Not just VS Code.", xpReward: 10 },
            { id: "v0-designer", title: "v0: The Artist", description: "Generative UI.", xpReward: 10 },
            { id: "supabase-vault", title: "Supabase: The Vault", description: "The backend brain.", xpReward: 10 },
            { id: "vercel-stage", title: "Vercel: The Stage", description: "Ship to the world.", xpReward: 10 },
            { id: "stack-assembly", title: "Assemble Your Stack", description: "Put it all together.", xpReward: 10 }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Phase 2: The Build",
      subtitle: "Build the Real SaaS",
      worlds: [
        {
          id: 4,
          phaseId: 2,
          slug: "the-brain-backend",
          title: "The Brain (Backend)",
          subtitle: "Don't learn SQL. Ask for data.",
          missions: [
            { id: "supabase-setup", title: "Supabase Setup", xpReward: 10 },
            { id: "schema-first", title: "Schema-First Design", description: "Generated by Claude", xpReward: 10 },
            { id: "env-vars", title: "Environment Variables", xpReward: 10 },
            { id: "frontend-connection", title: "Connect Frontend ↔ Backend", xpReward: 10 }
          ],
          project: "Your first real app: a Waitlist app with database storage.",
          blackBox: {
            title: "SQL basics, Primary & Foreign Keys",
            description: "Database fundamentals."
          },
          secretDrop: {
            title: "Architecture Blueprint Method",
            description: "How to structure scalable apps."
          }
        },
        {
          id: 5,
          phaseId: 2,
          slug: "the-bouncer-auth",
          title: "The Bouncer (Auth)",
          subtitle: "Who gets in?",
          missions: [
            { id: "auth-provider", title: "Clerk or Supabase Auth", xpReward: 10 },
            { id: "route-protection", title: "Route Protection", xpReward: 10 },
            { id: "user-profiles", title: "User Profiles", xpReward: 10 }
          ],
          project: "Turn your Waitlist into a private dashboard.",
          blackBox: {
            title: "Sessions, cookies, JWTs",
            description: "Authentication mechanisms explained."
          }
        },
        {
          id: 6,
          phaseId: 2,
          slug: "the-magic-apis",
          title: "The Magic (APIs)",
          subtitle: "Your app gains superpowers",
          missions: [
            { id: "fetching-data", title: "Fetching External Data", xpReward: 10 },
            { id: "ai-connection", title: "Connecting OpenAI/Gemini", xpReward: 10 },
            { id: "streaming", title: "Streaming Text Animations", xpReward: 10 },
            { id: "webhooks", title: "Webhook Basics", xpReward: 10 }
          ],
          project: "Add an AI feature to your dashboard.",
          blackBox: {
            title: "HTTP Methods & Headers",
            description: "GET, POST, and request anatomy."
          }
        }
      ]
    },
    {
      id: 3,
      title: "Phase 3: The Grind",
      subtitle: "Where others quit. You won't.",
      worlds: [
        {
          id: 7,
          phaseId: 3,
          slug: "the-fixer-debugging",
          title: "The Fixer (Debugging)",
          subtitle: "The most important world.",
          missions: [
            { id: "recognizing-hallucinations", title: "Recognizing AI errors", xpReward: 10 },
            { id: "ai-fixes", title: "Using the AI to fix its own mistakes", xpReward: 10 },
            { id: "copy-paste-debug", title: "Copy-paste debugging", xpReward: 10 },
            { id: "git-save-game", title: "GitHub Desktop 'Save Game' strategy", xpReward: 10 }
          ],
          project: "We break a repo → You fix it with AI.",
          blackBox: {
            title: "Console errors",
            description: "Network tab"
          },
          secretDrop: {
            title: "No-Error Loop",
            description: "Systematic debugging workflow."
          }
        },
        {
          id: 8,
          phaseId: 3,
          slug: "the-polish-ui-ux",
          title: "The Polish (UI and UX)",
          subtitle: "Make it look expensive",
          missions: [
            { id: "shadcn-customization", title: "Customizing Shadcn", xpReward: 10 },
            { id: "mobile-fixes", title: "Mobile fixes", xpReward: 10 },
            { id: "responsiveness", title: "Responsiveness prompts", xpReward: 10 },
            { id: "dark-mode", title: "Dark mode toggle", xpReward: 10 },
            { id: "toasts", title: "Toasts and micro-interactions", xpReward: 10 }
          ],
          project: "UI Audit: Make your dashboard feel premium."
        }
      ]
    },
    {
      id: 4,
      title: "Phase 4: The Payday",
      subtitle: "The Business Layer",
      worlds: [
        {
          id: 9,
          phaseId: 4,
          slug: "the-cash-register",
          title: "The Cash Register",
          subtitle: "Let the app pay you",
          missions: [
            { id: "payment-provider", title: "Stripe vs LemonSqueezy", xpReward: 10 },
            { id: "checkout", title: "Setting up checkout", xpReward: 10 },
            { id: "paywalls", title: "Gating features behind paywall", xpReward: 10 },
            { id: "webhooks-pro", title: "Webhooks for 'Pro' status", xpReward: 10 }
          ],
          project: "Make yourself a real $1 payment.",
          blackBox: {
            title: "Signature verification",
            description: "Secure webhook patterns"
          }
        },
        {
          id: 10,
          phaseId: 4,
          slug: "the-launch",
          title: "THE LAUNCH",
          subtitle: "You unlock this world only by deploying the app.",
          lockedByDefault: true,
          missions: [
            { id: "domains", title: "Domain + DNS", xpReward: 10 },
            { id: "seo", title: "SEO optimization via AI", xpReward: 10 },
            { id: "opengraph", title: "Open Graph images", xpReward: 10 },
            { id: "posthog", title: "Posthog analytics setup", xpReward: 10 }
          ],
          project: "Deploy your SaaS and unlock your Founder Badge.",
          secretDrop: {
            title: "Golden Prompts Library download → Founder Protocol",
            description: "Unlock the complete library of prompts and the Founder Protocol when you complete this world."
          }
        },
        {
          id: 11,
          phaseId: 4,
          slug: "the-public-build-bonus",
          title: "The Public Build (Bonus)",
          subtitle: "The Growth Engine",
          missions: [
            { id: "recording-content", title: "How to record coding for content", xpReward: 10 },
            { id: "build-in-public", title: "Build-in-public templates", xpReward: 10 },
            { id: "distribution", title: "Distribution tactics", xpReward: 10 },
            { id: "community-flywheel", title: "Vibe Coder community flywheel", xpReward: 10 }
          ]
        }
      ]
    }
  ]
};

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
  project?: string;
  blackBox?: {
    title: string;
    description: string;
  };
  secretDrop?: {
    title: string;
    description: string;
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
          missions: [
            { id: "dictionary-of-power", title: "Dictionary of Power", xpReward: 10 },
            { id: "setup", title: "Setup", description: "Install Node, Install Cursor", xpReward: 10 }
          ],
          blackBox: {
            title: "HTML and DOM basics",
            description: "Understanding the building blocks of the web."
          }
        }
      ]
    },
    {
      id: 1,
      title: "Phase 1: Ignition",
      worlds: [
        {
          id: 1,
          phaseId: 1,
          slug: "vibe-philosophy",
          title: "The Vibe Philosophy",
          missions: [
            { id: "manifesto", title: "Manifesto", xpReward: 10 },
            { id: "tool-stack", title: "Tool Stack", xpReward: 10 },
            { id: "context-game", title: "Context Game", xpReward: 10 },
            { id: "hello-world", title: "Hello World", xpReward: 10 }
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
          missions: [
            { id: "composer-mastery", title: "Composer Mastery", xpReward: 10 },
            { id: "v0-to-code", title: "V0 to Code", xpReward: 10 },
            { id: "iterative-prompting", title: "Iterative Prompting", xpReward: 10 },
            { id: "landing-page-project", title: "Landing Page Project", xpReward: 10 }
          ],
          blackBox: {
            title: "React re renders and component fundamentals",
            description: "Understanding React's rendering lifecycle."
          },
          secretDrop: {
            title: "Prompt Transfusion System",
            description: "Advanced prompting techniques."
          }
        }
      ]
    },
    {
      id: 2,
      title: "Phase 2: The Build",
      worlds: [
        {
          id: 3,
          phaseId: 2,
          slug: "the-brain-backend",
          title: "The Brain (Backend)",
          missions: [
            { id: "supabase-setup", title: "Supabase Setup", xpReward: 10 },
            { id: "schema-first", title: "Schema First", xpReward: 10 },
            { id: "frontend-connection", title: "Frontend Connection", xpReward: 10 }
          ],
          blackBox: {
            title: "SQL basics, primary and foreign keys",
            description: "Database fundamentals."
          },
          secretDrop: {
            title: "Architecture Blueprint Method",
            description: "How to structure scalable apps."
          }
        },
        {
          id: 4,
          phaseId: 2,
          slug: "the-bouncer-auth",
          title: "The Bouncer (Auth)",
          missions: [
            { id: "clerk-or-supabase-auth", title: "Clerk or Supabase Auth", xpReward: 10 },
            { id: "route-protection", title: "Route Protection", xpReward: 10 },
            { id: "user-profiles", title: "User Profiles", xpReward: 10 }
          ],
          blackBox: {
            title: "Sessions, cookies, JWTs",
            description: "Authentication mechanisms explained."
          }
        },
        {
          id: 5,
          phaseId: 2,
          slug: "the-magic-apis",
          title: "The Magic (APIs)",
          missions: [
            { id: "fetching-data", title: "Fetching Data", xpReward: 10 },
            { id: "openai-connection", title: "OpenAI Connection", xpReward: 10 },
            { id: "webhooks", title: "Webhooks", xpReward: 10 }
          ],
          blackBox: {
            title: "HTTP methods and headers",
            description: "Understanding REST and requests."
          }
        }
      ]
    },
    {
      id: 3,
      title: "Phase 3: The Grind",
      worlds: [
        {
          id: 6,
          phaseId: 3,
          slug: "the-fixer-debugging",
          title: "The Fixer (Debugging)",
          missions: [
            { id: "recognizing-hallucinations", title: "Recognizing Hallucinations", xpReward: 10 },
            { id: "ai-fixes", title: "AI Fixes", xpReward: 10 },
            { id: "git-save-game", title: "Git Save Game", xpReward: 10 }
          ],
          blackBox: {
            title: "Console errors and Network tab",
            description: "Debugging tools in the browser."
          },
          secretDrop: {
            title: "No Error Loop",
            description: "Systematic debugging workflow."
          }
        },
        {
          id: 7,
          phaseId: 3,
          slug: "the-polish-ui-ux",
          title: "The Polish (UI and UX)",
          missions: [
            { id: "shadcn-customization", title: "Shadcn Customization", xpReward: 10 },
            { id: "dark-mode", title: "Dark Mode", xpReward: 10 },
            { id: "toasts", title: "Toasts", xpReward: 10 }
          ],
          project: "UI Audit"
        }
      ]
    },
    {
      id: 4,
      title: "Phase 4: The Payday",
      worlds: [
        {
          id: 8,
          phaseId: 4,
          slug: "the-cash-register",
          title: "The Cash Register",
          missions: [
            { id: "stripe-or-lemonsqueezy", title: "Stripe or LemonSqueezy", xpReward: 10 },
            { id: "paywalls", title: "Paywalls", xpReward: 10 }
          ],
          blackBox: {
            title: "Webhook security and signature verification",
            description: "Secure payment processing."
          }
        },
        {
          id: 9,
          phaseId: 4,
          slug: "the-launch",
          title: "The Launch",
          lockedByDefault: true,
          missions: [
            { id: "domains", title: "Domains", xpReward: 10 },
            { id: "seo", title: "SEO", xpReward: 10 },
            { id: "posthog", title: "Posthog", xpReward: 10 }
          ],
          secretDrop: {
            title: "Golden Prompts Library and Founder Protocol",
            description: "Launch resources."
          }
        },
        {
          id: 10,
          phaseId: 4,
          slug: "the-public-build-bonus",
          title: "The Public Build (Bonus)",
          missions: [
            { id: "recording-content", title: "Recording Content", xpReward: 10 },
            { id: "twitter-strategy", title: "Twitter Strategy", xpReward: 10 }
          ]
        }
      ]
    }
  ]
};


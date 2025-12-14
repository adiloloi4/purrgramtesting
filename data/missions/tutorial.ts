export type TextSlide = {
  id?: string;
  type: "text";
  title: string;
  body: string;
  image?: string;
  youtubeVideo?: string;
};

export type QuizOption = {
  id: string;
  label?: string; // Legacy
  text?: string;  // New
  correct?: boolean; // New
};

export type QuizSlide = {
  id?: string;
  type: "quiz";
  question: string; // Used by both (User schema says question, Old says question)
  options: QuizOption[];
  correctOptionId?: string; // Legacy
  correctExplanation?: string; // Legacy
  wrongExplanation?: string; // Legacy
};

export type DragDropCategory = {
  id: string;
  label: string;
};

export type DragDropItem = {
  id: string;
  label: string;
  correctCategoryId: string;
};

export type DragDropSlide = {
  id?: string;
  type: "dragDrop";
  prompt: string;
  categories: DragDropCategory[];
  items: DragDropItem[];
};

export type MatchingPair = {
  id: string;
  left: string;
  right: string;
};

export type MatchingSlide = {
  id?: string;
  type: "matching";
  prompt: string;
  pairs: MatchingPair[];
};

export type IdentifyItem = {
  id: string;
  text: string;
  correct: boolean;
};

export type IdentifySlide = {
  id?: string;
  type: "identify";
  prompt: string;
  options?: QuizOption[]; // Legacy
  items?: IdentifyItem[]; // New
  correctOptionId?: string; // Legacy
  correctExplanation?: string; // Legacy
  wrongExplanation?: string; // Legacy
};

export type ChecklistItem = {
  id: string;
  label: string;
};

export type ChecklistSlide = {
  id?: string;
  type: "checklist";
  title: string;
  prompt: string;
  items: ChecklistItem[];
};

export type TerminalSlide = {
  id?: string;
  type: "terminal";
  title: string;
  prompt: string;
  expectedCommand: string;
  successMessage: string;
};

export type SortingSlide = {
  id?: string;
  type: "sorting";
  prompt: string;
  items: string[];
  correctOrder: string[];
};

export type MiniChallengeSlide = {
  id?: string;
  type: "miniChallenge";
  title?: string; // New
  task?: string; // New
  example?: string; // New
  prompt?: string; // Legacy
  options?: QuizOption[]; // Legacy
  correctOptionId?: string; // Legacy
  correctExplanation?: string; // Legacy
  wrongExplanation?: string; // Legacy
};

export type CodeChallengeSlide = {
  id?: string;
  type: "codeChallenge";
  title: string;
  description: string;
  task: string;
  starterCode?: string;
  successCriteria: string[];
  hint?: string;
  example?: string;
};

export type MiniProjectSlide = {
  id?: string;
  type: "miniProject";
  title: string;
  description: string;
  steps: string[];
  checkpoints: {
    id: string;
    label: string;
    verification: string;
  }[];
  resources?: {
    label: string;
    url: string;
  }[];
};

export type BuildTaskSlide = {
  id?: string;
  type: "buildTask";
  title: string;
  description: string;
  task: string;
  expectedOutcome: string;
  verificationSteps: string[];
  tips?: string[];
};

export type MemoryGameSlide = {
  id?: string;
  type: "memoryGame";
  title: string;
  description: string;
  cards: {
    id: string;
    front: string;
    back: string;
    category?: string;
  }[];
  timeLimit?: number; // seconds
  requiredMatches?: number;
};

export type CodePuzzleSlide = {
  id?: string;
  type: "codePuzzle";
  title: string;
  description: string;
  puzzle: string; // Code with missing parts
  missingParts: {
    id: string;
    options: string[];
    correct: string;
    hint?: string;
  }[];
  timeLimit?: number;
};

export type TypingChallengeSlide = {
  id?: string;
  type: "typingChallenge";
  title: string;
  description: string;
  text: string; // Text to type
  timeLimit?: number;
  wpmTarget?: number;
};

export type SequenceGameSlide = {
  id?: string;
  type: "sequenceGame";
  title: string;
  description: string;
  items: {
    id: string;
    label: string;
    correctPosition: number;
  }[];
  hint?: string;
};

export type SpotTheBugSlide = {
  id?: string;
  type: "spotTheBug";
  title: string;
  description: string;
  code: string;
  bugs: {
    id: string;
    line: number;
    description: string;
    fix?: string;
  }[];
};

export type SpeedQuizSlide = {
  id?: string;
  type: "speedQuiz";
  title: string;
  description: string;
  questions: {
    id: string;
    question: string;
    options: QuizOption[];
    correct: string;
    timeLimit?: number; // seconds per question
  }[];
  totalTimeLimit?: number; // total time for all questions
  maxMistakes?: number; // if set, game resets after this many mistakes
};

export type InteractiveSimulationSlide = {
  id?: string;
  type: "interactiveSimulation";
  title: string;
  description: string;
  simulation: "dataFlow" | "componentTree" | "apiRequest" | "databaseQuery" | "custom";
  config: Record<string, unknown>;
  goal: string;
  steps: string[];
};

export type PromptGameSlide = {
  id?: string;
  type: "promptGame";
  title: string;
  description: string;
  scenarios: {
    id: string;
    task: string;
    badPrompt: string;
    goodPrompts: {
      id: string;
      text: string;
      explanation: string;
    }[];
    correctPromptId: string;
  }[];
  timeLimit?: number; // seconds per scenario
};

export type TutorialSlide =
  | TextSlide
  | QuizSlide
  | DragDropSlide
  | MatchingSlide
  | IdentifySlide
  | ChecklistSlide
  | TerminalSlide
  | SortingSlide
  | MiniChallengeSlide
  | CodeChallengeSlide
  | MiniProjectSlide
  | BuildTaskSlide
  | MemoryGameSlide
  | CodePuzzleSlide
  | TypingChallengeSlide
  | SequenceGameSlide
  | SpotTheBugSlide
  | SpeedQuizSlide
  | InteractiveSimulationSlide
  | PromptGameSlide;

export type TutorialMissionContent = {
  id: string;
  title: string;
  slides: TutorialSlide[];
};

export const tutorialMissions: TutorialMissionContent[] = [
  ////////////////////////////////////////////////////////
  // MISSION: what-is-vibe-coding
  ////////////////////////////////////////////////////////
  {
    id: "what-is-vibe-coding",
    title: "What is Vibe Coding?",
    slides: [
      {
        id: "wivc-1",
        type: "text",
        title: "Welcome to Vibe Coding",
        body:
          "Before you learn tools or code, you need to know what Vibe Coding actually is. This course is not about memorizing syntax. It is about building real products with AI as your co-builder."
      },
      {
        id: "wivc-2",
        type: "text",
        title: "Product First, Code Second",
        body:
          "A Vibe Coder starts from the product. You decide what you want to build, describe it clearly, and then use AI to generate, refine, and ship features. You learn by building, not by watching endless tutorials."
      },
      {
        id: "wivc-3",
        type: "text",
        title: "No Experience Required",
        body:
          "You do not need a computer science degree. You do not need to know how to write perfect code. You only need curiosity, consistency, and the willingness to ship imperfect versions and learn from them."
      },
      {
        id: "wivc-4",
        type: "quiz",
        question: "Which description fits Vibe Coding best?",
        options: [
          { id: "a", label: "Learning to write perfect code by hand." },
          { id: "b", label: "Building products fast with AI assistance." },
          { id: "c", label: "Memorizing syntax and design patterns." }
        ],
        correctOptionId: "b",
        correctExplanation:
          "Exactly. Vibe Coding is about using AI to build real products quickly, not about memorizing code.",
        wrongExplanation:
          "Not quite. Vibe Coding is not about perfection or memorization. It is about building real products with AI."
      },
      {
        id: "wivc-5",
        type: "miniChallenge",
        prompt:
          "Who is acting like a real Vibe Coder?",
        options: [
          { id: "a", label: "I spent 6 months learning loops and never shipped anything." },
          { id: "b", label: "I used AI to build a landing page and dashboard this week." },
          { id: "c", label: "I watch coding tutorials every day but still have no project." }
        ],
        correctOptionId: "b",
        correctExplanation:
          "Correct. A Vibe Coder learns by shipping features and products, not by staying in tutorial mode.",
        wrongExplanation:
          "Close, but the real Vibe Coder is the one who builds and ships, even if the code is not perfect."
      },
      {
        id: "wivc-6",
        type: "text",
        title: "What Phase 0 Gives You",
        body:
          "Phase 0 will not teach you prompts yet. Instead, it will give you a clear mental model of modern web apps and all the tools you will use later. After this world, nothing will feel mysterious anymore."
      },
      {
        id: "wivc-7",
        type: "memoryGame",
        title: "Vibe Coding Memory Challenge",
        description: "Match the concepts to test your understanding",
        cards: [
          { id: "commander", front: "Commander", back: "Direct AI to build products" },
          { id: "scribe", front: "Scribe", back: "Old way: memorizing syntax" },
          { id: "vision", front: "Vision", back: "You provide the product vision" },
          { id: "syntax", front: "Syntax", back: "AI writes the code" },
        ],
        timeLimit: 60,
      },
      {
        id: "wivc-8",
        type: "speedQuiz",
        title: "Vibe Coding Fundamentals Quiz",
        description: "Test your understanding of the entire Vibe Coding philosophy",
        questions: [
          {
            id: "q1",
            question: "Which description fits Vibe Coding best?",
            options: [
              { id: "a", label: "Learning to write perfect code by hand" },
              { id: "b", label: "Building products fast with AI assistance" },
              { id: "c", label: "Memorizing syntax and design patterns" },
            ],
            correct: "b",
            timeLimit: 15,
          },
          {
            id: "q2",
            question: "What do you need to start Vibe Coding?",
            options: [
              { id: "a", label: "4 years of CS degree" },
              { id: "b", label: "Curiosity, consistency, willingness to ship" },
              { id: "c", label: "Perfect code knowledge" },
            ],
            correct: "b",
            timeLimit: 15,
          },
        ],
      }
    ]
  },

  ////////////////////////////////////////////////////////
  // MISSION: overview-restaurant
  ////////////////////////////////////////////////////////
  {
    id: "overview-restaurant",
    title: "Overview: The Restaurant Analogy",
    slides: [
      {
        id: "or-1",
        type: "text",
        title: "Apps Are Like Restaurants",
        body:
          "Every modern app works like a restaurant. There is a place where the user interacts, a place where work gets done, a menu of allowed actions, storage for ingredients, and a way to serve everything to the world."
      },
      {
        id: "or-2",
        type: "text",
        title: "Frontend = Waiter",
        body:
          "The frontend is like the waiter. It shows the menu, talks to the customer, and presents everything in a clean way. It does not cook the food. It just handles interaction and presentation."
      },
      {
        id: "or-3",
        type: "text",
        title: "Backend = Kitchen",
        body:
          "The backend is the kitchen. It receives orders, applies logic, runs operations, and prepares the response. This is where the real work happens, even if the user never sees it directly."
      },
      {
        id: "or-4",
        type: "text",
        title: "API = Menu",
        body:
          "The API is the menu. It defines what can be ordered. The frontend is only allowed to ask for what the API exposes. This keeps the system consistent and safe."
      },
      {
        id: "or-5",
        type: "text",
        title: "Database = Fridge",
        body:
          "The database is the fridge and storage room. All ingredients and user data live there. When the backend needs information, it fetches it from the database and updates it when things change."
      },
      {
        id: "or-6",
        type: "text",
        title: "Auth = Manager",
        body:
          "Authentication is like the restaurant manager. It decides who can enter, who can see what, and who is allowed to perform certain actions."
      },
      {
        id: "or-7",
        type: "text",
        title: "Deployment = Delivery to the City",
        body:
          "Deployment is the process of making your app available to the world. Platforms like Vercel are the delivery networks that serve your app to users across the globe."
      },
      {
        id: "or-8",
        type: "text",
        title: "Dev Tools = Staff Room",
        body:
          "Tools like Node, GitHub Desktop, and Cursor are the staff tools. They help you run, version, and edit your app. Users never see them, but they are critical for building."
      },
      {
        id: "or-9",
        type: "dragDrop",
        prompt: "Drag each restaurant role into the correct tech category.",
        categories: [
          { id: "frontend", label: "Frontend" },
          { id: "backend", label: "Backend" },
          { id: "api", label: "API" },
          { id: "db", label: "Database" },
          { id: "auth", label: "Auth" },
          { id: "deploy", label: "Deployment" }
        ],
        items: [
          { id: "waiter", label: "Waiter", correctCategoryId: "frontend" },
          { id: "kitchen", label: "Kitchen", correctCategoryId: "backend" },
          { id: "menu", label: "Menu", correctCategoryId: "api" },
          { id: "fridge", label: "Fridge", correctCategoryId: "db" },
          { id: "manager", label: "Manager", correctCategoryId: "auth" },
          { id: "truck", label: "Delivery Truck", correctCategoryId: "deploy" }
        ]
      },
      {
        id: "or-10",
        type: "text",
        title: "Your Mental Map",
        body:
          "This analogy is your mental map. Phase 0 will now go through each part one by one so that you deeply understand what it is, which tools belong to it, and how they fit together."
      },
      {
        id: "or-11",
        type: "sequenceGame",
        title: "Order the Data Flow",
        description: "Arrange the steps in the correct order of how data flows through an app",
        items: [
          { id: "user", label: "User clicks button", correctPosition: 0 },
          { id: "frontend", label: "Frontend sends request", correctPosition: 1 },
          { id: "api", label: "API processes request", correctPosition: 2 },
          { id: "backend", label: "Backend handles logic", correctPosition: 3 },
          { id: "database", label: "Database stores/retrieves data", correctPosition: 4 },
          { id: "response", label: "Response sent back to user", correctPosition: 5 },
        ],
        hint: "Start with user interaction, end with the response",
      },
      {
        id: "or-12",
        type: "memoryGame",
        title: "Restaurant Analogy Memory Game",
        description: "Match each app component to its restaurant equivalent",
        cards: [
          { id: "frontend", front: "Frontend", back: "The Waiters (what customers interact with)" },
          { id: "backend", front: "Backend", back: "The Kitchen (where work happens)" },
          { id: "database", front: "Database", back: "The Fridge (storage for data)" },
          { id: "api", front: "API", back: "The Menu (contract of what's available)" },
          { id: "auth", front: "Auth", back: "The Manager (controls access)" },
          { id: "deployment", front: "Deployment", back: "Food Delivery (makes it accessible)" },
        ],
        timeLimit: 60,
      },
      {
        id: "or-13",
        type: "promptGame",
        title: "Perfect Prompt Practice",
        description: "Learn to write better prompts by choosing the best option for each scenario",
        timeLimit: 30,
        scenarios: [
          {
            id: "scenario-1",
            task: "You want to create a login button component",
            badPrompt: "Make a button",
            goodPrompts: [
              {
                id: "good-1",
                text: "Create a login button component using React and Tailwind. It should be purple, have hover effects, and show a loading state when clicked.",
                explanation: "Perfect! This includes Persona (React/Tailwind), Problem (login button), and Product (specific styling and behavior)."
              },
              {
                id: "good-2",
                text: "Button for login",
                explanation: "Too vague. Missing specific details about styling, framework, and behavior."
              },
              {
                id: "good-3",
                text: "I need a button that users can click to log in to my app. Make it look nice.",
                explanation: "Better than bad, but still lacks technical details like framework, styling approach, and specific requirements."
              }
            ],
            correctPromptId: "good-1"
          },
          {
            id: "scenario-2",
            task: "You want to fix a bug where the user profile doesn't load",
            badPrompt: "Fix the bug",
            goodPrompts: [
              {
                id: "good-4",
                text: "The user profile page shows a loading spinner forever. Check @UserProfile.tsx and @api/users/route.ts. The error in console says 'Cannot read property of undefined'. Fix the data fetching logic.",
                explanation: "Excellent! Includes context files (@), specific error message, and what to fix. This gives AI everything it needs."
              },
              {
                id: "good-5",
                text: "Profile page broken, fix it",
                explanation: "Too vague. No context, no error details, no file references."
              },
              {
                id: "good-6",
                text: "The profile page has an issue. Can you look at the UserProfile component and see what's wrong?",
                explanation: "Better, but missing specific error details and file context (@ references) that would help AI diagnose faster."
              }
            ],
            correctPromptId: "good-4"
          },
          {
            id: "scenario-3",
            task: "You want to add dark mode to your app",
            badPrompt: "Add dark mode",
            goodPrompts: [
              {
                id: "good-7",
                text: "Add dark mode toggle using next-themes. Add it to the navbar. It should persist across page reloads and have smooth transitions. Use the existing color scheme from @globals.css.",
                explanation: "Perfect! Includes library (next-themes), location (navbar), requirements (persist, transitions), and context file (@globals.css)."
              },
              {
                id: "good-8",
                text: "Make it dark",
                explanation: "Way too vague. No implementation details, no library choice, no location specified."
              },
              {
                id: "good-9",
                text: "I want dark mode for my Next.js app. Can you add a toggle somewhere?",
                explanation: "Better, but missing specific library choice, exact location, and context files that would help AI implement it correctly."
              }
            ],
            correctPromptId: "good-7"
          }
        ]
      }
    ]
  },

  ////////////////////////////////////////////////////////
  // MISSION: frontend-fundamentals
  ////////////////////////////////////////////////////////
  {
    id: "frontend-fundamentals",
    title: "Frontend Fundamentals",
    slides: [
      {
        id: "ff-1",
        type: "text",
        title: "Build, Don't Memorize",
        body:
          "You don't need to memorize what frontend is. You need to know how to build it. Let's start with real prompts that work."
      },
      {
        id: "ff-2",
        type: "buildTask",
        title: "Your First Component",
        description: "Build a button component using Cursor",
        task: "Open Cursor. Create a new file called Button.tsx. Paste this prompt: 'Create a React button component using Tailwind CSS. It should be purple, have a hover effect, and accept children as text. Export it as a default export.'",
        expectedOutcome: "A working Button component that you can import and use",
        verificationSteps: [
          "Created Button.tsx file",
          "Component uses Tailwind classes",
          "Button is purple with hover effect",
          "Component accepts children prop",
          "You can import and use it in another file"
        ],
        tips: [
          "Just copy the prompt exactly into Cursor",
          "Let AI generate the code",
          "Check if it works by importing it",
          "If it doesn't work, ask AI to fix it"
        ]
      },
      {
        id: "ff-3",
        type: "text",
        title: "Real Prompt Example",
        body:
          "Here's what a good prompt looks like:\n\n'Create a login form component in React with Tailwind. Include email and password fields, a submit button, and basic validation. Use useState for form state. Make it look modern and clean.'\n\nNotice: It's specific. It mentions the tech stack. It says what you want. That's all you need."
      },
      {
        id: "ff-4",
        type: "buildTask",
        title: "Build a Card Component",
        description: "Practice with another real prompt",
        task: "In Cursor, create Card.tsx. Use this prompt: 'Create a card component with an image at the top, title, description, and a button at the bottom. Use Tailwind for styling. Make it responsive. The card should have a subtle shadow and rounded corners.'",
        expectedOutcome: "A reusable Card component",
        verificationSteps: [
          "Card has image, title, description, button",
          "Uses Tailwind styling",
          "Has shadow and rounded corners",
          "Works on mobile (responsive)"
        ],
        tips: [
          "Copy the prompt word-for-word",
          "Let AI do the work",
          "Test it by using it in a page"
        ]
      },
      {
        id: "ff-5",
        type: "promptGame",
        title: "Better Prompts = Better Results",
        description: "Practice writing prompts that actually work",
        timeLimit: 30,
        scenarios: [
          {
            id: "scenario-1",
            task: "You want to create a navigation bar",
            badPrompt: "Make a navbar",
            goodPrompts: [
              {
                id: "good-1",
                text: "Create a responsive navigation bar component with a logo on the left, menu items in the center, and a login button on the right. Use Tailwind CSS. Make it sticky at the top. Add a mobile hamburger menu.",
                explanation: "Perfect! Specific layout, tech stack, behavior (sticky), and mobile consideration."
              },
              {
                id: "good-2",
                text: "Navigation bar please",
                explanation: "Too vague. No details about layout, styling, or behavior."
              },
              {
                id: "good-3",
                text: "I need a navbar for my website with some links",
                explanation: "Better, but missing specific requirements like layout, styling approach, and mobile support."
              }
            ],
            correctPromptId: "good-1"
          }
        ]
      },
      {
        id: "ff-6",
        type: "buildTask",
        title: "Build a Landing Page Hero",
        description: "Use v0 or Cursor to generate a hero section",
        task: "Go to v0.dev or use Cursor. Prompt: 'Create a hero section for a SaaS landing page. Include a headline, subheadline, two CTA buttons (primary and secondary), and a hero image placeholder. Use Tailwind. Make it look like Stripe or Vercel - clean and modern.'",
        expectedOutcome: "A hero section you can copy into your project",
        verificationSteps: [
          "Has headline and subheadline",
          "Two buttons (primary/secondary styles)",
          "Image placeholder",
          "Modern, clean design",
          "You can copy the code"
        ],
        tips: [
          "v0.dev is great for generating sections",
          "Copy the code it generates",
          "Paste into your project",
          "Adjust colors/styling if needed"
        ]
      },
      {
        id: "ff-7",
        type: "text",
        title: "That's It",
        body:
          "You just learned frontend by building. No theory. No memorization. Just prompts and results. This is vibe coding."
      }
    ]
  },

  ////////////////////////////////////////////////////////
  // MISSION: backend-fundamentals
  ////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////
  // MISSION: backend-fundamentals
  ////////////////////////////////////////////////////////
  {
    id: "backend-fundamentals",
    title: "Backend Fundamentals",
    slides: [
      {
        id: "bf-1",
        type: "text",
        title: "Use Supabase. That's It.",
        body:
          "For vibe coding, use Supabase. It's database + auth + APIs in one. No need to learn the theory. Just set it up and use it."
      },
      {
        id: "bf-2",
        type: "buildTask",
        title: "Set Up Supabase",
        description: "Create your Supabase project",
        task: "1. Go to supabase.com and sign up\n2. Create a new project\n3. Copy your project URL and anon key\n4. Create a .env.local file in your project\n5. Add: NEXT_PUBLIC_SUPABASE_URL=your-url and NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key",
        expectedOutcome: "Supabase project created and connected to your app",
        verificationSteps: [
          "Supabase account created",
          "New project created",
          ".env.local file exists",
          "Environment variables added"
        ],
        tips: [
          "The URL and key are in Project Settings > API",
          "Never commit .env.local to git",
          "Add .env.local to .gitignore"
        ]
      },
      {
        id: "bf-3",
        type: "buildTask",
        title: "Create Your First Table",
        description: "Use AI to create a database table",
        task: "In Supabase dashboard, go to Table Editor. Click 'New Table'. In Cursor, ask: 'Help me create a users table in Supabase with columns: id (uuid, primary key), email (text, unique), name (text), created_at (timestamp). Write the SQL for me.' Copy the SQL into Supabase SQL Editor and run it.",
        expectedOutcome: "A users table in your Supabase database",
        verificationSteps: [
          "Table created in Supabase",
          "Has id, email, name, created_at columns",
          "id is primary key",
          "email is unique"
        ],
        tips: [
          "Just ask AI for the SQL",
          "Copy-paste into Supabase",
          "Don't worry about understanding SQL yet"
        ]
      },
      {
        id: "bf-4",
        type: "buildTask",
        title: "Connect Frontend to Backend",
        description: "Fetch data from Supabase",
        task: "In Cursor, create a file called lib/supabase.ts. Ask: 'Create a Supabase client for Next.js using @supabase/supabase-js. Use environment variables NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY. Export a function that returns the client.' Then create a page that fetches users: 'Create a page that fetches all users from the users table using the Supabase client and displays them in a list.'",
        expectedOutcome: "A page that shows data from your Supabase database",
        verificationSteps: [
          "supabase.ts file created",
          "Client uses environment variables",
          "Page fetches users",
          "Users display on the page"
        ],
        tips: [
          "Install @supabase/supabase-js first: npm install @supabase/supabase-js",
          "Let AI write the code",
          "Test by adding a user in Supabase dashboard"
        ]
      },
      {
        id: "bf-5",
        type: "text",
        title: "You Just Built a Backend",
        body:
          "That's it. You created a database, connected it, and fetched data. No theory. Just prompts and results. This is how you vibe code."
      }
    ]
  },

  ////////////////////////////////////////////////////////
  // MISSION: api-fundamentals
  ////////////////////////////////////////////////////////
  {
    id: "api-fundamentals",
    title: "API Fundamentals",
    slides: [
      {
        id: "af-1",
        type: "text",
        title: "APIs Are Contracts",
        body:
          "An API defines how different parts of your system talk to each other. It is a contract between the frontend and backend."
      },
      {
        id: "af-2",
        type: "text",
        title: "Requests and Responses",
        body:
          "A request is a question the frontend asks. A response is the answer from the backend. Most modern APIs return JSON."
      },
      {
        id: "af-3",
        type: "quiz",
        question: "Which HTTP method is usually used to create new data?",
        options: [
          { id: "a", label: "GET" },
          { id: "b", label: "POST" },
          { id: "c", label: "DELETE" }
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. POST is commonly used to create resources.",
        wrongExplanation: "Not quite. GET reads data, while POST usually creates it."
      },
      {
        id: "af-4",
        type: "identify",
        prompt:
          "Your frontend calls an endpoint to create a new task, and the backend answers with JSON that includes the new task id. Which part of the system is this endpoint?",
        options: [
          { id: "a", label: "The frontend component." },
          { id: "b", label: "The API." },
          { id: "c", label: "The database storage engine." }
        ],
        correctOptionId: "b",
        correctExplanation:
          "Exactly. The endpoint you call is part of the API. It receives requests and returns responses.",
        wrongExplanation:
          "Not quite. The endpoint itself is the API surface, not the UI or the low level database."
      },
      {
        id: "af-5",
        type: "text",
        title: "APIs You Will Use",
        body:
          "In this course you will mainly use two types of APIs: Supabase REST APIs for your own data, and the OpenAI API for AI features. Once you understand requests and responses, each new API feels familiar."
      },
      {
        id: "af-6",
        type: "memoryGame",
        title: "API Methods Memory Game",
        description: "Match the HTTP methods with their purposes",
        cards: [
          { id: "get", front: "GET", back: "Read data safely" },
          { id: "post", front: "POST", back: "Create new resources" },
          { id: "put", front: "PUT", back: "Update existing data" },
          { id: "delete", front: "DELETE", back: "Remove data" },
        ],
        timeLimit: 45,
      },
      {
        id: "af-7",
        type: "speedQuiz",
        title: "API Fundamentals Quiz",
        description: "Test your understanding of APIs, requests, and responses",
        questions: [
          {
            id: "q1",
            question: "What does API stand for?",
            options: [
              { id: "a", label: "Application Programming Interface" },
              { id: "b", label: "Advanced Programming Integration" },
              { id: "c", label: "Automated Program Interface" },
            ],
            correct: "a",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "In the restaurant analogy, what is the API?",
            options: [
              { id: "a", label: "The Chef" },
              { id: "b", label: "The Menu" },
              { id: "c", label: "The Waiter" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q3",
            question: "What does the Frontend send to the Backend?",
            options: [
              { id: "a", label: "A Request" },
              { id: "b", label: "A Response" },
              { id: "c", label: "A Database" },
            ],
            correct: "a",
            timeLimit: 12,
          },
        ],
      }
    ]
  },

  ////////////////////////////////////////////////////////
  // MISSION: database-fundamentals
  ////////////////////////////////////////////////////////
  {
    id: "database-fundamentals",
    title: "Database Fundamentals",
    slides: [
      {
        id: "df-1",
        type: "text",
        title: "The App's Memory",
        body:
          "The database is where your app stores data permanently: users, posts, subscriptions, events, and more. When the server restarts, the data is still there."
      },
      {
        id: "df-2",
        type: "text",
        title: "Tables, Rows, and Columns",
        body:
          "A table is like a spreadsheet. Each row is one record, like a single user. Each column is a field, like email or createdAt. This structure makes it easy to query and update data."
      },
      {
        id: "df-3",
        type: "quiz",
        question: "Where should you store user accounts so they are available next time they log in?",
        options: [
          { id: "a", label: "In frontend state only." },
          { id: "b", label: "In the database." },
          { id: "c", label: "In a random text file on your laptop." }
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. The database stores data permanently across sessions and devices.",
        wrongExplanation: "Not quite. Frontend state and random files are not reliable or persistent storage."
      },
      {
        id: "df-4",
        type: "dragDrop",
        prompt: "Drag each field into the table where it belongs.",
        categories: [
          { id: "users", label: "Users Table" },
          { id: "posts", label: "Posts Table" },
          { id: "payments", label: "Payments Table" }
        ],
        items: [
          { id: "item-1", label: "email", correctCategoryId: "users" },
          { id: "item-2", label: "display_name", correctCategoryId: "users" },
          { id: "item-3", label: "post_title", correctCategoryId: "posts" },
          { id: "item-4", label: "post_body", correctCategoryId: "posts" },
          { id: "item-5", label: "amount", correctCategoryId: "payments" },
          { id: "item-6", label: "currency", correctCategoryId: "payments" }
        ]
      },
      {
        id: "df-5",
        type: "miniChallenge",
        prompt:
          "You want to quickly add a database with auth and a simple dashboard for your SaaS. Which tool is usually the best default in this course?",
        options: [
          { id: "a", label: "Supabase" },
          { id: "b", label: "A CSV file on your desktop" },
          { id: "c", label: "A custom database engine you write from scratch" }
        ],
        correctOptionId: "a",
        correctExplanation:
          "Yes. Supabase gives you a hosted Postgres database plus auth and APIs out of the box.",
        wrongExplanation:
          "Not quite. For speed and reliability, Supabase is the recommended default."
      },
      {
        id: "df-6",
        type: "text",
        title: "Database Summary",
        body:
          "The database is the memory of your app. Supabase will be your main database in this course, but it is useful to know that tools like PlanetScale or Firebase exist for special use cases."
      },
      {
        id: "df-7",
        type: "spotTheBug",
        title: "Find the Database Bug",
        description: "Click on the line with the database error",
        code: "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(50),\n  email VARCHAR(100)\n);\n\nINSERT INTO users (name, email) VALUES\n  ('John', 'john@example.com'),\n  ('Jane', 'jane@example.com');\n\nSELECT * FROM users WHERE name = 'John'",
        bugs: [
          {
            id: "missing-id",
            line: 5,
            description: "Missing ID value in INSERT statement",
            fix: "INSERT INTO users (id, name, email) VALUES (1, 'John', 'john@example.com')",
          },
        ],
      },
      {
        id: "df-8",
        type: "memoryGame",
        title: "Database Concepts Memory Game",
        description: "Match database concepts to their definitions",
        cards: [
          { id: "persistence", front: "Persistence", back: "Data saved permanently (survives refresh)" },
          { id: "table", front: "Table", back: "Like a spreadsheet sheet (e.g., Users)" },
          { id: "row", front: "Row", back: "One item in a table (e.g., John Doe)" },
          { id: "column", front: "Column", back: "A property (e.g., Email)" },
          { id: "primary-key", front: "Primary Key", back: "Unique identifier for each row (like ID)" },
          { id: "supabase", front: "Supabase", back: "Built on PostgreSQL - powerful standard DB" },
        ],
        timeLimit: 60,
      }
    ]
  },

  ////////////////////////////////////////////////////////
  // MISSION: devtools-fundamentals
  ////////////////////////////////////////////////////////
  {
    id: "devtools-fundamentals",
    title: "Dev Tools & Workflow",
    slides: [
      {
        id: "dt-1",
        type: "text",
        title: "Node.js",
        body:
          "Node.js is the JavaScript runtime that lets your tools run scripts, install packages, and build your app. Many CLIs and dev tools rely on Node behind the scenes.",
        image: "https://nodejs.org/static/images/logo-hexagon-card.png",
        youtubeVideo: "https://www.youtube.com/watch?v=TlB_eWDSMt4"
      },
      {
        id: "dt-2",
        type: "text",
        title: "GitHub Desktop",
        body:
          "GitHub Desktop helps you track changes and create save points for your project. If something breaks, you can roll back to a previous commit, just like loading an older save in a game.",
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        youtubeVideo: "https://www.youtube.com/watch?v=77W2JSL7-r8"
      },
      {
        id: "dt-3",
        type: "text",
        title: "Vercel for Deployment",
        body:
          "Vercel is where you will deploy most of your apps. It connects directly to GitHub, builds your project, and serves it globally with almost no configuration."
      },
      {
        id: "dt-4",
        type: "text",
        title: "Cursor as Your IDE",
        body:
          "Cursor is your AI powered editor. It understands your codebase and helps you generate, refactor, and navigate code with context aware suggestions.",
        // Cursor IDE - add cursor-logo.png to /public folder for best results
        // Using placeholder for now - replace with actual Cursor logo image
        image: undefined,
        youtubeVideo: "https://www.youtube.com/watch?v=2aldTxnbNt0"
      },
      {
        id: "dt-5",
        type: "checklist",
        title: "Tool Setup Checklist",
        prompt: "Toggle each tool once you have it installed on your machine.",
        items: [
          { id: "node", label: "Node.js installed" },
          { id: "github-desktop", label: "GitHub Desktop installed" },
          { id: "cursor", label: "Cursor installed" }
        ]
      },
      {
        id: "dt-6",
        type: "terminal",
        title: "The Vibe Check",
        prompt: "Type the secret command to verify your setup.",
        expectedCommand: "vibe-check",
        successMessage: "SYSTEM READY. VIBE DETECTED."
      },
      {
        id: "dt-7",
        type: "typingChallenge",
        title: "Type the Dev Tools",
        description: "Type the command to check your Node.js version",
        text: "node --version",
        wpmTarget: 30,
      },
      {
        id: "dt-8",
        type: "sequenceGame",
        title: "Deployment Workflow",
        description: "Order the steps to deploy your app",
        items: [
          { id: "code", label: "Write code in Cursor", correctPosition: 0 },
          { id: "git", label: "Commit to GitHub", correctPosition: 1 },
          { id: "vercel", label: "Deploy to Vercel", correctPosition: 2 },
          { id: "live", label: "App goes live", correctPosition: 3 },
        ],
      }
    ]
  },

  ////////////////////////////////////////////////////////
  // MISSION: build-your-first-stack
  ////////////////////////////////////////////////////////
  {
    id: "build-first-stack", 
    title: "Build Your First Stack",
    slides: [
      {
        id: "bs-1",
        type: "text",
        title: "Time to Put It All Together",
        body:
          "You now know the main parts of modern apps and the tools that map to each layer. In this final mission, you will drag tools into the right categories to build a realistic Vibe Stack."
      },
      {
        id: "bs-2",
        type: "dragDrop",
        prompt:
          "Click tools to add them into any categories where they fit. Some tools belong to more than one layer, so you can use them in multiple boxes.",
        categories: [
          { id: "frontend", label: "Frontend" },
          { id: "backend", label: "Backend" },
          { id: "database", label: "Database" },
          { id: "api", label: "API" },
          { id: "auth", label: "Auth" },
          { id: "deploy", label: "Deployment" }
        ],
        items: [
          { id: "v0", label: "v0", correctCategoryId: "frontend" },
          { id: "base44", label: "Base44", correctCategoryId: "frontend" },
          { id: "lovable", label: "Lovable", correctCategoryId: "frontend" },
          { id: "cursor", label: "Cursor", correctCategoryId: "frontend" },
          { id: "supabase", label: "Supabase", correctCategoryId: "backend" },
          { id: "firebase", label: "Firebase", correctCategoryId: "backend" },
          { id: "appwrite", label: "Appwrite", correctCategoryId: "backend" },
          { id: "planetscale", label: "PlanetScale", correctCategoryId: "database" },
          { id: "vercel", label: "Vercel", correctCategoryId: "deploy" },
          { id: "cloudflare", label: "Cloudflare Pages", correctCategoryId: "deploy" },
          { id: "openai", label: "OpenAI API", correctCategoryId: "api" }
        ]
      },
      {
        id: "bs-3",
        type: "text",
        title: "Recommended Vibe Stack",
        body:
          "A strong default Vibe Stack for this course is: v0 or Cursor for frontend, Supabase for backend and database, Supabase Auth for auth, Supabase and OpenAI for APIs, and Vercel for deployment."
      },
      {
        id: "bs-4",
        type: "text",
        title: "You Are Ready for Phase 1",
        body:
          "You now understand what each part of your future app does and which tools you will use. Phase 1 will teach you how to actually drive these tools with AI and start building your SaaS."
      },
      {
        id: "bs-5",
        type: "memoryGame",
        title: "Stack Components Memory Game",
        description: "Match the stack components to their purposes",
        cards: [
          { id: "v0", front: "v0.dev", back: "Frontend component generator" },
          { id: "cursor", front: "Cursor", back: "AI-powered code editor" },
          { id: "supabase", front: "Supabase", back: "Backend infrastructure" },
          { id: "vercel", front: "Vercel", back: "Deployment platform" },
        ],
        timeLimit: 50,
      },
      {
        id: "bs-6",
        type: "speedQuiz",
        title: "The Golden Stack Quiz",
        description: "Test your knowledge of the complete Vibe Coding stack",
        questions: [
          {
            id: "q1",
            question: "What is the recommended frontend component generator?",
            options: [
              { id: "a", label: "v0.dev" },
              { id: "b", label: "GitHub" },
              { id: "c", label: "Excel" },
            ],
            correct: "a",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What is the recommended backend platform?",
            options: [
              { id: "a", label: "Supabase" },
              { id: "b", label: "MongoDB" },
              { id: "c", label: "WordPress" },
            ],
            correct: "a",
            timeLimit: 12,
          },
          {
            id: "q3",
            question: "What is the recommended deployment platform?",
            options: [
              { id: "a", label: "Vercel" },
              { id: "b", label: "GitHub" },
              { id: "c", label: "Google Drive" },
            ],
            correct: "a",
            timeLimit: 12,
          },
        ],
      }
    ]
  }
];

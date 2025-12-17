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
  icon?: string; // New
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
  hint?: string;
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
  icon?: string;
};

export type IdentifySlide = {
  id?: string;
  type: "identify";
  prompt: string;
  hint?: string;
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
        type: "matching",
        prompt: "Match the concepts to test your understanding",
        pairs: [
          { id: "commander", left: "Commander", right: "Direct AI to build products" },
          { id: "scribe", left: "Scribe", right: "Old way: memorizing syntax" },
          { id: "vision", left: "Vision", right: "You provide the product vision" },
          { id: "syntax", left: "Syntax", right: "AI writes the code" },
        ],
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
        type: "identify",
        prompt: "Which restaurant role matches Frontend?",
        hint: "Frontend is what users see and interact with - like the waiters who serve customers.",
        items: [
          { id: "waiter", text: "Waiter", correct: true },
          { id: "kitchen", text: "Kitchen", correct: false },
          { id: "menu", text: "Menu", correct: false },
          { id: "fridge", text: "Fridge", correct: false },
          { id: "manager", text: "Manager", correct: false },
          { id: "truck", text: "Delivery Truck", correct: false }
        ]
      },
      {
        id: "or-9b",
        type: "identify",
        prompt: "Which restaurant role matches Backend?",
        hint: "Backend is where the work happens behind the scenes - like the kitchen where food is prepared.",
        items: [
          { id: "waiter", text: "Waiter", correct: false },
          { id: "kitchen", text: "Kitchen", correct: true },
          { id: "menu", text: "Menu", correct: false },
          { id: "fridge", text: "Fridge", correct: false },
          { id: "manager", text: "Manager", correct: false },
          { id: "truck", text: "Delivery Truck", correct: false }
        ]
      },
      {
        id: "or-9c",
        type: "identify",
        prompt: "Which restaurant role matches API?",
        hint: "API defines what's available - like the menu that shows what can be ordered.",
        items: [
          { id: "waiter", text: "Waiter", correct: false },
          { id: "kitchen", text: "Kitchen", correct: false },
          { id: "menu", text: "Menu", correct: true },
          { id: "fridge", text: "Fridge", correct: false },
          { id: "manager", text: "Manager", correct: false },
          { id: "truck", text: "Delivery Truck", correct: false }
        ]
      },
      {
        id: "or-9d",
        type: "identify",
        prompt: "Which restaurant role matches Database?",
        hint: "Database stores data permanently - like the fridge that stores ingredients.",
        items: [
          { id: "waiter", text: "Waiter", correct: false },
          { id: "kitchen", text: "Kitchen", correct: false },
          { id: "menu", text: "Menu", correct: false },
          { id: "fridge", text: "Fridge", correct: true },
          { id: "manager", text: "Manager", correct: false },
          { id: "truck", text: "Delivery Truck", correct: false }
        ]
      },
      {
        id: "or-9e",
        type: "identify",
        prompt: "Which restaurant role matches Auth?",
        hint: "Auth controls who can access what - like the manager who decides who gets in.",
        items: [
          { id: "waiter", text: "Waiter", correct: false },
          { id: "kitchen", text: "Kitchen", correct: false },
          { id: "menu", text: "Menu", correct: false },
          { id: "fridge", text: "Fridge", correct: false },
          { id: "manager", text: "Manager", correct: true },
          { id: "truck", text: "Delivery Truck", correct: false }
        ]
      },
      {
        id: "or-9f",
        type: "identify",
        prompt: "Which restaurant role matches Deployment?",
        hint: "Deployment makes your app available to users - like the delivery truck that brings food to customers.",
        items: [
          { id: "waiter", text: "Waiter", correct: false },
          { id: "kitchen", text: "Kitchen", correct: false },
          { id: "menu", text: "Menu", correct: false },
          { id: "fridge", text: "Fridge", correct: false },
          { id: "manager", text: "Manager", correct: false },
          { id: "truck", text: "Delivery Truck", correct: true }
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
        type: "matching",
        prompt: "Match each app component to its restaurant equivalent",
        pairs: [
          { id: "frontend", left: "Frontend", right: "The Waiters (what customers interact with)" },
          { id: "backend", left: "Backend", right: "The Kitchen (where work happens)" },
          { id: "database", left: "Database", right: "The Fridge (storage for data)" },
          { id: "api", left: "API", right: "The Menu (contract of what's available)" },
          { id: "auth", left: "Auth", right: "The Manager (controls access)" },
          { id: "deployment", left: "Deployment", right: "Food Delivery (makes it accessible)" },
        ],
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
        youtubeVideo: "https://www.youtube.com/watch?v=lt5D2EWZMN0"
      },
      {
        id: "dt-2",
        type: "text",
        title: "GitHub Desktop",
        body:
          "GitHub Desktop helps you track changes and create save points for your project. If something breaks, you can roll back to a previous commit, just like loading an older save in a game.",
        youtubeVideo: "https://www.youtube.com/watch?v=G4SIIp14Xx4"
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
        youtubeVideo: "https://www.youtube.com/watch?v=mM97V2FSzHg"
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
        description: "Direct the AI to build a button",
        task: "Open Cursor's Chat (Cmd+L or Ctrl+L). Type this: 'Create a purple button component that I can click.'",
        expectedOutcome: "A button appears in your project",
        verificationSteps: [
          "You asked the AI to create it",
          "The AI wrote the code for you",
          "You can see the button file in your project"
        ],
        tips: [
          "Don't write any code yourself",
          "Just tell the AI what you want",
          "If it asks for details, say 'Make it look modern'"
        ]
      },
      {
        id: "ff-3",
        type: "text",
        title: "Real Prompt Example",
        body:
          "See? You didn't need to know React or Tailwind. You just described the result. That is Vibe Coding."
      },
      {
        id: "ff-4",
        type: "buildTask",
        title: "Build a Card Component",
        description: "Practice directing the AI again",
        task: "Tell the AI: 'Create a nice card component with an image, a title, and a description.'",
        expectedOutcome: "A reusable Card component",
        verificationSteps: [
          "You gave the instruction",
          "AI generated the component",
          "It looks like a card"
        ],
        tips: [
          "Be descriptive about the look if you want",
          "Trust the AI to handle the file creation"
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
        description: "Direct the AI to build a hero section",
        task: "Tell Cursor: 'Create a modern hero section for a SaaS app. It should have a big headline, a subheadline, and two buttons.'",
        expectedOutcome: "A hero section code block",
        verificationSteps: [
          "You see the code for a hero section",
          "It has the elements you asked for",
          "You didn't write it manually"
        ],
        tips: [
          "You can ask it to 'make it look like Stripe'",
          "You can ask for 'dark mode styles'"
        ]
      },
      {
        id: "ff-7",
        type: "text",
        title: "What is Terminal?",
        body:
          "Terminal (also called Command Line) is a text-based way to control your computer. Instead of clicking buttons, you type commands. It's how developers run their apps, install packages, and manage projects. Don't worry - you'll only need a few commands, and AI can help you with the rest."
      },
      {
        id: "ff-8",
        type: "terminal",
        title: "Start Your Development Server",
        prompt: "Open terminal in your project folder and type this command to start your development server:",
        expectedCommand: "npm run dev",
        successMessage: "Great! Your server is starting. Look for a URL like 'http://localhost:3000' in the output."
      },
      {
        id: "ff-9",
        type: "text",
        title: "Open Your App in Browser",
        body:
          "After running 'npm run dev', you'll see a URL like 'http://localhost:3000'. Open your browser (Chrome, Firefox, Safari, etc.) and type 'localhost:3000' in the address bar, then press Enter. You should see your app running! This is your local development environment - changes you make will automatically update here."
      },
      {
        id: "ff-10",
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
        type: "text",
        title: "Setting Up Supabase - Part 1",
        body: "Watch this video to learn how to create your Supabase project and get started.",
        youtubeVideo: "https://youtube.com/shorts/cZKdEeEf9Ro?si=OS-X28aarHBl9ZLa"
      },
      {
        id: "bf-2b",
        type: "text",
        title: "Setting Up Supabase - Part 2",
        body: "Watch this video to see how to configure your Supabase project.",
        youtubeVideo: "https://www.youtube.com/shorts/5TGNpSXAn7A"
      },
      {
        id: "bf-3",
        type: "buildTask",
        title: "Create Your First Table",
        description: "Ask AI to help you design your database",
        task: "In Cursor, ask: 'I need a Supabase table for users. What columns should I have? Please write the SQL for me.' Then copy the SQL it gives you into the Supabase SQL Editor.",
        expectedOutcome: "A users table created in your Supabase database",
        verificationSteps: [
          "You asked AI for the structure",
          "AI gave you the SQL code",
          "You ran it in Supabase",
          "The table exists"
        ],
        tips: [
          "You don't need to know SQL syntax",
          "AI handles the technical details",
          "You just verify the columns look right"
        ]
      },
      {
        id: "bf-3b",
        type: "text",
        title: "Understanding the Auth Tab",
        body: "The Auth tab manages user authentication - sign-ups, logins, and password resets. When users sign up, Supabase automatically creates them in the auth.users table. You can enable email/password, OAuth (Google, GitHub), or magic links. Supabase handles all the authentication logic for you."
      },
      {
        id: "bf-3c",
        type: "buildTask",
        title: "Get Your API Keys",
        description: "Find your connection keys in Supabase",
        task: "Go to Supabase Settings > API. Copy the 'Project URL' and the 'anon' public key. Paste them into your project's .env file (ask AI where that is if you don't know).",
        expectedOutcome: "API keys added to your project",
        verificationSteps: [
          "Found keys in Supabase",
          "Added them to .env.local",
          "AI helped you find the file"
        ],
        tips: [
          "These keys let your app talk to the database",
          "The 'anon' key is safe for the frontend",
          "AI can help you create the .env file"
        ]
      },
      {
        id: "bf-4",
        type: "buildTask",
        title: "Connect Frontend to Backend with AI",
        description: "Direct the AI to make the connection",
        task: "Tell Cursor: 'Connect my app to Supabase using the keys in .env.local. Create a page that lists all the users from my users table.'",
        expectedOutcome: "A page showing your database data",
        verificationSteps: [
          "You didn't write the connection code",
          "AI installed the libraries",
          "AI created the page",
          "You see data from Supabase"
        ],
        tips: [
          "If AI needs a library, it will tell you",
          "Just say 'Yes' or 'Run command' if it asks",
          "Focus on the result: seeing the data"
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
        type: "matching",
        prompt: "Match the HTTP methods with their purposes",
        pairs: [
          { id: "get", left: "GET", right: "Read data safely" },
          { id: "post", left: "POST", right: "Create new resources" },
          { id: "put", left: "PUT", right: "Update existing data" },
          { id: "delete", left: "DELETE", right: "Remove data" },
        ],
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
        title: "Find the Logic Bug",
        description: "Click on the line where the logic doesn't make sense",
        code: "function allowEntry(user) {\n  if (user.hasTicket) {\n    return \"Welcome in!\";\n  } else {\n    // Logic error here\n    return \"Welcome in!\";\n  }\n}",
        bugs: [
          {
            id: "logic-error",
            line: 5,
            description: "We are letting people in even if they don't have a ticket!",
            fix: "return \"Please buy a ticket first.\";",
          },
        ],
      },
      {
        id: "df-8",
        type: "identify",
        prompt: "What is Persistence?",
        hint: "Think about what happens to data when you refresh the page.",
        items: [
          { id: "permanent", text: "Data saved permanently (survives refresh)", correct: true },
          { id: "temporary", text: "Data lost when page refreshes", correct: false },
          { id: "encrypted", text: "Data is encrypted for security", correct: false },
          { id: "cached", text: "Data is cached in memory", correct: false }
        ]
      },
      {
        id: "df-9",
        type: "identify",
        prompt: "What is a Table?",
        hint: "Think of how data is organized in a spreadsheet.",
        items: [
          { id: "spreadsheet", text: "Like a spreadsheet sheet (e.g., Users)", correct: true },
          { id: "row", text: "One item in a table", correct: false },
          { id: "column", text: "A property like Email", correct: false },
          { id: "database", text: "The entire database system", correct: false }
        ]
      },
      {
        id: "df-10",
        type: "identify",
        prompt: "What is a Row?",
        hint: "Think about what represents a single record or item.",
        items: [
          { id: "one-item", text: "One item in a table (e.g., John Doe)", correct: true },
          { id: "property", text: "A property like Email", correct: false },
          { id: "sheet", text: "Like a spreadsheet sheet", correct: false },
          { id: "identifier", text: "Unique identifier for each row", correct: false }
        ]
      },
      {
        id: "df-11",
        type: "identify",
        prompt: "What is a Column?",
        hint: "Think about what represents a specific property or field.",
        items: [
          { id: "property", text: "A property (e.g., Email)", correct: true },
          { id: "one-item", text: "One item in a table", correct: false },
          { id: "sheet", text: "Like a spreadsheet sheet", correct: false },
          { id: "identifier", text: "Unique identifier for each row", correct: false }
        ]
      },
      {
        id: "df-12",
        type: "identify",
        prompt: "What is a Primary Key?",
        hint: "Think about what makes each row unique and identifiable.",
        items: [
          { id: "identifier", text: "Unique identifier for each row (like ID)", correct: true },
          { id: "property", text: "A property like Email", correct: false },
          { id: "one-item", text: "One item in a table", correct: false },
          { id: "database", text: "The entire database system", correct: false }
        ]
      },
      {
        id: "df-13",
        type: "identify",
        prompt: "What is Supabase?",
        hint: "Think about what database platform we use in this course.",
        items: [
          { id: "postgres", text: "Built on PostgreSQL - powerful standard DB", correct: true },
          { id: "spreadsheet", text: "Like a spreadsheet sheet", correct: false },
          { id: "property", text: "A property like Email", correct: false },
          { id: "identifier", text: "Unique identifier for each row", correct: false }
        ]
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
        type: "identify",
        prompt: "Which tool belongs to Frontend?",
        hint: "Frontend tools help you build what users see and interact with.",
        items: [
          { id: "v0", text: "v0", correct: true },
          { id: "cursor", text: "Cursor", correct: true },
          { id: "supabase", text: "Supabase", correct: false },
          { id: "vercel", text: "Vercel", correct: false }
        ]
      },
      {
        id: "bs-2b",
        type: "identify",
        prompt: "Which tool belongs to Backend?",
        hint: "Backend tools handle server logic and data processing.",
        items: [
          { id: "supabase", text: "Supabase", correct: true },
          { id: "v0", text: "v0", correct: false },
          { id: "vercel", text: "Vercel", correct: false },
          { id: "openai", text: "OpenAI API", correct: false }
        ]
      },
      {
        id: "bs-2c",
        type: "identify",
        prompt: "Which tool belongs to Database?",
        hint: "Database tools store and manage your data permanently.",
        items: [
          { id: "supabase", text: "Supabase", correct: true },
          { id: "v0", text: "v0", correct: false },
          { id: "vercel", text: "Vercel", correct: false },
          { id: "openai", text: "OpenAI API", correct: false }
        ]
      },
      {
        id: "bs-2d",
        type: "identify",
        prompt: "Which tool belongs to API?",
        hint: "API tools provide external services and data connections.",
        items: [
          { id: "openai", text: "OpenAI API", correct: true },
          { id: "supabase", text: "Supabase", correct: true },
          { id: "v0", text: "v0", correct: false },
          { id: "vercel", text: "Vercel", correct: false }
        ]
      },
      {
        id: "bs-2e",
        type: "identify",
        prompt: "Which tool belongs to Auth?",
        hint: "Auth tools handle user authentication and authorization.",
        items: [
          { id: "supabase", text: "Supabase", correct: true },
          { id: "v0", text: "v0", correct: false },
          { id: "vercel", text: "Vercel", correct: false },
          { id: "openai", text: "OpenAI API", correct: false }
        ]
      },
      {
        id: "bs-2f",
        type: "identify",
        prompt: "Which tool belongs to Deployment?",
        hint: "Deployment tools make your app available on the internet.",
        items: [
          { id: "vercel", text: "Vercel", correct: true },
          { id: "v0", text: "v0", correct: false },
          { id: "supabase", text: "Supabase", correct: false },
          { id: "openai", text: "OpenAI API", correct: false }
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
        type: "matching",
        prompt: "Match the stack components to their purposes",
        pairs: [
          { id: "v0", left: "v0.dev", right: "Frontend component generator" },
          { id: "cursor", left: "Cursor", right: "AI-powered code editor" },
          { id: "supabase", left: "Supabase", right: "Backend infrastructure" },
          { id: "vercel", left: "Vercel", right: "Deployment platform" },
        ],
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

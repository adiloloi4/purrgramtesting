import { MissionData } from "../world0";

export const mission02: MissionData = {
  id: "backend-fundamentals",
  title: "Backend Fundamentals",
  slides: [
    {
      type: "text",
      title: "The Logic Center",
      content:
        "The Backend is the brain. It runs on a server (a computer in the cloud) and handles secrets, business logic, and heavy processing that users shouldn't see.",
    },
    {
      type: "text",
      title: "Servers & Runtimes",
      content:
        "Code needs a place to run. Node.js is a 'Runtime' that lets JavaScript run on servers. Edge functions are tiny servers that run very close to the user for speed.",
    },
    {
      type: "text",
      title: "Endpoints",
      content:
        "An Endpoint is a specific URL where the backend listens for requests. Like '/api/login' or '/api/get-user'. It's a door into the kitchen.",
    },
    {
      type: "toggle_cards",
      title: "Backend Platforms (BaaS)",
      cards: [
        { id: "supabase", title: "Supabase (Recommended)", description: "Open source Firebase alternative. SQL-based, great Auth, real-time, and Edge Functions. The Vibe Coding default." },
        { id: "firebase", title: "Firebase", description: "Google's platform. Easy to start but can get expensive and locked-in. NoSQL based." },
        { id: "appwrite", title: "Appwrite", description: "Another open-source option. Good, but Supabase has better AI integration currently." },
        { id: "planetscale", title: "PlanetScale", description: "Pure database platform (MySQL). Amazing scaling, but no built-in Auth or Storage." }
      ]
    },
    {
      type: "text",
      title: "Why Supabase?",
      content:
        "For Vibe Coding, we choose Supabase because it uses PostgreSQL (standard SQL) which LLMs are very good at writing. It also combines Database, Auth, and APIs in one easy package.",
    },
    {
      type: "buildTask",
      title: "Set Up Your First Supabase Project",
      description: "Get hands-on with Supabase backend setup",
      task: "1. Go to supabase.com and create a free account. 2. Create a new project. 3. Copy your project URL and anon key. 4. Create a .env.local file in your Next.js project and add SUPABASE_URL and SUPABASE_ANON_KEY. This is your first backend connection.",
      expectedOutcome: "A Supabase project connected to your Next.js app",
      verificationSteps: [
        "Created Supabase account",
        "Created a new project",
        "Got project URL and anon key",
        "Created .env.local file",
        "Added environment variables",
        "Can access Supabase dashboard"
      ],
      tips: [
        "Sign up at supabase.com",
        "Create a new project (choose a region close to you)",
        "Go to Settings > API to find your keys",
        "Never commit .env.local to git"
      ],
    },
    {
      type: "text",
      title: "Secrets & Security",
      content:
        "The Backend must protect 'Secrets' - sensitive information like API keys, passwords, and payment tokens. These are like the restaurant's safe combination. If they were visible on the Frontend, anyone could steal them. The Backend keeps them hidden and secure.",
    },
    {
      type: "quiz",
      question: "Which of these should stay on the Backend (Hidden)?",
      options: [
        { id: "a", text: "The color of the button" },
        { id: "b", text: "Payment Secret Keys" },
        { id: "c", text: "The font size" },
      ],
      correct: "b",
      feedbackCorrect: "Absolutely. Secret keys and sensitive data must never live on the Frontend.",
      feedbackWrong: "Think about security. What would be dangerous if everyone saw it?",
    },
    {
      type: "quiz",
      question: "Which platform is recommended for Vibe Coding due to its SQL nature?",
      options: [
        { id: "a", text: "Supabase" },
        { id: "b", text: "MongoDB" },
        { id: "c", text: "Excel" },
      ],
      correct: "a",
      feedbackCorrect: "Correct. Supabase + Postgres is a superpower with AI.",
      feedbackWrong: "We want the one that uses PostgreSQL.",
    },
    {
      type: "codePuzzle",
      title: "Complete the Backend Code",
      description: "Fill in the blanks to create a secure backend endpoint",
      puzzle: "function handleRequest(req) {\n  const apiKey = process.env.__0__;\n  if (!apiKey) {\n    return { error: '__1__' };\n  }\n  return { success: true };\n}",
      missingParts: [
        {
          id: "env-var",
          options: ["API_KEY", "SECRET_KEY", "PASSWORD"],
          correct: "API_KEY",
          hint: "Environment variables store secrets",
        },
        {
          id: "error-msg",
          options: ["'Unauthorized'", "'Hello'", "'Success'"],
          correct: "'Unauthorized'",
          hint: "What error should you return when a key is missing?",
        },
      ],
    },
    {
      type: "memoryGame",
      title: "Backend Fundamentals Memory Game",
      description: "Match backend concepts to their definitions",
      cards: [
        { id: "backend", front: "Backend", back: "The brain - handles logic and secrets" },
        { id: "server", front: "Server", back: "Computer in the cloud that runs code" },
        { id: "nodejs", front: "Node.js", back: "Runtime that lets JavaScript run on servers" },
        { id: "endpoint", front: "Endpoint", back: "Specific URL where backend listens (like /api/login)" },
        { id: "supabase", front: "Supabase", back: "Recommended BaaS with PostgreSQL" },
        { id: "secrets", front: "Secrets", back: "Sensitive data like API keys (must stay hidden)" },
      ],
      timeLimit: 60,
    },
  ],
};

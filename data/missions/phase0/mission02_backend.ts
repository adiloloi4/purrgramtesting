import { MissionData } from "../world0";

export const mission02: MissionData = {
  id: "backend-fundamentals",
  title: "Backend Fundamentals",
  slides: [
    {
      type: "text",
      title: "The Logic Center",
      body:
        "The Backend is the brain. It runs on a server (a computer in the cloud) and handles secrets, business logic, and heavy processing that users shouldn't see.",
    },
    {
      type: "text",
      title: "Servers & Runtimes",
      body:
        "Code needs a place to run. Node.js is a 'Runtime' that lets JavaScript run on servers. Edge functions are tiny servers that run very close to the user for speed.",
    },
    {
      type: "text",
      title: "Endpoints",
      body:
        "An Endpoint is a specific URL where the backend listens for requests. Like '/api/login' or '/api/get-user'. It's a door into the kitchen.",
    },
    {
      type: "checklist",
      title: "Backend Platforms (BaaS)",
      prompt: "Compare the options.",
      items: [
        { id: "supabase", label: "Supabase (Recommended): Postgres + Auth + Realtime" },
        { id: "firebase", label: "Firebase: Google's NoSQL Platform" },
        { id: "appwrite", label: "Appwrite: Open Source Backend" },
        { id: "planetscale", label: "PlanetScale: MySQL Database" }
      ]
    },
    {
      type: "text",
      title: "Why Supabase?",
      body:
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
      body:
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
      correctOptionId: "b",
      correctExplanation: "Absolutely. Secret keys and sensitive data must never live on the Frontend.",
      wrongExplanation: "Think about security. What would be dangerous if everyone saw it?",
    },
    {
      type: "quiz",
      question: "Which platform is recommended for Vibe Coding due to its SQL nature?",
      options: [
        { id: "a", text: "Supabase" },
        { id: "b", text: "MongoDB" },
        { id: "c", text: "Excel" },
      ],
      correctOptionId: "a",
      correctExplanation: "Correct. Supabase + Postgres is a superpower with AI.",
      wrongExplanation: "We want the one that uses PostgreSQL.",
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
      type: "spotTheBug",
      title: "Security Audit",
      description: "Find the security leak in this frontend code",
      code: "function PaymentForm() {\n  // ❌ NEVER do this!\n  const secretKey = 'sk_live_12345secret';\n  \n  const handleSubmit = async () => {\n    await processPayment(secretKey);\n  };\n  \n  return <button onClick={handleSubmit}>Pay</button>;\n}",
      bugs: [
        {
          id: "exposed-secret",
          line: 3,
          description: "Secret Key exposed on the Frontend",
          fix: "const secretKey = process.env.PAYMENT_KEY; // But really, this should happen on the backend!",
        },
      ],
    },
  ],
};

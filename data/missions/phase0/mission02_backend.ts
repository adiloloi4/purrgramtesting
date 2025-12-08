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
  ],
};

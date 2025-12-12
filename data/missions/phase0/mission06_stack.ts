import { MissionData } from "../world0";

export const mission06: MissionData = {
  id: "build-first-stack",
  title: "Build Your First Stack",
  slides: [
    {
      type: "text",
      title: "The Final Challenge",
      content:
        "You have learned the components of a modern app. Now, prove your knowledge by assembling the ultimate Vibe Coding Stack.",
    },
    {
      type: "drag_and_drop",
      title: "Assemble the Stack",
      categories: ["Frontend", "Backend", "Database", "API", "Deployment", "Auth"],
      items: [
        { id: "v0", text: "v0.dev" },
        { id: "cursor", text: "Cursor" },
        { id: "supabase-func", text: "Supabase Functions" },
        { id: "supabase-db", text: "Supabase DB" },
        { id: "openai", text: "OpenAI API" },
        { id: "vercel", text: "Vercel" },
        { id: "supabase-auth", text: "Supabase Auth" },
      ],
      correctMapping: {
        "v0": "Frontend",
        "cursor": "Frontend", // or generic, but typically used for frontend logic in this context
        "supabase-func": "Backend",
        "supabase-db": "Database",
        "openai": "API",
        "vercel": "Deployment",
        "supabase-auth": "Auth",
      },
    },
    {
      type: "text",
      title: "Mission Complete",
      content:
        "You have selected the Golden Stack: Next.js (via Cursor/v0) + Supabase + Vercel. This stack powers million-dollar startups. You are now ready to build.",
    },
    {
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
      type: "speedQuiz",
      title: "The Golden Stack Quiz",
      description: "Test your knowledge of the complete Vibe Coding stack",
      questions: [
        {
          id: "q1",
          question: "What is the recommended frontend component generator?",
          options: [
            { id: "a", text: "v0.dev" },
            { id: "b", text: "GitHub" },
            { id: "c", text: "Excel" },
          ],
          correct: "a",
          timeLimit: 12,
        },
        {
          id: "q2",
          question: "What is the recommended backend platform?",
          options: [
            { id: "a", text: "Supabase" },
            { id: "b", text: "MongoDB" },
            { id: "c", text: "WordPress" },
          ],
          correct: "a",
          timeLimit: 12,
        },
        {
          id: "q3",
          question: "What is the recommended deployment platform?",
          options: [
            { id: "a", text: "Vercel" },
            { id: "b", text: "GitHub" },
            { id: "c", text: "Google Drive" },
          ],
          correct: "a",
          timeLimit: 12,
        },
        {
          id: "q4",
          question: "What powers million-dollar startups?",
          options: [
            { id: "a", text: "Next.js + Supabase + Vercel" },
            { id: "b", text: "Excel + Word" },
            { id: "c", text: "PowerPoint" },
          ],
          correct: "a",
          timeLimit: 12,
        },
      ],
    },
  ],
};


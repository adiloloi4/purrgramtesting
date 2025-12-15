import { MissionData } from "../world0";

export const mission06: MissionData = {
  id: "build-first-stack",
  title: "Build Your First Stack",
  slides: [
    {
      type: "text",
      title: "The Final Challenge",
      body:
        "You have learned the components of a modern app. Now, prove your knowledge by assembling the ultimate Vibe Coding Stack.",
    },
    {
      type: "dragDrop",
      prompt: "Assemble the Stack",
      categories: [
        { id: "Frontend", label: "Frontend" },
        { id: "Backend", label: "Backend" },
        { id: "Database", label: "Database" },
        { id: "API", label: "API" },
        { id: "Deployment", label: "Deployment" },
        { id: "Auth", label: "Auth" },
      ],
      items: [
        { id: "v0", label: "v0.dev", correctCategoryId: "Frontend" },
        { id: "cursor", label: "Cursor", correctCategoryId: "Frontend" },
        { id: "supabase-func", label: "Supabase Functions", correctCategoryId: "Backend" },
        { id: "supabase-db", label: "Supabase DB", correctCategoryId: "Database" },
        { id: "openai", label: "OpenAI API", correctCategoryId: "API" },
        { id: "vercel", label: "Vercel", correctCategoryId: "Deployment" },
        { id: "supabase-auth", label: "Supabase Auth", correctCategoryId: "Auth" },
      ],
    },
    {
      type: "text",
      title: "Mission Complete",
      body:
        "You have selected the Golden Stack: Next.js (via Cursor/v0) + Supabase + Vercel. This stack powers million-dollar startups. You are now ready to build.",
    },
    {
      type: "codePuzzle",
      title: "Configure the Stack Connection",
      description: "Fix the environment variable to connect the App to Supabase",
      puzzle: "const supabaseUrl = process.env.__0__;\nconst supabaseKey = process.env.__1__;\nconst supabase = createClient(supabaseUrl, supabaseKey);",
      missingParts: [
        {
          id: "url",
          options: ["NEXT_PUBLIC_SUPABASE_URL", "DB_PASSWORD", "LOCALHOST"],
          correct: "NEXT_PUBLIC_SUPABASE_URL",
          hint: "The URL needs to be public for the client",
        },
        {
          id: "key",
          options: ["NEXT_PUBLIC_SUPABASE_ANON_KEY", "SECRET_ADMIN_KEY", "123456"],
          correct: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
          hint: "The Anon key is safe for the browser",
        },
      ],
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


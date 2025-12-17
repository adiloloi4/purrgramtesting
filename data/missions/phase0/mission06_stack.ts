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
      description: "Match the keys to the right environment",
      puzzle: "// Browser (Frontend) needs: __0__\n// Server (Backend) needs: __1__",
      missingParts: [
        {
          id: "url",
          options: ["Public API Key (Safe to share)", "Secret Admin Key (Dangerous)"],
          correct: "Public API Key (Safe to share)",
          hint: "The frontend is visible to everyone.",
        },
        {
          id: "key",
          options: ["Secret Admin Key (Hidden)", "Public Key"],
          correct: "Secret Admin Key (Hidden)",
          hint: "The backend is hidden and secure.",
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


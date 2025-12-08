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
  ],
};


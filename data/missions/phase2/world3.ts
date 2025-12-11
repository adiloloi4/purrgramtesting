import { MissionData } from "../world0";

export const world3Missions: MissionData[] = [
  {
    id: "supabase-setup",
    title: "Supabase Setup",
    slides: [
      {
        type: "text",
        title: "Stop using localStorage",
        body: "Local storage is a toy. If you want a real startup, you need a shared brain. Supabase is that brain. It is an open-source Firebase alternative that gives you a Postgres database, Authentication, and APIs out of the box. Let's wire it up in 5 minutes.",
      },
      {
        type: "checklist",
        title: "Action: Create the Project",
        prompt: "Go to supabase.com and create a new project.",
        items: [
          { id: "signup", label: "Sign up & create project vibe-app" },
          { id: "keys", label: "Go to Settings > API" },
          { id: "copy", label: "Copy Project URL and anon public key" },
        ],
      },
      {
        type: "text",
        title: "Action: Paste the Keys",
        body: "Create a file named .env.local in your project root. Paste your keys exactly like this:\n\nNEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co\nNEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5...",
      },
      {
        type: "text",
        title: "Let the AI Connect It",
        body: "Don't write the connection code yourself. Copy this prompt into Cursor (Cmd+K):",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Create a utils/supabase/client.ts file that initializes a Supabase client using NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY from process.env. Export the createClient function.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Create a temporary page app/test-db/page.tsx that imports the client and logs console.log(supabase) to the browser console. If you see an object with 'auth' and 'from', you win.",
        example: "import { createClient } from '@/utils/supabase/client'; ... console.log(createClient());",
      },
    ],
  },
  {
    id: "schema-first",
    title: "Schema-First Design",
    slides: [
      {
        type: "text",
        title: "Don't build UI for nothing",
        body: "Rookie mistake: building buttons that do nothing. Vibe Coders design the data first. If you know what your data looks like, the AI can write the UI code 10x faster.",
      },
      {
        type: "text",
        title: "The Prompt is the Schema",
        body: "You don't need to know SQL. You just need to describe your app's nouns. Let's create a Tasks table.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Generate a SQL migration to create a tasks table. It should have:\n- id (uuid, primary key, default gen_random_uuid())\n- title (text, required)\n- is_complete (boolean, default false)\n- created_at (timestamp, default now())",
      },
      {
        type: "checklist",
        title: "Action: Run the SQL",
        prompt: "Go to Supabase Dashboard > SQL Editor.",
        items: [
          { id: "paste", label: "Paste the SQL Cursor gave you" },
          { id: "run", label: "Click RUN" },
          { id: "verify", label: "Check Table Editor to see tasks table" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Manually add one row to your new tasks table using the Supabase Table Editor. Title it Finish Phase 2.",
        example: "Go to Table Editor > tasks > Insert Row.",
      },
    ],
  },
  {
    id: "env-vars",
    title: "Environment Variables",
    slides: [
      {
        type: "text",
        title: "Don't leak your secrets",
        body: "If you hardcode API keys, you will get hacked. Bots scan GitHub every second. We use Environment Variables to keep secrets safe.",
      },
      {
        type: "quiz",
        question: "Which file is safe for secrets because it is ignored by Git?",
        options: [
          { id: "a", text: "package.json", correct: false },
          { id: "b", text: ".env.local", correct: true },
          { id: "c", text: "next.config.js", correct: false },
          { id: "d", text: "README.md", correct: false },
        ],
      },
      {
        type: "text",
        title: "The Golden Rule",
        body: "If a key starts with NEXT_PUBLIC_, it goes to the browser (visible to everyone). If it DOES NOT, it stays on the server (safe).",
      },
      {
        type: "identify",
        prompt: "Select the keys that are SAFE to put in client-side code:",
        items: [
          { id: "1", text: "NEXT_PUBLIC_SUPABASE_URL", correct: true },
          { id: "2", text: "OPENAI_SECRET_KEY", correct: false },
          { id: "3", text: "STRIPE_SECRET_KEY", correct: false },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Check your .gitignore file. Confirm that .env.local is listed there. If not, add it immediately.",
        example: "cat .gitignore",
      },
    ],
  },
  {
    id: "frontend-connection",
    title: "Connect Frontend ↔ Backend",
    slides: [
      {
        type: "text",
        title: "The Smoke Test",
        body: "We have a database. We have a client. Now let's prove they can talk. We'll fetch that Finish Phase 2 task you created earlier.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Create a Server Component app/tasks/page.tsx. Use the Supabase client to fetch all rows from the tasks table and display them as a simple list. Use Tailwind for basic styling.",
      },
      {
        type: "text",
        title: "Why Server Components?",
        body: "By fetching data in a Server Component, your API keys never leave the server (if you used the secret ones), and the data arrives fully rendered. It's fast and SEO friendly.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Visit http://localhost:3000/tasks. Do you see Finish Phase 2? If yes, you just built a full stack app.",
        example: "If you see an empty list, make sure you actually inserted a row in Supabase!",
      },
    ],
  },
];

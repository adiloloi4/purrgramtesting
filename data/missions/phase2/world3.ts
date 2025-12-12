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
      {
        type: "memoryGame",
        title: "Supabase Setup Memory Game",
        description: "Match Supabase concepts to their purposes",
        cards: [
          { id: "supabase", front: "Supabase", back: "Open-source Firebase alternative with Postgres" },
          { id: "project-url", front: "Project URL", back: "Your database connection endpoint" },
          { id: "anon-key", front: "Anon Key", back: "Public key for client-side access" },
          { id: "env-local", front: ".env.local", back: "File for storing secrets (ignored by Git)" },
          { id: "client", front: "Supabase Client", back: "Object with 'auth' and 'from' methods" },
        ],
        timeLimit: 60,
      },
      {
        type: "sequenceGame",
        title: "Supabase Setup Workflow",
        description: "Order the steps to set up Supabase",
        items: [
          { id: "signup", label: "Sign up & create project on supabase.com", correctPosition: 0 },
          { id: "keys", label: "Copy Project URL and anon key from Settings", correctPosition: 1 },
          { id: "env", label: "Add keys to .env.local file", correctPosition: 2 },
          { id: "client", label: "Create Supabase client using the keys", correctPosition: 3 },
        ],
        hint: "Start with signing up, end with creating the client",
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
      {
        type: "codePuzzle",
        title: "Complete the Schema Prompt",
        description: "Fill in the blanks to create a proper schema description",
        puzzle: "Generate a SQL migration to create a __0__ table. It should have:\n- id (__1__, primary key, default gen_random_uuid())\n- title (__2__, required)\n- is_complete (__3__, default false)\n- created_at (__4__, default now())",
        missingParts: [
          {
            id: "table-name",
            options: ["tasks", "users", "posts"],
            correct: "tasks",
            hint: "What table are we creating?",
          },
          {
            id: "id-type",
            options: ["uuid", "int", "string"],
            correct: "uuid",
            hint: "What type is the ID?",
          },
          {
            id: "title-type",
            options: ["text", "number", "boolean"],
            correct: "text",
            hint: "What type is the title?",
          },
          {
            id: "complete-type",
            options: ["boolean", "text", "number"],
            correct: "boolean",
            hint: "What type tracks completion?",
          },
          {
            id: "timestamp-type",
            options: ["timestamp", "text", "number"],
            correct: "timestamp",
            hint: "What type stores dates?",
          },
        ],
      },
      {
        type: "memoryGame",
        title: "Schema-First Design Memory Game",
        description: "Match schema concepts to their definitions",
        cards: [
          { id: "schema-first", front: "Schema-First Design", back: "Design data structure before building UI" },
          { id: "table", front: "Table", back: "Collection of rows (like a spreadsheet)" },
          { id: "primary-key", front: "Primary Key", back: "Unique identifier (id with uuid)" },
          { id: "migration", front: "SQL Migration", back: "Script that creates/modifies database structure" },
        ],
        timeLimit: 50,
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
      {
        type: "speedQuiz",
        title: "Environment Variables Quiz",
        description: "Test your understanding of secrets and environment variables",
        questions: [
          {
            id: "q1",
            question: "Which file is safe for secrets?",
            options: [
              { id: "a", text: ".env.local" },
              { id: "b", text: "package.json" },
              { id: "c", text: "next.config.js" },
            ],
            correct: "a",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What prefix makes a variable visible to the browser?",
            options: [
              { id: "a", text: "NEXT_PUBLIC_" },
              { id: "b", text: "SECRET_" },
              { id: "c", text: "PRIVATE_" },
            ],
            correct: "a",
            timeLimit: 12,
          },
          {
            id: "q3",
            question: "Where should secret keys like OPENAI_SECRET_KEY go?",
            options: [
              { id: "a", text: "Client-side code" },
              { id: "b", text: "Server-side only (no NEXT_PUBLIC_)" },
              { id: "c", text: "In GitHub README" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
      {
        type: "memoryGame",
        title: "Environment Variables Memory Game",
        description: "Match variable types to their security levels",
        cards: [
          { id: "public", front: "NEXT_PUBLIC_*", back: "Visible to browser (safe for public keys)" },
          { id: "secret", front: "No prefix (secret)", back: "Server-side only (keep private)" },
          { id: "env-local", front: ".env.local", back: "File for secrets (ignored by Git)" },
          { id: "gitignore", front: ".gitignore", back: "Prevents secrets from being committed" },
        ],
        timeLimit: 50,
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
      {
        type: "sequenceGame",
        title: "Frontend-Backend Connection Flow",
        description: "Order the steps of connecting frontend to backend",
        items: [
          { id: "database", label: "Create database table in Supabase", correctPosition: 0 },
          { id: "client", label: "Set up Supabase client", correctPosition: 1 },
          { id: "server-component", label: "Create Server Component to fetch data", correctPosition: 2 },
          { id: "display", label: "Display data in the UI", correctPosition: 3 },
        ],
        hint: "Start with database, end with displaying",
      },
      {
        type: "memoryGame",
        title: "Full Stack Connection Memory Game",
        description: "Match concepts to their roles in full stack apps",
        cards: [
          { id: "server-component", front: "Server Component", back: "Fetches data on server (fast & secure)" },
          { id: "supabase-client", front: "Supabase Client", back: "Connects to database" },
          { id: "fetch", front: "Fetch Data", back: "Retrieve rows from database table" },
          { id: "display", front: "Display UI", back: "Show data to user in browser" },
        ],
        timeLimit: 50,
      },
    ],
  },
  {
    id: "database-queries",
    title: "Querying Your Database",
    slides: [
      {
        type: "text",
        title: "Ask for What You Need",
        body: "You don't need to learn SQL syntax. You just need to describe what data you want. The Supabase client has methods that feel like English.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Show me how to query the tasks table to get only incomplete tasks, ordered by created_at descending. Use Supabase's .from() and .select() methods.",
      },
      {
        type: "codeChallenge",
        title: "Build a Filter Component",
        description: "Create a component that filters tasks by completion status",
        task: "Build a React component that uses Supabase to fetch tasks. Add a toggle to show only incomplete tasks. When toggled, it should filter the results.",
        starterCode: "const [showIncomplete, setShowIncomplete] = useState(false);\n// Your code here",
        successCriteria: [
          "Component fetches tasks from Supabase",
          "Toggle button switches between all/incomplete",
          "Filtering works correctly",
          "UI updates when toggle changes"
        ],
        hint: "Use .eq('is_complete', false) to filter incomplete tasks",
      },
      {
        type: "memoryGame",
        title: "Database Queries Memory Game",
        description: "Match query methods to their purposes",
        cards: [
          { id: "from", front: ".from()", back: "Select which table to query" },
          { id: "select", front: ".select()", back: "Choose which columns to return" },
          { id: "eq", front: ".eq()", back: "Filter where column equals value" },
          { id: "order", front: ".order()", back: "Sort results by column" },
        ],
        timeLimit: 50,
      },
    ],
  },
  {
    id: "realtime-updates",
    title: "Real-time Data Updates",
    slides: [
      {
        type: "text",
        title: "Live Data is Magic",
        body: "Supabase can push updates to your app in real-time. When someone adds a task, your screen updates instantly. No refresh needed.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Add real-time subscription to the tasks table. When a new task is added, update the UI automatically. Use Supabase's .on('INSERT') method.",
      },
      {
        type: "buildTask",
        title: "Build Real-time Task List",
        description: "Create a task list that updates in real-time",
        task: "Build a component that subscribes to task changes. When you add a task in Supabase dashboard, it should appear in your app without refreshing.",
        expectedOutcome: "Task list updates automatically when data changes in database",
        verificationSteps: [
          "Component subscribes to task changes",
          "New tasks appear without refresh",
          "Updated tasks reflect changes",
          "Deleted tasks disappear automatically"
        ],
        tips: [
          "Use useEffect to set up subscription",
          "Remember to unsubscribe on cleanup",
          "Update state when receiving events"
        ],
      },
      {
        type: "memoryGame",
        title: "Real-time Updates Memory Game",
        description: "Match real-time concepts to their purposes",
        cards: [
          { id: "subscription", front: "Subscription", back: "Listen for database changes" },
          { id: "insert", front: "INSERT event", back: "Triggered when new row is added" },
          { id: "update", front: "UPDATE event", back: "Triggered when row is modified" },
          { id: "delete", front: "DELETE event", back: "Triggered when row is removed" },
        ],
        timeLimit: 50,
      },
    ],
  },
];

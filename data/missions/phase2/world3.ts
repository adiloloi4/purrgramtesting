import { MissionData } from "../world0";

export const world3Missions: MissionData[] = [
  {
    id: "setup-the-vault",
    title: "Setup The Vault",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "Your app has amnesia. If you refresh, data is gone. To build a business, you need a shared brain (Database). We use Supabase because it works perfectly with Next.js.",
      },
      {
        type: "checklist",
        title: "Foundation: Manual Setup",
        prompt: "Do this manually (no AI yet):",
        items: [
          { id: "1", label: "Go to supabase.com -> New Project" },
          { id: "2", label: "Name it 'vibe-waitlist'" },
          { id: "3", label: "Get your Project URL and Anon Key from Settings -> API" }
        ],
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Tell the AI you have secrets (URL and Key). Don't paste them in the chat. Ask where to put them in a Next.js app.",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "I have my Supabase URL and Anon Key.\nWhere do I store them securely in a Next.js app?\nI don't want them to be committed to Git.",
      },
      {
        type: "text",
        title: "Foundation: Env Files",
        body: "The AI will tell you to create an .env.local file. This file is ignored by Git, so your secrets stay safe. You must restart your dev server after creating it.",
      },
      {
        type: "miniChallenge",
        title: "Verification step",
        task: "Create the .env.local file with your keys. Restart your server. If the app runs without error, the vault is ready.",
        example: "Ready in 100ms",
      }
    ],
  },
  {
    id: "design-memory",
    title: "Save Emails for a Waitlist",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "We want to save emails when someone joins our waitlist so we can contact them later.",
      },
      {
        type: "checklist",
        title: "What you need to decide",
        prompt: "No AI yet. Just decide:",
        items: [
          { id: "1", label: "What info do we store? (email only)" },
          { id: "2", label: "Do we care about duplicates? (no for now)" }
        ],
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Tell the AI what app you are building, what tool you are using (Supabase), what data you want to store, and that you do not care about implementation details.",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "I am building a Next.js app using Supabase.\nI need to store emails for a waitlist.\nEach entry should have an id, email, and created time.\nI don't care about SQL details.\nAsk me questions if something is unclear.\nGenerate the SQL query for me.",
      },
      {
        type: "text",
        title: "AI Result",
        body: "The AI will give you a SQL query block (starting with CREATE TABLE...). Copy it. Go to the Supabase Dashboard -> SQL Editor, paste it, and click RUN.",
      },
      {
        type: "miniChallenge",
        title: "How to know it worked",
        task: "Go to the Table Editor in Supabase. Do you see a table named 'waitlist' (or similar)? If yes, your app now has memory.",
        example: "Table exists",
      },
      {
        type: "text",
        title: "If it breaks",
        body: "1. 'Permission denied' -> Tell AI: 'I got a permission error running the SQL. Give me a fix.'\n2. 'Table already exists' -> You likely ran it twice. That's fine.",
      },
      {
        type: "text",
        title: "Optional Bonus",
        body: "The SQL 'CREATE TABLE' command tells the database to build a new spreadsheet. 'UUID' means a unique ID card for each row. 'Timestamp' means the exact time it was created.",
      }
    ],
  },
  {
    id: "connect-wires",
    title: "Connect The Wires",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "Your database lives in the cloud. Your code lives on your laptop. You need a bridge (Client) to connect them.",
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Ask for a reusable helper file. You don't want to write connection code in every file.",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "Create a Supabase client helper file for my Next.js app.\nIt should read from my env vars and export the client so I can use it anywhere.\nUse the @supabase/ssr package if recommended.",
      },
      {
        type: "miniChallenge",
        title: "Verification step",
        task: "Check your file tree for utils/supabase/client.ts (or similar). If it's there, the bridge is built.",
        example: "File exists",
      }
    ],
  },
  {
    id: "save-input",
    title: "Save Input",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "We need a UI (Form) to get data from the user, and a function (Action) to send it across the bridge to the database.",
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Describe the interaction flow: User types -> Click Button -> Data Saved. Mention 'Server Actions' for security.",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "Create a WaitlistForm component.\nIt should have an email input and a Join button.\nWhen submitted, use a Server Action to insert the email into the waitlist table.\nHandle success and error states.",
      },
      {
        type: "text",
        title: "Foundation: Permissions",
        body: "If you see a 'Permission Denied' error, it means Row Level Security (RLS) is blocking you. This is normal.",
      },
      {
        type: "miniChallenge",
        title: "Verification step",
        task: "Enter your email and click Join. Then go to Supabase -> Table Editor. Do you see your email?",
        example: "Row added",
      }
    ],
  },
  {
    id: "read-it-back",
    title: "Read It Back",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "Data is useless if it's trapped. Let's prove we can retrieve it. This completes the loop: Input -> Storage -> Output.",
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Ask for a new page that fetches and displays the data.",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "Create an admin page at /admin/waitlist.\nFetch all emails from the waitlist table and display them in a list.\nShow the total count at the top.",
      },
      {
        type: "miniChallenge",
        title: "Verification step",
        task: "Visit /admin/waitlist. Do you see your email? If yes, you are a Full Stack Engineer.",
        example: "List visible",
      }
    ],
  }
];

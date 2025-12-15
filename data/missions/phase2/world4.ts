import { MissionData } from "../world0";

export const world4Missions: MissionData[] = [
  {
    id: "setup-the-vault",
    title: "Setup The Vault (Supabase)",
    slides: [
      {
        type: "text",
        title: "The Cloud Computer",
        body:
          "We need a place to store our data that is always on and accessible from anywhere. We call this 'The Cloud'. We use Supabase.",
      },
      {
        type: "text",
        title: "Creating the Project",
        body:
          "This is the moment you rent your own slice of the cloud. It's free to start. You are spinning up a real server.",
      },
      {
        type: "checklist",
        title: "Setup Checklist",
        prompt: "Launch the server.",
        items: [
          { id: "1", label: "Go to supabase.com" },
          { id: "2", label: "Click 'New Project'" },
          { id: "3", label: "Give it a name and password" },
          { id: "4", label: "Wait for it to launch (green light)" },
        ],
      },
      {
        type: "text",
        title: "The Dashboard",
        body:
          "Supabase gives you a beautiful dashboard. Table Editor (Spreadsheet view), SQL Editor (Code view), Authentication (User view). We will use these.",
      },
      {
        type: "miniChallenge",
        title: "Verify Launch",
        task: "Did your project launch? Do you see the green 'Active' badge? If so, you have a backend.",
        example: "Project is active.",
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "You just provisioned a Postgres database in the cloud. Ten years ago, this took a team of engineers. You did it in 2 minutes.",
      },
    ],
  },
  {
    id: "secrets-env",
    title: "Secrets & Environment Variables",
    slides: [
      {
        type: "text",
        title: "The Keys to the Kingdom",
        body:
          "Your database needs a lock. You have keys (API Keys) to open it. These keys must be kept secret. If you share them, anyone can delete your data.",
      },
      {
        type: "text",
        title: "Where do we hide them?",
        body:
          "We use a file called '.env.local'. It stays on your computer. It is NEVER shared with Git or GitHub. It's your local secret vault.",
      },
      {
        type: "quiz",
        question: "Where should you store your API Keys?",
        options: [
          { id: "a", text: "In the code (public)" },
          { id: "b", text: "In .env.local (hidden)" },
          { id: "c", text: "Post them on Twitter" },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. .env files are hidden from the world.",
        wrongExplanation: "Never put secrets in public code!",
      },
      {
        type: "text",
        title: "Finding the Keys",
        body:
          "In Supabase, go to Settings -> API. You need the 'Project URL' and the 'anon' (public) key. Copy them.",
      },
      {
        type: "miniChallenge",
        title: "Create the Vault",
        task: "Create a file named .env.local in your project root. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
        example: "File created with keys.",
      },
      {
        type: "spotTheBug",
        title: "Security Leak",
        description: "Find the security risk",
        code: "// component.tsx\nconst supabase = createClient(\n  'https://xyz.supabase.co',\n  'eyJhbGciOiJIUzI1NiIsInR5c...' // API Key here!\n);",
        bugs: [
          {
            id: "hardcoded-key",
            line: 4,
            description: "The API Key is hardcoded in the file. It will be public!",
            fix: "Use process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY",
          },
        ],
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "You understand Security 101. You know how to keep your app safe. This puts you ahead of many junior devs.",
      },
    ],
  },
  {
    id: "connecting-app",
    title: "Connecting the Bridge",
    slides: [
      {
        type: "text",
        title: "The Connection",
        body:
          "Now we connect the App (Next.js) to the Database (Supabase). We use a library (SDK) to build this bridge.",
      },
      {
        type: "text",
        title: "The Client",
        body:
          "We create a 'Supabase Client'. This is a helper that knows how to talk to the database using your keys.",
      },
      {
        type: "checklist",
        title: "Connection Steps",
        prompt: "Build the bridge.",
        items: [
          { id: "install", label: "Install the package (@supabase/ssr)" },
          { id: "client", label: "Create the utils/supabase/client.ts file" },
          { id: "use", label: "Use it in a component" },
        ],
      },
      {
        type: "buildTask",
        title: "Build the Client",
        description: "Ask AI to create the connection code",
        task: "Ask Cursor: 'Create a Supabase client helper for my Next.js app using the @supabase/ssr package. Read keys from env vars.'",
        expectedOutcome: "A file that exports the Supabase client",
        verificationSteps: [
          "File created",
          "Uses createBrowserClient",
          "Reads from process.env",
        ],
        tips: [
          "Don't write it yourself.",
          "Let AI handle the boilerplate.",
        ],
      },
      {
        type: "text",
        title: "Testing the Connection",
        body:
          "How do we know it works? We try to fetch something. Even an empty list is a success. It means the door is open.",
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "The bridge is built. Traffic can flow. You have connected your frontend to your backend. The system is live.",
      },
    ],
  },
];

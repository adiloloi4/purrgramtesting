import { MissionData } from "../world0";

export const world3Missions: MissionData[] = [
  {
    id: "stack-overview",
    title: "The Modern Stack",
    slides: [
      {
        type: "text",
        title: "The Avengers Team",
        body: "You don't need 50 tools. You need 4 good ones. We call this the Vibe Stack. They are chosen for speed, not hype.",
      },
      {
        type: "text",
        title: "Meet the Crew",
        body: "Cursor: The Builder (Writes code).\nv0: The Designer (Draws UI).\nSupabase: The Brain (Remembers data).\nVercel: The Stage (Shows the world).",
      },
      {
        type: "quiz",
        question: "Which tool is The Brain?",
        options: [
          { id: "a", text: "Vercel", correct: false },
          { id: "b", text: "Supabase", correct: true },
          { id: "c", text: "Cursor", correct: false },
        ],
      },
      {
        type: "text",
        title: "Why this stack?",
        body: "Because they all talk to each other. They all have great free tiers. And they all love AI. This is the stack that single founders use to make millions.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Close your eyes. Visualize the 4 tools. Say their names out loud. If you can remember them, you passed.",
        example: "Cursor, v0, Supabase, Vercel.",
      },
    ],
  },
  {
    id: "cursor-deep-dive",
    title: "Cursor: The Magic Wand",
    slides: [
      {
        type: "text",
        title: "It's Not VS Code",
        body: "It looks like VS Code, but it's a fork. It has an AI brain baked into the core. It can see your entire project.",
      },
      {
        type: "text",
        title: "Composer (Cmd+I)",
        body: "This is the God feature. Cmd+I opens Composer. It can write code across multiple files at once. Rename user to profile everywhere. Boom. Done.",
      },
      {
        type: "identify",
        prompt: "Which command opens the multi-file editor?",
        items: [
          { id: "1", text: "Cmd+K (Chat)", correct: false },
          { id: "2", text: "Cmd+I (Composer)", correct: true },
          { id: "3", text: "Cmd+S (Save)", correct: false },
        ],
      },
      {
        type: "text",
        title: "The Tab Key",
        body: "In Cursor, Tab is Yes. The AI suggests code in grey text. Hit Tab to accept. It predicts your next move like a mind reader.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Press Cmd+I. Type: Create a new file test.txt and write a haiku about coding in it. Hit enter. Did it create the file?",
        example: "File created. Haiku written.",
      },
    ],
  },
  {
    id: "v0-designer",
    title: "v0: The Artist",
    slides: [
      {
        type: "text",
        title: "Drawing with Words",
        body: "v0.dev is a tool by Vercel. You type A dark mode dashboard with a chart, and it draws the UI. It gives you the React/Tailwind code.",
      },
      {
        type: "text",
        title: "Copy-Paste Design",
        body: "The workflow: 1. Generate in v0. 2. Copy the code. 3. Paste into Cursor. You don't need to be a designer. You just need taste.",
      },
      {
        type: "text",
        title: "Action: Try v0",
        body: "Go to v0.dev (it's free). Type: A pricing card with a gradient button. Watch it generate.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Did you generate a UI? Did it look cool? We will use this tool whenever we need complex layouts.",
        example: "Generated a pricing card.",
      },
    ],
  },
  {
    id: "supabase-vault",
    title: "Supabase: The Vault",
    slides: [
      {
        type: "text",
        title: "Postgres for Humans",
        body: "Databases used to be scary. Supabase makes them friendly. It's just tables, rows, and columns. But it scales to billions of users.",
      },
      {
        type: "text",
        title: "Auth & Realtime",
        body: "It's not just storage. It handles Log In with Google. It handles Live Chat. It handles File Uploads. It's the entire backend in a box.",
      },
      {
        type: "quiz",
        question: "Do you need to write a custom backend server?",
        options: [
          { id: "a", text: "Yes, always.", correct: false },
          { id: "b", text: "No, Supabase provides the APIs.", correct: true },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "We already set up Supabase in Phase 2. Just log in to your Supabase dashboard and look at the Table Editor. That's your data home.",
        example: "I see the tables.",
      },
    ],
  },
  {
    id: "vercel-stage",
    title: "Vercel: The Stage",
    slides: [
      {
        type: "text",
        title: "Click to Deploy",
        body: "Vercel owns Next.js. They make deployment instant. You connect your GitHub repo. Every time you git push, Vercel automatically updates your website.",
      },
      {
        type: "text",
        title: "Global CDN",
        body: "Your site isn't on one server. It's on hundreds, all over the world. It loads fast in Tokyo and fast in New York.",
      },
      {
        type: "checklist",
        title: "The Deploy Loop",
        prompt: "It's magic.",
        items: [
          { id: "1", label: "Code in Cursor" },
          { id: "2", label: "Push to GitHub" },
          { id: "3", label: "Vercel detects change" },
          { id: "4", label: "Live in 60 seconds" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Do you have a Vercel account? If not, sign up now. It's free.",
        example: "Signed up.",
      },
    ],
  },
  {
    id: "stack-assembly",
    title: "Assemble Your Stack",
    slides: [
      {
        type: "text",
        title: "The Voltron Moment",
        body: "Cursor writes the code. v0 designs the look. Supabase stores the truth. Vercel shows the world. Together, they are unstoppable.",
      },
      {
        type: "dragDrop",
        prompt: "Match the tool to the job.",
        categories: [
          { id: "build", label: "Build" },
          { id: "design", label: "Design" },
          { id: "data", label: "Data" },
          { id: "deploy", label: "Deploy" },
        ],
        items: [
          { id: "cursor", label: "Cursor", correctCategoryId: "build" },
          { id: "v0", label: "v0", correctCategoryId: "design" },
          { id: "supabase", label: "Supabase", correctCategoryId: "data" },
          { id: "vercel", label: "Vercel", correctCategoryId: "deploy" },
        ],
      },
      {
        type: "text",
        title: "You are ready.",
        body: "You know the philosophy. You know the tools. Now... we build.",
      },
    ],
  },
];

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
      {
        type: "memoryGame",
        title: "The Vibe Stack Memory Game",
        description: "Match each tool to its role",
        cards: [
          { id: "cursor", front: "Cursor", back: "The Builder (Writes code)" },
          { id: "v0", front: "v0", back: "The Designer (Draws UI)" },
          { id: "supabase", front: "Supabase", back: "The Brain (Remembers data)" },
          { id: "vercel", front: "Vercel", back: "The Stage (Shows the world)" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "The Stack Quiz",
        description: "Test your knowledge of the Vibe Stack",
        questions: [
          {
            id: "q1",
            question: "Which tool is The Brain?",
            options: [
              { id: "a", text: "Vercel" },
              { id: "b", text: "Supabase" },
              { id: "c", text: "Cursor" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "How many tools do you need?",
            options: [
              { id: "a", text: "50 tools" },
              { id: "b", text: "4 good ones" },
              { id: "c", text: "100 tools" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
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
      {
        type: "memoryGame",
        title: "Cursor Memory Game",
        description: "Match Cursor features to their purposes",
        cards: [
          { id: "vs-code", front: "Looks like VS Code", back: "But it's a fork with AI brain" },
          { id: "composer", front: "Composer (Cmd+I)", back: "Multi-file editor - God feature" },
          { id: "tab", front: "Tab Key", back: "Accept AI suggestions" },
          { id: "context", front: "Sees Entire Project", back: "AI can see all your files" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Cursor Quiz",
        description: "Test your understanding of Cursor",
        questions: [
          {
            id: "q1",
            question: "Which command opens the multi-file editor?",
            options: [
              { id: "a", text: "Cmd+K (Chat)" },
              { id: "b", text: "Cmd+I (Composer)" },
              { id: "c", text: "Cmd+S (Save)" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What does Tab do in Cursor?",
            options: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Accepts AI suggestions" },
              { id: "c", text: "Saves file" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
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
      {
        type: "memoryGame",
        title: "v0 Memory Game",
        description: "Match v0 concepts to their purposes",
        cards: [
          { id: "drawing", front: "Drawing with Words", back: "Type description, get UI" },
          { id: "copy-paste", front: "Copy-Paste Design", back: "Generate in v0, paste into Cursor" },
          { id: "taste", front: "You Need Taste", back: "Don't need to be a designer" },
          { id: "vercel", front: "Made by Vercel", back: "Tool by Vercel for UI generation" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "v0 Workflow",
        description: "Order the steps to use v0",
        items: [
          { id: "generate", label: "Generate UI in v0", correctPosition: 0 },
          { id: "copy", label: "Copy the code", correctPosition: 1 },
          { id: "paste", label: "Paste into Cursor", correctPosition: 2 },
        ],
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
      {
        type: "memoryGame",
        title: "Supabase Memory Game",
        description: "Match Supabase features to their purposes",
        cards: [
          { id: "postgres", front: "Postgres for Humans", back: "Friendly database interface" },
          { id: "auth", front: "Auth", back: "Log in with Google" },
          { id: "realtime", front: "Realtime", back: "Live chat capabilities" },
          { id: "backend-box", front: "Backend in a Box", back: "Entire backend provided" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Supabase Quiz",
        description: "Test your understanding of Supabase",
        questions: [
          {
            id: "q1",
            question: "Do you need to write a custom backend server?",
            options: [
              { id: "a", text: "Yes, always" },
              { id: "b", text: "No, Supabase provides the APIs" },
              { id: "c", text: "Sometimes" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What does Supabase provide?",
            options: [
              { id: "a", text: "Just database" },
              { id: "b", text: "Database, Auth, APIs, Storage" },
              { id: "c", text: "Just deployment" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
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
      {
        type: "memoryGame",
        title: "Vercel Memory Game",
        description: "Match Vercel concepts to their purposes",
        cards: [
          { id: "click-deploy", front: "Click to Deploy", back: "Instant deployment" },
          { id: "github", front: "GitHub Integration", back: "Connects to your repo" },
          { id: "cdn", front: "Global CDN", back: "Hundreds of servers worldwide" },
          { id: "auto-update", front: "Auto-Update", back: "Updates when you git push" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "The Deploy Loop",
        description: "Order the steps of the deployment process",
        items: [
          { id: "code", label: "Code in Cursor", correctPosition: 0 },
          { id: "push", label: "Push to GitHub", correctPosition: 1 },
          { id: "detect", label: "Vercel detects change", correctPosition: 2 },
          { id: "live", label: "Live in 60 seconds", correctPosition: 3 },
        ],
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
      {
        type: "memoryGame",
        title: "Stack Assembly Memory Game",
        description: "Match each tool to its job in the stack",
        cards: [
          { id: "cursor", front: "Cursor", back: "Build (Writes code)" },
          { id: "v0", front: "v0", back: "Design (Draws UI)" },
          { id: "supabase", front: "Supabase", back: "Data (Remembers data)" },
          { id: "vercel", front: "Vercel", back: "Deploy (Shows the world)" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Stack Assembly Quiz",
        description: "Test your knowledge of assembling the Vibe Stack",
        questions: [
          {
            id: "q1",
            question: "What is the Voltron Moment?",
            options: [
              { id: "a", text: "All tools working together" },
              { id: "b", text: "One tool alone" },
              { id: "c", text: "No tools" },
            ],
            correct: "a",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What happens when you know philosophy and tools?",
            options: [
              { id: "a", text: "You're done" },
              { id: "b", text: "Now you build" },
              { id: "c", text: "You quit" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
];

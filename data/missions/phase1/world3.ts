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
        body: "Cursor: The Builder (Writes code).\nv0: From Idea to First Draft (Prototypes fast).\nSupabase: The Brain (Remembers data).\nVercel: The Stage (Shows the world).",
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
        type: "text",
        title: "The Tool Flow",
        body: "You do not choose one tool forever. You move between tools as your product evolves. Idea to v0 creates your first draft. First draft to Cursor becomes your real product. Tools are chosen by stage, not by role.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Close your eyes. Visualize the 4 tools. Say their names out loud. If you can remember them, you passed.",
        example: "Cursor, v0, Supabase, Vercel.",
      },
      {
        type: "identify",
      prompt: "Which tool remembers your data?",
      correctOptionId: "supabase",
      correctExplanation: "Yes. Supabase is the database (The Brain).",
      wrongExplanation: "Think about where data is stored.",
        options: [
          { id: "cursor", text: "Cursor", icon: "📝" },
          { id: "supabase", text: "Supabase", icon: "🧠" },
          { id: "vercel", text: "Vercel", icon: "🚀" },
        ],
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
        type: "identify",
      prompt: "Which feature writes code across multiple files?",
      correctOptionId: "composer",
      correctExplanation: "Yes. Composer (Cmd+I) is the multi-file agent.",
      wrongExplanation: "Chat is for questions. Composer is for building.",
        options: [
          { id: "chat", text: "Chat (Cmd+K)", icon: "💬" },
          { id: "composer", text: "Composer (Cmd+I)", icon: "✨" },
          { id: "terminal", text: "Terminal", icon: "💻" },
        ],
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
    title: "v0: From Idea to First Draft",
    slides: [
      {
        type: "text",
        title: "Idea to Working UI",
        body: "v0.dev is a tool by Vercel. You type your idea: A landing page for my app. A dashboard. A pricing page. It turns your idea into a working first draft. It gives you the code instantly.",
      },
      {
        type: "text",
        title: "Speed Over Perfection",
        body: "The workflow: 1. Type your idea in v0. 2. Get your first draft. 3. Copy the code. 4. Paste into Cursor to refine. v0 is great for MVPs. v0 is not where most apps stay forever. v0 helps you see your idea instead of imagining it.",
      },
      {
        type: "text",
        title: "Action: Try v0",
        body: "Go to v0.dev (it's free). Type: A landing page with a hero section and signup button. Watch it generate your first draft in seconds.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Did you generate a working UI? Did you see your idea materialize? This is the fastest way to prototype. We use this tool when speed matters.",
        example: "Generated a landing page.",
      },
      {
        type: "identify",
      prompt: "When should you choose v0?",
      correctOptionId: "speed",
      correctExplanation: "Yes. Choose v0 when you need speed. When you want to see your idea quickly. When you're building an MVP or first draft.",
      wrongExplanation: "v0 is for prototyping fast, not for final products.",
        options: [
          { id: "perfection", text: "When you need perfect UI", icon: "✨" },
          { id: "speed", text: "When speed matters", icon: "⚡" },
          { id: "final", text: "For final production code", icon: "🏁" },
        ],
      },
      {
        type: "sequenceGame",
        title: "v0 Workflow",
        description: "Order the steps from idea to product",
        items: [
          { id: "idea", label: "Have an idea", correctPosition: 0 },
          { id: "prototype", label: "Prototype in v0", correctPosition: 1 },
          { id: "refine", label: "Refine in Cursor", correctPosition: 2 },
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
        type: "matching",
        prompt: "Match Supabase features to their purposes",
        pairs: [
          { id: "postgres", left: "Postgres for Humans", right: "Friendly database interface" },
          { id: "auth", left: "Auth", right: "Log in with Google" },
          { id: "realtime", left: "Realtime", right: "Live chat capabilities" },
          { id: "backend-box", left: "Backend in a Box", right: "Entire backend provided" },
        ],
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
        type: "speedQuiz",
        title: "Vercel Quiz",
        description: "Fast facts about deployment",
        questions: [
          {
            id: "q1",
            question: "How do you deploy?",
            options: [
              { id: "a", text: "Upload ZIP file" },
              { id: "b", text: "git push" },
              { id: "c", text: "Email code to Vercel" },
            ],
            correct: "b",
            timeLimit: 10,
          },
          {
            id: "q2",
            question: "Where does it run?",
            options: [
              { id: "a", text: "One server in basement" },
              { id: "b", text: "Global Edge Network" },
            ],
            correct: "b",
            timeLimit: 10,
          },
        ],
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
        body: "Prototype fast with v0. Build properly with Cursor. Ship with Vercel. Store data with Supabase. Together, they are unstoppable.",
      },
      {
        type: "dragDrop",
        prompt: "Match the tool to the job.",
        categories: [
          { id: "build", label: "Build" },
          { id: "prototype", label: "Prototype" },
          { id: "data", label: "Data" },
          { id: "deploy", label: "Deploy" },
        ],
        items: [
          { id: "cursor", label: "Cursor", correctCategoryId: "build" },
          { id: "v0", label: "v0", correctCategoryId: "prototype" },
          { id: "supabase", label: "Supabase", correctCategoryId: "data" },
          { id: "vercel", label: "Vercel", correctCategoryId: "deploy" },
        ],
      },
      {
        type: "text",
        title: "The Real Truth",
        body: "This is not about tools. This is about moving from idea to market with the least friction. v0 is optional but powerful, often the first step. Cursor is mandatory for serious building. Prototype fast with v0. Build properly with Cursor. Ship with Vercel. Store data with Supabase.",
      },
      {
        type: "text",
        title: "You are ready.",
        body: "You know the philosophy. You know the tools. Now... we build.",
      },
      {
        type: "sequenceGame",
        title: "Stack Assembly Flow",
        description: "Order the tools in the development lifecycle",
        items: [
          { id: "v0", label: "Prototype (v0.dev)", correctPosition: 0 },
          { id: "cursor", label: "Build (Cursor)", correctPosition: 1 },
          { id: "supabase", label: "Data (Supabase)", correctPosition: 2 },
          { id: "vercel", label: "Deploy (Vercel)", correctPosition: 3 },
        ],
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

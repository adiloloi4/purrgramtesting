import { MissionData } from "../world0";

export const worldSurfaceMissions: MissionData[] = [
  {
    id: "idea-to-screen",
    title: "From Idea to Screen",
    slides: [
      {
        type: "text",
        title: "You Do Not Start With Code",
        body: "You do not start with code. You start with what the user sees. Screens are the product. The code comes later.",
      },
      {
        type: "text",
        title: "Thinking in Screens",
        body: "Think in screens, not logic. A landing page is a screen. A dashboard is a screen. A form is a screen. A result screen is a screen. Each screen solves one job.",
      },
      {
        type: "text",
        title: "The Visual Product",
        body: "Your product is what users see and click. Not the code behind it. Not the database. The screens. Build the screens first. Make them visible. Make them clickable.",
      },
      {
        type: "identify",
        prompt: "What should you build first?",
        correctOptionId: "screen",
        correctExplanation: "Yes. Build the screen first. Make it visible. Make it real.",
        wrongExplanation: "Think about what the user actually sees and interacts with.",
        options: [
          { id: "database", text: "The database", icon: "🗄️" },
          { id: "screen", text: "The screen", icon: "📱" },
          { id: "logic", text: "The logic", icon: "⚙️" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Close your eyes. Picture your app. What screen do you see first? That is what you build first.",
        example: "I see a landing page with a signup button.",
      },
    ],
  },
  {
    id: "v0-first-draft",
    title: "Prototyping with v0",
    slides: [
      {
        type: "text",
        title: "v0 is Not the Designer",
        body: "v0 is not the designer. v0 is not the final product. v0 is the first draft machine. It turns your idea into something you can see and click. Fast.",
      },
      {
        type: "text",
        title: "MVP Sketch",
        body: "v0 is an MVP sketch. It is disposable. It is imperfect. It is fast. You use it to see your idea, not to build the final product.",
      },
      {
        type: "text",
        title: "When to Use v0",
        body: "Use v0 when you want to see the idea. Use v0 when you want something clickable. Use v0 when you want direction, not perfection.",
      },
      {
        type: "quiz",
        question: "What is v0 best for?",
        options: [
          { id: "a", text: "Building the final product", correct: false },
          { id: "b", text: "Creating a first draft to see your idea", correct: true },
          { id: "c", text: "Perfect pixel designs", correct: false },
        ],
      },
      {
        type: "text",
        title: "v0 is For",
        body: "v0 is for exploration. v0 is for early MVPs. v0 is for validating ideas visually. You prototype fast. You see what works. You move on.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Go to v0.dev. Type: A simple landing page with a hero section. Generate it. Did you see your idea become real? That is v0.",
        example: "Generated a landing page.",
      },
    ],
  },
  {
    id: "screenshot-build",
    title: "Screenshot → Build",
    slides: [
      {
        type: "text",
        title: "You Are Allowed to Copy",
        body: "You are allowed to copy inspiration. Screenshot landing pages. Screenshot dashboards. Screenshot forms. Then let Cursor rebuild them.",
      },
      {
        type: "text",
        title: "The Founder Mindset",
        body: "You are not copying code. You are copying structure and layout. This is normal founder behavior. You see something that works. You adapt it. You make it yours.",
      },
      {
        type: "text",
        title: "The Flow",
        body: "Screenshot something you like. Paste it into Cursor. Explain how you want to see it in your app style. Cursor sees the image. Cursor understands. Cursor builds it. That is it.",
      },
      {
        type: "text",
        title: "Cursor Sees Images",
        body: "You do not need to describe every pixel. Cursor can see the screenshot. You just explain: Make this darker. Make the button bigger. Use my brand colors. Cursor does the rest.",
      },
      {
        type: "identify",
        prompt: "You see a beautiful landing page. What should you do?",
        correctOptionId: "screenshot",
        correctExplanation: "Yes. Screenshot it. Paste it to Cursor. Explain your style. Let Cursor rebuild it. This is how founders build.",
        wrongExplanation: "Think about what helps you move fast and see results.",
        options: [
          { id: "ignore", text: "Ignore it", icon: "🙈" },
          { id: "screenshot", text: "Screenshot and paste to Cursor", icon: "📸" },
          { id: "code", text: "Try to code it from scratch", icon: "⌨️" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Find a landing page you like. Screenshot it. Paste it into Cursor and explain: I want this in my app style with dark mode. That is your prompt.",
        example: "Screenshot pasted. Style explained.",
      },
    ],
  },
  {
    id: "cursor-workflow",
    title: "The Correct Way to Use Cursor",
    slides: [
      {
        type: "text",
        title: "The Real Flow",
        body: "This is the correct way to use Cursor. PLAN. BUILD. DEBUG. These are Cursor features. This is the real flow. For the next feature, start again with PLAN.",
      },
      {
        type: "text",
        title: "PLAN (Cursor Feature)",
        body: "PLAN is a Cursor feature. Send your wanted prompt to the Plan feature. Cursor creates a plan. Review it. Confirm it covers what you want. Then move to Build.",
      },
      {
        type: "text",
        title: "BUILD (Agent Feature)",
        body: "BUILD is Cursor's Agent feature. Change to build mode. Let Cursor build it. Watch it generate the code. Test it. Check if it works.",
      },
      {
        type: "text",
        title: "DEBUG (Cursor Feature)",
        body: "DEBUG is a Cursor feature. If something doesn't work, use the Debug feature. Explain what's broken. Cursor fixes it. Test again. Repeat until it works.",
      },
      {
        type: "text",
        title: "The Three Features",
        body: "PLAN. BUILD. DEBUG. These are the three Cursor features you use. Plan first. Build second. Debug if needed. That is the flow.",
      },
      {
        type: "sequenceGame",
        title: "The Cursor Workflow",
        description: "Order the Cursor features correctly",
        items: [
          { id: "plan", label: "PLAN: Use Cursor Plan feature", correctPosition: 0 },
          { id: "build", label: "BUILD: Use Cursor Agent (Build) feature", correctPosition: 1 },
          { id: "debug", label: "DEBUG: Use Cursor Debug feature if needed", correctPosition: 2 },
        ],
      },
      {
        type: "text",
        title: "The Key Rule",
        body: "You do not jump straight to Build. You always use Plan first. Review the plan. Confirm it. Then use Build. If it breaks, use Debug. This is how Cursor works.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Think of a feature you want. Write a PLAN prompt. That is step one. Always start with Plan.",
        example: "PLAN prompt written.",
      },
      {
        type: "text",
        title: "The Real Truth",
        body: "You don't build products by typing code. You build products by shaping ideas into screens. The code comes later.",
      },
    ],
  },
];


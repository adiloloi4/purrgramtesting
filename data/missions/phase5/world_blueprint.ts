import { MissionData } from "../world0";

export const worldBlueprintMissions: MissionData[] = [
  {
    id: "build-any-app-from-scratch",
    title: "Build Any App From Scratch (0 → Live)",
    slides: [
      {
        type: "text",
        title: "Intro",
        body: "You've learned the pieces. Now you get the full picture. This is not a specific app. This is a blueprint. A system you will reuse for every idea you ever have. If you finished this course, you should be able to build any MVP on your own. This mission proves it.",
      },
      {
        type: "text",
        title: "The Only Stack You Need",
        body: "This blueprint uses a fixed stack. No alternatives. No debates. Clarity beats options.",
      },
      {
        type: "checklist",
        title: "The Only Stack You Need",
        prompt: "Tools list (display only)",
        items: [
          { id: "v0", label: "v0 – Prototype and first MVP" },
          { id: "cursor", label: "Cursor – Controlled code generation" },
          { id: "supabase", label: "Supabase – Database and Auth" },
          { id: "github", label: "GitHub – Version control" },
          { id: "vercel", label: "Vercel – Deployment" },
        ],
      },
      {
        type: "text",
        title: "Step 0 – Lock the Idea",
        body: "Before code. Before AI. Before design. You lock the idea.",
      },
      {
        type: "text",
        title: "Step 0 – Lock the Idea",
        body: "Instructions: 1. Write one sentence: 'This app helps [who] do [what] without [pain]' 2. Choose ONE core feature for the MVP 3. Define up to THREE screens only",
      },
      {
        type: "miniChallenge",
        title: "Step 0 – Lock the Idea",
        task: "Write the idea sentence. List the three screens.",
        example: "Idea locked. Screens defined.",
      },
      {
        type: "text",
        title: "Step 1 – Prototype the Idea",
        body: "v0 is not a designer. It is where ideas become tangible in minutes. The goal is understanding the product, not perfect UI.",
      },
      {
        type: "text",
        title: "Step 1 – Prototype the Idea",
        body: "Instructions: Open v0. Create a prototype with: Home screen, Action screen, Result screen",
      },
      {
        type: "miniChallenge",
        title: "Step 1 – Prototype the Idea",
        task: "Build the prototype. Make sure you can explain the app without talking.",
        example: "Prototype built.",
      },
      {
        type: "text",
        title: "Step 2 – Turn Prototype into Code",
        body: "This is where 'looks good' becomes 'actually works'. Cursor is where you are in control. You don't guess. You don't copy. You direct.",
      },
      {
        type: "text",
        title: "Step 2 – Turn Prototype into Code",
        body: "Instructions: Create a Next.js project. Rebuild the UI from the v0 prototype. Run the app locally",
      },
      {
        type: "miniChallenge",
        title: "Step 2 – Turn Prototype into Code",
        task: "App runs locally without errors.",
        example: "App running locally.",
      },
      {
        type: "text",
        title: "Step 3 – Save Your Progress",
        body: "Without Git, mistakes are scary. With Git, mistakes are reversible.",
      },
      {
        type: "text",
        title: "Step 3 – Save Your Progress",
        body: "Instructions: Create a GitHub repository. Connect the project. Make the first push",
      },
      {
        type: "miniChallenge",
        title: "Step 3 – Save Your Progress",
        task: "Code exists in GitHub.",
        example: "Code pushed to GitHub.",
      },
      {
        type: "text",
        title: "Step 4 – Add Data and Auth",
        body: "An app without data is a demo. Supabase makes it real.",
      },
      {
        type: "text",
        title: "Step 4 – Add Data and Auth",
        body: "Instructions: Create a Supabase project. Create ONE table only. Enable email authentication. Store all keys in environment variables",
      },
      {
        type: "miniChallenge",
        title: "Step 4 – Add Data and Auth",
        task: "One form that saves data to the database.",
        example: "Form saves to database.",
      },
      {
        type: "text",
        title: "Step 5 – Make It Real",
        body: "This is where the magic happens. User action results in real data.",
      },
      {
        type: "miniChallenge",
        title: "Step 5 – Make It Real",
        task: "User submits. Data is saved. Data is visible in Supabase.",
        example: "Data flow working.",
      },
      {
        type: "text",
        title: "Step 6 – Add an API (Only If Needed)",
        body: "Not every app needs an API. But if yours does, you already know how.",
      },
      {
        type: "miniChallenge",
        title: "Step 6 – Add an API (Only If Needed)",
        task: "Add ONE API-based feature. AI, external data, or server logic.",
        example: "API feature added.",
      },
      {
        type: "text",
        title: "Step 7 – Payments",
        body: "Stripe and LemonSqueezy do the same thing. Choose based on availability in your country.",
      },
      {
        type: "miniChallenge",
        title: "Step 7 – Payments",
        task: "Choose ONE provider. Create ONE product. Implement a simple paywall.",
        example: "Paywall implemented.",
      },
      {
        type: "text",
        title: "Step 8 – Go Live",
        body: "If it's not live, it doesn't exist.",
      },
      {
        type: "miniChallenge",
        title: "Step 8 – Go Live",
        task: "Deploy with Vercel. Get a live URL.",
        example: "App deployed live.",
      },
      {
        type: "text",
        title: "Step 9 – Beta Mode",
        body: "Before money, get people.",
      },
      {
        type: "text",
        title: "Step 9 – Beta Mode",
        body: "Rules: Every new user is a Beta Tester. All features are unlocked. Feedback is the goal",
      },
      {
        type: "text",
        title: "You Now Have the Blueprint",
        body: "You now have: A process. A stack. A system. From now on, every new idea starts here.",
      },
    ],
  },
];


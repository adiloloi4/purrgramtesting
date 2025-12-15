import { MissionData } from "../world0";

export const mission05: MissionData = {
  id: "devtools-fundamentals",
  title: "Dev Tools & Workflow",
  slides: [
    {
      type: "text",
      title: "The Workshop",
      body:
        "You can't cook without utensils. Dev Tools are your kitchen equipment. You need to master them to work efficiently.",
    },
    {
      type: "checklist",
      title: "Your Toolkit",
      prompt: "Review your arsenal.",
      items: [
        { id: "node", label: "Node.js: JavaScript Runtime" },
        { id: "git", label: "Git / GitHub: Version Control (Time Machine)" },
        { id: "cursor", label: "Cursor: AI Editor (Magic Wand)" },
        { id: "vercel", label: "Vercel: Deployment (The Stage)" }
      ]
    },
    {
      type: "text",
      title: "Version Control (Git)",
      body:
        "Imagine a 'Save Game' feature for code. Git lets you save checkpoints. GitHub Desktop makes it easy to save, load, and share code without command line pain.",
    },
    {
      type: "text",
      title: "IDE (Cursor)",
      body:
        "The IDE (Integrated Development Environment) is where you write code. Cursor is a modern IDE built for speed and AI assistance.",
    },
    {
      type: "text",
      title: "Deployment (Vercel)",
      body:
        "It lives on your computer (Localhost) until you Deploy. Vercel takes your code from GitHub and puts it on the internet for the world to see.",
    },
    {
      type: "checklist",
      title: "Tool Check",
      prompt: "Verify your setup.",
      items: [
        { id: "node", label: "Node.js Installed" },
        { id: "github", label: "GitHub Desktop Installed" },
        { id: "cursor", label: "Cursor Installed" },
      ],
    },
    {
      type: "terminal",
      title: "Final Vibe Check",
      expectedCommand: "vibe-check",
      prompt: "Type the command to verify.",
      successMessage: "SYSTEM READY. VIBE DETECTED. PHASE 0 COMPLETE.",
    },
    {
      type: "typingChallenge",
      title: "Type the Dev Tools",
      description: "Type the command to check your Node.js version",
      text: "node --version",
      wpmTarget: 30,
    },
    {
      type: "sequenceGame",
      title: "Deployment Workflow",
      description: "Order the steps to deploy your app",
      items: [
        { id: "code", label: "Write code in Cursor", correctPosition: 0 },
        { id: "git", label: "Commit to GitHub", correctPosition: 1 },
        { id: "vercel", label: "Deploy to Vercel", correctPosition: 2 },
        { id: "live", label: "App goes live", correctPosition: 3 },
      ],
    },
    {
      type: "identify",
      prompt: "Which tool allows you to save code history and go back in time?",
      correctOptionId: "git",
      correctExplanation: "Yes! Git is your time machine. It saves every version of your code.",
      wrongExplanation: "Think about which tool manages versions and history.",
      options: [
        { id: "node", text: "Node.js", icon: "🟢" },
        { id: "git", text: "Git / GitHub", icon: "🕰️" },
        { id: "vercel", text: "Vercel", icon: "🚀" },
      ],
    },
  ],
};

import { MissionData } from "../world0";

export const mission05: MissionData = {
  id: "devtools-fundamentals",
  title: "Dev Tools & Workflow",
  slides: [
    {
      type: "text",
      title: "The Workshop",
      content:
        "You can't cook without utensils. Dev Tools are your kitchen equipment. You need to master them to work efficiently.",
    },
    {
      type: "toggle_cards",
      title: "Your Toolkit",
      cards: [
        { id: "node", title: "Node.js", description: "The runtime that lets your computer speak JavaScript." },
        { id: "git", title: "Git / GitHub", description: "The time machine. Saves your code history and lets you collaborate." },
        { id: "cursor", title: "Cursor", description: "The magic wand. An AI-powered editor that writes code for you." },
        { id: "vercel", title: "Vercel", description: "The stage. Where you publish your app to the world." }
      ]
    },
    {
      type: "text",
      title: "Version Control (Git)",
      content:
        "Imagine a 'Save Game' feature for code. Git lets you save checkpoints. GitHub Desktop makes it easy to save, load, and share code without command line pain.",
    },
    {
      type: "text",
      title: "IDE (Cursor)",
      content:
        "The IDE (Integrated Development Environment) is where you write code. Cursor is a modern IDE built for speed and AI assistance.",
    },
    {
      type: "text",
      title: "Deployment (Vercel)",
      content:
        "It lives on your computer (Localhost) until you Deploy. Vercel takes your code from GitHub and puts it on the internet for the world to see.",
    },
    {
      type: "checklist",
      title: "Tool Check",
      items: [
        { id: "node", label: "Node.js Installed" },
        { id: "github", label: "GitHub Desktop Installed" },
        { id: "cursor", label: "Cursor Installed" },
      ],
    },
    {
      type: "terminal",
      title: "Final Vibe Check",
      command: "vibe-check",
      successMessage: "SYSTEM READY. VIBE DETECTED. PHASE 0 COMPLETE.",
    },
  ],
};

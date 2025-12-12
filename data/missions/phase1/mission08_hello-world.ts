import { MissionData } from "../world0";

export const mission08: MissionData = {
  id: "hello-world",
  title: "Deploy your 'Hello World' site in 15 minutes",
  slides: [
    {
      type: "text",
      title: "Your First Ship",
      content:
        "This is it. Your first real deployment. In 15 minutes, you'll have a live website on the internet. No theory. No tutorials. Just you, building, and shipping.",
    },
    {
      type: "text",
      title: "What You'll Build",
      content:
        "A simple 'Hello World' page. It sounds small, but it's huge. This is your proof that you can ship. This is your first win. This is where it starts.",
    },
    {
      type: "toggle_cards",
      title: "The Steps",
      cards: [
        {
          id: "create",
          title: "Create the Project",
          description: "Use Cursor to create a new Next.js project. One command, and you're ready.",
        },
        {
          id: "build",
          title: "Build the Page",
          description: "Create a simple page that says 'Hello World'. Keep it simple. Make it work.",
        },
        {
          id: "deploy",
          title: "Deploy to Vercel",
          description: "Push to GitHub, connect to Vercel, and watch it go live. That's it.",
        },
      ],
    },
    {
      type: "text",
      title: "The Commands",
      content:
        "You'll use: `npx create-next-app@latest` to create. `git push` to save. Vercel to deploy. Three steps. Fifteen minutes. One live website.",
    },
    {
      type: "checklist",
      title: "Deployment Checklist",
      items: [
        { id: "node", label: "Node.js installed" },
        { id: "git", label: "GitHub account created" },
        { id: "vercel", label: "Vercel account created" },
        { id: "project", label: "Next.js project created" },
        { id: "pushed", label: "Code pushed to GitHub" },
        { id: "deployed", label: "Deployed to Vercel" },
      ],
    },
    {
      type: "text",
      title: "When It's Live",
      content:
        "When you see your site live on the internet, something clicks. You're not just learning anymore. You're building. You're shipping. You're a Vibe Coder.",
    },
    {
      type: "quiz",
      question: "What's the first step to deploy a Next.js site?",
      options: [
        { id: "a", text: "Deploy directly to production" },
        { id: "b", text: "Create the Next.js project" },
        { id: "c", text: "Write perfect code first" },
      ],
      correct: "b",
      feedbackCorrect: "Yes! Start by creating the project, then build, then deploy.",
      feedbackWrong: "Think about the logical order - you need a project before you can deploy it.",
    },
    {
      type: "text",
      title: "Your First Win",
      content:
        "This is your first deployment. It won't be your last. Every great builder started with a 'Hello World.' You're now one of them. Keep shipping.",
    },
    {
      type: "sequenceGame",
      title: "Deployment Workflow",
      description: "Order the steps to deploy your Hello World site",
      items: [
        { id: "create", label: "Create Next.js project", correctPosition: 0 },
        { id: "build", label: "Build the Hello World page", correctPosition: 1 },
        { id: "git", label: "Push to GitHub", correctPosition: 2 },
        { id: "deploy", label: "Deploy to Vercel", correctPosition: 3 },
      ],
      hint: "Start with creating, end with deploying",
    },
    {
      type: "typingChallenge",
      title: "Type the Deployment Command",
      description: "Type the command to create a Next.js project",
      text: "npx create-next-app@latest",
      wpmTarget: 25,
    },
  ],
};


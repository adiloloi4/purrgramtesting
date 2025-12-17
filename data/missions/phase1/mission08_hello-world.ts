import { MissionData } from "../world0";

export const mission08: MissionData = {
  id: "hello-world",
  title: "Deploy your 'Hello World' site in 15 minutes",
  slides: [
    {
      type: "text",
      title: "Your First Ship",
      body:
        "This is it. Your first real deployment. In 15 minutes, you'll have a live website on the internet. No theory. No tutorials. Just you, building, and shipping.",
    },
    {
      type: "text",
      title: "What You'll Build",
      body:
        "A simple 'Hello World' page. It sounds small, but it's huge. This is your proof that you can ship. This is your first win. This is where it starts.",
    },
    {
      type: "checklist",
      title: "The Steps",
      prompt: "Mark the steps.",
      items: [
        { id: "create", label: "Create: You ask AI to scaffold the app." },
        { id: "build", label: "Build: You direct AI to add features." },
        { id: "deploy", label: "Deploy: You push to Vercel to go live." },
      ],
    },
    {
      type: "text",
      title: "The Commands",
      body:
        "To start a new project, you would normally run `npx create-next-app@latest`. This creates the entire skeleton for you. Then you just step into the Director's chair.",
    },
    {
      type: "checklist",
      title: "Deployment Checklist",
      prompt: "The path to live.",
      items: [
        { id: "node", label: "Project Created" },
        { id: "git", label: "Pushed to GitHub" },
        { id: "vercel", label: "Connected to Vercel" },
        { id: "live", label: "Live URL generated" },
      ],
    },
    {
      type: "text",
      title: "When It's Live",
      body:
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
      correctOptionId: "b",
      correctExplanation: "Yes! Start by creating the project, then build, then deploy.",
      wrongExplanation: "Think about the logical order - you need a project before you can deploy it.",
    },
    {
      type: "text",
      title: "Your First Win",
      body:
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
    {
      type: "text",
      title: "Confidence Boost",
      body:
        "You have a URL. You can send it to your friends. You are live. This feeling? This is what we chase.",
    },
  ],
};

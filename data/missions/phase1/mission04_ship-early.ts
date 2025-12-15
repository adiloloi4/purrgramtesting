import { MissionData } from "../world0";

export const mission04: MissionData = {
  id: "ship-early",
  title: "Ship Early, Iterate Often",
  slides: [
    {
      type: "text",
      title: "The Launch Trap",
      body:
        "Most builders never launch. They perfect. They polish. They wait for the 'right time.' Meanwhile, competitors ship, learn, and win. Don't be most builders.",
    },
    {
      type: "text",
      title: "The 10% Rule",
      body:
        "Don't build 100% of the app before shipping. Build 10%. Ship it. Learn. Then build the next 10%. Your first version should be embarrassing.",
    },
    {
      type: "quiz",
      question: "When is the right time to ship?",
      options: [
        { id: "a", text: "When it's perfect" },
        { id: "b", text: "When it works and users can use it" },
        { id: "c", text: "When you've added every feature" },
      ],
      correctOptionId: "b",
      correctExplanation: "Exactly! Ship when it works. Perfection can come later through iteration.",
      wrongExplanation: "Think about what actually matters to users - working features, not perfection.",
    },
    {
      type: "text",
      title: "Don't Eat the Elephant",
      body:
        "You can't build Facebook in one prompt. You build a login box. Then a profile. Then a post. Break it down. AI chokes on big tasks. It loves small tasks.",
    },
    {
      type: "sequenceGame",
      title: "The Iteration Cycle",
      description: "Order the steps of the Ship-Learn-Improve cycle",
      items: [
        { id: "ship", label: "Ship the working version", correctPosition: 0 },
        { id: "learn", label: "Learn from user feedback", correctPosition: 1 },
        { id: "improve", label: "Improve based on learnings", correctPosition: 2 },
        { id: "repeat", label: "Repeat the cycle", correctPosition: 3 },
      ],
      hint: "Start with shipping, end with repeating",
    },
    {
      type: "identify",
      prompt: "Which approach is better?",
      correctOptionId: "b",
      correctExplanation: "Yes! Small steps are manageable. Big steps lead to burnout.",
      wrongExplanation: "Don't try to do everything at once.",
      options: [
        {
          id: "a",
          text: "Prompt: 'Build a full social network'",
          icon: "🐘",
        },
        {
          id: "b",
          text: "Prompt: 'Build a login component'",
          icon: "🐜",
        },
        {
          id: "c",
          text: "Prompt: 'Write 10,000 lines of code'",
          icon: "📜",
        },
      ],
    },
    {
      type: "text",
      title: "Recovery: When You Get Stuck",
      body:
        "If the AI gets confused or the app breaks, it usually means you tried to do too much at once. Delete the last change. Try again with a smaller step.",
    },
    {
      type: "buildTask",
      title: "Ship Your First Page",
      description: "Build and deploy a simple page in 15 minutes",
      task: "Create a simple 'Hello World' page in Next.js. Use Cursor to generate it. Then deploy it to Vercel. The goal is to go from zero to live in 15 minutes. Don't perfect it - just ship it.",
      expectedOutcome: "A live page on the internet that you built and deployed",
      verificationSteps: [
        "Created a Next.js page component",
        "Deployed to Vercel",
        "Page is accessible via a public URL",
        "Took less than 15 minutes total",
        "Page displays 'Hello World' or similar"
      ],
      tips: [
        "Use 'npx create-next-app@latest' to start",
        "Ask Cursor to create a simple page component",
        "Connect your GitHub repo to Vercel",
        "Don't worry about perfection - just get it live"
      ],
    },
    {
      type: "text",
      title: "Confidence Boost",
      body:
        "You are now in the top 1% of people who actually ship. Most people just talk about ideas. You put one on the internet. Keep going.",
    },
  ],
};

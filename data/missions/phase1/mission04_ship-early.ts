import { MissionData } from "../world0";

export const mission04: MissionData = {
  id: "ship-early",
  title: "Ship Early, Iterate Often",
  slides: [
    {
      type: "text",
      title: "The Launch Trap",
      content:
        "Most builders never launch. They perfect. They polish. They wait for the 'right time.' Meanwhile, competitors ship, learn, and win. Don't be most builders.",
    },
    {
      type: "text",
      title: "The Power of Imperfect Launches",
      content:
        "Your first version will be bad. That's okay. Your second will be better. Your third will be good. But you can't get to version three without shipping version one.",
    },
    {
      type: "text",
      title: "What 'Done' Really Means",
      content:
        "Done doesn't mean perfect. Done means it works. Done means users can use it. Done means you can learn from it. Ship when it's done, not when it's perfect.",
    },
    {
      type: "toggle_cards",
      title: "The Iteration Cycle",
      cards: [
        {
          id: "ship",
          title: "Ship",
          description: "Launch the working version. Get it in front of users. Make it real.",
        },
        {
          id: "learn",
          title: "Learn",
          description: "Watch how users interact. Listen to feedback. See what breaks.",
        },
        {
          id: "improve",
          title: "Improve",
          description: "Fix what's broken. Add what's missing. Make it better.",
        },
        {
          id: "repeat",
          title: "Repeat",
          description: "Ship again. Learn again. Improve again. This is the loop.",
        },
      ],
    },
    {
      type: "text",
      title: "The 80/20 Rule",
      content:
        "The first 80% of your product takes 20% of the time. The last 20% takes 80% of the time. Ship at 80%. The remaining 20% can wait. Users will tell you what actually matters.",
    },
    {
      type: "quiz",
      question: "When should you ship your product?",
      options: [
        { id: "a", text: "When it's perfect and bug-free" },
        { id: "b", text: "When it works and users can use it" },
        { id: "c", text: "When you've added every feature you can think of" },
      ],
      correct: "b",
      feedbackCorrect: "Exactly! Ship when it works. Perfection can come later through iteration.",
      feedbackWrong: "Think about what actually matters to users - working features, not perfection.",
    },
    {
      type: "text",
      title: "The Founder's Advantage",
      content:
        "While others perfect, you ship. While others plan, you learn. While others wait, you iterate. This is your advantage. Use it.",
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
      type: "speedQuiz",
      title: "Ship Early Quiz",
      description: "Test your understanding of shipping and iteration",
      questions: [
        {
          id: "q1",
          question: "When should you ship?",
          options: [
            { id: "a", text: "When it's perfect" },
            { id: "b", text: "When it works and users can use it" },
            { id: "c", text: "When you've added every feature" },
          ],
          correct: "b",
          timeLimit: 12,
        },
        {
          id: "q2",
          question: "What does the 80/20 rule say?",
          options: [
            { id: "a", text: "Ship at 80%, the last 20% can wait" },
            { id: "b", text: "Perfect the first 20%" },
            { id: "c", text: "Never ship until 100%" },
          ],
          correct: "a",
          timeLimit: 12,
        },
        {
          id: "q3",
          question: "What's the iteration cycle?",
          options: [
            { id: "a", text: "Ship, Learn, Improve, Repeat" },
            { id: "b", text: "Plan, Perfect, Ship" },
            { id: "c", text: "Think, Think, Think" },
          ],
          correct: "a",
          timeLimit: 12,
        },
      ],
    },
  ],
};


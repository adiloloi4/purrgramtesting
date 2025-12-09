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
  ],
};


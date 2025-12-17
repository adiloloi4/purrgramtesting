import { MissionData } from "../world0";

export const mission06: MissionData = {
  id: "founder-mindset",
  title: "Think Like a Founder",
  slides: [
    {
      type: "text",
      title: "The Mindset Shift",
      body:
        "Developers think in code. Founders think in products. You're not just writing code - you're building something people will use. This shift changes everything.",
    },
    {
      type: "text",
      title: "Product Vision Over Code Perfection",
      body:
        "A founder asks: 'Does this solve a real problem?' A developer asks: 'Is this code perfect?' Both matter, but the product question comes first. Users don't pay for perfect code. They pay for solutions.",
    },
    {
      type: "checklist",
      title: "Founder vs Developer Thinking",
      prompt: "Compare the mindsets.",
      items: [
        { id: "founder", label: "Founder: Problem? Who needs it? Fast path?" },
        { id: "developer", label: "Developer: Clean code? Optimized? Maintainable?" },
        { id: "vibe", label: "Vibe Coder: Product First, Code Second." }
      ]
    },
    {
      type: "text",
      title: "The User-First Approach",
      body:
        "Every feature starts with a user problem. Not with a cool technology. Not with a perfect architecture. With a problem someone has. Solve that, and the rest follows.",
    },
    {
      type: "quiz",
      question: "What should come first when building a feature?",
      options: [
        { id: "a", text: "Writing perfect code" },
        { id: "b", text: "Understanding the user problem" },
        { id: "c", text: "Choosing the best technology" },
      ],
      correctOptionId: "b",
      correctExplanation: "Exactly! Always start with the user problem. Everything else follows from that.",
      wrongExplanation: "Think about what founders prioritize - it's always the user and their problems.",
    },
    {
      type: "identify",
      prompt: "Which thought process is a Founder Mindset?",
      correctOptionId: "b",
      correctExplanation: "Yes! Shipping to validate is the founder way.",
      wrongExplanation: "Don't get stuck in optimization before you have users.",
      options: [
        {
          id: "a",
          text: "I need to optimize this database query before launch",
          icon: "🐢",
        },
        {
          id: "b",
          text: "I need to ship this landing page to see if anyone cares",
          icon: "🚀",
        },
        {
          id: "c",
          text: "I need to rewrite the CSS to be cleaner",
          icon: "🧹",
        },
      ],
    },
    {
      type: "text",
      title: "Validation Over Assumption",
      body:
        "Founders validate. They ship, measure, learn. They don't assume they know what users want. They find out. You should too. Build, ship, measure, iterate.",
    },
    {
      type: "buildTask",
      title: "Build a Feature from a User Problem",
      description: "Solve a problem, don't write code",
      task: "Problem: Users lose their place. Solution: A 'Bookmark' button. Tell Cursor: 'Create a simple Bookmark button that toggles between saved and unsaved states when clicked.'",
      expectedOutcome: "A working bookmark component",
      verificationSteps: [
        "You defined the problem",
        "You asked AI for the solution",
        "The button works (toggles state)"
      ],
      tips: [
        "Don't worry about where to save data yet",
        "Just make the UI work first",
        "Focus on the user experience"
      ],
    },
    {
      type: "speedQuiz",
      title: "Founder Mindset Speed Round",
      description: "Quick questions to test your founder thinking!",
      questions: [
        {
          id: "q1",
          question: "What comes first when building a feature?",
          options: [
            { id: "a", text: "Perfect code" },
            { id: "b", text: "User problem" },
            { id: "c", text: "Cool technology" },
          ],
          correct: "b",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "What do founders prioritize?",
          options: [
            { id: "a", text: "Code quality" },
            { id: "b", text: "Product vision" },
            { id: "c", text: "Perfect architecture" },
          ],
          correct: "b",
          timeLimit: 10,
        },
        {
          id: "q3",
          question: "How do founders validate ideas?",
          options: [
            { id: "a", text: "Assume they know" },
            { id: "b", text: "Ship, measure, learn" },
            { id: "c", text: "Plan forever" },
          ],
          correct: "b",
          timeLimit: 10,
        },
      ],
    },
    {
      type: "text",
      title: "Confidence Boost",
      body:
        "You are not just a coder. You are a builder. You solve problems. That is valuable.",
    },
  ],
};

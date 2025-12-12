import { MissionData } from "../world0";

export const mission06: MissionData = {
  id: "founder-mindset",
  title: "Think Like a Founder",
  slides: [
    {
      type: "text",
      title: "The Mindset Shift",
      content:
        "Developers think in code. Founders think in products. You're not just writing code - you're building something people will use. This shift changes everything.",
    },
    {
      type: "text",
      title: "Product Vision Over Code Perfection",
      content:
        "A founder asks: 'Does this solve a real problem?' A developer asks: 'Is this code perfect?' Both matter, but the product question comes first. Users don't pay for perfect code. They pay for solutions.",
    },
    {
      type: "toggle_cards",
      title: "Founder vs Developer Thinking",
      cards: [
        {
          id: "founder",
          title: "Founder Thinks",
          description: "What problem am I solving? Who needs this? How do I validate this? What's the fastest path to users?",
        },
        {
          id: "developer",
          title: "Developer Thinks",
          description: "Is this code clean? Are there bugs? Is it optimized? Is it maintainable?",
        },
        {
          id: "vibe",
          title: "Vibe Coder Thinks",
          description: "Both. But product first, code second. Ship solutions, then optimize code.",
        },
      ],
    },
    {
      type: "text",
      title: "The User-First Approach",
      content:
        "Every feature starts with a user problem. Not with a cool technology. Not with a perfect architecture. With a problem someone has. Solve that, and the rest follows.",
    },
    {
      type: "text",
      title: "Validation Over Assumption",
      content:
        "Founders validate. They ship, measure, learn. They don't assume they know what users want. They find out. You should too. Build, ship, measure, iterate.",
    },
    {
      type: "quiz",
      question: "What should come first when building a feature?",
      options: [
        { id: "a", text: "Writing perfect code" },
        { id: "b", text: "Understanding the user problem" },
        { id: "c", text: "Choosing the best technology" },
      ],
      correct: "b",
      feedbackCorrect: "Exactly! Always start with the user problem. Everything else follows from that.",
      feedbackWrong: "Think about what founders prioritize - it's always the user and their problems.",
    },
    {
      type: "matching",
      title: "Match the Mindset",
      pairs: [
        { left: "Product Vision", right: "What problem am I solving?" },
        { left: "Code Quality", right: "Is this maintainable?" },
        { left: "User Validation", right: "Do people actually use this?" },
        { left: "Speed to Market", right: "How fast can I ship?" },
      ],
    },
    {
      type: "text",
      title: "The Founder's Edge",
      content:
        "When you think like a founder, you build what matters. You ship faster. You learn quicker. You win. This mindset is your edge. Use it.",
    },
    {
      type: "buildTask",
      title: "Build a Feature from a User Problem",
      description: "Practice founder thinking by building a real feature",
      task: "Think of a simple user problem (e.g., 'Users need a way to save their favorite items'). Use Cursor to build a solution. Create a component that lets users save/favorite items. Don't worry about perfection - just solve the problem and make it work.",
      expectedOutcome: "A working feature that solves a real user problem",
      verificationSteps: [
        "Identified a user problem",
        "Built a component to solve it",
        "Feature works (users can interact with it)",
        "Deployed or tested locally",
        "Took less than 30 minutes total"
      ],
      tips: [
        "Start with the problem, not the code",
        "Use Cursor to generate the component",
        "Focus on functionality over perfection",
        "Test it works before polishing"
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
      type: "memoryGame",
      title: "Founder vs Developer Thinking",
      description: "Match the mindset to its focus",
      cards: [
        { id: "founder", front: "Founder Thinks", back: "What problem am I solving? Who needs this?" },
        { id: "developer", front: "Developer Thinks", back: "Is this code clean? Is it maintainable?" },
        { id: "vibe", front: "Vibe Coder Thinks", back: "Product first, code second" },
        { id: "user-first", front: "User-First", back: "Every feature starts with a user problem" },
        { id: "validate", front: "Validation", back: "Ship, measure, learn - don't assume" },
      ],
      timeLimit: 60,
    },
  ],
};


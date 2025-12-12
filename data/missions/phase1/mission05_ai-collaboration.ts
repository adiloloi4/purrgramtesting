import { MissionData } from "../world0";

export const mission05: MissionData = {
  id: "ai-collaboration",
  title: "AI as Your Co-Pilot",
  slides: [
    {
      type: "text",
      title: "Not Replacement, Amplification",
      content:
        "AI isn't here to replace you. It's here to amplify you. You bring the vision, the strategy, the product sense. AI brings the speed, the syntax, the implementation. Together, you're unstoppable.",
    },
    {
      type: "text",
      title: "Building Trust",
      content:
        "Trust in AI collaboration comes from understanding its strengths and weaknesses. AI is great at code generation, pattern matching, and repetitive tasks. You're great at product vision, user empathy, and strategic thinking.",
    },
    {
      type: "toggle_cards",
      title: "The Partnership",
      cards: [
        {
          id: "you",
          title: "You Do",
          description: "Define features, understand users, make product decisions, review code, test functionality.",
        },
        {
          id: "ai",
          title: "AI Does",
          description: "Write boilerplate, generate components, find bugs, explain concepts, suggest improvements.",
        },
        {
          id: "together",
          title: "Together",
          description: "You describe what you want. AI builds it. You review it. You iterate. This is the loop.",
        },
      ],
    },
    {
      type: "text",
      title: "The Communication Loop",
      content:
        "Good AI collaboration is a conversation. You ask. AI responds. You refine. AI improves. You test. AI fixes. This back-and-forth is where the magic happens.",
    },
    {
      type: "text",
      title: "When to Trust, When to Verify",
      content:
        "Trust AI for syntax, patterns, and code generation. Verify AI for logic, security, and edge cases. Always review. Always test. AI is a tool, not a replacement for your judgment.",
    },
    {
      type: "quiz",
      question: "What should you always do with AI-generated code?",
      options: [
        { id: "a", text: "Use it immediately without checking" },
        { id: "b", text: "Review it, test it, and verify it works" },
        { id: "c", text: "Assume it's always correct" },
      ],
      correct: "b",
      feedbackCorrect: "Exactly! Always review and test AI-generated code. Trust but verify.",
      feedbackWrong: "Think about best practices for working with AI - you should always verify.",
    },
    {
      type: "identify",
      title: "Identify the Best Collaboration",
      question: "Which scenario shows the best AI collaboration?",
      correctId: "b",
      feedbackCorrect: "Yes! This shows a proper collaboration loop: describe, generate, review, refine.",
      feedbackWrong: "Think about which scenario shows you working together with AI, not just using it blindly.",
      options: [
        {
          id: "a",
          text: "Copy-paste AI code without understanding it",
          icon: "❌",
        },
        {
          id: "b",
          text: "Describe what you want, review the code, ask for improvements",
          icon: "✅",
        },
        {
          id: "c",
          text: "Let AI make all product decisions",
          icon: "❌",
        },
      ],
    },
    {
      type: "text",
      title: "Your Co-Pilot",
      content:
        "AI is your co-pilot, not your autopilot. You're still the captain. You make the decisions. AI executes them. This partnership is the future of building. Master it.",
    },
    {
      type: "codeChallenge",
      title: "Build with AI Collaboration",
      description: "Practice the collaboration loop with a real feature",
      task: "Ask Cursor to create a button component. Then ask it to add a loading state. Then ask it to add a disabled state. Then ask it to make it look more modern. This is the collaboration loop - describe, generate, review, refine.",
      starterCode: "// Ask Cursor: Create a button component\n// Then iterate on it",
      successCriteria: [
        "Created button component with AI",
        "Added loading state",
        "Added disabled state",
        "Improved styling",
        "Component works correctly"
      ],
      hint: "Use Cursor's chat (Cmd+K) to have a conversation with AI about the button",
      example: "Prompt 1: 'Create a button component'\nPrompt 2: 'Add a loading spinner when clicked'\nPrompt 3: 'Make it disabled when loading'",
    },
    {
      type: "memoryGame",
      title: "AI Collaboration Memory Game",
      description: "Match what you do vs what AI does",
      cards: [
        { id: "vision", front: "You: Product Vision", back: "Define features and strategy" },
        { id: "code", front: "AI: Code Generation", back: "Write boilerplate and components" },
        { id: "review", front: "You: Review & Test", back: "Verify and test functionality" },
        { id: "explain", front: "AI: Explain Concepts", back: "Help you understand code" },
      ],
      timeLimit: 50,
    },
    {
      type: "speedQuiz",
      title: "AI Collaboration Quiz",
      description: "Test your understanding of working with AI",
      questions: [
        {
          id: "q1",
          question: "What should you always do with AI-generated code?",
          options: [
            { id: "a", text: "Use it immediately" },
            { id: "b", text: "Review, test, and verify it" },
            { id: "c", text: "Assume it's correct" },
          ],
          correct: "b",
          timeLimit: 12,
        },
        {
          id: "q2",
          question: "What is AI great at?",
          options: [
            { id: "a", text: "Product vision and strategy" },
            { id: "b", text: "Code generation and pattern matching" },
            { id: "c", text: "Making all decisions" },
          ],
          correct: "b",
          timeLimit: 12,
        },
        {
          id: "q3",
          question: "What is the collaboration loop?",
          options: [
            { id: "a", text: "You describe, AI builds, you review, you iterate" },
            { id: "b", text: "AI does everything" },
            { id: "c", text: "You do everything" },
          ],
          correct: "a",
          timeLimit: 12,
        },
      ],
    },
  ],
};


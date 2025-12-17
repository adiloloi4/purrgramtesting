import { MissionData } from "../world0";

export const mission05: MissionData = {
  id: "ai-collaboration",
  title: "AI as Your Co-Pilot",
  slides: [
    {
      type: "text",
      title: "Not Replacement, Amplification",
      body:
        "AI isn't here to replace you. It's here to amplify you. You bring the vision, the strategy, the product sense. AI brings the speed, the syntax, the implementation. Together, you're unstoppable.",
    },
    {
      type: "text",
      title: "Building Trust",
      body:
        "Trust in AI collaboration comes from understanding its strengths and weaknesses. AI is great at code generation, pattern matching, and repetitive tasks. You're great at product vision, user empathy, and strategic thinking.",
    },
    {
      type: "checklist",
      title: "The Partnership",
      prompt: "Who does what?",
      items: [
        { id: "you", label: "You: Vision, Strategy, Product Decisions" },
        { id: "ai", label: "AI: Boilerplate, Components, Debugging" },
        { id: "loop", label: "Together: Describe -> Build -> Review -> Iterate" }
      ]
    },
    {
      type: "text",
      title: "The Communication Loop",
      body:
        "Good AI collaboration is a conversation. You ask. AI responds. You refine. AI improves. You test. AI fixes. This back-and-forth is where the magic happens.",
    },
    {
      type: "quiz",
      question: "What should you always do with AI-generated code?",
      options: [
        { id: "a", text: "Use it immediately without checking" },
        { id: "b", text: "Review it, test it, and verify it works" },
        { id: "c", text: "Assume it's always correct" },
      ],
      correctOptionId: "b",
      correctExplanation: "Exactly! Always review and test AI-generated code. Trust but verify.",
      wrongExplanation: "Think about best practices for working with AI - you should always verify.",
    },
    {
      type: "identify",
      prompt: "Which scenario shows the best AI collaboration?",
      correctOptionId: "b",
      correctExplanation: "Yes! This shows a proper collaboration loop: describe, generate, review, refine.",
      wrongExplanation: "Think about which scenario shows you working together with AI, not just using it blindly.",
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
      body:
        "AI is your co-pilot, not your autopilot. You're still the captain. You make the decisions. AI executes them. This partnership is the future of building. Master it.",
    },
    {
      type: "codeChallenge",
      title: "Build with AI Collaboration",
      description: "Practice the collaboration loop",
      task: "Ask Cursor: 'Create a button that shows a loading spinner when I click it.' Then, once you see it, ask: 'Now make it look like a glossy 3D button.'",
      starterCode: "// Ask AI to create the button first\n// Then ask for improvements",
      successCriteria: [
        "You started with a simple request",
        "You iterated to add the loading state",
        "You iterated again for styling",
        "You didn't write the CSS manually"
      ],
      hint: "Treat it like a conversation. 'That looks good, but can you make it...'",
      example: "// You don't write code here. You write prompts.",
    },
    {
      type: "sequenceGame",
      title: "The Collab Loop",
      description: "Order the steps of a healthy AI partnership",
      items: [
        { id: "describe", label: "You Describe (Vision)", correctPosition: 0 },
        { id: "generate", label: "AI Generates (Code)", correctPosition: 1 },
        { id: "review", label: "You Review (Verification)", correctPosition: 2 },
        { id: "refine", label: "You Ask for Changes (Refinement)", correctPosition: 3 },
        { id: "learn", label: "AI Explains (Learning)", correctPosition: 4 },
      ],
    },
    {
      type: "text",
      title: "Confidence Boost",
      body:
        "You are not alone. You have the world's smartest engineer sitting next to you 24/7. Use them.",
    },
  ],
};

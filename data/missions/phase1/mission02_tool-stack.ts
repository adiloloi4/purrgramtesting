import { MissionData } from "../world0";

export const mission02: MissionData = {
  id: "tool-stack",
  title: "Your Tool Stack",
  slides: [
    {
      type: "text",
      title: "The Golden Stack",
      content:
        "Every Vibe Coder needs the right tools. Not hundreds of them. Just four that work together perfectly: Cursor, V0, Supabase, and Claude. This is your stack. Master these, and you can build anything.",
    },
    {
      type: "toggle_cards",
      title: "Your Four Tools",
      cards: [
        {
          id: "cursor",
          title: "Cursor",
          description: "Your AI-powered IDE. Where you write, edit, and compose code with AI assistance. This is your command center.",
        },
        {
          id: "v0",
          title: "V0",
          description: "AI component generator. Describe a UI, get React code. Perfect for rapid prototyping and component creation.",
        },
        {
          id: "supabase",
          title: "Supabase",
          description: "Your backend in a box. Database, Auth, Storage, and Edge Functions. All the infrastructure you need, ready to go.",
        },
        {
          id: "claude",
          title: "Claude",
          description: "Your AI co-pilot. Ask questions, get explanations, debug code, design systems. Your thinking partner.",
        },
      ],
    },
    {
      type: "text",
      title: "How They Work Together",
      content:
        "V0 generates components. Cursor integrates them. Supabase stores data. Claude explains concepts. Each tool does one thing exceptionally well. Together, they form an unstoppable workflow.",
    },
    {
      type: "text",
      title: "The Workflow",
      content:
        "1. Use V0 to generate UI components from descriptions. 2. Import them into Cursor. 3. Connect to Supabase for data. 4. Ask Claude when you're stuck. This is the Vibe Coding loop.",
    },
    {
      type: "buildTask",
      title: "Try the Vibe Coding Workflow",
      description: "Practice using all four tools together",
      task: "1. Go to v0.dev and generate a simple button component. 2. Copy the code into Cursor. 3. Create a new Next.js page and use the component. 4. If you get stuck, ask Claude for help. This is the complete workflow in action.",
      expectedOutcome: "A working page with a component generated from V0",
      verificationSteps: [
        "Generated a component on v0.dev",
        "Copied code into Cursor",
        "Created a Next.js page",
        "Component renders correctly",
        "Used Claude if needed for help"
      ],
      tips: [
        "Visit v0.dev and describe a simple button",
        "Copy the generated React code",
        "Paste it into a new component file in Cursor",
        "Import and use it in a page",
        "Ask Claude if you encounter any issues"
      ],
    },
    {
      type: "quiz",
      question: "Which tool is best for generating React components from a text description?",
      options: [
        { id: "a", text: "Cursor" },
        { id: "b", text: "V0" },
        { id: "c", text: "Supabase" },
      ],
      correct: "b",
      feedbackCorrect: "Correct! V0 is specifically designed to generate UI components from natural language descriptions.",
      feedbackWrong: "Think about which tool specializes in component generation from text prompts.",
    },
    {
      type: "quiz",
      question: "Where do you write and edit code with AI assistance?",
      options: [
        { id: "a", text: "V0" },
        { id: "b", text: "Cursor" },
        { id: "c", text: "Claude" },
      ],
      correct: "b",
      feedbackCorrect: "Yes! Cursor is your IDE where you write, edit, and compose code with AI superpowers.",
      feedbackWrong: "Think about which tool is the code editor with AI features.",
    },
    {
      type: "matching",
      title: "Match the Tool to Its Purpose",
      pairs: [
        { left: "Cursor", right: "AI-powered code editor" },
        { left: "V0", right: "Component generator" },
        { left: "Supabase", right: "Backend infrastructure" },
        { left: "Claude", right: "AI co-pilot" },
      ],
    },
    {
      type: "sequenceGame",
      title: "The Vibe Coding Workflow",
      description: "Order the steps of the Vibe Coding loop",
      items: [
        { id: "v0", label: "Generate components with V0", correctPosition: 0 },
        { id: "cursor", label: "Import into Cursor", correctPosition: 1 },
        { id: "supabase", label: "Connect to Supabase", correctPosition: 2 },
        { id: "claude", label: "Ask Claude when stuck", correctPosition: 3 },
      ],
      hint: "Start with component generation, end with getting help",
    },
    {
      type: "memoryGame",
      title: "The Golden Stack Memory Game",
      description: "Match each tool to its purpose in the Vibe Coding stack",
      cards: [
        { id: "cursor", front: "Cursor", back: "AI-powered IDE - your command center" },
        { id: "v0", front: "V0", back: "AI component generator from descriptions" },
        { id: "supabase", front: "Supabase", back: "Backend in a box - DB, Auth, Storage" },
        { id: "claude", front: "Claude", back: "AI co-pilot - explains and debugs" },
      ],
      timeLimit: 50,
    },
  ],
};


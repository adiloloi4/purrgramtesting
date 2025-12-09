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
  ],
};


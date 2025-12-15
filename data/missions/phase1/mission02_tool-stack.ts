import { MissionData } from "../world0";

export const mission02: MissionData = {
  id: "tool-stack",
  title: "Your Tool Stack",
  slides: [
    {
      type: "text",
      title: "The Golden Stack",
      body:
        "Every Vibe Coder needs the right tools. Not hundreds of them. Just four that work together perfectly: Cursor, V0, Supabase, and Claude. This is your stack. Master these, and you can build anything.",
    },
    {
      type: "text",
      title: "Why These Four?",
      body:
        "These tools were chosen because they speak the same language: Speed. They remove the friction of setup, syntax, and servers. They let you move at the speed of thought.",
    },
    {
      type: "checklist",
      title: "Your Four Tools",
      prompt: "The Golden Stack.",
      items: [
        { id: "cursor", label: "Cursor: AI IDE (Command Center)" },
        { id: "v0", label: "V0: Component Generator (Designer)" },
        { id: "supabase", label: "Supabase: Backend (Infrastructure)" },
        { id: "claude", label: "Claude: AI Co-pilot (Thinking Partner)" }
      ]
    },
    {
      type: "quiz",
      question: "Which tool is best for generating React components from a text description?",
      options: [
        { id: "a", text: "Cursor" },
        { id: "b", text: "V0" },
        { id: "c", text: "Supabase" },
      ],
      correctOptionId: "b",
      correctExplanation: "Correct! V0 is specifically designed to generate UI components from natural language descriptions.",
      wrongExplanation: "Think about which tool specializes in component generation from text prompts.",
    },
    {
      type: "text",
      title: "The Workflow Loop",
      body:
        "1. Use V0 to generate UI components. 2. Import them into Cursor. 3. Connect to Supabase for data. 4. Ask Claude when you get stuck. This is the Vibe Coding loop.",
    },
    {
      type: "matching",
      prompt: "Match the Tool to Its Purpose",
      pairs: [
        { id: "cursor", left: "Cursor", right: "AI-powered code editor" },
        { id: "v0", left: "V0", right: "Component generator" },
        { id: "supabase", left: "Supabase", right: "Backend infrastructure" },
        { id: "claude", left: "Claude", right: "AI co-pilot" },
      ],
    },
    {
      type: "text",
      title: "The Danger of Tool Hopping",
      body:
        "Beginners fail because they keep switching tools. 'Maybe I should try Python? Maybe AWS?' No. Stick to the Golden Stack until you have shipped. Mastery comes from focus.",
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
      type: "spotTheBug",
      title: "Broken Stack Config",
      description: "Find the error in the tool configuration",
      code: "// next.config.ts\n\nconst config = {\n  // We want to use V0 images\n  images: {\n    domains: ['v0.blob.com', 'google.com'],\n  },\n  // Connection to Backend\n  env: {\n    SUPABASE_URL: 'http://localhost:3000', // Bug is here\n  }\n}",
      bugs: [
        {
          id: "wrong-url",
          line: 9,
          description: "Supabase URL is pointing to localhost frontend port instead of the Supabase API",
          fix: "SUPABASE_URL should be the real project URL from Supabase dashboard",
        },
      ],
    },
    {
      type: "text",
      title: "Confidence Boost",
      body:
        "You now have the best tools in the world. You are not hacking things together. You are building with professional-grade infrastructure.",
    },
  ],
};

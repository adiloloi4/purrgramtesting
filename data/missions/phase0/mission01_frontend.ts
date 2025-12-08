import { MissionData } from "../world0";

export const mission01: MissionData = {
  id: "frontend-fundamentals",
  title: "Frontend Fundamentals",
  slides: [
    {
      type: "text",
      title: "What is the Frontend?",
      content:
        "The Frontend is the User Interface (UI). It's everything you see, click, and interact with. It's built with HTML (structure), CSS (style), and JavaScript (interaction).",
    },
    {
      type: "text",
      title: "Components: The Building Blocks",
      content:
        "Modern frontends are built with Components. A button, a card, or a navbar are all reusable components. Think of them as LEGO bricks.",
    },
    {
      type: "text",
      title: "Rendering & State",
      content:
        "Rendering is drawing the UI on the screen. State is the data that changes over time (like a cart count). When state changes, the UI rerenders to show the new reality.",
    },
    {
      type: "toggle_cards",
      title: "The UI Builder Ecosystem",
      cards: [
        { id: "v0", title: "v0.dev", description: "AI that generates UI components from text prompts. Best for rapid prototyping." },
        { id: "base44", title: "Base44", description: "A system for building consistent component libraries." },
        { id: "lovable", title: "Lovable", description: "Full-page UI generator that converts designs to code." },
        { id: "webflow", title: "Webflow", description: "Visual builder, great for static sites but less flexible for complex apps." }
      ]
    },
    {
      type: "text",
      title: "Cursor: The Integrator",
      content:
        "While builders like v0 generate parts, Cursor is your IDE (Integrated Development Environment) where you assemble them. It gives you full code-level control with AI superpowers.",
    },
    {
      type: "quiz",
      question: "Which tool is best for generating a single component from a text description?",
      options: [
        { id: "a", text: "v0.dev" },
        { id: "b", text: "Webflow" },
        { id: "c", text: "GitHub Desktop" },
      ],
      correct: "a",
      feedbackCorrect: "Correct. v0 is specialized for component generation.",
      feedbackWrong: "Think about the tool made by Vercel for generative UI.",
    },
    {
      type: "quiz",
      question: "When the 'State' of an application changes, what happens?",
      options: [
        { id: "a", text: "The Database deletes data" },
        { id: "b", text: "The UI Rerenders" },
        { id: "c", text: "The Server shuts down" },
      ],
      correct: "b",
      feedbackCorrect: "Yes! State changes trigger a rerender to update what the user sees.",
      feedbackWrong: "State is connected to the visual display.",
    },
    {
      type: "text",
      title: "Simulation: State Change",
      content:
        "Imagine a 'Like' button. When you click it, the 'isLiked' state turns true, and the heart icon turns red. That's a rerender in action.",
    },
  ],
};

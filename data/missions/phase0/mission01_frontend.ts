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
    {
      type: "codeChallenge",
      title: "Build a Like Button Component",
      description: "Practice state and rendering by building a real component",
      task: "Open Cursor and create a LikeButton component. It should have a heart icon that turns red when clicked. Use React useState to manage the 'isLiked' state. This demonstrates state change triggering a rerender.",
      starterCode: "// Create app/components/LikeButton.tsx\n// Use useState to track if liked\n// Change color when clicked",
      successCriteria: [
        "Component file created",
        "Uses useState hook",
        "Heart icon changes color on click",
        "State properly updates",
        "Component rerenders when state changes"
      ],
      hint: "Use useState(false) for isLiked, then toggle it on click",
      example: "const [isLiked, setIsLiked] = useState(false);",
    },
    {
      type: "speedQuiz",
      title: "Frontend Speed Round",
      description: "Answer quickly to test your frontend knowledge!",
      questions: [
        {
          id: "q1",
          question: "What happens when state changes?",
          options: [
            { id: "a", text: "UI rerenders" },
            { id: "b", text: "Database updates" },
            { id: "c", text: "Server restarts" },
          ],
          correct: "a",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "What are reusable UI building blocks called?",
          options: [
            { id: "a", text: "Components" },
            { id: "b", text: "Functions" },
            { id: "c", text: "Variables" },
          ],
          correct: "a",
          timeLimit: 10,
        },
        {
          id: "q3",
          question: "Which tool generates UI from text prompts?",
          options: [
            { id: "a", text: "v0.dev" },
            { id: "b", text: "GitHub" },
            { id: "c", text: "Vercel" },
          ],
          correct: "a",
          timeLimit: 10,
        },
      ],
    },
    {
      type: "memoryGame",
      title: "Frontend Concepts Memory Game",
      description: "Match frontend concepts to their definitions",
      cards: [
        { id: "ui", front: "UI", back: "Everything you see, click, and interact with" },
        { id: "components", front: "Components", back: "Reusable building blocks (like LEGO bricks)" },
        { id: "rendering", front: "Rendering", back: "Drawing the UI on the screen" },
        { id: "state", front: "State", back: "Data that changes over time (like cart count)" },
        { id: "v0", front: "v0.dev", back: "AI that generates UI components from text" },
        { id: "cursor", front: "Cursor", back: "IDE where you assemble components" },
      ],
      timeLimit: 60,
    },
  ],
};

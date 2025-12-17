import { MissionData } from "../world0";

export const mission01: MissionData = {
  id: "frontend-fundamentals",
  title: "Frontend Fundamentals",
  slides: [
    {
      type: "text",
      title: "What is the Frontend?",
      body:
        "The Frontend is the User Interface (UI). It's everything you see, click, and interact with. It's built with HTML (structure), CSS (style), and JavaScript (interaction).",
    },
    {
      type: "text",
      title: "Components: The Building Blocks",
      body:
        "Modern frontends are built with Components. A button, a card, or a navbar are all reusable components. Think of them as LEGO bricks.",
    },
    {
      type: "text",
      title: "Rendering & State",
      body:
        "Rendering is drawing the UI on the screen. State is the data that changes over time (like a cart count). When state changes, the UI rerenders to show the new reality.",
    },
    {
      type: "checklist",
      title: "The UI Builder Ecosystem",
      prompt: "Explore the tools.",
      items: [
        { id: "v0", label: "v0.dev: AI Component Generator" },
        { id: "base44", label: "Base44: Component Library System" },
        { id: "lovable", label: "Lovable: Full-page UI Generator" },
        { id: "webflow", label: "Webflow: Visual Builder" }
      ]
    },
    {
      type: "text",
      title: "Cursor: The Integrator",
      body:
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
      correctOptionId: "a",
      correctExplanation: "Correct. v0 is specialized for component generation.",
      wrongExplanation: "Think about the tool made by Vercel for generative UI.",
    },
    {
      type: "quiz",
      question: "When the 'State' of an application changes, what happens?",
      options: [
        { id: "a", text: "The Database deletes data" },
        { id: "b", text: "The UI Rerenders" },
        { id: "c", text: "The Server shuts down" },
      ],
      correctOptionId: "b",
      correctExplanation: "Yes! State changes trigger a rerender to update what the user sees.",
      wrongExplanation: "State is connected to the visual display.",
    },
    {
      type: "text",
      title: "Simulation: State Change",
      body:
        "Imagine a 'Like' button. When you click it, the 'isLiked' state turns true, and the heart icon turns red. That's a rerender in action.",
    },
    {
      type: "codeChallenge",
      title: "Build a Like Button Component",
      description: "Direct the AI to build a real component",
      task: "Open Cursor Chat. Type: 'Create a Like Button component. It should have a heart icon that turns red when I click it.'",
      starterCode: "// Ask AI to create app/components/LikeButton.tsx\n// It will handle the state for you",
      successCriteria: [
        "You asked the AI to build it",
        "The component exists",
        "Clicking the heart turns it red",
        "You didn't write the state logic yourself"
      ],
      hint: "If it doesn't work, tell the AI: 'It's not changing color. Fix it.'",
      example: "// AI will generate:\n// const [isLiked, setIsLiked] = useState(false);",
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
      type: "sequenceGame",
      title: "The Frontend Workflow",
      description: "Order the steps of the frontend rendering cycle",
      items: [
        { id: "design", label: "Design component in v0", correctPosition: 0 },
        { id: "code", label: "Assemble in Cursor", correctPosition: 1 },
        { id: "render", label: "UI Renders on screen", correctPosition: 2 },
        { id: "interact", label: "User clicks button (Interaction)", correctPosition: 3 },
        { id: "state", label: "State updates", correctPosition: 4 },
        { id: "rerender", label: "UI Rerenders with new data", correctPosition: 5 },
      ],
    },
  ],
};

import { MissionData } from "../world0";

export const mission00: MissionData = {
  id: "overview-restaurant",
  title: "Overview: The Restaurant Analogy",
  slides: [
    {
      type: "text",
      title: "Welcome to Purrgram",
      content:
        "Before learning to build apps, you need one mental model. We will show you how apps work using a restaurant analogy. Forget the code for a moment... let's look at the system.",
    },
    {
      type: "text",
      title: "The Components",
      content:
        "Every app, from Instagram to Uber, has the same basic organs. We call this the 'Stack'. Understanding how they fit together is more important than knowing how to code them from scratch.",
    },
    {
      type: "toggle_cards",
      title: "Explore the Restaurant",
      cards: [
        { id: "frontend", title: "Frontend = The Waiters", description: "What customers interact with. Takes orders, shows the menu." },
        { id: "backend", title: "Backend = The Kitchen", description: "Where the work happens. Logic, processing, security." },
        { id: "database", title: "Database = The Fridge", description: "Storage for ingredients (data) and history." },
        { id: "api", title: "API = The Menu", description: "The contract of what can be ordered." }
      ]
    },
    {
      type: "quiz",
      question: "Which part of the restaurant represents the API?",
      options: [
        { id: "a", text: "The Kitchen" },
        { id: "b", text: "The Waiter" },
        { id: "c", text: "The Menu" },
        { id: "d", text: "The Fridge" },
      ],
      correct: "c",
      feedbackCorrect: "Correct! The Menu defines what is available to order, just like an API defines requests.",
      feedbackWrong: "Think about the list of available options.",
    },
    {
      type: "text",
      title: "Auth = The Manager",
      content:
        "Authentication is the Restaurant Manager. It controls who is allowed inside, who sits at which table (permissions), and ensures staff areas are secure.",
    },
    {
      type: "text",
      title: "External APIs = Suppliers",
      content:
        "External APIs are the Suppliers. The restaurant gets special ingredients or services from outside sources (like payment processing or maps) when needed.",
    },
    {
      type: "text",
      title: "Deployment = Food Delivery",
      content:
        "Deployment is like a food delivery service taking your restaurant's food to the entire city. Tools like Vercel make your app accessible to everyone on the internet.",
    },
    {
      type: "text",
      title: "Dev Tools = Staff Workspace",
      content:
        "Dev Tools are the staff workspace and utensils. Node.js, GitHub Desktop, and Cursor are the tools you use to build and manage the restaurant.",
    },
    {
      type: "matching",
      title: "Match the Roles",
      pairs: [
        { left: "Frontend", right: "Waiters" },
        { left: "Backend", right: "Kitchen" },
        { left: "Database", right: "Fridge" },
        { left: "API", right: "Menu" }
      ]
    },
    {
      type: "text",
      title: "The Big Picture",
      content:
        "Every modern app contains these parts. The rest of Phase 0 will teach each part in depth. You are now ready to step into the kitchen.",
    },
    {
      type: "sequenceGame",
      title: "Order the Data Flow",
      description: "Arrange the steps in the correct order of how data flows through an app",
      items: [
        { id: "user", label: "User clicks button", correctPosition: 0 },
        { id: "frontend", label: "Frontend sends request", correctPosition: 1 },
        { id: "api", label: "API processes request", correctPosition: 2 },
        { id: "backend", label: "Backend handles logic", correctPosition: 3 },
        { id: "database", label: "Database stores/retrieves data", correctPosition: 4 },
        { id: "response", label: "Response sent back to user", correctPosition: 5 },
      ],
      hint: "Start with user interaction, end with the response",
    },
    {
      type: "memoryGame",
      title: "Restaurant Analogy Memory Game",
      description: "Match each app component to its restaurant equivalent",
      cards: [
        { id: "frontend", front: "Frontend", back: "The Waiters (what customers interact with)" },
        { id: "backend", front: "Backend", back: "The Kitchen (where work happens)" },
        { id: "database", front: "Database", back: "The Fridge (storage for data)" },
        { id: "api", front: "API", back: "The Menu (contract of what's available)" },
        { id: "auth", front: "Auth", back: "The Manager (controls access)" },
        { id: "deployment", front: "Deployment", back: "Food Delivery (makes it accessible)" },
      ],
      timeLimit: 60,
    },
  ],
};

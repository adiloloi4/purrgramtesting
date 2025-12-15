import { MissionData } from "../world0";

export const mission00: MissionData = {
  id: "overview-restaurant",
  title: "Overview: The Restaurant Analogy",
  slides: [
    {
      type: "text",
      title: "Welcome to Purrgram",
      body:
        "Before learning to build apps, you need one mental model. We will show you how apps work using a restaurant analogy. Forget the code for a moment... let's look at the system.",
    },
    {
      type: "text",
      title: "The Components",
      body:
        "Every app, from Instagram to Uber, has the same basic organs. We call this the 'Stack'. Understanding how they fit together is more important than knowing how to code them from scratch.",
    },
    {
      type: "checklist",
      title: "Explore the Restaurant",
      prompt: "Learn the roles by checking them off.",
      items: [
        { id: "frontend", label: "Frontend = The Waiters (Takes orders)" },
        { id: "backend", label: "Backend = The Kitchen (Cooks food)" },
        { id: "database", label: "Database = The Fridge (Stores ingredients)" },
        { id: "api", label: "API = The Menu (What you can order)" }
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
      correctOptionId: "c",
      correctExplanation: "Correct! The Menu defines what is available to order, just like an API defines requests.",
      wrongExplanation: "Think about the list of available options.",
    },
    {
      type: "text",
      title: "Auth = The Manager",
      body:
        "Authentication is the Restaurant Manager. It controls who is allowed inside, who sits at which table (permissions), and ensures staff areas are secure.",
    },
    {
      type: "text",
      title: "External APIs = Suppliers",
      body:
        "External APIs are the Suppliers. The restaurant gets special ingredients or services from outside sources (like payment processing or maps) when needed.",
    },
    {
      type: "text",
      title: "Deployment = Food Delivery",
      body:
        "Deployment is like a food delivery service taking your restaurant's food to the entire city. Tools like Vercel make your app accessible to everyone on the internet.",
    },
    {
      type: "text",
      title: "Dev Tools = Staff Workspace",
      body:
        "Dev Tools are the staff workspace and utensils. Node.js, GitHub Desktop, and Cursor are the tools you use to build and manage the restaurant.",
    },
    {
      type: "matching",
      prompt: "Match the Roles",
      pairs: [
        { id: "frontend", left: "Frontend", right: "Waiters" },
        { id: "backend", left: "Backend", right: "Kitchen" },
        { id: "db", left: "Database", right: "Fridge" },
        { id: "api", left: "API", right: "Menu" }
      ]
    },
    {
      type: "text",
      title: "The Big Picture",
      body:
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
      type: "speedQuiz",
      title: "Restaurant Scenarios",
      description: "Who handles what in these situations?",
      questions: [
        {
          id: "q1",
          question: "A customer (User) wants to see the menu. Who brings it?",
          options: [
            { id: "a", text: "The Kitchen (Backend)" },
            { id: "b", text: "The Waiter (Frontend)" },
            { id: "c", text: "The Fridge (Database)" },
          ],
          correct: "b",
          timeLimit: 12,
        },
        {
          id: "q2",
          question: "The kitchen runs out of ingredients. Where do they check?",
          options: [
            { id: "a", text: "The Menu (API)" },
            { id: "b", text: "The Fridge (Database)" },
            { id: "c", text: "The Manager (Auth)" },
          ],
          correct: "b",
          timeLimit: 12,
        },
        {
          id: "q3",
          question: "Someone tries to enter the kitchen without permission. Who stops them?",
          options: [
            { id: "a", text: "The Manager (Auth)" },
            { id: "b", text: "The Waiter (Frontend)" },
            { id: "c", text: "The Food Delivery (Deployment)" },
          ],
          correct: "a",
          timeLimit: 12,
        },
      ],
    },
  ],
};

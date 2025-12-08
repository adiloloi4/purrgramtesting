import { MissionData } from "../world0";

export const mission03: MissionData = {
  id: "api-fundamentals",
  title: "API Fundamentals",
  slides: [
    {
      type: "text",
      title: "The Contract",
      content:
        "API stands for Application Programming Interface. It's a contract. 'If you ask for X, I will give you Y'. It connects the Frontend to the Backend.",
    },
    {
      type: "text",
      title: "Requests & Responses",
      content:
        "The Frontend sends a 'Request' (The Order). The Backend sends a 'Response' (The Food). Every interaction is a conversation.",
    },
    {
      type: "toggle_cards",
      title: "Common API Methods",
      cards: [
        { id: "get", title: "GET", description: "Retrieve data. Like reading a menu. Safe to call multiple times." },
        { id: "post", title: "POST", description: "Create new data. Like placing an order. Changes the state of the server." },
        { id: "put", title: "PUT / PATCH", description: "Update existing data. Like changing your order." },
        { id: "delete", title: "DELETE", description: "Remove data. Like cancelling an order." }
      ]
    },
    {
      type: "text",
      title: "REST vs GraphQL",
      content:
        "REST is standard (separate endpoints for resources). GraphQL is flexible (ask for exactly what you want in one query). We focus on REST concepts first as they are foundational.",
    },
    {
      type: "quiz",
      question: "You want to create a new user account. Which method do you use?",
      options: [
        { id: "a", text: "GET" },
        { id: "b", text: "POST" },
        { id: "c", text: "DELETE" },
      ],
      correct: "b",
      feedbackCorrect: "Correct! POST is used to create or send new data to the server.",
      feedbackWrong: "Creating new data changes the state of the server.",
    },
    {
      type: "quiz",
      question: "What is the API in our restaurant analogy?",
      options: [
        { id: "a", text: "The Chef" },
        { id: "b", text: "The Menu" },
        { id: "c", text: "The Table" },
      ],
      correct: "b",
      feedbackCorrect: "Yes. The Menu defines what requests are possible.",
      feedbackWrong: "Recall the overview mission analogy.",
    },
  ],
};

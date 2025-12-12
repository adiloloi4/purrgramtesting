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
      type: "codeChallenge",
      title: "Make Your First API Call",
      description: "Practice making API requests from the frontend",
      task: "Create a simple page that fetches data from a public API (like jsonplaceholder.typicode.com/posts). Use fetch() to make a GET request. Display the results. This is your first real API integration.",
      starterCode: "// Create app/api-practice/page.tsx\n// Use fetch() to get data\n// Display results",
      successCriteria: [
        "Created a page component",
        "Uses fetch() to make GET request",
        "Handles the response correctly",
        "Displays the data",
        "No errors in console"
      ],
      hint: "Use useEffect to fetch on component mount, useState to store data",
      example: "const [data, setData] = useState([]);\nuseEffect(() => {\n  fetch('https://jsonplaceholder.typicode.com/posts')\n    .then(res => res.json())\n    .then(data => setData(data));\n}, []);",
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
    {
      type: "matching",
      title: "Match API Methods to Actions",
      pairs: [
        { left: "GET", right: "Retrieve data" },
        { left: "POST", right: "Create new data" },
        { left: "PUT", right: "Update existing data" },
        { left: "DELETE", right: "Remove data" },
      ],
    },
    {
      type: "memoryGame",
      title: "API Methods Memory Game",
      description: "Match the HTTP methods with their purposes",
      cards: [
        { id: "get", front: "GET", back: "Read data safely" },
        { id: "post", front: "POST", back: "Create new resources" },
        { id: "put", front: "PUT", back: "Update existing data" },
        { id: "delete", front: "DELETE", back: "Remove data" },
      ],
      timeLimit: 45,
    },
    {
      type: "speedQuiz",
      title: "API Fundamentals Quiz",
      description: "Test your understanding of APIs, requests, and responses",
      questions: [
        {
          id: "q1",
          question: "What does API stand for?",
          options: [
            { id: "a", text: "Application Programming Interface" },
            { id: "b", text: "Advanced Programming Integration" },
            { id: "c", text: "Automated Program Interface" },
          ],
          correct: "a",
          timeLimit: 12,
        },
        {
          id: "q2",
          question: "In the restaurant analogy, what is the API?",
          options: [
            { id: "a", text: "The Chef" },
            { id: "b", text: "The Menu" },
            { id: "c", text: "The Waiter" },
          ],
          correct: "b",
          timeLimit: 12,
        },
        {
          id: "q3",
          question: "What does the Frontend send to the Backend?",
          options: [
            { id: "a", text: "A Request" },
            { id: "b", text: "A Response" },
            { id: "c", text: "A Database" },
          ],
          correct: "a",
          timeLimit: 12,
        },
        {
          id: "q4",
          question: "Which method is used to retrieve data?",
          options: [
            { id: "a", text: "POST" },
            { id: "b", text: "GET" },
            { id: "c", text: "DELETE" },
          ],
          correct: "b",
          timeLimit: 12,
        },
      ],
    },
  ],
};

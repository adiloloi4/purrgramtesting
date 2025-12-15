import { MissionData } from "../world0";

export const mission03: MissionData = {
  id: "api-fundamentals",
  title: "API Fundamentals",
  slides: [
    {
      type: "text",
      title: "The Contract",
      body:
        "API stands for Application Programming Interface. It's a contract. 'If you ask for X, I will give you Y'. It connects the Frontend to the Backend.",
    },
    {
      type: "text",
      title: "Requests & Responses",
      body:
        "The Frontend sends a 'Request' (The Order). The Backend sends a 'Response' (The Food). Every interaction is a conversation.",
    },
    {
      type: "checklist",
      title: "Common API Methods",
      prompt: "Learn the verbs.",
      items: [
        { id: "get", label: "GET: Retrieve data (Reading a menu)" },
        { id: "post", label: "POST: Create data (Placing an order)" },
        { id: "put", label: "PUT/PATCH: Update data (Changing order)" },
        { id: "delete", label: "DELETE: Remove data (Cancelling order)" }
      ]
    },
    {
      type: "text",
      title: "REST vs GraphQL",
      body:
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
      correctOptionId: "b",
      correctExplanation: "Correct! POST is used to create or send new data to the server.",
      wrongExplanation: "Creating new data changes the state of the server.",
    },
    {
      type: "quiz",
      question: "What is the API in our restaurant analogy?",
      options: [
        { id: "a", text: "The Chef" },
        { id: "b", text: "The Menu" },
        { id: "c", text: "The Table" },
      ],
      correctOptionId: "b",
      correctExplanation: "Yes. The Menu defines what requests are possible.",
      wrongExplanation: "Recall the overview mission analogy.",
    },
    {
      type: "matching",
      prompt: "Match API Methods to Actions",
      pairs: [
        { id: "get", left: "GET", right: "Retrieve data" },
        { id: "post", left: "POST", right: "Create new data" },
        { id: "put", left: "PUT", right: "Update existing data" },
        { id: "delete", left: "DELETE", right: "Remove data" },
      ],
    },
    {
      type: "sequenceGame",
      title: "API Request Lifecycle",
      description: "Order the steps of a successful API interaction",
      items: [
        { id: "user", label: "User clicks 'Sign Up'", correctPosition: 0 },
        { id: "browser", label: "Browser sends POST request", correctPosition: 1 },
        { id: "api", label: "API Endpoint receives data", correctPosition: 2 },
        { id: "db", label: "Backend saves to Database", correctPosition: 3 },
        { id: "response", label: "API sends 'Success' response", correctPosition: 4 },
        { id: "ui", label: "Frontend shows 'Welcome!'", correctPosition: 5 },
      ],
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

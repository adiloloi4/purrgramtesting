import { MissionData } from "../world0";

export const world5Missions: MissionData[] = [
  {
    id: "fetching-data",
    title: "Fetching External Data",
    slides: [
      {
        type: "text",
        title: "The World is Your API",
        body: "Your app is lonely. Let's introduce it to the internet. We can fetch weather, crypto prices, or cat facts using APIs.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Create a simple API route app/api/price/route.ts. It should fetch the current Bitcoin price from https://api.coindesk.com/v1/bpi/currentprice.json and return just the USD rate as JSON.",
      },
      {
        type: "quiz",
        question: "Why do we fetch in an API route instead of the client?",
        options: [
          { id: "a", text: "It's faster", correct: false },
          { id: "b", text: "It hides secret keys and avoids CORS issues", correct: true },
          { id: "c", text: "React requires it", correct: false },
          { id: "d", text: "It looks cooler", correct: false },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Visit http://localhost:3000/api/price in your browser. Do you see the Bitcoin price? If yes, you're now an API integrator.",
        example: "{ \"price\": 95000.00 }",
      },
    ],
  },
  {
    id: "ai-connection",
    title: "Connecting OpenAI/Gemini",
    slides: [
      {
        type: "text",
        title: "The Brain Upgrade",
        body: "Let's give your app a brain. We will connect OpenAI (or Gemini). You send text, it sends intelligence.",
      },
      {
        type: "checklist",
        title: "Action: Get the Key",
        prompt: "You need an API key.",
        items: [
          { id: "get", label: "Get key from platform.openai.com or aistudio.google.com" },
          { id: "add", label: "Add to .env.local as OPENAI_API_KEY" },
          { id: "restart", label: "Restart server" },
        ],
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Create a Server Action actions/generate.ts. It should take a prompt string, call the OpenAI API (using the openai package or fetch), and return the completion text.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Create a tiny page with a text input and a button. When clicked, call your Server Action and alert the result. Ask it: What is Vibe Coding?",
        example: "alert(response)",
      },
    ],
  },
  {
    id: "streaming",
    title: "Streaming Text Animations",
    slides: [
      {
        type: "text",
        title: "Don't Make Them Wait",
        body: "Waiting 3 seconds for a response feels broken. Streaming feels magical. It's how ChatGPT works. We want that typewriter effect.",
      },
      {
        type: "text",
        title: "The Vercel AI SDK",
        body: "We will use the Vercel AI SDK. It handles the complex streaming logic for us.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Install ai and @ai-sdk/openai. Then create an API route app/api/chat/route.ts that uses streamText from the AI SDK to stream a response back to the client.",
      },
      {
        type: "text",
        title: "The UI Hook",
        body: "Now update your frontend. Prompt: Use the useChat hook from ai/react to build a simple chat interface that calls my new API route.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Type a message in your new chat UI. Does it stream? If the words appear one by one, you have achieved peak Vibe.",
        example: "It's alive!",
      },
    ],
  },
  {
    id: "webhooks",
    title: "Webhook Basics",
    slides: [
      {
        type: "text",
        title: "The Phone Call",
        body: "APIs are you calling them. Webhooks are them calling you. Hey, a user just paid! or Hey, the video finished processing!.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Create a public API route app/api/webhooks/test/route.ts. It should accept a POST request, log the body to the console, and return { status: 'received' }.",
      },
      {
        type: "checklist",
        title: "Action: Simulate a Webhook",
        prompt: "We need to fake a webhook event.",
        items: [
          { id: "tool", label: "Open Postman or use curl" },
          { id: "send", label: "Send POST to localhost:3000/api/webhooks/test with JSON body" },
          { id: "verify", label: "Check your terminal for the log" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Send a payload like {\"event\": \"sale\", \"amount\": 100}. If you see it in your terminal, your app is ready to listen to the world.",
        example: "console.log: { event: 'sale', ... }",
      },
    ],
  },
];

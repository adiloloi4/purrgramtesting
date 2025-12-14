import { MissionData } from "../world0";

export const world5Missions: MissionData[] = [
  {
    id: "fetching-data",
    title: "Fetching External Data",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "Your app is an island. APIs are bridges to the rest of the world. You can pull in weather, crypto prices, or anything else.",
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Tell AI *where* to fetch from and *what* to return. Mention 'API Route' to keep it secure.",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "Create a Next.js API route at /api/crypto.\nFetch the current Bitcoin price from api.coindesk.com.\nReturn just the USD rate as JSON.",
      },
      {
        type: "miniChallenge",
        title: "Verification step",
        task: "Visit http://localhost:3000/api/crypto. Do you see the price? You just connected your app to the global financial system.",
        example: "Price visible",
      }
    ],
  },
  {
    id: "ai-connection",
    title: "Connecting OpenAI",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "You don't need to build a brain. You can rent one. We will send text to OpenAI, and they will send intelligence back.",
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Ask for a 'Server Action' to keep your API keys safe.",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "Create a Server Action that takes a user prompt, calls OpenAI (using the openai package), and returns the text response.\nAssume I have OPENAI_API_KEY in my env vars.",
      },
      {
        type: "checklist",
        title: "Foundation: API Keys",
        prompt: "You need a key.",
        items: [
          { id: "1", label: "Get an API Key from platform.openai.com" },
          { id: "2", label: "Add it to .env.local" },
          { id: "3", label: "Restart your server" }
        ],
      }
    ],
  },
  {
    id: "streaming",
    title: "Streaming Text",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "Waiting 5 seconds for a response feels broken. Streaming (typewriter effect) feels magical. It's how ChatGPT works.",
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Ask to use the 'Vercel AI SDK'. It does the hard math for you.",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "Update my AI action to use the Vercel AI SDK.\nI want to stream the text response back to the client component using the useChat hook.",
      },
      {
        type: "miniChallenge",
        title: "Verification step",
        task: "Send a message. Do the words appear one by one? If yes, you have achieved Peak Vibe.",
        example: "Streaming works",
      }
    ],
  },
  {
    id: "webhooks",
    title: "Webhook Basics",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "Normally, you call the API. Webhooks are when the API calls YOU. It's like a phone call saying 'Payment Received'.",
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Ask for a route that listens for 'POST' requests.",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "Create a webhook route at /api/webhooks/test.\nIt should accept a POST request and console.log the body data.\nReturn a 200 OK status.",
      },
      {
        type: "checklist",
        title: "Verification step",
        prompt: "Fake the call.",
        items: [
          { id: "1", label: "Open Postman or use Curl" },
          { id: "2", label: "Send a POST to your localhost URL" },
          { id: "3", label: "Check your VS Code terminal. Did the data appear?" }
        ],
      }
    ],
  },
  {
    id: "api-error-handling",
    title: "Handling Errors",
    slides: [
      {
        type: "text",
        title: "Intent",
        body: "The internet is chaos. APIs fail. Keys expire. If you don't plan for it, your app crashes.",
      },
      {
        type: "text",
        title: "How to talk to AI",
        body: "Ask AI to 'wrap' your code in safety blankets (try/catch).",
      },
      {
        type: "text",
        title: "Example message to AI",
        body: "Refactor my API route to handle errors gracefully.\nIf the external API fails, return a clean error message instead of crashing.",
      },
      {
        type: "miniChallenge",
        title: "Verification step",
        task: "Disconnect your internet (or change the API URL to something broken). Try the request. Does it show a nice message or a scary crash?",
        example: "Nice message",
      }
    ],
  }
];

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
      {
        type: "memoryGame",
        title: "External APIs Memory Game",
        description: "Match API concepts to their purposes",
        cards: [
          { id: "api-route", front: "API Route", back: "Server endpoint that fetches external data" },
          { id: "fetch", front: "Fetch", back: "JavaScript function to get data from URLs" },
          { id: "cors", front: "CORS", back: "Cross-origin issues avoided by server-side fetching" },
          { id: "json", front: "JSON Response", back: "Data format returned by most APIs" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "API Integration Quiz",
        description: "Test your understanding of fetching external data",
        questions: [
          {
            id: "q1",
            question: "Why fetch in an API route instead of the client?",
            options: [
              { id: "a", text: "It hides secret keys and avoids CORS" },
              { id: "b", text: "It's faster" },
              { id: "c", text: "React requires it" },
            ],
            correct: "a",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What does an API route return?",
            options: [
              { id: "a", text: "HTML" },
              { id: "b", text: "JSON" },
              { id: "c", text: "CSS" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
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
      {
        type: "memoryGame",
        title: "AI Connection Memory Game",
        description: "Match AI integration concepts to their purposes",
        cards: [
          { id: "openai", front: "OpenAI API", back: "Gives your app intelligence" },
          { id: "api-key", front: "API Key", back: "Secret key stored in .env.local" },
          { id: "server-action", front: "Server Action", back: "Server-side function that calls AI" },
          { id: "prompt", front: "Prompt", back: "Text input sent to AI for processing" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "AI Integration Workflow",
        description: "Order the steps to connect AI to your app",
        items: [
          { id: "get-key", label: "Get API key from OpenAI/Gemini", correctPosition: 0 },
          { id: "add-env", label: "Add key to .env.local", correctPosition: 1 },
          { id: "create-action", label: "Create Server Action to call AI", correctPosition: 2 },
          { id: "test", label: "Test with a prompt", correctPosition: 3 },
        ],
        hint: "Start with getting key, end with testing",
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
      {
        type: "memoryGame",
        title: "Streaming Memory Game",
        description: "Match streaming concepts to their purposes",
        cards: [
          { id: "streaming", front: "Streaming", back: "Words appear one by one (typewriter effect)" },
          { id: "vercel-sdk", front: "Vercel AI SDK", back: "Handles complex streaming logic" },
          { id: "stream-text", front: "streamText", back: "Function that streams AI responses" },
          { id: "use-chat", front: "useChat Hook", back: "React hook for chat UI with streaming" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Streaming Quiz",
        description: "Test your understanding of streaming text",
        questions: [
          {
            id: "q1",
            question: "What does streaming feel like?",
            options: [
              { id: "a", text: "Waiting 3 seconds for response" },
              { id: "b", text: "Words appearing one by one" },
              { id: "c", text: "Nothing happens" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What SDK handles streaming?",
            options: [
              { id: "a", text: "Vercel AI SDK" },
              { id: "b", text: "React SDK" },
              { id: "c", text: "Next.js SDK" },
            ],
            correct: "a",
            timeLimit: 12,
          },
        ],
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
      {
        type: "memoryGame",
        title: "Webhooks Memory Game",
        description: "Match webhook concepts to their purposes",
        cards: [
          { id: "webhook", front: "Webhook", back: "External service calls your app (not you calling them)" },
          { id: "api-route", front: "API Route", back: "Endpoint that receives webhook POST requests" },
          { id: "payload", front: "Payload", back: "Data sent in webhook request body" },
          { id: "post", front: "POST Request", back: "HTTP method used for webhooks" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "Webhook Setup Workflow",
        description: "Order the steps to set up a webhook",
        items: [
          { id: "create-route", label: "Create API route to receive POST", correctPosition: 0 },
          { id: "log", label: "Log the request body", correctPosition: 1 },
          { id: "test", label: "Test with Postman or curl", correctPosition: 2 },
          { id: "verify", label: "Verify payload appears in terminal", correctPosition: 3 },
        ],
        hint: "Start with creating route, end with verifying",
      },
    ],
  },
  {
    id: "api-error-handling",
    title: "Handling API Errors",
    slides: [
      {
        type: "text",
        title: "APIs Break. Plan for It.",
        body: "External APIs go down. Rate limits hit. Keys expire. Your app must handle these gracefully, not crash.",
      },
      {
        type: "codeChallenge",
        title: "Build Error Handling",
        description: "Add proper error handling to your API calls",
        task: "Update your API route to handle errors. If the external API fails, return a friendly error message instead of crashing. Use try/catch blocks.",
        starterCode: "try {\n  // Your API call here\n} catch (error) {\n  // Handle error\n}",
        successCriteria: [
          "API route uses try/catch",
          "Returns error message on failure",
          "Doesn't crash the app",
          "Logs errors for debugging"
        ],
        hint: "Return { error: 'message' } instead of throwing",
      },
      {
        type: "memoryGame",
        title: "Error Handling Memory Game",
        description: "Match error handling concepts to their purposes",
        cards: [
          { id: "try-catch", front: "try/catch", back: "Catches errors without crashing" },
          { id: "error-message", front: "Error Message", back: "Friendly message shown to user" },
          { id: "logging", front: "Logging", back: "Record errors for debugging" },
          { id: "fallback", front: "Fallback", back: "Alternative when API fails" },
        ],
        timeLimit: 50,
      },
    ],
  },
  {
    id: "api-caching",
    title: "Caching API Responses",
    slides: [
      {
        type: "text",
        title: "Don't Call the Same API 100 Times",
        body: "If you're fetching the same data repeatedly, cache it. Your users will thank you (faster) and your wallet will thank you (fewer API calls).",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Add caching to your API route. Use Next.js revalidate option to cache responses for 60 seconds. This way, repeated requests within 60 seconds return cached data.",
      },
      {
        type: "buildTask",
        title: "Build a Cached API Route",
        description: "Create an API route with caching",
        task: "Create an API route that fetches data and caches it. Test by calling it twice quickly - the second call should be instant (cached).",
        expectedOutcome: "API responses are cached and return faster on subsequent calls",
        verificationSteps: [
          "API route has revalidate option set",
          "First call fetches fresh data",
          "Second call (within cache time) returns cached data",
          "Cache expires after set time"
        ],
        tips: [
          "Use Next.js fetch with { next: { revalidate: 60 } }",
          "Or use route segment config: export const revalidate = 60"
        ],
      },
      {
        type: "memoryGame",
        title: "API Caching Memory Game",
        description: "Match caching concepts to their purposes",
        cards: [
          { id: "cache", front: "Cache", back: "Stored response for faster access" },
          { id: "revalidate", front: "Revalidate", back: "Time before cache expires (in seconds)" },
          { id: "faster", front: "Faster Response", back: "Cached data returns instantly" },
          { id: "cost", front: "Cost Savings", back: "Fewer API calls = lower costs" },
        ],
        timeLimit: 50,
      },
    ],
  },
];

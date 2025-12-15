import { MissionData } from "../world0";

export const world6Missions: MissionData[] = [
  {
    id: "fetching-data",
    title: "Get Your OpenAI API Key",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 9",
        body:
          "Your database works. Authentication works. But your ChatGPT wrapper can't actually chat yet - it has no AI! This is the moment you connect to OpenAI, the company behind ChatGPT. You'll use their API to power your wrapper.",
      },
      {
        type: "text",
        title: "What is an API Key?",
        body:
          "An API key is like a password that lets your app talk to OpenAI's servers. When you send a message to OpenAI, you include this key. OpenAI checks: 'Is this key valid? Does it have credits?' If yes, they process your request and send back an AI response.",
      },
      {
        type: "text",
        title: "The Magic Key",
        body:
          "To build a ChatGPT wrapper, you need an OpenAI API key. This is what lets you talk to GPT-3.5 or GPT-4. It's like a password that unlocks AI. Without it, your ChatGPT wrapper is just a pretty interface with no brain.",
      },
      {
        type: "checklist",
        title: "Get Your API Key",
        prompt: "Sign up and get your key.",
        items: [
          { id: "1", label: "Go to platform.openai.com" },
          { id: "2", label: "Sign up or log in" },
          { id: "3", label: "Go to API Keys section" },
          { id: "4", label: "Create a new secret key" },
          { id: "5", label: "Copy the key (you'll only see it once!)" },
        ],
      },
      {
        type: "text",
        title: "Store It Safely",
        body:
          "Add OPENAI_API_KEY to your .env.local file. Never commit this to GitHub. This key costs money when used, so keep it secret.",
      },
      {
        type: "miniChallenge",
        title: "Key Secured",
        task: "Is your OpenAI API key in .env.local? Is .env.local in .gitignore?",
        example: "Key stored safely.",
      },
      {
        type: "text",
        title: "What You Just Did",
        body:
          "You have the key to AI. This key will let your ChatGPT wrapper talk to GPT-3.5 or GPT-4. Store it safely - it costs money when used, and if someone steals it, they can use your credits.",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Key secured. Now build the connection. You'll create an API route that uses this key to talk to OpenAI. When a user sends a message in your ChatGPT wrapper, your route sends it to OpenAI and gets the AI response. That's next.",
      },
    ],
  },
  {
    id: "ai-connection",
    title: "Connecting OpenAI/Gemini",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 10",
        body:
          "This is the CORE of your ChatGPT wrapper. You'll create an API route that talks to OpenAI. Here's the flow: 1) User sends message in your ChatGPT wrapper → 2) Frontend calls your /api/chat route → 3) Your route sends message to OpenAI → 4) OpenAI responds with AI text → 5) Your route returns it → 6) Frontend displays it. This is the magic.",
      },
      {
        type: "text",
        title: "Why API Routes?",
        body:
          "You can't call OpenAI directly from the browser. Your API key is secret and costs money. If you put it in frontend code, anyone can see it and steal it. API routes run on the server, so the key stays hidden. The frontend calls YOUR route, YOUR route calls OpenAI safely.",
      },
      {
        type: "text",
        title: "Connect Your ChatGPT Wrapper to OpenAI",
        body:
          "This is the core of your ChatGPT wrapper. You'll create an API route that talks to OpenAI. When a user sends a message, your route sends it to OpenAI and returns the AI's response.",
      },
      {
        type: "buildTask",
        title: "Create the Chat API Route",
        description: "Use AI to build the OpenAI connection",
        task: "In Cursor, use this prompt: 'Create a Next.js API route at app/api/chat/route.ts for my ChatGPT wrapper. It should: accept messages array and conversationId from request body, send messages to OpenAI Chat Completions API (gpt-3.5-turbo), include conversation history, return the AI response. Use OPENAI_API_KEY from env. Handle errors.'",
        expectedOutcome: "API route that connects to OpenAI for chat",
        verificationSteps: [
          "API route created at /api/chat",
          "Reads OPENAI_API_KEY from env",
          "Accepts messages array",
          "Sends to OpenAI Chat Completions",
          "Returns AI response",
          "Handles errors",
        ],
        tips: [
          "Use OpenAI SDK: npm install openai",
          "Use ChatCompletion API, not Completion",
          "Include conversation history for context",
          "Test with Postman or curl first",
        ],
      },
      {
        type: "text",
        title: "How the Chat API Works",
        body:
          "Your /api/chat route receives: messages array (conversation history) and conversationId. It sends this to OpenAI Chat Completions API. OpenAI processes it with GPT-3.5-turbo and returns a response. Your route returns that response. The frontend displays it. This is one complete chat cycle.",
      },
      {
        type: "checklist",
        title: "Verify It Works",
        prompt: "Test AI integration.",
        items: [
          { id: "1", label: "API route created at /api/chat" },
          { id: "2", label: "OPENAI_API_KEY in .env.local" },
          { id: "3", label: "Can call from frontend (test with Postman or curl)" },
          { id: "4", label: "AI responds correctly" },
          { id: "5", label: "Conversation history is included" },
        ],
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "Your ChatGPT wrapper can now talk to OpenAI! Users can send messages and get AI responses. This is the heart of your app - the AI brain that makes it a real ChatGPT wrapper.",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Basic chat works, but responses appear all at once (slow). Real ChatGPT streams text as it's generated. Let's add streaming so responses appear character by character, like the real thing. That's next.",
      },
    ],
  },
  {
    id: "streaming",
    title: "Streaming Text Animations",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 11",
        body:
          "Your ChatGPT wrapper works! But there's a problem: it waits for the ENTIRE response before showing anything. Real ChatGPT shows text as it's generated - this feels instant and magical. Let's add streaming.",
      },
      {
        type: "text",
        title: "Why Streaming Matters",
        body:
          "Without streaming: user sends message → waits 5 seconds → entire response appears (feels slow). With streaming: user sends message → text appears immediately, character by character (feels instant). Streaming makes your ChatGPT wrapper feel like the real ChatGPT.",
      },
      {
        type: "text",
        title: "How Streaming Works",
        body:
          "OpenAI can stream responses token by token. Your API route receives each token as it's generated and sends it to the frontend immediately using Server-Sent Events (SSE). The frontend displays each token as it arrives. This creates the 'typing' effect.",
      },
      {
        type: "text",
        title: "Make It Feel Like ChatGPT",
        body:
          "Right now, your ChatGPT wrapper waits for the full response. But real ChatGPT streams text as it's generated. This feels instant and magical. Let's add streaming.",
      },
      {
        type: "buildTask",
        title: "Add Streaming to Your ChatGPT Wrapper",
        description: "Use AI to implement streaming responses",
        task: "In Cursor, use this prompt: 'Modify my /api/chat route to stream OpenAI responses using Server-Sent Events. The response should stream token by token. Update the frontend chat component to display text as it streams in character by character, just like ChatGPT.'",
        expectedOutcome: "Streaming responses that appear in real-time",
        verificationSteps: [
          "API route streams responses (SSE)",
          "Frontend receives stream",
          "Text appears character by character",
          "Loading indicator while streaming",
          "Feels like real ChatGPT",
        ],
        tips: [
          "OpenAI ChatCompletion supports stream: true",
          "Use ReadableStream in Next.js",
          "Update UI state as each token arrives",
          "Test with a long prompt to see streaming",
        ],
      },
      {
        type: "text",
        title: "The Magic",
        body:
          "Now your ChatGPT wrapper feels like the real thing. Users see responses being written in real-time. This is the experience that makes ChatGPT special. Your wrapper now has that same magic.",
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "You've added streaming to your ChatGPT wrapper. Responses now appear character by character, just like the real ChatGPT. This is a huge UX improvement - it makes the app feel fast and responsive.",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Streaming works. But messages aren't being saved to the database yet. When a user sends a message and gets a response, you need to save both to the messages table so they can see their chat history later. That's next.",
      },
      {
        type: "checklist",
        title: "Verify It Works",
        prompt: "Test streaming.",
        items: [
          { id: "1", label: "API route streams data" },
          { id: "2", label: "Frontend receives stream" },
          { id: "3", label: "Text appears progressively" },
          { id: "4", label: "Feels smooth and fast" },
        ],
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "You've built a ChatGPT-like experience. This is production-quality AI integration.",
      },
    ],
  },
  {
    id: "webhooks",
    title: "Save Messages to Database",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 12",
        body:
          "Your ChatGPT wrapper can chat and stream responses. But there's a problem: if a user refreshes the page, all their messages disappear! You need to save messages to the database. Use the saveMessage functions you built earlier.",
      },
      {
        type: "text",
        title: "The Complete Flow",
        body:
          "Here's the full flow: 1) User sends message → 2) Save user message to database → 3) Send to OpenAI → 4) Stream AI response → 5) Save AI response to database → 6) Display both messages. This way, everything is saved and users can see their history.",
      },
      {
        type: "text",
        title: "Remember the Conversation",
        body:
          "Right now, your ChatGPT wrapper sends messages to OpenAI and gets responses, but it doesn't save them. You need to save both user messages and AI responses to your database so users can see their chat history.",
      },
      {
        type: "buildTask",
        title: "Save Messages After AI Response",
        description: "Use AI to add message saving",
        task: "In Cursor, use this prompt: 'After my /api/chat route gets a response from OpenAI, save both the user message and AI response to the messages table. Use the saveMessage function we created earlier. Save user message before calling OpenAI, save AI response after. Link both to the conversationId.'",
        expectedOutcome: "Messages are saved to database",
        verificationSteps: [
          "User message saved before OpenAI call",
          "AI response saved after OpenAI call",
          "Both linked to conversationId",
          "Messages appear in database",
          "Chat history loads correctly",
        ],
        tips: [
          "Save user message with role: 'user'",
          "Save AI response with role: 'assistant'",
          "Use the functions from earlier missions",
          "Handle errors gracefully",
        ],
      },
      {
        type: "text",
        title: "Complete Chat Flow",
        body:
          "Now your ChatGPT wrapper: 1) User sends message → 2) Save to DB → 3) Send to OpenAI → 4) Stream response → 5) Save AI response to DB. This is a complete chat system! Every message is saved, so users never lose their conversations.",
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "You've connected the save functionality to your chat flow. Messages are now persisted. Users can refresh the page and see their full chat history. This is persistence - the foundation of a real product.",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Messages save correctly. But what if OpenAI is down? Or the user hits a rate limit? You need error handling so your ChatGPT wrapper doesn't crash. That's next.",
      },
      {
        type: "checklist",
        title: "Verify It Works",
        prompt: "Test message saving.",
        items: [
          { id: "1", label: "User messages saved" },
          { id: "2", label: "AI responses saved" },
          { id: "3", label: "Messages appear in Supabase" },
          { id: "4", label: "Chat history loads on refresh" },
        ],
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "Your ChatGPT wrapper now remembers everything. Users can close the app and come back to see their full chat history. This is persistence.",
      },
    ],
  },
  {
    id: "api-error-handling",
    title: "Handling API Errors",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 13",
        body:
          "Your ChatGPT wrapper works, but it's fragile. What if OpenAI is down? What if the user hits a rate limit? What if the API key is invalid? Your app will crash or show ugly errors. You need error handling.",
      },
      {
        type: "text",
        title: "Why Error Handling Matters",
        body:
          "Without error handling: OpenAI error → app crashes → user sees technical error → bad experience. With error handling: OpenAI error → friendly message → user knows what happened → can retry. This is the difference between a prototype and a product.",
      },
      {
        type: "text",
        title: "Handle OpenAI Errors Gracefully",
        body:
          "OpenAI API can fail: rate limits, invalid API key, network errors, service down. Your ChatGPT wrapper must handle these gracefully. Never show raw errors to users.",
      },
      {
        type: "buildTask",
        title: "Add Error Handling to Chat",
        description: "Use AI to add proper error handling",
        task: "In Cursor, use this prompt: 'Add error handling to my /api/chat route and frontend. Handle: OpenAI API errors (401, 429, 500), network errors, timeouts. Show user-friendly messages like 'Rate limit reached, please try again' or 'Service temporarily unavailable'. Never expose API keys or technical details.'",
        expectedOutcome: "Robust error handling for ChatGPT wrapper",
        verificationSteps: [
          "API errors handled (401, 429, 500)",
          "Network errors handled",
          "Timeout errors handled",
          "User-friendly error messages",
          "No technical details exposed",
        ],
        tips: [
          "Check OpenAI error codes",
          "429 = rate limit (show retry message)",
          "401 = invalid API key (check env var)",
          "Show toast notifications for errors",
        ],
      },
      {
        type: "text",
        title: "Error Patterns",
        body:
          "Common OpenAI errors: 401 (invalid API key), 429 (rate limit - too many requests), 500 (OpenAI service down), network errors (no internet). Handle each with a friendly message. Show retry buttons for transient errors.",
      },
      {
        type: "checklist",
        title: "Verify It Works",
        prompt: "Test error handling.",
        items: [
          { id: "1", label: "Network errors handled" },
          { id: "2", label: "API errors handled" },
          { id: "3", label: "User sees friendly messages" },
          { id: "4", label: "App doesn't crash" },
        ],
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "Your ChatGPT wrapper is resilient. It handles failures gracefully. Users get helpful messages, not crashes. This is production-ready code. Your app won't break when things go wrong.",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Error handling is done. But right now, your ChatGPT wrapper has no UI! You need a beautiful chat interface where users can type messages and see responses. That's the final piece of World 6.",
      },
    ],
  },
  {
    id: "api-caching",
    title: "Build the Chat UI",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 14 - The Final Piece",
        body:
          "You have everything working: database, auth, OpenAI connection, streaming, error handling. But there's no UI! Users can't actually USE your ChatGPT wrapper yet. Let's build the chat interface - the frontend that users interact with.",
      },
      {
        type: "text",
        title: "What the Chat UI Needs",
        body:
          "Your ChatGPT wrapper UI needs: 1) Sidebar with conversation list, 2) Main chat area showing messages, 3) Input field at bottom, 4) Send button, 5) Streaming animation, 6) Loading states. This is what users see and interact with.",
      },
      {
        type: "text",
        title: "The Frontend Interface",
        body:
          "You have the backend working. Now you need a beautiful chat interface. Users should see: message input, send button, chat history, streaming responses. Make it look like ChatGPT.",
      },
      {
        type: "buildTask",
        title: "Create the Chat Interface",
        description: "Use AI to build the chat UI",
        task: "In Cursor, use this prompt: 'Create a ChatGPT-style chat interface component. Include: message input at bottom, send button, chat messages displayed in a scrollable area (user messages on right, AI on left), streaming text animation, loading indicator, conversation sidebar. Use Tailwind CSS. Make it responsive and beautiful.'",
        expectedOutcome: "Complete chat interface that looks like ChatGPT",
        verificationSteps: [
          "Chat interface created",
          "Message input and send button",
          "Messages display correctly",
          "Streaming works visually",
          "Responsive design",
          "Looks professional",
        ],
        tips: [
          "Use v0.dev to generate the UI first",
          "Then connect it to your API",
          "Style user messages differently from AI",
          "Add smooth scrolling",
        ],
      },
      {
        type: "text",
        title: "Connect Everything",
        body:
          "Connect your chat UI to: the /api/chat route, the database (load history), streaming responses. When user sends message → save → call API → stream response → save response → display. This is the complete flow.",
      },
      {
        type: "text",
        title: "The Complete System",
        body:
          "Your ChatGPT wrapper now has: database (stores messages), auth (private chats), OpenAI connection (AI responses), streaming (real-time feel), error handling (resilient), and UI (users can interact). This is a complete, working ChatGPT wrapper!",
      },
      {
        type: "checklist",
        title: "Verify It Works",
        prompt: "Test the complete flow.",
        items: [
          { id: "1", label: "Chat UI created" },
          { id: "2", label: "Can send messages" },
          { id: "3", label: "AI responses stream in" },
          { id: "4", label: "Chat history loads" },
          { id: "5", label: "Looks like ChatGPT" },
        ],
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "You have a working ChatGPT wrapper! Users can chat, see streaming responses, and view history. This is a real product. You've built: database, auth, OpenAI integration, streaming, error handling, and UI. This is Phase 2 complete!",
      },
      {
        type: "text",
        title: "Phase 2 Complete!",
        body:
          "Congratulations! You've built a complete ChatGPT wrapper. It has: authentication, database, OpenAI connection, streaming, and a working UI. Users can sign up, log in, chat with AI, and see their history. Next phase: polish it, add payments, and deploy it to the world!",
      },
    ],
  },
];


import { MissionData } from "../world0";

export const world4Missions: MissionData[] = [
  {
    id: "setup-the-vault",
    title: "Setup The Vault (Supabase)",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 1",
        body:
          "Welcome to Phase 2! From now on, every mission builds your ChatGPT wrapper. By the end, you'll have a complete, working, deployed ChatGPT wrapper. Let's start with the foundation: where will your chat messages be stored?",
      },
      {
        type: "text",
        title: "Why You Need a Database",
        body:
          "Your ChatGPT wrapper needs to remember conversations. When a user sends a message, you save it. When they come back tomorrow, you show their chat history. This requires a database - a place that stores data permanently, even when your app is closed.",
      },
      {
        type: "text",
        title: "The Cloud Computer",
        body:
          "We need a place to store our data that is always on and accessible from anywhere. We call this 'The Cloud'. We use Supabase - it's free to start and gives you a real database in the cloud.",
      },
      {
        type: "text",
        title: "Creating the Project",
        body:
          "This is the moment you rent your own slice of the cloud. It's free to start. You are spinning up a real server. This will store all the conversations and messages for your ChatGPT wrapper.",
      },
      {
        type: "checklist",
        title: "Setup Checklist",
        prompt: "Launch the server.",
        items: [
          { id: "1", label: "Go to supabase.com" },
          { id: "2", label: "Click 'New Project'" },
          { id: "3", label: "Give it a name and password" },
          { id: "4", label: "Wait for it to launch (green light)" },
        ],
      },
      {
        type: "text",
        title: "The Dashboard",
        body:
          "Supabase gives you a beautiful dashboard. Table Editor (Spreadsheet view), SQL Editor (Code view), Authentication (User view). We will use these.",
      },
      {
        type: "miniChallenge",
        title: "Verify Launch",
        task: "Did your project launch? Do you see the green 'Active' badge? If so, you have a backend.",
        example: "Project is active.",
      },
      {
        type: "text",
        title: "What You Just Did",
        body:
          "You just provisioned a Postgres database in the cloud. This is where your ChatGPT wrapper will store all conversations and messages. Ten years ago, this took a team of engineers. You did it in 2 minutes.",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Now that you have a database, you need to design the tables. What data does your ChatGPT wrapper need to store? Conversations and messages. Let's design them next.",
      },
    ],
  },
  {
    id: "design-memory",
    title: "Design The Memory",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 2",
        body:
          "Your database is ready. Now design the structure. Your ChatGPT wrapper needs to store: 1) Conversations (each chat session), 2) Messages (each message in a conversation). Think of it like organizing files: each conversation is a folder, messages are files inside.",
      },
      {
        type: "text",
        title: "Why Two Tables?",
        body:
          "You could put everything in one table, but that's messy. Separating conversations and messages makes it clean: one conversation can have many messages. This is called a 'one-to-many' relationship. It's the foundation of how databases work.",
      },
      {
        type: "text",
        title: "Design Your Data Structure",
        body:
          "Before you can save data, you need to design how it's stored. Think of it like planning the rooms in a house - you decide what goes where. We use tables (like spreadsheets) to organize data.",
      },
      {
        type: "text",
        title: "Tables Are Like Spreadsheets",
        body:
          "A table has columns (fields) and rows (records). For a ChatGPT wrapper, you need: conversations (chat sessions), messages (individual messages in each chat). Each conversation has many messages. Simple.",
      },
      {
        type: "buildTask",
        title: "Design Your Chat Tables",
        description: "Ask AI to design the database",
        task: "Tell Cursor: 'I need to store chat conversations and messages for my ChatGPT wrapper. Please design the Supabase tables for me (SQL) and explain them.'",
        expectedOutcome: "SQL code that creates conversations and messages tables",
        verificationSteps: [
          "You asked AI for the design",
          "AI gave you SQL for 'conversations' and 'messages'",
          "AI included columns for IDs and content",
        ],
        tips: [
          "Don't design it yourself",
          "Review the columns AI suggests",
          "Paste the SQL into Supabase",
        ],
      },
      {
        type: "text",
        title: "Create the Table",
        body:
          "Copy the SQL that AI generated. Go to Supabase dashboard > SQL Editor. Paste the SQL and click 'Run'. Your table is now created. Check the Table Editor to see it.",
      },
      {
        type: "checklist",
        title: "Verify Your Table",
        prompt: "Check that your table exists.",
        items: [
          { id: "1", label: "SQL generated by AI" },
          { id: "2", label: "SQL pasted into Supabase SQL Editor" },
          { id: "3", label: "Table created successfully" },
          { id: "4", label: "Can see table in Table Editor" },
        ],
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "You just designed and created the database structure for your ChatGPT wrapper. You now have: conversations table (stores chat sessions) and messages table (stores each message). This is the foundation. Your ChatGPT wrapper can now store data!",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Tables exist, but your app can't talk to them yet. You need to connect your Next.js app to Supabase. That's the next mission: connecting the wires.",
      },
    ],
  },
  {
    id: "secrets-env",
    title: "Secrets & Environment Variables",
    slides: [
      {
        type: "text",
        title: "Why Environment Variables Matter",
        body:
          "Your database needs keys to access it. These are like passwords - if someone gets them, they can access your data. You must keep them secret. Never put them in your code where they'll be public on GitHub.",
      },
      {
        type: "text",
        title: "The Keys to the Kingdom",
        body:
          "Your database needs a lock. You have keys (API Keys) to open it. These keys must be kept secret. If you share them, anyone can delete your data.",
      },
      {
        type: "text",
        title: "Where do we hide them?",
        body:
          "We use a file called '.env.local'. It stays on your computer. It is NEVER shared with Git or GitHub. It's your local secret vault. This file stores all your secrets: Supabase keys, OpenAI keys, Stripe keys.",
      },
      {
        type: "quiz",
        question: "Where should you store your API Keys?",
        options: [
          { id: "a", text: "In the code (public)" },
          { id: "b", text: "In .env.local (hidden)" },
          { id: "c", text: "Post them on Twitter" },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. .env files are hidden from the world.",
        wrongExplanation: "Never put secrets in public code!",
      },
      {
        type: "text",
        title: "Finding the Keys",
        body:
          "In Supabase, go to Settings -> API. You need the 'Project URL' and the 'anon' (public) key. Copy them.",
      },
      {
        type: "miniChallenge",
        title: "Create the Vault",
        task: "Create a file named .env.local in your project root. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
        example: "File created with keys.",
      },
      {
        type: "spotTheBug",
        title: "Security Leak",
        description: "Find the security risk",
        code: "// component.tsx\nconst supabase = createClient(\n  'https://xyz.supabase.co',\n  'eyJhbGciOiJIUzI1NiIsInR5c...' // API Key here!\n);",
        bugs: [
          {
            id: "hardcoded-key",
            line: 4,
            description: "The API Key is hardcoded in the file. It will be public!",
            fix: "Use process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY",
          },
        ],
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "You understand Security 101. You know how to keep your app safe. This puts you ahead of many junior devs.",
      },
    ],
  },
  {
    id: "connect-wires",
    title: "Connect The Wires",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 3",
        body:
          "Your database tables are ready. Your keys are stored safely. Now connect your Next.js app to Supabase. This is the bridge that lets your ChatGPT wrapper save and load messages.",
      },
      {
        type: "text",
        title: "The Connection",
        body:
          "Now we connect the App (Next.js) to the Database (Supabase). We use a library (SDK) to build this bridge. Think of it like a phone line: your app calls Supabase, Supabase responds with data.",
      },
      {
        type: "text",
        title: "The Client",
        body:
          "We create a 'Supabase Client'. This is a helper that knows how to talk to the database using your keys. You'll use this client everywhere in your ChatGPT wrapper to save messages, load conversations, etc.",
      },
      {
        type: "checklist",
        title: "Connection Steps",
        prompt: "Build the bridge.",
        items: [
          { id: "install", label: "Install the package (@supabase/ssr)" },
          { id: "client", label: "Create the utils/supabase/client.ts file" },
          { id: "use", label: "Use it in a component" },
        ],
      },
      {
        type: "buildTask",
        title: "Build the Client",
        description: "Ask AI to create the connection",
        task: "Tell Cursor: 'I need to connect this Next.js app to Supabase. Please create a helper file that sets up the Supabase client using my env variables.'",
        expectedOutcome: "A file that exports the Supabase client",
        verificationSteps: [
          "AI created a file (likely in utils/supabase)",
          "It uses your environment variables",
          "It sets up the connection",
        ],
        tips: [
          "If AI asks which package, say '@supabase/ssr'",
          "Trust AI to handle the setup code",
        ],
      },
      {
        type: "text",
        title: "Testing the Connection",
        body:
          "How do we know it works? We try to fetch something. Even an empty list is a success. It means the door is open. Your ChatGPT wrapper can now talk to the database.",
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "The bridge is built. Traffic can flow. You have connected your frontend to your backend. Your ChatGPT wrapper can now access the database. This is infrastructure - the foundation everything else builds on.",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Connection works. Now you need functions to actually save data. When a user sends a message in your ChatGPT wrapper, you need to save it to the database. That's next.",
      },
    ],
  },
  {
    id: "save-input",
    title: "Save Input",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 4",
        body:
          "Your database is set up. Your app is connected. Now build the functions that actually save data. When a user chats in your ChatGPT wrapper, you need to: 1) Create a conversation (if new), 2) Save the user's message, 3) Save the AI's response. Let's build these functions.",
      },
      {
        type: "text",
        title: "The Save Flow",
        body:
          "Here's what happens when a user sends a message: 1) User types message → 2) Your app calls createConversation() (if it's a new chat) → 3) Your app calls saveMessage() to save user message → 4) AI responds → 5) Your app calls saveMessage() again to save AI response. This is the complete save cycle.",
      },
      {
        type: "text",
        title: "Saving Chat Messages",
        body:
          "Now that your tables exist and you're connected, it's time to save chat messages. When a user sends a message in your ChatGPT wrapper, you need to save both the user's message and the AI's response to the messages table.",
      },
      {
        type: "buildTask",
        title: "Save Chat Messages to Database",
        description: "Direct AI to write the save functions",
        task: "Tell Cursor: 'I need two functions: one to create a new conversation, and one to save a message to it. Please write these functions using the Supabase client.'",
        expectedOutcome: "Functions that save conversations and messages",
        verificationSteps: [
          "AI wrote a function to create conversations",
          "AI wrote a function to save messages",
          "The code uses the table names you created",
        ],
        tips: [
          "Focus on what you want (saving data)",
          "Let AI worry about the syntax (insert, select)",
        ],
      },
      {
        type: "text",
        title: "This Is Your Chat Memory",
        body:
          "Every message gets saved. Every conversation gets stored. Your ChatGPT wrapper will remember all chats, just like the real ChatGPT. This is how you build persistence - the ability to remember data after the app closes.",
      },
      {
        type: "text",
        title: "Why This Matters",
        body:
          "Without saving, every chat would disappear when the user refreshes. With saving, users can close the app, come back tomorrow, and see their full chat history. This is what makes your ChatGPT wrapper feel like a real product.",
      },
      {
        type: "checklist",
        title: "Verify It Works",
        prompt: "Test saving data.",
        items: [
          { id: "1", label: "Functions created by AI" },
          { id: "2", label: "Tested createConversation()" },
          { id: "3", label: "Tested saveMessage() with user message" },
          { id: "4", label: "Tested saveMessage() with AI response" },
          { id: "5", label: "Data appears in Supabase Table Editor" },
        ],
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "You just built the save functionality for your ChatGPT wrapper. Messages now persist in the database. This is huge - your app has memory!",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "You can save messages. Now you need to load them back. When a user opens your ChatGPT wrapper, show their previous conversations. When they click one, show all messages. That's next.",
      },
    ],
  },
  {
    id: "read-it-back",
    title: "Read It Back",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 5",
        body:
          "You can save messages. Now you need to load them back. When a user opens your ChatGPT wrapper, they should see: 1) A sidebar with all their conversations, 2) When they click a conversation, all messages load. This is the read functionality - the other half of persistence.",
      },
      {
        type: "text",
        title: "The Load Flow",
        body:
          "Here's what happens when a user opens your ChatGPT wrapper: 1) App calls getConversations(userId) → 2) Shows list in sidebar → 3) User clicks a conversation → 4) App calls getMessages(conversationId) → 5) Shows all messages in that chat. This is how ChatGPT shows your history.",
      },
      {
        type: "text",
        title: "Loading Chat History",
        body:
          "Saving is only half the story. You also need to load chat history. When a user opens your ChatGPT wrapper, show their previous conversations. When they click a conversation, load all messages in that chat.",
      },
      {
        type: "buildTask",
        title: "Load Chat History from Database",
        description: "Direct AI to write the load functions",
        task: "Tell Cursor: 'Now I need to load the data. Write functions to: 1) Get all conversations for a user. 2) Get all messages for a specific conversation.'",
        expectedOutcome: "Functions that load conversations and messages",
        verificationSteps: [
          "AI wrote the fetch functions",
          "It handles fetching by User ID",
          "It handles fetching by Conversation ID",
        ],
        tips: [
          "If AI asks about sorting, say 'Newest conversations first'",
          "Check that it handles errors",
        ],
      },
      {
        type: "text",
        title: "Display the Chat History",
        body:
          "Create a sidebar component that shows all conversations. When a user clicks one, load and display all messages in that conversation. This is how ChatGPT shows your chat history. The sidebar is on the left, messages in the center.",
      },
      {
        type: "text",
        title: "Why Order Matters",
        body:
          "Notice: conversations ordered by created_at DESC (newest first) - so recent chats appear at top. Messages ordered by created_at ASC (oldest first) - so you read from top to bottom, like a real conversation.",
      },
      {
        type: "checklist",
        title: "Verify It Works",
        prompt: "Test reading data.",
        items: [
          { id: "1", label: "Functions created by AI" },
          { id: "2", label: "Sidebar shows conversations (newest first)" },
          { id: "3", label: "Messages load when conversation clicked" },
          { id: "4", label: "Messages display in order (oldest to newest)" },
          { id: "5", label: "Chat history displays correctly" },
        ],
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "You can now save AND load chat history. Your ChatGPT wrapper has memory. Users can see all their past conversations. This is how real chat apps work. You've built the complete database layer!",
      },
      {
        type: "text",
        title: "Phase 2 World 4 Complete!",
        body:
          "You've built the database foundation for your ChatGPT wrapper: tables created, connection established, save/load functions working. Next mission: add authentication so each user has their own private chat history.",
      },
    ],
  },
];

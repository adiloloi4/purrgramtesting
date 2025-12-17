import { MissionData } from "../world0";

export const world3Missions: MissionData[] = [
  {
    id: "data-modeling-basics",
    title: "Thinking in Tables",
    slides: [
      {
        type: "text",
        title: "The Spreadsheet Mental Model",
        body:
          "Before you build a database, think of a spreadsheet. A database is just a collection of spreadsheets (Tables) that can talk to each other. If you can use Excel, you can design a database.",
      },
      {
        type: "text",
        title: "Entities are Tables",
        body:
          "Everything in your ChatGPT wrapper is an 'Entity'. Users, Conversations, Messages. Each Entity gets its own Table. User -> Users Table. Conversation -> Conversations Table. Message -> Messages Table.",
      },
      {
        type: "dragDrop",
        prompt: "Sort data into the correct table for your ChatGPT wrapper",
        categories: [
          { id: "conversations", label: "Conversations Table" },
          { id: "messages", label: "Messages Table" },
        ],
        items: [
          { id: "title", label: "title (chat title)", correctCategoryId: "conversations" },
          { id: "content", label: "content (message text)", correctCategoryId: "messages" },
          { id: "user_id", label: "user_id", correctCategoryId: "conversations" },
          { id: "role", label: "role (user/assistant)", correctCategoryId: "messages" },
        ],
      },
      {
        type: "text",
        title: "Rows and Columns",
        body:
          "Columns are the properties (Name, Email, Price). Rows are the actual items (John, john@gmail.com, $10). Every row needs a unique ID.",
      },
      {
        type: "quiz",
        question: "Where would you store 'created_at' for a chat message in your ChatGPT wrapper?",
        options: [
          { id: "a", text: "In the Conversations table" },
          { id: "b", text: "In the Messages table" },
          { id: "c", text: "Nowhere" },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. The timestamp belongs to the Message entity.",
        wrongExplanation: "The timestamp describes when the message was created, not the conversation.",
      },
      {
        type: "text",
        title: "The Blueprint",
        body:
          "Don't start coding yet. Draw your tables on paper or use a tool. What tables do you need? What columns do they have? This is the Blueprint.",
      },
      {
        type: "miniChallenge",
        title: "Design Your ChatGPT Wrapper Database",
        task: "Grab a pen (or open Notepad). List the tables and columns you need for your ChatGPT wrapper. (Hint: Conversations and Messages tables).",
        example: "Conversations: id, user_id, title, created_at. Messages: id, conversation_id, role, content, created_at.",
      },
      {
        type: "identify",
        prompt: "Which column is the Primary Key (Unique ID)?",
        correctOptionId: "id",
        correctExplanation: "Yes. The ID is the unique identifier for every row.",
        wrongExplanation: "Names and titles can be duplicates. IDs must be unique.",
        options: [
          { id: "title", text: "Title: Buy Milk", icon: "📝" },
          { id: "id", text: "ID: 1024", icon: "🔑" },
          { id: "status", text: "Status: Pending", icon: "⏳" },
        ],
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "You just did Data Modeling. It sounds fancy, but it's just organizing information. You do this every day.",
      },
    ],
  },
  {
    id: "relationships",
    title: "Connecting the Dots (Relationships)",
    slides: [
      {
        type: "text",
        title: "The Power of Relations",
        body:
          "In your ChatGPT wrapper, tables talk to each other. A Message belongs to a Conversation. A Conversation belongs to a User. These connections are Relationships.",
      },
      {
        type: "text",
        title: "Foreign Keys",
        body:
          "How do we link them? We give the child a 'Foreign Key'. The 'Messages' table has a column called 'conversation_id'. This points back to the 'Conversations' table. The 'Conversations' table has 'user_id' pointing to 'Users'.",
      },
      {
        type: "quiz",
        question: "If a Conversation has many Messages in your ChatGPT wrapper, where does the 'conversation_id' go?",
        options: [
          { id: "a", text: "In the Conversations table" },
          { id: "b", text: "In the Messages table" },
          { id: "c", text: "In a separate list" },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct! The Message needs to know which conversation it belongs to.",
        wrongExplanation: "The Parent (Conversation) doesn't hold the Child's ID. The Child (Message) points to the Parent.",
      },
      {
        type: "text",
        title: "One-to-Many",
        body:
          "One User, Many Conversations. One Conversation, Many Messages. This is the most common relationship in your ChatGPT wrapper. The 'Many' side holds the ID of the 'One' side.",
      },
      {
        type: "matching",
        prompt: "Match the Relationship Type in Your ChatGPT Wrapper",
        pairs: [
          { id: "one-many", left: "One User -> Many Conversations", right: "One-to-Many" },
          { id: "one-many2", left: "One Conversation -> Many Messages", right: "One-to-Many" },
          { id: "one-one", left: "One User -> One Profile", right: "One-to-One" },
        ],
      },
      {
        type: "text",
        title: "Why Not One Big Table?",
        body:
          "Why separate tables? Efficiency and organization. If we put everything in one table, we'd have duplicate data everywhere. Relations keep data clean.",
      },
      {
        type: "identify",
        prompt: "Which structure is better for your ChatGPT wrapper?",
        correctOptionId: "b",
        correctExplanation: "Yes! Separate tables (Conversations, Messages) linked by IDs is the clean, relational way.",
        wrongExplanation: "One giant table gets messy fast with duplicate conversation data for every message.",
        options: [
          {
            id: "a",
            text: "One giant table with conversation info repeated for every message",
            icon: "📜",
          },
          {
            id: "b",
            text: "Two tables (Conversations, Messages) linked by conversation_id",
            icon: "🔗",
          },
        ],
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "You now understand Relational Databases. This is the backbone of almost every major app in the world.",
      },
    ],
  },
  {
    id: "schema-design",
    title: "Data Types & Schema",
    slides: [
      {
        type: "text",
        title: "Computers are Literal",
        body:
          "To a computer, '10' (text) is different from 10 (number). You must define the Type of data for every column. This is the Schema.",
      },
      {
        type: "text",
        title: "Common Types",
        body:
          "Text (Strings), Integer (Whole Numbers), Boolean (True/False), Timestamp (Date & Time), JSON (Complex Data).",
      },
      {
        type: "identify",
        prompt: "Choose the correct type for 'is_published'",
        correctOptionId: "bool",
        correctExplanation: "Correct. It's either true or false.",
        wrongExplanation: "Text is overkill. Integer doesn't make sense.",
        options: [
          { id: "text", text: "Text", icon: "abc" },
          { id: "int", text: "Integer", icon: "123" },
          { id: "bool", text: "Boolean", icon: "✅" },
        ],
      },
      {
        type: "quiz",
        question: "What type should 'message_count' be in your ChatGPT wrapper profiles table?",
        options: [
          { id: "a", text: "Text" },
          { id: "b", text: "Number (Integer)" },
          { id: "c", text: "Boolean" },
        ],
        correctOptionId: "b",
        correctExplanation: "Yes. You need to count and increment message_count.",
        wrongExplanation: "You can't do math on text or boolean.",
      },
      {
        type: "text",
        title: "Null vs Not Null",
        body:
          "Can a field be empty? Can a user exist without an email? If no, it is 'Not Null'. This creates rules that keep your data safe.",
      },
      {
        type: "spotTheBug",
        title: "Date Sorting Logic",
        description: "We want to sort messages by date. Look at the data type:",
        code: "message_content: \"Hello\" (Text)\ncreated_at: \"Yesterday\" (Text) \n\n// Problem: How does the computer know if \"Yesterday\" is before \"Today\"?",
        bugs: [
          {
            id: "timestamp-type",
            line: 2,
            description: "Computers can't sort vague text like 'Yesterday'. Use a Timestamp.",
            fix: "Change 'Text' to 'Timestamp' so the computer gets an exact date/time.",
          },
        ],
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "You are speaking the language of data. Types ensure your app doesn't crash when someone types 'banana' into a price field.",
      },
    ],
  },
];

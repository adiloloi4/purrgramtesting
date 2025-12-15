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
          "Everything in your app is an 'Entity'. Users, Posts, Comments, Products. Each Entity gets its own Table. User -> Users Table. Product -> Products Table.",
      },
      {
        type: "dragDrop",
        prompt: "Sort data into the correct table",
        categories: [
          { id: "users", label: "Users Table" },
          { id: "products", label: "Products Table" },
        ],
        items: [
          { id: "email", label: "email", correctCategoryId: "users" },
          { id: "price", label: "price", correctCategoryId: "products" },
          { id: "username", label: "username", correctCategoryId: "users" },
          { id: "sku", label: "sku_code", correctCategoryId: "products" },
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
        question: "Where would you store the 'date_created' for a blog post?",
        options: [
          { id: "a", text: "In the Users table" },
          { id: "b", text: "In the Posts table" },
          { id: "c", text: "Nowhere" },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. The date belongs to the Post entity.",
        wrongExplanation: "The date describes the Post, not the User.",
      },
      {
        type: "text",
        title: "The Blueprint",
        body:
          "Don't start coding yet. Draw your tables on paper or use a tool. What tables do you need? What columns do they have? This is the Blueprint.",
      },
      {
        type: "miniChallenge",
        title: "Design a Todo App",
        task: "Grab a pen (or open Notepad). List the tables and columns for a simple Todo App. (Hint: Users and Tasks).",
        example: "Users: id, email. Tasks: id, title, is_complete, user_id.",
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
          "Spreadsheets are lonely. Databases are social. Tables talk to each other. A Post belongs to a User. This connection is a Relationship.",
      },
      {
        type: "text",
        title: "Foreign Keys",
        body:
          "How do we link them? We give the child a 'Foreign Key'. The 'Posts' table has a column called 'user_id'. This points back to the 'Users' table.",
      },
      {
        type: "quiz",
        question: "If a User has many Orders, where does the 'user_id' go?",
        options: [
          { id: "a", text: "In the Users table" },
          { id: "b", text: "In the Orders table" },
          { id: "c", text: "In a separate list" },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct! The Order needs to know who it belongs to.",
        wrongExplanation: "The Parent (User) doesn't hold the Child's ID. The Child (Order) points to the Parent.",
      },
      {
        type: "text",
        title: "One-to-Many",
        body:
          "One User, Many Posts. This is the most common relationship. The 'Many' side holds the ID of the 'One' side.",
      },
      {
        type: "matching",
        prompt: "Match the Relationship Type",
        pairs: [
          { id: "one-many", left: "One User -> Many Posts", right: "One-to-Many" },
          { id: "one-one", left: "One User -> One Profile", right: "One-to-One" },
          { id: "many-many", left: "Students <-> Classes", right: "Many-to-Many" },
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
        prompt: "Which structure is better?",
        correctOptionId: "b",
        correctExplanation: "Yes! Separate tables linked by ID is the clean, relational way.",
        wrongExplanation: "One giant table gets messy fast with duplicate data.",
        options: [
          {
            id: "a",
            text: "One giant table with user info repeated for every post",
            icon: "📜",
          },
          {
            id: "b",
            text: "Two tables (Users, Posts) linked by user_id",
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
        question: "What type should 'price' be?",
        options: [
          { id: "a", text: "Text" },
          { id: "b", text: "Number (Integer/Decimal)" },
          { id: "c", text: "Boolean" },
        ],
        correctOptionId: "b",
        correctExplanation: "Yes. You need to do math on prices.",
        wrongExplanation: "You can't multiply text.",
      },
      {
        type: "text",
        title: "Null vs Not Null",
        body:
          "Can a field be empty? Can a user exist without an email? If no, it is 'Not Null'. This creates rules that keep your data safe.",
      },
      {
        type: "spotTheBug",
        title: "Schema Error",
        description: "Find the data type mismatch",
        code: "CREATE TABLE products (\n  id SERIAL PRIMARY KEY,\n  name TEXT,\n  price TEXT, -- Wait, is this right?\n  in_stock BOOLEAN\n);",
        bugs: [
          {
            id: "price-type",
            line: 4,
            description: "Price should be a Number (Integer or Decimal), not Text, so we can do math.",
            fix: "price INTEGER",
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

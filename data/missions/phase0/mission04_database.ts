import { MissionData } from "../world0";

export const mission04: MissionData = {
  id: "database-fundamentals",
  title: "Database Fundamentals",
  slides: [
    {
      type: "text",
      title: "Persistence",
      content:
        "Apps need to remember things. A Database stores data permanently (persistence). Without it, everything would reset when you refresh the page.",
    },
    {
      type: "text",
      title: "Tables, Rows, Columns",
      content:
        "Think of a spreadsheet. A 'Table' is a sheet (e.g., Users). A 'Row' is one item (e.g., John Doe). A 'Column' is a property (e.g., Email).",
    },
    {
      type: "text",
      title: "Relationships",
      content:
        "Data is connected. A 'Post' belongs to a 'User'. A 'Comment' belongs to a 'Post'. These connections are called Relationships (Relational DB).",
    },
    {
      type: "text",
      title: "Supabase & Postgres",
      content:
        "We use Supabase, which is built on PostgreSQL. It's one of the most powerful and standard databases in the world.",
    },
    {
      type: "quiz",
      question: "Which table is best for storing a list of signed-up people?",
      options: [
        { id: "a", text: "Products Table" },
        { id: "b", text: "Users Table" },
        { id: "c", text: "Orders Table" },
      ],
      correct: "b",
      feedbackCorrect: "Correct. A 'Users' table is the standard place for user accounts.",
      feedbackWrong: "Think about what entity we are storing.",
    },
    {
      type: "text",
      title: "Primary Keys: The Unique Identifier",
      content:
        "Every row in a table needs a unique identifier called a 'Primary Key'. Usually, this is an 'ID' column with a unique number or code. Think of it like a Social Security Number - it's the one thing that makes each row unique, even if names or emails are the same.",
    },
    {
      type: "identify",
      title: "Identify the Primary Key",
      question: "Which column uniquely identifies a specific user?",
      correctId: "id",
      feedbackCorrect: "Correct. An ID is unique for every row.",
      feedbackWrong: "Emails can change, Names can be duplicates. IDs are forever.",
      options: [
        { id: "name", text: "Name: John", icon: "👤" },
        { id: "email", text: "Email: john@gmail.com", icon: "📧" },
        { id: "id", text: "ID: 550e8400...", icon: "🔑" },
      ],
    },
    {
      type: "quiz",
      question: "What does 'Persistence' mean?",
      options: [
        { id: "a", text: "Data is lost on refresh" },
        { id: "b", text: "Data is saved permanently" },
        { id: "c", text: "Data is encrypted" },
      ],
      correct: "b",
      feedbackCorrect: "Yes. Persistence means the data survives restarts and refreshes.",
      feedbackWrong: "It's about the lifespan of the data.",
    },
  ],
};

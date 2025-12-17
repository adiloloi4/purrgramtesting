import { MissionData } from "../world0";

export const mission04: MissionData = {
  id: "database-fundamentals",
  title: "Database Fundamentals",
  slides: [
    {
      type: "text",
      title: "Persistence",
      body:
        "Apps need to remember things. A Database stores data permanently (persistence). Without it, everything would reset when you refresh the page.",
    },
    {
      type: "text",
      title: "Tables, Rows, Columns",
      body:
        "Think of a spreadsheet. A 'Table' is a sheet (e.g., Users). A 'Row' is one item (e.g., John Doe). A 'Column' is a property (e.g., Email).",
    },
    {
      type: "text",
      title: "Relationships",
      body:
        "Data is connected. A 'Post' belongs to a 'User'. A 'Comment' belongs to a 'Post'. These connections are called Relationships (Relational DB).",
    },
    {
      type: "text",
      title: "Supabase & Postgres",
      body:
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
      correctOptionId: "b",
      correctExplanation: "Correct. A 'Users' table is the standard place for user accounts.",
      wrongExplanation: "Think about what entity we are storing.",
    },
    {
      type: "text",
      title: "Primary Keys: The Unique Identifier",
      body:
        "Every row in a table needs a unique identifier called a 'Primary Key'. Usually, this is an 'ID' column with a unique number or code. Think of it like a Social Security Number - it's the one thing that makes each row unique, even if names or emails are the same.",
    },
    {
      type: "identify",
      prompt: "Which column uniquely identifies a specific user?",
      correctOptionId: "id",
      correctExplanation: "Correct. An ID is unique for every row.",
      wrongExplanation: "Emails can change, Names can be duplicates. IDs are forever.",
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
      correctOptionId: "b",
      correctExplanation: "Yes. Persistence means the data survives restarts and refreshes.",
      wrongExplanation: "It's about the lifespan of the data.",
    },
    {
      type: "spotTheBug",
      title: "Find the Data Logic Error",
      description: "We have a rule: 'Every user must have a unique email'. Look at this situation:",
      code: "1. User A signs up with 'john@example.com'\n2. User B tries to sign up with 'john@example.com'\n3. The database saves both users. \n\n// ❌ ERROR: Now we have two users with the same email!",
      bugs: [
        {
          id: "duplicate-email",
          line: 3,
          description: "The database shouldn't have saved the second user. The email column needs a 'UNIQUE' constraint.",
          fix: "Tell AI: 'Add a UNIQUE constraint to the email column so duplicates are impossible.'",
        },
      ],
    },
    {
      type: "sequenceGame",
      title: "Data Persistence Flow",
      description: "Trace how data gets saved permanently",
      items: [
        { id: "input", label: "User types name into form", correctPosition: 0 },
        { id: "submit", label: "Form submits data to API", correctPosition: 1 },
        { id: "insert", label: "API runs INSERT command", correctPosition: 2 },
        { id: "store", label: "Database writes row to disk", correctPosition: 3 },
        { id: "id", label: "Database generates unique ID", correctPosition: 4 },
        { id: "confirm", label: "Database confirms save", correctPosition: 5 },
      ],
    },
  ],
};

// Game rounds data - many rounds for endless gameplay

export const memoryGameRounds = [
  // Tech Stack
  { id: "1", cards: [
    { id: "react", front: "React", back: "UI Library" },
    { id: "nextjs", front: "Next.js", back: "React Framework" },
    { id: "supabase", front: "Supabase", back: "Backend Platform" },
    { id: "cursor", front: "Cursor", back: "AI IDE" },
    { id: "vercel", front: "Vercel", back: "Deployment" },
    { id: "typescript", front: "TypeScript", back: "Typed JavaScript" },
  ]},
  { id: "2", cards: [
    { id: "tailwind", front: "Tailwind", back: "CSS Framework" },
    { id: "postgres", front: "PostgreSQL", back: "Database" },
    { id: "nodejs", front: "Node.js", back: "JavaScript Runtime" },
    { id: "npm", front: "npm", back: "Package Manager" },
    { id: "git", front: "Git", back: "Version Control" },
    { id: "github", front: "GitHub", back: "Code Hosting" },
  ]},
  // Concepts
  { id: "3", cards: [
    { id: "frontend", front: "Frontend", back: "User Interface" },
    { id: "backend", front: "Backend", back: "Server Logic" },
    { id: "api", front: "API", back: "Application Interface" },
    { id: "database", front: "Database", back: "Data Storage" },
    { id: "auth", front: "Auth", back: "Authentication" },
    { id: "deploy", front: "Deploy", back: "Go Live" },
  ]},
  // Commands
  { id: "4", cards: [
    { id: "npm-install", front: "npm install", back: "Install Package" },
    { id: "npm-run-dev", front: "npm run dev", back: "Start Dev Server" },
    { id: "git-add", front: "git add .", back: "Stage Changes" },
    { id: "git-commit", front: "git commit", back: "Save Changes" },
    { id: "git-push", front: "git push", back: "Upload to GitHub" },
    { id: "vercel-deploy", front: "vercel deploy", back: "Deploy to Vercel" },
  ]},
  // React Concepts
  { id: "5", cards: [
    { id: "component", front: "Component", back: "Reusable UI Piece" },
    { id: "state", front: "State", back: "Component Data" },
    { id: "props", front: "Props", back: "Component Inputs" },
    { id: "hook", front: "Hook", back: "React Function" },
    { id: "useState", front: "useState", back: "State Hook" },
    { id: "useEffect", front: "useEffect", back: "Side Effect Hook" },
  ]},
  // Database Concepts
  { id: "6", cards: [
    { id: "table", front: "Table", back: "Data Container" },
    { id: "row", front: "Row", back: "Single Record" },
    { id: "column", front: "Column", back: "Data Field" },
    { id: "primary-key", front: "Primary Key", back: "Unique Identifier" },
    { id: "foreign-key", front: "Foreign Key", back: "Reference to Another Table" },
    { id: "query", front: "Query", back: "Data Request" },
  ]},
  // More rounds...
  { id: "7", cards: [
    { id: "html", front: "HTML", back: "Markup Language" },
    { id: "css", front: "CSS", back: "Styling Language" },
    { id: "js", front: "JavaScript", back: "Programming Language" },
    { id: "ts", front: "TypeScript", back: "Typed JavaScript" },
    { id: "json", front: "JSON", back: "Data Format" },
    { id: "rest", front: "REST", back: "API Style" },
  ]},
  { id: "8", cards: [
    { id: "http", front: "HTTP", back: "Web Protocol" },
    { id: "https", front: "HTTPS", back: "Secure HTTP" },
    { id: "url", front: "URL", back: "Web Address" },
    { id: "endpoint", front: "Endpoint", back: "API URL" },
    { id: "method", front: "Method", back: "GET, POST, etc." },
    { id: "status", front: "Status Code", back: "200, 404, etc." },
  ]},
  { id: "9", cards: [
    { id: "env", front: ".env", back: "Environment Variables" },
    { id: "key", front: "API Key", back: "Secret Token" },
    { id: "token", front: "Token", back: "Auth Credential" },
    { id: "session", front: "Session", back: "User Login State" },
    { id: "cookie", front: "Cookie", back: "Browser Storage" },
    { id: "localStorage", front: "localStorage", back: "Browser Storage" },
  ]},
  { id: "10", cards: [
    { id: "async", front: "async", back: "Asynchronous" },
    { id: "await", front: "await", back: "Wait for Promise" },
    { id: "promise", front: "Promise", back: "Future Value" },
    { id: "fetch", front: "fetch", back: "HTTP Request" },
    { id: "response", front: "Response", back: "API Reply" },
    { id: "error", front: "Error", back: "Something Went Wrong" },
  ]},
];

// Generate many more rounds by duplicating and shuffling
export function generateMemoryRounds(count: number = 50) {
  const rounds = [];
  for (let i = 0; i < count; i++) {
    const baseRound = memoryGameRounds[i % memoryGameRounds.length];
    rounds.push({
      ...baseRound,
      id: `${baseRound.id}-${i}`,
      cards: baseRound.cards.map(card => ({ ...card }))
    });
  }
  return rounds.sort(() => Math.random() - 0.5);
}

export const typingGameRounds = [
  "Create a purple button that clicks.",
  "Add a login form with email and password.",
  "Make the header sticky.",
  "Fetch users from Supabase and show them.",
  "Add dark mode support.",
  "Fix the bug where the modal doesn't close.",
  "Deploy this to Vercel.",
  "Create a database table for posts.",
  "Add an API route to send emails.",
  "Make the card component responsive.",
  "Show a loading spinner while fetching.",
  "Add Google authentication.",
  "Create a landing page hero section.",
  "Center the text vertically.",
  "Add a hover effect to the cards.",
  "Sort the list by date.",
  "Filter items by category.",
  "Add a search bar to the list.",
  "Create a sidebar navigation.",
  "Make the footer stay at the bottom.",
  "Add a toast notification on success.",
  "Validate the form input.",
  "Redirect to dashboard after login.",
  "Show an error message if it fails.",
  "Add a profile page for the user.",
  "Create a settings modal.",
  "Add a delete button with confirmation.",
  "Make the images lazy load.",
  "Add analytics to track clicks.",
  " Optimize the page for SEO.",
];

export function generateTypingRounds(count: number = 100) {
  const rounds = [];
  for (let i = 0; i < count; i++) {
    rounds.push(typingGameRounds[i % typingGameRounds.length]);
  }
  return rounds.sort(() => Math.random() - 0.5);
}


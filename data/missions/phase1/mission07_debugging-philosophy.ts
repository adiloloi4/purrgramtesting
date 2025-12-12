import { MissionData } from "../world0";

export const mission07: MissionData = {
  id: "debugging-philosophy",
  title: "Debugging is Learning",
  slides: [
    {
      type: "text",
      title: "Errors Are Teachers",
      content:
        "Every error message is a lesson. Every bug is a puzzle. Every failure is feedback. Debugging isn't a punishment - it's how you learn. Embrace it.",
    },
    {
      type: "text",
      title: "The Debugging Mindset",
      content:
        "When code breaks, don't panic. Don't blame. Investigate. Read the error. Understand it. Fix it. Learn from it. This is the debugging mindset.",
    },
    {
      type: "toggle_cards",
      title: "Debugging Strategies",
      cards: [
        {
          id: "read",
          title: "Read the Error",
          description: "Error messages tell you exactly what's wrong. Read them carefully. They're trying to help you.",
        },
        {
          id: "isolate",
          title: "Isolate the Problem",
          description: "Break down the issue. Test small parts. Find where it breaks. Narrow it down.",
        },
        {
          id: "ask",
          title: "Ask AI",
          description: "Paste the error into Claude or Cursor. AI is great at explaining what went wrong and how to fix it.",
        },
        {
          id: "learn",
          title: "Learn from It",
          description: "Every bug teaches you something. Why did it happen? How can you prevent it? This is growth.",
        },
      ],
    },
    {
      type: "text",
      title: "Common Errors Are Common Teachers",
      content:
        "The same errors appear again and again. Type errors. Null errors. Async errors. Learn them once, recognize them forever. This is how you level up.",
    },
    {
      type: "text",
      title: "The Stack Trace",
      content:
        "Stack traces look scary, but they're treasure maps. They show you exactly where the problem is. Follow them. They lead to the solution.",
    },
    {
      type: "quiz",
      question: "What should you do when you encounter an error?",
      options: [
        { id: "a", text: "Panic and give up" },
        { id: "b", text: "Read the error, understand it, and fix it" },
        { id: "c", text: "Ignore it and move on" },
      ],
      correct: "b",
      feedbackCorrect: "Exactly! Errors are learning opportunities. Read them, understand them, fix them, learn from them.",
      feedbackWrong: "Think about the debugging mindset - errors are teachers, not enemies.",
    },
    {
      type: "identify",
      title: "Identify the Best Approach",
      question: "Which approach to debugging is most effective?",
      correctId: "b",
      feedbackCorrect: "Yes! This systematic approach - read, isolate, ask, learn - is how you master debugging.",
      feedbackWrong: "Think about which approach shows a learning mindset and systematic problem-solving.",
      options: [
        {
          id: "a",
          text: "Guess randomly and hope it works",
          icon: "❌",
        },
        {
          id: "b",
          text: "Read the error, isolate the problem, ask AI for help, learn from it",
          icon: "✅",
        },
        {
          id: "c",
          text: "Blame the tools and give up",
          icon: "❌",
        },
      ],
    },
    {
      type: "text",
      title: "Master Debugger",
      content:
        "The best developers aren't the ones who never make mistakes. They're the ones who learn from every mistake. Every error makes you better. Every bug makes you smarter. This is the path to mastery.",
    },
    {
      type: "codeChallenge",
      title: "Debug This Code",
      description: "Practice debugging with a real broken component",
      task: "I've given you broken code below. There are 3 bugs in it. Use Cursor's AI to help you find and fix them. This is real debugging practice.",
      starterCode: "function UserProfile({ user }) {\n  const [name, setName] = useState(user.name);\n  \n  return (\n    <div>\n      <h1>Welcome {name}</h1>\n      <button onClick={() => setName(user.name.toUpperCase())}>\n        Uppercase Name\n      </button>\n      <p>Email: {user.email}</p>\n    </div>\n  );\n}\n\n// Bugs: 1) Missing import for useState\n//       2) user might be undefined\n//       3) No error handling",
      successCriteria: [
        "Fixed missing useState import",
        "Added null/undefined checks for user",
        "Added error handling",
        "Code runs without errors",
        "Component works correctly"
      ],
      hint: "Use Cursor's chat to ask: 'What's wrong with this code?' and it will help you find the bugs",
      example: "// Fixed version should handle:\n// 1. Import useState\n// 2. Check if user exists\n// 3. Handle edge cases",
    },
    {
      type: "spotTheBug",
      title: "Find the Bug",
      description: "Click on the line with the error",
      code: "function calculateTotal(items) {\n  let total = 0;\n  for (let i = 0; i < items.length; i++) {\n    total += items[i].price;\n  }\n  return total;\n}\n\nconst cart = [\n  { name: 'Product 1', price: 10 },\n  { name: 'Product 2', price: 20 },\n  { name: 'Product 3' }\n];\n\nconst result = calculateTotal(cart);",
      bugs: [
        {
          id: "missing-price",
          line: 10,
          description: "Product 3 is missing a price property",
          fix: "{ name: 'Product 3', price: 15 }",
        },
      ],
    },
    {
      type: "memoryGame",
      title: "Debugging Strategies Memory Game",
      description: "Match debugging strategies to their descriptions",
      cards: [
        { id: "read", front: "Read the Error", back: "Error messages tell you what's wrong" },
        { id: "isolate", front: "Isolate the Problem", back: "Break down, test small parts" },
        { id: "ask", front: "Ask AI", back: "Paste error into Claude or Cursor" },
        { id: "learn", front: "Learn from It", back: "Every bug teaches you something" },
        { id: "stack-trace", front: "Stack Trace", back: "Treasure map showing where the problem is" },
        { id: "errors-teachers", front: "Errors Are Teachers", back: "Every error is a learning opportunity" },
      ],
      timeLimit: 60,
    },
  ],
};


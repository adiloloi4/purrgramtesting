import { MissionData } from "../world0";

export const mission07: MissionData = {
  id: "debugging-philosophy",
  title: "Debugging is Learning",
  slides: [
    {
      type: "text",
      title: "Errors Are Teachers",
      body:
        "Every error message is a lesson. Every bug is a puzzle. Every failure is feedback. Debugging isn't a punishment - it's how you learn. Embrace it.",
    },
    {
      type: "text",
      title: "The Debugging Mindset",
      body:
        "When code breaks, don't panic. Don't blame. Investigate. Read the error. Understand it. Fix it. Learn from it. This is the debugging mindset.",
    },
    {
      type: "checklist",
      title: "Debugging Strategies",
      prompt: "Your toolkit for fixing bugs.",
      items: [
        { id: "read", label: "Read the Error: It's an instruction." },
        { id: "isolate", label: "Isolate: Break it down." },
        { id: "ask", label: "Ask AI: Paste error to Claude/Cursor." },
        { id: "learn", label: "Learn: Understand why it broke." }
      ]
    },
    {
      type: "text",
      title: "Common Errors Are Common Teachers",
      body:
        "The same errors appear again and again. Type errors. Null errors. Async errors. Learn them once, recognize them forever. This is how you level up.",
    },
    {
      type: "quiz",
      question: "What should you do when you encounter an error?",
      options: [
        { id: "a", text: "Panic and give up" },
        { id: "b", text: "Read the error, understand it, and fix it" },
        { id: "c", text: "Ignore it and move on" },
      ],
      correctOptionId: "b",
      correctExplanation: "Exactly! Errors are learning opportunities. Read them, understand them, fix them, learn from them.",
      wrongExplanation: "Think about the debugging mindset - errors are teachers, not enemies.",
    },
    {
      type: "identify",
      prompt: "Which approach to debugging is most effective?",
      correctOptionId: "b",
      correctExplanation: "Yes! This systematic approach - read, isolate, ask, learn - is how you master debugging.",
      wrongExplanation: "Think about which approach shows a learning mindset and systematic problem-solving.",
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
      body:
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
      type: "sequenceGame",
      title: "The Debugging Flow",
      description: "Order the steps of the systematic debugging process",
      items: [
        { id: "read", label: "Read the Error Message", correctPosition: 0 },
        { id: "isolate", label: "Isolate the Problem (Reproduce it)", correctPosition: 1 },
        { id: "ask", label: "Paste to AI (Ask)", correctPosition: 2 },
        { id: "fix", label: "Apply the Fix", correctPosition: 3 },
        { id: "learn", label: "Learn why it happened", correctPosition: 4 },
      ],
    },
    {
      type: "text",
      title: "Confidence Boost",
      body:
        "You are now a debugger. You don't fear red text. You read it, fix it, and move on.",
    },
  ],
};

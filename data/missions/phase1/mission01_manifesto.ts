import { MissionData } from "../world0";

export const mission01: MissionData = {
  id: "manifesto",
  title: "The Vibe Coder Manifesto",
  slides: [
    {
      type: "text",
      title: "Speed Over Perfection",
      content:
        "The old way: perfect code, shipped never. The new way: working code, shipped today. Vibe Coding is about velocity, not vanity. Every day you spend perfecting is a day your product isn't helping users.",
    },
    {
      type: "text",
      title: "Ship to Learn",
      content:
        "You don't learn by reading. You don't learn by watching. You learn by building. Every shipped feature teaches you more than a hundred tutorials. Real feedback from real users beats theoretical knowledge every time.",
    },
    {
      type: "text",
      title: "Product > Code",
      content:
        "Users don't care about your code quality. They care about features that solve their problems. A messy codebase that ships beats a perfect codebase that never sees the light of day.",
    },
    {
      type: "toggle_cards",
      title: "The Vibe Principles",
      cards: [
        {
          id: "speed",
          title: "Speed > Perfection",
          description: "Working code today beats perfect code tomorrow. Ship fast, iterate faster.",
        },
        {
          id: "iterate",
          title: "Iterate, Don't Perfect",
          description: "Launch, learn, improve. Repeat. Perfection is the enemy of progress.",
        },
        {
          id: "product",
          title: "Product > Code",
          description: "Users care about features, not code quality. Build what matters.",
        },
        {
          id: "learn",
          title: "Learn by Shipping",
          description: "Every shipped feature is a lesson. Every user interaction is feedback.",
        },
      ],
    },
    {
      type: "quiz",
      question: "What matters more in Vibe Coding?",
      options: [
        { id: "a", text: "Writing perfect, bug-free code" },
        { id: "b", text: "Shipping working features fast" },
        { id: "c", text: "Memorizing all programming syntax" },
      ],
      correct: "b",
      feedbackCorrect: "Exactly! Speed and shipping are the priorities. You can fix bugs later, but you can't fix what never ships.",
      feedbackWrong: "Think about what gets products to users faster. Perfection can wait.",
    },
    {
      type: "text",
      title: "The Manifesto",
      content:
        "You are a Vibe Coder. You ship fast. You learn by doing. You prioritize users over code. You iterate, you improve, you build. This is your philosophy. This is your way.",
    },
    {
      type: "codeChallenge",
      title: "Build Your First Component",
      description: "Put the manifesto into practice - build something now",
      task: "Open Cursor and create a new React component called Manifesto.tsx. It should display the four Vibe Principles as cards with a title and description. Use Tailwind for styling. Make it look clean and modern.",
      starterCode: "// Create app/components/Manifesto.tsx\n// Your code here",
      successCriteria: [
        "Component file created in app/components/",
        "Displays all 4 Vibe Principles",
        "Uses Tailwind CSS for styling",
        "Looks clean and modern",
        "Component exports correctly"
      ],
      hint: "Use a simple card layout with title and description for each principle",
      example: "export default function Manifesto() { return <div>...</div> }",
    },
    {
      type: "memoryGame",
      title: "Vibe Principles Memory Challenge",
      description: "Match the Vibe Coding principles to their meanings",
      cards: [
        { id: "speed", front: "Speed > Perfection", back: "Ship fast, iterate faster" },
        { id: "product", front: "Product > Code", back: "Users care about features" },
        { id: "learn", front: "Learn by Shipping", back: "Every feature is a lesson" },
        { id: "iterate", front: "Iterate, Don't Perfect", back: "Launch, learn, improve" },
      ],
      timeLimit: 50,
    },
    {
      type: "speedQuiz",
      title: "The Vibe Coder Manifesto Quiz",
      description: "Test your understanding of the entire Vibe Coding philosophy",
      questions: [
        {
          id: "q1",
          question: "What matters more: perfect code or shipping fast?",
          options: [
            { id: "a", text: "Perfect code" },
            { id: "b", text: "Shipping fast" },
            { id: "c", text: "They're equal" },
          ],
          correct: "b",
          timeLimit: 12,
        },
        {
          id: "q2",
          question: "How do you learn in Vibe Coding?",
          options: [
            { id: "a", text: "By reading tutorials" },
            { id: "b", text: "By shipping features" },
            { id: "c", text: "By watching videos" },
          ],
          correct: "b",
          timeLimit: 12,
        },
        {
          id: "q3",
          question: "What do users care about?",
          options: [
            { id: "a", text: "Code quality" },
            { id: "b", text: "Features that solve problems" },
            { id: "c", text: "Perfect architecture" },
          ],
          correct: "b",
          timeLimit: 12,
        },
      ],
    },
  ],
};


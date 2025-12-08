import { MissionData } from "../world0";

export const mission0A: MissionData = {
  id: "what-is-vibe-coding",
  title: "What is Vibe Coding",
  slides: [
    {
      type: "text",
      title: "The Shift",
      content:
        "Vibe Coding is not about writing code character by character. It is about building products using AI-assisted development. The AI writes the syntax; you provide the vision.",
    },
    {
      type: "text",
      title: "Commander, not Scribe",
      content:
        "In the old world, developers were scribes, memorizing dense syntax. In the new world, you are a Commander. You direct powerful systems to execute your will.",
    },
    {
      type: "text",
      title: "Permissionless Creation",
      content:
        "Anyone can learn this. No prior knowledge is required. The barrier to entry has dropped from '4 years of CS degree' to 'Can you articulate what you want?'.",
    },
    {
      type: "quiz",
      question: "Which statement best describes Vibe Coding?",
      options: [
        { id: "a", text: "Memorizing algorithms for interviews" },
        { id: "b", text: "Building products by commanding AI tools" },
        { id: "c", text: "Writing binary code manually" },
      ],
      correct: "b",
      feedbackCorrect: "Exactly. You focus on the product and the logic, the AI handles the implementation.",
      feedbackWrong: "Think bigger. We are moving away from manual syntax generation.",
    },
    {
      type: "identify",
      title: "Identify the Vibe Coder",
      question: "Which of these developers is operating in God Mode?",
      correctId: "c",
      feedbackCorrect: "Yes! They are relaxed, orchestrating multiple AI agents, and shipping fast. That is the Vibe.",
      feedbackWrong: "Look for the one who isn't struggling with syntax errors but is managing a high-level workflow.",
      options: [
        { id: "a", text: "The Stack Overflow Copy-Paster", icon: "📋" },
        { id: "b", text: "The Syntax Memorizer", icon: "🧠" },
        { id: "c", text: "The AI Commander", icon: "⚡" },
      ],
    },
    {
      type: "text",
      title: "Welcome to the Future",
      content:
        "You are about to learn the most powerful skill of this decade. Let's begin your training.",
    },
  ],
};


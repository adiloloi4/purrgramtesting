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
    {
      type: "memoryGame",
      title: "Vibe Coding Memory Challenge",
      description: "Match the concepts to test your understanding",
      cards: [
        { id: "commander", front: "Commander", back: "Direct AI to build products" },
        { id: "scribe", front: "Scribe", back: "Old way: memorizing syntax" },
        { id: "vision", front: "Vision", back: "You provide the product vision" },
        { id: "syntax", front: "Syntax", back: "AI writes the code" },
      ],
      timeLimit: 60,
    },
    {
      type: "speedQuiz",
      title: "Vibe Coding Fundamentals Quiz",
      description: "Test your understanding of the entire Vibe Coding philosophy",
      questions: [
        {
          id: "q1",
          question: "What is the main difference between a Scribe and a Commander?",
          options: [
            { id: "a", text: "Scribes use AI, Commanders don't" },
            { id: "b", text: "Commanders direct AI systems, Scribes memorize syntax" },
            { id: "c", text: "There's no difference" },
          ],
          correct: "b",
          timeLimit: 15,
        },
        {
          id: "q2",
          question: "What do you provide in Vibe Coding?",
          options: [
            { id: "a", text: "The syntax and code" },
            { id: "b", text: "The vision and product direction" },
            { id: "c", text: "Nothing, AI does everything" },
          ],
          correct: "b",
          timeLimit: 15,
        },
        {
          id: "q3",
          question: "What has the barrier to entry dropped to?",
          options: [
            { id: "a", text: "4 years of CS degree" },
            { id: "b", text: "Can you articulate what you want?" },
            { id: "c", text: "10 years of experience" },
          ],
          correct: "b",
          timeLimit: 15,
        },
      ],
    },
  ],
};


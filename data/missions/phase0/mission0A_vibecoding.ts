import { MissionData } from "../world0";

export const mission0A: MissionData = {
  id: "what-is-vibe-coding",
  title: "What is Vibe Coding",
  slides: [
    {
      type: "text",
      title: "The Shift",
      body:
        "Vibe Coding is not about writing code character by character. It is about building products using AI-assisted development. The AI writes the syntax; you provide the vision.",
    },
    {
      type: "text",
      title: "Commander, not Scribe",
      body:
        "In the old world, developers were scribes, memorizing dense syntax. In the new world, you are a Commander. You direct powerful systems to execute your will.",
    },
    {
      type: "text",
      title: "Permissionless Creation",
      body:
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
      correctOptionId: "b",
      correctExplanation: "Exactly. You focus on the product and the logic, the AI handles the implementation.",
      wrongExplanation: "Think bigger. We are moving away from manual syntax generation.",
    },
    {
      type: "identify",
      prompt: "Which of these developers is operating in God Mode?",
      correctOptionId: "c",
      correctExplanation: "Yes! They are relaxed, orchestrating multiple AI agents, and shipping fast. That is the Vibe.",
      wrongExplanation: "Look for the one who isn't struggling with syntax errors but is managing a high-level workflow.",
      options: [
        { id: "a", text: "The Stack Overflow Copy-Paster", icon: "📋" },
        { id: "b", text: "The Syntax Memorizer", icon: "🧠" },
        { id: "c", text: "The AI Commander", icon: "⚡" },
      ],
    },
    {
      type: "text",
      title: "Welcome to the Future",
      body:
        "You are about to learn the most powerful skill of this decade. Let's begin your training.",
    },
    {
      type: "matching",
      prompt: "The Vibe Roles",
      pairs: [
        { id: "commander", left: "Commander", right: "Directs the AI (You)" },
        { id: "scribe", left: "Scribe", right: "Writes the syntax (AI)" },
        { id: "vision", left: "Vision", right: "What to build (You)" },
        { id: "impl", left: "Implementation", right: "How to build it (AI)" },
      ],
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


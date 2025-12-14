import { MissionData } from "../world0";

export const mission03: MissionData = {
  id: "context-game",
  title: "The Context Game",
  slides: [
    {
      type: "text",
      title: "The Context Problem",
      content:
        "AI is powerful, but it has limits. It can only work with what you give it. Feed it bad context, get bad results. Feed it good context, get magic. This is the Context Game.",
    },
    {
      type: "text",
      title: "What is Context?",
      content:
        "Context is the information you give to AI. It's the code files, documentation, and instructions you provide. The better your context, the better AI can help you. Without context, AI hallucinates.",
    },
    {
      type: "text",
      title: "The Hallucination Problem",
      content:
        "When AI doesn't have enough context, it makes things up. It invents functions that don't exist. It creates APIs that aren't real. This is hallucination. Good context prevents this.",
    },
    {
      type: "toggle_cards",
      title: "Context Best Practices",
      cards: [
        {
          id: "docs",
          title: "Include Documentation",
          description: "Paste relevant docs into your prompt. Show AI what's available, not what you think exists.",
        },
        {
          id: "code",
          title: "Share Your Code",
          description: "Include the files you're working on. Let AI see the full picture, not just fragments.",
        },
        {
          id: "specific",
          title: "Be Specific",
          description: "Don't say 'make it better.' Say 'add error handling to the login function.' Specificity wins.",
        },
        {
          id: "examples",
          title: "Provide Examples",
          description: "Show AI what good looks like. One example is worth a thousand descriptions.",
        },
      ],
    },
    {
      type: "text",
      title: "The Context Window",
      content:
        "Every AI has a context window - the amount of information it can process at once. Use it wisely. Include what matters. Exclude what doesn't. Quality over quantity.",
    },
    {
      type: "quiz",
      question: "What happens when AI doesn't have enough context?",
      options: [
        { id: "a", text: "It works perfectly" },
        { id: "b", text: "It hallucinates and makes things up" },
        { id: "c", text: "It asks for help" },
      ],
      correct: "b",
      feedbackCorrect: "Exactly! Without proper context, AI will hallucinate and create things that don't exist.",
      feedbackWrong: "Think about what happens when AI doesn't have the information it needs.",
    },
    {
      type: "identify",
      title: "Identify Good Context",
      question: "Which prompt provides better context?",
      correctId: "b",
      feedbackCorrect: "Yes! Including the actual code and specific requirements gives AI the context it needs.",
      feedbackWrong: "Think about which prompt gives AI more useful information to work with.",
      options: [
        {
          id: "a",
          text: "Make the login better",
          icon: "❌",
        },
        {
          id: "b",
          text: "Here's my login component. Add error handling for invalid emails and show a toast message on success.",
          icon: "✅",
        },
        {
          id: "c",
          text: "Fix the bugs",
          icon: "❌",
        },
      ],
    },
    {
      type: "text",
      title: "Master the Game",
      content:
        "The Context Game is about giving AI exactly what it needs, nothing more, nothing less. Master this, and AI becomes your superpower. Ignore this, and AI becomes a source of frustration.",
    },
    {
      type: "buildTask",
      title: "Practice the Context Game",
      description: "Use proper context to build a feature",
      task: "Open Cursor. Create a new file called UserProfile.tsx. Then, using Cursor's @ feature, reference this file and ask AI: 'Add a form with name, email, and bio fields. Use the same styling as the rest of my app.' This teaches you to provide context (the file) and be specific (the styling requirement).",
      expectedOutcome: "AI generates a form component that matches your app's style because you provided context",
      verificationSteps: [
        "Created UserProfile.tsx file",
        "Used @ to reference the file in Cursor",
        "Asked AI to add a form with specific fields",
        "AI generated code that matches your app style",
        "Form renders correctly in your app"
      ],
      tips: [
        "Use Cmd+K or Cmd+L in Cursor to open the chat",
        "Type @ and select your file to add context",
        "Be specific about styling requirements",
        "Review the generated code before using it"
      ],
    },
    {
      type: "codePuzzle",
      title: "Complete the Context Prompt",
      description: "Fill in the blanks to create a good AI prompt",
      puzzle: "Here's my __0__ component. Please __1__ error handling for invalid emails and show a __2__ message on success.",
      missingParts: [
        {
          id: "component",
          options: ["login", "button", "header"],
          correct: "login",
          hint: "What component needs error handling?",
        },
        {
          id: "action",
          options: ["add", "remove", "delete"],
          correct: "add",
          hint: "What do you want AI to do?",
        },
        {
          id: "message",
          options: ["toast", "alert", "console"],
          correct: "toast",
          hint: "What type of user-friendly message?",
        },
      ],
    },
    {
      type: "quiz",
      title: "Prompt Doctor: The Hallucination",
      question: "Scenario: The AI generated code that uses a library you haven't installed, and your app crashed.",
      options: [
        { id: "a", text: "Prompt: 'You broke it. Fix it now.'" },
        { id: "b", text: "Prompt: 'I got a Module Not Found error. Are you assuming I have this library installed? I don't. Please rewrite using standard fetch.'" },
        { id: "c", text: "Prompt: 'Why are you so bad at this?'" },
      ],
      correct: "b",
      feedbackCorrect: "Correct. You identified the root cause (hallucinated dependency) and gave a specific constraint (use standard fetch).",
      feedbackWrong: "Anger doesn't help the AI. Specificity does.",
    },
    {
      type: "quiz",
      title: "Prompt Doctor: The Styling",
      question: "Scenario: The AI created a button that looks completely different from the rest of your app.",
      options: [
        { id: "a", text: "Prompt: 'Make it look better.'" },
        { id: "b", text: "Prompt: 'Style this using Tailwind CSS to match the rounded-xl blue theme of my existing components. Reference @Button.tsx.'" },
        { id: "c", text: "Prompt: 'Change the color.'" },
      ],
      correct: "b",
      feedbackCorrect: "Perfect. You provided the tool (Tailwind), the specific style (rounded-xl blue), and the context (@Button.tsx).",
      feedbackWrong: "Vague requests get vague results. Be specific.",
    },
    {
      type: "quiz",
      title: "Prompt Doctor: The Bug",
      question: "Scenario: You paste an error log, but the AI just guesses randomly and breaks more things.",
      options: [
        { id: "a", text: "Prompt: 'Here is the file @page.tsx and the error log. Analyze the logic flow before suggesting a fix.'" },
        { id: "b", text: "Prompt: 'Try again.'" },
        { id: "c", text: "Prompt: 'Write the whole file from scratch.'" },
      ],
      correct: "a",
      feedbackCorrect: "Yes. You forced the AI to 'Analyze' and provided the necessary file context (@page.tsx).",
      feedbackWrong: "Blind guessing is the enemy. Force analysis first.",
    }
  ],
};

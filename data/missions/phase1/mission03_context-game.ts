import { MissionData } from "../world0";

export const mission03: MissionData = {
  id: "context-game",
  title: "The Context Game",
  slides: [
    {
      type: "text",
      title: "The Context Problem",
      body:
        "AI is powerful, but it has limits. It can only work with what you give it. Feed it bad context, get bad results. Feed it good context, get magic. This is the Context Game.",
    },
    {
      type: "text",
      title: "Amnesia",
      body:
        "The AI is a genius with amnesia. It doesn't know about the file you wrote 5 minutes ago unless you show it. It doesn't know your database schema unless you paste it. You must be the memory.",
    },
    {
      type: "text",
      title: "The Magic Key: @",
      body:
        "In Cursor, the @ key is your weapon. Type @ to link files. 'Hey AI, fix the bug in @UserProfile.tsx using styles from @globals.css'. This gives the AI eyes.",
    },
    {
      type: "checklist",
      title: "Context Best Practices",
      prompt: "Learn the rules.",
      items: [
        { id: "docs", label: "Include Documentation: Paste docs if AI doesn't know the library." },
        { id: "code", label: "Share Your Code: Use @ to include relevant files." },
        { id: "specific", label: "Be Specific: Say 'add error handling', not 'make it better'." },
        { id: "examples", label: "Provide Examples: Show AI what good looks like." }
      ]
    },
    {
      type: "identify",
      prompt: "Which prompt provides better context?",
      correctOptionId: "b",
      correctExplanation: "Yes! Including the actual code and specific requirements gives AI the context it needs.",
      wrongExplanation: "Think about which prompt gives AI more useful information to work with.",
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
      title: "Context Pollution",
      body:
        "Don't add your whole codebase. It confuses the AI (and costs tokens). Be a sniper, not a shotgunner. Add only what matters. Don't add 'package-lock.json' or huge image files.",
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
      type: "spotTheBug",
      title: "Context Pollution",
      description: "Identify the file that is polluting the context",
      code: "Files added to Context (@):\n\n- @Button.tsx (The component to fix)\n- @globals.css (The styles to use)\n- @package-lock.json (Auto-generated dependency tree)\n- @utils.ts (Helper functions)",
      bugs: [
        {
          id: "pollution",
          line: 5,
          description: "package-lock.json is huge and irrelevant for styling. It wastes tokens.",
          fix: "Remove @package-lock.json",
        },
      ],
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
      type: "text",
      title: "Confidence Boost",
      body:
        "You now know the secret language of AI. While others get generic answers, you will get precise, working code because you know how to feed the beast.",
    },
  ],
};

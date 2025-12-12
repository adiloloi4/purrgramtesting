import { MissionData } from "../world0";

export const world7Missions: MissionData[] = [
  {
    id: "recognizing-hallucinations",
    title: "Recognizing AI Errors",
    slides: [
      {
        type: "text",
        title: "The Liar Paradox",
        body: "Your AI partner is brilliant but delusional. It will confidently invent libraries that don't exist (like react-magic-button) or import files you deleted. We call this Hallucinating.",
      },
      {
        type: "text",
        title: "Signs of a Lie",
        body: "1. Phantom Imports: Importing @/components/ui/sparkle when you don't have it.\n2. Looping: It tries the same fix 3 times in a row.\n3. Over-complexity: Writing 50 lines of regex for a simple check.",
      },
      {
        type: "quiz",
        question: "The AI suggests import { MagicButton } from 'react-magic'; but you never installed react-magic. What is this?",
        options: [
          { id: "a", text: "A secret React feature", correct: false },
          { id: "b", text: "A hallucination", correct: true },
          { id: "c", text: "A clear instruction to install it", correct: false },
        ],
      },
      {
        type: "text",
        title: "Action: Bait the AI",
        body: "Open a new chat. Ask it: Import the Sparkle component from my UI folder and use it on the page. (Assuming you don't have one).",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Did it write the code confidently? Did it fail when you ran it? Good. You just caught a lie. Trust, but verify.",
        example: "Module not found: Can't resolve...",
      },
      {
        type: "memoryGame",
        title: "AI Hallucinations Memory Game",
        description: "Match hallucination signs to their descriptions",
        cards: [
          { id: "phantom", front: "Phantom Imports", back: "Importing components that don't exist" },
          { id: "looping", front: "Looping", back: "Tries the same fix 3 times in a row" },
          { id: "complexity", front: "Over-complexity", back: "50 lines of regex for a simple check" },
          { id: "hallucination", front: "Hallucination", back: "AI confidently invents things that don't exist" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Recognizing AI Errors Quiz",
        description: "Test your ability to spot AI hallucinations",
        questions: [
          {
            id: "q1",
            question: "What is a hallucination?",
            options: [
              { id: "a", text: "AI confidently invents things that don't exist" },
              { id: "b", text: "AI working perfectly" },
              { id: "c", text: "A real React feature" },
            ],
            correct: "a",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What should you do when you catch a hallucination?",
            options: [
              { id: "a", text: "Trust it completely" },
              { id: "b", text: "Trust, but verify" },
              { id: "c", text: "Ignore it" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "ai-fixes",
    title: "AI Fixing AI",
    slides: [
      {
        type: "text",
        title: "The Loop of Redemption",
        body: "When the AI breaks your code, don't revert immediately. Ask it to fix its own mess. It's often better at debugging than creating.",
      },
      {
        type: "text",
        title: "The Apology Prompt",
        body: "Copy this prompt:\n\nThat code caused an error: [paste error]. Please analyze why it failed and suggest a fix. Do NOT hallucinate packages.",
      },
      {
        type: "text",
        title: "Action: Break it on purpose",
        body: "Go to a working file (like page.tsx). Delete a closing brace } or an import. Save. The app crashes.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Highlight the broken code. Cmd+K -> Fix this. Did it restore the code? This is the Self-Healing workflow.",
        example: "Code restored.",
      },
      {
        type: "memoryGame",
        title: "AI Fixing AI Memory Game",
        description: "Match debugging concepts to their purposes",
        cards: [
          { id: "redemption", front: "Loop of Redemption", back: "AI fixes its own mistakes" },
          { id: "apology", front: "Apology Prompt", back: "Paste error and ask AI to analyze and fix" },
          { id: "self-healing", front: "Self-Healing", back: "AI restores broken code automatically" },
          { id: "debugging", front: "AI Debugging", back: "AI is often better at debugging than creating" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "AI Fix Workflow",
        description: "Order the steps to fix AI errors",
        items: [
          { id: "error", label: "AI code causes an error", correctPosition: 0 },
          { id: "paste", label: "Paste error message to AI", correctPosition: 1 },
          { id: "analyze", label: "AI analyzes and suggests fix", correctPosition: 2 },
          { id: "verify", label: "Verify the fix works", correctPosition: 3 },
        ],
        hint: "Start with error, end with verification",
      },
    ],
  },
  {
    id: "copy-paste-debug",
    title: "Copy-Paste Debugging",
    slides: [
      {
        type: "text",
        title: "The Ultimate Weapon",
        body: "Beginners stare at errors. Founders copy-paste them. The terminal output is the map to the treasure (the fix).",
      },
      {
        type: "text",
        title: "Context is King",
        body: "Don't just paste the error. Paste the error AND the file that caused it. Here is the error in terminal, and here is the code in @page.tsx.",
      },
      {
        type: "identify",
        prompt: "Which debugging prompt is best?",
        items: [
          { id: "1", text: "It's not working.", correct: false },
          { id: "2", text: "Error: Undefined is not a function in line 20.", correct: false },
          { id: "3", text: "I get Undefined error on line 20. Here is the code. Fix it.", correct: true },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Find a complex error log from the past (or create one). Paste the WHOLE thing into Cursor. See if it explains the root cause.",
        example: "Analysis: You are missing a prop.",
      },
      {
        type: "memoryGame",
        title: "Copy-Paste Debugging Memory Game",
        description: "Match debugging strategies to their effectiveness",
        cards: [
          { id: "stare", front: "Staring at Errors", back: "What beginners do (ineffective)" },
          { id: "copy-paste", front: "Copy-Paste", back: "What founders do (effective)" },
          { id: "context", front: "Context is King", back: "Paste error AND the file that caused it" },
          { id: "terminal", front: "Terminal Output", back: "The map to the treasure (the fix)" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Debugging Best Practices Quiz",
        description: "Test your understanding of effective debugging",
        questions: [
          {
            id: "q1",
            question: "What is the best debugging prompt?",
            options: [
              { id: "a", text: "It's not working" },
              { id: "b", text: "Error message + code file + fix request" },
              { id: "c", text: "Just the error" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What should you paste when debugging?",
            options: [
              { id: "a", text: "Just the error" },
              { id: "b", text: "Error AND the code file" },
              { id: "c", text: "Nothing" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "git-save-game",
    title: "Git as Save Points",
    slides: [
      {
        type: "text",
        title: "Save Your Game",
        body: "Coding without Git is like playing a video game without save slots. If you die (break the app), you restart from the beginning. Git lets you respawn.",
      },
      {
        type: "text",
        title: "The WIP Commit",
        body: "You don't need perfect commit messages. Just save. wip, saving, it works. Do this every time a feature works.",
      },
      {
        type: "checklist",
        title: "The Safety Protocol",
        prompt: "Before a big refactor:",
        items: [
          { id: "1", label: "Open Terminal" },
          { id: "2", label: "git add ." },
          { id: "3", label: "git commit -m 'safety save'" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Make a Safety Save right now. Then delete a random file. Then run git checkout . to restore it. Feel the power of respawning.",
        example: "File restored.",
      },
      {
        type: "memoryGame",
        title: "Git Save Game Memory Game",
        description: "Match Git concepts to their purposes",
        cards: [
          { id: "save-game", front: "Git as Save Game", back: "Like video game save slots" },
          { id: "wip", front: "WIP Commit", back: "Quick save with 'wip' or 'saving' message" },
          { id: "safety-save", front: "Safety Save", back: "Commit before big refactor" },
          { id: "respawning", front: "Respawning", back: "Restore code with git checkout" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "Git Safety Protocol",
        description: "Order the steps for a safety save",
        items: [
          { id: "terminal", label: "Open Terminal", correctPosition: 0 },
          { id: "add", label: "git add .", correctPosition: 1 },
          { id: "commit", label: "git commit -m 'safety save'", correctPosition: 2 },
          { id: "refactor", label: "Now you can refactor safely", correctPosition: 3 },
        ],
        hint: "Start with terminal, end with refactoring",
      },
    ],
  },
];

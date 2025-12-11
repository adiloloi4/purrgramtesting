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
    ],
  },
];

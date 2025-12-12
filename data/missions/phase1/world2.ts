import { MissionData } from "../world0";

export const world2Missions: MissionData[] = [
  {
    id: "god-mode-loop",
    title: "The God Mode Loop",
    slides: [
      {
        type: "text",
        title: "The Infinite Loop",
        body: "God Mode isn't a setting. It's a rhythm. It's the loop of creation. Master this, and you can build Facebook in a weekend.",
      },
      {
        type: "checklist",
        title: "The 4 Steps",
        prompt: "Memorize this flow.",
        items: [
          { id: "1", label: "Prompt (Describe intent)" },
          { id: "2", label: "Generate (AI writes code)" },
          { id: "3", label: "Vibe Check (Does it work?)" },
          { id: "4", label: "Refine (Iterate)" },
        ],
      },
      {
        type: "text",
        title: "Step 1: The Prompt",
        body: "A bad prompt is 'Fix code'. A God Mode prompt is 'The header is broken on mobile. It should stack vertically. Use flex-col.' Be specific.",
      },
      {
        type: "text",
        title: "Step 3: The Vibe Check",
        body: "Don't trust the AI. It lies. Always run the code. If it looks wrong, that's a Vibe Check failure. Don't fix it yourself - tell the AI why it failed.",
      },
      {
        type: "quiz",
        question: "What is the most important step?",
        options: [
          { id: "a", text: "Generate", correct: false },
          { id: "b", text: "Vibe Check (Verification)", correct: true },
          { id: "c", text: "Refine", correct: false },
        ],
      },
      {
        type: "miniChallenge",
        title: "Practice the Loop",
        task: "Open Cursor. Prompt: Create a React component for a red button. Check it. Then Prompt: Make it blue. Check it. Feel the rhythm.",
        example: "Red -> Blue -> Done.",
      },
      {
        type: "text",
        title: "Deep Dive: The Feedback Loop",
        body: "The faster you can go through this loop, the faster you build. Expert Vibe Coders do this loop 50 times an hour. Prompt, check, prompt, check.",
      },
      {
        type: "memoryGame",
        title: "God Mode Loop Memory Game",
        description: "Match the loop steps to their purposes",
        cards: [
          { id: "prompt", front: "Prompt", back: "Describe intent clearly" },
          { id: "generate", front: "Generate", back: "AI writes code" },
          { id: "vibe-check", front: "Vibe Check", back: "Most important - verify it works" },
          { id: "refine", front: "Refine", back: "Iterate and improve" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "The God Mode Loop",
        description: "Order the steps of the creation loop",
        items: [
          { id: "prompt", label: "Prompt (Describe intent)", correctPosition: 0 },
          { id: "generate", label: "Generate (AI writes code)", correctPosition: 1 },
          { id: "vibe-check", label: "Vibe Check (Does it work?)", correctPosition: 2 },
          { id: "refine", label: "Refine (Iterate)", correctPosition: 3 },
        ],
      },
    ],
  },
  {
    id: "context-game",
    title: "The Context Game",
    slides: [
      {
        type: "text",
        title: "Feeding the Beast",
        body: "The AI is a genius with amnesia. It only knows what you show it. If you don't show it your User component, it will hallucinate a new one. This is The Context Game.",
      },
      {
        type: "text",
        title: "The Magic Key: @",
        body: "In Cursor, the @ key is your weapon. Type @ to link files. 'Hey AI, fix the bug in @UserProfile.tsx using styles from @globals.css'.",
      },
      {
        type: "identify",
        prompt: "You want to fix a database error. What context do you need?",
        items: [
          { id: "1", text: "The CSS file", correct: false },
          { id: "2", text: "The server log error & the database schema file", correct: true },
          { id: "3", text: "The entire node_modules folder", correct: false },
        ],
      },
      {
        type: "text",
        title: "Context Pollution",
        body: "Don't add your whole codebase. It confuses the AI (and costs tokens). Be a sniper, not a shotgunner. Add only what matters.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "In Cursor, type @ and see the file list. Select README.md (or any file). Ask: Summarize this file. If it works, you know how to aim.",
        example: "Summary: This is a project about...",
      },
      {
        type: "codePuzzle",
        title: "Complete the Context Prompt",
        description: "Fill in the blanks to create a good AI prompt with context",
        puzzle: "Hey AI, fix the bug in __0__ using styles from __1__.",
        missingParts: [
          {
            id: "file1",
            options: ["@UserProfile.tsx", "@globals.css", "@package.json"],
            correct: "@UserProfile.tsx",
            hint: "What file has the bug?",
          },
          {
            id: "file2",
            options: ["@globals.css", "@UserProfile.tsx", "@README.md"],
            correct: "@globals.css",
            hint: "What file has the styles?",
          },
        ],
      },
      {
        type: "memoryGame",
        title: "Context Game Memory Game",
        description: "Match context concepts to their purposes",
        cards: [
          { id: "amnesia", front: "AI has Amnesia", back: "Only knows what you show it" },
          { id: "at-key", front: "@ Key", back: "Magic key to link files in Cursor" },
          { id: "sniper", front: "Be a Sniper", back: "Add only what matters, not everything" },
          { id: "pollution", front: "Context Pollution", back: "Adding whole codebase confuses AI" },
        ],
        timeLimit: 50,
      },
    ],
  },
  {
    id: "iterative-prompting",
    title: "Iterative Prompting",
    slides: [
      {
        type: "text",
        title: "Don't Eat the Elephant",
        body: "You can't eat an elephant in one bite. You can't build Netflix in one prompt. If you ask for too much, the AI chokes.",
      },
      {
        type: "text",
        title: "The 10% Rule",
        body: "Build 10% at a time. 1. The HTML structure. 2. The CSS. 3. The Click Handler. 4. The Database call. Each step is a small, verifiable win.",
      },
      {
        type: "quiz",
        question: "Which is a better workflow?",
        options: [
          { id: "a", text: "One prompt: Build a full chat app", correct: false },
          { id: "b", text: "Series: Build chat UI -> Add input state -> Connect to socket", correct: true },
        ],
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Let's practice iteration. Prompt 1: Create a simple card component with a title and image.",
      },
      {
        type: "text",
        title: "Then Copy This",
        body: "Prompt 2: Now make the image rounded and add a shadow on hover.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Did the card evolve? Did you verify it between steps? That is iteration.",
        example: "Card -> Better Card -> Best Card.",
      },
      {
        type: "memoryGame",
        title: "Iterative Prompting Memory Game",
        description: "Match iteration concepts to their purposes",
        cards: [
          { id: "elephant", front: "Don't Eat Elephant", back: "Can't build everything in one prompt" },
          { id: "10-percent", front: "10% Rule", back: "Build 10% at a time" },
          { id: "small-wins", front: "Small Wins", back: "Each step is verifiable" },
          { id: "series", front: "Series of Prompts", back: "Better than one huge prompt" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "Iterative Build Workflow",
        description: "Order the steps for building iteratively",
        items: [
          { id: "structure", label: "Build HTML structure", correctPosition: 0 },
          { id: "css", label: "Add CSS styling", correctPosition: 1 },
          { id: "handler", label: "Add click handler", correctPosition: 2 },
          { id: "database", label: "Connect to database", correctPosition: 3 },
        ],
      },
    ],
  },
  {
    id: "debug-dialogue",
    title: "Debugging as Dialogue",
    slides: [
      {
        type: "text",
        title: "The Red Wall",
        body: "You will see red text. You will break things. In the old days, you'd cry. In Vibe Coding, you just say: Hey AI, fix this.",
      },
      {
        type: "text",
        title: "Errors are Gold",
        body: "Error messages are not insults; they are instructions. Copy the error. Paste it into Cursor. The AI loves errors. It tells it exactly where to look.",
      },
      {
        type: "identify",
        prompt: "What is the best way to report a bug?",
        items: [
          { id: "1", text: "Say 'It's broken'", correct: false },
          { id: "2", text: "Paste the error log + the file code + 'What happened?'", correct: true },
        ],
      },
      {
        type: "text",
        title: "The What Changed Tactic",
        body: "If it worked 5 minutes ago, ask: What changed?. Review your recent commits or edits. The AI can check your git history if you paste the git diff.",
      },
      {
        type: "miniChallenge",
        title: "Simulate a Bug",
        task: "Delete a closing bracket } in your code. Save. See the error. Paste the error into Cursor. Does it tell you to put the bracket back?",
        example: "AI: You are missing a } on line 42.",
      },
      {
        type: "memoryGame",
        title: "Debugging as Dialogue Memory Game",
        description: "Match debugging concepts to their purposes",
        cards: [
          { id: "red-wall", front: "The Red Wall", back: "Errors you will see and break things" },
          { id: "errors-gold", front: "Errors are Gold", back: "Error messages are instructions" },
          { id: "paste", front: "Copy-Paste", back: "Copy error and paste into Cursor" },
          { id: "what-changed", front: "What Changed?", back: "Review recent commits if it worked before" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Debugging Quiz",
        description: "Test your understanding of debugging with AI",
        questions: [
          {
            id: "q1",
            question: "What is the best way to report a bug?",
            options: [
              { id: "a", text: "Say 'It's broken'" },
              { id: "b", text: "Paste error log + file code + 'What happened?'" },
              { id: "c", text: "Nothing" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What are error messages?",
            options: [
              { id: "a", text: "Insults" },
              { id: "b", text: "Instructions" },
              { id: "c", text: "Random text" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "clean-code-for-ai",
    title: "Writing Code for AI",
    slides: [
      {
        type: "text",
        title: "Readability Matters",
        body: "Even though you aren't writing every line, the code needs to be readable. Why? Because if the AI can't read it, it can't fix it. Clear variable names help the AI understand context.",
      },
      {
        type: "text",
        title: "Small Files",
        body: "AI gets lost in huge files (1000+ lines). Keep your components small. If a file gets too big, prompt: Refactor this into smaller sub-components.",
      },
      {
        type: "quiz",
        question: "When should you refactor?",
        options: [
          { id: "a", text: "Never, code is for machines.", correct: false },
          { id: "b", text: "When a file gets too large or complex for the AI to handle easily.", correct: true },
          { id: "c", text: "Before you even start coding.", correct: false },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Open a file. Ask Cursor: Is this file too long? Should we split it? See what it thinks.",
        example: "AI suggests splitting or says it's fine.",
      },
      {
        type: "memoryGame",
        title: "Clean Code for AI Memory Game",
        description: "Match code quality concepts for AI",
        cards: [
          { id: "readability", front: "Readability", back: "Code must be readable for AI to fix it" },
          { id: "variables", front: "Clear Variables", back: "Help AI understand context" },
          { id: "small-files", front: "Small Files", back: "AI gets lost in 1000+ line files" },
          { id: "refactor", front: "Refactor", back: "Split large files into smaller components" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Code Quality Quiz",
        description: "Test your understanding of writing code for AI",
        questions: [
          {
            id: "q1",
            question: "When should you refactor?",
            options: [
              { id: "a", text: "Never, code is for machines" },
              { id: "b", text: "When file gets too large for AI" },
              { id: "c", text: "Before you start coding" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "Why does readability matter?",
            options: [
              { id: "a", text: "It doesn't" },
              { id: "b", text: "AI can't fix code it can't read" },
              { id: "c", text: "It looks pretty" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "workflow-sim",
    title: "Workflow Simulator",
    slides: [
      {
        type: "text",
        title: "Put it all together",
        body: "You have the loop. You have the context. You have the iteration. Now let's simulate a full feature build.",
      },
      {
        type: "checklist",
        title: "Feature: Dark Mode Toggle",
        prompt: "We will build a dark mode toggle.",
        items: [
          { id: "1", label: "Prompt 1: Create the toggle UI" },
          { id: "2", label: "Prompt 2: Add state (isOn)" },
          { id: "3", label: "Prompt 3: Apply dark class to body" },
        ],
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: Create a small toggle switch component using Tailwind. It should have an isOn state.",
      },
      {
        type: "text",
        title: "The Pivot",
        body: "Wait! I changed my mind. I want a sun/moon icon instead of a switch. Prompt: Change the UI to use a Sun icon for light and Moon for dark.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Do you have a working toggle? Did you pivot gracefully? That is the God Mode Workflow.",
        example: "Click -> Dark Mode -> Click -> Light Mode.",
      },
      {
        type: "memoryGame",
        title: "Workflow Simulator Memory Game",
        description: "Match workflow concepts to their purposes",
        cards: [
          { id: "feature", front: "Feature Build", back: "Put all skills together" },
          { id: "steps", front: "Small Steps", back: "Build in increments (UI -> State -> Logic)" },
          { id: "pivot", front: "Pivot Gracefully", back: "Change direction when needed" },
          { id: "workflow", front: "God Mode Workflow", back: "Complete feature building process" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "Feature Build Workflow",
        description: "Order the steps to build a dark mode toggle",
        items: [
          { id: "ui", label: "Create toggle UI", correctPosition: 0 },
          { id: "state", label: "Add state (isOn)", correctPosition: 1 },
          { id: "apply", label: "Apply dark class to body", correctPosition: 2 },
        ],
      },
    ],
  },
];

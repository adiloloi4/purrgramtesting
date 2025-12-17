import { MissionData } from "../world0";

export const world7Missions: MissionData[] = [
  {
    id: "recognizing-hallucinations",
    title: "Recognizing AI Errors",
    slides: [
      {
        type: "text",
        title: "Phase 3: Polish Your ChatGPT Wrapper",
        body:
          "Phase 2 is done! You have a working ChatGPT wrapper. But it has bugs, looks basic, and needs polish. Phase 3 is about making it production-ready: fixing bugs, improving UI, adding polish. Let's start with debugging.",
      },
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 15",
        body:
          "Your ChatGPT wrapper works, but there are bugs. Messages not saving? Streaming broken? Errors in console? Authentication not working? This mission teaches you to debug like a pro using AI.",
      },
      {
        type: "text",
        title: "Why Debugging Skills Matter",
        body:
          "Bugs are inevitable. Even AI-generated code has issues. The skill isn't writing perfect code - it's fixing bugs quickly. With AI, you can debug 10x faster. Paste the error, get the fix. This is a superpower.",
      },
      {
        type: "text",
        title: "Common ChatGPT Wrapper Bugs",
        body: "1. Messages not saving to database\n2. Streaming not working (shows all at once)\n3. API errors (401, 429) not handled\n4. Chat history not loading\n5. Authentication issues\n6. UI bugs (messages overlap, scrolling broken)",
      },
      {
        type: "buildTask",
        title: "Find and Fix a Bug",
        description: "Use AI to debug your app",
        task: "Tell Cursor: 'I think there is a bug. Here is the error message: [paste error]. Please investigate and fix it.'",
        expectedOutcome: "Bug identified and fixed",
        verificationSteps: [
          "You pasted the error",
          "AI analyzed the code",
          "AI provided a fix",
        ],
        tips: [
          "The more details you give, the better",
          "Paste the specific file if you know where the bug is",
        ],
      },
      {
        type: "text",
        title: "The Debugging Process",
        body:
          "When debugging your ChatGPT wrapper: 1) Check browser console for errors (red text = problem), 2) Check network tab for failed API calls (red requests = broken), 3) Check Supabase logs for database errors, 4) Test each feature individually (isolate the bug), 5) Use AI to help fix issues (paste error + code).",
      },
      {
        type: "text",
        title: "Debugging Checklist",
        body:
          "When debugging your ChatGPT wrapper: 1) Check browser console for errors, 2) Check network tab for failed API calls, 3) Check Supabase logs for database errors, 4) Test each feature individually, 5) Use AI to help fix issues.",
      },
      {
        type: "checklist",
        title: "Test Your ChatGPT Wrapper",
        prompt: "Find and fix any bugs.",
        items: [
          { id: "1", label: "Messages save to database" },
          { id: "2", label: "Streaming works correctly" },
          { id: "3", label: "Chat history loads" },
          { id: "4", label: "No console errors" },
          { id: "5", label: "Authentication works" },
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
        type: "matching",
        prompt: "The Fix Strategy",
        pairs: [
          { id: "break", left: "Code Breaks", right: "Don't Panic" },
          { id: "ai", left: "AI Error", right: "Ask it to fix itself" },
          { id: "lie", left: "Hallucination", right: "Call it out ('You lied')" },
          { id: "loop", left: "Looping", right: "Stop and provide new context" },
        ],
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
        title: "Debug Your ChatGPT Wrapper Issues",
        body: "When your ChatGPT wrapper breaks, don't panic. Copy the error message and the relevant code. Paste both to AI. It will fix it.",
      },
      {
        type: "text",
        title: "Context is King",
        body: "Don't just paste 'chat not working'. Paste: 'Error: [exact error from console]' + 'Here's my /api/chat route code: [paste code]' + 'Fix it.' AI needs context to help.",
      },
      {
        type: "buildTask",
        title: "Fix a ChatGPT Wrapper Bug",
        description: "Use copy-paste debugging",
        task: "Tell Cursor: 'I'm seeing this error: [paste error]. Here is the file I was working on: @[filename]. Please fix it.'",
        expectedOutcome: "Bug fixed using copy-paste debugging",
        verificationSteps: [
          "You provided context (error + file)",
          "AI fixed the issue",
        ],
        tips: [
          "Use @ to reference files easily",
          "Don't just say 'it's broken' - show the error",
        ],
      },
      {
        type: "spotTheBug",
        title: "Bad Debug Prompt for ChatGPT Wrapper",
        description: "Identify the ineffective prompt",
        code: "// Console Error:\n// Error: Failed to fetch from /api/chat\n\n// Prompt A:\n\"Chat not working.\"\n\n// Prompt B:\n\"Fix the API error.\"\n\n// Prompt C:\n\"My ChatGPT wrapper shows this error: [paste error]. Here's my /api/chat route: [paste code]. Here's my chat component: [paste code]. Fix it.\"",
        bugs: [
          {
            id: "prompt-a",
            line: 5,
            description: "Too vague. AI has no context about what's broken.",
            fix: "Always include error message + relevant code files.",
          },
        ],
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
        type: "identify",
      prompt: "Which command saves your progress to the time machine?",
      correctOptionId: "commit",
      correctExplanation: "Yes. Commit saves your changes to the history.",
      wrongExplanation: "Think about which command actually records the snapshot.",
        options: [
          { id: "add", text: "git add .", icon: "➕" },
          { id: "commit", text: "git commit -m 'save'", icon: "💾" },
          { id: "status", text: "git status", icon: "👀" },
        ],
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

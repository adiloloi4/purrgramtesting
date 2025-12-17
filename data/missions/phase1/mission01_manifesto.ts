import { MissionData } from "../world0";

export const mission01: MissionData = {
  id: "manifesto",
  title: "The Director's Chair",
  slides: [
    {
      type: "text",
      title: "The Shift",
      body:
        "For 40 years, coding meant typing. You were the Scribe. You memorized syntax. You hunted for missing semicolons. Today, that era ends. You are no longer the Scribe. You are the Director.",
    },
    {
      type: "text",
      title: "The Director's Role",
      body:
        "A Director doesn't hold the camera. A Director tells the camera operator what to capture. In Vibe Coding, AI is your camera operator. You don't write the code; you direct the outcome. Your job is vision, taste, and decision.",
    },
    {
      type: "text",
      title: "Concrete Example: The Waitlist",
      body:
        "Old Way (Scribe): Spend 3 hours learning SQL to write 'CREATE TABLE waitlist...'.\n\nNew Way (Director): Tell AI: 'I need a waitlist. Design a table for emails and an API to save them.'",
    },
    {
      type: "quiz",
      question: "What is the primary role of a Vibe Coder?",
      options: [
        { id: "a", text: "Memorizing syntax" },
        { id: "b", text: "Directing the outcome" },
        { id: "c", text: "Writing binary code" },
      ],
      correctOptionId: "b",
      correctExplanation: "Exactly. You direct the AI to achieve the outcome you want.",
      wrongExplanation: "Think about the movie set analogy. Do you hold the camera, or tell the story?",
    },
    {
      type: "text",
      title: "The Trap: Getting Your Hands Dirty",
      body:
        "When you try to fix the code yourself, you stop directing. You become a bad Scribe. You break things. You get frustrated. Stay in the Director's chair.",
    },
    {
      type: "identify",
      prompt: "Which of these is a Director move?",
      correctOptionId: "b",
      correctExplanation: "Yes! Give visual feedback like a director.",
      wrongExplanation: "Don't do the manual labor yourself.",
      options: [
        {
          id: "a",
          text: "Search Google for CSS hex codes",
          icon: "🔍",
        },
        {
          id: "b",
          text: "Tell AI: 'Make the button red and rounder'",
          icon: "🎬",
        },
        {
          id: "c",
          text: "Manually delete lines of code",
          icon: "⌨️",
        },
      ],
    },
    {
      type: "text",
      title: "Recovery: When AI Fails",
      body:
        "Sometimes the camera operator misses the shot. The AI writes bad code. Do not fix it yourself. Tell the AI: 'That didn't work. The button is still blue. Fix it.' Direct the fix.",
    },
    {
      type: "buildTask",
      title: "Action: Direct Your Crew",
      description: "Experience the speed of directing",
      task: "Open Cursor Chat. Tell the AI: 'Create a Director Card component. It should be dark with a gold border and say: I am the Director.'",
      expectedOutcome: "A beautiful card component appears instantly.",
      verificationSteps: [
        "You gave the instruction",
        "AI created the component",
        "It looks like you asked",
      ],
      tips: [
        "Don't write the code yourself.",
        "Just say what you want.",
        "Trust the AI to handle the syntax.",
      ],
    },
    {
      type: "checklist",
      title: "Summary: The New Laws",
      prompt: "Internalize the Vibe.",
      items: [
        { id: "1", label: "I will not memorize syntax." },
        { id: "2", label: "I will direct, not type." },
        { id: "3", label: "I will treat errors as information, not failure." },
      ],
    },
    {
      type: "text",
      title: "Confidence Boost",
      body:
        "You just generated code that would have taken a beginner 2 hours to write by hand. You did it in 10 seconds. You are ready.",
    },
  ],
};

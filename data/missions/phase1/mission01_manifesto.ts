import { MissionData } from "../world0";

export const mission01: MissionData = {
  id: "manifesto",
  title: "The Director's Chair",
  slides: [
    {
      type: "text",
      title: "The Shift",
      content:
        "For 40 years, coding meant typing. You were the Scribe. You memorized syntax. You hunted for missing semicolons. Today, that era ends. You are no longer the Scribe. You are the Director.",
    },
    {
      type: "text",
      title: "Core Concept",
      content:
        "A Director doesn't hold the camera. A Director tells the camera operator what to capture. In Vibe Coding, AI is your camera operator. You don't write the code; you direct the outcome. Your job is vision, taste, and decision.",
    },
    {
      type: "quiz",
      title: "Decision Game: The Waitlist",
      question: "Scenario: You want to add a waitlist to your app to collect emails. What is the Director's move?",
      options: [
        { id: "a", label: "Spend 3 hours watching SQL tutorials to learn how to write 'CREATE TABLE' commands manually." },
        { id: "b", label: "Ask the AI: 'I need a waitlist system. Design a database table for emails and an API route to save them.'" },
        { id: "c", label: "Copy-paste random code from a blog post written in 2019." },
      ],
      correctOptionId: "b",
      correctExplanation: "Correct. You defined the *outcome* (waitlist system) and the *requirements* (database + API). You let the AI handle the implementation.",
      wrongExplanation: "That is the Scribe mindset. Don't learn the tool's internal language just to use it once. Direct the tool to do the work.",
    },
    {
      type: "quiz",
      title: "Decision Game: The Style",
      question: "Scenario: The AI generated a login button, but it's blue and you wanted red. What do you do?",
      options: [
        { id: "a", label: "Search Google for 'CSS hex codes for red' and manually edit the file." },
        { id: "b", label: "Tell the AI: 'Make the login button red and rounder.'" },
        { id: "c", label: "Accept the blue button because you don't know how to change it." },
      ],
      correctOptionId: "b",
      correctExplanation: "Exactly. Don't context switch into manual labor. Give a visual correction just like a Director on a movie set.",
      wrongExplanation: "Why do the work yourself? Your 'camera operator' (AI) is right there waiting for instructions.",
    },
    {
      type: "buildTask",
      title: "Action: Direct Your Crew",
      description: "Experience the speed of directing",
      task: "Open Cursor. Press Cmd+K. Type: 'Create a new component called DirectorCard.tsx. Make it a dark card with a gold border. Inside, put the text: I am the Director.'",
      expectedOutcome: "A beautiful card component appears instantly without you typing a single bracket.",
      verificationSteps: [
        "Open Cursor",
        "Press Cmd+K",
        "Enter the prompt",
        "See the file created"
      ],
      tips: [
        "Don't worry about where to save it yet.",
        "Just see how fast you can manifest an idea.",
        "Trust the AI to handle the syntax."
      ],
    },
    {
      type: "quiz",
      title: "Validation Check",
      question: "Did you see the file appear in your explorer?",
      options: [
        { id: "a", label: "Yes, it appeared like magic." },
        { id: "b", label: "No, I'm stuck." },
      ],
      correctOptionId: "a",
      correctExplanation: "Welcome to the Director's Chair. That feeling of speed? That's Vibe Coding.",
      wrongExplanation: "Try pressing Cmd+K again. Make sure you are in the editor window.",
    },
    {
      type: "quiz",
      title: "Decision Game: The Error",
      question: "Scenario: You ran the code and got a big red error message. What is the Director's reaction?",
      options: [
        { id: "a", label: "Panic and assume you aren't smart enough for this." },
        { id: "b", label: "Copy the error message, paste it to the AI, and say 'Fix this'." },
        { id: "c", label: "Delete the whole project and start over." },
      ],
      correctOptionId: "b",
      correctExplanation: "Perfect. Errors are just information. The AI can read the error and correct its own mistakes 99% of the time.",
      wrongExplanation: "Emotional reactions don't fix bugs. The AI doesn't have feelings; use it to solve the problem.",
    }
  ],
};

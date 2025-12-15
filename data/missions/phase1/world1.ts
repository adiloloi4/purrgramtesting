import { MissionData } from "../world0";

export const world1Missions: MissionData[] = [
  {
    id: "director-mindset",
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
        title: "Core Concept",
        body:
          "A Director doesn't hold the camera. A Director tells the camera operator what to capture. In Vibe Coding, AI is your camera operator. You don't write the code; you direct the outcome. Your job is vision, taste, and decision.",
      },
      {
        type: "speedQuiz",
        title: "Director Decision Run",
        description: "Make 5 correct Director decisions. 3 mistakes and you restart.",
        maxMistakes: 3,
        questions: [
          {
            id: "q1",
            question: "You want to add a waitlist to your app. What is the Director's move?",
            options: [
              { id: "a", label: "Spend 3 hours learning SQL syntax." },
              { id: "b", label: "Ask AI: 'Design a waitlist database table and API for me.'" },
              { id: "c", label: "Copy-paste random code from a 2019 blog post." },
            ],
            correct: "b",
            timeLimit: 15,
          },
          {
            id: "q2",
            question: "The login button is blue, but you want red. What do you do?",
            options: [
              { id: "a", label: "Search Google for 'CSS hex codes'." },
              { id: "b", label: "Tell AI: 'Make the login button red and rounder.'" },
              { id: "c", label: "Accept the blue button." },
            ],
            correct: "b",
            timeLimit: 15,
          },
          {
            id: "q3",
            question: "You get a big red error message. What is your reaction?",
            options: [
              { id: "a", label: "Panic and quit." },
              { id: "b", label: "Copy the error, paste to AI, say 'Fix this'." },
              { id: "c", label: "Delete the project." },
            ],
            correct: "b",
            timeLimit: 15,
          },
          {
            id: "q4",
            question: "The feature works, but it feels slow. What do you say?",
            options: [
              { id: "a", label: "Rewrite it yourself in Assembly." },
              { id: "b", label: "Tell AI: 'This feels laggy. Optimize it for speed.'" },
              { id: "c", label: "Ship it anyway, speed doesn't matter." },
            ],
            correct: "b",
            timeLimit: 15,
          },
          {
            id: "q5",
            question: "The AI generated code that looks ugly. What do you do?",
            options: [
              { id: "a", label: "Spend 4 hours learning CSS Grid." },
              { id: "b", label: "Tell AI: 'Make this look modern, dark mode, with rounded corners.'" },
              { id: "c", label: "Leave it ugly." },
            ],
            correct: "b",
            timeLimit: 15,
          },
        ],
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
        question: "Did you see the file appear in your explorer?",
        options: [
          { id: "a", label: "Yes, it appeared like magic." },
          { id: "b", label: "No, I'm stuck." },
        ],
        correctOptionId: "a",
        correctExplanation: "Welcome to the Director's Chair. That feeling of speed? That's Vibe Coding.",
        wrongExplanation: "Try pressing Cmd+K again. Make sure you are in the editor window.",
      }
    ],
  },
  {
    id: "manifesto",
    title: "The Vibe Coder Manifesto",
    slides: [
      {
        type: "text",
        title: "The New Laws",
        body: "We are rewriting the rules. Old rules make you slow. New rules make you dangerous.",
      },
      {
        type: "identify",
        prompt: "Which of these is a Vibe Law?",
        items: [
          { id: "1", text: "Write perfect code first", correct: false },
          { id: "2", text: "Ship imperfectly today", correct: true },
          { id: "3", text: "Memorize every syntax rule", correct: false },
        ],
      },
      {
        type: "codePuzzle",
        title: "The Vibe Oath",
        description: "Complete the manifesto",
        puzzle: "I will not __0__ on syntax. I will treat errors as __1__. I will __2__ before I type.",
        missingParts: [
          {
            id: "p1",
            options: ["get stuck", "focus", "work"],
            correct: "get stuck",
            hint: "Don't let syntax stop you",
          },
          {
            id: "p2",
            options: ["failures", "clues", "enemies"],
            correct: "clues",
            hint: "Errors guide you",
          },
          {
            id: "p3",
            options: ["think", "direct", "code"],
            correct: "direct",
            hint: "Be the Director",
          },
        ],
      },
      {
        type: "text",
        title: "Closing",
        body: "Internalize this. We break things to build things.",
      },
    ],
  },
  {
    id: "founder-mode",
    title: "Founder Mode Activated",
    slides: [
      {
        type: "text",
        title: "Product Over Code",
        body: "Code is a liability. It breaks. It needs maintenance. The best code is no code.",
      },
      {
        type: "identify",
        prompt: "You are building a dating app MVP. What is the ONLY essential feature?",
        items: [
          { id: "1", text: "Video chat filters", correct: false },
          { id: "2", text: "AI matching algorithm", correct: false },
          { id: "3", text: "Swiping on profiles", correct: true },
        ],
      },
      {
        type: "speedQuiz",
        title: "YAGNI Defense",
        description: "Defend your timeline against feature creep.",
        questions: [
          {
            id: "q1",
            question: "You want to add a 'Forgot Password' flow for the first demo.",
            options: [
              { id: "a", label: "Build it for security" },
              { id: "b", label: "Skip it, manually reset if needed" },
            ],
            correct: "b",
            timeLimit: 10,
          },
        ],
      },
      {
        type: "text",
        title: "Closing",
        body: "Build less. Win more. If it doesn't solve the user's problem immediately, delete it.",
      },
    ],
  },
  {
    id: "shipping-is-breathing",
    title: "Shipping is Breathing",
    slides: [
      {
        type: "text",
        title: "Intro",
        body: "You have an app that works locally. You can deploy now, but it's not perfect. What you do next defines whether you are a Scribe or a Director.",
      },
      {
        type: "quiz",
        question: "Speed Decision Challenge: You notice a small UI bug right before deploying.",
        options: [
          { id: "a", label: "Fix everything before deploying." },
          { id: "b", label: "Deploy now and fix it after." },
          { id: "c", label: "Pause and watch more tutorials." },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. Shipping imperfectly keeps the project alive. Fix it in production. This is the Director mindset.",
        wrongExplanation: "That is the Scribe mindset. Delaying deployment kills momentum.",
      },
      {
        type: "speedQuiz",
        title: "Vibe Check",
        description: "Validate your shipping mindset. Score 4/4 to pass.",
        questions: [
          {
            id: "q1",
            question: "Shipping imperfectly is better than not shipping.",
            options: [
              { id: "a", label: "Agree" },
              { id: "b", label: "Disagree" },
            ],
            correct: "a",
            timeLimit: 10,
          },
          {
            id: "q2",
            question: "I should wait until I fully understand deployment.",
            options: [
              { id: "a", label: "Agree" },
              { id: "b", label: "Disagree" },
            ],
            correct: "b",
            timeLimit: 10,
          },
          {
            id: "q3",
            question: "I can fix things after users see the product.",
            options: [
              { id: "a", label: "Agree" },
              { id: "b", label: "Disagree" },
            ],
            correct: "a",
            timeLimit: 10,
          },
          {
            id: "q4",
            question: "Deploying is scary and risky.",
            options: [
              { id: "a", label: "Agree" },
              { id: "b", label: "Disagree" },
            ],
            correct: "b",
            timeLimit: 10,
          },
        ],
      },
      {
        type: "text",
        title: "Closing",
        body: "Shipping is not a milestone. It's breathing. Keep your project alive.",
      },
    ],
  },
  {
    id: "prompt-engineering-basics",
    title: "The Language of AI",
    slides: [
      {
        type: "text",
        title: "The 3 P's",
        body: "Persona (Who), Problem (What), Product (Output). Without these, the AI guesses. With these, it obeys.",
      },
      {
        type: "quiz",
        question: "Bad Prompt Doctor: User says: 'Make it better'. Why does this fail?",
        options: [
          { id: "a", label: "It's too rude to the AI." },
          { id: "b", label: "No context or goal provided." },
          { id: "c", label: "AI doesn't understand English." },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. 'Better' is subjective. Be specific.",
        wrongExplanation: "The AI doesn't have feelings, but it needs clear instructions.",
      },
      {
        type: "codePuzzle",
        title: "Construct the Prompt",
        description: "Build a prompt using the 3 P's",
        puzzle: "You are a __0__ expert. Build a __1__ component. Output __2__ code.",
        missingParts: [
          {
            id: "persona",
            options: ["React", "Chef", "Driver"],
            correct: "React",
            hint: "Persona",
          },
          {
            id: "problem",
            options: ["Button", "Sandwich", "Car"],
            correct: "Button",
            hint: "Problem",
          },
          {
            id: "product",
            options: ["JSX", "Tasty", "Fast"],
            correct: "JSX",
            hint: "Product",
          },
        ],
      },
      {
        type: "text",
        title: "Closing",
        body: "Garbage in, garbage out. Quality in, magic out.",
      },
    ],
  },
  {
    id: "vibe-check-quiz",
    title: "Vibe Check: Phase 1",
    slides: [
      {
        type: "text",
        title: "Final Calibration",
        body: "Mindset check before we touch the tools. Prove you are a Director.",
      },
      {
        type: "speedQuiz",
        title: "The Gauntlet",
        description: "Rapid fire mindset check.",
        questions: [
          {
            id: "q1",
            question: "You hit a bug.",
            options: [
              { id: "a", label: "Celebrate the clue" },
              { id: "b", label: "Give up" },
            ],
            correct: "a",
            timeLimit: 5,
          },
          {
            id: "q2",
            question: "The code is ugly.",
            options: [
              { id: "a", label: "Refactor manually" },
              { id: "b", label: "Direct AI to fix" },
            ],
            correct: "b",
            timeLimit: 5,
          },
          {
            id: "q3",
            question: "You haven't shipped in 3 days.",
            options: [
              { id: "a", label: "Panic and ship" },
              { id: "b", label: "Keep polishing" },
            ],
            correct: "a",
            timeLimit: 5,
          },
        ],
      },
      {
        type: "text",
        title: "Closing",
        body: "You are calibrated. Welcome to Phase 1.",
      },
    ],
  },
];

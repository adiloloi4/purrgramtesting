import { MissionData } from "../world0";

export const world1Missions: MissionData[] = [
  {
    id: "director-mindset",
    title: "The Director's Chair",
    slides: [
      {
        type: "text",
        title: "Welcome to Vibe Coding",
        body: "You are not a coder. You are a Director. A coder types characters. A Director commands outcomes. In this course, we stop writing syntax and start orchestrating intelligence.",
      },
      {
        type: "text",
        title: "The Metaphor",
        body: "Imagine you are Spielberg. You don't hold the boom mic. You don't sew the costumes. You tell the expert crew what you want. Make it darker. More emotion. Cut that scene. Your AI (Cursor) is the crew. It is talented but needs clear direction.",
      },
      {
        type: "text",
        title: "Shift Your Brain",
        body: "The hardest part is not learning Python. It is unlearning the need to control every keystroke. You must trust the crew to handle the details while you focus on the vision.",
      },
      {
        type: "identify",
        prompt: "Which is a Director's Move?",
        items: [
          { id: "a", text: "Memorizing the syntax for a for loop.", correct: false },
          { id: "b", text: "Asking: Create a loop that filters active users.", correct: true },
          { id: "c", text: "Spending 4 hours debugging a missing semicolon.", correct: false },
        ],
      },
      {
        type: "text",
        title: "Action: Take the Chair",
        body: "Open a new Cursor project. We are going to practice Directing right now. We won't write a single line of code manually.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Cmd+K in a blank file: Write a short Python script that simulates a movie set. Create a Director class that can shout actions, and a Crew class that responds. Run a scene.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Run the generated script (or ask Cursor to run it). Do you see the Director shouting Action? If yes, you are now officially in the chair.",
        example: "Director says: Action! -> Crew says: Rolling camera!",
      },
      {
        type: "text",
        title: "Deep Dive: The Token Limit",
        body: "Your Crew (the AI) has a short memory (Context Window). It can't remember the whole movie script at once. You must feed it only the relevant scenes (files). This is the skill of Context Management we will master later.",
      },
      {
        type: "memoryGame",
        title: "Director's Mindset Memory Game",
        description: "Match director concepts to their purposes",
        cards: [
          { id: "director", front: "Director", back: "Commands outcomes, not types characters" },
          { id: "crew", front: "Crew (AI)", back: "Talented but needs clear direction" },
          { id: "vision", front: "Vision", back: "Focus on what you want, not how to code it" },
          { id: "context", front: "Context Window", back: "AI's short memory - feed relevant files" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Director vs Coder Quiz",
        description: "Test your understanding of the Director mindset",
        questions: [
          {
            id: "q1",
            question: "What is a Director's move?",
            options: [
              { id: "a", text: "Memorizing syntax for a for loop" },
              { id: "b", text: "Asking: Create a loop that filters active users" },
              { id: "c", text: "Spending 4 hours debugging a semicolon" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What should you focus on?",
            options: [
              { id: "a", text: "Controlling every keystroke" },
              { id: "b", text: "The vision and outcomes" },
              { id: "c", text: "Perfect syntax" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "manifesto",
    title: "The Vibe Coder Manifesto",
    slides: [
      {
        type: "text",
        title: "Speed Over Perfection",
        body: "Traditional coding is about correctness. Vibe Coding is about Velocity. A perfect app that doesn't exist helps no one. A buggy app that is live can be fixed.",
      },
      {
        type: "checklist",
        title: "The Vibe Laws",
        prompt: "Internalize these. We will break traditional rules.",
        items: [
          { id: "1", label: "I will not get stuck on syntax." },
          { id: "2", label: "I will ship imperfect things today." },
          { id: "3", label: "I will treat errors as clues, not failures." },
          { id: "4", label: "I will direct before I type." },
        ],
      },
      {
        type: "text",
        title: "Story: The Scribe vs The Founder",
        body: "The Scribe sits in a candlelit room, writing every letter by hand. It takes years to write a book. The Founder uses a printing press. They ship 1,000 books a day. Don't be the Scribe.",
      },
      {
        type: "quiz",
        question: "What is the enemy of Vibe Coding?",
        options: [
          { id: "a", text: "AI Hallucinations", correct: false },
          { id: "b", text: "Perfectionism and stalling", correct: true },
          { id: "c", text: "Spaghetti code", correct: false },
          { id: "d", text: "Too many features", correct: false },
        ],
      },
      {
        type: "miniChallenge",
        title: "Commitment",
        task: "Say out loud: I am a Founder, not a Scribe. Then, prompt Cursor to generate a Manifesto.md file with these 4 laws in it.",
        example: "File created: Manifesto.md",
      },
      {
        type: "text",
        title: "Deep Dive: Technical Debt",
        body: "Engineers fear technical debt. Founders use it as leverage. You borrow speed now to pay it back later with revenue. Do not fear messy code if it works. We can clean it up later with one prompt.",
      },
      {
        type: "memoryGame",
        title: "Vibe Laws Memory Game",
        description: "Match the Vibe Laws to their meanings",
        cards: [
          { id: "speed", front: "Speed Over Perfection", back: "Velocity matters more than correctness" },
          { id: "ship", front: "Ship Imperfect Things", back: "Buggy app that's live > perfect app that doesn't exist" },
          { id: "errors", front: "Errors as Clues", back: "Treat errors as clues, not failures" },
          { id: "direct", front: "Direct Before Type", back: "Command outcomes before writing code" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "The Manifesto Quiz",
        description: "Test your understanding of Vibe Coding principles",
        questions: [
          {
            id: "q1",
            question: "What is the enemy of Vibe Coding?",
            options: [
              { id: "a", text: "AI Hallucinations" },
              { id: "b", text: "Perfectionism and stalling" },
              { id: "c", text: "Spaghetti code" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What should you do with technical debt?",
            options: [
              { id: "a", text: "Fear it always" },
              { id: "b", text: "Use it as leverage for speed" },
              { id: "c", text: "Never have any" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
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
        body: "Users don't care about your code. They care if it solves their problem. In Founder Mode, code is a liability. It's something you have to maintain. The less code you write to solve the problem, the better.",
      },
      {
        type: "text",
        title: "Action: The MVP Mindset",
        body: "We are going to scope a product right now. A To-Do app. But we aren't building Google Tasks. We are building the tiniest version possible.",
      },
      {
        type: "identify",
        prompt: "Which feature is essential for an MVP To-Do app?",
        items: [
          { id: "1", text: "AI-generated task suggestions", correct: false },
          { id: "2", text: "Adding a task to a list", correct: true },
          { id: "3", text: "Multi-player real-time collaboration", correct: false },
        ],
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Ask Cursor (Cmd+L): I want to build a To-Do app. What are the absolute minimum 3 features I need for an MVP? Don't give me code, just the list.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Did Cursor suggest Create, Read, Delete? If it suggested Dark Mode or Auth, tell it: Too complex. Simpler. until you agree on the core.",
        example: "Agreed on: Add task, View tasks, Check off task.",
      },
      {
        type: "text",
        title: "Deep Dive: YAGNI",
        body: "YAGNI stands for You Aren't Gonna Need It. Don't build features for users you don't have yet. Save your energy for the core loop.",
      },
      {
        type: "memoryGame",
        title: "Founder Mode Memory Game",
        description: "Match founder concepts to their purposes",
        cards: [
          { id: "product", front: "Product Over Code", back: "Users care about solutions, not code" },
          { id: "mvp", front: "MVP Mindset", back: "Build the tiniest version possible" },
          { id: "yagni", front: "YAGNI", back: "You Aren't Gonna Need It - don't overbuild" },
          { id: "core-loop", front: "Core Loop", back: "Focus on essential features first" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Founder Mode Quiz",
        description: "Test your understanding of MVP and product thinking",
        questions: [
          {
            id: "q1",
            question: "What is essential for an MVP To-Do app?",
            options: [
              { id: "a", text: "AI-generated suggestions" },
              { id: "b", text: "Adding a task to a list" },
              { id: "c", text: "Multi-player collaboration" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What does YAGNI mean?",
            options: [
              { id: "a", text: "You Always Get New Ideas" },
              { id: "b", text: "You Aren't Gonna Need It" },
              { id: "c", text: "You Are Getting Nothing" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "shipping-is-breathing",
    title: "Shipping is Breathing",
    slides: [
      {
        type: "text",
        title: "The Oxygen of Software",
        body: "Code that lives on your laptop is dead. It's holding its breath. Shipping (deploying to the internet) is taking a breath. You must ship often to keep the project alive.",
      },
      {
        type: "text",
        title: "The 15-Minute Rule",
        body: "In Vibe Coding, we try to deploy the first version in 15 minutes. Not 15 days. Even if it just says Hello World.",
      },
      {
        type: "checklist",
        title: "The Deployment Pipeline",
        prompt: "We will use Vercel. It's the standard.",
        items: [
          { id: "git", label: "Push code to GitHub" },
          { id: "vercel", label: "Import repo to Vercel" },
          { id: "live", label: "Get a live URL (vibe-app.vercel.app)" },
        ],
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Ask Cursor: How do I push this current project to a new GitHub repository using the terminal? Give me the exact commands.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Follow the commands. Do you see your code on GitHub.com? If yes, you have taken your first breath.",
        example: "Repo created.",
      },
      {
        type: "text",
        title: "Deep Dive: CI/CD",
        body: "Continuous Integration / Continuous Deployment. This fancy term just means: when you save code to GitHub, your website updates automatically. You set this up once, and it works forever.",
      },
      {
        type: "memoryGame",
        title: "Shipping Memory Game",
        description: "Match shipping concepts to their purposes",
        cards: [
          { id: "breathing", front: "Shipping is Breathing", back: "Code must deploy to stay alive" },
          { id: "15-minute", front: "15-Minute Rule", back: "Deploy first version in 15 minutes" },
          { id: "vercel", front: "Vercel", back: "Standard deployment platform" },
          { id: "cicd", front: "CI/CD", back: "Auto-update when code is pushed" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "Deployment Pipeline",
        description: "Order the steps to deploy your app",
        items: [
          { id: "git", label: "Push code to GitHub", correctPosition: 0 },
          { id: "vercel", label: "Import repo to Vercel", correctPosition: 1 },
          { id: "live", label: "Get live URL", correctPosition: 2 },
        ],
      },
    ],
  },
  {
    id: "prompt-engineering-basics",
    title: "The Language of AI",
    slides: [
      {
        type: "text",
        title: "Speaking Robot",
        body: "You don't need to speak Python, but you do need to speak clear English. The AI is literal. If you say 'make it better', it guesses. If you say 'make the background blue #0000FF', it obeys.",
      },
      {
        type: "text",
        title: "The 3 P's of Prompting",
        body: "Persona: Who is the AI? (You are a senior React expert).\nProblem: What are we solving? (I need a navigation bar).\nProduct: What is the output? (Give me the JSX code using Tailwind).",
      },
      {
        type: "quiz",
        question: "Which is a better prompt?",
        options: [
          { id: "a", text: "Fix the thing.", correct: false },
          { id: "b", text: "You are a CSS expert. The header is overlapping the content. Fix the z-index so the header stays on top.", correct: true },
          { id: "c", text: "It looks weird.", correct: false },
        ],
      },
      {
        type: "miniChallenge",
        title: "Prompt Practice",
        task: "Open a new file 'prompt-test.md'. Write a prompt using the 3 P's to generate a specific recipe (e.g., a vegan lasagna). Ask the AI to generate it.",
        example: "Recipe generated with clear steps.",
      },
      {
        type: "codePuzzle",
        title: "Complete the Prompt",
        description: "Fill in the blanks using the 3 P's of prompting",
        puzzle: "You are a __0__ expert. The __1__ is broken. Fix it by __2__.",
        missingParts: [
          {
            id: "persona",
            options: ["senior React", "CSS", "JavaScript"],
            correct: "senior React",
            hint: "Who is the AI? (Persona)",
          },
          {
            id: "problem",
            options: ["header", "button", "component"],
            correct: "header",
            hint: "What are we solving? (Problem)",
          },
          {
            id: "product",
            options: ["adding z-index", "changing color", "deleting it"],
            correct: "adding z-index",
            hint: "What is the output? (Product)",
          },
        ],
      },
      {
        type: "memoryGame",
        title: "Prompt Engineering Memory Game",
        description: "Match the 3 P's to their purposes",
        cards: [
          { id: "persona", front: "Persona", back: "Who is the AI? (You are a senior React expert)" },
          { id: "problem", front: "Problem", back: "What are we solving? (I need a navigation bar)" },
          { id: "product", front: "Product", back: "What is the output? (Give me JSX code)" },
        ],
        timeLimit: 50,
      },
    ],
  },
  {
    id: "vibe-check-quiz",
    title: "Vibe Check: Phase 1",
    slides: [
      {
        type: "text",
        title: "Check Yourself",
        body: "Before we move to the tools, let's make sure your mindset is calibrated.",
      },
      {
        type: "quiz",
        question: "The AI writes code that looks ugly. What do you do?",
        options: [
          { id: "a", text: "Spend 3 hours learning CSS Grid.", correct: false },
          { id: "b", text: "Prompt: Make this prettier. Use a dark modern theme with rounded corners.", correct: true },
          { id: "c", text: "Delete the project.", correct: false },
        ],
      },
      {
        type: "quiz",
        question: "You encounter an error you don't understand. What is it?",
        options: [
          { id: "a", text: "A failure.", correct: false },
          { id: "b", text: "A clue to paste into the chat.", correct: true },
          { id: "c", text: "A sign you should quit.", correct: false },
        ],
      },
      {
        type: "text",
        title: "You are ready.",
        body: "You have the Director's Mindset. Now let's get you the Director's Tools.",
      },
      {
        type: "speedQuiz",
        title: "Vibe Check Quiz",
        description: "Test your Vibe Coding mindset",
        questions: [
          {
            id: "q1",
            question: "The AI writes ugly code. What do you do?",
            options: [
              { id: "a", text: "Spend 3 hours learning CSS Grid" },
              { id: "b", text: "Prompt: Make this prettier with dark theme" },
              { id: "c", text: "Delete the project" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "You encounter an error. What is it?",
            options: [
              { id: "a", text: "A failure" },
              { id: "b", text: "A clue to paste into chat" },
              { id: "c", text: "A sign to quit" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
      {
        type: "memoryGame",
        title: "Vibe Check Memory Game",
        description: "Match Vibe Coding principles to their applications",
        cards: [
          { id: "ugly-code", front: "Ugly Code", back: "Prompt to make it prettier, don't learn CSS" },
          { id: "errors", front: "Errors", back: "Clues to paste into chat, not failures" },
          { id: "director", front: "Director's Mindset", back: "Command outcomes, not type code" },
          { id: "tools", front: "Director's Tools", back: "Next step after mindset" },
        ],
        timeLimit: 50,
      },
    ],
  },
];

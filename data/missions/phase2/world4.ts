import { MissionData } from "../world0";

export const world4Missions: MissionData[] = [
  {
    id: "auth-provider",
    title: "Clerk or Supabase Auth",
    slides: [
      {
        type: "text",
        title: "The Bouncer",
        body: "Your app needs a bouncer. Without Auth, you're building a public park. With Auth, you're building a private club. Let's install the lock.",
      },
      {
        type: "text",
        title: "Pick Your Weapon",
        body: "You can use Clerk (easiest UI) or Supabase Auth (best integration). Since we already set up Supabase, let's stick with that for maximum power.",
      },
      {
        type: "checklist",
        title: "Action: Enable Auth",
        prompt: "Go to Supabase Dashboard > Authentication.",
        items: [
          { id: "enable", label: "Enable Email/Password provider" },
          { id: "disable", label: "Disable Confirm Email for dev speed (optional)" },
          { id: "users", label: "Check the Users table is empty" },
        ],
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "I want to add Supabase Authentication to my Next.js app. Please create a login/page.tsx with a simple email/password form that uses the Supabase client to sign in.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Visit /login and try to sign up with a fake email. Check your Supabase Dashboard > Users. Did a new row appear?",
        example: "test@example.com / password123",
      },
      {
        type: "memoryGame",
        title: "Authentication Memory Game",
        description: "Match auth concepts to their purposes",
        cards: [
          { id: "auth", front: "Authentication", back: "The bouncer - controls who gets in" },
          { id: "supabase-auth", front: "Supabase Auth", back: "Handles identity (who are you?)" },
          { id: "email-password", front: "Email/Password", back: "Provider for user sign-up" },
          { id: "users-table", front: "Users Table", back: "Stores authenticated user accounts" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "Auth Setup Workflow",
        description: "Order the steps to enable authentication",
        items: [
          { id: "enable", label: "Enable Email/Password provider in Supabase", correctPosition: 0 },
          { id: "create", label: "Create login page with sign-up form", correctPosition: 1 },
          { id: "test", label: "Test sign-up and verify user appears", correctPosition: 2 },
        ],
        hint: "Start with enabling, end with testing",
      },
    ],
  },
  {
    id: "route-protection",
    title: "Route Protection",
    slides: [
      {
        type: "text",
        title: "Guard the Castle",
        body: "A login page is useless if people can just type /dashboard and get in. We need middleware to intercept every request and check for a badge.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Create a middleware.ts file. It should check for a Supabase session. If the user visits a protected route (like /dashboard or /settings) without a session, redirect them to /login.",
      },
      {
        type: "quiz",
        question: "What happens if you try to visit /dashboard in Incognito mode after adding middleware?",
        options: [
          { id: "a", text: "You see the dashboard", correct: false },
          { id: "b", text: "You are redirected to /login", correct: true },
          { id: "c", text: "The server crashes", correct: false },
          { id: "d", text: "Nothing happens", correct: false },
        ],
      },
      {
        type: "text",
        title: "Why Middleware?",
        body: "Middleware runs on the Edge, before your page even loads. It's faster and safer than checking auth inside a useEffect on the client.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Try to break in. Open an Incognito window and go to localhost:3000/tasks. If you get bounced to /login, your castle is secure.",
        example: "Bounce -> Login -> Success.",
      },
      {
        type: "speedQuiz",
        title: "Route Protection Quiz",
        description: "Test your understanding of middleware and route protection",
        questions: [
          {
            id: "q1",
            question: "What happens if you visit /dashboard without a session?",
            options: [
              { id: "a", text: "You see the dashboard" },
              { id: "b", text: "You are redirected to /login" },
              { id: "c", text: "The server crashes" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "Where does middleware run?",
            options: [
              { id: "a", text: "On the client after page loads" },
              { id: "b", text: "On the Edge before page loads" },
              { id: "c", text: "In the database" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q3",
            question: "Why use middleware instead of client-side checks?",
            options: [
              { id: "a", text: "It's faster and safer" },
              { id: "b", text: "It looks better" },
              { id: "c", text: "It's required by React" },
            ],
            correct: "a",
            timeLimit: 12,
          },
        ],
      },
      {
        type: "memoryGame",
        title: "Route Protection Memory Game",
        description: "Match protection concepts to their roles",
        cards: [
          { id: "middleware", front: "Middleware", back: "Intercepts requests before page loads" },
          { id: "session", front: "Session Check", back: "Verifies user is authenticated" },
          { id: "redirect", front: "Redirect", back: "Sends unauthorized users to /login" },
          { id: "protected-route", front: "Protected Route", back: "Requires authentication (like /dashboard)" },
        ],
        timeLimit: 50,
      },
    ],
  },
  {
    id: "user-profiles",
    title: "User Profiles",
    slides: [
      {
        type: "text",
        title: "Identity vs. Data",
        body: "Supabase Auth handles Identity (who are you?). But your app needs Data (what is your name? avatar? plan?). We store this in a profiles table.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Generate a SQL migration to create a profiles table. It should reference auth.users.id as a foreign key. Add fields for full_name and avatar_url. Enable RLS so users can only read/update their own profile.",
      },
      {
        type: "checklist",
        title: "Action: Run the Migration",
        prompt: "Go to Supabase SQL Editor.",
        items: [
          { id: "paste", label: "Paste the SQL" },
          { id: "run", label: "Run it" },
          { id: "check", label: "Verify profiles table exists" },
        ],
      },
      {
        type: "text",
        title: "The Magic Trigger",
        body: "We want a profile to appear automatically when a user signs up. Ask Cursor: Write a SQL trigger that automatically inserts a row into public.profiles whenever a new user is added to auth.users.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Sign up a NEW user via your login page. Check the profiles table in Supabase. Is there a new row automatically created for them?",
        example: "Magic.",
      },
      {
        type: "memoryGame",
        title: "User Profiles Memory Game",
        description: "Match profile concepts to their purposes",
        cards: [
          { id: "identity", front: "Identity (Auth)", back: "Who are you? (handled by Supabase Auth)" },
          { id: "data", front: "Data (Profiles)", back: "What is your name/avatar? (stored in profiles table)" },
          { id: "foreign-key", front: "Foreign Key", back: "Links profiles to auth.users.id" },
          { id: "trigger", front: "SQL Trigger", back: "Automatically creates profile when user signs up" },
          { id: "rls", front: "RLS (Row Level Security)", back: "Users can only read/update their own profile" },
        ],
        timeLimit: 60,
      },
      {
        type: "sequenceGame",
        title: "Profile Setup Workflow",
        description: "Order the steps to create user profiles",
        items: [
          { id: "create-table", label: "Create profiles table with foreign key", correctPosition: 0 },
          { id: "enable-rls", label: "Enable RLS for security", correctPosition: 1 },
          { id: "create-trigger", label: "Create trigger to auto-create profiles", correctPosition: 2 },
          { id: "test", label: "Test by signing up a new user", correctPosition: 3 },
        ],
        hint: "Start with creating table, end with testing",
      },
    ],
  },
];

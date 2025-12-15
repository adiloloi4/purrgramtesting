import { MissionData } from "../world0";

export const world5Missions: MissionData[] = [
  {
    id: "auth-provider",
    title: "Clerk or Supabase Auth",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 6",
        body:
          "Your database is working. You can save and load messages. But right now, anyone can access your ChatGPT wrapper and see everyone's chats. You need authentication - a way to know WHO is using your app, so each person only sees their own conversations.",
      },
      {
        type: "text",
        title: "Why Authentication Matters",
        body:
          "Without auth: all users share the same chat history (chaos!). With auth: each user has their own private conversations. Plus, you need to know who's using your ChatGPT wrapper to: 1) Track usage for limits, 2) Charge for Pro subscriptions, 3) Provide personalized experiences.",
      },
      {
        type: "text",
        title: "Your ChatGPT Wrapper Needs Users",
        body:
          "Right now, anyone can use your ChatGPT wrapper. But you want to track who's using it, save their chat history, and eventually charge them. You need authentication.",
      },
      {
        type: "text",
        title: "Don't Build Auth",
        body:
          "Never build your own login system. It is hard and dangerous. Use Supabase Auth (it's already in your stack) or Clerk. They handle passwords, emails, OAuth, and security. You focus on building your ChatGPT wrapper, not security infrastructure.",
      },
      {
        type: "quiz",
        question: "Why shouldn't you build your own auth?",
        options: [
          { id: "a", text: "It's too easy" },
          { id: "b", text: "It's a security risk and waste of time" },
          { id: "c", text: "React doesn't allow it" },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. Security is hard. Use proven tools.",
        wrongExplanation: "It's definitely not easy.",
      },
      {
        type: "identify",
        prompt: "Which is the best Auth method for speed?",
        correctOptionId: "google",
        correctExplanation: "Yes. Social Login (Google/GitHub) is one click. No passwords to forget.",
        wrongExplanation: "Email/Password has friction.",
        options: [
          { id: "pass", text: "Email & Password", icon: "🔒" },
          { id: "google", text: "Google Login", icon: "⚡" },
          { id: "magic", text: "Magic Link", icon: "📨" },
        ],
      },
      {
        type: "buildTask",
        title: "Add Login to Your ChatGPT Wrapper",
        description: "Use AI to add authentication",
        task: "In Cursor, use this prompt: 'Add Supabase Auth to my Next.js app. Create a login page with email/password and Google OAuth. Create a signup page. Show the user's email when logged in. Use Supabase Auth helpers.'",
        expectedOutcome: "Login and signup pages working with Supabase Auth",
        verificationSteps: [
          "Login page created",
          "Signup page created",
          "Google OAuth button works",
          "User can log in and see their email",
          "Auth state persists on refresh",
        ],
        tips: [
          "Use Supabase Auth UI components if available",
          "Or let AI generate custom login forms",
          "Test with a real email",
        ],
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "Your ChatGPT wrapper now has authentication. Users can sign up, log in, and each person gets their own private chat history. This is how real SaaS apps work - every user has their own account.",
      },
      {
        type: "text",
        title: "How Auth Works",
        body:
          "When a user logs in, Supabase creates a session. This session includes their user ID. Your app uses this ID to: 1) Filter conversations (only show theirs), 2) Track message counts, 3) Check subscription status. The user ID is the key that links everything to the right person.",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Users can log in. Now you need to store extra info about them: name, avatar, subscription plan, message count. This goes in a profiles table. That's next.",
      },
    ],
  },
  {
    id: "user-profiles",
    title: "User Profiles",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 7",
        body:
          "Users can log in. But Supabase Auth only gives you: user ID and email. For your ChatGPT wrapper, you need more: name, avatar, subscription plan (free/pro), message count (to enforce limits). You need a profiles table to store this extra data.",
      },
      {
        type: "text",
        title: "Why a Separate Profiles Table?",
        body:
          "Supabase Auth manages the auth.users table (password, email, etc.). You can't modify it. So you create a profiles table that links to it. This is where you store YOUR data: subscription status, message counts, custom fields. It's a common pattern.",
      },
      {
        type: "text",
        title: "User Profiles for Your ChatGPT Wrapper",
        body:
          "Auth gives you an ID and an Email. But for your ChatGPT wrapper, you want to track: name, avatar, subscription plan (free/pro), message count (for limits). You need a Profile table.",
      },
      {
        type: "text",
        title: "Linking Tables",
        body:
          "We create a 'profiles' table. It has a column 'id' that matches the User ID from Auth. They are linked 1-to-1. This is where you'll store user-specific data for your ChatGPT wrapper. One user = one profile.",
      },
      {
        type: "buildTask",
        title: "Design the Profile Table",
        description: "Use AI to create the profiles table",
        task: "In Cursor, use this prompt: 'Create a profiles table for my ChatGPT wrapper. It should link to auth.users via id (foreign key). Include: full_name (text), avatar_url (text, nullable), subscription_plan (text: free or pro, default free), message_count (integer, default 0). Enable Row Level Security so users can only read/update their own profile.'",
        expectedOutcome: "SQL code to create the profiles table",
        verificationSteps: [
          "SQL generated",
          "Includes foreign key to auth.users",
          "Has subscription_plan and message_count fields",
          "RLS enabled",
        ],
        tips: [
          "Copy the prompt exactly",
          "Let AI write the SQL",
          "Paste into Supabase SQL Editor",
        ],
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "You now have user profiles. You can track who's using your ChatGPT wrapper and enforce usage limits. The subscription_plan field will control free vs pro access. The message_count field will track usage. This is how you build a business.",
      },
      {
        type: "text",
        title: "How Profiles Work",
        body:
          "When a user signs up, Supabase creates them in auth.users. Your app should then create a matching row in profiles with subscription_plan='free' and message_count=0. As they use your ChatGPT wrapper, you increment message_count. When they upgrade, you change subscription_plan to 'pro'.",
      },
      {
        type: "text",
        title: "Next Step",
        body:
          "Profiles are set up. But right now, users can still access /chat without logging in (if they know the URL). You need to protect the chat route so only logged-in users can access it. That's next.",
      },
    ],
  },
  {
    id: "route-protection",
    title: "Route Protection",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 8",
        body:
          "Users can log in. Profiles are set up. But there's a security hole: if someone types '/chat' in the browser, they can access your ChatGPT wrapper without logging in! You need route protection - a guard that checks authentication before allowing access.",
      },
      {
        type: "text",
        title: "Why Route Protection Matters",
        body:
          "Without protection: anyone can access /chat, see conversations, send messages (even if not logged in). With protection: only authenticated users can access /chat. Their conversations are private. This is essential for a real product.",
      },
      {
        type: "text",
        title: "Protect Your ChatGPT Wrapper",
        body:
          "A login page isn't enough. If someone knows the URL '/chat', they can type it in and use your ChatGPT wrapper without logging in. We need to protect the chat page.",
      },
      {
        type: "text",
        title: "Middleware Protection",
        body:
          "Middleware sits between the User and the Page. It asks: 'Are you logged in?'. If yes, pass to /chat. If no, redirect to /login. This protects your ChatGPT wrapper. Middleware runs on every request, checking authentication before the page loads.",
      },
      {
        type: "identify",
        prompt: "Where does Middleware sit?",
        correctOptionId: "middle",
        correctExplanation: "Yes. It intercepts the request before it hits the page.",
        wrongExplanation: "It's not in the database or the browser.",
        options: [
          { id: "browser", text: "In the Browser", icon: "🌐" },
          { id: "middle", text: "Between Request & Page", icon: "🛡️" },
          { id: "db", text: "In the Database", icon: "🗄️" },
        ],
      },
      {
        type: "buildTask",
        title: "Protect the Chat Route",
        description: "Use AI to add route protection",
        task: "In Cursor, use this prompt: 'Create Next.js middleware that protects the /chat route. If user is not authenticated, redirect to /login. Use Supabase Auth to check if user is logged in. Only allow access to /chat if authenticated.'",
        expectedOutcome: "Middleware that protects /chat route",
        verificationSteps: [
          "middleware.ts file created",
          "Checks authentication",
          "Redirects to /login if not authenticated",
          "Allows access to /chat if authenticated",
        ],
        tips: [
          "Use Supabase createServerClient in middleware",
          "Check for session/user",
          "Redirect unauthenticated users",
        ],
      },
      {
        type: "text",
        title: "What You Just Built",
        body:
          "Your ChatGPT wrapper is now protected. Only logged-in users can access it. Their chat history is private. Try accessing /chat without logging in - you'll be redirected to /login. This is how real apps work.",
      },
      {
        type: "text",
        title: "Phase 2 World 5 Complete!",
        body:
          "You've added authentication to your ChatGPT wrapper: login/signup pages, user profiles, route protection. Each user now has their own private chat history. Next mission: connect to OpenAI so your ChatGPT wrapper can actually chat!",
      },
    ],
  },
];

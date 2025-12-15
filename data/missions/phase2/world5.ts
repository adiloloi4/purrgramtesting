import { MissionData } from "../world0";

export const world5Missions: MissionData[] = [
  {
    id: "auth-providers",
    title: "The Bouncer (Authentication)",
    slides: [
      {
        type: "text",
        title: "Who goes there?",
        body:
          "Your app is a public park. Anyone can walk in. To build a business, you need a private club. You need a Bouncer (Auth).",
      },
      {
        type: "text",
        title: "Don't Build Auth",
        body:
          "Never build your own login system. It is hard and dangerous. Rent a Bouncer. We use Supabase Auth or Clerk. They handle passwords, emails, and security.",
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
        type: "text",
        title: "Confidence Boost",
        body:
          "Auth is the gatekeeper. Once you add it, you know exactly who is using your app.",
      },
    ],
  },
  {
    id: "user-profiles",
    title: "User Profiles",
    slides: [
      {
        type: "text",
        title: "More than an Email",
        body:
          "Auth gives you an ID and an Email. But you want an Avatar, a Bio, a Plan. You need a Profile.",
      },
      {
        type: "text",
        title: "Linking Tables",
        body:
          "We create a 'profiles' table. It has a column 'id' that matches the User ID from Auth. They are linked 1-to-1.",
      },
      {
        type: "quiz",
        question: "If I delete the User from Auth, what should happen to the Profile?",
        options: [
          { id: "a", text: "It should stay forever" },
          { id: "b", text: "It should be deleted (Cascade)" },
          { id: "c", text: "It should become an admin" },
        ],
        correctOptionId: "b",
        correctExplanation: "Correct. No user, no profile. Clean up your data.",
        wrongExplanation: "Zombie data clogs up your database.",
      },
      {
        type: "text",
        title: "The Trigger Trap",
        body:
          "Advanced devs use 'Triggers' to make profiles automatically. This is magic, but magic breaks. We will use a simpler way: 'Create Profile on First Login'.",
      },
      {
        type: "buildTask",
        title: "Design the Profile",
        description: "Ask AI to design the table",
        task: "Ask AI: 'I need a profiles table that links to auth.users. It should have full_name and avatar_url. Give me the SQL.'",
        expectedOutcome: "SQL code to create the table",
        verificationSteps: [
          "SQL generated",
          "Includes foreign key to auth.users",
          "Includes extra fields",
        ],
        tips: [
          "Mention 'Foreign Key'",
          "Ask for 'Row Level Security' (RLS) to be enabled",
        ],
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "You are managing user identity. You are building a real system, not a toy.",
      },
    ],
  },
  {
    id: "middleware-protection",
    title: "The Guard Dog (Middleware)",
    slides: [
      {
        type: "text",
        title: "The Back Door",
        body:
          "A login page isn't enough. If I know the URL '/dashboard', I can type it in. We need a guard that checks *every* request.",
      },
      {
        type: "text",
        title: "Middleware",
        body:
          "Middleware sits between the User and the Page. It asks: 'Are you logged in?'. If yes, pass. If no, redirect to Login.",
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
        type: "spotTheBug",
        title: "Unprotected Route",
        description: "Find the security hole",
        code: "// middleware.ts\n\nexport const config = {\n  matcher: ['/dashboard/:path*', '/settings'],\n};\n\n// What about /admin ?",
        bugs: [
          {
            id: "missing-admin",
            line: 4,
            description: "The /admin route is not in the matcher, so it is unprotected!",
            fix: "Add '/admin' to the matcher array",
          },
        ],
      },
      {
        type: "text",
        title: "Confidence Boost",
        body:
          "Your app is secure. You have a Bouncer (Auth), a list of Members (Profiles), and a Guard Dog (Middleware). You are ready for business.",
      },
    ],
  },
];

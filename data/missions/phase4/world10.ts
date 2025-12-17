import { MissionData } from "../world0";

export const world10Missions: MissionData[] = [
  {
    id: "domains",
    title: "Domain + DNS",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 23",
        body:
          "Your ChatGPT wrapper is complete: database, auth, OpenAI, streaming, UI, payments. But it's only on localhost. Time to deploy it to the world! Get a real domain (like mychatgpt.com) and make it live on the internet. This is the moment it becomes real.",
      },
      {
        type: "text",
        title: "Why Deployment Matters",
        body:
          "Without deployment: only you can use it → no users → no revenue → no impact. With deployment: anyone can visit your domain → real users → real revenue → real impact. Deployment is what turns a project into a product.",
      },
      {
        type: "text",
        title: "Deploy Your ChatGPT Wrapper",
        body: "Your ChatGPT wrapper is ready. Now deploy it to production. Get a real domain (like mychatgpt.com) and make it live on the internet. This is the moment it becomes real.",
      },
      {
        type: "buildTask",
        title: "Deploy to Vercel",
        description: "Ask AI for deployment help",
        task: "Tell Cursor: 'I'm ready to deploy. What are the steps to push this code to GitHub and connect it to Vercel?'",
        expectedOutcome: "ChatGPT wrapper deployed and live",
        verificationSteps: [
          "Code is on GitHub",
          "Project is on Vercel",
          "You have a live URL",
        ],
        tips: [
          "Don't forget to add your Env Vars in Vercel settings",
          "That includes Supabase and OpenAI keys",
        ],
      },
      {
        type: "checklist",
        title: "Deploy Your ChatGPT Wrapper",
        prompt: "Make your ChatGPT wrapper live.",
        items: [
          { id: "buy", label: "Buy a domain for your ChatGPT wrapper ($10-50)" },
          { id: "add", label: "Add domain to Vercel Project Settings > Domains" },
          { id: "dns", label: "Update Nameservers or A Records as instructed" },
          { id: "test", label: "Test your ChatGPT wrapper on the new domain" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Visit your ChatGPT wrapper on your new domain. Does it load? Does it have the lock (SSL)? Can you log in and send a message? Congratulations. Your ChatGPT wrapper is live on the internet.",
        example: "mychatgpt.com is live.",
      },
      {
        type: "sequenceGame",
        title: "Go Live Flow",
        description: "Order the steps to launch your domain",
        items: [
          { id: "buy", label: "Buy Domain", correctPosition: 0 },
          { id: "vercel", label: "Add to Vercel Project", correctPosition: 1 },
          { id: "nameservers", label: "Update Nameservers/DNS", correctPosition: 2 },
          { id: "wait", label: "Wait for Propagation", correctPosition: 3 },
          { id: "ssl", label: "Verify SSL (Lock Icon)", correctPosition: 4 },
        ],
      },
      {
        type: "sequenceGame",
        title: "Domain Setup Workflow",
        description: "Order the steps to go live with a domain",
        items: [
          { id: "buy", label: "Buy domain from registrar", correctPosition: 0 },
          { id: "add", label: "Add to Vercel Project Settings", correctPosition: 1 },
          { id: "dns", label: "Update DNS records as instructed", correctPosition: 2 },
          { id: "verify", label: "Verify SSL lock appears", correctPosition: 3 },
        ],
        hint: "Start with buying, end with verifying",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO Optimization via AI",
    slides: [
      {
        type: "text",
        title: "Make Your ChatGPT Wrapper Discoverable",
        body: "Add SEO to your ChatGPT wrapper so people can find it on Google. You need a title, description, and keywords. Let AI help you write them based on your ChatGPT wrapper's features.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: Generate a Metadata object for my Next.js root layout. My app is a [describe app]. Write a catchy title and description optimized for SEO. Also create a sitemap.ts.",
      },
      {
        type: "text",
        title: "Sitemap",
        body: "A sitemap.xml tells Google which pages to crawl. Next.js can generate this automatically with a app/sitemap.ts file.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Visit your ChatGPT wrapper domain/sitemap.xml. Do you see your URLs listed there? If yes, Google will see your ChatGPT wrapper too.",
        example: "Sitemap loads.",
      },
      {
        type: "speedQuiz",
        title: "SEO Basics",
        description: "How to get found on Google",
        questions: [
          {
            id: "q1",
            question: "What tells Google which pages exist on your site?",
            options: [
              { id: "a", text: "robots.txt" },
              { id: "b", text: "sitemap.xml" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "Who should write your meta titles and descriptions?",
            options: [
              { id: "a", text: "You, manually" },
              { id: "b", text: "AI (based on your content)" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
      {
        type: "speedQuiz",
        title: "SEO Quiz",
        description: "Test your understanding of SEO optimization",
        questions: [
          {
            id: "q1",
            question: "What does SEO stand for?",
            options: [
              { id: "a", text: "Search Engine Optimization" },
              { id: "b", text: "Simple Easy Option" },
              { id: "c", text: "Super Easy Online" },
            ],
            correct: "a",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What file tells Google which pages to crawl?",
            options: [
              { id: "a", text: "robots.txt" },
              { id: "b", text: "sitemap.xml" },
              { id: "c", text: "package.json" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "opengraph",
    title: "Open Graph Images",
    slides: [
      {
        type: "text",
        title: "The Social Card",
        body: "When you share your link on Twitter/Discord, it should look huge and beautiful. That's an Open Graph (OG) image. No generic links allowed in Vibe Coding.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: Add an opengraph-image.tsx to my app root. It should render a simple design with my App Title and a cool background gradient using ImageResponse from next/og.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Share your ChatGPT wrapper link on a private Discord or Slack (or use metatags.io). Does the card preview appear with your ChatGPT wrapper's image? It should look professional.",
        example: "OG Image renders.",
      },
      {
        type: "identify",
      prompt: "Which of these is the Open Graph Image?",
      correctOptionId: "b",
      correctExplanation: "Yes! That big beautiful card is what people see on Twitter/Discord.",
      wrongExplanation: "Look for the rich link preview card.",
        options: [
          { id: "a", text: "The Favicon", icon: "🔸" },
          { id: "b", text: "The Social Card", icon: "🖼️" },
          { id: "c", text: "The URL text", icon: "🔗" },
        ],
      },
      {
        type: "speedQuiz",
        title: "Open Graph Quiz",
        description: "Test your understanding of social sharing",
        questions: [
          {
            id: "q1",
            question: "What is an OG image?",
            options: [
              { id: "a", text: "A profile picture" },
              { id: "b", text: "Social card preview when sharing links" },
              { id: "c", text: "A logo" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "Where do you create OG images in Next.js?",
            options: [
              { id: "a", text: "opengraph-image.tsx" },
              { id: "b", text: "logo.png" },
              { id: "c", text: "favicon.ico" },
            ],
            correct: "a",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "posthog",
    title: "Posthog Analytics",
    slides: [
      {
        type: "text",
        title: "Track Usage of Your ChatGPT Wrapper",
        body: "You need to know how users are using your ChatGPT wrapper. How many messages are sent? Which features are popular? PostHog tracks this. It's free and essential for growth.",
      },
      {
        type: "buildTask",
        title: "Add Analytics to ChatGPT Wrapper",
        description: "Direct AI to add tracking",
        task: "Tell Cursor: 'Add PostHog analytics to my app. I want to track page views and when users send messages.'",
        expectedOutcome: "PostHog tracking installed and working",
        verificationSteps: [
          "PostHog library installed",
          "Events are being tracked",
          "You can see data in the dashboard",
        ],
        tips: [
          "Analytics help you understand your users",
          "Start simple with page views",
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Use your ChatGPT wrapper. Send some messages. Go to Posthog Dashboard > Session Replay. Watch yourself using it. See how users interact with your ChatGPT wrapper. It's essential for improving the product.",
        example: "Replay works.",
      },
      {
        type: "sequenceGame",
        title: "Analytics Setup",
        description: "Order the steps to track users",
        items: [
          { id: "signup", label: "Sign up for Posthog", correctPosition: 0 },
          { id: "env", label: "Add API Key to .env", correctPosition: 1 },
          { id: "provider", label: "Wrap App in Provider", correctPosition: 2 },
          { id: "replay", label: "Watch Session Replay", correctPosition: 3 },
        ],
      },
      {
        type: "sequenceGame",
        title: "Posthog Setup Workflow",
        description: "Order the steps to set up analytics",
        items: [
          { id: "signup", label: "Sign up for Posthog", correctPosition: 0 },
          { id: "key", label: "Get Project API Key", correctPosition: 1 },
          { id: "env", label: "Add key to .env.local", correctPosition: 2 },
          { id: "provider", label: "Wrap app with Posthog provider", correctPosition: 3 },
        ],
        hint: "Start with signing up, end with provider",
      },
    ],
  },
];

import { MissionData } from "../world0";

export const world10Missions: MissionData[] = [
  {
    id: "domains",
    title: "Domain + DNS",
    slides: [
      {
        type: "text",
        title: "Own Your Corner",
        body: "A .vercel.app domain is fine for prototypes. A .com (or .io, .ai) is for businesses. Buying a domain is the signal that you are serious.",
      },
      {
        type: "text",
        title: "Vercel DNS",
        body: "Vercel makes this easy. Buy the domain on Namecheap, Porkbun, or GoDaddy. Add it to Vercel Project Settings. It will tell you exactly what DNS records to change.",
      },
      {
        type: "checklist",
        title: "Go Live",
        prompt: "Make it official.",
        items: [
          { id: "buy", label: "Buy a domain ($10-50)" },
          { id: "add", label: "Add to Vercel Project Settings > Domains" },
          { id: "dns", label: "Update Nameservers or A Records as instructed" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Visit your new domain. Does it load? Does it have the lock (SSL)? Congratulations. You are on the internet.",
        example: "vibe-coder.com is live.",
      },
      {
        type: "memoryGame",
        title: "Domain & DNS Memory Game",
        description: "Match domain concepts to their purposes",
        cards: [
          { id: "domain", front: "Domain", back: ".com or .io - shows you're serious" },
          { id: "dns", front: "DNS", back: "Points domain to your server" },
          { id: "ssl", front: "SSL Lock", back: "Secure connection (HTTPS)" },
          { id: "vercel-dns", front: "Vercel DNS", back: "Easy domain setup in Vercel" },
        ],
        timeLimit: 50,
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
        title: "Be Found",
        body: "Google needs to know you exist. You need a Title, Description, and Keywords. But don't write them yourself. Let AI analyze your page content and write them.",
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
        task: "Visit yourdomain.com/sitemap.xml. Do you see your URLs listed there? If yes, Google will see them too.",
        example: "Sitemap loads.",
      },
      {
        type: "memoryGame",
        title: "SEO Optimization Memory Game",
        description: "Match SEO concepts to their purposes",
        cards: [
          { id: "seo", front: "SEO", back: "Search Engine Optimization - be found on Google" },
          { id: "metadata", front: "Metadata", back: "Title, description, keywords for search" },
          { id: "sitemap", front: "Sitemap", back: "Tells Google which pages to crawl" },
          { id: "ai-seo", front: "AI SEO", back: "Let AI write optimized metadata" },
        ],
        timeLimit: 50,
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
        task: "Share your localhost or production link on a private Discord or Slack (or use metatags.io). Does the card preview appear? It should look sick.",
        example: "OG Image renders.",
      },
      {
        type: "memoryGame",
        title: "Open Graph Memory Game",
        description: "Match Open Graph concepts to their purposes",
        cards: [
          { id: "og-image", front: "OG Image", back: "Social card preview when sharing links" },
          { id: "social-card", front: "Social Card", back: "Beautiful preview on Twitter/Discord" },
          { id: "imageresponse", front: "ImageResponse", back: "Next.js function to generate OG images" },
          { id: "opengraph", front: "Open Graph", back: "Protocol for rich link previews" },
        ],
        timeLimit: 50,
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
        title: "Watching the Users",
        body: "You need to know what users are doing. Posthog is the standard for Vibe Coders. It records sessions (like a movie) and tracks events. The free tier is generous.",
      },
      {
        type: "checklist",
        title: "Action: Install",
        prompt: "Set up the observer.",
        items: [
          { id: "signup", label: "Sign up for Posthog" },
          { id: "key", label: "Get Project API Key" },
          { id: "env", label: "Add to .env.local" },
        ],
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: Install posthog-js. Create a client-side provider component to initialize Posthog. Wrap the app layout with it so I can track pageviews.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Click around your app. Go to Posthog Dashboard > Session Replay. Watch yourself clicking. It's creepy but essential for product growth.",
        example: "Replay works.",
      },
      {
        type: "memoryGame",
        title: "Posthog Analytics Memory Game",
        description: "Match analytics concepts to their purposes",
        cards: [
          { id: "posthog", front: "Posthog", back: "Standard analytics for Vibe Coders" },
          { id: "session-replay", front: "Session Replay", back: "Watch users like a movie" },
          { id: "events", front: "Events", back: "Track user actions (clicks, pageviews)" },
          { id: "growth", front: "Product Growth", back: "Essential for understanding users" },
        ],
        timeLimit: 50,
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

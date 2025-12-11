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
    ],
  },
];

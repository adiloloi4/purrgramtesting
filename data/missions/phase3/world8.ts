import { MissionData } from "../world0";

export const world8Missions: MissionData[] = [
  {
    id: "shadcn-customization",
    title: "Customizing Shadcn",
    slides: [
      {
        type: "text",
        title: "The UI Cheat Code",
        body: "Shadcn UI is not a library; it's a copy-paste collection. It looks clean but generic. To have Vibe, you must customize it. Don't look like every other SaaS.",
      },
      {
        type: "text",
        title: "Action: Install a Component",
        body: "If you haven't yet, install the button component: npx shadcn@latest add button. Now you have a file at components/ui/button.tsx. This is yours. You own it.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Open components/ui/button.tsx. Prompt: Change the default button styles. Make the radius fully rounded (pill shape). Change the primary color to a deep purple gradient. Add a subtle shadow.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Look at your buttons. Are they purple pills now? If yes, you just created a Design System.",
        example: "Buttons updated.",
      },
    ],
  },
  {
    id: "mobile-fixes",
    title: "Mobile Fixes",
    slides: [
      {
        type: "text",
        title: "The Thumb Zone",
        body: "50% of your users are on mobile. If your app sucks on a phone, it sucks. Period. Vibe Coding means checking mobile view constantly.",
      },
      {
        type: "text",
        title: "Action: The Inspector",
        body: "Open Chrome DevTools (Cmd+Option+I). Click the Toggle Device Toolbar icon (looks like a phone). Select iPhone 14.",
      },
      {
        type: "identify",
        prompt: "What is a common mobile bug?",
        items: [
          { id: "1", text: "Text is too small to read", correct: true },
          { id: "2", text: "Buttons are too easy to click", correct: false },
          { id: "3", text: "Images are too high resolution", correct: false },
        ],
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: The navigation bar looks crowded on mobile. Modify components/Navbar.tsx to hide the links behind a Hamburger Menu icon when the screen is smaller than 768px.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Resize your window to mobile width. Does the menu collapse into an icon? If yes, you are Mobile First.",
        example: "Hamburger menu appears.",
      },
    ],
  },
  {
    id: "responsiveness",
    title: "Responsiveness Prompts",
    slides: [
      {
        type: "text",
        title: "Fluid Design",
        body: "Pixels are dead. We use Percentages, Flexbox, and Grid. Things should squish and stretch like water, not break like glass.",
      },
      {
        type: "text",
        title: "The Magic Words",
        body: "Keywords for Cursor: Stack vertically on mobile, side-by-side on desktop. Use a responsive grid. Ensure no horizontal scroll.",
      },
      {
        type: "quiz",
        question: "Which Tailwind class handles responsive breakpoints?",
        options: [
          { id: "a", text: "mobile:", correct: false },
          { id: "b", text: "md: (medium screens)", correct: true },
          { id: "c", text: "if-phone:", correct: false },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Find a grid of cards in your app. Ask Cursor: Make this grid 1 column on mobile, 2 on tablet, and 3 on desktop. Resize window to verify.",
        example: "Grid adjusts.",
      },
    ],
  },
  {
    id: "dark-mode",
    title: "Dark Mode Toggle",
    slides: [
      {
        type: "text",
        title: "The Developer's Choice",
        body: "Light mode burns retinas. Dark mode saves batteries. You need both. Next.js + Tailwind makes this easy with next-themes.",
      },
      {
        type: "checklist",
        title: "Setup Dark Mode",
        prompt: "Install the provider.",
        items: [
          { id: "1", label: "npm install next-themes" },
          { id: "2", label: "Ask Cursor to wrap app in <ThemeProvider>" },
          { id: "3", label: "Add darkMode: class to tailwind.config (if needed)" },
        ],
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: Implement a Dark Mode toggle component using next-themes. It should switch between Light, Dark, and System. Place it in the Navbar.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Click the toggle. Does the background change? Does it persist on refresh? Welcome to the dark side.",
        example: "Theme switches.",
      },
    ],
  },
  {
    id: "toasts",
    title: "Toasts & Micro-interactions",
    slides: [
      {
        type: "text",
        title: "Talk to the User",
        body: "When a user saves, tell them. Saved! When they fail, tell them. Error! These popups are called Toasts. They build trust.",
      },
      {
        type: "text",
        title: "Sonner",
        body: "We recommend sonner for toasts in the Vibe Stack. It's beautiful and lightweight. npx shadcn@latest add sonner.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: Add the <Toaster /> to my root layout. Then, in my Settings page, make the Save button trigger a success toast saying Settings updated! when clicked.",
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Click the button. Did a nice popup appear? Does it vanish automatically? That's polish.",
        example: "Toast appears.",
      },
    ],
  },
];

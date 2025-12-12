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
      {
        type: "memoryGame",
        title: "Shadcn Customization Memory Game",
        description: "Match Shadcn concepts to their purposes",
        cards: [
          { id: "shadcn", front: "Shadcn UI", back: "Copy-paste collection (not a library)" },
          { id: "customize", front: "Customization", back: "Make it unique, not generic" },
          { id: "own", front: "You Own It", back: "Components are files you can edit" },
          { id: "design-system", front: "Design System", back: "Consistent custom styles" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Shadcn Customization Quiz",
        description: "Test your understanding of customizing components",
        questions: [
          {
            id: "q1",
            question: "What is Shadcn UI?",
            options: [
              { id: "a", text: "A library you install" },
              { id: "b", text: "A copy-paste collection" },
              { id: "c", text: "A framework" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "Why customize Shadcn?",
            options: [
              { id: "a", text: "To look like every other SaaS" },
              { id: "b", text: "To have unique Vibe" },
              { id: "c", text: "It's required" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
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
      {
        type: "memoryGame",
        title: "Mobile Fixes Memory Game",
        description: "Match mobile concepts to their purposes",
        cards: [
          { id: "thumb-zone", front: "Thumb Zone", back: "50% of users are on mobile" },
          { id: "devtools", front: "DevTools", back: "Chrome inspector for mobile testing" },
          { id: "hamburger", front: "Hamburger Menu", back: "Icon that hides links on mobile" },
          { id: "mobile-first", front: "Mobile First", back: "Design for mobile, enhance for desktop" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Mobile Development Quiz",
        description: "Test your understanding of mobile fixes",
        questions: [
          {
            id: "q1",
            question: "What percentage of users are on mobile?",
            options: [
              { id: "a", text: "25%" },
              { id: "b", text: "50%" },
              { id: "c", text: "10%" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What is a common mobile bug?",
            options: [
              { id: "a", text: "Text too small to read" },
              { id: "b", text: "Buttons too easy to click" },
              { id: "c", text: "Images too high resolution" },
            ],
            correct: "a",
            timeLimit: 12,
          },
        ],
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
      {
        type: "memoryGame",
        title: "Responsiveness Memory Game",
        description: "Match responsive design concepts",
        cards: [
          { id: "fluid", front: "Fluid Design", back: "Squish and stretch like water" },
          { id: "flexbox", front: "Flexbox", back: "Layout system for responsive design" },
          { id: "grid", front: "Grid", back: "Responsive grid system" },
          { id: "breakpoints", front: "Breakpoints", back: "md: for medium screens in Tailwind" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Responsive Design Quiz",
        description: "Test your understanding of responsiveness",
        questions: [
          {
            id: "q1",
            question: "Which Tailwind class handles responsive breakpoints?",
            options: [
              { id: "a", text: "mobile:" },
              { id: "b", text: "md: (medium screens)" },
              { id: "c", text: "if-phone:" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What should responsive design feel like?",
            options: [
              { id: "a", text: "Break like glass" },
              { id: "b", text: "Squish and stretch like water" },
              { id: "c", text: "Stay fixed" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
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
      {
        type: "memoryGame",
        title: "Dark Mode Memory Game",
        description: "Match dark mode concepts to their purposes",
        cards: [
          { id: "dark-mode", front: "Dark Mode", back: "Saves batteries, easier on eyes" },
          { id: "next-themes", front: "next-themes", back: "Library for theme switching" },
          { id: "theme-provider", front: "ThemeProvider", back: "Wraps app to enable themes" },
          { id: "toggle", front: "Theme Toggle", back: "Switches between Light, Dark, System" },
        ],
        timeLimit: 50,
      },
      {
        type: "sequenceGame",
        title: "Dark Mode Setup Workflow",
        description: "Order the steps to set up dark mode",
        items: [
          { id: "install", label: "npm install next-themes", correctPosition: 0 },
          { id: "provider", label: "Wrap app in ThemeProvider", correctPosition: 1 },
          { id: "config", label: "Add darkMode: class to tailwind.config", correctPosition: 2 },
          { id: "toggle", label: "Create toggle component", correctPosition: 3 },
        ],
        hint: "Start with installing, end with toggle",
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
      {
        type: "memoryGame",
        title: "Toasts & Micro-interactions Memory Game",
        description: "Match interaction concepts to their purposes",
        cards: [
          { id: "toast", front: "Toast", back: "Popup notification (Saved! Error!)" },
          { id: "sonner", front: "Sonner", back: "Beautiful toast library for Shadcn" },
          { id: "toaster", front: "<Toaster />", back: "Component added to root layout" },
          { id: "trust", front: "Build Trust", back: "Toasts communicate with users" },
        ],
        timeLimit: 50,
      },
      {
        type: "speedQuiz",
        title: "Micro-interactions Quiz",
        description: "Test your understanding of toasts and polish",
        questions: [
          {
            id: "q1",
            question: "What are toasts used for?",
            options: [
              { id: "a", text: "Breakfast" },
              { id: "b", text: "User notifications (Saved! Error!)" },
              { id: "c", text: "Nothing" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What library is recommended for toasts?",
            options: [
              { id: "a", text: "Sonner" },
              { id: "b", text: "React" },
              { id: "c", text: "Next.js" },
            ],
            correct: "a",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "loading-states",
    title: "Loading States & Skeletons",
    slides: [
      {
        type: "text",
        title: "Don't Show Blank Screens",
        body: "When data is loading, show a skeleton. When saving, show a spinner. Empty states feel broken. Loading states feel professional.",
      },
      {
        type: "codeChallenge",
        title: "Build Loading Skeletons",
        description: "Create skeleton loaders for your components",
        task: "Build a skeleton component that mimics your task list layout. Show it while data is loading. Use Tailwind's animate-pulse for the shimmer effect.",
        starterCode: "const [loading, setLoading] = useState(true);\n// Your skeleton component here",
        successCriteria: [
          "Skeleton matches actual layout",
          "Shows while data loads",
          "Uses animate-pulse",
          "Replaces with real data when ready"
        ],
        hint: "Use <div className='animate-pulse bg-gray-200 dark:bg-gray-700 rounded' />",
      },
      {
        type: "memoryGame",
        title: "Loading States Memory Game",
        description: "Match loading concepts to their purposes",
        cards: [
          { id: "skeleton", front: "Skeleton", back: "Placeholder that mimics layout" },
          { id: "spinner", front: "Spinner", back: "Animated loading indicator" },
          { id: "pulse", front: "animate-pulse", back: "Tailwind class for shimmer effect" },
          { id: "empty-state", front: "Empty State", back: "Message when no data exists" },
        ],
        timeLimit: 50,
      },
    ],
  },
  {
    id: "animations",
    title: "Smooth Animations",
    slides: [
      {
        type: "text",
        title: "Motion is Emotion",
        body: "Smooth transitions make apps feel expensive. A button that fades in feels better than one that pops. Use Framer Motion (already in your stack).",
      },
      {
        type: "buildTask",
        title: "Add Animations to Your UI",
        description: "Implement smooth animations throughout your app",
        task: "Add Framer Motion animations to your components. Make buttons fade in on hover, lists stagger in, and modals slide in smoothly.",
        expectedOutcome: "UI feels smooth and polished with animations",
        verificationSteps: [
          "Buttons have hover animations",
          "Lists stagger in when loaded",
          "Modals slide in smoothly",
          "Transitions feel natural"
        ],
        tips: [
          "Use motion.div instead of div",
          "Use whileHover for hover effects",
          "Use initial/animate for entrance animations",
          "Keep animations subtle (200-300ms)"
        ],
      },
      {
        type: "memoryGame",
        title: "Animations Memory Game",
        description: "Match animation concepts to their purposes",
        cards: [
          { id: "framer-motion", front: "Framer Motion", back: "Animation library for React" },
          { id: "motion-div", front: "motion.div", back: "Animated version of div" },
          { id: "stagger", front: "Stagger", back: "Items animate one after another" },
          { id: "transition", front: "Transition", back: "Smooth change between states" },
        ],
        timeLimit: 50,
      },
    ],
  },
];

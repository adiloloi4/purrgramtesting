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
        type: "identify",
      prompt: "Which button has Vibe (Custom Design)?",
      correctOptionId: "custom",
      correctExplanation: "Yes! The gradient, rounded corners, and shadow make it unique.",
      wrongExplanation: "The other one is the default. Anyone can have that.",
        options: [
          { id: "default", text: "Black square button", icon: "⬛" },
          { id: "custom", text: "Purple gradient pill", icon: "💊" },
          { id: "text", text: "Just text", icon: "📝" },
        ],
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
        type: "sequenceGame",
        title: "Mobile First Workflow",
        description: "Order the steps to ensure mobile responsiveness",
        items: [
          { id: "devtools", label: "Open DevTools (Toggle Device Mode)", correctPosition: 0 },
          { id: "resize", label: "Resize to Mobile (iPhone View)", correctPosition: 1 },
          { id: "spot", label: "Spot broken layout", correctPosition: 2 },
          { id: "fix", label: "Apply Tailwind mobile classes", correctPosition: 3 },
          { id: "verify", label: "Verify on multiple sizes", correctPosition: 4 },
        ],
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
        type: "spotTheBug",
        title: "Mobile Overflow",
        description: "Find the CSS bug causing horizontal scroll on mobile",
        code: "<div className=\"w-full\">\n  <h1 className=\"text-4xl\">My Title</h1>\n  <!-- The Bug is Below -->\n  <div className=\"w-[800px] bg-red-500\">\n    I am a fixed width box\n  </div>\n</div>",
        bugs: [
          {
            id: "fixed-width",
            line: 4,
            description: "Fixed width of 800px is wider than mobile screen (375px)",
            fix: "Use w-full or max-w-full",
          },
        ],
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
        type: "identify",
      prompt: "Which component must wrap your app to enable themes?",
      correctOptionId: "provider",
      correctExplanation: "Correct. The Provider passes the theme context to all children.",
      wrongExplanation: "Think about Context in React.",
        options: [
          { id: "toggle", text: "<ThemeToggle />", icon: "🔘" },
          { id: "provider", text: "<ThemeProvider />", icon: "🎁" },
          { id: "button", text: "<Button />", icon: "👆" },
        ],
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
        type: "sequenceGame",
        title: "Feedback Loop",
        description: "Order the events of a user interaction",
        items: [
          { id: "click", label: "User clicks 'Save'", correctPosition: 0 },
          { id: "request", label: "App sends request to API", correctPosition: 1 },
          { id: "response", label: "API returns 'Success'", correctPosition: 2 },
          { id: "toast", label: "Show Toast: 'Saved!'", correctPosition: 3 },
          { id: "vanish", label: "Toast vanishes after 3s", correctPosition: 4 },
        ],
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
        type: "matching",
        prompt: "State to UI",
        pairs: [
          { id: "load", left: "Loading Data", right: "Skeleton Loader" },
          { id: "submit", left: "Submitting Form", right: "Spinner on Button" },
          { id: "empty", left: "No Data", right: "Empty State Message" },
          { id: "error", left: "Error", right: "Red Error Alert" },
        ],
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
        type: "matching",
        prompt: "Animation Concepts",
        pairs: [
          { id: "framer", left: "Framer Motion", right: "Animation Library" },
          { id: "motion", left: "motion.div", right: "Animated Container" },
          { id: "stagger", left: "Stagger", right: "Items appear one by one" },
          { id: "scale", left: "Scale", right: "Grow or shrink effect" },
        ],
      },
    ],
  },
];

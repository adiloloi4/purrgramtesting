import { MissionData } from "../world0";

export const world8Missions: MissionData[] = [
  {
    id: "shadcn-customization",
    title: "Customizing Shadcn",
    slides: [
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 16",
        body:
          "Bugs are fixed. Your ChatGPT wrapper works. But it looks generic - like every other app. Let's make it beautiful and unique. This is where you add your brand, your style, your vibe. Make it look premium.",
      },
      {
        type: "text",
        title: "Why Design Matters",
        body:
          "Users judge your ChatGPT wrapper in the first 3 seconds. If it looks cheap, they'll think it's cheap. If it looks premium, they'll trust it. Good design = higher conversion rates, more users, better reviews. This is worth the time.",
      },
      {
        type: "text",
        title: "Customize Your ChatGPT Wrapper",
        body: "Your ChatGPT wrapper works, but it looks generic. Let's make it beautiful and unique. Customize the colors, fonts, and styling to match your brand.",
      },
      {
        type: "buildTask",
        title: "Customize the Chat Interface",
        description: "Use AI to style your ChatGPT wrapper",
        task: "In Cursor, use this prompt: 'Customize my ChatGPT wrapper UI. Change the color scheme to [your choice: purple, blue, green]. Make the message bubbles rounded. Add a subtle gradient background. Style the input field to match. Make it look premium and unique.'",
        expectedOutcome: "Customized ChatGPT wrapper with unique styling",
        verificationSteps: [
          "Color scheme updated",
          "Message bubbles styled",
          "Background has gradient",
          "Input field matches design",
          "Looks premium and unique",
        ],
        tips: [
          "Use Tailwind CSS for styling",
          "Pick a color that matches your brand",
          "Make it feel like a premium product",
        ],
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
        title: "Make Your ChatGPT Wrapper Mobile-Friendly",
        body: "50% of users will use your ChatGPT wrapper on mobile. If it's broken on phone, it's broken. Make sure the chat interface works perfectly on mobile devices.",
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
        task: "Test your ChatGPT wrapper on mobile. Resize your browser to mobile width. Does the chat interface work well? Are messages readable? Is the input easy to use? Fix any issues.",
        example: "Mobile view works perfectly.",
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
        task: "Test your ChatGPT wrapper on mobile. Resize your browser to mobile width. Does the chat interface work well? Are messages readable? Is the input easy to use? Fix any issues.",
        example: "Mobile view works perfectly.",
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
        type: "buildTask",
        title: "Add Dark Mode to Your ChatGPT Wrapper",
        description: "Use AI to implement dark mode",
        task: "In Cursor, use this prompt: 'Add dark mode to my ChatGPT wrapper using next-themes. Install the package, wrap the app in ThemeProvider, create a dark mode toggle component, and place it in the chat interface header. Make sure the chat messages, input field, and sidebar all support dark mode.'",
        expectedOutcome: "Dark mode working in ChatGPT wrapper",
        verificationSteps: [
          "next-themes installed",
          "ThemeProvider wraps app",
          "Dark mode toggle created",
          "Chat interface supports dark mode",
          "Persists on refresh",
        ],
        tips: [
          "Use next-themes for easy implementation",
          "Test both light and dark modes",
          "Make sure text is readable in both modes",
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Test dark mode in your ChatGPT wrapper. Click the toggle. Does the chat interface switch to dark mode? Does it persist on refresh? Does it look good?",
        example: "Dark mode works perfectly.",
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
        task: "Test toasts in your ChatGPT wrapper. Send a message. Does a toast appear showing 'Message sent'? If there's an error, does an error toast show? Do they vanish automatically?",
        example: "Toasts work perfectly.",
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
        body: "Smooth transitions make your ChatGPT wrapper feel expensive. Messages that fade in feel better than ones that pop. Use Framer Motion to add polish.",
      },
      {
        type: "buildTask",
        title: "Add Animations to Your ChatGPT Wrapper",
        description: "Use AI to add smooth animations",
        task: "In Cursor, use this prompt: 'Add Framer Motion animations to my ChatGPT wrapper. Make messages fade in when they appear, add smooth scrolling when new messages arrive, add hover effects to buttons, and make the conversation sidebar slide in smoothly. Make it feel premium like the real ChatGPT.'",
        expectedOutcome: "ChatGPT wrapper feels smooth and polished with animations",
        verificationSteps: [
          "Messages fade in when displayed",
          "Smooth scrolling when new messages arrive",
          "Buttons have hover animations",
          "Sidebar slides in smoothly",
          "Feels like premium ChatGPT",
        ],
        tips: [
          "Use motion.div for animated containers",
          "Animate message appearance with initial={{ opacity: 0 }}",
          "Use smooth scroll behavior",
          "Keep animations subtle (200-300ms)",
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

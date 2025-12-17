import { MissionData } from "../world0";

export const world9Missions: MissionData[] = [
  {
    id: "payment-provider",
    title: "Stripe vs LemonSqueezy",
    slides: [
      {
        type: "text",
        title: "Phase 4: Launch Your ChatGPT Wrapper",
        body:
          "Phase 3 is done! Your ChatGPT wrapper is polished and beautiful. Now it's time to make money and launch. Phase 4 is about: adding payments, deploying to production, and getting users. Let's start with monetization.",
      },
      {
        type: "text",
        title: "Building Your ChatGPT Wrapper: Step 20",
        body:
          "Your ChatGPT wrapper is working beautifully. But it's free for everyone, which means you're paying for OpenAI API calls out of pocket. Time to monetize! Add a free tier (10 messages/month) and a pro tier (unlimited, $10/month). Users pay to unlock unlimited AI chats.",
      },
      {
        type: "text",
        title: "Why Monetization Matters",
        body:
          "Without payments: you pay for all OpenAI API calls → you lose money → you shut down. With payments: free users get limited access → pro users pay → you cover costs → you make profit → you can grow. This is how SaaS works.",
      },
      {
        type: "text",
        title: "Monetize Your ChatGPT Wrapper",
        body: "Your ChatGPT wrapper is working. Now let's make money. Add a free tier (limited messages) and a pro tier (unlimited). Users pay to unlock unlimited AI chats.",
      },
      {
        type: "text",
        title: "The Payment Provider",
        body: "Use Stripe or LemonSqueezy to handle payments. Stripe is the standard. LemonSqueezy handles global tax automatically. Pick one and set it up.",
      },
      {
        type: "quiz",
        question: "Which provider handles global sales tax automatically?",
        options: [
          { id: "a", text: "Stripe (Standard)", correct: false },
          { id: "b", text: "LemonSqueezy (Merchant of Record)", correct: true },
        ],
      },
      {
        type: "buildTask",
        title: "Set Up Payment Provider",
        description: "Direct AI to start monetization",
        task: "Tell Cursor: 'I want to charge users for this app. Help me set up Stripe. I need to install the library and know where to put my keys.'",
        expectedOutcome: "Stripe set up and ready for checkout",
        verificationSteps: [
          "Stripe library installed",
          "AI explained the keys",
          "You are ready to build checkout",
        ],
        tips: [
          "Use Stripe Test Mode keys",
          "Never share your Secret Key",
        ],
      },
      {
        type: "speedQuiz",
        title: "Provider Choice",
        description: "Pick the right tool for the job",
        questions: [
          {
            id: "q1",
            question: "You want someone else to handle Global Tax (VAT). Who do you pick?",
            options: [
              { id: "a", text: "Stripe (Standard)" },
              { id: "b", text: "LemonSqueezy (Merchant of Record)" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "You want the massive ecosystem and customizability. Who do you pick?",
            options: [
              { id: "a", text: "Stripe" },
              { id: "b", text: "PayPal" },
            ],
            correct: "a",
            timeLimit: 12,
          },
        ],
      },
      {
        type: "speedQuiz",
        title: "Payment Providers Quiz",
        description: "Test your understanding of payment processors",
        questions: [
          {
            id: "q1",
            question: "Which provider handles global sales tax automatically?",
            options: [
              { id: "a", text: "Stripe" },
              { id: "b", text: "LemonSqueezy" },
              { id: "c", text: "PayPal" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What happens when a stranger pays you $1?",
            options: [
              { id: "a", text: "You're still just a coder" },
              { id: "b", text: "You become a professional" },
              { id: "c", text: "Nothing changes" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "checkout",
    title: "Setting Up Checkout",
    slides: [
      {
        type: "text",
        title: "Add Checkout to Your ChatGPT Wrapper",
        body: "Create a pricing page for your ChatGPT wrapper. Free tier: 10 messages/month. Pro tier: Unlimited messages. When users click 'Upgrade to Pro', take them to Stripe checkout.",
      },
      {
        type: "buildTask",
        title: "Create Pricing Page and Checkout",
        description: "Direct AI to build the sales page",
        task: "Tell Cursor: 'Create a Pricing Page. It should have a Free tier (10 messages) and a Pro tier (Unlimited). The Pro button should start a Stripe Checkout session.'",
        expectedOutcome: "Pricing page with working Stripe checkout",
        verificationSteps: [
          "Pricing page exists",
          "Pro button redirects to Stripe",
          "You can pay (in test mode)",
        ],
        tips: [
          "AI handles the complex checkout code",
          "Focus on the pricing tier features",
        ],
      },
      {
        type: "checklist",
        title: "Test the Purchase Flow",
        prompt: "Verify the upgrade flow works.",
        items: [
          { id: "1", label: "User clicks 'Upgrade to Pro' in ChatGPT wrapper" },
          { id: "2", label: "Goes to Stripe Checkout" },
          { id: "3", label: "Pays (Test card: 4242 4242 4242 4242)" },
          { id: "4", label: "Returns to /success page" },
          { id: "5", label: "User is upgraded to Pro (unlimited messages)" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Test the full flow: Buy Pro subscription for your ChatGPT wrapper in test mode. Check Supabase - is your subscription_status now 'active'? Can you send unlimited messages? If yes, you are ready for revenue.",
        example: "Purchase successful, upgrade works.",
      },
      {
        type: "identify",
      prompt: "Where does the user go after clicking 'Buy'?",
      correctOptionId: "stripe",
      correctExplanation: "Correct. They leave your site to go to the secure Stripe Checkout page.",
      wrongExplanation: "They don't stay on your site (unless you build custom elements). They go to Stripe.",
        options: [
          { id: "stripe", text: "Stripe Hosted Checkout", icon: "💳" },
          { id: "home", text: "Your Homepage", icon: "🏠" },
          { id: "admin", text: "Your Admin Panel", icon: "⚙️" },
        ],
      },
      {
        type: "sequenceGame",
        title: "Purchase Flow",
        description: "Order the steps of the purchase process",
        items: [
          { id: "click", label: "User clicks Buy", correctPosition: 0 },
          { id: "stripe", label: "Goes to Stripe Checkout", correctPosition: 1 },
          { id: "pay", label: "Pays with test card", correctPosition: 2 },
          { id: "return", label: "Returns to /success page", correctPosition: 3 },
        ],
        hint: "Start with clicking, end with returning",
      },
    ],
  },
  {
    id: "paywalls",
    title: "Gating Features",
    slides: [
      {
        type: "text",
        title: "Add Message Limits to Your ChatGPT Wrapper",
        body: "Free users get 10 messages/month. Pro users get unlimited. You need to check the user's subscription status before allowing them to send messages.",
      },
      {
        type: "buildTask",
        title: "Implement Message Limits",
        description: "Direct AI to enforce limits",
        task: "Tell Cursor: 'Stop users from sending messages if they are on the Free plan and have sent more than 10 messages. Show them an upgrade banner instead.'",
        expectedOutcome: "Message limits enforced based on subscription",
        verificationSteps: [
          "Free users get capped",
          "Pro users are unlimited",
          "Upgrade banner appears",
        ],
        tips: [
          "This logic goes in your API route",
          "AI can check the database count",
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Manually set your own profile to active in Supabase Table Editor. Does the Upgrade banner disappear? You just built a paywall.",
        example: "Banner gone.",
      },
      {
        type: "spotTheBug",
        title: "Paywall Bypass",
        description: "Find the logic flaw that lets free users see pro content",
        code: "export default async function Dashboard() {\n  const user = await getUser();\n  \n  // BUG: What if status is 'cancelled'?\n  if (user.subscription_status === 'free') {\n    return <UpgradeBanner />;\n  }\n\n  return <ProFeatures />;\n}",
        bugs: [
          {
            id: "loose-check",
            line: 5,
            description: "Only checks for 'free'. A 'cancelled' or 'past_due' user might slip through.",
            fix: "Check if (user.subscription_status !== 'active')",
          },
        ],
      },
      {
        type: "speedQuiz",
        title: "Paywalls Quiz",
        description: "Test your understanding of feature gating",
        questions: [
          {
            id: "q1",
            question: "Where do you store subscription status?",
            options: [
              { id: "a", text: "In localStorage" },
              { id: "b", text: "In profiles table in database" },
              { id: "c", text: "In cookies" },
            ],
            correct: "b",
            timeLimit: 12,
          },
          {
            id: "q2",
            question: "What status means user paid?",
            options: [
              { id: "a", text: "free" },
              { id: "b", text: "active" },
              { id: "c", text: "pending" },
            ],
            correct: "b",
            timeLimit: 12,
          },
        ],
      },
    ],
  },
  {
    id: "webhooks-pro",
    title: "Webhooks for Pro Status",
    slides: [
      {
        type: "text",
        title: "Auto-Upgrade Users After Payment",
        body: "When a user pays for Pro, Stripe should automatically upgrade them. You don't want to manually update each user. Use webhooks to automate this.",
      },
      {
        type: "buildTask",
        title: "Create Stripe Webhook Handler",
        description: "Direct AI to automate upgrades",
        task: "Tell Cursor: 'I need a webhook that listens for Stripe payments. When a user pays, it should automatically update their subscription status in Supabase to active.'",
        expectedOutcome: "Webhook that auto-upgrades users after payment",
        verificationSteps: [
          "AI created the webhook route",
          "It handles the 'checkout.session.completed' event",
          "It updates the database",
        ],
        tips: [
          "Webhooks run in the background",
          "This allows your business to run 24/7",
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Use the Stripe CLI to trigger a mock event (or do a real test purchase). Check Supabase. Did the user upgrade automatically? If yes, your business runs while you sleep.",
        example: "User upgraded.",
      },
      {
        type: "spotTheBug",
        title: "Insecure Webhook",
        description: "This webhook is dangerous. Why?",
        code: "// app/api/webhooks/route.ts\nexport async function POST(req) {\n  const body = await req.json();\n  \n  // ❌ Missing Signature Verification!\n  if (body.type === 'checkout.session.completed') {\n    // Upgrade user\n    await upgradeUser(body.data.object.customer_email);\n  }\n}",
        bugs: [
          {
            id: "no-signature",
            line: 5,
            description: "Anyone can send a fake request to this URL and upgrade themselves for free.",
            fix: "Verify the Stripe-Signature header.",
          },
        ],
      },
      {
        type: "sequenceGame",
        title: "Webhook Upgrade Flow",
        description: "Order the steps of automatic user upgrade",
        items: [
          { id: "stripe-sends", label: "Stripe sends webhook event", correctPosition: 0 },
          { id: "verify", label: "API verifies signature", correctPosition: 1 },
          { id: "find-user", label: "Find user by email", correctPosition: 2 },
          { id: "update", label: "Update subscription_status to active", correctPosition: 3 },
        ],
        hint: "Start with Stripe sending, end with updating",
      },
    ],
  },
];

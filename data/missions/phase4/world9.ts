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
        description: "Use AI to add payment setup",
        task: "In Cursor, use this prompt: 'Help me set up Stripe for my ChatGPT wrapper. I need to: 1) Install Stripe SDK, 2) Add Stripe keys to .env.local, 3) Create a checkout session API route for a Pro subscription ($10/month). Show me the steps.'",
        expectedOutcome: "Stripe set up and ready for checkout",
        verificationSteps: [
          "Stripe SDK installed",
          "Keys added to .env.local",
          "Checkout API route created",
          "Can create checkout sessions",
        ],
        tips: [
          "Use Stripe test mode first",
          "Test with card: 4242 4242 4242 4242",
          "Store keys securely",
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
        description: "Use AI to build the checkout flow",
        task: "In Cursor, use this prompt: 'Create a pricing page for my ChatGPT wrapper with Free (10 messages/month) and Pro ($10/month, unlimited) tiers. When user clicks Upgrade to Pro, create a Stripe checkout session and redirect them. After payment, redirect to /success page.'",
        expectedOutcome: "Pricing page with working Stripe checkout",
        verificationSteps: [
          "Pricing page created",
          "Free and Pro tiers shown",
          "Upgrade button creates checkout session",
          "Redirects to Stripe",
          "Returns to /success after payment",
        ],
        tips: [
          "Use Stripe Checkout Sessions API",
          "Set success_url to /success?session_id={CHECKOUT_SESSION_ID}",
          "Test with card: 4242 4242 4242 4242",
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
        description: "Use AI to add paywall logic",
        task: "In Cursor, use this prompt: 'Add message limits to my ChatGPT wrapper. Check user's subscription_status from profiles table. Free users: show upgrade banner after 10 messages. Pro users: unlimited. Before sending message to OpenAI, check if user has messages left. If free user hit limit, show paywall instead of sending.'",
        expectedOutcome: "Message limits enforced based on subscription",
        verificationSteps: [
          "Checks subscription_status before sending",
          "Free users limited to 10 messages",
          "Pro users unlimited",
          "Upgrade banner shown when limit reached",
          "Message count tracked in database",
        ],
        tips: [
          "Increment message_count in profiles on each message",
          "Check limit before calling OpenAI API",
          "Show friendly upgrade message",
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
        description: "Use AI to build the webhook",
        task: "In Cursor, use this prompt: 'Create a Stripe webhook handler at /api/webhooks/stripe for my ChatGPT wrapper. When checkout.session.completed event fires, find the user by email in Supabase profiles table, update their subscription_status to 'active', and reset their message_count to 0. Always verify the Stripe signature for security.'",
        expectedOutcome: "Webhook that auto-upgrades users after payment",
        verificationSteps: [
          "Webhook route created",
          "Verifies Stripe signature",
          "Handles checkout.session.completed",
          "Finds user by email",
          "Updates subscription_status to active",
          "Resets message_count",
        ],
        tips: [
          "Use Stripe webhook secret from env",
          "Verify signature before processing",
          "Test with Stripe CLI: stripe listen --forward-to localhost:3000/api/webhooks/stripe",
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

import { MissionData } from "../world0";

export const world9Missions: MissionData[] = [
  {
    id: "payment-provider",
    title: "Stripe vs LemonSqueezy",
    slides: [
      {
        type: "text",
        title: "The First Dollar",
        body: "The moment a stranger pays you $1, you are not a coder. You are a professional. We need a payment processor to handle the money. Do not build this yourself.",
      },
      {
        type: "text",
        title: "The Contenders",
        body: "Stripe: The standard. Powerful, huge ecosystem. You handle tax (mostly).\nLemonSqueezy: Merchant of Record. They handle tax for you. Easier for global sales. Pick one.",
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
        type: "checklist",
        title: "Action: Sign Up",
        prompt: "Go to Stripe.com or LemonSqueezy.com and create a test account.",
        items: [
          { id: "1", label: "Create Account" },
          { id: "2", label: "Create a Product (e.g. Pro Plan - $10)" },
          { id: "3", label: "Copy Public/Secret Keys" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Add your keys to .env.local. Do not commit them. Restart your server. You are ready to charge cards.",
        example: "Keys added.",
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
        title: "The Payment Link",
        body: "The fastest way to sell is a Payment Link. You create a product in the dashboard, and it gives you a URL. User clicks -> Pays -> Redirects back. No coding required.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: Create a Pricing component with 3 tiers. When the user clicks Buy on the Pro tier, redirect them to this Stripe Payment Link URL: [PASTE_LINK].",
      },
      {
        type: "checklist",
        title: "The Purchase Flow",
        prompt: "Verify the loop.",
        items: [
          { id: "1", label: "User clicks Buy" },
          { id: "2", label: "Goes to Stripe Checkout" },
          { id: "3", label: "Pays (Test card: 4242 4242 4242 4242)" },
          { id: "4", label: "Returns to your /success page" },
        ],
      },
      {
        type: "miniChallenge",
        title: "Success Check",
        task: "Buy your own product in test mode. Did you get the success confetti? If yes, you are ready for revenue.",
        example: "Purchase successful.",
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
        title: "You Shall Not Pass",
        body: "If they didn't pay, they don't get the AI features. We need a check. Is user a pro member? We store this in the database.",
      },
      {
        type: "text",
        title: "The Schema",
        body: "Add a column to your profiles table: subscription_status (text). Default is free. active means they paid.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: Update my profiles table to include a subscription_status column. Then update the Dashboard UI to show a Upgrade to Pro banner if the status is not active.",
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
        title: "Automating the Upgrade",
        body: "You shouldn't manually update users. Stripe should tell your app User X just paid. We use Webhooks for this.",
      },
      {
        type: "text",
        title: "The Logic",
        body: "1. Stripe sends webhook checkout.session.completed.\n2. Your API reads the email or client_reference_id.\n3. Your API updates Supabase profiles -> subscription_status = active.",
      },
      {
        type: "text",
        title: "Copy This Prompt",
        body: "Prompt: Create a route /api/webhooks/stripe. Verify the Stripe signature using the secret. If event is checkout.session.completed, find the user by email and update their profile in Supabase.",
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

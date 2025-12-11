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
    ],
  },
];

# Stripe One-Time Purchase Setup Guide

This guide will help you configure Stripe for the one-time $149.99 course purchase.

## Prerequisites

- A Stripe account (https://stripe.com)
- Your Stripe product already created
- Your Stripe price ID (from your Stripe dashboard)

## Step 0: Install Stripe Package

First, install the Stripe package:

```bash
npm install stripe
```

Or if you're using yarn:

```bash
yarn add stripe
```

## Step 1: Get Your Stripe API Keys

1. Go to your [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to **Developers** > **API keys**
3. Copy your **Secret key** (starts with `sk_test_` for test mode or `sk_live_` for production)
4. Copy your **Publishable key** (starts with `pk_test_` for test mode or `pk_live_` for production)

## Step 2: Set Up Environment Variables

Add these to your `.env.local` file (or production environment variables):

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_... (your Stripe secret key)
STRIPE_PRICE_ID=price_... (your Stripe price ID)
STRIPE_WEBHOOK_SECRET=whsec_... (your webhook signing secret)
```

**Important:** 
- Use test keys (`sk_test_`, `pk_test_`) during development
- Use live keys (`sk_live_`, `pk_live_`) for production
- Never commit these keys to git
- Add them to your production hosting environment (Vercel, Netlify, etc.)

## Step 3: Set Up Stripe Webhook

### For Local Development:

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Login to Stripe CLI:
   ```bash
   stripe login
   ```
3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
4. Copy the webhook signing secret (starts with `whsec_`) and add it to `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

### For Production:

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/webhooks)
2. Click **Add endpoint**
3. Enter your endpoint URL:
   ```
   https://yourdomain.com/api/webhooks/stripe
   ```
4. Select events to listen for:
   - Under **Checkout** category, select: `checkout.session.completed`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_`) and add it to your production environment variables as `STRIPE_WEBHOOK_SECRET`

## Step 4: Test the Payment Flow

### Test Card Numbers:

Use these test cards in Stripe Checkout:

- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- Use any future expiry date (e.g., 12/25)
- Use any 3-digit CVC

### Testing Steps:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go through the flow:
   - Sign up / Log in
   - Complete onboarding
   - Go to paywall
   - Click "Purchase Now"
   - Use test card `4242 4242 4242 4242`
   - Complete payment

3. Verify:
   - You're redirected to `/payment/success`
   - Your `is_subscribed` status in Supabase is set to `true`
   - You can access the dashboard

## Step 5: Verify Webhook is Working

1. Check Stripe Dashboard > **Developers** > **Webhooks**
2. Look for successful webhook deliveries
3. If webhooks are failing, check:
   - Webhook secret is correct
   - Endpoint URL is accessible
   - Your server logs for errors

## Production Checklist

Before going live:

- [ ] Switch to live Stripe keys (`sk_live_`, `pk_live_`)
- [ ] Set up production webhook endpoint
- [ ] Test with real card (small amount)
- [ ] Verify webhook is receiving events
- [ ] Remove "Skip for Now" button from Paywall (optional)
- [ ] Update success page messaging if needed

## Troubleshooting

### "Failed to create checkout session"
- Check that `STRIPE_SECRET_KEY` is set correctly
- Verify `STRIPE_PRICE_ID` matches your Stripe price ID
- Check server logs for detailed error messages

### Webhook not updating subscription
- Verify `STRIPE_WEBHOOK_SECRET` is correct
- Check webhook endpoint is accessible
- Look at Stripe Dashboard > Webhooks for delivery logs
- Ensure webhook is listening for `checkout.session.completed` event

### Payment succeeds but user can't access dashboard
- Check Supabase `profiles` table - is `is_subscribed` set to `true`?
- Verify webhook is processing correctly
- Check middleware is reading subscription status correctly

## Files Created

- `app/api/checkout/route.ts` - Creates Stripe Checkout session
- `app/api/webhooks/stripe/route.ts` - Handles Stripe webhook events
- `app/payment/success/page.tsx` - Success page after payment
- `components/Paywall.tsx` - Updated with $149.99 pricing and purchase flow

## Support

If you encounter issues:
1. Check Stripe Dashboard logs
2. Check your server logs
3. Verify all environment variables are set
4. Test webhook endpoint manually using Stripe CLI


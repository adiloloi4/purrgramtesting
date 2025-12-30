# Stripe Integration - Final Checklist

## ✅ What's Already Done

- ✅ Stripe webhook endpoint code created
- ✅ Webhook listening to `checkout.session.completed` event
- ✅ All code files created and ready

## ⚠️ What You Need to Do

### 1. Install Stripe Package

Run this command in your terminal:

```bash
npm install stripe
```

### 2. Add Environment Variables

Add these to your **production environment** (Vercel, Netlify, or wherever you're hosting):

```env
STRIPE_SECRET_KEY=sk_live_... (your Stripe secret key)
STRIPE_PRICE_ID=price_... (your Stripe price ID)
STRIPE_WEBHOOK_SECRET=whsec_... (your webhook signing secret)
```

**For local development**, also add these to your `.env.local` file.

### 3. Deploy and Test

1. Deploy your code to production
2. Test the payment flow:
   - Go to `/paywall`
   - Click "Purchase Now"
   - Use a test card: `4242 4242 4242 4242`
   - Complete the payment
   - Verify you're redirected to `/payment/success`
   - Check that `is_subscribed` is set to `true` in Supabase

### 4. Verify Webhook is Working

1. Go to Stripe Dashboard > **Developers** > **Webhooks**
2. Click on your webhook endpoint
3. Check the **Events** tab to see if webhooks are being received
4. Look for successful `checkout.session.completed` events

## 🎯 That's It!

Once you:
1. ✅ Install the Stripe package
2. ✅ Add the environment variables to production
3. ✅ Deploy

Your payment system will be fully functional!

## Quick Test

After deployment, you can test with:
- **Test Card:** `4242 4242 4242 4242`
- **Expiry:** Any future date (e.g., 12/25)
- **CVC:** Any 3 digits (e.g., 123)

The payment should complete and the user should be able to access the dashboard.


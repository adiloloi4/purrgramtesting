# Paywall & Authentication Setup Guide

## Overview
This application implements a **hard paywall** system using Supabase for authentication and subscription management. Users must:
1. Sign up / Log in
2. Complete onboarding
3. Subscribe to access the dashboard

## Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Supabase Service Role (for server-side operations)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

**Note:** You'll need to get your Supabase project URL and API keys from your Supabase dashboard.

## Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL script from `supabase-schema.sql`

This will create:
- `profiles` table with subscription tracking
- Row Level Security policies
- Automatic profile creation on user signup

## Features Implemented

### 1. Authentication
- ✅ Email/Password login
- ✅ Email/Password signup
- ✅ Google OAuth (configured, needs setup in Supabase)
- ✅ Session management with Supabase SSR

### 2. Onboarding Flow
- ✅ Multi-step onboarding after signup
- ✅ User preference collection
- ✅ Automatic redirect to paywall after completion

### 3. Hard Paywall
- ✅ Middleware protection for `/dashboard` routes
- ✅ Subscription check on every dashboard access
- ✅ Automatic redirect to `/paywall` if not subscribed
- ✅ Paywall component with Stripe link placeholder

### 4. Route Protection
- ✅ `/dashboard` - Requires auth + subscription
- ✅ `/onboarding` - Requires auth, redirects if completed
- ✅ `/paywall` - Requires auth + completed onboarding
- ✅ `/login` & `/signup` - Public routes

## Stripe Integration (Next Step)

The paywall component has a placeholder for Stripe checkout. To implement:

1. Get your Stripe keys from Stripe Dashboard
2. Update `.env.local`:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```
3. Replace the Stripe link in `components/Paywall.tsx` with your actual checkout link
4. Set up webhook to update `is_subscribed` in profiles table when payment succeeds

## Testing the Flow

1. **Sign Up**: Go to `/signup` → Creates user + profile
2. **Onboarding**: Automatically redirected → Complete steps
3. **Paywall**: Redirected after onboarding → Shows subscription option
4. **Dashboard**: Blocked until `is_subscribed = true` in database

## Manual Subscription Testing

To test without Stripe, manually update the database:

```sql
UPDATE profiles 
SET is_subscribed = true 
WHERE email = 'your-test-email@example.com';
```

## Files Created/Modified

- `lib/supabase/client.ts` - Browser Supabase client
- `lib/supabase/server.ts` - Server Supabase client
- `lib/supabase/middleware.ts` - Middleware Supabase client
- `middleware.ts` - Route protection & subscription checks
- `app/(marketing)/login/page.tsx` - Login with Supabase
- `app/(marketing)/signup/page.tsx` - Signup with Supabase
- `app/(marketing)/onboarding/page.tsx` - Onboarding flow
- `app/(marketing)/paywall/page.tsx` - Paywall page
- `components/Paywall.tsx` - Paywall component
- `app/auth/callback/route.ts` - OAuth callback handler
- `app/api/auth/check-subscription/route.ts` - Subscription check API
- `supabase-schema.sql` - Database schema

## Next Steps

1. ✅ Set up environment variables
2. ✅ Run database schema SQL
3. ⏳ Configure Stripe checkout link
4. ⏳ Set up Stripe webhook to update subscriptions
5. ⏳ Test the complete flow


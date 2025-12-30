# Google OAuth Setup Guide

This guide will help you configure Google OAuth authentication in your Supabase project.

## Prerequisites

- A Supabase project (already set up)
- A Google Cloud Platform (GCP) account
- Access to your Supabase dashboard

## Step 1: Create Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. If prompted, configure the OAuth consent screen:
   - Choose **External** user type
   - Fill in the required fields (App name, User support email, Developer contact)
   - Add your email to test users if needed
   - Save and continue through the scopes and test users screens
6. For **Application type**, select **Web application**
7. Add **Authorized redirect URIs**:
   - `https://<your-project-ref>.supabase.co/auth/v1/callback`
   - Replace `<your-project-ref>` with your Supabase project reference (found in your Supabase dashboard URL)
   - Example: `https://abcdefghijklmnop.supabase.co/auth/v1/callback`
8. Click **Create**
9. Copy the **Client ID** and **Client Secret**

## Step 2: Configure Google OAuth in Supabase

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Navigate to **Authentication** > **Providers**
4. Find **Google** in the list and click on it
5. Toggle **Enable Google provider**
6. Enter your **Client ID** (from Step 1)
7. Enter your **Client Secret** (from Step 1)
8. Click **Save**

## Step 3: Test Google OAuth

1. Go to your application's login or signup page
2. Click **Continue with Google**
3. You should be redirected to Google's sign-in page
4. After signing in, you'll be redirected back to your app
5. The user should be automatically created and redirected to onboarding

## Troubleshooting

### "redirect_uri_mismatch" Error

- Make sure the redirect URI in Google Cloud Console exactly matches: `https://<your-project-ref>.supabase.co/auth/v1/callback`
- The project reference is found in your Supabase dashboard URL

### User Not Created

- Check that your database trigger `handle_new_user()` is properly set up
- Verify RLS policies allow profile creation
- Check Supabase logs for any errors

### Name Not Extracted from Google

- The callback route automatically extracts the name from Google's user metadata
- If the name is missing, it will be `null` and the user can set it during onboarding

## Additional Notes

- Google OAuth works for both login and signup
- New users signing in with Google will be automatically redirected to onboarding
- Existing users will be redirected based on their onboarding and subscription status
- The user's name from Google will be automatically extracted and saved to their profile


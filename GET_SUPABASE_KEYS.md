# How to Get Your Supabase API Keys

## ⚠️ Important: You Need Supabase Keys, Not LemonSqueezy Keys

The keys you showed (`sb_publishable_...` and `sb_secret_...`) are **LemonSqueezy payment keys**, not Supabase authentication keys.

## Step-by-Step Guide

### 1. Go to Your Supabase Project Settings

1. Go to https://supabase.com/dashboard
2. Click on your project
3. Click **Settings** (gear icon) in the left sidebar
4. Click **API** under Project Settings

### 2. Find "Project API keys" Section

Look for a section called **"Project API keys"** (NOT "LemonSqueezy" or payment keys).

You should see:
- **anon** **public** - This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **service_role** **secret** - This is your `SUPABASE_SERVICE_ROLE_KEY`

### 3. Copy the Keys

**For `NEXT_PUBLIC_SUPABASE_ANON_KEY`:**
- Find the **"anon" "public"** key
- It's a very long string (200+ characters)
- Starts with `eyJ...` (it's a JWT token)
- Click the eye icon 👁️ to reveal it
- Copy the entire key

**For `SUPABASE_SERVICE_ROLE_KEY`:**
- Find the **"service_role" "secret"** key
- Also very long (200+ characters)
- Starts with `eyJ...`
- ⚠️ **Keep this secret!** Never expose it in client-side code
- Click the eye icon 👁️ to reveal it
- Copy the entire key

### 4. Update Your `.env.local` File

Open `.env.local` and replace the keys:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... (paste your full anon key here)

# Supabase Service Role (for server-side operations)
SUPABASE_SERVICE_ROLE_KEY=eyJ... (paste your full service_role key here)
```

### 5. Restart Your Dev Server

```bash
# Stop the server (Ctrl+C)
npm run dev
```

## Key Differences

| Type | Format | Use Case |
|------|--------|----------|
| **Supabase anon key** | `eyJ...` (200+ chars) | Authentication, database access |
| **Supabase service_role** | `eyJ...` (200+ chars) | Server-side operations |
| **LemonSqueezy publishable** | `sb_publishable_...` | Payment processing (use later) |
| **LemonSqueezy secret** | `sb_secret_...` | Payment webhooks (use later) |

## Visual Guide

In your Supabase dashboard, you should see something like:

```
Project API keys
┌─────────────────────────────────────────┐
│ anon public                             │
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... │ 👁️
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ service_role secret                      │
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... │ 👁️
└─────────────────────────────────────────┘
```

## Still Can't Find It?

1. Make sure you're in the **API** settings, not payment/billing settings
2. Look for "Project API keys" or "API Settings"
3. The keys should be very long (200+ characters)
4. They should start with `eyJ...` (JWT format)

## Need Help?

If you can't find the keys, take a screenshot of your Supabase API settings page and I can help you locate them!


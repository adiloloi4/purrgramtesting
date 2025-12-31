# Admin Setup Guide

## Adding Admin Field to Database

First, add the `is_admin` column to your `profiles` table in Supabase:

```sql
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE;
```

## Setting a User as Admin

To make a user an admin, update their profile in Supabase:

### Option 1: Via Supabase Dashboard
1. Go to your Supabase Dashboard
2. Navigate to **Table Editor** > **profiles**
3. Find the user you want to make admin
4. Edit the row and set `is_admin` to `true`
5. Save

### Option 2: Via SQL Editor
```sql
-- Replace 'user-email@example.com' with the actual user email
UPDATE profiles 
SET is_admin = true 
WHERE email = 'user-email@example.com';
```

Or by user ID:
```sql
-- Replace 'user-id-here' with the actual user ID
UPDATE profiles 
SET is_admin = true 
WHERE id = 'user-id-here';
```

## Features for Admins

Admins have access to:
- **Unlock All** button on the course page - unlocks all worlds, missions, and awards XP

## Security Note

The admin check is done client-side for UI display. For production, you should also add server-side checks if you add admin-only API endpoints in the future.


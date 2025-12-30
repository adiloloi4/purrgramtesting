import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const origin = requestUrl.origin;

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Check if user has completed onboarding and subscription
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    // Extract name from Google OAuth metadata if available
    const googleName = user.user_metadata?.full_name || 
                       user.user_metadata?.name || 
                       user.user_metadata?.display_name ||
                       null;

    const { data: profile } = await supabase
      .from('profiles')
      .select('onboarding_completed, is_subscribed, name')
      .eq('id', user.id)
      .single();

    if (!profile) {
      // Create profile if it doesn't exist (should be created by trigger, but handle edge case)
      await supabase.from('profiles').insert({
        id: user.id,
        email: user.email,
        name: googleName,
        onboarding_completed: false,
        is_subscribed: false,
      });
      return NextResponse.redirect(`${origin}/onboarding`);
    }

    // Update profile name if we have Google name and profile doesn't have a name
    if (googleName && !profile.name) {
      await supabase
        .from('profiles')
        .update({ name: googleName })
        .eq('id', user.id);
    }

    // Flow: onboarding → paywall → dashboard
    if (!profile.onboarding_completed) {
      return NextResponse.redirect(`${origin}/onboarding`);
    }

    if (!profile.is_subscribed) {
      return NextResponse.redirect(`${origin}/paywall`);
    }

    return NextResponse.redirect(`${origin}/dashboard`);
  }

  return NextResponse.redirect(`${origin}/login`);
}


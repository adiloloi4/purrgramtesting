import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { subscribed: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Check subscription status from profiles table
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('is_subscribed')
      .eq('id', user.id)
      .single();

    if (profileError) {
      // If profile doesn't exist, create it
      const { error: insertError } = await supabase
        .from('profiles')
        .insert({
          id: user.id,
          email: user.email,
          is_subscribed: false,
        });

      if (insertError) {
      }

      return NextResponse.json({ subscribed: false });
    }

    return NextResponse.json({ 
      subscribed: profile?.is_subscribed || false 
    });
  } catch (error) {
    return NextResponse.json(
      { subscribed: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}


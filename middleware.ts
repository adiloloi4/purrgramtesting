import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets (images, etc.)
  if (pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|woff|woff2|ttf|eot)$/i)) {
    return NextResponse.next();
  }

  // Always allow landing page (no auth required)
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Allow auth routes (no auth check needed)
  if (pathname.startsWith('/login') || pathname.startsWith('/signup')) {
    return NextResponse.next();
  }

  // Allow auth callback
  if (pathname.startsWith('/auth/callback')) {
    return NextResponse.next();
  }

  // Allow terms and privacy routes
  if (pathname === '/terms' || pathname === '/privacy') {
    return NextResponse.next();
  }

  // Allow API routes
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Update Supabase session
  const sessionResult = await updateSession(request);
  
  // Handle case where env vars are missing (returns NextResponse directly)
  if (sessionResult instanceof NextResponse) {
    return sessionResult;
  }

  const { supabaseResponse, supabase } = sessionResult;

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If not authenticated, redirect to login (except for allowed routes above)
  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // User is authenticated - check their flow status
  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_completed, is_subscribed')
    .eq('id', user.id)
    .single();

  // Handle protected routes based on user status
  if (pathname.startsWith('/dashboard')) {
    // If onboarding not completed → redirect to onboarding
    if (!profile?.onboarding_completed) {
      const url = request.nextUrl.clone();
      url.pathname = '/onboarding';
      return NextResponse.redirect(url);
    }

    // If not subscribed → redirect to paywall
    if (!profile?.is_subscribed) {
      const url = request.nextUrl.clone();
      url.pathname = '/paywall';
      return NextResponse.redirect(url);
    }

    // User has completed onboarding and paywall → allow dashboard access
    return supabaseResponse;
  }

  if (pathname.startsWith('/onboarding')) {
    // If already completed onboarding → redirect to paywall or dashboard
    if (profile?.onboarding_completed) {
      const url = request.nextUrl.clone();
      if (profile?.is_subscribed) {
        url.pathname = '/dashboard';
      } else {
        url.pathname = '/paywall';
      }
      return NextResponse.redirect(url);
    }
    // Allow onboarding if not completed
    return supabaseResponse;
  }

  if (pathname.startsWith('/paywall')) {
    // If onboarding not completed → redirect to onboarding
    if (!profile?.onboarding_completed) {
      const url = request.nextUrl.clone();
      url.pathname = '/onboarding';
      return NextResponse.redirect(url);
    }

    // If already subscribed → redirect to dashboard
    if (profile?.is_subscribed) {
      const url = request.nextUrl.clone();
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }

    // Allow paywall if onboarding done but not subscribed
    return supabaseResponse;
  }

  // For any other route, if user is logged in and completed flow → redirect to dashboard
  if (profile?.onboarding_completed && profile?.is_subscribed) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // Block all other routes - redirect to 404
  if (pathname === '/not-found') {
    return supabaseResponse;
  }
  
  const url = request.nextUrl.clone();
  url.pathname = '/not-found';
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg (favicon files)
     * - robots.txt, sitemap.xml (SEO files)
     * - manifest.json (PWA manifest)
     * - logo.png and other public assets
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|manifest.json|logo.png|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.gif|.*\\.webp).*)',
  ],
};


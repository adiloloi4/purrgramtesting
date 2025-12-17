import { useAuth } from '@/contexts/AuthContext';

/**
 * Convenience hook for accessing user data
 * Returns user, profile, and common derived values
 */
export function useUser() {
  const { user, profile, loading } = useAuth();

  return {
    user,
    profile,
    loading,
    isAuthenticated: !!user,
    isSubscribed: profile?.is_subscribed ?? false,
    hasCompletedOnboarding: profile?.onboarding_completed ?? false,
    userName: profile?.name || user?.email?.split('@')[0] || 'User',
    userEmail: user?.email || profile?.email || null,
  };
}


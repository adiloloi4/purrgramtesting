"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';

type Profile = {
  id: string;
  email: string | null;
  name: string | null;
  onboarding_completed: boolean;
  is_subscribed: boolean;
  created_at?: string;
  updated_at?: string;
};

type AuthContextType = {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signOut: async () => {},
  refreshProfile: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchProfile = async (userId: string, userEmail?: string | null) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        // If profile doesn't exist, create it
        const { data: newProfile, error: insertError } = await supabase
          .from('profiles')
          .insert({
            id: userId,
            email: userEmail || null,
            onboarding_completed: false,
            is_subscribed: false,
          })
          .select()
          .single();

        if (!insertError && newProfile) {
          setProfile(newProfile as Profile);
        }
      } else {
        setProfile(data as Profile);
      }
    } catch (err) {
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id, user.email);
    }
  };

  useEffect(() => {
    let mounted = true;
    
    // Set a timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      if (mounted) {
        setLoading(false);
      }
    }, 3000); // Max 3 seconds for initial load

    // Get initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!mounted) return;
      clearTimeout(loadingTimeout);
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchProfile(session.user.id, session.user.email);
        // Load course progress on initial load
        if (typeof window !== 'undefined') {
          const { useCourseStore } = await import('@/store/courseStore');
          useCourseStore.getState().loadFromDatabase();
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) {
        clearTimeout(loadingTimeout);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      clearTimeout(loadingTimeout);
    };

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchProfile(session.user.id, session.user.email);
        // Load course progress when user logs in
        if (typeof window !== 'undefined') {
          const { useCourseStore } = await import('@/store/courseStore');
          useCourseStore.getState().loadFromDatabase();
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      // Sign out from Supabase - this will clear cookies when using @supabase/ssr
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
        throw error;
      }
      // Clear local state
      setUser(null);
      setProfile(null);
    } catch (error) {
      console.error('Sign out failed:', error);
      // Still clear local state even if there's an error
      setUser(null);
      setProfile(null);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}


"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, ArrowRight, Rocket, User } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setIsLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        setIsLoading(false);
        return;
      }

      // Check if user is automatically logged in (email confirmation disabled)
      if (data.session && data.user) {
        // User is logged in immediately - update profile and redirect
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ name: name })
          .eq('id', data.user.id);

        if (updateError) {
        }

        // Refresh router to ensure auth context picks up the session
        router.refresh();
        // Redirect to onboarding
        router.push('/onboarding');
        return;
      }

      // If email confirmation is required, user needs to confirm email first
      if (data.user && !data.session) {
        setError('Please check your email to confirm your account before continuing.');
        setIsLoading(false);
        return;
      }

      // Fallback: if we have a user but no session, try to get session
      if (data.user) {
        // Wait a moment for profile creation
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Try to update profile
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ name: name })
          .eq('id', data.user.id);

        if (updateError) {
        }

        // Check if we can get a session now
        const { data: { session: newSession } } = await supabase.auth.getSession();
        
        if (newSession) {
          router.push('/onboarding');
        } else {
          setError('Please check your email to confirm your account.');
          setIsLoading(false);
        }
      } else {
        setError('Signup failed. Please try again.');
        setIsLoading(false);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (oauthError) {
        setError(oauthError.message);
        setIsLoading(false);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
            <img src="/logo.png" alt="Purrgram" className="h-10 w-auto" />
            <span className="text-xl font-light text-white tracking-wide">Purrgram</span>
          </Link>
          <Link href="/login" className="text-sm font-light text-white/60 hover:text-white transition-colors">
            Already have an account? <span className="text-purple-400">Sign in</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-24 relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Rocket className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extralight text-white mb-2 tracking-tight">
                Start your journey
              </h1>
              <p className="text-white/60 font-light">
                Join thousands of vibe coders building the future
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-light text-white/80">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 focus:ring-purple-500/20"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-light text-white/80">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 focus:ring-purple-500/20"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-light text-white/80">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 focus:ring-purple-500/20"
                  />
                </div>
                <p className="text-xs text-white/40 font-light">At least 8 characters</p>
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-light text-white/80">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 focus:ring-purple-500/20"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-xl h-12"
              >
                {isLoading ? 'Creating account...' : 'Create account'}
                {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/5 text-white/40 font-light">Or continue with</span>
              </div>
            </div>

            {/* Google Signup */}
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleGoogleSignup}
              disabled={isLoading}
              className="w-full border-white/10 hover:bg-white/10 text-white font-light rounded-xl h-12"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-white/40 font-light">
                Already have an account?{' '}
                <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Terms */}
            <div className="mt-6 text-center">
              <p className="text-xs text-white/30 font-light">
                By signing up, you agree to our{' '}
                <Link href="/terms" className="text-white/50 hover:text-white transition-colors underline">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-white/50 hover:text-white transition-colors underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}


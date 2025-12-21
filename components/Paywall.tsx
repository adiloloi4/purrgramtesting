"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Lock, Zap, Star, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

interface PaywallProps {
  title?: string;
  description?: string;
}

export default function Paywall({ 
  title = "Unlock Full Access",
  description = "Subscribe to access all features and content."
}: PaywallProps) {
  const router = useRouter();
  const { refreshProfile } = useAuth();

  const handleSubscribe = async () => {
    // TODO: Replace with actual Stripe checkout link
    // After successful payment, Stripe webhook will update is_subscribed
    // Then user will be redirected back and can access dashboard
    window.location.href = 'https://buy.stripe.com/your-link-here';
  };

  const handleSkipPaywall = async () => {
    // Skip paywall for now (development/testing)
    const { createClient } = await import('@/lib/supabase/client');
    const supabase = createClient();
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from('profiles')
      .update({ is_subscribed: true })
      .eq('id', user.id);

    if (error) {
      return;
    }

    await refreshProfile();
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 bg-purple-500/10 rounded-bl-2xl border-b border-l border-purple-500/20 text-purple-300 text-xs font-medium uppercase tracking-wider">
            Premium
          </div>

          <div className="text-center mb-10 relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-purple-500/20 border border-purple-500/30 mb-6"
            >
              <Lock className="w-10 h-10 text-purple-400" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-white/60 font-light text-lg leading-relaxed max-w-xl mx-auto mb-6">
              {description}
            </p>
          </div>

          <div className="space-y-6 max-w-xl mx-auto relative z-10">
            <div className="p-8 rounded-xl bg-white/5 border border-white/10">
              <div className="text-center mb-6">
                <div className="text-5xl font-light text-white mb-2">$80</div>
                <div className="text-sm text-white/60 font-light uppercase tracking-wider">Lifetime Access</div>
              </div>
              <ul className="space-y-3 text-sm text-white/70 font-light">
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Full course access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>All worlds & missions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>AI workflows & tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Community access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>All future updates</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleSubscribe}
                size="lg"
                className="w-full bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-lg h-14 text-lg"
              >
                Subscribe Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={handleSkipPaywall}
                variant="ghost"
                size="lg"
                className="w-full text-white/60 hover:text-white font-light border border-white/10 hover:bg-white/5"
              >
                Skip for Now (Development)
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Lock, Zap, Star, ArrowRight, Sparkles, Tag } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

interface PaywallProps {
  title?: string;
  description?: string;
}

export default function Paywall({ 
  title = "Unlock Full Access",
  description = "Get lifetime access to the complete Purrgram course."
}: PaywallProps) {
  const router = useRouter();
  const { refreshProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          promotionCode: 'LAUNCH50', // Apply launch50 coupon automatically
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setIsLoading(false);
    }
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
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}
            
            {/* Coupon Code Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-center">
              <div className="flex items-center justify-center gap-2 text-purple-300 font-medium">
                <Tag className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider">Use Code: <span className="font-bold text-white">LAUNCH50</span> for 50% off</span>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white/5 border border-white/10">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl font-light text-white/40 line-through">$149.99</span>
                  <div className="text-5xl font-light text-white">$74.99</div>
                </div>
                <div className="text-sm text-white/60 font-light uppercase tracking-wider">One-Time Payment</div>
                <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium">
                  <Sparkles className="w-3 h-3" />
                  50% OFF - Launch Special
                </div>
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
                onClick={handlePurchase}
                disabled={isLoading}
                size="lg"
                className="w-full bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-lg h-14 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Processing...' : 'Purchase Now'}
                {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

function PaymentSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { refreshProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        router.push('/paywall');
        return;
      }

      try {
        // Verify payment directly with Stripe and update subscription
        const response = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }),
        });

        const data = await response.json();

        if (!response.ok) {
          // If verification fails, wait a bit for webhook and try again
          await new Promise(resolve => setTimeout(resolve, 3000));
          await refreshProfile();
        } else {
          // Payment verified, refresh profile to get updated status
          await refreshProfile();
        }
      } catch (error) {
        // On error, wait for webhook and refresh
        await new Promise(resolve => setTimeout(resolve, 3000));
        await refreshProfile();
      }

      setIsLoading(false);
    };

    verifyPayment();
  }, [sessionId, router, refreshProfile]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white/60">Verifying payment...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md text-center"
      >
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-400" />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
            Payment Successful!
          </h1>
          
          <p className="text-white/60 font-light text-lg leading-relaxed mb-8">
            Thank you for your purchase. You now have lifetime access to the complete Purrgram course.
          </p>

          <Button
            onClick={() => router.push('/dashboard')}
            size="lg"
            className="w-full bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-lg h-12"
          >
            Go to Dashboard
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white/60">Loading...</div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}


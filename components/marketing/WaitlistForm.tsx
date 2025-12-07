"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("https://formspree.io/f/mpwlljgn", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-3"
      >
        <div className="p-1 rounded-full bg-green-500/20">
            <Check className="w-4 h-4" />
        </div>
        <span className="font-medium">You're on the list! We'll vibe soon.</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <Input 
        type="email" 
        placeholder="enter@your.vibe" 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all rounded-lg"
      />
      <Button 
        type="submit" 
        disabled={status === 'loading'}
        className="h-12 px-8 bg-white text-black hover:bg-slate-200 font-medium rounded-lg whitespace-nowrap"
      >
        {status === 'loading' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
            <>
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
            </>
        )}
      </Button>
      {status === 'error' && (
          <p className="text-red-400 text-sm absolute -bottom-6 left-0 w-full text-center">
              Something went wrong. Try again?
          </p>
      )}
    </form>
  );
};


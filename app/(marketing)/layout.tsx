'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header 
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'border-b border-white/10 bg-black/40 backdrop-blur-xl' 
            : 'border-b border-transparent bg-transparent backdrop-blur-none'
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
                <img src="/logo.png" alt="Purrgram" className="h-10 w-auto" />
                <span className="text-xl font-light text-white tracking-wide">Purrgram</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                <Link href="#features" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    Features
                </Link>
                <Link href="#comparison" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    Comparison
                </Link>
                <Link href="#philosophy" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    Philosophy
                </Link>
                <Link href="#how-it-works" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    How It Works
                </Link>
                <Link href="#course-teaser" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    Curriculum
                </Link>
                <Link href="#faq" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    FAQ
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                 <Link href="#hero">
                    <Button variant="outline" size="sm" className="border-white/20 bg-transparent hover:bg-white/10 text-white font-light">
                        Join Waitlist
                    </Button>
                 </Link>
            </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-white/5 bg-black py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex items-center gap-2">
                 <img src="/logo.png" alt="Purrgram" className="h-8 w-auto" />
                 <span className="text-xl font-light text-white tracking-wide">Purrgram</span>
                 <span className="text-sm text-white/40 font-light">© 2024 Purrgram. All rights reserved.</span>
             </div>
             <div className="flex gap-6 text-sm text-white/40 font-light">
                 <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                 <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                 <Link href="#" className="hover:text-white transition-colors">Discord</Link>
             </div>
        </div>
      </footer>
    </div>
  );
}

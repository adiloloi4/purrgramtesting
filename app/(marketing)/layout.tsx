import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/branding/Logo';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity">
                <Logo variant="minimal" />
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
                <Link href="#features" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    Features
                </Link>
                <Link href="#how-it-works" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    How It Works
                </Link>
                <Link href="#curriculum" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    Curriculum
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
                 <Logo showText={true} variant="minimal" className="scale-75 origin-left" />
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

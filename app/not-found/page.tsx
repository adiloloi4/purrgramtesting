import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-extralight mb-4 tracking-tight">404</h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extralight mb-6 tracking-tight">
          Page not found
        </h2>
        
        <p className="text-white/60 text-lg font-light mb-12 leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back to the vibe.
        </p>
        
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white font-light group"
        >
          <Home className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform" />
          <span>Back to Home</span>
        </Link>
        
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-white/40 text-sm font-light">
            Purrgram - Vibe Coding Platform
          </p>
        </div>
      </div>
    </div>
  );
}


"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, LayoutDashboard } from 'lucide-react';
import { useCourseStore } from '@/store/courseStore';

export default function DashboardHome() {
  const { xp, currentStreak } = useCourseStore();

  return (
    <div className="max-w-4xl mx-auto py-12 text-white">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-extralight mb-4 tracking-tight">
          Welcome back, <span className="font-normal text-white">Vibe Coder</span>.
        </h1>
        <div className="flex items-center gap-4 text-white/40 font-light text-lg">
            <span>Day {currentStreak} Streak</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{xp} XP Earned</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-white/10 text-white/80 group-hover:text-white group-hover:bg-purple-500/20 transition-colors">
                  <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-light text-white tracking-wide">Continue The Journey</h2>
           </div>
           <p className="text-white/40 mb-8 font-light leading-relaxed h-12">
              Pick up where you left off on the Vibe Coding Course map. Your next breakthrough awaits.
           </p>
           <Link href="/dashboard/course">
              <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-xl">
                  Enter The Game Map
                  <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
           </Link>
        </div>

        <div className="p-8 rounded-3xl bg-transparent border border-white/5 flex flex-col justify-center items-center text-center opacity-60 hover:opacity-100 transition-opacity">
           <div className="p-2 rounded-full bg-white/5 text-white/20 mb-6">
                <LayoutDashboard className="w-5 h-5" />
           </div>
           <h2 className="text-xl font-light text-white/60 mb-2 tracking-wide">Projects Dashboard</h2>
           <p className="text-white/30 mb-8 font-light text-sm">Coming soon. Track your SaaS builds here.</p>
           <Button variant="outline" disabled className="w-full border-white/10 text-white/40 bg-transparent rounded-xl">
               Locked
           </Button>
        </div>
      </div>
    </div>
  );
}

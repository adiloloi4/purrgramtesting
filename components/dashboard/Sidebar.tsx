"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, Flame, Trophy, Lock, Shield, LayoutDashboard } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useCourseStore } from '@/store/courseStore';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const Sidebar = () => {
  const pathname = usePathname();
  const { currentStreak, xp, completedWorlds } = useCourseStore();

  const level = Math.floor(xp / 500) + 1;
  const nextLevelXp = level * 500;
  const currentLevelProgress = ((xp - (level - 1) * 500) / 500) * 100;
  
  const hasFounderBadge = completedWorlds.includes(9);

  const navItems = [
    { href: '/dashboard', label: 'Home', icon: Home },
    { href: '/dashboard/course', label: 'Vibe Coding Course', icon: Map },
    { href: '#', label: 'Projects (Coming Soon)', icon: LayoutDashboard, disabled: true },
  ];

  return (
    <div className="flex flex-col h-screen w-64 bg-black/80 border-r border-white/10 backdrop-blur-xl fixed left-0 top-0 overflow-y-auto z-50">
      <div className="p-6 border-b border-white/10">
        <Link href="/dashboard" className="flex items-center gap-2">
          <img src="/logo.png" alt="Purrgram" className="h-10 w-auto" />
          <span className="text-xl font-light text-white tracking-wide">Purrgram</span>
        </Link>
      </div>

      <div className="flex-1 px-4 space-y-8">
        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.disabled ? '#' : item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-light transition-all duration-200",
                  isActive 
                    ? "bg-white/10 text-white border border-white/10 shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]" 
                    : "text-white/60 hover:text-white hover:bg-white/5",
                   item.disabled && "opacity-40 cursor-not-allowed pointer-events-none"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-purple-300" : "text-white/40")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Gamification Stats */}
        <div className="space-y-6 px-2">
            <div>
                <h3 className="text-[10px] font-medium text-white/40 uppercase tracking-widest mb-4">Your Vibe</h3>
                
                {/* Streak */}
                <div className="flex items-center gap-3 mb-4 p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/30 transition-colors">
                    <div className="p-2.5 rounded-lg bg-orange-500/20">
                        <Flame className="w-5 h-5 text-orange-400 fill-orange-500/30" />
                    </div>
                    <div className="flex-1">
                        <div className="text-2xl font-light text-white leading-none mb-1">{currentStreak}</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Day Streak</div>
                    </div>
                </div>

                {/* Level & XP */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium tracking-wide text-white">Level {level}</span>
                        </div>
                        <span className="text-xs text-white/50 font-mono">{xp} XP</span>
                    </div>
                    <Progress value={currentLevelProgress} className="h-2 bg-white/10 mb-2" />
                    <div className="text-[10px] text-white/40 text-right font-mono">Next: {nextLevelXp} XP</div>
                </div>
            </div>

            {/* Badges */}
            <div>
                <h3 className="text-[10px] font-medium text-white/40 uppercase tracking-widest mb-3">Badges</h3>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className={cn(
                                "flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer hover:scale-[1.02]",
                                hasFounderBadge 
                                    ? "bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/30 shadow-[0_0_20px_-5px_rgba(234,179,8,0.3)]" 
                                    : "bg-white/5 border-white/10 opacity-60"
                            )}>
                                <div className={cn(
                                    "p-2.5 rounded-lg",
                                    hasFounderBadge ? "bg-yellow-500/20" : "bg-white/10"
                                )}>
                                    {hasFounderBadge ? (
                                        <Shield className="w-5 h-5 text-yellow-400" />
                                    ) : (
                                        <Lock className="w-5 h-5 text-white/40" />
                                    )}
                                </div>
                                <div className="text-left flex-1">
                                    <div className={cn(
                                        "text-sm font-medium tracking-wide mb-1",
                                        hasFounderBadge ? "text-yellow-400" : "text-white/60"
                                    )}>
                                        Founder Badge
                                    </div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wider">
                                        {hasFounderBadge ? "Unlocked" : "Complete World 9"}
                                    </div>
                                </div>
                            </div>
                        </TooltipTrigger>
                        {!hasFounderBadge && (
                            <TooltipContent side="right" className="bg-black border border-white/10 text-white text-xs p-3 rounded-lg">
                                <p>Unlock this badge by completing World 9: The Launch</p>
                            </TooltipContent>
                        )}
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Map, Flame, Trophy, Lock, Shield, LayoutDashboard } from 'lucide-react';
import { Logo } from '@/components/branding/Logo';
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
    <div className="flex flex-col h-screen w-64 bg-black/60 border-r border-white/10 backdrop-blur-xl fixed left-0 top-0 overflow-y-auto z-50">
      <div className="p-6">
        <Logo variant="minimal" />
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
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-light transition-colors",
                  isActive 
                    ? "bg-white/10 text-white border border-white/10" 
                    : "text-white/60 hover:text-white hover:bg-white/5",
                   item.disabled && "opacity-40 cursor-not-allowed pointer-events-none"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-purple-400" : "text-white/40")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Gamification Stats */}
        <div className="space-y-6">
            <div className="px-2">
                <h3 className="text-[10px] font-medium text-white/40 uppercase tracking-widest mb-4">Your Vibe</h3>
                
                {/* Streak */}
                <div className="flex items-center gap-3 mb-6 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="p-2 rounded-full bg-orange-500/10">
                        <Flame className="w-4 h-4 text-orange-500 fill-orange-500/20" />
                    </div>
                    <div>
                        <div className="text-xl font-light text-white leading-none">{currentStreak}</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">Day Streak</div>
                    </div>
                </div>

                {/* Level & XP */}
                <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-end">
                        <div className="flex items-center gap-2 text-purple-400">
                            <Trophy className="w-3 h-3" />
                            <span className="text-xs font-medium tracking-wide text-white/80">Level {level}</span>
                        </div>
                        <span className="text-[10px] text-white/40 font-mono">{xp} XP</span>
                    </div>
                    <Progress value={currentLevelProgress} className="h-1 bg-white/10" />
                    <div className="text-[9px] text-white/30 text-right font-mono mt-1">Next: {nextLevelXp}</div>
                </div>
            </div>

            {/* Badges */}
            <div className="px-2">
                <h3 className="text-[10px] font-medium text-white/40 uppercase tracking-widest mb-3">Badges</h3>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className={cn(
                                "flex items-center gap-3 p-3 rounded-lg border transition-all",
                                hasFounderBadge 
                                    ? "bg-yellow-500/5 border-yellow-500/20" 
                                    : "bg-white/5 border-white/5 opacity-60"
                            )}>
                                <div className={cn(
                                    "p-1.5 rounded-full",
                                    hasFounderBadge ? "bg-yellow-500/10" : "bg-white/5"
                                )}>
                                    {hasFounderBadge ? (
                                        <Shield className="w-4 h-4 text-yellow-500" />
                                    ) : (
                                        <Lock className="w-4 h-4 text-white/40" />
                                    )}
                                </div>
                                <div className="text-left">
                                    <div className={cn(
                                        "text-xs font-medium tracking-wide",
                                        hasFounderBadge ? "text-yellow-500" : "text-white/60"
                                    )}>
                                        Founder
                                    </div>
                                    <div className="text-[9px] text-white/30 uppercase tracking-wider mt-0.5">
                                        {hasFounderBadge ? "Unlocked" : "World 9"}
                                    </div>
                                </div>
                            </div>
                        </TooltipTrigger>
                        {!hasFounderBadge && (
                            <TooltipContent side="right" className="bg-black border border-white/10 text-white text-xs">
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

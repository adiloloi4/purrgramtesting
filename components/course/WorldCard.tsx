"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Sparkles, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { World } from '@/data/curriculum';

type WorldCardProps = {
  world: World;
  phaseTitle: string;
  status: "locked" | "unlocked" | "completed";
  onClick?: () => void;
};

export const WorldCard: React.FC<WorldCardProps> = ({ world, phaseTitle, status, onClick }) => {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";
  const isUnlocked = status === "unlocked";

  return (
    <motion.div
      whileHover={!isLocked ? { scale: 1.02 } : {}}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
      className={cn("relative w-full max-w-md mx-auto", isLocked && "opacity-60 grayscale")}
    >
      <Card
        onClick={!isLocked ? onClick : undefined}
        className={cn(
          "cursor-pointer overflow-hidden border transition-all duration-300",
          // Locked styles
          isLocked && "bg-slate-900/50 border-slate-800 cursor-not-allowed",
          // Unlocked styles
          isUnlocked && "bg-slate-900/80 border-purple-500/50 shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] hover:border-purple-500 hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.4)]",
          // Completed styles
          isCompleted && "bg-slate-900/80 border-green-500/30 shadow-[0_0_20px_-5px_rgba(34,197,94,0.2)]"
        )}
      >
        <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300",
            isUnlocked && "from-purple-500/10 via-transparent to-blue-500/10 opacity-100",
            isCompleted && "from-green-500/10 via-transparent to-emerald-500/10 opacity-100"
        )} />
        
        <CardHeader className="relative z-10">
          <div className="flex justify-between items-start mb-2">
             <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{phaseTitle}</span>
             <div className="flex items-center">
                 {isLocked && <Lock className="w-5 h-5 text-slate-600" />}
                 {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
                 {isUnlocked && <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />}
             </div>
          </div>
          <CardTitle className={cn(
              "text-xl flex items-center gap-2",
              isUnlocked && "text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400",
              isCompleted && "text-slate-300 decoration-green-500/30 line-through decoration-2"
          )}>
            {world.title}
          </CardTitle>
          {world.subtitle && (
              <CardDescription className="text-slate-400">
                  {world.subtitle}
              </CardDescription>
          )}
        </CardHeader>
        
        <CardContent className="relative z-10 pb-6">
            <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>{world.missions.length} Missions</span>
                </div>
                {world.project && (
                    <div className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
                        {world.project}
                    </div>
                )}
            </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


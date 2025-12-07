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
      className={cn("relative w-full max-w-md mx-auto group", isLocked && "opacity-60")}
    >
      <Card
        onClick={!isLocked ? onClick : undefined}
        className={cn(
          "cursor-pointer overflow-hidden border transition-all duration-300",
          // Locked styles
          isLocked && "bg-white/5 border-white/5 cursor-not-allowed",
          // Unlocked styles
          isUnlocked && "bg-white/5 border-purple-500/30 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]",
          // Completed styles
          isCompleted && "bg-white/5 border-green-500/20 hover:border-green-500/40"
        )}
      >
        <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
            isUnlocked && "from-purple-500/10 via-transparent to-blue-500/10 opacity-100",
            isCompleted && "from-green-500/10 via-transparent to-emerald-500/10 opacity-100"
        )} />
        
        <CardHeader className="relative z-10">
          <div className="flex justify-between items-start mb-2">
             <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest">{phaseTitle}</span>
             <div className="flex items-center">
                 {isLocked && <Lock className="w-4 h-4 text-white/20" />}
                 {isCompleted && <CheckCircle className="w-4 h-4 text-green-500" />}
                 {isUnlocked && <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />}
             </div>
          </div>
          <CardTitle className={cn(
              "text-lg font-light tracking-tight flex items-center gap-2 text-white",
              isCompleted && "text-white/60 decoration-green-500/30 line-through decoration-1"
          )}>
            {world.title}
          </CardTitle>
          {world.subtitle && (
              <CardDescription className="text-white/40 font-light text-sm">
                  {world.subtitle}
              </CardDescription>
          )}
        </CardHeader>
        
        <CardContent className="relative z-10 pb-6">
            <div className="flex items-center gap-4 text-xs text-white/40 font-mono">
                <div className="flex items-center gap-1.5">
                    <Rocket className="w-3 h-3" />
                    <span>{world.missions.length} Missions</span>
                </div>
                {world.project && (
                    <div className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                        Project
                    </div>
                )}
            </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


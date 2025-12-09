"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, CheckCircle, Circle, Zap, Sparkles, Target, Rocket, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useCourseStore } from '@/store/courseStore';

export type AllInOneCheckpoint = {
  id: string;
  title: string;
  description: string;
  xpReward: number;
};

type AllInOneMissionProps = {
  worldId: number;
  title: string;
  description: string;
  checkpoints: AllInOneCheckpoint[];
  totalXpReward: number;
  autoExpand?: boolean;
};

export const AllInOneMission: React.FC<AllInOneMissionProps> = ({
  worldId,
  title,
  description,
  checkpoints,
  totalXpReward,
  autoExpand = false
}) => {
  const { 
    completedAllInOneCheckpoints, 
    completedAllInOneMissions,
    markAllInOneCheckpointComplete, 
    markAllInOneMissionComplete 
  } = useCourseStore();
  const [isExpanded, setIsExpanded] = useState(autoExpand);

  const worldCheckpoints = completedAllInOneCheckpoints[worldId] || [];
  const completedCount = worldCheckpoints.length;
  const totalCheckpoints = checkpoints.length;
  const progress = (completedCount / totalCheckpoints) * 100;
  const isComplete = completedCount === totalCheckpoints;
  const isAllInOneComplete = completedAllInOneMissions?.includes(worldId) || false;

  const handleCheckpointClick = (checkpointId: string) => {
    if (!worldCheckpoints.includes(checkpointId)) {
      markAllInOneCheckpointComplete(worldId, checkpointId);
    }
  };

  const handleCompleteMission = () => {
    if (isComplete && !isAllInOneComplete) {
      markAllInOneMissionComplete(worldId, totalXpReward);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mt-12"
    >
      <div className={cn(
        "relative overflow-hidden rounded-2xl border transition-all duration-500",
        isComplete 
          ? "bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10 border-yellow-500/30 shadow-[0_0_40px_-10px_rgba(251,191,36,0.3)]"
          : "bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 border-purple-500/30 hover:border-purple-500/50"
      )}>
        {/* Animated background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              background: isComplete 
                ? "radial-gradient(circle at 50% 50%, rgba(251,191,36,0.15) 0%, transparent 70%)"
                : "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.15) 0%, transparent 70%)"
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
          />
        </div>

        <CardContent className="relative z-10 p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={cn(
                "p-3 rounded-xl transition-all duration-300",
                isComplete 
                  ? "bg-yellow-500/20 text-yellow-400 shadow-[0_0_20px_-5px_rgba(251,191,36,0.5)]"
                  : "bg-purple-500/20 text-purple-400"
              )}>
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-widest px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20">
                    Final Challenge
                  </span>
                  {isAllInOneComplete && (
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest px-2 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-1">
                      <Star className="w-3 h-3" /> Mastered
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-white/60 font-light leading-relaxed max-w-2xl">{description}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white/40 hover:text-white"
            >
              {isExpanded ? "Collapse" : "Expand"}
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white/80">
                  Progress: {completedCount} / {totalCheckpoints} Checkpoints
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-yellow-500/90 font-medium px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <Zap className="w-4 h-4" />
                <span>{totalXpReward} XP Reward</span>
              </div>
            </div>
            <Progress 
              value={progress} 
              className={cn(
                "h-2 transition-all duration-500",
                isComplete ? "bg-yellow-500/20" : "bg-white/10"
              )} 
            />
          </div>

          {/* Checkpoints */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {checkpoints.map((checkpoint, index) => {
                    const isCheckpointDone = worldCheckpoints.includes(checkpoint.id);
                    return (
                      <motion.div
                        key={checkpoint.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleCheckpointClick(checkpoint.id)}
                        className={cn(
                          "p-4 rounded-xl border transition-all cursor-pointer group",
                          isCheckpointDone
                            ? "bg-green-500/10 border-green-500/30 hover:border-green-500/40"
                            : "bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10"
                        )}
                      >
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "mt-0.5 transition-colors",
                            isCheckpointDone ? "text-green-500" : "text-white/30 group-hover:text-purple-400"
                          )}>
                            {isCheckpointDone ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <Circle className="w-5 h-5" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className={cn(
                              "text-base font-light mb-1",
                              isCheckpointDone ? "text-white/60 line-through decoration-white/20" : "text-white"
                            )}>
                              {checkpoint.title}
                            </h4>
                            <p className="text-sm text-white/50 font-light leading-relaxed">
                              {checkpoint.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-xs text-white/30 font-mono">
                              +{checkpoint.xpReward} XP
                            </div>
                            {isCheckpointDone && (
                              <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Complete Button */}
          {isComplete && !isAllInOneComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-6 border-t border-white/10"
            >
              <Button
                onClick={handleCompleteMission}
                size="lg"
                className={cn(
                  "w-full h-14 rounded-full text-base font-medium tracking-wide transition-all duration-300",
                  "bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400",
                  "shadow-[0_0_30px_-5px_rgba(251,191,36,0.5)] hover:shadow-[0_0_40px_-5px_rgba(251,191,36,0.7)]"
                )}
              >
                <Trophy className="w-5 h-5 mr-2" />
                Complete Final Challenge & Claim {totalXpReward} XP
                <Rocket className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          )}

          {isAllInOneComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 pt-6 border-t border-white/10"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-base font-medium text-yellow-300">
                  Challenge Mastered! {totalXpReward} XP Earned
                </span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
            </motion.div>
          )}
        </CardContent>
      </div>
    </motion.div>
  );
};


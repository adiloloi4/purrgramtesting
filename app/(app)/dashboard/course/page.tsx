"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { curriculum } from '@/data/curriculum';
import { useCourseStore } from '@/store/courseStore';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronDown, ChevronUp, CheckCircle, Circle, Play, Brain, Shield, Sparkles, Rocket, ArrowRight, Flame, Zap, Target, Trophy, TrendingUp, Unlock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CourseMapPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { 
    isWorldUnlocked, 
    isWorldCompleted, 
    completedMissions,
    completedWorlds,
    xp,
    currentStreak,
    unlockAll, 
  } = useCourseStore();
  
  const [expandedWorlds, setExpandedWorlds] = useState<Set<number>>(new Set());

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleWorld = (worldId: number) => {
    setExpandedWorlds(prev => {
      const next = new Set(prev);
      if (next.has(worldId)) {
        next.delete(worldId);
      } else {
        next.add(worldId);
      }
      return next;
    });
  };

  // Calculate total progress
  const totalMissions = curriculum.phases.reduce((acc, phase) => 
    acc + phase.worlds.reduce((sum, world) => sum + world.missions.length, 0), 0
  );
  const completedTotal = Object.values(completedMissions).reduce((sum, arr) => sum + arr.length, 0);
  const overallProgress = totalMissions > 0 ? (completedTotal / totalMissions) * 100 : 0;
  
  const level = Math.floor(xp / 500) + 1;
  const nextLevelXp = level * 500;
  const currentLevelProgress = ((xp - (level - 1) * 500) / 500) * 100;
  const totalWorlds = curriculum.phases.reduce((acc, phase) => acc + phase.worlds.length, 0);
  const courseProgress = (completedWorlds.length / totalWorlds) * 100;

  const stats = [
    {
      label: "Current Streak",
      value: currentStreak,
      icon: Flame,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      suffix: " days"
    },
    {
      label: "Total XP",
      value: xp,
      icon: Zap,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      suffix: " XP"
    },
    {
      label: "Level",
      value: level,
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      suffix: ""
    },
    {
      label: "Missions Completed",
      value: completedTotal,
      icon: Target,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      suffix: ` / ${totalMissions}`
    }
  ];

  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="max-w-7xl mx-auto py-8 text-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-extralight mb-3 tracking-tight">
          Vibe Coding <span className="font-normal text-white">Course</span>
        </h1>
        <p className="text-white/50 font-light text-lg">Follow the path. Build the future.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-lg ${stat.bgColor} ${stat.borderColor} border`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`text-xs font-medium uppercase tracking-wider ${stat.color} opacity-60`}>
                  {stat.label}
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-light text-white">{stat.value}</span>
                <span className="text-sm text-white/40 font-light">{stat.suffix}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dev Tools - For Testing */}
      <div className="flex justify-center gap-4 mb-8 opacity-50 hover:opacity-100 transition-opacity">
            <Button variant="outline" size="sm" onClick={unlockAll} className="text-xs border-white/10 hover:bg-white/5">
                <Unlock className="w-3 h-3 mr-2" />
          Unlock All (Testing)
            </Button>
      </div>

      {/* Worlds Grid */}
      <div className="space-y-12">
        {curriculum.phases.map((phase, phaseIndex) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + phaseIndex * 0.1 }}
            className="space-y-6"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-light text-white mb-2">{phase.title}</h2>
                        {phase.subtitle && (
                <p className="text-white/40 font-light text-sm">{phase.subtitle}</p>
                              )}
                            </div>
                            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phase.worlds.map((world) => {
                let status: "locked" | "unlocked" | "completed" = "locked";
                if (isWorldCompleted(world.id)) {
                  status = "completed";
                } else if (isWorldUnlocked(world.id)) {
                  status = "unlocked";
                }

                const isExpanded = expandedWorlds.has(world.id);
                const worldCompletedMissions = completedMissions[world.id] || [];
                const missionProgress = world.missions.length > 0 
                  ? (worldCompletedMissions.length / world.missions.length) * 100 
                  : 0;
                const isWorldDone = isWorldCompleted(world.id);
                                  
                                  return (
                  <motion.div
                    key={world.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + phaseIndex * 0.1 }}
                    className={cn(
                      "p-8 rounded-2xl border transition-all duration-300 group relative overflow-hidden",
                      status === "locked" && "bg-white/5 border-white/5 opacity-60",
                      status === "unlocked" && "bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-purple-500/30",
                      status === "completed" && "bg-white/5 border-green-500/20 hover:border-green-500/30"
                    )}
                  >
                    {/* Status Badge */}
                    {status === "unlocked" && !isWorldDone && (
                      <div className="absolute top-0 right-0 p-3 bg-purple-500/10 rounded-bl-2xl border-b border-l border-purple-500/20 text-purple-300 text-xs font-medium uppercase tracking-wider">
                        Active
                      </div>
                    )}

                    {/* World Header */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={cn(
                          "p-2 rounded-full transition-colors",
                          status === "unlocked" && "bg-white/10 text-white/80 group-hover:text-purple-300 group-hover:bg-purple-500/20",
                          status === "completed" && "bg-green-500/10 text-green-400",
                          status === "locked" && "bg-white/5 text-white/20"
                        )}>
                          {status === "completed" ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : status === "unlocked" ? (
                            <Sparkles className="w-5 h-5" />
                          ) : (
                            <Rocket className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                              {phase.title}
                            </span>
                            {isWorldDone && (
                              <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">
                                Completed
                              </span>
                            )}
                          </div>
                          <h3 className={cn(
                            "text-xl font-light text-white tracking-wide mb-1",
                            isWorldDone && "text-white/60 line-through decoration-white/20"
                          )}>
                            {world.title}
                          </h3>
                          {world.subtitle && (
                            <p className="text-white/40 font-light text-sm mb-4">{world.subtitle}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      {status !== "locked" && world.missions.length > 0 && (
                        <div className="mb-6">
                          <div className="flex justify-between text-xs text-white/40 font-medium mb-2">
                            <span>Progress</span>
                            <span>{worldCompletedMissions.length} / {world.missions.length}</span>
                          </div>
                          <Progress value={missionProgress} className="h-1.5 bg-white/10" />
                        </div>
                      )}

                      {/* Missions Preview */}
                      {status !== "locked" && (
                        <div className="space-y-2 mb-6">
                          {world.missions.slice(0, 3).map((mission) => {
                            const isMissionDone = worldCompletedMissions.includes(mission.id);
                            return (
                              <div
                                key={mission.id}
                                className="flex items-center gap-2 text-sm"
                              >
                                <div className={cn(
                                  "transition-colors",
                                  isMissionDone ? "text-green-500" : "text-white/20"
                                )}>
                                  {isMissionDone ? (
                                    <CheckCircle className="w-4 h-4" />
                                  ) : (
                                    <Circle className="w-4 h-4" />
                                  )}
                                </div>
                                <span className={cn(
                                  "font-light",
                                  isMissionDone ? "text-white/40 line-through" : "text-white/60"
                                )}>
                                  {mission.title}
                                </span>
                              </div>
                            );
                          })}
                          {world.missions.length > 3 && (
                            <div className="text-xs text-white/40 font-light pl-6">
                              +{world.missions.length - 3} more missions
                            </div>
                          )}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {status !== "locked" && (
                          <Button
                            onClick={() => toggleWorld(world.id)}
                            variant="outline"
                            size="sm"
                            className="flex-1 border-white/10 hover:bg-white/10 text-xs"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-3 h-3 mr-2" />
                                Hide Missions
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-3 h-3 mr-2" />
                                Show Missions
                              </>
                            )}
                          </Button>
                        )}
                        <Button
                          onClick={() => status !== "locked" && router.push(`/dashboard/course/world/${world.id}`)}
                          size="sm"
                          disabled={status === "locked"}
                          className={cn(
                            "flex-1 border-0 font-medium tracking-wide rounded-xl",
                            status === "locked" 
                              ? "bg-white/5 text-white/40" 
                              : "bg-white text-black hover:bg-white/90"
                          )}
                        >
                          {status === "locked" ? "Locked" : "Enter World"}
                          {status !== "locked" && <ArrowRight className="w-3 h-3 ml-2" />}
                        </Button>
                      </div>
                    </div>

                    {/* Expanded Missions View */}
                    <AnimatePresence>
                      {isExpanded && status !== "locked" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-6 pt-6 border-t border-white/10"
                        >
                          <div className="space-y-3">
                            <h4 className="text-xs font-medium text-white/60 uppercase tracking-widest mb-4">
                              All Missions
                            </h4>
                            {world.missions.map((mission, idx) => {
                              const isMissionDone = worldCompletedMissions.includes(mission.id);
                              return (
                                <motion.div
                                  key={mission.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.03 }}
                                  onClick={() => router.push(`/dashboard/course/world/${world.id}/mission/${mission.id}`)}
                                  className={cn(
                                    "p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between group",
                                    isMissionDone
                                      ? "bg-green-500/5 border-green-500/20 hover:border-green-500/30"
                                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                                  )}
                                >
                                  <div className="flex items-center gap-3 flex-1">
                                    <div className={cn(
                                      "transition-colors",
                                      isMissionDone ? "text-green-500" : "text-white/30 group-hover:text-purple-400"
                                    )}>
                                      {isMissionDone ? (
                                        <CheckCircle className="w-4 h-4" />
                                      ) : (
                                        <Circle className="w-4 h-4" />
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <h5 className={cn(
                                        "text-sm font-light",
                                        isMissionDone ? "text-white/40 line-through" : "text-white"
                                      )}>
                                        {mission.title}
                                      </h5>
                                      {mission.description && (
                                        <p className="text-xs text-white/40 font-light mt-1">{mission.description}</p>
                                      )}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs text-white/20 font-mono">
                                      +{mission.xpReward || 10} XP
                                    </span>
                                    <Play className="w-4 h-4 text-white/30 group-hover:text-purple-400 transition-colors" />
                                  </div>
                                </motion.div>
                              );
                            })}

                            {/* Bonus Coding */}
                            {world.blackBox && (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                onClick={() => router.push(`/dashboard/course/world/${world.id}/mission/blackbox-${world.id}`)}
                                className={cn(
                                  "p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between group bg-white/5 border-purple-500/20 hover:border-purple-500/30",
                                  worldCompletedMissions.includes(`blackbox-${world.id}`) && "bg-green-500/5 border-green-500/20"
                                )}
                              >
                                <div className="flex items-center gap-3 flex-1">
                                  <Brain className="w-4 h-4 text-purple-400" />
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-xs font-bold text-purple-300 uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                                        Bonus
                                      </span>
                                    </div>
                                    <h5 className="text-sm font-light text-white">{world.blackBox.title}</h5>
                                  </div>
                                </div>
                                <Play className="w-4 h-4 text-white/30 group-hover:text-purple-400 transition-colors" />
                              </motion.div>
                            )}

                            {/* Project */}
                            {world.project && (
                              <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
                                <div className="flex items-center gap-2 mb-2">
                                  <Shield className="w-4 h-4 text-blue-400" />
                                  <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                                    Boss Project
                                  </span>
                                </div>
                                <p className="text-sm text-blue-200/80 font-light">{world.project}</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

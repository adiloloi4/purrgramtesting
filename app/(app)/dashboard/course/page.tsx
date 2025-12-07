"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { curriculum } from '@/data/curriculum';
import { useCourseStore } from '@/store/courseStore';
import { CheckCircle, Circle, Lock, ChevronDown, ChevronUp, Rocket, Zap, Shield, Gift, BookOpen, Sparkles, ArrowRight, Play } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CourseMapPage() {
  const router = useRouter();
  const { isWorldUnlocked, isWorldCompleted, completedMissions, missionStatus, xp } = useCourseStore();
  const [expandedWorlds, setExpandedWorlds] = useState<number[]>([]);

  const toggleWorld = (worldId: number) => {
    setExpandedWorlds(prev => 
      prev.includes(worldId) 
        ? prev.filter(id => id !== worldId)
        : [...prev, worldId]
    );
  };

  // Calculate overall course stats
  const totalWorlds = curriculum.phases.reduce((acc, phase) => acc + phase.worlds.length, 0);
  const totalMissions = curriculum.phases.reduce((acc, phase) => 
    acc + phase.worlds.reduce((worldAcc, world) => worldAcc + world.missions.length, 0), 0
  );
  const completedWorldsCount = curriculum.phases.reduce((acc, phase) => 
    acc + phase.worlds.filter(world => isWorldCompleted(world.id)).length, 0
  );
  const completedMissionsCount = Object.values(completedMissions).reduce((acc, missions) => acc + missions.length, 0);
  const courseProgress = (completedWorldsCount / totalWorlds) * 100;

  return (
    <div className="max-w-6xl mx-auto py-8 text-white">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-extralight text-white mb-3 tracking-tight">
              Vibe Coding Course
            </h1>
            <p className="text-white/50 font-light text-lg">Follow the path. Build the future.</p>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-xs text-white/50 font-light mb-1">Course Progress</div>
            <div className="text-2xl font-light text-white mb-2">{Math.round(courseProgress)}%</div>
            <Progress value={courseProgress} className="h-1.5 bg-white/10" />
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-xs text-white/50 font-light mb-1">Worlds Completed</div>
            <div className="text-2xl font-light text-white">{completedWorldsCount} / {totalWorlds}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-xs text-white/50 font-light mb-1">Missions Completed</div>
            <div className="text-2xl font-light text-white">{completedMissionsCount} / {totalMissions}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-xs text-white/50 font-light mb-1">Total XP</div>
            <div className="text-2xl font-light text-white">{xp} XP</div>
          </div>
        </div>
      </motion.div>

      {/* Phases */}
      <div className="space-y-12">
        {curriculum.phases.map((phase, phaseIndex) => {
          const phaseWorlds = phase.worlds;
          const phaseCompleted = phaseWorlds.filter(w => isWorldCompleted(w.id)).length;
          const phaseProgress = (phaseCompleted / phaseWorlds.length) * 100;
          
          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: phaseIndex * 0.1 }}
              className="relative"
            >
              {/* Phase Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                        <span className="text-lg font-light text-purple-300">{phaseIndex + 1}</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-light text-white tracking-tight">{phase.title}</h2>
                        {phase.subtitle && (
                          <p className="text-sm text-white/40 font-light mt-0.5">{phase.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/50 font-light mb-1">Phase Progress</div>
                    <div className="text-lg font-light text-white">{phaseCompleted} / {phaseWorlds.length}</div>
                  </div>
                </div>
                <Progress value={phaseProgress} className="h-1 bg-white/10" />
              </div>

              {/* Worlds Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {phase.worlds.map((world, worldIndex) => {
                  const unlocked = isWorldUnlocked(world.id);
                  const completed = isWorldCompleted(world.id);
                  const isExpanded = expandedWorlds.includes(world.id);
                  const worldMissions = completedMissions[world.id] || [];
                  const worldProgress = (worldMissions.length / world.missions.length) * 100;
                  
                  let status: "locked" | "unlocked" | "completed" = "locked";
                  if (completed) status = "completed";
                  else if (unlocked) status = "unlocked";

                  return (
                    <motion.div
                      key={world.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (phaseIndex * 0.1) + (worldIndex * 0.05) }}
                      className={cn(
                        "rounded-2xl border transition-all duration-300 overflow-hidden group relative",
                        status === "locked" && "bg-white/5 border-white/5 opacity-60",
                        status === "unlocked" && "bg-gradient-to-br from-white/5 to-white/[0.02] border-purple-500/30 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]",
                        status === "completed" && "bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/30 hover:border-green-500/40"
                      )}
                    >
                      {/* Gradient Overlay */}
                      {status === "unlocked" && (
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      )}

                      {/* World Header */}
                      <div
                        onClick={() => unlocked && toggleWorld(world.id)}
                        className={cn(
                          "p-6 cursor-pointer transition-all relative z-10",
                          unlocked && "hover:bg-white/5"
                        )}
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-light",
                                status === "completed" && "bg-green-500/20 text-green-400",
                                status === "unlocked" && "bg-purple-500/20 text-purple-300",
                                status === "locked" && "bg-white/10 text-white/30"
                              )}>
                                {status === "completed" ? (
                                  <CheckCircle className="w-4 h-4" />
                                ) : status === "locked" ? (
                                  <Lock className="w-4 h-4" />
                                ) : (
                                  <Sparkles className="w-4 h-4" />
                                )}
                              </div>
                              <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                                World {world.id}
                              </span>
                              {status === "completed" && (
                                <span className="text-[10px] font-semibold text-green-400 uppercase tracking-widest px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">
                                  Completed
                                </span>
                              )}
                            </div>
                            
                            <h3 className={cn(
                              "text-2xl font-light mb-2 tracking-tight",
                              status === "completed" ? "text-white/70" : "text-white"
                            )}>
                              {world.title}
                            </h3>
                            
                            {world.subtitle && (
                              <p className="text-white/50 font-light text-sm mb-4">{world.subtitle}</p>
                            )}

                            {/* Progress Bar */}
                            {unlocked && (
                              <div className="mt-4 mb-4">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs text-white/50 font-light">Progress</span>
                                  <span className="text-xs text-white/40 font-mono">
                                    {worldMissions.length} / {world.missions.length}
                                  </span>
                                </div>
                                <Progress value={worldProgress} className="h-2 bg-white/10" />
                              </div>
                            )}

                            {/* World Features */}
                            <div className="flex flex-wrap items-center gap-3 mt-4">
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60">
                                <Rocket className="w-3 h-3" />
                                <span>{world.missions.length}</span>
                              </div>
                              {world.project && (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                                  <Shield className="w-3 h-3" />
                                  <span>Project</span>
                                </div>
                              )}
                              {world.blackBox && (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60">
                                  <BookOpen className="w-3 h-3" />
                                  <span>Black Box</span>
                                </div>
                              )}
                              {world.secretDrop && (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-300">
                                  <Gift className="w-3 h-3" />
                                  <span>Secret</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          {unlocked ? (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleWorld(world.id);
                                }}
                                className="text-white/60 hover:text-white"
                              >
                                {isExpanded ? (
                                  <>
                                    <ChevronUp className="w-4 h-4 mr-2" />
                                    Hide Missions
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown className="w-4 h-4 mr-2" />
                                    Show Missions
                                  </>
                                )}
                              </Button>
                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  router.push(`/dashboard/course/world/${world.id}`);
                                }}
                                className="bg-white text-black hover:bg-white/90 rounded-lg"
                              >
                                <Play className="w-4 h-4 mr-2" />
                                Enter World
                              </Button>
                            </>
                          ) : (
                            <div className="text-xs text-white/30 font-light">Complete previous world to unlock</div>
                          )}
                        </div>
                      </div>

                      {/* Expanded Missions */}
                      <AnimatePresence>
                        {isExpanded && unlocked && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-white/10 bg-black/30 backdrop-blur-sm"
                          >
                            <div className="p-6">
                              <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Rocket className="w-4 h-4 text-purple-400" />
                                Missions ({worldMissions.length} / {world.missions.length})
                              </h4>
                              
                              <div className="space-y-3">
                                {world.missions.map((mission, missionIndex) => {
                                  const missionStatusValue = missionStatus(world.id, mission.id);
                                  const isMissionCompleted = missionStatusValue === "completed";
                                  
                                  return (
                                    <motion.div
                                      key={mission.id}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: missionIndex * 0.03 }}
                                      onClick={() => router.push(`/dashboard/course/world/${world.id}`)}
                                      className={cn(
                                        "p-4 rounded-xl border transition-all cursor-pointer group relative overflow-hidden",
                                        isMissionCompleted
                                          ? "bg-gradient-to-r from-green-500/10 to-green-500/5 border-green-500/30 hover:border-green-500/40"
                                          : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                                      )}
                                    >
                                      <div className="flex items-start justify-between gap-4 relative z-10">
                                        <div className="flex items-start gap-4 flex-1">
                                          <div className={cn(
                                            "mt-0.5 transition-all",
                                            isMissionCompleted 
                                              ? "text-green-400" 
                                              : "text-white/30 group-hover:text-purple-400"
                                          )}>
                                            {isMissionCompleted ? (
                                              <CheckCircle className="w-5 h-5" />
                                            ) : (
                                              <Circle className="w-5 h-5" />
                                            )}
                                          </div>
                                          <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                              <h5 className={cn(
                                                "text-base font-light",
                                                isMissionCompleted ? "text-white/60 line-through decoration-white/30" : "text-white"
                                              )}>
                                                {mission.title}
                                              </h5>
                                              {!isMissionCompleted && (
                                                <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                                              )}
                                            </div>
                                            {mission.description && (
                                              <p className="text-sm text-white/50 font-light leading-relaxed">
                                                {mission.description}
                                              </p>
                                            )}
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60 font-mono">
                                          <Zap className="w-3 h-3 text-yellow-400" />
                                          <span>+{mission.xpReward || 10}</span>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              {/* Project Preview */}
                              {world.project && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="mt-6 p-5 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-blue-500/5"
                                >
                                  <div className="flex items-center gap-2 mb-3">
                                    <Shield className="w-5 h-5 text-blue-400" />
                                    <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Boss Project</span>
                                  </div>
                                  <p className="text-sm text-white/80 font-light leading-relaxed">{world.project}</p>
                                </motion.div>
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
          );
        })}
      </div>
    </div>
  );
}

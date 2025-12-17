"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { curriculum } from '@/data/curriculum';
import { useCourseStore } from '@/store/courseStore';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Circle, 
  Brain, 
  Shield, 
  Sparkles,
  Rocket,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WorldPage() {
  const params = useParams();
  const router = useRouter();
  const worldId = parseInt(params.id as string);
  
  const { 
    isWorldUnlocked, 
    isWorldCompleted, 
    completedMissions,
    missionStatus
  } = useCourseStore();

  // Find the world data
  const worldData = curriculum.phases
    .flatMap(phase => phase.worlds)
    .find(world => world.id === worldId);

  if (!worldData) {
    return (
      <div className="max-w-7xl mx-auto py-8 text-white">
        <div className="text-center py-20">
          <h1 className="text-2xl font-light mb-4">World not found</h1>
          <Button onClick={() => router.push('/dashboard/course')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course Map
          </Button>
        </div>
      </div>
    );
  }

  const phase = curriculum.phases.find(p => p.worlds.some(w => w.id === worldId));
  const isUnlocked = isWorldUnlocked(worldId);
  const isCompleted = isWorldCompleted(worldId);
  const completedMissionIds = completedMissions[worldId] || [];
  const missionProgress = worldData.missions.length > 0 
    ? (completedMissionIds.length / worldData.missions.length) * 100 
    : 0;

  return (
    <div className="max-w-7xl mx-auto py-8 text-white">
      {/* Header */}
      <div className="mb-12">
        <Button
          onClick={() => router.push('/dashboard/course')}
          variant="ghost"
          size="sm"
          className="mb-6 text-white/60 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Course Map
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              {phase?.title}
            </span>
            {isCompleted && (
              <span className="text-xs font-bold text-green-400 uppercase tracking-widest px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                Completed
              </span>
            )}
            {isUnlocked && !isCompleted && (
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center gap-2">
                <Sparkles className="w-3 h-3 animate-pulse" />
                Active
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight">
            {worldData.title}
          </h1>
          
          {worldData.subtitle && (
            <p className="text-xl text-white/60 font-light max-w-3xl">
              {worldData.subtitle}
            </p>
          )}

          {/* Progress */}
          {isUnlocked && worldData.missions.length > 0 && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-white/60 font-light">Progress</span>
                <span className="text-sm text-white/40 font-mono">
                  {completedMissionIds.length} / {worldData.missions.length} missions
                </span>
              </div>
              <Progress value={missionProgress} className="h-2 bg-white/10" />
            </div>
          )}
        </motion.div>
      </div>

      {/* Missions */}
      {!isUnlocked ? (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-6">
            <Rocket className="w-10 h-10 text-white/20" />
          </div>
          <h2 className="text-2xl font-light mb-4">World Locked</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Complete the previous world to unlock this one.
          </p>
          <Button onClick={() => router.push('/dashboard/course')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course Map
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Regular Missions */}
          {worldData.missions.map((mission, idx) => {
            const isMissionDone = completedMissionIds.includes(mission.id);
            const status = missionStatus(worldId, mission.id);
            
            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => router.push(`/dashboard/course/world/${worldId}/mission/${mission.id}`)}
                className={cn(
                  "p-6 rounded-xl border transition-all cursor-pointer group",
                  isMissionDone
                    ? "bg-green-500/5 border-green-500/20 hover:border-green-500/30"
                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={cn(
                      "transition-colors",
                      isMissionDone ? "text-green-500" : "text-white/30 group-hover:text-purple-400"
                    )}>
                      {isMissionDone ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        "text-lg font-light mb-1",
                        isMissionDone ? "text-white/40 line-through" : "text-white"
                      )}>
                        {mission.title}
                      </h3>
                      {mission.description && (
                        <p className="text-sm text-white/40 font-light">{mission.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-white/30 font-mono">
                      +{mission.xpReward || 10} XP
                    </span>
                    <Play className="w-5 h-5 text-white/30 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Bonus Coding (Black Box) */}
          {worldData.blackBox && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: worldData.missions.length * 0.1 }}
              onClick={() => router.push(`/dashboard/course/world/${worldId}/mission/blackbox-${worldId}`)}
              className={cn(
                "p-6 rounded-xl border transition-all cursor-pointer group bg-white/5 border-purple-500/20 hover:border-purple-500/30",
                completedMissionIds.includes(`blackbox-${worldId}`) && "bg-green-500/5 border-green-500/20"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <Brain className="w-6 h-6 text-purple-400" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-purple-300 uppercase tracking-widest px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20">
                        Bonus Coding
                      </span>
                      {completedMissionIds.includes(`blackbox-${worldId}`) && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <h3 className="text-lg font-light text-white mb-1">
                      {worldData.blackBox.title}
                    </h3>
                    <p className="text-sm text-white/40 font-light">
                      {worldData.blackBox.description}
                    </p>
                  </div>
                </div>
                <Play className="w-5 h-5 text-white/30 group-hover:text-purple-400 transition-colors" />
              </div>
            </motion.div>
          )}

          {/* Project */}
          {worldData.project && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (worldData.missions.length + (worldData.blackBox ? 1 : 0)) * 0.1 }}
              className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">
                  Boss Project
                </span>
              </div>
              <p className="text-base text-blue-200/80 font-light leading-relaxed">
                {worldData.project}
              </p>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}


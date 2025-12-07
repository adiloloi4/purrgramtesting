"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Circle, Lock, Unlock, Zap, Shield, Gift } from 'lucide-react';
import { curriculum } from '@/data/curriculum';
import { useCourseStore } from '@/store/courseStore';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { BlackBoxSection } from '@/components/course/BlackBoxSection';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export default function WorldPage() {
  const params = useParams();
  const router = useRouter();
  const worldId = Number(params.id);
  const { 
      missionStatus, 
      markMissionComplete, 
      markWorldComplete, 
      completedMissions, 
      isWorldCompleted,
      isWorldUnlocked
  } = useCourseStore();

  // Find the world data
  let worldData = null;
  let phaseData = null;

  for (const phase of curriculum.phases) {
    const found = phase.worlds.find(w => w.id === worldId);
    if (found) {
      worldData = found;
      phaseData = phase;
      break;
    }
  }

  if (!worldData || !phaseData) {
    return <div className="p-8 text-white">World not found</div>;
  }

  // Guards
  const unlocked = isWorldUnlocked(worldId);
  if (!unlocked) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
              <Lock className="w-16 h-16 text-slate-700 mb-4" />
              <h1 className="text-2xl font-bold text-slate-500 mb-2">World Locked</h1>
              <p className="text-slate-600 mb-6">Complete the previous world to unlock this area.</p>
              <Button onClick={() => router.back()} variant="outline">Go Back</Button>
          </div>
      );
  }

  const completedMissionIds = completedMissions[worldId] || [];
  const progress = (completedMissionIds.length / worldData.missions.length) * 100;
  const isComplete = isWorldCompleted(worldId);
  const allMissionsDone = completedMissionIds.length === worldData.missions.length;

  const handleCompleteMission = (missionId: string) => {
    markMissionComplete(worldId, missionId);
  };

  const handleCompleteWorld = () => {
    if (allMissionsDone) {
        markWorldComplete(worldId);
        // Could show confetti here
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Button 
        variant="ghost" 
        onClick={() => router.push('/dashboard/course')}
        className="mb-8 text-slate-500 hover:text-white"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Map
      </Button>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                {phaseData.title}
            </span>
            {isComplete && (
                <span className="text-xs font-bold text-green-400 uppercase tracking-widest px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Completed
                </span>
            )}
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">{worldData.title}</h1>
        {worldData.subtitle && <p className="text-xl text-slate-400">{worldData.subtitle}</p>}
        
        <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
            <div className="flex flex-col gap-1 w-full max-w-md">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>World Progress</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>
            <div className="flex items-center gap-2 text-sm text-yellow-500 font-medium">
                <Zap className="w-4 h-4" />
                <span>{isComplete ? "100 XP Earned" : "Reward: 100 XP"}</span>
            </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Missions */}
        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Circle className="w-4 h-4 text-purple-500 fill-current" />
                Missions
            </h2>
            {worldData.missions.map((mission) => {
                const isMissionDone = completedMissionIds.includes(mission.id);
                
                return (
                    <motion.div 
                        key={mission.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={cn(
                            "p-4 rounded-xl border transition-all flex items-center justify-between group",
                            isMissionDone 
                                ? "bg-green-500/5 border-green-500/20" 
                                : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div onClick={() => !isMissionDone && handleCompleteMission(mission.id)} className={cn(
                                "cursor-pointer p-2 rounded-full transition-colors",
                                isMissionDone ? "text-green-500 bg-green-500/10" : "text-slate-600 bg-slate-800 group-hover:text-slate-400"
                            )}>
                                {isMissionDone ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                            </div>
                            <div>
                                <h3 className={cn("font-medium", isMissionDone ? "text-slate-400 line-through" : "text-slate-200")}>
                                    {mission.title}
                                </h3>
                                {mission.description && (
                                    <p className="text-sm text-slate-500">{mission.description}</p>
                                )}
                            </div>
                        </div>
                        <div className="text-xs text-slate-600 font-mono">
                            +{mission.xpReward} XP
                        </div>
                    </motion.div>
                );
            })}
        </div>

        {/* Project (if any) */}
        {worldData.project && (
            <div className="mt-8">
                 <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <Shield className="w-4 h-4 text-blue-500" />
                    Boss Project
                </h2>
                <div className="p-6 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-transparent">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{worldData.project}</h3>
                    <p className="text-slate-400 text-sm mb-4">
                        Apply what you've learned. Build this project to solidify your knowledge.
                    </p>
                </div>
            </div>
        )}

        {/* Black Box */}
        {worldData.blackBox && (
            <BlackBoxSection title={worldData.blackBox.title} description={worldData.blackBox.description} />
        )}

        {/* Secret Drop */}
        {worldData.secretDrop && (
            <div className="mt-8 relative overflow-hidden rounded-xl border border-yellow-500/20 bg-yellow-900/5">
                <div className="p-6 relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <Gift className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Secret Drop</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{worldData.secretDrop.title}</h3>
                    
                    <div className={cn("transition-all duration-500", !isComplete && "blur-sm select-none opacity-50")}>
                        <p className="text-slate-400">{worldData.secretDrop.description}</p>
                    </div>

                    {!isComplete && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/10 text-sm font-medium text-white">
                                <Lock className="w-4 h-4" />
                                Complete World to Unlock
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Completion Action */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex justify-end">
            {!isComplete ? (
                 <Button 
                    size="lg"
                    disabled={!allMissionsDone}
                    onClick={handleCompleteWorld}
                    className={cn(
                        "transition-all duration-300",
                        allMissionsDone ? "bg-green-600 hover:bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]" : "opacity-50"
                    )}
                 >
                    {allMissionsDone ? "Complete World & Claim Reward" : "Complete All Missions First"}
                 </Button>
            ) : (
                <div className="flex items-center gap-2 text-green-500 font-bold bg-green-950/30 px-6 py-3 rounded-lg border border-green-900">
                    <CheckCircle className="w-5 h-5" />
                    World Completed
                </div>
            )}
        </div>
      </div>
    </div>
  );
}


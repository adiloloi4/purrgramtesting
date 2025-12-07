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
        <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20">
                {phaseData.title}
            </span>
            {isComplete && (
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest px-2 py-1 rounded bg-green-500/10 border border-green-500/20 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Completed
                </span>
            )}
        </div>
        <h1 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-tight">{worldData.title}</h1>
        {worldData.subtitle && <p className="text-xl text-white/50 font-light">{worldData.subtitle}</p>}
        
        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between backdrop-blur-sm">
            <div className="flex flex-col gap-2 w-full max-w-md">
                <div className="flex justify-between text-xs text-white/40 font-medium tracking-wide uppercase">
                    <span>World Progress</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-1.5 bg-white/10" />
            </div>
            <div className="flex items-center gap-2 text-sm text-yellow-500/90 font-medium px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <Zap className="w-4 h-4" />
                <span>{isComplete ? "100 XP Earned" : "Reward: 100 XP"}</span>
            </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Missions */}
        <div className="space-y-6">
            <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest flex items-center gap-2">
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
                            "p-6 rounded-xl border transition-all flex items-start justify-between group",
                            isMissionDone 
                                ? "bg-green-500/5 border-green-500/20" 
                                : "bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]"
                        )}
                    >
                        <div className="flex items-start gap-5">
                            <div onClick={() => !isMissionDone && handleCompleteMission(mission.id)} className={cn(
                                "cursor-pointer p-1 rounded-full transition-colors mt-0.5",
                                isMissionDone ? "text-green-500" : "text-white/20 group-hover:text-white/40"
                            )}>
                                {isMissionDone ? <CheckCircle className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                            </div>
                            <div>
                                <h3 className={cn("text-lg font-light mb-1", isMissionDone ? "text-white/40 line-through decoration-white/20" : "text-white")}>
                                    {mission.title}
                                </h3>
                                {mission.description && (
                                    <p className="text-sm text-white/40 font-light leading-relaxed">{mission.description}</p>
                                )}
                            </div>
                        </div>
                        <div className="text-xs text-white/20 font-mono pt-1">
                            +{mission.xpReward} XP
                        </div>
                    </motion.div>
                );
            })}
        </div>

        {/* Project (if any) */}
        {worldData.project && (
            <div className="mt-12">
                 <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest flex items-center gap-2 mb-6">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Boss Project
                </h2>
                <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Shield className="w-32 h-32" />
                    </div>
                    <h3 className="text-xl font-light text-blue-300 mb-3">{worldData.project}</h3>
                    <p className="text-blue-200/60 text-sm font-light leading-relaxed max-w-lg">
                        Apply what you&apos;ve learned. Build this project to solidify your knowledge.
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
            <div className="mt-12 relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent">
                <div className="p-8 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-500">
                            <Gift className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Secret Drop</span>
                    </div>
                    
                    <h3 className="text-xl font-light text-white mb-3 tracking-wide">{worldData.secretDrop.title}</h3>
                    
                    <div className={cn("transition-all duration-500", !isComplete && "blur-md select-none opacity-40")}>
                        <p className="text-white/50 font-light leading-relaxed">{worldData.secretDrop.description}</p>
                    </div>

                    {!isComplete && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/80 border border-white/10 text-sm font-medium text-white shadow-xl">
                                <Lock className="w-4 h-4 text-white/60" />
                                Complete World to Unlock
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Completion Action */}
        <div className="mt-16 pt-8 border-t border-white/5 flex justify-end">
            {!isComplete ? (
                 <Button 
                    size="lg"
                    disabled={!allMissionsDone}
                    onClick={handleCompleteWorld}
                    className={cn(
                        "h-14 px-8 rounded-full text-base font-medium tracking-wide transition-all duration-300",
                        allMissionsDone 
                            ? "bg-white text-black hover:bg-white/90 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]" 
                            : "bg-white/5 text-white/40 border border-white/5"
                    )}
                 >
                    {allMissionsDone ? "Complete World & Claim Reward" : "Complete All Missions First"}
                 </Button>
            ) : (
                <div className="flex items-center gap-2 text-green-400 font-medium bg-green-500/10 px-6 py-3 rounded-full border border-green-500/20">
                    <CheckCircle className="w-5 h-5" />
                    World Completed
                </div>
            )}
        </div>
      </div>
    </div>
  );
}


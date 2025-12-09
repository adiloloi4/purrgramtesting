"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { curriculum } from '@/data/curriculum';
import { useCourseStore } from '@/store/courseStore';
import { WorldCard } from '@/components/course/WorldCard';
import { Button } from '@/components/ui/button'; //delete later
import { Unlock, RotateCcw } from 'lucide-react'; //delete later

export default function CourseMapPage() {
  const router = useRouter();
  const { isWorldUnlocked, isWorldCompleted, unlockAll, resetProgress } = useCourseStore(); //delete later
  // const { isWorldUnlocked, isWorldCompleted } = useCourseStore();

  return (
    <div className="max-w-2xl mx-auto py-12 relative text-white">
      <div className="text-center mb-16">
         <h1 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-tight">Vibe Coding Course</h1>
         <p className="text-white/40 font-light">Follow the path. Build the future.</p>
         
         {/* Dev Tools - delete later */}
         <div className="flex justify-center gap-4 mt-8 opacity-50 hover:opacity-100 transition-opacity">
            <Button variant="outline" size="sm" onClick={unlockAll} className="text-xs border-white/10 hover:bg-white/5">
                <Unlock className="w-3 h-3 mr-2" />
                Unlock All (Dev)
            </Button>
            <Button variant="outline" size="sm" onClick={resetProgress} className="text-xs border-white/10 hover:bg-white/5">
                <RotateCcw className="w-3 h-3 mr-2" />
                Reset
            </Button>
         </div> 
      </div>

      <div className="space-y-12">
        {curriculum.phases.map((phase) => (
          <div key={phase.id} className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-light text-white mb-2">{phase.title}</h2>
                        {phase.subtitle && (
                <p className="text-white/40 font-light text-sm">{phase.subtitle}</p>
                              )}
                            </div>
                            
            <div className="grid grid-cols-1 gap-6">
              {phase.worlds.map((world) => {
                let status: "locked" | "unlocked" | "completed" = "locked";
                if (isWorldCompleted(world.id)) {
                  status = "completed";
                } else if (isWorldUnlocked(world.id)) {
                  status = "unlocked";
                }
                                  
                                  return (
                  <WorldCard
                    key={world.id}
                    world={world}
                    phaseTitle={phase.title}
                    status={status}
                                      onClick={() => router.push(`/dashboard/course/world/${world.id}`)}
                  />
                                  );
                                })}
                              </div>
                                  </div>
        ))}
      </div>
    </div>
  );
}

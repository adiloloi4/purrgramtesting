"use client";

import React from 'react';
import { motion } from 'framer-motion';
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

      <div className="relative">
        {/* Central Path Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0 -translate-x-1/2 z-0" />

        <div className="space-y-24">
          {curriculum.phases.map((phase) => (
            <div key={phase.id} className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                 <div className="flex-1 h-px bg-linear-to-r from-transparent to-white/10" />
                 <div className="flex flex-col items-center">
                    <h2 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] whitespace-nowrap px-4 py-1.5 rounded-full bg-black border border-white/10 backdrop-blur-xl">
                        {phase.title}
                    </h2>
                    {phase.subtitle && (
                        <span className="text-[10px] text-white/20 mt-2 font-light uppercase tracking-widest">{phase.subtitle}</span>
                    )}
                 </div>
                 <div className="flex-1 h-px bg-linear-to-l from-transparent to-white/10" />
              </div>

              <div className="space-y-16">
                {phase.worlds.map((world, index) => {
                  const unlocked = isWorldUnlocked(world.id);
                  const completed = isWorldCompleted(world.id);
                  
                  // Determine status strictly
                  let status: "locked" | "unlocked" | "completed" = "locked";
                  if (completed) status = "completed";
                  else if (unlocked) status = "unlocked";

                  return (
                    <motion.div
                      key={world.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <WorldCard
                        world={world}
                        phaseTitle={phase.title}
                        status={status}
                        onClick={() => router.push(`/dashboard/course/world/${world.id}`)}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {/* End of path indicator */}
          <div className="flex justify-center pt-8">
              <div className="w-3 h-3 rounded-full bg-white/10 ring-4 ring-black border border-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}


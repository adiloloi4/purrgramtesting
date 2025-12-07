"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { curriculum } from '@/data/curriculum';
import { useCourseStore } from '@/store/courseStore';
import { WorldCard } from '@/components/course/WorldCard';
import { Separator } from '@/components/ui/separator';

export default function CourseMapPage() {
  const router = useRouter();
  const { isWorldUnlocked, isWorldCompleted } = useCourseStore();

  return (
    <div className="max-w-2xl mx-auto py-12 relative">
      <div className="text-center mb-16">
         <h1 className="text-4xl font-bold text-white mb-4">Vibe Coding Course</h1>
         <p className="text-slate-400">Follow the path. Build the future.</p>
      </div>

      <div className="relative">
        {/* Central Path Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0 -translate-x-1/2 z-0" />

        <div className="space-y-24">
          {curriculum.phases.map((phase) => (
            <div key={phase.id} className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                 <Separator className="flex-1 bg-slate-800" />
                 <h2 className="text-lg font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap px-4 py-1 rounded-full bg-slate-900 border border-slate-800">
                    {phase.title}
                 </h2>
                 <Separator className="flex-1 bg-slate-800" />
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
              <div className="w-4 h-4 rounded-full bg-slate-800 ring-4 ring-slate-900" />
          </div>
        </div>
      </div>
    </div>
  );
}


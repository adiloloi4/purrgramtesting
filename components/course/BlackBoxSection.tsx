"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

type BlackBoxSectionProps = {
  title: string;
  description: string;
  onClick?: () => void;
  isCompleted?: boolean;
};

export const BlackBoxSection: React.FC<BlackBoxSectionProps> = ({ 
  title, 
  description, 
  onClick,
  isCompleted = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={onClick}
      className={cn(
        "p-6 rounded-xl border transition-all flex items-start justify-between group bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07] hover:border-purple-500/30",
        onClick && "cursor-pointer",
        isCompleted && "bg-green-500/5 border-green-500/20 hover:border-green-500/30"
      )}
      >
      <div className="flex items-start gap-5 flex-1">
        <div className="p-1 rounded-full transition-colors mt-0.5 text-purple-400">
          <Brain className="w-6 h-6" />
            </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
              Bonus
            </span>
                </div>
          <div className="text-left w-full">
            <h3 className={cn(
              "text-lg font-light mb-1 group-hover:text-purple-300 transition-colors",
              isCompleted ? "text-white/40 line-through decoration-white/20" : "text-white"
            )}>
                    {title}
            </h3>
            {description && (
              <p className="text-sm text-white/40 font-light leading-relaxed">
                {description}
              </p>
            )}
          </div>
                </div>
            </div>
      {onClick && (
        <div className="flex items-center gap-3">
          <Play className="w-4 h-4 text-white/30 group-hover:text-purple-400 transition-colors" />
        </div>
      )}
          </motion.div>
  );
};


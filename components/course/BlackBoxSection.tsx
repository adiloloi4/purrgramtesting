"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type BlackBoxSectionProps = {
  title: string;
  description: string;
};

export const BlackBoxSection: React.FC<BlackBoxSectionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 rounded-lg bg-black/20 border border-purple-500/20 hover:bg-black/40 transition-colors group"
      >
        <div className="flex items-center gap-3">
            <div className="p-1.5 rounded bg-purple-900/30 text-purple-400 group-hover:text-purple-300 transition-colors">
                <Brain className="w-4 h-4" />
            </div>
            <div className="text-left">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-0.5">
                    Warning: Nerd Stuff Inside
                </div>
                <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {title}
                </div>
            </div>
        </div>
        {isOpen ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
        ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-2 text-sm text-slate-400 leading-relaxed border-x border-b border-purple-500/20 rounded-b-lg bg-black/10">
                {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


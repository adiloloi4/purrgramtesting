"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Keyboard, 
  Code, 
  Puzzle, 
  Zap, 
  Target,
  Trophy,
  Clock,
  Gamepad2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const games = [
  {
    id: "memory",
    title: "Memory Match",
    description: "Test your memory by matching pairs of cards. Endless rounds!",
    icon: Brain,
    href: "/dashboard/games/memory",
    difficulty: "Easy",
    timeEstimate: "Endless"
  },
  {
    id: "typing",
    title: "Typing Challenge",
    description: "Improve your typing speed with code snippets. Endless rounds!",
    icon: Keyboard,
    href: "/dashboard/games/typing",
    difficulty: "Medium",
    timeEstimate: "Endless"
  },
  {
    id: "code-puzzle",
    title: "Code Puzzle",
    description: "Fill in the blanks to complete code snippets. Endless rounds!",
    icon: Puzzle,
    href: "/dashboard/games/code-puzzle",
    difficulty: "Medium",
    timeEstimate: "Endless"
  },
  {
    id: "speed-quiz",
    title: "Speed Quiz",
    description: "Answer questions as fast as you can. Endless rounds!",
    icon: Zap,
    href: "/dashboard/games/speed-quiz",
    difficulty: "Hard",
    timeEstimate: "Endless"
  },
  {
    id: "spot-bug",
    title: "Spot the Bug",
    description: "Find bugs in code snippets. Endless rounds!",
    icon: Code,
    href: "/dashboard/games/spot-bug",
    difficulty: "Hard",
    timeEstimate: "Endless"
  },
  {
    id: "sequence",
    title: "Sequence Master",
    description: "Order steps in the correct sequence. Endless rounds!",
    icon: Target,
    href: "/dashboard/games/sequence",
    difficulty: "Easy",
    timeEstimate: "Endless"
  },
  {
    id: "prompt-game",
    title: "Perfect Prompt",
    description: "Learn to write better AI prompts by choosing the best option. Endless rounds!",
    icon: Sparkles,
    href: "/dashboard/games/prompt-game",
    difficulty: "Medium",
    timeEstimate: "Endless"
  }
];

export default function GamesPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 text-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-extralight mb-3 tracking-tight">
          Games <span className="font-normal text-white">Arcade</span>
        </h1>
        <p className="text-white/50 font-light text-lg">Practice your skills. No pressure. Just fun.</p>
      </motion.div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => {
          const Icon = game.icon;
          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={game.href}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={cn(
                    "p-8 rounded-2xl border transition-all duration-300 group relative overflow-hidden",
                    "bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-sm hover:border-purple-500/30"
                  )}
                >
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-white/10 text-white/80 group-hover:text-purple-300 group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                          {game.difficulty}
                        </span>
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          {game.timeEstimate}
                        </span>
                      </div>
                      <h3 className="text-xl font-light text-white tracking-wide mb-1">
                        {game.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 font-light text-sm mb-6">
                    {game.description}
                  </p>

                  {/* Action Button */}
                  <Button
                    size="sm"
                    className="w-full border-0 font-medium tracking-wide rounded-xl bg-white text-black hover:bg-white/90"
                  >
                    Play Game
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-3">
          <Gamepad2 className="w-5 h-5 text-white/60" />
          <h2 className="text-lg font-light text-white">About Games Arcade</h2>
        </div>
        <p className="text-white/50 font-light text-sm leading-relaxed">
          These games are separate from the course missions. Play them anytime to practice your skills, 
          improve your speed, and have fun. Earn XP every 5 minutes of play—endless rounds, endless fun!
        </p>
      </motion.div>
    </div>
  );
}


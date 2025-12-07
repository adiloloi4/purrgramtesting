"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, LayoutDashboard, Flame, Trophy, TrendingUp, Zap, Target, BookOpen, CheckCircle2 } from 'lucide-react';
import { useCourseStore } from '@/store/courseStore';
import { curriculum } from '@/data/curriculum';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

export default function DashboardHome() {
  const { xp, currentStreak, completedWorlds, completedMissions } = useCourseStore();
  
  const level = Math.floor(xp / 500) + 1;
  const nextLevelXp = level * 500;
  const currentLevelProgress = ((xp - (level - 1) * 500) / 500) * 100;
  
  // Calculate total missions and completed missions
  const totalMissions = curriculum.phases.reduce((acc, phase) => 
    acc + phase.worlds.reduce((worldAcc, world) => worldAcc + world.missions.length, 0), 0
  );
  const completedMissionsCount = Object.values(completedMissions).reduce((acc, missions) => acc + missions.length, 0);
  const missionsProgress = (completedMissionsCount / totalMissions) * 100;
  
  // Find next world to complete
  const nextWorld = curriculum.phases
    .flatMap(phase => phase.worlds)
    .find(world => !completedWorlds.includes(world.id) && 
      (world.id === 0 || completedWorlds.includes(world.id - 1) || (world.id === 9 && completedWorlds.includes(8))));
  
  // Calculate total XP possible (rough estimate)
  const totalWorlds = curriculum.phases.reduce((acc, phase) => acc + phase.worlds.length, 0);
  const courseProgress = (completedWorlds.length / totalWorlds) * 100;

  const stats = [
    {
      label: "Current Streak",
      value: currentStreak,
      icon: Flame,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      suffix: " days"
    },
    {
      label: "Total XP",
      value: xp,
      icon: Zap,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      suffix: " XP"
    },
    {
      label: "Level",
      value: level,
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      suffix: ""
    },
    {
      label: "Worlds Completed",
      value: completedWorlds.length,
      icon: Target,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      suffix: ` / ${totalWorlds}`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 text-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-extralight mb-3 tracking-tight">
          Welcome back, <span className="font-normal text-white">Vibe Coder</span>.
        </h1>
        <p className="text-white/50 font-light text-lg">Ready to ship something today?</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-lg ${stat.bgColor} ${stat.borderColor} border`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`text-xs font-medium uppercase tracking-wider ${stat.color} opacity-60`}>
                  {stat.label}
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-light text-white">{stat.value}</span>
                <span className="text-sm text-white/40 font-light">{stat.suffix}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Continue Journey - Large Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-3 bg-purple-500/10 rounded-bl-2xl border-b border-l border-purple-500/20 text-purple-300 text-xs font-medium uppercase tracking-wider">
            Vibe Mode
          </div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300 group-hover:bg-purple-500/30 transition-colors">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-light text-white tracking-wide">Continue The Journey</h2>
              <p className="text-sm text-white/40 font-light mt-1">Your next breakthrough awaits</p>
            </div>
          </div>
          
          {nextWorld ? (
            <div className="mb-8 relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-4 h-4 text-white/40" />
                <span className="text-sm text-white/50 font-light">Next World</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-lg font-light text-white mb-1">{nextWorld.title}</h3>
                {nextWorld.subtitle && (
                  <p className="text-sm text-white/40 font-light">{nextWorld.subtitle}</p>
                )}
                <div className="flex items-center gap-2 mt-3 text-xs text-white/30">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{nextWorld.missions.length} missions</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white/40 mb-8 font-light leading-relaxed relative z-10">
              You&apos;ve completed all available worlds! 🎉 Keep building and shipping.
            </p>
          )}
          
          <Link href="/dashboard/course" className="relative z-10 block">
            <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-xl">
              Enter The Game Map
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-light text-white tracking-wide">Progress</h2>
          </div>
          
          <div className="space-y-6">
            {/* Level Progress */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-white/60 font-light">Level {level}</span>
                <span className="text-xs text-white/40 font-mono">{xp} / {nextLevelXp} XP</span>
              </div>
              <Progress value={currentLevelProgress} className="h-2 bg-white/10" />
            </div>
            
            {/* Course Progress */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-white/60 font-light">Course Completion</span>
                <span className="text-xs text-white/40 font-mono">{Math.round(courseProgress)}%</span>
              </div>
              <Progress value={courseProgress} className="h-2 bg-white/10" />
            </div>
            
            {/* Missions Progress */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-white/60 font-light">Missions</span>
                <span className="text-xs text-white/40 font-mono">{completedMissionsCount} / {totalMissions}</span>
              </div>
              <Progress value={missionsProgress} className="h-2 bg-white/10" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-white/10 text-white/60">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-light text-white">Projects Dashboard</h3>
          </div>
          <p className="text-white/40 mb-4 font-light text-sm leading-relaxed">
            Coming soon. Track your SaaS builds, deployments, and revenue here.
          </p>
          <Button variant="outline" disabled className="w-full border-white/10 text-white/40 bg-transparent rounded-lg">
            Coming Soon
          </Button>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-white/10 text-white/60">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-light text-white">Achievements</h3>
          </div>
          <p className="text-white/40 mb-4 font-light text-sm leading-relaxed">
            View your badges, milestones, and unlockables. Track your coding journey.
          </p>
          <Button variant="outline" disabled className="w-full border-white/10 text-white/40 bg-transparent rounded-lg">
            Coming Soon
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

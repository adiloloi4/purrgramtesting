"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Sparkles, Zap, Rocket, Map, Lock, Unlock, Play, Star, Wrench, Gauge } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

type BuilderVibe = 'speedrunner' | 'tinkerer' | 'founder' | null;
type Goal = 'build-fast' | 'launch-saas' | 'vibe-ai' | null;

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [goal, setGoal] = useState<Goal>(null);
  const [builderVibe, setBuilderVibe] = useState<BuilderVibe>(null);
  const [idea, setIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleGoalSelect = (selectedGoal: Goal) => {
    setGoal(selectedGoal);
    setTimeout(() => handleNext(), 300);
  };

  const handleVibeSelect = (vibe: BuilderVibe) => {
    setBuilderVibe(vibe);
    setTimeout(() => handleNext(), 300);
  };

  const handleIdeaSubmit = () => {
    if (idea.trim()) {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setShowMap(true);
        setTimeout(() => handleNext(), 2000);
      }, 2000);
    }
  };

  const handlePurchase = () => {
    // TODO: Integrate payment
    console.log('Purchase clicked - $150');
    router.push('/dashboard');
  };

  const handleSkip = () => {
    router.push('/dashboard');
  };

  const generateCodeSnippet = (ideaText: string): string => {
    const appName = ideaText.split(' ')[0] || 'App';
    return `// ${appName} - Your first file
export default function Home() {
  return (
    <div>
      <h1>Welcome to ${appName}</h1>
      <p>This is your app. Let's build it.</p>
    </div>
  );
}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative z-10">
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {/* Step 1: Welcome Screen */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-purple-500/20 border border-purple-500/30 mb-6">
                  <Sparkles className="w-12 h-12 text-purple-400" />
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight"
              >
                Welcome in.
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl text-white/60 font-light mb-12"
              >
                Let&apos;s cook something cool.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-lg h-14 px-8 text-lg"
                >
                  Let&apos;s go
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* Step 2: Goal Selection */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
                  What brings you here?
                </h2>
                <p className="text-white/50 font-light text-lg">
                  Pick the vibe that fits. No wrong answers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  { id: 'build-fast' as Goal, text: 'I want to learn how to build fast', icon: Zap },
                  { id: 'launch-saas' as Goal, text: 'I want to launch a SaaS', icon: Rocket },
                  { id: 'vibe-ai' as Goal, text: 'I just want to vibe with AI and see what happens', icon: Sparkles },
                ].map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <motion.button
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleGoalSelect(option.id)}
                      className={cn(
                        "p-6 rounded-xl border text-left transition-all duration-300 group",
                        goal === option.id
                          ? "bg-purple-500/20 border-purple-500/50 scale-105"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "p-3 rounded-lg transition-colors",
                          goal === option.id
                            ? "bg-purple-500/30 text-purple-300"
                            : "bg-white/10 text-white/60 group-hover:bg-white/20"
                        )}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <p className="text-white font-light text-lg flex-1 pt-1">
                          {option.text}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 3: Builder Vibe Selection */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
                  Choose your Builder Vibe
                </h2>
                <p className="text-white/50 font-light text-lg">
                  Like picking a character class. Just for fun.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  { 
                    id: 'speedrunner' as BuilderVibe, 
                    name: 'The Speedrunner', 
                    desc: 'Ship fast, learn faster. No time to waste.',
                    icon: Gauge
                  },
                  { 
                    id: 'tinkerer' as BuilderVibe, 
                    name: 'The Tinkerer', 
                    desc: 'Build, break, rebuild. The journey is the point.',
                    icon: Wrench
                  },
                  { 
                    id: 'founder' as BuilderVibe, 
                    name: 'The Founder', 
                    desc: 'You have an idea. Time to make it real.',
                    icon: Rocket
                  },
                ].map((vibe, index) => {
                  const Icon = vibe.icon;
                  return (
                    <motion.button
                      key={vibe.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleVibeSelect(vibe.id)}
                      className={cn(
                        "p-6 rounded-xl border text-left transition-all duration-300 group",
                        builderVibe === vibe.id
                          ? "bg-purple-500/20 border-purple-500/50 scale-105"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                        builderVibe === vibe.id
                          ? "bg-purple-500/30 text-purple-300"
                          : "bg-white/10 text-white/60 group-hover:bg-white/20"
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-light text-white mb-2">{vibe.name}</h3>
                      <p className="text-white/60 font-light text-sm">{vibe.desc}</p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 4: What are you building? */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
                  What are you trying to build?
                </h2>
                <p className="text-white/50 font-light text-lg">
                  Just a quick idea. We&apos;ll make something cool from it.
                </p>
              </div>

              {isGenerating ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block mb-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <p className="text-white/60 font-light text-xl mb-4">
                    Your app is being born...
                  </p>
                  <p className="text-white/40 font-light text-sm">
                    ✨ Magic happening ✨
                  </p>
                </motion.div>
              ) : showMap ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-xl bg-black/40 border border-white/10">
                    <pre className="text-sm text-white/80 font-mono">
                      <code>{generateCodeSnippet(idea)}</code>
                    </pre>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 font-light">
                      Look at that. Your first file, generated in seconds.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="max-w-lg mx-auto space-y-6">
                  <Input
                    type="text"
                    placeholder="A task manager... A social app... A SaaS for..."
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleIdeaSubmit()}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 h-14 rounded-lg text-lg"
                  />
                  <Button
                    onClick={handleIdeaSubmit}
                    disabled={!idea.trim()}
                    size="lg"
                    className="w-full bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-lg h-14 text-lg"
                  >
                    Make it happen
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 5: World Map */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-blue-500/20 border border-blue-500/30 mb-6">
                  <Map className="w-10 h-10 text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
                  Here&apos;s where you&apos;re headed
                </h2>
                <p className="text-white/50 font-light text-lg">
                  Build features, unlock worlds, get smarter without feeling it.
                </p>
              </div>

              <div className="space-y-4 max-w-2xl mx-auto">
                {[
                  { name: 'World 0: The Foundation', status: 'unlocked', xp: '50 XP' },
                  { name: 'World 1: Auth & Users', status: 'unlocked', xp: '100 XP' },
                  { name: 'World 2: Database Magic', status: 'locked', xp: '150 XP' },
                  { name: 'World 3: API Mastery', status: 'locked', xp: '200 XP' },
                ].map((world, index) => (
                  <motion.div
                    key={world.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "p-5 rounded-xl border flex items-center justify-between transition-all",
                      world.status === 'unlocked'
                        ? "bg-white/5 border-white/10 hover:bg-white/10"
                        : "bg-white/5 border-white/5 opacity-60"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      {world.status === 'unlocked' ? (
                        <Unlock className="w-5 h-5 text-green-400" />
                      ) : (
                        <Lock className="w-5 h-5 text-white/30" />
                      )}
                      <div>
                        <h3 className="text-lg font-light text-white">{world.name}</h3>
                        <p className="text-sm text-white/40 font-light">{world.xp}</p>
                      </div>
                    </div>
                    {world.status === 'unlocked' && (
                      <Play className="w-5 h-5 text-white/40" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-lg h-14 px-8 text-lg"
                >
                  Got it
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 6: Power-up Paywall */}
          {currentStep === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 bg-purple-500/10 rounded-bl-2xl border-b border-l border-purple-500/20 text-purple-300 text-xs font-medium uppercase tracking-wider">
                Power-Up
              </div>

              <div className="text-center mb-10 relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-purple-500/20 border border-purple-500/30 mb-6"
                >
                  <Zap className="w-10 h-10 text-purple-400" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
                  You&apos;re in.
                </h2>
                <p className="text-white/60 font-light text-lg leading-relaxed max-w-xl mx-auto mb-6">
                  If you want the full game — the God Mode workflows, the real missions, the worlds that unlock only when you ship — the $150 founder pack gives you everything.
                </p>
                <p className="text-white/40 font-light text-sm">
                  Most people grab it within their first 10 minutes.
                </p>
              </div>

              <div className="space-y-6 max-w-xl mx-auto relative z-10">
                <div className="p-8 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-light text-white mb-2">$150</div>
                    <div className="text-sm text-white/60 font-light uppercase tracking-wider">Founder Pack</div>
                  </div>
                  <ul className="space-y-3 text-sm text-white/70 font-light">
                    <li className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>All worlds & missions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>God Mode AI workflows</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>Unlock by shipping features</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>All future updates</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handlePurchase}
                    size="lg"
                    className="w-full bg-white text-black hover:bg-white/90 border-0 font-medium tracking-wide rounded-lg h-14 text-lg"
                  >
                    Unlock the full game
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    onClick={handleSkip}
                    variant="ghost"
                    size="lg"
                    className="w-full text-white/60 hover:text-white font-light"
                  >
                    I&apos;ll explore the free part first
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

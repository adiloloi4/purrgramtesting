import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { X, ChevronLeft, ChevronRight, CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useCourseStore, Badge } from '@/store/courseStore';
import { BadgeUnlock } from './BadgeUnlock';
import { playSound } from '@/lib/sounds';
import { curriculum } from '@/data/curriculum';
import { 
  TutorialMissionContent, 
  TutorialSlide,
  CodeChallengeSlide,
  MiniProjectSlide,
  BuildTaskSlide,
  MemoryGameSlide,
  CodePuzzleSlide,
  TypingChallengeSlide,
  SequenceGameSlide,
  SpotTheBugSlide,
  SpeedQuizSlide,
  InteractiveSimulationSlide,
  PromptGameSlide
} from '@/data/missions/tutorial';
import { TextSlide } from './slides/TextSlide';
import { QuizSlide } from './slides/QuizSlide';
import { ChecklistSlide } from './slides/ChecklistSlide';
import { TerminalSlide } from './slides/TerminalSlide';
import { DragDropSlide } from './slides/DragDropSlide';
import { IdentifySlide } from './slides/IdentifySlide';
import { MatchingSlide, SortingSlide, MiniChallengeSlide } from './slides/OtherSlides';
import { CodeChallengeSlideComponent, MiniProjectSlideComponent, BuildTaskSlideComponent } from './slides/BuildSlides';
import {
  MemoryGameSlideComponent,
  CodePuzzleSlideComponent,
  TypingChallengeSlideComponent,
  SequenceGameSlideComponent,
  SpotTheBugSlideComponent,
  SpeedQuizSlideComponent,
  InteractiveSimulationSlideComponent,
  PromptGameSlideComponent
} from './slides/GameSlides';

type MissionModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mission: TutorialMissionContent;
  worldId: number;
  xpReward?: number;
};

export const MissionModal: React.FC<MissionModalProps> = ({
  open,
  onOpenChange,
  mission,
  worldId,
  xpReward = 10,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [canAdvance, setCanAdvance] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [unlockedBadge, setUnlockedBadge] = useState<Badge | null>(null);
  
  // State for quiz/identify/miniChallenge
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const router = useRouter();
  const { markMissionComplete, unlockBadge, completedMissions } = useCourseStore();

  const slides = mission?.slides || [];
  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];
  const isLastSlide = currentSlideIndex === totalSlides - 1;

  useEffect(() => {
    if (open) {
      // Reset state when modal opens
      setTimeout(() => {
        setCurrentSlideIndex(0);
        setIsCompleted(false);
        setCanAdvance(false);
        setSelectedOptionId(null);
      }, 0);
    }
  }, [open, mission]);

  useEffect(() => {
    // Reset per-slide state when slide changes
    const resetState = () => {
      setSelectedOptionId(null);

      // Default advancement logic based on slide type
      if (currentSlide.type === 'text') {
        setCanAdvance(true);
      } else if (
        currentSlide.type === 'codeChallenge' || 
        currentSlide.type === 'miniProject' || 
        currentSlide.type === 'buildTask' ||
        currentSlide.type === 'memoryGame' ||
        currentSlide.type === 'codePuzzle' ||
        currentSlide.type === 'typingChallenge' ||
        currentSlide.type === 'sequenceGame' ||
        currentSlide.type === 'spotTheBug' ||
        currentSlide.type === 'speedQuiz' ||
        currentSlide.type === 'interactiveSimulation' ||
        currentSlide.type === 'promptGame'
      ) {
        // These slides handle their own completion state
        setCanAdvance(false);
      } else {
        setCanAdvance(false);
      }
    };
    
    // Use setTimeout to avoid synchronous setState in effect
    setTimeout(resetState, 0);
  }, [currentSlide]);

  const handleNext = () => {
    if (isLastSlide) {
      setIsCompleted(true);
    } else {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
      setCanAdvance(true); // Usually safe to go back and then forward again
    }
  };

  const handleCollectRewards = () => {
    // Mark mission as complete
    markMissionComplete(worldId, mission.id);
    
    // Check for badge unlock
    const currentMissions = Object.values(completedMissions).reduce((sum, arr) => sum + arr.length, 0);
    const totalMissions = currentMissions + 1; // +1 because we just completed one
    
    let badgeId: string | null = null;
    if (totalMissions === 1) badgeId = 'first-mission';
    else if (totalMissions === 10) badgeId = 'mission-master';
    
    if (badgeId) {
      const badge = unlockBadge(badgeId);
      if (badge) {
        setUnlockedBadge(badge);
        playSound('badge');
        return; // Don't close yet, wait for badge animation
      }
    }
    
    playSound('correct');
    // Navigate back to the world page
    onOpenChange(false);
    router.push(`/dashboard/course/world/${worldId}`);
  };
  
  const handleBadgeClose = () => {
    setUnlockedBadge(null);
    // After badge, navigate back to world page
    onOpenChange(false);
    router.push(`/dashboard/course/world/${worldId}`);
  };
  
  const handleWhatsNext = () => {
    if (!nextItem) return;
    
    // Mark mission as complete first
    markMissionComplete(worldId, mission.id);
    
    // Check for badge unlock (but don't show it, just unlock silently)
    const currentMissions = Object.values(completedMissions).reduce((sum, arr) => sum + arr.length, 0);
    const totalMissions = currentMissions + 1;
    
    let badgeId: string | null = null;
    if (totalMissions === 1) badgeId = 'first-mission';
    else if (totalMissions === 10) badgeId = 'mission-master';
    
    if (badgeId) {
      unlockBadge(badgeId);
    }
    
    playSound('correct');
    onOpenChange(false);
    
    if (nextItem.type === 'mission') {
      // Navigate to the next mission in the same world
      router.push(`/dashboard/course/world/${nextItem.world.id}/mission/${nextItem.mission.id}`);
    } else {
      // Navigate to the next world
      router.push(`/dashboard/course/world/${nextItem.world.id}`);
    }
  };
  
  
  // Get next mission/world info
  const getNextMission = () => {
    const currentWorld = curriculum.phases
      .flatMap(p => p.worlds)
      .find(w => w.id === worldId);
    
    if (!currentWorld) return null;
    
    const currentMissionIndex = currentWorld.missions.findIndex(m => m.id === mission.id);
    const nextMission = currentWorld.missions[currentMissionIndex + 1];
    
    if (nextMission) {
      return { type: 'mission' as const, world: currentWorld, mission: nextMission };
    }
    
    // Check if world is complete
    const worldMissions = completedMissions[worldId] || [];
    if (worldMissions.length === currentWorld.missions.length) {
      // Find next world
      const allWorlds = curriculum.phases.flatMap(p => p.worlds);
      const currentWorldIndex = allWorlds.findIndex(w => w.id === worldId);
      const nextWorld = allWorlds[currentWorldIndex + 1];
      
      if (nextWorld) {
        return { type: 'world' as const, world: nextWorld };
      }
    }
    
    return null;
  };
  
  const nextItem = getNextMission();

  // Shared handler for quiz-like slides
  const handleOptionSelect = (id: string) => {
    setSelectedOptionId(id);
    setCanAdvance(true);
  };

  const renderSlideContent = (slide: TutorialSlide) => {
    if (!slide) return <div className="text-white">Slide data missing</div>;

    switch (slide.type) {
      case 'text':
        return <TextSlide title={slide.title} body={slide.body} image={slide.image} youtubeVideo={slide.youtubeVideo} />;
      
      case 'quiz':
        return (
          <QuizSlide
            slide={slide}
            selectedOptionId={selectedOptionId}
            onSelectOption={handleOptionSelect}
          />
        );

      case 'identify':
        return (
          <IdentifySlide
            slide={slide}
            selectedOptionId={selectedOptionId}
            onSelectOption={handleOptionSelect}
          />
        );

      case 'miniChallenge':
        return (
          <MiniChallengeSlide
            slide={slide}
            selectedOptionId={selectedOptionId}
            onSelectOption={handleOptionSelect}
          />
        );

      case 'checklist':
        return (
          <ChecklistSlide
            slide={slide}
            // Allow next if at least one is checked, or even if none (user preference: "or just always allow Next")
            // Let's go with: allow next if any interaction, but also maybe just allow it initially? 
            // The prompt says "MissionModal may require at least one item checked".
            // Let's wait for interaction.
            onToggle={(hasChecked) => setCanAdvance(hasChecked)}
          />
        );

      case 'terminal':
        return (
          <TerminalSlide
            slide={slide}
            onSuccess={() => setCanAdvance(true)}
          />
        );

      case 'dragDrop':
        return (
          <DragDropSlide
            slide={slide}
            onInteract={() => setCanAdvance(true)}
          />
        );

      case 'matching':
        return (
          <MatchingSlide
            slide={slide}
            onInteract={() => setCanAdvance(true)}
          />
        );

      case 'sorting':
        return (
          <SortingSlide
            slide={slide}
            onInteract={() => setCanAdvance(true)}
          />
        );

      case 'codeChallenge':
        return (
          <CodeChallengeSlideComponent
            slide={slide as CodeChallengeSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'miniProject':
        return (
          <MiniProjectSlideComponent
            slide={slide as MiniProjectSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'buildTask':
        return (
          <BuildTaskSlideComponent
            slide={slide as BuildTaskSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'memoryGame':
        return (
          <MemoryGameSlideComponent
            slide={slide as MemoryGameSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'codePuzzle':
        return (
          <CodePuzzleSlideComponent
            slide={slide as CodePuzzleSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'typingChallenge':
        return (
          <TypingChallengeSlideComponent
            slide={slide as TypingChallengeSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'sequenceGame':
        return (
          <SequenceGameSlideComponent
            slide={slide as SequenceGameSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'spotTheBug':
        return (
          <SpotTheBugSlideComponent
            slide={slide as SpotTheBugSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'speedQuiz':
        return (
          <SpeedQuizSlideComponent
            slide={slide as SpeedQuizSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'interactiveSimulation':
        return (
          <InteractiveSimulationSlideComponent
            slide={slide as InteractiveSimulationSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      case 'promptGame':
        return (
          <PromptGameSlideComponent
            slide={slide as PromptGameSlide}
            onComplete={() => setCanAdvance(true)}
          />
        );

      default:
        return <div>Unknown slide type</div>;
    }
  };

  if (!open) return null;

  if (totalSlides === 0) {
     return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onOpenChange(false)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 text-center"
                    >
                         <button 
                            onClick={() => onOpenChange(false)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h2 className="text-xl font-light text-white mb-2">Content Loading...</h2>
                        <p className="text-white/50">This mission is being updated with new content. Check back soon!</p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
     );
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => onOpenChange(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

                {!isCompleted ? (
                    <>
                        <div className="p-6 pb-2 relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-sm font-medium text-white/50 uppercase tracking-widest">{mission.title}</h2>
                                <button 
                                    onClick={() => onOpenChange(false)}
                                    className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <Progress value={((currentSlideIndex + 1) / totalSlides) * 100} className="h-1 bg-white/10" />
                        </div>

                        <div className="p-6 md:p-8 flex-1 overflow-y-auto relative z-10 min-h-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlideIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {renderSlideContent(currentSlide)}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="p-6 border-t border-white/5 flex justify-between items-center bg-black/20 relative z-10">
                            <Button
                                variant="ghost"
                                onClick={handlePrev}
                                disabled={currentSlideIndex === 0}
                                className="text-white/50 hover:text-white hover:bg-white/5"
                            >
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Previous
                            </Button>

                            <Button
                                onClick={handleNext}
                                disabled={!canAdvance}
                                className={cn(
                                    "min-w-[120px]",
                                    canAdvance ? "bg-white text-black hover:bg-white/90" : "bg-white/10 text-white/30"
                                )}
                            >
                                {isLastSlide ? "Finish" : "Next"}
                                {!isLastSlide && <ChevronRight className="w-4 h-4 ml-2" />}
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="p-12 flex flex-col items-center justify-center text-center h-[500px] relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                        >
                            <CheckCircle className="w-10 h-10 text-green-400" />
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl font-light text-white mb-2"
                        >
                            Mission Complete
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-white/50 mb-8 max-w-sm"
                        >
                            You&apos;ve mastered this concept. System upgraded.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 font-bold">
                                <Zap className="w-4 h-4" />
                                +{xpReward} XP
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Button 
                                size="lg" 
                                onClick={handleCollectRewards}
                                className="bg-white text-black hover:bg-white/90 rounded-xl px-8"
                            >
                                Collect Rewards
                            </Button>
                        </motion.div>
                        
                        {nextItem && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 w-full max-w-md"
                          >
                            <motion.button
                              onClick={handleWhatsNext}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all text-left group"
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                                <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">What&apos;s Next?</h3>
                              </div>
                              {nextItem.type === 'mission' ? (
                                <div>
                                  <p className="text-white/60 text-sm mb-2">Continue in {nextItem.world.title}:</p>
                                  <p className="text-white font-medium group-hover:text-purple-300 transition-colors">{nextItem.mission.title}</p>
                                </div>
                              ) : (
                                <div>
                                  <p className="text-white/60 text-sm mb-2">Ready for the next world:</p>
                                  <p className="text-white font-medium group-hover:text-purple-300 transition-colors">{nextItem.world.title}</p>
                                  {nextItem.world.subtitle && (
                                    <p className="text-white/50 text-sm mt-1">{nextItem.world.subtitle}</p>
                                  )}
                                </div>
                              )}
                            </motion.button>
                          </motion.div>
                        )}
                    </div>
                )}
            </motion.div>
        </div>
      )}
      
      {/* Badge Unlock Modal */}
      {unlockedBadge && (
        <BadgeUnlock badge={unlockedBadge} onClose={handleBadgeClose} />
      )}
    </AnimatePresence>
  );
};

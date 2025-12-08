import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useCourseStore } from '@/store/courseStore';
import { MissionData, MissionSlide } from '@/data/missions/world0';
import { TextSlide } from './slides/TextSlide';
import { QuizSlide } from './slides/QuizSlide';
import { ChecklistSlide } from './slides/ChecklistSlide';
import { TerminalSlide } from './slides/TerminalSlide';
import { DragDropSlide } from './slides/DragDropSlide';
import { IdentifySlide } from './slides/IdentifySlide';
import { MatchingSlide, SortingSlide, MiniChallengeSlide } from './slides/OtherSlides';

type MissionModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mission: MissionData;
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
  const { markMissionComplete } = useCourseStore();

  const totalSlides = mission.slides.length;
  const currentSlide = mission.slides[currentSlideIndex];
  const isLastSlide = currentSlideIndex === totalSlides - 1;

  useEffect(() => {
    if (open) {
      setCurrentSlideIndex(0);
      setIsCompleted(false);
      setCanAdvance(false);
    }
  }, [open, mission]);

  useEffect(() => {
    if (currentSlide.type === 'text') {
      setCanAdvance(true);
    } else {
      setCanAdvance(false);
    }
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
      setCanAdvance(true); 
    }
  };

  const handleCollectRewards = () => {
    markMissionComplete(worldId, mission.id);
    onOpenChange(false);
  };

  const renderSlideContent = (slide: MissionSlide) => {
    switch (slide.type) {
      case 'text':
        return <TextSlide title={slide.title} body={slide.content} />;
      case 'quiz':
        return (
          <QuizSlide
            question={slide.question}
            // Ensure label is present by mapping text to label if needed
            options={slide.options.map(o => ({ id: o.id, label: o.text }))}
            correctOptionId={slide.correct}
            correctExplanation={slide.feedbackCorrect}
            wrongExplanation={slide.feedbackWrong}
            onAnswered={(isCorrect) => setCanAdvance(isCorrect)}
          />
        );
      case 'checklist':
        return (
          <ChecklistSlide
            prompt={slide.title}
            items={slide.items}
            onAllCheckedChange={(allChecked) => setCanAdvance(allChecked)}
          />
        );
      case 'terminal':
        return (
          <TerminalSlide
            prompt={slide.title}
            expectedCommand={slide.command}
            successMessage={slide.successMessage}
            onSuccess={() => setCanAdvance(true)}
          />
        );
      case 'drag_and_drop':
        return (
          <DragDropSlide
            prompt={slide.title}
            categories={slide.categories.map(c => ({ id: c, label: c }))} 
            items={slide.items.map(i => ({ id: i.id, label: i.text, correctCategoryId: (slide as any).correctMapping[i.id] }))} 
            onComplete={(success) => setCanAdvance(success)}
          />
        );
      case 'identify':
        return (
          <IdentifySlide
            prompt={slide.question}
            options={slide.options.map(o => ({ id: o.id, label: o.text }))}
            correctOptionId={slide.correctId}
            correctExplanation={slide.feedbackCorrect}
            wrongExplanation={slide.feedbackWrong}
            onAnswered={(success) => setCanAdvance(success)}
          />
        );
      case 'matching':
        return (
          <MatchingSlide
            // Handle mismatched prop names between World0 types and Page.tsx mapping
            prompt={(slide as any).prompt || slide.title}
            pairs={slide.pairs.map(p => ({ id: p.left + p.right, left: p.left, right: p.right }))}
            onComplete={(success) => setCanAdvance(success)}
          />
        );
      case 'sorting':
        return (
          <SortingSlide
            prompt={(slide as any).prompt || slide.title}
            items={slide.items}
            correctOrder={slide.correctOrder}
            onComplete={(success) => setCanAdvance(success)}
          />
        );
      case 'mini_challenge':
        return (
          <MiniChallengeSlide
            prompt={(slide as any).prompt || (slide as any).title}
            options={(slide as any).options ? (slide as any).options.map((o: any) => ({ id: o.id, label: o.text || o.label })) : []}
            correctOptionId={(slide as any).correctOptionId}
            correctExplanation={(slide as any).correctExplanation}
            wrongExplanation={(slide as any).wrongExplanation}
            onComplete={(success) => setCanAdvance(success)}
          />
        );
      default:
        return null;
    }
  };

  if (!open) return null;

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
                            You've mastered this concept. System upgraded.
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
                    </div>
                )}
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

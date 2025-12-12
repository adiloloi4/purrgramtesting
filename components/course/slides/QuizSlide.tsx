import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { QuizSlide as QuizSlideType } from '@/data/missions/tutorial';
import { SharedQuizView } from './SharedQuizView';
import { XPReward } from '../XPReward';
import { playSound } from '@/lib/sounds';

type QuizSlideProps = {
  slide: QuizSlideType;
  selectedOptionId: string | null;
  onSelectOption: (id: string) => void;
};

export const QuizSlide: React.FC<QuizSlideProps> = ({
  slide,
  selectedOptionId,
  onSelectOption,
}) => {
  const [xpRewardKey, setXpRewardKey] = useState(0);
  
  // Determine if using new schema or old schema
  const isNewSchema = slide.options.some(o => o.correct !== undefined);
  
  let isCorrect = false;
  let explanation = "";

  if (selectedOptionId) {
    if (isNewSchema) {
      const selectedOpt = slide.options.find(o => o.id === selectedOptionId);
      isCorrect = selectedOpt?.correct ?? false;
      explanation = isCorrect ? "Correct!" : "Incorrect.";
    } else {
      isCorrect = selectedOptionId === slide.correctOptionId;
      explanation = isCorrect ? (slide.correctExplanation || "") : (slide.wrongExplanation || "");
    }
  }

  useEffect(() => {
    if (selectedOptionId && isCorrect) {
      // Increment key to force new animation every time
      setXpRewardKey(prev => prev + 1);
      // Play success sound
      playSound('correct');
    }
  }, [selectedOptionId, isCorrect]);

  // Randomize options order once when component mounts
  const viewOptions = useMemo(() => {
    const options = slide.options.map(o => ({
      id: o.id,
      label: o.text || o.label || ""
    }));
    // Shuffle the array
    return options.sort(() => Math.random() - 0.5);
  }, [slide.options]);

  return (
    <div className="space-y-8">
      {xpRewardKey > 0 && <XPReward key={xpRewardKey} amount={2} position="top" />}
      <SharedQuizView 
        prompt={slide.question}
        options={viewOptions}
        selectedOptionId={selectedOptionId}
        onSelectOption={onSelectOption}
      />

      <AnimatePresence>
        {selectedOptionId && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={cn(
              "rounded-xl p-4 border overflow-hidden",
              isCorrect ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"
            )}
          >
            <p className={cn("text-sm", isCorrect ? "text-green-200" : "text-red-200")}>
              {explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

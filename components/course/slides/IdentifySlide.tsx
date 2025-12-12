import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { IdentifySlide as IdentifySlideType } from '@/data/missions/tutorial';
import { SharedQuizView } from './SharedQuizView';
import { XPReward } from '../XPReward';

type IdentifySlideProps = {
  slide: IdentifySlideType;
  selectedOptionId: string | null;
  onSelectOption: (id: string) => void;
};

export const IdentifySlide: React.FC<IdentifySlideProps> = ({
  slide,
  selectedOptionId,
  onSelectOption,
}) => {
  const [xpRewardKey, setXpRewardKey] = useState(0);
  const isNewSchema = !!slide.items;
  
  let isCorrect = false;
  let explanation = "";

  if (selectedOptionId) {
    if (isNewSchema) {
       // slide.items is IdentifyItem[], which has text and correct
       const selectedItem = slide.items?.find(i => i.id === selectedOptionId);
       isCorrect = selectedItem?.correct ?? false;
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
    }
  }, [selectedOptionId, isCorrect]);

  // Randomize options order once when component mounts
  const viewOptions = useMemo(() => {
    const rawOptions = slide.items || slide.options || [];
    const options = rawOptions.map(o => ({
      id: o.id,
      label: (o as any).text || (o as any).label || ""
    }));
    // Shuffle the array
    return options.sort(() => Math.random() - 0.5);
  }, [slide.items, slide.options]);

  return (
    <div className="space-y-8">
      {xpRewardKey > 0 && <XPReward key={xpRewardKey} amount={2} position="top" />}
      <SharedQuizView 
        prompt={slide.prompt}
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
              "rounded-xl p-4 border",
              isCorrect ? "bg-green-500/10 border-green-500/20 text-green-200" : "bg-red-500/10 border-red-500/20 text-red-200"
            )}
          >
            {explanation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

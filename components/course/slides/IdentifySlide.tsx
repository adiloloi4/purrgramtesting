import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { IdentifySlide as IdentifySlideType } from '@/data/missions/tutorial';
import { SharedQuizView } from './SharedQuizView';
import { XPReward } from '../XPReward';
import { Lightbulb } from 'lucide-react';

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

  const [showHint, setShowHint] = useState(false);

  return (
    <div className="space-y-8">
      {xpRewardKey > 0 && <XPReward key={xpRewardKey} amount={2} position="top" />}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-light text-white">{slide.prompt}</h2>
          {slide.hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 hover:bg-yellow-500/20 transition-colors text-sm"
            >
              <Lightbulb className="w-4 h-4" />
              Hint
            </button>
          )}
        </div>
        
        {showHint && slide.hint && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 text-sm"
          >
            {slide.hint}
          </motion.div>
        )}
      </div>
      
      <SharedQuizView 
        prompt=""
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

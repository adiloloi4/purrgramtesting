import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { IdentifySlide as IdentifySlideType } from '@/data/missions/tutorial';
import { SharedQuizView } from './SharedQuizView';

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

  const rawOptions = slide.items || slide.options || [];
  const viewOptions = rawOptions.map(o => ({
    id: o.id,
    label: (o as any).text || (o as any).label || ""
  }));

  return (
    <div className="space-y-8">
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

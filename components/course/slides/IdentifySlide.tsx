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
  const isCorrect = selectedOptionId === slide.correctOptionId;

  return (
    <div className="space-y-8">
      <SharedQuizView 
        prompt={slide.prompt}
        options={slide.options}
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
            {isCorrect ? slide.correctExplanation : slide.wrongExplanation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

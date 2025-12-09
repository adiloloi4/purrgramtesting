import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { QuizSlide as QuizSlideType } from '@/data/missions/tutorial';
import { SharedQuizView } from './SharedQuizView';

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
  const isCorrect = selectedOptionId === slide.correctOptionId;

  return (
    <div className="space-y-8">
      <SharedQuizView 
        prompt={slide.question}
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
              "rounded-xl p-4 border overflow-hidden",
              isCorrect ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"
            )}
          >
            <p className={cn("text-sm", isCorrect ? "text-green-200" : "text-red-200")}>
              {isCorrect ? slide.correctExplanation : slide.wrongExplanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

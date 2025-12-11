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

  const viewOptions = slide.options.map(o => ({
    id: o.id,
    label: o.text || o.label || ""
  }));

  return (
    <div className="space-y-8">
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

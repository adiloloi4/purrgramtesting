import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { QuizOption } from '@/data/missions/tutorial';
import { SharedQuizView } from './SharedQuizView';

type QuizSlideProps = {
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  correctExplanation: string;
  wrongExplanation: string;
  onAnswered: (isCorrect: boolean) => void;
};

export const QuizSlide: React.FC<QuizSlideProps> = ({
  question,
  options,
  correctOptionId,
  correctExplanation,
  wrongExplanation,
  onAnswered,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  const handleSelect = (id: string) => {
    if (isLocked) return;
    setSelectedId(id);
    setIsLocked(true);
    const isCorrect = id === correctOptionId;
    onAnswered(isCorrect);
  };

  const isCorrect = selectedId === correctOptionId;

  return (
    <div className="space-y-8">
      <SharedQuizView 
        prompt={question}
        options={options}
        selectedOptionId={selectedId}
        onSelectOption={handleSelect}
      />

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={cn(
              "rounded-xl p-4 border overflow-hidden",
              isCorrect ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"
            )}
          >
            <p className={cn("text-sm", isCorrect ? "text-green-200" : "text-red-200")}>
              {isCorrect ? correctExplanation : wrongExplanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

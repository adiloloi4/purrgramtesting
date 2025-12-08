import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { QuizOption } from '@/data/missions/tutorial';
import { SharedQuizView } from './SharedQuizView';

type IdentifySlideProps = {
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  correctExplanation: string;
  wrongExplanation: string;
  onAnswered: (success: boolean) => void;
};

export const IdentifySlide: React.FC<IdentifySlideProps> = ({
  prompt,
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
        prompt={prompt}
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
              "rounded-xl p-4 border",
              isCorrect ? "bg-green-500/10 border-green-500/20 text-green-200" : "bg-red-500/10 border-red-500/20 text-red-200"
            )}
          >
            {isCorrect ? correctExplanation : wrongExplanation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

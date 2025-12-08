import React from 'react';
import { cn } from '@/lib/utils';

interface QuizSlideViewProps {
  slide: {
    question: string; // or prompt
    options: { id: string; label: string }[];
  };
  selectedOptionId?: string | null;
  onSelectOption: (id: string) => void;
}

export function QuizSlideView({
  slide,
  selectedOptionId,
  onSelectOption
}: QuizSlideViewProps) {
  return (
    <div className="space-y-6">
      <p className="text-xl font-medium text-slate-50">
        {slide.question}
      </p>

      <div className="space-y-3">
        {slide.options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelectOption(option.id)}
            className={cn(
              "w-full rounded-full px-4 py-3 text-left text-sm font-medium transition",
              "bg-slate-900/60 border border-slate-700/60 hover:border-purple-500/80",
              "text-slate-50",
              selectedOptionId === option.id &&
                "border-purple-400 bg-purple-500/15"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

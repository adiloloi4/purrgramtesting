import React from 'react';
import { cn } from '@/lib/utils';

type SharedQuizViewProps = {
  prompt: string;
  options: { id: string; label: string }[];
  selectedOptionId?: string | null;
  onSelectOption: (id: string) => void;
};

export const SharedQuizView: React.FC<SharedQuizViewProps> = ({
  prompt,
  options,
  selectedOptionId,
  onSelectOption,
}) => {
  return (
    <div className="space-y-6">
      <p className="text-xl font-medium text-slate-50">
        {prompt}
      </p>

      <div className="space-y-3">
        {options.map((option) => (
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
};


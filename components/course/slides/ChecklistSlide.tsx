import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChecklistSlide as ChecklistSlideType } from '@/data/missions/tutorial';

type ChecklistSlideProps = {
  slide: ChecklistSlideType;
  onToggle: (hasChecked: boolean) => void;
};

export const ChecklistSlide: React.FC<ChecklistSlideProps> = ({
  slide,
  onToggle,
}) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    const isChecked = checkedItems.includes(id);
    const newChecked = isChecked 
      ? checkedItems.filter((i) => i !== id)
      : [...checkedItems, id];
    
    setCheckedItems(newChecked);
    // Notify parent if we have at least one checked item
    onToggle(newChecked.length > 0);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-light text-white">{slide.prompt}</h2>
      <div className="space-y-3">
        {slide.items.map((item, index) => {
          const isChecked = checkedItems.includes(item.id);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => toggleItem(item.id)}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200",
                isChecked 
                  ? "bg-purple-500/10 border-purple-500/30" 
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              )}
            >
              <div className={cn(
                  "w-6 h-6 rounded border flex items-center justify-center transition-colors",
                  isChecked ? "bg-purple-500 border-purple-500 text-white" : "border-white/30 text-transparent"
              )}>
                  <Check className="w-4 h-4" />
              </div>
              <span className={cn("text-lg font-light", isChecked ? "text-white" : "text-white/60")}>
                  {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DragDropCategory, DragDropItem } from '@/data/missions/tutorial';

type DragAndDropSlideProps = {
  prompt: string;
  categories: DragDropCategory[];
  items: DragDropItem[];
  onComplete: (success: boolean) => void;
};

export const DragAndDropSlide: React.FC<DragAndDropSlideProps> = ({
  prompt,
  categories,
  items,
  onComplete,
}) => {
  const [placements, setPlacements] = useState<{ [itemId: string]: string }>({}); // itemId -> categoryId
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const unplacedItems = items.filter(item => !placements[item.id]);

  const handleItemClick = (itemId: string) => {
    if (isChecked) return;
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
  };

  const handleCategoryClick = (categoryId: string) => {
    if (isChecked || !selectedItemId) return;
    setPlacements(prev => ({ ...prev, [selectedItemId]: categoryId }));
    setSelectedItemId(null);
  };

  const handleRemovePlacement = (itemId: string) => {
    if (isChecked) return;
    setPlacements(prev => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  };

  const checkAnswer = () => {
    const allPlaced = items.every(item => placements[item.id]);
    if (!allPlaced) return;

    const correct = items.every(item => placements[item.id] === item.correctCategoryId);
    setIsChecked(true);
    setIsCorrect(correct);
    if (correct) {
      onComplete(true);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-light text-white">{prompt}</h3>
      
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map(category => (
          <div 
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={cn(
              "p-4 rounded-xl border border-white/10 bg-white/5 min-h-[120px] transition-colors relative",
              selectedItemId && !isChecked ? "hover:border-purple-500/50 cursor-pointer" : ""
            )}
          >
            <div className="text-xs uppercase tracking-widest text-white/40 mb-3">{category.label}</div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(placements)
                .filter(([_, catId]) => catId === category.id)
                .map(([itemId, _]) => {
                  const item = items.find(i => i.id === itemId);
                  if (!item) return null;
                  
                  let style = "bg-white/10 border-white/10";
                  if (isChecked) {
                      style = placements[itemId] === item.correctCategoryId
                        ? "bg-green-500/20 border-green-500/30 text-green-200" 
                        : "bg-red-500/20 border-red-500/30 text-red-200";
                  }

                  return (
                    <motion.div
                      layoutId={itemId}
                      key={itemId}
                      onClick={(e) => { e.stopPropagation(); handleRemovePlacement(itemId); }}
                      className={cn(
                        "text-xs px-2 py-1 rounded-md border cursor-pointer",
                        style
                      )}
                    >
                      {item.label}
                    </motion.div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Unplaced Items */}
      <div className="bg-black/20 p-6 rounded-xl border border-white/5 min-h-[100px]">
         <div className="text-xs text-white/30 mb-4 uppercase tracking-widest">Tools to Sort</div>
         <div className="flex flex-wrap gap-3">
            {unplacedItems.map(item => (
              <motion.button
                layoutId={item.id}
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                  selectedItemId === item.id 
                    ? "bg-purple-500 text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
                    : "bg-white/5 border-white/10 hover:bg-white/10 text-white/80"
                )}
              >
                {item.label}
              </motion.button>
            ))}
            {unplacedItems.length === 0 && !isChecked && (
                <div className="w-full text-center py-2">
                    <button 
                        onClick={checkAnswer}
                        className="text-sm bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-white/90"
                    >
                        Check Answer
                    </button>
                </div>
            )}
            {isChecked && (
                <div className={cn("w-full text-center py-2 font-bold", isCorrect ? "text-green-400" : "text-red-400")}>
                    {isCorrect ? "Perfect! System Online." : "Incorrect Configuration. Resetting..."}
                    {!isCorrect && (
                        <button 
                            onClick={() => { setIsChecked(false); setPlacements({}); }}
                            className="block mx-auto mt-2 text-xs text-white/50 underline"
                        >
                            Reset
                        </button>
                    )}
                </div>
            )}
         </div>
      </div>
    </div>
  );
};

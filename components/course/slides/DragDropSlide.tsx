import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DragDropSlide as DragDropSlideType } from '@/data/missions/tutorial';
import { Lightbulb, CheckCircle2, X } from 'lucide-react';

type DragDropSlideProps = {
  slide: DragDropSlideType;
  onInteract: () => void;
  onComplete?: () => void;
};

type DragDropSlideState = Record<string, string[]>; // categoryId -> itemIds

export const DragDropSlide: React.FC<DragDropSlideProps> = ({
  slide,
  onInteract,
  onComplete,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    slide.categories[0]?.id ?? null
  );

  const [assigned, setAssigned] = useState<DragDropSlideState>(() => {
    const initial: DragDropSlideState = {};
    slide.categories.forEach((cat) => {
      initial[cat.id] = [];
    });
    return initial;
  });

  const [showHint, setShowHint] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Check if all items are placed
  const allItemsPlaced = slide.items.every(item => {
    return Object.values(assigned).some(categoryItems => categoryItems.includes(item.id));
  });

  // Check if all items are in correct categories
  const checkCorrectness = () => {
    if (!allItemsPlaced) return false;
    
    return slide.items.every(item => {
      const categoryWithItem = Object.keys(assigned).find(catId => 
        assigned[catId].includes(item.id)
      );
      return categoryWithItem === item.correctCategoryId;
    });
  };

  const isCorrect = allItemsPlaced && checkCorrectness();

  // Only allow progression when all items are correctly placed
  useEffect(() => {
    if (isCorrect && onComplete && !isChecked) {
      // Auto-advance when correct (optional - you can remove this if you want manual check)
      // For now, we'll require the check button to be clicked
    }
  }, [isCorrect, onComplete, isChecked]);

  const handleAddToCategory = (itemId: string) => {
    const targetCategoryId = selectedCategoryId;
    if (!targetCategoryId || isChecked) return;

    // Check against current state to avoid duplicate updates
    const current = assigned[targetCategoryId] ?? [];
    if (current.includes(itemId)) return;

    setAssigned((prev) => {
      const currentInPrev = prev[targetCategoryId] ?? [];
      if (currentInPrev.includes(itemId)) return prev;

      return {
        ...prev,
        [targetCategoryId]: [...currentInPrev, itemId]
      };
    });
  };

  const handleRemoveFromCategory = (itemId: string) => {
    if (isChecked) return;
    
    setAssigned((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach(catId => {
        newState[catId] = newState[catId].filter(id => id !== itemId);
      });
      return newState;
    });
  };

  const handleCheck = () => {
    setIsChecked(true);
    // Only allow progression if correct
    if (isCorrect && onComplete) {
      onComplete();
    }
  };

  const handleReset = () => {
    setAssigned(() => {
      const initial: DragDropSlideState = {};
      slide.categories.forEach((cat) => {
        initial[cat.id] = [];
      });
      return initial;
    });
    setIsChecked(false);
  };

  const unassignedItems = slide.items.filter(item => {
    return !Object.values(assigned).some(categoryItems => categoryItems.includes(item.id));
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-lg text-white">{slide.prompt}</p>
        {slide.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 hover:bg-yellow-500/20 transition-colors text-sm"
          >
            <Lightbulb className="w-4 h-4" />
            Hint
          </button>
        )}
      </div>

      {showHint && slide.hint && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 text-sm"
        >
          {slide.hint}
        </motion.div>
      )}

      {/* Instructions */}
      {!isChecked && (
        <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-200 text-sm">
          {selectedCategoryId 
            ? `Selected: ${slide.categories.find(c => c.id === selectedCategoryId)?.label}. Click tools below to add them here.`
            : "Step 1: Click a category above. Step 2: Click tools below to add them to that category."}
        </div>
      )}

      {/* Categories grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {slide.categories.map((cat) => {
          const isActive = selectedCategoryId === cat.id;
          const itemsInCat = assigned[cat.id] ?? [];

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => !isChecked && setSelectedCategoryId(cat.id)}
              className={cn(
                "relative min-h-[140px] rounded-xl border-2 px-4 py-3 text-left transition-all",
                "border-white/10 bg-white/5",
                isActive && !isChecked && "border-purple-500 shadow-lg shadow-purple-500/20 bg-purple-500/10 ring-2 ring-purple-500/30",
                isChecked && "border-white/20",
                !isChecked && "hover:border-white/20 cursor-pointer"
              )}
            >
              <div className={cn(
                "mb-3 text-sm font-semibold uppercase tracking-wider flex items-center gap-2",
                isActive && !isChecked ? "text-purple-300" : "text-white"
              )}>
                {cat.label}
                {isActive && !isChecked && (
                  <span className="text-xs bg-purple-500/20 px-2 py-0.5 rounded-full">Selected</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 min-h-[80px]">
                {itemsInCat.map((itemId) => {
                  const item = slide.items.find((i) => i.id === itemId);
                  if (!item) return null;
                  
                  const isCorrectPlacement = item.correctCategoryId === cat.id;
                  
                  return (
                    <motion.span
                      key={itemId + "-" + cat.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isChecked) handleRemoveFromCategory(itemId);
                      }}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors",
                        isChecked 
                          ? isCorrectPlacement
                            ? "bg-green-500/20 border border-green-500/30 text-green-200"
                            : "bg-red-500/20 border border-red-500/30 text-red-200"
                          : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                      )}
                    >
                      {item.label}
                      {!isChecked && <X className="w-3 h-3 opacity-50" />}
                      {isChecked && isCorrectPlacement && <CheckCircle2 className="w-3 h-3" />}
                    </motion.span>
                  );
                })}
                {itemsInCat.length === 0 && isActive && !isChecked && (
                  <span className="text-xs text-purple-300/60 italic">
                    Click tools below to add them here
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Tools pool */}
      {unassignedItems.length > 0 && !isChecked && (
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold uppercase tracking-wide text-white">
              Tools to Sort
            </div>
            {selectedCategoryId && (
              <div className="text-xs text-purple-300">
                Adding to: <strong>{slide.categories.find(c => c.id === selectedCategoryId)?.label}</strong>
              </div>
            )}
        </div>
        <div className="flex flex-wrap gap-2">
            {unassignedItems.map((item) => (
              <motion.button
              key={item.id}
              type="button"
              onClick={() => handleAddToCategory(item.id)}
                disabled={!selectedCategoryId}
                whileHover={{ scale: selectedCategoryId ? 1.05 : 1 }}
                whileTap={{ scale: selectedCategoryId ? 0.95 : 1 }}
              className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  selectedCategoryId
                    ? "bg-white/10 border-2 border-purple-500/50 text-white hover:border-purple-500 hover:bg-purple-500/20 cursor-pointer"
                    : "bg-white/5 border border-white/10 text-white/40 cursor-not-allowed"
              )}
            >
              {item.label}
              </motion.button>
            ))}
          </div>
          {!selectedCategoryId && (
            <p className="text-xs text-white/50 italic text-center mt-2">
              Select a category above first, then click tools to add them
            </p>
          )}
        </div>
      )}

      {/* Check button and feedback */}
      {allItemsPlaced && !isChecked && (
        <div className="flex justify-center">
          <button
            onClick={handleCheck}
            className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-colors"
          >
            Check Answer
            </button>
        </div>
      )}

      {isChecked && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "p-4 rounded-xl text-center font-medium",
            isCorrect 
              ? "bg-green-500/20 border border-green-500/30 text-green-200"
              : "bg-red-500/20 border border-red-500/30 text-red-200"
          )}
        >
          {isCorrect ? (
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Perfect! All items are correctly placed.</span>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <X className="w-5 h-5" />
                <span>Some items are in the wrong category. Try again!</span>
              </div>
              <button
                onClick={handleReset}
                className="mt-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
              >
                Reset and Try Again
              </button>
      </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

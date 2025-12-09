import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DragDropSlide as DragDropSlideType } from '@/data/missions/tutorial';

type DragDropSlideProps = {
  slide: DragDropSlideType;
  onInteract: () => void;
};

type DragDropSlideState = Record<string, string[]>; // categoryId -> itemIds

export const DragDropSlide: React.FC<DragDropSlideProps> = ({
  slide,
  onInteract,
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

  const handleAddToCategory = (itemId: string) => {
    const targetCategoryId = selectedCategoryId;
    if (!targetCategoryId) return;

    setAssigned((prev) => {
      const current = prev[targetCategoryId] ?? [];
      // allow duplicates across categories, but avoid exact duplicates in the same category
      if (current.includes(itemId)) return prev;

      const newState = {
        ...prev,
        [targetCategoryId]: [...current, itemId]
      };
      
      // Notify parent interaction
      onInteract();
      
      return newState;
    });
  };

  return (
    <div className="space-y-6">
      <p className="text-lg text-slate-50">{slide.prompt}</p>

      {/* Categories grid */}
      <div className="grid grid-cols-3 gap-4">
        {slide.categories.map((cat) => {
          const isActive = selectedCategoryId === cat.id;
          const itemsInCat = assigned[cat.id] ?? [];

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategoryId(cat.id)}
              className={cn(
                "relative h-32 rounded-2xl border bg-slate-900/60 px-3 py-2 text-left text-xs uppercase tracking-wide transition-colors",
                "border-slate-700/60 text-slate-400",
                isActive && "border-purple-400/90 bg-purple-500/10"
              )}
            >
              <div className="mb-2 text-[10px] font-semibold">
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-1">
                {itemsInCat.map((itemId) => {
                  const item = slide.items.find((i) => i.id === itemId);
                  if (!item) return null;
                  return (
                    <span
                      key={itemId + "-" + cat.id}
                      className="rounded-full bg-slate-800/80 px-2 py-1 text-[10px] text-slate-50"
                    >
                      {item.label}
                    </span>
                  );
                })}
                {itemsInCat.length === 0 && isActive && (
                  <span className="text-[10px] text-slate-600">
                    Click a tool below to add it here.
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Tools pool */}
      <div className="mt-4 space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Tools to sort
        </div>
        <div className="flex flex-wrap gap-2">
          {slide.items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleAddToCategory(item.id)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition",
                "bg-slate-900/70 border border-slate-700/70 text-slate-50",
                "hover:border-purple-400/90 hover:bg-purple-500/15"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

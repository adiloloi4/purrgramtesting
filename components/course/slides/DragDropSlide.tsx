import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DragDropItem, DragDropCategory } from '@/data/missions/tutorial';

type DragDropSlideProps = {
  prompt: string;
  categories: DragDropCategory[];
  items: DragDropItem[];
  onComplete: (success: boolean) => void;
};

type DragDropSlideState = Record<string, string[]>; // categoryId -> itemIds

export const DragDropSlide: React.FC<DragDropSlideProps> = ({
  prompt,
  categories,
  items,
  onComplete,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    categories[0]?.id ?? null
  );

  const [assigned, setAssigned] = useState<DragDropSlideState>(() => {
    const initial: DragDropSlideState = {};
    categories.forEach((cat) => {
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

      return {
        ...prev,
        [targetCategoryId]: [...current, itemId]
      };
    });
  };

  // Check completion whenever assigned state changes
  useEffect(() => {
    const allItemsPlacedCorrectly = items.every(item => {
        // Check if item is in its correct category
        const correctCat = item.correctCategoryId;
        const assignedToCorrect = assigned[correctCat]?.includes(item.id);
        return assignedToCorrect;
    });

    // Wait, the prompt says "Some tools belong to more than one layer".
    // But the data structure only has ONE `correctCategoryId` per item.
    // "Once you place a tool, it disappears from the bottom pool... even though some tools should be usable in multiple boxes."
    // The user updated prompt to say "Some tools belong to more than one layer".
    // However, the verification logic in the original code (and user's request doesn't explicitly change validation logic, only interaction) relied on strict 1-to-1 mapping from `correctCategoryId`.
    // If an item belongs to multiple, but `correctCategoryId` is single, how do we validate?
    // User's Part 3 says "Keep the XP completion logic the same as before."
    // "Result: The copy in 'Build Your First Stack' is accurate."
    // The original validation was: `const correct = items.every(item => placements[item.id] === correctMapping[item.id]);`
    // Now we have `assigned` map.
    // Let's assume "correctness" means at least the *primary* category is assigned.
    // Or maybe just check if *all items* are used at least once?
    // The user didn't provide new validation logic.
    // Let's assume if we have assigned every item to at least its `correctCategoryId`, we are good?
    // Or simpler: just check if all items are placed somewhere?
    // The prompt says: "XP completion logic the same as before."
    // Before: `checkAnswer` button checks if `placements[item.id] === item.correctCategoryId`.
    
    // I will add a "Check Answer" button or check automatically?
    // The user's provided code in Part 3 `useEffect` calls `onCompleted` automatically:
    // `if (allAssignedCount > 0 && onCompleted) { onCompleted(assigned); }`
    // Wait, `onCompleted` in my prop signature expects `(success: boolean)`.
    // The user's provided signature `onCompleted?: (state: DragDropSlideState) => void;` differs.
    // I need to adapt. `MissionModal` expects `onComplete(success: boolean)`.
    // So inside `DragDropSlide`, I should determine success.
    
    // Logic:
    // 1. Are all items placed?
    // 2. Are they placed correctly? (Item X in correctCategoryId).
    // Since user allowed placing in multiple, we should check if `assigned[item.correctCategoryId]` contains `item.id`.
    // And maybe ignore extra placements?
    
    const allItemsAssignedCorrectly = items.every(item => {
        return assigned[item.correctCategoryId]?.includes(item.id);
    });

    if (allItemsAssignedCorrectly) {
        onComplete(true);
    }
  }, [assigned, items, onComplete]);

  return (
    <div className="space-y-6">
      <p className="text-lg text-slate-50">{prompt}</p>

      {/* Categories grid */}
      <div className="grid grid-cols-3 gap-4">
        {categories.map((cat) => {
          const isActive = selectedCategoryId === cat.id;
          const itemsInCat = assigned[cat.id] ?? [];

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategoryId(cat.id)}
              className={cn(
                "relative h-32 rounded-2xl border bg-slate-900/60 px-3 py-2 text-left text-xs uppercase tracking-wide",
                "border-slate-700/60 text-slate-400",
                isActive && "border-purple-400/90 bg-purple-500/10"
              )}
            >
              <div className="mb-2 text-[10px] font-semibold">
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-1">
                {itemsInCat.map((itemId) => {
                  const item = items.find((i) => i.id === itemId);
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
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleAddToCategory(item.id)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium",
                "bg-slate-900/70 border border-slate-700/70 text-slate-50",
                "hover:border-purple-400/90 hover:bg-purple-500/15 transition"
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

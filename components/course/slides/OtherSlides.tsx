import React, { useState } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MatchingSlide as MatchingSlideType, SortingSlide as SortingSlideType, MiniChallengeSlide as MiniChallengeSlideType } from '@/data/missions/tutorial';
import { SharedQuizView } from './SharedQuizView';

// Matching Slide
type MatchingSlideProps = {
  slide: MatchingSlideType;
  onInteract: () => void;
};

export const MatchingSlide: React.FC<MatchingSlideProps> = ({ slide, onInteract }) => {
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [matches, setMatches] = useState<{ [leftId: string]: string }>({}); // leftId -> rightText
    const [completedPairs, setCompletedPairs] = useState<string[]>([]); // array of pair ids

    const handleLeftClick = (pairId: string) => {
        if (completedPairs.includes(pairId)) return;
        setSelectedLeft(pairId);
    };

    const handleRightClick = (rightText: string) => {
        if (!selectedLeft) return;
        
        // Find pair for selected left
        const selectedPair = slide.pairs.find(p => p.id === selectedLeft);
        if (!selectedPair) return;

        // Check if this right text matches the selected pair's right
        if (selectedPair.right === rightText) {
            // Correct match
            setCompletedPairs(prev => [...prev, selectedPair.id]);
            setMatches(prev => ({ ...prev, [selectedLeft]: rightText }));
            setSelectedLeft(null);
            
            // Allow next after at least one match
            onInteract();
        } else {
            // Wrong match - reset selection
            setSelectedLeft(null);
            // Allow next on any interaction
            onInteract();
        }
    };

    // Get all unique right texts and shuffle them
    const allRightTexts = [...new Set(slide.pairs.map(p => p.right))].sort(() => Math.random() - 0.5);

    return (
        <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-light text-white">{slide.prompt}</h2>
            <div className="flex justify-between gap-8">
                <div className="flex-1 space-y-3">
                    <h3 className="text-sm font-medium text-white/60 mb-2">Left Column</h3>
                    {slide.pairs.map(pair => {
                        const isCompleted = completedPairs.includes(pair.id);
                        const isSelected = selectedLeft === pair.id;
                        return (
                            <motion.div 
                                key={pair.id}
                                onClick={() => !isCompleted && handleLeftClick(pair.id)}
                                className={cn(
                                    "p-4 rounded-xl border transition-all cursor-pointer text-sm",
                                    isCompleted ? "bg-green-500/10 border-green-500/30 text-green-200" : 
                                    isSelected ? "bg-purple-500/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/20" : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                                )}
                                whileHover={{ scale: isCompleted ? 1 : 1.02 }}
                                whileTap={{ scale: isCompleted ? 1 : 0.98 }}
                            >
                                {pair.left}
                            </motion.div>
                        );
                    })}
                </div>
                <div className="flex-1 space-y-3">
                    <h3 className="text-sm font-medium text-white/60 mb-2">Right Column</h3>
                    {allRightTexts.map(rightText => {
                        // Check if this right text has been matched
                        const matchedLeftId = Object.keys(matches).find(key => matches[key] === rightText);
                        const isMatched = !!matchedLeftId;
                        
                        return (
                            <motion.div 
                                key={rightText}
                                onClick={() => !isMatched && handleRightClick(rightText)}
                                className={cn(
                                    "p-4 rounded-xl border transition-all cursor-pointer text-sm",
                                    isMatched ? "bg-green-500/10 border-green-500/30 text-green-200 opacity-50 cursor-not-allowed" : 
                                    selectedLeft ? "bg-white/5 border-white/10 hover:bg-white/10 text-white" : "bg-white/5 border-white/10 text-white/60"
                                )}
                                whileHover={{ scale: isMatched ? 1 : 1.02 }}
                                whileTap={{ scale: isMatched ? 1 : 0.98 }}
                            >
                                {rightText}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            {completedPairs.length > 0 && (
                <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-200 text-sm text-center">
                    {completedPairs.length} of {slide.pairs.length} matched correctly!
                </div>
            )}
        </div>
    );
};

// Sorting Slide
type SortingSlideProps = {
  slide: SortingSlideType;
  onInteract: () => void;
};

export const SortingSlide: React.FC<SortingSlideProps> = ({ slide, onInteract }) => {
    const [order, setOrder] = useState(slide.items);
    const [isChecked, setIsChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const checkOrder = () => {
        const correct = order.every((item, index) => item === slide.correctOrder[index]);
        setIsChecked(true);
        setIsCorrect(correct);
        onInteract(); // Always allow next after checking, even if wrong
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-light text-white">{slide.prompt}</h2>
            <Reorder.Group axis="y" values={order} onReorder={(newOrder) => {
                setOrder(newOrder);
                // Can we unlock simply by reordering? User said "do not block Next".
                onInteract();
            }} className="space-y-3">
                {order.map(item => (
                    <Reorder.Item key={item} value={item}>
                        <div className={cn(
                            "p-4 rounded-xl border bg-white/5 border-white/10 cursor-grab active:cursor-grabbing flex items-center gap-4",
                            isChecked && isCorrect ? "border-green-500/30 bg-green-500/10" : ""
                        )}>
                            <div className="text-white/30">:::</div>
                            <div>{item}</div>
                        </div>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
            
            {/* Optional check button, but we already unlocked Next on interaction */}
            {!isChecked && (
                <button 
                    onClick={checkOrder}
                    className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-white/90 mt-4"
                >
                    Check Order
                </button>
            )}
            {isChecked && !isCorrect && (
                <div className="text-yellow-400 text-sm mt-2">
                    Order saved. You can continue. 
                    <button onClick={() => setIsChecked(false)} className="underline ml-2 text-white/50">Edit</button>
                </div>
            )}
        </div>
    );
};

// Mini Challenge Slide
type MiniChallengeSlideProps = {
  slide: MiniChallengeSlideType;
  selectedOptionId: string | null;
  onSelectOption: (id: string) => void;
};

export const MiniChallengeSlide: React.FC<MiniChallengeSlideProps> = ({ 
    slide, 
    selectedOptionId, 
    onSelectOption 
}) => {
    const isNewSchema = !!slide.task;

    if (isNewSchema) {
        return (
            <div className="space-y-6">
                 {slide.title && (
                    <h2 className="text-2xl md:text-3xl font-light text-white">{slide.title}</h2>
                 )}
                 <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
                    <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest">Your Mission</h3>
                    <p className="text-lg text-white/90 leading-relaxed">{slide.task}</p>
                 </div>
                 
                 {slide.example && (
                    <div className="p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-sm text-white/60">
                        <span className="text-white/30 mr-2">Example:</span>
                        {slide.example}
                    </div>
                 )}
                 
                 <button 
                    className={cn(
                        "w-full py-4 rounded-xl font-medium transition-colors",
                        selectedOptionId === "completed" 
                            ? "bg-green-500/20 text-green-200 border border-green-500/30"
                            : "bg-white text-black hover:bg-white/90"
                    )}
                    onClick={() => onSelectOption("completed")}
                 >
                    {selectedOptionId === "completed" ? "Mission Completed" : "I Have Completed This"}
                 </button>
            </div>
        );
    }

    // Old Schema
    const isCorrect = selectedOptionId === slide.correctOptionId;

    return (
        <div className="space-y-8">
            <SharedQuizView 
                prompt={slide.prompt || ""}
                options={(slide.options || []).map(o => ({
                    id: o.id,
                    label: o.label || o.text || "" 
                }))}
                selectedOptionId={selectedOptionId}
                onSelectOption={onSelectOption}
            />
            
            <AnimatePresence>
                {selectedOptionId && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={cn(
                            "rounded-xl p-4 border",
                            isCorrect ? "bg-green-500/10 border-green-500/20 text-green-200" : "bg-red-500/10 border-red-500/20 text-red-200"
                        )}
                    >
                        {isCorrect ? slide.correctExplanation : slide.wrongExplanation}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

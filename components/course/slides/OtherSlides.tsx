import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MatchingPair, QuizOption } from '@/data/missions/tutorial';
import { SharedQuizView } from './SharedQuizView';

// Matching Slide
export const MatchingSlide: React.FC<{
    prompt: string;
    pairs: MatchingPair[];
    onComplete: (success: boolean) => void;
}> = ({ prompt, pairs, onComplete }) => {
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [matches, setMatches] = useState<{ [leftId: string]: string }>({}); // leftId -> rightId
    const [completedPairs, setCompletedPairs] = useState<string[]>([]); // array of pair ids

    const handleLeftClick = (id: string) => {
        if (completedPairs.includes(pairs.find(p => p.id === id)?.id || '')) return;
        setSelectedLeft(id);
    };

    const handleRightClick = (rightId: string) => {
        if (!selectedLeft) return;
        
        // Find pair for selected left
        const pair = pairs.find(p => p.id === selectedLeft);
        if (!pair) return;

        if (pair.right === rightId) {
            // Correct match
            setCompletedPairs([...completedPairs, pair.id]);
            setMatches({ ...matches, [selectedLeft]: rightId });
            setSelectedLeft(null);
            
            if (completedPairs.length + 1 === pairs.length) {
                onComplete(true);
            }
        } else {
            // Wrong match - visual shake or something? For now just reset selection
            setSelectedLeft(null);
        }
    };

    // Display rights in a fixed order (e.g. sorted by right text) to shuffle them relative to lefts
    // We use useMemo to keep order stable across renders unless pairs change
    // But simple sort is fine for this context
    const rightOptions = [...pairs].sort((a, b) => a.right.localeCompare(b.right)); 

    return (
        <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-light text-white">{prompt}</h2>
            <div className="flex justify-between gap-8">
                <div className="flex-1 space-y-3">
                    {pairs.map(pair => {
                        const isCompleted = completedPairs.includes(pair.id);
                        const isSelected = selectedLeft === pair.id;
                        return (
                            <div 
                                key={pair.id}
                                onClick={() => !isCompleted && handleLeftClick(pair.id)}
                                className={cn(
                                    "p-4 rounded-xl border transition-all cursor-pointer text-sm",
                                    isCompleted ? "bg-green-500/10 border-green-500/30 text-green-200" : 
                                    isSelected ? "bg-purple-500/20 border-purple-500 text-white" : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200"
                                )}
                            >
                                {pair.left}
                            </div>
                        );
                    })}
                </div>
                <div className="flex-1 space-y-3">
                    {rightOptions.map(pair => {
                        // Check if this right option has been matched
                        const matchedLeftId = Object.keys(matches).find(key => matches[key] === pair.right);
                        const isMatched = !!matchedLeftId;
                        
                        return (
                            <div 
                                key={pair.right}
                                onClick={() => !isMatched && handleRightClick(pair.right)}
                                className={cn(
                                    "p-4 rounded-xl border transition-all cursor-pointer text-sm",
                                    isMatched ? "bg-green-500/10 border-green-500/30 text-green-200 opacity-50" : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200"
                                )}
                            >
                                {pair.right}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Sorting Slide
export const SortingSlide: React.FC<{
    prompt: string;
    items: string[];
    correctOrder: string[];
    onComplete: (success: boolean) => void;
}> = ({ prompt, items, correctOrder, onComplete }) => {
    const [order, setOrder] = useState(items);
    const [isChecked, setIsChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const checkOrder = () => {
        const correct = order.every((item, index) => item === correctOrder[index]);
        setIsChecked(true);
        setIsCorrect(correct);
        if (correct) onComplete(true);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-light text-white">{prompt}</h2>
            <Reorder.Group axis="y" values={order} onReorder={setOrder} className="space-y-3">
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
            {!isChecked && (
                <button 
                    onClick={checkOrder}
                    className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-white/90 mt-4"
                >
                    Check Order
                </button>
            )}
            {isChecked && !isCorrect && (
                <div className="text-red-400 text-sm mt-2">Incorrect order. Try again. <button onClick={() => setIsChecked(false)} className="underline ml-2">Reset</button></div>
            )}
        </div>
    );
};

// Mini Challenge Slide
export const MiniChallengeSlide: React.FC<{
    prompt: string;
    options: QuizOption[];
    correctOptionId: string;
    correctExplanation: string;
    wrongExplanation: string;
    onComplete: (success: boolean) => void;
}> = ({ prompt, options, correctOptionId, correctExplanation, wrongExplanation, onComplete }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!selectedId) return;
        setIsSubmitted(true);
        if (selectedId === correctOptionId) {
            onComplete(true);
        }
    };

    const isCorrect = selectedId === correctOptionId;

    return (
        <div className="space-y-8">
            <SharedQuizView 
                prompt={prompt}
                options={options}
                selectedOptionId={selectedId}
                onSelectOption={(id) => !isSubmitted && setSelectedId(id)}
            />
            
            {!isSubmitted && (
                <button 
                    onClick={handleSubmit}
                    disabled={!selectedId}
                    className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-white/90 disabled:opacity-50"
                >
                    Submit
                </button>
            )}
            {isSubmitted && (
                <div className={cn("p-4 rounded-xl border", isCorrect ? "bg-green-500/10 border-green-500/20 text-green-200" : "bg-red-500/10 border-red-500/20 text-red-200")}>
                    {isCorrect ? correctExplanation : wrongExplanation}
                </div>
            )}
        </div>
    );
};

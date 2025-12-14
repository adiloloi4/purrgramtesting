import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Trophy, Zap, AlertCircle, CheckCircle2, X, Lightbulb, Code, Keyboard, Sparkles, Star, Flame, Rocket, Gift, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { XPReward } from '../XPReward';
import confetti from 'canvas-confetti';
import { 
  MemoryGameSlide, 
  CodePuzzleSlide, 
  TypingChallengeSlide, 
  SequenceGameSlide, 
  SpotTheBugSlide, 
  SpeedQuizSlide, 
  InteractiveSimulationSlide, 
  QuizOption
} from '@/data/missions/tutorial';

// Memory Game Slide
type MemoryGameSlideProps = {
  slide: MemoryGameSlide;
  onComplete: () => void;
};

export const MemoryGameSlideComponent: React.FC<MemoryGameSlideProps> = ({ slide, onComplete }) => {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [firstCard, setFirstCard] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(slide.timeLimit || 0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [xpRewardKey, setXpRewardKey] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const shuffledCards = React.useMemo(() => {
    const allCards = [...slide.cards, ...slide.cards];
    return allCards.sort(() => Math.random() - 0.5).map((card, index) => ({
      ...card,
      uniqueId: `${card.id}-${index}`,
    }));
  }, [slide.cards]);

  useEffect(() => {
    if (slide.timeLimit && timeLeft > 0 && !isGameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsGameOver(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [slide.timeLimit, timeLeft, isGameOver]);

  const handleCardClick = (uniqueId: string, cardId: string) => {
    // Prevent clicks during processing or if card is already flipped/matched
    if (flippedCards.has(uniqueId) || matchedPairs.has(cardId) || isGameOver || isProcessing) return;

    setMoves((prev) => prev + 1);

    if (!firstCard) {
      // First card of the pair
      setFirstCard(uniqueId);
      setFlippedCards((prev) => new Set([...prev, uniqueId]));
    } else {
      // Second card of the pair
      setIsProcessing(true); // Lock interactions during comparison
      
      const firstCardData = shuffledCards.find((c) => c.uniqueId === firstCard);
      const currentCardData = shuffledCards.find((c) => c.uniqueId === uniqueId);

      // Show the second card
      setFlippedCards((prev) => new Set([...prev, uniqueId]));

      if (firstCardData?.id === currentCardData?.id) {
        // Match!
        setTimeout(() => {
          setMatchedPairs((prev) => new Set([...prev, cardId]));
          setScore((prev) => prev + 10);
          setFirstCard(null);
          setIsProcessing(false);

          // Check if all pairs matched
          const newMatchedCount = matchedPairs.size + 1;
          if (newMatchedCount >= slide.cards.length) {
            setIsGameOver(true);
            setScore((prev) => prev + (slide.timeLimit ? Math.floor(timeLeft) * 2 : 50));
            setTimeout(() => onComplete(), 1000);
          }
        }, 500);
      } else {
        // No match - flip both cards back after a delay
        setTimeout(() => {
          setFlippedCards((prev) => {
            const newSet = new Set(prev);
            // Remove both cards from flipped state
            if (firstCard) newSet.delete(firstCard);
            newSet.delete(uniqueId);
            return newSet;
          });
          setFirstCard(null);
          setIsProcessing(false);
        }, 1500); // Give time to see both cards before flipping back
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
          <p className="text-white/70">{slide.description}</p>
        </div>
        <div className="flex items-center gap-4">
          {slide.timeLimit && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-white font-mono">{timeLeft}s</span>
            </div>
          )}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
            <Trophy className="w-4 h-4 text-purple-400" />
            <span className="text-white font-mono">{score}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {shuffledCards.map((card) => {
          const isFlipped = flippedCards.has(card.uniqueId);
          const isMatched = matchedPairs.has(card.id);
          const showFront = isFlipped || isMatched;

          return (
            <motion.button
              key={card.uniqueId}
              onClick={() => handleCardClick(card.uniqueId, card.id)}
              disabled={isMatched || isGameOver || isProcessing}
              className={cn(
                "aspect-square rounded-xl border-2 p-4 text-center transition-all relative overflow-hidden",
                isMatched
                  ? "bg-gradient-to-br from-green-500/30 to-emerald-500/20 border-green-500/50 cursor-default shadow-lg shadow-green-500/20"
                  : isFlipped
                  ? "bg-gradient-to-br from-purple-500/30 to-blue-500/20 border-purple-500/50 shadow-lg shadow-purple-500/20"
                  : isProcessing
                  ? "bg-gradient-to-br from-white/5 to-white/5 border-white/10 cursor-not-allowed opacity-50"
                  : "bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:from-white/20 hover:to-white/10 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10"
              )}
              whileHover={isMatched || isProcessing ? {} : { scale: 1.08, rotate: 2 }}
              whileTap={isMatched || isProcessing ? {} : { scale: 0.92 }}
              animate={isMatched ? { 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              } : {}}
              transition={{ duration: 0.3 }}
            >
              {isMatched && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute top-1 right-1"
                >
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
              )}
              <motion.div
                animate={{ rotateY: showFront ? 0 : 180 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full flex items-center justify-center"
              >
                {showFront ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-sm font-medium text-white"
                  >
                    {card.front}
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    className="text-3xl"
                  >
                    🎴
                  </motion.div>
                )}
              </motion.div>
            </motion.button>
          );
        })}
      </div>

      {isGameOver && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 border-2 border-green-500/50 text-center shadow-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mb-4"
          >
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto" fill="currentColor" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-400"
          >
            Perfect Match! 🎉
          </motion.h3>
          <div className="space-y-2 mb-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-white"
            >
              {score} <span className="text-yellow-400">points</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/70"
            >
              Completed in {moves} moves
            </motion.p>
            {moves <= slide.cards.length * 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mt-2"
              >
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <span className="text-yellow-200 text-sm font-medium">Perfect Game Bonus!</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Code Puzzle Slide
type CodePuzzleSlideProps = {
  slide: CodePuzzleSlide;
  onComplete: () => void;
};

export const CodePuzzleSlideComponent: React.FC<CodePuzzleSlideProps> = ({ slide, onComplete }) => {
  const [selectedParts, setSelectedParts] = useState<Record<string, string>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(slide.timeLimit || 0);
  const [isComplete, setIsComplete] = useState(false);
  const [xpRewardKey, setXpRewardKey] = useState(0);

  useEffect(() => {
    if (slide.timeLimit && timeLeft > 0 && !isComplete) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [slide.timeLimit, timeLeft, isComplete]);

  const handleSelect = (partId: string, option: string) => {
    const newParts = { ...selectedParts, [partId]: option };
    setSelectedParts(newParts);
    
    // Check if all parts are filled and correct
    const allFilled = slide.missingParts.every((part) => newParts[part.id]);
    const allCorrect = slide.missingParts.every(
      (part) => newParts[part.id] === part.correct
    );

    // Small celebration for each correct part
    const part = slide.missingParts.find((p) => p.id === partId);
    if (part && option === part.correct) {
      // Show XP reward - increment key to force new animation
      setXpRewardKey(prev => prev + 1);
      
      confetti({
        particleCount: 15,
        spread: 40,
        origin: { y: 0.7 },
        colors: ['#10b981'],
      });
    }

    if (allFilled && allCorrect) {
      setIsComplete(true);
      // Big celebration!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(() => onComplete(), 1500);
    }
  };

  const renderPuzzle = () => {
    let puzzleText = slide.puzzle;
    slide.missingParts.forEach((part, index) => {
      const placeholder = `__${index}__`;
      const selected = selectedParts[part.id] || placeholder;
      puzzleText = puzzleText.replace(placeholder, selected);
    });
    return puzzleText;
  };

  return (
    <div className="space-y-6">
      {xpRewardKey > 0 && <XPReward key={xpRewardKey} amount={2} position="top" />}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
          <p className="text-white/70">{slide.description}</p>
        </div>
        {slide.timeLimit && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-white font-mono">{timeLeft}s</span>
          </div>
        )}
      </div>

      <div className="p-6 rounded-xl bg-black/40 border border-white/10">
        <div className="font-mono text-sm text-white/80 whitespace-pre-wrap mb-6">
          {renderPuzzle()}
        </div>

        <div className="space-y-4">
          {slide.missingParts.map((part) => (
            <div key={part.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-white/60">Fill in the blank:</span>
                {part.hint && (
                  <button
                    onClick={() => setShowHints((prev) => ({ ...prev, [part.id]: !prev[part.id] }))}
                    className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    <Lightbulb className="w-3 h-3" />
                    Hint
                  </button>
                )}
              </div>
              {showHints[part.id] && part.hint && (
                <div className="mb-3 p-2 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-xs">
                  {part.hint}
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {part.options.map((option) => {
                  const isSelected = selectedParts[part.id] === option;
                  const isCorrect = option === part.correct;
                  const showResult = isComplete && isSelected;
                  return (
                    <motion.button
                      key={option}
                      onClick={() => handleSelect(part.id, option)}
                      disabled={isComplete}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm font-mono transition-all relative overflow-hidden",
                        showResult && isCorrect
                          ? "bg-gradient-to-r from-green-500/30 to-emerald-500/20 border-green-500/50 text-green-200 shadow-lg shadow-green-500/20"
                          : isSelected
                          ? "bg-gradient-to-r from-purple-500/30 to-blue-500/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/20"
                          : "bg-white/5 border-white/10 hover:bg-white/10 text-white/70 hover:shadow-md"
                      )}
                      whileHover={{ scale: isComplete ? 1 : 1.08, y: isComplete ? 0 : -2 }}
                      whileTap={{ scale: isComplete ? 1 : 0.95 }}
                      animate={showResult && isCorrect ? {
                        scale: [1, 1.1, 1],
                      } : {}}
                    >
                      {showResult && isCorrect && (
                        <motion.span
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute -top-1 -right-1"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        </motion.span>
                      )}
                      {option}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 border-2 border-green-500/50 text-center shadow-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mb-4"
          >
            <Code className="w-16 h-16 text-green-400 mx-auto" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400"
          >
            Puzzle Solved! 🎯
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70"
          >
            You&apos;re a coding wizard! ✨
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

// Typing Challenge Slide
type TypingChallengeSlideProps = {
  slide: TypingChallengeSlide;
  onComplete: () => void;
};

export const TypingChallengeSlideComponent: React.FC<TypingChallengeSlideProps> = ({ slide, onComplete }) => {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [errors, setErrors] = useState(0);
  const [xpRewardKey, setXpRewardKey] = useState(0);

  const words = slide.text.split(' ');
  const userWords = userInput.split(' ');

  useEffect(() => {
    if (userInput && !startTime) {
      setStartTime(Date.now());
    }

    if (userInput === slide.text) {
      setIsComplete(true);
      if (startTime) {
        const timeInMinutes = (Date.now() - startTime) / 60000;
        const calculatedWpm = Math.round(words.length / timeInMinutes);
        setWpm(calculatedWpm);
        
        // Show XP reward - increment key to force new animation
        setXpRewardKey(prev => prev + 1);
        
        // Celebration based on performance
        if (calculatedWpm >= (slide.wpmTarget || 40)) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#fbbf24', '#f59e0b'],
          });
        } else {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
          });
        }
      }
      setTimeout(() => onComplete(), 2500);
    }

    // Count errors
    let errorCount = 0;
    for (let i = 0; i < Math.min(userInput.length, slide.text.length); i++) {
      if (userInput[i] !== slide.text[i]) errorCount++;
    }
    setErrors(errorCount);
  }, [userInput, slide.text, startTime, words.length]);

  const getCharStatus = (index: number) => {
    if (index >= userInput.length) return 'pending';
    if (userInput[index] === slide.text[index]) return 'correct';
    return 'incorrect';
  };

  return (
    <div className="space-y-6">
      {xpRewardKey > 0 && <XPReward key={xpRewardKey} amount={2} position="top" />}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
          <p className="text-white/70">{slide.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
            <Keyboard className="w-4 h-4 text-blue-400" />
            <span className="text-white font-mono">{wpm} WPM</span>
          </div>
          {slide.wpmTarget && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
              <Trophy className="w-4 h-4 text-purple-400" />
              <span className="text-white font-mono">Target: {slide.wpmTarget}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 rounded-xl bg-black/40 border border-white/10">
        <div className="font-mono text-sm text-white/80 leading-relaxed mb-6 min-h-[100px]">
          {slide.text.split('').map((char, index) => {
            const status = getCharStatus(index);
            return (
              <span
                key={index}
                className={cn(
                  status === 'correct' && 'text-green-400',
                  status === 'incorrect' && 'text-red-400 bg-red-500/20',
                  status === 'pending' && 'text-white/40'
                )}
              >
                {char}
              </span>
            );
          })}
        </div>

        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={isComplete}
          placeholder="Start typing..."
          className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-purple-500/50"
          rows={4}
        />

        <div className="mt-4 flex items-center justify-between text-sm text-white/60">
          <span>Errors: {errors}</span>
          <span>Progress: {Math.round((userInput.length / slide.text.length) * 100)}%</span>
        </div>
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/20 border-2 border-blue-500/50 text-center shadow-2xl"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <Keyboard className="w-16 h-16 text-blue-400 mx-auto" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Lightning Fast! ⚡
          </motion.h3>
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-white"
            >
              {wpm} <span className="text-blue-400 text-2xl">WPM</span>
            </motion.p>
            {slide.wpmTarget && wpm >= slide.wpmTarget && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mt-2"
              >
                <Trophy className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <span className="text-yellow-200 text-sm font-medium">Target Achieved!</span>
              </motion.div>
            )}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-sm"
            >
              Errors: {errors} | Accuracy: {Math.round(((slide.text.length - errors) / slide.text.length) * 100)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Sequence Game Slide
type SequenceGameSlideProps = {
  slide: SequenceGameSlide;
  onComplete: () => void;
};

export const SequenceGameSlideComponent: React.FC<SequenceGameSlideProps> = ({ slide, onComplete }) => {
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [availableItems, setAvailableItems] = useState(slide.items);
  const [isComplete, setIsComplete] = useState(false);
  const [xpRewardKey, setXpRewardKey] = useState(0);

  const handleItemClick = (itemId: string) => {
    if (selectedOrder.includes(itemId)) {
      // Remove from selected
      setSelectedOrder((prev) => prev.filter((id) => id !== itemId));
      setAvailableItems((prev) => [...prev, slide.items.find((i) => i.id === itemId)!]);
    } else {
      // Add to selected
      setSelectedOrder((prev) => [...prev, itemId]);
      setAvailableItems((prev) => prev.filter((item) => item.id !== itemId));
    }
  };

  const checkOrder = () => {
    const correct = selectedOrder.every(
      (id, index) => slide.items.find((i) => i.id === id)?.correctPosition === index
    );

    if (correct && selectedOrder.length === slide.items.length) {
      setIsComplete(true);
      // Show XP reward - increment key to force new animation
      setXpRewardKey(prev => prev + 1);
      
      // Celebration!
      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#6366f1'],
      });
      setTimeout(() => onComplete(), 2000);
    } else {
      // Shake animation for wrong answer
      const sequenceContainer = document.querySelector('[data-sequence-container]');
      if (sequenceContainer) {
        sequenceContainer.classList.add('animate-shake');
        setTimeout(() => {
          sequenceContainer.classList.remove('animate-shake');
        }, 500);
      }
    }
  };

  return (
    <div className="space-y-6">
      {xpRewardKey > 0 && <XPReward key={xpRewardKey} amount={2} position="top" />}
      <div>
        <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
        <p className="text-white/70">{slide.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">Available Items</h3>
          <div className="space-y-2">
            {availableItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-left transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">Your Sequence</h3>
          <div className="space-y-2 min-h-[200px]" data-sequence-container>
            {selectedOrder.map((itemId, index) => {
              const item = slide.items.find((i) => i.id === itemId);
              const isCorrect = item?.correctPosition === index;
              return (
                <motion.div
                  key={itemId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "p-4 rounded-xl border flex items-center gap-3",
                    isComplete && isCorrect
                      ? "bg-green-500/20 border-green-500/50"
                      : "bg-purple-500/20 border-purple-500/30"
                  )}
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <span className="flex-1 text-white">{item?.label}</span>
                  <button
                    onClick={() => handleItemClick(itemId)}
                    className="text-white/50 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
            {selectedOrder.length === 0 && (
              <div className="text-center text-white/30 py-8">Click items to build your sequence</div>
            )}
          </div>
        </div>
      </div>

      {slide.hint && (
        <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-sm">
          <strong>💡 Hint:</strong> {slide.hint}
        </div>
      )}

      <button
        onClick={checkOrder}
        disabled={selectedOrder.length !== slide.items.length || isComplete}
        className={cn(
          "w-full py-4 rounded-xl font-medium transition-all",
          selectedOrder.length === slide.items.length && !isComplete
            ? "bg-white text-black hover:bg-white/90"
            : "bg-white/10 text-white/30 cursor-not-allowed"
        )}
      >
        Check Sequence
      </button>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 border-2 border-purple-500/50 text-center shadow-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="mb-4"
          >
            <Rocket className="w-16 h-16 text-purple-400 mx-auto" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          >
            Perfect Sequence! 🚀
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70"
          >
            You&apos;ve mastered the flow! ✨
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

// Spot the Bug Slide
type SpotTheBugSlideProps = {
  slide: SpotTheBugSlide;
  onComplete: () => void;
};

export const SpotTheBugSlideComponent: React.FC<SpotTheBugSlideProps> = ({ slide, onComplete }) => {
  const [foundBugs, setFoundBugs] = useState<Set<string>>(new Set());
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const [xpRewardKey, setXpRewardKey] = useState(0);

  const handleLineClick = (lineNumber: number) => {
    const bug = slide.bugs.find((b) => b.line === lineNumber);
    if (bug && !foundBugs.has(bug.id)) {
      setFoundBugs((prev) => new Set([...prev, bug.id]));
      
      // Show XP reward for finding a bug - increment key to force new animation
      setXpRewardKey(prev => prev + 1);
      
      // Celebration for finding a bug
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#ef4444', '#f59e0b'],
      });
      
      if (foundBugs.size + 1 >= slide.bugs.length) {
        // Big celebration for finding all bugs!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        setTimeout(() => onComplete(), 2000);
      }
    }
    setSelectedLine(lineNumber);
  };

  const codeLines = slide.code.split('\n');

  return (
    <div className="space-y-6">
      {xpRewardKey > 0 && <XPReward key={xpRewardKey} amount={2} position="top" />}
      <div>
        <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
        <p className="text-white/70">{slide.description}</p>
      </div>

      <div className="p-6 rounded-xl bg-black/40 border border-white/10">
        <div className="font-mono text-sm text-white/80">
          {codeLines.map((line, index) => {
            const lineNumber = index + 1;
            const bug = slide.bugs.find((b) => b.line === lineNumber);
            const isBug = !!bug;
            const isFound = bug && foundBugs.has(bug.id);
            const isSelected = selectedLine === lineNumber;

            return (
              <div
                key={index}
                onClick={() => handleLineClick(lineNumber)}
                className={cn(
                  "px-4 py-2 cursor-pointer hover:bg-white/5 transition-colors flex items-start gap-4",
                  isFound && "bg-green-500/20 border-l-2 border-green-500",
                  isSelected && !isFound && isBug && "bg-red-500/20 border-l-2 border-red-500",
                  isSelected && !isBug && "bg-yellow-500/10 border-l-2 border-yellow-500/50"
                )}
              >
                <span className="text-white/30 text-xs w-8">{lineNumber}</span>
                <span className="flex-1">{line || ' '}</span>
                {isFound && <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />}
                {isSelected && !isFound && isBug && <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">Found Bugs</h3>
        {slide.bugs.map((bug) => {
          const isFound = foundBugs.has(bug.id);
          return (
            <motion.div
              key={bug.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isFound ? 1 : 0.3, x: 0 }}
              className={cn(
                "p-4 rounded-lg border",
                isFound
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-white/5 border-white/10"
              )}
            >
              <div className="flex items-start gap-3">
                {isFound ? (
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-white/30 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="text-sm text-white font-medium">Line {bug.line}</div>
                  <div className="text-xs text-white/60 mt-1">{bug.description}</div>
                  {bug.fix && isFound && (
                    <div className="text-xs text-green-300 mt-2 font-mono bg-black/40 p-2 rounded">
                      Fix: {bug.fix}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {foundBugs.size === slide.bugs.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/20 border-2 border-red-500/50 text-center shadow-2xl"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400"
          >
            Bug Hunter Extraordinaire! 🐛
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70"
          >
            All {slide.bugs.length} bugs eliminated! 🎯
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

// Speed Quiz Slide
type SpeedQuizSlideProps = {
  slide: SpeedQuizSlide;
  onComplete: () => void;
};

export const SpeedQuizSlideComponent: React.FC<SpeedQuizSlideProps> = ({ slide, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(slide.questions[currentQuestionIndex]?.timeLimit || 0);
  const [isComplete, setIsComplete] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [xpRewardKey, setXpRewardKey] = useState(0);
  const [combo, setCombo] = useState(0);

  const currentQuestion = slide.questions[currentQuestionIndex];

  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return [];
    const options = [...currentQuestion.options];
    return options.sort(() => Math.random() - 0.5);
  }, [currentQuestion, currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestion?.timeLimit && timeLeft > 0 && !isComplete && !isFailed && !selectedAnswer) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleAnswer(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, currentQuestionIndex, isComplete, isFailed, selectedAnswer]);

  const handleAnswer = (answerId: string | null) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answerId || 'timeout');
    
    const isCorrect = answerId === currentQuestion.correct;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setXpRewardKey(prev => prev + 1);
      
      // Combo Logic
      const maxTime = currentQuestion.timeLimit || 10;
      if (timeLeft > maxTime * 0.4) {
        setCombo(prev => prev + 1);
      }

      confetti({
        particleCount: 30,
        spread: 55,
        origin: { y: 0.7 },
        colors: ['#10b981'],
      });
    } else {
      setCombo(0);
      if (slide.maxMistakes) {
        setMistakes(prev => {
          const newMistakes = prev + 1;
          if (newMistakes >= (slide.maxMistakes || 3)) {
            setTimeout(() => setIsFailed(true), 1000);
          }
          return newMistakes;
        });
      }
    }

    if (!slide.maxMistakes || mistakes < (slide.maxMistakes - (isCorrect ? 0 : 1))) {
       setTimeout(() => handleNext(), 1500);
    }
  };

  const handleNext = () => {
    if (isFailed) return;

    if (currentQuestionIndex < slide.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(slide.questions[currentQuestionIndex + 1]?.timeLimit || 0);
    } else {
      setIsComplete(true);
      setTimeout(() => onComplete(), 2000);
    }
  };

  const handleRetry = () => {
    setMistakes(0);
    setScore(0);
    setCombo(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsFailed(false);
    setIsComplete(false);
    setTimeLeft(slide.questions[0]?.timeLimit || 0);
  };

  if (isFailed) {
    return (
      <div className="space-y-6 text-center p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20"
        >
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Too Many Mistakes</h2>
          <p className="text-white/60 mb-6">
            You reached the mistake limit. Review the scenarios and try again to prove your Director mindset.
          </p>
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-colors flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="space-y-6">
      {xpRewardKey > 0 && <XPReward key={xpRewardKey} amount={2} position="top" />}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
          <p className="text-white/70">{slide.description}</p>
        </div>
        <div className="flex items-center gap-4">
          {combo > 1 && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-500/30 animate-pulse">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-white font-mono">Combo x{combo}</span>
            </div>
          )}
          {slide.maxMistakes && (
             <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30">
               <AlertCircle className="w-4 h-4 text-red-400" />
               <span className="text-white font-mono">Mistakes: {mistakes}/{slide.maxMistakes}</span>
             </div>
          )}
          {currentQuestion.timeLimit && (
            <div className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors",
              timeLeft <= 3 ? "bg-red-500/20 border-red-500/50 text-red-200" : "bg-blue-500/20 border-blue-500/30"
            )}>
              <Clock className={cn("w-4 h-4", timeLeft <= 3 ? "text-red-400" : "text-blue-400")} />
              <span className="text-white font-mono">{timeLeft}s</span>
            </div>
          )}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
            <Trophy className="w-4 h-4 text-purple-400" />
            <span className="text-white font-mono">{score}/{slide.questions.length}</span>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <div className="mb-6">
          <div className="text-sm text-white/50 mb-2">
            Scenario {currentQuestionIndex + 1} of {slide.questions.length}
          </div>
          <h3 className="text-xl text-white mb-6">{currentQuestion.question}</h3>
          
          {selectedAnswer === 'timeout' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-center font-bold flex items-center justify-center gap-2"
            >
              <AlertCircle className="w-5 h-5" />
              No decision made. Directors decide fast.
            </motion.div>
          )}
        </div>

        <div className="space-y-3">
          {shuffledOptions.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.id === currentQuestion.correct;
            const showResult = selectedAnswer !== null;

            return (
              <motion.button
                key={option.id}
                onClick={() => !showResult && handleAnswer(option.id)}
                disabled={showResult}
                className={cn(
                  "w-full p-4 rounded-xl border text-left transition-all",
                  showResult && isCorrect
                    ? "bg-green-500/20 border-green-500/50"
                    : showResult && isSelected && !isCorrect
                    ? "bg-red-500/20 border-red-500/50"
                    : isSelected
                    ? "bg-purple-500/20 border-purple-500/50"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                )}
                whileHover={{ scale: showResult ? 1 : 1.02 }}
                whileTap={{ scale: showResult ? 1 : 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-white/80">{option.text || option.label}</span>
                  {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto" />}
                  {showResult && isSelected && !isCorrect && <X className="w-5 h-5 text-red-400 ml-auto" />}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-orange-500/20 border-2 border-yellow-500/50 text-center shadow-2xl"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mb-4"
          >
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto" fill="currentColor" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400"
          >
            Director Certified! 🎬
          </motion.h3>
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-white"
            >
              {score}<span className="text-yellow-400 text-2xl">/{slide.questions.length}</span>
            </motion.p>
            {score === slide.questions.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mt-2"
              >
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <span className="text-yellow-200 text-sm font-medium">Perfect Direction!</span>
              </motion.div>
            )}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-sm"
            >
              Mistakes: {mistakes} | Accuracy: {Math.round((score / slide.questions.length) * 100)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Interactive Simulation Slide (placeholder - can be expanded)
type InteractiveSimulationSlideProps = {
  slide: InteractiveSimulationSlide;
  onComplete: () => void;
};

export const InteractiveSimulationSlideComponent: React.FC<InteractiveSimulationSlideProps> = ({ slide, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [xpRewardKey, setXpRewardKey] = useState(0);

  const handleStepComplete = (stepIndex: number) => {
    setCompletedSteps((prev) => new Set([...prev, stepIndex]));
    
    // Show XP reward for completing a step - increment key to force new animation
    setXpRewardKey(prev => prev + 1);
    
    if (stepIndex < slide.steps.length - 1) {
      setCurrentStep(stepIndex + 1);
    } else {
      setTimeout(() => onComplete(), 1000);
    }
  };

  return (
    <div className="space-y-6">
      {xpRewardKey > 0 && <XPReward key={xpRewardKey} amount={2} position="top" />}
      <div>
        <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
        <p className="text-white/70">{slide.description}</p>
      </div>

      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-white mb-2">Goal: {slide.goal}</h3>
          <div className="text-sm text-white/60">Simulation Type: {slide.simulation}</div>
        </div>

        <div className="space-y-3">
          {slide.steps.map((step, index) => {
            const isCompleted = completedSteps.has(index);
            const isCurrent = currentStep === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                  "p-4 rounded-lg border flex items-center gap-3",
                  isCompleted
                    ? "bg-green-500/10 border-green-500/30"
                    : isCurrent
                    ? "bg-purple-500/20 border-purple-500/30"
                    : "bg-white/5 border-white/10"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isCurrent
                    ? "bg-purple-500 text-white"
                    : "bg-white/10 text-white/50"
                )}>
                  {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                </div>
                <span className={cn(
                  "flex-1",
                  isCompleted ? "text-green-200" : isCurrent ? "text-white" : "text-white/50"
                )}>
                  {step}
                </span>
                {isCurrent && (
                  <button
                    onClick={() => handleStepComplete(index)}
                    className="px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 text-sm font-medium"
                  >
                    Complete
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

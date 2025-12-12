"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, Trophy, Sparkles, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import confetti from 'canvas-confetti';

// Standalone Memory Game
const gameCards = [
  { id: "react", front: "React", back: "UI Library" },
  { id: "nextjs", front: "Next.js", back: "React Framework" },
  { id: "supabase", front: "Supabase", back: "Backend Platform" },
  { id: "cursor", front: "Cursor", back: "AI IDE" },
  { id: "vercel", front: "Vercel", back: "Deployment" },
  { id: "typescript", front: "TypeScript", back: "Typed JavaScript" },
  { id: "tailwind", front: "Tailwind", back: "CSS Framework" },
  { id: "postgres", front: "PostgreSQL", back: "Database" },
];

export default function MemoryGamePage() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [firstCard, setFirstCard] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const shuffledCards = useMemo(() => {
    const allCards = [...gameCards, ...gameCards];
    return allCards.sort(() => Math.random() - 0.5).map((card, index) => ({
      ...card,
      uniqueId: `${card.id}-${index}`,
    }));
  }, []);

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !isGameOver) {
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
  }, [timeLeft, isGameOver, gameStarted]);

  const handleCardClick = (uniqueId: string, cardId: string) => {
    if (!gameStarted) setGameStarted(true);
    if (flippedCards.has(uniqueId) || matchedPairs.has(cardId) || isGameOver || isProcessing) return;

    setMoves((prev) => prev + 1);

    if (!firstCard) {
      setFirstCard(uniqueId);
      setFlippedCards((prev) => new Set([...prev, uniqueId]));
    } else {
      setIsProcessing(true);
      setFlippedCards((prev) => new Set([...prev, uniqueId]));

      const firstCardData = shuffledCards.find((c) => c.uniqueId === firstCard);
      const currentCardData = shuffledCards.find((c) => c.uniqueId === uniqueId);

      if (firstCardData?.id === currentCardData?.id) {
        setTimeout(() => {
          setMatchedPairs((prev) => new Set([...prev, cardId]));
          setScore((prev) => prev + 10);
          setFirstCard(null);
          setIsProcessing(false);

          if (matchedPairs.size + 1 >= gameCards.length) {
            setIsGameOver(true);
            setScore((prev) => prev + Math.floor(timeLeft) * 2);
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            });
          }
        }, 500);
      } else {
        setTimeout(() => {
          setFlippedCards((prev) => {
            const newSet = new Set(prev);
            if (firstCard) newSet.delete(firstCard);
            newSet.delete(uniqueId);
            return newSet;
          });
          setFirstCard(null);
          setIsProcessing(false);
        }, 1500);
      }
    }
  };

  const resetGame = () => {
    setFlippedCards(new Set());
    setMatchedPairs(new Set());
    setFirstCard(null);
    setTimeLeft(60);
    setIsGameOver(false);
    setScore(0);
    setMoves(0);
    setIsProcessing(false);
    setGameStarted(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 text-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <Link 
          href="/dashboard/games"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white/70 mb-6 transition-colors font-light text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Games</span>
        </Link>
        <h1 className="text-5xl md:text-7xl font-extralight mb-3 tracking-tight">
          Memory <span className="font-normal text-white">Match</span>
        </h1>
        <p className="text-white/50 font-light text-lg">Match pairs of cards to win.</p>
      </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-white/60" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/40">Time</span>
            </div>
            <div className="text-3xl font-light text-white">{timeLeft}s</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-5 h-5 text-white/60" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/40">Score</span>
            </div>
            <div className="text-3xl font-light text-white">{score}</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium uppercase tracking-wider text-white/40">Moves</span>
            </div>
            <div className="text-3xl font-light text-white">{moves}</div>
          </div>
        </div>
        
        <div className="flex justify-end mb-6">
          <button
            onClick={resetGame}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-light transition-colors"
          >
            Reset Game
          </button>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-4 gap-3 mb-8">
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
                    : "bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:from-white/20 hover:to-white/10 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10"
                )}
                whileHover={{ scale: isMatched ? 1 : 1.08, rotate: isMatched ? 0 : 2 }}
                whileTap={{ scale: isMatched ? 1 : 0.92 }}
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

        {/* Game Over Screen */}
        {isGameOver && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mb-6"
            >
              <Trophy className="w-16 h-16 text-white/80 mx-auto" />
            </motion.div>
            <h3 className="text-3xl font-light text-white mb-3 tracking-wide">Game Complete</h3>
            <p className="text-white/50 font-light mb-6">
              You matched {matchedPairs.size} out of {gameCards.length} pairs in {moves} moves.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white font-light mb-6">
              <Trophy className="w-4 h-4" />
              Final Score: {score}
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={resetGame}
                className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-light transition-colors"
              >
                Play Again
              </button>
              <Link
                href="/dashboard/games"
                className="px-6 py-2 rounded-xl bg-white text-black hover:bg-white/90 text-sm font-medium transition-colors"
              >
                Back to Games
              </Link>
            </div>
          </motion.div>
        )}
    </div>
  );
}


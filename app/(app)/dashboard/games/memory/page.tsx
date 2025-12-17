"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, Trophy, Sparkles, ArrowLeft, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { generateMemoryRounds, memoryGameRounds } from '@/data/gameRounds';
import { useGameXP, GAME_XP_REWARD_INTERVAL } from '@/lib/gameUtils';

export default function MemoryGamePage() {
  const [currentRound, setCurrentRound] = useState(0);
  const [roundNumber, setRoundNumber] = useState(1);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [firstCard, setFirstCard] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [showXPNotification, setShowXPNotification] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  const xpCheckIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate many rounds
  const allRounds = useMemo(() => generateMemoryRounds(50), []);
  
  // Get current round cards
  const currentRoundData = allRounds[currentRound];
  const gameCards = currentRoundData?.cards || [];

  const shuffledCards = useMemo(() => {
    if (gameCards.length === 0) return [];
    const allCards = [...gameCards, ...gameCards];
    return allCards.sort(() => Math.random() - 0.5).map((card, index) => ({
      ...card,
      uniqueId: `${card.id}-${currentRound}-${index}`,
    }));
  }, [gameCards, currentRound]);

  // XP tracking
  const { checkAndAwardXP } = useGameXP('memory');

  useEffect(() => {
    // Track play time and check for XP rewards
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTimeRef.current;
      setPlayTime(Math.floor(elapsed / 1000));

      // Check for XP reward every 5 minutes
      const xpAwarded = checkAndAwardXP(currentTime);
      if (xpAwarded > 0) {
        setXpEarned(prev => prev + xpAwarded);
        setShowXPNotification(true);
        setTimeout(() => setShowXPNotification(false), 3000);
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.6 },
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [checkAndAwardXP]);

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !isRoundComplete) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRoundComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isRoundComplete, gameStarted]);

  const handleCardClick = (uniqueId: string, cardId: string) => {
    if (!gameStarted) setGameStarted(true);
    if (flippedCards.has(uniqueId) || matchedPairs.has(cardId) || isRoundComplete || isProcessing) return;

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
          const points = 10 + Math.floor(timeLeft / 10);
          setRoundScore((prev) => prev + points);
          setTotalScore((prev) => prev + points);
          setFirstCard(null);
          setIsProcessing(false);

          if (matchedPairs.size + 1 >= gameCards.length) {
            setIsRoundComplete(true);
            const bonus = Math.floor(timeLeft) * 2;
            setRoundScore((prev) => prev + bonus);
            setTotalScore((prev) => prev + bonus);
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

  const nextRound = () => {
    setFlippedCards(new Set());
    setMatchedPairs(new Set());
    setFirstCard(null);
    setTimeLeft(60);
    setIsRoundComplete(false);
    setRoundScore(0);
    setMoves(0);
    setIsProcessing(false);
    setGameStarted(false);
    setCurrentRound((prev) => (prev + 1) % allRounds.length);
    setRoundNumber((prev) => prev + 1);
  };

  const resetGame = () => {
    setFlippedCards(new Set());
    setMatchedPairs(new Set());
    setFirstCard(null);
    setTimeLeft(60);
    setIsRoundComplete(false);
    setRoundScore(0);
    setMoves(0);
    setIsProcessing(false);
    setGameStarted(false);
    setCurrentRound(0);
    setRoundNumber(1);
    setTotalScore(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
        <p className="text-white/50 font-light text-lg">Endless rounds. Match pairs to keep playing!</p>
      </motion.div>

      {/* XP Notification */}
      {showXPNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 right-8 z-50 p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">+{xpEarned} XP Earned!</span>
          </div>
        </motion.div>
      )}

        {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">Round Time</span>
            </div>
            <div className="text-3xl font-light text-white">{timeLeft}s</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-5 h-5 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">Total Score</span>
          </div>
          <div className="text-3xl font-light text-white">{totalScore}</div>
            </div>
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">Round #{roundNumber}</span>
          </div>
          <div className="text-3xl font-light text-white">{roundNumber}</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">Play Time</span>
            </div>
          <div className="text-3xl font-light text-white">{formatTime(playTime)}</div>
          </div>
        </div>
        
      <div className="flex justify-between mb-6">
        <div className="text-white/50 text-sm">
          {xpEarned > 0 && <span>XP Earned: {xpEarned} • </span>}
          Next XP in: {formatTime(Math.max(0, GAME_XP_REWARD_INTERVAL / 1000 - (playTime % (GAME_XP_REWARD_INTERVAL / 1000))))}
        </div>
          <button
            onClick={resetGame}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-light transition-colors"
          >
          Reset All
          </button>
        </div>

        {/* Game Board */}
      {shuffledCards.length > 0 && (
        <div className="grid grid-cols-4 gap-3 mb-8">
          {shuffledCards.map((card) => {
            const isFlipped = flippedCards.has(card.uniqueId);
            const isMatched = matchedPairs.has(card.id);
            const showFront = isFlipped || isMatched;

            return (
              <motion.button
                key={card.uniqueId}
                onClick={() => handleCardClick(card.uniqueId, card.id)}
                disabled={isMatched || isRoundComplete || isProcessing}
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
      )}

      {/* Round Complete Screen */}
      {isRoundComplete && (
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
          <h3 className="text-3xl font-light text-white mb-3 tracking-wide">Round {roundNumber} Complete!</h3>
            <p className="text-white/50 font-light mb-6">
            You matched all {gameCards.length} pairs in {moves} moves.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white font-light mb-6">
              <Trophy className="w-4 h-4" />
            Round Score: {roundScore} • Total: {totalScore}
            </div>
            <div className="flex gap-3 justify-center">
              <button
              onClick={nextRound}
              className="px-6 py-2 rounded-xl bg-white text-black hover:bg-white/90 text-sm font-medium transition-colors"
              >
              Next Round →
              </button>
              <Link
                href="/dashboard/games"
              className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-light transition-colors"
              >
                Back to Games
              </Link>
            </div>
          </motion.div>
        )}
    </div>
  );
}

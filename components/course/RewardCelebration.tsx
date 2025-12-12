import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Zap, Flame, Star, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

type RewardCelebrationProps = {
  xpGained: number;
  newLevel?: number;
  streakBonus?: number;
  onComplete: () => void;
};

export const RewardCelebration: React.FC<RewardCelebrationProps> = ({
  xpGained,
  newLevel,
  streakBonus,
  onComplete,
}) => {
  const [showXP, setShowXP] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showStreak, setShowStreak] = useState(false);
  const [xpCounter, setXpCounter] = useState(0);

  useEffect(() => {
    // Trigger confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Animate XP counter
    const xpDuration = 1500;
    const startTime = Date.now();
    const animateXP = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / xpDuration, 1);
      setXpCounter(Math.floor(xpGained * progress));

      if (progress < 1) {
        requestAnimationFrame(animateXP);
      } else {
        setXpCounter(xpGained);
        setShowXP(true);
        
        // Show level up if applicable
        if (newLevel) {
          setTimeout(() => setShowLevelUp(true), 500);
        }
        
        // Show streak if applicable
        if (streakBonus) {
          setTimeout(() => setShowStreak(true), newLevel ? 1500 : 500);
        }
      }
    };
    animateXP();

    return () => clearInterval(interval);
  }, [xpGained, newLevel, streakBonus]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      <AnimatePresence>
        {/* XP Reward */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <Zap className="w-12 h-12 text-yellow-400" fill="currentColor" />
              </motion.div>
              <div>
                <div className="text-white/60 text-sm uppercase tracking-wider mb-1">XP Gained</div>
                <div className="text-4xl font-bold text-white">
                  +{xpCounter}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Level Up */}
        {newLevel && (
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-gradient-to-br from-yellow-500/30 to-orange-500/30 backdrop-blur-xl border-2 border-yellow-500/50 rounded-3xl p-12 shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mb-6 flex justify-center"
              >
                <Trophy className="w-20 h-20 text-yellow-400" fill="currentColor" />
              </motion.div>
              <div className="text-center">
                <div className="text-yellow-200/80 text-sm uppercase tracking-widest mb-2">Level Up!</div>
                <div className="text-6xl font-bold text-white mb-2">Level {newLevel}</div>
                <div className="text-white/60 text-sm">You're getting stronger!</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Streak Bonus */}
        {streakBonus && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            transition={{ duration: 0.5, delay: newLevel ? 1.5 : 0.5 }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <Flame className="w-8 h-8 text-orange-400" fill="currentColor" />
                </motion.div>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Streak Bonus</div>
                  <div className="text-2xl font-bold text-white">+{streakBonus} XP</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auto-close after animation */}
      {showXP && !newLevel && !streakBonus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationComplete={() => {
            setTimeout(() => {
              onComplete();
            }, 2000);
          }}
        />
      )}
      
      {showLevelUp && !streakBonus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationComplete={() => {
            setTimeout(() => {
              onComplete();
            }, 2000);
          }}
        />
      )}

      {showStreak && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationComplete={() => {
            setTimeout(() => {
              onComplete();
            }, 2000);
          }}
        />
      )}
    </div>
  );
};

type UnlockCelebrationProps = {
  title: string;
  description: string;
  onComplete: () => void;
};

export const UnlockCelebration: React.FC<UnlockCelebrationProps> = ({
  title,
  description,
  onComplete,
}) => {
  useEffect(() => {
    // Subtle confetti for unlock
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onComplete}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 max-w-md mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          className="mb-6 flex justify-center"
        >
          <Sparkles className="w-16 h-16 text-purple-400" />
        </motion.div>
        <h2 className="text-3xl font-bold text-white text-center mb-3">{title}</h2>
        <p className="text-white/70 text-center mb-6">{description}</p>
        <button
          onClick={onComplete}
          className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-white/90 transition-colors"
        >
          Continue
        </button>
      </motion.div>
    </motion.div>
  );
};


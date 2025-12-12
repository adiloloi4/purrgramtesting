import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Badge } from '@/store/courseStore';

type BadgeUnlockProps = {
  badge: Badge;
  onClose: () => void;
};

export const BadgeUnlock: React.FC<BadgeUnlockProps> = ({ badge, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Play sound effect (we'll add actual sound files later)
    // For now, just trigger confetti
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

    // Auto-close after 4 seconds
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onClose, 500);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onClose]);

  const colorClasses: Record<string, string> = {
    blue: 'from-blue-500/30 to-cyan-500/30 border-blue-500/50',
    purple: 'from-purple-500/30 to-pink-500/30 border-purple-500/50',
    green: 'from-green-500/30 to-emerald-500/30 border-green-500/50',
    orange: 'from-orange-500/30 to-red-500/30 border-orange-500/50',
    red: 'from-red-500/30 to-pink-500/30 border-red-500/50',
    gold: 'from-yellow-500/30 to-orange-500/30 border-yellow-500/50',
  };

  const colorClass = colorClasses[badge.color] || colorClasses.blue;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.3, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.3, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`bg-gradient-to-br ${colorClass} backdrop-blur-xl border-2 rounded-3xl p-12 max-w-md mx-4 shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="mb-6 flex justify-center"
              >
                <div className="text-8xl">{badge.icon}</div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-yellow-200/80 text-sm uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Achievement Unlocked!
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{badge.title}</h2>
                <p className="text-white/70 text-sm">{badge.description}</p>
              </motion.div>

              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={onClose}
                className="mt-6 w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl font-medium transition-colors border border-white/20"
              >
                Awesome!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


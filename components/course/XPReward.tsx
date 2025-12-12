import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

type XPRewardProps = {
  amount: number;
  position?: 'top' | 'bottom' | 'center';
  onComplete?: () => void;
};

export const XPReward: React.FC<XPRewardProps> = ({ 
  amount, 
  position = 'top',
  onComplete 
}) => {
  const [show, setShow] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset show state and increment key to force re-render
    setShow(true);
    setKey(prev => prev + 1);
    
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) {
        setTimeout(onComplete, 300);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [amount, onComplete]);

  const positionClasses = {
    top: 'top-20',
    bottom: 'bottom-20',
    center: 'top-1/2 -translate-y-1/2',
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.5, y: position === 'bottom' ? 20 : -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: position === 'bottom' ? 20 : -20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          className={`fixed left-1/2 -translate-x-1/2 ${positionClasses[position]} z-[100] pointer-events-none`}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
            className="bg-gradient-to-br from-yellow-500/30 to-orange-500/20 backdrop-blur-xl border-2 border-yellow-500/50 rounded-2xl px-6 py-4 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-6 h-6 text-yellow-400" fill="currentColor" />
              </motion.div>
              <div>
                <div className="text-yellow-200/80 text-xs uppercase tracking-wider mb-0.5">XP Gained</div>
                <div className="text-2xl font-bold text-white">
                  +{amount}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


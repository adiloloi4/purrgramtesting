import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Terminal } from 'lucide-react';
import { TerminalSlide as TerminalSlideType } from '@/data/missions/tutorial';

type TerminalSlideProps = {
  slide: TerminalSlideType;
  onSuccess: () => void;
};

export const TerminalSlide: React.FC<TerminalSlideProps> = ({
  slide,
  onSuccess,
}) => {
  const [input, setInput] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === slide.expectedCommand) {
      setIsSuccess(true);
      onSuccess();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
        inputRef.current.focus();
    }
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-light text-white">{slide.prompt}</h2>
      
      <div className={cn(
          "bg-black/80 rounded-lg border-2 overflow-hidden font-mono text-sm transition-all duration-500",
          isSuccess ? "border-green-500/50 shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]" : "border-white/10"
      )}>
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
              <div className="ml-2 flex items-center gap-2 text-white/30 text-xs">
                  <Terminal className="w-3 h-3" />
                  <span>bash — 80x24</span>
              </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-64 flex flex-col justify-end" onClick={() => inputRef.current?.focus()}>
              <div className="space-y-2 text-white/70">
                   <p>Last login: {new Date().toDateString()}</p>
                   <p className="text-purple-400">~/vibe-coder $ <span className="text-white/50"># Type '{slide.expectedCommand}' below</span></p>
              </div>

              <div className="mt-4 space-y-2">
                  <form onSubmit={handleSubmit} className="flex items-center gap-2">
                      <span className="text-purple-400">~/vibe-coder $</span>
                      <input 
                        ref={inputRef}
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isSuccess}
                        className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 p-0"
                        autoFocus
                        spellCheck={false}
                      />
                  </form>
                  
                  {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-green-400 font-bold mt-2"
                      >
                          {slide.successMessage}
                      </motion.div>
                  )}
              </div>
          </div>
      </div>
    </div>
  );
};

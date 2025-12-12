import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Code, Rocket, Lightbulb, ExternalLink, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CodeChallengeSlide, MiniProjectSlide, BuildTaskSlide } from '@/data/missions/tutorial';

// Code Challenge Slide
type CodeChallengeSlideProps = {
  slide: CodeChallengeSlide;
  onComplete: () => void;
};

export const CodeChallengeSlideComponent: React.FC<CodeChallengeSlideProps> = ({ slide, onComplete }) => {
  const [completedCriteria, setCompletedCriteria] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState(false);

  const toggleCriterion = (criterion: string) => {
    const newSet = new Set(completedCriteria);
    if (newSet.has(criterion)) {
      newSet.delete(criterion);
    } else {
      newSet.add(criterion);
    }
    setCompletedCriteria(newSet);
    
    // Allow next if at least one criterion is checked
    if (newSet.size > 0) {
      onComplete();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
          <Code className="w-5 h-5 text-purple-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
          <p className="text-white/70 leading-relaxed">{slide.description}</p>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
        <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-3">Your Challenge</h3>
        <p className="text-lg text-white/90 leading-relaxed mb-4">{slide.task}</p>
        
        {slide.starterCode && (
          <div className="mt-4 p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-sm text-white/80 overflow-x-auto">
            <div className="text-white/40 text-xs mb-2">Starter Code:</div>
            <pre className="whitespace-pre-wrap">{slide.starterCode}</pre>
          </div>
        )}

        {slide.example && (
          <div className="mt-4 p-4 rounded-lg bg-black/40 border border-white/5">
            <div className="text-white/40 text-xs mb-2 flex items-center gap-2">
              <Lightbulb className="w-3 h-3" />
              Example:
            </div>
            <p className="text-sm text-white/70 font-mono">{slide.example}</p>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">Success Criteria</h3>
        {slide.successCriteria.map((criterion, index) => {
          const isCompleted = completedCriteria.has(criterion);
          return (
            <motion.button
              key={index}
              onClick={() => toggleCriterion(criterion)}
              className={cn(
                "w-full p-4 rounded-xl border text-left transition-all",
                isCompleted
                  ? "bg-green-500/10 border-green-500/30 text-green-200"
                  : "bg-white/5 border-white/10 hover:bg-white/10 text-white/80"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                  isCompleted ? "bg-green-500 border-green-500" : "border-white/30"
                )}>
                  {isCompleted && <CheckCircle2 className="w-3 h-3 text-white" />}
                </div>
                <span className="flex-1">{criterion}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {slide.hint && (
        <div className="mt-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-2"
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-sm"
              >
                {slide.hint}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm">
        <strong>💡 Tip:</strong> Open Cursor and use AI to help you build this. The goal is to learn by doing, not to struggle alone.
      </div>
    </div>
  );
};

// Mini Project Slide
type MiniProjectSlideProps = {
  slide: MiniProjectSlide;
  onComplete: () => void;
};

export const MiniProjectSlideComponent: React.FC<MiniProjectSlideProps> = ({ slide, onComplete }) => {
  const [completedCheckpoints, setCompletedCheckpoints] = useState<Set<string>>(new Set());

  const toggleCheckpoint = (checkpointId: string) => {
    const newSet = new Set(completedCheckpoints);
    if (newSet.has(checkpointId)) {
      newSet.delete(checkpointId);
    } else {
      newSet.add(checkpointId);
    }
    setCompletedCheckpoints(newSet);
    
    // Allow next if at least one checkpoint is completed
    if (newSet.size > 0) {
      onComplete();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
          <Rocket className="w-5 h-5 text-blue-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
          <p className="text-white/70 leading-relaxed">{slide.description}</p>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Project Steps</h3>
        <ol className="space-y-3">
          {slide.steps.map((step, index) => (
            <li key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm font-medium">
                {index + 1}
              </div>
              <p className="text-white/80 leading-relaxed flex-1">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">Checkpoints</h3>
        <p className="text-sm text-white/50">Mark each checkpoint as you complete it:</p>
        {slide.checkpoints.map((checkpoint) => {
          const isCompleted = completedCheckpoints.has(checkpoint.id);
          return (
            <motion.button
              key={checkpoint.id}
              onClick={() => toggleCheckpoint(checkpoint.id)}
              className={cn(
                "w-full p-4 rounded-xl border text-left transition-all",
                isCompleted
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                  isCompleted ? "bg-green-500 border-green-500" : "border-white/30"
                )}>
                  {isCompleted && <CheckCircle2 className="w-3 h-3 text-white" />}
                </div>
                <div className="flex-1">
                  <div className={cn(
                    "font-medium mb-1",
                    isCompleted ? "text-green-200" : "text-white"
                  )}>
                    {checkpoint.label}
                  </div>
                  <div className="text-xs text-white/50">{checkpoint.verification}</div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {slide.resources && slide.resources.length > 0 && (
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <h4 className="text-sm font-medium text-white/80 mb-3">Helpful Resources</h4>
          <div className="space-y-2">
            {slide.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {resource.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Build Task Slide
type BuildTaskSlideProps = {
  slide: BuildTaskSlide;
  onComplete: () => void;
};

export const BuildTaskSlideComponent: React.FC<BuildTaskSlideProps> = ({ slide, onComplete }) => {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (index: number) => {
    const newSet = new Set(completedSteps);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setCompletedSteps(newSet);
    
    // Allow next if at least one step is completed
    if (newSet.size > 0) {
      onComplete();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
          <Rocket className="w-5 h-5 text-green-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">{slide.title}</h2>
          <p className="text-white/70 leading-relaxed">{slide.description}</p>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20">
        <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3">Your Task</h3>
        <p className="text-lg text-white/90 leading-relaxed mb-4">{slide.task}</p>
        
        <div className="mt-4 p-4 rounded-lg bg-black/40 border border-white/5">
          <div className="text-white/40 text-xs mb-2 flex items-center gap-2">
            <ChevronRight className="w-3 h-3" />
            Expected Outcome:
          </div>
          <p className="text-sm text-white/80">{slide.expectedOutcome}</p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">Verification Steps</h3>
        <p className="text-sm text-white/50 mb-3">Complete these steps to verify your build:</p>
        {slide.verificationSteps.map((step, index) => {
          const isCompleted = completedSteps.has(index);
          return (
            <motion.button
              key={index}
              onClick={() => toggleStep(index)}
              className={cn(
                "w-full p-4 rounded-xl border text-left transition-all",
                isCompleted
                  ? "bg-green-500/10 border-green-500/30 text-green-200"
                  : "bg-white/5 border-white/10 hover:bg-white/10 text-white/80"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                  isCompleted ? "bg-green-500 border-green-500" : "border-white/30"
                )}>
                  {isCompleted && <CheckCircle2 className="w-3 h-3 text-white" />}
                </div>
                <span className="flex-1">{step}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {slide.tips && slide.tips.length > 0 && (
        <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <h4 className="text-sm font-medium text-yellow-200 mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Pro Tips
          </h4>
          <ul className="space-y-1 text-sm text-yellow-200/80">
            {slide.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


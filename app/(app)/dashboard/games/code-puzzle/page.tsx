"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Trophy, Clock, ArrowLeft, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import confetti from 'canvas-confetti';

const puzzles = [
  {
    id: "puzzle1",
    title: "Complete the Function",
    puzzle: "function __0__(name: string) { return `Hello ${__1__}`; }",
    missingParts: [
      {
        id: "func-name",
        options: ["greet", "sayHello", "hello"],
        correct: "greet",
        hint: "Think about what this function does"
      },
      {
        id: "param",
        options: ["name", "user", "person"],
        correct: "name",
        hint: "What parameter is passed to the function?"
      }
    ]
  },
  {
    id: "puzzle2",
    title: "Complete the API Call",
    puzzle: "const response = await __0__('https://api.example.com/data');\nconst data = await response.__1__();",
    missingParts: [
      {
        id: "fetch",
        options: ["fetch", "get", "request"],
        correct: "fetch",
        hint: "What function is used to make HTTP requests?"
      },
      {
        id: "json",
        options: ["json", "text", "data"],
        correct: "json",
        hint: "What method converts response to JavaScript object?"
      }
    ]
  },
  {
    id: "puzzle3",
    title: "Complete the Component",
    puzzle: "export default function Button({ __0__, onClick }) {\n  return <button onClick={__1__}>{__0__}</button>;\n}",
    missingParts: [
      {
        id: "children",
        options: ["children", "text", "label"],
        correct: "children",
        hint: "What prop contains the button text?"
      },
      {
        id: "onClick",
        options: ["onClick", "handleClick", "click"],
        correct: "onClick",
        hint: "What prop is passed to the button element?"
      }
    ]
  }
];

export default function CodePuzzlePage() {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [selectedParts, setSelectedParts] = useState<Record<string, string>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(120);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const currentPuzzle = puzzles[currentPuzzleIndex];

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !isComplete) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isComplete, gameStarted]);

  const handleSelect = (partId: string, option: string) => {
    if (!gameStarted) setGameStarted(true);
    const newParts = { ...selectedParts, [partId]: option };
    setSelectedParts(newParts);
    
    const part = currentPuzzle.missingParts.find((p) => p.id === partId);
    if (part && option === part.correct) {
      setScore((prev) => prev + 10);
      confetti({
        particleCount: 15,
        spread: 40,
        origin: { y: 0.7 },
        colors: ['#10b981'],
      });
    }

    const allFilled = currentPuzzle.missingParts.every((part) => newParts[part.id]);
    const allCorrect = currentPuzzle.missingParts.every(
      (part) => newParts[part.id] === part.correct
    );

    if (allFilled && allCorrect) {
      setIsComplete(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const renderPuzzle = () => {
    let puzzleText = currentPuzzle.puzzle;
    currentPuzzle.missingParts.forEach((part, index) => {
      const placeholder = `__${index}__`;
      const selected = selectedParts[part.id] || placeholder;
      puzzleText = puzzleText.replace(placeholder, selected);
    });
    return puzzleText;
  };

  const resetCurrent = () => {
    setSelectedParts({});
    setShowHints({});
    setIsComplete(false);
    setTimeLeft(120);
    setGameStarted(false);
  };

  const handleNext = () => {
    if (currentPuzzleIndex < puzzles.length - 1) {
      setCurrentPuzzleIndex((prev) => prev + 1);
      resetCurrent();
    } else {
      setCurrentPuzzleIndex(0);
      resetCurrent();
      setScore(0);
    }
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
          Code <span className="font-normal text-white">Puzzle</span>
        </h1>
        <p className="text-white/50 font-light text-lg">Fill in the blanks to complete the code.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="w-5 h-5 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">Score</span>
          </div>
          <div className="text-3xl font-light text-white">{score}</div>
        </div>
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">Time</span>
          </div>
          <div className="text-3xl font-light text-white">{timeLeft}s</div>
        </div>
      </div>

      {/* Puzzle */}
      <div className="mb-8">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
          <h3 className="text-xl font-light text-white mb-4">{currentPuzzle.title}</h3>
          <div className="font-mono text-sm text-white/80 whitespace-pre-wrap mb-6 p-4 rounded-lg bg-black/40">
            {renderPuzzle()}
          </div>

          <div className="space-y-4">
            {currentPuzzle.missingParts.map((part) => {
              const selected = selectedParts[part.id];
              const isCorrect = selected === part.correct;
              
              return (
                <div key={part.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">Fill in: <code className="text-purple-300">__{currentPuzzle.missingParts.indexOf(part)}__</code></span>
                    <button
                      onClick={() => setShowHints((prev) => ({ ...prev, [part.id]: !prev[part.id] }))}
                      className="text-xs text-white/40 hover:text-white/60 transition-colors flex items-center gap-1"
                    >
                      <Lightbulb className="w-3 h-3" />
                      Hint
                    </button>
                  </div>
                  {showHints[part.id] && (
                    <p className="text-xs text-yellow-300/80 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2">
                      {part.hint}
                    </p>
                  )}
                  <div className="flex gap-2 flex-wrap">
                    {part.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect(part.id, option)}
                        disabled={isComplete}
                        className={cn(
                          "px-4 py-2 rounded-lg border text-sm transition-all",
                          selected === option && isCorrect
                            ? "bg-green-500/20 border-green-500/50 text-green-300"
                            : selected === option && !isCorrect
                            ? "bg-red-500/20 border-red-500/50 text-red-300"
                            : selected && selected !== option
                            ? "bg-white/5 border-white/10 text-white/40"
                            : "bg-white/5 border-white/10 hover:bg-white/10 text-white/80"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={resetCurrent}
            className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-light transition-colors"
          >
            Reset
          </button>
          {isComplete && (
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-xl bg-white text-black hover:bg-white/90 text-sm font-medium transition-colors"
            >
              Next Puzzle
            </button>
          )}
        </div>
      </div>

      {/* Completion Screen */}
      {isComplete && currentPuzzleIndex === puzzles.length - 1 && (
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
          <h3 className="text-3xl font-light text-white mb-3 tracking-wide">All Puzzles Complete!</h3>
          <p className="text-white/50 font-light mb-6">
            Final Score: <span className="font-medium text-white">{score}</span>
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => {
                setCurrentPuzzleIndex(0);
                setScore(0);
                resetCurrent();
              }}
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


"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy, ArrowLeft, X, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import confetti from 'canvas-confetti';

const sequences = [
  {
    id: "seq1",
    title: "Deployment Workflow",
    description: "Order the steps to deploy a Next.js app",
    items: [
      { id: "create", label: "Create Next.js project", correctPosition: 0 },
      { id: "build", label: "Build the application", correctPosition: 1 },
      { id: "git", label: "Push to GitHub", correctPosition: 2 },
      { id: "deploy", label: "Deploy to Vercel", correctPosition: 3 },
    ],
    hint: "Start with creating, end with deploying"
  },
  {
    id: "seq2",
    title: "API Request Flow",
    description: "Order the steps of making an API request",
    items: [
      { id: "request", label: "Send HTTP request", correctPosition: 0 },
      { id: "server", label: "Server processes request", correctPosition: 1 },
      { id: "response", label: "Receive response", correctPosition: 2 },
      { id: "parse", label: "Parse JSON data", correctPosition: 3 },
    ],
    hint: "Start with sending, end with parsing"
  },
  {
    id: "seq3",
    title: "Component Lifecycle",
    description: "Order the React component lifecycle",
    items: [
      { id: "mount", label: "Component mounts", correctPosition: 0 },
      { id: "render", label: "Component renders", correctPosition: 1 },
      { id: "update", label: "State updates", correctPosition: 2 },
      { id: "unmount", label: "Component unmounts", correctPosition: 3 },
    ],
    hint: "Start with mounting, end with unmounting"
  }
];

export default function SequencePage() {
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [availableItems, setAvailableItems] = useState(sequences[0].items);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  const currentSequence = sequences[currentSequenceIndex];

  React.useEffect(() => {
    setAvailableItems(currentSequence.items);
    setSelectedOrder([]);
    setIsComplete(false);
  }, [currentSequenceIndex]);

  const handleItemClick = (itemId: string) => {
    if (isComplete) return;
    
    if (selectedOrder.includes(itemId)) {
      setSelectedOrder((prev) => prev.filter((id) => id !== itemId));
      setAvailableItems((prev) => [...prev, currentSequence.items.find((i) => i.id === itemId)!]);
    } else {
      setSelectedOrder((prev) => [...prev, itemId]);
      setAvailableItems((prev) => prev.filter((item) => item.id !== itemId));
    }
  };

  const checkOrder = () => {
    const correct = selectedOrder.every(
      (id, index) => currentSequence.items.find((i) => i.id === id)?.correctPosition === index
    );

    if (correct && selectedOrder.length === currentSequence.items.length) {
      setIsComplete(true);
      setScore((prev) => prev + 20);
      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#6366f1'],
      });
    }
  };

  const resetCurrent = () => {
    setSelectedOrder([]);
    setAvailableItems(currentSequence.items);
    setIsComplete(false);
  };

  const handleNext = () => {
    if (currentSequenceIndex < sequences.length - 1) {
      setCurrentSequenceIndex((prev) => prev + 1);
    } else {
      setCurrentSequenceIndex(0);
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
          Sequence <span className="font-normal text-white">Master</span>
        </h1>
        <p className="text-white/50 font-light text-lg">Order the steps in the correct sequence.</p>
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
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">Challenge</span>
          </div>
          <div className="text-3xl font-light text-white">
            {currentSequenceIndex + 1} / {sequences.length}
          </div>
        </div>
      </div>

      {/* Sequence Game */}
      <div className="mb-8">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
          <h3 className="text-xl font-light text-white mb-2">{currentSequence.title}</h3>
          <p className="text-white/50 font-light text-sm mb-6">{currentSequence.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">Available Items</h4>
              <div className="space-y-2">
                {availableItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-left transition-all text-white/80 font-light"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">Your Sequence</h4>
              <div className="space-y-2 min-h-[200px]">
                {selectedOrder.map((itemId, index) => {
                  const item = currentSequence.items.find((i) => i.id === itemId);
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
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-light text-white">
                        {index + 1}
                      </div>
                      <span className="flex-1 text-white font-light">{item?.label}</span>
                      <button
                        onClick={() => handleItemClick(itemId)}
                        className="text-white/50 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      {isComplete && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      )}
                    </motion.div>
                  );
                })}
                {selectedOrder.length === 0 && (
                  <div className="text-center text-white/30 py-8 font-light">Click items to build your sequence</div>
                )}
              </div>
            </div>
          </div>

          {currentSequence.hint && (
            <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/80 text-sm font-light">
              <strong>💡 Hint:</strong> {currentSequence.hint}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={resetCurrent}
            className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-light transition-colors"
          >
            Reset
          </button>
          <button
            onClick={checkOrder}
            disabled={selectedOrder.length !== currentSequence.items.length || isComplete}
            className={cn(
              "px-6 py-2 rounded-xl text-sm font-medium transition-colors",
              selectedOrder.length === currentSequence.items.length && !isComplete
                ? "bg-white text-black hover:bg-white/90"
                : "bg-white/5 text-white/40 border border-white/10 cursor-not-allowed"
            )}
          >
            Check Answer
          </button>
          {isComplete && (
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-xl bg-white text-black hover:bg-white/90 text-sm font-medium transition-colors"
            >
              Next Challenge
            </button>
          )}
        </div>
      </div>

      {/* Completion Screen */}
      {isComplete && currentSequenceIndex === sequences.length - 1 && (
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
          <h3 className="text-3xl font-light text-white mb-3 tracking-wide">All Sequences Complete!</h3>
          <p className="text-white/50 font-light mb-6">
            Final Score: <span className="font-medium text-white">{score}</span>
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => {
                setCurrentSequenceIndex(0);
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


"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, ArrowLeft, CheckCircle2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import confetti from 'canvas-confetti';

const codeSnippets = [
  {
    id: "bug1",
    title: "Find the Bug #1",
    code: `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

const cart = [
  { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 20 },
  { name: 'Product 3' }
];

const result = calculateTotal(cart);`,
    bugs: [
      { line: 10, description: "Product 3 is missing a price property", fix: "{ name: 'Product 3', price: 15 }" }
    ]
  },
  {
    id: "bug2",
    title: "Find the Bug #2",
    code: `function getUser(id) {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  return users.find(user => user.id = id);
}`,
    bugs: [
      { line: 5, description: "Using assignment (=) instead of comparison (===)", fix: "user.id === id" }
    ]
  },
  {
    id: "bug3",
    title: "Find the Bug #3",
    code: `async function fetchData() {
  const response = fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}`,
    bugs: [
      { line: 2, description: "Missing await keyword before fetch", fix: "const response = await fetch('https://api.example.com/data');" }
    ]
  }
];

export default function SpotTheBugPage() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [clickedLines, setClickedLines] = useState<Set<number>>(new Set());
  const [foundBugs, setFoundBugs] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentSnippet = codeSnippets[currentSnippetIndex];
  const codeLines = currentSnippet.code.split('\n');

  const handleLineClick = (lineNumber: number) => {
    if (isComplete) return;
    
    setClickedLines((prev) => new Set([...prev, lineNumber]));
    
    const bug = currentSnippet.bugs.find((b) => b.line === lineNumber);
    if (bug) {
      setFoundBugs((prev) => new Set([...prev, lineNumber]));
      setScore((prev) => prev + 10);
      
      confetti({
        particleCount: 30,
        spread: 55,
        origin: { y: 0.7 },
        colors: ['#10b981'],
      });

      // Check if all bugs found
      if (foundBugs.size + 1 >= currentSnippet.bugs.length) {
        setIsComplete(true);
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }, 500);
      }
    }
  };

  const handleNext = () => {
    if (currentSnippetIndex < codeSnippets.length - 1) {
      setCurrentSnippetIndex((prev) => prev + 1);
      setClickedLines(new Set());
      setFoundBugs(new Set());
      setIsComplete(false);
    } else {
      setCurrentSnippetIndex(0);
      setClickedLines(new Set());
      setFoundBugs(new Set());
      setIsComplete(false);
      setScore(0);
    }
  };

  const resetCurrent = () => {
    setClickedLines(new Set());
    setFoundBugs(new Set());
    setIsComplete(false);
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
          Spot the <span className="font-normal text-white">Bug</span>
        </h1>
        <p className="text-white/50 font-light text-lg">Click on lines with bugs to find them.</p>
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
            {currentSnippetIndex + 1} / {codeSnippets.length}
          </div>
        </div>
      </div>

      {/* Code Display */}
      <div className="mb-8">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
          <h3 className="text-xl font-light text-white mb-4">{currentSnippet.title}</h3>
          <div className="font-mono text-sm text-white/80 whitespace-pre-wrap">
            {codeLines.map((line, index) => {
              const lineNumber = index + 1;
              const isClicked = clickedLines.has(lineNumber);
              const isBug = currentSnippet.bugs.some((b) => b.line === lineNumber);
              const isFound = foundBugs.has(lineNumber);

              return (
                <div
                  key={index}
                  onClick={() => handleLineClick(lineNumber)}
                  className={cn(
                    "px-4 py-2 cursor-pointer transition-all hover:bg-white/5 rounded",
                    isFound && "bg-green-500/20 border-l-2 border-green-500/50",
                    isClicked && !isBug && "bg-red-500/20 border-l-2 border-red-500/50",
                    !isClicked && "hover:bg-white/5"
                  )}
                >
                  <span className="text-white/40 mr-4 select-none">{lineNumber}</span>
                  <span className={cn(
                    isFound && "text-green-300",
                    isClicked && !isBug && "text-red-300",
                    !isClicked && "text-white/80"
                  )}>
                    {line}
                  </span>
                  {isFound && (
                    <CheckCircle2 className="w-4 h-4 text-green-400 inline-block ml-2" />
                  )}
                  {isClicked && !isBug && (
                    <X className="w-4 h-4 text-red-400 inline-block ml-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bug Info */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-green-500/10 border border-green-500/20"
          >
            <h4 className="text-lg font-light text-white mb-3">Bugs Found:</h4>
            {currentSnippet.bugs.map((bug, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <p className="text-white/70 text-sm mb-1">
                  <strong>Line {bug.line}:</strong> {bug.description}
                </p>
                <p className="text-green-300 text-sm font-mono">
                  Fix: {bug.fix}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-6">
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
              Next Challenge
            </button>
          )}
        </div>
      </div>

      {/* Completion Screen */}
      {isComplete && currentSnippetIndex === codeSnippets.length - 1 && (
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
          <h3 className="text-3xl font-light text-white mb-3 tracking-wide">All Challenges Complete!</h3>
          <p className="text-white/50 font-light mb-6">
            Final Score: <span className="font-medium text-white">{score}</span>
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => {
                setCurrentSnippetIndex(0);
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


"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Keyboard, Trophy, ArrowLeft, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

const codeSnippets = [
  "const greeting = 'Hello, World!';",
  "function add(a, b) { return a + b; }",
  "const user = { name: 'Alice', age: 30 };",
  "const numbers = [1, 2, 3, 4, 5];",
  "if (condition) { console.log('True'); }",
  "const result = data.map(item => item.id);",
  "async function fetchData() { const res = await fetch(url); }",
  "const Component = () => { return <div>Hello</div>; };",
];

export default function TypingChallengePage() {
  const [currentText, setCurrentText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentText(codeSnippets[currentIndex]);
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setErrors(0);
    setIsComplete(false);
  }, [currentIndex]);

  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (userInput.length > 0 && startTime) {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60; // minutes
      const wordsTyped = userInput.length / 5; // average word length
      setWpm(Math.floor(wordsTyped / timeElapsed));
    }

    // Check for errors
    let errorCount = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== currentText[i]) {
        errorCount++;
      }
    }
    setErrors(errorCount);

    // Check if complete
    if (userInput === currentText) {
      setIsComplete(true);
      if (wpm >= 30) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
      }
    }
  }, [userInput, startTime, currentText, wpm]);

  const handleReset = () => {
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setErrors(0);
    setIsComplete(false);
    inputRef.current?.focus();
  };

  const handleNext = () => {
    if (currentIndex < codeSnippets.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
    inputRef.current?.focus();
  };

  const getCharClass = (index: number) => {
    if (index >= userInput.length) return "text-white/30";
    if (userInput[index] === currentText[index]) {
      return "text-green-400";
    }
    return "text-red-400 bg-red-500/20";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/dashboard/games"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Games</span>
          </Link>
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
              <Keyboard className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl font-bold text-white">Typing Challenge</h1>
          </div>
          <p className="text-white/70">Type the code snippet as fast and accurately as possible</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-white/50 text-sm mb-1">WPM</div>
            <div className="text-3xl font-bold text-white">{wpm || 0}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-white/50 text-sm mb-1">Errors</div>
            <div className="text-3xl font-bold text-red-400">{errors}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-white/50 text-sm mb-1">Progress</div>
            <div className="text-3xl font-bold text-white">
              {Math.floor((userInput.length / currentText.length) * 100)}%
            </div>
          </div>
        </div>

        {/* Typing Area */}
        <div className="mb-6">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 mb-4">
            <div className="text-2xl font-mono leading-relaxed">
              {currentText.split("").map((char, index) => (
                <span key={index} className={getCharClass(index)}>
                  {char}
                </span>
              ))}
            </div>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isComplete}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            placeholder="Start typing..."
            autoFocus
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          {isComplete && (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-white transition-colors"
            >
              Next Challenge
            </button>
          )}
        </div>

        {/* Completion Screen */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="mt-6 p-8 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 border-2 border-green-500/50 text-center shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mb-4"
            >
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto" fill="currentColor" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-2">Perfect!</h3>
            <p className="text-white/70 mb-4">
              You typed at <span className="font-bold text-green-400">{wpm} WPM</span> with {errors} errors
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
              >
                Next Challenge
              </button>
              <Link
                href="/dashboard/games"
                className="px-6 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-white transition-colors"
              >
                Back to Games
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}


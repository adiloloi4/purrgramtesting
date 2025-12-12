"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Zap, Trophy, Clock, ArrowLeft, CheckCircle2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import confetti from 'canvas-confetti';

const quizQuestions = [
  {
    id: "q1",
    question: "What is React?",
    options: [
      { id: "a", text: "A database" },
      { id: "b", text: "A UI library" },
      { id: "c", text: "A server framework" },
    ],
    correct: "b",
    timeLimit: 10,
  },
  {
    id: "q2",
    question: "What does API stand for?",
    options: [
      { id: "a", text: "Application Programming Interface" },
      { id: "b", text: "Advanced Program Integration" },
      { id: "c", text: "Automated Process Interface" },
    ],
    correct: "a",
    timeLimit: 12,
  },
  {
    id: "q3",
    question: "Which method is used to create data?",
    options: [
      { id: "a", text: "GET" },
      { id: "b", text: "POST" },
      { id: "c", text: "DELETE" },
    ],
    correct: "b",
    timeLimit: 8,
  },
  {
    id: "q4",
    question: "What is Supabase?",
    options: [
      { id: "a", text: "A frontend framework" },
      { id: "b", text: "A backend platform" },
      { id: "c", text: "A deployment service" },
    ],
    correct: "b",
    timeLimit: 10,
  },
  {
    id: "q5",
    question: "What is Vibe Coding?",
    options: [
      { id: "a", text: "Writing code manually" },
      { id: "b", text: "Building products with AI assistance" },
      { id: "c", text: "Memorizing syntax" },
    ],
    correct: "b",
    timeLimit: 10,
  },
];

export default function SpeedQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quizQuestions[0]?.timeLimit || 0);
  const [isComplete, setIsComplete] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return [];
    const options = [...currentQuestion.options];
    return options.sort(() => Math.random() - 0.5);
  }, [currentQuestion, currentQuestionIndex]);

  useEffect(() => {
    if (gameStarted && currentQuestion?.timeLimit && timeLeft > 0 && !isComplete) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleNext();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, currentQuestionIndex, isComplete, gameStarted]);

  const handleAnswer = (answerId: string) => {
    if (!gameStarted) setGameStarted(true);
    setSelectedAnswer(answerId);
    if (answerId === currentQuestion.correct) {
      setScore((prev) => prev + 1);
      confetti({
        particleCount: 30,
        spread: 55,
        origin: { y: 0.7 },
        colors: ['#10b981'],
      });
    }
    setTimeout(() => handleNext(), 1500);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(quizQuestions[currentQuestionIndex + 1]?.timeLimit || 0);
    } else {
      setIsComplete(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(quizQuestions[0]?.timeLimit || 0);
    setIsComplete(false);
    setGameStarted(false);
  };

  if (!currentQuestion && !isComplete) return null;

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
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
              <Zap className="w-8 h-8 text-orange-300" />
            </div>
            <h1 className="text-4xl font-bold text-white">Speed Quiz</h1>
          </div>
          <p className="text-white/70">Answer questions as fast as you can!</p>
        </div>

        {!isComplete ? (
          <>
            {/* Stats */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                {currentQuestion.timeLimit && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30">
                    <Clock className="w-4 h-4 text-red-400" />
                    <span className="text-white font-mono">{timeLeft}s</span>
                  </div>
                )}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                  <Trophy className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-mono">{score}/{quizQuestions.length}</span>
                </div>
              </div>
              <div className="text-white/70 text-sm">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </div>
            </div>

            {/* Question */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-6">
              <h3 className="text-xl text-white mb-6">{currentQuestion.question}</h3>

              <div className="space-y-3">
                {shuffledOptions.map((option) => {
                  const isSelected = selectedAnswer === option.id;
                  const isCorrect = option.id === currentQuestion.correct;
                  const showResult = selectedAnswer !== null;

                  return (
                    <motion.button
                      key={option.id}
                      onClick={() => !showResult && handleAnswer(option.id)}
                      disabled={showResult}
                      className={cn(
                        "w-full p-4 rounded-xl border text-left transition-all",
                        showResult && isCorrect
                          ? "bg-green-500/20 border-green-500/50"
                          : showResult && isSelected && !isCorrect
                          ? "bg-red-500/20 border-red-500/50"
                          : isSelected
                          ? "bg-purple-500/20 border-purple-500/50"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      )}
                      whileHover={{ scale: showResult ? 1 : 1.02 }}
                      whileTap={{ scale: showResult ? 1 : 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-white/80">{option.text}</span>
                        {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto" />}
                        {showResult && isSelected && !isCorrect && <X className="w-5 h-5 text-red-400 ml-auto" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-orange-500/20 border-2 border-yellow-500/50 text-center shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mb-4"
            >
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto" fill="currentColor" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h3>
            <p className="text-white/70 mb-4">
              You scored <span className="font-bold text-yellow-400">{score} out of {quizQuestions.length}</span>
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetGame}
                className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
              >
                Play Again
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


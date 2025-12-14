"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, Trophy, Sparkles, ArrowLeft, CheckCircle2, X, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import confetti from 'canvas-confetti';

// Standalone Prompt Game
const gameScenarios = [
  {
    id: "scenario-1",
    task: "You want to create a login button component",
    badPrompt: "Make a button",
    goodPrompts: [
      {
        id: "good-1",
        text: "Create a login button component using React and Tailwind. It should be purple, have hover effects, and show a loading state when clicked.",
        explanation: "Perfect! This includes Persona (React/Tailwind), Problem (login button), and Product (specific styling and behavior)."
      },
      {
        id: "good-2",
        text: "Button for login",
        explanation: "Too vague. Missing specific details about styling, framework, and behavior."
      },
      {
        id: "good-3",
        text: "I need a button that users can click to log in to my app. Make it look nice.",
        explanation: "Better than bad, but still lacks technical details like framework, styling approach, and specific requirements."
      }
    ],
    correctPromptId: "good-1"
  },
  {
    id: "scenario-2",
    task: "You want to fix a bug where the user profile doesn't load",
    badPrompt: "Fix the bug",
    goodPrompts: [
      {
        id: "good-4",
        text: "The user profile page shows a loading spinner forever. Check @UserProfile.tsx and @api/users/route.ts. The error in console says 'Cannot read property of undefined'. Fix the data fetching logic.",
        explanation: "Excellent! Includes context files (@), specific error message, and what to fix. This gives AI everything it needs."
      },
      {
        id: "good-5",
        text: "Profile page broken, fix it",
        explanation: "Too vague. No context, no error details, no file references."
      },
      {
        id: "good-6",
        text: "The profile page has an issue. Can you look at the UserProfile component and see what's wrong?",
        explanation: "Better, but missing specific error details and file context (@ references) that would help AI diagnose faster."
      }
    ],
    correctPromptId: "good-4"
  },
  {
    id: "scenario-3",
    task: "You want to add dark mode to your app",
    badPrompt: "Add dark mode",
    goodPrompts: [
      {
        id: "good-7",
        text: "Add dark mode toggle using next-themes. Add it to the navbar. It should persist across page reloads and have smooth transitions. Use the existing color scheme from @globals.css.",
        explanation: "Perfect! Includes library (next-themes), location (navbar), requirements (persist, transitions), and context file (@globals.css)."
      },
      {
        id: "good-8",
        text: "Make it dark",
        explanation: "Way too vague. No implementation details, no library choice, no location specified."
      },
      {
        id: "good-9",
        text: "I want dark mode for my Next.js app. Can you add a toggle somewhere?",
        explanation: "Better, but missing specific library choice, exact location, and context files that would help AI implement it correctly."
      }
    ],
    correctPromptId: "good-7"
  },
  {
    id: "scenario-4",
    task: "You want to create a user dashboard with stats",
    badPrompt: "Make a dashboard",
    goodPrompts: [
      {
        id: "good-10",
        text: "Create a user dashboard component showing total users, active sessions, and revenue. Use Shadcn Card components. Fetch data from @api/stats/route.ts. Display numbers with animations and include a refresh button.",
        explanation: "Perfect! Includes component library (Shadcn), specific data points, API context (@), and UI requirements (animations, refresh)."
      },
      {
        id: "good-11",
        text: "Dashboard with some stats",
        explanation: "Too vague. No details about what stats, how to fetch data, or what components to use."
      },
      {
        id: "good-12",
        text: "I need a dashboard that shows user statistics. Can you make it look professional?",
        explanation: "Better, but missing specific data points, component library choice, and API context that would help AI build it correctly."
      }
    ],
    correctPromptId: "good-10"
  },
  {
    id: "scenario-5",
    task: "You want to add form validation",
    badPrompt: "Validate the form",
    goodPrompts: [
      {
        id: "good-13",
        text: "Add form validation to the signup form in @SignupForm.tsx. Email must be valid format, password must be 8+ characters with one number. Show error messages below each field in red. Use react-hook-form with zod schema.",
        explanation: "Excellent! Includes file context (@), specific validation rules, UI requirements (error placement, color), and library choice (react-hook-form + zod)."
      },
      {
        id: "good-14",
        text: "Check if form is valid",
        explanation: "Too vague. No details about what fields, what rules, or how to display errors."
      },
      {
        id: "good-15",
        text: "The signup form needs validation. Make sure users enter valid information.",
        explanation: "Better, but missing specific validation rules, file context, and library choice that would help AI implement it properly."
      }
    ],
    correctPromptId: "good-13"
  }
];

export default function PromptGamePage() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isComplete, setIsComplete] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current = [];
    };
  }, []);

  const currentScenario = gameScenarios[currentScenarioIndex];

  useEffect(() => {
    if (timeLeft > 0 && !isComplete && !selectedPromptId) {
      const timer = setInterval(() => {
        if (!isMountedRef.current) {
          clearInterval(timer);
          return;
        }
        setTimeLeft((prev) => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, currentScenarioIndex, isComplete, selectedPromptId]);

  const handlePromptSelect = (promptId: string) => {
    if (selectedPromptId || isComplete) return;
    
    setSelectedPromptId(promptId);
    const isCorrect = promptId === currentScenario.correctPromptId;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
      
      if (isMountedRef.current) {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#10b981', '#8b5cf6'],
        });
      }
    }
    
    setShowExplanation(true);
    
    const timeout = setTimeout(() => {
      if (!isMountedRef.current) return;
      
      if (currentScenarioIndex < gameScenarios.length - 1) {
        setCurrentScenarioIndex((prev) => prev + 1);
        setSelectedPromptId(null);
        setShowExplanation(false);
        setTimeLeft(30);
      } else {
        setIsComplete(true);
      }
    }, 3000);
    timeoutRefs.current.push(timeout);
  };

  const handleReset = () => {
    setCurrentScenarioIndex(0);
    setSelectedPromptId(null);
    setScore(0);
    setIsComplete(false);
    setShowExplanation(false);
    setTimeLeft(30);
  };

  if (!currentScenario) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-purple-900/10 to-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard/games" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Games
        </Link>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-light text-white mb-2">Perfect Prompt Game</h1>
              <p className="text-white/70">Learn to write better prompts by choosing the best option</p>
            </div>
            <div className="flex items-center gap-4">
              <div className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors",
                timeLeft <= 5 ? "bg-red-500/20 border-red-500/50 text-red-200" : "bg-blue-500/20 border-blue-500/30"
              )}>
                <Clock className={cn("w-4 h-4", timeLeft <= 5 ? "text-red-400" : "text-blue-400")} />
                <span className="text-white font-mono">{timeLeft}s</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                <Trophy className="w-4 h-4 text-purple-400" />
                <span className="text-white font-mono">{score}/{gameScenarios.length}</span>
              </div>
              <div className="text-sm text-white/50">
                {currentScenarioIndex + 1}/{gameScenarios.length}
              </div>
            </div>
          </div>

          {!isComplete && (
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-4">Task:</h3>
                <p className="text-white/80 text-lg">{currentScenario.task}</p>
              </div>

              <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">❌ Bad Prompt:</h3>
                <p className="text-white/70 italic">"{currentScenario.badPrompt}"</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Select the best prompt:</h3>
                {currentScenario.goodPrompts.map((prompt) => {
                  const isSelected = selectedPromptId === prompt.id;
                  const isCorrect = prompt.id === currentScenario.correctPromptId;
                  const showResult = selectedPromptId !== null;

                  return (
                    <motion.button
                      key={prompt.id}
                      onClick={() => handlePromptSelect(prompt.id)}
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
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="text-white/90 mb-2">"{prompt.text}"</p>
                          {showExplanation && (isSelected || isCorrect) && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={cn(
                                "text-sm mt-2 p-2 rounded",
                                isCorrect ? "bg-green-500/10 text-green-200" : "bg-red-500/10 text-red-200"
                              )}
                            >
                              {prompt.explanation}
                            </motion.div>
                          )}
                        </div>
                        {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />}
                        {showResult && isSelected && !isCorrect && <X className="w-5 h-5 text-red-400 flex-shrink-0" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {isComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 border-2 border-purple-500/50 text-center shadow-2xl"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="mb-4"
              >
                <Sparkles className="w-16 h-16 text-purple-400 mx-auto" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
              >
                Prompt Master! ✨
              </motion.h3>
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold text-white"
                >
                  {score}<span className="text-purple-400 text-2xl">/{gameScenarios.length}</span>
                </motion.p>
                {score === gameScenarios.length && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mt-2"
                  >
                    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    <span className="text-yellow-200 text-sm font-medium">Perfect Score!</span>
                  </motion.div>
                )}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/60 text-sm"
                >
                  Accuracy: {Math.round((score / gameScenarios.length) * 100)}%
                </motion.p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-colors"
                >
                  Play Again
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}


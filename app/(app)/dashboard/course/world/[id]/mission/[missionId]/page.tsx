"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Zap, BookOpen, Copy, Trophy, ChevronRight, Sparkles, Target, Play } from 'lucide-react';
import { curriculum } from '@/data/curriculum';
import { useCourseStore } from '@/store/courseStore';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Expanded lesson content with more steps and games
const lessonContent: Record<string, {
  steps: Array<{
    id: number;
    type: 'explanation' | 'demo' | 'quiz' | 'matching' | 'code-puzzle' | 'build' | 'verify' | 'celebration';
    title: string;
    content: string;
    options?: string[];
    correctAnswer?: string | string[];
    hint?: string;
    xpReward?: number;
  }>;
  blackBox?: {
    title: string;
    content: string;
  };
}> = {
  "dictionary-of-power": {
    steps: [
      {
        id: 1,
        type: 'explanation',
        title: "The Vibe Mindset",
        content: "Think like a founder, not a coder. Your app is a restaurant: Frontend = Waiter, Backend = Kitchen, Database = Fridge, API = Menu.",
        xpReward: 5
      },
      {
        id: 2,
        type: 'demo',
        title: "See It In Action",
        content: "Frontend (Waiter) → Takes orders\nBackend (Kitchen) → Cooks food\nDatabase (Fridge) → Stores ingredients\nAPI (Menu) → Shows options",
        xpReward: 5
      },
      {
        id: 3,
        type: 'quiz',
        title: "Quick Check",
        content: "What does the Database represent in the restaurant analogy?",
        options: ["The Waiter", "The Fridge", "The Menu", "The Kitchen"],
        correctAnswer: "The Fridge",
        xpReward: 10
      },
      {
        id: 4,
        type: 'matching',
        title: "Match The Parts",
        content: "Drag each app part to its restaurant equivalent:",
        options: ["Frontend", "Backend", "Database", "API"],
        correctAnswer: ["Waiter", "Kitchen", "Fridge", "Menu"],
        xpReward: 15
      },
      {
        id: 5,
        type: 'quiz',
        title: "Real World Test",
        content: "In a waitlist app, when a user submits their email, which part processes it?",
        options: ["Frontend", "Backend", "Database", "API"],
        correctAnswer: "Backend",
        xpReward: 10
      },
      {
        id: 6,
        type: 'code-puzzle',
        title: "Complete The Analogy",
        content: "Fill in: If Frontend = Waiter, then Database = _____",
        correctAnswer: "fridge",
        hint: "Where do restaurants store ingredients?",
        xpReward: 10
      },
      {
        id: 7,
        type: 'build',
        title: "Build Your Dictionary",
        content: "Create 'vibe-dictionary.md' in Cursor. Write the restaurant analogy in your own words.",
        xpReward: 20
      },
      {
        id: 8,
        type: 'verify',
        title: "Submit Your Work",
        content: "Paste your GitHub link or file path to verify completion.",
        xpReward: 25
      }
    ],
    blackBox: {
      title: "HTML, CSS, JS Deep Dive",
      content: "HTML = structure, CSS = styling, JS = behavior. The DOM is how your browser organizes elements. In vibe coding, you command AI to write these for you."
    }
  },
  "setup": {
    steps: [
      {
        id: 1,
        type: 'explanation',
        title: "Tool Setup",
        content: "You need 3 tools: Node.js (runs code), Cursor (AI assistant), GitHub Desktop (saves work).",
        xpReward: 5
      },
      {
        id: 2,
        type: 'demo',
        title: "Installation Guide",
        content: "nodejs.org → Download LTS\ncursor.sh → Download app\ndesktop.github.com → Download",
        xpReward: 5
      },
      {
        id: 3,
        type: 'code-puzzle',
        title: "Terminal Check",
        content: "Run: node --version\nWhat should you see?",
        correctAnswer: "v20",
        hint: "A version number starting with v",
        xpReward: 10
      },
      {
        id: 4,
        type: 'quiz',
        title: "Tool Knowledge",
        content: "Which tool helps you save and track code changes?",
        options: ["Node.js", "Cursor", "GitHub Desktop", "Terminal"],
        correctAnswer: "GitHub Desktop",
        xpReward: 10
      },
      {
        id: 5,
        type: 'build',
        title: "Install Node.js",
        content: "Go to nodejs.org, download LTS version, install it. Then verify with: node --version",
        xpReward: 15
      },
      {
        id: 6,
        type: 'build',
        title: "Install Cursor",
        content: "Go to cursor.sh, download for your OS, install. Open it to verify it works.",
        xpReward: 15
      },
      {
        id: 7,
        type: 'build',
        title: "Install GitHub Desktop",
        content: "Go to desktop.github.com, download, install, sign in with GitHub account.",
        xpReward: 15
      },
      {
        id: 8,
        type: 'code-puzzle',
        title: "Vibe Check Command",
        content: "Run this in terminal: echo 'VIBE CHECK PASSED'\nType what you see:",
        correctAnswer: "VIBE CHECK PASSED",
        xpReward: 10
      },
      {
        id: 9,
        type: 'build',
        title: "Create Project Folder",
        content: "In terminal: mkdir vibe-coding-projects && cd vibe-coding-projects && echo 'VIBE CHECK PASSED' > vibe-check.txt",
        xpReward: 15
      },
      {
        id: 10,
        type: 'verify',
        title: "Final Verification",
        content: "Submit screenshot of terminal showing all commands working + vibe-check.txt file.",
        xpReward: 25
      }
    ],
    blackBox: {
      title: "DOM Explained",
      content: "The DOM is a tree structure of your HTML. JavaScript uses it to find and change elements. Like a map of your restaurant."
    }
  }
};

type LessonStep = number;

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const worldId = Number(params.id);
  const missionId = params.missionId as string;
  
  const { 
    markMissionComplete, 
    completedMissions,
    isWorldUnlocked
  } = useCourseStore();

  const lesson = lessonContent[missionId];
  const totalSteps = lesson?.steps.length || 10;
  const [currentStep, setCurrentStep] = useState<LessonStep>(1);
  const [stepAnswers, setStepAnswers] = useState<Record<number, string>>({});
  const [stepCompleted, setStepCompleted] = useState<Record<number, boolean>>({});
  const [stepXpEarned, setStepXpEarned] = useState<Record<number, boolean>>({});
  const [showCelebration, setShowCelebration] = useState(false);
  const [showBlackBox, setShowBlackBox] = useState(false);
  const [submissionLink, setSubmissionLink] = useState("");
  const [lessonCompleted, setLessonCompleted] = useState(false);

  // Find world and mission data
  let worldData = null;
  let phaseData = null;
  let missionData = null;

  for (const phase of curriculum.phases) {
    const found = phase.worlds.find(w => w.id === worldId);
    if (found) {
      worldData = found;
      phaseData = phase;
      missionData = found.missions.find(m => m.id === missionId);
      break;
    }
  }

  if (!worldData || !phaseData || !missionData || !lesson) {
    return <div className="p-8 text-white">Lesson not found</div>;
  }

  const unlocked = isWorldUnlocked(worldId);
  if (!unlocked) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-2xl font-bold text-slate-500 mb-2">World Locked</h1>
        <Button onClick={() => router.back()} variant="outline">Go Back</Button>
      </div>
    );
  }

  const isMissionCompleted = completedMissions[worldId]?.includes(missionId) || false;
  const currentMissionIndex = worldData.missions.findIndex(m => m.id === missionId);
  const progress = ((currentMissionIndex + 1) / worldData.missions.length) * 100;
  const stepProgress = (currentStep / totalSteps) * 100;
  const currentStepData = lesson.steps.find(s => s.id === currentStep);

  const handleAnswer = (answer: string) => {
    setStepAnswers(prev => ({ ...prev, [currentStep]: answer }));
    
    if (currentStepData) {
      const correct = Array.isArray(currentStepData.correctAnswer)
        ? currentStepData.correctAnswer.includes(answer)
        : answer.toLowerCase().trim() === currentStepData.correctAnswer?.toLowerCase().trim();
      
      if (correct) {
        setStepCompleted(prev => ({ ...prev, [currentStep]: true }));
        setStepXpEarned(prev => ({ ...prev, [currentStep]: true }));
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 2000);
      }
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete mission
      markMissionComplete(worldId, missionId);
      setLessonCompleted(true);
      setShowCelebration(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleVerifyWork = () => {
    if (submissionLink.trim()) {
      markMissionComplete(worldId, missionId);
      setLessonCompleted(true);
      setShowCelebration(true);
    }
  };

  const canProceed = () => {
    if (!currentStepData) return false;
    
    switch (currentStepData.type) {
      case 'explanation':
      case 'demo':
        return true;
      case 'quiz':
      case 'code-puzzle':
      case 'matching':
        return stepCompleted[currentStep] || false;
      case 'build':
        return stepAnswers[currentStep]?.toLowerCase().includes('done') || stepCompleted[currentStep] || false;
      case 'verify':
        return submissionLink.trim().length > 0;
      default:
        return true;
    }
  };

  const renderStep = () => {
    if (!currentStepData) return null;

    switch (currentStepData.type) {
      case 'explanation':
        return (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center space-y-6"
          >
            <div className="p-8 rounded-2xl bg-linear-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <div className="text-6xl mb-4">💡</div>
              <h2 className="text-3xl font-light text-white mb-4">{currentStepData.title}</h2>
              <p className="text-white/80 font-light text-xl leading-relaxed max-w-2xl mx-auto">
                {currentStepData.content}
              </p>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Play className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-light text-white">{currentStepData.title}</h2>
              </div>
              <div className="p-6 rounded-lg bg-black/40 border border-white/10 font-mono text-sm text-white/90 whitespace-pre-line leading-relaxed">
                {currentStepData.content}
              </div>
            </div>
          </motion.div>
        );

      case 'quiz':
        return (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-light text-white">{currentStepData.title}</h2>
              </div>
              <p className="text-white/80 font-light text-xl mb-6">{currentStepData.content}</p>
              <div className="grid grid-cols-1 gap-3">
                {currentStepData.options?.map((option, idx) => {
                  const isSelected = stepAnswers[currentStep] === option;
                  const isCorrect = stepCompleted[currentStep] && option === currentStepData.correctAnswer;
                  return (
                    <button
                      key={idx}
                      onClick={() => !stepCompleted[currentStep] && handleAnswer(option)}
                      disabled={stepCompleted[currentStep]}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all",
                        isCorrect && "bg-green-500/20 border-green-500/40",
                        isSelected && !stepCompleted[currentStep] && "bg-purple-500/20 border-purple-500/40",
                        !isSelected && !stepCompleted[currentStep] && "bg-white/5 border-white/10 hover:border-white/20",
                        stepCompleted[currentStep] && !isCorrect && "opacity-50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                          isCorrect && "bg-green-500 border-green-500",
                          isSelected && !stepCompleted[currentStep] && "border-purple-400",
                          !isSelected && "border-white/20"
                        )}>
                          {isCorrect && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <span className="text-white font-light text-lg">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              {stepCompleted[currentStep] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-300 font-light">Correct! +{currentStepData.xpReward} XP 🎉</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        );

      case 'code-puzzle':
        return (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-light text-white">{currentStepData.title}</h2>
              </div>
              <p className="text-white/80 font-light text-xl mb-6">{currentStepData.content}</p>
              <Input
                value={stepAnswers[currentStep] || ""}
                onChange={(e) => setStepAnswers(prev => ({ ...prev, [currentStep]: e.target.value }))}
                placeholder={currentStepData.hint || "Enter your answer"}
                className="bg-black/40 border-white/20 text-white h-14 text-lg"
                disabled={stepCompleted[currentStep]}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !stepCompleted[currentStep]) {
                    handleAnswer(stepAnswers[currentStep] || "");
                  }
                }}
              />
              {currentStepData.hint && !stepCompleted[currentStep] && (
                <p className="text-sm text-white/50 font-light">💡 {currentStepData.hint}</p>
              )}
              {!stepCompleted[currentStep] && (
                <Button
                  onClick={() => handleAnswer(stepAnswers[currentStep] || "")}
                  className="bg-white text-black hover:bg-white/90 mt-4"
                >
                  Check Answer
                </Button>
              )}
              {stepCompleted[currentStep] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-300 font-light">Perfect! +{currentStepData.xpReward} XP 🎉</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        );

      case 'matching':
        return (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-light text-white">{currentStepData.title}</h2>
              </div>
              <p className="text-white/80 font-light text-xl mb-6">{currentStepData.content}</p>
              <div className="grid grid-cols-2 gap-4">
                {currentStepData.options?.map((option, idx) => {
                  const correctAnswers = Array.isArray(currentStepData.correctAnswer) 
                    ? currentStepData.correctAnswer 
                    : [];
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center">
                        <span className="text-white font-light">{option}</span>
                      </div>
                      <select
                        value={stepAnswers[currentStep]?.split(',')[idx] || ""}
                        onChange={(e) => {
                          const answers = stepAnswers[currentStep]?.split(',') || [];
                          answers[idx] = e.target.value;
                          const newAnswer = answers.join(',');
                          setStepAnswers(prev => ({ ...prev, [currentStep]: newAnswer }));
                          if (newAnswer.split(',').length === currentStepData.options?.length) {
                            handleAnswer(newAnswer);
                          }
                        }}
                        className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white"
                        disabled={stepCompleted[currentStep]}
                      >
                        <option value="">Select match...</option>
                        {correctAnswers.map((answer: string, i: number) => (
                          <option key={i} value={answer}>{answer}</option>
                        ))}
                      </select>
                    </div>
                  );
                })}
              </div>
              {stepCompleted[currentStep] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-300 font-light">All matched! +{currentStepData.xpReward} XP 🎉</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        );

      case 'build':
        return (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-light text-white">{currentStepData.title}</h2>
              </div>
              <p className="text-white/80 font-light text-xl mb-6">{currentStepData.content}</p>
              <div className="p-6 rounded-lg bg-black/40 border border-white/10 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-white/40 font-mono">Instructions</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopyPrompt(currentStepData.content)}
                    className="h-7 px-3 text-xs"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </Button>
                </div>
                <code className="text-white/90 font-mono text-sm whitespace-pre-line block leading-relaxed">
                  {currentStepData.content}
                </code>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <input
                  type="checkbox"
                  id={`build-${currentStep}`}
                  checked={stepCompleted[currentStep] || false}
                  onChange={(e) => {
                    setStepCompleted(prev => ({ ...prev, [currentStep]: e.target.checked }));
                    if (e.target.checked) {
                      setStepXpEarned(prev => ({ ...prev, [currentStep]: true }));
                      setShowCelebration(true);
                      setTimeout(() => setShowCelebration(false), 2000);
                    }
                  }}
                  className="w-5 h-5 rounded border-white/20 bg-black/40 cursor-pointer"
                />
                <label htmlFor={`build-${currentStep}`} className="text-white/80 font-light text-lg cursor-pointer">
                  I&apos;ve completed this step
                </label>
              </div>
            </div>
          </motion.div>
        );

      case 'verify':
        return (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-linear-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-light text-white">{currentStepData.title}</h2>
              </div>
              <p className="text-white/70 font-light text-lg mb-6">
                {currentStepData.content}
              </p>
              <div className="space-y-4">
                <Input
                  value={submissionLink}
                  onChange={(e) => setSubmissionLink(e.target.value)}
                  placeholder="https://github.com/yourusername/repo or file path"
                  className="bg-black/40 border-white/20 text-white h-12 text-base"
                />
                <Button
                  onClick={handleVerifyWork}
                  disabled={!submissionLink.trim()}
                  className={cn(
                    "w-full bg-white text-black hover:bg-white/90 h-12 text-base",
                    !submissionLink.trim() && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Complete Mission & Claim {missionData.xpReward || 10} XP
                </Button>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const totalXpEarned = lesson.steps
    .filter((_, idx) => stepXpEarned[idx + 1])
    .reduce((sum, step) => sum + (step.xpReward || 0), 0);

  return (
    <div className="max-w-4xl mx-auto min-h-screen py-8 px-4 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => router.push(`/dashboard/course/world/${worldId}`)}
          className="mb-6 text-white/60 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to World
        </Button>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                {phaseData.title} → {worldData.title}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                Node {currentMissionIndex + 1}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extralight text-white mb-2 tracking-tight">
              {missionData.title}
            </h1>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-yellow-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-lg font-light">+{totalXpEarned} / {missionData.xpReward || 10} XP</span>
            </div>
            {isMissionCompleted && (
              <div className="text-xs text-green-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Completed
              </div>
            )}
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-3 mb-6">
          <div>
            <div className="flex items-center justify-between mb-2 text-xs text-white/50">
              <span>World Progress</span>
              <span className="font-mono">{currentMissionIndex + 1} / {worldData.missions.length} nodes</span>
            </div>
            <Progress value={progress} className="h-2 bg-white/10" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2 text-xs text-white/50">
              <span>Lesson Progress</span>
              <span className="font-mono">Step {currentStep} / {totalSteps}</span>
            </div>
            <Progress value={stepProgress} className="h-2 bg-white/10" />
          </div>
        </div>
      </div>

      {/* Celebration Animation */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.5 }}
                className="text-8xl mb-4"
              >
                🎉
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl font-light text-white"
              >
                +{currentStepData?.xpReward || 0} XP Earned!
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Congratulations Screen */}
      <AnimatePresence>
        {lessonCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="w-full max-w-2xl text-center space-y-8">
              {/* Confetti Effect */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                  className="text-8xl mb-6"
                >
                  🎉
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 -right-4 text-4xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-2 -left-4 text-4xl"
                >
                  ⭐
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl"
                >
                  🚀
                </motion.div>
              </div>

              {/* Congratulations Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-5xl md:text-6xl font-extralight text-white mb-4 tracking-tight">
                  Congratulations!
                </h2>
                <p className="text-2xl text-white/70 font-light">
                  You completed <span className="text-white font-normal">{missionData.title}</span>
                </p>
              </motion.div>

              {/* XP Earned */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-2xl bg-linear-to-br from-yellow-500/20 to-yellow-500/10 border-2 border-yellow-500/30"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                  <span className="text-4xl font-light text-yellow-300">
                    +{missionData.xpReward || 10} XP
                  </span>
                </div>
                <p className="text-white/60 font-light">
                  Total XP from this lesson: {totalXpEarned + (missionData.xpReward || 10)}
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-light text-white mb-1">{totalSteps}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Steps</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-light text-white mb-1">{Object.keys(stepCompleted).length}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Completed</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-light text-white mb-1">100%</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Progress</div>
                </div>
              </motion.div>

              {/* Next Mission Info */}
              {currentMissionIndex < worldData.missions.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20"
                >
                  <p className="text-white/60 font-light mb-2">Next up:</p>
                  <p className="text-white font-light text-lg">
                    {worldData.missions[currentMissionIndex + 1]?.title}
                  </p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center gap-4 pt-4"
              >
                <Button
                  variant="ghost"
                  onClick={() => router.push(`/dashboard/course/world/${worldId}`)}
                  className="text-white/60 hover:text-white border border-white/10"
                >
                  Back to World
                </Button>
                {currentMissionIndex < worldData.missions.length - 1 && (
                  <Button
                    onClick={() => {
                      const nextMission = worldData.missions[currentMissionIndex + 1];
                      router.push(`/dashboard/course/world/${worldId}/mission/${nextMission.id}`);
                    }}
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Continue to Next Mission
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
                {currentMissionIndex === worldData.missions.length - 1 && (
                  <Button
                    onClick={() => router.push(`/dashboard/course/world/${worldId}`)}
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Complete World
                    <Trophy className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Step Display */}
      {!lessonCompleted && (
        <div className="flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

        {/* Optional Black Box */}
        {lesson.blackBox && (
          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
            <Button
              variant="ghost"
              onClick={() => setShowBlackBox(!showBlackBox)}
              className="w-full justify-between p-0 h-auto hover:bg-transparent"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-white/60" />
                <span className="text-white/70 font-light">Optional: {lesson.blackBox.title}</span>
              </div>
              <ChevronRight className={cn(
                "w-4 h-4 text-white/40 transition-transform",
                showBlackBox && "rotate-90"
              )} />
            </Button>
            
            <AnimatePresence>
              {showBlackBox && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 pt-4 border-t border-white/10 overflow-hidden"
                >
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    {lesson.blackBox.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className={cn(
                "text-white/60 hover:text-white",
                currentStep === 1 && "opacity-30 cursor-not-allowed"
              )}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <div className="flex items-center gap-2">
              {lesson.steps.map((step) => (
                <div
                  key={step.id}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentStep === step.id ? "bg-purple-400 w-8" : 
                    stepCompleted[step.id] ? "bg-green-400" : "bg-white/20"
                  )}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className={cn(
                "bg-white text-black hover:bg-white/90",
                !canProceed() && "opacity-30 cursor-not-allowed"
              )}
            >
              {currentStep === totalSteps ? "Complete" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

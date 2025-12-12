"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

// Render message with markdown-style bold (**text**)
const renderMessage = (content: string) => {
  const parts = content.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

const SUGGESTED_QUESTIONS = [
  "What is Vibe Coding?",
  "How much does the course cost?",
  "What stack do you teach?",
  "Do I need coding experience?",
  "What's the Restaurant Analogy?",
  "Tell me about the course structure"
];

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "I'm your AI coding assistant. I can help you with **coding questions**, explain concepts, debug issues, or answer questions about Purrgram and the course. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    // Auto-send after a brief delay to show the question in the input
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: question
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);

      fetch('/api/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to get response');
          }
          return response.json();
        })
        .then((data) => {
          const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: data.message
          };
          setMessages((prev) => [...prev, assistantMessage]);
        })
        .catch(() => {
          const errorMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: 'Sorry, I encountered an error. Please try again.'
          };
          setMessages((prev) => [...prev, errorMessage]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 100);
  };

  // Show suggested questions only when there's only the initial message
  const showSuggestedQuestions = messages.length === 1 && !isLoading;

  return (
    <>
      {/* Floating Cat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-[100]",
          "w-16 h-16 rounded-full",
          "bg-white/20 backdrop-blur-xl",
          "shadow-lg shadow-black/20",
          "flex items-center justify-center",
          "hover:shadow-xl hover:shadow-black/30",
          "hover:bg-white/30",
          "transition-all duration-300",
          "relative overflow-hidden",
          "border border-white/30",
          isOpen && "hidden"
        )}
        style={{ position: 'fixed' }}
      >
        <MessageCircle className="w-8 h-8 text-white drop-shadow-lg" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm"
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-[100] w-96 h-[600px] flex flex-col rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
            style={{ position: 'fixed' }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-lg border border-white/30">
                  <MessageCircle className="w-5 h-5 text-white drop-shadow-md" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Purrgram AI</h3>
                  <p className="text-xs text-white/50">Your coding cat assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Suggested Questions */}
              {showSuggestedQuestions && (
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-white/50 mb-3">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-3",
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'assistant' && (
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/30">
                      <MessageCircle className="w-5 h-5 text-white drop-shadow-md" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-xl px-4 py-2 text-sm",
                      message.role === 'user'
                        ? "bg-white/10 text-white border border-white/20"
                        : "bg-gradient-to-br from-white/5 to-white/[0.02] text-white/90 border border-white/10"
                    )}
                  >
                    <p className="whitespace-pre-wrap">{renderMessage(message.content)}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                      <div className="w-6 h-6 rounded-full bg-white/30" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/30">
                    <MessageCircle className="w-5 h-5 text-white drop-shadow-md" />
                  </div>
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl px-4 py-2">
                    <Loader2 className="w-4 h-4 text-white/60 animate-spin" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask the cat anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    input.trim() && !isLoading
                      ? "bg-white text-black hover:bg-white/90 shadow-lg border border-black/10"
                      : "bg-white/10 text-white/40 cursor-not-allowed"
                  )}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


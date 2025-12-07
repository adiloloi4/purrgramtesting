import React from 'react';
import { Cat } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'minimal';
}

export const Logo: React.FC<LogoProps> = ({ className, showText = true, variant = 'default' }) => {
  const isMinimal = variant === 'minimal';

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "relative flex items-center justify-center w-8 h-8 rounded-lg transition-colors",
        isMinimal 
            ? "bg-white/10 text-white border border-white/20" 
            : "bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 shadow-lg shadow-purple-500/20"
      )}>
        <Cat className="w-5 h-5 text-white" />
      </div>
      {showText && (
        <span className={cn(
            "text-xl font-bold tracking-tight",
            isMinimal 
                ? "text-white font-light tracking-wide" 
                : "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 font-display"
        )}>
          Purrgram
        </span>
      )}
    </div>
  );
};

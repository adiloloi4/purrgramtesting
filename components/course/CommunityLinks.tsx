import React from 'react';
import { MessageCircle, Trophy, Video, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

type CommunityLinksProps = {
  missionId?: string;
  worldId?: number;
  className?: string;
};

export const CommunityLinks: React.FC<CommunityLinksProps> = ({
  missionId,
  worldId,
  className = '',
}) => {
  const discordChannel = missionId 
    ? `https://discord.gg/purrgram?channel=${missionId}`
    : 'https://discord.gg/purrgram';

  const buildInPublicThread = `https://discord.gg/purrgram/build-in-public`;

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Community</h3>
      
      <motion.a
        href={discordChannel}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
      >
        <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30 group-hover:bg-purple-500/30">
          <MessageCircle className="w-4 h-4 text-purple-400" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-white">Discord Channel</div>
          <div className="text-xs text-white/50">Discuss this mission</div>
        </div>
        <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60" />
      </motion.a>

      <motion.a
        href={buildInPublicThread}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
      >
        <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 group-hover:bg-blue-500/30">
          <Trophy className="w-4 h-4 text-blue-400" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-white">Build-in-Public</div>
          <div className="text-xs text-white/50">Share your progress</div>
        </div>
        <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60" />
      </motion.a>

      <motion.a
        href="https://discord.gg/purrgram/livestream"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all group"
      >
        <div className="p-2 rounded-lg bg-orange-500/20 border border-orange-500/30 group-hover:bg-orange-500/30">
          <Video className="w-4 h-4 text-orange-400" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-white">Weekly Livestream</div>
          <div className="text-xs text-white/50">Get your build critiqued</div>
        </div>
        <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60" />
      </motion.a>
    </div>
  );
};

type BuildInPublicButtonProps = {
  missionTitle: string;
  worldTitle: string;
  className?: string;
};

export const BuildInPublicButton: React.FC<BuildInPublicButtonProps> = ({
  missionTitle,
  worldTitle,
  className = '',
}) => {
  const template = `🚀 Just completed: ${missionTitle} (${worldTitle})

What I built:
- [Describe what you built]

What I learned:
- [Key takeaway 1]
- [Key takeaway 2]

Next up: [Next mission or feature]

#BuildInPublic #VibeCoding #Purrgram`;

  const shareUrl = `https://discord.gg/purrgram/build-in-public?text=${encodeURIComponent(template)}`;

  return (
    <motion.a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white hover:from-purple-500/30 hover:to-blue-500/30 transition-all ${className}`}
    >
      <Trophy className="w-4 h-4" />
      <span className="text-sm font-medium">Share Your Build</span>
      <ExternalLink className="w-3 h-3" />
    </motion.a>
  );
};


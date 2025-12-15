import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type TextSlideProps = {
  title: string;
  body: string;
  image?: string;
  youtubeVideo?: string;
};

export const TextSlide: React.FC<TextSlideProps> = ({ title, body, image, youtubeVideo }) => {
  // Extract YouTube video ID from URL (handles regular videos and Shorts)
  const getYouTubeVideoId = (url: string) => {
    // Handle YouTube Shorts URLs: youtube.com/shorts/VIDEO_ID
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&#]+)/);
    if (shortsMatch && shortsMatch[1]) {
      return shortsMatch[1];
    }
    
    // Handle regular YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = youtubeVideo ? getYouTubeVideoId(youtubeVideo) : null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-light text-white">{title}</h2>
      <p className="text-lg text-white/70 leading-relaxed font-light">
        {body}
      </p>
      
      {image && (
        <div className="mt-6 rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto"
            onError={(e) => {
              // Hide image if it fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}

      {youtubeVideo && videoId && (
        <div className="mt-6 space-y-2">
          <div className="relative w-full rounded-xl overflow-hidden border border-white/10" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a
            href={youtubeVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white/80 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Watch on YouTube
          </a>
        </div>
      )}
    </motion.div>
  );
};

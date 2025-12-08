import React from 'react';
import { motion } from 'framer-motion';

type TextSlideProps = {
  title: string;
  body: string;
};

export const TextSlide: React.FC<TextSlideProps> = ({ title, body }) => {
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
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'motion/react';

export const HeaderDecorations: React.FC = () => {
  const lights = [
    { color: 'bg-rose-400', glow: 'shadow-[0_0_12px_#fb7185]' },
    { color: 'bg-amber-300', glow: 'shadow-[0_0_12px_#fcd34d]' },
    { color: 'bg-pink-400', glow: 'shadow-[0_0_12px_#f472b6]' },
    { color: 'bg-amber-200', glow: 'shadow-[0_0_12px_#fde68a]' },
    { color: 'bg-red-400', glow: 'shadow-[0_0_12px_#f87171]' },
    { color: 'bg-yellow-300', glow: 'shadow-[0_0_12px_#fde047]' },
    { color: 'bg-rose-300', glow: 'shadow-[0_0_12px_#fda4af]' },
    { color: 'bg-amber-400', glow: 'shadow-[0_0_12px_#fbbf24]' },
    { color: 'bg-pink-300', glow: 'shadow-[0_0_12px_#f9a8d4]' },
    { color: 'bg-red-300', glow: 'shadow-[0_0_12px_#fca5a5]' },
    { color: 'bg-amber-300', glow: 'shadow-[0_0_12px_#fcd34d]' },
    { color: 'bg-rose-400', glow: 'shadow-[0_0_12px_#fb7185]' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-1 select-none pointer-events-none" aria-hidden="true">
      {/* Delicate festive string */}
      <div className="relative flex justify-between items-center w-full py-2">
        {/* Soft curving garland cord line */}
        <svg
          className="absolute top-1 left-0 w-full h-8 text-rose-500/20"
          preserveAspectRatio="none"
          viewBox="0 0 1000 40"
        >
          <path
            d="M 0,10 Q 250,32 500,10 Q 750,32 1000,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {lights.map((light, idx) => (
          <motion.div
            key={idx}
            className="relative flex flex-col items-center z-10"
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [0.95, 1.15, 0.95],
            }}
            transition={{
              duration: 2.4,
              delay: idx * 0.18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Cord knot */}
            <div className="w-1.5 h-1.5 bg-rose-900/60 rounded-full mb-0.5" />
            {/* Small glowing fairy bulb */}
            <div className={`w-2.5 h-3.5 sm:w-3 sm:h-4 rounded-full ${light.color} ${light.glow}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

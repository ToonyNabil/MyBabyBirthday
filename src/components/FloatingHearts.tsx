import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Heart, Star, Sparkles } from 'lucide-react';

export const FloatingHearts: React.FC = () => {
  // Delicate floating hearts drifting upward
  const floatingHearts = useMemo(() => {
    return Array.from({ length: 18 }).map((_, index) => {
      const left = Math.floor(Math.random() * 94) + 3; // 3% to 97%
      const duration = 12 + Math.random() * 12; // 12s to 24s gentle float
      const delay = Math.random() * 8;
      const size = 12 + Math.floor(Math.random() * 16); // 12px to 28px
      const colors = [
        'text-pink-400/40',
        'text-rose-400/45',
        'text-pink-300/45',
        'text-rose-300/40',
        'text-pink-500/35',
      ];
      const color = colors[index % colors.length];

      return {
        id: `heart-${index}`,
        left,
        duration,
        delay,
        size,
        color,
      };
    });
  }, []);

  // Gentle, slow falling golden stars drifting downward from top to bottom
  const fallingGoldenStars = useMemo(() => {
    return Array.from({ length: 22 }).map((_, index) => {
      const left = Math.floor(Math.random() * 96) + 2;
      const duration = 14 + Math.random() * 16; // 14s to 30s slow graceful fall
      const delay = Math.random() * 12;
      const size = 10 + Math.floor(Math.random() * 14); // 10px to 24px
      const types = ['star', 'star', 'sparkle', 'shimmer-dot'] as const;
      const type = types[index % types.length];
      
      const goldColors = [
        'text-amber-400/60 drop-shadow-[0_0_8px_rgba(251,191,36,0.55)]',
        'text-yellow-400/55 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]',
        'text-amber-300/65 drop-shadow-[0_0_10px_rgba(252,211,77,0.6)]',
        'text-yellow-300/60 drop-shadow-[0_0_8px_rgba(253,224,71,0.55)]',
        'text-amber-200/70 drop-shadow-[0_0_6px_rgba(254,240,138,0.6)]',
      ];
      const color = goldColors[index % goldColors.length];
      const swayDistance = 15 + Math.random() * 25; // gentle horizontal sway

      return {
        id: `gold-star-${index}`,
        left,
        duration,
        delay,
        size,
        type,
        color,
        swayDistance,
      };
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Soft warm pink gradient blooms matching the screenshot */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-pink-200/40 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-rose-200/35 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-pink-300/30 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-amber-100/40 rounded-full blur-[90px]" />

      {/* 1. Gentle Floating Hearts (rising up slowly) */}
      {floatingHearts.map((h) => (
        <motion.div
          key={h.id}
          className={`absolute ${h.color}`}
          style={{
            left: `${h.left}%`,
            bottom: '-40px',
          }}
          animate={{
            y: ['0vh', '-115vh'],
            x: ['0px', `${(parseInt(h.id.replace('heart-', '')) % 2 === 0 ? 1 : -1) * 18}px`, '0px'],
            opacity: [0, 0.75, 0.85, 0],
            rotate: [0, (parseInt(h.id.replace('heart-', '')) % 2 === 0 ? 1 : -1) * 30],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Heart size={h.size} fill="currentColor" />
        </motion.div>
      ))}

      {/* 2. Soft Falling Golden Stars (drifting slowly downward from top with gentle sway & twinkle) */}
      {fallingGoldenStars.map((s, idx) => (
        <motion.div
          key={s.id}
          className={`absolute ${s.color}`}
          style={{
            left: `${s.left}%`,
            top: '-35px',
          }}
          animate={{
            y: ['0vh', '115vh'],
            x: [
              '0px',
              `${(idx % 2 === 0 ? 1 : -1) * s.swayDistance}px`,
              `${(idx % 2 === 0 ? -1 : 1) * (s.swayDistance * 0.7)}px`,
              '0px',
            ],
            opacity: [0, 0.85, 0.95, 0.8, 0],
            rotate: [0, (idx % 2 === 0 ? 1 : -1) * 180],
            scale: [0.8, 1.15, 0.9, 1.1, 0.75],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {s.type === 'star' && <Star size={s.size} fill="currentColor" />}
          {s.type === 'sparkle' && <Sparkles size={s.size * 0.9} />}
          {s.type === 'shimmer-dot' && (
            <div
              className="rounded-full bg-amber-300 shadow-[0_0_8px_#fcd34d]"
              style={{ width: `${Math.max(4, s.size * 0.35)}px`, height: `${Math.max(4, s.size * 0.35)}px` }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { calculateTimeRemaining } from './utils/countdown';
import { CountdownCard } from './components/CountdownCard';
import { FloatingHearts } from './components/FloatingHearts';
import { TimeRemaining } from './types';

export default function App() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining());

  // Live countdown timer ticking every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="birthday-countdown-page"
      className="fixed inset-0 w-full h-full bg-gradient-to-b from-[#fff6f8] via-[#ffecf1] to-[#ffe3eb] text-[#330c18] font-cairo flex flex-col justify-between items-center px-4 py-3 sm:py-6 overflow-hidden select-none"
    >
      {/* Floating Hearts & Gentle Falling Golden Stars in the background */}
      <FloatingHearts />

      {/* Main Single-Screen Content Container */}
      <main className="w-full max-w-[340px] sm:max-w-sm my-auto flex flex-col items-center justify-center text-center z-10">
        {/* 1. Main Title: "عيد ميلاد بنوتي ❤️" */}
        <div id="main-title-container" className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <h1
            id="main-birthday-title"
            className="font-ruqaa text-3xl sm:text-4xl font-bold text-[#2b0b14] leading-tight"
          >
            عيد ميلاد بنوتي
          </h1>
          {/* Completely static heart */}
          <span
            id="main-heart-icon"
            className="text-2xl sm:text-3xl leading-none select-none"
          >
            ❤️
          </span>
        </div>

        {/* 2. Central White Card matching the exact card in the screenshot */}
        <div
          id="countdown-main-card"
          className="w-full bg-white/95 rounded-[24px] sm:rounded-[28px] p-3 sm:p-4 border border-pink-100 card-shadow backdrop-blur-sm transition-all"
        >
          {/* Subtle top card hint matching the screenshot style */}
          <div className="text-center mb-2 sm:mb-3">
            <span className="font-cairo text-xs sm:text-sm text-pink-600 font-medium">
              العد التنازلي ليوم ١٥ / ١٠ / ٢٠٢٦ 🎂
            </span>
            <div className="w-12 sm:w-14 h-0.5 bg-pink-400 rounded-full mx-auto mt-1" />
          </div>

          {/* Four Countdown Boxes: مربعين مربعين (2x2) على الموبايل */}
          <div
            id="countdown-grid"
            className="w-full grid grid-cols-2 gap-2 sm:gap-2.5"
          >
            {/* First Row: يوم | ساعات */}
            <CountdownCard
              id="box-days"
              label="يوم"
              value={timeRemaining.days}
            />
            <CountdownCard
              id="box-hours"
              label="ساعات"
              value={timeRemaining.hours}
            />

            {/* Second Row: دقيقة | ثانية */}
            <CountdownCard
              id="box-minutes"
              label="دقيقة"
              value={timeRemaining.minutes}
            />
            <CountdownCard
              id="box-seconds"
              label="ثانية"
              value={timeRemaining.seconds}
            />
          </div>
        </div>

        {/* 3. Bottom Text: "وتكبر اجمل بنوتة في الدنيا كلها 😍❤️" */}
        <div id="bottom-love-container" className="mt-2.5 sm:mt-3.5 px-2">
          <p
            id="bottom-love-phrase"
            className="font-ruqaa text-xl sm:text-2xl font-bold text-[#2b0b14] leading-relaxed drop-shadow-sm"
          >
            وتكبر اجمل بنوتة في الدنيا كلها 😍❤️
          </p>
        </div>
      </main>

      {/* Clean centered footer with matched color and size - ALWAYS visible at bottom */}
      <footer className="w-full max-w-sm py-2 text-center z-10 flex flex-col items-center justify-center gap-0.5 select-none shrink-0 pb-safe">
        <div className="w-full flex justify-center text-center">
          <span className="font-cairo text-[11px] sm:text-xs font-normal text-pink-500/70 tracking-widest leading-none">
            15 / 10 / 2026
          </span>
        </div>
        <div className="w-full flex justify-center text-center">
          <span className="font-cairo text-[11px] sm:text-xs font-normal text-pink-500/70 leading-none">
            صُنع بكل الحب من اجل نانوسة 💫
          </span>
        </div>
      </footer>
    </div>
  );
}

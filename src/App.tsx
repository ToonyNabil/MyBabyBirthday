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
      className="relative min-h-screen w-full bg-gradient-to-b from-[#fff6f8] via-[#ffecf1] to-[#ffe3eb] text-[#330c18] flex flex-col justify-between items-center px-4 py-4 sm:py-6 overflow-x-hidden select-none"
    >
      {/* Floating Hearts & Gentle Falling Golden Stars in the background */}
      <FloatingHearts />

      {/* Center Main Content Container */}
      <main className="w-full max-w-lg my-auto py-2 flex flex-col items-center justify-center text-center z-10">
        {/* 1. Main Title: "عيد ميلاد بنوتي ❤️" in the exact calligraphic font and dark tone of the screenshot */}
        <div id="main-title-container" className="flex items-center justify-center gap-2 mb-6">
          <h1
            id="main-birthday-title"
            className="font-['Aref_Ruqaa',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#2b0b14] leading-tight"
          >
            عيد ميلاد بنوتي
          </h1>
          {/* Completely static heart as requested */}
          <span
            id="main-heart-icon"
            className="text-3xl sm:text-4xl md:text-5xl leading-none select-none"
          >
            ❤️
          </span>
        </div>

        {/* 3. Central White Card matching the exact card in the screenshot */}
        <div
          id="countdown-main-card"
          className="w-full max-w-md bg-white/95 rounded-[32px] p-6 sm:p-7 border border-pink-100 card-shadow backdrop-blur-sm transition-all"
        >
          {/* Subtle top card hint matching the screenshot style */}
          <div className="text-center mb-5">
            <span className="font-['Cairo',sans-serif] text-xs sm:text-sm text-pink-600 font-medium">
              العد التنازلي ليوم ١٥ / ١٠ / ٢٠٢٦ 🎂
            </span>
            <div className="w-16 h-0.5 bg-pink-400 rounded-full mx-auto mt-2" />
          </div>

          {/* Four Countdown Boxes: ثانية ودقيقة وساعات ويوم */}
          <div
            id="countdown-grid"
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3"
          >
            {/* Displayed in RTL: يوم -> ساعات -> دقيقة -> ثانية */}
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

        {/* 4. Bottom Text: "وتكبر اجمل بنوتة في الدنيا كلها 😍❤️" */}
        <div id="bottom-love-container" className="mt-6 sm:mt-7 px-2">
          <p
            id="bottom-love-phrase"
            className="font-['Aref_Ruqaa',serif] text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b0b14] leading-relaxed drop-shadow-sm"
          >
            وتكبر اجمل بنوتة في الدنيا كلها 😍❤️
          </p>
        </div>
      </main>

      {/* Clean centered footer with matched color and size */}
      <footer className="w-full max-w-md py-4 text-center z-10 flex flex-col items-center justify-center gap-1 select-none">
        <div className="w-full flex justify-center text-center">
          <span className="font-['Cairo',sans-serif] text-[11px] sm:text-xs font-normal text-pink-500/70 tracking-widest leading-none">
            15 / 10 / 2026
          </span>
        </div>
        <div className="w-full flex justify-center text-center">
          <span className="font-['Cairo',sans-serif] text-[11px] sm:text-xs font-normal text-pink-500/70 leading-none">
            صُنع بكل الحب من اجل نانوسة 💫
          </span>
        </div>
      </footer>
    </div>
  );
}

import { TimeRemaining } from '../types';

// Target Birthday Date: October 15, 2026 00:00:00 (in local time)
export const TARGET_DATE = new Date(2026, 9, 15, 0, 0, 0); // Month is 0-indexed (9 = October)

export function calculateTimeRemaining(target: Date = TARGET_DATE): TimeRemaining {
  const now = new Date().getTime();
  const targetTime = target.getTime();
  const difference = targetTime - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMilliseconds: 0,
      isCompleted: true,
    };
  }

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMilliseconds: difference,
    isCompleted: false,
  };
}

// Convert English digits to Eastern Arabic numerals if needed
export function toArabicNumerals(num: number | string): string {
  const str = num.toString().padStart(2, '0');
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[0-9]/g, (w) => arabicDigits[+w]);
}

export function formatTwoDigits(num: number): string {
  return num.toString().padStart(2, '0');
}

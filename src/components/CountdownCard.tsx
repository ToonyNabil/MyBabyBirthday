import React from 'react';
import { formatTwoDigits } from '../utils/countdown';

interface CountdownCardProps {
  id: string;
  label: string;
  value: number;
}

export const CountdownCard: React.FC<CountdownCardProps> = ({ id, label, value }) => {
  const displayValue = formatTwoDigits(value);

  return (
    <div
      id={id}
      className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-2xl bg-white border border-pink-200/90 shadow-sm transition-all hover:border-pink-300 hover:shadow-md"
    >
      {/* Number matching screenshot keypads style */}
      <span className="font-['Cairo',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl text-[#2b0b14] leading-tight select-none">
        {displayValue}
      </span>

      {/* Label: أيام / ساعات / دقايق / ثواني */}
      <span className="mt-1 font-['Cairo',sans-serif] font-medium text-xs sm:text-sm md:text-base text-pink-700/80 select-none">
        {label}
      </span>
    </div>
  );
};

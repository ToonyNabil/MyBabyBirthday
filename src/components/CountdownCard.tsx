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
      className="flex flex-col items-center justify-center py-1.5 sm:py-2.5 px-2 rounded-xl sm:rounded-2xl bg-white border border-pink-200/90 shadow-sm transition-all hover:border-pink-300 min-w-0"
    >
      {/* Number matching keypad button style */}
      <span className="font-cairo font-bold text-2xl sm:text-3xl text-[#2b0b14] leading-tight select-none">
        {displayValue}
      </span>

      {/* Label: ثانية / دقيقة / ساعات / يوم */}
      <span className="mt-0.5 font-cairo font-medium text-[11px] sm:text-xs text-pink-700/80 select-none">
        {label}
      </span>
    </div>
  );
};

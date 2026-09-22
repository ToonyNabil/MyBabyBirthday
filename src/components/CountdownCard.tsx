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
      className="flex flex-col items-center justify-center py-2 sm:py-3.5 px-3 rounded-xl sm:rounded-2xl bg-white border border-pink-200/90 shadow-sm transition-all hover:border-pink-300 hover:shadow-md"
    >
      {/* Number matching keypad button style */}
      <span className="font-cairo font-bold text-2xl sm:text-3xl md:text-4xl text-[#2b0b14] leading-tight select-none">
        {displayValue}
      </span>

      {/* Label: ثانية / دقيقة / ساعات / يوم */}
      <span className="mt-0.5 sm:mt-1 font-cairo font-medium text-xs sm:text-sm text-pink-700/80 select-none">
        {label}
      </span>
    </div>
  );
};

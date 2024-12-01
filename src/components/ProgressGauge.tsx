import React from 'react';
import { cn } from '../lib/utils';

interface ProgressGaugeProps {
  value: number;
  color: string;
  label: string;
}

export function ProgressGauge({ value, color, label }: ProgressGaugeProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-900">{value}%</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={cn('h-full transition-all duration-500', color)}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
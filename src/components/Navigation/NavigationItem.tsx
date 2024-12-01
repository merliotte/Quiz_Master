import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NavigationItemProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function NavigationItem({ icon: Icon, label, isActive, onClick }: NavigationItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center gap-1 p-2 rounded-lg transition-colors',
        isActive
          ? 'text-blue-600'
          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
      )}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
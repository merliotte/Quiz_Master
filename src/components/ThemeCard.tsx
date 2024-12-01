import React from 'react';
import { cn } from '../lib/utils';
import type { Theme, QuizLevel } from '../types/quiz';
import { ChevronDown } from 'lucide-react';
import { useQuizStore } from '../store/quiz-store';

interface ThemeCardProps {
  theme: Theme;
  onClick: (theme: Theme) => void;
  selected?: boolean;
}

export function ThemeCard({ theme, onClick, selected }: ThemeCardProps) {
  const { settings, setLevel } = useQuizStore();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleThemeClick = () => {
    onClick(theme);
    setIsExpanded(!isExpanded);
  };

  const handleLevelSelect = (level: QuizLevel) => {
    setLevel(level);
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleThemeClick}
        className={cn(
          'w-full p-6 rounded-lg shadow-lg transition-all duration-300',
          theme.color,
          selected ? 'ring-4 ring-white ring-opacity-50 scale-105' : 'hover:scale-102'
        )}
      >
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-bold text-white">{theme.name}</h3>
          <ChevronDown 
            className={cn(
              "w-5 h-5 text-white transition-transform",
              isExpanded && "transform rotate-180"
            )} 
          />
        </div>
        <p className="text-white/90 text-sm mt-2 text-left">{theme.description}</p>
      </button>

      {selected && isExpanded && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden">
          {theme.levels.map((level) => (
            <button
              key={level.id}
              onClick={() => handleLevelSelect(level)}
              className={cn(
                'w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0',
                settings.selectedLevel?.id === level.id && 'bg-blue-50'
              )}
            >
              <h4 className="font-medium text-gray-900">{level.name}</h4>
              <p className="text-sm text-gray-500">{level.description}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
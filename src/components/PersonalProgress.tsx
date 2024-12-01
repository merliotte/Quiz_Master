import React from 'react';
import { ProgressGauge } from './ProgressGauge';
import { useQuizStore } from '../store/quiz-store';
import { Award, TrendingUp } from 'lucide-react';

export function PersonalProgress() {
  const { themes, progress } = useQuizStore();

  const getBestTheme = () => {
    let bestTheme = themes[0];
    let bestProgress = progress[themes[0].id];

    themes.forEach(theme => {
      if (progress[theme.id] > bestProgress) {
        bestProgress = progress[theme.id];
        bestTheme = theme;
      }
    });

    return bestTheme;
  };

  const bestTheme = getBestTheme();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Progression Personnelle</h2>
      </div>

      <div className="space-y-4">
        {themes.map(theme => (
          <ProgressGauge
            key={theme.id}
            value={progress[theme.id]}
            color={theme.color}
            label={theme.name}
          />
        ))}
      </div>

      {Math.max(...Object.values(progress)) > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start gap-3">
          <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900">Point Fort</h3>
            <p className="text-blue-700 text-sm">
              Votre meilleure performance est en {bestTheme.name} avec {progress[bestTheme.id]}% de réussite
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
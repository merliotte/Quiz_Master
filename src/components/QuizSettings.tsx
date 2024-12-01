import React from 'react';
import { Settings, Timer, Trophy } from 'lucide-react';
import { useQuizStore } from '../store/quiz-store';

export function QuizSettings() {
  const { settings, setSettings, selectedTheme, startQuiz } = useQuizStore();

  if (!settings.selectedLevel) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <p className="text-gray-500 text-center">
          Veuillez sélectionner un niveau pour configurer le quiz
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Settings className="w-6 h-6" />
          Paramètres du Quiz
        </h2>
        <p className="text-gray-600">
          {selectedTheme?.name} - {settings.selectedLevel.name}
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-gray-600" />
            <label htmlFor="questionCount" className="font-medium">
              Nombre de questions
            </label>
          </div>
          <select
            id="questionCount"
            value={settings.questionCount}
            onChange={(e) => setSettings({ ...settings, questionCount: Number(e.target.value) })}
            className="rounded-md border border-gray-300 px-3 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-gray-600" />
            <label htmlFor="trackScore" className="font-medium">
              Suivre le score
            </label>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="trackScore"
              checked={settings.trackScore}
              onChange={(e) => setSettings({ ...settings, trackScore: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <button
          onClick={startQuiz}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Commencer le Quiz
        </button>
      </div>
    </div>
  );
}
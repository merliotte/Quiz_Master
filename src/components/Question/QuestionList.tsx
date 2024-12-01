import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { useQuizStore } from '../../store/quiz-store';
import { Question } from '../../types/quiz';

interface QuestionListProps {
  onEdit: (question: Question) => void;
}

export function QuestionList({ onEdit }: QuestionListProps) {
  const { questions, themes, deleteQuestion } = useQuizStore();

  const getThemeName = (themeId: string) => {
    return themes.find(t => t.id === themeId)?.name || 'Unknown Theme';
  };

  const getLevelName = (themeId: string, levelId: string) => {
    const theme = themes.find(t => t.id === themeId);
    return theme?.levels.find(l => l.id === levelId)?.name || 'Unknown Level';
  };

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div key={question.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-sm font-medium text-blue-600">{getThemeName(question.themeId)}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-600">{getLevelName(question.themeId, question.levelId)}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(question)}
                className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Pencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => deleteQuestion(question.id)}
                className="p-1 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-gray-900 mb-2">{question.text}</p>
          <div className="space-y-1">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded ${
                  index === question.correctAnswer
                    ? 'bg-green-50 text-green-700'
                    : 'bg-gray-50 text-gray-600'
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
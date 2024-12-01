import React, { useState } from 'react';
import { PenSquare, Camera, Upload, Plus, FileText, List } from 'lucide-react';
import { useQuizStore } from '../../store/quiz-store';
import { QuestionParser } from '../Question/QuestionParser';
import { QuestionList } from '../Question/QuestionList';
import { Question } from '../../types/quiz';

interface QuestionForm {
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  themeId: string;
  levelId: string;
}

export function CreateQuestionView() {
  const { themes, selectedTheme, addQuestion } = useQuizStore();
  const [showParser, setShowParser] = useState(false);
  const [showList, setShowList] = useState(false);
  const [questionForm, setQuestionForm] = useState<QuestionForm>({
    text: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: '',
    themeId: selectedTheme?.id || '',
    levelId: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (questionForm.themeId && questionForm.levelId && questionForm.text && 
        questionForm.options.every(opt => opt.trim() !== '')) {
      addQuestion(questionForm);
      setQuestionForm({
        text: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        explanation: '',
        themeId: selectedTheme?.id || '',
        levelId: '',
      });
    }
  };

  const handleEdit = (question: Question) => {
    setQuestionForm({
      text: question.text,
      options: question.options,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      themeId: question.themeId,
      levelId: question.levelId,
    });
    setShowList(false);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <PenSquare className="w-6 h-6" />
          Créer une Question
        </h2>
        <button
          onClick={() => setShowList(!showList)}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <List className="w-5 h-5" />
          {showList ? 'Masquer la liste' : 'Voir toutes les questions'}
        </button>
      </div>

      {showList ? (
        <QuestionList onEdit={handleEdit} />
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setShowParser(true)}
              className="flex-1 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center gap-2"
            >
              <FileText className="w-6 h-6 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Coller du texte</span>
            </button>
            <button className="flex-1 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center gap-2">
              <Camera className="w-6 h-6 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Prendre une photo</span>
            </button>
            <button className="flex-1 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center gap-2">
              <Upload className="w-6 h-6 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Importer une image</span>
            </button>
          </div>

          {showParser ? (
            <QuestionParser 
              onQuestionParsed={(parsedQuestion) => {
                setQuestionForm(prev => ({
                  ...prev,
                  ...parsedQuestion
                }));
                setShowParser(false);
              }}
              onCancel={() => setShowParser(false)}
            />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">
                  Thème
                </label>
                <select
                  id="theme"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={questionForm.themeId}
                  onChange={(e) => setQuestionForm({ ...questionForm, themeId: e.target.value })}
                  required
                >
                  <option value="">Sélectionnez un thème</option>
                  {themes.map((theme) => (
                    <option key={theme.id} value={theme.id}>
                      {theme.name}
                    </option>
                  ))}
                </select>
              </div>

              {questionForm.themeId && (
                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                    Niveau
                  </label>
                  <select
                    id="level"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={questionForm.levelId}
                    onChange={(e) => setQuestionForm({ ...questionForm, levelId: e.target.value })}
                    required
                  >
                    <option value="">Sélectionnez un niveau</option>
                    {themes.find(t => t.id === questionForm.themeId)?.levels.map((level) => (
                      <option key={level.id} value={level.id}>
                        {level.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                  Question
                </label>
                <textarea
                  id="question"
                  rows={3}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={questionForm.text}
                  onChange={(e) => setQuestionForm({ ...questionForm, text: e.target.value })}
                  placeholder="Entrez votre question..."
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Réponses possibles</label>
                {questionForm.options.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="correctAnswer"
                      checked={questionForm.correctAnswer === index}
                      onChange={() => setQuestionForm({ ...questionForm, correctAnswer: index })}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...questionForm.options];
                        newOptions[index] = e.target.value;
                        setQuestionForm({ ...questionForm, options: newOptions });
                      }}
                      placeholder={`Réponse ${index + 1}`}
                      className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="explanation" className="block text-sm font-medium text-gray-700 mb-1">
                  Explication
                </label>
                <textarea
                  id="explanation"
                  rows={3}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={questionForm.explanation}
                  onChange={(e) => setQuestionForm({ ...questionForm, explanation: e.target.value })}
                  placeholder="Expliquez la réponse..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Ajouter la question
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
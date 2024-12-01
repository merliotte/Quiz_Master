import React from 'react';
import { cn } from '../../lib/utils';
import { useQuizStore } from '../../store/quiz-store';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export function QuizQuestion() {
  const { questions, quizState, updateQuizState, selectedTheme, settings } = useQuizStore();
  
  const filteredQuestions = questions.filter(
    q => q.themeId === selectedTheme?.id && q.levelId === settings.selectedLevel?.id
  );
  
  const currentQuestion = filteredQuestions[quizState.currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState.isAnswered) return;
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    updateQuizState({
      selectedAnswer: answerIndex,
      isAnswered: true,
      showExplanation: true,
      score: quizState.score + (isCorrect ? 1 : 0),
    });
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < filteredQuestions.length - 1) {
      updateQuizState({
        currentQuestion: quizState.currentQuestion + 1,
        isAnswered: false,
        selectedAnswer: null,
        showExplanation: false,
      });
    }
  };

  if (!currentQuestion) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Aucune question disponible
        </h2>
        <p className="text-gray-600">
          Il n'y a pas encore de questions pour ce thème et ce niveau.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-medium text-gray-500">
            Question {quizState.currentQuestion + 1} / {filteredQuestions.length}
          </span>
          <span className="text-sm font-medium text-gray-500">
            Score: {quizState.score} / {quizState.currentQuestion + 1}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {currentQuestion.text}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={quizState.isAnswered}
              className={cn(
                'w-full p-4 text-left rounded-lg border-2 transition-all',
                quizState.isAnswered
                  ? index === currentQuestion.correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : index === quizState.selectedAnswer
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200'
                  : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
              )}
            >
              {option}
            </button>
          ))}
        </div>

        {quizState.isAnswered && (
          <div className="mt-6 space-y-4">
            <div className={cn(
              'p-4 rounded-lg flex items-center gap-3',
              quizState.selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-100' : 'bg-red-100'
            )}>
              {quizState.selectedAnswer === currentQuestion.correctAnswer ? (
                <>
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="font-medium text-green-800">Bonne réponse !</p>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="font-medium text-red-800">Mauvaise réponse</p>
                </>
              )}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Explication :</h3>
              <p className="text-blue-800">{currentQuestion.explanation}</p>
            </div>
          </div>
        )}

        {quizState.isAnswered && quizState.currentQuestion < filteredQuestions.length - 1 && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Suivant
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
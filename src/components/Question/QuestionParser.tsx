import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

interface ParsedQuestion {
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuestionParserProps {
  onQuestionParsed: (question: ParsedQuestion) => void;
  onCancel: () => void;
}

export function QuestionParser({ onQuestionParsed, onCancel }: QuestionParserProps) {
  const [rawText, setRawText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const generateExplanation = async (question: string, options: string[], correctAnswer: number) => {
    // Simulate AI-generated explanation (replace with actual OpenAI call)
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `L'option ${['A', 'B', 'C', 'D'][correctAnswer]} est correcte car elle représente la réponse la plus précise et complète à la question posée. Cette réponse prend en compte les principes fondamentaux du domaine et s'appuie sur les connaissances techniques requises.`;
  };

  const parseQuestion = async () => {
    setIsAnalyzing(true);
    try {
      const lines = rawText.split('\n').filter(line => line.trim() !== '');
      const questionText = lines[0].replace(/^\d+\.?\s*/, '').trim();
      const options: string[] = [];
      const optionRegex = /^[A-D]\/\s*(.+)$/;
      
      lines.forEach(line => {
        const match = line.match(optionRegex);
        if (match) {
          options.push(match[1].trim());
        }
      });

      // For demonstration, we'll use the first option as correct
      const correctAnswer = 0;
      const explanation = await generateExplanation(questionText, options, correctAnswer);

      onQuestionParsed({
        text: questionText,
        options,
        correctAnswer,
        explanation,
      });
    } catch (error) {
      console.error('Error parsing question:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Coller votre texte</h3>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <textarea
        value={rawText}
        onChange={(e) => setRawText(e.target.value)}
        className="w-full h-64 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="Collez votre texte ici..."
      />

      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Annuler
        </button>
        <button
          onClick={parseQuestion}
          disabled={isAnalyzing}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyse en cours...
            </>
          ) : (
            'Analyser'
          )}
        </button>
      </div>
    </div>
  );
}
export type QuizLevel = {
  id: string;
  name: string;
  description: string;
};

export type Theme = {
  id: string;
  name: string;
  color: string;
  description: string;
  levels: QuizLevel[];
};

export type Question = {
  id: string;
  themeId: string;
  levelId: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type QuizSettings = {
  questionCount: number;
  trackScore: boolean;
  selectedLevel: QuizLevel | null;
};

export type QuizState = {
  currentQuestion: number;
  score: number;
  answers: number[];
  timePerQuestion: number[];
  isAnswered: boolean;
  selectedAnswer: number | null;
  showExplanation: boolean;
};

export type View = 'home' | 'settings' | 'notes' | 'quiz' | 'create';
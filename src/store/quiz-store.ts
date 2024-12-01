import { create } from 'zustand';
import type { Theme, Question, QuizSettings, QuizState, View, QuizLevel } from '../types/quiz';
import { defaultQuestions } from '../data/default-questions';

const defaultThemes: Theme[] = [
  {
    id: '1',
    name: 'Ultrasons',
    color: 'bg-blue-600',
    description: 'Questions sur les principes fondamentaux des ultrasons',
    levels: [
      {
        id: '1-1',
        name: 'UT Niveau 1',
        description: 'Concepts de base des ultrasons'
      },
      {
        id: '1-2',
        name: 'UT Niveau 2 entrainement',
        description: 'Entraînement aux concepts avancés des ultrasons'
      },
      {
        id: '1-3',
        name: 'Questionnaire Spécifique',
        description: 'Questions spécialisées sur les ultrasons'
      }
    ]
  },
  {
    id: '2',
    name: 'Radiographie',
    color: 'bg-purple-600',
    description: 'Questions sur les techniques de radiographie',
    levels: [
      {
        id: '2-1',
        name: 'RT Niveau 1',
        description: 'Concepts de base de la radiographie'
      },
      {
        id: '2-2',
        name: 'RT Niveau 2',
        description: 'Concepts avancés de la radiographie'
      }
    ]
  }
];

const defaultSettings: QuizSettings = {
  questionCount: 10,
  trackScore: true,
  selectedLevel: null
};

const defaultQuizState: QuizState = {
  currentQuestion: 0,
  score: 0,
  answers: [],
  timePerQuestion: [],
  isAnswered: false,
  selectedAnswer: null,
  showExplanation: false
};

interface QuizStore {
  themes: Theme[];
  questions: Question[];
  settings: QuizSettings;
  quizState: QuizState;
  selectedTheme: Theme | null;
  progress: Record<string, number>;
  currentView: View;
  notes: string[];
  setTheme: (theme: Theme) => void;
  setLevel: (level: QuizLevel) => void;
  setSettings: (settings: QuizSettings) => void;
  updateQuizState: (state: Partial<QuizState>) => void;
  updateProgress: (themeId: string, score: number) => void;
  resetQuiz: () => void;
  setView: (view: View) => void;
  addNote: (note: string) => void;
  deleteNote: (index: number) => void;
  startQuiz: () => void;
  addQuestion: (question: Omit<Question, 'id'>) => void;
  deleteQuestion: (id: string) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  themes: defaultThemes,
  questions: defaultQuestions,
  settings: defaultSettings,
  quizState: defaultQuizState,
  selectedTheme: null,
  progress: {},
  currentView: 'home',
  notes: [],

  setTheme: (theme) => set({ selectedTheme: theme }),
  
  setLevel: (level) => set((state) => ({
    settings: { ...state.settings, selectedLevel: level }
  })),
  
  setSettings: (settings) => set({ settings }),
  
  updateQuizState: (state) => set((prev) => ({
    quizState: { ...prev.quizState, ...state }
  })),
  
  updateProgress: (themeId, score) => set((state) => ({
    progress: { ...state.progress, [themeId]: score }
  })),
  
  resetQuiz: () => set({ quizState: defaultQuizState }),
  
  setView: (view) => set({ currentView: view }),
  
  addNote: (note) => set((state) => ({
    notes: [...state.notes, note]
  })),
  
  deleteNote: (index) => set((state) => ({
    notes: state.notes.filter((_, i) => i !== index)
  })),
  
  startQuiz: () => set((state) => ({
    currentView: 'quiz',
    quizState: defaultQuizState
  })),
  
  addQuestion: (question) => set((state) => ({
    questions: [...state.questions, { ...question, id: String(state.questions.length + 1) }]
  })),
  
  deleteQuestion: (id) => set((state) => ({
    questions: state.questions.filter(q => q.id !== id)
  }))
}));
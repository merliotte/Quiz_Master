import React from 'react';
import { ThemeCard } from './components/ThemeCard';
import { QuizSettings } from './components/QuizSettings';
import { PersonalProgress } from './components/PersonalProgress';
import { NavigationBar } from './components/Navigation/NavigationBar';
import { SettingsView } from './components/Views/SettingsView';
import { NotesView } from './components/Views/NotesView';
import { CreateQuestionView } from './components/Views/CreateQuestionView';
import { QuizQuestion } from './components/Quiz/QuizQuestion';
import { useQuizStore } from './store/quiz-store';
import { Brain } from 'lucide-react';

function App() {
  const { themes, selectedTheme, setTheme, currentView } = useQuizStore();

  const renderView = () => {
    switch (currentView) {
      case 'settings':
        return <SettingsView />;
      case 'notes':
        return <NotesView />;
      case 'quiz':
        return <QuizQuestion />;
      case 'create':
        return <CreateQuestionView />;
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Choisissez votre thème
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {themes.map((theme) => (
                    <ThemeCard
                      key={theme.id}
                      theme={theme}
                      onClick={setTheme}
                      selected={selectedTheme?.id === theme.id}
                    />
                  ))}
                </div>
              </section>

              {selectedTheme && (
                <section>
                  <QuizSettings />
                </section>
              )}
            </div>

            <div className="lg:col-span-1">
              <PersonalProgress />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">QuizMaster</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>

      <NavigationBar />
    </div>
  );
}

export default App;
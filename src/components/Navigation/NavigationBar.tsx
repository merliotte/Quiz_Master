import React from 'react';
import { NavigationItem } from './NavigationItem';
import { Home, Settings, StickyNote, PenSquare } from 'lucide-react';
import { useQuizStore } from '../../store/quiz-store';

export function NavigationBar() {
  const { currentView, setView } = useQuizStore();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        <NavigationItem
          icon={Home}
          label="Accueil"
          isActive={currentView === 'home'}
          onClick={() => setView('home')}
        />
        <NavigationItem
          icon={PenSquare}
          label="Créer"
          isActive={currentView === 'create'}
          onClick={() => setView('create')}
        />
        <NavigationItem
          icon={Settings}
          label="Paramètres"
          isActive={currentView === 'settings'}
          onClick={() => setView('settings')}
        />
        <NavigationItem
          icon={StickyNote}
          label="Notes"
          isActive={currentView === 'notes'}
          onClick={() => setView('notes')}
        />
      </div>
    </nav>
  );
}
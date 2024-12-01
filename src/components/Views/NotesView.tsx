import React, { useState } from 'react';
import { StickyNote, Plus, X } from 'lucide-react';
import { useQuizStore } from '../../store/quiz-store';

export function NotesView() {
  const { notes, addNote, deleteNote } = useQuizStore();
  const [newNote, setNewNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      addNote(newNote);
      setNewNote('');
    }
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <StickyNote className="w-6 h-6" />
        Notes
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Ajouter une note..."
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex items-start justify-between gap-4"
          >
            <p className="flex-1">{note}</p>
            <button
              onClick={() => deleteNote(index)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
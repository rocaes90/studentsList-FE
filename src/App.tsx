import React, { useState } from 'react';

import Students from './screens/students'

import './App.css';

import { StoreProvider } from 'easy-peasy'
import { INote } from 'types';

function App() {
  
  const activeNote: INote = { id: 0, text: ''}
  const localStorageNotes = localStorage.getItem('notes')

  const notesInLocalStorage = localStorageNotes 
  ? JSON.parse(localStorageNotes) 
  : { activeNote: activeNote, notes: [] }
  
  const [context, setContext] = useState(notesInLocalStorage)

  return (
    <div className="App">
      <Students /> 
    </div>
  );
}

export default App;

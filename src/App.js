
import './App.css';
import React from 'react';
import TimerDisplay from './TimerDisplay';
import { TimerProvider } from './TimerContext';

function App() {
  // Simulando o valor inicial vindo do backend
  const initialSecondsFromBackend = 60; // Por exemplo, 60 segundos

  return (
    <TimerProvider initialSeconds={initialSecondsFromBackend}>
      <TimerDisplay />
    </TimerProvider>
    
  );
}

export default App;

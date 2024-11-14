import React from 'react';
import { useTimer } from './TimerContext';

const TimerDisplay = () => {
  const { seconds } = useTimer();

  return (
    <div>
      <h1>Tempo Restante: {seconds} segundos</h1>
    </div>
  );
};

export default TimerDisplay;

import React, { createContext, useContext, useState, useEffect } from 'react';

// Cria o contexto
const TimerContext = createContext();

// Provedor do contexto que recebe o valor inicial do backend
export const TimerProvider = ({ initialSeconds, children }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerContext.Provider value={{ seconds, setSeconds }}>
      {children}
    </TimerContext.Provider>
  );
};

// Hook para usar o contexto em outros componentes
export const useTimer = () => useContext(TimerContext);

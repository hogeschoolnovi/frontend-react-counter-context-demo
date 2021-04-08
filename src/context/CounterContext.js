import React, { createContext } from 'react';

export const CounterContext = createContext({});

function CounterContextProvider({ children }) {
  const data = {
    count: 0,
  }

  return (
    <CounterContext.Provider value={data}>
      { children }
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
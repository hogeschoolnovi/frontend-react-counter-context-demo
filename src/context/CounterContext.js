import React, { createContext, useState } from 'react';

export const CounterContext = createContext({});

function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  const data = {
    count: count,
    decrementCountFunction: decrementCount,
    incrementCountFunction: incrementCount,
  }

  return (
    <CounterContext.Provider value={data}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
import React from 'react';
import Result from './components/Result';
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/IncrementButton';
import { CounterContext } from './context/CounterContext';
import './App.css';

function App() {
  const data = {
    count: 0,
  }

  return (
    <CounterContext.Provider value={data}>
      <Result/>
      <DecrementButton/>
      <IncrementButton/>
    </CounterContext.Provider>
  );
}

export default App;

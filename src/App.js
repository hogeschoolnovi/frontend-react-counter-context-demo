import React from 'react';
import Result from './components/Result';
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/IncrementButton';
import { CounterContext } from './context/CounterContext';
import './App.css';

function App() {
  return (
    <CounterContext.Provider>
      <Result/>
      <DecrementButton/>
      <IncrementButton/>
    </CounterContext.Provider>
  );
}

export default App;

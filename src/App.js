import React from 'react';
import Result from './components/Result';
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/IncrementButton';
import './App.css';

function App() {
  return (
    <>
      <Result/>
      <DecrementButton/>
      <IncrementButton/>
    </>
  );
}

export default App;

import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function IncrementButton() {
  const { incrementCountFunction } = useContext(CounterContext);

  return (
    <button type="button" onClick={incrementCountFunction}>
      Increment
    </button>
  );
}

export default IncrementButton;
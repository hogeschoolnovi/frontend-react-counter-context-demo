import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function DecrementButton() {
  const { decrementCountFunction } = useContext(CounterContext);

  return (
    <button type="button" onClick={decrementCountFunction}>
      Decrement
    </button>
  );
}

export default DecrementButton;
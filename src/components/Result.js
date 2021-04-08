import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function Result() {
  const { count } = useContext(CounterContext);

  return (
    <h1>{count}</h1>
  );
}

export default Result;
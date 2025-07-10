import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('reps');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('reps', count);
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>🏋️‍♂️ Rep Counter</h1>
      <div className="counter">{count}</div>
      <div className="buttons">
        <button onClick={decrement}>−</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default App;

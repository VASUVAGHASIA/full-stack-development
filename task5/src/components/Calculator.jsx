import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    if (key === 'Enter') {
      handleClick('=');
    } else if (key === 'Backspace') {
      handleClick('DEL');
    } else if (key.toUpperCase() === 'C') {
      handleClick('AC');
    } else if (/[\d+\-*/.=]/.test(key)) {
      handleClick(key);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  return (
    <div className="calculator" tabIndex={0}>
      <div className="display">
        <div className="result">{result ? `(${result})` : ''}</div>
        <div className="input">{input || '0'}</div>
      </div>
      <div className="buttons">
        {['AC', 'DEL', '/', '*', '-', '+'].map(op => (
          <button key={op} className="top" onClick={() => handleClick(op)}>{op}</button>
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '='].map(val => (
          <button key={val} onClick={() => handleClick(val.toString())}>{val}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from 'react';
import './FactorialCalculator.css';

const FactorialCalculator: React.FC = () => {
  const [number, setNumber] = useState<number | string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculateFactorial = (num: number): number => {
    if (num === 0 || num === 1) return 1;
    return num * calculateFactorial(num - 1);
  };

  const handleCalculate = () => {
    setError('');
    const num = parseInt(number.toString());
    if (isNaN(num) || num < 0) {
      setError('Please enter a non-negative integer');
      setResult(null);
    } else {
      setResult(calculateFactorial(num));
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="title">Factorial Calculator</h1>
      <input
        type="number"
        className="input"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button className="calculate-button" onClick={handleCalculate}>
        Calculate
      </button>
      {error && <p className="error">{error}</p>}
      {result !== null && <p className="result">Factorial: {result}</p>}
    </div>
  );
};

export default FactorialCalculator;

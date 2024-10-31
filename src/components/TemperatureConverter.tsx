import React, { useState } from 'react';
import './TemperatureConverter.css';

const TemperatureConverter: React.FC = () => {
  const [celsius, setCelsius] = useState<number | string>('');
  const [fahrenheit, setFahrenheit] = useState<number | string>('');

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setCelsius(e.target.value);
    setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setFahrenheit(e.target.value);
    setCelsius(((value - 32) * 5 / 9).toFixed(2));
  };

  return (
    <div className="converter-container">
      <h2>Temperature Converter</h2>
      <div className="converter-inputs">
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Celsius"
        />
        <span>=</span>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Fahrenheit"
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;

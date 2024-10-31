import React, { useState } from 'react';
import FactorialCalculator from './components/FactorialCalculator';
import BasicCalculator from './components/BasicCalculator';
import TemperatureConverter from './components/TemperatureConverter';
import './Navigation.css';
 
const Navigation: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('Calculator');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Calculator':
        return <BasicCalculator />;
      case 'Temperature Converter':
        return <TemperatureConverter />;
      case 'Factorial Calculator':
        return <FactorialCalculator />;
      default:
        return <BasicCalculator />;
    }
  };

  return (
    <div className="navigation-container">
      <nav className="nav-bar">
        <button onClick={() => setActiveComponent('Calculator')}>Calculator</button>
        <button onClick={() => setActiveComponent('Temperature Converter')}>Temperature Converter</button>
        <button onClick={() => setActiveComponent('Factorial Calculator')}>Factorial Calculator</button>
      </nav>
      <div className="component-display">{renderComponent()}</div>
    </div>
  );
};

export default Navigation;

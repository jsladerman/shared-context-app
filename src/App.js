import React from 'react';
import { StepsProvider } from './StepsContext';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Step5 from './components/steps/Step5';
import Step6 from './components/steps/Step6';
import Step7 from './components/steps/Step7';
import ProgressHeader from './components/ProgressHeader';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <StepsProvider>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Step7 />
    </StepsProvider>
  );
}

export default App;

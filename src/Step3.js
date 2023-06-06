import React, { useContext } from 'react';
import StepsContext from './StepsContext';
import ProgressHeader from './ProgressHeader';
import LeftColumn from './LeftColumn';
import BottomButtons from './components/BottomButtons';

function Step3() {
  const { step, setStep, name } = useContext(StepsContext);

  return (
    <div>
    {step === 3 && (
      <div class="main">
        <ProgressHeader />
        <div class="d-flex flex-nowrap">
        <LeftColumn />
          <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
          <h1>This is Step 3</h1>
          <p>Hello, {name}!</p>
          <BottomButtons />
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default Step3;

import React, { useContext } from 'react';
import StepsContext from './StepsContext';
import ProgressHeader from './ProgressHeader';
import LeftColumn from './LeftColumn';

function Step2() {
  const { step, setStep, userRegion } = useContext(StepsContext);

  return (
    <div>
      {step === 2 && (
        <div class="main">
          <ProgressHeader />
          <div class="d-flex flex-nowrap">
          <LeftColumn />
            <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
              <h1>This is Step 2</h1>
              <p>welcome to the <strong>{userRegion}</strong> region</p>
              <button class="btn btn-secondary" onClick={() => setStep(step - 1)}>Previous Step</button>
              <button class="btn btn-success" onClick={() => setStep(step + 1)}>Next Step</button>
            </div>
          </div>
        </div>
    )}
  </div>
  );
}

export default Step2;
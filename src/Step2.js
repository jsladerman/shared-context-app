import React, { useContext } from 'react';
import StepsContext from './StepsContext';
import ProgressHeader from './ProgressHeader';
import LeftColumn from './LeftColumn';
import BottomButtons from './components/BottomButtons';


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
              <h1>This is Step {step}</h1>
              (verify) - enter your phone number and we will verify with an SMS
              <p>welcome to the <strong>{userRegion}</strong> region</p>
             <BottomButtons />
            </div>
          </div>
        </div>
    )}
  </div>
  );
}

export default Step2;
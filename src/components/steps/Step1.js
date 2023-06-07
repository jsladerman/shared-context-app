import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';


function Step1() {
  const { step, setStep, name, setName } = useContext(StepsContext);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {step === 1 && (
        <div class="main">
          <ProgressHeader />
          <div class="d-flex flex-nowrap">
            <LeftColumn />
            <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
              <h1>This is Step { step }</h1>
              (about) welcome, this is what this is and you are a great winner
              <p>
                <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
              </p>
              <div>
              <BottomButtons />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Step1;
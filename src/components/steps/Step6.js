import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';

function Step6() {
  const { step, setStep, name } = useContext(StepsContext);

  return (
    <div>
    {step === 6 && (
      <div class="main">
        <ProgressHeader />
        <div class="d-flex flex-nowrap">
        <LeftColumn />
          <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
          <h1>This is Step {step}</h1>
          show "wallet" - this thing is now in your wallet<br />
	        -- there is a "MINT" option<br />
	        -- user connects their actual wallet<br />
	        -- estimate for mint provided - this will be 10 dollars!!<br />
	        -- if the user has enough cash, a mint confirmation is displayed<br />
          <p>Hello, {name}!</p>
          <BottomButtons />
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default Step6;

import React, { useContext } from 'react';
import StepsContext from '../../StepsContext';
import {Utils} from '../../functions/componentFunctions';
import ProgressHeader from '../ProgressHeader';
import LeftColumn from '../LeftColumn';
import BottomButtons from '../BottomButtons';


function Step1() {
  const { step, setStep, userRegion, APP_DATA } = useContext(StepsContext);
  
  console.log("(STEP1): currently APP_DATA = ", APP_DATA);

  return (
    <div>
      {step === 1 && (
        <div class="main">
          
          <ProgressHeader />
          
          <div class="d-flex flex-nowrap">
            <LeftColumn />
            <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
              <h1>This is Step { step }</h1>
              <h1>data = {APP_DATA.campaign.title} </h1>
              <h1>data = {APP_DATA.campaign.main_image} </h1>
              (about_data) welcome, this is what this is and you have an opportunity to capture a limited edition token
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
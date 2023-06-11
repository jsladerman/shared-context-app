import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { Utils } from './functions/componentFunctions';
import { StepsProvider } from './StepsContext';

import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Step5 from './components/steps/Step5';
import Step6 from './components/steps/Step6';
import Step7 from './components/steps/Step7';
import MainAppView from './components/MainAppView';
import ProgressHeader from './components/ProgressHeader';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [APP_DATA, set_APP_DATA] = useState(null);
  const [data, setData] = useState(null);
  

  useEffect(() => {
    axios.get('/APP_DATA/app_info.json')
        .then(response => {
          console.log("DATA_RECD", response.data);

        })
        .catch(err => console.error("DATA_ERROR: " +err));
  }, []);


  return (
    <StepsProvider>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Step7 />
      <MainAppView />
    </StepsProvider>
  );
}

export default App;

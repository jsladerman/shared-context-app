import React, { useEffect } from 'react';
import axios from 'axios';
import { Utils } from './functions/componentFunctions';


const StepsContext = React.createContext();

export default StepsContext;

export function StepsProvider({ children }) {
    const [step, setStep] = React.useState(1);
    const [name, setName] = React.useState('');
    const [userRegion, setUserRegion] = React.useState('Northeast');
    const [APP_DATA, set_APP_DATA] = React.useState({"campaign":"default title"});
    
    return (
      <>
        {/* <StepsContext.Provider value={{ step, setStep, name, setName, userRegion, setUserRegion }}> */}
        <StepsContext.Provider value={{ step, setStep, name, setName, userRegion, setUserRegion, APP_DATA, set_APP_DATA }}>
          {children}
        </StepsContext.Provider>
      </>
    );
  }
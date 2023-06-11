import React from 'react';
import { Utils } from './functions/componentFunctions';

const StepsContext = React.createContext();

export default StepsContext;


export function StepsProvider({ children }) {
    const [step, setStep] = React.useState(1);
    const [name, setName] = React.useState('');
    const [userRegion, setUserRegion] = React.useState('Northeast');

    return (
      <>
        <StepsContext.Provider value={{ step, setStep, name, setName, userRegion, setUserRegion }}>
          {children}
        </StepsContext.Provider>
      </>
    );
  }
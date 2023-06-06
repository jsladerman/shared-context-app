import React, { useContext } from 'react';
import StepsContext from './StepsContext';

function ProgressHeader() {
  const { step, setStep, name, setName } = useContext(StepsContext);

  return (
    <div class="d-flex flex-nowrap flex-fill">THIS IS PROGRESS HEADER {step}</div>
  );
}

export default ProgressHeader;
import React, { useContext } from 'react';
import StepsContext from './StepsContext';

function ProgressHeader() {
  const { step, setStep, name, setName } = useContext(StepsContext);

  return (
    <div class="d-flex"
    style={{
      height:60,
      backgroundImage: "url(" + "./Assets/headerBG.jpg" + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      


      {/* THIS IS PROGRESS HEADER {step} */}
        <div class="p-2 highlight flex-grow-1 badge bg-dark" style={{height:30,margin:10}}>Step 1</div>
        <div class="p-2 bd-highlight badge bg-secondary"  style={{height:30,margin:10}}>Step 2</div>
        <div class="p-2 bd-highlight badge bg-secondary"  style={{height:30,margin:10}}>Step 3</div>
        <div class="p-2 bd-highlight badge bg-secondary"  style={{height:30,margin:10}}>Step 4</div>
        <div class="p-2 bd-highlight badge bg-secondary"  style={{height:30,margin:10}}>Step 5</div>
        <div class="p-2 bd-highlight badge bg-secondary"  style={{height:30,margin:10}}>Step 6</div>
        <div class="p-2 bd-highlight badge bg-secondary"  style={{height:30,margin:10}}>Step 7</div>
      </div>
  );
}

export default ProgressHeader;
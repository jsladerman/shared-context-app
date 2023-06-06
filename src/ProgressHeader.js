import React, { useContext } from 'react';
import StepsContext from './StepsContext';

function ProgressHeader() {
  const { step, setStep, name, setName } = useContext(StepsContext);
  const currentStepClass = "p-2 highlight flex-grow-1 badge bg-dark";
  const otherStepClass = "p-2 bd-highlight badge bg-secondary"
  const totalSteps = [1,2,3,4,5,6,7];

  return (
    <div class="d-flex"
    style={{
      height:60,
      backgroundImage: "url(" + "./Assets/headerBG.jpg" + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      

      {totalSteps.map((value, index) => {
        index +=1;
        let itemClass = "p-2 bd-highlight badge bg-secondary";
        if (index == step) {itemClass = "p-2 highlight flex-grow-1 badge bg-dark"}
        return <div class={itemClass} style={{height:30,margin:10}}>Step {index}</div>
      })}

      </div>
  );
}

export default ProgressHeader;
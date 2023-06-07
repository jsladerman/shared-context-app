import React, { useContext } from 'react';
import StepsContext from '../StepsContext';
import {Utils} from '../functions/componentFunctions';



function LeftColumn() {
    const { step, setStep, name, setName } = useContext(StepsContext);
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{
            width:300,
            height:400,
            backgroundImage: "url(" + "./Assets/headerBG.jpg" + ")",
            }}> this is imported column
        </div>
    );
  }
  
  export default LeftColumn;
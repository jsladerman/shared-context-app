import React, { useContext } from 'react';
import StepsContext from '../StepsContext';
import {Utils} from '../componentFunctions';
// import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
{/* <i class="bi bi-arrow-left-circle-fill"></i> */}

// import ProgressHeader from '../ProgressHeader';
// import LeftColumn from '../LeftColumn';


function BottomButtons() {
    const { step, setStep, userRegion } = useContext(StepsContext);

return(
    <div>
    {step !== 1 && (
        <button class="m-2 btn btn-secondary btn-sm" onClick={() => setStep(step - 1)}>
            <ArrowLeftCircleFill class="m-2" />
            Previous Step
        </button>
    )}
    
    {step !== 7 && (
        <button class="m-2 btn btn-success btn-sm" onClick={() => setStep(step + 1)}>
            Next Step
            <ArrowRightCircleFill class="m-2" />
        </button>
    )}
    </div>
)

};

export default BottomButtons;
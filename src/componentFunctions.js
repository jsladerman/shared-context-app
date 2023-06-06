
export const Utils = {
  
  handleStepButtonClick: (stepContext, newStep) => {
    //alert('handling the step click call in the utils obj. Step = ' +newStep);
    stepContext(newStep);
    }
}
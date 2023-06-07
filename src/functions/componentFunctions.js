
export const Utils = {
  
  handleStepButtonClick: (stepContext, newStep) => {
    //alert('handling the step click call in the utils obj. Step = ' +newStep);
    stepContext(newStep);
    },

  fetchJSONData: (JSONURL) => {
      fetch(JSONURL)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          return data;
        })
        .catch(error => console.error(error));
    }
}
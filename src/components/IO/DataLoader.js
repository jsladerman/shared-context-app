import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import StepsContext from '../../StepsContext';

function DataLoader() {
    const { step, setStep, userRegion, APP_DATA, set_APP_DATA} = useContext(StepsContext);

    useEffect(() => {
        //load the app data on component load
        axios.get('/APP_DATA/app_info.json')
          .then(
            response => set_APP_DATA(response.data),
            //console.log("DATA LOOOOOOAAAAAAADEDDDDD!! :: ", APP_DATA)
          )
          .catch(error => console.error('Error fetching data', error));
      }, []);

return(
    <></>
);
};

export default DataLoader ;
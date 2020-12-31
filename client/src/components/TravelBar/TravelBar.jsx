import React, {useEffect, useContext} from 'react';
import {Context} from '../../state-management/Store';
import TripInfoObject from './TripInfoObject.js';
/*
should have an input for:
Location: city, state, adress, zip
Start Date: day, month, year
End Date: day, month, year

that information should be able to be saved, and used by other Components

that information should update the hotels and events presented to the user


*/



const TravelBar = () => {

  const [state, dispatch] = useContext(Context);

  var {TripInfo} = new TripInfoObject();
  console.log(TripInfo)

  return (
    <p></p>
  )
}


export default TravelBar;
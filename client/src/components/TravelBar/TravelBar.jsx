import React, {useEffect, useContext, useState} from 'react';
import {Context} from '../../state-management/Store';
import TripInfoObject from './TripInfoObject.js';
import './TravelBar.css';
import SaveTrip from './SaveTrip'
import {DatePicker, Space} from 'antd'
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
  var [tripInfo, setTripInfo] = useState(TripInfo);

  const handleTripInfoChange = (date, dateString, name ) => {
  tripInfo[name] = dateString;
  setTripInfo(TripInfo)
  }

  const updateGlobalState = () => {
    dispatch({type: 'SET_TRIP_INFO', payload: tripInfo});
  };



 useEffect(() => {

  updateGlobalState()
  console.log('state', state)

 },[tripInfo]);

  //have a local state that updates on start and end date changes
  //have a global state for the Trip object being created
   return (
    <div >
      <DatePicker name="startDate" placeholder="Start" onChange={(date, dateSting) => handleTripInfoChange(date, dateSting, 'startDate')}/>
      <DatePicker placeholder="End"/>
      <SaveTrip/>
    </div>
  )
}


export default TravelBar;
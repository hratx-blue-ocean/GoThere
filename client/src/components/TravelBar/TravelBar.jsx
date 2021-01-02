import React, {useEffect, useContext, useState} from 'react';
import {Context} from '../../state-management/Store';
import TripInfoObject from './TripInfoObject.js';
import './TravelBar.css';
import SaveTrip from './SaveTrip';
import {DatePicker} from 'antd';

//should select buisness

const TravelBar = () => {

  var [state, dispatch] = useContext(Context);

  var [tripInfo, setTripInfo] = useState({...TripInfoObject})

  const handleTripInfoChange = (date, dateString, name ) => {
  var tripInfoClone = {...tripInfo};
  tripInfoClone[name] = dateString;
  console.log('trip info', tripInfoClone);
  setTripInfo(tripInfoClone);
  }

  const updateGlobalState = () => {
    dispatch({type: 'SET_TRIP_INFO', payload: tripInfo});
  };

 useEffect(() => {
   updateGlobalState()
  },[tripInfo]);

   return (
    <div >
      <DatePicker name="startDate" placeholder="Start" onChange={(date, dateSting) => handleTripInfoChange(date, dateSting, 'startDate')}/>
      <DatePicker name="endDate"   placeholder="End"   onChange={(date, dateSting) => handleTripInfoChange(date, dateSting, 'endDate')}/>
      <SaveTrip/>
    </div>
  )
}


export default TravelBar;
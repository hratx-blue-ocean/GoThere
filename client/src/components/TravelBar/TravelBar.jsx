import React, {useEffect, useContext, useState} from 'react';
import moment from 'moment';
import {Context} from '../../state-management/Store';
import TripInfoObject from './TripInfoObject.js';
import './TravelBar.css';
import SaveTrip from './SaveTrip';
import {DatePicker} from 'antd';

//should select buisness

const TravelBar = () => {

  var [state, dispatch] = useContext(Context);
  var [tripInfo, setTripInfo] = useState({...TripInfoObject})

  function disabledDate(current) {

    let customDate = state.tripInfo.endDate;
    if (customDate) {
      return (current && current > moment(customDate, "YYYY-MM-DD")) || (current && current < moment().endOf('day'));
    }
    // if (state.tripInfo.endDate) {console.log('endDate', state.tripInfo.endDate)}
    // return current && current < moment().endOf('day');
  }

  const handleTripInfoChange = (date, dateString, name ) => {
    var tripInfoClone = {...tripInfo};
    tripInfoClone[name] = dateString;
    setTripInfo(tripInfoClone);
  }

  const updateGlobalState = () => {
    dispatch({type: 'SET_TRIP_INFO', payload: tripInfo});
  };

 useEffect(() => {
   updateGlobalState()
   console.log('re-render')
  },[tripInfo]);

   return (
    <div >
      <DatePicker format="YYYY-MM-DD" name="startDate" placeholder="Start"
        onChange={(date, dateSting) => handleTripInfoChange(date, dateSting, 'startDate')}
        disabledDate={disabledDate}/>
      <DatePicker format="YYYY-MM-DD" name="endDate" placeholder="End"
        onChange={(date, dateSting) => handleTripInfoChange(date, dateSting, 'endDate')}/>
      <SaveTrip/>
    </div>
  )
}


export default TravelBar;
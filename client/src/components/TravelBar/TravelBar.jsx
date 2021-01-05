import React, {useEffect, useContext, useState} from 'react';
import moment from 'moment';
import {Context} from '../../state-management/Store';
import TripInfoObject from './TripInfoObject.js';
import './TravelBar.css';
import SaveTrip from './SaveTrip';
import {DatePicker} from 'antd';
import SearchLocationInput from './SearchLocationInput.js';
import TravelBarOptions from './TravelBarOptions.jsx';

//should select buisness

const TravelBar = () => {

  var [state, dispatch] = useContext(Context);
  var [tripInfo, setTripInfo] = useState({...TripInfoObject})

    const disabledStartDate = (current) => {
    let endDate = state.tripInfo.endDate;
    if (endDate || current) {
       return (current && current > moment(endDate, "YYYY-MM-DD")) || (current && current < moment().endOf('day'))
    }
  }
  const disabledEndDate = (current) => {
    let startDate = state.tripInfo.startDate;
    if (startDate || current) {
       return (current && current < moment(startDate, "YYYY-MM-DD")) || (current && current < moment().endOf('day'))
    }
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
   console.log('TravelBat re-render')
  },[tripInfo]);

   return (
    <div className="search-location-input">
      <SearchLocationInput/>
      <DatePicker format="YYYY-MM-DD" name="startDate" placeholder="Start"
        onChange={(date, dateSting) => handleTripInfoChange(date, dateSting, 'startDate')}
        disabledDate={disabledStartDate}/>
      <DatePicker format="YYYY-MM-DD" name="endDate" placeholder="End"
        onChange={(date, dateSting) => handleTripInfoChange(date, dateSting, 'endDate')}
        disabledDate={disabledEndDate}/>
      <TravelBarOptions/>
      <SaveTrip/>
    </div>
  )
}


export default TravelBar;
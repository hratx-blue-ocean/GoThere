import React, { useContext } from 'react';
// import {Context} from '../state-management/Store';
import { Calendar } from 'antd';
import { Context } from "../../state-management/Store";
import './calendar.css'

const UserCalendar = () => {
  var [state] = useContext(Context);

//render into each day on calendar
  const dateCellRender = (value) => {

// console.log('value', state.trips)
    return (
      <>
      {state.trips.map((trip) => {
        let startDate = parseInt(trip.startDate.slice(8));
        let endDate = parseInt(trip.endDate.slice(8));
        let month = parseInt(trip.startDate.slice(5,7));
        // console.log(value.date() >= startDate && value.date() <= endDate && (value.month() + 1) === month)
        // render trips based off of trip data, data.type: Business or Personal
        if (value.date() >= startDate && value.date() <= endDate && (value.month() + 1) === month && trip.type === 'Personal') {
          return <div
          key={trip.tripId}
          className='tripBox'
          style={{
            background: 'violet'
          }}
          >{trip.location}</div>
        }

        if (value.date() >= startDate && value.date() <= endDate && (value.month() + 1) === month && trip.type === 'Business') {
          return <div
          key={trip.tripId}
          className='tripBox'
          style={{
            background: 'teal'
          }}
          >{trip.location}</div>
        }
      })}
      </>
    )
  }

    // const { value, selectedValue } = this.state;
    return (
      <>
        <Calendar dateCellRender={dateCellRender}/>
      </>
    );
}

export default UserCalendar;
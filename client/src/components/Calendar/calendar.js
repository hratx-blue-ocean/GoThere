import React, { useContext } from 'react';
// import {Context} from '../state-management/Store';
import { Calendar } from 'antd';
import { Context } from "../../state-management/Store";
import './calendar.css'

const UserCalendar = () => {
  var [state, dispatch] = useContext(Context);

//render into each day on calendar
  const dateCellRender = (value) => {

// console.log('value', state.trips)
    return (
      <>
      {state.trips.map((trip) => {
        let startDate = parseInt(trip.startDate.slice(8));
        let endDate = parseInt(trip.endDate.slice(8));
        let month = parseInt(trip.startDate.slice(5,7));
        // render trips based off of trip data, data.type: Business or Personal
        let dateBool = value.date() >= startDate && value.date() <= endDate && (value.month() + 1) === month;
        // console.log('meeeee', dateBool === true && trip.type === 'Buisness')
        if (dateBool === true && trip.type === 'Buisness') {
          console.log('me')
          return <div
          key={trip.tripId}
          className='tripBox'
          style={{
            background: 'violet'
          }}
          >{trip.location} and me</div>
        }

        if (value.date() >= startDate && value.date() <= endDate && (value.month() + 1) === month && trip.type === 'Personal') {
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
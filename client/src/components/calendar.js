import React, { useEffect, useContext } from 'react';
// import {Context} from '../state-management/Store';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import './calendar.css'

class UserCalendar extends React.Component {

  //render into each day on calendar
  dateCellRender = (value) => {
    const dummyData = [{
        tripId: 2,
        startDate: '2020-12-04',
        endDate: '2020-12-08',
        location: 'Homer, Alaska',
        type: 'Business'
      },
      {
        tripId: 3,
        startDate: '2020-12-14',
        endDate: '2020-12-17',
        location: 'Springfield, Nebraska',
        type: 'Business'
      },
      {
        tripId: 4,
        startDate: '2020-12-24',
        endDate: '2020-12-31',
        location: 'Marfa, Texas',
        type: 'Personal'
      },
      {
        tripId: 5,
        startDate: '2021-01-01',
        endDate: '2020-01-02',
        location: 'Austin, Texas',
        type: 'Business'
      }
    ]
    // console.log('value', value.month())
    return (
      <>
      {dummyData.map((trip) => {
        let startDate = parseInt(trip.startDate.slice(8));
        let endDate = parseInt(trip.endDate.slice(8));
        let month = parseInt(trip.startDate.slice(5,7));

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

  render() {
    const { value, selectedValue } = this.state;
    return (
      <>
        <Calendar dateCellRender={this.dateCellRender}/>
      </>
    );
  }
}

export default UserCalendar;
import React from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import './calendar.css'

class UserCalendar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      value: moment(),
      selectedValue: moment(),
    };
    //binding
    this.onSelect = this.onSelect.bind(this);
    this.onPanelChange = this.onPanelChange.bind(this);
    this.dateCellRender = this.dateCellRender.bind(this);
  }

  //selecting a date on calendar
  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  //render into each day on calendar
  dateCellRender = value => {
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
    console.log('value', value.month())
    return (
      <>
      {dummyData.map((trip) => {

        if (value.date() >= parseInt(trip.startDate.slice(8)) && value.date() <= parseInt(trip.endDate.slice(8)) && (value.month() + 1) === parseInt(trip.startDate.slice(5,7)) && trip.type === 'Personal') {
          return <div
            key={trip.tripId}
            className='tripBox'
            style={{
              background: 'violet'
            }}
            >{trip.location}</div>
        }

        if (value.date() >= parseInt(trip.startDate.slice(8)) && value.date() <= parseInt(trip.endDate.slice(8)) && (value.month() + 1) === parseInt(trip.startDate.slice(5,7)) && trip.type === 'Business') {
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
        <Alert
        // TODO: add trip info or redirect to trip planning?
          message={`Upcoming trips on this date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} dateCellRender={this.dateCellRender}/>
      </>
    );
  }
}

export default UserCalendar;
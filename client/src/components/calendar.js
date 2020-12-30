import React from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';

class UserCalendar extends React.Component {
  state = {
    value: moment('2020-12-25'),
    selectedValue: moment('2020-12-31'),
  };

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

    return (
      // TODO: map through whatever trip data given to populate calendar conditionally
      <div
        className='dayBox'
        style={{
          // TODO: background color cycle between business scheme or personal scheme
          background: 'purple',
          position: 'absolute',
          // TODO: style to match outercell width
          width: '226px'
        }}
        // TODO: fill with trip name
        >trip name</div>
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
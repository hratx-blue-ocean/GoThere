import { Calendar, Alert } from 'antd';
import moment from 'moment';

class UserCalendar extends React.Component {
  state = {
    value: moment('2020-12-25'),
    selectedValue: moment('2020-12-31'),
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  dateCellRender = value => {

  }

  render() {
    const { value, selectedValue } = this.state;
    return (
      <>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </>
    );
  }
}

export default UserCalendar;
import React, {useEffect, useContext, useState} from 'react';
import {Context} from '../../state-management/Store';
import {Rate, Dropdown, Button, Menu, Radio } from 'antd';


const TravelBarOptions = () => {

  var [state, dispatch] = useContext(Context);
  const [tripType, setTripType] = useState('Buisness')

  const handleTripInfoChange = (event) => {
    var selectedType = event.target.value;
    var tripInfoClone = {...state.tripInfo}
    tripInfoClone.type = selectedType;
    dispatch({type: 'SET_TRIP_INFO', payload: tripInfoClone});
    setTripType(selectedType);

  }

  const menu = (
    <Menu>
      <Menu.Item>
        <div>preferrd hotel rating
          <Rate allowHalf defaultValue={2.5}
          onChange={handleTripInfoChange}
          /></div>
      </Menu.Item>
      <Menu.Item>
        <Radio.Group onChange={handleTripInfoChange} value={tripType}>
          <Radio value={"Buisness"}>Buisness</Radio>
          <Radio value={"Personal"}>Personal</Radio>
        </Radio.Group>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} placement="bottomCenter"
    onChange={handleTripInfoChange}>
    <Button >Options</Button>
    </Dropdown>
  )
}

export default TravelBarOptions;
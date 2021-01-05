import React, {useEffect, useContext, useState} from 'react';
import {Context} from '../../state-management/Store';
import TripInfoObject from './TripInfoObject.js';
import {Rate, Dropdown, Button, Menu, Radio } from 'antd';


const TravelBarOptions = () => {

  var [state, dispatch] = useContext(Context);
  const [tripType, setTripType] = useState('Buisness')

  const handleTripInfoChange = (event) => {
    var selectedType = event.target.value;
    setTripType(selectedType);
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <div>preferrd hotel rating<Rate/></div>
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
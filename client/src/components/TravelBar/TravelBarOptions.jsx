import React, {useEffect, useContext, useState} from 'react';
import {Context} from '../../state-management/Store';
import TripInfoObject from './TripInfoObject.js';
import {Rate, Dropdown, Button, Menu, Radio } from 'antd';




const TravelBarOptions = () => {

  var [state, dispatch] = useContext(Context);
  var [tripInfo, setTripInfo] = useState()

  const handleTripInfoChange = (date, dateString, name ) => {

    var tripInfoClone = {...state.tripInfo};
    console.log('tripInfoClone', tripInfoClone)
    tripInfoClone[name] = dateString;
    setTripInfo(tripInfoClone);
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <div>preferrd hotel rating<Rate/></div>
      </Menu.Item>
      <Menu.Item>
        <Radio.Group>
          <Radio>Buisness</Radio>
          <Radio>Personal</Radio>
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
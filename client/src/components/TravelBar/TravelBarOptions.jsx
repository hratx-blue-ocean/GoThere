import React, {useEffect, useContext, useState} from 'react';
import {Context} from '../../state-management/Store';
import {Rate, Dropdown, Button, Menu, Radio } from 'antd';


const TravelBarOptions = () => {

  var [state, dispatch] = useContext(Context);
  const [tripType, setTripType] = useState('Buisness');
  const [hotelRating, setHotelRating] = useState(undefined);
  const [menueVisability, setMenueVisability] = useState(false);

  const handleVisableChange = flag => {
    setMenueVisability(flag);
  }

  const handleTripInfoChange = (event) => {
    var tripInfoClone = {...state.tripInfo}
    if (typeof event === 'number') {
      tripInfoClone.filter.rating = event
      setHotelRating(event);
    } else {
      var selectedType = event.target.value;
      tripInfoClone.type = selectedType;
      setTripType(selectedType);
    }

    dispatch({type: 'SET_TRIP_INFO', payload: tripInfoClone});

  }

  const menu = (
    <Menu style={{width: 400}}>
      <Menu.Item>
        <div>preferrd hotel rating
          <Rate allowHalf defaultValue={2.5}
          onChange={handleTripInfoChange}/></div>
      </Menu.Item>
      <Menu.Item>
       Preferrd hotel pricing <Rate defaultValue={2} character={"$"} /></Menu.Item>
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
    onChange={handleTripInfoChange} visible={menueVisability} onVisibleChange={handleVisableChange}>
    <Button >Options</Button>
    </Dropdown>
  )
}

export default TravelBarOptions;
import React, {useEffect, useContext, useState} from 'react';
import {Context} from '../../state-management/Store';
import {Rate, Dropdown, Button, Menu, Radio } from 'antd';


const TravelBarOptions = () => {

  var [state, dispatch] = useContext(Context);
  const [tripType, setTripType] = useState(undefined);
  const [hotelRating, setHotelRating] = useState(undefined);
  const [menueVisability, setMenueVisability] = useState(false);

  const handleVisableChange = flag => {
    setMenueVisability(flag);
  }

  const handleTripInfoChange = (event, name) => {
    var tripInfoClone = {...state.tripInfo}
    if (name === 'rating') {
      tripInfoClone.filter.rating = event
      setHotelRating(event);
    } else if (name === 'price') {
      tripInfoClone.filter.price = event
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
          <Rate allowHalf defaultValue={undefined}
          onChange={(event, name) => handleTripInfoChange( event, 'rating')}/></div>
      </Menu.Item>
      <Menu.Item>
       Preferrd hotel pricing <Rate defaultValue={undefined} character={"$"} onChange={(event, name) => handleTripInfoChange( event, 'price')} /></Menu.Item>
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
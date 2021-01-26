import {Button} from 'antd'
import React, {useContext} from 'react';
import {Context} from '../../state-management/Store';
const SaveTrip = () => {
const [state, dispatch] = useContext(Context)

const handleClick = () => {
  var tripsClone = [...state.trips];
  tripsClone.push(state.tripInfo);
  dispatch({type: 'ADD_TRIP', payload: tripsClone})
  }

  return (
  <Button onClick={handleClick}>Save Trip</Button>
  )
}
export default SaveTrip;
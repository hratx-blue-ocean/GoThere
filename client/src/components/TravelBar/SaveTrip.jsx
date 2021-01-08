import {useContext} from 'react'
import {Context} from '../../state-management/Store.jsx'
import {Button, Alert} from 'antd';
import {saveTrip} from '../../frontEndRoutes.js'
const SaveTrip = () => {
//click handler for POST Reqest
  var clicked = false;
  const [state, dispatch] = useContext(Context);
  const handleClick = () => {
    clicked = true;
    saveTrip(state.tripInfo, state.userId).then(console.log('Save Trip **SUCCEESS**')).catch(err => console.log(err))
  }

  return (
  <>
  <div>
  { state.userId === undefined && clicked ? (
        <Alert
          message='You may not proceed without logging'
          type="error"
          closable="false"
        />
      ) : null}
  </div>
  <Button onClick={handleClick}>Save Trip</Button>
  </>
  )
}
export default SaveTrip;
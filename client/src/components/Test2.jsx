import React, {useEffect, useContext} from 'react';
import {Context} from '../state-management/Store';
import axios from 'axios';

const Test2 = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    axios.get('http://3.137.191.193/products/2')
      .then(res => {
        const test2Data = res.data;
        dispatch({type: 'TEST 2', payload: test2Data})
      })
      .catch(error => {
        dispatch({type:'SET_ERROR', payload: error});
      })
  }, [])

  let test2 = <p>...loading</p>

  if(state.error) {
    test2 = <p>Somthing went wrong <span>{state.error}</span></p>;
  }

  if (!state.error && Object.keys(state.test2).length) {
    test2 = <div>
    <p>Test 2 :: {state.test2.id} // 1</p>
    <p>Test 2 :: {state.test2.name} // Camo Onesie </p>
    <p>Test 2 :: {state.test2.description} // the So Fatigues...</p>
  </div>
  }
  return (
    test2
  )
}

export default Test2;
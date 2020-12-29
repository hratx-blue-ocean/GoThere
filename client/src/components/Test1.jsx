import React, {useEffect, useContext} from 'react';
import {Context} from '../state-management/Store';
import axios from 'axios';

const Test = () => {

  const [state, dispatch] = useContext(Context);

  useEffect (() => {
    axios.get('http://3.137.191.193/products/1')
    .then(res => {
      const testData = res.data;
      dispatch({type: 'TEST 1', payload: testData})
    })
    .catch(error => {
      dispatch({type: 'SET_ERROR', payload: error})
    })
  }, []);

  let test = <p>...loading</p>;

  if (state.error) {
    test = <p>Something went wrong: <span>{state.error}</span></p>;
  }

  if (!state.error && state.test) {
    test =
        <div>
          <p>Test 1 :: {state.test.id} // 1</p>
          <p>Test 1 :: {state.test.name} // Camo Onesie </p>
          <p>Test 1 :: {state.test.description} // the So Fatigues...</p>
        </div>


  }

  return (
    test
  )
}

export default Test;
import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

<<<<<<< HEAD
const initialState = {
	test: [],
	test2: [],
	error: null,
=======
var initialState = {
  tripInfo: {},
  test2: [],
  error: null
>>>>>>> pre-production
};

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
	);
};

export const Context = createContext(initialState);
export default Store;

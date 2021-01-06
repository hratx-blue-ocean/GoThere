import React, { createContext, useReducer } from 'react';
import TripInfoObject from '../components/TravelBar/TripInfoObject.js'
import Reducer from './Reducer';

var initialState = {
	tripInfo: TripInfoObject,
	test2: [],
	error: null,
};

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
	);
};

export const Context = createContext(initialState);
export default Store;

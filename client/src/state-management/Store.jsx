import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import tripInfoObject from '../components/TravelBar/TripInfoObject.js';

var initialState = {
	tripInfo: tripInfoObject,
	favoriteHotels: [],
	favoriteRestaurants: [],
	favoriteBars: [],
	favoriteShopping: [],
	trips: [],
	error: null,
	userID: "",
	email: ""
};

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
	);
};

export const Context = createContext();
export default Store;

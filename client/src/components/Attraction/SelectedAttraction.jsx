import React, { useContext, useState } from 'react';
import { Context } from '../../state-management/Store';
import Attraction from '../Attraction/Attraction.jsx';
import './Attraction.css';

export default function SelectedAttraction(props) {
	const [state, dispatch] = useContext(Context);
	var displayAttraction;

	// if (props.attractionType === 'hotel' && state.tripInfoObject.savedHotel) {
	// 	// tripInfoClone.savedHotel = [];
	// 	displayAttraction = state.tripInfoObject.savedHotel[state.tripInfoObject.savedHotel.length-1]
	// }
	// if (props.attractionType === 'bar' && state.tripInfoObject.savedBar) {
	// 	displayAttraction = state.tripInfoObject.savedBar[state.tripInfoObject.savedHotel.length-1]
	// }
	// if (props.attractionType === 'restaurant' && state.tripInfoObject.savedRestaurant) {
	// 	displayAttraction = state.tripInfoObject.savedRestaurant[state.tripInfoObject.savedRestaurant.length-1]
	// }
	// if (props.attractionType === 'shopping' && state.tripInfoObject.savedShopping) {
	// 	displayAttraction = state.tripInfoObject.savedShopping[state.tripInfoObject.savedShopping.length-1]
	// }


	return (
		<div type="button" className="Attraction" onClick={props.onPress}>
			{/* <Attraction /> */}
			<div>
			{props.attractionType}
			</div>
		</div>
	);
}

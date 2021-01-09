import React, { useContext, useState } from 'react';
import { Context } from '../../state-management/Store';
import Attraction from '../Attraction/Attraction.jsx';
import './Attraction.css';

export default function SelectedAttraction(props) {
	const [state, dispatch] = useContext(Context);
	var displayAttraction;


	console.log('saved hotel', state)
	if (props.attractionType === 'hotels' && state.tripInfo.savedHotel) {
		// tripInfoClone.savedHotel = [];
		displayAttraction = state.tripInfo.savedHotel[state.tripInfo.savedHotel.length-1]
	}
	if (props.attractionType === 'bars' && state.tripInfo.savedBar) {
		displayAttraction = state.tripInfo.savedBar[state.tripInfo.savedHotel.length-1]
	}
	if (props.attractionType === 'restaurants' && state.tripInfo.savedRestaurant) {
		displayAttraction = state.tripInfo.savedRestaurant[state.tripInfo.savedRestaurant.length-1]
	}
	if (props.attractionType === 'shopping' && state.tripInfo.savedShopping) {
		displayAttraction = state.tripInfo.savedShopping[state.tripInfo.savedShopping.length-1]
	}
	if (displayAttraction) {

		console.log('display attraction:', displayAttraction)
	}
	return (
		<div type="button"  onClick={props.onPress}>
			{/* <Attraction /> */}
			<div>
				{displayAttraction ?
					<div
								className="ImageContainer"
								style={{
									backgroundImage: `url(${displayAttraction.image_url})`,
									backgroundSize: '150px',
						}}>
						<>
							{displayAttraction.name}
							</>
					</div>
					:
					<div className="Attraction">

				Choose {props.attractionType}
						</div>
			}
			</div>
		</div>
	);
}

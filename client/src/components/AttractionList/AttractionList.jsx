import React from 'react';
import Attraction from '../Attraction/Attraction.jsx';
import './AttractionList.css';

export default function AttractionList(props) {
	console.log('props from fan:', props.attractions);
	return (
		<div className="ListOpenContainer">
			<div className="ListOpen">
				{props.attractions.map((attraction) => {
					return (
						<Attraction
							id={attraction.id}
							name={attraction.name}
							price={attraction.price}
							rating={attraction.rating}
							address={attraction.location.display_address}
							imageUrl={attraction.image_url}
						/>
					);
				})}
			</div>
		</div>
	);
}

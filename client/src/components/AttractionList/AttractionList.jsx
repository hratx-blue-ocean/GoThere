import React from 'react';
import Attraction from '../Attraction/Attraction.jsx';
import './AttractionList.css';

export default function AttractionList(props) {
	// const cssClasses = ['List', props.show ? 'ListOpen' : 'ListClosed'];

	const DummyData = [
		{
			id: 1,
			name: 'Grand Luxor',
			price: 'expensive',
		},
		{
			id: 2,
			name: 'Sofitel',
			price: 'expensive',
		},
		{
			id: 3,
			name: 'Grand Luxor',
			price: 'expensive',
		},
		{
			id: 4,
			name: 'Best Western',
			price: 'reasonable',
		},
		{
			id: 5,
			name: 'Days Inn',
			price: 'expensive',
		},
	];

	return (
		<div className="ListOpen">
			{DummyData.map((attraction) => {
				return (
					<Attraction
						id={attraction.id}
						name={attraction.name}
						price={attraction.price}
					/>
				);
			})}
		</div>
	);
}

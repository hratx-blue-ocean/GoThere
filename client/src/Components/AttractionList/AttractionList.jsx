import React from 'react';
import Attraction from '../Attraction/Attraction.jsx';
import './AttractionList.css';

export default function AttractionList(props) {
	// const cssClasses = ['List', props.show ? 'ListOpen' : 'ListClosed'];
	return (
		<div className="ListOpen">
			<Attraction />
			<Attraction />
			<Attraction />
		</div>
	);
}

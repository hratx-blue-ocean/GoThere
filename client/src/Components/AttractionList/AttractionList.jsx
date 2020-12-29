import React from 'react';
import Attraction from '../Attraction/Attraction.jsx';

export default function AttractionList(props) {
	const cssClasses = ['List', props.show ? 'ListOpen' : 'ListClosed'];
	return (
		<div className={cssClasses.join(' ')}>
			<button className="Button" onClick={props.closed}>
				Dismiss
			</button>
			<Attraction />
			<Attraction />
			<Attraction />
		</div>
	);
}

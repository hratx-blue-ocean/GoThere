import React from 'react';

import './Attraction.css';

export default function Attraction(props) {
	// const { name, price } = this.props;
	return (
		<div>
			<div className="Attraction">
				<div className="Text"> {props.name} </div>
			</div>
		</div>
	);
}

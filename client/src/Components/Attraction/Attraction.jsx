import React from 'react';

import './Attraction.css';

export default function Attraction({ onPress }, props) {
	// const { name, price } = this.props;
	return (
		<div>
			<span type="button" className="Attraction" onClick={onPress}></span>
		</div>
	);
}

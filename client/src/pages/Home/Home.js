import React from 'react';
import TravelBar from '../../components/TravelBar/TravelBar.jsx';
import AttractionsBar from '../../components/AttractionsBar/AttractionsBar';
import './Home.css';

export default function Home() {
	return (
		<div>
			<div className="wrapper">
				<TravelBar className="center" />
				<AttractionsBar />
			</div>
		</div>
	);
}

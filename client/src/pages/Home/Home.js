import React from 'react';
import TravelBar from '../../components/TravelBar/TravelBar.jsx';
import AttractionsBar from '../../components/AttractionsBar/AttractionsBar';
import './Home.css';

export default function Home() {
	return (
		<div className="wrapper">
			<h2>Home (placeholder)</h2>

			<TravelBar />
			<AttractionsBar />
		</div>
	);
}

import React from 'react';
import TravelBar from '../../components/TravelBar/TravelBar.jsx';
import AttractionsFan from '../../components/AttractionsFan/AttractionsFan';
import './Home.css';

export default function Home() {
	return (
		<div className="wrapper">
			<h2>Home (placeholder)</h2>
			<TravelBar />
			<AttractionsFan />
		</div>
	);
}

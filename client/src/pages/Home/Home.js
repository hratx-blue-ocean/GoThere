import React from 'react';
import TravelBar from '../../components/TravelBar/TravelBar.jsx';
import AttractionsInfo from '../../components/AttractionsInfo/AttractionsInfo';
import { Row } from 'antd';
import backgroundPhoto from '../../assets/BackgroundTDNColor2.png';
import './Home.css';

export default function Home() {
	return (
		<div>
			<div className="center">
				<div className="travel-bar">
					<TravelBar />
				</div>
			</div>
			<div className="background" />
			<div className="AttractionsInfo">
				<AttractionsInfo />
			</div>
		</div>
	);
}

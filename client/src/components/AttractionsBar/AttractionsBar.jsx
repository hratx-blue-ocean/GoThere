import React from 'react';
import AttractionsFan from '../AttractionsFan/AttractionsFan.jsx';
import './AttractionsBar.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

export default function AttractionsBar() {
	return (
		<div className="BarContainer">
			<Row>
				<Col span={6}>
					<AttractionsFan />
					Hotels
				</Col>
				<Col span={6}>
					<AttractionsFan />
					Restaurants
				</Col>
				<Col span={6}>
					<AttractionsFan />
					Sights
				</Col>
				<Col span={6}>
					<AttractionsFan />
					Shops
				</Col>
			</Row>
		</div>
	);
}

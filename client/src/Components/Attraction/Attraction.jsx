import React from 'react';
import { Popover, Button } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
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

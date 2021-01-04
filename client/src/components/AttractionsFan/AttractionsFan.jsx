import React, { Component } from 'react';
import Attraction from '../Attraction/Attraction.jsx';
import AttractionList from '../AttractionList/AttractionList.jsx';
import SelectedAttraction from '../Attraction/SelectedAttraction.jsx';
import './AttractionsFan.css';

export default class AttractionsFan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listIsOpen: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	// showList = () => {
	// 	this.setState({ listIsOpen: true });
	// };
	// closeList = () => {
	// 	this.setState({ listIsOpen: false });
	// };

	handleClick() {
		console.log('clicked');
		this.setState((state) => ({
			listIsOpen: !state.listIsOpen,
		}));
	}

	render() {
		return (
			<div className="container">
				<SelectedAttraction
					className="RootAttraction"
					onPress={this.handleClick}
				/>
				<div>{this.state.listIsOpen ? <AttractionList /> : <div> </div>}</div>
			</div>
		);
	}
}

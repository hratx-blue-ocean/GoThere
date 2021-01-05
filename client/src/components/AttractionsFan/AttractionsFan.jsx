import React, { Component } from 'react';
import AttractionList from '../AttractionList/AttractionList.jsx';
import SelectedAttraction from '../Attraction/SelectedAttraction.jsx';
import hotels from '../../dummy-data/dummyHotels.js';
import './AttractionsFan.css';

export default class AttractionsFan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listIsOpen: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

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
				<div>
					{this.state.listIsOpen ? (
						<AttractionList attractions={hotels} />
					) : (
						<div> </div>
					)}
				</div>
			</div>
		);
	}
}

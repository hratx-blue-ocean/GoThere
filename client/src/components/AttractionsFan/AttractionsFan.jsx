import React, { Component } from 'react';
import AttractionList from '../AttractionList/AttractionList.jsx';
import SelectedAttraction from '../Attraction/SelectedAttraction.jsx';
import './AttractionsFan.css';
// const axios = require('axios');

// const yelp = require('yelp-fusion');
// const client = yelp.client(API_KEY);

export default class AttractionsFan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listIsOpen: false,
			// attractions: [],
		};
		this.handleClick = this.handleClick.bind(this);

		// this.getHotels = this.getHotels.bind(this);
		// this.getRestaurants = this.getRestaurants.bind(this);
		// this.getBars = this.getBars.bind(this);
	}

	handleClick() {
		this.setState((state) => ({
			listIsOpen: !state.listIsOpen,
		}));
	}

	render() {
		// console.log('attractions in state:', this.props.attractions);
		return (
			<div className="container">
				<SelectedAttraction
					className="RootAttraction"
					onPress={this.handleClick}
				/>
				<div>
					{this.state.listIsOpen ? (
						<AttractionList attractions={this.props.attractions} attractionType={this.props.attractionType}/>
					) : (
						<div> </div>
					)}
				</div>
			</div>
		);
	}
}

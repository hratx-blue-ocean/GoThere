import React, { Component } from 'react';
import AttractionList from '../AttractionList/AttractionList.jsx';
import SelectedAttraction from '../Attraction/SelectedAttraction.jsx';
import hotels from '../../dummy-data/dummyHotels.js';
import './AttractionsFan.css';
import keys from '../../API.js';
const axios = require('axios');

const yelp = require('yelp-fusion');
const client = yelp.client(keys.API_KEY);

export default class AttractionsFan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listIsOpen: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.getHotels = this.getHotels.bind(this);
	}

	componentDidMount() {
		this.getHotels();
		// client
		// 	.search({
		// 		term: 'restaurants',
		// 		location: 'austin, tx',
		// 	})
		// 	.then((response) => {
		// 		console.log(response.jsonBody.businesses[8].name);
		// 	})
		// 	.catch((e) => {
		// 		console.log(e);
		// 	});
	}

	getHotels = () => {
		const config = {
			method: 'get',
			url: 'https://api.yelp.com/v3/businesses/search',
			headers: {
				Authorization: `Bearer ${keys.YELP_API_KEY}`,
			},
			params: {
				mode: 'no-cors',
			},
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
	};

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

import React, { Component } from 'react';
import AttractionList from '../AttractionList/AttractionList.jsx';
import SelectedAttraction from '../Attraction/SelectedAttraction.jsx';
import hotels from '../../dummy-data/dummyHotels.js';
import './AttractionsFan.css';
// import API_KEY from '../../API.js';
const axios = require('axios');

// const yelp = require('yelp-fusion');
// const client = yelp.client(API_KEY);

export default class AttractionsFan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listIsOpen: false,
			attractions: [],
		};
		this.handleClick = this.handleClick.bind(this);
		this.getHotels = this.getHotels.bind(this);
	}

	componentDidMount() {
		this.getHotels();
	}

	getHotels() {
		const config = {
			method: 'get',
			url: 'http://localhost:8080/attractions',
			params: {
				location: 'austin, tx',
				term: 'restaurants',
			},
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				this.setState({
					attractions: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
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
						<AttractionList attractions={this.state.attractions} />
					) : (
						<div> </div>
					)}
				</div>
			</div>
		);
	}
}

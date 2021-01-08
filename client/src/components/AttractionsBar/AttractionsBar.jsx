import React, { Component } from 'react';
import AttractionsFan from '../AttractionsFan/AttractionsFan.jsx';
import './AttractionsBar.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
const axios = require('axios');

export default class AttractionsBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hotels: [],
			restaurants: [],
			bars: [],
			shopping: [],
		};

		this.getHotels = this.getHotels.bind(this);
		this.getRestaurants = this.getRestaurants.bind(this);
		this.getBars = this.getBars.bind(this);
		this.getEscapeRooms = this.getEscapeRooms.bind(this);
	}

	componentDidMount() {
		this.getHotels();
		this.getBars();
		this.getRestaurants();
		this.getEscapeRooms();
	}

	getHotels() {
		const config = {
			method: 'get',
			url: 'http://localhost:8080/attractions',
			params: {
				location: 'austin',
				term: 'hotels',
			},
		};
		axios(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				this.setState({
					hotels: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	getRestaurants() {
		const config = {
			method: 'get',
			url: 'http://localhost:8080/attractions',
			params: {
				location: 'austin, tx',
				term: 'restaurants',
			},
		};
		axios(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				this.setState({
					restaurants: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	getBars() {
		const config = {
			method: 'get',
			url: 'http://localhost:8080/attractions',
			params: {
				location: 'austin, tx',
				term: 'bars',
			},
		};

		axios(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				this.setState({
					bars: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	getEscapeRooms() {
		const config = {
			method: 'get',
			url: 'http://localhost:8080/attractions',
			params: {
				location: 'austin, tx',
				term: 'escape rooms',
			},
		};
		axios(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				this.setState({
					escapeRooms: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				{this.state.hotels.length > 0 ? (
					<div className="BarContainer">
						<Row>
							<Col span={6}>
								<AttractionsFan attractions={this.state.hotels} />
								Hotels
							</Col>
							<Col span={6}>
								<AttractionsFan attractions={this.state.restaurants} />
								Restaurants
							</Col>
							<Col span={6}>
								<AttractionsFan attractions={this.state.bars} />
								Bars
							</Col>
							<Col span={6}>
								<AttractionsFan attractions={this.state.escapeRooms} />
								EscapeRooms
							</Col>
						</Row>
					</div>
				) : (
					<div></div>
				)}
			</div>
		);
	}
}

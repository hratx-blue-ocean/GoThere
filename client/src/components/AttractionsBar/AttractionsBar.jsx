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
			listIsOpen: false,
			hotels: [],
			restaurants: [],
			bars: [],
		};
		this.handleClick = this.handleClick.bind(this);

		this.getHotels = this.getHotels.bind(this);
		this.getRestaurants = this.getRestaurants.bind(this);
		this.getBars = this.getBars.bind(this);
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
				term: 'hotels',
			},
		};
		axios(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				this.setState({
					attractions: response.data,
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
					attractions: response.data,
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
					attractions: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
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
					{/* <Col span={6}>
						<AttractionsFan />
						Shops
					</Col> */}
				</Row>
			</div>
		);
	}
}

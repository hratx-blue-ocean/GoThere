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
		this.getshopping = this.getshopping.bind(this);
	}


	componentDidMount() {
		this.getBars();
		this.getHotels();
		this.getRestaurants();
		this.getshopping();
	}

	getHotels() {
		const config = {
			method: 'get',
			url: 'http://localhost:8080/attractions',
			params: {
				location: this.props.location,
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
				location: this.props.location,
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
				location: this.props.location,
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

	getshopping() {
		const config = {
			method: 'get',
			url: 'http://localhost:8080/attractions',
			params: {
				location: this.props.location,
				term: 'shopping',
			},
		};
		axios(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				this.setState({
					shopping: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		console.log('attractions bar props:', this.props)
		return (
			<div>
				{/* {(this.state.bars.length & this.state.shopping.length)   > 0 ? ( */}
					<div className="BarContainer">
						<Row justify="center">
							<Col span={6}>
								<AttractionsFan attractions={this.state.hotels} attractionType={'hotel'}/>
								{/* Hotels */}
							</Col>
							<Col span={6}>
								<AttractionsFan attractions={this.state.restaurants} attractionType={'restaurants'}/>
								{/* Restaurants */}
							</Col>
							<Col span={6}>
								<AttractionsFan attractions={this.state.bars} attractionType={'bars'}/>
								{/* Bars */}
							</Col>
							<Col span={6}>
								<AttractionsFan attractions={this.state.shopping} attractionType={'shopping'}/>
								{/* Shopping */}
							</Col>
						</Row>
					</div>
				{/* ) : (
					<div></div>
				)} */}
			</div>
		);
	}
}

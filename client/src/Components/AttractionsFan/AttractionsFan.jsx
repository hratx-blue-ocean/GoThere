import React, { Component } from 'react';
import Attraction from '../Attraction/Attraction.jsx';
import AttractionList from '../AttractionList/AttractionList.jsx';
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
				<Attraction className="RootAttraction" onPress={this.handleClick} />
<<<<<<< HEAD
				<div>{this.state.listIsOpen ? <AttractionList /> : <div> </div>}</div>
=======
				{this.state.listIsOpen ? <AttractionList /> : <div> </div>}
>>>>>>> 06b4dd5b843cb9556d22ecbc4619569c9f350432
			</div>
		);
	}
}

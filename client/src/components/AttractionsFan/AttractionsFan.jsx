import React, { Component } from 'react';
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
					attractionType={this.props.attractionType}
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

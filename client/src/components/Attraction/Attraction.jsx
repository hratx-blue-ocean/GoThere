import React, { Component } from 'react';
import { Popover, Button } from 'antd';
import 'antd/dist/antd.css';
import './Attraction.css';

export default class Attraction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			hovered: false,
		};
	}

	hide = () => {
		this.setState({
			clicked: false,
			hovered: false,
		});
	};

	handleHoverChange = (visible) => {
		this.setState({
			hovered: visible,
			clicked: false,
		});
	};

	handleClickChange = (visible) => {
		this.setState({
			clicked: visible,
			hovered: false,
		});
	};

	render() {
		const hoverContent = (
			<>
				<div>
					Address: {this.props.address[0]}, {this.props.address[1]}{' '}
				</div>

				<div>Price: {this.props.price}</div>
				<div>Rating: {this.props.rating}</div>
			</>
		);
		const clickContent = <div>Save {this.props.name}?</div>;
		return (
			<div>
				{/* <img src={this.props.imageUrl} /> */}
				<div className="Attraction">
					<Popover
						placement="right"
						content={hoverContent}
						title={this.props.name}
						trigger="hover"
						visible={this.state.hovered}
						onVisibleChange={this.handleHoverChange}
					>
						<Popover
							content={
								<div>
									{clickContent}
									<button onClick={this.hide}>Save</button>
								</div>
							}
							title=""
							trigger="click"
							visible={this.state.clicked}
							onVisibleChange={this.handleClickChange}
						>
							<Button>Details</Button>
						</Popover>
					</Popover>
					<div className="Text"> </div>
				</div>
			</div>
		);
	}
}

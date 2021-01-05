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
		const hoverContent = <div>Attraction details.</div>;
		const clickContent = <div>Save {this.props.name}</div>;
		return (
			<div>
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
									<a onClick={this.hide}>Close</a>
								</div>
							}
							title="Click title"
							trigger="click"
							visible={this.state.clicked}
							onVisibleChange={this.handleClickChange}
						>
							{/* <Button>Hover and click / </Button> */}
						</Popover>
					</Popover>
					<div className="Text"> </div>
				</div>
			</div>
		);
	}
}

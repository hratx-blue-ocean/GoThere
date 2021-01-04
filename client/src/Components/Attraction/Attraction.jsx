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
		const hoverContent = <div>This is hover content.</div>;
		const clickContent = <div>This is click content.</div>;
		return (
			<div>
				<div className="Attraction">
					<Popover
						style={{ width: 500 }}
						content={hoverContent}
						title="Hover title"
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
							<Button>Hover and click / </Button>
						</Popover>
					</Popover>
					<div className="Text"> {this.props.name} </div>
				</div>
			</div>
		);
	}
}

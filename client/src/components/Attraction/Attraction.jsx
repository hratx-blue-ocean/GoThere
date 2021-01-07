import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../state-management/Store';
import { Popover } from 'antd';
// import { useToggle } from "ahooks";
import 'antd/dist/antd.css';
import './Attraction.css';

export default function Attraction(props) {
	const [isClicked, setIsClicked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [state, dispatch] = useContext(Context);

	const hide = () => {
		setIsClicked(false);
		setIsHovered(false);
	};

	const handleHoverChange = (visible) => {
		setIsClicked(false);
		setIsHovered(visible);
	};

	const handleClickChange = (visible) => {
		setIsClicked(visible);
		setIsHovered(false);
	};

	//content displayed during hover animation
	const hoverContent = (
		<>
			<div>
				Address: {this.props.address[0]}, {this.props.address[1]}{' '}
			</div>

			<div>Price: {this.props.price}</div>
			<div>Rating: {this.props.rating}</div>
		</>
	);

	//content displayed during click animation
	const clickContent = <div>Save {this.props.name}?</div>;

	return (
		<div>
			<div
				className="ImageContainer"
				style={{
					backgroundImage: `url(${this.props.imageUrl})`,
					backgroundSize: '150px',
				}}
			>
				<Popover
					placement="right"
					content={hoverContent}
					title={this.props.name}
					trigger="hover"
					visible={isHovered}
					onVisibleChange={this.handleHoverChange}
				>
					<Popover
						content={
							<div>
								{clickContent}
								<button onClick={this.hide}>Save</button>
								<button onClick={this.hide}>Favorite</button>
							</div>
						}
						title=""
						trigger="click"
						visible={isClicked}
						onVisibleChange={this.handleClickChange}
					>
						<button>{this.props.name}</button>
					</Popover>
				</Popover>
			</div>
		</div>
	);
}

//OLD CODE:
// export default class Attraction extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			clicked: false,
// 			hovered: false,
// 		};
// 	}

// 	hide = () => {
// 		this.setState({
// 			clicked: false,
// 			hovered: false,
// 		});
// 	};

// 	handleHoverChange = (visible) => {
// 		this.setState({
// 			hovered: visible,
// 			clicked: false,
// 		});
// 	};

// 	handleClickChange = (visible) => {
// 		this.setState({
// 			clicked: visible,
// 			hovered: false,
// 		});
// 	};

// 	render() {
// 		const hoverContent = (
// 			<>
// 				<div>
// 					Address: {this.props.address[0]}, {this.props.address[1]}{' '}
// 				</div>

// 				<div>Price: {this.props.price}</div>
// 				<div>Rating: {this.props.rating}</div>
// 			</>
// 		);
// 		const clickContent = <div>Save {this.props.name}?</div>;
// 		return (
// 			<div>
// 				<div
// 					className="ImageContainer"
// 					style={{
// 						backgroundImage: `url(${this.props.imageUrl})`,
// 						backgroundSize: '150px',
// 					}}
// 				>
// 					{/* <img src={this.props.imageUrl} className="AttractionImage" /> */}
// 					<Popover
// 						placement="right"
// 						content={hoverContent}
// 						title={this.props.name}
// 						trigger="hover"
// 						visible={this.state.hovered}
// 						onVisibleChange={this.handleHoverChange}
// 					>
// 						<Popover
// 							content={
// 								<div>
// 									{clickContent}
// 									<button onClick={this.hide}>Save</button>
// 									<button onClick={this.hide}>Favorite</button>
// 								</div>
// 							}
// 							title=""
// 							trigger="click"
// 							visible={this.state.clicked}
// 							onVisibleChange={this.handleClickChange}
// 						>
// 							<button>{this.props.name}</button>
// 						</Popover>
// 					</Popover>
// 				</div>
// 				{/* <div className="Attraction">
// 					<div className="Text"> </div>
// 				</div> */}
// 			</div>
// 		);
// 	}
// }

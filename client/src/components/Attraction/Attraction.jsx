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
	// console.log('state:', state.tripInfo);

	const handleHoverChange = (visible) => {
		setIsClicked(false);
		setIsHovered(visible);
	};

	const handleClickChange = (visible) => {
		setIsClicked(visible);
		setIsHovered(false);
	};

	const handleFavoriteClick = () => {
		var tripInfoClone = { ...state.tripInfo };
		tripInfoClone.attractions.push(props);
		dispatch({ type: 'SET_TRIP_INFO', payload: tripInfoClone });
		console.log('tripinfoClone', tripInfoClone);
		console.log('Attractions in state:');
	};

	//content displayed during hover animation
	const hoverContent = (
		<>
			<div>
				Address: {props.address[0]}, {props.address[1]}{' '}
			</div>

			<div>Price: {props.price}</div>
			<div>Rating: {props.rating}</div>
		</>
	);
	//content displayed during click animation
	const clickContent = <div>Save {props.name}?</div>;

	return (
		<div>
			<div
				className="ImageContainer"
				style={{
					backgroundImage: `url(${props.imageUrl})`,
					backgroundSize: '150px',
				}}
			>
				<Popover
					placement="right"
					content={hoverContent}
					title={props.name}
					trigger="hover"
					visible={isHovered}
					onVisibleChange={handleHoverChange}
				>
					<Popover
						content={
							<div>
								{clickContent}
								<button onClick={hide}>Save</button>
								<button onClick={hide}>Favorite</button>
							</div>
						}
						title=""
						trigger="click"
						visible={isClicked}
						onVisibleChange={handleClickChange}
					>
						<button onClick={handleFavoriteClick}>{props.name}</button>
					</Popover>
				</Popover>
			</div>
		</div>
	);
}

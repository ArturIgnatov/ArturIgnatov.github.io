import React from 'react'
import './Location.sass'
import InputsBox from './InputsBox';
import MapsWrapper from './MapsWrapper';
import { useState } from 'react';

const Location = (props) => {
	let [pointInput, handelrPointInput] =  useState(props.preorder.pointId.address || '')
	let points = props.map.point.filter(el => props.preorder.cityId.name === el.city )
	return (
		<div className='location'>
			<InputsBox
				cityId={props.location.cityId}
				selectCity={props.selectCity}
				pointId={props.location.pointId}
				selectPoint={props.selectPoint}
				preorder={props.preorder}
				setGeoCity={props.setGeoCity}
				setGeoPoint={props.setGeoPoint}
				pointInput={pointInput}
				handelrPointInput={handelrPointInput}
			/>
			<div className='location__map'>
				<span>Выбрать на карте: </span>
				<MapsWrapper
					position={props.map.city}
					city={props.preorder.cityId.name}
					points={points}
					selectPoint={props.selectPoint}
					handelrPointInput={handelrPointInput}
				/>
			</div>
		</div>
	)
}

export default Location;

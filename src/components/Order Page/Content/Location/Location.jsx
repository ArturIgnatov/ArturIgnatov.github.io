import React from 'react'
import './Location.sass'
import InputsBox from './InputsBox';
import  Maps from './Map';
import { useState } from 'react';

const Location = (props) => {

	const [center, setCenter] = useState({ lat: 54.3186575, lng: 48.397776 })
	return (
		<div className='location'>
			<InputsBox
				cityId={props.location.cityId}
				selectCity={props.selectCity}
				pointId={props.location.pointId}
				selectPoint={props.selectPoint}
				preorder={props.preorder}
			/>
			<div className='location__map'>
				<span>Выбрать на карте: </span>
				<Maps
					preorder={props.preorder}
					point={props.location.pointId}
					center={center}
					setCenter={setCenter}
				/>
				<button onClick={() => setCenter({ lat: 54.2000477, lng: 45.1745115 })}>Нев</button>
			</div>
		</div>
	)
}

export default Location;

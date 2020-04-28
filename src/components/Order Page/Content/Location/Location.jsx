import React from 'react'
import './Location.sass'
import InputsBox from './InputsBox';



const Location = (props) => {
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
				{/* <iframe SameSite='None' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae92ada9517e069849f6cc37eb1fbf4d9062ec5bafc6a6f8cdf7e61b99b32655f&amp;source=constructor" width="100%" height="352" frameborder="0"></iframe> */}
			</div>
		</div>
	)
}

export default Location;

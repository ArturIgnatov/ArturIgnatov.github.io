import React from 'react'
import './Location.sass'
import { useEffect } from 'react';



const Location = (props) => {
	// Текст импута городов
	let inputText = props.location.cityText;
	let cityValue = React.createRef()

	let updateCityValue = () => {
		let newText = cityValue.current.value;
		props.updateText(newText)
	}

	// Рендер списка городов с фильтром
	const citiName = props.location.cityId.map( (el) => {
		let cityName = inputText.toUpperCase()
		if (el.name.toUpperCase().indexOf(cityName) !== -1){
			return(
				<li key={el.id} onClick={() => { props.select(el.name) }}>{el.name}</li>
			)
		}
		return (
			null
		)
	})
	// Текст импута пункта выдачи
	let pointText = props.location.pointText;
	let pointValue = React.createRef()

	let updatePointValue = () => {
		let newText = pointValue.current.value
		props.updateTextPoint(newText)
	}
	// Рендер пунктов выдачи
	const pointsName = props.location.pointId.filter(point => point.cityName === props.location.cityText)

	const pointNameItem = pointsName.map(el => {
		let pontName = pointText.toUpperCase()
		if (el.address.toUpperCase().indexOf(pontName) !== -1) {
			return (
				<li key={el.id} onClick={() => { props.selectPoint(el.address) }}> {el.address} </li>
			)	
		}
		return (
			null
		)
	})

	useEffect(()=> {
		props.loadCity()
		props.loadPoint()
	}, [])
	

	return (
		<div className='location'>
			<div className='location__info style-input'>
				<label className='location__city' >
					Город
					<input type="text" ref={cityValue} onChange={updateCityValue} value={inputText} onClick={() => { props.toggleCityBox() }}/>
					{
						props.location.cityText !== '' ?
							<span className='svg__wrapper' onClick={() => { props.clear() }}>
								<svg className='times' aria-hidden="true" data-icon="times" viewBox="0 0 352 512">
									<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
								</svg>
							</span>
							:
							<div></div>
					}
					{
					props.location.cityBoxVisible ? 
						<div className='location__city-list'>
							<ul>
								{citiName}
							</ul>
						</div>
					:
						<div></div> 
					}
				</label>
				<label className='location__point input'>
					Пункт выдачи
					<input type="text" ref={pointValue} onChange={updatePointValue} value={props.location.pointText} onClick={() => { props.togglePointBox() }} placeholder='Начните вводить пункт'/>
					{
						props.location.pointText !== '' ?
							<span className='svg__wrapper down' onClick={() => { props.clearInputPoint() }}>
								<svg className='times' aria-hidden="true" data-icon="times" viewBox="0 0 352 512">
									<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
								</svg>
							</span>
							:
							<div></div>
					}
					{
						props.location.pointBoxVisible ?
							<div className='location__city-list'>
								<ul>
									{pointNameItem}
								</ul>
							</div>
							:
							<div></div>
					}
				</label>
			</div>
			<div className='location__map'>
				<span>Выбрать на карте: </span>
				{/* <iframe SameSite='None' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae92ada9517e069849f6cc37eb1fbf4d9062ec5bafc6a6f8cdf7e61b99b32655f&amp;source=constructor" width="100%" height="352" frameborder="0"></iframe> */}
			</div>
		</div>
	)
}

export default Location;

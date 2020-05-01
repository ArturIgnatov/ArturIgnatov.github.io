import React from 'react'
import { useState } from 'react'

const InputsBox = (props) => {

	let [cityInput, handelrCityInput] = useState(props.preorder.cityId.name || '')
	let [cityBox, handlerCityBox] = useState(false)

	let [pointInput, handelrPointInput] = useState(props.preorder.pointId.address || '')
	let [pointBox, handlerPointBox] = useState(false)
	
	let updateCityInput = (e) => {
		handelrCityInput(e.target.value)
		handlerCityBox(true)
	}
	let selectCity = (name) => {
		handelrCityInput(name)
		props.selectCity(name)
	}
	let clearCityInput = () => {
		handelrCityInput('')
		handlerCityBox(!cityBox)
	}
	let clickCityInput = () => {
		handlerCityBox(!cityBox)
		// handlerPointBox(false)
		// handelrPointInput('')
	}
	// Point
	let updatePointInput = (e) => {
		handelrPointInput(e.target.value)
		handlerPointBox(true)
	}
	let selectPoint = (name) => {
		handelrPointInput(name)
		props.selectPoint(name)
	}
	let clearPointInput = () => {
		handelrPointInput('')
		handlerPointBox(!pointBox)
	}
	// Рендер списка городов с фильтром
	const citiName = props.cityId.map((el) => {
		let cityName = cityInput.toUpperCase()
		if (el.name.toUpperCase().indexOf(cityName) !== -1) {
			return (
				<li key={el.id} onClick={() => selectCity(el.name)}>{el.name}</li>
			)
		}
		return (
			null
		)
	})
	// Рендер пунктов выдачи
	const pointsName = props.pointId.filter(point => point.cityName === cityInput)

	const pointNameItem = pointsName.map(el => {
		let pontName = pointInput.toUpperCase()
		if (el.address.toUpperCase().indexOf(pontName) !== -1) {
			return (
				<li key={el.id} onClick={() => selectPoint(el.address)}> {el.address} </li>
			)
		}
		return (
			null
		)
	})

	return (
		<div className='location__info style-input'>
			<label className='location__city'>
				Город
			<input
					type="text"
					value={cityInput}
					onChange={updateCityInput}
					onClick={clickCityInput}
					placeholder='Выбирите город...'
				/>
				{
					cityInput !== '' ?
						<span className='svg__wrapper' onClick={clearCityInput}>
							<svg className='times' aria-hidden="true" data-icon="times" viewBox="0 0 352 512">
								<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
							</svg>
						</span>
						:
						null
				}
				{
					cityBox ?
						<div className='location__city-list' >
							<ul>
								{citiName}
							</ul>
						</div>
						:
						null
				}
			</label>
			<label className='location__point input'>
				Пункт выдачи
			<input
					type="text"
					value={pointInput}
					onChange={updatePointInput}
					onClick={() => handlerPointBox(!pointBox)}
					placeholder='Начните вводить пункт...'
				/>
				{
					pointInput !== '' ?
						<span className='svg__wrapper down' onClick={clearPointInput}>
							<svg className='times' aria-hidden="true" data-icon="times" viewBox="0 0 352 512">
								<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
							</svg>
						</span>
						:
						null
				}
				{
					pointBox ?
						<div className='location__city-list'>
							<ul>
								{pointNameItem}
							</ul>
						</div>
						:
						null
				}
			</label>
		</div>
	)
}
export default InputsBox
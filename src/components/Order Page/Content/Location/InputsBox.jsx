import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const InputsBox = (props) => {
	const [cityInput, handelrCityInput] = useState(props.preorder.cityId.name || '')
	const [cityBox, handlerCityBox] = useState(false)
	// let [pointInput, handelrPointInput] = useState(props.preorder.pointId.address || '')
	const [pointBox, handlerPointBox] = useState(false)
	const [error, setError] = useState({ text: '', style: '', visible: false})

	useEffect(()=>{
		// props.pointId.forEach((el, i, arr) => {
		// 	props.setGeoPoint(el.cityName, el.address, el.name, arr)			
		// });
		props.setGeoCity(props.preorder.cityId.name)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] )
	
	let updateCityInput = (e) => {
		handelrCityInput(e.target.value)
		handlerCityBox(true)
	}
	let selectCity = (name) => {
		handelrCityInput(name)
		props.selectCity(name)
		setError({ text: '', style: '', visible: false })
		if (name) {
			props.setGeoCity(name)	
		}
	}	
	let clearCityInput = () => {
		handelrCityInput('')
		props.handelrPointInput('')
		selectCity('')
		selectPoint('')
		handlerCityBox(!cityBox)
		setError({ text: '', style: '', visible: false })
	}
	let clickCityInput = () => {
		handlerCityBox(!cityBox)
		handlerPointBox(false)
	}
	// Point
	let updatePointInput = (e) => {
		props.handelrPointInput(e.target.value)
		handlerPointBox(true)
	}
	let selectPoint = (name) => {
		props.handelrPointInput(name)
		props.selectPoint(name)
		setError({ text: '', style: '', visible: false })
	}
	let clearPointInput = () => {
		props.handelrPointInput('')
		selectPoint('')
		handlerPointBox(!pointBox)
		setError({ text: '', style: '', visible: false })
	}
	const selectOnEnter = (event,el) => {
		if (event.key === 'Enter') {
			handelrCityInput(el.name)
			handlerCityBox(!cityBox)
			console.log(el)
		}
	}

	const sities = props.cityId.map(el =>
		el.name.toUpperCase().indexOf(cityInput.toUpperCase()) !== -1
			? <Item key={el.id} select={selectCity} text={el.name} />
			: null
	)
	const points = props.pointId.filter(el => el.cityName === cityInput).map( el =>
		el.address.toUpperCase().indexOf(props.pointInput.toUpperCase()) !== -1
			? <Item key={el.id} select={selectPoint} text={el.address} />
			: null
	)
	const checkCityError = () => {
		if (sities.filter(el => el !== null).length === 0) {
			setError({ text: 'Неверный город', style: 'sities', visible: true })
		}
		else {
			setError({ text: '', style: '', visible: false })
		}
	}
	const checkPointError = () => {
		if (points.filter(el => el !== null).length === 0) {
			setError({ text: 'Точка не найдена', style: 'points', visible: true })
		}
		else {
			setError({ text: '', style: '', visible: false })
		}
	}
	// const nextCity = (e) => {
	// 	if (e.keyCode === 40) {
	// 		console.log('вниз');
	// 		// citiName[0]._owner.return.pendingProps.className='active'
	// 	}
	// 	else if (e.keyCode === 38){
	// 		console.log('вверх');
	// 	}
	// }
	// влево: #37
	// вверх: #38
	// вправо: #39
	// вниз: #40
	// Рендер пунктов выдачи
	return (
		<div className='location__info style-input'>
			<label className='location__city'>
				Город
				<input 
					type="text"
					value={cityInput}
					onChange={updateCityInput}
					onClick={clickCityInput}
					onKeyUp={checkCityError}
					className={error.style === 'sities' ? 'error' : 'null'}
					placeholder='Выбирите город...'
				/>
				{
					cityInput !== '' 
						?	<TimesInput clear={clearCityInput}/>
						:	null
				}
				{
					cityBox ?
						<div className='location__city-list' >
							<ul>
								{sities}
							</ul>
						</div>
						:
						null
				}
				{
					error.visible 
						? <span className={'location-error ' + error.style}>{error.text}</span>
						: null
				}
			</label>
			<label className='location__point input'>
				Пункт выдачи
			<input
					type="text"
					value={props.pointInput}
					onChange={updatePointInput}
					className={error.style === 'points' ? 'error' : null}
					onClick={() => handlerPointBox(!pointBox)}
					onKeyUp={checkPointError}
					placeholder='Начните вводить пункт...'
				/>
				{
					props.pointInput !== '' 
						?	<TimesInput clear={clearPointInput} styles={'down'}/>
						:	null
				}
				{
					pointBox ?
						<div className='location__city-list'>
							<ul>
								{points}
							</ul>
						</div>
						:
						null
				}
			</label>
		</div>
	)
}

const Item = ({text, select}) => {
	return <li onClick={() => select(text)}>{text}</li>
}
const TimesInput = ({ clear, styles}) => {
	return (
		<span className={styles ? 'svg__wrapper ' + styles : 'svg__wrapper'} onClick={clear}>
			<svg className='times' aria-hidden="true" data-icon="times" viewBox="0 0 352 512">
				<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
			</svg>
		</span>
	)
}
export default InputsBox
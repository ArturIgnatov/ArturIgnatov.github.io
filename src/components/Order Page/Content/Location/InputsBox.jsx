import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'


const InputsBox = (props) => {
	const [cityInput, handelrCityInput] = useState(props.preorder.cityId.name || '')
	const [cityBox, handlerCityBox] = useState(false)
	const [pointBox, handlerPointBox] = useState(false)
	const [error, setError] = useState({ text: '', style: '', visible: false})

	const ref = useRef(null)

	useEffect(() => {
		// props.pointId.forEach((el, i, arr) => {
		// 	props.setGeoPoint(el.cityName, el.address, el.name, arr)			
		// });
		props.setGeoCity(props.preorder.cityId.name)

		document.addEventListener('mousedown', clickOutside, false)
		return () => {
			document.removeEventListener('mousedown', clickOutside, false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	const clickOutside = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			handlerPointBox(false)
			handlerCityBox(false)
		}
	}
	let updateCityInput = (e) => {
		handelrCityInput(e.target.value)
		handlerCityBox(true)
		setCityCount(1)
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
		setCityCount(1)
	}
	let clickCityInput = () => {
		handlerCityBox(!cityBox)
		handlerPointBox(false)
	}
	let clickPointInput = () => {
		handlerPointBox(!pointBox)
	}
	// Point
	let updatePointInput = (e) => {
		props.handelrPointInput(e.target.value)
		handlerPointBox(true)
		setPointCount(1)
	}
	let selectPoint = (name) => {
		props.handelrPointInput(name)
		props.selectPoint(name)
		setError({ text: '', style: '', visible: false })

	}
	let clearPointInput = () => {
		console.log('clear');
		props.handelrPointInput('')
		selectPoint('')
		// handlerPointBox(!pointBox)
		setError({ text: '', style: '', visible: false })
		setPointCount(1)
	}
	const [countPoint, setPointCount] = useState(1)
	const [countCity, setCityCount] = useState(1)
	
	const sities = props.cityId.filter(el => el.name.toUpperCase().indexOf(cityInput.toUpperCase()) !== -1)

	const points = props.pointId
	.filter( el => el.cityName === cityInput)
	.filter( (el, i) => el.address.toUpperCase().indexOf(props.pointInput.toUpperCase()) !== -1 )
	
	const changeCityInput = (e) => {
		if (e.keyCode !== 40 && e.keyCode !== 38 && e.key !== 'Enter') {
			if (sities.filter(el => el !== null).length === 0) {
				setError({ text: 'Неверный город', style: 'sities', visible: true })
			}
			else {
				setError({ text: '', style: '', visible: false })
			}	
		}
		if (e.keyCode === 38) {
			countCity <= 1 ? setCityCount(sities.length) : setCityCount(countCity - 1)
		}
		else if (e.keyCode === 40) {
			countCity === sities.length ? setCityCount(1) : setCityCount(countCity + 1)
		}
		else if (e.key === 'Enter') {
			let name = sities[countCity - 1].name
			selectCity(name)
			handlerCityBox(!cityBox)
		}
	}
	const changePointInput = (e) => {
		if (e.keyCode !== 40 && e.keyCode !== 38 && e.key !== 'Enter') {
			if (points.filter(el => el !== null).length === 0) {
				setError({ text: 'Точка не найдена', style: 'points', visible: true })
			}
			else {
				setError({ text: '', style: '', visible: false })
			}	
		}
		if (e.keyCode === 38) {
			countPoint <= 1 ? setPointCount(points.length) : setPointCount(countPoint - 1)
		}
		else if (e.keyCode === 40) {
			countPoint === points.length ? setPointCount(1) : setPointCount(countPoint + 1)
		}
		else if (e.key === 'Enter'){
			let name = points[countPoint - 1].address 
			selectPoint(name)
			handlerPointBox(false)
		}
	}
	return (
		<div className='location__info style-input'>
			<label className='location__city'>
				Город
				<input 
					type="text"
					value={cityInput}
					onChange={updateCityInput}
					onClick={clickCityInput}
					onKeyUp={changeCityInput}
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
						<div className='location__city-list' ref={ref}>
							<ul>
								{
									sities.map((el,i)=>(
										<Item
											key={el.id}
											index={i}
											count={countCity}   
											select={selectCity}
											text={el.name}
										/>
									))
								}
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
					onClick={clickPointInput}
					onKeyUp={changePointInput}
					placeholder='Начните вводить пункт...'
				/>
				{
					props.pointInput !== '' 
						?	<TimesInput clear={clearPointInput} styles={'down'}/>
						:	null
				}
				{
					pointBox ?
						<div className='location__city-list' ref={ref}>
							<ul>
								{
									points.map((el,i) => (
										<Item
											key={el.id}
											index={i}
											count={countPoint}
											select={selectPoint}
											text={el.address}
										/>
									))
								}
							</ul>
						</div>
						:
						null
				}
			</label>
		</div>
	)
}

const Item = ({ text, select, index, count, onenter}) => {
	return <li className={index + 1 === count ? 'in-box__ative' : ''} onClick={() => select(text)}>{text}</li>
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
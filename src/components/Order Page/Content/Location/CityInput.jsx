import React from 'react'
import { useState } from 'react'

const CityIput = (props) => {

	let [cityInput, handelrCityInput] = useState('')
	let [cityBox, handlerCityBox] = useState(false)

	let updateCityInput = (e) => {
		handelrCityInput(e.target.value)
		props.selectCity(e.target.value)
		handlerCityBox(true)
	}

	let selectCity = (name) =>{
		handelrCityInput(name)
		props.selectCity(name)
	}

	let clearInput = () => {
		handelrCityInput('')
		handlerCityBox(!cityBox)
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


	return(
		<label className='location__city'>
			Город
			<input 
				type="text" 
				value={cityInput} 
				onChange={updateCityInput}
				onClick={() => handlerCityBox(!cityBox)}
			/>
			{
				cityInput !== '' ?
					<span className='svg__wrapper' onClick={clearInput}>
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
	)
}
export default CityIput
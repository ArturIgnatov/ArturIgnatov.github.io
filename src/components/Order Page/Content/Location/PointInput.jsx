import React from 'react'
import { useState } from 'react'

const PointIput = (props) => {

	let [pointInput, handelrPointInput] = useState('')
	let [pointBox, handlerPointBox] = useState(false)

	let updatePointInput = (e) => {
		handelrPointInput(e.target.value)
		// props.selectCity(e.target.value)
		handlerPointBox(true)
	}

	let selectPoint = (name) =>{
		handelrPointInput(name)
		// props.selectCity(name)
	}

	let clearInput = () => {
		handelrPointInput('')
		handlerPointBox(!pointBox)
	}

	// Рендер пунктов выдачи
	const pointsName = props.pointId.filter(point => point.cityName === props.location.cityText)

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

	return(
		<label className='location__point input'>
			Второй инпут
			<input 
				type="text"
				value={pointInput}  
				onChange={updatePointInput}  
				onClick={() => handlerPointBox(!pointBox)}
				placeholder='Начните вводить пункт'
			/>
			{
				pointInput !== '' ?
					<span className='svg__wrapper down' onClick={clearInput}>
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
	)
}
export default PointIput
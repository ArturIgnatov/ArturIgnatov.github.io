import React from 'react'
import { useState } from 'react'

const ColorRadioButton = (props) => {
	
	const colorsCar = [
		'любой',
		...props.cars.find(el => el.selected === true).colors
	]
	const toUpper = (arr) => {
		let newarray = []
		for (let i = 0; i < arr.length; i++) {
			newarray.push(arr[i][0].toUpperCase() + arr[i].slice(1))
		}
		return newarray
	}

	let colors = toUpper(colorsCar)

	let [option, setOption] = useState('')

	const checkRadio = (event) => {
		setOption(event.target.value)
	}

	return (
		<div className='more__colors style-radio'>
			{
				colors.map((el, i) => {
					return (
						<label key={i} >
							<input
								className="check"
								value={el}
								type="radio"
								name="colors"
								checked={option === el}
								onChange={checkRadio}
							/>
							<span className="fakecheck"></span>
							<span className={option === el ? 'active' : null}>{el}</span>
						</label >
					)
				})
			}
		</div>
	)
}

export default ColorRadioButton
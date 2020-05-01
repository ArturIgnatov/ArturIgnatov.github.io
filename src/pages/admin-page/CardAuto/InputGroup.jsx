import React from 'react'
import { useState } from 'react'

const InputGroup = (props) => {
	
	const propsCar = {
		id: '4r6t7w77we7776qwe5qwe', 
		colors: ['Красный', 'Белый', 'Зеленый']
	}
	// const [colors, handlerCar] = useState(propsCar.colors.reduce((key, n )=>({...key, [n]: false}),{}))
	// const [alert, handlerAlert] = useState({
	// 	text: '',
	// 	visible: false
	// })
	const [colors, addColor] = useState(propsCar.colors)
	const [colorsValue, handlerColorValue] = useState('')

	const setTextColorsValue = (e) => {
		handlerColorValue(e.target.value)
	}
	const pushNewColor = () => {
		if (colorsValue !== '' & colorsValue.length < 10) {
			addColor([
				...colors,
				colorsValue
			])
			handlerColorValue('')
		}
	}
	const pushOnEnter = (e) => {
		if (e.key === 'Enter') {
			addColor([
				...colors,
				colorsValue
			])
			handlerColorValue('')
		}
	}
	return (
		<div>
			<div className='sittings-car'>
				<label>
					<span>Модель автомобиля</span>
					<input 
						className='admin-input' 
						type='text' 
					/>
				</label>
				<label>
					<span>Тип автомобиля</span>
					<input  
						className='admin-input' 
						type='text'
					/>
				</label>
			</div>
			<div className='sittings-color'>
				<label>
					<span>Доступные цвета</span>
					<div className='admin-input-wrapper'>
						<input
							className='admin-input'
							type='text'
							value={colorsValue}
							onChange={setTextColorsValue}
							onKeyUp={pushOnEnter}
						/>
						<button onClick={pushNewColor}></button>
					</div>
				</label>
				{
					colors.map(el =>{
						return (
							<label 
								key={el} 
								className='admin-checkbox'
							>
								<div>
									<input
										type='checkbox'
										value={el}
										defaultChecked={el}
										// onChange={() => selectColors(el)}
									/>
									<span className='fake-admin'></span>
									<span>{el}</span>
								</div>
							</label>
						)
					})
				}
			</div>
		</div>
	)
}

export default InputGroup
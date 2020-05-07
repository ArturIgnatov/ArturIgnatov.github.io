import React from 'react'
import { useState } from 'react'

const InputGroup = (props) => {
	const [colorsInput, handlerColorInput] = useState('')
	const [colors, handlerColors] = useState(!props.car ? [] : props.car.colors)
	const [modelInput, handlerModelInput] = useState(!props.car ? '' : props.car.name)
	const [typeInput, handlerTypeInput] = useState(!props.car ? '' : props.car.categoryId.name)
	const [priceMin, handlerPriceMin] = useState(!props.car ? '' : props.car.priceMin)
	const [priceMax, handlerPriceMax] = useState(!props.car ? '' : props.car.priceMax)
	const [error, handlerError] = useState(false)

	const validModel = new RegExp(/[A-Z]\w+, [\w][\S\s]+/).test(modelInput)

	const changePriceMin = (e) => {
		handlerPriceMin(e.target.value)
	}
	const changePriceMax = (e) => {
		handlerPriceMax(e.target.value)
	}
	const setTextColorsValue = (e) => {
		handlerColorInput(e.target.value)
	}
	const changeModelInput = (e) =>{
		handlerModelInput(e.target.value)
	}
	const changeTypeInput = (e) => {
		handlerTypeInput(e.target.value)
	}
	const validateTypeInput = () => {
		if (typeInput === props.category[0].name || typeInput === props.category[1].name) {
			handlerError(false)
		}
		else
			handlerError(true)
	}

	const pushNewColor = () => {
		if (colorsInput !== '' & colorsInput.length < 10) {
			handlerColors([
				...colors,
				colorsInput
			])
			handlerColorInput('')
		}
	}
	const pushOnEnter = (e) => {
		if (e.key === 'Enter' & colorsInput !== '' & colorsInput.length < 10) {
			handlerColors([
				...colors,
				colorsInput
			])
			handlerColorInput('')
		}
	}
	const sendCar = () => {
		if (!error && validModel) {
			const newCar = {
				name: modelInput,
				categoryId: props.category.find(el => el.name === typeInput).id,
				colors: colors,
				priceMin: Number(priceMin),
				priceMax: Number(priceMax),
				thumbnail: !props.car ? props.file : { ...props.car.thumbnail }
			}
			props.car ? props.setUpdateCar(newCar, props.car.id) : props.setNewCar(newCar)
			props.saveAuto()
		}
	}	
	const resetChanged = () => {
		handlerColors(props.car ? props.car.colors : '')
		handlerColors(props.car ? props.car.colors: [])
		handlerModelInput(props.car ? props.car.name : '')
		handlerPriceMin(props.car ?  props.car.priceMin : '')
		handlerPriceMax(props.car ? props.car.priceMax : '')
		handlerTypeInput(props.car ? props.car.categoryId.name : '')
		handlerError(false)
	}
	const deleteCar = () => {

	}


	return (
		<>
		<div>
			<div className='sittings-car'>
				<label>
					<span>Модель автомобиля</span>
					<input 
							className={!validModel && modelInput? 'admin-input error' :'admin-input'}
						placeholder='Введите модель'
						type='text'
						onChange={changeModelInput}
						value={modelInput} 
					/>
					{
						!validModel && modelInput
						?
								<span className='error-message models'>
									Ошибка! Пример заполнения:'Hyundai, Elantra'
								</span>
						: null
					}
				</label>
				<label>
					<span>Тип автомобиля</span>
					<input  
						className={error && typeInput? 'admin-input error' : 'admin-input'}
						placeholder='Введите категорию' 
						type='text'
						onKeyUp={validateTypeInput}
						onChange={changeTypeInput}
						value={typeInput}
					/>
					{
						error && typeInput
						?	<span className='error-message'>
								Возможные варианты : {props.category[0].name} или {props.category[1].name}
							</span>
						: null
					}
				</label>
			</div>
				<div className='sittings-car'>
					<label>
						<span>Цена от</span>
						<input
							className='admin-input'
							placeholder='Введите число'
							type='number'
							onChange={changePriceMin}
							value={priceMin}
						/>
					</label>
					<label>
						<span>Цена до</span>
						<input
							className='admin-input'
							placeholder='Введите число'
							type='number'
							// onKeyUp={validateTypeInput}
							onChange={changePriceMax}
							value={priceMax}
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
							placeholder='Введите название цвета'
							value={colorsInput}
							onChange={setTextColorsValue}
							onKeyUp={pushOnEnter}
						/>
						<button onClick={pushNewColor}></button>
					</div>
				</label>
				{
					colors.map(el => {
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
		<div className='control-button'>
			{	props.car
					? <button onClick={sendCar} className='admin-btn blue'>Сохранить</button>
					: <button onClick={sendCar} className='admin-btn blue'>Создать</button>
			}
			<button onClick={resetChanged} className='admin-btn gray'>Отменить</button>
			<button className='admin-btn red'>Удалить</button>
		</div>
		</>
	)
}

export default InputGroup
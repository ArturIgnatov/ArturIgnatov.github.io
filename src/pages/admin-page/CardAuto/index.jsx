import React from 'react'
import './index.sass'
import car from '../../../assets/images/car/i30n.png'
import InputGroup from './InputGroup'
import { useState } from 'react'
import Alert from './Alert'

const CardAuto = () => {
	const [imgValue, handlerVlue] = useState({ file: false, imagePreviewUrl: false})
	let change = (e) => {
		e.preventDefault();
		let reader = new FileReader()
		let file = e.target.files[0]
		reader.onloadend = () => {
			handlerVlue({
				file: file,
				imagePreviewUrl: reader.result
			});
		}
		reader.readAsDataURL(file)
	}
	const [alert, showAlert] = useState(false)

	const saveAuto = () => {
		showAlert(true)
	}
	const closeAlert = () => {
		showAlert(false)
	}


	return(
		<>
		{
			alert 
			? <Alert closeAlert={closeAlert}/>
			: null
		}
		<h2>Карточка автомобиля</h2>
		<div className='card-auto'>
			<div className='card-auto__vision'>
				<div className='card-auto__item top'>
					<img src={imgValue.imagePreviewUrl !== false ? imgValue.imagePreviewUrl : car} alt="" />
					<div className='card-aut__car-name'>Hyundai, i30 N</div>
					<div className='card-aut__car-type'>Компакт-кар</div>
					<input
							type='file'
						onChange={change}
						name='file'
						id='file'
						className='invisible-input'
					/>
					<label htmlFor="file">
						<div>
							<span>{imgValue.file.name ? imgValue.file.name : 'Выбирите файл...'}</span>
						</div>
						<div>
							<span>Обзор</span>
						</div>
					</label>
				</div>
				<div className='card-auto__item center'>
					<span>Заполненно</span>
					<span>74%</span>
					<div>
						<div></div>
					</div>
				</div>
				<div className='card-auto__item bottom'>
					<span>Описание</span>
					<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. 
							Velit voluptatum perferendis earum saepe dolorem repellat 
							nemo deleniti quod culpa obcaecati consequuntur dolor, 
					</div>
				</div>
			</div>
			<div className='card-auto__sittings'>
				<h3>Настройки автомобиля</h3>
				<InputGroup/>
				<div className='control-button'>
					<button onClick={saveAuto} className='admin-btn blue'>Сохранить</button>
					<button className='admin-btn gray'>Отменить</button>
					<button className='admin-btn red'>Удалить</button>
				</div>
			</div>
		</div>
		</>
	)
}

export default CardAuto
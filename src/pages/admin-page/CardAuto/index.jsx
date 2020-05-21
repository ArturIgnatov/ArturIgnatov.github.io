import React from 'react'
import './index.sass'
import noneimg from '../../../assets/images/car/noimage.jpg'
import InputGroup from './InputGroup'
import { useState } from 'react'
import Alert from './Alert'
import { connect } from 'react-redux'
import { setNewCar, setUpdateCar } from '../../../redux/thunk-admin'
import { setNewChangedCar } from '../../../redux/action-admin'

const CardAuto = (props) => {
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
	const [message, setMessage] = useState('')

	const saveAuto = () => {
		showAlert(true)
	}
	const closeAlert = () => {
		showAlert(false)
	}

	let carimg = ''
	if (props.car) {
		carimg = 'http://api-factory.simbirsoft1.com/' + props.car.thumbnail.path
	} else
		carimg = noneimg

	return(
		<>
		{
			alert 
			? 	<Alert 
					closeAlert={closeAlert} 
					message={message}
				/>
			: 	null
		}
		<h2>Карточка автомобиля</h2>
		<div className='card-auto'>
			<div className='card-auto__vision'>
				<div className='card-auto__item top'>
						<img src={imgValue.imagePreviewUrl !== false ? imgValue.imagePreviewUrl : carimg} alt="" />
					<div className='card-aut__car-name'>{props.car ? props.car.name: 'Нет данных'}</div>
					<div className='card-aut__car-type'>{props.car ? props.car.categoryId.name : 'Нет данных'}</div>
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
				<InputGroup
					car={props.car}
					setNewChangedCar={props.setNewChangedCar}
					saveAuto={saveAuto}
					category={props.category}
					imagePreviewUrl={imgValue.imagePreviewUrl}
					file={imgValue.file}
					setNewCar={props.setNewCar}
					setUpdateCar={props.setUpdateCar}
					setMessage={setMessage}
				/>
			</div>
		</div>
		</>
	)
}

const mapStateToProps = (state) => ({
	car: state.adminPage.car,
	category: state.adminPage.category
})


export default connect(mapStateToProps, { setNewChangedCar, setNewCar, setUpdateCar })(CardAuto)
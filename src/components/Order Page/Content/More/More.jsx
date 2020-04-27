import React from 'react'
import './More.sass'
import { useState } from 'react'
import ColorRadioButton from './ColorRadioButton'
import Dates from './Dates'
import Rate from './Rate'

const More = (props) => {
	
	// // Рендер радиокнопок выбора тарифа
	// const radioRateItem = props.rate.map(el => {
	// 	return (
	// 		<label key={el.id}>
	// 			<input className="check" type="radio" name="rate" checked={el.checked} onChange={() => { props.selectRate(el.id) }} />
	// 			<span className="fakecheck"></span>
	// 			<span className={el.checked ? 'active': null}>{el.title}, {el.price} {el.unit} </span>
	// 		</label>
	// 	)

	// })

	const checkboxServicesItem = props.services.map(el => {
		return (
			<label key={el.id}>
				<input type="checkbox" checked={el.checked} onChange={() => { props.checkedService(el.id) }} />
				<span className="fake"></span>
				<span className={el.checked ? 'active': null}>{el.title}, {el.price}р</span>
			</label>
		)
	})

	return (
		<div className='more'>
			<span>Цвет</span>
				<ColorRadioButton 
					cars={props.cars}
					selectColor={props.selectColor}
				/>

			<span>Дата аренды</span>
				<Dates 
					setDateFrom={props.setDateFrom}
					setDateTo={props.setDateTo}
				/>
			<span>Тариф</span>
				<Rate 
					rate={props.rate}
					selectRate={props.selectRate}
				/>
			<span>Доп услуги</span>
			<div className='more__services '>
				{checkboxServicesItem}
			</div>


		</div>
	)
}

export default More;

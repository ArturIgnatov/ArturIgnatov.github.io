import React from 'react'
import './More.sass'
import ColorRadioButton from './ColorRadioButton'
import Dates from './Dates'
import Rate from './Rate'
import Services from './Services'

const More = (props) => {
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
					dateTo={props.dateTo}
				/>
			<span>Тариф</span>
				<Rate 
					rates={props.rates}
					fetchRates={props.fetchRates}
					selectRate={props.selectRate}
				/>
			<span>Доп услуги</span>
				<Services 
					services={props.services}
					checkedService={props.checkedService}
				/>


		</div>
	)
}

export default More;

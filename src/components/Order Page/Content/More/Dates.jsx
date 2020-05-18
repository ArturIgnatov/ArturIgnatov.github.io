import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Dates = (props) => {
	let [dateFrom, handlerDateFrom] = useState(new Date())
	let [dateTo, handlerDateTo] = useState(null)
	let [error, handlerError] = useState({visible: false, style: '', text: ''})
	useEffect(() => {
		props.setDateFrom((new Date(dateFrom).getTime()))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	
	let currentDate = new Date()
	const sendDateFrom = (date) => {
		if (currentDate > date && date > dateTo ) {
			handlerError({ visible: true, style: 'error-input', text: 'Введенная дата меньше текущей' })
		}	
		else {
			handlerDateFrom(date)
			handlerError({ visible: false, style: '', text: ''})
			props.setDateFrom((new Date(date).getTime()))
			handlerDateTo(null)
			props.setDateTo('') 
		}
	}
	const sendDateTo = (date) => {
		if (dateFrom > date ) {
			handlerError({ visible: true, style: 'error-input', text: 'Введенная дата меньше даты С' })
			props.setDateTo('')
			handlerDateTo(null) 
		}
		else {
			handlerDateTo(date)
			handlerError({ visible: false, style: '', text: '' })
			props.setDateTo((new Date(date).getTime())) 
		}
	}
	return(
		<div className='more__date style-input'>
			<label className='more__datewhis'>
				C
				<DatePicker
					selected={dateFrom}
					minDate={new Date()}
					onChange={date => sendDateFrom(date)}
					showTimeSelect
					timeIntervals={5}
					timeFormat="HH:mm"
					timeCaption="Время"
					className={error.style}
					isClearable
					dateFormat="dd.MM.yyyy HH:mm"
				/>
				{
					error.visible 
						? <span className='error-message order-error'>{error.text}</span>
						: null
				}
			</label>
			<label className='more__dateby'>
				По
				<DatePicker
					selected={dateTo}
					minDate={new Date()}
					onChange={date => sendDateTo(date)}
					showTimeSelect
					timeIntervals={5}
					timeFormat="HH:mm"
					isClearable
					// onBlur={handleOnBlur}
					className={error.style}
					dateFormat="dd.MM.yyyy HH:mm"
				/>
			</label>
		</div>
	)
}
export default Dates
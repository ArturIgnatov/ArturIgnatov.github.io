import React from 'react'
import moment from 'moment'
import { useState } from 'react'

const Dates = (props) => {
	
	let [dateFrom, handlerDateFrom] = useState(moment().format().slice(0, 16))
	let [dateTo, handlerDateTo] = useState('')

	const setDateFrom = (e) => {
		handlerDateFrom(e.currentTarget.value)
	}
	const setDateTo = (e) => {
		handlerDateTo(e.currentTarget.value)
	}
	const sendDateFrom = () => {
		props.setDateFrom((new Date(dateFrom).getTime()))
	}
	const sendDateTo = () => {
		props.setDateTo((new Date(dateFrom).getTime()))
	}
	return(
		<div className='more__date style-input'>
			<label className='more__datewhis' >
				С
					<input 
						type="datetime-local"
						min={dateFrom}
						value={dateFrom}
						onBlur={sendDateFrom} 
						onChange={setDateFrom}
					/>
			</label>
			<label className='more__dateby'>
				По
					<input 
						type="datetime-local"
						min={dateFrom}
						value={dateTo} 
						onBlur={sendDateTo}
						onChange={setDateTo} 
					/>
			</label>
		</div>
	)
}
export default Dates
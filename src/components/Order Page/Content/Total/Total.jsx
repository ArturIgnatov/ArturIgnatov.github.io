import React from 'react'
import './Total.sass'
import moment from 'moment'


const Total = (props) => {

	let converterDate = (date) => {
		let year = date.slice(0, 4)
		let mm = date.slice(5, 7)
		let dd = date.slice(8, 10)
		let time = date.slice(11)
		let newdate = dd + '.' + mm + '.' + year + ' ' + time
		 return newdate
	}
	let a = converterDate(props.preorder.dataThis)

	
	return (
		<div className='total'>
			<div className='total__order'>
				<div className='total__description'>
					<div>Hyndai, i30 N</div>
					<div>K 761 HA 73</div>
					<div>Топливо <span>100%</span></div>
					<div>Доступна с <span>{props.preorder.test}</span></div>
				</div>
				<img src={props.car[2].img} alt="" />
			</div>
		</div>
	)
}

export default Total;

import React from 'react'
import './Total.sass'


const Total = (props) => {

	let converterDate = (date) => {
		let year = date.slice(0, 4)
		let mm = date.slice(5, 7)
		let dd = date.slice(8, 10)
		let time = date.slice(11)
		let newdate = dd + '.' + mm + '.' + year + ' ' + time
		return newdate
	}
	let dateOrder = converterDate(props.preorder.dataThis)
	// const fuel = props.preorder.services.filter(item => item.title == 'Полный бак')
	let services = props.preorder.services.map(el => {
		if (el.title === 'Полный бак') {
			return(
				<div>Топливо<span>100%</span></div>
			)
		}
		else if (el.title === 'Детское кресло') {
			return(
				<div>{el.title} <span>Да</span> </div>
			)
		}
		else if (el.title === 'Правый руль') {
			return(
				<div>{el.title} <span>Да</span> </div>
			)
		}
		else return(
			null
		)
	})
	
	return (
		<div className='total'>
			<div className='total__order'>
				<div className='total__description'>
					<div>{props.preorder.car.mark}, {props.preorder.car.model}</div>
					<div>{props.preorder.car.number}</div>
					{services}
					<div>Доступна с <span>{dateOrder}</span></div>
				</div>
				<img src={props.preorder.car.img} alt="" />
			</div>
		</div>
	)
}

export default Total;

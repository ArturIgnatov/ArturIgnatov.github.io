import React from 'react'
import './OrderResult.sass'
import { NavLink } from 'react-router-dom';

const OrderButton = (props) => {
	console.log(props);

	return (
		<button>NNN</button>
	)
}

export default OrderButton;


	// 	if (props.op.location.cityText && props.op.location.pointText !== '') {
	// 		return (
	// 			<NavLink to='/docs/orderpage/model'><button>Выбрать модель</button></NavLink>
	// 		)
	// 	}
	// 	return (
	// 		<button disabled className='disabled-btn'>Выбрать модель</button>
	// 	)	
	// }
	// else if (props.op.step[1].isActive){
	// 	if (props.op.location.cityText && props.op.location.pointText !== '') {
	// 		return (
	// 			<NavLink to='/docs/orderpage/model'><button>Дополнительно</button></NavLink>
	// 		)
	// 	}
	// 	return (
	// 		<button disabled className='disabled-btn'>Дополнительно</button>
	// 	)	
import React from 'react'
import './OrderMenu.sass'
import { NavLink } from 'react-router-dom';

const OrderMenu = (props) => {
	console.log(props);
	
	const navLink = props.menu.map((el, i)=>{
		if(el.id === 1){
			return(
				<NavLink onClick={() => { props.currentStep(i)}} key={i} exact to={el.path}>{el.title}</NavLink>
			)
		}
		else if (!el.isActive){
			return (
				<NavLink onClick={() => { props.currentStep(i) }} className='disabled' key={i} to={el.path}>{el.title}</NavLink>
			)
		}
		return(
			<NavLink onClick={() => { props.currentStep(i) }} key={i} to={el.path}>{el.title}</NavLink>
		)
	}) 
	
	

	return (
		<div className='order-page__menu'>
			<nav>
				{navLink}
			</nav>
		</div>
	)
}

export default OrderMenu;
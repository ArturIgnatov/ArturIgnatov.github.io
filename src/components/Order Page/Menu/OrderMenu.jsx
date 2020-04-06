import React from 'react'
import './OrderMenu.sass'
import { NavLink } from 'react-router-dom';

const OrderMenu = () => {
	return (
		<div className='order-page__menu'>
			<nav>
				<NavLink exact to={'/orderpage'}>Местоположение</NavLink>
				<NavLink to={'/orderpage/model'}>Модель</NavLink>
				<NavLink to={'/orderpage/more'}>Дополнительно</NavLink>
				<NavLink to={'/orderpage/total'}>Итого</NavLink>
			</nav>
		</div>
	)
}

export default OrderMenu;
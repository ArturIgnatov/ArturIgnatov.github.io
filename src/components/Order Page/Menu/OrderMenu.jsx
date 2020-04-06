import React from 'react'
import './OrderMenu.sass'

const OrderMenu = () => {
	return (
		<div className='order-page__menu'>
			<nav>
				<a className='active' href="/#">Местоположение</a>
				<a href="/#">Модель</a>
				<a href="/#">Дополнительно</a>
				<a href="/#">Итого</a>
			</nav>
		</div>
	)
}

export default OrderMenu;
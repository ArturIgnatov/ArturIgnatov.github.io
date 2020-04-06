import React from 'react'
import './OrderPage.sass'
import HeaderContent from '../Start Page/Content/HeaderContent'
import OrderMenu from './Menu/OrderMenu'
import OrderContent from './Content/OrderContent'
import OrderResult from './Result/OrderResult'

const OrderPage = () => {
	return (
		<div className='order-page'>
			<HeaderContent/>
			<OrderMenu/>
			<div className='order-page__mein'>
				<OrderContent />
				<OrderResult />
			</div>
		</div>
	)
}

export default OrderPage;
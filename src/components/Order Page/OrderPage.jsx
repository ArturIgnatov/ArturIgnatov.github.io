import React from 'react'
import './OrderPage.sass'
import HeaderContent from '../Start Page/Content/HeaderContent'
import OrderMenu from './Menu/OrderMenu'
import OrderContent from './Content/OrderContent'
import OrderResultContainer from './Result/OrderResultContainer'

const OrderPage = (props) => {
	return (
		<div className='order-page'>
			<HeaderContent/>
			<OrderMenu menu={props.orderPage.menu} currentStep={props.currentStep}/>
			<div className='order-page__mein'>
				<OrderContent />
				<OrderResultContainer />
			</div>
		</div>
	)
}

export default OrderPage;
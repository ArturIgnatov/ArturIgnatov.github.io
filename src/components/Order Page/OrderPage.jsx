import React from 'react'
import './OrderPage.sass'
import HeaderContent from '../Start Page/Content/HeaderContent'
import OrderMenu from './Menu/OrderMenu'
import OrderContent from './Content/OrderContent'
import OrderResultContainer from './Result/OrderResultContainer'
import Modal from './Modal'

const OrderPage = (props) => {

	return (
		<div className='order-page'>
			{
				props.orderPage.isModal ?
					<Modal closeModal={props.closeModal} confirmOrder={props.confirmOrder}/>
					:
					null
			}
			<HeaderContent />
			<OrderMenu menu={props.orderPage.menu} order={props.orderPage.order} currentStep={props.currentStep}/>
			<div className='order-page__mein'>
				<OrderContent />
				<OrderResultContainer />
			</div>
		</div>
	)
}

export default OrderPage;
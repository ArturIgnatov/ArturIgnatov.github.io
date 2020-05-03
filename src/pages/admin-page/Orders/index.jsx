import React, { useEffect } from 'react'
import './index.sass'
import { connect } from 'react-redux'
import { loadOrders, setCurrentOrderPage, deleteOrder } from '../../../redux/admin-page'
import OrderItem from './OrderItem'
import AdminPreloader from '../AdminPreloader'

const Orders = (props) => {
	let pagesCount = Math.ceil(props.totalOrderCount / props.ordersPageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	useEffect(() => {
		props.loadOrders(props.currentOrderPage, props.ordersPageSize)
	}, [props.currentOrderPage])
 

	return(
		<>
		<h2>Заказы</h2>
		<div className='order-auto'>
			<div className='order-auto__header'>
				<select className='admin-select' name="" id="">
					<option>Не выбранно</option>
					<option value="За месяц">За месяц</option>
					<option value="За неделю">За неделю</option>
					<option value="За день">За день</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>Не выбранно</option>
					<option value="Elantra">Elantra</option>
					<option value="i 30N">i 30N</option>
					<option value="Sonata">Sonata</option>
					<option value="Creta">Creta</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>Не выбранно</option>
					<option value="Ульяновск">Ульяновск</option>
					<option value="Саранск">Саранск</option>
					<option value="Казань">Казань</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>Не выбранно</option>
					<option value="В процессе">В процессе</option>
					<option value="Отменен">Отменен</option>
					<option value="Исполнен">Исполнен</option>
				</select>
				<button className='admin-btn blue'>Применить</button>
			</div>
			<div className='order-auto__content'>
				{
					props.isPreloader
						? 	<AdminPreloader />
						: 	<OrderItem 
								orders={props.orders} 
								deleteOrder={props.deleteOrder}
							/>
				}
			</div>
			
			<div className='order-auto__footer'>
					{
						pages.map((el) => {
							return (
								<span
									onClick={() => props.setCurrentOrderPage(el)}
									key={el}
									className={props.currentOrderPage === el ? 'active' : null}
								>{el}
								</span>
							)
						})
					}
			</div>
		</div>
		</>
	)
}

const mapStateToProps = (state)=> ({
	orders: state.adminPage.orders,
	totalOrderCount: state.adminPage.totalOrderCount,
	currentOrderPage: state.adminPage.currentOrderPage,
	ordersPageSize: state.adminPage.ordersPageSize,
	isPreloader: state.adminPage.isPreloader
})

export default connect(mapStateToProps, { loadOrders, setCurrentOrderPage, deleteOrder })(Orders)
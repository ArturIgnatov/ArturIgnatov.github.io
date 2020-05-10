import React, { useEffect, useState } from 'react'
import './index.sass'
import { connect } from 'react-redux'
import { loadOrders, setCurrentOrderPage, deleteOrder, changeStatusOrder } from '../../../redux/admin-page'
import OrderItem from './OrderItem'
import AdminPreloader from '../AdminPreloader'
import Option from './Option'
import Pagination from '../Table/Pagination'

const Orders = (props) => {
	let { currentOrderPage, ordersPageSize, totalOrderCount} = props
	let pagesCount = Math.ceil(totalOrderCount / ordersPageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	// Состояние для select 
	const [period, setFilterDate] = useState('')
	const [car, setFilterCar]= useState('')
	const [city, setFilterCity] = useState('')
	const [status, setFilterStatus] = useState('')

	useEffect(() => {
		props.history.push('/adminpage/orders/page=' + currentOrderPage + '&limit=' + ordersPageSize)
		props.loadOrders(period, car, city, status, currentOrderPage, ordersPageSize)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentOrderPage])

	const setSelectDate = (e)=>{
		setFilterDate(e.target.value)
	}
	const setSelectCar = (e) => {
		setFilterCar(e.target.value)
	}
	const setSelectCity = (e) => {
		setFilterCity(e.target.value)
	}
	const setSelectStatus = (e) => {
		setFilterStatus(e.target.value)
	}
	// Фильтрация по городу
	const applyFilters = () => {
		console.log(city);
		props.loadOrders(period, car, city, status, currentOrderPage, ordersPageSize)
	}
	const resetFilters = () => {
		setFilterDate('')
		setFilterCar('')
		setFilterCity('')
		setFilterStatus('')
		props.loadOrders('', '', '', '', currentOrderPage, ordersPageSize)
	}

	return(
		<>
		<h2>Заказы</h2>
		<div className='order-auto'>
			<div className='order-auto__header'>
				<select
					value={period}
					onChange={setSelectDate}
					className='admin-select'
				>
					<option value=''>Период</option>
					<option value="1">За день</option>
					<option value="7">За неделю</option>
					<option value="30">За месяц</option>
				</select>
				<select
					value={car}
					onChange={setSelectCar}
					className='admin-select'
				>
					<option value=''>Машина</option>
					{
						props.cars.map(el =>(
							<Option
								key={el.id}
								id={el.id}
								name={el.name}
							/>
						))
					}
				</select>
				<select
					value={city}
					onChange={setSelectCity}
					className='admin-select'
				>
					<option value=''>Город</option>
					{
						props.cities.map(el => (
							<Option
								key={el.id}
								id={el.id}
								name={el.name}
							/>
						))
					}
				</select>
				<select
					className='admin-select' 
					value={status}
					onChange={setSelectStatus}
				>
					<option value=''>Статус</option>
					{
						props.orderStatus.map( el => (
							<Option
								key={el.id}
								id={el.id}
								name={el.name}
							/>
						))
					}
				</select>
				<div>
					<button onClick ={resetFilters} className='admin-btn mix'>Reset</button>
					<button onClick={applyFilters} className='admin-btn blue'>Применить</button>
				</div>
			</div>
			<div className='order-auto__content'>
				{
					props.isPreloader
						? 	<AdminPreloader />
						: 	<OrderItem 
								orders={props.orders} 
								deleteOrder={props.deleteOrder}
								changeStatusOrder={props.changeStatusOrder}
							/>
				}
			</div>
			
			<div className='order-auto__footer'>
					<Pagination
						pages={pages}
						pagesCount={pagesCount}
						setPage={props.setCurrentOrderPage}
						currentPage={props.currentOrderPage}
					/>
					<div className='order-info'>
						<div className='order-status__wrapper'>
							<div className='order-status new'></div>
							<span>Новые заказы</span>
						</div>
						<div className='order-status__wrapper'>
							<div className='order-status confirmed'></div>
							<span>Подтвержденные</span>
						</div>
						<div className='order-status__wrapper'>
							<div className='order-status cancelled'></div>
							<span>Отмененные заказы</span>
						</div>
					</div>
			</div>
		</div>
		</>
	)
}

const mapStateToProps = (state)=> ({
	orders: state.adminPage.orders,
	cars: state.orderPage.cars,
	totalOrderCount: state.adminPage.totalOrderCount,
	currentOrderPage: state.adminPage.currentOrderPage,
	ordersPageSize: state.adminPage.ordersPageSize,
	isPreloader: state.adminPage.isPreloader,
	cities: state.adminPage.cities,
	orderStatus: state.adminPage.orderStatus
})

export default connect(mapStateToProps, { loadOrders, setCurrentOrderPage, deleteOrder, changeStatusOrder })(Orders)
import React, { useEffect, useState } from 'react'
import './index.sass'
import { connect } from 'react-redux'
import { loadOrders, setCurrentOrderPage, deleteOrder } from '../../../redux/admin-page'
import OrderItem from './OrderItem'
import AdminPreloader from '../AdminPreloader'
import Option from './Option'

const Orders = (props) => {
	let pagesCount = Math.ceil(props.totalOrderCount / props.ordersPageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	let { currentOrderPage, ordersPageSize} = props
	// Состояние для select 
	const [period, setFilterDate] = useState('')
	const [car, setFilterCar]= useState('')
	const [city, setFilterCity] = useState('')
	useEffect(() => {
		props.history.push('/adminpage/orders/page=' + currentOrderPage + '&limit=' + ordersPageSize)
		props.loadOrders(period, car, city, currentOrderPage, ordersPageSize)
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
	// Фильтрация по городу
	const applyFilters = () => {
		console.log(city);
		props.loadOrders(period, car, city, currentOrderPage, ordersPageSize)
	}
	const resetFilters = () => {
		setFilterDate('')
		setFilterCar('')
		setFilterCity('')
		props.loadOrders('', '', '', currentOrderPage, ordersPageSize)
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
				<select className='admin-select' name="" id="">
					<option value=''>Статус</option>
					<option value="В процессе">В процессе</option>
					<option value="Отменен">Отменен</option>
					<option value="Исполнен">Исполнен</option>
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
	cars: state.orderPage.cars,
	totalOrderCount: state.adminPage.totalOrderCount,
	currentOrderPage: state.adminPage.currentOrderPage,
	ordersPageSize: state.adminPage.ordersPageSize,
	isPreloader: state.adminPage.isPreloader,
	cities: state.adminPage.cities
})

export default connect(mapStateToProps, { loadOrders, setCurrentOrderPage, deleteOrder })(Orders)
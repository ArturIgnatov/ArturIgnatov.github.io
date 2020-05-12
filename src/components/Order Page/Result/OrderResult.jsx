import React from 'react'
import './OrderResult.sass'
import { NavLink } from 'react-router-dom'

const OrderResult = (props) => {
	let {step} = props.orderPage
	let { 
		cityId, 
		pointId, 
		carId,
		color,
		dateFrom,
		dateTo,
		rateId,
		isFullTank,
		isNeedChildChair,
		isRightWheel

	} = props.orderPage.preorder
	
	let start = new Date(dateFrom)
	let finish = new Date(dateTo)
	let mill = finish - start
	let sec = mill / 1000
	let min = sec / 60
	let hour = min / 60
	let day = hour / 24 
	let hr1 = Math.floor(day) * 24
	let hr2 =  Math.floor(hour) - hr1
	let min1 = Math.floor(Math.floor(hour) * 60)
	let min2 = Math.floor(min) - min1
	let result = Math.floor(day) + 'д' + hr2 + 'ч' + min2 + 'м'
	// Подсчет цены
	let totalPrice = 0
	let kof = 1
	let days = Math.floor(day)
	let FullTank = 0
	let ChildChair = 0
	let RightWheel = 0
	isFullTank ? FullTank = 500 : FullTank = 0
	isNeedChildChair ? ChildChair = 200 : ChildChair = 0
	isRightWheel ? RightWheel = 1600 : RightWheel = 0
	if (carId) {
		if (carId.categoryId.name === 'Премиум') {
			kof = 1.2
		}	
	}
	if (rateId) {
		if (rateId.name === 7) {
			totalPrice = (days * 1440 + hr2 * 60 + min2) * rateId.name * kof + FullTank + ChildChair + RightWheel
		}
		else {
			if (days === 0 && hr2 === 0 && min2 === 0) {
				 totalPrice = 0
			}
			else if (days === 0 && (hr2 > 0 || min2 > 0)) {
				totalPrice = rateId.name * 1 * kof + FullTank + ChildChair + RightWheel
			}
			else if (days > 0 && (hr2 === 0 && min2 === 0)){
				totalPrice = days * rateId.name * kof + FullTank + ChildChair + RightWheel
			}
			else if (days > 0 && (hr2 >= 0 && min2 >= 0)) {
				totalPrice = (rateId.name * days + rateId.name) * kof + FullTank + ChildChair + RightWheel
			}
		}
	}



	function renderBtn () {
		if (step === 1) {
			return (
				<NavLink to='/docs/orderpage/model'>
					<button 
						disabled={pointId === ''}
						className={pointId === '' ? 'disabled-btn' : null} 
						onClick={() => { props.next() }}
						>Выбрать модель
					</button>
				</NavLink>
			)
		}
		else if (step === 2) {
			return (
				<NavLink to='/docs/orderpage/more'>
					<button
						disabled={carId === ''}
						className={carId === '' ? 'disabled-btn' : null}
						onClick={() => { props.next() }}
					>Дополнительно
					</button>
				</NavLink>
			)
		}
		else if (step === 3) {
			if (color && dateFrom && dateTo && rateId !== '' ) {
				return(
					<NavLink to='/docs/orderpage/total'>
						<button onClick={() => { props.next() }}>Итого</button>
					</NavLink>
				)
			}
			return (
				<button disabled className='disabled-btn'>Итого</button>
			)
		}
		else if (step === 4) {
			return (
				<button onClick={() => props.toOrder(totalPrice)}>Заказать</button>
			)
		}
		else if (step === 5 ) {
			return(
				<button className='red' onClick={() => { props.cancelOrder(props.order.id, { orderStatusId: '5e26a1f5099b810b946c5d8c'}) }}>Отменить</button>
			)
		}
	}
	
	return (
		<div className='order-page__result'>
			<h2>Ваш заказ:</h2>
			<div>
				<div className='relust__item'>
					<span>Пункт выдачи</span> <span>{cityId.name} {pointId.address }</span>
				</div>
				{
					carId 
						? 	<div key={carId.id} className='relust__item'>
								<span>Модель</span><span>{carId.name}</span>
							</div>
						: null
				}
				{
					color
						? 	<div key={color + 1} className='relust__item'>
								<span>Цвет</span><span>{color}</span>
							</div>
						: null
				}
				{	
					result !== 'NaNдNaNчNaNм' ?
					<div className='relust__item'>
							<span>Длительность аренды</span><span>{result}</span>
					</div>
					:
					null
				}
				{
					rateId
						? 	<div key={rateId.id} className='relust__item'>
								<span>Тариф</span><span>{rateId.rateTypeId.name}</span>
							</div>
						: null
				}
				{
					props.orderPage.services.map(el => {
						if(el.checked) {
							return(
								<div key={el.title + 1} className='relust__item'>
									<span>{el.title}</span><span>Да</span>
								</div>
							)
						}
						return (
							null
						)
					})
				}
				<p>Цена <span>{String(Math.ceil(totalPrice)).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} ₽</span></p>
				{renderBtn()}
			</div>
		</div>
	)
}

export default OrderResult;
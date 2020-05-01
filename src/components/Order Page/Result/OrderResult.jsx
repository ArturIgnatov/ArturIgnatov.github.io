import React from 'react'
import './OrderResult.sass'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

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

	let appSecret = '4cbcea96de'
	let random = '1t23tst3'
	let appId = '5e25c641099b810b946c5d5b'
	let rrr = random + ':' + appSecret
	let authToken = btoa(rrr)
	let sendOrder = () => {
		axios.post('http://api-factory.simbirsoft1.com/api/auth/login',
			{ username: 'intern', password: 'intern-S!' },
			{
				headers: {
					'Content-Type': 'application/json',
					'X-Api-Factory-Application-Id': appId,
					Authorization: 'Basic ' + authToken
				}
			}
		).then(function (response) {
			console.log(response.data);
			axios.post('http://api-factory.simbirsoft1.com/api/db/order',
			{ ...props.orderPage.preorder},
			{
				headers: {
					'Content-Type': 'application/json',
					'X-Api-Factory-Application-Id': appId,
					Authorization: 'Bearer ' + response.data.access_token
				}
				}).then(function (response) {
					console.log(response.data);
					
				})
		})
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
				<button onClick={sendOrder}>Заказать</button>
			)
		}
		else if (step === 5 ) {
			return(
				<button className='red' onClick={() => { props.replaceOrder() }}>Отменить</button>
			)
		}
	}
	
	return (
		<div className='order-page__result'>
			<h2>Ваш заказ:</h2>
			<div>
				<div className='relust__item'>
					<span>Пункт выдачи</span><span>{cityId.name} {pointId.address }</span>
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
				<p>Цена <span>16 000₽</span></p>
				{renderBtn()}
			</div>
		</div>
	)
}

export default OrderResult;
import React from 'react'
import './OrderResult.sass'
import { NavLink } from 'react-router-dom'

const OrderResult = (props) => {
	
	let dateWith = new Date(props.orderPage.date.with)
	let dateBy = new Date(props.orderPage.date.by)

	let mill = dateBy - dateWith
	let sec = mill / 1000
	let min = sec / 60
	let hour = min / 60
	let day = hour / 24 

	let hr1 = Math.floor(day) * 24
	let hr2 =  Math.floor(hour) - hr1

	let min1 = Math.floor(Math.floor(hour) * 60)
	let min2 = Math.floor(min) - min1

	let result = Math.floor(day) + 'д' + hr2 + 'ч' + min2 + 'м'


	function renderBtn () {
		if (props.orderPage.step === 1) {
			if (props.orderPage.location.cityText && props.orderPage.location.pointText !== '') {
				return(
					<NavLink to='/docs/orderpage/model'><button onClick={() => { props.next() }}>Выбрать модель</button></NavLink>
				)
			}
			return(
				<button disabled className='disabled-btn'>Выбрать модель</button>
			)
		}
		else if (props.orderPage.step === 2) {
			if (props.orderPage.preorder.car !== '' ) {
				return(
					<NavLink to='/docs/orderpage/more'><button onClick={() => { props.next() }}>Дополнительно</button></NavLink>
				)
			}
			return (
				<button disabled className='disabled-btn'>Дополнительно</button>
			)
		}
		else if (props.orderPage.step === 3) {
			if (props.orderPage.preorder.dataThis && props.orderPage.preorder.dataBy && props.orderPage.preorder.colorCar && props.orderPage.preorder.rate  !== '' ) {
				return(
					<NavLink to='/docs/orderpage/total'><button onClick={() => { props.next() }}>Итого</button></NavLink>
				)
			}
			return (
				<button disabled className='disabled-btn'>Итого</button>
			)
		}
		else if (props.orderPage.step === 4) {
			return (
				<button>Заказать</button>
			)
		}
	}
	console.log(props);
	
	return (
		<div className='order-page__result'>
			<h2>Ваш заказ:</h2>
			<div>
				<div className='relust__item'>
					<span>Пункт выдачи</span><span>{props.orderPage.location.cityText} {props.orderPage.location.pointText} </span>
				</div>
				{
					props.orderPage.cars.map(el => {
						if (el.selected) {
							return(
								<div className='relust__item'>
									<span>Модель</span><span>{el.model}</span>
								</div>
							)
						}
						return(
							null
						)

					})
				}
				{
					props.orderPage.colors.map(el => {
						if (el.checked) {
							return(
								<div className='relust__item'>
									<span>Цвет</span><span>{el.title}</span>
								</div>
							)
						}
						return (
							null
						)
					})
				}
				{	
					result !== 'NaNдNaNчNaNм' ?
					<div className='relust__item'>
						<span>Длительность аренды</span><span>{result}</span>
					</div>
					:
					<span></span>
				}
				{
					props.orderPage.rate.map(el => {
						if (el.checked) {
							return(
								<div className='relust__item'>
									<span>Тариф</span><span>{el.title}</span>
								</div>
							)
						}
						return (
							null
						)
					})
				}
				{
					props.orderPage.services.map(el => {
						if(el.checked) {
							return(
								<div className='relust__item'>
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
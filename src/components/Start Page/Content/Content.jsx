import React from 'react'
import { NavLink } from 'react-router-dom';
import './Content.sass'
import HeaderContent from './HeaderContent'
import * as axios from 'axios'

let appSecret = '4cbcea96de'
let random = '1t23tst3'
let appId = '5e25c641099b810b946c5d5b'
let rrr = random + ':' + appSecret
let authToken = btoa(rrr)
let BearerData = {}

const connect = axios.create({
	baseURL: 'http://api-factory.simbirsoft1.com/api',
	headers: {
		'Content-Type': 'application/json',
		'X-Api-Factory-Application-Id': appId,
		Authorization: 'Basic ' + authToken
	}
})

const instance = axios.create({
	baseURL: 'http://api-factory.simbirsoft1.com/api',
	headers: {
		'Content-Type': 'application/json',
		'X-Api-Factory-Application-Id': appId,
		Authorization: 'Bearer ' + BearerData
	}
})


connect.post('/auth/login', { username: 'intern', password: 'intern-S!' })
	.then(response => BearerData = response.data)

instance.get('/db/car')
	.then(function (response) {
		console.log('Машины');
		console.log(response.data.data);
		console.log('');
	});
instance.get('/db/order')
	.then(function (response) {
		console.log('Заказы');
		console.log(response.data.data);
		console.log('');
	});
instance.get('/db/point')
	.then(function (response) {
		console.log('Точки');
		console.log(response.data.data);
		console.log('');
	});
instance.get('/db/category')
	.then(function (response) {
		console.log('Категории');
		console.log(response.data.data);
		console.log('');
	});
instance.get('/db/city')
	.then(function (response) {
		console.log('Города');
		console.log(response.data.data);
		console.log('');
	});
instance.get('/db/orderStatus')
	.then(function (response) {
		console.log('Получение статуса заказа');
		console.log(response.data.data);
		console.log('');
	});
instance.get('/db/rate')
	.then(function (response) {
		console.log('Rate');
		console.log(response.data.data);
		console.log('');
	});



const Content = (props) => {	

	return(
		<main className='content'>
			<HeaderContent/>
			<div className='content__desription'>
				<h2>Каршеринг</h2>
				<h1>Need for Drive</h1>
				<span>Поминутная аренда авто твоего города</span>
				<NavLink exact to='/docs/orderpage'><button>Забронировать</button></NavLink>
			</div>
			<div className='content__footer'>
				<span>© 2016-2020 «Need for drive»</span>
				<a href='tel:+7 (495) 234-22-44'>8 (495) 234-22-44</a>
			</div>
		</main>
	)
}
 

export default Content;
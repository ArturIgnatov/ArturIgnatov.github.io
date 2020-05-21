import * as axios from 'axios'
import Geocode from 'react-geocode';
import { createProxyMiddleware } from 'http-proxy-middleware';

let appSecret = '4cbcea96de'
let random = '1t23tst3'
let appId = '5e25c641099b810b946c5d5b'
let rrr = random + ':' + appSecret
let authToken = btoa(rrr)

const connect = axios.create({
	baseURL: '//api-factory.simbirsoft1.com/api',
	headers: {
		'Content-Type': 'application/json',
		'X-Api-Factory-Application-Id': appId,
		Authorization: 'Basic ' + authToken
	}
})
// const https = require('https')
// const { createProxyMiddleware } = require('http-proxy-middleware');



const instance = axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/http://api-factory.simbirsoft1.com/api',
	headers: {
		'Content-Type': 'application/json',
		'X-Api-Factory-Application-Id': appId,
	}
})
// connect.interceptors.response.use( 
// 	function (response) {
// 		instance.defaults.headers.common['Authorization'] = 'Bearer 3bf30b17e8fcb41d00c204e5acb78a11a044cf9b'
// 		localStorage.setItem('access_token', JSON.stringify(response.data.access_token))
// 		localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token))
// 		return response	
// 	},
// 	function (error) {
// 		return Promise.reject(error)
// 	}
// )
// instance.interceptors.response.use(
// 	function (response) {
// 		return response
// 	},
// 	function (error) {
// 		let refresh_token = JSON.parse(localStorage.getItem('refresh_token'))
// 		authAPI.refreshToken(refresh_token).then( response => {
// 			instance.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
// 			localStorage.setItem('access_token', JSON.stringify(response.data.access_token))
// 			localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token))
			
// 		})
// 		return Promise.reject(error)
// 	}
// )

export const authAPI = {
	login (user) {
		return connect.post('/auth/login', user)
	},
	logout (userId) {
		return connect.post('/auth/logout', userId)
	},
	refreshToken (token) {
		return connect.post('/auth/refresh', {refresh_token: token})
	},
	check () {
		return connect.get('/auth/check')
	}
}

export const worsAPI = {
	authApp () {
		return connect.post('/auth/login', { username: 'intern', password: 'intern-S!' }).then(response => {
			localStorage.setItem('access_token', JSON.stringify(response.data.access_token))
			localStorage.setItem('access_token', JSON.stringify(response.data.refresh_token))
		})	
	},
	isAuth (user) {
		return connect.post('/auth/login', user)
	},
	getCars() {
		return instance.get('/db/car')
	},
	getCity() {
		return instance.get('/db/city')
	},
	getPoints() {
		return instance.get('/db/point')
	},
	getRates() {
		return instance.get('/db/rate')
	},
	getCategory() {
		return instance.get('/db/category')
	},
	getOrderStatus () {
		return instance.get('/db/orderStatus')
	},
}

export const carsAPI = {
	getCars(page, limit, sort, category) {
		let { pagE, sortM, categorY } = ''
		page > 1 ? pagE = `page=${page - 1}` : pagE = `page=0`
		!sort ? sortM = '' : sortM = `sort[${sort.field}]=` + sort.value 
		category === '' ? categorY = '' : categorY = `categoryId=` + category
		// categoryId=5e25c98d099b810b946c5d62
		return instance.get(`/db/car/?${categorY}&${sortM}&${pagE}&limit=${limit}`)
	},
	getAllCars(){
		return instance.get('/db/cars')
	},
	setCar(newCar) {
		const { name, categoryId, colors, priceMin, priceMax, thumbnail} = newCar
		const formData = new FormData()
		formData.append('name', name)
		formData.append('categoryId', categoryId)
		colors.forEach( el => formData.append('colors', el))
		formData.append('priceMin', priceMin)
		formData.append('priceMax', priceMax)
		formData.append('thumbnail', thumbnail)
		return instance.post('/db/car', formData, {
			headers:{
				'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
				'Accept': '*/*',
			}
		})
	},
	updateCars(car, id) {
		return instance.put('/db/car/' + id, {...car})
	},
	deleteCar(carId) {
		return instance.delete('/db/car' + carId)
	}
}

export const orderAPI = {
	updateOrder (id, status) {
		return instance.put(`/db/order/${id}`, status)
	},
	sendOrder(order) {
		return instance.post('/db/order', {...order})
	},
	getOrder(period, car, city, status, page = 1, limit = 4, token) {
		let {pagE, citY, caR, statuS, dateFrom, dateTo, result} = ''
		page > 1 ? pagE = `page=${page - 1}` : pagE = `page=0`
		city === '' ? citY = '' : citY = '&cityId[id]=' + city
		car === '' ? caR = '' : caR = '&carId[id]=' + car
		status === '' ? statuS = '' : statuS = '&orderStatusId[id]=' + status
		if (period !== '') {
			dateTo = new Date().getTime()
			dateFrom = new Date(dateTo - 86400000 * period)
			result = '&createdAt[$gt]=' + dateFrom + '&createdAt[$lt]=' + dateTo
		}
		else
			result= ''
		return instance.get(`/db/order/?sort[createdAt]=-1${result}${caR}${citY}${statuS}&${pagE}&limit=${limit}`, {
			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		
	},
	deleteOrder(orderId){
		return instance.delete(`/db/order/${orderId}`)
	}
}

Geocode.setApiKey('AIzaSyBzbzAyOD0N9TQYwKwahgQXE_4awH2G3T8')
Geocode.setLanguage('ru')
Geocode.setRegion('ru')
export const geoAPI = {
	getCity(city){
		return Geocode.fromAddress(city)
	},
	getPoint(city, point){
		let ul = city + ' ' + point
		console.log(ul);
		return Geocode.fromAddress(ul)
	}
}
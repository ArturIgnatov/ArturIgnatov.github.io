import * as axios from 'axios'

let appSecret = '4cbcea96de'
let random = '1t23tst3'
let appId = '5e25c641099b810b946c5d5b'
let rrr = random + ':' + appSecret
let authToken = btoa(rrr)

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
		Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
	}
})


export const worsAPI = {
	authApp () {
		return connect.post('/auth/login', { username: 'intern', password: 'intern-S!' }).then(response => {
			localStorage.setItem('token', JSON.stringify(response.data.access_token))
		})	
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

export const orderAPI = {
	updateOrder (id, status) {
		return instance.put(`/db/order/${id}`, {status})
	},
	sendOrder(order) {
		return instance.post('/db/order', {...order})
	},
	getOrder(page = 1, limit = 4){
		return instance.get(`/db/order/?page=${page - 1}&limit=${limit}`)
	},
	deleteOrder(orderId){
		return instance.delete(`/db/order/${orderId}`)
	}
}

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


export const worsAPI = {
	authApp () {
		return connect.post('/auth/login', { username: 'intern', password: 'intern-S!' })
			.then(response => BearerData = response.data)	
	},
	getCars() {
		return instance.get('/db/car')
	},
	getCity() {
		return instance.get('/db/city')
	},
	getPoints(){
		return instance.get('/db/point')
	},
	getRate(){
		return instance.get('/db/rate')
	}
}

// connect.post('/auth/login', { username: 'intern', password: 'intern-S!' })
// 	.then(response => BearerData = response.data)

// instance.get('/db/car')
// 	.then(function (response) {
// 		console.log(response.data.data);
// 	});
// instance.get('/db/order')
// 	.then(function (response) {
// 		console.log(response.data);
// 	});
// instance.get('/db/point')
// 	.then(function (response) {
// 		console.log(response.data);
// 	});
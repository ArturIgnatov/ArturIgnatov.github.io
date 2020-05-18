import { worsAPI, orderAPI, carsAPI, authAPI } from "../api/api";

const INITIAL_APP = 'INITIAL_APP'
const SET_ORDERS ='SET_ORDERS'
const SET_CURRENT_ORDER_PAGE = 'SET_CURRENT_ORDER_PAGE'
const SET_CURRENT_CARS_PAGE = 'SET_CURRENT_CARS_PAGE'
const SET_PRELOADER ='SET_PRELOADER'
const SET_CATEGORY = 'SET_CATEGORY'
const SET_SITIES = 'SET_SITIES'
const SET_USER = 'SET_USER'
const SET_ERROR = 'SET_ERROR'
const DELETE_ORDER = 'DELETE_ORDER'
const ADD_ORDER ='ADD_ORDER'
const CHANGE_CAR = 'CHANGE_CAR'
const SET_ORDER_CARS = 'SET_ORDER_CARS'
const SET_CHANGED_CAR = 'SET_CHANGED_CAR'
const SET_OREDRS_STATUS = 'SET_OREDRS_STATUS'

let initialState = {
	car: undefined,
	cars: [],
	order: {},
	orders:[],
	cities: [],
	orderStatus:[],
	userid: null,
	isAuth: false,
	isPreloader: true,
	isRefresh: false,
	error: undefined,

	totalCarsCount: null,
	carsPageSize: 8,
	currentCarsPage: 1,

	totalOrderCount: null,
	ordersPageSize: 4,
	currentOrderPage: 1
}

const AdminPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				isAuth: action.payload,
				error: undefined
			}
		case SET_ORDER_CARS:
			return{
				...state,
				cars: action.payload.data,
				totalCarsCount: action.payload.count
			}
		case SET_CATEGORY:
			return{
				...state,
				category: action.payload
			}
		case SET_ORDERS:
			return{
				...state,
				orders: action.payload.data,
				totalOrderCount: action.payload.count,
				error: undefined
			}
		case SET_SITIES:
			return{
				...state,
				cities: action.payload
			}
		case SET_OREDRS_STATUS: 
			return {
				...state,
				orderStatus: action.payload
			}
		case SET_CURRENT_ORDER_PAGE: 
			return{
				...state,
				currentOrderPage: action.page
			}
		case SET_CURRENT_CARS_PAGE:
			return{
				...state,
				currentCarsPage: action.page
			}
		case SET_PRELOADER:
			return{
				...state,
				isPreloader: action.isPreloader
			}
		case SET_ERROR:
			return {
				...state,
				error: action.error
			}
		case DELETE_ORDER:
			return{
				...state,
				orders: state.orders.filter(el => el.id !== action.orderId)
			}
		case ADD_ORDER:
			return{
				...state,
				orders: state.orders.map(el => {
					if (el.id === action.orderId) {
						return { ...el, orderStatusId: action.status}
					}
					return{...el}
				})
			}
		case CHANGE_CAR:
			debugger 
			return{
				...state,
				car: state.cars.find(el => el.id === action.carId)
			}
		case SET_CHANGED_CAR:
			debugger
			return{
				...state,
				car: action.newCar
			}
		default:
			return state;
	}
};

// Инициализация приложения, логинизация
export const initialazeApp = (userid) => ({ type: INITIAL_APP, userid })
// Payload 
const setOrders = (payload) => ({type: SET_ORDERS, payload})
const setCars = (payload) => ({type: SET_ORDER_CARS, payload})
const setCategory = (payload) => ({ type: SET_CATEGORY, payload })
const setCities = (payload) => ({type: SET_SITIES, payload})
export const auth = (payload) => ({type: SET_USER, payload})
const setOrderStatus = (payload) => ({type: SET_OREDRS_STATUS, payload})
export const setError = (error) => ({type: SET_ERROR, error})
// Пагинация
export const setCurrentOrderPage = (page) => ({ type: SET_CURRENT_ORDER_PAGE, page })
export const setCurrentCarsPage = (page) => ({ type: SET_CURRENT_CARS_PAGE, page })
const setPreloader = (isPreloader) => ({ type: SET_PRELOADER, isPreloader})
const delOrder = (orderId) => ({type: DELETE_ORDER, orderId})
const addOrder = (orderId, status) => ({ type: ADD_ORDER, orderId, status})
// Редактирвование авто
export const changeCar = (carId) => ({type: CHANGE_CAR, carId})
export const setNewChangedCar = (newCar) => ({ type: SET_CHANGED_CAR, newCar })

export const login = (user) => {
	return (dispatch) => {
		worsAPI.isAuth(user)
		.then(response => {
			localStorage.setItem('token', JSON.stringify(response.data))
			localStorage.setItem('active', JSON.stringify(true))
			dispatch(auth(true))
		})
		.catch(error => 
			dispatch(setError(error))
		)
	}
}

export const loadCity = () => {
	return (dispatch) => {
		worsAPI.getCity().then(response => {
			dispatch(setCities(response.data.data))
			worsAPI.getCategory().then(response => {
				dispatch(setCategory(response.data.data))
				worsAPI.getOrderStatus().then(response => {
					dispatch(setOrderStatus(response.data.data))
				})
			})
		})
	}
}	
export const loadOrders = (period, car, city, status, page, limit) => {
	return (dispatch) => {
		dispatch(setPreloader(true))
		let refresh_token = JSON.parse(localStorage.getItem('token')).refresh_token
		let accesstoken = JSON.parse(localStorage.getItem('token')).access_token
		orderAPI.getOrder(period, car, city, status, page, limit, accesstoken)
		.then(response => {
			dispatch(setOrders(response.data))
			dispatch(setPreloader(false))
		}).catch( error =>
			authAPI.refreshToken(refresh_token).then( response => {
				localStorage.setItem('token', JSON.stringify(response.data))
				dispatch(setError(error))
			}) 
		)
	}
}
export const deleteOrder = (orderId) => {
	return (dispatch) => {
		orderAPI.deleteOrder(orderId).then(response =>{
			dispatch(delOrder(orderId))
		})
	}
}
export const changeStatusOrder = (id, status) => {
	return (dispatch) => {
		orderAPI.updateOrder(id, status).then(response => {
			dispatch(addOrder(id, status))
		})
	}
}


export const loadCars = (page, limit, sort, category) =>{
	return (dispatch) => {
		dispatch(setPreloader(true))
		carsAPI.getCars(page, limit, sort, category).then(response => {
			dispatch(setCars(response.data))
			dispatch(setPreloader(false))
		})
	}
}

export const setNewCar = (newCar) => {
	return (dispatch) => {
		carsAPI.setCar(newCar).then(response => {
			dispatch(setNewChangedCar(response.data.data))
		})
	}
}

export const setUpdateCar = (car, id) =>{
	return (dispatch) => {
		carsAPI.updateCars(car, id).then(response => {
			dispatch(setNewChangedCar(response.data.data))
		})
	}
}
export const deleteCar = (id) => {
	return (dispatch)=> {
		carsAPI.deleteCar(id).then(response => {
			dispatch(setNewChangedCar(undefined))
		})
	}
}
export default AdminPageReducer;
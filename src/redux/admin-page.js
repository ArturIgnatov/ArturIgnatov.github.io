import { worsAPI, orderAPI, carsAPI } from "../api/api";

const INITIAL_APP = 'INITIAL_APP'
const SET_ORDERS ='SET_ORDERS'
const SET_CURRENT_ORDER_PAGE = 'SET_CURRENT_ORDER_PAGE'
const SET_CURRENT_CARS_PAGE = 'SET_CURRENT_CARS_PAGE'
const SET_PRELOADER ='SET_PRELOADER'
const SET_CATEGORY = 'SET_CATEGORY'
const SET_SITIES = 'SET_SITIES'
const DELETE_ORDER = 'DELETE_ORDER'
const CHANGE_CAR = 'CHANGE_CAR'
const SET_ORDER_CARS = 'SET_ORDER_CARS'
const SET_CHANGED_CAR = 'SET_CHANGED_CAR'

let initialState = {
	car: undefined,
	cars: [],
	order: {},
	orders:[],
	cities: [],
	userid: null,
	initialazedApp: false,
	isPreloader: false,

	totalCarsCount: 104,
	carsPageSize: 4,
	currentCarsPage: 1,

	totalOrderCount: null,
	ordersPageSize: 4,
	currentOrderPage: 1

}

const AdminPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIAL_APP:
			return {
				...state,
				userid: action.userid,
				initialazedApp: true
			}
		case SET_ORDER_CARS:
			return{
				...state,
				cars: action.payload
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
				totalOrderCount: action.payload.count
			}
		case SET_SITIES:
			return{
				...state,
				cities: action.payload
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
		case DELETE_ORDER:
			return{
				...state,
				orders: state.orders.filter(el => el.id !== action.orderId)
			}
		case CHANGE_CAR: 
			return{
				...state,
				car: state.cars.find(el => el.id === action.carId)
			}
		case SET_CHANGED_CAR:
			debugger
			return{
				...state,
				car: action.newCar
				// car:{
				// 	...state.car,
				// 	name: action.newModel,
				// 	categoryId: state.category.find(el => el.name === action.typeCar),
				// 	colors: action.colors,
				// 	priceMin: action.priceMin,
				// 	priceMax: action.priceMax
				// }
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
// Пагинация на страничке заказов
export const setCurrentOrderPage = (page) => ({ type: SET_CURRENT_ORDER_PAGE, page })
export const setCurrentCarsPage = (page) => ({ type: SET_CURRENT_CARS_PAGE, page })
const setPreloader = (isPreloader) => ({ type: SET_PRELOADER, isPreloader})
const delOrder = (orderId) => ({type: DELETE_ORDER, orderId})

// Редактирвование авто
export const changeCar = (carId) => ({type: CHANGE_CAR, carId})
export const setNewChangedCar = (newCar) => ({ type: SET_CHANGED_CAR, newCar })


export const loadCars = () => {
	return(dispatch) => { 
		worsAPI.getCars().then(response => {
			dispatch(setCars(response.data.data))
			worsAPI.getCategory().then( response => {
				dispatch(setCategory(response.data.data))
				worsAPI.getCity().then(response => {
					dispatch(setCities(response.data.data))
				})
			})
		})
	}
}
	
export const loadOrders = (period, car, city, page, limit) => {
	return (dispatch) => {
		dispatch(setPreloader(true))
		orderAPI.getOrder(period, car, city, page, limit).then(response => {
			dispatch(setOrders(response.data))
			dispatch(setPreloader(false))
		})
	}
}

export const deleteOrder = (orderId) => {
	return (dispatch) => {
		orderAPI.deleteOrder(orderId).then(response =>{
			dispatch(delOrder(orderId))
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
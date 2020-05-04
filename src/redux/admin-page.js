import { worsAPI, orderAPI } from "../api/api";

const INITIAL_APP = 'INITIAL_APP'
const SET_ORDERS ='SET_ORDERS'
const SET_CURRENT_ORDER_PAGE = 'SET_CURRENT_ORDER_PAGE'
const SET_CURRENT_CARS_PAGE = 'SET_CURRENT_CARS_PAGE'
const SET_PRELOADER ='SET_PRELOADER'
const SET_CATEGORY = 'SET_CATEGORY'
const DELETE_ORDER = 'DELETE_ORDER'
const CHANGE_CAR = 'CHANGE_CAR'
const SET_ORDER_CARS = 'SET_ORDER_CARS'
const SET_CHANGED_CAR = 'SET_CHANGED_CAR'

let initialState = {
	car: undefined,
	cars: [],
	order: {},
	orders:[],
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
			return{
				...state,
				car:{
					...state.car,
					name: action.newModel,
					categoryId: { ...state.car.categoryId, name: action.newType },
					colors: action.newColors,
				}
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
// Пагинация на страничке заказов
export const setCurrentOrderPage = (page) => ({ type: SET_CURRENT_ORDER_PAGE, page })
export const setCurrentCarsPage = (page) => ({ type: SET_CURRENT_CARS_PAGE, page })
const setPreloader = (isPreloader) => ({ type: SET_PRELOADER, isPreloader})
const delOrder = (orderId) => ({type: DELETE_ORDER, orderId})

// Редактирвование авто
export const changeCar = (carId) => ({type: CHANGE_CAR, carId})
export const setNewChangedCar = (newModel, newType, newColors, newImg) => ({type: SET_CHANGED_CAR, newModel, newType, newColors, newImg })


export const loadCars = () => {
	return(dispatch) => { 
		worsAPI.getCars().then(response => {
			dispatch(setCars(response.data.data))
			worsAPI.getCategory().then( response => {
				dispatch(setCategory(response.data.data))
			})
		})
	}
}
	
export const loadOrders = (page, limit) => {
	return (dispatch) => {
		dispatch(setPreloader(true))
		orderAPI.getOrder(page, limit).then(response => {
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

export default AdminPageReducer;
import { worsAPI, orderAPI } from "../api/api";

const INITIAL_APP = 'INITIAL_APP'
const SET_ORDERS ='SET_ORDERS'
const SET_CURRENT_ORDER_PAGE = 'SET_CURRENT_ORDER_PAGE'
const SET_PRELOADER ='SET_PRELOADER'
const DELETE_ORDER = 'DELETE_ORDER'

let initialState = {
	car: {},
	order: {},
	orders:[],
	userid: null,
	initialazedApp: false,
	isPreloader: false,

	totalCarsCount: 8,
	carsPageSize: 8,
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
		default:
			return state;
	}
};

const setOrders = (payload) => ({type: SET_ORDERS, payload})
export const initialazeApp = (userid) => ({ type: INITIAL_APP, userid })
export const setCurrentOrderPage = (page) => ({type: SET_CURRENT_ORDER_PAGE, page})
const setPreloader = (isPreloader) => ({ type: SET_PRELOADER, isPreloader})
const delOrder = (orderId) => ({type: DELETE_ORDER, orderId})

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
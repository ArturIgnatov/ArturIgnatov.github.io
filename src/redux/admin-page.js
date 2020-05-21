
import{
	SET_ORDERS,
	SET_CURRENT_ORDER_PAGE,
	SET_CURRENT_CARS_PAGE,
	SET_PRELOADER,
	SET_CATEGORY,
	SET_SITIES,
	SET_USER,
	SET_ERROR,
	DELETE_ORDER,
	ADD_ORDER,
	CHANGE_CAR,
	SET_ORDER_CARS,
	SET_CHANGED_CAR,
	SET_OREDRS_STATUS,
} from './types-adminPage'

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

export default AdminPageReducer;
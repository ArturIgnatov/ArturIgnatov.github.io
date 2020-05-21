import {
	INITIAL_APP,
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

export const initialazeApp = (userid) => ({ type: INITIAL_APP, userid })
export const setOrders = (payload) => ({ type: SET_ORDERS, payload })
export const setCars = (payload) => ({ type: SET_ORDER_CARS, payload })
export const setCategory = (payload) => ({ type: SET_CATEGORY, payload })
export const setCities = (payload) => ({ type: SET_SITIES, payload })
export const auth = (payload) => ({ type: SET_USER, payload })
export const setOrderStatus = (payload) => ({ type: SET_OREDRS_STATUS, payload })
export const setError = (error) => ({ type: SET_ERROR, error })
export const setCurrentOrderPage = (page) => ({ type: SET_CURRENT_ORDER_PAGE, page })
export const setCurrentCarsPage = (page) => ({ type: SET_CURRENT_CARS_PAGE, page })
export const setPreloader = (isPreloader) => ({ type: SET_PRELOADER, isPreloader })
export const delOrder = (orderId) => ({ type: DELETE_ORDER, orderId })
export const addOrder = (orderId, status) => ({ type: ADD_ORDER, orderId, status })
export const changeCar = (carId) => ({ type: CHANGE_CAR, carId })
export const setNewChangedCar = (newCar) => ({ type: SET_CHANGED_CAR, newCar })
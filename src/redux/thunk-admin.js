import { worsAPI, orderAPI, carsAPI, authAPI } from "../api/api";
import {
	auth,
	setCities,
	setError,
	setCategory,
	setOrderStatus,
	setPreloader,
	setOrders,
	delOrder,
	addOrder,
	setCars,
	setNewChangedCar
} from './action-admin'

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
			}).catch(error =>
				authAPI.refreshToken(refresh_token).then(response => {
					localStorage.setItem('token', JSON.stringify(response.data))
					dispatch(setError(error))
				})
			)
	}
}

export const deleteOrder = (orderId) => {
	return (dispatch) => {
		orderAPI.deleteOrder(orderId).then(response => {
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


export const loadCars = (page, limit, sort, category) => {
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

export const setUpdateCar = (car, id) => {
	return (dispatch) => {
		carsAPI.updateCars(car, id).then(response => {
			dispatch(setNewChangedCar(response.data.data))
		})
	}
}
export const deleteCar = (id) => {
	return (dispatch) => {
		carsAPI.deleteCar(id).then(response => {
			dispatch(setNewChangedCar(undefined))
		})
	}
}
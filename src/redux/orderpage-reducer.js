// import elantra from '../assets/images/car/elantra.png';
// import i30 from '../assets/images/car/i30n.png';
// import creta from '../assets/images/car/creta.png';
// import sonata from '../assets/images/car/sonata.png';
import moment from 'moment'
import { worsAPI, orderAPI } from '../api/api';

// Type for location
let SELECT_CITY = 'SELECT_CITY'
let SELECT_POINT ='SELECT_POINT'

// Type for car
let SELECT_CARS = 'SELECT_CARS'
let FILTER_CAR = 'FILTER_CAR'

// Type for more
let SELECT_COLOR = 'SELECT_COLOR'
let SET_DATE_FROM = 'SET_DATE_FROM'
let SET_DATE_TO = 'SET_DATE_TO'
let SELECT_RATE = 'SELECT_RATE'
let SELECT_SERVICE = 'SELECT_SERVICE'

let UPDATE_TIME = 'UPDATE_TIME'

let CHANGE_STEP = 'CHANGE_STEP'
let CURREN_STEP = 'CURREN_STEP'

let TO_ORDER = 'TO_ORDER'
let RPLACE_ORDER = 'RPLACE_ORDER'
let CLOSE_MODAL = 'CLOSE_MODAL'
let CONFIRM_ORDER = 'CONFIRM_ORDER'

let SET_CARS = 'SET_CARS'
let SET_CITIES = 'SET_CITIES'
let SET_POINTS =  'SET_POINTS'
let SET_RATES = 'SET_RATES'
let SET_CATEGORIES = 'SET_CATEGORIES'
let SET_ORDER_STATUS = 'SET_ORDER_STATUS'
let SET_ORDER = 'SET_ORDER'
let SET_PRELODER = 'SET_PRELODER'
// let newDate = moment().format().slice(0, 16)



let initialState = {
	menu:[
		{ id: 1, title: 'Местоположение', path:'/docs/orderpage', isActive: true},
		{ id: 2, title: 'Модель', path: '/docs/orderpage/model', isActive: false},
		{ id: 3, title: 'Дополнительно', path: '/docs/orderpage/more', isActive: false },
		{ id: 4, title: 'Итого', path: '/docs/orderpage/total', isActive: false },
	],
	location:{
		cityId:[],
		pointId:[],
	},
	cars: [],
	category: [],
	rates: [],
	orderStatus:[],
	services:[
		{ id: 1, title: 'Полный бак', price: 500, checked: false },
		{ id: 2, title: 'Детское кресло', price: 200, checked: false },
		{ id: 3, title: 'Правый руль', price: 1600, checked: false }
	],
	preorder:{
		orderStatusId: { id: '5e26a191099b810b946c5d89', name: 'new'},
		cityId: '',
		pointId: '', 
		carId: '',
		color: '',
		dateFrom: '',
		dateTo: '',
		price: 4300,
		rateId: '',
		isFullTank: false,
		isNeedChildChair: false,
		isRightWheel: false,
	},
	totalPrice: 0,
	isModal: false,
	step: 1,
	isFetching: true,
	order: ''
}
const OrderPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CARS:
			return {
				...state,
				cars: action.carsArray
			}
		case SET_CITIES:
			return {
				...state,
				location: { ...state.location, cityId: action.cityArray}
			}
		case SET_POINTS:
			return{
				...state,
				location: {...state.location, pointId: action.pointArray}
			}
		case SET_RATES:
			return{
				...state,
				rates: action.ratesArray
			}
		case SET_CATEGORIES:
			return{
				...state,
				category: action.payload
			}
		case SET_ORDER_STATUS:
			return{
				...state,
				orderStatus: action.payload
			}
		case SELECT_CITY:
			return {
				...state,
				preorder: { 
					...state.preorder, 
					cityId: action.cityName === ''? '' : state.location.cityId.find(el => el.name === action.cityName)
				}
			}
		case SELECT_POINT:
			// let foundPoint = state.location.pointId.find(el => el.address === action.pointName)
			// // Порввить делит
			return{
				...state,
				preorder: { 
					...state.preorder, 
					pointId: action.pointName === '' ? '' : state.location.pointId.find(el => el.address === action.pointName)
				}
			}
		case SELECT_CARS:
			let foundCar = state.cars.find(el => el.id === action.id)
			// let foundCarChanged = {...foundCar}
			// delete foundCarChanged.selected
			// delete foundCarChanged.createdAt
			// delete foundCarChanged.updatedAt
			// delete foundCarChanged.colors
			return {
				...state,
				cars: state.cars.map(car => {
					if (car.id === action.id) {
						return { ...car, selected: foundCar.selected === true ? false : true}
					}
					return {...car, selected: false}
				}),
				preorder: { 
					...state.preorder, 
					carId: foundCar.id === state.preorder.carId.id ? '' : foundCar
				} 
			}
		case FILTER_CAR:
			return {
				...state,
				category: state.category.map( el => {
					if (el.id === action.id) {
						return { ...el, checked: true}
					}
					return { ...el, checked: false }
				})
			}
		case SELECT_COLOR:
			return{
				...state,
				preorder: { ...state.preorder, color:  action.name}
			}
		case SET_DATE_FROM:
			return {
				...state,
				preorder: { ...state.preorder, dateFrom: action.newDate}
			}
		case SET_DATE_TO:
			return {
				...state,
				preorder: { ...state.preorder, dateTo: action.newDate }
			}
		case SELECT_RATE:
			let foundRate = state.rates.find(el => el.id === action.id)
			return{
				...state,
				rates: state.rates.map(el => {
					if (el.id === action.id) {
						return {...el, checked: true}
					}
					return {...el, checked: false}
				}),
				preorder: {
					...state.preorder, 
					rateId: {
						id: foundRate.id,
						name: foundRate.price,
						rateTypeId: {...foundRate.rateTypeId}
					} 
				}
			}
		case SELECT_SERVICE:
			return{
				...state,
				services: state.services.map (el => {
					if (el.id === action.id) {
						return { ...el, checked: state.services[action.id - 1].checked === true ? false : true}
					}
					return {...el}
				}),
				preorder:{
					...state.preorder,
					isFullTank: action.id === 1 ? !state.preorder.isFullTank : state.preorder.isFullTank,
					isNeedChildChair: action.id === 2 ? !state.preorder.isNeedChildChair : state.preorder.isNeedChildChair,
					isRightWheel: action.id === 3 ? !state.preorder.isRightWheel : state.preorder.isRightWheel
				}
			}
		case UPDATE_TIME:
			return{
				...state,
				date: { ...state.date, with: moment().format().slice(0, 16)}
			}
		case CHANGE_STEP:
			return{
				...state,
				step: state.step === 5 - 1 ? state.step = 0 : state.step + 1, 
				menu: state.menu.map(el => {
					if (el.id === state.step + 1) {
						return{...el, isActive: true}
					}
					return{...el}
				})
			}
		case CURREN_STEP:
			return{
				...state,
				step: action.number + 1,
				menu: state.menu.map(el => {
					if (el.id > action.number + 1) {
						return { ...el, isActive: false }
					}
					return { ...el}
				}),
				cars: action.number + 1 === 1 ? state.cars.map( el => {
					return {...el, selected: false}
				}) : state.cars, 
				rates: action.number + 1 === 2 ? state.rates.map(el => {
					return {...el, checked: false}
				}) : state.rates,
				services: action.number + 1 === 2 ? state.services.map( el => {
					return {...el, checked: false}
				}) : state.services,
				preorder: action.number + 1 === 1 ? {
					cityId: state.preorder.cityId,
					pointId: state.preorder.pointId,
					carId: ''

				} : action.number + 1 === 2 ? {
					cityId: state.preorder.cityId,
					pointId: state.preorder.pointId,
					carId: state.preorder.carId
				} : { ...state.preorder },
			}
		case TO_ORDER:
			return{
				...state,
				isModal: !state.isModal
			}
		case CLOSE_MODAL:
			return{
				...state,
				isModal: false
			}
		case CONFIRM_ORDER:
			return {
				...state,
				isModal: false,
				step: state.step + 1,
			}
		case RPLACE_ORDER:
			return{
				...state,
				step: state.step - 1,
				order: ''
			}
		case SET_PRELODER: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case SET_ORDER : {
			return {
				...state,
				order: action.payload
			}
		}
		default:
			return state
	}
};
// Payload с сервера
const setCars = (carsArray) => ({ type: SET_CARS, carsArray})
const setCity = (cityArray) => ({ type: SET_CITIES, cityArray })
const setPoints = (pointArray) => ({ type: SET_POINTS, pointArray })
const setRates = (ratesArray) => ({ type: SET_RATES, ratesArray})
const setCategories = (payload) => ({ type: SET_CATEGORIES, payload})
const setOrderStatus = (payload) => ({type: SET_ORDER_STATUS, payload}) 
const setPreloader = (isFetching) => ({ type: SET_PRELODER, isFetching})
const setOrder = (payload) => ({type: SET_ORDER, payload})
// Диспачи для location
export const selectCity = (cityName) => ({ type: SELECT_CITY, cityName })
export const selectPoint = (pointName) => ({ type: SELECT_POINT, pointName })


// Диспатчи для models
export const selectCars = (carId, carModel) => ({ type: SELECT_CARS, id: carId, model: carModel })
export const handlerFilterCarRadio = (idRadio) => ({ type: FILTER_CAR, id: idRadio})

// Дипатчи для дополнительно
// Выбрать цвет
export const selectColorCarRadio = (name) => ({ type: SELECT_COLOR, name })
// Установить дату
export const setDateFrom = (newDate) => ({ type: SET_DATE_FROM, newDate})
export const setDateTo = (newDate) => ({ type: SET_DATE_TO, newDate})
// Выбор тарифа
export const selectRateRadio = (idRadio, title) => ({ type: SELECT_RATE, id: idRadio, city: title })
// Установить сервисов
export const selectServicesCheckbox = (idCheckbox, title) => ({ type: SELECT_SERVICE, id: idCheckbox, city: title })

// Шаги 
export const currentStep = (number) => ({ type: CURREN_STEP, number })
export const changeStep = (idBtn) => ({ type: CHANGE_STEP, id: idBtn }) 
export const updateTime = (newTime) => ({type: UPDATE_TIME})

// Управление заказом
export const toOrder = () => ({ type: TO_ORDER })
export const closeModal = () => ({ type: CLOSE_MODAL })
export const confirmOrder = () => ({ type: CONFIRM_ORDER})
export const replaceOrder = () => ({ type: RPLACE_ORDER})


export const sendOrder = (order) => {
	return (dispatch) => {
		orderAPI.sendOrder(order).then(response =>{
			dispatch(setOrder(response.data.data))
			dispatch(confirmOrder())
		})
	}
}

export const cancelOrder = (id, status) => {
	return ( dispatch ) => {
		orderAPI.updateOrder(id, status).then(response => {
			dispatch(setOrder(response.data.data))
			dispatch(replaceOrder())
		})
	}
}


export const fetchPayload = () => {
	return (dispatch) => {
		dispatch(setPreloader(true))
		worsAPI.getCars().then(response => {
			let arrayCars = response.data.data.map(key => {
				return {
					...key,
					selected: false
				}
			})
			dispatch(setCars(arrayCars))
			worsAPI.getCategory().then(response => {
				let arrayCategory = response.data.data.map(el => {
					return {
						id: el.id,
						name: el.name,
						checked: false
					}
				})
				arrayCategory.unshift({ id: '1', name: 'Все модели', checked: true })
				dispatch(setCategories(arrayCategory))
				worsAPI.getCity().then(response => {
					let arrayCity = response.data.data.map(el => {
						return {
							id: el.id,
							name: el.name
						}
					})
					dispatch(setCity(arrayCity))
					worsAPI.getPoints().then(response => {
						let pointArray = response.data.data.map(el => {
							return {
								id: el.id,
								cityName: el.cityId.name,
								address: el.address,
								name: el.name,
							}
						})
						dispatch(setPoints(pointArray))
						worsAPI.getRates().then(response => {
							let ratesArray = response.data.data.map(el => {
								return {
									id: el.id,
									price: el.price,
									rateTypeId: el.rateTypeId,
									checked: false
								}
							})
							dispatch(setRates(ratesArray))
							worsAPI.getOrderStatus().then(response => {
								dispatch(setOrderStatus(response.data.data))
								dispatch(setPreloader(false))
							})
						})
					})
				})
			})
		})
	}
}


export default OrderPageReducer;
import elantra from '../assets/images/car/elantra.png';
import i30 from '../assets/images/car/i30n.png';
import creta from '../assets/images/car/creta.png';
import sonata from '../assets/images/car/sonata.png';
import moment from 'moment'
import { worsAPI } from '../api/api';

// Type for location
let CHANGE_CITY_TEXT = 'CHANGE_CITY_TEXT'
let CHANGE_POINT_TEXT = 'CHANGE_POINT_TEXT'
let SELECT_CITY = 'SELECT_CITY'
let SELECT_POINT ='SELECT_POINT'
let CLEAR_INPUT = 'CLEAR_INPUT'
let CLEAR_INPUT_POINT = 'CLEAR_INPUT_POINT'
let TOGGLE_CITY_BOX = 'TOGGLE_CITY_BOX'
let TOGGLE_POINT_BOX = 'TOGGLE_POINT_BOX'

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
let newDate = moment().format().slice(0, 16)



let initialState = {
	menu:[
		{ id: 1, title: 'Местоположение', path:'/docs/orderpage', isActive: true},
		{ id: 2, title: 'Модель', path: '/docs/orderpage/model', isActive: true},
		{ id: 3, title: 'Дополнительно', path: '/docs/orderpage/more', isActive: true },
		{ id: 4, title: 'Итого', path: '/docs/orderpage/total', isActive: false },
	],
	location:{
		cityId:[],
		pointId:[],
		cityText: '',
		pointText: '',
		cityBoxVisible: false,
		pointBoxVisible: false,
	},
	cars: [],
	// 	{ 
	// 		categoryId: { 
	// 			name: 'Эконом', 
	// 			id: '5e25c98d099b810b946c5d62', 
	// 			description: ''
	// 		},
	// 		colors: ['голубой', 'красный', 'ораньжевый'],
	// 		createdAt: 1579534861996,
	// 		updatedAt: 1587655394157,
	// 		description: '',
	// 		id: '5e25ca0d099b810b946c5d65',
	// 		name: 'Hyundai, Elantra',
	// 		priceMax: 25000,
	// 		prixeMin: 12000,
	// 		thumbnail: { 
	// 			mimetype: 'image/png',
	// 			originalname: '825e7de08c4523e9a81ebe8d0ad04616.png',
	// 			path:'/files/5ea1b2e1099b810b946c62e2_825e7de08c4523e9a81ebe8d0ad04616.png', 
	// 			size: 98851
	// 		}
	// 	}
	// ],
	filterCar:[
		{ id: 1, title: 'Все модели', checked: true },
		{ id: 2, title: 'Эконом', checked: false },
		{ id: 3, title: 'Премиум', checked: false }
	],
	colors:[
		{ id: 1, title: 'Любой', checked: false},
		{ id: 2, title: 'Красный', checked: false},
		{ id: 3, title: 'Голубой', checked: false}
	],
	date:{
		min: newDate,
		with: newDate,
		by: ''
	},
	rate:[
		{ id: 1, title: 'Поминутно', price: 7, unit:'₽/мин', checked: false },
		{ id: 2, title: 'На сутки', price: 1999, unit:'₽/сутки', checked: false },
	],
	services:[
		{ id: 1, title: 'Полный бак', price: 500, checked: false },
		{ id: 2, title: 'Детское кресло', price: 200, checked: false },
		{ id: 3, title: 'Правый руль', price: 1600, checked: false }
	],
	preorder:{
		orderStatusId: {},
		cityId: {},
		pointId: {}, 
		carId: {},
		color: '',
		dateFrom: 0,
		dateTo: 0,
		rateId: {},
		ifFullTank: false,
		isNeedChildChair: false,
		isRightWheel: false,
	},
	currentId: 0,
	totalPrice: 0,
	isModal: false,
	step: 1,
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
		case CHANGE_CITY_TEXT:
			return {
				...state,
				location: { ...state.location, cityText: action.text, cityBoxVisible: true, pointBoxVisible: false, pointText: ''},
				preorder: { ...state.preorder, sity: action.text },
			}
		case SELECT_CITY:
			return {
				...state,
				location: { ...state.location, cityText: action.text, pointText: ''},
				preorder: { ...state.preorder, cityId: state.location.cityId.find(el => el.name === action.text)}
			}
		case SELECT_POINT:
			let foundPoint = state.location.pointId.find(el => el.address === action.text)
			delete foundPoint.cityName
			return{
				...state,
				location: { ...state.location, pointText: action.text },
				preorder: { 
					...state.preorder, 
					pointId: foundPoint
				}
			}
		case CLEAR_INPUT:
			return {
				...state,
				location: { ...state.location, cityText: '',  pointText: ''},
				preorder: { ...state.preorder, sity: action.text }
			}
		case CLEAR_INPUT_POINT:
			return{
				...state,
				location: { ...state.location, pointText: '', },
				preorder: { ...state.preorder, point: action.text }
			}
		case CHANGE_POINT_TEXT:
			return {
				...state,
				location: { ...state.location, pointText: action.text, pointBoxVisible: true},
				preorder: { ...state.preorder, point: action.text },
			}
		case TOGGLE_CITY_BOX:
			return {
				...state,
				location: { ...state.location, cityBoxVisible: state.location.cityBoxVisible === true ? false : true, pointBoxVisible: false},
			}
		case TOGGLE_POINT_BOX:
			return {
				...state,
				location: { ...state.location, pointBoxVisible: state.location.pointBoxVisible === true ? false : true },
			}
		case SELECT_CARS:
			let foundCar = state.cars.find(el => el.id === action.id)
			let foundCarChanged = {...foundCar}
			delete foundCarChanged.selected
			delete foundCarChanged.createdAt
			delete foundCarChanged.updatedAt
			delete foundCarChanged.colors
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
					carId: foundCarChanged
				} 
			}
		case FILTER_CAR:
			return {
				...state,
				filterCar: state.filterCar.map( el => {
					if (el.id === action.id) {
						return { ...el, checked: true}
					}
					return { ...el, checked: false }
				})
			}
		case SELECT_COLOR:
			return{
				...state,
				colors: state.colors.map(el =>{
					if (el.id === action.id) {
						return {...el, checked: true}
					}
					return { ...el, checked: false}
				}),
				preorder: {...state.preorder, colorCar:  action.city}
			}
		case SET_DATE_FROM:
			return {
				...state,
				preorder: { ...state.preorder, dateFrom: action.newDate }
			}
		case SET_DATE_TO:
			return {
				...state,
				preorder: { ...state.preorder, dateTo: action.newDate }
			}
		case SELECT_RATE:
			return{
				...state,
				rate: state.rate.map(el => {
					if (el.id === action.id) {
						return {...el, checked: true}
					}
					return {...el, checked: false}
				}),
				preorder: {...state.preorder, rate: state.rate[action.id - 1].title}
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
					ifFullTank: action.id === 1 ? !state.preorder.ifFullTank : state.preorder.ifFullTank,
					isNeedChildChair: action.id === 2 ? !state.preorder.isNeedChildChair : state.preorder.isNeedChildChair,
					isRightWheel: action.id === 3 ? !state.preorder.isRightWheel : state.preorder.isRightWheel
				}
				// preorder: { ...state.preorder, services: state.services[action.id - 1].checked === true ? '' : [...state.preorder.services , { ...state.services[action.id - 1], checked: true }] }
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
				})
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
				order: {...state.preorder}
			}
		case RPLACE_ORDER:
			return{
				...state,
				step: state.step - 1,
				order: ''
			}
		default:
			return state
	}
};

const setCars = (carsArray) => ({ type: SET_CARS, carsArray})
const setCity = (cityArray) => ({ type: SET_CITIES, cityArray })
const setPoints = (pointArray) => ({ type: SET_POINTS, pointArray })


export const currentStep = (number) => ({ type: CURREN_STEP, number }) 
// Диспачи для location
export const changeTextValue = (newText) => ({ type: CHANGE_CITY_TEXT, text: newText })
export const selectSity = (cityName) => ({ type: SELECT_CITY, text: cityName })
export const clearInput = () => ({ type: CLEAR_INPUT })
export const toggleCityBox = () => ({ type: TOGGLE_CITY_BOX })
export const updateTextPoint = (newText) => ({ type: CHANGE_POINT_TEXT, text: newText })
export const togglePointBox = () => ({ type: TOGGLE_POINT_BOX })
export const clearInputPoint = () => ({ type: CLEAR_INPUT_POINT })
export const selectPoint = (adress) => ({ type: SELECT_POINT, text: adress })


// Диспатчи для models
export const selectCars = (carId, carModel) => ({ type: SELECT_CARS, id: carId, model: carModel })
export const handlerFilterCarRadio = (idRadio) => ({ type: FILTER_CAR, id: idRadio})

// Дипатчи для дополнительно
export const selectColorCarRadio = (idRadio, title) => ({ type: SELECT_COLOR, id: idRadio, city: title })
// Установить дату
export const setDateFrom = (newDate) => ({ type: SET_DATE_FROM, newDate})
export const setDateTo = (newDate) => ({ type: SET_DATE_TO, newDate})
export const selectRateRadio = (idRadio, title) => ({ type: SELECT_RATE, id: idRadio, city: title })
export const selectServicesCheckbox = (idCheckbox, title) => ({ type: SELECT_SERVICE, id: idCheckbox, city: title })


export const updateTime = (newTime) => ({type: UPDATE_TIME})


export const changeStep = (idBtn) => ({ type: CHANGE_STEP, id: idBtn })

export const toOrder = () => ({ type: TO_ORDER })
export const closeModal = () => ({ type: CLOSE_MODAL })
export const confirmOrder = () => ({ type: CONFIRM_ORDER})
export const replaceOrder = () => ({ type: RPLACE_ORDER})




export const loadCars = () => {
	return (dispatch) => {
		worsAPI.getCars().then(response => {
			let arrayCars = response.data.data.map( key => {
				return{
					...key,
					selected:false
				}
			})
			dispatch(setCars(arrayCars))
		})
	}
}

export const loadCity = () => {
	return (dispatch) => {
		worsAPI.getCity().then(response => {
			let arrayCity = response.data.data.map( el => {
				return{
					id: el.id,
					name: el.name
				}
			})
			dispatch(setCity(arrayCity))
		})
	}
}
export const loadPoint = () => {
	return (dispatch) => {
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
		})
	}
}

export default OrderPageReducer;
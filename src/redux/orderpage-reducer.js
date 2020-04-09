import elantra from '../assets/images/car/elantra.png';
import i30 from '../assets/images/car/i30n.png';
import creta from '../assets/images/car/creta.png';
import sonata from '../assets/images/car/sonata.png';
import moment from 'moment'

// Type for location
let CHANGE_CITY_TEXT = 'CHANGE_CITY_TEXT'
let SELECT_CITY = 'SELECT_CITY'
let CLEAR_INPUT = 'CLEAR_INPUT'
let TOGGLE_CITY_BOX = 'TOGGLE_CITY_BOX'

// Type for car
let SELECT_CARS = 'SELECT_CARS'
let FILTER_CAR = 'FILTER_CAR'

// Type for more
let SELECT_COLOR = 'SELECT_COLOR'
let CHANGE_DATE_WITH = 'CHANGE_DATE_WITH'
let CHANHE_DATE_BY = 'CHANHE_DATE_BY'
let SELECT_RATE = 'SELECT_RATE'
let SELECT_SERVICE = 'SELECT_SERVICE'

let UPDATE_TIME = 'UPDATE_TIME'

let dateNow = moment().format().slice(0, 16)

let initialState = {
	menu:[
		{ id: 1, title: 'Местоположение', path:'/docs/orderpage', isActive: true},
		{ id: 2, title: 'Модель', path: '/docs/orderpage/model', isActive: true},
		{ id: 3, title: 'Дополнительно', path: '/docs/orderpage/more', isActive: true },
		{ id: 4, title: 'Итого', path: '/docs/orderpage/total', isActive: true },
	],
	location:{
		city:[
			{ id: 1, cityName: 'Ульяновск', poits: [{ id: 1, pointName: 'Пункт №1', adress: 'ул.Макарова 37' }, { id: 2, pointName: 'Пункт №2', adress: 'ул.Ленина 4а' }] },
			{ id: 2, cityName: 'Пенза', poits: [{ id: 1, pointName: 'Пункт №1', adress: 'ул."Энгельса 134' }, { id: 2, pointName: 'Пункт №2', adress: 'ул.Гоголя 3в' }] },
			{ id: 3, cityName: 'Саранск' },
			{ id: 4, cityName: 'Самара' },
			{ id: 5, cityName: 'Уфа' },
			{ id: 6, cityName: 'Тольятти' }
		],
		cityText: '',
		cityBoxVisible: false
	},
	cars:[
		{ id: 1, number: 'K 387 MH 73', mark: 'Hyndai', model: 'ELANTRA', price: 12000, subtitle: '12 000- 25 000', img: elantra, selected: false},
		{ id: 2, number: 'Н 432 СА 73', mark: 'Hyndai', model: 'i30 N', price: 7000, subtitle: '10 000- 22 000', img: i30, selected: false},
		{ id: 3, number: 'Л 924 МР 73', mark: 'Hyndai', model: 'CRETA', price: 12000, subtitle: '12 000- 25 000', img: creta, selected: false},
		{ id: 4, number: 'K 282 КС 73', mark: 'Hyndai', model: 'SONATA', price: 7000, subtitle: '10 000- 22 000', img: sonata, selected: false}
	],
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
		min: dateNow,
		with: dateNow,
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
		sity: '',
		point:'',
		car:'',
		colorCar:'',
		dataThis: dateNow,
		dataBy: '',
		rate: '',
		services:[],
		test: new Date().toLocaleTimeString()
	},
	order:[],
	currentId: 0,
	totalPrice: 0,
}
const OrderPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_CITY_TEXT:
			return {
				...state,
				location: { ...state.location, cityText: action.text, cityBoxVisible: true},
				preorder: { ...state.preorder, sity: action.text }
			}
		case SELECT_CITY:
			return {
				...state,
				location: { ...state.location, cityText: action.text},
				preorder: { ...state.preorder, sity: action.text }
			}
		case CLEAR_INPUT:
			return {
				...state,
				location: { ...state.location, cityText: '' },
				preorder: { ...state.preorder, sity: action.text }
			}
		case TOGGLE_CITY_BOX:
			return {
				...state,
				location: { ...state.location, cityBoxVisible: state.location.cityBoxVisible === true ? false : true},
			}
		case SELECT_CARS:
			return {
				...state,
				cars: state.cars.map(car => {
					if (car.id === action.id) {
						return { ...car, selected: state.cars[action.id - 1].selected === true ? false : true}
					}
					return {...car, selected: false}
				}),
				preorder: { ...state.preorder, car: state.cars[action.id - 1].selected === true ? '' : { ...state.cars[action.id - 1], selected: true }}
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
		case CHANGE_DATE_WITH:
			return {
				...state,
				date: {...state.date, with: action.date},
				preorder: { ...state.preorder, dataThis: action.date }
			}
		case CHANHE_DATE_BY:
			return {
				...state,
				date: { ...state.date, by: action.date },
				preorder: { ...state.preorder, dataBy: action.date }
			}
		case SELECT_RATE:
			return{
				...state,
				rate: state.rate.map(el => {
					if (el.id === action.id) {
						return {...el, checked: true}
					}
					return {...el, checked: false}
				})
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
				// preorder: {
				// 	...state.preorder,
				// 	services: state.services.map( el => {
				// 		if (el.checked) {
				// 			return el.title
				// 		}
				// 		return ''
				// 	})
				// } 
			}
		case UPDATE_TIME:
			return{
				...state,
				date: { ...state.date, with: action.date}
			}
		default:
			return state
	}
};

// Диспачи для location
export const changeTextValue = (newText) => ({ type: CHANGE_CITY_TEXT, text: newText })
export const selectSity = (cityName) => ({ type: SELECT_CITY, text: cityName })
export const clearInput = () => ({ type: CLEAR_INPUT })
export const toggleCityBox = () => ({ type: TOGGLE_CITY_BOX })

// Диспатчи для models
export const selectCars = (carId, carModel) => ({ type: SELECT_CARS, id: carId, model: carModel })
export const handlerFilterCarRadio = (idRadio) => ({ type: FILTER_CAR, id: idRadio})

// Дипатчи для дополнительно
export const selectColorCarRadio = (idRadio, title) => ({ type: SELECT_COLOR, id: idRadio, city: title })
export const changeDateWithValue = (newDate) => ({ type: CHANGE_DATE_WITH, date: newDate})
export const changeDateByValue = (newDate) => ({ type: CHANHE_DATE_BY, date: newDate})
export const selectRateRadio = (idRadio, title) => ({ type: SELECT_RATE, id: idRadio, city: title })
export const selectServicesCheckbox = (idCheckbox, title) => ({ type: SELECT_SERVICE, id: idCheckbox, city: title })


export const updateTime = (newTime) => ({type: UPDATE_TIME, date: newTime})
export default OrderPageReducer;
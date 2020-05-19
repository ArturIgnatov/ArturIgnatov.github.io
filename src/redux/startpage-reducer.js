import slideOne from '../assets/images/slider/1-min.png';
import slideTwo from '../assets/images/slider/2-min.png';
import slideThree from '../assets/images/slider/3-min.png';
import slideFour from '../assets/images/slider/4-min.png';

const NEXT = 'NEXT';
const PREV = 'PREV';
const CURRENT = 'CURRENT'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const SET_LANGUAGE = 'SET_LANGUAGE'

let initialState = {
	slides: [
		{ id: 1, colorBtn: 'green' , img: slideOne, title: 'Бесплатная парковка', subtitle: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.' },
		{ id: 2, colorBtn: 'blue', img: slideTwo, title: 'Страховка', subtitle: 'Полная страховка страховка автомобиля'},
		{ id: 3, colorBtn: 'red', img: slideThree, title: 'Бензин', subtitle: 'Полный бак на любой заправке города за наш счёт'},
		{ id: 4, colorBtn: 'purple', img: slideFour, title: 'Обслуживание', subtitle: 'Автомобиль проходит еженедельное ТО'}
	],
	dots:[
		{ id: 0 },
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
	],
	menu:[
		{ id: 0, title: 'Парковка' },
		{ id: 1, title: 'Страховка' },
		{ id: 2, title: 'Бензин' },
		{ id: 3, title: 'Обслуживание' }
	],
	currentId: 0,
	lang:'ru',
	modalActive: false 
}
const StartPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEXT:
			return {
				...state,
				currentId: state.currentId === state.slides.length - 1 ? state.currentId = 0 : state.currentId + 1  
			}
		case PREV:
			return {
				...state,
				currentId: state.currentId === 0 ? state.currentId = state.slides.length - 1 : state.currentId - 1
			}
		case CURRENT:
			return {
				...state,
				dots: state.dots.map(el =>{
					return {...el, active: false }
				}).map(el => {
					if (el.id === action.slideId + 1) {
						return {...el, active: true}
					}
					return el
				}),
				currentId: action.slideId
			}
		case OPEN_MODAL:
			return {
				...state,
				modalActive: true
			}
		case CLOSE_MODAL:
			return {
				...state,
				modalActive: false
			}
		case SET_LANGUAGE:
			return {
				...state,
				lang: action.lang
			}
		default:
			return state;
	}
};

export const prevSlideAC = () => ({ type: PREV })
export const nextSlideAC = () => ({ type: NEXT })
export const openModal = () => ({ type: OPEN_MODAL })
export const closeModal = () => ({ type: CLOSE_MODAL })
export const currentSlideAC =(slideId) => ({ type: CURRENT, slideId })
export const setLanguage = (lang) => ({type: SET_LANGUAGE, lang}) 

export default StartPageReducer;
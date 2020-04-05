import slideOne from '../assets/images/slider/1-min.png';
import slideTwo from '../assets/images/slider/2-min.png';
import slideThree from '../assets/images/slider/3-min.png';
import slideFour from '../assets/images/slider/4-min.png';

const NEXT = 'NEXT';
const PREV = 'PREV';
const CURRENT = 'CURRENT'

let initialState = {
	slides: [
		{ id: 1, img: slideOne, title: 'Бесплатный парковка', subtitle: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.' },
		{ id: 2, img: slideTwo, title: 'Страховка', subtitle: 'Полная страховка страховка автомобиля' },
		{ id: 3, img: slideThree, title: 'Бензин', subtitle: 'Полный бак на любой заправке города за наш счёт' },
		{ id: 4, img: slideFour, title: 'Обслуживание', subtitle: 'Автомобиль проходит еженедельное ТО' }
	],
	dots:[
		{ id: 1, active: true },
		{ id: 2, active: false },
		{ id: 3, active: false },
		{ id: 4, active: false },
	],
	currentId: 0
}
const slidersReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEXT:
			return {
				...state,
				currentId: state.currentId === state.slides.length - 1 ? state.currentId = 0 : state.currentId + 1  
			}
			debugger
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
		default:
			return state;
	}
};


export const prevSlideAC = () => ({ type: PREV})
export const nextSlideAC = () => ({ type: NEXT})
export const currentSlideAC =(slideId) => ({type: CURRENT, slideId})  

export default slidersReducer;
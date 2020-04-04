import slideOne from '../assets/images/slider/1-min.png';
import slideTwo from '../assets/images/slider/2-min.png';
import slideThree from '../assets/images/slider/3-min.png';
import slideFour from '../assets/images/slider/4-min.png';

const NEXT = 'NEXT';
const PREV = 'PREV';

let initialState = {
	slides: [
		{ id: 1, img: slideOne, title: 'Бесплатный парковка', subtitle: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.', show: false },
		{ id: 2, img: slideTwo, title: 'Страховка', subtitle: 'Полная страховка страховка автомобиля', show: false },
		{ id: 3, img: slideThree, title: 'Бензин', subtitle: 'Полный бак на любой заправке города за наш счёт', show: false },
		{ id: 4, img: slideFour, title: 'Обслуживание', subtitle: 'Автомобиль проходит еженедельное ТО', show: false }
	],
	currentImageIndex: 0
}
const slidersReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEXT:
			return {
				...state,
				slider: state.slides.map(s => {
					return { ...s }
				}),
				currentImageIndex: state.currentImageIndex === state.slides.length - 1 ? state.currentImageIndex = 0 : state.currentImageIndex + 1
			}
		case PREV:
			return {
				...state,
				slider: state.slides.map(s => {
					return { ...s }
				}),
				currentImageIndex: state.currentImageIndex === 0 ? state.currentImageIndex = state.slides.length - 1 : state.currentImageIndex - 1
			}
		default:
			return state;
	}
};


export const prevSlideAC = (slideId) => ({ type: PREV, slideId})
export const nextSlideAC = (slideId) => ({ type: NEXT, slideId})


export default slidersReducer;
import elantra from '../assets/images/car/elantra.png';
import i30 from '../assets/images/car/i30n.png';
import creta from '../assets/images/car/creta.png';
import sonata from '../assets/images/car/sonata.png';


let initialState = {
	menu:[
		{ id: 1, title: 'Местоположение', isActive: true},
		{ id: 2, title: 'Модель', isActive: false},
		{ id: 3, title: 'Дополнительно', isActive: false },
		{ id: 4, title: 'Итого', isActive: false },
	],
	cars:[
		{ id: 1, model: 'ELANTRA', price: 12000, img: elantra, checked: true},
		{ id: 2, model: 'i30 N', price: 10000, img: i30, checked: false},
		{ id: 3, model: 'CRETA', price: 12000, img: creta, checked: false},
		{ id: 4, model: 'SONATA', price: 10000, img: sonata, checked: false}
	],
	colors:[
		{ id: 1, title: 'Любой', checked: false},
		{ id: 2, title: 'Красный', checked: false},
		{ id: 3, title: 'Голубой', checked: true}
	],
	date:[
		{with: '', by: ''}
	],
	rate:[
		{ id: 1, title: 'Поминутно', price: 7, checked: false },
		{ id: 2, title: 'На сутки', price: 1999, checked: true },
	],
	services:[
		{ id: 1, title: 'Полный бак', price: 500, checked: true },
		{ id: 2, title: 'Детское кресло', price: 200, checked: false },
		{ id: 3, title: 'Правый руль', price: 1600, checked: false }
	],
	preorder:[],
	order:[],
	currentId: 0,
	totalPrice: 0,
}
const OrderPageReducer = (state = initialState, action) => {
	return{
		...state
	}
};
 

export default OrderPageReducer;
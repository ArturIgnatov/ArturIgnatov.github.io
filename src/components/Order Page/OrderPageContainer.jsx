import { connect } from 'react-redux';
import OrderPage from './OrderPage';
import { currentStep, closeModal, confirmOrder, sendOrder } from '../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return{
		orderPage: state.orderPage,
		preorder: state.orderPage.preorder,
	}
}
let mapDispatchToProps = (dispatch) => {
	return{
		currentStep: (number)=> {
			dispatch(currentStep(number))
		},
		closeModal: ()=> {
			dispatch(closeModal())
		},
		confirmOrder: () => {
			dispatch(confirmOrder())
		},
		sendOrder: (order) => {
			dispatch(sendOrder(order))
		},
	}
}	

const OrderPageConteiner = connect(mapStateToProps, mapDispatchToProps)(OrderPage)


export default OrderPageConteiner;
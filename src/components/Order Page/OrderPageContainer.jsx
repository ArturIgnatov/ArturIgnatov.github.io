import { connect } from 'react-redux';
import OrderPage from './OrderPage';
import { currentStep, closeModal, confirmOrder } from '../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return{
		orderPage: state.orderPage,
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
		}
	}
}	

const OrderPageConteiner = connect(mapStateToProps, mapDispatchToProps)(OrderPage)


export default OrderPageConteiner;
import { connect } from 'react-redux';
import OrderResult from './OrderResult';
import { changeStep, toOrder, replaceOrder } from '../../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return {
		orderPage: state.orderPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		next: (idBtn) => {
			dispatch(changeStep(idBtn))
		},
		toOrder: () => {
			dispatch(toOrder())
		},
		replaceOrder: () => {
			dispatch(replaceOrder())
		}
	}
}

const OrderResultContainer = connect(mapStateToProps, mapDispatchToProps)(OrderResult)


export default OrderResultContainer;


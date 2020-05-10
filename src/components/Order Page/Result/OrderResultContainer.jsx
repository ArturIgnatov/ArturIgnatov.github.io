import { connect } from 'react-redux';
import OrderResult from './OrderResult';
import { changeStep, toOrder, replaceOrder, sendOrder, cancelOrder } from '../../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return {
		orderPage: state.orderPage,
		order: state.orderPage.order
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
		// replaceOrder: () => {
		// 	dispatch(replaceOrder())
		// },
		// sendOrder: (order) => {
		// 	dispatch(sendOrder(order))
		// },
		cancelOrder: (id, status) => {
			dispatch(cancelOrder(id, status))
		}
	}
}

const OrderResultContainer = connect(mapStateToProps, mapDispatchToProps)(OrderResult)


export default OrderResultContainer;


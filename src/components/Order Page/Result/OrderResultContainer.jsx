import { connect } from 'react-redux';
import OrderResult from './OrderResult';
import { changeStep } from '../../../redux/orderpage-reducer';

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
	}
}

const OrderResultContainer = connect(mapStateToProps, mapDispatchToProps)(OrderResult)


export default OrderResultContainer;


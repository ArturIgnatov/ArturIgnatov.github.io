import { connect } from 'react-redux';
import OrderPage from './OrderPage';

let mapStateToProps = (state) => {
	return{
		orderPage: state.orderPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return{

	}
}	


const OrderPageConteiner = connect(mapStateToProps, mapDispatchToProps)(OrderPage)


export default OrderPageConteiner;
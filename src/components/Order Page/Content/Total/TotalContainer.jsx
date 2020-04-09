import { connect } from 'react-redux';
import Total from './Total';
import { updateTime } from '../../../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	
	return {
		preorder: state.orderPage.preorder,
		car: state.orderPage.cars
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		update: (newTime) => {
			dispatch(updateTime(newTime))
		},
	}
}

const TotalContainer = connect(mapStateToProps, mapDispatchToProps)(Total)


export default TotalContainer;

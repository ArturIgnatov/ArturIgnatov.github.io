import { connect } from 'react-redux';
import More from './More';
import { selectColorCarRadio, changeDateByValue, changeDateWithValue } from '../../../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return {
		colors: state.orderPage.colors,
		date: state.orderPage.date,
		rate: state.orderPage.rate,
		services: state.orderPage.services
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		selectColor: (idRadio, title) => {
			dispatch(selectColorCarRadio(idRadio, title))
		},
		changeDateValue: (newDate) => {
			dispatch(changeDateWithValue (newDate))
		},
		cangeDateByValue: (newDate) => {
			dispatch(changeDateByValue (newDate))
		}
	}
}

const MoreContainer = connect(mapStateToProps, mapDispatchToProps)(More)


export default MoreContainer;

import { connect } from 'react-redux';
import More from './More';
import { selectColorCarRadio, changeDateByValue, changeDateWithValue, selectRateRadio, selectServicesCheckbox, updateTime} from '../../../../redux/orderpage-reducer';

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
		},
		selectRate: (idRadio, title) => {
			dispatch(selectRateRadio(idRadio, title))
		},
		checkedService: (idCheckbox, title) => {
			dispatch(selectServicesCheckbox(idCheckbox, title))
		},
		update: (newTime) => {
			dispatch(updateTime(newTime))
		},
	}
}

const MoreContainer = connect(mapStateToProps, mapDispatchToProps)(More)


export default MoreContainer;

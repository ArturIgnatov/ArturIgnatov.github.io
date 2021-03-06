import { connect } from 'react-redux';
import More from './More';
import { 
		selectColorCarRadio, 
		selectRateRadio, 
		selectServicesCheckbox, 
		updateTime, 
		setDateFrom, 
		setDateTo, 
} from '../../../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return {
		cars: state.orderPage.cars,
		colors: state.orderPage.colors,
		rates: state.orderPage.rates,
		services: state.orderPage.services,
		dateTo: state.orderPage.preorder.dateTo
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		selectColor: (idRadio, title) => {
			dispatch(selectColorCarRadio(idRadio, title))
		},
		selectRate: (idRadio, title) => {
			dispatch(selectRateRadio(idRadio, title))
		},
		checkedService: (idCheckbox, title) => {
			dispatch(selectServicesCheckbox(idCheckbox, title))
		},
		update: () => {
			dispatch(updateTime())
		},
		setDateFrom: (newDate) => {
			dispatch(setDateFrom(newDate))
		},
		setDateTo: (newDate) => {
			dispatch(setDateTo(newDate))
		}
	}
}

const MoreContainer = connect(mapStateToProps, mapDispatchToProps)(More)


export default MoreContainer;

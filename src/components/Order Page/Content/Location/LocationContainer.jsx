import { connect } from 'react-redux';
import Location from './Location';
import {
		selectCity, 
		selectPoint, 
		fetchCity, 
		fetchPoint 
	} from '../../../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return {
		location: state.orderPage.location,
		preorder: state.orderPage.preorder
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		selectCity: (cityName) => {
			dispatch(selectCity(cityName))
		},
		selectPoint: (adress) => {
			dispatch(selectPoint(adress))
		},
		fetchCity: () => { 
			dispatch(fetchCity())
		},
		fetchPoint: () => {
			dispatch(fetchPoint())
		}

	}
}

const LocationContainer = connect(mapStateToProps, mapDispatchToProps)(Location)


export default LocationContainer;

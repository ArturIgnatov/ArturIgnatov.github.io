import { connect } from 'react-redux';
import Location from './Location';
import {
		selectCity, 
		selectPoint, 
	} from '../../../../redux/orderpage-reducer';
import { setGeoCity, setGeoPoint } from '../../../../redux/map-reducer';

let mapStateToProps = (state) => {
	return {
		location: state.orderPage.location,
		preorder: state.orderPage.preorder,
		map: state.map
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
		setGeoCity: (city) => {
			dispatch(setGeoCity(city))
		},
		setGeoPoint: (city, point, name, arr) => {
			dispatch(setGeoPoint(city, point, name, arr))
		}
	}
}

const LocationContainer = connect(mapStateToProps, mapDispatchToProps)(Location)


export default LocationContainer;

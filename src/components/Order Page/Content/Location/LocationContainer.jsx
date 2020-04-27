import { connect } from 'react-redux';
import Location from './Location';
import { changeTextValue, selectSity, clearInput, toggleCityBox, updateTextPoint, togglePointBox, clearInputPoint, selectPoint, loadCity, loadPoint } from '../../../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return {
		location: state.orderPage.location
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateText: (newText) => {
			dispatch(changeTextValue(newText))
		},
		updateTextPoint: (newText) =>{
			dispatch(updateTextPoint(newText))
		},
		select: (sityName) => {
			dispatch(selectSity(sityName))
		},
		selectPoint: (adress) => {
			dispatch(selectPoint(adress))
		},
		clear: () => {
			dispatch(clearInput())
		},
		clearInputPoint: () => {
			dispatch(clearInputPoint())
		},
		toggleCityBox: () => {
			dispatch(toggleCityBox())
		},
		togglePointBox: () => {
			dispatch(togglePointBox())
		},
		loadCity: () => { 
			dispatch(loadCity())
		},
		loadPoint: () => {
			dispatch(loadPoint())
		}

	}
}

const LocationContainer = connect(mapStateToProps, mapDispatchToProps)(Location)


export default LocationContainer;

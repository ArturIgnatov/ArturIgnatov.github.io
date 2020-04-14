import { connect } from 'react-redux';
import Location from './Location';
import { changeTextValue, selectSity, clearInput, toggleCityBox, updateTextPoint } from '../../../../redux/orderpage-reducer';

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
		clear: () => {
			dispatch(clearInput())
		},
		toggleCityBox: () => {
			dispatch(toggleCityBox())
		}
	}
}

const LocationContainer = connect(mapStateToProps, mapDispatchToProps)(Location)


export default LocationContainer;

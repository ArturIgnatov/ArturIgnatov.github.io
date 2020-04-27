import { connect } from 'react-redux';
import Model from './Model';
import { selectCars, handlerFilterCarRadio, loadCars } from '../../../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return {
		cars: state.orderPage.cars,
		filterCar: state.orderPage.filterCar
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		selectCars: (carId, carModel) => {
			dispatch(selectCars(carId, carModel))
		},
		handlerRadio: (idCheck) => {
			dispatch(handlerFilterCarRadio(idCheck))
		},
		loadCars: () => {
			dispatch( loadCars())
		}
	}
}

const ModelContainer = connect(mapStateToProps, mapDispatchToProps)(Model)


export default ModelContainer;

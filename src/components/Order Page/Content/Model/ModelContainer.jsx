import { connect } from 'react-redux';
import Model from './Model';
import { selectCars, handlerFilterCarRadio } from '../../../../redux/orderpage-reducer';

let mapStateToProps = (state) => {
	return {
		cars: state.orderPage.cars,
		category: state.orderPage.category,
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
		}
	}
}

const ModelContainer = connect(mapStateToProps, mapDispatchToProps)(Model)


export default ModelContainer;

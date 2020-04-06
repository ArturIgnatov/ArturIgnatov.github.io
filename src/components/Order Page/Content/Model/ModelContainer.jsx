import { connect } from 'react-redux';
import Model from './Model';

let mapStateToProps = (state) => {
	return {
		cars: state.orderPage.cars
	}
}
let mapDispatchToProps = (dispatch) => {
	return {

	}
}


const ModelContainer = connect(mapStateToProps, mapDispatchToProps)(Model)


export default ModelContainer;

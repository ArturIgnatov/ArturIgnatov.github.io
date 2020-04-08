import { connect } from 'react-redux';
import Total from './Total';

let mapStateToProps = (state) => {
	
	return {
		preorder: state.orderPage.preorder
	}
}
let mapDispatchToProps = (dispatch) => {
	return {

	}
}

const TotalContainer = connect(mapStateToProps, mapDispatchToProps)(Total)


export default TotalContainer;

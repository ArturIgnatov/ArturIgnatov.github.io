import { openModal } from "../../../redux/startpage-reducer";
import Pannel from './Pannel'
import { connect } from "react-redux";

let mapStateToProps = (props) => {

	return {
		startPage: props.startPage.modalActive
	}
}

let mapDispatchToprops = (dispatch) => {
	return {
		openModal: () => {
			dispatch(openModal())
		}
	}
}

const PannelContainer = connect(mapStateToProps, mapDispatchToprops)(Pannel)

export default PannelContainer;
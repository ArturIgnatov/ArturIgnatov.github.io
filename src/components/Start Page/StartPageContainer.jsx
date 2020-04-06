import StartPage from './StartPage';
import { openModal, closeModal, currentSlideAC, prevSlideAC, nextSlideAC } from '../../redux/startpage-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (props) => {
	
	return {
		startPage: props.startPage
	}
}

let mapDispatchToprops = (dispatch) => {
	return {
		next: () => {
			dispatch(nextSlideAC())
		},
		prev: () => {
			dispatch(prevSlideAC())
		},
		current: (slideId) => {
			dispatch(currentSlideAC(slideId))
		},
		openModal: () => {
			dispatch(openModal())
		},
		closeModal: () => {
			dispatch(closeModal())
		}
	}
}

const StartPageContainer = connect(mapStateToProps, mapDispatchToprops)(StartPage)

export default StartPageContainer;
import Slider from './Slider'
import { connect } from 'react-redux';
import { nextSlideAC, prevSlideAC, currentSlideAC } from '../../../redux/sliders-reduser';


let mapStateToProps = (state) => {
	return {
		slider: state.slides
	}
}
let mapDispatchToprops = (dispatch) => {
	return{
		next: () => {
			dispatch(nextSlideAC())
		},
		prev: () => {
			dispatch(prevSlideAC())
		},
		current: (slideId) => {
			dispatch(currentSlideAC(slideId))
		}
	}
}

const SliderContainer = connect(mapStateToProps, mapDispatchToprops) (Slider)

export default SliderContainer;
import Slider from './Slider'
import { connect } from 'react-redux';
import { nextSlideAC, prevSlideAC } from '../../../redux/sliders-reduser';


let mapStateToProps = (state) => {
	return {
		slider: state.slides
	}
}
let mapDispatchToprops = (dispatch) => {
	return{
		next: (slideId) => {
			dispatch(nextSlideAC(slideId))
		},
		prev: (slideId) => {
			dispatch(prevSlideAC(slideId))
		}
	}
}

const SliderContainer = connect(mapStateToProps, mapDispatchToprops) (Slider)

export default SliderContainer;
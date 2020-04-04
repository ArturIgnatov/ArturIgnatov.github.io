import React from 'react'
import './Slider.sass'

const Slider = (props) => {
	console.log(props);
	let id = props.slider.currentImageIndex
	let slide = props.slider.slides[id]

	let prev = '&#10094'
	return (
		<div className='slider'>
			<a className='prev' onClick={() => { props.prev() }}><span>‹</span></a>
			<a className='next' onClick={() => { props.next() }}><span>›</span></a>
			<div className='slider__item'>
				<img src={slide.img} alt="" />
				<div className='slide__description'>
					<h2>{slide.title}</h2>
					<span>{slide.subtitle}</span>
					<button href="#" ><span>Подробнее</span></button>
				</div>
			</div>
			<div class="slider__dots">
				<span class="slider-dots__item" ></span>
				<span class="slider-dots__item" ></span>
				<span class="slider-dots__item" ></span>
				<span class="slider-dots__item" ></span>
			</div>
		</div>
	)
}

export default Slider;
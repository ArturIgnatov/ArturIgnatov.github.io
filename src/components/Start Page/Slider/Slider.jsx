import React from 'react'
import './Slider.sass'

const Slider = (props) => {
	let id = props.slider.currentId
	let slide = props.slider.slides[id]

	const dots = props.slider.dots.map((el, i) => {
		if (el.active === true ) {
			return (
				<span key={el.id} className='slider-dots__item active' onClick={() => { props.current(i) }}></span>
			)
		}
		return (
			<span key={el.id} className='slider-dots__item' onClick={() => { props.current(i) }}></span>
		)
	})

	return (
		<div className='slider'>
			<a href="/#" className='slider__prev' onClick={() => { props.prev() }}><span>‹</span></a>
			<a href="/#" className='slider__next' onClick={() => { props.next() }}><span>›</span></a>
			<div className='slider__item'>
				<img src={slide.img} alt=''/>
				<div className='slide__description'>
					<h2>{slide.title}</h2>
					<span>{slide.subtitle}</span>
					<button href="#" ><span>Подробнее</span></button>
				</div>
			</div>
			<div className="slider__dots">
				{dots}
			</div>
		</div>
	)
}

export default Slider;
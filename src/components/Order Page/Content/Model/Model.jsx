import React from 'react'
import './Model.sass'


const Model = (props) => {

	const carsItem = props.cars.map((el, i) => {
		return(
			<div key={i} className='model__item'>
				<span>{el.model}</span>
				<span>{el.price}</span>
				<img src={el.img} alt="" />
			</div>
		)
	})

	return (
		<div className='model'>
			<div className='model__filter'>
				<label>
					<input className="check" type="radio" name="model" />
					<span className="fakecheck"></span>
					<span>Все модели</span>
				</label>
				<label>
					<input className="check" type="radio" name="model" />
					<span className="fakecheck"></span>
					<span>Зеленые</span>
				</label>
				<label>
					<input className="check" type="radio" name="model" />
					<span className="fakecheck"></span>
					<span>Красные</span>
				</label>
			</div>
			<div className='model__view'>
				{carsItem}
			</div>
		</div>
	)
}

export default Model;

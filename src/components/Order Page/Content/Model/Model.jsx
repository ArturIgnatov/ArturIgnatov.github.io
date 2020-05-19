import React from 'react'
import './Model.sass'
import FilterRadio from './FilterRadio'
import CarItem from './CarItem'


const Model = (props) => {
	// .filter(el => filters === 'Все модели' ? el : el.categoryId.name === filters)
	let filters = props.category.find(el => el.checked).name 		
	return (
		<div className='model'>
			<FilterRadio 
				category={props.category}
				handlerRadio={props.handlerRadio}
			/>
			<div className='model__view show'>
				{
					props.cars
					.filter(el => filters === 'Все модели' ? el : el.categoryId.name === filters)
					.map(el => (
						<CarItem
							key={el.id}
							selected={el.selected}
							selectCars={props.selectCars}
							id={el.id}
							name={el.name}
							priceMax={el.priceMax}
							priceMin={el.priceMin}
							carimg={el.thumbnail.path}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Model;

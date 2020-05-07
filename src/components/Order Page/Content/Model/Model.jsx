import React from 'react'
import './Model.sass'
import FilterRadio from './FilterRadio'


const Model = (props) => {
// Рендер машин
	// Фильтрация моделей на основе этого массивы будет мапитсья другой 
	const filterCars = props.cars.filter((value, i) => {
		if (props.category[1].checked) {
			return props.cars[i].categoryId.name === 'Эконом'
		}
		else if (props.category[2].checked) {
			return props.cars[i].categoryId.name === 'Премиум'
		}
		return props.cars[i]
	})
	// Рендер отфильтрованных машин
	const carsItem = filterCars.map((el, i) => {
		return(
			<div 
				key={i} 
				className={el.selected ? 'model__item active' : 'model__item'} 
				onClick={() => { props.selectCars(el.id) }}
			>
				<span>{el.name.match(/(?<=,\s).*/)[0]}</span>
				<span>{el.priceMin}-{el.priceMax}</span>
				<img src={'http://api-factory.simbirsoft1.com/' + el.thumbnail.path} alt="" />
			</div>
		)
	})	
	return (
		<div className='model'>
			<FilterRadio 
				category={props.category}
				handlerRadio={props.handlerRadio}
			/>
			<div className='model__view show'>
				{carsItem}
			</div>
		</div>
	)
}

export default Model;

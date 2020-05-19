import React from 'react'

const CarItem = ({ selected, selectCars, name, id, priceMax, priceMin, carimg}) => {
	return(
		<div
			className={selected ? 'model__item active' : 'model__item'}
			onClick={() => {selectCars(id) }}
		>
			<span>{name.match(/(?<=,\s).*/)[0]}</span>
			<span>{String(priceMin).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} - {String(priceMax).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} ₽</span>
			<img src={'http://api-factory.simbirsoft1.com/' + carimg} alt="" />
		</div>
	)
}
export default CarItem
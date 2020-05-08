import React from 'react'

const RowCar = ({ id, name, priceMin, priceMax, colors, categoryId, changeCar}) => {	
	return(
		<>	
			<tr
				onClick={() => changeCar(id)}
			>
				<th>{name.match(/(?<=,\s).*/)[0]}</th>
				<th>{name.match(/^[^,]*/)[0]}</th>
				<th>{priceMin}</th>
				<th>{priceMax}</th>
				<th>{colors.length}</th>
				<th>{categoryId.name}</th>
			</tr>
		</>
	)
}

export default RowCar
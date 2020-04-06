import React from 'react'
import './Pannel.sass'

const Burger = (props) => {
	console.log(props);
	
	return (
		<div className='pannel__item'>
			<div className='pannel__burger' onClick={props.open}></div>
		</div>
	)
}

export default Burger;
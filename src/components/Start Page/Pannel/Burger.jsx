import React from 'react'
import './Pannel.sass'

const Burger = (props) => {
	return (
		<div className='pannel__item' onClick={props.open}>
			<div className='pannel__burger'></div>
		</div>
	)
}

export default Burger;
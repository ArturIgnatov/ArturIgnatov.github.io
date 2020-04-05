import React from 'react'
import './Pannel.sass'
import Burger from './Burger'
import Lang from './Lang'

const Pannel = () => {
	return (
		<div className='pannel'>
			<Burger/>
			<Lang/>
		</div>
	)
}

export default Pannel;
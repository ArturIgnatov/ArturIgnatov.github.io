import React from 'react'
import './Pannel.sass'
import Burger from './Burger'
import Lang from './Lang'

const Pannel = () => {
	return (
		<div className='menu'>
			<Burger/>
			<Lang/>
		</div>
	)
}

export default Pannel;
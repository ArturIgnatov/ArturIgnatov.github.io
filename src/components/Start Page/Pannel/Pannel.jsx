import React from 'react'
import './Pannel.sass'
import Burger from './Burger'
import Lang from './Lang'

const Pannel = (props) => {	
	return (
		<div className='pannel'>
			<Burger open={props.openModal}/>
			<Lang/>
		</div>
	)
}

export default Pannel;
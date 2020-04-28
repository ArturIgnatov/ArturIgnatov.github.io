import React from 'react'
import './Preloader.sass'
import preloader from '../assets/preloader.gif'

const Preloader = () => {
	return (
		<div>
			<img className='preloader' src={preloader} alt="" />
		</div>
	)
}

export default Preloader
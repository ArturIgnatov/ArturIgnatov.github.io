import React from 'react'
import './Pannel.sass'
import { useState } from 'react'
import { connect } from 'react-redux'
import { setLanguage } from '../../../redux/startpage-reducer'

const Lang = (props) => {
	const [translate, setTransate] = useState('Eng')
	const setLanguage = () => {
		setTransate(translate === 'Рус' ? 'Eng' : 'Рус')
		props.setLanguage(translate === 'Рус'? 'ru' : 'en')
	}
	return (
		<div className='pannel__item' onClick={setLanguage}>
			<div className='pannel__lang'>
				<span>{translate}</span>
			</div>
		</div>
	)
}


const mapStateToProps = (state) => ({
	lang: state.startPage.lang
})
export default connect(mapStateToProps, { setLanguage })(Lang)
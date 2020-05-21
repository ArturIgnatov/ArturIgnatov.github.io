import React from 'react'
import { NavLink } from 'react-router-dom';
import './Content.sass'
import HeaderContent from './HeaderContent'
import { connect } from 'react-redux'
import { setHomePopUp} from '../../../redux/orderpage-reducer'
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

const Content = (props) => {	
	const { t, i18n} = useTranslation()

	useEffect(()=> {
		i18n.changeLanguage(props.lang)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.lang])
	const a = require('https')
	console.log(a);
	
	return(
		<main className='content'>
			<HeaderContent/>
			<div className='content__desription'>
				<h2>{t('title')}</h2>
				<h1>Need for Drive</h1>
				<span>{t('subtitle')}</span>
				<NavLink to={props.step !== 5 ? '/docs/orderpage' : '/docs/orderpage/total'}><button onClick={() => props.setHomePopUp()}>{t('reserve')}</button></NavLink>
			</div>
			<div className='content__footer'>
				<span>© 2016-2020 «Need for drive»</span>
				<a href='tel:+7 (495) 234-22-44'>8 (495) 234-22-44</a>
			</div>
		</main>
	)
}

const mapStetToProps = (state) => ({
	step: state.orderPage.step,
	lang: state.startPage.lang
})

export default connect(mapStetToProps, { setHomePopUp })(Content)
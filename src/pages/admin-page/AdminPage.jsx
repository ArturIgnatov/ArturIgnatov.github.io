import React from 'react'
import './AdminPage.sass'
import Menu from './Menu'
import Header from './Header'
import Content from './Content/Content'
import Footer from './Footer'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadCity } from '../../redux/admin-page'

const AdminPage = (props) => {

	useEffect(()=>{
		props.loadCity()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='admin-page'>
			<Menu/>
			<div className='admin-page__container'>
				<Header/>
				<Content/>
				<Footer/>
			</div>
		</div>
	)
}

export default connect(null, { loadCity })(AdminPage);
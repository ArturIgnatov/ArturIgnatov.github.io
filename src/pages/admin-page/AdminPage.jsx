import React from 'react'
import './AdminPage.sass'
import Menu from './Menu'
import Header from './Header'
import Content from './Content/Content'
import Footer from './Footer'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadCars } from '../../redux/admin-page'

const AdminPage = (props) => {

	useEffect(()=>{
		props.loadCars()
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

export default connect(null, { loadCars })(AdminPage);
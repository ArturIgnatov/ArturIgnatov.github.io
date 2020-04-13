import React from 'react'
import './AdminPage.sass'
import Menu from './Menu'
import Header from './Header'
import Content from './Content/Content'
import Footer from './Footer'

const AdminPage = (props) => {

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

export default AdminPage;
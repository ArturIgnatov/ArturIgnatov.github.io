import React from 'react'
import './Footer.sass'
import { NavLink } from 'react-router-dom';

const Footer = (props) => {

	return (
		<div className='admin-page__footer'>
			<div>
				<NavLink to='/docs/' className='' >Главная страница</NavLink>
				<a href="">Ссылка</a>
			</div>
			<span>Copyright © 2020 Simbirsoft</span>
		</div>
	)
}

export default Footer;
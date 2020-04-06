import React from 'react'
import { NavLink } from 'react-router-dom';
import './Content.sass'
import HeaderContent from './HeaderContent'
const Content = (props) => {	
	return(
		<main className='content'>
			<HeaderContent/>
			<div className='content__desription'>
				<h1>Каршеринг</h1>
				<h2>Need for Drive</h2>
				<span>Поминутная аренда авто твоего города</span>
				<NavLink to='/orderpage'><button><span>Забронировать</span></button></NavLink>
			</div>
			<div className='content__footer'>
				<span>© 2016-2020 «Need for drive»</span>
				<a href='tel:+7 (495) 234-22-44'>8 (495) 234-22-44</a>
			</div>
		</main>
	)
}
 
export default Content;
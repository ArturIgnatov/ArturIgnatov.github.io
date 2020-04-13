import React from 'react'
import './Menu.sass'
import logo from '../../assets/images/svg/logo.svg'
import { NavLink } from 'react-router-dom'

const Menu = (props) => {

	return (
		<div className='admin-page__menu'>
			<div className='admin-page__logo'>
				<img src={logo} alt="" />
				Need for car
			</div>
			<nav className='admin-page__nav'>
				<NavLink className='link' exact to='/adminpage'>
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.3213 4.10853C13.5596 4.34683 13.5596 4.73177 13.3213 4.97007L12.2031 6.08825L9.91174 3.7969L11.0299 2.67873C11.2682 2.44042 11.6532 2.44042 11.8915 2.67873L13.3213 4.10853ZM2.5 13.5V11.2086L9.25795 4.4507L11.5493 6.74205L4.79135 13.5H2.5Z" />
					</svg>
					Карточка автомобиля
				</NavLink>


				<NavLink className='link' exact to='/adminpage/listcar'>
					<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path  d="M2.5 3.5V4.85714H7.83333V3.5H2.5ZM7.83333 7.57142H2.5V6.21428H7.83333V7.57142ZM2.5 10.2857H7.83333V8.92857H2.5V10.2857ZM2.5 13H7.83333V11.6429H2.5V13ZM14.5 3.5H9.16663V13H14.5V3.5Z" />
					</svg>
					Список авто
				</NavLink>

				<NavLink className='link' exact to='/adminpage/orders'>
					<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.5 1H3.5C2.95 1 2.505 1.45 2.505 2L2.5 10C2.5 10.55 2.945 11 3.495 11H9.5C10.05 11 10.5 10.55 10.5 10V4L7.5 1ZM8.5 8H7V9.5H6V8H4.5V7H6V5.5H7V7H8.5V8ZM7 1.75V4.5H9.75L7 1.75Z" />
					</svg>
					Заказы
				</NavLink>

				<a className='link' href="">
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path  d="M6.17647 8.11538H2.5V3.5H6.17647V8.11538ZM6.17647 13.5H2.5V8.88461H6.17647V13.5ZM6.91174 13.5H10.5882V8.88461H6.91174V13.5ZM15 13.5H11.3235V8.88461H15V13.5ZM6.91174 8.11538H10.5882V3.5H6.91174V8.11538ZM11.3235 8.11538V3.5H15V8.11538H11.3235Z" />
					</svg>
					Menu 4
				</a>

				<a className='link' href="">
					<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path  d="M10.8949 2H2.60538C1.99749 2 1.50012 2.5 1.50012 3.11111V4.77778H12.0001V3.11111C12.0001 2.5 11.5028 2 10.8949 2ZM10.8947 12H9.23682V5.88889H12V10.8889C12 11.5 11.5026 12 10.8947 12ZM8.13157 5.9H5.36841V12H8.13157V5.9ZM2.60526 12C1.99737 12 1.5 11.5 1.5 10.8889V5.88889H4.26316V12H2.60526Z" />
					</svg>
					Menu 5
				</a>

				<a className='link' href="">
					<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.875 3.125C9.875 4.85156 8.47656 6.25 6.75 6.25C5.02344 6.25 3.625 4.85156 3.625 3.125C3.625 1.39844 5.02344 0 6.75 0C8.47656 0 9.875 1.39844 9.875 3.125ZM0.5 10.9375C0.5 8.85938 4.66406 7.8125 6.75 7.8125C8.83594 7.8125 13 8.85938 13 10.9375V12.5H0.5V10.9375Z" />
					</svg>
					Menu 6
				</a>

				<a className='link' href="">
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path  d="M7.25 1.5C4.076 1.5 1.5 4.076 1.5 7.25C1.5 10.424 4.076 13 7.25 13C10.424 13 13 10.424 13 7.25C13 4.076 10.424 1.5 7.25 1.5ZM7.82505 10.125H6.67505V8.97501H7.82505V10.125ZM6.67505 7.825H7.82505V4.375H6.67505V7.825Z" />
					</svg>
					Menu 7
				</a>
			</nav>
		</div>
	)
}

export default Menu;
import React from 'react'
import './Content.sass'
import { NavLink } from 'react-router-dom';
import PopUp from './PopUp';
import { connect } from 'react-redux';
import { selectCity, setHomePopUp } from '../../../redux/orderpage-reducer'

const HeaderContent = (props) => {	
	return (
		<div className='content__header'>
			<NavLink to='/docs/' className='' >Need for Drive</NavLink>
			{
				props.homePopUp 
					? <PopUp 
						setHomePopUp={props.setHomePopUp}
						city={props.city}
						cities={props.cities}
						selectCity={props.selectCity}
					/>
					: null
			}
			<span >
				<svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 8.5C16 14.3333 8.5 19.3333 8.5 19.3333C8.5 19.3333 1 14.3333 1 8.5C1 6.51088 1.79018 4.60322 3.1967 3.1967C4.60322 1.79018 6.51088 1 8.5 1C10.4891 1 12.3968 1.79018 13.8033 3.1967C15.2098 4.60322 16 6.51088 16 8.5Z" stroke="#999999" />
					<path d="M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z" stroke="#999999"  />
				</svg>
			{props.city.name}
			</span>
		</div>
	)
}

const mapStateToProps = (state) => ({
	city: state.orderPage.preorder.cityId,
	cities: state.orderPage.location.cityId,
	homePopUp: state.orderPage.homePopUp
})

export default connect(mapStateToProps, { selectCity, setHomePopUp })(HeaderContent)
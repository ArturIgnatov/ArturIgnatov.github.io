import React from 'react'
import { useState } from 'react'


const PopUp = (props) => {
	const [sityBox, setCityBox] = useState(false)
	return (
		<div className={!sityBox ? 'popup' : 'popup active'}>
			{
				!sityBox 
					? 	<>
							<span>Ваш город {props.city.name} ?</span>
							<button
								onClick={() => props.setHomePopUp()}
							>Да
							</button>
							<button
								onClick={() => setCityBox(true)}
							>Нет</button>
						</>
					: 	<CityBox 
							setHomePopUp={props.setHomePopUp}
							cities={props.cities}
							selectCity={props.selectCity}
						/>
			}
		</div>
	)
}
const CityBox = (props) => {

	const selectCity = (name) => {
		props.selectCity(name)
		props.setHomePopUp()
	}
	return (
		<div className='popup-city'>
			{
				props.cities.map(el => <span key={el.id} onClick={() => selectCity(el.name)}>{el.name}</span> )
			}
		</div>
	)
} 
export default PopUp
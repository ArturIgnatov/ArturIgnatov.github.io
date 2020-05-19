import React from 'react'
import { useState } from 'react'
import { useTranslation } from "react-i18next";

const PopUp = (props) => {
	const [sityBox, setCityBox] = useState(false)
	const { t, i18n } = useTranslation()
	return (
		<div className={!sityBox ? 'popup' : 'popup active'}>
			{
				!sityBox 
					? 	<>
							<span>{t('city')} {props.city.name} ?</span>
							<button
								onClick={() => props.setHomePopUp()}
							>{t('yes')}
							</button>
							<button
								onClick={() => setCityBox(true)}
							>{t('no')}
							</button>
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
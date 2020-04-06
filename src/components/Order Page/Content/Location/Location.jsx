import React from 'react'
import './Location.sass'



const Location = () => {
	return (
		<div className='location'>
			<div className='location__info'>
				<label className='location__city'>
					Город
					<input type="text" value='Ульяновск' />
					<svg className='times' aria-hidden="true"  data-icon="times" viewBox="0 0 352 512">
						<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
					</svg>
				</label>
				<label className='location__point'>
					Пункт выдачи
					<input type="text" placeholder='Начните вводить пункт'/>
				</label>
			</div>
			<div className='location__map'>
				<span>Выбрать на карте: </span>
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae92ada9517e069849f6cc37eb1fbf4d9062ec5bafc6a6f8cdf7e61b99b32655f&amp;source=constructor" width="100%" height="352" frameborder="0"></iframe>
			</div>
		</div>
	)
}

export default Location;

import React from 'react'
import './Content.sass'

const Content = () => {
	return(
		<main className='content'>
			<div className='content__header'>
				<a className='' href="#">Need for Drive</a>
				<span className='location'>
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
						<path fill="currentColor"
							d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
						</path>
					</svg>
					Ульяновск
					</span>
			</div>
			<div className='content__desription'>
				<h1>Каршеринг</h1>
				<h2>Need for Drive</h2>
				<span>Поминутная аренда авто твоего города</span>
				<button href="#" ><span>Забронировать</span></button>
			</div>
			<div className='content__footer'>
				<span>© 2016-2019 «Need for drive»</span>
				<a href='tel:+7 (495) 234-22-44'>8 (495) 234-22-44</a>
			</div>
		</main>
	)
}
 
export default Content;
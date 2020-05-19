import React from 'react'
import './Modal.sass'

const Modal = (props) => {
	const navItem = props.startPage.menu.map((el, i)=>{
		if (el.id === props.startPage.currentId) {
			return (
				<span key={el.id} onClick={() => { props.current(i) }}  className='nav__link active' >{el.title}</span>
			)
		}
		return (
			<span key={el.id} onClick={() => { props.current(i) }}  className='nav__link' >{el.title}</span>
		)
	})
	return (
		<div className='modal'>
			<div className='modal__item'>
				<div className='modal__close' onClick={props.close}>
					<div className='modal__times'></div>
				</div>
			</div>
			<div className='modal__item'>
				<nav className='nav'>
					{navItem}
				</nav>
			</div>
			<div className='modal__item'>

			</div>
		</div>
	)
}

export default Modal;
import React from 'react'
import './Modal.sass'

const Modal = (props) => {
	console.log(props)

	const navItem = props.startPage.menu.map((el, i)=>{
		if (el.id === props.startPage.currentId) {
			return (
				<a key={el.id} onClick={() => { props.current(i) }} href="/#" className='nav__link active' >{el.title}</a>
			)
		}
		return (
			<a key={el.id} onClick={() => { props.current(i) }} href="/#" className='nav__link' >{el.title}</a>
		)
	})
	return (
		<div className='modal'>
			<div className='modal__item'>
				<span className='modal__close' onClick={props.close}>✖</span>
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
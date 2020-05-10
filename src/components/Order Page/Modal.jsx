import React from 'react'
import './Modal.sass'

const Modal = (props) => {
	return (
		<div className='modal-order'>
			<div className='modal-order__item'>
				<span>Подтвердить заказ</span>
				<div>
					<button onClick={() => { props.sendOrder(props.preorder)}}>Подтвердть</button>
					<button 
						className='red' 
						onClick={() => { props.closeModal()}}
					>
						Вернуться
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;
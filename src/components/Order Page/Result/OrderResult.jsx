import React from 'react'
import './OrderResult.sass'

const OrderResult = () => {
	return (
		<div className='order-page__result'>
			<h2>Ваш заказ:</h2>
			<div>
				<div className='relust__item'>
					<span>Пункт выдачи</span><span></span><span>Ульяновск, Нариманова 42</span>
				</div>
				<div className='relust__item'>
					<span>Модель</span><span></span><span>Hyndai, i30 N</span>
				</div>
				<div className='relust__item'>
					<span>Цвет</span><span></span><span>Голубой</span>
				</div>
				<div className='relust__item'>
					<span>Длительность аренды</span><span></span><span>1д 2ч</span>
				</div>
				<div className='relust__item'>
					<span>Тариф</span><span></span><span>На сутки</span>
				</div>
				<div className='relust__item'>
					<span>Полный бак</span><span></span><span>Да</span>
				</div>
				<p>Цена <span>16 000₽</span></p>
				<button>Итого</button>
			</div>
		</div>
	)
}

export default OrderResult;
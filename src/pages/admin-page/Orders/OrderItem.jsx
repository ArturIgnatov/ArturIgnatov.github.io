import React from 'react'

const OrderItem = (props) => {
	return(
		<>
		{
			props.orders.map((el, i) => {
				let dateFrom = new Date(el.dateFrom).toLocaleString().slice(0, 17)
				let dateTo = new Date(el.dateTo).toLocaleString().slice(0, 17)
				return (
					<div key={i} className='order-auto__item'>
						<div className='order-auto__img'>
							<img src={'http://api-factory.simbirsoft1.com/' + el.carId.thumbnail.path} alt="" />
						</div>
						<div className='order-auto__description'>
							<div><span>{el.carId.name.match(/(?<=,\s).*/)[0]} </span>в <span>{el.cityId.name}</span>, {el.pointId.address}</div>
							<div>{dateFrom} — {dateTo}</div>
							<div>Цвет: <span>{el.color}</span></div>
						</div>
						<div className='order-auto__services'>
							<label>
								<input
									type='checkbox'
									defaultChecked={el.isFullTank}
								/>
								<span className='fake'></span>
								<span className={el.isFullTank ? 'active' : null}>Полный бак</span>
							</label>
							<label>
								<input
									type='checkbox'
									defaultChecked={el.isNeedChildChair}
								/>
								<span className='fake'></span>
								<span className={el.isNeedChildChair ? 'active' : null}>Детское кресло</span>
							</label>
							<label>
								<input
									type='checkbox'
									defaultChecked={el.isRightWheel}
								/>
								<span className='fake'></span>
								<span className={el.isRightWheel ? 'active' : null}>Правый руль</span>
							</label>
						</div>
						<div className='order-auto__price'>
							{el.price ? el.price : 0} ₽
						</div>
						<div className={el.orderStatusId.name === 'new' ? 'order-status new' : el.orderStatusId.name === 'cancelled' ? 'order-status cancelled' : 'order-status confirmed'}></div>
						<div className='button-group'>
							<button onClick={() => props.changeStatusOrder(el.id, { name: 'confirmed', orderStatusId: '5e26a1f0099b810b946c5d8b' })}>Готово</button>
							<button onClick={() => props.deleteOrder(el.id)}>Отмена</button>
							<button>Изменить</button>
						</div>
					</div>
				)
			})
		}
		</>
	)
}

export default OrderItem
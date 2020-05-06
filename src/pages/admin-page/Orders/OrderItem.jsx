import React from 'react'

const OrderItem = (props) => {
	return(
		<>
		{
			props.orders.map((el, i) => {
				let dateFrom = new Date(el.dateFrom).toLocaleString()
				let dateTo = new Date(el.dateTo).toLocaleString()
				return (
					<div key={i} className='order-auto__item'>
						<div className='order-auto__img'>
							<img src={'http://api-factory.simbirsoft1.com/' + el.carId.thumbnail.path} alt="" />
						</div>
						<div className='order-auto__description'>
							<div><span>{el.carId.name} </span>в <span>{el.cityId.name}</span>, {el.pointId.address}</div>
							<div>{dateFrom} — {dateTo}</div>
							<div>Цвет: <span>{el.color}</span></div>
							<div>Дата создания заказа: <span>{new Date(el.createdAt).toLocaleString()}</span></div>
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
						<div className='button-group'>
							<button>Готово</button>
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
import React from 'react'
import './index.sass'
import i30 from '../../../assets/images/car/i30n.png'
import sonata from '../../../assets/images/car/sonata.png'
import creta from '../../../assets/images/car/creta.png'
import elantra from '../../../assets/images/car/elantra.png'


const Car = [
	{ id: 1, img: i30 },
	{ id: 2, img: sonata },
	{ id: 3, img: creta },
	{ id: 4, img: elantra },
]

const Orders = () => {
	return(
		<>
		<h2>Заказы</h2>
		<div className='order-auto'>
			<div className='order-auto__header'>
				<select className='admin-select' name="" id="">
					<option value="Пункт 1">За неделю</option>
					<option value="Пункт 2">За день</option>
					<option value="Пункт 3">За месяц</option>
				</select>
				<select className='admin-select' name="" id="">
					<option value="Пункт 1">Elantra</option>
					<option value="Пункт 2">i 30N</option>
					<option value="Пункт 3">Sonata</option>
				</select>
				<select className='admin-select' name="" id="">
					<option value="Ульяновск">Ульяновск</option>
					<option value="Саранск">Саранск</option>
					<option value="Казань">Казань</option>
				</select>
				<select className='admin-select' name="" id="">
					<option value="В процессе">В процессе</option>
					<option value="Отменен">Отменен</option>
					<option value="Исполнен">Исполнен</option>
				</select>
				<button className='admin-btn blue'>Применить</button>
			</div>
			<div className='order-auto__content'>
				{
						Car.map(el => {
							return(
								<div className='order-auto__item'>
									<div className='order-auto__img'>
										<img src={el.img} alt="" />
									</div>
									<div className='order-auto__description'>
										<div>ELANTRA в Ульяновск, Нариманова 42</div>
										<div>12.06.2019 12:00 — 13.06.2019 12:00</div>
										<div>Цвет: Голубой</div>
									</div>
									<div className='order-auto__services'>
										<label>
											<input type="checkbox" />
											Полный бак
										</label>
										<label>
											<input type="checkbox" />
											Детское кресло
										</label>
										<label>
											<input type="checkbox" />
											Правый руль
										</label>
									</div>
									<div className='order-auto__price'>
										4 300 ₽
									</div>
									<div className='button-group'>
										<button>Готово</button>
										<button>Отмена</button>
										<button>Изменить</button>
									</div>
								</div>
							)
						})
				}
			</div>
			
			<div className='order-auto__footer'>

			</div>
		</div>
		</>
	)
}
export default Orders
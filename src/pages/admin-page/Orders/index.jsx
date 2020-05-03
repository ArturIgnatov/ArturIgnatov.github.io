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
let pagesCount = Math.ceil(26 / 4)
let activePage = 1
let pages = []
for (let i = 1; i <= pagesCount; i++) {
	pages.push(i)
}


const Orders = () => {
	return(
		<>
		<h2>Заказы</h2>
		<div className='order-auto'>
			<div className='order-auto__header'>
				<select className='admin-select' name="" id="">
					<option>Не выбранно</option>
					<option value="За месяц">За месяц</option>
					<option value="За неделю">За неделю</option>
					<option value="За день">За день</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>Не выбранно</option>
					<option value="Elantra">Elantra</option>
					<option value="i 30N">i 30N</option>
					<option value="Sonata">Sonata</option>
					<option value="Creta">Creta</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>Не выбранно</option>
					<option value="Ульяновск">Ульяновск</option>
					<option value="Саранск">Саранск</option>
					<option value="Казань">Казань</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>Не выбранно</option>
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
										<div><span>ELANTRA </span>в <span>Ульяновск</span>, Нариманова 42</div>
										<div>12.06.2019 12:00 — 13.06.2019 12:00</div>
										<div>Цвет: <span>Голубой</span></div>
									</div>
									<div className='order-auto__services'>
										<label>
											<input type='checkbox' defaultChecked={true}/>
											<span className='fake'></span>
											<span className='active'>Полный бак</span>
										</label>
										<label>
											<input type='checkbox' />
											<span className='fake'></span>
											<span >Детское кресло</span>		
										</label>
										<label>
											<input type='checkbox' />
											<span className='fake'></span>
											<span >Правый руль</span>
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
					{
						pages.map((el) => {
							return (
								<span
									key={el}
									className={activePage === el ? 'active' : null}
								>{el}
								</span>
							)
						})
					}
			</div>
		</div>
		</>
	)
}
export default Orders
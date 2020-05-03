import React, { useEffect } from 'react'
import './index.sass'

let pagesCount = Math.ceil(16 / 4)
let activePage = 1
let pages = []
for (let i = 1; i <= pagesCount; i++) {
	pages.push(i)
}

const Tables = () => {
	return(
		<>
		<h2>Список авто</h2>
		<div className='order-table'>
			<div className='order-table__header'>
				<select className='admin-select' name="" id="">
					<option>По марке</option>
					<option value="Hyundai">Hyundai</option>
					<option value="Reno">Reno</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>По алфавиту</option>
					<option value="A-я">A-я</option>
					<option value="Я-а">Я-а</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>По цене</option>
					<option value="Премиум">Премиум</option>
					<option value="Эконом">Эконом</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>По статусу</option>
						<option value="Занят">Занят</option>
						<option value="Свободен">Свободен</option>
				</select>
				<div>
					<button className='admin-btn mix'>Reset</button>
					<button className='admin-btn blue'>Apply</button>
				</div>
			</div>
			<div className='order-table__content'>
				<table>
					<thead><tr><th>Модель</th><th>Марка</th><th>Цена от</th><th>Цена до</th><th>Цвета</th><th>Категория</th></tr></thead>
					<tbody>
						<tr>
							<th>Elantra</th><th>Hyundai</th><th>12000</th><th>25000</th><th>3</th><th>Эконом</th>
						</tr>
						<tr>
							<th>i 30N</th><th>Hyundai</th><th>10000</th><th>32000</th><th>2</th><th>Премиум</th>
						</tr>
						<tr>
							<th>Solaris</th><th>Hyundai</th><th>12000</th><th>25000</th><th>5</th><th>Эконом</th>
						</tr>
						<tr>
							<th>Creta</th><th>Hyundai</th><th>10000</th><th>32000</th><th>4</th><th>Премиум</th>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='order-table__footer'>
				{
					pages.map((el) => {
						return(
							<span
								key={el}
								className={activePage === el ? 'active': null}
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

export default Tables
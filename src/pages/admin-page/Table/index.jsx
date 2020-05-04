import React, { useState } from 'react'
import './index.sass'
import { connect } from 'react-redux'
import { changeCar, setCurrentCarsPage } from '../../../redux/admin-page'

const Tables = (props) => {

	// totalCarsCount: 102
	// carsPageSize: 4

	let pagesCount = Math.ceil(props.totalCarsCount / props.carsPageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let [portionNumber, setPortionNumber] = useState(1)
	let portionCount = Math.ceil( pagesCount / 3)
	let leftPortionBorder = (portionNumber - 1) * 3 + 1
	let rightPortionBorder = portionNumber * 3

	const changeCar = (id) => {
		props.changeCar(id)
		props.history.push('/adminpage')
	}
	const returnToStartPage = () => {
		props.setCurrentCarsPage(pages[0])
		setPortionNumber(1)
	}
	const goToEndPage = () => {
		props.setCurrentCarsPage(pages[pages.length - 1])
		setPortionNumber(portionCount)
	}

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
						{
							props.cars.map((el, i)=>{
								return(
									<tr 
										key={i}
										onClick={() => changeCar(el.id)}
									>
										<th>{el.name.slice(8)}</th>
										<th>{el.name.slice(0, 7)}</th>
										<th>{el.priceMin}</th>
										<th>{el.priceMax}</th>
										<th>{el.colors.length}</th>
										<th>{el.categoryId.name}</th>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
			<div className='order-table__footer'>
				{
					portionNumber > 1 &&
					<>
						<span 
							onClick={() => setPortionNumber(portionNumber - 1)} 
							className='pagination'>
							«
						</span>
							<span 
								onClick={returnToStartPage}
							>
								{pages[0]}
							</span>
						<span>...</span>
					</>
				}
				{
					pages
					.filter(el => el >= leftPortionBorder && el <= rightPortionBorder)
					.map((el) => {
						return(
							<span
								key={el}
								onClick={() => props.setCurrentCarsPage(el)}
								className={props.currentCarsPage === el ? 'active' : null}
							>{el}
							</span>
						)
					})
				}
				{
					portionCount > portionNumber &&
						<>
						<span>...</span>
						<span onClick={goToEndPage}>{pages[pages.length - 1]}</span>
						<span 
							onClick={() => setPortionNumber(portionNumber + 1)}  
							className='pagination'>
							»
						</span>
						</>
				}
			</div>
		</div>
		</>
	)
}


const mapStateToProps = (state)=> ({
	cars: state.adminPage.cars,
	currentCarsPage: state.adminPage.currentCarsPage,
	carsPageSize: state.adminPage.carsPageSize,
	totalCarsCount: state.adminPage.totalCarsCount
})


export default connect(mapStateToProps, { changeCar, setCurrentCarsPage })(Tables)
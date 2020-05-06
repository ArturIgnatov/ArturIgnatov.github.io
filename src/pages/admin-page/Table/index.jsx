import React, { useState } from 'react'
import './index.sass'
import { connect } from 'react-redux'
import { changeCar, setCurrentCarsPage } from '../../../redux/admin-page'

const Tables = (props) => {
	// totalCarsCount: 102
	// carsPageSize: 4
	const [category, handlerCategory] = useState('')
	const [colors, handelrColors] = useState('')
	const [mark, handelrMark] = useState('')
	const [applay, handlerApplay] = useState(false)
	// Кнопка Apply
	const applayFilter = () => {
		handlerApplay(true)
	}
	// Конпка сброса фильтров
	const resetFilter = () => {
		handlerCategory('')
		handelrMark('')
		handelrColors('')
		handlerApplay(false)
	}
	// Select категории
	const changeCategorySelect = (e)=> {
		handlerCategory(e.target.value)
	}
	// Select цвета
	const changeColorSelect = (e) => {
		handelrColors(e.target.value)
	}
	// Select марка
	const changeMarkSelect = (e) => {
		handelrMark(e.target.value)
	}
	// Работа с пагинацией
	let pagesCount = Math.ceil(props.totalCarsCount / props.carsPageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	// Создание порций и определение границ количества старниц в пагинации
	let [portionNumber, setPortionNumber] = useState(1)
	let portionCount = Math.ceil( pagesCount / 3)
	let leftPortionBorder = (portionNumber - 1) * 3 + 1
	let rightPortionBorder = portionNumber * 3
	// Вернуться в начало страниц (пагинация)
	const returnToStartPage = () => {
		props.setCurrentCarsPage(pages[0])
		setPortionNumber(1)
	}
	// Вернуться в конец страниц (пагинация)
	const goToEndPage = () => {
		props.setCurrentCarsPage(pages[pages.length - 1])
		setPortionNumber(portionCount)
	}
	// Выбирает машину при клике на нее в таблице и редиректит на страницу редактирвоания авто
	const changeCar = (id) => {
		props.changeCar(id)
		props.history.push('/adminpage')
	}
	// Функция фильтрации по количеству цветов у авто
	const filterColorsLength = (obj)=>{
		if (colors !== '' && applay) {
			if (obj.colors.length == colors) {
				return true
			}
			return false	
		}
		return true
	}
	// Сортировка моделей по алфавиту и наоборот
	const [countModelClick, setCountClick] = useState(1)
	const sortTabelObject = (obj1, obj2) => {
		let model1 = obj1.name.slice(8).toLowerCase()
		let model2 = obj2.name.slice(8).toLowerCase()
		if (countModelClick === 1) {
			setCountClick(2)
			if (model1 < model2) {
				return -1
			}
			if (model1 > model2) {
				return 1
			}
			return 0	
		}
		else if (countModelClick === 2) {
			setCountClick(1)
			if (model1 < model2) {
				return 1
			}
			if (model1 > model2) {
				return -1
			}
			return 0	
		}
	}
	const sortedModel = () => {
		props.cars.sort(sortTabelObject)
	}

	// Сортировка цветов  от меньшего к большему и наоборот
	const [countColorClick, setColorCountClick] = useState(1)
	const sortedColorLength = () => {
		if (countColorClick === 1) {
			setColorCountClick(2)
			props.cars.sort((a, b) => {
				return a.colors.length - b.colors.length
			})	
		}
		else if (countColorClick === 2) {
			setColorCountClick(1)
			props.cars.sort((a, b) => {
				return b.colors.length - a.colors.length
			})
		}
	}
	const [countCategoryClick, setCategoryCountClick] = useState(1)
	const sortedCategory = () => {
		props.cars.sort((a, b) => {
			if (countCategoryClick === 1) {
				setCategoryCountClick(2)
				if (a.categoryId.name < b.categoryId.name) {
					return -1
				}
				if (a.categoryId.name > b.categoryId.name) {
					return 1
				}
				return 0
			}
			else if (countCategoryClick === 2) {
				setCategoryCountClick(1)
				if (a.categoryId.name < b.categoryId.name) {
					return 1
				}
				if (a.categoryId.name > b.categoryId.name) {
					return -1
				}
				return 0
			}
			return 0
		})
	}
	return(
		<>
		<h2>Список авто</h2>
		<div className='order-table'>
			<div className='order-table__header'>
				<select 
					className='admin-select'
					value={mark}
					onChange={changeMarkSelect}
				>
					<option value=''>По марке</option>
					<option value="Hyundai">Hyundai</option>
					<option value="Reno">Reno</option>
				</select>
				<select
					onChange={changeColorSelect}
					value={colors} 
					className='admin-select'
				>
					<option value=''>Кол-во цветов</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
				<select 
					onChange={changeCategorySelect} 
					value={category}  
					className='admin-select'
				>
					<option value=''>По категории</option>
					<option value="Премиум">Премиум</option>
					<option value="Эконом">Эконом</option>
				</select>
				<select className='admin-select' name="" id="">
					<option>Нет фильтра</option>
				</select>
				<div>
					<button onClick={resetFilter} className='admin-btn mix'>Reset</button>
					<button onClick={applayFilter} className='admin-btn blue'>Apply</button>
				</div>
			</div>
			<div className='order-table__content'>
				<table>
					<thead>
						<tr>
							<th onClick={sortedModel}>Модель</th>
							<th>Марка</th>
							<th>Цена от</th>
							<th>Цена до</th>
							<th onClick={sortedColorLength} >Цвета</th>
							<th onClick={sortedCategory}>Категория</th>
						</tr>
					</thead>
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
import React, { useState } from 'react'
import './index.sass'
import { connect } from 'react-redux'
import { changeCar, setCurrentCarsPage } from '../../../redux/admin-page'
import Option from '../Orders/Option'
import OptionMark from './OptionMark'
import RowCar from './RowCar'
import Pagination from './Pagination'

const Tables = (props) => {
	// totalCarsCount: 102
	// carsPageSize: 4
	const [category, handlerCategory] = useState('')
	const [colors, handelrColors] = useState('')
	const [mark, handelrMark] = useState('')
	// Кнопка Apply
	const applayFilter = () => {
		
	}
	// Конпка сброса фильтров
	const resetFilter = () => {
		handlerCategory('')
		handelrMark('')
		handelrColors('')
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

	const changeCar = (id) => {
		props.changeCar(id)
		props.history.push('/adminpage')
	}
	// Сортировка моделей по алфавиту и наоборот
	const [countModelClick, setCountClick] = useState(1)
	const sortTabelObject = (obj1, obj2) => {
		if (countModelClick === 1) {
			setCountClick(2)
			// 
		}
		else if (countModelClick === 2) {
			setCountClick(1)
			// 
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
		}
		else if (countColorClick === 2) {
			setColorCountClick(1)
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
	
	let marksArray = Array.from(new Set(props.cars.map(el => el.name.match(/^[^,]*/)[0])))

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
					{
						marksArray.map( (el,i) => <OptionMark key={i} name={el}/> )
					}
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
							props.cars.map((el, i) => 
								<RowCar 
									key={i} 
									changeCar={changeCar} 
									{...el}
								/>)
						}
					</tbody>
				</table>
			</div>
			<div className='order-table__footer'>
				<Pagination
					pages={pages}
					pagesCount={pagesCount}
					setCurrentCarsPage={props.setCurrentCarsPage}
					currentCarsPage={props.currentCarsPage}
				/>
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
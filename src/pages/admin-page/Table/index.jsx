import React, { useState } from 'react'
import './index.sass'
import { connect } from 'react-redux'
import { changeCar, setCurrentCarsPage, loadCars } from '../../../redux/admin-page'
import OptionMark from './OptionMark'
import RowCar from './RowCar'
import Pagination from './Pagination'
import { useEffect } from 'react'
import OptionCategory from './OptionCategory'

const Tables = (props) => {
	const [category, handlerCategory] = useState('')
	const [colors, handelrColors] = useState('')
	const [mark, handelrMark] = useState('')
	const [sort, setSort] = useState(undefined)
	let { currentCarsPage, carsPageSize } = props
	
	// Кнопка Apply
	useEffect(()=>{
		props.loadCars(currentCarsPage, carsPageSize, sort, category)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentCarsPage])

	const applayFilter = () => {
		props.loadCars(currentCarsPage, carsPageSize, sort, category)
	}
	// Конпка сброса фильтров
	const resetFilter = () => {
		handlerCategory('')
		handelrMark('')
		handelrColors('')
		setSort(undefined)
		props.loadCars(currentCarsPage, carsPageSize, undefined, '')
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
	const sortByModel = () => {
		if (countModelClick === 1) {
			setCountClick(2)
			setSort({ field: 'name', value: 1 })
			props.loadCars(currentCarsPage, carsPageSize, { field: 'name', value: 1 }, category)
		}
		else if (countModelClick === 2){
			setCountClick(1)
			setSort({ field: 'name', value: -1 })
			props.loadCars(currentCarsPage, carsPageSize, { field: 'name', value: -1 }, category)
		}
	}
	// Сортировка поля категория
	const [countCategoryClick, setCategoryCountClick] = useState(1)
	const sortedCategory = () => {
		if (countCategoryClick === 1) {
			setCategoryCountClick(2)
			setSort({ field: 'categoryId', value: -1 })
			props.loadCars(currentCarsPage, carsPageSize, { field: 'categoryId', value: -1 }, category)
		}
		else if (countCategoryClick === 2) {
			setCategoryCountClick(1)
			setSort({ field: 'categoryId', value: 1 })
			props.loadCars(currentCarsPage, carsPageSize, { field: 'categoryId', value: 1 }, category)
		}
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
					{
						props.category.map((el,i) => <OptionCategory key={i} {...el}/>)
					}
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
							<th onClick={sortByModel}>Модель</th>
							<th onClick={sortByModel}>Марка</th>
							<th>Цена от</th>
							<th>Цена до</th>
							<th>Цвета</th>
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
					setPage={props.setCurrentCarsPage}
					currentPage={props.currentCarsPage}
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
	totalCarsCount: state.adminPage.totalCarsCount,
	category: state.adminPage.category
})


export default connect(mapStateToProps, { changeCar, setCurrentCarsPage, loadCars })(Tables)
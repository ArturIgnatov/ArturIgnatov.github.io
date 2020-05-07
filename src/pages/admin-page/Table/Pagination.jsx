import React from 'react'
import { useState } from 'react'
import Page from './Page'

const Pagination = ({ pages, pagesCount, currentCarsPage, setCurrentCarsPage}) => {

	// Создание порций и определение границ количества старниц в пагинации
	let [portionNumber, setPortionNumber] = useState(1)

	let portionCount = Math.ceil(pagesCount / 3)
	let leftPortionBorder = (portionNumber - 1) * 3 + 1
	let rightPortionBorder = portionNumber * 3
	// Вернуться в начало страниц (пагинация)
	const returnToStartPage = () => {
		setCurrentCarsPage(pages[0])
		setPortionNumber(1)
	}
	// Вернуться в конец страниц (пагинация)
	const goToEndPage = () => {
		setCurrentCarsPage(pages[pages.length - 1])
		setPortionNumber(portionCount)
	}

	return (
		<>
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
					.map( el => 
						<Page 
							key={el} 
							el={el} 
							setCurrentCarsPage={setCurrentCarsPage} 
							currentCarsPage={currentCarsPage} 
						/>
					)
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
		</>
	)
}

export default Pagination
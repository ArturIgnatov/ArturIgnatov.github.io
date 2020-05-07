import React from 'react'

const Page = ({ el, setCurrentCarsPage, currentCarsPage }) => {
	return(
		<span
			key={el}
			onClick={() => setCurrentCarsPage(el)}
			className={currentCarsPage === el ? 'active' : null}
		>{el}
		</span>
	)
}
export default Page